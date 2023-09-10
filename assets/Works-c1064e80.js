import{j as e,m as s,t as a,s as l,f as i,p as t}from"./index-4efdba13.js";import{T as c}from"./index-a49e236e.js";const r=({index:a,name:l,description:t,tags:r,image:n,webpage_link:x,source_code_link:d})=>e.jsx(s.div,{variants:i("up","spring",.75*a),children:e.jsxs(c,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl  w-full sm:w-[360px] max-w-screen-xl",children:[e.jsxs("div",{className:"relative w-full sm:h-[230px] h-[350px]",children:[e.jsx("img",{src:n,alt:l,className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(d,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:"/assets/github-382839b0.webp",alt:"github",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:l}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:t})]}),e.jsx("div",{className:"mt-4 flex justify-start",children:e.jsxs("p",{children:[e.jsx("span",{children:" Project Link : "}),e.jsx("a",{href:x,className:"text-[#b564ed]",children:l})]})}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:r.map((s=>e.jsxs("p",{className:`text-[14px] ${s.color}`,children:["#",s.name]},s.name)))})]})}),n=()=>e.jsxs("div",{className:"sm:px-16 px-6 sm:py-10 py-16 max-w-7xl mx-auto",id:"work",children:[e.jsxs(s.div,{variants:a(),children:[e.jsx("p",{className:`mb-6 ${l.sectionSubText}`,children:"My Work"}),e.jsx("h2",{className:l.sectionHeadText,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(s.p,{variants:i("","",.1,1),className:"mt-3 text-secondarytext-[17px] leading-[30px]",children:"Following are my recent projects that serve as a proof to my caliber as a full-stack developer. Each project is accompanied by a concise description and links to their respective code repositories. These projects not only showcase my technical skills, but also reflect my problem-solving abilities and application development skills."})}),e.jsx("div",{className:"mt-16 flex flex-wrap gap-7",children:t.map(((s,a)=>e.jsx(r,{index:a,...s},`project-${a}`)))})]});export{n as default};
