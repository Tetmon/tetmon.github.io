(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7717:function(e,t,l){Promise.resolve().then(l.bind(l,8)),Promise.resolve().then(l.bind(l,7886)),Promise.resolve().then(l.bind(l,9417)),Promise.resolve().then(l.t.bind(l,413,23)),Promise.resolve().then(l.t.bind(l,8326,23))},8:function(e,t,l){"use strict";l.r(t),l.d(t,{Snapshots:function(){return d}});var s=l(7437),n=l(6691),r=l.n(n),i=l(2265),o=l(1289);let a=(0,i.createContext)(0),d=e=>{let{dir:t,feature:l}=e,n=(0,i.useContext)(a),{file:d,hasPadding:c}=l;return(0,s.jsx)(o.Z,{timeout:200,classNames:"snapshot",appear:!0,in:!0,unmountOnExit:!0,children:(0,s.jsx)("div",{className:"col-end-16 mt-20 hidden h-80 w-full min-w-[400px] overflow-hidden rounded-md bg-edgeset md:col-start-11 lg:col-start-12 ".concat(c?"pl-12 pt-12":"justify-center"," md:flex ").concat(0===n?"bg-edgeset":""),children:(0,s.jsx)(r(),{src:d,className:"relative top-[2px] max-w-fit object-contain",alt:"hey",width:500,height:300})})},n)};t.default=e=>{var t;let l,{features:n,title:c,icon:u,dir:m}=e,[x,f]=(0,i.useState)(0),h=(0,i.useRef)(null),p=(0,i.useRef)(null),b=(0,i.useRef)(null),g=(0,i.useRef)(!0);function v(e){let t=h.current;if(!(t instanceof HTMLElement))return;let l=t.childNodes[e];if(!(l instanceof HTMLElement))return;let s=l.getBoundingClientRect(),n=s.right<t.offsetWidth&&s.left>0;n||t.scrollTo({left:l.offsetLeft-l.offsetWidth/2,behavior:"smooth"}),f(e)}let j=(t=e=>{if(!g.current){g.current=!0;return}let t=e.target;if(!(t instanceof HTMLElement))return;let l=Array.from(t.childNodes);l.forEach(async(e,s)=>{if(!(e instanceof HTMLElement))return;let n=e.getBoundingClientRect().left;if(n<=4){v(s);return}if(t.scrollLeft+t.clientWidth>=t.scrollWidth){v(l.length-1);return}})},function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),t(...s)},100)}),w=n[x];return(0,i.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.isIntersecting;t&&n.forEach((e,t)=>{new Image().src=n[t].file})})});b.current&&e.observe(b.current)},[]),(0,s.jsx)(a.Provider,{value:x,children:(0,s.jsxs)("div",{className:"col-span-full md:grid md:grid-cols-18",ref:b,children:[(0,s.jsxs)("div",{className:"md:col-start-2 md:col-end-10 md:max-w-xl md:py-20 xl:col-start-5",children:[(0,s.jsxs)("div",{className:"mb-4 flex lg:mb-12",children:[u,(0,s.jsx)("h2",{className:"flex pt-[5px] text-2xl font-medium text-edgeset md:pl-0 md:text-3xl lg:text-4xl",children:c})]}),(0,s.jsx)("div",{ref:h,className:"scrollbar-hide mb-4 ml-2 flex overflow-x-auto md:hidden",children:n.map((e,t)=>{var l;return(0,s.jsx)("div",{className:"min-w-fit pl-2",children:(0,s.jsx)("button",{className:"rounded-xl border p-[5px] text-xs font-medium uppercase tracking-tighter \n              ".concat(t===x?"bg-slate-900  text-white":"border-slate-400 text-gray-500"),onClick:()=>{if(f(t),!(p.current instanceof HTMLElement))return;let e=Array.from(p.current.childNodes),l=e[t];l instanceof HTMLElement&&(g.current=!1,p.current.scrollTo({left:l.offsetLeft,behavior:"smooth"}))},children:null!==(l=e.pill)&&void 0!==l?l:e.title})},e.title)})}),(0,s.jsx)("div",{className:"scrollbar-hide mb-6 flex snap-x snap-mandatory overflow-x-auto pb-6 md:hidden",onScroll:j,ref:p,children:n.map(e=>(0,s.jsx)("div",{className:"max-w-sm snap-start pl-4",children:(0,s.jsxs)("div",{className:"flex min-w-[300px] max-w-[100vw] flex-col overflow-hidden rounded-md bg-white",children:[(0,s.jsxs)("div",{className:"py-6 pl-5 pr-3",children:[(0,s.jsxs)("h2",{className:"text-2xl font-medium text-edgeset",children:[e.title,"."]}),(0,s.jsx)("span",{className:"text-base text-gray-700",dangerouslySetInnerHTML:{__html:e.description}})]}),(0,s.jsx)("div",{className:"box-content flex w-full items-center justify-center rounded-sm bg-edgeset p-4 ".concat(e.hasPadding&&!e.mobilePadding?"pl-11":"p-0"," ").concat(e.mobilePadding?"py-4 pl-16":""),children:(0,s.jsx)(r(),{src:e.file,className:"h-64 max-w-fit object-contain",alt:"hey",width:500,height:300})})]})},e.title))}),(0,s.jsx)("div",{className:"hidden md:flex",children:(0,s.jsx)(o.Z,{timeout:200,classNames:"card",appear:!0,in:!0,unmountOnExit:!0,children:(0,s.jsxs)("div",{className:"mb-4 min-h-[200px]",children:[(0,s.jsxs)("h2",{className:"mb-3 text-2xl font-medium text-edgeset md:text-2xl lg:text-3xl",children:[w.title,"."]}),(0,s.jsx)("span",{className:"text-base text-gray-700 md:text-base lg:text-lg",dangerouslySetInnerHTML:{__html:w.description}})]})},x)}),(0,s.jsx)("div",{ref:h,className:"scrollbar-hide mb-4 ml-2 hidden flex-wrap gap-2 overflow-x-auto md:ml-0 md:flex lg:gap-4 lg:overflow-x-visible",children:n.map((e,t)=>{var l;return(0,s.jsx)("div",{className:"min-w-fit ".concat(0!==t?"mr-0":"lg:pl-0"),onClick:()=>{f(t)},children:(0,s.jsx)("button",{className:"rounded-xl border p-[5px] px-3 text-xs font-medium uppercase lg:text-sm\n              ".concat(t===x?"bg-slate-900  text-white":"border-slate-400 bg-white text-slate-800"," hover:bg-slate-900 hover:text-white"),children:null!==(l=e.pill)&&void 0!==l?l:e.title})},e.title)})})]}),(0,s.jsx)(d,{dir:m,feature:n[x]})]})})}},7886:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var s=l(7437),n=l(2265);function r(e){let{onClose:t}=e,[l,r]=(0,n.useState)(!1),[i,o]=(0,n.useState)(!1),a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;setTimeout(()=>r(!0),1e3),null===(e=a.current)||void 0===e||e.focus()},[]),(0,s.jsxs)("div",{tabIndex:0,ref:a,className:"fixed top-0 z-50 flex h-full w-full items-center justify-center bg-edgeset",onKeyDown:e=>{"Escape"===e.key&&t()},children:[(0,s.jsx)("button",{className:"absolute right-5 top-5",onClick:t,children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,s.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),i?null:(0,s.jsxs)("div",{role:"status",className:"absolute top-[50%]",children:[(0,s.jsxs)("svg",{"aria-hidden":"true",className:"h-8 w-8 animate-spin fill-sky-500 text-gray-200",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})]}),l?(0,s.jsxs)("video",{autoPlay:!0,controls:!0,loop:!0,muted:!0,className:"pointer-coarse-video-l pointer-coarse-video-f mx-auto p-5 ".concat(i?"visible":"invisible"),onLoadedData:()=>{o(!0)},children:[(0,s.jsx)("source",{src:"assets/edgeset.webm",type:"video/webm"}),(0,s.jsx)("source",{src:"assets/edgeset.mp4",type:"video/mp4"})]}):null]})}var i=l(4033),o=l(4887),a=l(1289);function d(e){let{size:t,outline:l,showVideo:d}=e,c=(0,i.useRouter)(),[u,m]=(0,n.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"z-10 flex flex-col items-center md:flex-row md:items-baseline",children:(0,s.jsxs)("form",{onSubmit:e=>(e.preventDefault(),c.push("get-demo"),!1),children:[(0,s.jsx)("button",{type:"submit","data-label":"request-demo",className:"rounded-3xl bg-slate-900 py-3  ".concat("sm"===t?"px-4 text-xs":"px-5 text-base"," ").concat("sm"===t?"font-semibold":"font-medium"," ").concat(l?"border border-white bg-[#19495a] text-white":" text-white"," border hover:border-black hover:bg-white hover:text-black"),children:"Get a Demo"}),d?(0,s.jsx)("button",{onClick:e=>{e.preventDefault(),m(!0)},"data-label":"request-demo",className:"rounded-3xl bg-white py-3 ".concat("sm"===t?"px-4 text-xs":"px-5 text-base"," ").concat("sm"===t?"font-semibold":"font-medium"," ml-3 border border-edgeset text-edgeset hover:border-black hover:bg-white hover:text-black"),children:"Watch Video"}):null,(0,o.createPortal)((0,s.jsx)(a.Z,{classNames:"portal-fade",in:u,timeout:100,unmountOnExit:!0,children:(0,s.jsx)(r,{onClose:()=>m(!1)})}),document.body)]})})})}},9417:function(e,t,l){"use strict";l.r(t);var s=l(7437),n=l(2265),r=l(4887),i=l(1289);let o=e=>{let{showMenu:t}=e;return(0,n.useEffect)(()=>{document.documentElement.dataset.showMenu="".concat(t)},[t]),(0,r.createPortal)((0,s.jsx)(i.Z,{classNames:"portal-fade",in:t,timeout:100,unmountOnExit:!0,children:(0,s.jsx)("div",{className:"fixed top-[50px] z-10 h-full w-full backdrop-blur-lg",children:(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"flex flex-col px-5 pt-5",children:[(0,s.jsx)("a",{href:"/blog",children:(0,s.jsx)("li",{className:"border-b border-[#e7eaee] py-5 text-base font-medium text-gray-700",children:"Blog"})}),(0,s.jsx)("a",{href:"/about",children:(0,s.jsx)("li",{className:"border-b border-[#e7eaee] py-5 text-base font-medium text-gray-700",children:"About"})})]})})})}),document.body)};t.default=()=>{let[e,t]=(0,n.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{"aria-label":"burger",className:"rounded-sm px-2 py-1 text-lg md:hidden",onClick:()=>t(!e),children:e?(0,s.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,s.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8.5C2 7.94772 2.44772 7.5 3 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H3C2.44772 9.5 2 9.05228 2 8.5Z",fill:"currentColor"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z",fill:"currentColor"})]})}),(0,s.jsx)(o,{showMenu:e})]})}},679:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{unstable_getImgProps:function(){return a},default:function(){return d}});let s=l(1024),n=l(7929),r=l(2637),i=l(413),o=s._(l(9950)),a=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},d=i.Image},6691:function(e,t,l){e.exports=l(679)},4033:function(e,t,l){e.exports=l(94)}},function(e){e.O(0,[326,808,413,971,472,744],function(){return e(e.s=7717)}),_N_E=e.O()}]);