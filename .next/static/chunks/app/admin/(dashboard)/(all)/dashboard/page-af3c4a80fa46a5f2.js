(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4183],{38199:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"}},75204:function(e,t,r){"use strict";Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return o}});var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(r(2265)),a=_interop_require_default(r(38199)),s=_interop_require_default(r(51718));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}var o=n.forwardRef(function(e,t){var r,o;return n.createElement(s.default,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e),o=o={ref:t,icon:a.default},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}),r))})},19683:function(e,t,r){Promise.resolve().then(r.bind(r,22605)),Promise.resolve().then(r.bind(r,55430))},22605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return dashboard}});var n=r(57437),a=r(2265);function UserCard(e){let{total:t,title:r,icon:a}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("h3",{className:"text-4xl font-bold",children:t}),(0,n.jsx)("p",{children:r})]}),(0,n.jsx)("div",{className:"w-4/12",children:(0,n.jsx)("div",{className:"flex h-full items-center justify-center bg-blue-600 text-white rounded-xl",children:a})})]})}function EarningCard(){return(0,n.jsxs)("div",{className:"rounded-xl border p-4",children:[(0,n.jsx)("p",{className:"text-center",children:"Last Month"}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("span",{className:"text-3xl font-bold",children:"$9460.00"}),(0,n.jsx)("span",{children:"↓ 1.5%"})]}),(0,n.jsx)("p",{children:"Compared to $9940 yesterday"}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"Last week Income"}),(0,n.jsx)("span",{children:"$2658.00"})]})]})}r(30610),r(16691);var s=r(75204),o=r(11245),u=r(82749),dashboard=function(){let[e,t]=(0,a.useState)(0),[r,c]=(0,a.useState)(""),[i,l]=a.useState(1),{data:f,status:d}=(0,u.useSession)();return"authenticated"===d&&0===e&&(c(f.user.token),t(1)),(0,n.jsxs)("section",{className:"space-y-8",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8",children:[(0,n.jsx)(UserCard,{total:45,title:"Active Users",icon:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(UserCard,{total:23,title:"New Users",icon:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(UserCard,{total:10,title:"Partners",icon:(0,n.jsx)(s.Z,{})})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("h4",{className:"text-xl",children:"Earnings "}),(0,n.jsx)("p",{className:"text-sm text-[#A3A3A3]",children:"Tue, 14 Nov, 2022, 11.30 AM "})]}),(0,n.jsxs)("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4",children:[(0,n.jsx)(EarningCard,{}),(0,n.jsx)(EarningCard,{})]})]}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(o.default,{})})]})}},55430:function(e,t,r){"use strict";r.r(t);var n=r(57437);r(2265),t.default=function(e){let{title:t,subtitle:r}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h1",{className:"text-2xl font-medium",children:t}),r&&(0,n.jsx)("p",{className:"text-sm text-[#8C8C8C]",children:r})]})}},11245:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return dashboard_table}});var n=r(57437),a=r(30610);r(2265);var s=r(68939);let o=[{title:"No.",dataIndex:"",key:"",width:60,render:(e,t,r)=>r+1},{title:"VIN Number",dataIndex:"car_no",key:"car_no",width:100},{title:"Driver",dataIndex:"driver",key:"driver",render:e=>(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("img",{src:e.avatar,alt:e.name,className:"w-8 h-8 rounded-full"}),(0,n.jsx)("span",{children:e.name})]})},{title:"Status",dataIndex:"status",key:"status",render:e=>{let t="green";return"inactive"===e&&(t="red"),"active"===e&&(t="green"),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"relative h-3 w-3 rounded-full before:absolute before:h-4 before:w-4 before:border before:rounded-full before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 \n            ".concat("green"===t?"bg-green-400 before:border-green-400":"blue"===t?"bg-blue-400 before:border-blue-400":"bg-red-400 before:border-red-400")}),(0,n.jsx)("span",{className:"capitalize",children:e})]})}},{title:"Earnings",dataIndex:"earnings",key:"earnings",width:200,render:e=>(0,n.jsxs)("span",{children:["$",e]})}],u=[{car_no:"646543578222",driver:{name:"John Brown",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"active",earnings:71},{car_no:"566572373784",driver:{name:"Jim Green",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"inactive",earnings:62},{car_no:"1755122349494",driver:{name:"Joe Black",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"inactive",earnings:50}];var table_table=function(){let e=[...o];return(0,n.jsx)(s.Z,{columns:e,dataSource:u,loading:!1,sticky:!0,className:"dashboard__car__table",scroll:{y:300,x:"max-content"}})},dashboard_table=function(){return(0,n.jsxs)("div",{className:"p-4 rounded shadow-card border",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h5",{children:"Live Car Status"}),(0,n.jsxs)("button",{className:"btn btn-ghost min-h-min gap-2",children:[(0,n.jsx)(a.k1,{}),(0,n.jsx)("span",{children:"Filter"})]})]}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)(table_table,{})})]})}},30610:function(e,t,r){"use strict";r.d(t,{$W:function(){return S.default},$l:function(){return N.default},A_:function(){return U.default},CN:function(){return M.default},FK:function(){return X.default},JC:function(){return $.default},JM:function(){return q.default},Kp:function(){return I.default},OT:function(){return i.default},Q6:function(){return u.default},Qu:function(){return A.default},RO:function(){return w.default},S5:function(){return Z.default},Sr:function(){return V.default},TB:function(){return k.default},TR:function(){return s.default},UJ:function(){return D.default},Vh:function(){return c.default},Vq:function(){return f.default},W1:function(){return j.default},Zl:function(){return R.default},Zm:function(){return p.default},_K:function(){return J.default},ae:function(){return C.default},b_:function(){return h.default},k1:function(){return g.default},kb:function(){return P.default},ly:function(){return b.default},p5:function(){return O.default},pA:function(){return d.default},qW:function(){return a.default},rE:function(){return L.default},sZ:function(){return T.default},sh:function(){return v.default},uf:function(){return o.default},ul:function(){return x.default},vr:function(){return l.default},wZ:function(){return n.default},x5:function(){return z.default},xh:function(){return m.default},xm:function(){return _.default},yd:function(){return W.default},yk:function(){return y.default}});var n=r(76189);r(86608);var a=r(50312),s=r(21832),o=r(4189),u=r(60426),c=r(97388);r(30807),r(40151);var i=r(51880),l=r(27104),f=r(25368),d=r(26888),p=r(73002),b=r(63842),h=r(87165),x=r(39222),m=r(41269),j=r(8898),v=r(84480),y=r(15155),g=r(229),_=r(38426),O=r(90841),w=r(69737),N=r(7014);r(83170);var S=r(21721),k=r(46801),C=r(84772),P=r(13010),q=r(21449),A=r(33341),M=r(35223),U=r(81027),D=r(65094),R=r(6920),W=r(49848),Z=r(6774),$=r(64986),z=r(62398),I=r(60905),T=r(5164),J=r(8826),L=r(97013),V=r(9921),X=r(2740);r(26198),r(7009),r(87494),r(63999)},37673:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,s={};function E(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||n}function F(){}function G(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||n}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var o=G.prototype=new F;o.constructor=G,a(o,E.prototype),o.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var a,s={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)u.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var f=Array(l),d=0;d<l;d++)f[d]=arguments[d+2];s.children=f}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===s[a]&&(s[a]=l[a]);return{$$typeof:r,type:e,key:o,ref:i,props:s,_owner:null}}},90952:function(e,t,r){"use strict";e.exports=r(37673)}},function(e){e.O(0,[9339,1718,2260,7668,6744,1491,9247,6691,3644,2749,1954,5623,3574,2044,6681,9736,6270,8939,9062,2971,2472,1744],function(){return e(e.s=19683)}),_N_E=e.O()}]);