import{j as a,m as i,s as e}from"./index-670e61a2.js";const s=a=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:a}}}),n=(a,i,e,s)=>({hidden:{x:"left"===a?100:"right"===a?-100:0,y:"up"===a?100:"down"===a?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:i,delay:e,duration:s,ease:"easeOut"}}}),t=(a,i,e,s)=>({hidden:{x:"left"===a?"-100%":"right"===a?"100%":0,y:"up"===a||"down"===a?"100%":0},show:{x:0,y:0,transition:{type:i,delay:e,duration:s,ease:"easeOut"}}}),o=(s,n)=>function(){return a.jsxs(i.section,{variants:{hidden:{},show:{transition:{staggerChildren:t,delayChildren:o||0}}},initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${e.padding} max-w-7xl mx-auto\n            relative z-0`,children:[a.jsx("span",{className:"has-span",id:n,children:" "}),a.jsx(s,{})]});var t,o};export{o as S,n as f,t as s,s as t};