(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{16787:function(e,t,r){Promise.resolve().then(r.bind(r,55430)),Promise.resolve().then(r.bind(r,2524))},55430:function(e,t,r){"use strict";r.r(t);var n=r(57437);r(2265),t.default=function(e){let{title:t,subtitle:r}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h1",{className:"text-2xl font-medium",children:t}),r&&(0,n.jsx)("p",{className:"text-sm text-[#8C8C8C]",children:r})]})}},2524:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return dashboard}});var n=r(57437),o=r(2265),a=r(28811),s=r.n(a),u=r(26782),i=r(55430),c=r(11245),statistics=function(){return(0,n.jsxs)("section",{className:"col-span-12 md:col-span-3 space-y-4",children:[(0,n.jsx)(i.default,{title:"Today's Statistics",subtitle:"Tue, 14 Nov, 2022, 11.30 AM "}),(0,n.jsx)(c.default,{})]})},l=r(16691),f=r.n(l),card=function(){return(0,n.jsxs)("div",{className:"border rounded-lg p-4",children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("h4",{className:"text-3xl font-semibold",children:"Toyota"}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Yaris iA"})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{children:"4-Cyl 1.5 Liter"}),(0,n.jsx)("span",{children:"Engine"})]})]}),(0,n.jsx)("div",{className:"relative h-[200px]",children:(0,n.jsx)(f(),{src:"/assets/img/car5.png",alt:"car",className:"object-contain",fill:!0})}),(0,n.jsx)("button",{children:"View Details"})]})},investedcars=function(){return(0,n.jsx)(o.Fragment,{children:(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h4",{className:"text-2xl font-semibold",children:"Invested Cars"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[,,,].fill(0).map((e,t)=>(0,n.jsx)(card,{},t+"investedcar"))})]})})};let d=s()(()=>r.e(6234).then(r.bind(r,16234)),{loadableGenerated:{webpack:()=>[16234]},ssr:!1,loading:()=>(0,n.jsx)(u.Z,{})});var dashboard=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)(statistics,{}),(0,n.jsx)(investedcars,{})]})]})}},11245:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return dashboard_table}});var n=r(57437),o=r(30610);r(2265);var a=r(68939);let s=[{title:"No.",dataIndex:"",key:"",width:60,render:(e,t,r)=>r+1},{title:"VIN Number",dataIndex:"car_no",key:"car_no",width:100},{title:"Driver",dataIndex:"driver",key:"driver",render:e=>(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("img",{src:e.avatar,alt:e.name,className:"w-8 h-8 rounded-full"}),(0,n.jsx)("span",{children:e.name})]})},{title:"Status",dataIndex:"status",key:"status",render:e=>{let t="green";return"inactive"===e&&(t="red"),"active"===e&&(t="green"),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"relative h-3 w-3 rounded-full before:absolute before:h-4 before:w-4 before:border before:rounded-full before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 \n            ".concat("green"===t?"bg-green-400 before:border-green-400":"blue"===t?"bg-blue-400 before:border-blue-400":"bg-red-400 before:border-red-400")}),(0,n.jsx)("span",{className:"capitalize",children:e})]})}},{title:"Earnings",dataIndex:"earnings",key:"earnings",width:200,render:e=>(0,n.jsxs)("span",{children:["$",e]})}],u=[{car_no:"646543578222",driver:{name:"John Brown",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"active",earnings:71},{car_no:"566572373784",driver:{name:"Jim Green",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"inactive",earnings:62},{car_no:"1755122349494",driver:{name:"Joe Black",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},status:"inactive",earnings:50}];var table_table=function(){let e=[...s];return(0,n.jsx)(a.Z,{columns:e,dataSource:u,loading:!1,sticky:!0,className:"dashboard__car__table",scroll:{y:300,x:"max-content"}})},dashboard_table=function(){return(0,n.jsxs)("div",{className:"p-4 rounded shadow-card border",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h5",{children:"Live Car Status"}),(0,n.jsxs)("button",{className:"btn btn-ghost min-h-min gap-2",children:[(0,n.jsx)(o.k1,{}),(0,n.jsx)("span",{children:"Filter"})]})]}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)(table_table,{})})]})}},30610:function(e,t,r){"use strict";r.d(t,{$W:function(){return P.default},$l:function(){return w.default},A_:function(){return R.default},CN:function(){return q.default},FK:function(){return $.default},JC:function(){return J.default},JM:function(){return M.default},Kp:function(){return Z.default},OT:function(){return c.default},Q6:function(){return u.default},Qu:function(){return T.default},RO:function(){return O.default},S5:function(){return D.default},Sr:function(){return U.default},TB:function(){return S.default},TR:function(){return a.default},UJ:function(){return A.default},Vh:function(){return i.default},Vq:function(){return f.default},W1:function(){return y.default},Zl:function(){return I.default},Zm:function(){return p.default},_K:function(){return B.default},ae:function(){return k.default},b_:function(){return b.default},k1:function(){return _.default},kb:function(){return C.default},ly:function(){return x.default},p5:function(){return N.default},pA:function(){return d.default},qW:function(){return o.default},rE:function(){return L.default},sZ:function(){return z.default},sh:function(){return v.default},uf:function(){return s.default},ul:function(){return h.default},vr:function(){return l.default},wZ:function(){return n.default},x5:function(){return X.default},xh:function(){return m.default},xm:function(){return g.default},yd:function(){return V.default},yk:function(){return j.default}});var n=r(76189);r(86608);var o=r(50312),a=r(21832),s=r(4189),u=r(60426),i=r(97388);r(30807),r(40151);var c=r(51880),l=r(27104),f=r(25368),d=r(26888),p=r(73002),x=r(63842),b=r(87165),h=r(39222),m=r(41269),y=r(8898),v=r(84480),j=r(15155),_=r(229),g=r(38426),N=r(90841),O=r(69737),w=r(7014);r(83170);var P=r(21721),S=r(46801),k=r(84772),C=r(13010),M=r(21449),T=r(33341),q=r(35223),R=r(81027),A=r(65094),I=r(6920),V=r(49848),D=r(6774),J=r(64986),X=r(62398),Z=r(60905),z=r(5164),B=r(8826),L=r(97013),U=r(9921),$=r(2740);r(26198),r(7009),r(87494),r(63999)},37673:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,a={};function E(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}function F(){}function G(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var s=G.prototype=new F;s.constructor=G,o(s,E.prototype),s.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,a={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,o)&&!i.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var f=Array(l),d=0;d<l;d++)f[d]=arguments[d+2];a.children=f}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:c,props:a,_owner:null}}},90952:function(e,t,r){"use strict";e.exports=r(37673)},95248:function(e){e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},86358:function(e){e.exports=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},1127:function(e,t,r){var n=r(19040);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},83654:function(e){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},35684:function(e,t,r){var n=r(60795);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},10720:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},60746:function(e,t,r){var n=r(61565).default,o=r(95248);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},60795:function(e){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[9339,1718,2260,7668,6744,1491,9247,6691,3644,1954,5623,3574,2044,6681,9736,6270,8939,3617,9062,2971,2472,1744],function(){return e(e.s=16787)}),_N_E=e.O()}]);