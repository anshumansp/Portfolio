import{V as e,b as s,j as t,m as i,s as a,e as l}from"./index-fb46dd17.js";import{S as n,t as c}from"./SectionWrapper-a4078462.js";var r={VerticalTimeline:e.default,VerticalTimelineElement:s.default};const o=({experience:e})=>t.jsxs(r.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:t.jsx("div",{className:"flex justify-center items-center w-full h-full",children:t.jsx("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-white text-[24px] font-bold",children:e.title}),t.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),t.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map(((e,s)=>t.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:e},`experience-point-${s}`)))})]}),m=n((()=>t.jsxs(t.Fragment,{children:[t.jsxs(i.div,{variants:c(),children:[t.jsx("p",{className:`${a.sectionSubText} mb-5`,children:"What I have done so far"}),t.jsx("h2",{className:`${a.sectionHeadText} mt-6`,children:"Work Experience."})]}),t.jsx("div",{className:"mt-20 flex flex-col",children:t.jsx(r.VerticalTimeline,{children:l.map(((e,s)=>t.jsx(o,{experience:e},s)))})})]})),"");export{m as default};
