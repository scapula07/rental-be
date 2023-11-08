(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9554],{63735:function(e,n,a){Promise.resolve().then(a.bind(a,55438))},55438:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return booking}});var t=a(57437),s=a(2265),l=a(80568),r=a(54760),c=a(30610),ui_radio=function(e){let{name:n,checked:a,className:s,value:l,onBlur:r,onChange:c,...i}=e;return(0,t.jsx)("input",{type:"radio",name:n,className:"radio ".concat(s||""),checked:a,value:l,onChange:c,onBlur:r,...i})},i=a(61865),u=a(3198),d=a(82749);let o=[{name:"Seats",value:"5",icon:(0,t.jsx)(c.$W,{})},{name:"Pwr.Lock",value:"Yes",icon:(0,t.jsx)(c.JM,{})},{name:"Pwr.Window",value:"Yes",icon:(0,t.jsx)(c.JM,{})},{name:"A/C",value:"Yes",icon:(0,t.jsx)(c.kb,{})},{name:"Steering",value:"Power",icon:(0,t.jsx)(c.TB,{})},{name:"Trans",value:"Automatic",icon:(0,t.jsx)(c.ae,{})}];var booking=function(){let[e,n]=s.useState(0),[a,f]=s.useState(0),[x,m]=s.useState([]),[h,j]=s.useState([]),[v,N]=(0,s.useState)([]),[p,g]=(0,s.useState)(0),[b,w]=(0,s.useState)("");(0,u.I0)();let{data:k,status:y}=(0,d.useSession)();async function getBookings(){try{let e=await fetch("http://localhost:9999/api/v1/cars",{headers:{authorization:"Bearer ".concat(b)}}),n=await e.json();return n}catch(e){return console.error(e),[]}}"authenticated"===y&&0===p&&(w(k.user.token),g(1)),(0,s.useEffect)(()=>{let fetchData=async()=>{if(p>0)try{let e=await getBookings();N((null==e?void 0:e.data)||[])}catch(e){}};fetchData()},[p]);let[S,_]=(0,s.useState)({carId:"",userId:"",startDate:"",endDate:""}),{control:C,formState:{errors:B}}=(0,i.cI)();return(0,t.jsx)(t.Fragment,{children:v.map((e,a)=>{var u;return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("h4",{className:"text-4xl",children:"Booking"}),(0,t.jsx)(l.Z.RangePicker,{className:"h-full",onChange:e=>j(e)})]}),(0,t.jsx)("div",{className:"w-full md:w-8/12",children:(0,t.jsxs)("div",{className:"flex flex-col space-y-8",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between relative",children:[(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h5",{className:"text-3xl",children:e.carname}),(0,t.jsx)("span",{className:"text-xl",children:e.model}),(0,t.jsxs)("div",{className:"text-lg",children:[(0,t.jsxs)("span",{className:"",children:["$",e.priceWeekly]}),(0,t.jsx)("span",{className:"text-[#2BAE70]",children:" /Weekly"})]})]}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)("img",{src:null==e?void 0:null===(u=e.carImage)||void 0===u?void 0:u.url,alt:"",className:"w-full h-[150px] object-cover"})}),(0,t.jsx)("span",{className:"absolute text-white p-1 bg-[#2BAE70] top-0 right-0 self-start rounded-t-[8px] rounded-br-[8px] rounded-bl-[30px]",children:"9% off"})]}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h4",{className:"text-3xl",children:"Vehicle Information"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-2",children:o.map((e,n)=>(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{className:"mr-2",children:e.icon}),(0,t.jsxs)("span",{children:[e.name,": ",e.value]})]},n))})]})]})}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center mt-8",children:[(0,t.jsx)("div",{className:"w-full md:w-6/12",children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h4",{className:"text-3xl",children:"Booking Information"}),(0,t.jsxs)("div",{className:"last:border-0 divide-y divide-gray-200 [&>*]:py-2 max-w-max",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("span",{className:"",children:(0,t.jsx)(c.Qu,{className:"h-6 w-6"})}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsx)("span",{className:"text-lg",children:"Weeks"}),(0,t.jsx)(r.Z,{min:1,max:50,defaultValue:0,name:"weeks",onChange:e=>n(e)})]}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsx)("span",{className:"text-lg",children:"Hrs"}),(0,t.jsx)(r.Z,{min:1,max:24,defaultValue:0,name:"hours",onChange:e=>f(e)})]})]}),(0,t.jsx)("div",{className:"flex items-center gap-4",children:[{name:"Self Driven",icon:(0,t.jsx)(c.CN,{className:"w-6 h-6"})},{name:"With Driver",icon:(0,t.jsx)(c.A_,{className:"w-6 h-6"})}].map((e,n)=>(0,t.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,t.jsx)("span",{children:e.icon}),(0,t.jsx)("span",{children:e.name}),(0,t.jsx)("span",{children:(0,t.jsx)(i.Qr,{name:"selfDriven",control:C,render:n=>{let{field:{name:a,onBlur:s,onChange:l,value:r}}=n;return(0,t.jsx)(ui_radio,{className:"border-2 border-[#34D186] !rounded-sm checked:bg-[#34D186]",name:a,onBlur:s,onChange:l,value:e.name,checked:r===e.name})}})})]},n))}),(0,t.jsx)("div",{className:"flex items-center gap-4",children:["Inter-State","Within city"].map((e,n)=>(0,t.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("span",{children:(0,t.jsx)(i.Qr,{name:"interState",control:C,render:n=>{let{field:{name:a,onBlur:s,onChange:l,value:r}}=n;return(0,t.jsx)(ui_radio,{className:"border-2 border-[#34D186] !rounded-sm checked:bg-[#34D186]",name:a,onBlur:s,onChange:l,value:e,checked:r===e})}})})]},e))})]})]})}),(0,t.jsx)("div",{className:"w-full md:w-6/12",children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h4",{className:"text-2xl font-bold",children:"Note:"}),(0,t.jsx)("p",{className:"text-sm",children:"Reservation or booking is monthly. And minimum is 2 monthly rentage but customer rental will be billed weekly."})]})})]}),(0,t.jsx)("div",{className:"mt-8",children:(0,t.jsxs)("div",{className:"shadow-lg p-4 max-w-max rounded-lg space-y-2",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Specification"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{children:(0,t.jsx)(c.$W,{className:"h-6 w-6 fill-black"})}),(0,t.jsxs)("span",{children:[e.seats," seats"]})]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{children:(0,t.jsx)(c.UJ,{className:"h-7 w-7"})}),(0,t.jsx)("span",{children:"1500 cc"})]})]})]})}),(0,t.jsx)("div",{className:"mt-8 text-center",children:(0,t.jsx)("button",{className:"btn btn-primary text-black capitalize px-7 text-xl",onClick:()=>{_(n=>({...n,carId:e._id}))},children:"Reserve"})})]},a)})})}},30610:function(e,n,a){"use strict";a.d(n,{$W:function(){return _.default},$l:function(){return S.default},A_:function(){return E.default},CN:function(){return A.default},FK:function(){return M.default},JC:function(){return R.default},JM:function(){return W.default},Kp:function(){return V.default},OT:function(){return u.default},Q6:function(){return c.default},Qu:function(){return I.default},RO:function(){return y.default},S5:function(){return Q.default},Sr:function(){return K.default},TB:function(){return C.default},TR:function(){return l.default},UJ:function(){return Z.default},Vh:function(){return i.default},Vq:function(){return o.default},W1:function(){return N.default},Zl:function(){return J.default},Zm:function(){return x.default},_K:function(){return O.default},ae:function(){return B.default},b_:function(){return h.default},k1:function(){return b.default},kb:function(){return D.default},ly:function(){return m.default},p5:function(){return k.default},pA:function(){return f.default},qW:function(){return s.default},rE:function(){return F.default},sZ:function(){return $.default},sh:function(){return p.default},uf:function(){return r.default},ul:function(){return j.default},vr:function(){return d.default},wZ:function(){return t.default},x5:function(){return T.default},xh:function(){return v.default},xm:function(){return w.default},yd:function(){return P.default},yk:function(){return g.default}});var t=a(76189);a(86608);var s=a(50312),l=a(21832),r=a(4189),c=a(60426),i=a(97388);a(30807),a(40151);var u=a(51880),d=a(27104),o=a(25368),f=a(26888),x=a(73002),m=a(63842),h=a(87165),j=a(39222),v=a(41269),N=a(8898),p=a(84480),g=a(15155),b=a(229),w=a(38426),k=a(90841),y=a(69737),S=a(7014);a(83170);var _=a(21721),C=a(46801),B=a(84772),D=a(13010),W=a(21449),I=a(33341),A=a(35223),E=a(81027),Z=a(65094),J=a(6920),P=a(49848),Q=a(6774),R=a(64986),T=a(62398),V=a(60905),$=a(5164),O=a(8826),F=a(97013),K=a(9921),M=a(2740);a(26198),a(7009),a(87494),a(63999)}},function(e){e.O(0,[9339,1718,2260,7668,6744,1491,9247,3644,2749,1865,3198,568,3472,9062,2971,2472,1744],function(){return e(e.s=63735)}),_N_E=e.O()}]);