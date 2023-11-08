(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9680,7743,9358],{30067:function(e,t,r){Promise.resolve().then(r.bind(r,64510))},64510:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return dashboard}});var n=r(57437),a=r(2265),s=r(61396),i=r.n(s),l=r(24033),u=r(30610);let d={user:[{title:"Dashboard",path:"/dashboard"},{title:"Requests",path:"/dashboard/requests"},{title:"Account Details",path:"/dashboard/account-details"},{title:"Document",path:"/dashboard/document"},{title:"Messages",path:"/dashboard/messages"},{title:"Ticket",path:"/dashboard/ticket"}],partner:[{title:"Dashboard",path:"/partner/dashboard"},{title:"Car Listed",path:"/partner/car-listed"},{title:"Profile",path:"/partner/profile"},{title:"ROI",path:"/partner/roi"},{title:"Messages",path:"/partner/messages"}],admin:[{title:"Dashboard",path:"/admin/dashboard"},{title:"Users",path:"/admin/users"},{title:"Partners",path:"/admin/partners"},{title:"Car Listing",path:"/admin/car-listing"},{title:"All cars",path:"/admin/all-cars"},{title:"Ledgers",path:"/admin/ledgers"},{title:"History",path:"/admin/history"},{title:"Messages",path:"/admin/messages"},{title:"Tickets",path:"/admin/tickets"}]};var c=r(16691),o=r.n(c),f=r(82749),h=r(3198);let useAppDispatch=()=>(0,h.I0)(),p=h.v9;var b=r(5729),navbar=function(){let e=useAppDispatch(),{data:t}=(0,f.useSession)();return(0,n.jsxs)("div",{className:"navbar border-b border-[#DFDBD8] px-8",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("button",{className:"block lg:hidden btn btn-ghost bg-transparent mr-2 p-0",onClick:()=>{e((0,b.UJ)())},children:(0,n.jsx)(u.yk,{className:"w-6 h-6"})}),(0,n.jsx)("div",{className:"form-control",children:(0,n.jsxs)("div",{className:"input-group items-center border px-4 bg-[#EEE6E2DB] rounded-lg",children:[(0,n.jsx)(u.W1,{className:"w-4 h-4"}),(0,n.jsx)("input",{type:"text",placeholder:"Search…",className:"input input-bordered h-10 px-0 pl-2 bg-transparent border-0 focus:ring-0 focus:outline-none"})]})})]}),(0,n.jsxs)("div",{className:"flex-none gap-2",children:[(0,n.jsx)("button",{className:"btn btn-ghost btn-circle",children:(0,n.jsxs)("div",{className:"indicator",children:[(0,n.jsx)(u.sh,{className:"w-6 h-6"}),(0,n.jsx)("span",{className:"badge h-2 w-2 p-1 bg-red-600 indicator-item"})]})}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,n.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,n.jsx)("div",{className:"w-10 rounded-full",children:(0,n.jsx)(o(),{src:"/assets/img/avatar.png",alt:"avatar",width:40,height:40})})}),(0,n.jsxs)("ul",{tabIndex:0,className:"relative z-50 mt-3 p-2 border shadow menu menu-compact dropdown-content rounded-box w-52 bg-white",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"justify-between",children:"Profile"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{children:"Settings"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:()=>{var e;let r=(null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.role)==="partner"?"/partner/auth/signin":"/auth/signin";(0,f.signOut)({callbackUrl:r})},children:"Logout"})})]})]})]})]})},dashboard=function(e){let{children:t}=e,{data:r,status:s}=(0,f.useSession)(),{isDashboardOpen:c}=p(e=>e.app),[o,h]=(0,a.useState)(""),m=(0,l.usePathname)();(0,a.useEffect)(()=>{if(r){var e;h(null===(e=r.user)||void 0===e?void 0:e.role)}},[r]);let x=useAppDispatch();return(0,a.useEffect)(()=>{c&&x((0,b.UJ)())},[m]),(0,n.jsx)(a.Fragment,{children:(0,n.jsxs)("div",{className:"drawer lg:drawer-open",style:{height:"calc(100vh - 37px)"},children:[(0,n.jsx)("input",{id:"my-drawer-2",type:"checkbox",className:"drawer-toggle",checked:c,onChange:()=>{}}),(0,n.jsxs)("div",{className:"drawer-content",children:[(0,n.jsx)(navbar,{}),(0,n.jsx)("div",{className:"px-8 py-5",children:t})]}),(0,n.jsxs)("div",{className:"drawer-side h-full border-r",children:[(0,n.jsx)("label",{htmlFor:"my-drawer-2",className:"drawer-overlay",onClick:()=>{x((0,b.UJ)())}}),(0,n.jsxs)("ul",{className:"menu h-full w-60 py-4 text-base-content bg-[#F5F6FA]",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 px-4",children:[(0,n.jsx)(u.TR,{className:"h-12 w-12"}),(0,n.jsx)("a",{className:"text-4xl text-white font-bold",style:{textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},children:"Rental"})]}),(0,n.jsx)("div",{className:"mt-8",children:o&&d[o].map((e,t)=>(0,n.jsx)("li",{className:"px-4 mb-2 last:mb-0 before:absolute before:w-1 before:h-full  before:left-0 before:rounded-tr-lg before:rounded-br-lg group hover:before:bg-primary active:bg-inherit ".concat(m===e.path?"before:bg-primary":"before:bg-transparent"),children:(0,n.jsx)(i(),{href:e.path,className:"text-black group-hover:bg-primary group-hover:text-white rounded-lg active:bg-primary active:text-white ".concat(m===e.path?"bg-primary text-white":""),children:(0,n.jsx)("span",{children:e.title})})},t+e.title))})]})]})]})})}},30610:function(e,t,r){"use strict";r.d(t,{$W:function(){return S.default},$l:function(){return D.default},A_:function(){return J.default},CN:function(){return F.default},FK:function(){return K.default},JC:function(){return M.default},JM:function(){return _.default},Kp:function(){return q.default},OT:function(){return d.default},Q6:function(){return l.default},Qu:function(){return A.default},RO:function(){return k.default},S5:function(){return T.default},Sr:function(){return B.default},TB:function(){return O.default},TR:function(){return s.default},UJ:function(){return U.default},Vh:function(){return u.default},Vq:function(){return o.default},W1:function(){return g.default},Zl:function(){return P.default},Zm:function(){return h.default},_K:function(){return L.default},ae:function(){return C.default},b_:function(){return b.default},k1:function(){return N.default},kb:function(){return E.default},ly:function(){return p.default},p5:function(){return y.default},pA:function(){return f.default},qW:function(){return a.default},rE:function(){return W.default},sZ:function(){return I.default},sh:function(){return v.default},uf:function(){return i.default},ul:function(){return m.default},vr:function(){return c.default},wZ:function(){return n.default},x5:function(){return Z.default},xh:function(){return x.default},xm:function(){return w.default},yd:function(){return R.default},yk:function(){return j.default}});var n=r(76189);r(86608);var a=r(50312),s=r(21832),i=r(4189),l=r(60426),u=r(97388);r(30807),r(40151);var d=r(51880),c=r(27104),o=r(25368),f=r(26888),h=r(73002),p=r(63842),b=r(87165),m=r(39222),x=r(41269),g=r(8898),v=r(84480),j=r(15155),N=r(229),w=r(38426),y=r(90841),k=r(69737),D=r(7014);r(83170);var S=r(21721),O=r(46801),C=r(84772),E=r(13010),_=r(21449),A=r(33341),F=r(35223),J=r(81027),U=r(65094),P=r(6920),R=r(49848),T=r(6774),M=r(64986),Z=r(62398),q=r(60905),I=r(5164),L=r(8826),W=r(97013),B=r(9921),K=r(2740);r(26198),r(7009),r(87494),r(63999)},5729:function(e,t,r){"use strict";r.d(t,{UJ:function(){return i}});var n=r(50663);let a=(0,n.oM)({name:"app",initialState:{isSidebarOpen:!1,isDashboardOpen:!1},reducers:{toggleSidebar:e=>{e.isSidebarOpen=!e.isSidebarOpen},toggleDashboard:e=>{e.isDashboardOpen=!e.isDashboardOpen}}}),{toggleSidebar:s,toggleDashboard:i}=a.actions;t.ZP=a.reducer},61396:function(e,t,r){e.exports=r(68326)},24033:function(e,t,r){e.exports=r(50094)}},function(e){e.O(0,[6691,2749,8326,3198,2505,9062,2971,2472,1744],function(){return e(e.s=30067)}),_N_E=e.O()}]);