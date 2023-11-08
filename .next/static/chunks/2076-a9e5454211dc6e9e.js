(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2076],{3496:function(e,t,r){Promise.resolve().then(r.bind(r,55430)),Promise.resolve().then(r.bind(r,27792))},55430:function(e,t,r){"use strict";r.r(t);var l=r(57437);r(2265),t.default=function(e){let{title:t,subtitle:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-2xl font-medium",children:t}),r&&(0,l.jsx)("p",{className:"text-sm text-[#8C8C8C]",children:r})]})}},27792:function(e,t,r){"use strict";r.r(t);var l=r(57437),n=r(2265),a=r(86582),s=r(80568),o=r(45623),i=r(30610),c=r(82749);t.default=function(){var e,t,r,u,d;let{data:f,status:p}=(0,c.useSession)(),[h,m]=n.useState(null);return n.useEffect(()=>{if(f&&"authenticated"===p){var e;m(null==f?void 0:null===(e=f.user)||void 0===e?void 0:e.profileImage),console.log(f)}},[f,p]),(0,l.jsx)("section",{className:"space-y-4",children:(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"Profile Photo"}),(0,l.jsxs)("label",{htmlFor:"profile_phooto",className:"relative btn btn-ghost h-32 w-32 border border-gray-500 rounded-xl",children:[h?(0,l.jsx)("img",{src:null!==(d=h.url)&&void 0!==d?d:URL.createObjectURL(h),alt:"property",className:"rounded-md w-full h-full object-cover"}):(0,l.jsx)("div",{className:"text-center block w-full mx-auto",children:(0,l.jsx)(i.xm,{className:"fill-primary-500 mx-auto"})}),(0,l.jsx)("input",{type:"file",id:"profile_phooto",hidden:!0,accept:".jpg,.jpeg,.png",onChange:e=>{e.target.files&&e.target.files[0]&&(m(e.target.files[0]),console.log("e.target.files[0]",e.target.files[0]))}})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"first_name",children:"First Name"}),(0,l.jsx)(a.Z,{placeholder:"Enter first name",type:"text",readonly:!0,value:null==f?void 0:null===(e=f.user)||void 0===e?void 0:e.firstname})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"last_name",children:"Last Name"}),(0,l.jsx)(a.Z,{placeholder:"Enter last name",type:"text",readonly:!0,value:null==f?void 0:null===(t=f.user)||void 0===t?void 0:t.lastname})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"company",children:"Company"}),(0,l.jsx)(a.Z,{placeholder:"Enter company",type:"text"})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"dob",children:"Date of birth"}),(0,l.jsx)(a.Z,{placeholder:"Enter date of birth",type:"date"})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"email",children:"Email"}),(0,l.jsx)(a.Z,{placeholder:"Enter email",type:"email",readonly:!0,value:null==f?void 0:null===(r=f.user)||void 0===r?void 0:r.email})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,l.jsx)(a.Z,{placeholder:"Enter phone",type:"tel",value:null==f?void 0:null===(u=f.user)||void 0===u?void 0:u.phone})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"password",children:"Password"}),(0,l.jsx)(a.Z,{placeholder:"Enter password",type:"password"})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"confirm_password",children:"Confirm Password"}),(0,l.jsx)(a.Z,{placeholder:"Enter confirm password",type:"password"})]})]}),(0,l.jsxs)("div",{className:"mt-8",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"Address"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"street",children:"Street"}),(0,l.jsx)(a.Z,{placeholder:"Enter street",type:"text"})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"country",children:"Country"}),(0,l.jsx)(o.default,{className:"w-full relative select_ant",removeIcon:!0,showSearch:!0,size:"large",placeholder:"Select a country",optionFilterProp:"children",filterOption:(e,t)=>{var r;return(null!==(r=null==t?void 0:t.label)&&void 0!==r?r:"").toLowerCase().includes(e.toLowerCase())},options:[{value:"South Africa",label:"South Africa"},{value:"United States",label:"United States"}]})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"state",children:"State"}),(0,l.jsx)(o.default,{className:"w-full relative select_ant",showSearch:!0,size:"large",placeholder:"Select a state",optionFilterProp:"children",filterOption:(e,t)=>{var r;return(null!==(r=null==t?void 0:t.label)&&void 0!==r?r:"").toLowerCase().includes(e.toLowerCase())},options:[{value:"Gauteng",label:"Gauteng"},{value:"Western Cape",label:"Western Cape"}]})]})]}),(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsx)("label",{htmlFor:"postal_code",children:"Postal Code"}),(0,l.jsx)(a.Z,{placeholder:"Enter postal code",type:"text"})]}),(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"Driving Licence"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"issued_date",children:"Issued Date"}),(0,l.jsx)(s.Z,{className:"h-12 w-full"})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{htmlFor:"expiry_date",children:"Expiry Date"}),(0,l.jsx)(s.Z,{className:"h-12 w-full"})]})]})]})]}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)("button",{className:"btn btn-primary w-full",children:"Save"})})]})})}},30610:function(e,t,r){"use strict";r.d(t,{$W:function(){return C.default},$l:function(){return _.default},A_:function(){return q.default},CN:function(){return L.default},FK:function(){return M.default},JC:function(){return $.default},JM:function(){return O.default},Kp:function(){return I.default},OT:function(){return c.default},Q6:function(){return o.default},Qu:function(){return U.default},RO:function(){return S.default},S5:function(){return D.default},Sr:function(){return B.default},TB:function(){return Z.default},TR:function(){return a.default},UJ:function(){return R.default},Vh:function(){return i.default},Vq:function(){return d.default},W1:function(){return y.default},Zl:function(){return A.default},Zm:function(){return p.default},_K:function(){return K.default},ae:function(){return P.default},b_:function(){return m.default},k1:function(){return N.default},kb:function(){return k.default},ly:function(){return h.default},p5:function(){return w.default},pA:function(){return f.default},qW:function(){return n.default},rE:function(){return T.default},sZ:function(){return J.default},sh:function(){return j.default},uf:function(){return s.default},ul:function(){return x.default},vr:function(){return u.default},wZ:function(){return l.default},x5:function(){return z.default},xh:function(){return v.default},xm:function(){return g.default},yd:function(){return W.default},yk:function(){return b.default}});var l=r(76189);r(86608);var n=r(50312),a=r(21832),s=r(4189),o=r(60426),i=r(97388);r(30807),r(40151);var c=r(51880),u=r(27104),d=r(25368),f=r(26888),p=r(73002),h=r(63842),m=r(87165),x=r(39222),v=r(41269),y=r(8898),j=r(84480),b=r(15155),N=r(229),g=r(38426),w=r(90841),S=r(69737),_=r(7014);r(83170);var C=r(21721),Z=r(46801),P=r(84772),k=r(13010),O=r(21449),U=r(33341),L=r(35223),q=r(81027),R=r(65094),A=r(6920),W=r(49848),D=r(6774),$=r(64986),z=r(62398),I=r(60905),J=r(5164),K=r(8826),T=r(97013),B=r(9921),M=r(2740);r(26198),r(7009),r(87494),r(63999)},86582:function(e,t,r){"use strict";var l=r(57437);r(2265),t.Z=function(e){let{type:t,placeholder:r,className:n,value:a,onChange:s,onBlur:o,error:i,...c}=e;return(0,l.jsx)("input",{type:t,placeholder:r,className:"input h-10 w-full px-4 border border-gray-300 focus:border-primary !shadow-none ".concat(n," ").concat(i?"!border-red-500":""),value:a,onChange:s,onBlur:o,...c})}},37673:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),l=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function E(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||l}function F(){}function G(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||l}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var s=G.prototype=new F;s.constructor=G,n(s,E.prototype),s.isPureReactComponent=!0;var o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,l){var n,a={},s=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=l;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];a.children=d}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:r,type:e,key:s,ref:c,props:a,_owner:null}}},90952:function(e,t,r){"use strict";e.exports=r(37673)}}]);