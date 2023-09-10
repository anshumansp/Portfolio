import{j as e,r as a,S as s,m as t,b as n,s as o}from"./index-9e019d01.js";import{C as r}from"./react-three-fiber.esm-5dd02b2d.js";import{L as i,O as l}from"./Loader-8b358bd1.js";import{u as m}from"./useGLTF-1bc761e4.js";const c=()=>{const a=m("./planet/scene.gltf");return e.jsx("primitive",{object:a.scene,scale:2.5,"position-y":0,"rotation-y":0})},d=()=>e.jsx(r,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(a.Suspense,{fallback:e.jsx(i,{}),children:[e.jsx(l,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minDistance:Math.PI/2}),e.jsx(c,{})]})}),x={_origin:"https://api.emailjs.com"},h=(e,a,s)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const p=(e,a,s={})=>new Promise(((t,n)=>{const o=new XMLHttpRequest;o.addEventListener("load",(({target:e})=>{const a=new u(e);200===a.status||"OK"===a.text?t(a):n(a)})),o.addEventListener("error",(({target:e})=>{n(new u(e))})),o.open("POST",x._origin+e,!0),Object.keys(s).forEach((e=>{o.setRequestHeader(e,s[e])})),o.send(a)})),f=(e,a,s,t)=>{const n=t||x._userID;h(n,e,a);const o={lib_version:"3.11.0",user_id:n,service_id:e,template_id:a,template_params:s};return p("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},j=s((()=>{const s=a.useRef(),[r,i]=a.useState({name:"",email:"",message:""}),[l,m]=a.useState(!1),c=e=>{const{name:a,value:s}=e.target;i({...r,[a]:s})};return e.jsxs("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[e.jsxs(t.div,{variants:n("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 sm:m-0 mb-16 rounded-2xl",children:[e.jsx("p",{className:o.sectionSubText,children:"Get in Touch"}),e.jsx("h3",{className:o.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:s,onSubmit:e=>{e.preventDefault(),m(!0),f("service_5zur5td","template_7qeso4c",{from_name:r.name,to_name:"Anshuman",from_email:r.email,to_email:"anshumansp16@gmail.com",message:r.message},"40sjYRtP5_lUiAaaO").then((()=>{m(!1),alert("Thanks. I will get back to you as soon as possible."),i({name:"",email:"",message:""})}))},className:"mt-6 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:r.name,onChange:c,placeholder:"What's your Name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:c,placeholder:"What's your email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:"4",name:"message",value:r.message,onChange:c,placeholder:"What do you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl",children:l?"Sending...":"Send"})]})]}),e.jsx(t.div,{variants:n("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(d,{})})]})}),"contact");export{j as default};
