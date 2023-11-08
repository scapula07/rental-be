"use strict";exports.id=9387,exports.ids=[9387],exports.modules={84552:(e,t,r)=>{var a=r(35876).default;Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElement=function(e,t){return replaceElement(e,e,t)},t.isFragment=function(e){return e&&n(e)&&e.type===l.Fragment},t.isValidElement=void 0,t.replaceElement=replaceElement;var l=a(r(9885));let{isValidElement:n}=l;function replaceElement(e,t,r){return n(e)?l.cloneElement(e,"function"==typeof r?r(e.props||{}):r):t}t.isValidElement=n},90197:(e,t,r)=>{var a=r(35876).default,l=r(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(89367)),o=l(r(54029)),i=r(56346),u=l(r(83884)),d=a(r(9885)),s=r(75550),f=r(56442);function validateNum(e){return Number.isNaN(e)?0:e}let WaveEffect=e=>{let{className:t,target:r,component:a}=e,l=d.useRef(null),[c,v]=d.useState(null),[p,m]=d.useState([]),[y,b]=d.useState(0),[g,E]=d.useState(0),[C,h]=d.useState(0),[_,x]=d.useState(0),[S,N]=d.useState(!1),O={left:y,top:g,width:C,height:_,borderRadius:p.map(e=>`${e}px`).join(" ")};function syncPos(){let e=getComputedStyle(r);v((0,s.getTargetWaveColor)(r));let t="static"===e.position,{borderLeftWidth:a,borderTopWidth:l}=e;b(t?r.offsetLeft:validateNum(-parseFloat(a))),E(t?r.offsetTop:validateNum(-parseFloat(l))),h(r.offsetWidth),x(r.offsetHeight);let{borderTopLeftRadius:n,borderTopRightRadius:o,borderBottomLeftRadius:i,borderBottomRightRadius:u}=e;m([n,o,u,i].map(e=>validateNum(parseFloat(e))))}if(c&&(O["--wave-color"]=c),d.useEffect(()=>{if(r){let e;let t=(0,u.default)(()=>{syncPos(),N(!0)});return"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(syncPos)).observe(r),()=>{u.default.cancel(t),null==e||e.disconnect()}}},[]),!S)return null;let w=("Checkbox"===a||"Radio"===a)&&(null==r?void 0:r.classList.contains(f.TARGET_CLS));return d.createElement(o.default,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(e,t)=>{var r;if(t.deadline||"opacity"===t.propertyName){let e=null===(r=l.current)||void 0===r?void 0:r.parentElement;(0,i.unmount)(e).then(()=>{null==e||e.remove()})}return!1}},e=>{let{className:r}=e;return d.createElement("div",{ref:l,className:(0,n.default)(t,{"wave-quick":w},r),style:O})})};t.default=(e,t)=>{var r;let{component:a}=t;if("Checkbox"===a&&!(null===(r=e.querySelector("input"))||void 0===r?void 0:r.checked))return;let l=document.createElement("div");l.style.position="absolute",l.style.left="0px",l.style.top="0px",null==e||e.insertBefore(l,null==e?void 0:e.firstChild),(0,i.render)(d.createElement(WaveEffect,Object.assign({},t,{target:e})),l)}},3094:(e,t,r)=>{var a=r(35876).default,l=r(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(89367)),o=r(310),i=l(r(8703)),u=a(r(9885)),d=r(34791),s=r(84552),f=l(r(52320)),c=l(r(46113));t.default=e=>{let{children:t,disabled:r,component:a}=e,{getPrefixCls:l}=(0,u.useContext)(d.ConfigContext),v=(0,u.useRef)(null),p=l("wave"),[,m]=(0,f.default)(p),y=(0,c.default)(v,(0,n.default)(p,m),a);if(u.default.useEffect(()=>{let e=v.current;if(!e||1!==e.nodeType||r)return;let onClick=t=>{!(0,i.default)(t.target)||!e.getAttribute||e.getAttribute("disabled")||e.disabled||e.className.includes("disabled")||e.className.includes("-leave")||y(t)};return e.addEventListener("click",onClick,!0),()=>{e.removeEventListener("click",onClick,!0)}},[r]),!u.default.isValidElement(t))return null!=t?t:null;let b=(0,o.supportRef)(t)?(0,o.composeRef)(t.ref,v):v;return(0,s.cloneElement)(t,{ref:b})}},56442:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TARGET_CLS=void 0,t.TARGET_CLS="ant-wave-target"},52320:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(37952);let genWaveStyle=e=>{let{componentCls:t,colorPrimary:r}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${r})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:`box-shadow 0.4s ${e.motionEaseOutCirc},opacity 2s ${e.motionEaseOutCirc}`,"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:`box-shadow 0.3s ${e.motionEaseInOut},opacity 0.35s ${e.motionEaseInOut}`}}}}};t.default=(0,a.genComponentStyleHook)("Wave",e=>[genWaveStyle(e)])},46113:(e,t,r)=>{var a=r(92439).default,l=r(35876).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){let{wave:a}=n.useContext(d.ConfigContext),[,l,c]=(0,s.default)(),v=(0,o.useEvent)(n=>{let o=e.current;if((null==a?void 0:a.disabled)||!o)return;let i=o.querySelector(`.${f.TARGET_CLS}`)||o,{showEffect:d}=a||{};(d||u.default)(i,{className:t,token:l,component:r,event:n,hashId:c})}),p=n.useRef();return e=>{i.default.cancel(p.current),p.current=(0,i.default)(()=>{v(e)})}};var n=l(r(9885)),o=r(87844),i=a(r(83884)),u=a(r(90197)),d=r(34791),s=a(r(11753)),f=r(56442)},75550:(e,t)=>{function isNotGrey(e){let t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!t||!t[1]||!t[2]||!t[3]||!(t[1]===t[2]&&t[2]===t[3])}function isValidWaveColor(e){return e&&"#fff"!==e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&"rgba(255, 255, 255, 1)"!==e&&isNotGrey(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e}Object.defineProperty(t,"__esModule",{value:!0}),t.getTargetWaveColor=function(e){let{borderTopColor:t,borderColor:r,backgroundColor:a}=getComputedStyle(e);return isValidWaveColor(t)?t:isValidWaveColor(r)?r:isValidWaveColor(a)?a:null},t.isNotGrey=isNotGrey,t.isValidWaveColor=isValidWaveColor},87424:(e,t,r)=>{var a=r(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[];return l.default.Children.forEach(e,function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?r=r.concat(toArray(e)):(0,n.isFragment)(e)&&e.props?r=r.concat(toArray(e.props.children,t)):r.push(e))}),r};var l=a(r(9885)),n=r(62189)},8703:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,a=t.height;if(r||a)return!0}if(e.getBoundingClientRect){var l=e.getBoundingClientRect(),n=l.width,o=l.height;if(n||o)return!0}}return!1}},63007:(e,t,r)=>{var a=r(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,l.default)({},e);return Array.isArray(t)&&t.forEach(function(e){delete r[e]}),r};var l=a(r(89687))}};