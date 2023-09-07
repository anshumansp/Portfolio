import{r as e,_ as t,o as r,q as a,k as n,D as s,M as o,c as i,j as l,C as c,P as u,v as d}from"./index-9e137b5f.js";import{m as f}from"./react-merge-refs.esm-d6fcc1fa.js";const m=parseInt(a.replace(/\D+/g,""))>=154?"opaque_fragment":"output_fragment";class g extends r{constructor(e){super(e),this.onBeforeCompile=(e,t)=>{const{isWebGL2:r}=t.capabilities;e.fragmentShader=e.fragmentShader.replace(`#include <${m}>`,`\n        ${r?`#include <${m}>`:`#extension GL_OES_standard_derivatives : enable\n#include <${m}>`}\n      vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n      float r = dot(cxy, cxy);\n      float delta = fwidth(r);     \n      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\n      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );\n      #include <tonemapping_fragment>\n      #include <${parseInt(a.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>\n      `)}}}const p=e.forwardRef(((r,a)=>{const[n]=e.useState((()=>new g(null)));return e.createElement("primitive",t({},r,{object:n,ref:a,attach:"material"}))}));let b,h;const y=e.createContext(null),x=new o,E=new i,z=e.forwardRef((({children:r,range:a,limit:o=1e3,...i},l)=>{const c=e.useRef(null),[u,d]=e.useState([]),[[m,g,p]]=e.useState((()=>[new Float32Array(3*o),Float32Array.from({length:3*o},(()=>1)),Float32Array.from({length:o},(()=>1))]));e.useEffect((()=>{c.current.geometry.attributes.position.needsUpdate=!0})),n((()=>{for(c.current.updateMatrix(),c.current.updateMatrixWorld(),x.copy(c.current.matrixWorld).invert(),c.current.geometry.drawRange.count=Math.min(o,void 0!==a?a:o,u.length),b=0;b<u.length;b++)h=u[b].current,h.getWorldPosition(E).applyMatrix4(x),E.toArray(m,3*b),c.current.geometry.attributes.position.needsUpdate=!0,h.matrixWorldNeedsUpdate=!0,h.color.toArray(g,3*b),c.current.geometry.attributes.color.needsUpdate=!0,p.set([h.size],b),c.current.geometry.attributes.size.needsUpdate=!0}));const z=e.useMemo((()=>({getParent:()=>c,subscribe:e=>(d((t=>[...t,e])),()=>d((t=>t.filter((t=>t.current!==e.current)))))})),[]);return e.createElement("points",t({userData:{instances:u},matrixAutoUpdate:!1,ref:f([l,c]),raycast:()=>null},i),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:m.length/3,array:m,itemSize:3,usage:s}),e.createElement("bufferAttribute",{attach:"attributes-color",count:g.length/3,array:g,itemSize:3,usage:s}),e.createElement("bufferAttribute",{attach:"attributes-size",count:p.length,array:p,itemSize:1,usage:s})),e.createElement(y.Provider,{value:z},r))})),A=e.forwardRef((({children:r,positions:a,colors:o,sizes:i,stride:l=3,...c},u)=>{const d=e.useRef(null);return n((()=>{const e=d.current.geometry.attributes;e.position.needsUpdate=!0,o&&(e.color.needsUpdate=!0),i&&(e.size.needsUpdate=!0)})),e.createElement("points",t({ref:f([u,d])},c),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:a.length/l,array:a,itemSize:l,usage:s}),o&&e.createElement("bufferAttribute",{attach:"attributes-color",count:o.length/l,array:o,itemSize:3,usage:s}),i&&e.createElement("bufferAttribute",{attach:"attributes-size",count:i.length/l,array:i,itemSize:1,usage:s})),r)})),S=e.forwardRef(((r,a)=>r.positions instanceof Float32Array?e.createElement(A,t({},r,{ref:a})):e.createElement(z,t({},r,{ref:a})))),_=t=>{const r=e.useRef(),a=d(new Float32Array(5e3),{radius:1.2});return n(((e,t)=>{r.current.rotation.x-=t/10,r.current.rotation.y-=t/15})),l.jsx("group",{rotation:[0,0,Math.PI/4],children:l.jsx(S,{ref:r,positions:a,stride:3,frustumCulled:!0,...t,children:l.jsx(p,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},j=()=>l.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:l.jsxs(c,{camera:{position:[0,0,1]},children:[l.jsx(e.Suspense,{fallback:null,children:l.jsx(_,{})}),l.jsx(u,{all:!0})]})});export{j as default};
