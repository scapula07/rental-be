(()=>{var e={};e.id=9554,e.ids=[9554],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},50460:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>o,routeModule:()=>u,tree:()=>d});var r=a(67096),t=a(16132),n=a(37284),l=a.n(n),i=a(32564),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);a.d(s,c);let d=["",{children:["(user)",{children:["(alldashboard)",{children:["dashboard",{children:["requests",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,35854)),"/Users/user/Desktop/perzsirentals/src/app/(user)/(alldashboard)/dashboard/requests/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,43879)),"/Users/user/Desktop/perzsirentals/src/app/(user)/(alldashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,55502)),"/Users/user/Desktop/perzsirentals/src/app/(user)/(alldashboard)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,65160)),"/Users/user/Desktop/perzsirentals/src/app/(user)/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,76932)),"/Users/user/Desktop/perzsirentals/src/app/layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,68056)),"/Users/user/Desktop/perzsirentals/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,5441)),"/Users/user/Desktop/perzsirentals/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/user/Desktop/perzsirentals/src/app/(user)/(alldashboard)/dashboard/requests/page.tsx"],x="/(user)/(alldashboard)/dashboard/requests/page",m={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(user)/(alldashboard)/dashboard/requests/page",pathname:"/dashboard/requests",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},73173:(e,s,a)=>{Promise.resolve().then(a.bind(a,82728))},82728:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>booking});var r=a(30784),t=a(9885),n=a.n(t),l=a(21314),i=a(29545),c=a(61350);let ui_radio=function({name:e,checked:s,className:a,value:t,onBlur:n,onChange:l,...i}){return r.jsx("input",{type:"radio",name:e,className:`radio ${a||""}`,checked:s,value:t,onChange:l,onBlur:n,...i})};var d=a(66558),o=a(8250),x=a(74284);let m=[{name:"Seats",value:"5",icon:r.jsx(c.$W,{})},{name:"Pwr.Lock",value:"Yes",icon:r.jsx(c.JM,{})},{name:"Pwr.Window",value:"Yes",icon:r.jsx(c.JM,{})},{name:"A/C",value:"Yes",icon:r.jsx(c.kb,{})},{name:"Steering",value:"Power",icon:r.jsx(c.TB,{})},{name:"Trans",value:"Automatic",icon:r.jsx(c.ae,{})}],booking=function(){let[e,s]=n().useState(0),[a,u]=n().useState(0),[h,p]=n().useState([]),[j,v]=n().useState([]),[g,f]=(0,t.useState)([]),[b,N]=(0,t.useState)(0),[k,w]=(0,t.useState)("");(0,o.useDispatch)();let{data:y,status:_}=(0,x.useSession)();async function getBookings(){try{let e=await fetch("http://localhost:9999/api/v1/cars",{headers:{authorization:`Bearer ${k}`}}),s=await e.json();return s}catch(e){return console.error(e),[]}}"authenticated"===_&&0===b&&(w(y.user.token),N(1)),(0,t.useEffect)(()=>{let fetchData=async()=>{if(b>0)try{let e=await getBookings();f(e?.data||[])}catch(e){}};fetchData()},[b]);let[P,q]=(0,t.useState)({carId:"",userId:"",startDate:"",endDate:""}),{control:D,formState:{errors:S}}=(0,d.cI)();return r.jsx(r.Fragment,{children:g.map((e,a)=>(0,r.jsxs)(t.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[r.jsx("h4",{className:"text-4xl",children:"Booking"}),r.jsx(l.Z.RangePicker,{className:"h-full",onChange:e=>v(e)})]}),r.jsx("div",{className:"w-full md:w-8/12",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-8",children:[(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between relative",children:[(0,r.jsxs)("div",{className:"",children:[r.jsx("h5",{className:"text-3xl",children:e.carname}),r.jsx("span",{className:"text-xl",children:e.model}),(0,r.jsxs)("div",{className:"text-lg",children:[(0,r.jsxs)("span",{className:"",children:["$",e.priceWeekly]}),r.jsx("span",{className:"text-[#2BAE70]",children:" /Weekly"})]})]}),r.jsx("div",{className:"",children:r.jsx("img",{src:e?.carImage?.url,alt:"",className:"w-full h-[150px] object-cover"})}),r.jsx("span",{className:"absolute text-white p-1 bg-[#2BAE70] top-0 right-0 self-start rounded-t-[8px] rounded-br-[8px] rounded-bl-[30px]",children:"9% off"})]}),(0,r.jsxs)("div",{className:"",children:[r.jsx("h4",{className:"text-3xl",children:"Vehicle Information"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-2",children:m.map((e,s)=>(0,r.jsxs)("div",{className:"flex",children:[r.jsx("span",{className:"mr-2",children:e.icon}),(0,r.jsxs)("span",{children:[e.name,": ",e.value]})]},s))})]})]})}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center mt-8",children:[r.jsx("div",{className:"w-full md:w-6/12",children:(0,r.jsxs)("div",{className:"",children:[r.jsx("h4",{className:"text-3xl",children:"Booking Information"}),(0,r.jsxs)("div",{className:"last:border-0 divide-y divide-gray-200 [&>*]:py-2 max-w-max",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx("span",{className:"",children:r.jsx(c.Qu,{className:"h-6 w-6"})}),(0,r.jsxs)("div",{className:"space-x-2",children:[r.jsx("span",{className:"text-lg",children:"Weeks"}),r.jsx(i.Z,{min:1,max:50,defaultValue:0,name:"weeks",onChange:e=>s(e)})]}),(0,r.jsxs)("div",{className:"space-x-2",children:[r.jsx("span",{className:"text-lg",children:"Hrs"}),r.jsx(i.Z,{min:1,max:24,defaultValue:0,name:"hours",onChange:e=>u(e)})]})]}),r.jsx("div",{className:"flex items-center gap-4",children:[{name:"Self Driven",icon:r.jsx(c.CN,{className:"w-6 h-6"})},{name:"With Driver",icon:r.jsx(c.A_,{className:"w-6 h-6"})}].map((e,s)=>(0,r.jsxs)("div",{className:"flex gap-2 items-center",children:[r.jsx("span",{children:e.icon}),r.jsx("span",{children:e.name}),r.jsx("span",{children:r.jsx(d.Qr,{name:"selfDriven",control:D,render:({field:{name:s,onBlur:a,onChange:t,value:n}})=>r.jsx(ui_radio,{className:"border-2 border-[#34D186] !rounded-sm checked:bg-[#34D186]",name:s,onBlur:a,onChange:t,value:e.name,checked:n===e.name})})})]},s))}),r.jsx("div",{className:"flex items-center gap-4",children:["Inter-State","Within city"].map((e,s)=>(0,r.jsxs)("div",{className:"flex gap-2 items-center",children:[r.jsx("span",{children:e}),r.jsx("span",{children:r.jsx(d.Qr,{name:"interState",control:D,render:({field:{name:s,onBlur:a,onChange:t,value:n}})=>r.jsx(ui_radio,{className:"border-2 border-[#34D186] !rounded-sm checked:bg-[#34D186]",name:s,onBlur:a,onChange:t,value:e,checked:n===e})})})]},e))})]})]})}),r.jsx("div",{className:"w-full md:w-6/12",children:(0,r.jsxs)("div",{className:"",children:[r.jsx("h4",{className:"text-2xl font-bold",children:"Note:"}),r.jsx("p",{className:"text-sm",children:"Reservation or booking is monthly. And minimum is 2 monthly rentage but customer rental will be billed weekly."})]})})]}),r.jsx("div",{className:"mt-8",children:(0,r.jsxs)("div",{className:"shadow-lg p-4 max-w-max rounded-lg space-y-2",children:[r.jsx("span",{className:"font-semibold",children:"Specification"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"flex",children:[r.jsx("span",{children:r.jsx(c.$W,{className:"h-6 w-6 fill-black"})}),(0,r.jsxs)("span",{children:[e.seats," seats"]})]}),(0,r.jsxs)("div",{className:"flex",children:[r.jsx("span",{children:r.jsx(c.UJ,{className:"h-7 w-7"})}),r.jsx("span",{children:"1500 cc"})]})]})]})}),r.jsx("div",{className:"mt-8 text-center",children:r.jsx("button",{className:"btn btn-primary text-black capitalize px-7 text-xl",onClick:()=>{q(s=>({...s,carId:e._id}))},children:"Reserve"})})]},a))})}},35854:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Requests,metadata:()=>o});var r=a(4656),t=a(3542),n=a(95153);let l=(0,n.createProxy)(String.raw`/Users/user/Desktop/perzsirentals/src/components/partials/home/booking/index.tsx`),{__esModule:i,$$typeof:c}=l,d=l.default,o={title:"Dashboard - Requests",description:"Requests"};function Requests(){return r.jsx(t.Fragment,{children:r.jsx("section",{className:"py-12",children:r.jsx("div",{className:"relative",children:r.jsx(d,{})})})})}}};var s=require("../../../../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),a=s.X(0,[657,8665,614,9367,4791,6346,5155,9271,2459,9387,1390,7710,8093,8442,8974,9392,9838,8217,6815,6558,1314,9545,5058,633,9745],()=>__webpack_exec__(50460));module.exports=a})();