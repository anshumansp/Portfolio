import{r as e,j as s}from"./index-670e61a2.js";import{C as t}from"./react-three-fiber.esm-27106523.js";import{L as o,O as i}from"./Loader-1b5c60f6.js";import{P as a}from"./Preload-214b53b3.js";import{u as n}from"./useGLTF-ae8f7741.js";const r=({isMobile:e})=>{const t=n("../../desktop_pc/scene.gltf");return s.jsxs("mesh",{children:[s.jsx("hemisphereLight",{intensity:2,groundColor:"#000000"}),s.jsx("pointLight",{intensity:1,position:[0,0,-0]}),s.jsx("spotLight",{position:[-20,60,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),s.jsx("primitive",{object:t.scene,scale:e?.65:.75,position:e?[1.8,-2.8,-1.6]:[0,-2.8,-1.5],rotation:[-.01,-.2,-.1]})]})},m=()=>{const[n,m]=e.useState(!1);return e.useEffect((()=>{const e=window.matchMedia("(max-width: 600px)");m(e.matches);const s=e=>{m(e.matches)};return e.addEventListener("change",s,{passive:!0}),()=>{e.removeEventListener("change",s)}}),[]),s.jsxs(t,{frameloop:"demand",shadows:!0,camera:{position:[20,3.5,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[s.jsxs(e.Suspense,{fallback:s.jsx(o,{}),children:[s.jsx(i,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),s.jsx(r,{isMobile:n})]}),s.jsx(a,{all:!0})]})};export{m as default};
