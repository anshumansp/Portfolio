import{r as t,R as e,j as s}from"./index-9e137b5f.js";var i=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,l=(t,e,s)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))r.call(e,s)&&l(t,s,e[s]);if(a)for(var s of a(e))h.call(e,s)&&l(t,s,e[s]);return t},p=(t,e)=>n(t,o(e)),c=class extends t.Component{constructor(t){super(t),this.ref=e.createRef(),this.state={style:{}};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout((()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()}),0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(t=(()=>{}),e){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:p(u({},this.state.style),{willChange:"transform"})})),this.setTransition(),t(e)}reset(){window.requestAnimationFrame((()=>{this.setState(Object.assign({},this.state,{style:p(u({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))}))}onMouseMove(t=(()=>{}),e){return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.update.bind(this,e)),t(e)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:p(u({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout((()=>{this.setState(Object.assign({},this.state,{style:p(u({},this.state.style),{transition:""})}))}),this.settings.speed)}onMouseLeave(t=(()=>{}),e){return this.setTransition(),this.settings.reset&&this.reset(),t(e)}getValues(t){const e=(t.nativeEvent.clientX-this.left)/this.width,s=(t.nativeEvent.clientY-this.top)/this.height,i=Math.min(Math.max(e,0),1),n=Math.min(Math.max(s,0),1);return{tiltX:(this.reverse*(this.settings.max/2-i*this.settings.max)).toFixed(2),tiltY:(this.reverse*(n*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*i,percentageY:100*n}}updateElementPosition(){const t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(t){const e=this.getValues(t);this.setState(Object.assign({},this.state,{style:p(u({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${"x"===this.settings.axis?0:e.tiltY}deg) rotateY(${"y"===this.settings.axis?0:e.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const t=Object.assign({},this.props.style,this.state.style);return s.jsx("div",{style:t,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};export{c as T};
