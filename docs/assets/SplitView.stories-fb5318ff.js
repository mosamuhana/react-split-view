import{j as u}from"./jsx-runtime-94f6e698.js";import{R as Le,r as a}from"./index-8db94870.js";import{_ as ot,a as st,b as at,c as ge,d as ut}from"./isNativeReflectConstruct-3f48c230.js";import{R as ct}from"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";var ke={exports:{}},p={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,de=w?Symbol.for("react.element"):60103,pe=w?Symbol.for("react.portal"):60106,U=w?Symbol.for("react.fragment"):60107,X=w?Symbol.for("react.strict_mode"):60108,J=w?Symbol.for("react.profiler"):60114,Z=w?Symbol.for("react.provider"):60109,Q=w?Symbol.for("react.context"):60110,he=w?Symbol.for("react.async_mode"):60111,ee=w?Symbol.for("react.concurrent_mode"):60111,te=w?Symbol.for("react.forward_ref"):60112,ne=w?Symbol.for("react.suspense"):60113,lt=w?Symbol.for("react.suspense_list"):60120,re=w?Symbol.for("react.memo"):60115,ie=w?Symbol.for("react.lazy"):60116,ft=w?Symbol.for("react.block"):60121,dt=w?Symbol.for("react.fundamental"):60117,pt=w?Symbol.for("react.responder"):60118,ht=w?Symbol.for("react.scope"):60119;function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case de:switch(e=e.type,e){case he:case ee:case U:case J:case X:case ne:return e;default:switch(e=e&&e.$$typeof,e){case Q:case te:case ie:case re:case Z:return e;default:return t}}case pe:return t}}}function Fe(e){return C(e)===ee}p.AsyncMode=he;p.ConcurrentMode=ee;p.ContextConsumer=Q;p.ContextProvider=Z;p.Element=de;p.ForwardRef=te;p.Fragment=U;p.Lazy=ie;p.Memo=re;p.Portal=pe;p.Profiler=J;p.StrictMode=X;p.Suspense=ne;p.isAsyncMode=function(e){return Fe(e)||C(e)===he};p.isConcurrentMode=Fe;p.isContextConsumer=function(e){return C(e)===Q};p.isContextProvider=function(e){return C(e)===Z};p.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===de};p.isForwardRef=function(e){return C(e)===te};p.isFragment=function(e){return C(e)===U};p.isLazy=function(e){return C(e)===ie};p.isMemo=function(e){return C(e)===re};p.isPortal=function(e){return C(e)===pe};p.isProfiler=function(e){return C(e)===J};p.isStrictMode=function(e){return C(e)===X};p.isSuspense=function(e){return C(e)===ne};p.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===U||e===ee||e===J||e===X||e===ne||e===lt||typeof e=="object"&&e!==null&&(e.$$typeof===ie||e.$$typeof===re||e.$$typeof===Z||e.$$typeof===Q||e.$$typeof===te||e.$$typeof===dt||e.$$typeof===pt||e.$$typeof===ht||e.$$typeof===ft)};p.typeOf=C;ke.exports=p;var qe=ke.exports;function se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return Le.Children.forEach(e,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(se(r)):qe.isFragment(r)&&r.props?n=n.concat(se(r.props.children,t)):n.push(r))}),n}function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function mt(e,t){if(D(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(D(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function He(e){var t=mt(e,"string");return D(t)==="symbol"?t:String(t)}function vt(e,t,n){return t=He(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(n),!0).forEach(function(r){vt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yt(e,t){typeof e=="function"?e(t):D(e)==="object"&&e&&"current"in e&&(e.current=t)}function bt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(function(i){return i});return r.length<=1?r[0]:function(i){t.forEach(function(s){yt(s,i)})}}function St(e){var t,n,r=qe.isMemo(e)?e.type.type:e.type;return!(typeof r=="function"&&!((t=r.prototype)!==null&&t!==void 0&&t.render)||typeof e=="function"&&!((n=e.prototype)!==null&&n!==void 0&&n.render))}function gt(e){return e instanceof HTMLElement||e instanceof SVGElement}function xe(e){return gt(e)?e:e instanceof Le.Component?ct.findDOMNode(e):null}var We=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var f=s[i];n.call(r,f[1],f[0])}},t}()}(),ae=typeof window<"u"&&typeof document<"u"&&window.document===document,Y=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),zt=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Y):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),_t=2;function xt(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&c()}function f(){zt(s)}function c(){var o=Date.now();if(n){if(o-i<_t)return;r=!0}else n=!0,r=!1,setTimeout(f,t);i=o}return c}var wt=20,Et=["top","right","bottom","left","width","height","size","weight"],Rt=typeof MutationObserver<"u",Ot=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=xt(this.refresh.bind(this),wt)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ae||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Rt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ae||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Et.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Be=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},k=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Y},Ye=oe(0,0,0,0);function G(e){return parseFloat(e)||0}function we(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+G(s)},0)}function jt(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],f=e["padding-"+s];n[s]=G(f)}return n}function Pt(e){var t=e.getBBox();return oe(0,0,t.width,t.height)}function Ct(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ye;var r=k(e).getComputedStyle(e),i=jt(r),s=i.left+i.right,f=i.top+i.bottom,c=G(r.width),o=G(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+s)!==t&&(c-=we(r,"left","right")+s),Math.round(o+f)!==n&&(o-=we(r,"top","bottom")+f)),!Vt(e)){var l=Math.round(c+s)-t,g=Math.round(o+f)-n;Math.abs(l)!==1&&(c-=l),Math.abs(g)!==1&&(o-=g)}return oe(i.left,i.top,c,o)}var Mt=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof k(e).SVGGraphicsElement}:function(e){return e instanceof k(e).SVGElement&&typeof e.getBBox=="function"}}();function Vt(e){return e===k(e).document.documentElement}function Tt(e){return ae?Mt(e)?Pt(e):Ct(e):Ye}function $t(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,f=Object.create(s.prototype);return Be(f,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),f}function oe(e,t,n,r){return{x:e,y:t,width:n,height:r}}var At=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=oe(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Tt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),It=function(){function e(t,n){var r=$t(n);Be(this,{target:t,contentRect:r})}return e}(),Kt=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new We,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof k(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new At(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof k(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new It(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ge=typeof WeakMap<"u"?new WeakMap:new We,Ue=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ot.getInstance(),r=new Kt(t,n,this);Ge.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ue.prototype[e]=function(){var t;return(t=Ge.get(this))[e].apply(t,arguments)}});var Dt=function(){return typeof Y.ResizeObserver<"u"?Y.ResizeObserver:Ue}(),$=new Map;function Nt(e){e.forEach(function(t){var n,r=t.target;(n=$.get(r))===null||n===void 0||n.forEach(function(i){return i(r)})})}var Xe=new Dt(Nt);function Lt(e,t){$.has(e)||($.set(e,new Set),Xe.observe(e)),$.get(e).add(t)}function kt(e,t){$.has(e)&&($.get(e).delete(t),$.get(e).size||(Xe.unobserve(e),$.delete(e)))}function Ft(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,He(r.key),r)}}function qt(e,t,n){return t&&Ee(e.prototype,t),n&&Ee(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ht(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ot(e,t)}function Wt(e,t){if(t&&(D(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return st(e)}function Bt(e){var t=at();return function(){var r=ge(e),i;if(t){var s=ge(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Wt(this,i)}}var Yt=function(e){Ht(n,e);var t=Bt(n);function n(){return Ft(this,n),t.apply(this,arguments)}return qt(n,[{key:"render",value:function(){return this.props.children}}]),n}(a.Component),ue=a.createContext(null);function Gt(e){var t=e.children,n=e.onBatchResize,r=a.useRef(0),i=a.useRef([]),s=a.useContext(ue),f=a.useCallback(function(c,o,l){r.current+=1;var g=r.current;i.current.push({size:c,element:o,data:l}),Promise.resolve().then(function(){g===r.current&&(n==null||n(i.current),i.current=[])}),s==null||s(c,o,l)},[n,s]);return a.createElement(ue.Provider,{value:f},t)}function Ut(e,t){var n=e.children,r=e.disabled,i=a.useRef(null),s=a.useRef(null),f=a.useContext(ue),c=typeof n=="function",o=c?n(i):n,l=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),g=!c&&a.isValidElement(o)&&St(o),y=g?o.ref:null,h=a.useMemo(function(){return bt(y,i)},[y,i]),v=function(){return xe(i.current)||xe(s.current)};a.useImperativeHandle(t,function(){return v()});var j=a.useRef(e);j.current=e;var O=a.useCallback(function(S){var A=j.current,I=A.onResize,K=A.data,_=S.getBoundingClientRect(),d=_.width,m=_.height,b=S.offsetWidth,x=S.offsetHeight,P=Math.floor(d),z=Math.floor(m);if(l.current.width!==P||l.current.height!==z||l.current.offsetWidth!==b||l.current.offsetHeight!==x){var E={width:P,height:z,offsetWidth:b,offsetHeight:x};l.current=E;var V=b===Math.round(d)?d:b,T=x===Math.round(m)?m:x,F=_e(_e({},E),{},{offsetWidth:V,offsetHeight:T});f==null||f(F,S,K),I&&Promise.resolve().then(function(){I(F,S)})}},[]);return a.useEffect(function(){var S=v();return S&&!r&&Lt(S,O),function(){return kt(S,O)}},[i.current,r]),a.createElement(Yt,{ref:s},g?a.cloneElement(o,{ref:h}):o)}var Xt=a.forwardRef(Ut),Jt="rc-observer-key";function Zt(e,t){var n=e.children,r=typeof n=="function"?[n]:se(n);return r.map(function(i,s){var f=(i==null?void 0:i.key)||"".concat(Jt,"-").concat(s);return a.createElement(Xt,ut({},e,{key:f,ref:s===0?t:void 0}),i)})}var Je=a.forwardRef(Zt);Je.Collection=Gt;const Ze=5,Qt=300,ce=50,en="rgb(0, 122, 204)",Qe="horizontal",et=a.createContext({layout:Qe,paneMap:new Map}),tt=()=>a.useContext(et),le=({children:e,value:t})=>u.jsx(et.Provider,{value:t,children:e});try{le.displayName="SplitViewProvider",le.__docgenInfo={description:"",displayName:"SplitViewProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ContextType"}}}}}catch{}const nt={position:"absolute",left:0,top:0,width:"100%",height:"100%"},tn={display:"block",height:"100%",position:"relative",overflow:"hidden"},nn={...nt},rn={...nt,overflow:"hidden"},on={position:"absolute",display:"block",boxSizing:"border-box",overflow:"auto",height:"100%",width:"100%",left:0,top:0},sn={position:"absolute",backgroundColor:"transparent",zIndex:35},q={splitView:tn,paneContaienr:nn,sashContaienr:rn,pane:on,sash:sn},an={horizontal:{minimum:"e-resize",maximum:"w-resize",enabled:"ew-resize",disabled:"inherit"},vertical:{minimum:"s-resize",maximum:"n-resize",enabled:"ns-resize",disabled:"inherit"}};function fe({index:e,position:t=0,onSashDraging:n,onSashDragStoped:r,sashState:i="maximum",size:s=Ze,delay:f=ce,...c}){const o=a.useRef(n),l=a.useRef(r),g=a.useRef(0),y=a.useRef(!1),[h,v]=a.useState({mouseEnter:!1,hover:!1}),{layout:j}=tt();o.current=n,l.current=r,a.useEffect(()=>{const _=m=>{var b;if(y.current){m.preventDefault();const x=j==="horizontal"?m.screenX:m.screenY,P=x-g.current;g.current=x,(b=o.current)==null||b.call(o,P,e)}},d=m=>{var b;y.current&&(m.preventDefault(),y.current=!1,v(x=>({...x,hover:!1,mouseEnter:!1})),(b=l.current)==null||b.call(l))};return window.addEventListener("mousemove",_),window.addEventListener("mouseup",d),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",d)}},[e,j]);const O={...q.sash,width:"100%",height:"100%"},S=t-s/2;O.cursor=an[j][i],j=="horizontal"?(O.width=s,O.left=`${S}px`):(O.height=s,O.top=`${S}px`),(h.hover||y.current)&&(O.backgroundColor=en),a.useEffect(()=>{let _;return h.mouseEnter&&(_=setTimeout(()=>{v(d=>({...d,hover:!0}))},f)),()=>{_&&clearTimeout(_)}},[h.mouseEnter,f]);const A=a.useCallback(_=>{i!="disabled"&&(g.current=j==="horizontal"?_.screenX:_.screenY,y.current=!0,v(d=>({...d,mouseEnter:!0,hover:!0})))},[j,i]),I=a.useCallback(()=>{!y.current&&i!="disabled"&&v(_=>({..._,mouseEnter:!0}))},[i]),K=a.useCallback(()=>{y.current||v(_=>({..._,mouseEnter:!1,hover:!1}))},[]);return u.jsx("div",{...c,style:O,onMouseDown:A,onMouseEnter:I,onMouseLeave:K})}try{fe.displayName="SplitViewSash",fe.__docgenInfo={description:"",displayName:"SplitViewSash",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},position:{defaultValue:{value:"0"},description:"",name:"position",required:!1,type:{name:"number"}},onSashDraging:{defaultValue:null,description:"",name:"onSashDraging",required:!1,type:{name:"((delta: number, index: number) => void)"}},onSashDragStoped:{defaultValue:null,description:"",name:"onSashDragStoped",required:!1,type:{name:"(() => void)"}},sashState:{defaultValue:{value:"maximum"},description:"",name:"sashState",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'},{value:'"minimum"'},{value:'"maximum"'}]}},size:{defaultValue:{value:"5"},description:"",name:"size",required:!1,type:{name:"number"}},delay:{defaultValue:{value:"50"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}function un(e,t){return e.maxSize===t.maxSize&&e.minSize===t.minSize&&e.paneKey===t.paneKey&&e.priority===t.priority&&e.snapable===t.snapable&&e.snapped===t.snapped&&e.snappedSize===t.snappedSize}function Re(e,t){const n=t.filter(o=>o.maxSize&&o.maxSize>0&&o.maxSize!==Number.POSITIVE_INFINITY).length;t.forEach((o,l)=>{const g=o.minSize||0;let y=o.maxSize||Number.POSITIVE_INFINITY,h=o.size;o.snapable=o.snapable||!1,g===0&&(o.snapable=!1),l===t.length-1&&n==t.length&&(y=Number.POSITIVE_INFINITY),o.snapable&&(o.snappedSize=o.snappedSize||0),o.snapable&&o.snapped===!0?h=o.snappedSize:h=o.minSize,o.minSize=g,o.maxSize=y,o.priority=o.priority||0,o.size=h});const r=t.reduce((o,l)=>o+l.size,0);let i=e-r;if(i===0)return;const s=Math.abs(i)/i,f=t.filter(o=>s>0&&o.size<o.maxSize&&!o.snapped||s<0&&o.size>o.minSize);if(f.length===0)return;const c=new Map;f.sort((o,l)=>l.priority-o.priority),f.forEach(o=>{const l=o.priority;c.has(l)||c.set(l,[]),c.get(l).push(o)}),c.forEach(o=>{let l=o.reduce((h,v)=>s>0?h+(v.maxSize-v.size):h+(v.size-v.minSize),0);l===Number.POSITIVE_INFINITY&&(l=i),Math.abs(i)>=l?i-=l*s:(l=i*s,i=0);let g=o.length,y=l/g;o.sort((h,v)=>s>0?h.maxSize-h.size-(v.maxSize-v.size):h.size-h.minSize-(v.size-v.minSize)).forEach(h=>{const v=s>0?h.maxSize-h.size:h.size-h.minSize;v<y?(h.size+=v*s,l-=v):(h.size+=y*s,l-=y),g--,y=l/g})})}function L(e,t,n,r){if(!e.length||e[0].snapped&&e[0].size===e[0].snappedSize)return 0;let i=0,s=t;for(let f=0;f<e.length&&s>0;f++){const c=e[f],o=n>0?c.maxSize-c.size:c.snapable&&c.size==c.minSize&&r?c.minSize:c.size-c.minSize;o>=s?(i+=s,r&&(c.size+=s*n),s=0):(s-=o,r&&(c.size+=o*n),i+=o),r&&c.snapped&&c.size!=c.snappedSize&&(c.snapped=!1)}return i}function cn(e,t){return e.minSize==e.maxSize||t.minSize==t.maxSize?"disabled":e.minSize==e.size?"minimum":e.maxSize==e.size?"maximum":"enabled"}function ln(e){const t=new Map;return a.Children.forEach(e,n=>{a.isValidElement(n)&&n.props.paneKey&&t.set(n.props.paneKey,n)}),t}function Oe(e){return e.reduce((t,n)=>n.minSize===n.maxSize?t+1:t,0)}function N({paneData:e,layout:t=Qe,onChange:n,hoverDelay:r=Qt,sashSize:i=Ze,actionRef:s,children:f}){const[c,o]=a.useState(e.map(d=>({...d}))),[l,g]=a.useState(0),y=a.useRef(0),h=a.useRef(!1),v=a.useRef(!1),j=a.useRef(n);j.current=n,y.current=l,a.useEffect(()=>{l>0&&(h.current=!0,o(d=>{const m=d.map(b=>({...b}));return Re(l,m),m}))},[l]);const O=a.useCallback(()=>{o(d=>{if(y.current>0){const m=e.map(b=>({...b}));return Re(y.current,m),[...m]}return d})},[e]);a.useEffect(()=>{!v.current&&l>0&&(v.current=!0,O())},[O,l]),a.useEffect(()=>{s&&(s.current={updatePaneData:O})},[s,O]);const S=a.useRef(0),A=a.useCallback(()=>{S.current=0},[]),I=a.useCallback((d,m)=>{if(d!==0){const b=Math.abs(d),x=c.slice(0,m).reverse(),P=c.slice(m,c.length),z=d>0?x:P,E=d<0?x:P;let V=L(z,b,1,!1),T=L(E,b,-1,!1);if(V==0&&z[0].snapable&&z[0].snapped&&z[0].minSize!=z[0].maxSize&&Oe(z)===z.length-1){const M=z[0].minSize-z[0].snappedSize;L(E,M,-1,!1)>=M&&(S.current+=Math.abs(d)),S.current>ce&&(S.current=0,V=T=M,z[0].snapped=!1)}if(T==0&&E.length>0&&E[0].snapable&&!E[0].snapped&&E[0].minSize!=E[0].maxSize&&Oe(E)===E.length-1){const M=E[0];if(M.snapable){const Se=M.minSize-M.snappedSize;L(z,M.minSize-M.snappedSize,1,!1)>=Se&&(S.current+=Math.abs(d),S.current>ce&&(S.current=0,V=T=M.minSize-M.snappedSize,M.snapped=!0))}}const F=Math.min(V,T);L(z,F,1,!0),L(E,F,-1,!0),o([...c])}},[c]),K=a.useMemo(()=>{let d=0;const m=[],b=[],x=new Map;return c.forEach((P,z)=>{const E=d;d+=P.size;const V={...P,position:E};if(m.push(P.paneKey),x.set(P.paneKey,V),z>0){const T=cn(c[z-1],c[z]);b.push(u.jsx(fe,{index:z,onSashDraging:I,onSashDragStoped:A,position:E,delay:r,sashState:T,size:i},`__svs_${P.paneKey}`))}}),{paneKeys:m,sashes:b,paneMap:x}},[r,t,I,A,c,i]),_=a.useMemo(()=>ln(f),[f]);return a.useEffect(()=>{var d;(c.length!=e.length||e.some((m,b)=>{const x=c[b];return x&&m&&!un(m,x)}))&&((d=j.current)==null||d.call(j,c))},[c,e]),u.jsx(le,{value:{layout:t,paneMap:K.paneMap},children:u.jsx(Je,{onResize:({width:d,height:m})=>{g(t==="horizontal"?d:m)},children:u.jsx("div",{style:q.splitView,children:h.current&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:q.sashContaienr,children:K.sashes}),u.jsx("div",{style:q.paneContaienr,children:K.paneKeys.map(d=>_.get(d))})]})})})})}try{N.displayName="SplitView",N.__docgenInfo={description:"",displayName:"SplitView",props:{paneData:{defaultValue:null,description:"",name:"paneData",required:!0,type:{name:"SplitViewPaneInfo[]"}},layout:{defaultValue:{value:"horizontal"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((paneInfo: SplitViewPaneInfo[]) => void)"}},hoverDelay:{defaultValue:{value:"300"},description:"",name:"hoverDelay",required:!1,type:{name:"number"}},sashSize:{defaultValue:{value:"5"},description:"",name:"sashSize",required:!1,type:{name:"number"}},actionRef:{defaultValue:null,description:"",name:"actionRef",required:!1,type:{name:"MutableRefObject<{ updatePaneData?: (() => void); }>"}}}}}catch{}function R({paneKey:e,children:t,...n}){const{layout:r,paneMap:i}=tt(),s=i.get(e);if(!s)return null;const{size:f,position:c}=s,o={...q.pane};return r==="horizontal"?(o.width=f??void 0,o.left=c):(o.height=f??void 0,o.top=c),u.jsx("div",{...n,style:o,children:t})}try{R.displayName="SplitViewPane",R.__docgenInfo={description:"",displayName:"SplitViewPane",props:{paneKey:{defaultValue:null,description:"",name:"paneKey",required:!0,type:{name:"string"}}}}}catch{}const fn=[{paneKey:"pane1",minSize:180},{paneKey:"pane2",minSize:180},{paneKey:"pane3",minSize:400}],dn={height:300,minWidth:600,overflow:"auto"},me={width:"100%",height:"100%",boxSizing:"border-box"},pn={...me,border:"1px solid red"},hn={...me,border:"1px solid blue"},mn={...me,border:"1px solid pink"},rt=()=>u.jsx("div",{style:dn,className:"demo-basic",children:u.jsxs(N,{paneData:fn,children:[u.jsx(R,{paneKey:"pane1",children:u.jsx("div",{style:pn,children:"Pane 1"})}),u.jsx(R,{paneKey:"pane2",children:u.jsx("div",{style:hn,children:"Pane 2"})}),u.jsx(R,{paneKey:"pane3",className:"content-pane",children:u.jsx("div",{style:mn,children:"Pane 3"})})]})}),vn=[{paneKey:"pane1",minSize:180,snapable:!0,snappedSize:24},{paneKey:"pane2",minSize:180},{paneKey:"pane3",minSize:400}],yn={height:300,minWidth:600,overflow:"auto"},ve={width:"100%",height:"100%",boxSizing:"border-box"},bn={...ve,border:"1px solid red"},Sn={...ve,border:"1px solid blue"},gn={...ve,border:"1px solid pink"},zn=()=>{const[e,t]=a.useState(()=>vn),n=a.useRef({});return u.jsx("div",{style:yn,children:u.jsxs(N,{paneData:e,onChange:r=>t([...r]),actionRef:n,children:[u.jsx(R,{paneKey:"pane1",children:u.jsx("div",{style:bn,children:"Pane 1"})}),u.jsx(R,{paneKey:"pane2",children:u.jsx("div",{style:Sn,children:u.jsx("button",{onClick:()=>{var r,i;t(s=>{const f=s[0];return f.snapped=!f.snapped,s.map(c=>({...c}))}),(i=(r=n.current)==null?void 0:r.updatePaneData)==null||i.call(r)},children:"Pane 2"})})}),u.jsx(R,{paneKey:"pane3",className:"content-pane",children:u.jsx("div",{style:gn,children:"Pane 3"})})]})})},_n={width:"100%",height:"100%",backgroundColor:"rgb(30, 30, 30)",borderLeftColor:"rgba(128, 128, 128, 0.35)",borderRightColor:"rgba(128, 128, 128, 0.35)"};function xn(){return u.jsx("div",{style:_n,children:u.jsx("div",{style:{width:"100%",borderTop:"1px solid rgba(128, 128, 128, 0.35)"}})})}const wn={width:"100%",height:"100%",backgroundColor:"rgb(30, 30, 30)"};function En(){return u.jsx("div",{style:wn})}const ye=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},be=e=>{const t=localStorage.getItem(e);if(t)return JSON.parse(t)},je="MAIN_LAYOUT",Rn=[{paneKey:"editor",minSize:80,priority:1},{paneKey:"console",minSize:80,snapable:!0}];function On(){const[e,t]=a.useState(()=>be(je)??Rn);return a.useEffect(()=>{ye(je,e)},[e]),u.jsxs(N,{layout:"vertical",paneData:e,onChange:n=>t([...n]),children:[u.jsx(R,{paneKey:"editor",children:u.jsx(En,{})}),u.jsx(R,{paneKey:"console",children:u.jsx(xn,{})})]})}const Pe="CONTENT_LAYOUT",jn=[{paneKey:"controlBar",minSize:48,maxSize:48},{paneKey:"explorer",minSize:120,size:180,snapable:!0},{paneKey:"main",minSize:160,priority:1}],Pn={width:"100%",height:"100%",backgroundColor:"#333333"},Cn={width:"100%",height:"100%",backgroundColor:"#252526",outlineColor:"rgba(83, 89, 93, 0.5)"};function Mn(){const[e,t]=a.useState(()=>be(Pe)??jn);return a.useEffect(()=>{ye(Pe,e)},[e]),u.jsxs(N,{paneData:e,onChange:n=>t([...n]),children:[u.jsx(R,{paneKey:"controlBar",children:u.jsx("div",{style:Pn})}),u.jsx(R,{paneKey:"explorer",children:u.jsx("div",{style:Cn})}),u.jsx(R,{paneKey:"main",children:u.jsx(On,{})})]})}const Vn={width:"100%",height:"100%",backgroundColor:"#323233"},Tn=()=>u.jsx("div",{style:Vn}),$n={width:"100%",height:"100%",backgroundColor:"rgb(0, 122, 204)"},An=()=>u.jsx("div",{style:$n}),Ce="APP_LAYOUT",In=[{paneKey:"menu",minSize:30,maxSize:30},{paneKey:"content",minSize:120},{paneKey:"statusBar",minSize:22,maxSize:22}],Kn=()=>{const[e,t]=a.useState(()=>be(Ce)??In);return a.useEffect(()=>{ye(Ce,e)},[e]),u.jsx("div",{style:{height:500},children:u.jsxs(N,{paneData:e,onChange:n=>t([...n]),layout:"vertical",children:[u.jsx(R,{paneKey:"menu",children:u.jsx(Tn,{})}),u.jsx(R,{paneKey:"content",children:u.jsx(Mn,{})}),u.jsx(R,{paneKey:"statusBar",children:u.jsx(An,{})})]})})};function Dn(){return u.jsx(rt,{})}const Wn={title:"Example/SplitView",component:Dn,tags:["autodocs"]},H={render(){return u.jsx(rt,{})}},W={render(){return u.jsx(zn,{})}},B={render(){return u.jsx(Kn,{})}};var Me,Ve,Te;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render() {
    return <_Example1 />;
  }
}`,...(Te=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var $e,Ae,Ie;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render() {
    return <_Example2 />;
  }
}`,...(Ie=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Ke,De,Ne;B.parameters={...B.parameters,docs:{...(Ke=B.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render() {
    return <_Example3 />;
  }
}`,...(Ne=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const Bn=["Example1","Example2","Example3"];export{H as Example1,W as Example2,B as Example3,Bn as __namedExportsOrder,Wn as default};
//# sourceMappingURL=SplitView.stories-fb5318ff.js.map
