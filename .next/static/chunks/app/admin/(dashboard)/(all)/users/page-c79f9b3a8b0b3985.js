(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2267],{19658:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"}},56256:function(e,t,r){"use strict";Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return l}});var s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=a?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(s,n,l):s[n]=e[n]}return s.default=e,r&&r.set(e,s),s}(r(2265)),a=_interop_require_default(r(19658)),n=_interop_require_default(r(51718));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}var l=s.forwardRef(function(e,t){var r,l;return s.createElement(n.default,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},e),l=l={ref:t,icon:a.default},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r})(Object(l)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}),r))})},96381:function(e,t,r){Promise.resolve().then(r.bind(r,96304)),Promise.resolve().then(r.bind(r,55430))},96304:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return users_copy_2}});var s=r(57437),a=r(2265),n=r(68939),l=r(3198),c=r(63096),o=r(61865),d=r(89701),i=r(35691),u=r(50628),m=r(86582),x=r(16691),p=r.n(x),h=r(56256),modal_confirm=function(e){let{open:t,toggle:r,onConfirm:n}=e;return(0,s.jsx)(a.Fragment,{children:(0,s.jsx)(c.u_,{open:t,className:"w-full md:w-[370px]",toggle:r,children:(0,s.jsx)(c.fe,{children:(0,s.jsxs)("div",{className:"space-y-4 text-center",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(h.Z,{className:"text-5xl"})}),(0,s.jsx)("p",{children:"You’re about to approve User A account. Select the User/Partner."}),(0,s.jsx)("span",{children:"select"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("button",{className:"btn flex-1 rounded-full btn-error btn-ghost text-red-600",onClick:r,children:"Cancel"}),(0,s.jsx)("button",{className:"btn btn-success flex-1 rounded-full",children:"Approve"})]})]})})})})};let f=i.Ry().shape({first_name:i.Z_().required(),last_name:i.Z_().required(),company:i.Z_().required(),dob:i.Z_().required(),email:i.Z_().email().required(),phone:i.Z_().required(),street:i.Z_().required(),state:i.Z_().required(),postal_code:i.Z_().required(),issued_date:i.Z_().required()});var modal_form=function(){let[e,t]=a.useState(!1),{control:r,handleSubmit:n,formState:{errors:l,isSubmitting:c,isLoading:i}}=(0,o.cI)({resolver:(0,d.X)(f)}),onSubmit=async e=>{console.log(e)},onConfirm=()=>{t(!e)};return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(modal_confirm,{open:e,toggle:()=>t(!e),onConfirm:()=>onConfirm()}),(0,s.jsxs)("form",{onSubmit:n(onSubmit),children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"first_name",className:"block text-xs",children:"First Name"}),(0,s.jsx)(o.Qr,{name:"first_name",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"first_name",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"First Name",...t})}})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"last_name",className:"block text-xs",children:"Last Name"}),(0,s.jsx)(o.Qr,{name:"last_name",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"last_name",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Last Name",...t})}}),l.last_name&&(0,s.jsx)(u.Z,{error:l.last_name.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"company",className:"block text-xs",children:"Company"}),(0,s.jsx)(o.Qr,{name:"company",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"company",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Company",...t})}}),l.company&&(0,s.jsx)(u.Z,{error:l.company.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"dob",className:"block text-xs",children:"Date of Birth"}),(0,s.jsx)(o.Qr,{name:"dob",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"date",id:"dob",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Date of Birth",...t})}}),l.dob&&(0,s.jsx)(u.Z,{error:l.dob.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-xs",children:"Email Address"}),(0,s.jsx)(o.Qr,{name:"email",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"email",id:"email",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Email Address",...t})}}),l.email&&(0,s.jsx)(u.Z,{error:l.email.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"phone",className:"block text-xs",children:"Phone"}),(0,s.jsx)(o.Qr,{name:"phone",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"tel",id:"phone",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Phone",...t})}}),l.phone&&(0,s.jsx)(u.Z,{error:l.phone.message})]})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{children:"Address"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"street",className:"block text-xs",children:"Street"}),(0,s.jsx)(o.Qr,{name:"street",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"street",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Street",...t})}}),l.street&&(0,s.jsx)(u.Z,{error:l.street.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"state",className:"block text-xs",children:"State"}),(0,s.jsx)(o.Qr,{name:"state",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"state",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"state",...t})}}),l.state&&(0,s.jsx)(u.Z,{error:l.state.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"postal_code",className:"block text-xs",children:"Postal Code"}),(0,s.jsx)(o.Qr,{name:"postal_code",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"text",id:"postal_code",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Postal Code",...t})}}),l.postal_code&&(0,s.jsx)(u.Z,{error:l.postal_code.message})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("label",{htmlFor:"issued_date",className:"block text-xs",children:"Issued Date"}),(0,s.jsx)(o.Qr,{name:"issued_date",control:r,render:e=>{let{field:t}=e;return(0,s.jsx)(m.Z,{type:"date",id:"issued_date",className:"w-full border border-[#E5E5E5] rounded px-4 py-2 focus:outline-none",placeholder:"Issued Date",...t})}}),l.issued_date&&(0,s.jsx)(u.Z,{error:l.issued_date.message})]})]})]}),(0,s.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,s.jsx)("h4",{children:"Document Library"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsxs)("div",{className:"shadow-xl border rounded-xl space-y-3 py-4",children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("div",{className:"w-2/12 text-center",children:(0,s.jsx)("span",{children:"Size"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("span",{children:"Name"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("span",{})})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("div",{className:"w-2/12 text-center",children:(0,s.jsx)("span",{children:"345 kb"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("span",{children:"Driver’s Licence"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("button",{type:"button",className:"btn min-h-[28px] h-7 rounded-full",children:"Download"})})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("div",{className:"w-2/12 text-center",children:(0,s.jsx)("span",{children:"290 kb"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("span",{children:"Insurance"})}),(0,s.jsx)("div",{className:"w-5/12 text-center",children:(0,s.jsx)("button",{type:"button",className:"btn min-h-[28px] h-7 rounded-full",children:"Download"})})]})]})}),(0,s.jsx)("div",{className:"w-3/12",children:(0,s.jsx)("div",{className:"relative h-full w-full rounded-xl",children:(0,s.jsx)(p(),{src:"/assets/img/user.jpg",fill:!0,alt:"placeholder",className:"object-contain rounded-xl h-full"})})})]})]}),(0,s.jsxs)("div",{className:"mt-4 space-x-4",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-error btn-outline h-12 rounded-full",children:"Decline"}),(0,s.jsx)("button",{type:"submit",className:"btn h-12 rounded-full btn-success btn-outline",children:"Approve"})]})]})]})},table_modal=function(e){let{open:t,toggle:r}=e;return(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)(c.u_,{open:t,className:"w-full md:w-[750px]",toggle:r,children:[(0,s.jsx)(c.xB,{showCloseButton:!0,children:(0,s.jsx)("h3",{className:"text-lg",children:"User details"})}),(0,s.jsx)(c.fe,{className:"mt-4",children:(0,s.jsx)(modal_form,{})})]})})},j=r(82749),b=r(62601),users_copy_2_table=function(){let[e,t]=(0,a.useState)(!1),[r,c]=(0,a.useState)([]);(0,l.I0)();let[o,d]=(0,a.useState)(0),[i,u]=(0,a.useState)(""),{data:m,status:x}=(0,j.useSession)();async function getPartners(){b.env.API_URL;try{let e=await fetch("http://localhost:9999/api/v1/users/customers",{headers:{authorization:"Bearer ".concat(i)}}),t=await e.json();return t}catch(e){return console.error(e),[]}}return"authenticated"===x&&0===o&&(u(m.user.token),d(1)),(0,a.useEffect)(()=>{let fetchData=async()=>{if(o>0)try{let e=await getPartners();c((null==e?void 0:e.data)||[])}catch(e){}};fetchData()},[o]),(0,s.jsxs)("div",{children:[(0,s.jsx)(table_modal,{open:e,toggle:()=>t(!e)}),(0,s.jsx)(n.Z,{columns:[{title:"ID",dataIndex:"id",key:"id"},{title:"First Name",dataIndex:"firstname",key:"firstname"},{title:"Last Name",dataIndex:"lastname",key:"lastname"},{title:"Email",dataIndex:"email",key:"email"}],dataSource:r,loading:!1,sticky:!0,scroll:{y:300,x:"max-content"}})]})},users_copy_2=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{children:(0,s.jsx)(users_copy_2_table,{})})})}},55430:function(e,t,r){"use strict";r.r(t);var s=r(57437);r(2265),t.default=function(e){let{title:t,subtitle:r}=e;return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium",children:t}),r&&(0,s.jsx)("p",{className:"text-sm text-[#8C8C8C]",children:r})]})}},50628:function(e,t,r){"use strict";var s=r(57437);r(2265),t.Z=function(e){let{error:t}=e;return(0,s.jsx)("span",{className:"text-red-500 text-sm",children:t})}},86582:function(e,t,r){"use strict";var s=r(57437);r(2265),t.Z=function(e){let{type:t,placeholder:r,className:a,value:n,onChange:l,onBlur:c,error:o,...d}=e;return(0,s.jsx)("input",{type:t,placeholder:r,className:"input h-10 w-full px-4 border border-gray-300 focus:border-primary !shadow-none ".concat(a," ").concat(o?"!border-red-500":""),value:n,onChange:l,onBlur:c,...d})}},63096:function(e,t,r){"use strict";r.d(t,{u_:function(){return Modal},fe:function(){return body},xB:function(){return header}});var s=r(57437),a=r(2265),header=e=>{let{toggle:t,children:r,showCloseButton:a}=e;return(0,s.jsxs)("div",{className:"modal-header flex justify-between",children:[(0,s.jsx)("div",{className:"",children:r}),a&&(0,s.jsx)("button",{className:"btn btn-sm btn-circle btn-ghost",onClick:t,children:"✕"})]})},body=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:"modal-body ".concat(r),children:t})};let Modal=e=>{let{open:t,toggle:r,backdrop:n,className:l,children:c}=e;return(0,s.jsx)("dialog",{id:"my_modal_3",className:"modal ".concat(t&&"modal-open"),onClick:e=>{e.stopPropagation(),e.target===e.currentTarget&&n&&r&&r()},children:(0,s.jsx)("div",{className:"modal-box relative bg-white max-w-[initial] ".concat(l," "),children:a.Children.map(c,e=>a.cloneElement(e,{toggle:r}))})})}}},function(e){e.O(0,[9339,1718,2260,7668,6744,1491,9247,6691,3644,2749,1954,5623,1865,3574,2044,3964,6681,9736,6270,8939,3198,2971,2472,1744],function(){return e(e.s=96381)}),_N_E=e.O()}]);