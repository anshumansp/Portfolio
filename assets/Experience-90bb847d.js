import{V as e,c as s,S as t,j as i,m as a,t as l,s as c,e as n}from"./index-9e019d01.js";var r={VerticalTimeline:e.default,VerticalTimelineElement:s.default};const m=({experience:e})=>i.jsxs(r.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:i.jsx("div",{className:"flex justify-center items-center w-full h-full",children:i.jsx("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-white text-[24px] font-bold",children:e.title}),i.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),i.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map(((e,s)=>i.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:e},`experience-point-${s}`)))})]}),x=t((()=>i.jsxs(i.Fragment,{children:[i.jsxs(a.div,{variants:l(),children:[i.jsx("p",{className:`${c.sectionSubText} my-5`,children:"What I have done so far"}),i.jsx("h2",{className:`${c.sectionHeadText} mt-6`,children:"Work Experience."})]}),i.jsx("div",{className:"sm:mt-16 m-8 flex flex-col",children:i.jsx(r.VerticalTimeline,{children:n.map(((e,s)=>i.jsx(m,{experience:e},s)))})})]})),"");export{x as default};