import{r as e,P as t,g as r,D as a,h as n,i as s,j as o,k as i}from"./index-f8cfcfa9.js";import{_ as l,u as c,C as u}from"./react-three-fiber.esm-16f494bf.js";import{P as m}from"./Preload-3b5d64e3.js";import{m as d}from"./react-merge-refs.esm-d6fcc1fa.js";const f=parseInt(r.replace(/\D+/g,""))>=154?"opaque_fragment":"output_fragment";class g extends t{constructor(e){super(e),this.onBeforeCompile=(e,t)=>{const{isWebGL2:a}=t.capabilities;e.fragmentShader=e.fragmentShader.replace(`#include <${f}>`,`\n        ${a?`#include <${f}>`:`#extension GL_OES_standard_derivatives : enable\n#include <${f}>`}\n      vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n      float r = dot(cxy, cxy);\n      float delta = fwidth(r);     \n      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\n      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );\n      #include <tonemapping_fragment>\n      #include <${parseInt(r.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>\n      `)}}}const p=e.forwardRef(((t,r)=>{const[a]=e.useState((()=>new g(null)));return e.createElement("primitive",l({},t,{object:a,ref:r,attach:"material"}))}));let b,h;const y=e.createContext(null),x=new n,E=new s,z=e.forwardRef((({children:t,range:r,limit:n=1e3,...s},o)=>{const i=e.useRef(null),[u,m]=e.useState([]),[[f,g,p]]=e.useState((()=>[new Float32Array(3*n),Float32Array.from({length:3*n},(()=>1)),Float32Array.from({length:n},(()=>1))]));e.useEffect((()=>{i.current.geometry.attributes.position.needsUpdate=!0})),c((()=>{for(i.current.updateMatrix(),i.current.updateMatrixWorld(),x.copy(i.current.matrixWorld).invert(),i.current.geometry.drawRange.count=Math.min(n,void 0!==r?r:n,u.length),b=0;b<u.length;b++)h=u[b].current,h.getWorldPosition(E).applyMatrix4(x),E.toArray(f,3*b),i.current.geometry.attributes.position.needsUpdate=!0,h.matrixWorldNeedsUpdate=!0,h.color.toArray(g,3*b),i.current.geometry.attributes.color.needsUpdate=!0,p.set([h.size],b),i.current.geometry.attributes.size.needsUpdate=!0}));const z=e.useMemo((()=>({getParent:()=>i,subscribe:e=>(m((t=>[...t,e])),()=>m((t=>t.filter((t=>t.current!==e.current)))))})),[]);return e.createElement("points",l({userData:{instances:u},matrixAutoUpdate:!1,ref:d([o,i]),raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:f.length/3,array:f,itemSize:3,usage:a}),e.createElement("bufferAttribute",{attach:"attributes-color",count:g.length/3,array:g,itemSize:3,usage:a}),e.createElement("bufferAttribute",{attach:"attributes-size",count:p.length,array:p,itemSize:1,usage:a})),e.createElement(y.Provider,{value:z},t))})),A=e.forwardRef((({children:t,positions:r,colors:n,sizes:s,stride:o=3,...i},u)=>{const m=e.useRef(null);return c((()=>{const e=m.current.geometry.attributes;e.position.needsUpdate=!0,n&&(e.color.needsUpdate=!0),s&&(e.size.needsUpdate=!0)})),e.createElement("points",l({ref:d([u,m])},i),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:r.length/o,array:r,itemSize:o,usage:a}),n&&e.createElement("bufferAttribute",{attach:"attributes-color",count:n.length/o,array:n,itemSize:3,usage:a}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:a})),t)})),j=e.forwardRef(((t,r)=>t.positions instanceof Float32Array?e.createElement(A,l({},t,{ref:r})):e.createElement(z,l({},t,{ref:r})))),S=t=>{const r=e.useRef(),a=i(new Float32Array(5e3),{radius:1.2});return c(((e,t)=>{r.current.rotation.x-=t/10,r.current.rotation.y-=t/15})),o.jsx("group",{rotation:[0,0,Math.PI/4],children:o.jsx(j,{ref:r,positions:a,stride:3,frustumCulled:!0,...t,children:o.jsx(p,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},_=()=>o.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:o.jsxs(u,{camera:{position:[0,0,1]},children:[o.jsx(e.Suspense,{fallback:null,children:o.jsx(S,{})}),o.jsx(m,{all:!0})]})});export{_ as default};
