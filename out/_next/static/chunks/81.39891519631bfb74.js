"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{2081:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var o=i(5155),n=i(2115),r=i(7260),l=i(8174),s=i(8173),a=i.n(s);let d=()=>{let[t,e]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let t=setInterval(()=>{let t=["top","bottom","left","right"][Math.floor(4*Math.random())];e(e=>[...e,{position:{top:"bottom"===t?-(4*l.Y5):"top"===t?window.innerHeight+4*l.Y5:Math.random()*window.innerHeight,left:"right"===t?-(4*l.Y5):"left"===t?window.innerWidth+4*l.Y5:Math.random()*window.innerWidth},direction:t}])},2e3);return()=>clearInterval(t)},[]),(0,n.useEffect)(()=>{let t=setInterval(()=>{let t=3*l.Y5,i=3*l.Y5;e(e=>e.map(e=>({...e,position:{top:"bottom"===e.direction?e.position.top+i:"top"===e.direction?e.position.top-i:e.position.top,left:"right"===e.direction?e.position.left+t:"left"===e.direction?e.position.left-t:e.position.left}})).filter(t=>t.position.top>-(4*l.Y5)&&t.position.top<window.innerHeight+4*l.Y5&&t.position.left>-(4*l.Y5)&&t.position.left<window.innerWidth+4*l.Y5))},100);return()=>clearInterval(t)},[]),(0,o.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,o.jsxs)("div",{className:"w-full h-full",children:[(0,o.jsx)(a(),{href:"/",className:"absolute top-4 left-4 px-4 py-2 bg-black text-white border border-white z-20",children:"Back"}),t.map((t,e)=>(0,o.jsx)(r.Dv,{position:t.position,direction:t.direction},e)),(0,o.jsxs)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",children:[(0,o.jsx)(r.IV,{width:30,height:30,whiteColor:"bg-white"}),(0,o.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-black p-4",children:(0,o.jsxs)("div",{className:"text-center w-3/4",children:[(0,o.jsx)("h2",{className:"text-xl mb-4",children:"Contact Me"}),(0,o.jsxs)("p",{className:"mb-2",children:["If you really need to contact me for some reason, you can try the \xa0",(0,o.jsx)(a(),{href:"https://www.linkedin.com/in/your-profile",target:"_blank",className:"text-blue-500 hover:underline",children:"LinkedIn"}),"\xa0 I guess. I'm not really a fan of the platform, but it's there. I'm way more active on facebook for better or worse. In fact, why not just try \xa0"," ",(0,o.jsx)(a(),{href:"https://www.facebook.com/kasun.prabashwara.100/",target:"_blank",className:"text-blue-800 hover:underline",children:"that"})," ","\xa0instead? And sending me an \xa0"," ",(0,o.jsx)("a",{href:"mailto:kasun.20@cse.mrt.ac.lk",className:"text-red-500 hover:underline",children:"email"}),"\xa0 would also work. Although it lacks the charm of sending a mail by post. And I'm also on \xa0"," ",(0,o.jsx)(a(),{href:"https://github.com/your-username",target:"_blank",className:"text-gray-800 hover:underline",children:"GitHub."})," ","\xa0 Like an average developer. Mostly there to drool over some of my favorite project repos and reading the proposals in issues section. Or sometimes to look at some code for reference and writing my own based on that of course(duh)."]}),(0,o.jsx)("p",{className:"mb-2"}),(0,o.jsx)("p",{className:"mt-6 italic text-gray-600",children:"Other ways to contact me:"}),(0,o.jsxs)("ul",{className:"list-disc list-inside text-sm text-gray-500",children:[(0,o.jsx)("li",{children:"I'm immortal so if you are immortal too, then you can try to walk in random directions and hope to bump into me. It's a canon event :)"}),(0,o.jsx)("li",{children:"Be a nice person. I'm a sucker for nice people"}),(0,o.jsx)("li",{children:"Have you heard of telepathy?"})]})]})})]})]})})}},7260:(t,e,i)=>{i.d(e,{Dv:()=>l,IV:()=>d,Wh:()=>r,cT:()=>s,y5:()=>a});var o=i(5155),n=i(8174);let r=t=>{let{isBlack:e=!1,onClick:i,blackColor:r="bg-black",whiteColor:l="bg-transparent"}=t;return(0,o.jsx)("div",{className:"w-".concat(n.oZ," h-").concat(n.oZ," ").concat(e?r:l),onClick:i,style:{cursor:i?"pointer":"default",height:"24px",width:"24px"}})},l=t=>{let{position:e,direction:i}=t;return(0,o.jsx)("div",{style:{position:"absolute",top:e.top,left:e.left},children:(0,o.jsx)(s,{pattern:"left"===i||"right"===i?[[1,1,1]]:[[1],[1],[1]]})})},s=t=>{let{pattern:e,onClick:i=()=>{},onlyBlackClickable:n=!0,blackColor:l="bg-black",whiteColor:s="bg-transparent"}=t;return(0,o.jsx)("div",{children:e.map((t,e)=>(0,o.jsx)("div",{style:{display:"flex"},children:t.map((t,a)=>(0,o.jsx)(r,{isBlack:1===t,onClick:n?1===t?i:void 0:i,blackColor:l,whiteColor:s},"".concat(e,"-").concat(a)))},e))})},a=t=>{let{width:e=20,height:i=20,onClick:n=()=>{}}=t,r=Array(i).fill(1).map(()=>Array(e).fill(1));return(0,o.jsx)(s,{pattern:r,onClick:n})},d=t=>{let{width:e=20,height:i=20,onClick:n=()=>{},whiteColor:r="bg-transparent"}=t,l=Array(i).fill(1).map((t,o)=>Array(e).fill(1).map((t,n)=>0===o||o===i-1||0===n||n===e-1?1:0));return(0,o.jsx)(s,{pattern:l,onClick:n,whiteColor:r})}},8174:(t,e,i)=>{i.d(e,{Y5:()=>l,b1:()=>o,fJ:()=>s,hg:()=>n,oZ:()=>r});let o={right:[[1,0,0],[0,1,0],[0,0,1],[0,1,0],[1,0,0]],left:[[0,0,1],[0,1,0],[1,0,0],[0,1,0],[0,0,1]],up:[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]],down:[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]]},n={right:[[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0]],left:[[0,0,0,0,0,1],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]]},r=6,l=24,s=[[{position:{top:-96,left:window.innerWidth/2+7.5*l},direction:"bottom"}],[{position:{top:-(4*l),left:window.innerWidth/2-8.5*l},direction:"bottom"}],[{position:{top:window.innerHeight+4*l,left:window.innerWidth/2+7.5*l},direction:"top"}],[{position:{top:window.innerHeight+4*l,left:window.innerWidth/2-8.5*l},direction:"top"}],[{position:{top:window.innerHeight/2+7.5*l,left:-(4*l)},direction:"right"}],[{position:{top:window.innerHeight/2-8.5*l,left:-(4*l)},direction:"right"}],[{position:{top:window.innerHeight/2+7.5*l,left:window.innerWidth+4*l},direction:"left"}],[{position:{top:window.innerHeight/2-8.5*l,left:window.innerWidth+4*l},direction:"left"}],[{position:{top:-(4*l),left:window.innerWidth/2+12.5*l},direction:"bottom"},{position:{top:-(4*l),left:window.innerWidth/2-13.5*l},direction:"bottom"}],[{position:{top:window.innerHeight+4*l,left:window.innerWidth/2+12.5*l},direction:"top"},{position:{top:window.innerHeight+4*l,left:window.innerWidth/2-13.5*l},direction:"top"}],[{position:{top:window.innerHeight/2+12.5*l,left:-(4*l)},direction:"right"},{position:{top:window.innerHeight/2-13.5*l,left:-(4*l)},direction:"right"}],[{position:{top:window.innerHeight/2+12.5*l,left:window.innerWidth+4*l},direction:"left"},{position:{top:window.innerHeight/2-13.5*l,left:window.innerWidth+4*l},direction:"left"}]]}}]);