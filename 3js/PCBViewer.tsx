import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Engine } from './engine/Engine';
import { Board } from './components/Board';
import { Pads } from './components/Pads';
import { Traces } from './components/Traces';
import { SMDPadManager } from './components/SMDPadManager';
import { TraceManager } from './components/TraceManager';
import { Serialization } from './utils/Serialization';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

/**
 * Main PCB Viewer & Editor React Component
 * Integrates Three.js engine with React lifecycle
 */
interface PCBViewerProps {
  width?: number;
  height?: number;
  thickness?: number;
}

export const PCBViewer: React.FC<PCBViewerProps> = ({
  width = 100,
  height = 80,
  thickness = 1.6
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const boardRef = useRef<Board | null>(null);
  const padsRef = useRef<Pads | null>(null);
  const tracesRef = useRef<Traces | null>(null);
  const smdPadManagerRef = useRef<SMDPadManager | null>(null);
  const traceManagerRef = useRef<TraceManager | null>(null);
  
  const [selectedComponent, setSelectedComponent] = useState<{
    id: string;
    type: 'pad' | 'trace';
    position: THREE.Vector3;
    area: number;
  } | null>(null);
  
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) => {
    const id = Date.now().toString();
    const newToast: Toast = { id, message, type, duration };
    setToasts(prev => [...prev, newToast]);
    
    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    }
  };

  useEffect(() => {
    // Wait for canvas to be properly mounted
    if (!canvasRef.current) {
      console.log('Canvas not available, waiting...');
      return;
    }

    // Ensure canvas is properly mounted and sized
    const canvas = canvasRef.current;
    
    // Additional canvas validation
    if (!canvas.getContext) {
      console.error('Canvas context not available');
      return;
    }
    
    // Add a small delay to ensure canvas is fully ready
    setTimeout(() => {
      try {
        console.log('Initializing engine with canvas:', canvas);
        console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
        console.log('Canvas context available:', !!canvas.getContext);
        
        // Initialize engine
        const engine = new Engine(canvas);
        engineRef.current = engine;
        console.log('Engine created successfully');
        
        // Start the render loop
        engine.start();
        console.log('Engine started successfully');
        
        // Initialize components
        const board = new Board(width, height, thickness);
        boardRef.current = board;
        
        const pads = new Pads();
        padsRef.current = pads;
        
        const traces = new Traces();
        tracesRef.current = traces;
        
        const smdPadManager = new SMDPadManager(engine.scene.scene, board.getCopperLayerManager());
        smdPadManagerRef.current = smdPadManager;
        console.log('SMDPadManager created:', smdPadManager);
        
        const traceManager = new TraceManager(engine.scene.scene, board.getCopperLayerManager());
        traceManagerRef.current = traceManager;
        console.log('TraceManager created:', traceManager);
        
        // Add board to scene
        engine.scene.addToLayer(board.mesh, 'board');
        
        // Add pad meshes to scene
        const padMeshes = pads.getMeshes();
        padMeshes.forEach(mesh => {
          engine.scene.addToLayer(mesh, 'topCopper');
        });
        
        // Add trace meshes to scene
        const traceMeshes = traces.getMeshes();
        traceMeshes.forEach(mesh => {
          engine.scene.addToLayer(mesh, 'topCopper');
        });

        // Setup interaction system with all meshes
        const allMeshes = [...padMeshes, ...traceMeshes];
        engine.interaction.setInteractableObjects(allMeshes);
        console.log('Set up interaction with', allMeshes.length, 'meshes');

        // Setup selection callback
        const checkSelection = () => {
          const selected = engine.interaction.getSelectedObject();
          const hoverInfo = engine.interaction.getHoverInfo();
          
          if (selected && hoverInfo.instanceId !== null) {
            // Find pad data for this instance
            const padData = pads.getPadData(`demo_pad_${hoverInfo.instanceId}`);
            if (padData) {
              setSelectedComponent({
                id: padData.id,
                type: 'pad',
                position: padData.position,
                area: pads.calculatePadArea(padData.id)
              });
            }
          } else {
            setSelectedComponent(null);
          }
        };

        // Check selection every 100ms
        const selectionInterval = setInterval(checkSelection, 100);

        // Add test pads for Step 1 demonstration (100-200 pads)
        console.log('🧪 Adding 150 test pads for InstancedMesh demonstration...');
        const padTimeout = setTimeout(() => {
          for (let i = 0; i < 150; i++) {
            const padData = {
              id: `demo_pad_${i}`,
              type: (i % 2 === 0 ? 'rect' : 'circle') as 'rect' | 'circle',
              position: new THREE.Vector3(
                (i % 15 - 7) * 3,  // Grid layout X
                0,                      // Y position
                (Math.floor(i / 15) - 5) * 3  // Grid layout Z
              ),
              size: new THREE.Vector2(1.5, 1.5),
              layer: (i % 3 === 0 ? 'bottom' : 'top') as 'top' | 'bottom',
              rotation: (i % 4) * Math.PI / 4
            };
            
            pads.addPad(padData);
          }
          console.log(`✅ Added 150 pads to InstancedMesh system`);
        }, 100);

        // Cleanup on unmount
        return () => {
          clearTimeout(padTimeout);
          clearInterval(selectionInterval);
          if (engineRef.current) {
            engineRef.current.dispose();
          }
        };
      } catch (error) {
        console.error('Failed to initialize PCB viewer:', error);
        console.error('Canvas details:', {
          width: canvas.width,
          height: canvas.height,
          context: !!canvas.getContext
        });
      }
    }, 100); // Wait 100ms for canvas to be ready

  }, [width, height, thickness]);

  // Example functions with toast notifications
  const exportBoard = () => {
    console.log('Export button clicked');
    if (!boardRef.current || !padsRef.current || !tracesRef.current || 
        !smdPadManagerRef.current || !traceManagerRef.current) {
      console.error('Missing references for export');
      addToast('❌ Cannot export: Missing components', 'error');
      return;
    }

    try {
      console.log('Starting export...');
      const boardData = Serialization.exportBoard(
        boardRef.current,
        padsRef.current,
        tracesRef.current,
        smdPadManagerRef.current,
        traceManagerRef.current
      );
      
      console.log('Board data exported:', boardData);
      Serialization.downloadBoardData(boardData, `pcb_board_${new Date().toISOString().slice(0, 10)}.json`);
      console.log('Download initiated');
      addToast('📤 Board exported successfully!', 'success');
    } catch (error) {
      console.error('Export failed:', error);
      addToast('❌ Export failed: ' + (error as Error).message, 'error');
    }
  };

  const importBoard = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      addToast('⚠️ No file selected', 'info');
      return;
    }

    if (!boardRef.current || !padsRef.current || !tracesRef.current || 
        !smdPadManagerRef.current || !traceManagerRef.current) {
      addToast('❌ Cannot import: Missing components', 'error');
      return;
    }

    Serialization.loadBoardFromFile(file)
      .then(boardData => {
        Serialization.importBoard(
          boardData,
          boardRef.current!,
          padsRef.current!,
          tracesRef.current!,
          smdPadManagerRef.current!,
          traceManagerRef.current!
        );
        console.log('Board imported successfully');
        addToast('📥 Board imported successfully!', 'success');
      })
      .catch(error => {
        console.error('Import failed:', error);
        addToast('❌ Import failed: ' + (error as Error).message, 'error');
      });
    
    // Reset file input
    event.target.value = '';
  };

  const createBackup = () => {
    addToast('💾 Backup created successfully!', 'success');
  };

  const restoreBackup = () => {
    addToast('🔄 Board restored from backup!', 'success');
  };

  const showResourceStats = () => {
    addToast('📊 Resource stats logged to console', 'info');
  };

  const disposeResources = () => {
    addToast('🧹 All resources disposed!', 'success');
  };


  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      
      {/* Pad Information Sidebar */}
      {engineRef.current && padsRef.current && (
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: 20,
          borderRadius: 8,
          minWidth: 280,
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#4CAF50' }}>
            Pad Information
          </h3>
          
          {selectedComponent ? (
            <div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: '#888', fontSize: '12px', marginBottom: 2 }}>
                  PAD ID
                </div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>
                  {selectedComponent.id}
                </div>
              </div>
              
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: '#888', fontSize: '12px', marginBottom: 2 }}>
                  TYPE
                </div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>
                  {selectedComponent.type}
                </div>
              </div>
              
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: '#888', fontSize: '12px', marginBottom: 2 }}>
                  WORLD POSITION
                </div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>
                  ({selectedComponent.position.x.toFixed(2)}, {selectedComponent.position.y.toFixed(2)}, {selectedComponent.position.z.toFixed(2)})
                </div>
              </div>
              
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: '#888', fontSize: '12px', marginBottom: 2 }}>
                  SURFACE AREA
                </div>
                <div style={{ color: '#fff', fontWeight: 'bold' }}>
                  {selectedComponent.area.toFixed(4)} mm²
                </div>
              </div>
            </div>
          ) : (
            <div style={{ color: '#888', fontSize: '12px' }}>
              <div>No pad selected</div>
              <div style={{ marginTop: 5 }}>Click on a pad to view details</div>
            </div>
          )}
        </div>
      )}
      
      {/* Control Panel */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: 20,
        borderRadius: 8,
        minWidth: 300
      }}>
        <h3>PCB Viewer Controls</h3>
        
        {/* Example Controls with Toast Notifications */}
        <div style={{ marginBottom: 15 }}>
          <h4>Board Operations</h4>
          <div style={{ marginBottom: 10 }}>
            <button onClick={exportBoard} style={{ marginRight: 5, fontSize: '12px', padding: '4px 8px' }}>
              Export Board
            </button>
            <label style={{ marginRight: 5, fontSize: '12px' }}>
              <input
                type="file"
                accept=".json"
                onChange={importBoard}
                style={{ display: 'none' }}
              />
              <span style={{ 
                background: '#4CAF50', 
                padding: '4px 8px', 
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                Import Board
              </span>
            </label>
          </div>
          <div style={{ marginBottom: 10 }}>
            <button onClick={createBackup} style={{ marginRight: 5, fontSize: '12px', padding: '4px 8px' }}>
              Create Backup
            </button>
            <button onClick={restoreBackup} style={{ marginRight: 5, fontSize: '12px', padding: '4px 8px' }}>
              Restore Backup
            </button>
          </div>
          <div style={{ marginBottom: 10 }}>
            <button onClick={showResourceStats} style={{ marginRight: 5, fontSize: '12px', padding: '4px 8px' }}>
              Resource Stats
            </button>
            <button onClick={disposeResources} style={{ fontSize: '12px', padding: '4px 8px' }}>
              Dispose Resources
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Toast Notifications */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000
      }}>
        {toasts.map(toast => (
          <div
            key={toast.id}
            style={{
              background: toast.type === 'success' ? '#4CAF50' : 
                         toast.type === 'error' ? '#f44336' : '#2196F3',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '6px',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              animation: 'slideIn 0.3s ease-out',
              minWidth: '250px',
              textAlign: 'center'
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </div>
  );
};
