var Dv=Object.defineProperty;var Uv=(n,e,t)=>e in n?Dv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oe=(n,e,t)=>Uv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Nv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Om={exports:{}},Xl={},Fm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),Fv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),kv=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Gv=Symbol.for("react.forward_ref"),Vv=Symbol.for("react.suspense"),Wv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Nh=Symbol.iterator;function jv(n){return n===null||typeof n!="object"?null:(n=Nh&&n[Nh]||n["@@iterator"],typeof n=="function"?n:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},km=Object.assign,Bm={};function Xs(n,e,t){this.props=n,this.context=e,this.refs=Bm,this.updater=t||zm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Hm(){}Hm.prototype=Xs.prototype;function Pd(n,e,t){this.props=n,this.context=e,this.refs=Bm,this.updater=t||zm}var Rd=Pd.prototype=new Hm;Rd.constructor=Pd;km(Rd,Xs.prototype);Rd.isPureReactComponent=!0;var Oh=Array.isArray,Gm=Object.prototype.hasOwnProperty,bd={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,i)&&!Vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:n,key:s,ref:o,props:r,_owner:bd.current}}function Yv(n,e){return{$$typeof:ea,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ld(n){return typeof n=="object"&&n!==null&&n.$$typeof===ea}function qv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fh=/\/+/g;function mc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qv(""+n.key):e.toString(36)}function el(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ea:case Ov:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+mc(o,0):i,Oh(r)?(t="",n!=null&&(t=n.replace(Fh,"$&/")+"/"),el(r,e,t,"",function(c){return c})):r!=null&&(Ld(r)&&(r=Yv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Oh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+mc(s,a);o+=el(s,e,t,l,r)}else if(l=jv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+mc(s,a++),o+=el(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(n,e,t){if(n==null)return n;var i=[],r=0;return el(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Zv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},tl={transition:null},$v={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:tl,ReactCurrentOwner:bd};function Xm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:la,forEach:function(n,e,t){la(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return la(n,function(){e++}),e},toArray:function(n){return la(n,function(e){return e})||[]},only:function(n){if(!Ld(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=Xs;je.Fragment=Fv;je.Profiler=kv;je.PureComponent=Pd;je.StrictMode=zv;je.Suspense=Vv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;je.act=Xm;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=km({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Gm.call(e,l)&&!Vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ea,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:Hv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Bv,_context:n},n.Consumer=n};je.createElement=Wm;je.createFactory=function(n){var e=Wm.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:Gv,render:n}};je.isValidElement=Ld;je.lazy=function(n){return{$$typeof:Xv,_payload:{_status:-1,_result:n},_init:Zv}};je.memo=function(n,e){return{$$typeof:Wv,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=tl.transition;tl.transition={};try{n()}finally{tl.transition=e}};je.unstable_act=Xm;je.useCallback=function(n,e){return un.current.useCallback(n,e)};je.useContext=function(n){return un.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return un.current.useDeferredValue(n)};je.useEffect=function(n,e){return un.current.useEffect(n,e)};je.useId=function(){return un.current.useId()};je.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return un.current.useMemo(n,e)};je.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};je.useRef=function(n){return un.current.useRef(n)};je.useState=function(n){return un.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return un.current.useTransition()};je.version="18.3.1";Fm.exports=je;var En=Fm.exports;const Kv=Nv(En);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=En,Jv=Symbol.for("react.element"),e_=Symbol.for("react.fragment"),t_=Object.prototype.hasOwnProperty,n_=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i_={key:!0,ref:!0,__self:!0,__source:!0};function jm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)t_.call(e,i)&&!i_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jv,type:n,key:s,ref:o,props:r,_owner:n_.current}}Xl.Fragment=e_;Xl.jsx=jm;Xl.jsxs=jm;Om.exports=Xl;var Ve=Om.exports,Su={},Ym={exports:{}},Rn={},qm={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,F){var k=N.length;N.push(F);e:for(;0<k;){var D=k-1>>>1,z=N[D];if(0<r(z,F))N[D]=F,N[k]=z,k=D;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],k=N.pop();if(k!==F){N[0]=k;e:for(var D=0,z=N.length,he=z>>>1;D<he;){var de=2*(D+1)-1,me=N[de],Se=de+1,Ne=N[Se];if(0>r(me,k))Se<z&&0>r(Ne,me)?(N[D]=Ne,N[Se]=k,D=Se):(N[D]=me,N[de]=k,D=de);else if(Se<z&&0>r(Ne,k))N[D]=Ne,N[Se]=k,D=Se;else break e}}return F}function r(N,F){var k=N.sortIndex-F.sortIndex;return k!==0?k:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,v=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var F=t(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(c)}}function x(N){if(y=!1,p(N),!_)if(t(l)!==null)_=!0,Z(S);else{var F=t(c);F!==null&&Y(x,F.startTime-N)}}function S(N,F){_=!1,y&&(y=!1,u(b),b=-1),v=!0;var k=h;try{for(p(F),f=t(l);f!==null&&(!(f.expirationTime>F)||N&&!G());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var z=D(f.expirationTime<=F);F=n.unstable_now(),typeof z=="function"?f.callback=z:f===t(l)&&i(l),p(F)}else i(l);f=t(l)}if(f!==null)var he=!0;else{var de=t(c);de!==null&&Y(x,de.startTime-F),he=!1}return he}finally{f=null,h=k,v=!1}}var A=!1,w=null,b=-1,M=5,T=-1;function G(){return!(n.unstable_now()-T<M)}function X(){if(w!==null){var N=n.unstable_now();T=N;var F=!0;try{F=w(!0,N)}finally{F?K():(A=!1,w=null)}}else A=!1}var K;if(typeof m=="function")K=function(){m(X)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=X,K=function(){B.postMessage(null)}}else K=function(){g(X,0)};function Z(N){w=N,A||(A=!0,K())}function Y(N,F){b=g(function(){N(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||v||(_=!0,Z(S))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var k=h;h=F;try{return N()}finally{h=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return F()}finally{h=k}},n.unstable_scheduleCallback=function(N,F,k){var D=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?D+k:D):k=D,N){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=k+z,N={id:d++,callback:F,priorityLevel:N,startTime:k,expirationTime:z,sortIndex:-1},k>D?(N.sortIndex=k,e(c,N),t(l)===null&&N===t(c)&&(y?(u(b),b=-1):y=!0,Y(x,k-D))):(N.sortIndex=z,e(l,N),_||v||(_=!0,Z(S))),N},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(N){var F=h;return function(){var k=h;h=F;try{return N.apply(this,arguments)}finally{h=k}}}})(Zm);qm.exports=Zm;var r_=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_=En,Pn=r_;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $m=new Set,Uo={};function kr(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(Uo[n]=e,n=0;n<e.length;n++)$m.add(e[n])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,o_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},kh={};function a_(n){return Eu.call(kh,n)?!0:Eu.call(zh,n)?!1:o_.test(n)?kh[n]=!0:(zh[n]=!0,!1)}function l_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function c_(n,e,t,i){if(e===null||typeof e>"u"||l_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Dd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Id,Dd);Gt[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Id,Dd);Gt[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Id,Dd);Gt[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ud(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c_(e,t,r,i)&&(t=null),i||r===null?a_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ri=s_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),us=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Qs(n){return n===null||typeof n!="object"?null:(n=Bh&&n[Bh]||n["@@iterator"],typeof n=="function"?n:null)}var mt=Object.assign,gc;function vo(n){if(gc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+n}var vc=!1;function _c(n,e){if(!n||vc)return"";vc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{vc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?vo(n):""}function u_(n){switch(n.tag){case 5:return vo(n.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return n=_c(n.type,!1),n;case 11:return n=_c(n.type.render,!1),n;case 1:return n=_c(n.type,!0),n;default:return""}}function Cu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ds:return"Fragment";case us:return"Portal";case wu:return"Profiler";case Nd:return"StrictMode";case Tu:return"Suspense";case Au:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Qm:return(n.displayName||"Context")+".Consumer";case Km:return(n._context.displayName||"Context")+".Provider";case Od:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Fd:return e=n.displayName||null,e!==null?e:Cu(n.type)||"Memo";case zi:e=n._payload,n=n._init;try{return Cu(n(e))}catch{}}return null}function d_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function eg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h_(n){var e=eg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ua(n){n._valueTracker||(n._valueTracker=h_(n))}function tg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=eg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ml(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pu(n,e){var t=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ng(n,e){e=e.checked,e!=null&&Ud(n,"checked",e,!1)}function Ru(n,e){ng(n,e);var t=rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?bu(n,e.type,t):e.hasOwnProperty("defaultValue")&&bu(n,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Gh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function bu(n,e,t){(e!=="number"||ml(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var _o=Array.isArray;function ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(_o(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:rr(t)}}function ig(n,e){var t=rr(e.value),i=rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Wh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function rg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?rg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var da,sg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function No(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f_=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(n){f_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wo[e]=wo[n]})});function og(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wo.hasOwnProperty(n)&&wo[n]?(""+e).trim():e+"px"}function ag(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=og(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var p_=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(n,e){if(e){if(p_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Uu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function zd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ou=null,Ts=null,As=null;function Xh(n){if(n=ia(n)){if(typeof Ou!="function")throw Error(te(280));var e=n.stateNode;e&&(e=$l(e),Ou(n.stateNode,n.type,e))}}function lg(n){Ts?As?As.push(n):As=[n]:Ts=n}function cg(){if(Ts){var n=Ts,e=As;if(As=Ts=null,Xh(n),e)for(n=0;n<e.length;n++)Xh(e[n])}}function ug(n,e){return n(e)}function dg(){}var yc=!1;function hg(n,e,t){if(yc)return n(e,t);yc=!0;try{return ug(n,e,t)}finally{yc=!1,(Ts!==null||As!==null)&&(dg(),cg())}}function Oo(n,e){var t=n.stateNode;if(t===null)return null;var i=$l(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Fu=!1;if(wi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Fu=!1}function m_(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var To=!1,gl=null,vl=!1,zu=null,g_={onError:function(n){To=!0,gl=n}};function v_(n,e,t,i,r,s,o,a,l){To=!1,gl=null,m_.apply(g_,arguments)}function __(n,e,t,i,r,s,o,a,l){if(v_.apply(this,arguments),To){if(To){var c=gl;To=!1,gl=null}else throw Error(te(198));vl||(vl=!0,zu=c)}}function Br(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function jh(n){if(Br(n)!==n)throw Error(te(188))}function y_(n){var e=n.alternate;if(!e){if(e=Br(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return jh(r),n;if(s===i)return jh(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function pg(n){return n=y_(n),n!==null?mg(n):null}function mg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=mg(n);if(e!==null)return e;n=n.sibling}return null}var gg=Pn.unstable_scheduleCallback,Yh=Pn.unstable_cancelCallback,x_=Pn.unstable_shouldYield,M_=Pn.unstable_requestPaint,yt=Pn.unstable_now,S_=Pn.unstable_getCurrentPriorityLevel,kd=Pn.unstable_ImmediatePriority,vg=Pn.unstable_UserBlockingPriority,_l=Pn.unstable_NormalPriority,E_=Pn.unstable_LowPriority,_g=Pn.unstable_IdlePriority,jl=null,li=null;function w_(n){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:C_,T_=Math.log,A_=Math.LN2;function C_(n){return n>>>=0,n===0?32:31-(T_(n)/A_|0)|0}var ha=64,fa=4194304;function yo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=t&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jn(e),r=1<<t,i|=n[t],e&=~r;return i}function P_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=P_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ku(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yg(){var n=ha;return ha<<=1,!(ha&4194240)&&(ha=64),n}function xc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jn(e),n[e]=t}function b_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Qe=0;function xg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Mg,Hd,Sg,Eg,wg,Bu=!1,pa=[],Yi=null,qi=null,Zi=null,Fo=new Map,zo=new Map,Hi=[],L_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(n,e){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function eo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&Hd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function I_(n,e,t,i,r){switch(e){case"focusin":return Yi=eo(Yi,n,e,t,i,r),!0;case"dragenter":return qi=eo(qi,n,e,t,i,r),!0;case"mouseover":return Zi=eo(Zi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,eo(Fo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,eo(zo.get(s)||null,n,e,t,i,r)),!0}return!1}function Tg(n){var e=Tr(n.target);if(e!==null){var t=Br(e);if(t!==null){if(e=t.tag,e===13){if(e=fg(t),e!==null){n.blockedOn=e,wg(n.priority,function(){Sg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Hu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Nu=i,t.target.dispatchEvent(i),Nu=null}else return e=ia(t),e!==null&&Hd(e),n.blockedOn=t,!1;e.shift()}return!0}function Zh(n,e,t){nl(n)&&t.delete(e)}function D_(){Bu=!1,Yi!==null&&nl(Yi)&&(Yi=null),qi!==null&&nl(qi)&&(qi=null),Zi!==null&&nl(Zi)&&(Zi=null),Fo.forEach(Zh),zo.forEach(Zh)}function to(n,e){n.blockedOn===e&&(n.blockedOn=null,Bu||(Bu=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,D_)))}function ko(n){function e(r){return to(r,n)}if(0<pa.length){to(pa[0],n);for(var t=1;t<pa.length;t++){var i=pa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Yi!==null&&to(Yi,n),qi!==null&&to(qi,n),Zi!==null&&to(Zi,n),Fo.forEach(e),zo.forEach(e),t=0;t<Hi.length;t++)i=Hi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Hi.length&&(t=Hi[0],t.blockedOn===null);)Tg(t),t.blockedOn===null&&Hi.shift()}var Cs=Ri.ReactCurrentBatchConfig,xl=!0;function U_(n,e,t,i){var r=Qe,s=Cs.transition;Cs.transition=null;try{Qe=1,Gd(n,e,t,i)}finally{Qe=r,Cs.transition=s}}function N_(n,e,t,i){var r=Qe,s=Cs.transition;Cs.transition=null;try{Qe=4,Gd(n,e,t,i)}finally{Qe=r,Cs.transition=s}}function Gd(n,e,t,i){if(xl){var r=Hu(n,e,t,i);if(r===null)bc(n,e,i,Ml,t),qh(n,i);else if(I_(r,n,e,t,i))i.stopPropagation();else if(qh(n,i),e&4&&-1<L_.indexOf(n)){for(;r!==null;){var s=ia(r);if(s!==null&&Mg(s),s=Hu(n,e,t,i),s===null&&bc(n,e,i,Ml,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(n,e,i,null,t)}}var Ml=null;function Hu(n,e,t,i){if(Ml=null,n=zd(i),n=Tr(n),n!==null)if(e=Br(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ml=n,null}function Ag(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S_()){case kd:return 1;case vg:return 4;case _l:case E_:return 16;case _g:return 536870912;default:return 16}default:return 16}}var Vi=null,Vd=null,il=null;function Cg(){if(il)return il;var n,e=Vd,t=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return il=r.slice(n,1<i?1-i:void 0)}function rl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ma(){return!0}function $h(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:$h,this.isPropagationStopped=$h,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=bn(js),na=mt({},js,{view:0,detail:0}),O_=bn(na),Mc,Sc,no,Yl=mt({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==no&&(no&&n.type==="mousemove"?(Mc=n.screenX-no.screenX,Sc=n.screenY-no.screenY):Sc=Mc=0,no=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Kh=bn(Yl),F_=mt({},Yl,{dataTransfer:0}),z_=bn(F_),k_=mt({},na,{relatedTarget:0}),Ec=bn(k_),B_=mt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=bn(B_),G_=mt({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V_=bn(G_),W_=mt({},js,{data:0}),Qh=bn(W_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Y_[n])?!!e[n]:!1}function Xd(){return q_}var Z_=mt({},na,{key:function(n){if(n.key){var e=X_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$_=bn(Z_),K_=mt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=bn(K_),Q_=mt({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),J_=bn(Q_),ey=mt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=bn(ey),ny=mt({},Yl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=bn(ny),ry=[9,13,27,32],jd=wi&&"CompositionEvent"in window,Ao=null;wi&&"documentMode"in document&&(Ao=document.documentMode);var sy=wi&&"TextEvent"in window&&!Ao,Pg=wi&&(!jd||Ao&&8<Ao&&11>=Ao),ef=" ",tf=!1;function Rg(n,e){switch(n){case"keyup":return ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function oy(n,e){switch(n){case"compositionend":return bg(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return n=e.data,n===ef&&tf?null:n;default:return null}}function ay(n,e){if(hs)return n==="compositionend"||!jd&&Rg(n,e)?(n=Cg(),il=Vd=Vi=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ly[n.type]:e==="textarea"}function Lg(n,e,t,i){lg(i),e=Sl(e,"onChange"),0<e.length&&(t=new Wd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Co=null,Bo=null;function cy(n){Gg(n,0)}function ql(n){var e=ms(n);if(tg(e))return n}function uy(n,e){if(n==="change")return e}var Ig=!1;if(wi){var wc;if(wi){var Tc="oninput"in document;if(!Tc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),Tc=typeof rf.oninput=="function"}wc=Tc}else wc=!1;Ig=wc&&(!document.documentMode||9<document.documentMode)}function sf(){Co&&(Co.detachEvent("onpropertychange",Dg),Bo=Co=null)}function Dg(n){if(n.propertyName==="value"&&ql(Bo)){var e=[];Lg(e,Bo,n,zd(n)),hg(cy,e)}}function dy(n,e,t){n==="focusin"?(sf(),Co=e,Bo=t,Co.attachEvent("onpropertychange",Dg)):n==="focusout"&&sf()}function hy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(Bo)}function fy(n,e){if(n==="click")return ql(e)}function py(n,e){if(n==="input"||n==="change")return ql(e)}function my(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ti=typeof Object.is=="function"?Object.is:my;function Ho(n,e){if(ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Eu.call(e,r)||!ti(n[r],e[r]))return!1}return!0}function of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function af(n,e){var t=of(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=of(t)}}function Ug(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ug(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var n=window,e=ml();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ml(n.document)}return e}function Yd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gy(n){var e=Ng(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ug(t.ownerDocument.documentElement,t)){if(i!==null&&Yd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=af(t,s);var o=af(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vy=wi&&"documentMode"in document&&11>=document.documentMode,fs=null,Gu=null,Po=null,Vu=!1;function lf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vu||fs==null||fs!==ml(i)||(i=fs,"selectionStart"in i&&Yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&Ho(Po,i)||(Po=i,i=Sl(Gu,"onSelect"),0<i.length&&(e=new Wd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fs)))}function ga(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ps={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Ac={},Og={};wi&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Zl(n){if(Ac[n])return Ac[n];if(!ps[n])return n;var e=ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Og)return Ac[n]=e[t];return n}var Fg=Zl("animationend"),zg=Zl("animationiteration"),kg=Zl("animationstart"),Bg=Zl("transitionend"),Hg=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,e){Hg.set(n,e),kr(e,[n])}for(var Cc=0;Cc<cf.length;Cc++){var Pc=cf[Cc],_y=Pc.toLowerCase(),yy=Pc[0].toUpperCase()+Pc.slice(1);ar(_y,"on"+yy)}ar(Fg,"onAnimationEnd");ar(zg,"onAnimationIteration");ar(kg,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Bg,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function uf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,__(i,e,void 0,n),n.currentTarget=null}function Gg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;uf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;uf(r,a,c),s=l}}}if(vl)throw n=zu,vl=!1,zu=null,n}function rt(n,e){var t=e[qu];t===void 0&&(t=e[qu]=new Set);var i=n+"__bubble";t.has(i)||(Vg(e,n,2,!1),t.add(i))}function Rc(n,e,t){var i=0;e&&(i|=4),Vg(t,n,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[va]){n[va]=!0,$m.forEach(function(t){t!=="selectionchange"&&(xy.has(t)||Rc(t,!1,n),Rc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[va]||(e[va]=!0,Rc("selectionchange",!1,e))}}function Vg(n,e,t,i){switch(Ag(e)){case 1:var r=U_;break;case 4:r=N_;break;default:r=Gd}t=r.bind(null,e,t,n),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function bc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hg(function(){var c=s,d=zd(t),f=[];e:{var h=Hg.get(n);if(h!==void 0){var v=Wd,_=n;switch(n){case"keypress":if(rl(t)===0)break e;case"keydown":case"keyup":v=$_;break;case"focusin":_="focus",v=Ec;break;case"focusout":_="blur",v=Ec;break;case"beforeblur":case"afterblur":v=Ec;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=J_;break;case Fg:case zg:case kg:v=H_;break;case Bg:v=ty;break;case"scroll":v=O_;break;case"wheel":v=iy;break;case"copy":case"cut":case"paste":v=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jh}var y=(e&4)!==0,g=!y&&n==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,p;m!==null;){p=m;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,u!==null&&(x=Oo(m,u),x!=null&&y.push(Vo(m,x,p)))),g)break;m=m.return}0<y.length&&(h=new v(h,_,null,t,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",h&&t!==Nu&&(_=t.relatedTarget||t.fromElement)&&(Tr(_)||_[Ti]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=t.relatedTarget||t.toElement,v=c,_=_?Tr(_):null,_!==null&&(g=Br(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=Kh,x="onMouseLeave",u="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(y=Jh,x="onPointerLeave",u="onPointerEnter",m="pointer"),g=v==null?h:ms(v),p=_==null?h:ms(_),h=new y(x,m+"leave",v,t,d),h.target=g,h.relatedTarget=p,x=null,Tr(d)===c&&(y=new y(u,m+"enter",_,t,d),y.target=p,y.relatedTarget=g,x=y),g=x,v&&_)t:{for(y=v,u=_,m=0,p=y;p;p=Vr(p))m++;for(p=0,x=u;x;x=Vr(x))p++;for(;0<m-p;)y=Vr(y),m--;for(;0<p-m;)u=Vr(u),p--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=Vr(y),u=Vr(u)}y=null}else y=null;v!==null&&df(f,h,v,y,!1),_!==null&&g!==null&&df(f,g,_,y,!0)}}e:{if(h=c?ms(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=uy;else if(nf(h))if(Ig)S=py;else{S=hy;var A=dy}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=fy);if(S&&(S=S(n,c))){Lg(f,S,t,d);break e}A&&A(n,h,c),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&bu(h,"number",h.value)}switch(A=c?ms(c):window,n){case"focusin":(nf(A)||A.contentEditable==="true")&&(fs=A,Gu=c,Po=null);break;case"focusout":Po=Gu=fs=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,lf(f,t,d);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":lf(f,t,d)}var w;if(jd)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else hs?Rg(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Pg&&t.locale!=="ko"&&(hs||b!=="onCompositionStart"?b==="onCompositionEnd"&&hs&&(w=Cg()):(Vi=d,Vd="value"in Vi?Vi.value:Vi.textContent,hs=!0)),A=Sl(c,b),0<A.length&&(b=new Qh(b,n,null,t,d),f.push({event:b,listeners:A}),w?b.data=w:(w=bg(t),w!==null&&(b.data=w)))),(w=sy?oy(n,t):ay(n,t))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(d=new Qh("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=w))}Gg(f,e)})}function Vo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Sl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(n,t),s!=null&&i.unshift(Vo(n,s,r)),s=Oo(n,e),s!=null&&i.push(Vo(n,s,r))),n=n.return}return i}function Vr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function df(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(t,s),l!=null&&o.unshift(Vo(t,l,a))):r||(l=Oo(t,s),l!=null&&o.push(Vo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var My=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function hf(n){return(typeof n=="string"?n:""+n).replace(My,`
`).replace(Sy,"")}function _a(n,e,t){if(e=hf(e),hf(n)!==e&&t)throw Error(te(425))}function El(){}var Wu=null,Xu=null;function ju(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(n){return ff.resolve(null).then(n).catch(Ty)}:Yu;function Ty(n){setTimeout(function(){throw n})}function Lc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ko(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ko(e)}function $i(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ai="__reactFiber$"+Ys,Wo="__reactProps$"+Ys,Ti="__reactContainer$"+Ys,qu="__reactEvents$"+Ys,Ay="__reactListeners$"+Ys,Cy="__reactHandles$"+Ys;function Tr(n){var e=n[ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ti]||t[ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pf(n);n!==null;){if(t=n[ai])return t;n=pf(n)}return e}n=t,t=n.parentNode}return null}function ia(n){return n=n[ai]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function $l(n){return n[Wo]||null}var Zu=[],gs=-1;function lr(n){return{current:n}}function ot(n){0>gs||(n.current=Zu[gs],Zu[gs]=null,gs--)}function nt(n,e){gs++,Zu[gs]=n.current,n.current=e}var sr={},Jt=lr(sr),mn=lr(!1),Dr=sr;function Ds(n,e){var t=n.type.contextTypes;if(!t)return sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function gn(n){return n=n.childContextTypes,n!=null}function wl(){ot(mn),ot(Jt)}function mf(n,e,t){if(Jt.current!==sr)throw Error(te(168));nt(Jt,e),nt(mn,t)}function Wg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,d_(n)||"Unknown",r));return mt({},t,i)}function Tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Dr=Jt.current,nt(Jt,n),nt(mn,mn.current),!0}function gf(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Wg(n,e,Dr),i.__reactInternalMemoizedMergedChildContext=n,ot(mn),ot(Jt),nt(Jt,n)):ot(mn),nt(mn,t)}var yi=null,Kl=!1,Ic=!1;function Xg(n){yi===null?yi=[n]:yi.push(n)}function Py(n){Kl=!0,Xg(n)}function cr(){if(!Ic&&yi!==null){Ic=!0;var n=0,e=Qe;try{var t=yi;for(Qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}yi=null,Kl=!1}catch(r){throw yi!==null&&(yi=yi.slice(n+1)),gg(kd,cr),r}finally{Qe=e,Ic=!1}}return null}var vs=[],_s=0,Al=null,Cl=0,Dn=[],Un=0,Ur=null,xi=1,Mi="";function vr(n,e){vs[_s++]=Cl,vs[_s++]=Al,Al=n,Cl=e}function jg(n,e,t){Dn[Un++]=xi,Dn[Un++]=Mi,Dn[Un++]=Ur,Ur=n;var i=xi;n=Mi;var r=32-Jn(i)-1;i&=~(1<<r),t+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Jn(e)+r|t<<r|i,Mi=s+n}else xi=1<<s|t<<r|i,Mi=n}function qd(n){n.return!==null&&(vr(n,1),jg(n,1,0))}function Zd(n){for(;n===Al;)Al=vs[--_s],vs[_s]=null,Cl=vs[--_s],vs[_s]=null;for(;n===Ur;)Ur=Dn[--Un],Dn[Un]=null,Mi=Dn[--Un],Dn[Un]=null,xi=Dn[--Un],Dn[Un]=null}var An=null,Tn=null,ut=!1,qn=null;function Yg(n,e){var t=zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function vf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,An=n,Tn=$i(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,An=n,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ur!==null?{id:xi,overflow:Mi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,An=n,Tn=null,!0):!1;default:return!1}}function $u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ku(n){if(ut){var e=Tn;if(e){var t=e;if(!vf(n,e)){if($u(n))throw Error(te(418));e=$i(t.nextSibling);var i=An;e&&vf(n,e)?Yg(i,t):(n.flags=n.flags&-4097|2,ut=!1,An=n)}}else{if($u(n))throw Error(te(418));n.flags=n.flags&-4097|2,ut=!1,An=n}}}function _f(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;An=n}function ya(n){if(n!==An)return!1;if(!ut)return _f(n),ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ju(n.type,n.memoizedProps)),e&&(e=Tn)){if($u(n))throw qg(),Error(te(418));for(;e;)Yg(n,e),e=$i(e.nextSibling)}if(_f(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Tn=$i(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Tn=null}}else Tn=An?$i(n.stateNode.nextSibling):null;return!0}function qg(){for(var n=Tn;n;)n=$i(n.nextSibling)}function Us(){Tn=An=null,ut=!1}function $d(n){qn===null?qn=[n]:qn.push(n)}var Ry=Ri.ReactCurrentBatchConfig;function io(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function xa(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function yf(n){var e=n._init;return e(n._payload)}function Zg(n){function e(u,m){if(n){var p=u.deletions;p===null?(u.deletions=[m],u.flags|=16):p.push(m)}}function t(u,m){if(!n)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=er(u,m),u.index=0,u.sibling=null,u}function s(u,m,p){return u.index=p,n?(p=u.alternate,p!==null?(p=p.index,p<m?(u.flags|=2,m):p):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return n&&u.alternate===null&&(u.flags|=2),u}function a(u,m,p,x){return m===null||m.tag!==6?(m=kc(p,u.mode,x),m.return=u,m):(m=r(m,p),m.return=u,m)}function l(u,m,p,x){var S=p.type;return S===ds?d(u,m,p.props.children,x,p.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zi&&yf(S)===m.type)?(x=r(m,p.props),x.ref=io(u,m,p),x.return=u,x):(x=dl(p.type,p.key,p.props,null,u.mode,x),x.ref=io(u,m,p),x.return=u,x)}function c(u,m,p,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Bc(p,u.mode,x),m.return=u,m):(m=r(m,p.children||[]),m.return=u,m)}function d(u,m,p,x,S){return m===null||m.tag!==7?(m=Rr(p,u.mode,x,S),m.return=u,m):(m=r(m,p),m.return=u,m)}function f(u,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=kc(""+m,u.mode,p),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:return p=dl(m.type,m.key,m.props,null,u.mode,p),p.ref=io(u,null,m),p.return=u,p;case us:return m=Bc(m,u.mode,p),m.return=u,m;case zi:var x=m._init;return f(u,x(m._payload),p)}if(_o(m)||Qs(m))return m=Rr(m,u.mode,p,null),m.return=u,m;xa(u,m)}return null}function h(u,m,p,x){var S=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(u,m,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ca:return p.key===S?l(u,m,p,x):null;case us:return p.key===S?c(u,m,p,x):null;case zi:return S=p._init,h(u,m,S(p._payload),x)}if(_o(p)||Qs(p))return S!==null?null:d(u,m,p,x,null);xa(u,p)}return null}function v(u,m,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(p)||null,a(m,u,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ca:return u=u.get(x.key===null?p:x.key)||null,l(m,u,x,S);case us:return u=u.get(x.key===null?p:x.key)||null,c(m,u,x,S);case zi:var A=x._init;return v(u,m,p,A(x._payload),S)}if(_o(x)||Qs(x))return u=u.get(p)||null,d(m,u,x,S,null);xa(m,x)}return null}function _(u,m,p,x){for(var S=null,A=null,w=m,b=m=0,M=null;w!==null&&b<p.length;b++){w.index>b?(M=w,w=null):M=w.sibling;var T=h(u,w,p[b],x);if(T===null){w===null&&(w=M);break}n&&w&&T.alternate===null&&e(u,w),m=s(T,m,b),A===null?S=T:A.sibling=T,A=T,w=M}if(b===p.length)return t(u,w),ut&&vr(u,b),S;if(w===null){for(;b<p.length;b++)w=f(u,p[b],x),w!==null&&(m=s(w,m,b),A===null?S=w:A.sibling=w,A=w);return ut&&vr(u,b),S}for(w=i(u,w);b<p.length;b++)M=v(w,u,b,p[b],x),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?b:M.key),m=s(M,m,b),A===null?S=M:A.sibling=M,A=M);return n&&w.forEach(function(G){return e(u,G)}),ut&&vr(u,b),S}function y(u,m,p,x){var S=Qs(p);if(typeof S!="function")throw Error(te(150));if(p=S.call(p),p==null)throw Error(te(151));for(var A=S=null,w=m,b=m=0,M=null,T=p.next();w!==null&&!T.done;b++,T=p.next()){w.index>b?(M=w,w=null):M=w.sibling;var G=h(u,w,T.value,x);if(G===null){w===null&&(w=M);break}n&&w&&G.alternate===null&&e(u,w),m=s(G,m,b),A===null?S=G:A.sibling=G,A=G,w=M}if(T.done)return t(u,w),ut&&vr(u,b),S;if(w===null){for(;!T.done;b++,T=p.next())T=f(u,T.value,x),T!==null&&(m=s(T,m,b),A===null?S=T:A.sibling=T,A=T);return ut&&vr(u,b),S}for(w=i(u,w);!T.done;b++,T=p.next())T=v(w,u,b,T.value,x),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?b:T.key),m=s(T,m,b),A===null?S=T:A.sibling=T,A=T);return n&&w.forEach(function(X){return e(u,X)}),ut&&vr(u,b),S}function g(u,m,p,x){if(typeof p=="object"&&p!==null&&p.type===ds&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ca:e:{for(var S=p.key,A=m;A!==null;){if(A.key===S){if(S=p.type,S===ds){if(A.tag===7){t(u,A.sibling),m=r(A,p.props.children),m.return=u,u=m;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zi&&yf(S)===A.type){t(u,A.sibling),m=r(A,p.props),m.ref=io(u,A,p),m.return=u,u=m;break e}t(u,A);break}else e(u,A);A=A.sibling}p.type===ds?(m=Rr(p.props.children,u.mode,x,p.key),m.return=u,u=m):(x=dl(p.type,p.key,p.props,null,u.mode,x),x.ref=io(u,m,p),x.return=u,u=x)}return o(u);case us:e:{for(A=p.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){t(u,m.sibling),m=r(m,p.children||[]),m.return=u,u=m;break e}else{t(u,m);break}else e(u,m);m=m.sibling}m=Bc(p,u.mode,x),m.return=u,u=m}return o(u);case zi:return A=p._init,g(u,m,A(p._payload),x)}if(_o(p))return _(u,m,p,x);if(Qs(p))return y(u,m,p,x);xa(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(t(u,m.sibling),m=r(m,p),m.return=u,u=m):(t(u,m),m=kc(p,u.mode,x),m.return=u,u=m),o(u)):t(u,m)}return g}var Ns=Zg(!0),$g=Zg(!1),Pl=lr(null),Rl=null,ys=null,Kd=null;function Qd(){Kd=ys=Rl=null}function Jd(n){var e=Pl.current;ot(Pl),n._currentValue=e}function Qu(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ps(n,e){Rl=n,Kd=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function Bn(n){var e=n._currentValue;if(Kd!==n)if(n={context:n,memoizedValue:e,next:null},ys===null){if(Rl===null)throw Error(te(308));ys=n,Rl.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return e}var Ar=null;function eh(n){Ar===null?Ar=[n]:Ar.push(n)}function Kg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,eh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ai(n,i)}function Ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ki=!1;function th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ei(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(n,t)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(n,t)}function sl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}function xf(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bl(n,e,t,i){var r=n.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(h=e,v=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(v,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,f,h):_,h==null)break e;f=mt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=o,n.lanes=o,n.memoizedState=f}}function Mf(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var ra={},ci=lr(ra),Xo=lr(ra),jo=lr(ra);function Cr(n){if(n===ra)throw Error(te(174));return n}function nh(n,e){switch(nt(jo,e),nt(Xo,n),nt(ci,ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Iu(e,n)}ot(ci),nt(ci,e)}function Os(){ot(ci),ot(Xo),ot(jo)}function Jg(n){Cr(jo.current);var e=Cr(ci.current),t=Iu(e,n.type);e!==t&&(nt(Xo,n),nt(ci,t))}function ih(n){Xo.current===n&&(ot(ci),ot(Xo))}var ht=lr(0);function Ll(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function rh(){for(var n=0;n<Dc.length;n++)Dc[n]._workInProgressVersionPrimary=null;Dc.length=0}var ol=Ri.ReactCurrentDispatcher,Uc=Ri.ReactCurrentBatchConfig,Nr=0,ft=null,Tt=null,Ut=null,Il=!1,Ro=!1,Yo=0,by=0;function Wt(){throw Error(te(321))}function sh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ti(n[t],e[t]))return!1;return!0}function oh(n,e,t,i,r,s){if(Nr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=n===null||n.memoizedState===null?Uy:Ny,n=t(i,r),Ro){s=0;do{if(Ro=!1,Yo=0,25<=s)throw Error(te(301));s+=1,Ut=Tt=null,e.updateQueue=null,ol.current=Oy,n=t(i,r)}while(Ro)}if(ol.current=Dl,e=Tt!==null&&Tt.next!==null,Nr=0,Ut=Tt=ft=null,Il=!1,e)throw Error(te(300));return n}function ah(){var n=Yo!==0;return Yo=0,n}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ft.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function Hn(){if(Tt===null){var n=ft.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var e=Ut===null?ft.memoizedState:Ut.next;if(e!==null)Ut=e,Tt=n;else{if(n===null)throw Error(te(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ut===null?ft.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function qo(n,e){return typeof e=="function"?e(n):e}function Nc(n){var e=Hn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Tt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ft.lanes|=d,Or|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ft.lanes|=s,Or|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Oc(n){var e=Hn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function e0(){}function t0(n,e){var t=ft,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,lh(r0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,Zo(9,i0.bind(null,t,i,r,e),void 0,null),Ft===null)throw Error(te(349));Nr&30||n0(t,e,r)}return r}function n0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function i0(n,e,t,i){e.value=t,e.getSnapshot=i,s0(e)&&o0(n)}function r0(n,e,t){return t(function(){s0(e)&&o0(n)})}function s0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ti(n,t)}catch{return!0}}function o0(n){var e=Ai(n,1);e!==null&&ei(e,n,1,-1)}function Sf(n){var e=si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},e.queue=n,n=n.dispatch=Dy.bind(null,ft,n),[e.memoizedState,n]}function Zo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function a0(){return Hn().memoizedState}function al(n,e,t,i){var r=si();ft.flags|=n,r.memoizedState=Zo(1|e,t,void 0,i===void 0?null:i)}function Ql(n,e,t,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&sh(i,o.deps)){r.memoizedState=Zo(e,t,s,i);return}}ft.flags|=n,r.memoizedState=Zo(1|e,t,s,i)}function Ef(n,e){return al(8390656,8,n,e)}function lh(n,e){return Ql(2048,8,n,e)}function l0(n,e){return Ql(4,2,n,e)}function c0(n,e){return Ql(4,4,n,e)}function u0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function d0(n,e,t){return t=t!=null?t.concat([n]):null,Ql(4,4,u0.bind(null,e,n),t)}function ch(){}function h0(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function f0(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function p0(n,e,t){return Nr&21?(ti(t,e)||(t=yg(),ft.lanes|=t,Or|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function Ly(n,e){var t=Qe;Qe=t!==0&&4>t?t:4,n(!0);var i=Uc.transition;Uc.transition={};try{n(!1),e()}finally{Qe=t,Uc.transition=i}}function m0(){return Hn().memoizedState}function Iy(n,e,t){var i=Ji(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},g0(n))v0(e,t);else if(t=Kg(n,e,t,i),t!==null){var r=an();ei(t,n,i,r),_0(t,e,i)}}function Dy(n,e,t){var i=Ji(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(g0(n))v0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Kg(n,e,r,i),t!==null&&(r=an(),ei(t,n,i,r),_0(t,e,i))}}function g0(n){var e=n.alternate;return n===ft||e!==null&&e===ft}function v0(n,e){Ro=Il=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}var Dl={readContext:Bn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Uy={readContext:Bn,useCallback:function(n,e){return si().memoizedState=[n,e===void 0?null:e],n},useContext:Bn,useEffect:Ef,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,al(4194308,4,u0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return al(4194308,4,n,e)},useInsertionEffect:function(n,e){return al(4,2,n,e)},useMemo:function(n,e){var t=si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Iy.bind(null,ft,n),[i.memoizedState,n]},useRef:function(n){var e=si();return n={current:n},e.memoizedState=n},useState:Sf,useDebugValue:ch,useDeferredValue:function(n){return si().memoizedState=n},useTransition:function(){var n=Sf(!1),e=n[0];return n=Ly.bind(null,n[1]),si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ft,r=si();if(ut){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Ft===null)throw Error(te(349));Nr&30||n0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ef(r0.bind(null,i,s,n),[n]),i.flags|=2048,Zo(9,i0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=si(),e=Ft.identifierPrefix;if(ut){var t=Mi,i=xi;t=(i&~(1<<32-Jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Yo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=by++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Bn,useCallback:h0,useContext:Bn,useEffect:lh,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:f0,useReducer:Nc,useRef:a0,useState:function(){return Nc(qo)},useDebugValue:ch,useDeferredValue:function(n){var e=Hn();return p0(e,Tt.memoizedState,n)},useTransition:function(){var n=Nc(qo)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},Oy={readContext:Bn,useCallback:h0,useContext:Bn,useEffect:lh,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:f0,useReducer:Oc,useRef:a0,useState:function(){return Oc(qo)},useDebugValue:ch,useDeferredValue:function(n){var e=Hn();return Tt===null?e.memoizedState=n:p0(e,Tt.memoizedState,n)},useTransition:function(){var n=Oc(qo)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function jn(n,e){if(n&&n.defaultProps){e=mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ju(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Br(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=Ji(n),s=Ei(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ki(n,s,r),e!==null&&(ei(e,n,r,i),sl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=Ji(n),s=Ei(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ki(n,s,r),e!==null&&(ei(e,n,r,i),sl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=Ji(n),r=Ei(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(n,r,i),e!==null&&(ei(e,n,i,t),sl(e,n,i))}};function wf(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(t,i)||!Ho(r,s):!0}function y0(n,e,t){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=gn(e)?Dr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Ds(n,r):sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Tf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Jl.enqueueReplaceState(e,e.state,null)}function ed(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},th(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=gn(e)?Dr:Jt.current,r.context=Ds(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),bl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,e){try{var t="",i=e;do t+=u_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function td(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function x0(n,e,t){t=Ei(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Nl||(Nl=!0,dd=i),td(n,e)},t}function M0(n,e,t){t=Ei(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){td(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){td(n,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Af(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Ky.bind(null,n,e,t),e.then(n,n))}function Cf(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Pf(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ei(-1,1),e.tag=2,Ki(t,e,1))),t.lanes|=1),n)}var zy=Ri.ReactCurrentOwner,pn=!1;function sn(n,e,t,i){e.child=n===null?$g(e,null,t,i):Ns(e,n.child,t,i)}function Rf(n,e,t,i,r){t=t.render;var s=e.ref;return Ps(e,r),i=oh(n,e,t,i,s,r),t=ah(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ci(n,e,r)):(ut&&t&&qd(e),e.flags|=1,sn(n,e,i,r),e.child)}function bf(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!vh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,S0(n,e,s,i,r)):(n=dl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ho,t(o,i)&&n.ref===e.ref)return Ci(n,e,r)}return e.flags|=1,n=er(s,i),n.ref=e.ref,n.return=e,e.child=n}function S0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ho(s,i)&&n.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,Ci(n,e,r)}return nd(n,e,t,i,r)}function E0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ms,wn),wn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,nt(Ms,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,nt(Ms,wn),wn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,nt(Ms,wn),wn|=i;return sn(n,e,r,t),e.child}function w0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function nd(n,e,t,i,r){var s=gn(t)?Dr:Jt.current;return s=Ds(e,s),Ps(e,r),t=oh(n,e,t,i,s,r),i=ah(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ci(n,e,r)):(ut&&i&&qd(e),e.flags|=1,sn(n,e,t,r),e.child)}function Lf(n,e,t,i,r){if(gn(t)){var s=!0;Tl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)ll(n,e),y0(e,t,i),ed(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=gn(t)?Dr:Jt.current,c=Ds(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tf(e,o,i,c),ki=!1;var h=e.memoizedState;o.state=h,bl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||mn.current||ki?(typeof d=="function"&&(Ju(e,t,d,i),l=e.memoizedState),(a=ki||wf(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=gn(t)?Dr:Jt.current,l=Ds(e,l));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Tf(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,bl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||mn.current||ki?(typeof v=="function"&&(Ju(e,t,v,i),_=e.memoizedState),(c=ki||wf(e,t,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return id(n,e,t,i,s,r)}function id(n,e,t,i,r,s){w0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gf(e,t,!1),Ci(n,e,s);i=e.stateNode,zy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ns(e,n.child,null,s),e.child=Ns(e,null,a,s)):sn(n,e,a,s),e.memoizedState=i.state,r&&gf(e,t,!0),e.child}function T0(n){var e=n.stateNode;e.pendingContext?mf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(n,e.context,!1),nh(n,e.containerInfo)}function If(n,e,t,i,r){return Us(),$d(r),e.flags|=256,sn(n,e,t,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(n){return{baseLanes:n,cachePool:null,transitions:null}}function A0(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),nt(ht,r&1),n===null)return Ku(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),n=Rr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=sd(t),e.memoizedState=rd,n):uh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ky(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Rr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?sd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=rd,i}return s=n.child,n=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function uh(n,e){return e=nc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ma(n,e,t,i){return i!==null&&$d(i),Ns(e,n.child,null,t),n=uh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ky(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fc(Error(te(422))),Ma(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,n.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,s);if(!(e.mode&1))return Ma(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Fc(s,i,void 0),Ma(n,e,o,i)}if(a=(o&n.childLanes)!==0,pn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(n,r),ei(i,n,r,-1))}return gh(),i=Fc(Error(te(421))),Ma(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Qy.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Tn=$i(r.nextSibling),An=e,ut=!0,qn=null,n!==null&&(Dn[Un++]=xi,Dn[Un++]=Mi,Dn[Un++]=Ur,xi=n.id,Mi=n.overflow,Ur=e),e=uh(e,i.children),e.flags|=4096,e)}function Df(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Qu(n.return,e,t)}function zc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function C0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Df(n,t,e);else if(n.tag===19)Df(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(nt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ll(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),zc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ll(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}zc(e,!0,t,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ci(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Or|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function By(n,e,t){switch(e.tag){case 3:T0(e),Us();break;case 5:Jg(e);break;case 1:gn(e.type)&&Tl(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?A0(n,e,t):(nt(ht,ht.current&1),n=Ci(n,e,t),n!==null?n.sibling:null);nt(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return C0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,E0(n,e,t)}return Ci(n,e,t)}var P0,od,R0,b0;P0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};od=function(){};R0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Cr(ci.current);var s=null;switch(t){case"input":r=Pu(n,r),i=Pu(n,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(n,r),i=Lu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=El)}Du(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};b0=function(n,e,t,i){t!==i&&(e.flags|=4)};function ro(n,e){if(!ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Xt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Hy(n,e,t){var i=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return gn(e.type)&&wl(),Xt(e),null;case 3:return i=e.stateNode,Os(),ot(mn),ot(Jt),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ya(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(pd(qn),qn=null))),od(n,e),Xt(e),null;case 5:ih(e);var r=Cr(jo.current);if(t=e.type,n!==null&&e.stateNode!=null)R0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Xt(e),null}if(n=Cr(ci.current),ya(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Wo]=s,n=(e.mode&1)!==0,t){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)rt(xo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Hh(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Vh(i,s),rt("invalid",i)}Du(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,n),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(t){case"input":ua(i),Gh(i,s,!0);break;case"textarea":ua(i),Wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=rg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ai]=e,n[Wo]=i,P0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Uu(t,i),t){case"dialog":rt("cancel",n),rt("close",n),r=i;break;case"iframe":case"object":case"embed":rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)rt(xo[r],n);r=i;break;case"source":rt("error",n),r=i;break;case"img":case"image":case"link":rt("error",n),rt("load",n),r=i;break;case"details":rt("toggle",n),r=i;break;case"input":Hh(n,i),r=Pu(n,i),rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),rt("invalid",n);break;case"textarea":Vh(n,i),r=Lu(n,i),rt("invalid",n);break;default:r=i}Du(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ag(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&No(n,l):typeof l=="number"&&No(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",n):l!=null&&Ud(n,s,l,o))}switch(t){case"input":ua(n),Gh(n,i,!1);break;case"textarea":ua(n),Wh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=El)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(n&&e.stateNode!=null)b0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Cr(jo.current),Cr(ci.current),ya(e)){if(i=e.stateNode,t=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==t)&&(n=An,n!==null))switch(n.tag){case 3:_a(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Xt(e),null;case 13:if(ot(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ut&&Tn!==null&&e.mode&1&&!(e.flags&128))qg(),Us(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ai]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else qn!==null&&(pd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Ct===0&&(Ct=3):gh())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Os(),od(n,e),n===null&&Go(e.stateNode.containerInfo),Xt(e),null;case 10:return Jd(e.type._context),Xt(e),null;case 17:return gn(e.type)&&wl(),Xt(e),null;case 19:if(ot(ht),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Ct!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ll(n),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return nt(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>zs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ll(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Xt(e),null}else 2*yt()-s.renderingStartTime>zs&&t!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=ht.current,nt(ht,i?t&1|2:t&1),e):(Xt(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Gy(n,e){switch(Zd(e),e.tag){case 1:return gn(e.type)&&wl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Os(),ot(mn),ot(Jt),rh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ih(e),null;case 13:if(ot(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ot(ht),null;case 4:return Os(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Sa=!1,Zt=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function xs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function ad(n,e,t){try{t()}catch(i){vt(n,e,i)}}var Uf=!1;function Wy(n,e){if(Wu=xl,n=Ng(),Yd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,h=null;t:for(;;){for(var v;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xu={focusedElem:n,selectionRange:t},xl=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){vt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return _=Uf,Uf=!1,_}function bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,t,s)}r=r.next}while(r!==i)}}function ec(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ld(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function L0(n){var e=n.alternate;e!==null&&(n.alternate=null,L0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ai],delete e[Wo],delete e[qu],delete e[Ay],delete e[Cy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function I0(n){return n.tag===5||n.tag===3||n.tag===4}function Nf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||I0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(n=n.child,n!==null))for(cd(n,e,t),n=n.sibling;n!==null;)cd(n,e,t),n=n.sibling}function ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ud(n,e,t),n=n.sibling;n!==null;)ud(n,e,t),n=n.sibling}var kt=null,Yn=!1;function bi(n,e,t){for(t=t.child;t!==null;)D0(n,e,t),t=t.sibling}function D0(n,e,t){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(jl,t)}catch{}switch(t.tag){case 5:Zt||xs(t,e);case 6:var i=kt,r=Yn;kt=null,bi(n,e,t),kt=i,Yn=r,kt!==null&&(Yn?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(Yn?(n=kt,t=t.stateNode,n.nodeType===8?Lc(n.parentNode,t):n.nodeType===1&&Lc(n,t),ko(n)):Lc(kt,t.stateNode));break;case 4:i=kt,r=Yn,kt=t.stateNode.containerInfo,Yn=!0,bi(n,e,t),kt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(t,e,o),r=r.next}while(r!==i)}bi(n,e,t);break;case 1:if(!Zt&&(xs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}bi(n,e,t);break;case 21:bi(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,bi(n,e,t),Zt=i):bi(n,e,t);break;default:bi(n,e,t)}}function Of(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Vy),e.forEach(function(i){var r=Jy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Yn=!1;break e;case 3:kt=a.stateNode.containerInfo,Yn=!0;break e;case 4:kt=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(kt===null)throw Error(te(160));D0(s,o,r),kt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,n),e=e.sibling}function U0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),ii(n),i&4){try{bo(3,n,n.return),ec(3,n)}catch(y){vt(n,n.return,y)}try{bo(5,n,n.return)}catch(y){vt(n,n.return,y)}}break;case 1:Gn(e,n),ii(n),i&512&&t!==null&&xs(t,t.return);break;case 5:if(Gn(e,n),ii(n),i&512&&t!==null&&xs(t,t.return),n.flags&32){var r=n.stateNode;try{No(r,"")}catch(y){vt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ng(r,s),Uu(a,o);var c=Uu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ag(r,f):d==="dangerouslySetInnerHTML"?sg(r,f):d==="children"?No(r,f):Ud(r,d,f,c)}switch(a){case"input":Ru(r,s);break;case"textarea":ig(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ws(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(y){vt(n,n.return,y)}}break;case 6:if(Gn(e,n),ii(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){vt(n,n.return,y)}}break;case 3:if(Gn(e,n),ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(y){vt(n,n.return,y)}break;case 4:Gn(e,n),ii(n);break;case 13:Gn(e,n),ii(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(fh=yt())),i&4&&Of(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||d,Gn(e,n),Zt=c):Gn(e,n),ii(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(_e=n,d=n.child;d!==null;){for(f=_e=d;_e!==null;){switch(h=_e,v=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:xs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,t,y)}}break;case 5:xs(h,h.return);break;case 22:if(h.memoizedState!==null){zf(f);continue}}v!==null?(v.return=h,_e=v):zf(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=og("display",o))}catch(y){vt(n,n.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){vt(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,n),ii(n),i&4&&Of(n);break;case 21:break;default:Gn(e,n),ii(n)}}function ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(I0(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(No(r,""),i.flags&=-33);var s=Nf(n);ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nf(n);cd(n,a,o);break;default:throw Error(te(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Xy(n,e,t){_e=n,N0(n)}function N0(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Sa;var c=Zt;if(Sa=o,(Zt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?kf(r):l!==null?(l.return=o,_e=l):kf(r);for(;s!==null;)_e=s,N0(s),s=s.sibling;_e=r,Sa=a,Zt=c}Ff(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Ff(n)}}function Ff(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:jn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Mf(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Zt||e.flags&512&&ld(e)}catch(h){vt(e,e.return,h)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function zf(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function kf(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ec(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{ld(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var jy=Math.ceil,Ul=Ri.ReactCurrentDispatcher,dh=Ri.ReactCurrentOwner,kn=Ri.ReactCurrentBatchConfig,Ke=0,Ft=null,wt=null,Ht=0,wn=0,Ms=lr(0),Ct=0,$o=null,Or=0,tc=0,hh=0,Lo=null,fn=null,fh=0,zs=1/0,_i=null,Nl=!1,dd=null,Qi=null,Ea=!1,Wi=null,Ol=0,Io=0,hd=null,cl=-1,ul=0;function an(){return Ke&6?yt():cl!==-1?cl:cl=yt()}function Ji(n){return n.mode&1?Ke&2&&Ht!==0?Ht&-Ht:Ry.transition!==null?(ul===0&&(ul=yg()),ul):(n=Qe,n!==0||(n=window.event,n=n===void 0?16:Ag(n.type)),n):1}function ei(n,e,t,i){if(50<Io)throw Io=0,hd=null,Error(te(185));ta(n,t,i),(!(Ke&2)||n!==Ft)&&(n===Ft&&(!(Ke&2)&&(tc|=t),Ct===4&&Gi(n,Ht)),vn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(zs=yt()+500,Kl&&cr()))}function vn(n,e){var t=n.callbackNode;R_(n,e);var i=yl(n,n===Ft?Ht:0);if(i===0)t!==null&&Yh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Yh(t),e===1)n.tag===0?Py(Bf.bind(null,n)):Xg(Bf.bind(null,n)),wy(function(){!(Ke&6)&&cr()}),t=null;else{switch(xg(i)){case 1:t=kd;break;case 4:t=vg;break;case 16:t=_l;break;case 536870912:t=_g;break;default:t=_l}t=V0(t,O0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function O0(n,e){if(cl=-1,ul=0,Ke&6)throw Error(te(327));var t=n.callbackNode;if(Rs()&&n.callbackNode!==t)return null;var i=yl(n,n===Ft?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Fl(n,i);else{e=i;var r=Ke;Ke|=2;var s=z0();(Ft!==n||Ht!==e)&&(_i=null,zs=yt()+500,Pr(n,e));do try{Zy();break}catch(a){F0(n,a)}while(!0);Qd(),Ul.current=s,Ke=r,wt!==null?e=0:(Ft=null,Ht=0,e=Ct)}if(e!==0){if(e===2&&(r=ku(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=$o,Pr(n,0),Gi(n,i),vn(n,yt()),t;if(e===6)Gi(n,i);else{if(r=n.current.alternate,!(i&30)&&!Yy(r)&&(e=Fl(n,i),e===2&&(s=ku(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=$o,Pr(n,0),Gi(n,i),vn(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:_r(n,fn,_i);break;case 3:if(Gi(n,i),(i&130023424)===i&&(e=fh+500-yt(),10<e)){if(yl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yu(_r.bind(null,n,fn,_i),e);break}_r(n,fn,_i);break;case 4:if(Gi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jy(i/1960))-i,10<i){n.timeoutHandle=Yu(_r.bind(null,n,fn,_i),i);break}_r(n,fn,_i);break;case 5:_r(n,fn,_i);break;default:throw Error(te(329))}}}return vn(n,yt()),n.callbackNode===t?O0.bind(null,n):null}function fd(n,e){var t=Lo;return n.current.memoizedState.isDehydrated&&(Pr(n,e).flags|=256),n=Fl(n,e),n!==2&&(e=fn,fn=t,e!==null&&pd(e)),n}function pd(n){fn===null?fn=n:fn.push.apply(fn,n)}function Yy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(n,e){for(e&=~hh,e&=~tc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jn(e),i=1<<t;n[t]=-1,e&=~i}}function Bf(n){if(Ke&6)throw Error(te(327));Rs();var e=yl(n,0);if(!(e&1))return vn(n,yt()),null;var t=Fl(n,e);if(n.tag!==0&&t===2){var i=ku(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=$o,Pr(n,0),Gi(n,e),vn(n,yt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,_r(n,fn,_i),vn(n,yt()),null}function ph(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(zs=yt()+500,Kl&&cr())}}function Fr(n){Wi!==null&&Wi.tag===0&&!(Ke&6)&&Rs();var e=Ke;Ke|=1;var t=kn.transition,i=Qe;try{if(kn.transition=null,Qe=1,n)return n()}finally{Qe=i,kn.transition=t,Ke=e,!(Ke&6)&&cr()}}function mh(){wn=Ms.current,ot(Ms)}function Pr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Ey(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Os(),ot(mn),ot(Jt),rh();break;case 5:ih(i);break;case 4:Os();break;case 13:ot(ht);break;case 19:ot(ht);break;case 10:Jd(i.type._context);break;case 22:case 23:mh()}t=t.return}if(Ft=n,wt=n=er(n.current,null),Ht=wn=e,Ct=0,$o=null,hh=tc=Or=0,fn=Lo=null,Ar!==null){for(e=0;e<Ar.length;e++)if(t=Ar[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ar=null}return n}function F0(n,e){do{var t=wt;try{if(Qd(),ol.current=Dl,Il){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Il=!1}if(Nr=0,Ut=Tt=ft=null,Ro=!1,Yo=0,dh.current=null,t===null||t.return===null){Ct=1,$o=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Cf(o);if(v!==null){v.flags&=-257,Pf(v,o,a,s,e),v.mode&1&&Af(s,c,e),e=v,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Af(s,c,e),gh();break e}l=Error(te(426))}}else if(ut&&a.mode&1){var g=Cf(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Pf(g,o,a,s,e),$d(Fs(l,a));break e}}s=l=Fs(l,a),Ct!==4&&(Ct=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=x0(s,l,e);xf(s,u);break e;case 1:a=l;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qi===null||!Qi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=M0(s,a,e);xf(s,x);break e}}s=s.return}while(s!==null)}B0(t)}catch(S){e=S,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function z0(){var n=Ul.current;return Ul.current=Dl,n===null?Dl:n}function gh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ft===null||!(Or&268435455)&&!(tc&268435455)||Gi(Ft,Ht)}function Fl(n,e){var t=Ke;Ke|=2;var i=z0();(Ft!==n||Ht!==e)&&(_i=null,Pr(n,e));do try{qy();break}catch(r){F0(n,r)}while(!0);if(Qd(),Ke=t,Ul.current=i,wt!==null)throw Error(te(261));return Ft=null,Ht=0,Ct}function qy(){for(;wt!==null;)k0(wt)}function Zy(){for(;wt!==null&&!x_();)k0(wt)}function k0(n){var e=G0(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?B0(n):wt=e,dh.current=null}function B0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Gy(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,wt=null;return}}else if(t=Hy(t,e,wn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);Ct===0&&(Ct=5)}function _r(n,e,t){var i=Qe,r=kn.transition;try{kn.transition=null,Qe=1,$y(n,e,t,i)}finally{kn.transition=r,Qe=i}return null}function $y(n,e,t,i){do Rs();while(Wi!==null);if(Ke&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(b_(n,s),n===Ft&&(wt=Ft=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ea||(Ea=!0,V0(_l,function(){return Rs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=Qe;Qe=1;var a=Ke;Ke|=4,dh.current=null,Wy(n,t),U0(t,n),gy(Xu),xl=!!Wu,Xu=Wu=null,n.current=t,Xy(t),M_(),Ke=a,Qe=o,kn.transition=s}else n.current=t;if(Ea&&(Ea=!1,Wi=n,Ol=r),s=n.pendingLanes,s===0&&(Qi=null),w_(t.stateNode),vn(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,n=dd,dd=null,n;return Ol&1&&n.tag!==0&&Rs(),s=n.pendingLanes,s&1?n===hd?Io++:(Io=0,hd=n):Io=0,cr(),null}function Rs(){if(Wi!==null){var n=xg(Ol),e=kn.transition,t=Qe;try{if(kn.transition=null,Qe=16>n?16:n,Wi===null)var i=!1;else{if(n=Wi,Wi=null,Ol=0,Ke&6)throw Error(te(331));var r=Ke;for(Ke|=4,_e=n.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var f=d.child;if(f!==null)f.return=d,_e=f;else for(;_e!==null;){d=_e;var h=d.sibling,v=d.return;if(L0(d),d===c){_e=null;break}if(h!==null){h.return=v,_e=h;break}_e=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var m=n.current;for(_e=m;_e!==null;){o=_e;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_e=p;else e:for(o=m;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(S){vt(a,a.return,S)}if(a===o){_e=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_e=x;break e}_e=a.return}}if(Ke=r,cr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(jl,n)}catch{}i=!0}return i}finally{Qe=t,kn.transition=e}}return!1}function Hf(n,e,t){e=Fs(t,e),e=x0(n,e,1),n=Ki(n,e,1),e=an(),n!==null&&(ta(n,1,e),vn(n,e))}function vt(n,e,t){if(n.tag===3)Hf(n,n,t);else for(;e!==null;){if(e.tag===3){Hf(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){n=Fs(t,n),n=M0(e,n,1),e=Ki(e,n,1),n=an(),e!==null&&(ta(e,1,n),vn(e,n));break}}e=e.return}}function Ky(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,Ft===n&&(Ht&t)===t&&(Ct===4||Ct===3&&(Ht&130023424)===Ht&&500>yt()-fh?Pr(n,0):hh|=t),vn(n,e)}function H0(n,e){e===0&&(n.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var t=an();n=Ai(n,e),n!==null&&(ta(n,e,t),vn(n,t))}function Qy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),H0(n,t)}function Jy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),H0(n,t)}var G0;G0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,By(n,e,t);pn=!!(n.flags&131072)}else pn=!1,ut&&e.flags&1048576&&jg(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(n,e),n=e.pendingProps;var r=Ds(e,Jt.current);Ps(e,t),r=oh(null,e,i,n,r,t);var s=ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,ed(e,i,n,t),e=id(null,e,i,!0,s,t)):(e.tag=0,ut&&s&&qd(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tx(i),n=jn(i,n),r){case 0:e=nd(null,e,i,n,t);break e;case 1:e=Lf(null,e,i,n,t);break e;case 11:e=Rf(null,e,i,n,t);break e;case 14:e=bf(null,e,i,jn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),nd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Lf(n,e,i,r,t);case 3:e:{if(T0(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qg(n,e),bl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(te(423)),e),e=If(n,e,i,t,r);break e}else if(i!==r){r=Fs(Error(te(424)),e),e=If(n,e,i,t,r);break e}else for(Tn=$i(e.stateNode.containerInfo.firstChild),An=e,ut=!0,qn=null,t=$g(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Us(),i===r){e=Ci(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return Jg(e),n===null&&Ku(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ju(i,r)?o=null:s!==null&&ju(i,s)&&(e.flags|=32),w0(n,e),sn(n,e,o,t),e.child;case 6:return n===null&&Ku(e),null;case 13:return A0(n,e,t);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ns(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Rf(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Pl,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!mn.current){e=Ci(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Qu(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Qu(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,t),r=Bn(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),bf(n,e,i,r,t);case 15:return S0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ll(n,e),e.tag=1,gn(i)?(n=!0,Tl(e)):n=!1,Ps(e,t),y0(e,i,r),ed(e,i,r,t),id(null,e,i,!0,n,t);case 19:return C0(n,e,t);case 22:return E0(n,e,t)}throw Error(te(156,e.tag))};function V0(n,e){return gg(n,e)}function ex(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(n,e,t,i){return new ex(n,e,t,i)}function vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tx(n){if(typeof n=="function")return vh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Od)return 11;if(n===Fd)return 14}return 2}function er(n,e){var t=n.alternate;return t===null?(t=zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function dl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")vh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ds:return Rr(t.children,r,s,e);case Nd:o=8,r|=8;break;case wu:return n=zn(12,t,e,r|2),n.elementType=wu,n.lanes=s,n;case Tu:return n=zn(13,t,e,r),n.elementType=Tu,n.lanes=s,n;case Au:return n=zn(19,t,e,r),n.elementType=Au,n.lanes=s,n;case Jm:return nc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Km:o=10;break e;case Qm:o=9;break e;case Od:o=11;break e;case Fd:o=14;break e;case zi:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Rr(n,e,t,i){return n=zn(7,n,i,e),n.lanes=t,n}function nc(n,e,t,i){return n=zn(22,n,i,e),n.elementType=Jm,n.lanes=t,n.stateNode={isHidden:!1},n}function kc(n,e,t){return n=zn(6,n,null,e),n.lanes=t,n}function Bc(n,e,t){return e=zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _h(n,e,t,i,r,s,o,a,l){return n=new nx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(s),n}function ix(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function W0(n){if(!n)return sr;n=n._reactInternals;e:{if(Br(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(gn(t))return Wg(n,t,e)}return e}function X0(n,e,t,i,r,s,o,a,l){return n=_h(t,i,!0,n,r,s,o,a,l),n.context=W0(null),t=n.current,i=an(),r=Ji(t),s=Ei(i,r),s.callback=e??null,Ki(t,s,r),n.current.lanes=r,ta(n,r,i),vn(n,i),n}function ic(n,e,t,i){var r=e.current,s=an(),o=Ji(r);return t=W0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ei(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ki(r,e,o),n!==null&&(ei(n,r,o,s),sl(n,r,o)),o}function zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function yh(n,e){Gf(n,e),(n=n.alternate)&&Gf(n,e)}function rx(){return null}var j0=typeof reportError=="function"?reportError:function(n){console.error(n)};function xh(n){this._internalRoot=n}rc.prototype.render=xh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));ic(n,e,null,null)};rc.prototype.unmount=xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fr(function(){ic(null,n,null,null)}),e[Ti]=null}};function rc(n){this._internalRoot=n}rc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Eg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Hi.length&&e!==0&&e<Hi[t].priority;t++);Hi.splice(t,0,n),t===0&&Tg(n)}};function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function sc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function sx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(o);s.call(c)}}var o=X0(e,i,n,0,null,!1,!1,"",Vf);return n._reactRootContainer=o,n[Ti]=o.current,Go(n.nodeType===8?n.parentNode:n),Fr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zl(l);a.call(c)}}var l=_h(n,0,!1,null,null,!1,!1,"",Vf);return n._reactRootContainer=l,n[Ti]=l.current,Go(n.nodeType===8?n.parentNode:n),Fr(function(){ic(e,l,t,i)}),l}function oc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zl(o);a.call(l)}}ic(e,o,n,r)}else o=sx(t,e,n,r,i);return zl(o)}Mg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=yo(e.pendingLanes);t!==0&&(Bd(e,t|1),vn(e,yt()),!(Ke&6)&&(zs=yt()+500,cr()))}break;case 13:Fr(function(){var i=Ai(n,1);if(i!==null){var r=an();ei(i,n,1,r)}}),yh(n,1)}};Hd=function(n){if(n.tag===13){var e=Ai(n,134217728);if(e!==null){var t=an();ei(e,n,134217728,t)}yh(n,134217728)}};Sg=function(n){if(n.tag===13){var e=Ji(n),t=Ai(n,e);if(t!==null){var i=an();ei(t,n,e,i)}yh(n,e)}};Eg=function(){return Qe};wg=function(n,e){var t=Qe;try{return Qe=n,e()}finally{Qe=t}};Ou=function(n,e,t){switch(e){case"input":if(Ru(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=$l(i);if(!r)throw Error(te(90));tg(i),Ru(i,r)}}}break;case"textarea":ig(n,t);break;case"select":e=t.value,e!=null&&ws(n,!!t.multiple,e,!1)}};ug=ph;dg=Fr;var ox={usingClientEntryPoint:!1,Events:[ia,ms,$l,lg,cg,ph]},so={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pg(n),n===null?null:n.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{jl=wa.inject(ax),li=wa}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;Rn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(te(200));return ix(n,e,null,t)};Rn.createRoot=function(n,e){if(!Mh(n))throw Error(te(299));var t=!1,i="",r=j0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_h(n,1,!1,null,null,t,!1,i,r),n[Ti]=e.current,Go(n.nodeType===8?n.parentNode:n),new xh(e)};Rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=pg(e),n=n===null?null:n.stateNode,n};Rn.flushSync=function(n){return Fr(n)};Rn.hydrate=function(n,e,t){if(!sc(e))throw Error(te(200));return oc(null,n,e,!0,t)};Rn.hydrateRoot=function(n,e,t){if(!Mh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=j0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=X0(e,null,n,1,t??null,r,!1,s,o),n[Ti]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new rc(e)};Rn.render=function(n,e,t){if(!sc(e))throw Error(te(200));return oc(null,n,e,!1,t)};Rn.unmountComponentAtNode=function(n){if(!sc(n))throw Error(te(40));return n._reactRootContainer?(Fr(function(){oc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1};Rn.unstable_batchedUpdates=ph;Rn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!sc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return oc(n,e,t,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(n){console.error(n)}}Y0(),Ym.exports=Rn;var lx=Ym.exports,Wf=lx;Su.createRoot=Wf.createRoot,Su.hydrateRoot=Wf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="158",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cx=0,Xf=1,ux=2,q0=1,Z0=2,vi=3,or=0,_n=1,Qt=2,tr=0,bs=1,jf=2,Yf=3,qf=4,dx=5,Mr=100,hx=101,fx=102,Zf=103,$f=104,px=200,mx=201,gx=202,vx=203,md=204,gd=205,_x=206,yx=207,xx=208,Mx=209,Sx=210,Ex=211,wx=212,Tx=213,Ax=214,Cx=0,Px=1,Rx=2,kl=3,bx=4,Lx=5,Ix=6,Dx=7,$0=0,Ux=1,Nx=2,nr=0,Ox=1,Fx=2,zx=3,K0=4,kx=5,Q0=300,ks=301,Bs=302,vd=303,_d=304,ac=306,yd=1e3,$n=1001,xd=1002,on=1003,Kf=1004,Hc=1005,Nn=1006,Bx=1007,Ko=1008,ir=1009,Hx=1010,Gx=1011,Eh=1012,J0=1013,Xi=1014,ji=1015,Qo=1016,ev=1017,tv=1018,br=1020,Vx=1021,Kn=1023,Wx=1024,Xx=1025,Lr=1026,Hs=1027,jx=1028,nv=1029,Yx=1030,iv=1031,rv=1033,Gc=33776,Vc=33777,Wc=33778,Xc=33779,Qf=35840,Jf=35841,ep=35842,tp=35843,qx=36196,np=37492,ip=37496,rp=37808,sp=37809,op=37810,ap=37811,lp=37812,cp=37813,up=37814,dp=37815,hp=37816,fp=37817,pp=37818,mp=37819,gp=37820,vp=37821,jc=36492,_p=36494,yp=36495,Zx=36283,xp=36284,Mp=36285,Sp=36286,sv=3e3,Ir=3001,$x=3200,Kx=3201,ov=0,Qx=1,Fn="",Nt="srgb",Pi="srgb-linear",wh="display-p3",lc="display-p3-linear",Bl="linear",st="srgb",Hl="rec709",Gl="p3",jr=7680,Ep=519,Jx=512,eM=513,tM=514,nM=515,iM=516,rM=517,sM=518,oM=519,wp=35044,Tp="300 es",Md=1035,Si=2e3,Vl=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,Sd=180/Math.PI;function sa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function aM(n,e){return(n%e+e)%e}function Yc(n,e,t){return(1-t)*n+t*e}function Ap(n){return(n&n-1)===0&&n!==0}function Ed(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lM={DEG2RAD:hl};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],v=i[5],_=i[8],y=r[0],g=r[3],u=r[6],m=r[1],p=r[4],x=r[7],S=r[2],A=r[5],w=r[8];return s[0]=o*y+a*m+l*S,s[3]=o*g+a*p+l*A,s[6]=o*u+a*x+l*w,s[1]=c*y+d*m+f*S,s[4]=c*g+d*p+f*A,s[7]=c*u+d*x+f*w,s[2]=h*y+v*m+_*S,s[5]=h*g+v*p+_*A,s[8]=h*u+v*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,v=c*s-o*l,_=t*f+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=v*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new We;function av(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cM(){const n=Wl("canvas");return n.style.display="block",n}const Cp={};function Do(n){n in Cp||(Cp[n]=!0,console.warn(n))}const Pp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Pi]:{transfer:Bl,primaries:Hl,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:st,primaries:Hl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lc]:{transfer:Bl,primaries:Gl,toReference:n=>n.applyMatrix3(Rp),fromReference:n=>n.applyMatrix3(Pp)},[wh]:{transfer:st,primaries:Gl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rp),fromReference:n=>n.applyMatrix3(Pp).convertLinearToSRGB()}},uM=new Set([Pi,lc]),Je={enabled:!0,_workingColorSpace:Pi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!uM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ta[e].toReference,r=Ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===Fn?Bl:Ta[n].transfer}};function Ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yr;class lv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=Wl("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ls(t[i]/255)*255):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($c(r[o].image)):s.push($c(r[o]))}else s=$c(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;class Cn extends Hr{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=$n,r=$n,s=Nn,o=Ko,a=Kn,l=ir,c=Cn.DEFAULT_ANISOTROPY,d=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=sa(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ir?Nt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ir:sv}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?Nt:Fn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Q0;Cn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],v=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(c+1)/2,x=(v+1)/2,S=(u+1)/2,A=(d+h)/4,w=(f+y)/4,b=(_+g)/4;return p>x&&p>S?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=A/i,s=w/i):x>S?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=b/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=w/s,r=b/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-y)/m,this.z=(h-d)/m,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends Hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?Nt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends fM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uv extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pM extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],v=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=v,e[t+2]=_,e[t+3]=y;return}if(f!==y||l!==h||c!==v||d!==_){let g=1-a;const u=l*h+c*v+d*_+f*y,m=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const S=Math.sqrt(p),A=Math.atan2(S,u*m);g=Math.sin(g*A)/S,a=Math.sin(a*A)/S}const x=a*m;if(l=l*g+h*x,c=c*g+v*x,d=d*g+_*x,f=f*g+y*x,g===1-a){const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],v=s[o+2],_=s[o+3];return e[t]=a*_+d*f+l*v-c*h,e[t+1]=l*_+d*h+c*f-a*v,e[t+2]=c*_+d*v+a*h-l*f,e[t+3]=d*_-a*f-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),v=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"YXZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"ZXY":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"ZYX":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"YZX":this._x=h*d*f+c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f-h*v*_;break;case"XZY":this._x=h*d*f-c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=i+a+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new R,bp=new At;class Gr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ca.subVectors(this.max,ao),qr.subVectors(e.a,ao),Zr.subVectors(e.b,ao),$r.subVectors(e.c,ao),Li.subVectors(Zr,qr),Ii.subVectors($r,Zr),hr.subVectors(qr,$r);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!Qc(t,qr,Zr,$r,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,qr,Zr,$r,Ca))?!1:(Pa.crossVectors(Li,Ii),t=[Pa.x,Pa.y,Pa.z],Qc(t,qr,Zr,$r,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,Aa=new Gr,qr=new R,Zr=new R,$r=new R,Li=new R,Ii=new R,hr=new R,ao=new R,Ca=new R,Pa=new R,fr=new R;function Qc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fr.fromArray(n,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const mM=new Gr,lo=new R,Jc=new R;class qs{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Jc)),this.expandByPoint(lo.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new R,eu=new R,Ra=new R,Di=new R,tu=new R,ba=new R,nu=new R;class cc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){eu.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Di.dot(this.direction),l=-Di.dot(Ra),c=Di.lengthSq(),d=Math.abs(1-o*o);let f,h,v,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,v=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(eu).addScaledVector(Ra,h),v}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,r,s){tu.subVectors(t,e),ba.subVectors(i,e),nu.crossVectors(tu,ba);let o=this.direction.dot(nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(Di,ba));if(l<0)return null;const c=a*this.direction.dot(tu.cross(Di));if(c<0||l+c>o)return null;const d=-a*Di.dot(nu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,i,r,s,o,a,l,c,d,f,h,v,_,y,g){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,f,h,v,_,y,g)}set(e,t,i,r,s,o,a,l,c,d,f,h,v,_,y,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=v,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,v=o*f,_=a*d,y=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=v+_*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=_+v*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,v=l*f,_=c*d,y=c*f;t[0]=h+y*a,t[4]=_*a-v,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=v*a-_,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,v=l*f,_=c*d,y=c*f;t[0]=h-y*a,t[4]=-o*f,t[8]=_+v*a,t[1]=v+_*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,v=o*f,_=a*d,y=a*f;t[0]=l*d,t[4]=_*c-v,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=v*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,v=o*c,_=a*l,y=a*c;t[0]=l*d,t[4]=y-h*f,t[8]=_*f+v,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=v*f+_,t[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,v=o*c,_=a*l,y=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+y,t[5]=o*d,t[9]=v*f-_,t[2]=_*f-v,t[6]=a*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,vM)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(i,Mn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(i,Mn)),Ui.normalize(),La.crossVectors(Mn,Ui),r[0]=Ui.x,r[4]=La.x,r[8]=Mn.x,r[1]=Ui.y,r[5]=La.y,r[9]=Mn.y,r[2]=Ui.z,r[6]=La.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],v=i[13],_=i[2],y=i[6],g=i[10],u=i[14],m=i[3],p=i[7],x=i[11],S=i[15],A=r[0],w=r[4],b=r[8],M=r[12],T=r[1],G=r[5],X=r[9],K=r[13],I=r[2],B=r[6],Z=r[10],Y=r[14],N=r[3],F=r[7],k=r[11],D=r[15];return s[0]=o*A+a*T+l*I+c*N,s[4]=o*w+a*G+l*B+c*F,s[8]=o*b+a*X+l*Z+c*k,s[12]=o*M+a*K+l*Y+c*D,s[1]=d*A+f*T+h*I+v*N,s[5]=d*w+f*G+h*B+v*F,s[9]=d*b+f*X+h*Z+v*k,s[13]=d*M+f*K+h*Y+v*D,s[2]=_*A+y*T+g*I+u*N,s[6]=_*w+y*G+g*B+u*F,s[10]=_*b+y*X+g*Z+u*k,s[14]=_*M+y*K+g*Y+u*D,s[3]=m*A+p*T+x*I+S*N,s[7]=m*w+p*G+x*B+S*F,s[11]=m*b+p*X+x*Z+S*k,s[15]=m*M+p*K+x*Y+S*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],v=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*v-i*l*v)+y*(+t*l*v-t*c*h+s*o*h-r*o*v+r*c*d-s*l*d)+g*(+t*c*f-t*a*v-s*o*f+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-t*l*f+t*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],v=e[11],_=e[12],y=e[13],g=e[14],u=e[15],m=f*g*c-y*h*c+y*l*v-a*g*v-f*l*u+a*h*u,p=_*h*c-d*g*c-_*l*v+o*g*v+d*l*u-o*h*u,x=d*y*c-_*f*c+_*a*v-o*y*v-d*a*u+o*f*u,S=_*f*l-d*y*l-_*a*h+o*y*h+d*a*g-o*f*g,A=t*m+i*p+r*x+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=m*w,e[1]=(y*h*s-f*g*s-y*r*v+i*g*v+f*r*u-i*h*u)*w,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*v-i*l*v)*w,e[4]=p*w,e[5]=(d*g*s-_*h*s+_*r*v-t*g*v-d*r*u+t*h*u)*w,e[6]=(_*l*s-o*g*s-_*r*c+t*g*c+o*r*u-t*l*u)*w,e[7]=(o*h*s-d*l*s+d*r*c-t*h*c-o*r*v+t*l*v)*w,e[8]=x*w,e[9]=(_*f*s-d*y*s-_*i*v+t*y*v+d*i*u-t*f*u)*w,e[10]=(o*y*s-_*a*s+_*i*c-t*y*c-o*i*u+t*a*u)*w,e[11]=(d*a*s-o*f*s-d*i*c+t*f*c+o*i*v-t*a*v)*w,e[12]=S*w,e[13]=(d*y*r-_*f*r+_*i*h-t*y*h-d*i*g+t*f*g)*w,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*g-t*a*g)*w,e[15]=(o*f*r-d*a*r+d*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,h=s*c,v=s*d,_=s*f,y=o*d,g=o*f,u=a*f,m=l*c,p=l*d,x=l*f,S=i.x,A=i.y,w=i.z;return r[0]=(1-(y+u))*S,r[1]=(v+x)*S,r[2]=(_-p)*S,r[3]=0,r[4]=(v-x)*A,r[5]=(1-(h+u))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(_+p)*w,r[9]=(g-m)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,d=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let v,_;if(a===Si)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vl)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){const l=this.elements,c=1/(t-e),d=1/(i-r),f=1/(o-s),h=(t+e)*c,v=(i+r)*d;let _,y;if(a===Si)_=(o+s)*f,y=-2*f;else if(a===Vl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kr=new R,Wn=new Xe,gM=new R(0,0,0),vM=new R(1,1,1),Ui=new R,La=new R,Mn=new R,Lp=new Xe,Ip=new At;class Zs{constructor(e=0,t=0,i=0,r=Zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zs.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _M=0;const Dp=new R,Qr=new At,pi=new Xe,Ia=new R,co=new R,yM=new R,xM=new At,Up=new R(1,0,0),Np=new R(0,1,0),Op=new R(0,0,1),MM={type:"added"},SM={type:"removed"};class pt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new R,t=new Zs,i=new At,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,t){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(co,Ia,this.up):pi.lookAt(Ia,co,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(pi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new R,mi=new R,iu=new R,gi=new R,Jr=new R,es=new R,Fp=new R,ru=new R,su=new R,ou=new R;let Da=!1;class Zn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),mi.subVectors(i,t),iu.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(mi),l=Xn.dot(iu),c=mi.dot(mi),d=mi.dot(iu),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,v=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-v-_,_,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gi),l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),mi.subVectors(e,t),Xn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),es.subVectors(s,i),ru.subVectors(e,i);const l=Jr.dot(ru),c=es.dot(ru);if(l<=0&&c<=0)return t.copy(i);su.subVectors(e,r);const d=Jr.dot(su),f=es.dot(su);if(d>=0&&f<=d)return t.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Jr,o);ou.subVectors(e,s);const v=Jr.dot(ou),_=es.dot(ou);if(_>=0&&v<=_)return t.copy(s);const y=v*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(es,a);const g=d*_-v*f;if(g<=0&&f-d>=0&&v-_>=0)return Fp.subVectors(s,r),a=(f-d)/(f-d+(v-_)),t.copy(r).addScaledVector(Fp,a);const u=1/(g+y+h);return o=y*u,a=h*u,t.copy(i).addScaledVector(Jr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=aM(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=au(o,s,e+1/3),this.g=au(o,s,e),this.b=au(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=dv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round($t(Yt.r*255,0,255))*65536+Math.round($t(Yt.g*255,0,255))*256+Math.round($t(Yt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nt){Je.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ua);const i=Yc(Ni.h,Ua.h,t),r=Yc(Ni.s,Ua.s,t),s=Yc(Ni.l,Ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Re;Re.NAMES=dv;let EM=0;class ln extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=bs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ep&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gs extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new R,Na=new ue;class Bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wp,this.updateRange={offset:0,count:-1},this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class hv extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fv extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wM=0;const In=new Xe,lu=new pt,ts=new R,Sn=new Gr,uo=new Gr,It=new R;class en extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?fv:hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Sn.min,uo.min),Sn.expandByPoint(It),It.addVectors(Sn.max,uo.max),Sn.expandByPoint(It)):(Sn.expandByPoint(uo.min),Sn.expandByPoint(uo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)It.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),It.add(ts)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new R,d[T]=new R;const f=new R,h=new R,v=new R,_=new ue,y=new ue,g=new ue,u=new R,m=new R;function p(T,G,X){f.fromArray(r,T*3),h.fromArray(r,G*3),v.fromArray(r,X*3),_.fromArray(o,T*2),y.fromArray(o,G*2),g.fromArray(o,X*2),h.sub(f),v.sub(f),y.sub(_),g.sub(_);const K=1/(y.x*g.y-g.x*y.y);isFinite(K)&&(u.copy(h).multiplyScalar(g.y).addScaledVector(v,-y.y).multiplyScalar(K),m.copy(v).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(K),c[T].add(u),c[G].add(u),c[X].add(u),d[T].add(m),d[G].add(m),d[X].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,G=x.length;T<G;++T){const X=x[T],K=X.start,I=X.count;for(let B=K,Z=K+I;B<Z;B+=3)p(i[B+0],i[B+1],i[B+2])}const S=new R,A=new R,w=new R,b=new R;function M(T){w.fromArray(s,T*3),b.copy(w);const G=c[T];S.copy(G),S.sub(w.multiplyScalar(w.dot(G))).normalize(),A.crossVectors(b,G);const K=A.dot(d[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=K}for(let T=0,G=x.length;T<G;++T){const X=x[T],K=X.start,I=X.count;for(let B=K,Z=K+I;B<Z;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,d=new R,f=new R;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,v=t.count;h<v;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let v=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[v++]}return new Bt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],v=e(h,i);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,v=f.length;h<v;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new Xe,pr=new cc,Oa=new qs,kp=new R,ns=new R,is=new R,rs=new R,cu=new R,Fa=new R,za=new ue,ka=new ue,Ba=new ue,Bp=new R,Hp=new R,Gp=new R,Ha=new R,Ga=new R;class le extends pt{constructor(e=new en,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(cu.fromBufferAttribute(f,e),o?Fa.addScaledVector(cu,d):Fa.addScaledVector(cu.sub(t),d))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Oa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Oa,kp)===null||pr.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(zp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,v.start),p=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let x=m,S=p;x<S;x+=3){const A=a.getX(x),w=a.getX(x+1),b=a.getX(x+2);r=Va(this,u,e,i,c,d,f,A,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let g=_,u=y;g<u;g+=3){const m=a.getX(g),p=a.getX(g+1),x=a.getX(g+2);r=Va(this,o,e,i,c,d,f,m,p,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],m=Math.max(g.start,v.start),p=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let x=m,S=p;x<S;x+=3){const A=x,w=x+1,b=x+2;r=Va(this,u,e,i,c,d,f,A,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let g=_,u=y;g<u;g+=3){const m=g,p=g+1,x=g+2;r=Va(this,o,e,i,c,d,f,m,p,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function TM(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:n}}function Va(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ns),n.getVertexPosition(l,is),n.getVertexPosition(c,rs);const d=TM(n,e,t,i,ns,is,rs,Ha);if(d){r&&(za.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),d.uv=Zn.getInterpolation(Ha,ns,is,rs,za,ka,Ba,new ue)),s&&(za.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),d.uv1=Zn.getInterpolation(Ha,ns,is,rs,za,ka,Ba,new ue),d.uv2=d.uv1),o&&(Bp.fromBufferAttribute(o,a),Hp.fromBufferAttribute(o,l),Gp.fromBufferAttribute(o,c),d.normal=Zn.getInterpolation(Ha,ns,is,rs,Bp,Hp,Gp,new R),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};Zn.getNormal(ns,is,rs,f.normal),d.face=f}return d}class dt extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,v=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(y,g,u,m,p,x,S,A,w,b,M){const T=x/w,G=S/b,X=x/2,K=S/2,I=A/2,B=w+1,Z=b+1;let Y=0,N=0;const F=new R;for(let k=0;k<Z;k++){const D=k*G-K;for(let z=0;z<B;z++){const he=z*T-X;F[y]=he*m,F[g]=D*p,F[u]=I,c.push(F.x,F.y,F.z),F[y]=0,F[g]=0,F[u]=A>0?1:-1,d.push(F.x,F.y,F.z),f.push(z/w),f.push(1-k/b),Y+=1}}for(let k=0;k<b;k++)for(let D=0;D<w;D++){const z=h+D+B*k,he=h+D+B*(k+1),de=h+(D+1)+B*(k+1),me=h+(D+1)+B*k;l.push(z,he,me),l.push(he,de,me),N+=6}a.addGroup(v,N,M),v+=N,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function AM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pv(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const CM={clone:Vs,merge:rn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let mv=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class On extends mv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,os=1;class bM extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(ss,os,e,t);r.layers=this.layers,this.add(r);const s=new On(ss,os,e,t);s.layers=this.layers,this.add(s);const o=new On(ss,os,e,t);o.layers=this.layers,this.add(o);const a=new On(ss,os,e,t);a.layers=this.layers,this.add(a);const l=new On(ss,os,e,t);l.layers=this.layers,this.add(l);const c=new On(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class gv extends Cn{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LM extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ir?Nt:Fn),this.texture=new gv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dt(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:tr});s.uniforms.tEquirect.value=t;const o=new le(r,s),a=t.minFilter;return t.minFilter===Ko&&(t.minFilter=Nn),new bM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const uu=new R,IM=new R,DM=new We;class Bi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uu.subVectors(i,t).cross(IM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DM.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new qs,Wa=new R;class Ah{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],v=r[8],_=r[9],y=r[10],g=r[11],u=r[12],m=r[13],p=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,g-v,x-u).normalize(),i[1].setComponents(l+s,h+c,g+v,x+u).normalize(),i[2].setComponents(l+o,h+d,g+_,x+m).normalize(),i[3].setComponents(l-o,h-d,g-_,x-m).normalize(),i[4].setComponents(l-a,h-f,g-y,x-p).normalize(),t===Si)i[5].setComponents(l+a,h+f,g+y,x+p).normalize();else if(t===Vl)i[5].setComponents(a,f,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function UM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,f){const h=d.array,v=d.updateRange;n.bindBuffer(f,c),v.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):n.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(s(f.buffer,c,d),f.version=c.version)}return{get:o,remove:a,update:l}}class ui extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=t/l,v=[],_=[],y=[],g=[];for(let u=0;u<d;u++){const m=u*h-o;for(let p=0;p<c;p++){const x=p*f-s;_.push(x,-m,0),y.push(0,0,1),g.push(p/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const p=m+c*u,x=m+c*(u+1),S=m+1+c*(u+1),A=m+1+c*u;v.push(p,x,A),v.push(x,S,A)}this.setIndex(v),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",uS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,IS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,US=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:NM,alphahash_pars_fragment:OM,alphamap_fragment:FM,alphamap_pars_fragment:zM,alphatest_fragment:kM,alphatest_pars_fragment:BM,aomap_fragment:HM,aomap_pars_fragment:GM,begin_vertex:VM,beginnormal_vertex:WM,bsdfs:XM,iridescence_fragment:jM,bumpmap_pars_fragment:YM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:KM,color_fragment:QM,color_pars_fragment:JM,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:oS,emissivemap_fragment:aS,emissivemap_pars_fragment:lS,colorspace_fragment:cS,colorspace_pars_fragment:uS,envmap_fragment:dS,envmap_common_pars_fragment:hS,envmap_pars_fragment:fS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:AS,envmap_vertex:mS,fog_vertex:gS,fog_pars_vertex:vS,fog_fragment:_S,fog_pars_fragment:yS,gradientmap_pars_fragment:xS,lightmap_fragment:MS,lightmap_pars_fragment:SS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:wS,lights_pars_begin:TS,lights_toon_fragment:CS,lights_toon_pars_fragment:PS,lights_phong_fragment:RS,lights_phong_pars_fragment:bS,lights_physical_fragment:LS,lights_physical_pars_fragment:IS,lights_fragment_begin:DS,lights_fragment_maps:US,lights_fragment_end:NS,logdepthbuf_fragment:OS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:kS,map_fragment:BS,map_pars_fragment:HS,map_particle_fragment:GS,map_particle_pars_fragment:VS,metalnessmap_fragment:WS,metalnessmap_pars_fragment:XS,morphcolor_vertex:jS,morphnormal_vertex:YS,morphtarget_pars_vertex:qS,morphtarget_vertex:ZS,normal_fragment_begin:$S,normal_fragment_maps:KS,normal_pars_fragment:QS,normal_pars_vertex:JS,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:vE,skinbase_vertex:_E,skinning_pars_vertex:yE,skinning_vertex:xE,skinnormal_vertex:ME,specularmap_fragment:SE,specularmap_pars_fragment:EE,tonemapping_fragment:wE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:CE,uv_pars_fragment:PE,uv_pars_vertex:RE,uv_vertex:bE,worldpos_vertex:LE,background_vert:IE,background_frag:DE,backgroundCube_vert:UE,backgroundCube_frag:NE,cube_vert:OE,cube_frag:FE,depth_vert:zE,depth_frag:kE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:jE,meshbasic_frag:YE,meshlambert_vert:qE,meshlambert_frag:ZE,meshmatcap_vert:$E,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:dw},fe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},oi={basic:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:rn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:rn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:rn([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:rn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:rn([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:rn([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:rn([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:rn([fe.lights,fe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};oi.physical={uniforms:rn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Xa={r:0,b:0,g:0};function hw(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,d,f=null,h=0,v=null;function _(g,u){let m=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?t:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),m=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ac)?(d===void 0&&(d=new le(new dt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Vs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Je.getTransfer(p.colorSpace)!==st,(f!==p||h!==p.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,f=p,h=p.version,v=n.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new le(new ui(2,2),new cn({name:"BackgroundMaterial",uniforms:Vs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(p.colorSpace)!==st,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||h!==p.version||v!==n.toneMapping)&&(c.material.needsUpdate=!0,f=p,h=p.version,v=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,u){g.getRGB(Xa,pv(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(g,u=1){a.set(g),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function fw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,d=!1;function f(I,B,Z,Y,N){let F=!1;if(o){const k=y(Y,Z,B);c!==k&&(c=k,v(c.object)),F=u(I,Y,Z,N),F&&m(I,Y,Z,N)}else{const k=B.wireframe===!0;(c.geometry!==Y.id||c.program!==Z.id||c.wireframe!==k)&&(c.geometry=Y.id,c.program=Z.id,c.wireframe=k,F=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,b(I,B,Z,Y),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function v(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,B,Z){const Y=Z.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let F=N[B.id];F===void 0&&(F={},N[B.id]=F);let k=F[Y];return k===void 0&&(k=g(h()),F[Y]=k),k}function g(I){const B=[],Z=[],Y=[];for(let N=0;N<r;N++)B[N]=0,Z[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:Y,object:I,attributes:{},index:null}}function u(I,B,Z,Y){const N=c.attributes,F=B.attributes;let k=0;const D=Z.getAttributes();for(const z in D)if(D[z].location>=0){const de=N[z];let me=F[z];if(me===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;k++}return c.attributesNum!==k||c.index!==Y}function m(I,B,Z,Y){const N={},F=B.attributes;let k=0;const D=Z.getAttributes();for(const z in D)if(D[z].location>=0){let de=F[z];de===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),N[z]=me,k++}c.attributes=N,c.attributesNum=k,c.index=Y}function p(){const I=c.newAttributes;for(let B=0,Z=I.length;B<Z;B++)I[B]=0}function x(I){S(I,0)}function S(I,B){const Z=c.newAttributes,Y=c.enabledAttributes,N=c.attributeDivisors;Z[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),N[I]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),N[I]=B)}function A(){const I=c.newAttributes,B=c.enabledAttributes;for(let Z=0,Y=B.length;Z<Y;Z++)B[Z]!==I[Z]&&(n.disableVertexAttribArray(Z),B[Z]=0)}function w(I,B,Z,Y,N,F,k){k===!0?n.vertexAttribIPointer(I,B,Z,N,F):n.vertexAttribPointer(I,B,Z,Y,N,F)}function b(I,B,Z,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const N=Y.attributes,F=Z.getAttributes(),k=B.defaultAttributeValues;for(const D in F){const z=F[D];if(z.location>=0){let he=N[D];if(he===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){const de=he.normalized,me=he.itemSize,Se=t.get(he);if(Se===void 0)continue;const Ne=Se.buffer,be=Se.type,Ue=Se.bytesPerElement,it=i.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||he.gpuType===J0);if(he.isInterleavedBufferAttribute){const Be=he.data,H=Be.stride,Vt=he.offset;if(Be.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)S(z.location+Te,Be.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Te=0;Te<z.locationSize;Te++)x(z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Te=0;Te<z.locationSize;Te++)w(z.location+Te,me/z.locationSize,be,de,H*Ue,(Vt+me/z.locationSize*Te)*Ue,it)}else{if(he.isInstancedBufferAttribute){for(let Be=0;Be<z.locationSize;Be++)S(z.location+Be,he.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<z.locationSize;Be++)x(z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Be=0;Be<z.locationSize;Be++)w(z.location+Be,me/z.locationSize,be,de,me*Ue,me/z.locationSize*Be*Ue,it)}}else if(k!==void 0){const de=k[D];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}A()}function M(){X();for(const I in a){const B=a[I];for(const Z in B){const Y=B[Z];for(const N in Y)_(Y[N].object),delete Y[N];delete B[Z]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const B=a[I.id];for(const Z in B){const Y=B[Z];for(const N in Y)_(Y[N].object),delete Y[N];delete B[Z]}delete a[I.id]}function G(I){for(const B in a){const Z=a[B];if(Z[I.id]===void 0)continue;const Y=Z[I.id];for(const N in Y)_(Y[N].object),delete Y[N];delete Z[I.id]}}function X(){K(),d=!0,c!==l&&(c=l,v(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:p,enableAttribute:x,disableUnusedAttributes:A}}function pw(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,f){if(f===0)return;let h,v;if(r)h=n,v="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[v](s,c,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function mw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,x=o||e.has("OES_texture_float"),S=p&&x,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:A}}function gw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Bi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||i!==0||r;return r=h,i=f.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,v){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,p=m*4;let x=u.clippingState||null;l.value=x,x=d(_,h,p,v);for(let S=0;S!==p;++S)x[S]=t[S];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,v,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=v+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let p=0,x=v;p!==y;++p,x+=4)o.copy(f[p]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function vw(n){let e=new WeakMap;function t(o,a){return a===vd?o.mapping=ks:a===_d&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===vd||a===_d)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new LM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _v extends mv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ss=4,Vp=[.125,.215,.35,.446,.526,.582],Sr=20,du=new _v,Wp=new Re;let hu=null,fu=0,pu=0;const yr=(1+Math.sqrt(5))/2,as=1/yr,Xp=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,yr,as),new R(0,yr,-as),new R(as,0,yr),new R(-as,0,yr),new R(yr,as,0),new R(-yr,as,0)];class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,fu,pu),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Qo,format:Kn,colorSpace:Pi,depthBuffer:!1},r=Yp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_w(s)),this._blurMaterial=yw(s,e,t)}return r}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,i,r){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Wp),d.toneMapping=nr,d.autoClear=!1;const v=new Gs({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new le(new dt,v);let y=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,y=!0):(v.color.copy(Wp),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;ja(r,m*p,u>2?p:0,p,p),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ks||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,du)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xp[(r-1)%Xp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new le(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Sr-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):Sr;g>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const u=[];let m=0;for(let w=0;w<Sr;++w){const b=w/y,M=Math.exp(-b*b/2);u.push(M),w===0?m+=M:w<g&&(m+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:p}=this;h.dTheta.value=_,h.mipInt.value=p-i;const x=this._sizeLods[r],S=3*x*(r>p-Ss?r-p+Ss:0),A=4*(this._cubeSize-x);ja(t,S,A,3*x,2*x),l.setRenderTarget(t),l.render(f,du)}}function _w(n){const e=[],t=[],i=[];let r=n;const s=n-Ss+1+Vp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ss?l=Vp[o-n+Ss-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,_=6,y=3,g=2,u=1,m=new Float32Array(y*_*v),p=new Float32Array(g*_*v),x=new Float32Array(u*_*v);for(let A=0;A<v;A++){const w=A%3*2/3-1,b=A>2?0:-1,M=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];m.set(M,y*_*A),p.set(h,g*_*A);const T=[A,A,A,A,A,A];x.set(T,u*_*A)}const S=new en;S.setAttribute("position",new Bt(m,y)),S.setAttribute("uv",new Bt(p,g)),S.setAttribute("faceIndex",new Bt(x,u)),e.push(S),r>Ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yp(n,e,t){const i=new zr(n,e,t);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yw(n,e,t){const i=new Float32Array(Sr),r=new R(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function qp(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Zp(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vd||l===_d,d=l===ks||l===Bs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new jp(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new jp(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sw(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const v=f.morphAttributes;for(const _ in v){const y=v[_];for(let g=0,u=y.length;g<u;g++)e.update(y[g],n.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,_=f.attributes.position;let y=0;if(v!==null){const m=v.array;y=v.version;for(let p=0,x=m.length;p<x;p+=3){const S=m[p+0],A=m[p+1],w=m[p+2];h.push(S,A,A,w,w,S)}}else if(_!==void 0){const m=_.array;y=_.version;for(let p=0,x=m.length/3-1;p<x;p+=3){const S=p+0,A=p+1,w=p+2;h.push(S,A,A,w,w,S)}}else return;const g=new(av(h)?fv:hv)(h,1);g.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Ew(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function d(h,v){n.drawElements(s,v,a,h*l),t.update(v,s,1)}function f(h,v,_){if(_===0)return;let y,g;if(r)y=n,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,v,a,h*l,_),t.update(v,s,_)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f}function ww(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tw(n,e){return n[0]-e[0]}function Aw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Cw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==y){let B=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var v=B;g!==void 0&&g.texture.dispose();const p=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),S===!0&&(M=3);let T=d.attributes.position.count*M,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const X=new Float32Array(T*G*4*y),K=new uv(X,T,G,y);K.type=ji,K.needsUpdate=!0;const I=M*4;for(let Z=0;Z<y;Z++){const Y=A[Z],N=w[Z],F=b[Z],k=T*G*4*Z;for(let D=0;D<Y.count;D++){const z=D*I;p===!0&&(o.fromBufferAttribute(Y,D),X[k+z+0]=o.x,X[k+z+1]=o.y,X[k+z+2]=o.z,X[k+z+3]=0),x===!0&&(o.fromBufferAttribute(N,D),X[k+z+4]=o.x,X[k+z+5]=o.y,X[k+z+6]=o.z,X[k+z+7]=0),S===!0&&(o.fromBufferAttribute(F,D),X[k+z+8]=o.x,X[k+z+9]=o.y,X[k+z+10]=o.z,X[k+z+11]=F.itemSize===4?o.w:1)}}g={count:y,texture:K,size:new ue(T,G)},s.set(d,g),d.addEventListener("dispose",B)}let u=0;for(let p=0;p<h.length;p++)u+=h[p];const m=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",m),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const S=y[x];S[0]=x,S[1]=h[x]}y.sort(Aw);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Tw);const g=d.morphAttributes.position,u=d.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const S=a[x],A=S[0],w=S[1];A!==Number.MAX_SAFE_INTEGER&&w?(g&&d.getAttribute("morphTarget"+x)!==g[A]&&d.setAttribute("morphTarget"+x,g[A]),u&&d.getAttribute("morphNormal"+x)!==u[A]&&d.setAttribute("morphNormal"+x,u[A]),r[x]=w,m+=w):(g&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const p=d.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Pw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const yv=new Cn,xv=new uv,Mv=new pM,Sv=new gv,$p=[],Kp=[],Qp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Dw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;em.set(i),n.uniformMatrix2fv(this.addr,!1,em),Rt(t,i)}}function Uw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;Jp.set(i),n.uniformMatrix3fv(this.addr,!1,Jp),Rt(t,i)}}function Nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Pt(t,i))return;Qp.set(i),n.uniformMatrix4fv(this.addr,!1,Qp),Rt(t,i)}}function Ow(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function Ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||yv,r)}function Xw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mv,r)}function jw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sv,r)}function Yw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xv,r)}function qw(n){switch(n){case 5126:return Rw;case 35664:return bw;case 35665:return Lw;case 35666:return Iw;case 35674:return Dw;case 35675:return Uw;case 35676:return Nw;case 5124:case 35670:return Ow;case 35667:case 35671:return Fw;case 35668:case 35672:return zw;case 35669:case 35673:return kw;case 5125:return Bw;case 36294:return Hw;case 36295:return Gw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Yw}}function Zw(n,e){n.uniform1fv(this.addr,e)}function $w(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Kw(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Qw(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Jw(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eT(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tT(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nT(n,e){n.uniform1iv(this.addr,e)}function iT(n,e){n.uniform2iv(this.addr,e)}function rT(n,e){n.uniform3iv(this.addr,e)}function sT(n,e){n.uniform4iv(this.addr,e)}function oT(n,e){n.uniform1uiv(this.addr,e)}function aT(n,e){n.uniform2uiv(this.addr,e)}function lT(n,e){n.uniform3uiv(this.addr,e)}function cT(n,e){n.uniform4uiv(this.addr,e)}function uT(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yv,s[o])}function dT(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mv,s[o])}function hT(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sv,s[o])}function fT(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xv,s[o])}function pT(n){switch(n){case 5126:return Zw;case 35664:return $w;case 35665:return Kw;case 35666:return Qw;case 35674:return Jw;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return fT}}class mT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qw(t.type)}}class gT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=pT(t.type)}}class vT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function tm(n,e){n.seq.push(e),n.map[e.id]=e}function _T(n,e,t){const i=n.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),o=mu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tm(t,c===void 0?new mT(a,n,e):new gT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vT(a),tm(t,f)),t=f}}}class fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_T(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yT=37297;let xT=0;function MT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ST(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Gl&&t===Hl?i="LinearDisplayP3ToLinearSRGB":e===Hl&&t===Gl&&(i="LinearSRGBToLinearDisplayP3"),n){case Pi:case lc:return[i,"LinearTransferOETF"];case Nt:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function im(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+MT(n.getShaderSource(e),o)}else return r}function ET(n,e){const t=ST(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wT(n,e){let t;switch(e){case Ox:t="Linear";break;case Fx:t="Reinhard";break;case zx:t="OptimizedCineon";break;case K0:t="ACESFilmic";break;case kx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mo).join(`
`)}function AT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mo(n){return n!==""}function rm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(n){return n.replace(PT,bT)}const RT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bT(n,e){let t=He[e];if(t===void 0){const i=RT.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const LT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(n){return n.replace(LT,IT)}function IT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ux:e="ENVMAP_BLENDING_MIX";break;case Nx:e="ENVMAP_BLENDING_ADD";break}return e}function FT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DT(t),c=UT(t),d=NT(t),f=OT(t),h=FT(t),v=t.isWebGL2?"":TT(t),_=AT(s),y=r.createProgram();let g,u,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),g.length>0&&(g+=`
`),u=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),u.length>0&&(u+=`
`)):(g=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),u=[v,am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?He.tonemapping_pars_fragment:"",t.toneMapping!==nr?wT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ET("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=wd(o),o=rm(o,t),o=sm(o,t),a=wd(a),a=rm(a,t),a=sm(a,t),o=om(o),a=om(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=m+g+o,x=m+u+a,S=nm(r,r.VERTEX_SHADER,p),A=nm(r,r.FRAGMENT_SHADER,x);r.attachShader(y,S),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(G){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),K=r.getShaderInfoLog(S).trim(),I=r.getShaderInfoLog(A).trim();let B=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,S,A);else{const Y=im(r,S,"vertex"),N=im(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+Y+`
`+N)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(K===""||I==="")&&(Z=!1);Z&&(G.diagnostics={runnable:B,programLog:X,vertexShader:{log:K,prefix:g},fragmentShader:{log:I,prefix:u}})}r.deleteShader(S),r.deleteShader(A),b=new fl(r,y),M=CT(r,y)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(y,yT)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}let kT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HT(e),t.set(e,i)),i}}class HT{constructor(e){this.id=kT++,this.code=e,this.usedTimes=0}}function GT(n,e,t,i,r,s,o){const a=new Th,l=new BT,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,T,G,X,K){const I=X.fog,B=K.geometry,Z=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),N=Y&&Y.mapping===ac?Y.image.height:null,F=_[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,D=k!==void 0?k.length:0;let z=0;B.morphAttributes.position!==void 0&&(z=1),B.morphAttributes.normal!==void 0&&(z=2),B.morphAttributes.color!==void 0&&(z=3);let he,de,me,Se;if(F){const Mt=oi[F];he=Mt.vertexShader,de=Mt.fragmentShader}else he=M.vertexShader,de=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const Ne=n.getRenderTarget(),be=K.isInstancedMesh===!0,Ue=!!M.map,it=!!M.matcap,Be=!!Y,H=!!M.aoMap,Vt=!!M.lightMap,Te=!!M.bumpMap,Le=!!M.normalMap,Ie=!!M.displacementMap,lt=!!M.emissiveMap,ze=!!M.metalnessMap,Oe=!!M.roughnessMap,$e=M.anisotropy>0,xt=M.clearcoat>0,bt=M.iridescence>0,P=M.sheen>0,E=M.transmission>0,V=$e&&!!M.anisotropyMap,ne=xt&&!!M.clearcoatMap,J=xt&&!!M.clearcoatNormalMap,ie=xt&&!!M.clearcoatRoughnessMap,xe=bt&&!!M.iridescenceMap,ae=bt&&!!M.iridescenceThicknessMap,pe=P&&!!M.sheenColorMap,L=P&&!!M.sheenRoughnessMap,se=!!M.specularMap,Q=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Me=E&&!!M.transmissionMap,Ae=E&&!!M.thicknessMap,ye=!!M.gradientMap,ve=!!M.alphaMap,Ye=M.alphaTest>0,U=!!M.alphaHash,ce=!!M.extensions,ee=!!B.attributes.uv1,$=!!B.attributes.uv2,re=!!B.attributes.uv3;let we=nr;return M.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(we=n.toneMapping),{isWebGL2:d,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:de,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:be,instancingColor:be&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Pi,map:Ue,matcap:it,envMap:Be,envMapMode:Be&&Y.mapping,envMapCubeUVHeight:N,aoMap:H,lightMap:Vt,bumpMap:Te,normalMap:Le,displacementMap:h&&Ie,emissiveMap:lt,normalMapObjectSpace:Le&&M.normalMapType===Qx,normalMapTangentSpace:Le&&M.normalMapType===ov,metalnessMap:ze,roughnessMap:Oe,anisotropy:$e,anisotropyMap:V,clearcoat:xt,clearcoatMap:ne,clearcoatNormalMap:J,clearcoatRoughnessMap:ie,iridescence:bt,iridescenceMap:xe,iridescenceThicknessMap:ae,sheen:P,sheenColorMap:pe,sheenRoughnessMap:L,specularMap:se,specularColorMap:Q,specularIntensityMap:Ce,transmission:E,transmissionMap:Me,thicknessMap:Ae,gradientMap:ye,opaque:M.transparent===!1&&M.blending===bs,alphaMap:ve,alphaTest:Ye,alphaHash:U,combine:M.combine,mapUv:Ue&&y(M.map.channel),aoMapUv:H&&y(M.aoMap.channel),lightMapUv:Vt&&y(M.lightMap.channel),bumpMapUv:Te&&y(M.bumpMap.channel),normalMapUv:Le&&y(M.normalMap.channel),displacementMapUv:Ie&&y(M.displacementMap.channel),emissiveMapUv:lt&&y(M.emissiveMap.channel),metalnessMapUv:ze&&y(M.metalnessMap.channel),roughnessMapUv:Oe&&y(M.roughnessMap.channel),anisotropyMapUv:V&&y(M.anisotropyMap.channel),clearcoatMapUv:ne&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:L&&y(M.sheenRoughnessMap.channel),specularMapUv:se&&y(M.specularMap.channel),specularColorMapUv:Q&&y(M.specularColorMap.channel),specularIntensityMapUv:Ce&&y(M.specularIntensityMap.channel),transmissionMapUv:Me&&y(M.transmissionMap.channel),thicknessMapUv:Ae&&y(M.thicknessMap.channel),alphaMapUv:ve&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Le||$e),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:$,vertexUv3s:re,pointsUvs:K.isPoints===!0&&!!B.attributes.uv&&(Ue||ve),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(m(T,M),p(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function m(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function p(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const T=_[M.type];let G;if(T){const X=oi[T];G=CM.clone(X.uniforms)}else G=M.uniforms;return G}function S(M,T){let G;for(let X=0,K=c.length;X<K;X++){const I=c[X];if(I.cacheKey===T){G=I,++G.usedTimes;break}}return G===void 0&&(G=new zT(n,T,M,s),c.push(G)),G}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:b}}function VT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function WT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,v,_,y,g){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:v,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},n[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=v,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function a(f,h,v,_,y,g){const u=o(f,h,v,_,y,g);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):t.push(u)}function l(f,h,v,_,y,g){const u=o(f,h,v,_,y,g);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||WT),i.length>1&&i.sort(h||lm),r.length>1&&r.sort(h||lm)}function d(){for(let f=e,h=n.length;f<h;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function XT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cm,n.set(i,[o])):r>=s.length?(o=new cm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function YT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qT=0;function ZT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $T(n,e){const t=new jT,i=YT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new R);const s=new R,o=new Xe,a=new Xe;function l(d,f){let h=0,v=0,_=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,u=0,m=0,p=0,x=0,S=0,A=0,w=0,b=0,M=0;d.sort(ZT);const T=f===!0?Math.PI:1;for(let X=0,K=d.length;X<K;X++){const I=d[X],B=I.color,Z=I.intensity,Y=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*Z*T,v+=B.g*Z*T,_+=B.b*Z*T;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],Z);M++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const k=I.shadow,D=i.get(I);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.directionalShadow[y]=D,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=F,y++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(B).multiplyScalar(Z*T),F.distance=Y,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[u]=F;const k=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,k.updateMatrices(I),I.castShadow&&b++),r.spotLightMatrix[u]=k.matrix,I.castShadow){const D=i.get(I);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.spotShadow[u]=D,r.spotShadowMap[u]=N,A++}u++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(B).multiplyScalar(Z),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=F,m++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*T),F.distance=I.distance,F.decay=I.decay,I.castShadow){const k=I.shadow,D=i.get(I);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,r.pointShadow[g]=D,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=I.shadow.matrix,S++}r.point[g]=F,g++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(Z*T),F.groundColor.copy(I.groundColor).multiplyScalar(Z*T),r.hemi[p]=F,p++}}m>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==y||G.pointLength!==g||G.spotLength!==u||G.rectAreaLength!==m||G.hemiLength!==p||G.numDirectionalShadows!==x||G.numPointShadows!==S||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+w-b,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=M,G.directionalLength=y,G.pointLength=g,G.spotLength=u,G.rectAreaLength=m,G.hemiLength=p,G.numDirectionalShadows=x,G.numPointShadows=S,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=M,r.version=qT++)}function c(d,f){let h=0,v=0,_=0,y=0,g=0;const u=f.matrixWorldInverse;for(let m=0,p=d.length;m<p;m++){const x=d[m];if(x.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),h++}else if(x.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const S=r.point[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(u),v++}else if(x.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function um(n,e){const t=new $T(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function KT(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new um(n,e),t.set(s,[l])):o>=a.length?(l=new um(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class QT extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JT extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n1(n,e,t){let i=new Ah;const r=new ue,s=new ue,o=new Ot,a=new QT({depthPacking:Kx}),l=new JT,c={},d=t.maxTextureSize,f={[or]:_n,[_n]:or,[Qt]:Qt},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new le(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q0;let u=this.type;this.render=function(S,A,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending(tr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=u!==vi&&this.type===vi,K=u===vi&&this.type!==vi;for(let I=0,B=S.length;I<B;I++){const Z=S[I],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const N=Y.getFrameExtents();if(r.multiply(N),s.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/N.x),r.x=s.x*N.x,Y.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/N.y),r.y=s.y*N.y,Y.mapSize.y=s.y)),Y.map===null||X===!0||K===!0){const k=this.type!==vi?{minFilter:on,magFilter:on}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zr(r.x,r.y,k),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const F=Y.getViewportCount();for(let k=0;k<F;k++){const D=Y.getViewport(k);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),G.viewport(o),Y.updateMatrices(Z,k),i=Y.getFrustum(),x(A,w,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===vi&&m(Y,w),Y.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,T)};function m(S,A){const w=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new zr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,w,h,y,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value=S.mapSize,v.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,w,v,y,null)}function p(S,A,w,b){let M=null;const T=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=w.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,X=A.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let I=K[X];I===void 0&&(I=M.clone(),K[X]=I),M=I}if(M.visible=A.visible,M.wireframe=A.wireframe,b===vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=w}return M}function x(S,A,w,b,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===vi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const X=e.update(S),K=S.material;if(Array.isArray(K)){const I=X.groups;for(let B=0,Z=I.length;B<Z;B++){const Y=I[B],N=K[Y.materialIndex];if(N&&N.visible){const F=p(S,N,b,M);n.renderBufferDirect(w,null,X,F,S,Y)}}}else if(K.visible){const I=p(S,K,b,M);n.renderBufferDirect(w,null,X,I,S,null)}}const G=S.children;for(let X=0,K=G.length;X<K;X++)x(G[X],A,w,b,M)}}function i1(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ce=new Ot;let ee=null;const $=new Ot(0,0,0,0);return{setMask:function(re){ee!==re&&!U&&(n.colorMask(re,re,re,re),ee=re)},setLocked:function(re){U=re},setClear:function(re,we,qe,Mt,Ln){Ln===!0&&(re*=Mt,we*=Mt,qe*=Mt),ce.set(re,we,qe,Mt),$.equals(ce)===!1&&(n.clearColor(re,we,qe,Mt),$.copy(ce))},reset:function(){U=!1,ee=null,$.set(-1,0,0,0)}}}function s(){let U=!1,ce=null,ee=null,$=null;return{setTest:function(re){re?Ue(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(re){ce!==re&&!U&&(n.depthMask(re),ce=re)},setFunc:function(re){if(ee!==re){switch(re){case Cx:n.depthFunc(n.NEVER);break;case Px:n.depthFunc(n.ALWAYS);break;case Rx:n.depthFunc(n.LESS);break;case kl:n.depthFunc(n.LEQUAL);break;case bx:n.depthFunc(n.EQUAL);break;case Lx:n.depthFunc(n.GEQUAL);break;case Ix:n.depthFunc(n.GREATER);break;case Dx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=re}},setLocked:function(re){U=re},setClear:function(re){$!==re&&(n.clearDepth(re),$=re)},reset:function(){U=!1,ce=null,ee=null,$=null}}}function o(){let U=!1,ce=null,ee=null,$=null,re=null,we=null,qe=null,Mt=null,Ln=null;return{setTest:function(tt){U||(tt?Ue(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!U&&(n.stencilMask(tt),ce=tt)},setFunc:function(tt,tn,ni){(ee!==tt||$!==tn||re!==ni)&&(n.stencilFunc(tt,tn,ni),ee=tt,$=tn,re=ni)},setOp:function(tt,tn,ni){(we!==tt||qe!==tn||Mt!==ni)&&(n.stencilOp(tt,tn,ni),we=tt,qe=tn,Mt=ni)},setLocked:function(tt){U=tt},setClear:function(tt){Ln!==tt&&(n.clearStencil(tt),Ln=tt)},reset:function(){U=!1,ce=null,ee=null,$=null,re=null,we=null,qe=null,Mt=null,Ln=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},v={},_=new WeakMap,y=[],g=null,u=!1,m=null,p=null,x=null,S=null,A=null,w=null,b=null,M=new Re(0,0,0),T=0,G=!1,X=null,K=null,I=null,B=null,Z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=F>=2);let D=null,z={};const he=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),me=new Ot().fromArray(he),Se=new Ot().fromArray(de);function Ne(U,ce,ee,$){const re=new Uint8Array(4),we=n.createTexture();n.bindTexture(U,we),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ee;qe++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return we}const be={};be[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(kl),ze(!1),Oe(Xf),Ue(n.CULL_FACE),Ie(tr);function Ue(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function it(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Be(U,ce){return v[U]!==ce?(n.bindFramebuffer(U,ce),v[U]=ce,i&&(U===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(U,ce){let ee=y,$=!1;if(U)if(ee=_.get(ce),ee===void 0&&(ee=[],_.set(ce,ee)),U.isWebGLMultipleRenderTargets){const re=U.texture;if(ee.length!==re.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let we=0,qe=re.length;we<qe;we++)ee[we]=n.COLOR_ATTACHMENT0+we;ee.length=re.length,$=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,$=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,$=!0);$&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Vt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Te={[Mr]:n.FUNC_ADD,[hx]:n.FUNC_SUBTRACT,[fx]:n.FUNC_REVERSE_SUBTRACT};if(i)Te[Zf]=n.MIN,Te[$f]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Te[Zf]=U.MIN_EXT,Te[$f]=U.MAX_EXT)}const Le={[px]:n.ZERO,[mx]:n.ONE,[gx]:n.SRC_COLOR,[md]:n.SRC_ALPHA,[Sx]:n.SRC_ALPHA_SATURATE,[xx]:n.DST_COLOR,[_x]:n.DST_ALPHA,[vx]:n.ONE_MINUS_SRC_COLOR,[gd]:n.ONE_MINUS_SRC_ALPHA,[Mx]:n.ONE_MINUS_DST_COLOR,[yx]:n.ONE_MINUS_DST_ALPHA,[Ex]:n.CONSTANT_COLOR,[wx]:n.ONE_MINUS_CONSTANT_COLOR,[Tx]:n.CONSTANT_ALPHA,[Ax]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(U,ce,ee,$,re,we,qe,Mt,Ln,tt){if(U===tr){u===!0&&(it(n.BLEND),u=!1);return}if(u===!1&&(Ue(n.BLEND),u=!0),U!==dx){if(U!==m||tt!==G){if((p!==Mr||A!==Mr)&&(n.blendEquation(n.FUNC_ADD),p=Mr,A=Mr),tt)switch(U){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,S=null,w=null,b=null,M.set(0,0,0),T=0,m=U,G=tt}return}re=re||ce,we=we||ee,qe=qe||$,(ce!==p||re!==A)&&(n.blendEquationSeparate(Te[ce],Te[re]),p=ce,A=re),(ee!==x||$!==S||we!==w||qe!==b)&&(n.blendFuncSeparate(Le[ee],Le[$],Le[we],Le[qe]),x=ee,S=$,w=we,b=qe),(Mt.equals(M)===!1||Ln!==T)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Ln),M.copy(Mt),T=Ln),m=U,G=!1}function lt(U,ce){U.side===Qt?it(n.CULL_FACE):Ue(n.CULL_FACE);let ee=U.side===_n;ce&&(ee=!ee),ze(ee),U.blending===bs&&U.transparent===!1?Ie(tr):Ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const $=U.stencilWrite;c.setTest($),$&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){X!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),X=U)}function Oe(U){U!==cx?(Ue(n.CULL_FACE),U!==K&&(U===Xf?n.cullFace(n.BACK):U===ux?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),K=U}function $e(U){U!==I&&(N&&n.lineWidth(U),I=U)}function xt(U,ce,ee){U?(Ue(n.POLYGON_OFFSET_FILL),(B!==ce||Z!==ee)&&(n.polygonOffset(ce,ee),B=ce,Z=ee)):it(n.POLYGON_OFFSET_FILL)}function bt(U){U?Ue(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+Y-1),D!==U&&(n.activeTexture(U),D=U)}function E(U,ce,ee){ee===void 0&&(D===null?ee=n.TEXTURE0+Y-1:ee=D);let $=z[ee];$===void 0&&($={type:void 0,texture:void 0},z[ee]=$),($.type!==U||$.texture!==ce)&&(D!==ee&&(n.activeTexture(ee),D=ee),n.bindTexture(U,ce||be[U]),$.type=U,$.texture=ce)}function V(){const U=z[D];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function Ae(U){Se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Se.copy(U))}function ye(U,ce){let ee=f.get(ce);ee===void 0&&(ee=new WeakMap,f.set(ce,ee));let $=ee.get(U);$===void 0&&($=n.getUniformBlockIndex(ce,U.name),ee.set(U,$))}function ve(U,ce){const $=f.get(ce).get(U);d.get(ce)!==$&&(n.uniformBlockBinding(ce,$,U.__bindingPointIndex),d.set(ce,$))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},D=null,z={},v={},_=new WeakMap,y=[],g=null,u=!1,m=null,p=null,x=null,S=null,A=null,w=null,b=null,M=new Re(0,0,0),T=0,G=!1,X=null,K=null,I=null,B=null,Z=null,me.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:it,bindFramebuffer:Be,drawBuffers:H,useProgram:Vt,setBlending:Ie,setMaterial:lt,setFlipSided:ze,setCullFace:Oe,setLineWidth:$e,setPolygonOffset:xt,setScissorTest:bt,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:J,texImage2D:Q,texImage3D:Ce,updateUBOMapping:ye,uniformBlockBinding:ve,texStorage2D:L,texStorage3D:se,texSubImage2D:ie,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Me,viewport:Ae,reset:Ye}}function r1(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const g=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return u?new OffscreenCanvas(P,E):Wl("canvas")}function p(P,E,V,ne){let J=1;if((P.width>ne||P.height>ne)&&(J=ne/Math.max(P.width,P.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ie=E?Ed:Math.floor,xe=ie(J*P.width),ae=ie(J*P.height);y===void 0&&(y=m(xe,ae));const pe=V?m(xe,ae):y;return pe.width=xe,pe.height=ae,pe.getContext("2d").drawImage(P,0,0,xe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+xe+"x"+ae+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Ap(P.width)&&Ap(P.height)}function S(P){return a?!1:P.wrapS!==$n||P.wrapT!==$n||P.minFilter!==on&&P.minFilter!==Nn}function A(P,E){return P.generateMipmaps&&E&&P.minFilter!==on&&P.minFilter!==Nn}function w(P){n.generateMipmap(P)}function b(P,E,V,ne,J=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=E;if(E===n.RED&&(V===n.FLOAT&&(ie=n.R32F),V===n.HALF_FLOAT&&(ie=n.R16F),V===n.UNSIGNED_BYTE&&(ie=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.R8UI),V===n.UNSIGNED_SHORT&&(ie=n.R16UI),V===n.UNSIGNED_INT&&(ie=n.R32UI),V===n.BYTE&&(ie=n.R8I),V===n.SHORT&&(ie=n.R16I),V===n.INT&&(ie=n.R32I)),E===n.RG&&(V===n.FLOAT&&(ie=n.RG32F),V===n.HALF_FLOAT&&(ie=n.RG16F),V===n.UNSIGNED_BYTE&&(ie=n.RG8)),E===n.RGBA){const xe=J?Bl:Je.getTransfer(ne);V===n.FLOAT&&(ie=n.RGBA32F),V===n.HALF_FLOAT&&(ie=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ie=xe===st?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(P,E,V){return A(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){return P===on||P===Kf||P===Hc?n.NEAREST:n.LINEAR}function G(P){const E=P.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&_.delete(E)}function X(P){const E=P.target;E.removeEventListener("dispose",X),B(E)}function K(P){const E=i.get(P);if(E.__webglInit===void 0)return;const V=P.source,ne=g.get(V);if(ne){const J=ne[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(P),Object.keys(ne).length===0&&g.delete(V)}i.remove(P)}function I(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const V=P.source,ne=g.get(V);delete ne[E.__cacheKey],o.memory.textures--}function B(P){const E=P.texture,V=i.get(P),ne=i.get(E);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(V.__webglFramebuffer[J]))for(let ie=0;ie<V.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(V.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(V.__webglFramebuffer[J]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[J])}else{if(Array.isArray(V.__webglFramebuffer))for(let J=0;J<V.__webglFramebuffer.length;J++)n.deleteFramebuffer(V.__webglFramebuffer[J]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let J=0;J<V.__webglColorRenderbuffer.length;J++)V.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[J]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let J=0,ie=E.length;J<ie;J++){const xe=i.get(E[J]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(E[J])}i.remove(E),i.remove(P)}let Z=0;function Y(){Z=0}function N(){const P=Z;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Z+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function k(P,E){const V=i.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(V,P,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function D(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function z(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function he(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){it(V,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const de={[yd]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[xd]:n.MIRRORED_REPEAT},me={[on]:n.NEAREST,[Kf]:n.NEAREST_MIPMAP_NEAREST,[Hc]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Bx]:n.LINEAR_MIPMAP_NEAREST,[Ko]:n.LINEAR_MIPMAP_LINEAR},Se={[Jx]:n.NEVER,[oM]:n.ALWAYS,[eM]:n.LESS,[nM]:n.LEQUAL,[tM]:n.EQUAL,[sM]:n.GEQUAL,[iM]:n.GREATER,[rM]:n.NOTEQUAL};function Ne(P,E,V){if(V?(n.texParameteri(P,n.TEXTURE_WRAP_S,de[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,de[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,de[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,me[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,me[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==$n||E.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,T(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==on&&E.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===on||E.minFilter!==Hc&&E.minFilter!==Ko||E.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function be(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",G));const ne=E.source;let J=g.get(ne);J===void 0&&(J={},g.set(ne,J));const ie=F(E);if(ie!==P.__cacheKey){J[ie]===void 0&&(J[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[ie].usedTimes++;const xe=J[P.__cacheKey];xe!==void 0&&(J[P.__cacheKey].usedTimes--,xe.usedTimes===0&&I(E)),P.__cacheKey=ie,P.__webglTexture=J[ie].texture}return V}function Ue(P,E,V){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const J=be(P,E),ie=E.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+V);const xe=i.get(ie);if(ie.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const ae=Je.getPrimaries(Je.workingColorSpace),pe=E.colorSpace===Fn?null:Je.getPrimaries(E.colorSpace),L=E.colorSpace===Fn||ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const se=S(E)&&x(E.image)===!1;let Q=p(E.image,se,!1,d);Q=bt(E,Q);const Ce=x(Q)||a,Me=s.convert(E.format,E.colorSpace);let Ae=s.convert(E.type),ye=b(E.internalFormat,Me,Ae,E.colorSpace,E.isVideoTexture);Ne(ne,E,Ce);let ve;const Ye=E.mipmaps,U=a&&E.isVideoTexture!==!0,ce=xe.__version===void 0||J===!0,ee=M(E,Q,Ce);if(E.isDepthTexture)ye=n.DEPTH_COMPONENT,a?E.type===ji?ye=n.DEPTH_COMPONENT32F:E.type===Xi?ye=n.DEPTH_COMPONENT24:E.type===br?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:E.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Lr&&ye===n.DEPTH_COMPONENT&&E.type!==Eh&&E.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Xi,Ae=s.convert(E.type)),E.format===Hs&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,Ae=s.convert(E.type))),ce&&(U?t.texStorage2D(n.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,Me,Ae,null));else if(E.isDataTexture)if(Ye.length>0&&Ce){U&&ce&&t.texStorage2D(n.TEXTURE_2D,ee,ye,Ye[0].width,Ye[0].height);for(let $=0,re=Ye.length;$<re;$++)ve=Ye[$],U?t.texSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,Me,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,$,ye,ve.width,ve.height,0,Me,Ae,ve.data);E.generateMipmaps=!1}else U?(ce&&t.texStorage2D(n.TEXTURE_2D,ee,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Me,Ae,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,Me,Ae,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ye,Ye[0].width,Ye[0].height,Q.depth);for(let $=0,re=Ye.length;$<re;$++)ve=Ye[$],E.format!==Kn?Me!==null?U?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,Q.depth,Me,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ye,ve.width,ve.height,Q.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,Q.depth,Me,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ye,ve.width,ve.height,Q.depth,0,Me,Ae,ve.data)}else{U&&ce&&t.texStorage2D(n.TEXTURE_2D,ee,ye,Ye[0].width,Ye[0].height);for(let $=0,re=Ye.length;$<re;$++)ve=Ye[$],E.format!==Kn?Me!==null?U?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,Me,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,$,ye,ve.width,ve.height,0,Me,Ae,ve.data)}else if(E.isDataArrayTexture)U?(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Me,Ae,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,Me,Ae,Q.data);else if(E.isData3DTexture)U?(ce&&t.texStorage3D(n.TEXTURE_3D,ee,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Me,Ae,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,Me,Ae,Q.data);else if(E.isFramebufferTexture){if(ce)if(U)t.texStorage2D(n.TEXTURE_2D,ee,ye,Q.width,Q.height);else{let $=Q.width,re=Q.height;for(let we=0;we<ee;we++)t.texImage2D(n.TEXTURE_2D,we,ye,$,re,0,Me,Ae,null),$>>=1,re>>=1}}else if(Ye.length>0&&Ce){U&&ce&&t.texStorage2D(n.TEXTURE_2D,ee,ye,Ye[0].width,Ye[0].height);for(let $=0,re=Ye.length;$<re;$++)ve=Ye[$],U?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Me,Ae,ve):t.texImage2D(n.TEXTURE_2D,$,ye,Me,Ae,ve);E.generateMipmaps=!1}else U?(ce&&t.texStorage2D(n.TEXTURE_2D,ee,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ae,Q)):t.texImage2D(n.TEXTURE_2D,0,ye,Me,Ae,Q);A(E,Ce)&&w(ne),xe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function it(P,E,V){if(E.image.length!==6)return;const ne=be(P,E),J=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const ie=i.get(J);if(J.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const xe=Je.getPrimaries(Je.workingColorSpace),ae=E.colorSpace===Fn?null:Je.getPrimaries(E.colorSpace),pe=E.colorSpace===Fn||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const L=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!L&&!se?Q[$]=p(E.image[$],!1,!0,c):Q[$]=se?E.image[$].image:E.image[$],Q[$]=bt(E,Q[$]);const Ce=Q[0],Me=x(Ce)||a,Ae=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),ve=b(E.internalFormat,Ae,ye,E.colorSpace),Ye=a&&E.isVideoTexture!==!0,U=ie.__version===void 0||ne===!0;let ce=M(E,Ce,Me);Ne(n.TEXTURE_CUBE_MAP,E,Me);let ee;if(L){Ye&&U&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ve,Ce.width,Ce.height);for(let $=0;$<6;$++){ee=Q[$].mipmaps;for(let re=0;re<ee.length;re++){const we=ee[re];E.format!==Kn?Ae!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,we.width,we.height,Ae,ye,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,ve,we.width,we.height,0,Ae,ye,we.data)}}}else{ee=E.mipmaps,Ye&&U&&(ee.length>0&&ce++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ve,Q[0].width,Q[0].height));for(let $=0;$<6;$++)if(se){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Ae,ye,Q[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,Q[$].width,Q[$].height,0,Ae,ye,Q[$].data);for(let re=0;re<ee.length;re++){const qe=ee[re].image[$].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,qe.width,qe.height,Ae,ye,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,ve,qe.width,qe.height,0,Ae,ye,qe.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,ye,Q[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,Ae,ye,Q[$]);for(let re=0;re<ee.length;re++){const we=ee[re];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,Ae,ye,we.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,ve,Ae,ye,we.image[$])}}}A(E,Me)&&w(n.TEXTURE_CUBE_MAP),ie.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Be(P,E,V,ne,J,ie){const xe=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),pe=b(V.internalFormat,xe,ae,V.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>ie),Q=Math.max(1,E.height>>ie);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,pe,se,Q,E.depth,0,xe,ae,null):t.texImage2D(J,ie,pe,se,Q,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$e(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,i.get(V).__webglTexture,0,Oe(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,i.get(V).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(P,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||$e(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===ji?ne=n.DEPTH_COMPONENT32F:J.type===Xi&&(ne=n.DEPTH_COMPONENT24));const ie=Oe(E);$e(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Oe(E);V&&$e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):$e(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<ne.length;J++){const ie=ne[J],xe=s.convert(ie.format,ie.colorSpace),ae=s.convert(ie.type),pe=b(ie.internalFormat,xe,ae,ie.colorSpace),L=Oe(E);V&&$e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,pe,E.width,E.height):$e(E)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,J=Oe(E);if(E.depthTexture.format===Lr)$e(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Hs)$e(E)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(P){const E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Vt(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=n.createRenderbuffer(),H(E.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),H(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(P,E,V){const ne=i.get(P);E!==void 0&&Be(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Te(P)}function Ie(P){const E=P.texture,V=i.get(P),ne=i.get(E);P.addEventListener("dispose",X),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,o.memory.textures++);const J=P.isWebGLCubeRenderTarget===!0,ie=P.isWebGLMultipleRenderTargets===!0,xe=x(P)||a;if(J){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let pe=0;pe<E.mipmaps.length;pe++)V.__webglFramebuffer[ae][pe]=n.createFramebuffer()}else V.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)V.__webglFramebuffer[ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const ae=P.texture;for(let pe=0,L=ae.length;pe<L;pe++){const se=i.get(ae[pe]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&$e(P)===!1){const ae=ie?E:[E];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const L=ae[pe];V.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const se=s.convert(L.format,L.colorSpace),Q=s.convert(L.type),Ce=b(L.internalFormat,se,Q,L.colorSpace,P.isXRRenderTarget===!0),Me=Oe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ce,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),H(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,E,xe);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Be(V.__webglFramebuffer[ae][pe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else Be(V.__webglFramebuffer[ae],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);A(E,xe)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ae=P.texture;for(let pe=0,L=ae.length;pe<L;pe++){const se=ae[pe],Q=i.get(se);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ne(n.TEXTURE_2D,se,xe),Be(V.__webglFramebuffer,P,se,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),A(se,xe)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ae=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),Ne(ae,E,xe),a&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Be(V.__webglFramebuffer[pe],P,E,n.COLOR_ATTACHMENT0,ae,pe);else Be(V.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ae,0);A(E,xe)&&w(ae),t.unbindTexture()}P.depthBuffer&&Te(P)}function lt(P){const E=x(P)||a,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,J=V.length;ne<J;ne++){const ie=V[ne];if(A(ie,E)){const xe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ie).__webglTexture;t.bindTexture(xe,ae),w(xe),t.unbindTexture()}}}function ze(P){if(a&&P.samples>0&&$e(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,ne=P.height;let J=n.COLOR_BUFFER_BIT;const ie=[],xe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(P),pe=P.isWebGLMultipleRenderTargets===!0;if(pe)for(let L=0;L<E.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let L=0;L<E.length;L++){ie.push(n.COLOR_ATTACHMENT0+L),P.depthBuffer&&ie.push(xe);const se=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(se===!1&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[L]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),pe){const Q=i.get(E[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,J,n.NEAREST),v&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let L=0;L<E.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ae.__webglColorRenderbuffer[L]);const se=i.get(E[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(f,P.samples)}function $e(P){const E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(P){const E=o.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function bt(P,E){const V=P.colorSpace,ne=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Md||V!==Pi&&V!==Fn&&(Je.getTransfer(V)===st?a===!1?e.has("EXT_sRGB")===!0&&ne===Kn?(P.format=Md,P.minFilter=Nn,P.generateMipmaps=!1):E=lv.sRGBToLinear(E):(ne!==Kn||J!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=he,this.rebindTextures=Le,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=$e}function s1(n,e,t){const i=t.isWebGL2;function r(s,o=Fn){let a;const l=Je.getTransfer(o);if(s===ir)return n.UNSIGNED_BYTE;if(s===ev)return n.UNSIGNED_SHORT_4_4_4_4;if(s===tv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Hx)return n.BYTE;if(s===Gx)return n.SHORT;if(s===Eh)return n.UNSIGNED_SHORT;if(s===J0)return n.INT;if(s===Xi)return n.UNSIGNED_INT;if(s===ji)return n.FLOAT;if(s===Qo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vx)return n.ALPHA;if(s===Kn)return n.RGBA;if(s===Wx)return n.LUMINANCE;if(s===Xx)return n.LUMINANCE_ALPHA;if(s===Lr)return n.DEPTH_COMPONENT;if(s===Hs)return n.DEPTH_STENCIL;if(s===Md)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jx)return n.RED;if(s===nv)return n.RED_INTEGER;if(s===Yx)return n.RG;if(s===iv)return n.RG_INTEGER;if(s===rv)return n.RGBA_INTEGER;if(s===Gc||s===Vc||s===Wc||s===Xc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qf||s===Jf||s===ep||s===tp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===np||s===ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===np)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ip)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===dp||s===hp||s===fp||s===pp||s===mp||s===gp||s===vp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===op)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ap)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===up)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===_p||s===yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zx||s===xp||s===Mp||s===Sp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class o1 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ya extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class l1 extends Cn{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Lr,d!==Lr&&d!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Lr&&(i=Xi),i===void 0&&d===Hs&&(i=br),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class c1 extends Hr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,v=null,_=null;const y=t.getContextAttributes();let g=null,u=null;const m=[],p=[],x=new On;x.layers.enable(1),x.viewport=new Ot;const S=new On;S.layers.enable(2),S.viewport=new Ot;const A=[x,S],w=new o1;w.layers.enable(1),w.layers.enable(2);let b=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=m[D];return z===void 0&&(z=new gu,m[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=m[D];return z===void 0&&(z=new gu,m[D]=z),z.getGripSpace()},this.getHand=function(D){let z=m[D];return z===void 0&&(z=new gu,m[D]=z),z.getHandSpace()};function T(D){const z=p.indexOf(D.inputSource);if(z===-1)return;const he=m[z];he!==void 0&&(he.update(D.inputSource,D.frame,c||o),he.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let D=0;D<m.length;D++){const z=p[D];z!==null&&(p[D]=null,m[D].disconnect(z))}b=null,M=null,e.setRenderTarget(g),v=null,h=null,f=null,r=null,u=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:v}),u=new zr(v.framebufferWidth,v.framebufferHeight,{format:Kn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let z=null,he=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=y.stencil?Hs:Lr,he=y.stencil?br:Xi);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),u=new zr(h.textureWidth,h.textureHeight,{format:Kn,type:ir,depthTexture:new l1(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Se=e.properties.get(u);Se.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(D){for(let z=0;z<D.removed.length;z++){const he=D.removed[z],de=p.indexOf(he);de>=0&&(p[de]=null,m[de].disconnect(he))}for(let z=0;z<D.added.length;z++){const he=D.added[z];let de=p.indexOf(he);if(de===-1){for(let Se=0;Se<m.length;Se++)if(Se>=p.length){p.push(he),de=Se;break}else if(p[Se]===null){p[Se]=he,de=Se;break}if(de===-1)break}const me=m[de];me&&me.connect(he)}}const K=new R,I=new R;function B(D,z,he){K.setFromMatrixPosition(z.matrixWorld),I.setFromMatrixPosition(he.matrixWorld);const de=K.distanceTo(I),me=z.projectionMatrix.elements,Se=he.projectionMatrix.elements,Ne=me[14]/(me[10]-1),be=me[14]/(me[10]+1),Ue=(me[9]+1)/me[5],it=(me[9]-1)/me[5],Be=(me[8]-1)/me[0],H=(Se[8]+1)/Se[0],Vt=Ne*Be,Te=Ne*H,Le=de/(-Be+H),Ie=Le*-Be;z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ie),D.translateZ(Le),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const lt=Ne+Le,ze=be+Le,Oe=Vt-Ie,$e=Te+(de-Ie),xt=Ue*be/ze*lt,bt=it*be/ze*lt;D.projectionMatrix.makePerspective(Oe,$e,xt,bt,lt,ze),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Z(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;w.near=S.near=x.near=D.near,w.far=S.far=x.far=D.far,(b!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,M=w.far);const z=D.parent,he=w.cameras;Z(w,z);for(let de=0;de<he.length;de++)Z(he[de],z);he.length===2?B(w,x,S):w.projectionMatrix.copy(x.projectionMatrix),Y(D,w,z)};function Y(D,z,he){he===null?D.matrix.copy(z.matrixWorld):(D.matrix.copy(he.matrixWorld),D.matrix.invert(),D.matrix.multiply(z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Sd*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=D)};let N=null;function F(D,z){if(d=z.getViewerPose(c||o),_=z,d!==null){const he=d.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let de=!1;he.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let me=0;me<he.length;me++){const Se=he[me];let Ne=null;if(v!==null)Ne=v.getViewport(Se);else{const Ue=f.getViewSubImage(h,Se);Ne=Ue.viewport,me===0&&(e.setRenderTargetTextures(u,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(u))}let be=A[me];be===void 0&&(be=new On,be.layers.enable(me),be.viewport=new Ot,A[me]=be),be.matrix.fromArray(Se.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Se.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(w.matrix.copy(be.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(be)}}for(let he=0;he<m.length;he++){const de=p[he],me=m[he];de!==null&&me!==void 0&&me.update(de,z,c||o)}N&&N(D,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),_=null}const k=new vv;k.setAnimationLoop(F),this.setAnimationLoop=function(D){N=D},this.dispose=function(){}}}function u1(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,pv(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,p,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&v(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,m,p):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===_n&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===_n&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const p=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*p,t(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,p){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=p*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function v(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_n&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,p){const x=p.program;i.uniformBlockBinding(m,x)}function c(m,p){let x=r[m.id];x===void 0&&(_(m),x=d(m),r[m.id]=x,m.addEventListener("dispose",g));const S=p.program;i.updateUBOMapping(m,S);const A=e.render.frame;s[m.id]!==A&&(h(m),s[m.id]=A)}function d(m){const p=f();m.__bindingPointIndex=p;const x=n.createBuffer(),S=m.__size,A=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,p,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const p=r[m.id],x=m.uniforms,S=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,p);for(let A=0,w=x.length;A<w;A++){const b=x[A];if(v(b,A,S)===!0){const M=b.__offset,T=Array.isArray(b.value)?b.value:[b.value];let G=0;for(let X=0;X<T.length;X++){const K=T[X],I=y(K);typeof K=="number"?(b.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,M+G,b.__data)):K.isMatrix3?(b.__data[0]=K.elements[0],b.__data[1]=K.elements[1],b.__data[2]=K.elements[2],b.__data[3]=K.elements[0],b.__data[4]=K.elements[3],b.__data[5]=K.elements[4],b.__data[6]=K.elements[5],b.__data[7]=K.elements[0],b.__data[8]=K.elements[6],b.__data[9]=K.elements[7],b.__data[10]=K.elements[8],b.__data[11]=K.elements[0]):(K.toArray(b.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(m,p,x){const S=m.value;if(x[p]===void 0){if(typeof S=="number")x[p]=S;else{const A=Array.isArray(S)?S:[S],w=[];for(let b=0;b<A.length;b++)w.push(A[b].clone());x[p]=w}return!0}else if(typeof S=="number"){if(x[p]!==S)return x[p]=S,!0}else{const A=Array.isArray(x[p])?x[p]:[x[p]],w=Array.isArray(S)?S:[S];for(let b=0;b<A.length;b++){const M=A[b];if(M.equals(w[b])===!1)return M.copy(w[b]),!0}}return!1}function _(m){const p=m.uniforms;let x=0;const S=16;let A=0;for(let w=0,b=p.length;w<b;w++){const M=p[w],T={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let X=0,K=G.length;X<K;X++){const I=G[X],B=y(I);T.boundary+=B.boundary,T.storage+=B.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,w>0){A=x%S;const X=S-A;A!==0&&X-T.boundary<0&&(x+=S-A,M.__offset=x)}x+=T.storage}return A=x%S,A>0&&(x+=S-A),m.__size=x,m.__cache={},this}function y(m){const p={boundary:0,storage:0};return typeof m=="number"?(p.boundary=4,p.storage=4):m.isVector2?(p.boundary=8,p.storage=8):m.isVector3||m.isColor?(p.boundary=16,p.storage=12):m.isVector4?(p.boundary=16,p.storage=16):m.isMatrix3?(p.boundary=48,p.storage=48):m.isMatrix4?(p.boundary=64,p.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),p}function g(m){const p=m.target;p.removeEventListener("dispose",g);const x=o.indexOf(p.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Td{constructor(e={}){const{canvas:t=cM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const v=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const u=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const p=this;let x=!1,S=0,A=0,w=null,b=-1,M=null;const T=new Ot,G=new Ot;let X=null;const K=new Re(0);let I=0,B=t.width,Z=t.height,Y=1,N=null,F=null;const k=new Ot(0,0,B,Z),D=new Ot(0,0,B,Z);let z=!1;const he=new Ah;let de=!1,me=!1,Se=null;const Ne=new Xe,be=new ue,Ue=new R,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?Y:1}let H=i;function Vt(C,O){for(let W=0;W<C.length;W++){const j=C[W],q=t.getContext(j,O);if(q!==null)return q}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sh}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ce,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),H=Vt(O,C),H===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,Le,Ie,lt,ze,Oe,$e,xt,bt,P,E,V,ne,J,ie,xe,ae,pe,L,se,Q,Ce,Me,Ae;function ye(){Te=new Mw(H),Le=new mw(H,Te,e),Te.init(Le),Ce=new s1(H,Te,Le),Ie=new i1(H,Te,Le),lt=new ww(H),ze=new VT,Oe=new r1(H,Te,Ie,ze,Le,Ce,lt),$e=new vw(p),xt=new xw(p),bt=new UM(H,Le),Me=new fw(H,Te,bt,Le),P=new Sw(H,bt,lt,Me),E=new Pw(H,P,bt,lt),L=new Cw(H,Le,Oe),xe=new gw(ze),V=new GT(p,$e,xt,Te,Le,Me,xe),ne=new u1(p,ze),J=new XT,ie=new KT(Te,Le),pe=new hw(p,$e,xt,Ie,E,h,l),ae=new n1(p,E,Le),Ae=new d1(H,lt,Le,Ie),se=new pw(H,Te,lt,Le),Q=new Ew(H,Te,lt,Le),lt.programs=V.programs,p.capabilities=Le,p.extensions=Te,p.properties=ze,p.renderLists=J,p.shadowMap=ae,p.state=Ie,p.info=lt}ye();const ve=new c1(p,H);this.xr=ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(B,Z,!1))},this.getSize=function(C){return C.set(B,Z)},this.setSize=function(C,O,W=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Z=O,t.width=Math.floor(C*Y),t.height=Math.floor(O*Y),W===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(C,O,W){B=C,Z=O,Y=W,t.width=Math.floor(C*W),t.height=Math.floor(O*W),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,O,W,j){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,O,W,j),Ie.viewport(T.copy(k).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,O,W,j){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,O,W,j),Ie.scissor(G.copy(D).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){Ie.setScissorTest(z=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,O=!0,W=!0){let j=0;if(C){let q=!1;if(w!==null){const ge=w.texture.format;q=ge===rv||ge===iv||ge===nv}if(q){const ge=w.texture.type,Ee=ge===ir||ge===Xi||ge===Eh||ge===br||ge===ev||ge===tv,Pe=pe.getClearColor(),De=pe.getClearAlpha(),Ge=Pe.r,Fe=Pe.g,ke=Pe.b;Ee?(v[0]=Ge,v[1]=Fe,v[2]=ke,v[3]=De,H.clearBufferuiv(H.COLOR,0,v)):(_[0]=Ge,_[1]=Fe,_[2]=ke,_[3]=De,H.clearBufferiv(H.COLOR,0,_))}else j|=H.COLOR_BUFFER_BIT}O&&(j|=H.DEPTH_BUFFER_BIT),W&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ie.dispose(),ze.dispose(),$e.dispose(),xt.dispose(),E.dispose(),Me.dispose(),Ae.dispose(),V.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ln),ve.removeEventListener("sessionend",tt),Se&&(Se.dispose(),Se=null),tn.stop()};function Ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=lt.autoReset,O=ae.enabled,W=ae.autoUpdate,j=ae.needsUpdate,q=ae.type;ye(),lt.autoReset=C,ae.enabled=O,ae.autoUpdate=W,ae.needsUpdate=j,ae.type=q}function ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){const O=C.target;O.removeEventListener("dispose",ee),$(O)}function $(C){re(C),ze.remove(C)}function re(C){const O=ze.get(C).programs;O!==void 0&&(O.forEach(function(W){V.releaseProgram(W)}),C.isShaderMaterial&&V.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,W,j,q,ge){O===null&&(O=it);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Pe=Rv(C,O,W,j,q);Ie.setMaterial(j,Ee);let De=W.index,Ge=1;if(j.wireframe===!0){if(De=P.getWireframeAttribute(W),De===void 0)return;Ge=2}const Fe=W.drawRange,ke=W.attributes.position;let _t=Fe.start*Ge,yn=(Fe.start+Fe.count)*Ge;ge!==null&&(_t=Math.max(_t,ge.start*Ge),yn=Math.min(yn,(ge.start+ge.count)*Ge)),De!==null?(_t=Math.max(_t,0),yn=Math.min(yn,De.count)):ke!=null&&(_t=Math.max(_t,0),yn=Math.min(yn,ke.count));const Lt=yn-_t;if(Lt<0||Lt===1/0)return;Me.setup(q,j,Pe,W,De);let di,gt=se;if(De!==null&&(di=bt.get(De),gt=Q,gt.setIndex(di)),q.isMesh)j.wireframe===!0?(Ie.setLineWidth(j.wireframeLinewidth*Be()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(q.isLine){let Ze=j.linewidth;Ze===void 0&&(Ze=1),Ie.setLineWidth(Ze*Be()),q.isLineSegments?gt.setMode(H.LINES):q.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else q.isPoints?gt.setMode(H.POINTS):q.isSprite&&gt.setMode(H.TRIANGLES);if(q.isInstancedMesh)gt.renderInstances(_t,Lt,q.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dc=Math.min(W.instanceCount,Ze);gt.renderInstances(_t,Lt,dc)}else gt.render(_t,Lt)};function we(C,O,W){C.transparent===!0&&C.side===Qt&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,aa(C,O,W),C.side=or,C.needsUpdate=!0,aa(C,O,W),C.side=Qt):aa(C,O,W)}this.compile=function(C,O,W=null){W===null&&(W=C),g=ie.get(W),g.init(),m.push(g),W.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),C!==W&&C.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(p._useLegacyLights);const j=new Set;return C.traverse(function(q){const ge=q.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Pe=ge[Ee];we(Pe,W,q),j.add(Pe)}else we(ge,W,q),j.add(ge)}),m.pop(),g=null,j},this.compileAsync=function(C,O,W=null){const j=this.compile(C,O,W);return new Promise(q=>{function ge(){if(j.forEach(function(Ee){ze.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){q(C);return}setTimeout(ge,10)}Te.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let qe=null;function Mt(C){qe&&qe(C)}function Ln(){tn.stop()}function tt(){tn.start()}const tn=new vv;tn.setAnimationLoop(Mt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){qe=C,ve.setAnimationLoop(C),C===null?tn.stop():tn.start()},ve.addEventListener("sessionstart",Ln),ve.addEventListener("sessionend",tt),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,O,w),g=ie.get(C,m.length),g.init(),m.push(g),Ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),he.setFromProjectionMatrix(Ne),me=this.localClippingEnabled,de=xe.init(this.clippingPlanes,me),y=J.get(C,u.length),y.init(),u.push(y),ni(C,O,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(N,F),this.info.render.frame++,de===!0&&xe.beginShadows();const W=g.state.shadowsArray;if(ae.render(W,C,O),de===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(y,C),g.setupLights(p._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let q=0,ge=j.length;q<ge;q++){const Ee=j[q];Rh(y,C,Ee,Ee.viewport)}}else Rh(y,C,O);w!==null&&(Oe.updateMultisampleRenderTarget(w),Oe.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(p,C,O),Me.resetDefaultState(),b=-1,M=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ni(C,O,W,j){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||he.intersectsSprite(C)){j&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const Ee=E.update(C),Pe=C.material;Pe.visible&&y.push(C,Ee,Pe,W,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||he.intersectsObject(C))){const Ee=E.update(C),Pe=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(Pe)){const De=Ee.groups;for(let Ge=0,Fe=De.length;Ge<Fe;Ge++){const ke=De[Ge],_t=Pe[ke.materialIndex];_t&&_t.visible&&y.push(C,Ee,_t,W,Ue.z,ke)}}else Pe.visible&&y.push(C,Ee,Pe,W,Ue.z,null)}}const ge=C.children;for(let Ee=0,Pe=ge.length;Ee<Pe;Ee++)ni(ge[Ee],O,W,j)}function Rh(C,O,W,j){const q=C.opaque,ge=C.transmissive,Ee=C.transparent;g.setupLightsView(W),de===!0&&xe.setGlobalState(p.clippingPlanes,W),ge.length>0&&Pv(q,ge,O,W),j&&Ie.viewport(T.copy(j)),q.length>0&&oa(q,O,W),ge.length>0&&oa(ge,O,W),Ee.length>0&&oa(Ee,O,W),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Pv(C,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ge=Le.isWebGL2;Se===null&&(Se=new zr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Qo:ir,minFilter:Ko,samples:ge?4:0})),p.getDrawingBufferSize(be),ge?Se.setSize(be.x,be.y):Se.setSize(Ed(be.x),Ed(be.y));const Ee=p.getRenderTarget();p.setRenderTarget(Se),p.getClearColor(K),I=p.getClearAlpha(),I<1&&p.setClearColor(16777215,.5),p.clear();const Pe=p.toneMapping;p.toneMapping=nr,oa(C,W,j),Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se);let De=!1;for(let Ge=0,Fe=O.length;Ge<Fe;Ge++){const ke=O[Ge],_t=ke.object,yn=ke.geometry,Lt=ke.material,di=ke.group;if(Lt.side===Qt&&_t.layers.test(j.layers)){const gt=Lt.side;Lt.side=_n,Lt.needsUpdate=!0,bh(_t,W,j,yn,Lt,di),Lt.side=gt,Lt.needsUpdate=!0,De=!0}}De===!0&&(Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se)),p.setRenderTarget(Ee),p.setClearColor(K,I),p.toneMapping=Pe}function oa(C,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ge=C.length;q<ge;q++){const Ee=C[q],Pe=Ee.object,De=Ee.geometry,Ge=j===null?Ee.material:j,Fe=Ee.group;Pe.layers.test(W.layers)&&bh(Pe,O,W,De,Ge,Fe)}}function bh(C,O,W,j,q,ge){C.onBeforeRender(p,O,W,j,q,ge),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(p,O,W,j,C,ge),q.transparent===!0&&q.side===Qt&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,p.renderBufferDirect(W,O,j,q,C,ge),q.side=or,q.needsUpdate=!0,p.renderBufferDirect(W,O,j,q,C,ge),q.side=Qt):p.renderBufferDirect(W,O,j,q,C,ge),C.onAfterRender(p,O,W,j,q,ge)}function aa(C,O,W){O.isScene!==!0&&(O=it);const j=ze.get(C),q=g.state.lights,ge=g.state.shadowsArray,Ee=q.state.version,Pe=V.getParameters(C,q.state,ge,O,W),De=V.getProgramCacheKey(Pe);let Ge=j.programs;j.environment=C.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(C.isMeshStandardMaterial?xt:$e).get(C.envMap||j.environment),Ge===void 0&&(C.addEventListener("dispose",ee),Ge=new Map,j.programs=Ge);let Fe=Ge.get(De);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===Ee)return Ih(C,Pe),Fe}else Pe.uniforms=V.getUniforms(C),C.onBuild(W,Pe,p),C.onBeforeCompile(Pe,p),Fe=V.acquireProgram(Pe,De),Ge.set(De,Fe),j.uniforms=Pe.uniforms;const ke=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Ih(C,Pe),j.needsLights=Lv(C),j.lightsStateVersion=Ee,j.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function Lh(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=fl.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Ih(C,O){const W=ze.get(C);W.outputColorSpace=O.outputColorSpace,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Rv(C,O,W,j,q){O.isScene!==!0&&(O=it),Oe.resetTextureUnits();const ge=O.fog,Ee=j.isMeshStandardMaterial?O.environment:null,Pe=w===null?p.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Pi,De=(j.isMeshStandardMaterial?xt:$e).get(j.envMap||Ee),Ge=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!W.morphAttributes.position,_t=!!W.morphAttributes.normal,yn=!!W.morphAttributes.color;let Lt=nr;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=p.toneMapping);const di=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=di!==void 0?di.length:0,Ze=ze.get(j),dc=g.state.lights;if(de===!0&&(me===!0||C!==M)){const xn=C===M&&j.id===b;xe.setState(j,C,xn)}let St=!1;j.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==dc.state.version||Ze.outputColorSpace!==Pe||q.isInstancedMesh&&Ze.instancing===!1||!q.isInstancedMesh&&Ze.instancing===!0||q.isSkinnedMesh&&Ze.skinning===!1||!q.isSkinnedMesh&&Ze.skinning===!0||q.isInstancedMesh&&Ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ze.instancingColor===!1&&q.instanceColor!==null||Ze.envMap!==De||j.fog===!0&&Ze.fog!==ge||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==xe.numPlanes||Ze.numIntersection!==xe.numIntersection)||Ze.vertexAlphas!==Ge||Ze.vertexTangents!==Fe||Ze.morphTargets!==ke||Ze.morphNormals!==_t||Ze.morphColors!==yn||Ze.toneMapping!==Lt||Le.isWebGL2===!0&&Ze.morphTargetsCount!==gt)&&(St=!0):(St=!0,Ze.__version=j.version);let ur=Ze.currentProgram;St===!0&&(ur=aa(j,O,q));let Dh=!1,Ks=!1,hc=!1;const nn=ur.getUniforms(),dr=Ze.uniforms;if(Ie.useProgram(ur.program)&&(Dh=!0,Ks=!0,hc=!0),j.id!==b&&(b=j.id,Ks=!0),Dh||M!==C){nn.setValue(H,"projectionMatrix",C.projectionMatrix),nn.setValue(H,"viewMatrix",C.matrixWorldInverse);const xn=nn.map.cameraPosition;xn!==void 0&&xn.setValue(H,Ue.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&nn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&nn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ks=!0,hc=!0)}if(q.isSkinnedMesh){nn.setOptional(H,q,"bindMatrix"),nn.setOptional(H,q,"bindMatrixInverse");const xn=q.skeleton;xn&&(Le.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),nn.setValue(H,"boneTexture",xn.boneTexture,Oe),nn.setValue(H,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fc=W.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&Le.isWebGL2===!0)&&L.update(q,W,ur),(Ks||Ze.receiveShadow!==q.receiveShadow)&&(Ze.receiveShadow=q.receiveShadow,nn.setValue(H,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dr.envMap.value=De,dr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ks&&(nn.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&bv(dr,hc),ge&&j.fog===!0&&ne.refreshFogUniforms(dr,ge),ne.refreshMaterialUniforms(dr,j,Y,Z,Se),fl.upload(H,Lh(Ze),dr,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fl.upload(H,Lh(Ze),dr,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&nn.setValue(H,"center",q.center),nn.setValue(H,"modelViewMatrix",q.modelViewMatrix),nn.setValue(H,"normalMatrix",q.normalMatrix),nn.setValue(H,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xn=j.uniformsGroups;for(let pc=0,Iv=xn.length;pc<Iv;pc++)if(Le.isWebGL2){const Uh=xn[pc];Ae.update(Uh,ur),Ae.bind(Uh,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function bv(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function Lv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,O,W){ze.get(C.texture).__webglTexture=O,ze.get(C.depthTexture).__webglTexture=W;const j=ze.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,O){const W=ze.get(C);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,W=0){w=C,S=O,A=W;let j=!0,q=null,ge=!1,Ee=!1;if(C){const De=ze.get(C);De.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):De.__webglFramebuffer===void 0?Oe.setupRenderTarget(C):De.__hasExternalTextures&&Oe.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Fe=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?q=Fe[O][W]:q=Fe[O],ge=!0):Le.isWebGL2&&C.samples>0&&Oe.useMultisampledRTT(C)===!1?q=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[W]:q=Fe,T.copy(C.viewport),G.copy(C.scissor),X=C.scissorTest}else T.copy(k).multiplyScalar(Y).floor(),G.copy(D).multiplyScalar(Y).floor(),X=z;if(Ie.bindFramebuffer(H.FRAMEBUFFER,q)&&Le.drawBuffers&&j&&Ie.drawBuffers(C,q),Ie.viewport(T),Ie.scissor(G),Ie.setScissorTest(X),ge){const De=ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,W)}else if(Ee){const De=ze.get(C.texture),Ge=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,W||0,Ge)}b=-1},this.readRenderTargetPixels=function(C,O,W,j,q,ge,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){Ie.bindFramebuffer(H.FRAMEBUFFER,Pe);try{const De=C.texture,Ge=De.format,Fe=De.type;if(Ge!==Kn&&Ce.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Qo&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==ir&&Ce.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===ji&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-j&&W>=0&&W<=C.height-q&&H.readPixels(O,W,j,q,Ce.convert(Ge),Ce.convert(Fe),ge)}finally{const De=w!==null?ze.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(C,O,W=0){const j=Math.pow(2,-W),q=Math.floor(O.image.width*j),ge=Math.floor(O.image.height*j);Oe.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,C.x,C.y,q,ge),Ie.unbindTexture()},this.copyTextureToTexture=function(C,O,W,j=0){const q=O.image.width,ge=O.image.height,Ee=Ce.convert(W.format),Pe=Ce.convert(W.type);Oe.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,C.x,C.y,q,ge,Ee,Pe,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,C.x,C.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,C.x,C.y,Ee,Pe,O.image),j===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(C,O,W,j,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,Pe=C.max.z-C.min.z+1,De=Ce.convert(j.format),Ge=Ce.convert(j.type);let Fe;if(j.isData3DTexture)Oe.setTexture3D(j,0),Fe=H.TEXTURE_3D;else if(j.isDataArrayTexture)Oe.setTexture2DArray(j,0),Fe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const ke=H.getParameter(H.UNPACK_ROW_LENGTH),_t=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yn=H.getParameter(H.UNPACK_SKIP_PIXELS),Lt=H.getParameter(H.UNPACK_SKIP_ROWS),di=H.getParameter(H.UNPACK_SKIP_IMAGES),gt=W.isCompressedTexture?W.mipmaps[0]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Fe,q,O.x,O.y,O.z,ge,Ee,Pe,De,Ge,gt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,q,O.x,O.y,O.z,ge,Ee,Pe,De,gt.data)):H.texSubImage3D(Fe,q,O.x,O.y,O.z,ge,Ee,Pe,De,Ge,gt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,di),q===0&&j.generateMipmaps&&H.generateMipmap(Fe),Ie.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){S=0,A=0,w=null,Ie.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wh?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===lc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ir:sv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?Nt:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class h1 extends Td{}h1.prototype.isWebGL1Renderer=!0;let f1=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class dm extends Bt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Xe,hm=new Xe,qa=[],fm=new Gr,p1=new Xe,ho=new le,fo=new qs;class Qn extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,p1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ls),fm.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(fm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ls),fo.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(i),e.ray.intersectsSphere(fo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),hm.multiplyMatrices(i,ls),ho.matrixWorld=hm,ho.raycast(e,qa);for(let o=0,a=qa.length;o<a;o++){const l=qa[o];l.instanceId=s,l.object=this,t.push(l)}qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ev extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pm=new R,mm=new R,gm=new Xe,vu=new cc,Za=new qs;class Oi extends pt{constructor(e=new en,t=new Ev){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pm.fromBufferAttribute(t,r-1),mm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pm.distanceTo(mm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;gm.copy(r).invert(),vu.copy(e.ray).applyMatrix4(gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,d=new R,f=new R,h=new R,v=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let p=u,x=m-1;p<x;p+=v){const S=_.getX(p),A=_.getX(p+1);if(c.fromBufferAttribute(g,S),d.fromBufferAttribute(g,A),vu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let p=u,x=m-1;p<x;p+=v){if(c.fromBufferAttribute(g,p),d.fromBufferAttribute(g,p+1),vu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ws extends en{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new R,d=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const v=i+f/t*r;c.x=e*Math.cos(v),c.y=e*Math.sin(v),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zt extends en{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],v=[];let _=0;const y=[],g=i/2;let u=0;m(),o===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(v,2));function m(){const x=new R,S=new R;let A=0;const w=(t-e)/i;for(let b=0;b<=s;b++){const M=[],T=b/s,G=T*(t-e)+e;for(let X=0;X<=r;X++){const K=X/r,I=K*l+a,B=Math.sin(I),Z=Math.cos(I);S.x=G*B,S.y=-T*i+g,S.z=G*Z,f.push(S.x,S.y,S.z),x.set(B,w,Z).normalize(),h.push(x.x,x.y,x.z),v.push(K,1-T),M.push(_++)}y.push(M)}for(let b=0;b<r;b++)for(let M=0;M<s;M++){const T=y[M][b],G=y[M+1][b],X=y[M+1][b+1],K=y[M][b+1];d.push(T,G,K),d.push(G,X,K),A+=6}c.addGroup(u,A,0),u+=A}function p(x){const S=_,A=new ue,w=new R;let b=0;const M=x===!0?e:t,T=x===!0?1:-1;for(let X=1;X<=r;X++)f.push(0,g*T,0),h.push(0,T,0),v.push(.5,.5),_++;const G=_;for(let X=0;X<=r;X++){const I=X/r*l+a,B=Math.cos(I),Z=Math.sin(I);w.x=M*Z,w.y=g*T,w.z=M*B,f.push(w.x,w.y,w.z),h.push(0,T,0),A.x=B*.5+.5,A.y=Z*.5*T+.5,v.push(A.x,A.y),_++}for(let X=0;X<r;X++){const K=S+X,I=G+X;x===!0?d.push(I,I+1,K):d.push(I+1,I,K),b+=3}c.addGroup(u,b,x===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph extends en{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const p=new R,x=new R,S=new R;for(let A=0;A<t.length;A+=3)v(t[A+0],p),v(t[A+1],x),v(t[A+2],S),l(p,x,S,m)}function l(m,p,x,S){const A=S+1,w=[];for(let b=0;b<=A;b++){w[b]=[];const M=m.clone().lerp(x,b/A),T=p.clone().lerp(x,b/A),G=A-b;for(let X=0;X<=G;X++)X===0&&b===A?w[b][X]=M:w[b][X]=M.clone().lerp(T,X/G)}for(let b=0;b<A;b++)for(let M=0;M<2*(A-b)-1;M++){const T=Math.floor(M/2);M%2===0?(h(w[b][T+1]),h(w[b+1][T]),h(w[b][T])):(h(w[b][T+1]),h(w[b+1][T+1]),h(w[b+1][T]))}}function c(m){const p=new R;for(let x=0;x<s.length;x+=3)p.x=s[x+0],p.y=s[x+1],p.z=s[x+2],p.normalize().multiplyScalar(m),s[x+0]=p.x,s[x+1]=p.y,s[x+2]=p.z}function d(){const m=new R;for(let p=0;p<s.length;p+=3){m.x=s[p+0],m.y=s[p+1],m.z=s[p+2];const x=g(m)/2/Math.PI+.5,S=u(m)/Math.PI+.5;o.push(x,1-S)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){const p=o[m+0],x=o[m+2],S=o[m+4],A=Math.max(p,x,S),w=Math.min(p,x,S);A>.9&&w<.1&&(p<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),S<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function v(m,p){const x=m*3;p.x=e[x+0],p.y=e[x+1],p.z=e[x+2]}function _(){const m=new R,p=new R,x=new R,S=new R,A=new ue,w=new ue,b=new ue;for(let M=0,T=0;M<s.length;M+=9,T+=6){m.set(s[M+0],s[M+1],s[M+2]),p.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),A.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),b.set(o[T+4],o[T+5]),S.copy(m).add(p).add(x).divideScalar(3);const G=g(S);y(A,T+0,m,G),y(w,T+2,p,G),y(b,T+4,x,G)}}function y(m,p,x,S){S<0&&m.x===1&&(o[p]=m.x-1),x.x===0&&x.z===0&&(o[p]=S/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.vertices,e.indices,e.radius,e.details)}}class Es extends Ph{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Es(e.radius,e.detail)}}class Jo extends en{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new R,h=new R,v=[],_=[],y=[],g=[];for(let u=0;u<=i;u++){const m=[],p=u/i;let x=0;u===0&&o===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const A=S/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+p*a),f.y=e*Math.cos(o+p*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+p*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(A+x,1-p),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<t;m++){const p=d[u][m+1],x=d[u][m],S=d[u+1][m],A=d[u+1][m+1];(u!==0||o>0)&&v.push(p,x,A),(u!==i-1||l<Math.PI)&&v.push(x,S,A)}this.setIndex(v),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Er extends en{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new R,f=new R,h=new R;for(let v=0;v<=i;v++)for(let _=0;_<=r;_++){const y=_/r*s,g=v/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(v/i)}for(let v=1;v<=i;v++)for(let _=1;_<=r;_++){const y=(r+1)*v+_-1,g=(r+1)*(v-1)+_-1,u=(r+1)*(v-1)+_,m=(r+1)*v+_;o.push(y,g,m),o.push(g,u,m)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wv extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m1 extends wv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tv extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _u=new Xe,vm=new R,_m=new R;class g1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(vm),_m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_m),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class v1 extends g1{constructor(){super(new _v(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends Tv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new v1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _1 extends Tv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Av{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xm(){return(typeof performance>"u"?Date:performance).now()}class Cv{constructor(e,t,i=0,r=1/0){this.ray=new cc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ad(e,this,i,t),i.sort(Mm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ad(e[r],this,i,t);return i.sort(Mm),i}}function Mm(n,e){return n.distance-e.distance}function Ad(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Ad(r[s],e,t,!0)}}class Sm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);class y1{constructor(e){oe(this,"renderer");if(!e)throw new Error("Canvas element is required for WebGL renderer");(!e.width||!e.height)&&(e.width=window.innerWidth,e.height=window.innerHeight);try{this.renderer=new Td({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0,failIfMajorPerformanceCaveat:!1}),this.configure()}catch(t){console.error("Failed to create WebGL renderer:",t);try{console.log("Attempting fallback renderer..."),this.renderer=new Td({canvas:e,antialias:!1,alpha:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),this.configure(),console.log("Fallback renderer created successfully")}catch(i){throw console.error("Fallback renderer also failed:",i),new Error("WebGL initialization failed. Please check your browser and hardware support.")}}}configure(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(1710618),this.renderer.outputColorSpace=Nt,this.renderer.toneMapping=K0,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Z0,this.renderer.info.autoReset=!1}resize(e,t){this.renderer.setSize(e,t)}render(e,t){this.renderer.render(e,t)}dispose(){this.renderer.dispose(),this.renderer.forceContextLoss()}getMemoryInfo(){return{geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}}}class Em{constructor(){oe(this,"scene");oe(this,"layers");this.scene=new f1,this.layers=new Map,this.setupLighting(),this.createLayers()}setupLighting(){const e=new _1(16777215,.4);this.scene.add(e);const t=new ym(16777215,.8);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=100,t.shadow.camera.left=-50,t.shadow.camera.right=50,t.shadow.camera.top=50,t.shadow.camera.bottom=-50,this.scene.add(t);const i=new ym(16777215,.3);i.position.set(-10,10,-10),this.scene.add(i)}createLayers(){["board","topCopper","bottomCopper","components"].forEach(t=>{const i=new pt;i.name=t,this.layers.set(t,i),this.scene.add(i)})}addToLayer(e,t){const i=this.layers.get(t);i?i.add(e):(console.warn(`Layer "${t}" not found. Adding to scene directly.`),this.scene.add(e))}getLayer(e){return this.layers.get(e)}removeFromLayer(e,t){const i=this.layers.get(t);i&&i.remove(e)}dispose(){this.scene.traverse(e=>{e instanceof le&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))}),this.layers.clear(),this.scene.clear()}}const wm={type:"change"},yu={type:"start"},Tm={type:"end"},$a=new cc,Am=new Bi,x1=Math.cos(70*lM.DEG2RAD);class M1 extends Hr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",E),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wm),i.update(),s=r.NONE},this.update=function(){const L=new R,se=new At().setFromUnitVectors(e.up,new R(0,1,0)),Q=se.clone().invert(),Ce=new R,Me=new At,Ae=new R,ye=2*Math.PI;return function(Ye=null){const U=i.object.position;L.copy(U).sub(i.target),L.applyQuaternion(se),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&G(M(Ye)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(ce)&&isFinite(ee)&&(ce<-Math.PI?ce+=ye:ce>Math.PI&&(ce-=ye),ee<-Math.PI?ee+=ye:ee>Math.PI&&(ee-=ye),ce<=ee?a.theta=Math.max(ce,Math.min(ee,a.theta)):a.theta=a.theta>(ce+ee)/2?Math.max(ce,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=F(a.radius):a.radius=F(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Q),U.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let $=!1;if(i.zoomToCursor&&A){let re=null;if(i.object.isPerspectiveCamera){const we=L.length();re=F(we*c);const qe=we-re;i.object.position.addScaledVector(x,qe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const we=new R(S.x,S.y,0);we.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0;const qe=new R(S.x,S.y,0);qe.unproject(i.object),i.object.position.sub(qe).add(we),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):($a.origin.copy(i.object.position),$a.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($a.direction))<x1?e.lookAt(i.target):(Am.setFromNormalAndCoplanarPoint(i.object.up,i.target),$a.intersectPlane(Am,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0);return c=1,A=!1,$||Ce.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o||Ae.distanceToSquared(i.target)>0?(i.dispatchEvent(wm),Ce.copy(i.object.position),Me.copy(i.object.quaternion),Ae.copy(i.target),$=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",ze),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",P),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",E),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Sm,l=new Sm;let c=1;const d=new R,f=new ue,h=new ue,v=new ue,_=new ue,y=new ue,g=new ue,u=new ue,m=new ue,p=new ue,x=new R,S=new ue;let A=!1;const w=[],b={};function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function G(L){l.theta-=L}function X(L){l.phi-=L}const K=function(){const L=new R;return function(Q,Ce){L.setFromMatrixColumn(Ce,0),L.multiplyScalar(-Q),d.add(L)}}(),I=function(){const L=new R;return function(Q,Ce){i.screenSpacePanning===!0?L.setFromMatrixColumn(Ce,1):(L.setFromMatrixColumn(Ce,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Q),d.add(L)}}(),B=function(){const L=new R;return function(Q,Ce){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;L.copy(Ae).sub(i.target);let ye=L.length();ye*=Math.tan(i.object.fov/2*Math.PI/180),K(2*Q*ye/Me.clientHeight,i.object.matrix),I(2*Ce*ye/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(Q*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),I(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(L){if(!i.zoomToCursor)return;A=!0;const se=i.domElement.getBoundingClientRect(),Q=L.clientX-se.left,Ce=L.clientY-se.top,Me=se.width,Ae=se.height;S.x=Q/Me*2-1,S.y=-(Ce/Ae)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function F(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function k(L){f.set(L.clientX,L.clientY)}function D(L){N(L),u.set(L.clientX,L.clientY)}function z(L){_.set(L.clientX,L.clientY)}function he(L){h.set(L.clientX,L.clientY),v.subVectors(h,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*v.x/se.clientHeight),X(2*Math.PI*v.y/se.clientHeight),f.copy(h),i.update()}function de(L){m.set(L.clientX,L.clientY),p.subVectors(m,u),p.y>0?Z(T()):p.y<0&&Y(T()),u.copy(m),i.update()}function me(L){y.set(L.clientX,L.clientY),g.subVectors(y,_).multiplyScalar(i.panSpeed),B(g.x,g.y),_.copy(y),i.update()}function Se(L){N(L),L.deltaY<0?Y(T()):L.deltaY>0&&Z(T()),i.update()}function Ne(L){let se=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),se=!0;break}se&&(L.preventDefault(),i.update())}function be(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);f.set(L,se)}}function Ue(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);_.set(L,se)}}function it(){const L=w[0].pageX-w[1].pageX,se=w[0].pageY-w[1].pageY,Q=Math.sqrt(L*L+se*se);u.set(0,Q)}function Be(){i.enableZoom&&it(),i.enablePan&&Ue()}function H(){i.enableZoom&&it(),i.enableRotate&&be()}function Vt(L){if(w.length==1)h.set(L.pageX,L.pageY);else{const Q=pe(L),Ce=.5*(L.pageX+Q.x),Me=.5*(L.pageY+Q.y);h.set(Ce,Me)}v.subVectors(h,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*v.x/se.clientHeight),X(2*Math.PI*v.y/se.clientHeight),f.copy(h)}function Te(L){if(w.length===1)y.set(L.pageX,L.pageY);else{const se=pe(L),Q=.5*(L.pageX+se.x),Ce=.5*(L.pageY+se.y);y.set(Q,Ce)}g.subVectors(y,_).multiplyScalar(i.panSpeed),B(g.x,g.y),_.copy(y)}function Le(L){const se=pe(L),Q=L.pageX-se.x,Ce=L.pageY-se.y,Me=Math.sqrt(Q*Q+Ce*Ce);m.set(0,Me),p.set(0,Math.pow(m.y/u.y,i.zoomSpeed)),Z(p.y),u.copy(m)}function Ie(L){i.enableZoom&&Le(L),i.enablePan&&Te(L)}function lt(L){i.enableZoom&&Le(L),i.enableRotate&&Vt(L)}function ze(L){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Oe),i.domElement.addEventListener("pointerup",$e)),ie(L),L.pointerType==="touch"?V(L):xt(L))}function Oe(L){i.enabled!==!1&&(L.pointerType==="touch"?ne(L):bt(L))}function $e(L){xe(L),w.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(Tm),s=r.NONE}function xt(L){let se;switch(L.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Wr.DOLLY:if(i.enableZoom===!1)return;D(L),s=r.DOLLY;break;case Wr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;z(L),s=r.PAN}else{if(i.enableRotate===!1)return;k(L),s=r.ROTATE}break;case Wr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;k(L),s=r.ROTATE}else{if(i.enablePan===!1)return;z(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yu)}function bt(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;he(L);break;case r.DOLLY:if(i.enableZoom===!1)return;de(L);break;case r.PAN:if(i.enablePan===!1)return;me(L);break}}function P(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(yu),Se(L),i.dispatchEvent(Tm))}function E(L){i.enabled===!1||i.enablePan===!1||Ne(L)}function V(L){switch(ae(L),w.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;be(),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;Ue(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yu)}function ne(L){switch(ae(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Vt(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(L),i.update();break;default:s=r.NONE}}function J(L){i.enabled!==!1&&L.preventDefault()}function ie(L){w.push(L)}function xe(L){delete b[L.pointerId];for(let se=0;se<w.length;se++)if(w[se].pointerId==L.pointerId){w.splice(se,1);return}}function ae(L){let se=b[L.pointerId];se===void 0&&(se=new ue,b[L.pointerId]=se),se.set(L.pageX,L.pageY)}function pe(L){const se=L.pointerId===w[0].pointerId?w[1]:w[0];return b[se.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",ze),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}class S1{constructor(e){oe(this,"camera");oe(this,"controls");this.camera=new On(35,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(60,80,60),this.camera.lookAt(0,0,0),this.setupControls(e)}setupControls(e){this.controls=new M1(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minPolarAngle=Math.PI*.1,this.controls.maxPolarAngle=Math.PI*.7,this.controls.minDistance=20,this.controls.maxDistance=200,this.controls.maxPolarAngle=Math.PI*.8,this.controls.minAzimuthAngle=-Math.PI*.5,this.controls.maxAzimuthAngle=Math.PI*.5,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=2,this.controls.target.set(0,0,0),this.controls.update()}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}update(){this.controls.update()}dispose(){this.controls.dispose()}setAutoRotate(e){this.controls.autoRotate=e}getPosition(){return this.camera.position.clone()}reset(){this.camera.position.set(60,80,60),this.controls.target.set(0,0,0),this.controls.update()}}const gr=new Cv,qt=new R,Fi=new R,ct=new At,Cm={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},xu={type:"change"},Pm={type:"mouseDown"},Rm={type:"mouseUp",mode:null},bm={type:"objectChange"};class E1 extends pt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new R1;this._gizmo=i,this.add(i);const r=new b1;this._plane=r,this.add(r);const s=this;function o(m,p){let x=p;Object.defineProperty(s,m,{get:function(){return x!==void 0?x:p},set:function(S){x!==S&&(x=S,r[m]=S,i[m]=S,s.dispatchEvent({type:m+"-changed",value:S}),s.dispatchEvent(xu))}}),s[m]=p,r[m]=p,i[m]=p}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,l=new R,c=new At,d=new At,f=new R,h=new At,v=new R,_=new R,y=new R,g=0,u=new R;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",d),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",v),o("pointEnd",_),o("rotationAxis",y),o("rotationAngle",g),o("eye",u),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new At,this._parentQuaternionInv=new At,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new At,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new At,this._scaleStart=new R,this._getPointer=w1.bind(this),this._onPointerDown=A1.bind(this),this._onPointerHover=T1.bind(this),this._onPointerMove=C1.bind(this),this._onPointerUp=P1.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;gr.setFromCamera(e,this.camera);const t=Mu(this._gizmo.picker[this.mode],gr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){gr.setFromCamera(e,this.camera);const t=Mu(this._plane,gr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Pm.mode=this.mode,this.dispatchEvent(Pm)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;gr.setFromCamera(e,this.camera);const o=Mu(this._plane,gr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ct.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(qt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(qt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Fi.set(a,a,a)}else qt.copy(this.pointStart),Fi.copy(this.pointEnd),qt.applyQuaternion(this._worldQuaternionInv),Fi.applyQuaternion(this._worldQuaternionInv),Fi.divide(qt),t.search("X")===-1&&(Fi.x=1),t.search("Y")===-1&&(Fi.y=1),t.search("Z")===-1&&(Fi.z=1);r.scale.copy(this._scaleStart).multiply(Fi),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(qt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(qt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Cm[t]),qt.copy(Cm[t]),s==="local"&&qt.applyQuaternion(this.worldQuaternion),qt.cross(this.eye),qt.length()===0?l=!0:this.rotationAngle=this._offset.dot(qt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(xu),this.dispatchEvent(bm)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Rm.mode=this.mode,this.dispatchEvent(Rm)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(xu),this.dispatchEvent(bm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return gr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function w1(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function T1(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function A1(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function C1(n){this.enabled&&this.pointerMove(this._getPointer(n))}function P1(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Mu(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const Ka=new Zs,et=new R(0,1,0),Lm=new R(0,0,0),Im=new Xe,Qa=new At,pl=new At,ri=new R,Dm=new Xe,So=new R(1,0,0),xr=new R(0,1,0),Eo=new R(0,0,1),Ja=new R,po=new R,mo=new R;class R1 extends pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Gs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ev({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const y=new zt(0,.04,.1,12);y.translate(0,.05,0);const g=new dt(.08,.08,.08);g.translate(0,.04,0);const u=new en;u.setAttribute("position",new at([0,0,0,1,0,0],3));const m=new zt(.0075,.0075,.5,3);m.translate(0,.25,0);function p(B,Z){const Y=new Er(B,.0075,3,64,Z*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function x(){const B=new en;return B.setAttribute("position",new at([0,0,0,1,1,1],3)),B}const S={X:[[new le(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new le(m,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new le(y,o),[0,.5,0]],[new le(y,o),[0,-.5,0],[Math.PI,0,0]],[new le(m,o)]],Z:[[new le(y,a),[0,0,.5],[Math.PI/2,0,0]],[new le(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new le(m,a),null,[Math.PI/2,0,0]]],XYZ:[[new le(new Es(.1,0),f.clone()),[0,0,0]]],XY:[[new le(new dt(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new le(new dt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new dt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new le(new zt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new le(new zt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new zt(.2,0,.6,4),i),[0,.3,0]],[new le(new zt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new zt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new le(new zt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new le(new Es(.2,0),i)]],XY:[[new le(new dt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new le(new dt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new dt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new le(new Es(.01,2),r),null,null,null,"helper"]],END:[[new le(new Es(.01,2),r),null,null,null,"helper"]],DELTA:[[new Oi(x(),r),null,null,null,"helper"]],X:[[new Oi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Oi(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Oi(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new le(p(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new le(p(.5,.5),s)]],Y:[[new le(p(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new le(p(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new le(p(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Oi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},T={XYZE:[[new le(new Jo(.25,10,8),i)]],X:[[new le(new Er(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new le(new Er(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new le(new Er(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new le(new Er(.75,.1,2,24),i)]]},G={X:[[new le(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(m,s),[0,0,0],[0,0,-Math.PI/2]],[new le(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new le(g,o),[0,.5,0]],[new le(m,o)],[new le(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new le(g,a),[0,0,.5],[Math.PI/2,0,0]],[new le(m,a),[0,0,0],[Math.PI/2,0,0]],[new le(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new le(new dt(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new le(new dt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new dt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new dt(.1,.1,.1),f.clone())]]},X={X:[[new le(new zt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new le(new zt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new zt(.2,0,.6,4),i),[0,.3,0]],[new le(new zt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new zt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new le(new zt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new le(new dt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new le(new dt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new dt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new dt(.2,.2,.2),i),[0,0,0]]]},K={X:[[new Oi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Oi(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Oi(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(B){const Z=new pt;for(const Y in B)for(let N=B[Y].length;N--;){const F=B[Y][N][0].clone(),k=B[Y][N][1],D=B[Y][N][2],z=B[Y][N][3],he=B[Y][N][4];F.name=Y,F.tag=he,k&&F.position.set(k[0],k[1],k[2]),D&&F.rotation.set(D[0],D[1],D[2]),z&&F.scale.set(z[0],z[1],z[2]),F.updateMatrix();const de=F.geometry.clone();de.applyMatrix4(F.matrix),F.geometry=de,F.renderOrder=1/0,F.position.set(0,0,0),F.rotation.set(0,0,0),F.scale.set(1,1,1),Z.add(F)}return Z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(S)),this.add(this.gizmo.rotate=I(b)),this.add(this.gizmo.scale=I(G)),this.add(this.picker.translate=I(A)),this.add(this.picker.rotate=I(T)),this.add(this.picker.scale=I(X)),this.add(this.helper.translate=I(w)),this.add(this.helper.rotate=I(M)),this.add(this.helper.scale=I(K)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:pl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ct.setFromEuler(Ka.set(0,0,0)),o.quaternion.copy(i).multiply(ct),Math.abs(et.copy(So).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ct.setFromEuler(Ka.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ct),Math.abs(et.copy(xr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ct.setFromEuler(Ka.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ct),Math.abs(et.copy(Eo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ct.setFromEuler(Ka.set(0,Math.PI/2,0)),et.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Im.lookAt(Lm,et,xr)),o.quaternion.multiply(ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),qt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),qt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(qt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(et.copy(So).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(et.copy(xr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(et.copy(Eo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(et.copy(Eo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(et.copy(So).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(et.copy(xr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Qa.copy(i),et.copy(this.eye).applyQuaternion(ct.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Im.lookAt(this.eye,Lm,xr)),o.name==="X"&&(ct.setFromAxisAngle(So,Math.atan2(-et.y,et.z)),ct.multiplyQuaternions(Qa,ct),o.quaternion.copy(ct)),o.name==="Y"&&(ct.setFromAxisAngle(xr,Math.atan2(et.x,et.z)),ct.multiplyQuaternions(Qa,ct),o.quaternion.copy(ct)),o.name==="Z"&&(ct.setFromAxisAngle(Eo,Math.atan2(et.y,et.x)),ct.multiplyQuaternions(Qa,ct),o.quaternion.copy(ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class b1 extends le{constructor(){super(new ui(1e5,1e5,2,2),new Gs({visible:!1,wireframe:!0,side:Qt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ja.copy(So).applyQuaternion(t==="local"?this.worldQuaternion:pl),po.copy(xr).applyQuaternion(t==="local"?this.worldQuaternion:pl),mo.copy(Eo).applyQuaternion(t==="local"?this.worldQuaternion:pl),et.copy(po),this.mode){case"translate":case"scale":switch(this.axis){case"X":et.copy(this.eye).cross(Ja),ri.copy(Ja).cross(et);break;case"Y":et.copy(this.eye).cross(po),ri.copy(po).cross(et);break;case"Z":et.copy(this.eye).cross(mo),ri.copy(mo).cross(et);break;case"XY":ri.copy(mo);break;case"YZ":ri.copy(Ja);break;case"XZ":et.copy(mo),ri.copy(po);break;case"XYZ":case"E":ri.set(0,0,0);break}break;case"rotate":default:ri.set(0,0,0)}ri.length()===0?this.quaternion.copy(this.cameraQuaternion):(Dm.lookAt(qt.set(0,0,0),ri,et),this.quaternion.setFromRotationMatrix(Dm)),super.updateMatrixWorld(e)}}class L1{constructor(e,t,i){oe(this,"raycaster");oe(this,"mouse");oe(this,"hoveredObject",null);oe(this,"selectedObject",null);oe(this,"hoveredInstanceId",null);oe(this,"selectedInstanceId",null);oe(this,"transformControls",null);oe(this,"interactableObjects",[]);oe(this,"camera");oe(this,"scene");oe(this,"canvas");this.raycaster=new Cv,this.mouse=new ue,this.camera=e,this.scene=i,this.canvas=t,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousemove",this.onMouseMove.bind(this)),this.canvas.addEventListener("click",this.onClick.bind(this))}onMouseMove(e){const t=this.canvas.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.updateCursor()}onClick(e){const t=this.performRaycast();if(t.length>0){const i=t[0],r=i.object,s=i.instanceId||0;this.selectObject(r,s)}else this.deselectObject()}performRaycast(e){this.raycaster.setFromCamera(this.mouse,this.camera);const t=e||this.interactableObjects;return this.raycaster.intersectObjects(t,!0)}updateCursor(){const e=this.performRaycast();if(e.length>0){const t=e[0],i=t.object,r=t.instanceId||0;(this.hoveredObject!==i||this.hoveredInstanceId!==r)&&(this.clearHoverState(),this.hoveredObject=i,this.hoveredInstanceId=r,this.updateInstanceHoverState(i,r,!0)),this.canvas.style.cursor="pointer"}else this.canvas.style.cursor="default",this.clearHoverState()}clearHoverState(){this.hoveredObject&&this.hoveredInstanceId!==null&&(this.updateInstanceHoverState(this.hoveredObject,this.hoveredInstanceId,!1),this.hoveredObject=null,this.hoveredInstanceId=null)}updateInstanceHoverState(e,t,i){e instanceof Qn?this.updateInstancedMeshHover(e,t,i):e instanceof le&&this.updateShaderUniform(e,"uHovered",i)}updateInstancedMeshHover(e,t,i){e.name==="smd_pads"?(console.log(`Hovering over pad instance ${t}`),this.updateGlobalHoverState(e,i)):this.updateShaderUniform(e,"uHovered",i)}updateGlobalHoverState(e,t){if(e instanceof le||e instanceof Qn){const i=e.material;i&&i.uniforms.uHovered&&(i.uniforms.uHovered.value=t)}}selectObject(e,t){this.deselectObject(),this.selectedObject=e,this.selectedInstanceId=t||0,this.updateShaderUniform(e,"uSelected",!0),this.attachTransformControls(e)}deselectObject(){this.selectedObject&&(this.updateShaderUniform(this.selectedObject,"uSelected",!1),this.detachTransformControls(),this.selectedObject=null)}updateShaderUniform(e,t,i){if(e instanceof le){const r=e.material;r&&r.uniforms[t]&&(r.uniforms[t].value=i)}}attachTransformControls(e){this.transformControls||(this.transformControls=new E1(this.camera,this.canvas),this.transformControls.addEventListener("change",()=>{this.onTransformChange()})),this.transformControls.attach(e),this.transformControls.object=e,this.transformControls.setMode("translate"),this.scene.add(this.transformControls),console.log(`TransformControls attached to: ${e.name} (instance ${this.selectedInstanceId})`)}detachTransformControls(){this.transformControls&&(this.transformControls.detach(),this.scene.remove(this.transformControls),this.transformControls.dispose(),this.transformControls=null,console.log("TransformControls detached"))}onTransformChange(){if(this.selectedObject&&this.selectedInstanceId!==null&&this.transformControls&&this.selectedObject instanceof Qn){const e=new R;this.transformControls.object&&this.transformControls.object.getWorldPosition(e);const t=new Xe;t.makeTranslation(e.x,e.y,e.z),this.selectedObject.setMatrixAt(this.selectedInstanceId,t),this.selectedObject.instanceMatrix.needsUpdate=!0,this.updatePadPosition(this.selectedObject,this.selectedInstanceId,e)}}updatePadPosition(e,t,i){console.log(`Pad instance ${t} moved to:`,i)}getSelectedObject(){return this.selectedObject}getHoveredObject(){return this.hoveredObject}setInteractableObjects(e){this.interactableObjects=e,console.log(`Set ${e.length} interactable objects for raycasting`)}getHoverInfo(){return{object:this.hoveredObject,instanceId:this.hoveredInstanceId}}isHovering(){return this.hoveredObject!==null&&this.hoveredInstanceId!==null}getTransformControls(){return this.transformControls}dispose(){this.canvas.removeEventListener("mousemove",this.onMouseMove.bind(this)),this.canvas.removeEventListener("click",this.onClick.bind(this)),this.detachTransformControls()}}class I1{constructor(e){oe(this,"renderer");oe(this,"scene");oe(this,"camera");oe(this,"interaction");oe(this,"clock");oe(this,"animationId",null);oe(this,"isRunning",!1);oe(this,"animate",()=>{this.isRunning&&(this.clock.getDelta(),this.camera.update(),this.renderer.render(this.scene.scene,this.camera.camera),this.animationId=requestAnimationFrame(this.animate))});this.renderer=new y1(e),this.scene=new Em,this.camera=new S1(e),this.interaction=new L1(this.camera.camera,e,this.scene.scene),this.clock=new Av,this.setupResizeHandling()}setupResizeHandling(){const e=()=>{const t=window.innerWidth,i=window.innerHeight;this.renderer.resize(t,i),this.camera.resize(t,i)};window.addEventListener("resize",e)}start(){this.isRunning||(this.isRunning=!0,this.animate())}stop(){this.isRunning=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}dispose(){this.stop(),this.interaction.dispose(),this.camera.dispose(),this.scene.dispose(),this.renderer.dispose();const e=this.renderer.getMemoryInfo();console.log("Final memory state:",e)}getMemoryInfo(){return this.renderer.getMemoryInfo()}reset(){this.scene.dispose(),this.scene=new Em,this.interaction.deselectObject(),this.interaction.clearHoverState()}}class Kt{static createMaterial(){return new cn({uniforms:{uTime:{value:0},uHovered:{value:!1},uSelected:{value:!1},uBaseColor:{value:new Re(114,69,32)}},vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader(),side:Qt,transparent:!1,depthTest:!0,depthWrite:!0})}static getVertexShader(){return`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        vViewPosition = -vPosition;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}static getFragmentShader(){return`
      uniform float uTime;
      uniform bool uHovered;
      uniform bool uSelected;
      uniform vec3 uBaseColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;

      // Procedural copper generation with brushed metal effect
      vec3 generateCopper(vec2 uv, vec3 normal) {
        // Base copper color
        vec3 copperColor = vec3(0.72, 0.45, 0.20);
        
        // Add brushed metal pattern using noise-like function
        float brush = sin(uv.x * 50.0) * 0.02 + sin(uv.y * 100.0) * 0.01;
        
        // Surface roughness variation
        float roughness = fract(sin(dot(uv * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
        
        // Combine effects
        vec3 finalColor = copperColor + brush + roughness * 0.05;
        
        // Add subtle oxidation variation
        float oxidation = fract(sin(dot(uv * 200.0, vec2(93.9898, 28.233))) * 23458.5453);
        finalColor = mix(finalColor, vec3(0.6, 0.3, 0.1), oxidation * 0.1);
        
        return finalColor;
      }

      // Solder mask green tint overlay
      vec3 applySolderMask(vec3 baseColor, vec2 uv) {
        vec3 solderMaskColor = vec3(0.0, 0.3, 0.0); // Dark green
        
        // Create mask pattern (exposed copper areas)
        float mask = 1.0; // Default: fully covered
        
        // Add variation for realistic solder mask
        float variation = fract(sin(dot(uv * 150.0, vec2(45.9898, 67.233))) * 12345.6789);
        mask *= (0.95 + variation * 0.05);
        
        return mix(baseColor, solderMaskColor, 0.3 * mask);
      }

      // Edge detection for outline rendering
      float edgeFactor() {
        vec3 dx = dFdx(vNormal);
        vec3 dy = dFdy(vNormal);
        float edge = length(dx) + length(dy);
        return smoothstep(0.0, 1.0, edge * 10.0);
      }

      void main() {
        // Generate procedural copper base
        vec3 copperColor = generateCopper(vUv, vNormal);
        
        // Apply solder mask overlay
        vec3 finalColor = applySolderMask(copperColor, vUv);
        
        // Apply base color tint if provided
        finalColor = mix(finalColor, uBaseColor, 0.5);
        
        // Calculate lighting
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float diff = max(dot(vNormal, lightDir), 0.0);
        vec3 diffuse = diff * finalColor;
        
        // Ambient lighting
        vec3 ambient = 0.3 * finalColor;
        
        // Combine lighting
        vec3 color = ambient + diffuse;
        
        // Edge highlighting
        float edge = edgeFactor();
        color = mix(color, vec3(1.0), edge * 0.3);
        
        // Hover effect - emissive glow
        if (uHovered) {
          float pulse = sin(uTime * 3.0) * 0.5 + 0.5;
          color += vec3(0.2, 0.4, 0.8) * pulse * 0.5;
        }
        
        // Selection effect - stronger persistent highlight
        if (uSelected) {
          color += vec3(0.3, 0.6, 1.0) * 0.4;
        }
        
        gl_FragColor = vec4(color, 1.0);
      }
    `}static updateMaterial(e,t){e.uniforms.uTime&&(e.uniforms.uTime.value=t)}static setHovered(e,t){e.uniforms.uHovered&&(e.uniforms.uHovered.value=t)}static setSelected(e,t){e.uniforms.uSelected&&(e.uniforms.uSelected.value=t)}static setBaseColor(e,t){e.uniforms.uBaseColor&&(e.uniforms.uBaseColor.value=t)}}class D1{constructor(e){oe(this,"boardThickness");oe(this,"COPPER_OFFSET_MM",.01);this.boardThickness=e}getTopCopperZ(){return+(this.boardThickness/2)+this.COPPER_OFFSET_MM}getBottomCopperZ(){return-(this.boardThickness/2)-this.COPPER_OFFSET_MM}createCopperGeometry(e,t){const i=new wv({color:12088115,roughness:.7,metalness:.9,side:Qt}),r=new le(e,i),s=t==="top"?this.getTopCopperZ():this.getBottomCopperZ();return r.position.y=s,r.castShadow=!0,r.receiveShadow=!0,r}createCopperPlane(e,t,i=0,r=0,s){const o=new ui(e,t),a=this.createCopperGeometry(o,s);return a.position.set(i,a.position.y,r),a.rotation.x=-Math.PI/2,a}updateBoardThickness(e){this.boardThickness=e}getBoardThickness(){return this.boardThickness}validateZSeparation(){const e=this.getTopCopperZ(),t=this.getBottomCopperZ(),i=this.boardThickness/2,r=-this.boardThickness/2,s=Math.abs(e-i),o=Math.abs(t-r);return s>=this.COPPER_OFFSET_MM&&o>=this.COPPER_OFFSET_MM}getLayerInfo(){return{boardThickness:this.boardThickness,topCopperZ:this.getTopCopperZ(),bottomCopperZ:this.getBottomCopperZ(),copperOffset:this.COPPER_OFFSET_MM,zSeparationValid:this.validateZSeparation()}}}class U1{constructor(e=100,t=80,i=1.6){oe(this,"mesh");oe(this,"topCopperLayer");oe(this,"bottomCopperLayer");oe(this,"width");oe(this,"height");oe(this,"thickness");oe(this,"copperLayerManager");this.width=e,this.height=t,this.thickness=i,this.copperLayerManager=new D1(i),this.createBoardSubstrate(),this.createCopperLayers()}createBoardSubstrate(){const e=new dt(this.width,this.thickness,this.height),t=new m1({color:2968107,roughness:.8,metalness:0,clearcoat:.1,clearcoatRoughness:.8,side:Qt});this.mesh=new le(e,t),this.mesh.name="pcb_board",this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.mesh.position.set(0,0,0)}createCopperLayers(){this.topCopperLayer=new pt,this.topCopperLayer.name="top_copper_layer",this.bottomCopperLayer=new pt,this.bottomCopperLayer.name="bottom_copper_layer",this.topCopperLayer.position.y=this.copperLayerManager.getTopCopperZ(),this.bottomCopperLayer.position.y=this.copperLayerManager.getBottomCopperZ(),this.mesh.add(this.topCopperLayer),this.mesh.add(this.bottomCopperLayer)}addCopperPlane(e,t,i,r,s){const o=this.copperLayerManager.createCopperPlane(t,i,r,s,e);try{const l=Kt.createMaterial();l.polygonOffset=!0,l.polygonOffsetFactor=1,l.polygonOffsetUnits=1,o.material=l}catch{console.warn("CopperShader not available, using standard material")}return(e==="top"?this.topCopperLayer:this.bottomCopperLayer).add(o),o}createCopperPour(e){const t=this.width-2,i=this.height-2;return this.addCopperPlane(e,t,i,0,0)}getDimensions(){return{width:this.width,height:this.height,thickness:this.thickness}}updateDimensions(e,t,i){this.width=e,this.height=t,i!==void 0&&(this.thickness=i,this.copperLayerManager.updateBoardThickness(i));const r=new dt(this.width,this.thickness,this.height);this.mesh.geometry.dispose(),this.mesh.geometry=r,this.topCopperLayer.position.y=this.copperLayerManager.getTopCopperZ(),this.bottomCopperLayer.position.y=this.copperLayerManager.getBottomCopperZ()}getTopCopperZ(){return this.copperLayerManager.getTopCopperZ()}getBottomCopperZ(){return this.copperLayerManager.getBottomCopperZ()}getCopperLayerManager(){return this.copperLayerManager}getCopperElements(e){const t=e==="top"?this.topCopperLayer:this.bottomCopperLayer,i=[];return t.traverse(r=>{r instanceof le&&i.push(r)}),i}dispose(){this.mesh.geometry.dispose(),this.mesh.material instanceof ln&&this.mesh.material.dispose(),this.disposeCopperLayer(this.topCopperLayer),this.disposeCopperLayer(this.bottomCopperLayer)}disposeCopperLayer(e){e.traverse(t=>{t instanceof le&&(t.geometry.dispose(),t.material instanceof ln&&t.material.dispose())}),e.clear()}}class cs{static createMaterial(){return new cn({uniforms:{uTime:{value:0},uHovered:{value:!1},uSelected:{value:!1},uEdgeColor:{value:new Re(0)},uEdgeWidth:{value:1},uOpacity:{value:1}},vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader(),side:Qt,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}static getVertexShader(){return`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        vViewPosition = -vPosition;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}static getFragmentShader(){return`
      uniform float uTime;
      uniform bool uHovered;
      uniform bool uSelected;
      uniform vec3 uEdgeColor;
      uniform float uEdgeWidth;
      uniform float uOpacity;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;

      // Barycentric coordinates for edge detection
      vec3 barycentric = vec3(1.0, 0.0, 0.0);
      
      // Edge detection using UV coordinates
      float edgeFactor() {
        vec2 edge = vec2(
          min(vUv.x, 1.0 - vUv.x),
          min(vUv.y, 1.0 - vUv.y)
        );
        return min(edge.x, edge.y);
      }

      // Smooth edge function
      float smoothEdge(float edge, float width) {
        return smoothstep(0.0, width, edge);
      }

      void main() {
        // Calculate edge factor
        float edge = edgeFactor();
        float smoothEdge = smoothEdge(edge, uEdgeWidth * 0.01);
        
        // Base edge color
        vec3 edgeColor = uEdgeColor;
        
        // Hover effect - animated glow
        if (uHovered) {
          float pulse = sin(uTime * 4.0) * 0.3 + 0.7;
          edgeColor = mix(edgeColor, vec3(0.2, 0.6, 1.0), pulse * 0.5);
        }
        
        // Selection effect - persistent highlight
        if (uSelected) {
          edgeColor = mix(edgeColor, vec3(0.0, 0.4, 0.8), 0.8);
        }
        
        // Final color with edge detection
        vec3 finalColor = mix(vec3(0.0), edgeColor, smoothEdge);
        
        gl_FragColor = vec4(finalColor, uOpacity * smoothEdge);
      }
    `}static updateMaterial(e,t){e.uniforms.uTime&&(e.uniforms.uTime.value=t)}static setHovered(e,t){e.uniforms.uHovered&&(e.uniforms.uHovered.value=t)}static setSelected(e,t){e.uniforms.uSelected&&(e.uniforms.uSelected.value=t)}static setEdgeColor(e,t){e.uniforms.uEdgeColor&&(e.uniforms.uEdgeColor.value=t)}static setEdgeWidth(e,t){e.uniforms.uEdgeWidth&&(e.uniforms.uEdgeWidth.value=t)}static setOpacity(e,t){e.uniforms.uOpacity&&(e.uniforms.uOpacity.value=t)}}class N1{constructor(){oe(this,"rectangularPads");oe(this,"circularPads");oe(this,"rectangularEdges");oe(this,"circularEdges");oe(this,"padData",new Map);oe(this,"idToInstanceId",new Map);oe(this,"instanceIdToId",new Map);oe(this,"nextInstanceId",0);oe(this,"maxInstances",1e3);oe(this,"tempMatrix",new Xe);oe(this,"tempVector",new R);oe(this,"tempQuaternion",new At);oe(this,"tempScale",new R);oe(this,"tempPosition",new R);this.createInstancedMeshes()}createInstancedMeshes(){const e=new ui(2,2),t=Kt.createMaterial();t.polygonOffset=!0,t.polygonOffsetFactor=2,t.polygonOffsetUnits=2,this.rectangularPads=new Qn(e,t,this.maxInstances),this.rectangularPads.name="rectangular_pads",this.rectangularPads.castShadow=!0,this.rectangularPads.receiveShadow=!0;const i=new Ws(1,32),r=Kt.createMaterial();r.polygonOffset=!0,r.polygonOffsetFactor=2,r.polygonOffsetUnits=2,this.circularPads=new Qn(i,r,this.maxInstances),this.circularPads.name="circular_pads",this.circularPads.castShadow=!0,this.circularPads.receiveShadow=!0,this.createEdgeMeshes()}createEdgeMeshes(){const e=new ui(2,2),t=cs.createMaterial();this.rectangularEdges=new Qn(e,t,this.maxInstances),this.rectangularEdges.name="rectangular_edges",this.rectangularEdges.castShadow=!1,this.rectangularEdges.receiveShadow=!1;const i=new Ws(1,32),r=cs.createMaterial();this.circularEdges=new Qn(i,r,this.maxInstances),this.circularEdges.name="circular_edges",this.circularEdges.castShadow=!1,this.circularEdges.receiveShadow=!1}addPad(e){const t=this.nextInstanceId++;this.padData.set(e.id,{...e}),this.idToInstanceId.set(e.id,t),this.instanceIdToId.set(t,e.id);const i=e.type==="rect"?this.rectangularPads:this.circularPads,r=e.type==="rect"?this.rectangularEdges:this.circularEdges;return this.updatePadTransform(t,e),this.updateEdgeTransform(t,e),i.count=Math.max(i.count,t+1),r.count=Math.max(r.count,t+1),t}updatePad(e,t){const i=this.padData.get(e);if(!i)return;Object.assign(i,t);const r=this.findInstanceId(e);r!==-1&&(this.updatePadTransform(r,i),this.updateEdgeTransform(r,i))}removePad(e){const t=this.padData.get(e);if(!t)return;const i=this.findInstanceId(e);if(i===-1)return;this.tempMatrix.makeTranslation(-1e3,-1e3,-1e3);const r=t.type==="rect"?this.rectangularPads:this.circularPads,s=t.type==="rect"?this.rectangularEdges:this.circularEdges;r.setMatrixAt(i,this.tempMatrix),r.instanceMatrix.needsUpdate=!0,s.setMatrixAt(i,this.tempMatrix),s.instanceMatrix.needsUpdate=!0,this.padData.delete(e)}updatePadTransform(e,t){const i=t.type==="rect"?this.rectangularPads:this.circularPads;this.tempVector.set(t.size.x,t.size.y,1);const r=new Xe().makeScale(t.size.x/2,t.size.y/2,1),s=t.rotation||0,o=new Xe().makeRotationY(s),a=new Xe().makeTranslation(t.position.x,t.position.y,t.position.z);this.tempMatrix.multiplyMatrices(a,o),this.tempMatrix.multiply(r),i.setMatrixAt(e,this.tempMatrix),i.instanceMatrix.needsUpdate=!0}updateEdgeTransform(e,t){const i=t.type==="rect"?this.rectangularEdges:this.circularEdges,r=.001;this.tempVector.set(t.size.x,t.size.y,1);const s=new Xe().makeScale(t.size.x/2,t.size.y/2,1),o=t.rotation||0,a=new Xe().makeRotationY(o),l=new Xe().makeTranslation(t.position.x,t.position.y,t.position.z+r);this.tempMatrix.multiplyMatrices(l,a),this.tempMatrix.multiply(s),i.setMatrixAt(e,this.tempMatrix),i.instanceMatrix.needsUpdate=!0}findInstanceId(e){return this.idToInstanceId.get(e)??-1}getPadIdByInstanceId(e){return this.instanceIdToId.get(e)}updateInstanceMatrix(e,t){const i=this.instanceIdToId.get(e);if(!i)return;const r=this.padData.get(i);if(!r)return;const s=r.type==="rect"?this.rectangularPads:this.circularPads;s.setMatrixAt(e,t),s.instanceMatrix.needsUpdate=!0;const o=r.type==="rect"?this.rectangularEdges:this.circularEdges;o.setMatrixAt(e,t),o.instanceMatrix.needsUpdate=!0,t.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),r.position.copy(this.tempPosition)}getInstanceMatrix(e){const t=this.instanceIdToId.get(e);if(!t)return null;const i=this.padData.get(t);if(!i)return null;const r=i.type==="rect"?this.rectangularPads:this.circularPads,s=new Xe;return r.getMatrixAt(e,s),s}getMeshes(){return[this.rectangularPads,this.circularPads,this.rectangularEdges,this.circularEdges]}getPadData(e){return this.padData.get(e)}getAllPadData(){return Array.from(this.padData.values())}setPadHovered(e,t){const i=this.padData.get(e);if(!i||this.findInstanceId(e)===-1)return;const s=i.type==="rect"?this.rectangularPads:this.circularPads;Kt.setHovered(s.material,t);const o=i.type==="rect"?this.rectangularEdges:this.circularEdges;cs.setHovered(o.material,t)}setPadSelected(e,t){const i=this.padData.get(e);if(!i||this.findInstanceId(e)===-1)return;const s=i.type==="rect"?this.rectangularPads:this.circularPads;Kt.setSelected(s.material,t);const o=i.type==="rect"?this.rectangularEdges:this.circularEdges;cs.setSelected(o.material,t)}updateShaders(e){Kt.updateMaterial(this.rectangularPads.material,e),Kt.updateMaterial(this.circularPads.material,e),cs.updateMaterial(this.rectangularEdges.material,e),cs.updateMaterial(this.circularEdges.material,e)}calculatePadArea(e){const t=this.padData.get(e);if(!t)return 0;if(t.type==="rect")return t.size.x*t.size.y;{const i=t.size.x/2;return Math.PI*i*i}}dispose(){this.rectangularPads.geometry.dispose(),this.rectangularPads.material.dispose(),this.circularPads.geometry.dispose(),this.circularPads.material.dispose(),this.rectangularEdges.geometry.dispose(),this.rectangularEdges.material.dispose(),this.circularEdges.geometry.dispose(),this.circularEdges.material.dispose(),this.padData.clear()}}class O1{constructor(){oe(this,"traceMesh");oe(this,"traceData",new Map);oe(this,"idToInstanceId",new Map);oe(this,"instanceIdToId",new Map);oe(this,"nextInstanceId",0);oe(this,"maxInstances",1e3);oe(this,"tempMatrix",new Xe);this.createInstancedMesh()}createInstancedMesh(){const e=new ui(1,1),t=Kt.createMaterial();t.polygonOffset=!0,t.polygonOffsetFactor=1,t.polygonOffsetUnits=1,this.traceMesh=new Qn(e,t,this.maxInstances),this.traceMesh.name="traces",this.traceMesh.castShadow=!0,this.traceMesh.receiveShadow=!0}addTrace(e){const t=this.nextInstanceId++;this.traceData.set(e.id,{...e}),this.idToInstanceId.set(e.id,t),this.instanceIdToId.set(t,e.id);const i=this.calculateTraceTransform(e);return this.traceMesh.setMatrixAt(t,i),this.traceMesh.count=Math.max(this.traceMesh.count,t+1),t}calculateTraceTransform(e){let t=1/0,i=-1/0,r=1/0,s=-1/0;for(const v of e.points)t=Math.min(t,v.x),i=Math.max(i,v.x),r=Math.min(r,v.y),s=Math.max(s,v.y);const o=(t+i)/2,a=(r+s)/2,l=i-t,c=s-r,d=e.layer==="top"?.01:-.01,f=new Xe().makeTranslation(o,d,a),h=new Xe().makeScale(l,1,c);return this.tempMatrix.multiplyMatrices(f,h),this.tempMatrix.clone()}updateTrace(e,t){const i=this.traceData.get(e);if(!i)return;Object.assign(i,t);const r=this.idToInstanceId.get(e);if(r!==void 0){const s=this.calculateTraceTransform(i);this.traceMesh.setMatrixAt(r,s),this.traceMesh.instanceMatrix.needsUpdate=!0}}removeTrace(e){const t=this.idToInstanceId.get(e);t!==void 0&&(this.tempMatrix.makeTranslation(-1e3,-1e3,-1e3),this.traceMesh.setMatrixAt(t,this.tempMatrix),this.traceMesh.instanceMatrix.needsUpdate=!0,this.traceData.delete(e),this.idToInstanceId.delete(e),this.instanceIdToId.delete(t))}getMeshes(){return[this.traceMesh]}getTraceData(e){return this.traceData.get(e)}getAllTraceData(){return Array.from(this.traceData.values())}setTraceHovered(e,t){Kt.setHovered(this.traceMesh.material,t)}setTraceSelected(e,t){Kt.setSelected(this.traceMesh.material,t)}updateShaders(e){Kt.updateMaterial(this.traceMesh.material,e)}calculateTraceLength(e){const t=this.traceData.get(e);if(!t||t.points.length<2)return 0;let i=0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1];i+=s.distanceTo(o)}return i}calculateTraceArea(e){const t=this.traceData.get(e);return t?this.calculateTraceLength(e)*t.width:0}dispose(){this.traceMesh.geometry.dispose(),this.traceMesh.material.dispose(),this.traceData.clear(),this.idToInstanceId.clear(),this.instanceIdToId.clear()}}const wr=class wr{constructor(){oe(this,"copperMaterial");oe(this,"clock");oe(this,"animationId",null);this.clock=new Av,this.copperMaterial=Kt.createMaterial(),this.startAnimation()}static getInstance(){return wr.instance||(wr.instance=new wr),wr.instance}getCopperMaterial(){return this.copperMaterial.clone()}setHovered(e,t){Kt.setHovered(e,t)}setSelected(e,t){Kt.setSelected(e,t)}setBaseColor(e,t){Kt.setBaseColor(e,t)}startAnimation(){const e=()=>{const t=this.clock.getElapsedTime();Kt.updateMaterial(this.copperMaterial,t),this.animationId=requestAnimationFrame(e)};e()}stopAnimation(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}dispose(){this.stopAnimation(),this.copperMaterial.dispose()}createCopperMaterial(e){const t=this.getCopperMaterial();return e!=null&&e.baseColor&&this.setBaseColor(t,e.baseColor),e!=null&&e.initialHovered&&this.setHovered(t,e.initialHovered),e!=null&&e.initialSelected&&this.setSelected(t,e.initialSelected),t}updateMaterials(e,t){e.forEach(i=>{t.hovered!==void 0&&this.setHovered(i,t.hovered),t.selected!==void 0&&this.setSelected(i,t.selected),t.baseColor&&this.setBaseColor(i,t.baseColor)})}};oe(wr,"instance");let Cd=wr;class go{static createMaterial(e){const t=(e==null?void 0:e.edgeColor)||new Re(0),i=(e==null?void 0:e.edgeWidth)||1,r=(e==null?void 0:e.opacity)||1;return new cn({uniforms:{uEdgeColor:{value:t},uEdgeWidth:{value:i},uOpacity:{value:r},uTime:{value:0}},vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader(),side:Qt,transparent:r<1,depthTest:!0,depthWrite:!0})}static getVertexShader(){return`
      attribute vec3 barycentric;
      varying vec3 vBarycentric;
      varying vec3 vPosition;
      varying vec3 vNormal;

      void main() {
        vBarycentric = barycentric;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}static getFragmentShader(){return`
      uniform vec3 uEdgeColor;
      uniform float uEdgeWidth;
      uniform float uOpacity;
      uniform float uTime;

      varying vec3 vBarycentric;
      varying vec3 vPosition;
      varying vec3 vNormal;

      // Edge detection using barycentric coordinates
      float edgeFactor() {
        vec3 bary = vBarycentric;
        vec3 d = fwidth(bary);
        vec3 a3 = smoothstep(vec3(0.0), d * uEdgeWidth, bary);
        return min(min(a3.x, a3.y), a3.z);
      }

      // Animated edge width for hover effects
      float getAnimatedEdgeWidth() {
        float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
        return uEdgeWidth * (1.0 + pulse * 0.3);
      }

      void main() {
        // Calculate edge factor
        float edge = edgeFactor();
        
        // Create edge color
        vec3 edgeColor = uEdgeColor;
        
        // Add subtle animation to edges
        float animatedWidth = getAnimatedEdgeWidth();
        vec3 d = fwidth(vBarycentric);
        vec3 a3 = smoothstep(vec3(0.0), d * animatedWidth, vBarycentric);
        float animatedEdge = min(min(a3.x, a3.y), a3.z);
        
        // Final color with edge detection
        vec3 finalColor = mix(edgeColor, vec3(0.0), animatedEdge);
        
        // Apply opacity
        float alpha = (1.0 - animatedEdge) * uOpacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `}static updateMaterial(e,t){e.uniforms.uTime&&(e.uniforms.uTime.value=t)}static setEdgeColor(e,t){e.uniforms.uEdgeColor&&(e.uniforms.uEdgeColor.value=t)}static setEdgeWidth(e,t){e.uniforms.uEdgeWidth&&(e.uniforms.uEdgeWidth.value=t)}static setOpacity(e,t){e.uniforms.uOpacity&&(e.uniforms.uOpacity.value=t),e.transparent=t<1,e.needsUpdate=!0}}class Um{static addBarycentricCoordinates(e){const t=e.clone(),i=t.attributes.position;if(!i)return console.warn("Geometry has no position attribute"),t;const r=i.count,s=new Float32Array(r*3);return t.index?this.addIndexedBarycentrics(t,s):this.addNonIndexedBarycentrics(t,s),t.setAttribute("barycentric",new Bt(s,3)),t}static addIndexedBarycentrics(e,t){const i=e.index,s=e.attributes.position.count;for(let o=0;o<s;o++)t[o*3]=1,t[o*3+1]=0,t[o*3+2]=0;for(let o=0;o<i.count;o+=3){const a=i.getX(o),l=i.getX(o+1),c=i.getX(o+2);t[a*3]=1,t[a*3+1]=0,t[a*3+2]=0,t[l*3]=0,t[l*3+1]=1,t[l*3+2]=0,t[c*3]=0,t[c*3+1]=0,t[c*3+2]=1}}static addNonIndexedBarycentrics(e,t){const r=e.attributes.position.count;for(let s=0;s<r;s+=3)t[s*3]=1,t[s*3+1]=0,t[s*3+2]=0,t[(s+1)*3]=0,t[(s+1)*3+1]=1,t[(s+1)*3+2]=0,t[(s+2)*3]=0,t[(s+2)*3+1]=0,t[(s+2)*3+2]=1}static createBarycentricPlane(e,t,i,r){const s=new ui(e,t,i,r);return this.addBarycentricCoordinates(s)}static createBarycentricCircle(e,t,i,r){const s=new Ws(e,t,i,r);return this.addBarycentricCoordinates(s)}static createBarycentricBox(e,t,i,r,s,o){const a=new dt(e,t,i,r,s,o);return this.addBarycentricCoordinates(a)}static createBarycentricCylinder(e,t,i,r,s,o,a,l){const c=new zt(e,t,i,r,s,o,a,l);return this.addBarycentricCoordinates(c)}static validateBarycentrics(e){const t=e.attributes.barycentric;if(!t)return!1;const i=t.count;for(let r=0;r<i;r++){const s=t.getX(r),o=t.getY(r),a=t.getZ(r);if(!(Math.abs(s-1)<.001&&Math.abs(o)<.001&&Math.abs(a)<.001||Math.abs(s)<.001&&Math.abs(o-1)<.001&&Math.abs(a)<.001||Math.abs(s)<.001&&Math.abs(o)<.001&&Math.abs(a-1)<.001))return console.warn(`Invalid barycentric coordinates at vertex ${r}: (${s}, ${o}, ${a})`),!1}return!0}static getBarycentricStats(e){var o;const i=e.attributes.barycentric!==void 0,r=((o=e.attributes.position)==null?void 0:o.count)||0,s=i?this.validateBarycentrics(e):!1;return{hasBarycentrics:i,vertexCount:r,validBarycentrics:s}}}class Dt{static createMaterial(e){const t=(e==null?void 0:e.baseColor)||new Re(12088115),i=(e==null?void 0:e.edgeColor)||new Re(0),r=(e==null?void 0:e.edgeWidth)||1.5;return new cn({uniforms:{uTime:{value:0},uHovered:{value:!1},uSelected:{value:!1},uHoveredInstanceId:{value:-1},uBaseColor:{value:t},uEdgeColor:{value:i},uEdgeWidth:{value:r}},vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader(),side:Qt,transparent:!1,depthTest:!0,depthWrite:!0})}static getVertexShader(){return`
      attribute vec3 barycentric;
      varying vec3 vBarycentric;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;
      varying float vInstanceId; // NEW: Pass instance ID to fragment shader

      void main() {
        vBarycentric = barycentric;
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        vViewPosition = -vPosition;
        vInstanceId = float(gl_InstanceID); // NEW: Get instance ID
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}static getFragmentShader(){return`
      uniform float uTime;
      uniform bool uHovered;
      uniform bool uSelected;
      uniform float uHoveredInstanceId;
      uniform vec3 uBaseColor;
      uniform vec3 uEdgeColor;
      uniform float uEdgeWidth;

      varying vec3 vBarycentric;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewPosition;
      varying float vInstanceId;

      // Procedural copper generation (same as CopperShader)
      vec3 generateCopper(vec2 uv, vec3 normal) {
        vec3 copperColor = vec3(0.72, 0.45, 0.20);
        float brush = sin(uv.x * 50.0) * 0.02 + sin(uv.y * 100.0) * 0.01;
        float roughness = fract(sin(dot(uv * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
        vec3 finalColor = copperColor + brush + roughness * 0.05;
        float oxidation = fract(sin(dot(uv * 200.0, vec2(93.9898, 28.233))) * 23458.5453);
        finalColor = mix(finalColor, vec3(0.6, 0.3, 0.1), oxidation * 0.1);
        return finalColor;
      }

      // Edge detection using barycentric coordinates
      float edgeFactor() {
        vec3 bary = vBarycentric;
        vec3 d = fwidth(bary);
        vec3 a3 = smoothstep(vec3(0.0), d * uEdgeWidth, bary);
        return min(min(a3.x, a3.y), a3.z);
      }

      // NEW: Check if this instance is being hovered
      bool isInstanceHovered() {
        return uHovered && (abs(vInstanceId - uHoveredInstanceId) < 0.5);
      }

      void main() {
        // Generate procedural copper base
        vec3 copperColor = generateCopper(vPosition.xy, vNormal);
        
        // Apply base color tint
        vec3 baseColor = mix(copperColor, uBaseColor, 0.5);
        
        // Calculate lighting
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float diff = max(dot(vNormal, lightDir), 0.0);
        vec3 diffuse = diff * baseColor;
        vec3 ambient = 0.3 * baseColor;
        vec3 color = ambient + diffuse;
        
        // Edge rendering
        float edge = edgeFactor();
        color = mix(color, uEdgeColor, edge * 0.3);
        
        // NEW: Per-instance hover effect
        if (isInstanceHovered()) {
          float pulse = sin(uTime * 3.0) * 0.5 + 0.5;
          color += vec3(0.2, 0.4, 0.8) * pulse * 0.5;
        }
        
        // Selection effect (global for now)
        if (uSelected) {
          color += vec3(0.3, 0.6, 1.0) * 0.4;
        }
        
        gl_FragColor = vec4(color, 1.0);
      }
    `}static updateMaterial(e,t){e.uniforms.uTime&&(e.uniforms.uTime.value=t)}static setHovered(e,t){e.uniforms.uHovered&&(e.uniforms.uHovered.value=t)}static setHoveredInstanceId(e,t){e.uniforms.uHoveredInstanceId&&(e.uniforms.uHoveredInstanceId.value=t)}static clearHover(e){e.uniforms.uHovered&&(e.uniforms.uHovered.value=!1),e.uniforms.uHoveredInstanceId&&(e.uniforms.uHoveredInstanceId.value=-1)}static setSelected(e,t){e.uniforms.uSelected&&(e.uniforms.uSelected.value=t)}static setBaseColor(e,t){e.uniforms.uBaseColor&&(e.uniforms.uBaseColor.value=t)}static setEdgeColor(e,t){e.uniforms.uEdgeColor&&(e.uniforms.uEdgeColor.value=t)}static setEdgeWidth(e,t){e.uniforms.uEdgeWidth&&(e.uniforms.uEdgeWidth.value=t)}}class F1{constructor(e,t=1e3){oe(this,"instancedMesh");oe(this,"edgeMesh");oe(this,"padData");oe(this,"copperLayerManager");oe(this,"maxInstances");oe(this,"instanceCount",0);oe(this,"matrix");oe(this,"tempVector");oe(this,"tempQuaternion");oe(this,"tempEuler");oe(this,"rectangularGeometry");oe(this,"circularGeometry");oe(this,"rectangularEdgeGeometry");oe(this,"circularEdgeGeometry");this.copperLayerManager=e,this.maxInstances=t,this.padData=new Map,Cd.getInstance(),this.matrix=new Xe,this.tempVector=new R,this.tempQuaternion=new At,this.tempEuler=new Zs,this.createGeometries(),this.instancedMesh=new Qn(this.rectangularGeometry,Dt.createMaterial({baseColor:new Re(12088115),edgeColor:new Re(0),edgeWidth:1.5}),this.maxInstances),this.instancedMesh.name="smd_pads",this.instancedMesh.castShadow=!0,this.instancedMesh.receiveShadow=!0,this.edgeMesh=new Qn(this.rectangularEdgeGeometry,go.createMaterial({edgeColor:new Re(0),edgeWidth:1.5,opacity:.8}),this.maxInstances),this.edgeMesh.name="smd_pad_edges",this.edgeMesh.castShadow=!1,this.edgeMesh.receiveShadow=!1}createGeometries(){this.rectangularGeometry=new ui(1,1),this.circularGeometry=new Ws(.5,32),this.rectangularEdgeGeometry=Um.createBarycentricPlane(1,1),this.circularEdgeGeometry=Um.createBarycentricCircle(.5,32)}addPad(e){return this.instanceCount>=this.maxInstances?(console.warn(`Maximum pad instances (${this.maxInstances}) reached`),!1):(this.padData.set(e.id,e),this.updateInstanceMatrix(e,this.instanceCount),this.instanceCount++,this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.count=this.instanceCount,this.edgeMesh.setMatrixAt(this.instanceCount-1,this.matrix.clone()),this.edgeMesh.instanceMatrix.needsUpdate=!0,this.edgeMesh.count=this.instanceCount,!0)}updateInstanceMatrix(e,t){const i=e.layer==="top"?this.copperLayerManager.getTopCopperZ():this.copperLayerManager.getBottomCopperZ();this.tempVector.set(e.position.x,i,e.position.z),this.tempEuler.set(0,e.rotation,0),this.tempQuaternion.setFromEuler(this.tempEuler);const r=new R(e.size.x,1,e.size.y);this.matrix.compose(this.tempVector,this.tempQuaternion,r),this.instancedMesh.setMatrixAt(t,this.matrix)}addPads(e){let t=0;return e.forEach(i=>{this.addPad(i)&&t++}),t}removePad(e){return this.padData.has(e)?(this.padData.delete(e),this.rebuildInstances(),!0):!1}rebuildInstances(){this.instanceCount=0,this.instancedMesh.count=0,this.edgeMesh.count=0;const e=Array.from(this.padData.values());this.padData.clear(),e.forEach(t=>{this.addPad(t)})}getPad(e){return this.padData.get(e)}getAllPads(){return Array.from(this.padData.values())}getPadsByLayer(e){return Array.from(this.padData.values()).filter(t=>t.layer===e)}getPadsByType(e){return Array.from(this.padData.values()).filter(t=>t.type===e)}updatePadPosition(e,t){const i=this.padData.get(e);if(!i)return!1;i.position.copy(t);const r=this.getInstanceId(e);return r!==-1?(this.updateInstanceMatrix(i,r),this.instancedMesh.instanceMatrix.needsUpdate=!0,!0):!1}getInstanceId(e){return Array.from(this.padData.keys()).indexOf(e)}updatePadSize(e,t){const i=this.padData.get(e);if(!i)return!1;i.size.copy(t);const r=this.getInstanceId(e);return r!==-1?(this.updateInstanceMatrix(i,r),this.instancedMesh.instanceMatrix.needsUpdate=!0,!0):!1}clear(){this.padData.clear(),this.instanceCount=0,this.instancedMesh.count=0,this.edgeMesh.count=0,this.instancedMesh.instanceMatrix.needsUpdate=!0,this.edgeMesh.instanceMatrix.needsUpdate=!0}getStats(){const e=this.getAllPads();return{totalInstances:this.instanceCount,maxInstances:this.maxInstances,rectangularPads:e.filter(t=>t.type==="rect").length,circularPads:e.filter(t=>t.type==="circle").length,topLayerPads:e.filter(t=>t.layer==="top").length,bottomLayerPads:e.filter(t=>t.layer==="bottom").length}}setPadHovered(e,t){if(!this.padData.get(e))return!1;const r=this.getInstanceId(e);if(r===-1)return!1;const s=this.instancedMesh.material;return t?(Dt.setHovered(s,!0),Dt.setHoveredInstanceId(s,r)):Dt.clearHover(s),!0}setInstanceHovered(e,t){if(e<0||e>=this.instanceCount)return!1;const i=this.instancedMesh.material;return t?(Dt.setHovered(i,!0),Dt.setHoveredInstanceId(i,e)):Dt.clearHover(i),!0}setPadSelected(e,t){if(!this.padData.get(e))return!1;const r=this.instancedMesh.material;return Dt.setSelected(r,t),!0}clearInteractionStates(){const e=this.instancedMesh.material;Dt.clearHover(e),Dt.setSelected(e,!1)}getShaderMaterial(){return this.instancedMesh.material}getEdgeMaterial(){return this.edgeMesh.material}setEdgeVisible(e){this.edgeMesh.visible=e}setEdgeColor(e){go.setEdgeColor(this.edgeMesh.material,e)}setEdgeWidth(e){go.setEdgeWidth(this.edgeMesh.material,e)}setEdgeOpacity(e){go.setOpacity(this.edgeMesh.material,e)}updateEdgeAnimation(e){go.updateMaterial(this.edgeMesh.material,e)}dispose(){this.rectangularGeometry.dispose(),this.circularGeometry.dispose(),this.rectangularEdgeGeometry.dispose(),this.circularEdgeGeometry.dispose(),this.instancedMesh.material instanceof ln&&this.instancedMesh.material.dispose(),this.edgeMesh.material instanceof ln&&this.edgeMesh.material.dispose(),this.padData.clear()}}class Nm{static createRectangularGrid(e,t,i,r,s,o){const a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){const d=s.x+(c-t/2)*i,f=s.z+(l-e/2)*i;a.push({id:`rect_pad_${l}_${c}`,type:"rect",position:new R(d,s.y,f),size:r.clone(),rotation:0,layer:o})}return a}static createCircularLine(e,t,i,r,s){const o=[];for(let a=0;a<e;a++){const l=r.x+(a-e/2)*t;o.push({id:`circle_pad_${a}`,type:"circle",position:new R(l,r.y,r.z),size:new ue(i,i),rotation:0,layer:s})}return o}static createICFootprint(e,t,i,r,s,o){const a=[],l=e/2;for(let c=0;c<l;c++){const d=(c-l/2+.5)*t;a.push({id:`ic_pin_${c+1}`,type:"rect",position:new R(-s/2-r/2,0,d),size:new ue(r,i),rotation:0,layer:o})}for(let c=0;c<l;c++){const d=(c-l/2+.5)*t,f=l+c+1;a.push({id:`ic_pin_${f}`,type:"rect",position:new R(s/2+r/2,0,d),size:new ue(r,i),rotation:0,layer:o})}return a}static createTwoPinComponent(e,t,i,r){const s=[];return s.push({id:"component_pin_1",type:"rect",position:new R(-e/2-i/2,0,0),size:new ue(i,t),rotation:0,layer:r}),s.push({id:"component_pin_2",type:"rect",position:new R(e/2+i/2,0,0),size:new ue(i,t),rotation:0,layer:r}),s}static createDemoLayout(e){const t=[],i=this.createRectangularGrid(8,5,4,new ue(2,1.5),new R(0,0,0),e);t.push(...i);const r=this.createCircularLine(20,3,1.5,new R(0,0,25),e);t.push(...r);const s=this.createICFootprint(8,1.27,.6,1.9,3.9,e);s.forEach(a=>a.position.x-=20),t.push(...s);const o=this.createICFootprint(8,1.27,.6,1.9,3.9,e);o.forEach(a=>a.position.x+=20),t.push(...o);for(let a=0;a<8;a++){const l=(a-3.5)*8,c=this.createTwoPinComponent(3.2,1.2,1.6,e);c.forEach(d=>d.position.x+=l),c.forEach(d=>d.position.z-=25),t.push(...c)}for(let a=0;a<12;a++){const l=a/12*Math.PI*2,c=15,d=Math.cos(l)*c,f=Math.sin(l)*c+40;t.push({id:`test_pad_${a}`,type:a%2===0?"rect":"circle",position:new R(d,0,f),size:new ue(2,2),rotation:l,layer:e})}return t}static createTestPatterns(){return{basic:[{id:"basic_1",type:"rect",position:new R(-5,0,0),size:new ue(2,1),rotation:0,layer:"top"},{id:"basic_2",type:"rect",position:new R(5,0,0),size:new ue(2,1),rotation:0,layer:"top"},{id:"basic_3",type:"circle",position:new R(0,0,-5),size:new ue(1.5,1.5),rotation:0,layer:"top"},{id:"basic_4",type:"circle",position:new R(0,0,5),size:new ue(1.5,1.5),rotation:0,layer:"top"}],grid:this.createRectangularGrid(5,5,3,new ue(1.5,1.5),new R(0,0,0),"top"),ic:this.createICFootprint(16,1.27,.6,1.9,3.9,"top"),mixed:this.createDemoLayout("top")}}}class z1{constructor(e,t){oe(this,"smdPads");oe(this,"copperLayerManager");oe(this,"scene");this.scene=e,this.copperLayerManager=t,this.smdPads=new F1(t,1e3),this.scene.add(this.smdPads.instancedMesh),this.scene.add(this.smdPads.edgeMesh)}initializeDemo(){console.log("Initializing SMD pad system with demo layout...");const e=Nm.createDemoLayout("top"),t=this.smdPads.addPads(e);console.log(`✅ Added ${t} SMD pads to the scene`);const i=this.getStatistics();console.log("📊 SMD Pad Statistics:",i)}addPad(e){return this.smdPads.addPad(e)}addPads(e){return this.smdPads.addPads(e)}addTestPattern(e){const i=Nm.createTestPatterns()[e];return this.smdPads.addPads(i)}removePad(e){return this.smdPads.removePad(e)}clearAll(){this.smdPads.clear(),console.log("🧹 Cleared all SMD pads")}getPad(e){return this.smdPads.getPad(e)}getAllPads(){return this.smdPads.getAllPads()}getPadsByLayer(e){return this.smdPads.getPadsByLayer(e)}getPadsByType(e){return this.smdPads.getPadsByType(e)}updatePadPosition(e,t){return this.smdPads.updatePadPosition(e,t)}updatePadSize(e,t){return this.smdPads.updatePadSize(e,t)}getStatistics(){return this.smdPads.getStats()}validateCopperLayerPositioning(){const e=this.copperLayerManager.getTopCopperZ(),t=this.copperLayerManager.getBottomCopperZ(),i=this.getPadsByLayer("top"),r=this.getPadsByLayer("bottom");return{valid:this.copperLayerManager.validateZSeparation(),topLayerZ:e,bottomLayerZ:t,padsOnTop:i.length,padsOnBottom:r.length}}createCopperLayerMarkers(){this.removeCopperLayerMarkers();const e=new le(new Jo(1),new Gs({color:65280,opacity:.7,transparent:!0}));e.position.set(0,this.copperLayerManager.getTopCopperZ(),0),e.name="copper_layer_marker_top",this.scene.add(e);const t=new le(new Jo(1),new Gs({color:16711680,opacity:.7,transparent:!0}));t.position.set(0,this.copperLayerManager.getBottomCopperZ(),0),t.name="copper_layer_marker_bottom",this.scene.add(t)}removeCopperLayerMarkers(){const e=this.scene.getObjectByName("copper_layer_marker_top"),t=this.scene.getObjectByName("copper_layer_marker_bottom");e&&(this.scene.remove(e),e instanceof le&&(e.geometry.dispose(),e.material instanceof ln&&e.material.dispose())),t&&(this.scene.remove(t),t instanceof le&&(t.geometry.dispose(),t.material instanceof ln&&t.material.dispose()))}setPadHovered(e,t){return this.smdPads.setPadHovered(e,t)}setInstanceHovered(e,t){return this.smdPads.setInstanceHovered(e,t)}setPadSelected(e,t){return this.smdPads.setPadSelected(e,t)}clearInteractionStates(){this.smdPads.clearInteractionStates()}getShaderMaterial(){return this.smdPads.getShaderMaterial()}getInstancedMesh(){return this.smdPads.instancedMesh}getEdgeMesh(){return this.smdPads.edgeMesh}setEdgeVisible(e){this.smdPads.setEdgeVisible(e)}setEdgeColor(e){this.smdPads.setEdgeColor(e)}setEdgeWidth(e){this.smdPads.setEdgeWidth(e)}setEdgeOpacity(e){this.smdPads.setEdgeOpacity(e)}updateEdgeAnimation(e){this.smdPads.updateEdgeAnimation(e)}dispose(){this.removeCopperLayerMarkers(),this.scene.remove(this.smdPads.instancedMesh),this.scene.remove(this.smdPads.edgeMesh),this.smdPads.dispose(),console.log("🗑️ SMD Pad Manager disposed")}}class k1{constructor(e,t,i=1e3){oe(this,"traces",new Map);oe(this,"traceMeshes",new Map);oe(this,"instancedMesh",null);oe(this,"traceSegments",new Map);oe(this,"maxInstances");oe(this,"instanceCount",0);oe(this,"scene");oe(this,"geometryCache",new Map);this.scene=t,this.maxInstances=i,this.createInstancedMesh()}createInstancedMesh(){const e=this.createTraceSegmentGeometry(1,1),t=Dt.createMaterial({baseColor:new Re(12088115),edgeColor:new Re(0),edgeWidth:1.5});this.instancedMesh=new Qn(e,t,this.maxInstances),this.instancedMesh.name="flat_traces",this.instancedMesh.castShadow=!0,this.instancedMesh.receiveShadow=!0,this.scene.add(this.instancedMesh)}createTraceSegmentGeometry(e,t){const i=new en,r=t/2,s=e/2,o=new Float32Array([-s,0,-r,s,0,-r,s,0,r,-s,0,r]),a=new Uint16Array([0,1,2,0,2,3]),l=new Float32Array([1,0,0,0,1,0,0,0,1,1,0,1]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0]);return i.setAttribute("position",new Bt(o,3)),i.setAttribute("barycentric",new Bt(l,3)),i.setAttribute("uv",new Bt(c,2)),i.setAttribute("normal",new Bt(d,3)),i.setIndex(new Bt(a,1)),i}breakTraceIntoSegments(e,t){const i=[];for(let r=0;r<e.length-1;r++){const s=e[r],o=e[r+1],a=o.x-s.x,l=o.y-s.y,c=Math.sqrt(a*a+l*l),d=Math.atan2(l,a);i.push({startPoint:s,endPoint:o,width:t,angle:d,length:c})}return i}getOrCreateGeometry(e,t){const i=Math.round(e*100)*1e4+Math.round(t*100);if(!this.geometryCache.has(i)){const r=this.createTraceSegmentGeometry(e,t);this.geometryCache.set(i,r)}return this.geometryCache.get(i)}addTrace(e){if(this.instanceCount>=this.maxInstances)return console.warn("Maximum trace instances reached"),!1;this.traces.set(e.id,e);const t=this.breakTraceIntoSegments(e.points,e.width);return this.traceSegments.set(e.id,t),t.forEach((i,r)=>{const s=this.getOrCreateGeometry(i.length,i.width),o=Dt.createMaterial({baseColor:new Re(12088115),edgeColor:new Re(0),edgeWidth:1.5}),a=new le(s,o);a.name=`trace_${e.id}_segment_${r}`;const l=(i.startPoint.x+i.endPoint.x)/2,c=(i.startPoint.y+i.endPoint.y)/2;a.position.set(l,0,c),a.rotation.y=-i.angle,this.scene.add(a),this.traceMeshes.set(`${e.id}_${r}`,a)}),this.instanceCount+=t.length,console.log(`Added trace "${e.id}" with ${t.length} segments`),!0}removeTrace(e){if(!this.traces.has(e))return!1;const t=this.traceSegments.get(e)||[];return t.forEach((i,r)=>{const s=`${e}_${r}`,o=this.traceMeshes.get(s);o&&(this.scene.remove(o),o.geometry.dispose(),o.material instanceof ln&&o.material.dispose(),this.traceMeshes.delete(s))}),this.traces.delete(e),this.traceSegments.delete(e),this.instanceCount-=t.length,console.log(`Removed trace "${e}"`),!0}updateTrace(e,t){const i=this.traces.get(e);return i?(this.removeTrace(e),i.points=t,this.addTrace(i)):!1}updateTraceWidth(e,t){const i=this.traces.get(e);return i?(this.removeTrace(e),i.width=t,this.addTrace(i)):!1}getTrace(e){return this.traces.get(e)}getAllTraces(){return Array.from(this.traces.values())}getTracesByLayer(e){return Array.from(this.traces.values()).filter(t=>t.layer===e)}setTraceHovered(e,t){const i=this.traceSegments.get(e);return i?(i.forEach((r,s)=>{const o=`${e}_${s}`,a=this.traceMeshes.get(o);a&&a.material instanceof cn&&Dt.setHovered(a.material,t)}),!0):!1}setTraceSelected(e,t){const i=this.traceSegments.get(e);return i?(i.forEach((r,s)=>{const o=`${e}_${s}`,a=this.traceMeshes.get(o);a&&a.material instanceof cn&&Dt.setSelected(a.material,t)}),!0):!1}clear(){this.traceMeshes.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material instanceof ln&&e.material.dispose()}),this.traces.clear(),this.traceMeshes.clear(),this.traceSegments.clear(),this.instanceCount=0,console.log("Cleared all traces")}getStats(){const e=this.getAllTraces(),t=Array.from(this.traceSegments.values()).reduce((i,r)=>i+r.length,0);return{totalTraces:this.traces.size,totalSegments:t,maxInstances:this.maxInstances,cachedGeometries:this.geometryCache.size,topLayerTraces:e.filter(i=>i.layer==="top").length,bottomLayerTraces:e.filter(i=>i.layer==="bottom").length}}dispose(){this.clear(),this.geometryCache.forEach(e=>{e.dispose()}),this.geometryCache.clear(),this.instancedMesh&&(this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material instanceof ln&&this.instancedMesh.material.dispose())}createSampleTraces(){const e={id:"sample_trace_1",points:[new ue(-20,-10),new ue(0,-10),new ue(0,10)],width:.5,layer:"top",name:"L-shaped trace"},t={id:"sample_trace_2",points:[new ue(10,-10),new ue(15,-8),new ue(18,-5),new ue(20,0),new ue(18,5),new ue(15,8),new ue(10,10)],width:.8,layer:"top",name:"Curved trace"},i={id:"sample_trace_3",points:[new ue(-30,0),new ue(-10,0)],width:1,layer:"bottom",name:"Straight trace"};this.addTrace(e),this.addTrace(t),this.addTrace(i),console.log("Created sample traces")}}class B1{constructor(e,t){oe(this,"flatTraces");this.flatTraces=new k1(t,e,1e3)}addTrace(e){return this.flatTraces.addTrace(e)}addTraces(e){let t=0;return e.forEach(i=>{this.flatTraces.addTrace(i)&&t++}),console.log(`Added ${t}/${e.length} traces`),t}removeTrace(e){return this.flatTraces.removeTrace(e)}updateTracePath(e,t){return this.flatTraces.updateTrace(e,t)}updateTraceWidth(e,t){return this.flatTraces.updateTraceWidth(e,t)}getTrace(e){return this.flatTraces.getTrace(e)}getAllTraces(){return this.flatTraces.getAllTraces()}getTracesByLayer(e){return this.flatTraces.getTracesByLayer(e)}setTraceHovered(e,t){return this.flatTraces.setTraceHovered(e,t)}setTraceSelected(e,t){return this.flatTraces.setTraceSelected(e,t)}clearAll(){this.flatTraces.clear()}getStatistics(){return this.flatTraces.getStats()}dispose(){this.flatTraces.dispose()}getTraceMeshes(){return Array.from(this.flatTraces.traceMeshes.values())}initializeDemo(){this.flatTraces.createSampleTraces()}createTraceFromPoints(e,t=.5,i="top",r){const s=`trace_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,o={id:s,points:e,width:t,layer:i,name:r||`Trace ${s}`};return this.addTrace(o)?s:""}createRectangularTrace(e,t,i=.5,r="top"){const s=t.x/2,o=t.y/2,a=[new ue(e.x-s,e.y-o),new ue(e.x+s,e.y-o),new ue(e.x+s,e.y+o),new ue(e.x-s,e.y+o),new ue(e.x-s,e.y-o)];return this.createTraceFromPoints(a,i,r,"Rectangular Trace")}createCircularTrace(e,t,i=.5,r=16,s="top"){const o=[];for(let a=0;a<=r;a++){const l=a/r*Math.PI*2,c=e.x+Math.cos(l)*t,d=e.y+Math.sin(l)*t;o.push(new ue(c,d))}return this.createTraceFromPoints(o,i,s,"Circular Trace")}createZigzagTrace(e,t,i,r,s=.5,o="top"){const a=[],l=e.distanceTo(t),c=Math.floor(l*r);for(let d=0;d<=c;d++){const f=d/c,h=e.x+(t.x-e.x)*f,v=e.y+(t.y-e.y)*f,_=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2,y=Math.sin(f*Math.PI*2*r)*i,g=h+Math.cos(_)*y,u=v+Math.sin(_)*y;a.push(new ue(g,u))}return this.createTraceFromPoints(a,s,o,"Zigzag Trace")}batchCreateTraces(e){const t=[];return e.forEach(i=>{let r="";switch(i.type){case"straight":i.params.points&&(r=this.createTraceFromPoints(i.params.points,i.params.width,i.params.layer));break;case"rectangular":i.params.center&&i.params.size&&(r=this.createRectangularTrace(i.params.center,i.params.size,i.params.width,i.params.layer));break;case"circular":i.params.center&&i.params.radius!==void 0&&(r=this.createCircularTrace(i.params.center,i.params.radius,i.params.width,i.params.segments,i.params.layer));break;case"zigzag":i.params.start&&i.params.end&&i.params.amplitude!==void 0&&i.params.frequency!==void 0&&(r=this.createZigzagTrace(i.params.start,i.params.end,i.params.amplitude,i.params.frequency,i.params.width,i.params.layer));break}r&&t.push(r)}),console.log(`Batch created ${t.length}/${e.length} traces`),t}getTraceByMesh(e){if(!e.name||!e.name.startsWith("trace_"))return null;const t=e.name.split("_");if(t.length>=2){const i=t[1];return this.getTrace(i)||null}return null}updateAllTracesShader(e){this.getAllTraces().forEach(i=>{(this.flatTraces.traceSegments.get(i.id)||[]).forEach((s,o)=>{const a=`${i.id}_${o}`,l=this.flatTraces.traceMeshes.get(a);l&&l.material instanceof cn&&(e.baseColor&&Dt.setBaseColor(l.material,e.baseColor),e.edgeColor&&Dt.setEdgeColor(l.material,e.edgeColor),e.edgeWidth&&Dt.setEdgeWidth(l.material,e.edgeWidth))})})}animateTraces(e){this.getAllTraces().forEach(i=>{(this.flatTraces.traceSegments.get(i.id)||[]).forEach((s,o)=>{const a=`${i.id}_${o}`,l=this.flatTraces.traceMeshes.get(a);l&&l.material instanceof cn&&Dt.updateMaterial(l.material,e)})})}}const H1=({width:n=100,height:e=80,thickness:t=1.6})=>{const i=En.useRef(null),r=En.useRef(null),s=En.useRef(null),o=En.useRef(null),a=En.useRef(null),l=En.useRef(null),c=En.useRef(null),[d,f]=En.useState(null),[h,v]=En.useState([]),_=(S,A="info",w=3e3)=>{const b=Date.now().toString(),M={id:b,message:S,type:A,duration:w};v(T=>[...T,M]),w>0&&setTimeout(()=>{v(T=>T.filter(G=>G.id!==b))},w)};En.useEffect(()=>{if(!i.current){console.log("Canvas not available, waiting...");return}const S=i.current;if(!S.getContext){console.error("Canvas context not available");return}setTimeout(()=>{try{console.log("Initializing engine with canvas:",S),console.log("Canvas dimensions:",S.width,"x",S.height),console.log("Canvas context available:",!!S.getContext);const A=new I1(S);r.current=A,console.log("Engine created successfully"),A.start(),console.log("Engine started successfully");const w=new U1(n,e,t);s.current=w;const b=new N1;o.current=b;const M=new O1;a.current=M;const T=new z1(A.scene.scene,w.getCopperLayerManager());l.current=T,console.log("SMDPadManager created:",T);const G=new B1(A.scene.scene,w.getCopperLayerManager());c.current=G,console.log("TraceManager created:",G),A.scene.addToLayer(w.mesh,"board");const X=b.getMeshes();X.forEach(N=>{A.scene.addToLayer(N,"topCopper")});const K=M.getMeshes();K.forEach(N=>{A.scene.addToLayer(N,"topCopper")});const I=[...X,...K];A.interaction.setInteractableObjects(I),console.log("Set up interaction with",I.length,"meshes");const Z=setInterval(()=>{const N=A.interaction.getSelectedObject(),F=A.interaction.getHoverInfo();if(N&&F.instanceId!==null){const k=b.getPadData(`demo_pad_${F.instanceId}`);k&&f({id:k.id,type:"pad",position:k.position,area:b.calculatePadArea(k.id)})}else f(null)},100);console.log("🧪 Adding 150 test pads for InstancedMesh demonstration...");const Y=setTimeout(()=>{for(let N=0;N<150;N++){const F={id:`demo_pad_${N}`,type:N%2===0?"rect":"circle",position:new R((N%15-7)*3,0,(Math.floor(N/15)-5)*3),size:new ue(1.5,1.5),layer:N%3===0?"bottom":"top",rotation:N%4*Math.PI/4};b.addPad(F)}console.log("✅ Added 150 pads to InstancedMesh system")},100);return()=>{clearTimeout(Y),clearInterval(Z),r.current&&r.current.dispose()}}catch(A){console.error("Failed to initialize PCB viewer:",A),console.error("Canvas details:",{width:S.width,height:S.height,context:!!S.getContext})}},100)},[n,e,t]);const y=()=>{_("📤 Board exported successfully!","success")},g=()=>{_("📥 Board imported successfully!","success")},u=()=>{_("💾 Backup created successfully!","success")},m=()=>{_("🔄 Board restored from backup!","success")},p=()=>{_("📊 Resource stats logged to console","info")},x=()=>{_("🧹 All resources disposed!","success")};return Ve.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[Ve.jsx("canvas",{ref:i,style:{width:"100%",height:"100%",display:"block"}}),r.current&&o.current&&Ve.jsxs("div",{style:{position:"absolute",top:20,right:20,background:"rgba(0, 0, 0, 0.9)",color:"white",padding:20,borderRadius:8,minWidth:280,fontFamily:"monospace",fontSize:"14px"},children:[Ve.jsx("h3",{style:{margin:"0 0 15px 0",fontSize:"16px",color:"#4CAF50"},children:"Pad Information"}),d?Ve.jsxs("div",{children:[Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("div",{style:{color:"#888",fontSize:"12px",marginBottom:2},children:"PAD ID"}),Ve.jsx("div",{style:{color:"#fff",fontWeight:"bold"},children:d.id})]}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("div",{style:{color:"#888",fontSize:"12px",marginBottom:2},children:"TYPE"}),Ve.jsx("div",{style:{color:"#fff",fontWeight:"bold"},children:d.type})]}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("div",{style:{color:"#888",fontSize:"12px",marginBottom:2},children:"WORLD POSITION"}),Ve.jsxs("div",{style:{color:"#fff",fontWeight:"bold"},children:["(",d.position.x.toFixed(2),", ",d.position.y.toFixed(2),", ",d.position.z.toFixed(2),")"]})]}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("div",{style:{color:"#888",fontSize:"12px",marginBottom:2},children:"SURFACE AREA"}),Ve.jsxs("div",{style:{color:"#fff",fontWeight:"bold"},children:[d.area.toFixed(4)," mm²"]})]})]}):Ve.jsxs("div",{style:{color:"#888",fontSize:"12px"},children:[Ve.jsx("div",{children:"No pad selected"}),Ve.jsx("div",{style:{marginTop:5},children:"Click on a pad to view details"})]})]}),Ve.jsxs("div",{style:{position:"absolute",top:20,left:20,background:"rgba(0, 0, 0, 0.8)",color:"white",padding:20,borderRadius:8,minWidth:300},children:[Ve.jsx("h3",{children:"PCB Viewer Controls"}),Ve.jsxs("div",{style:{marginBottom:15},children:[Ve.jsx("h4",{children:"Board Operations"}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("button",{onClick:y,style:{marginRight:5,fontSize:"12px",padding:"4px 8px"},children:"Export Board"}),Ve.jsx("button",{onClick:g,style:{marginRight:5,fontSize:"12px",padding:"4px 8px"},children:"Import Board"})]}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("button",{onClick:u,style:{marginRight:5,fontSize:"12px",padding:"4px 8px"},children:"Create Backup"}),Ve.jsx("button",{onClick:m,style:{marginRight:5,fontSize:"12px",padding:"4px 8px"},children:"Restore Backup"})]}),Ve.jsxs("div",{style:{marginBottom:10},children:[Ve.jsx("button",{onClick:p,style:{marginRight:5,fontSize:"12px",padding:"4px 8px"},children:"Resource Stats"}),Ve.jsx("button",{onClick:x,style:{fontSize:"12px",padding:"4px 8px"},children:"Dispose Resources"})]})]})]}),Ve.jsx("div",{style:{position:"absolute",top:20,left:"50%",transform:"translateX(-50%)",zIndex:1e3},children:h.map(S=>Ve.jsx("div",{style:{background:S.type==="success"?"#4CAF50":S.type==="error"?"#f44336":"#2196F3",color:"white",padding:"12px 20px",borderRadius:"6px",marginBottom:"8px",fontSize:"14px",fontWeight:"500",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideIn 0.3s ease-out",minWidth:"250px",textAlign:"center"},children:S.message},S.id))}),Ve.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})};Su.createRoot(document.getElementById("root")).render(Ve.jsx(Kv.StrictMode,{children:Ve.jsx(H1,{width:100,height:80,thickness:1.6})}));
