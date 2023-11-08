"use strict";exports.id=3667,exports.ids=[3667],exports.modules={94709:(e,t,r)=>{var n=r(92439),a=r(67236);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(43259)),l=n(r(89687)),i=n(r(14498)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(9885)),f=n(r(89367)),d=n(r(78922)),c=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}var s=void 0,p=o.forwardRef(function(e,t){var r,n=e.prefixCls,a=e.invalidate,p=e.item,v=e.renderItem,m=e.responsive,y=e.responsiveDisabled,g=e.registerSize,b=e.itemKey,h=e.className,O=e.style,w=e.children,C=e.display,_=e.order,R=e.component,M=void 0===R?"div":R,W=(0,i.default)(e,c),j=m&&!C;o.useEffect(function(){return function(){g(b,null)}},[]);var P=v&&p!==s?v(p):w;a||(r={opacity:j?0:1,height:j?0:s,overflowY:j?"hidden":s,order:m?_:s,pointerEvents:j?"none":s,position:j?"absolute":s});var x={};j&&(x["aria-hidden"]=!0);var E=o.createElement(M,(0,u.default)({className:(0,f.default)(!a&&n,h),style:(0,l.default)((0,l.default)({},r),O)},x,W,{ref:t}),P);return m&&(E=o.createElement(d.default,{onResize:function(e){g(b,e.offsetWidth)},disabled:y},E)),E});p.displayName="Item",t.default=p},67156:(e,t,r)=>{var n=r(92439),a=r(67236);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OverflowContext",{enumerable:!0,get:function(){return y.OverflowContext}}),t.default=void 0;var u=n(r(43259)),l=n(r(89687)),i=n(r(16522)),o=n(r(14498)),f=_interopRequireWildcard(r(9885)),d=n(r(89367)),c=n(r(78922)),s=n(r(50368)),p=n(r(94709)),v=_interopRequireWildcard(r(85518)),m=n(r(36538)),y=r(69889),g=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}var b="responsive",h="invalidate";function defaultRenderRest(e){return"+ ".concat(e.length," ...")}var O=f.forwardRef(function(e,t){var r,n=e.prefixCls,a=void 0===n?"rc-overflow":n,m=e.data,O=void 0===m?[]:m,w=e.renderItem,C=e.renderRawItem,_=e.itemKey,R=e.itemWidth,M=void 0===R?10:R,W=e.ssr,j=e.style,P=e.className,x=e.maxCount,E=e.renderRest,N=e.renderRawRest,k=e.suffix,I=e.component,D=void 0===I?"div":I,S=e.itemComponent,q=e.onVisibleChange,z=(0,o.default)(e,g),A="full"===W,K=(0,v.useBatcher)(),V=(0,v.default)(K,null),T=(0,i.default)(V,2),B=T[0],F=T[1],G=B||0,X=(0,v.default)(K,new Map),L=(0,i.default)(X,2),U=L[0],Y=L[1],H=(0,v.default)(K,0),J=(0,i.default)(H,2),Q=J[0],Z=J[1],$=(0,v.default)(K,0),ee=(0,i.default)($,2),et=ee[0],er=ee[1],en=(0,v.default)(K,0),ea=(0,i.default)(en,2),eu=ea[0],el=ea[1],ei=(0,f.useState)(null),eo=(0,i.default)(ei,2),ef=eo[0],ed=eo[1],ec=(0,f.useState)(null),es=(0,i.default)(ec,2),ep=es[0],ev=es[1],em=f.useMemo(function(){return null===ep&&A?Number.MAX_SAFE_INTEGER:ep||0},[ep,B]),ey=(0,f.useState)(!1),eg=(0,i.default)(ey,2),eb=eg[0],eh=eg[1],eO="".concat(a,"-item"),ew=Math.max(Q,et),eC=x===b,e_=O.length&&eC,eR=x===h,eM=e_||"number"==typeof x&&O.length>x,eW=(0,f.useMemo)(function(){var e=O;return e_?e=null===B&&A?O:O.slice(0,Math.min(O.length,G/M)):"number"==typeof x&&(e=O.slice(0,x)),e},[O,M,B,x,e_]),ej=(0,f.useMemo)(function(){return e_?O.slice(em+1):O.slice(eW.length)},[O,eW,e_,em]),eP=(0,f.useCallback)(function(e,t){var r;return"function"==typeof _?_(e):null!==(r=_&&(null==e?void 0:e[_]))&&void 0!==r?r:t},[_]),ex=(0,f.useCallback)(w||function(e){return e},[w]);function updateDisplayCount(e,t,r){(ep!==e||void 0!==t&&t!==ef)&&(ev(e),r||(eh(e<O.length-1),null==q||q(e)),void 0!==t&&ed(t))}function registerSize(e,t){Y(function(r){var n=new Map(r);return null===t?n.delete(e):n.set(e,t),n})}function getItemWidth(e){return U.get(eP(eW[e],e))}(0,s.default)(function(){if(G&&"number"==typeof ew&&eW){var e=eu,t=eW.length,r=t-1;if(!t){updateDisplayCount(0,null);return}for(var n=0;n<t;n+=1){var a=getItemWidth(n);if(A&&(a=a||0),void 0===a){updateDisplayCount(n-1,void 0,!0);break}if(e+=a,0===r&&e<=G||n===r-1&&e+getItemWidth(r)<=G){updateDisplayCount(r,null);break}if(e+ew>G){updateDisplayCount(n-1,e-a-eu+et);break}}k&&getItemWidth(0)+eu>G&&ed(null)}},[G,U,et,eu,eP,eW]);var eE=eb&&!!ej.length,eN={};null!==ef&&e_&&(eN={position:"absolute",left:ef,top:0});var ek={prefixCls:eO,responsive:e_,component:S,invalidate:eR},eI=C?function(e,t){var r=eP(e,t);return f.createElement(y.OverflowContext.Provider,{key:r,value:(0,l.default)((0,l.default)({},ek),{},{order:t,item:e,itemKey:r,registerSize:registerSize,display:t<=em})},C(e,t))}:function(e,t){var r=eP(e,t);return f.createElement(p.default,(0,u.default)({},ek,{order:t,key:r,item:e,renderItem:ex,itemKey:r,registerSize:registerSize,display:t<=em}))},eD={order:eE?em:Number.MAX_SAFE_INTEGER,className:"".concat(eO,"-rest"),registerSize:function(e,t){er(t),Z(et)},display:eE};if(N)N&&(r=f.createElement(y.OverflowContext.Provider,{value:(0,l.default)((0,l.default)({},ek),eD)},N(ej)));else{var eS=E||defaultRenderRest;r=f.createElement(p.default,(0,u.default)({},ek,eD),"function"==typeof eS?eS(ej):eS)}var eq=f.createElement(D,(0,u.default)({className:(0,d.default)(!eR&&a,P),style:j,ref:t},z),eW.map(eI),eM?r:null,k&&f.createElement(p.default,(0,u.default)({},ek,{responsive:eC,responsiveDisabled:!e_,order:em,className:"".concat(eO,"-suffix"),registerSize:function(e,t){el(t)},display:!0,style:eN}),k));return eC&&(eq=f.createElement(c.default,{onResize:function(e,t){F(t.clientWidth)},disabled:!e_},eq)),eq});O.displayName="Overflow",O.Item=m.default,O.RESPONSIVE=b,O.INVALIDATE=h,t.default=O},36538:(e,t,r)=>{var n=r(92439),a=r(67236);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(43259)),l=n(r(14498)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(9885)),o=n(r(89367)),f=n(r(94709)),d=r(69889),c=["component"],s=["className"],p=["className"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}var v=i.forwardRef(function(e,t){var r=i.useContext(d.OverflowContext);if(!r){var n=e.component,a=void 0===n?"div":n,v=(0,l.default)(e,c);return i.createElement(a,(0,u.default)({},v,{ref:t}))}var m=r.className,y=(0,l.default)(r,s),g=e.className,b=(0,l.default)(e,p);return i.createElement(d.OverflowContext.Provider,{value:null},i.createElement(f.default,(0,u.default)({ref:t,className:(0,o.default)(m,g)},y,b)))});v.displayName="RawItem",t.default=v},69889:(e,t,r)=>{var n=r(92439);Object.defineProperty(t,"__esModule",{value:!0}),t.OverflowContext=void 0;var a=n(r(9885)).default.createContext(null);t.OverflowContext=a},69667:(e,t,r)=>{var n=r(92439);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("undefined"==typeof MessageChannel)(0,a.default)(e);else{var t=new MessageChannel;t.port1.onmessage=function(){return e()},t.port2.postMessage(void 0)}};var a=n(r(83884))},85518:(e,t,r)=>{var n=r(92439),a=r(67236);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=i.useState(t),n=(0,u.default)(r,2),a=n[0],o=n[1];return[a,(0,l.default)(function(t){e(function(){o(t)})})]},t.useBatcher=function(){var e=i.useRef(null);return function(t){e.current||(e.current=[],(0,f.default)(function(){(0,o.unstable_batchedUpdates)(function(){e.current.forEach(function(e){e()}),e.current=null})})),e.current.push(t)}};var u=n(r(16522)),l=n(r(64301)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(9885)),o=r(88908),f=n(r(69667));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}},13667:(e,t,r)=>{var n=r(92439);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(67156)).default;t.default=a}};