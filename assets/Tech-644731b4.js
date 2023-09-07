import{B as e,c as t,M as o,F as n,T as r,r as s,d as i,E as a,O as l,f as c,j as u,g as p}from"./index-fb46dd17.js";import{u as f,a as m,b as h,_ as d,c as y,C as x}from"./react-three-fiber.esm-0ee60283.js";import{L as g,O as w}from"./Loader-4a401c1e.js";import{P as b}from"./Preload-3cc8755e.js";import{m as j}from"./react-merge-refs.esm-d6fcc1fa.js";import{S as E}from"./SectionWrapper-a4078462.js";class v extends e{constructor(e,r,s,i){super();const a=[],l=[],c=[],u=new t,p=new o;p.makeRotationFromEuler(s),p.setPosition(r);const f=new o;function m(t,o,n){o.applyMatrix4(e.matrixWorld),o.applyMatrix4(f),n.transformDirection(e.matrixWorld),t.push(new A(o.clone(),n.clone()))}function h(e,t){const o=[],n=.5*Math.abs(i.dot(t));for(let r=0;r<e.length;r+=3){let s,i,a,l,c,u,p,f=0;switch(s=e[r+0].position.dot(t)-n>0,i=e[r+1].position.dot(t)-n>0,a=e[r+2].position.dot(t)-n>0,f=(s?1:0)+(i?1:0)+(a?1:0),f){case 0:o.push(e[r]),o.push(e[r+1]),o.push(e[r+2]);break;case 1:if(s&&(l=e[r+1],c=e[r+2],u=d(e[r],l,t,n),p=d(e[r],c,t,n)),i){l=e[r],c=e[r+2],u=d(e[r+1],l,t,n),p=d(e[r+1],c,t,n),o.push(u),o.push(c.clone()),o.push(l.clone()),o.push(c.clone()),o.push(u.clone()),o.push(p);break}a&&(l=e[r],c=e[r+1],u=d(e[r+2],l,t,n),p=d(e[r+2],c,t,n)),o.push(l.clone()),o.push(c.clone()),o.push(u),o.push(p),o.push(u.clone()),o.push(c.clone());break;case 2:s||(l=e[r].clone(),c=d(l,e[r+1],t,n),u=d(l,e[r+2],t,n),o.push(l),o.push(c),o.push(u)),i||(l=e[r+1].clone(),c=d(l,e[r+2],t,n),u=d(l,e[r],t,n),o.push(l),o.push(c),o.push(u)),a||(l=e[r+2].clone(),c=d(l,e[r],t,n),u=d(l,e[r+1],t,n),o.push(l),o.push(c),o.push(u))}}return o}function d(e,o,n,r){const s=e.position.dot(n)-r,i=s/(s-(o.position.dot(n)-r));return new A(new t(e.position.x+i*(o.position.x-e.position.x),e.position.y+i*(o.position.y-e.position.y),e.position.z+i*(o.position.z-e.position.z)),new t(e.normal.x+i*(o.normal.x-e.normal.x),e.normal.y+i*(o.normal.y-e.normal.y),e.normal.z+i*(o.normal.z-e.normal.z)))}f.copy(p).invert(),function(){let o,n=[];const r=new t,s=new t;if(!0===e.geometry.isGeometry)return void console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");const f=e.geometry,d=f.attributes.position,y=f.attributes.normal;if(null!==f.index){const e=f.index;for(o=0;o<e.count;o++)r.fromBufferAttribute(d,e.getX(o)),s.fromBufferAttribute(y,e.getX(o)),m(n,r,s)}else for(o=0;o<d.count;o++)r.fromBufferAttribute(d,o),s.fromBufferAttribute(y,o),m(n,r,s);for(n=h(n,u.set(1,0,0)),n=h(n,u.set(-1,0,0)),n=h(n,u.set(0,1,0)),n=h(n,u.set(0,-1,0)),n=h(n,u.set(0,0,1)),n=h(n,u.set(0,0,-1)),o=0;o<n.length;o++){const e=n[o];c.push(.5+e.position.x/i.x,.5+e.position.y/i.y),e.position.applyMatrix4(p),a.push(e.position.x,e.position.y,e.position.z),l.push(e.normal.x,e.normal.y,e.normal.z)}}(),this.setAttribute("position",new n(a,3)),this.setAttribute("normal",new n(l,3)),this.setAttribute("uv",new n(c,2))}}class A{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const M=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function O(e,t){const o=f((e=>e.gl)),n=m(r,M(e)?Object.values(e):e);if(s.useLayoutEffect((()=>{null==t||t(n)}),[t]),s.useEffect((()=>{(Array.isArray(n)?n:[n]).forEach(o.initTexture)}),[o,n]),M(e)){const t=Object.keys(e),o={};return t.forEach((e=>Object.assign(o,{[e]:n[t.indexOf(e)]}))),o}return n}function z(e=[0,0,0]){return function(e){return Array.isArray(e)}(e)?e:e instanceof t||e instanceof a?[e.x,e.y,e.z]:[e,e,e]}O.preload=e=>m.preload(r,e),O.clear=e=>m.clear(r,e);const R=s.forwardRef((function({debug:e,depthTest:o=!1,polygonOffsetFactor:n=-10,map:r,mesh:c,children:u,position:p,rotation:f,scale:m,...y},x){const g=s.useRef(null);s.useImperativeHandle(x,(()=>g.current));const w=s.useRef(null);return s.useLayoutEffect((()=>{const e=(null==c?void 0:c.current)||g.current.parent,o=g.current;if(!(e instanceof i))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const n={position:new t,rotation:new a,scale:new t(1,1,1)};if(e){h(n,{position:p,scale:m});const t=e.matrixWorld.clone();if(e.matrixWorld.identity(),f&&"number"!=typeof f)h(n,{rotation:f});else{const t=new l;t.position.copy(n.position),t.lookAt(e.position),"number"==typeof f&&t.rotateZ(f),h(n,{rotation:t.rotation})}return o.geometry=new v(e,n.position,n.rotation,n.scale),w.current&&(h(w.current,n),w.current.traverse((e=>e.raycast=()=>null))),e.matrixWorld=t,()=>{o.geometry.dispose()}}}),[c,...z(p),...z(m),...z(f)]),s.createElement("mesh",d({ref:g,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":n,"material-depthTest":o,"material-map":r},y),u,e&&s.createElement("mesh",{ref:w},s.createElement("boxGeometry",null),s.createElement("meshNormalMaterial",{wireframe:!0}),s.createElement("axesHelper",null)))})),k=s.forwardRef((({children:e,enabled:t=!0,speed:o=1,rotationIntensity:n=1,floatIntensity:r=1,floatingRange:i=[-.1,.1],...a},l)=>{const u=s.useRef(null),p=s.useRef(1e4*Math.random());return y((e=>{var s,a;if(!t||0===o)return;const l=p.current+e.clock.getElapsedTime();u.current.rotation.x=Math.cos(l/4*o)/8*n,u.current.rotation.y=Math.sin(l/4*o)/8*n,u.current.rotation.z=Math.sin(l/4*o)/20*n;let f=Math.sin(l/4*o)/10;f=c.mapLinear(f,-.1,.1,null!==(s=null==i?void 0:i[0])&&void 0!==s?s:-.1,null!==(a=null==i?void 0:i[1])&&void 0!==a?a:.1),u.current.position.y=f*r,u.current.updateMatrix()})),s.createElement("group",a,s.createElement("group",{ref:j([u,l]),matrixAutoUpdate:!1},e))})),S=e=>{const{imgUrl:t}=e,o=O(t);return u.jsxs(k,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[u.jsx("ambientLight",{intensity:.6}),u.jsx("directionalLight",{position:[0,0,.05]}),u.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[u.jsx("icosahedronGeometry",{args:[1,1]}),u.jsx("meshStandardMaterial",{color:"#d0d2d9",emissive:"#d0d2d9",emissiveIntensity:1,polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),u.jsx(R,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],flatShading:!0,map:o})]})]})},B=({icon:e})=>u.jsxs(x,{frameloop:"demand",gl:{preserveDrawingBuffer:!0},children:[u.jsxs(s.Suspense,{fallback:u.jsx(g,{}),children:[u.jsx(w,{enableZoom:!1}),u.jsx(S,{imgUrl:e})]}),u.jsx(b,{all:!0})]}),I=E((()=>u.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:p.map((e=>u.jsx("div",{className:"w-28 h-28",children:u.jsx(B,{icon:e.icon})},e.name)))})),"");export{I as default};
