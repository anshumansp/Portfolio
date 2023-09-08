import{X as t,i as e,h as o,as as n,z as r,r as s,Z as i,at as a,O as l,a4 as c,j as u}from"./index-b1c07e12.js";import{b as p,a as f,c as m,_ as h,u as d,C as y}from"./react-three-fiber.esm-1e6beb30.js";import{L as x,O as g}from"./Loader-1696b252.js";import{P as b}from"./Preload-ca495323.js";import{m as w}from"./react-merge-refs.esm-d6fcc1fa.js";class j extends t{constructor(t,r,s,i){super();const a=[],l=[],c=[],u=new e,p=new o;p.makeRotationFromEuler(s),p.setPosition(r);const f=new o;function m(e,o,n){o.applyMatrix4(t.matrixWorld),o.applyMatrix4(f),n.transformDirection(t.matrixWorld),e.push(new E(o.clone(),n.clone()))}function h(t,e){const o=[],n=.5*Math.abs(i.dot(e));for(let r=0;r<t.length;r+=3){let s,i,a,l,c,u,p,f=0;switch(s=t[r+0].position.dot(e)-n>0,i=t[r+1].position.dot(e)-n>0,a=t[r+2].position.dot(e)-n>0,f=(s?1:0)+(i?1:0)+(a?1:0),f){case 0:o.push(t[r]),o.push(t[r+1]),o.push(t[r+2]);break;case 1:if(s&&(l=t[r+1],c=t[r+2],u=d(t[r],l,e,n),p=d(t[r],c,e,n)),i){l=t[r],c=t[r+2],u=d(t[r+1],l,e,n),p=d(t[r+1],c,e,n),o.push(u),o.push(c.clone()),o.push(l.clone()),o.push(c.clone()),o.push(u.clone()),o.push(p);break}a&&(l=t[r],c=t[r+1],u=d(t[r+2],l,e,n),p=d(t[r+2],c,e,n)),o.push(l.clone()),o.push(c.clone()),o.push(u),o.push(p),o.push(u.clone()),o.push(c.clone());break;case 2:s||(l=t[r].clone(),c=d(l,t[r+1],e,n),u=d(l,t[r+2],e,n),o.push(l),o.push(c),o.push(u)),i||(l=t[r+1].clone(),c=d(l,t[r+2],e,n),u=d(l,t[r],e,n),o.push(l),o.push(c),o.push(u)),a||(l=t[r+2].clone(),c=d(l,t[r],e,n),u=d(l,t[r+1],e,n),o.push(l),o.push(c),o.push(u))}}return o}function d(t,o,n,r){const s=t.position.dot(n)-r,i=s/(s-(o.position.dot(n)-r));return new E(new e(t.position.x+i*(o.position.x-t.position.x),t.position.y+i*(o.position.y-t.position.y),t.position.z+i*(o.position.z-t.position.z)),new e(t.normal.x+i*(o.normal.x-t.normal.x),t.normal.y+i*(o.normal.y-t.normal.y),t.normal.z+i*(o.normal.z-t.normal.z)))}f.copy(p).invert(),function(){let o,n=[];const r=new e,s=new e;if(!0===t.geometry.isGeometry)return void console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");const f=t.geometry,d=f.attributes.position,y=f.attributes.normal;if(null!==f.index){const t=f.index;for(o=0;o<t.count;o++)r.fromBufferAttribute(d,t.getX(o)),s.fromBufferAttribute(y,t.getX(o)),m(n,r,s)}else for(o=0;o<d.count;o++)r.fromBufferAttribute(d,o),s.fromBufferAttribute(y,o),m(n,r,s);for(n=h(n,u.set(1,0,0)),n=h(n,u.set(-1,0,0)),n=h(n,u.set(0,1,0)),n=h(n,u.set(0,-1,0)),n=h(n,u.set(0,0,1)),n=h(n,u.set(0,0,-1)),o=0;o<n.length;o++){const t=n[o];c.push(.5+t.position.x/i.x,.5+t.position.y/i.y),t.position.applyMatrix4(p),a.push(t.position.x,t.position.y,t.position.z),l.push(t.normal.x,t.normal.y,t.normal.z)}}(),this.setAttribute("position",new n(a,3)),this.setAttribute("normal",new n(l,3)),this.setAttribute("uv",new n(c,2))}}class E{constructor(t,e){this.position=t,this.normal=e}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const v=t=>t===Object(t)&&!Array.isArray(t)&&"function"!=typeof t;function A(t,e){const o=p((t=>t.gl)),n=f(r,v(t)?Object.values(t):t);if(s.useLayoutEffect((()=>{null==e||e(n)}),[e]),s.useEffect((()=>{(Array.isArray(n)?n:[n]).forEach(o.initTexture)}),[o,n]),v(t)){const e=Object.keys(t),o={};return e.forEach((t=>Object.assign(o,{[t]:n[e.indexOf(t)]}))),o}return n}function M(t=[0,0,0]){return function(t){return Array.isArray(t)}(t)?t:t instanceof e||t instanceof a?[t.x,t.y,t.z]:[t,t,t]}A.preload=t=>f.preload(r,t),A.clear=t=>f.clear(r,t);const O=s.forwardRef((function({debug:t,depthTest:o=!1,polygonOffsetFactor:n=-10,map:r,mesh:c,children:u,position:p,rotation:f,scale:d,...y},x){const g=s.useRef(null);s.useImperativeHandle(x,(()=>g.current));const b=s.useRef(null);return s.useLayoutEffect((()=>{const t=(null==c?void 0:c.current)||g.current.parent,o=g.current;if(!(t instanceof i))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const n={position:new e,rotation:new a,scale:new e(1,1,1)};if(t){m(n,{position:p,scale:d});const e=t.matrixWorld.clone();if(t.matrixWorld.identity(),f&&"number"!=typeof f)m(n,{rotation:f});else{const e=new l;e.position.copy(n.position),e.lookAt(t.position),"number"==typeof f&&e.rotateZ(f),m(n,{rotation:e.rotation})}return o.geometry=new j(t,n.position,n.rotation,n.scale),b.current&&(m(b.current,n),b.current.traverse((t=>t.raycast=()=>null))),t.matrixWorld=e,()=>{o.geometry.dispose()}}}),[c,...M(p),...M(d),...M(f)]),s.createElement("mesh",h({ref:g,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":n,"material-depthTest":o,"material-map":r},y),u,t&&s.createElement("mesh",{ref:b},s.createElement("boxGeometry",null),s.createElement("meshNormalMaterial",{wireframe:!0}),s.createElement("axesHelper",null)))})),z=s.forwardRef((({children:t,enabled:e=!0,speed:o=1,rotationIntensity:n=1,floatIntensity:r=1,floatingRange:i=[-.1,.1],...a},l)=>{const u=s.useRef(null),p=s.useRef(1e4*Math.random());return d((t=>{var s,a;if(!e||0===o)return;const l=p.current+t.clock.getElapsedTime();u.current.rotation.x=Math.cos(l/4*o)/8*n,u.current.rotation.y=Math.sin(l/4*o)/8*n,u.current.rotation.z=Math.sin(l/4*o)/20*n;let f=Math.sin(l/4*o)/10;f=c.mapLinear(f,-.1,.1,null!==(s=null==i?void 0:i[0])&&void 0!==s?s:-.1,null!==(a=null==i?void 0:i[1])&&void 0!==a?a:.1),u.current.position.y=f*r,u.current.updateMatrix()})),s.createElement("group",a,s.createElement("group",{ref:w([u,l]),matrixAutoUpdate:!1},t))})),R=t=>{const{imgUrl:e}=t,o=A(e);return u.jsxs(z,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[u.jsx("ambientLight",{intensity:.6}),u.jsx("directionalLight",{position:[0,0,.05]}),u.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[u.jsx("icosahedronGeometry",{args:[1,1]}),u.jsx("meshStandardMaterial",{color:"#d0d2d9",emissive:"#d0d2d9",emissiveIntensity:1,polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),u.jsx(O,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],flatShading:!0,map:o})]})]})},k=({icon:t})=>u.jsxs(y,{frameloop:"demand",gl:{preserveDrawingBuffer:!0},children:[u.jsxs(s.Suspense,{fallback:u.jsx(x,{}),children:[u.jsx(g,{enableZoom:!1}),u.jsx(R,{imgUrl:t})]}),u.jsx(b,{all:!0})]});export{k as default};
