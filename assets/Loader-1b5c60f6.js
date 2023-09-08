import{u as e,c as t,_ as n,d as o}from"./react-three-fiber.esm-27106523.js";import{r as a,ap as r,W as i,c as s,a3 as c,a2 as l,aq as m,ar as u,a8 as d,as as h,y as p,at as f,au as b,j as g}from"./index-670e61a2.js";const v=new s,E=new s,y=new s;function P(e,t,n){const o=v.setFromMatrixPosition(e.matrixWorld);o.project(t);const a=n.width/2,r=n.height/2;return[o.x*a+a,-o.y*r+r]}const x=e=>Math.abs(e)<1e-10?0:e;function M(e,t,n=""){let o="matrix3d(";for(let a=0;16!==a;a++)o+=x(t[a]*e.elements[a])+(15!==a?",":")");return n+o}const w=(O=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>M(e,O));var O;const T=(e,t)=>{return M(e,[1/(n=t),1/n,1/n,1,-1/n,-1/n,-1/n,-1,1/n,1/n,1/n,1,1,1,1,1],"translate(-50%,-50%)");var n};const A=a.forwardRef((({children:o,eps:m=.001,style:u,className:d,prepend:h,center:p,fullscreen:f,portal:b,distanceFactor:g,sprite:M=!1,transform:O=!1,occlude:A,onOcclude:j,castShadow:L,receiveShadow:N,material:R,geometry:I,zIndexRange:S=[16777271,0],calculatePosition:k=P,as:z="div",wrapperClass:D,pointerEvents:Y="auto",...C},F)=>{const{gl:H,camera:_,scene:W,size:Z,raycaster:X,events:U,viewport:K}=e(),[$]=a.useState((()=>document.createElement(z))),V=a.useRef(),G=a.useRef(null),q=a.useRef(0),B=a.useRef([0,0]),Q=a.useRef(null),J=a.useRef(null),ee=(null==b?void 0:b.current)||U.connected||H.domElement.parentNode,te=a.useRef(null),ne=a.useRef(!1),oe=a.useMemo((()=>A&&"blending"!==A||Array.isArray(A)&&A.length&&function(e){return e&&"object"==typeof e&&"current"in e}(A[0])),[A]);a.useLayoutEffect((()=>{const e=H.domElement;A&&"blending"===A?(e.style.zIndex=`${Math.floor(S[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)}),[A]),a.useLayoutEffect((()=>{if(G.current){const e=V.current=r($);if(W.updateMatrixWorld(),O)$.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const e=k(G.current,_,Z);$.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return ee&&(h?ee.prepend($):ee.appendChild($)),()=>{ee&&ee.removeChild($),e.unmount()}}}),[ee,O]),a.useLayoutEffect((()=>{D&&($.className=D)}),[D]);const ae=a.useMemo((()=>O?{position:"absolute",top:0,left:0,width:Z.width,height:Z.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:p?"translate3d(-50%,-50%,0)":"none",...f&&{top:-Z.height/2,left:-Z.width/2,width:Z.width,height:Z.height},...u}),[u,p,f,Z,O]),re=a.useMemo((()=>({position:"absolute",pointerEvents:Y})),[Y]);a.useLayoutEffect((()=>{var e,t;(ne.current=!1,O)?null==(e=V.current)||e.render(a.createElement("div",{ref:Q,style:ae},a.createElement("div",{ref:J,style:re},a.createElement("div",{ref:F,className:d,style:u,children:o})))):null==(t=V.current)||t.render(a.createElement("div",{ref:F,style:ae,className:d,children:o}))}));const ie=a.useRef(!0);t((e=>{if(G.current){_.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);const e=O?B.current:k(G.current,_,Z);if(O||Math.abs(q.current-_.zoom)>m||Math.abs(B.current[0]-e[0])>m||Math.abs(B.current[1]-e[1])>m){const t=function(e,t){const n=v.setFromMatrixPosition(e.matrixWorld),o=E.setFromMatrixPosition(t.matrixWorld),a=n.sub(o),r=t.getWorldDirection(y);return a.angleTo(r)>Math.PI/2}(G.current,_);let n=!1;oe&&(Array.isArray(A)?n=A.map((e=>e.current)):"blending"!==A&&(n=[W]));const o=ie.current;if(n){const e=function(e,t,n,o){const a=v.setFromMatrixPosition(e.matrixWorld),r=a.clone();r.project(t),n.setFromCamera(r,t);const i=n.intersectObjects(o,!0);if(i.length){const e=i[0].distance;return a.distanceTo(n.ray.origin)<e}return!0}(G.current,_,X,n);ie.current=e&&!t}else ie.current=!t;o!==ie.current&&(j?j(!ie.current):$.style.display=ie.current?"block":"none");const a=Math.floor(S[0]/2),r=A?oe?[S[0],a]:[a-1,0]:S;if($.style.zIndex=`${function(e,t,n){if(t instanceof l||t instanceof c){const o=v.setFromMatrixPosition(e.matrixWorld),a=E.setFromMatrixPosition(t.matrixWorld),r=o.distanceTo(a),i=(n[1]-n[0])/(t.far-t.near),s=n[1]-i*t.far;return Math.round(i*r+s)}}(G.current,_,r)}`,O){const[e,t]=[Z.width/2,Z.height/2],n=_.projectionMatrix.elements[5]*t,{isOrthographicCamera:o,top:a,left:r,bottom:i,right:s}=_,c=w(_.matrixWorldInverse),l=o?`scale(${n})translate(${x(-(s+r)/2)}px,${x((a+i)/2)}px)`:`translateZ(${n}px)`;let m=G.current.matrixWorld;M&&(m=_.matrixWorldInverse.clone().transpose().copyPosition(m).scale(G.current.scale),m.elements[3]=m.elements[7]=m.elements[11]=0,m.elements[15]=1),$.style.width=Z.width+"px",$.style.height=Z.height+"px",$.style.perspective=o?"":`${n}px`,Q.current&&J.current&&(Q.current.style.transform=`${l}${c}translate(${e}px,${t}px)`,J.current.style.transform=T(m,1/((g||10)/400)))}else{const t=void 0===g?1:function(e,t){if(t instanceof c)return t.zoom;if(t instanceof l){const n=v.setFromMatrixPosition(e.matrixWorld),o=E.setFromMatrixPosition(t.matrixWorld),a=t.fov*Math.PI/180,r=n.distanceTo(o);return 1/(2*Math.tan(a/2)*r)}return 1}(G.current,_)*g;$.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}B.current=e,q.current=_.zoom}}if(!oe&&te.current&&!ne.current)if(O){if(Q.current){const e=Q.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){const{isOrthographicCamera:t}=_;if(t||I)C.scale&&(Array.isArray(C.scale)?C.scale instanceof s?te.current.scale.copy(C.scale.clone().divideScalar(1)):te.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):te.current.scale.setScalar(1/C.scale));else{const t=(g||10)/400,n=e.clientWidth*t,o=e.clientHeight*t;te.current.scale.set(n,o,1)}ne.current=!0}}}else{const t=$.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){const e=1/K.factor,n=t.clientWidth*e,o=t.clientHeight*e;te.current.scale.set(n,o,1),ne.current=!0}te.current.lookAt(e.camera.position)}}));const se=a.useMemo((()=>({vertexShader:O?void 0:'\n          /*\n            This shader is from the THREE\'s SpriteMaterial.\n            We need to turn the backing plane into a Sprite\n            (make it always face the camera) if "transfrom" \n            is false. \n          */\n          #include <common>\n\n          void main() {\n            vec2 center = vec2(0., 1.);\n            float rotation = 0.0;\n            \n            // This is somewhat arbitrary, but it seems to work well\n            // Need to figure out how to derive this dynamically if it even matters\n            float size = 0.03;\n\n            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n            vec2 scale;\n            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n            bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n            if ( isPerspective ) scale *= - mvPosition.z;\n\n            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;\n            vec2 rotatedPosition;\n            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n            mvPosition.xy += rotatedPosition;\n\n            gl_Position = projectionMatrix * mvPosition;\n          }\n      ',fragmentShader:"\n        void main() {\n          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n        }\n      "})),[O]);return a.createElement("group",n({},C,{ref:G}),A&&!oe&&a.createElement("mesh",{castShadow:L,receiveShadow:N,ref:te},I||a.createElement("planeGeometry",null),R||a.createElement("shaderMaterial",{side:i,vertexShader:se.vertexShader,fragmentShader:se.fragmentShader})))}));let j=0;const L=o((e=>(m.onStart=(t,n,o)=>{e({active:!0,item:t,loaded:n,total:o,progress:(n-j)/(o-j)*100})},m.onLoad=()=>{e({active:!1})},m.onError=t=>e((e=>({errors:[...e.errors,t]}))),m.onProgress=(t,n,o)=>{n===o&&(j=o),e({active:!0,item:t,loaded:n,total:o,progress:(n-j)/(o-j)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0})));var N=Object.defineProperty,R=(e,t,n)=>(((e,t,n)=>{t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const I=(e,t)=>(e%t+t)%t;let S=class extends u{constructor(e,t){super(),R(this,"object"),R(this,"domElement"),R(this,"enabled",!0),R(this,"target",new s),R(this,"minDistance",0),R(this,"maxDistance",1/0),R(this,"minZoom",0),R(this,"maxZoom",1/0),R(this,"minPolarAngle",0),R(this,"maxPolarAngle",Math.PI),R(this,"minAzimuthAngle",-1/0),R(this,"maxAzimuthAngle",1/0),R(this,"enableDamping",!1),R(this,"dampingFactor",.05),R(this,"enableZoom",!0),R(this,"zoomSpeed",1),R(this,"enableRotate",!0),R(this,"rotateSpeed",1),R(this,"enablePan",!0),R(this,"panSpeed",1),R(this,"screenSpacePanning",!0),R(this,"keyPanSpeed",7),R(this,"autoRotate",!1),R(this,"autoRotateSpeed",2),R(this,"reverseOrbit",!1),R(this,"reverseHorizontalOrbit",!1),R(this,"reverseVerticalOrbit",!1),R(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),R(this,"mouseButtons",{LEFT:f.ROTATE,MIDDLE:f.DOLLY,RIGHT:f.PAN}),R(this,"touches",{ONE:b.ROTATE,TWO:b.DOLLY_PAN}),R(this,"target0"),R(this,"position0"),R(this,"zoom0"),R(this,"_domElementKeyEvents",null),R(this,"getPolarAngle"),R(this,"getAzimuthalAngle"),R(this,"setPolarAngle"),R(this,"setAzimuthalAngle"),R(this,"getDistance"),R(this,"listenToKeyEvents"),R(this,"stopListenToKeyEvents"),R(this,"saveState"),R(this,"reset"),R(this,"update"),R(this,"connect"),R(this,"dispose"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=e=>{let t=I(e,2*Math.PI),o=g.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),v.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=I(e,2*Math.PI),o=g.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),v.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ne),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),m=i.NONE},this.update=(()=>{const t=new s,a=new s(0,1,0),r=(new d).setFromUnitVectors(e.up,a),c=r.clone().invert(),l=new s,h=new d,p=2*Math.PI;return function(){const s=n.object.position;r.setFromUnitVectors(e.up,a),c.copy(r).invert(),t.copy(s).sub(n.target),t.applyQuaternion(r),g.setFromVector3(t),n.autoRotate&&m===i.NONE&&D(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(g.theta+=v.theta*n.dampingFactor,g.phi+=v.phi*n.dampingFactor):(g.theta+=v.theta,g.phi+=v.phi);let d=n.minAzimuthAngle,f=n.maxAzimuthAngle;return isFinite(d)&&isFinite(f)&&(d<-Math.PI?d+=p:d>Math.PI&&(d-=p),f<-Math.PI?f+=p:f>Math.PI&&(f-=p),g.theta=d<=f?Math.max(d,Math.min(f,g.theta)):g.theta>(d+f)/2?Math.max(d,g.theta):Math.min(f,g.theta)),g.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,g.phi)),g.makeSafe(),g.radius*=E,g.radius=Math.max(n.minDistance,Math.min(n.maxDistance,g.radius)),!0===n.enableDamping?n.target.addScaledVector(y,n.dampingFactor):n.target.add(y),t.setFromSpherical(g),t.applyQuaternion(c),s.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,y.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),y.set(0,0,0)),E=1,!!(P||l.distanceToSquared(n.object.position)>u||8*(1-h.dot(n.object.quaternion))>u)&&(n.dispatchEvent(o),l.copy(n.object.position),h.copy(n.object.quaternion),P=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",oe),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",ee),n.domElement.addEventListener("wheel",te)},this.dispose=()=>{var e,t,o,a,r,i;null==(e=n.domElement)||e.removeEventListener("contextmenu",oe),null==(t=n.domElement)||t.removeEventListener("pointerdown",B),null==(o=n.domElement)||o.removeEventListener("pointercancel",ee),null==(a=n.domElement)||a.removeEventListener("wheel",te),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointermove",Q),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointerup",J),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ne)};const n=this,o={type:"change"},a={type:"start"},r={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let m=i.NONE;const u=1e-6,g=new h,v=new h;let E=1;const y=new s;let P=!1;const x=new p,M=new p,w=new p,O=new p,T=new p,A=new p,j=new p,L=new p,N=new p,S=[],k={};function z(){return Math.pow(.95,n.zoomSpeed)}function D(e){n.reverseOrbit||n.reverseHorizontalOrbit?v.theta+=e:v.theta-=e}function Y(e){n.reverseOrbit||n.reverseVerticalOrbit?v.phi+=e:v.phi-=e}const C=(()=>{const e=new s;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),y.add(e)}})(),F=(()=>{const e=new s;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),y.add(e)}})(),H=(()=>{const e=new s;return function(t,o){const a=n.domElement;if(a&&n.object instanceof l&&n.object.isPerspectiveCamera){const r=n.object.position;e.copy(r).sub(n.target);let i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),C(2*t*i/a.clientHeight,n.object.matrix),F(2*o*i/a.clientHeight,n.object.matrix)}else a&&n.object instanceof c&&n.object.isOrthographicCamera?(C(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),F(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function _(e){n.object instanceof l&&n.object.isPerspectiveCamera?E/=e:n.object instanceof c&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),P=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(e){n.object instanceof l&&n.object.isPerspectiveCamera?E*=e:n.object instanceof c&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),P=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(e){x.set(e.clientX,e.clientY)}function X(e){O.set(e.clientX,e.clientY)}function U(){if(1==S.length)x.set(S[0].pageX,S[0].pageY);else{const e=.5*(S[0].pageX+S[1].pageX),t=.5*(S[0].pageY+S[1].pageY);x.set(e,t)}}function K(){if(1==S.length)O.set(S[0].pageX,S[0].pageY);else{const e=.5*(S[0].pageX+S[1].pageX),t=.5*(S[0].pageY+S[1].pageY);O.set(e,t)}}function $(){const e=S[0].pageX-S[1].pageX,t=S[0].pageY-S[1].pageY,n=Math.sqrt(e*e+t*t);j.set(0,n)}function V(e){if(1==S.length)M.set(e.pageX,e.pageY);else{const t=ie(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);M.set(n,o)}w.subVectors(M,x).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(D(2*Math.PI*w.x/t.clientHeight),Y(2*Math.PI*w.y/t.clientHeight)),x.copy(M)}function G(e){if(1==S.length)T.set(e.pageX,e.pageY);else{const t=ie(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);T.set(n,o)}A.subVectors(T,O).multiplyScalar(n.panSpeed),H(A.x,A.y),O.copy(T)}function q(e){const t=ie(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);L.set(0,r),N.set(0,Math.pow(L.y/j.y,n.zoomSpeed)),_(N.y),j.copy(L)}function B(e){var t,o;!1!==n.enabled&&(0===S.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",Q),null==(o=n.domElement)||o.ownerDocument.addEventListener("pointerup",J)),function(e){S.push(e)}(e),"touch"===e.pointerType?function(e){switch(re(e),S.length){case 1:switch(n.touches.ONE){case b.ROTATE:if(!1===n.enableRotate)return;U(),m=i.TOUCH_ROTATE;break;case b.PAN:if(!1===n.enablePan)return;K(),m=i.TOUCH_PAN;break;default:m=i.NONE}break;case 2:switch(n.touches.TWO){case b.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&$(),n.enablePan&&K(),m=i.TOUCH_DOLLY_PAN;break;case b.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&$(),n.enableRotate&&U(),m=i.TOUCH_DOLLY_ROTATE;break;default:m=i.NONE}break;default:m=i.NONE}m!==i.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case f.DOLLY:if(!1===n.enableZoom)return;!function(e){j.set(e.clientX,e.clientY)}(e),m=i.DOLLY;break;case f.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;X(e),m=i.PAN}else{if(!1===n.enableRotate)return;Z(e),m=i.ROTATE}break;case f.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Z(e),m=i.ROTATE}else{if(!1===n.enablePan)return;X(e),m=i.PAN}break;default:m=i.NONE}m!==i.NONE&&n.dispatchEvent(a)}(e))}function Q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(re(e),m){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;V(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;G(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&q(e),n.enablePan&&G(e)}(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&q(e),n.enableRotate&&V(e)}(e),n.update();break;default:m=i.NONE}}(e):function(e){if(!1===n.enabled)return;switch(m){case i.ROTATE:if(!1===n.enableRotate)return;!function(e){M.set(e.clientX,e.clientY),w.subVectors(M,x).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(D(2*Math.PI*w.x/t.clientHeight),Y(2*Math.PI*w.y/t.clientHeight)),x.copy(M),n.update()}(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){L.set(e.clientX,e.clientY),N.subVectors(L,j),N.y>0?_(z()):N.y<0&&W(z()),j.copy(L),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){T.set(e.clientX,e.clientY),A.subVectors(T,O).multiplyScalar(n.panSpeed),H(A.x,A.y),O.copy(T),n.update()}(e)}}(e))}function J(e){var t,o,a;ae(e),0===S.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",Q),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",J)),n.dispatchEvent(r),m=i.NONE}function ee(e){ae(e)}function te(e){!1===n.enabled||!1===n.enableZoom||m!==i.NONE&&m!==i.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?W(z()):e.deltaY>0&&_(z()),n.update()}(e),n.dispatchEvent(r))}function ne(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:H(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:H(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:H(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:H(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function oe(e){!1!==n.enabled&&e.preventDefault()}function ae(e){delete k[e.pointerId];for(let t=0;t<S.length;t++)if(S[t].pointerId==e.pointerId)return void S.splice(t,1)}function re(e){let t=k[e.pointerId];void 0===t&&(t=new p,k[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ie(e){const t=e.pointerId===S[0].pointerId?S[1]:S[0];return k[t.pointerId]}void 0!==t&&this.connect(t),this.update()}};const k=a.forwardRef((({makeDefault:o,camera:r,regress:i,domElement:s,enableDamping:c=!0,keyEvents:l=!1,onChange:m,onStart:u,onEnd:d,...h},p)=>{const f=e((e=>e.invalidate)),b=e((e=>e.camera)),g=e((e=>e.gl)),v=e((e=>e.events)),E=e((e=>e.setEvents)),y=e((e=>e.set)),P=e((e=>e.get)),x=e((e=>e.performance)),M=r||b,w=s||v.connected||g.domElement,O=a.useMemo((()=>new S(M)),[M]);return t((()=>{O.enabled&&O.update()}),-1),a.useEffect((()=>(l&&O.connect(!0===l?w:l),O.connect(w),()=>{O.dispose()})),[l,w,i,O,f]),a.useEffect((()=>{const e=e=>{f(),i&&x.regress(),m&&m(e)},t=e=>{u&&u(e)},n=e=>{d&&d(e)};return O.addEventListener("change",e),O.addEventListener("start",t),O.addEventListener("end",n),()=>{O.removeEventListener("start",t),O.removeEventListener("end",n),O.removeEventListener("change",e)}}),[m,u,d,O,f,E]),a.useEffect((()=>{if(o){const e=P().controls;return y({controls:O}),()=>y({controls:e})}}),[o,O]),a.createElement("primitive",n({ref:p,object:O,enableDamping:c},h))})),z=()=>{const{progress:e}=L();return g.jsx(A,{children:g.jsx("span",{className:"canvas-load",children:g.jsxs("p",{style:{fontSize:14,color:"#f1f1f1",fontWeight:800,marginTop:40},children:[e.toFixed(2),"%"]})})})};export{z as L,k as O};
