import{_ as h,a as k,g as I,$ as De,e as w,d as z,P as g,s as me,y as Ee,o as $e,c as le,aO as je,b2 as ie,b5 as Ie,r as re,w as ze,b6 as Ae,G as We,H as _e,I as Ge,a7 as Ue,N as qe,ax as A,aA as E,b as R,ay as Ke,aB as Xe,u as Ye,ae as Je,af as Qe,ag as Ze,ah as et,ai as he,v as pe,aj as tt,ak as nt,al as at,am as fe,an as rt,ao as st}from"./iframe-CiolPNwv.js";import{B as de}from"./Trigger-D0k0f5w4.js";import{a as U}from"./addEventListener-CC7Mt4qC.js";import{s as Ve}from"./supportsPassive-CeduFZj4.js";import{K as D}from"./KeyCode-D63Tfrq7.js";import{i as ke}from"./initDefaultProps-CZpOG6Cc.js";import{b as ot,T as it}from"./index-D70oGXWT.js";import{w as ge}from"./raf-Deuc0E8-.js";import{u as lt}from"./FormItemContext-BKi0klUv.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./createContext-BoBCVfLB.js";const ue=(e,n)=>{let{attrs:t}=n;const{included:a,vertical:r,style:s,class:o}=t;let{length:i,offset:l,reverse:d}=t;i<0&&(d=!d,i=Math.abs(i),l=100-l);const u=r?{[d?"top":"bottom"]:`${l}%`,[d?"bottom":"top"]:"auto",height:`${i}%`}:{[d?"right":"left"]:`${l}%`,[d?"left":"right"]:"auto",width:`${i}%`},f=h(h({},s),u);return a?k("div",{class:o,style:f},null):null};ue.inheritAttrs=!1;const dt=(e,n,t,a,r,s)=>{const o=Object.keys(n).map(parseFloat).sort((i,l)=>i-l);if(t&&a)for(let i=r;i<=s;i+=a)o.indexOf(i)===-1&&o.push(i);return o},Be=(e,n)=>{let{attrs:t}=n;const{prefixCls:a,vertical:r,reverse:s,marks:o,dots:i,step:l,included:d,lowerBound:u,upperBound:f,max:b,min:$,dotStyle:y,activeDotStyle:B}=t,m=b-$,S=dt(r,o,i,l,$,b).map(c=>{const C=`${Math.abs(c-$)/m*100}%`,V=!d&&c===f||d&&c<=f&&c>=u;let x=r?h(h({},y),{[s?"top":"bottom"]:C}):h(h({},y),{[s?"right":"left"]:C});V&&(x=h(h({},x),B));const v=I({[`${a}-dot`]:!0,[`${a}-dot-active`]:V,[`${a}-dot-reverse`]:s});return k("span",{class:v,style:x,key:c},null)});return k("div",{class:`${a}-step`},[S])};Be.inheritAttrs=!1;const Te=(e,n)=>{let{attrs:t,slots:a}=n;const{class:r,vertical:s,reverse:o,marks:i,included:l,upperBound:d,lowerBound:u,max:f,min:b,onClickLabel:$}=t,y=Object.keys(i),B=a.mark,m=f-b,S=y.map(parseFloat).sort((c,C)=>c-C).map(c=>{const C=typeof i[c]=="function"?i[c]():i[c],V=typeof C=="object"&&!De(C);let x=V?C.label:C;if(!x&&x!==0)return null;B&&(x=B({point:c,label:x}));const v=!l&&c===d||l&&c<=d&&c>=u,p=I({[`${r}-text`]:!0,[`${r}-text-active`]:v}),T={marginBottom:"-50%",[o?"top":"bottom"]:`${(c-b)/m*100}%`},H={transform:`translateX(${o?"50%":"-50%"})`,msTransform:`translateX(${o?"50%":"-50%"})`,[o?"right":"left"]:`${(c-b)/m*100}%`},P=s?T:H,L=V?h(h({},P),C.style):P,M={[Ve?"onTouchstartPassive":"onTouchstart"]:O=>$(O,c)};return k("span",w({class:p,style:L,key:c,onMousedown:O=>$(O,c)},M),[x])});return k("div",{class:r},[S])};Te.inheritAttrs=!1;const Pe=z({compatConfig:{MODE:3},name:"Handle",inheritAttrs:!1,props:{prefixCls:String,vertical:{type:Boolean,default:void 0},offset:Number,disabled:{type:Boolean,default:void 0},min:Number,max:Number,value:Number,tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},ariaLabel:String,ariaLabelledBy:String,ariaValueTextFormatter:Function,onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function}},setup(e,n){let{attrs:t,emit:a,expose:r}=n;const s=me(!1),o=me(),i=()=>{document.activeElement===o.value&&(s.value=!0)},l=m=>{s.value=!1,a("blur",m)},d=()=>{s.value=!1},u=()=>{var m;(m=o.value)===null||m===void 0||m.focus()},f=()=>{var m;(m=o.value)===null||m===void 0||m.blur()},b=()=>{s.value=!0,u()},$=m=>{m.preventDefault(),u(),a("mousedown",m)};r({focus:u,blur:f,clickFocus:b,ref:o});let y=null;Ee(()=>{y=U(document,"mouseup",i)}),$e(()=>{y?.remove()});const B=le(()=>{const{vertical:m,offset:S,reverse:c}=e;return m?{[c?"top":"bottom"]:`${S}%`,[c?"bottom":"top"]:"auto",transform:c?null:"translateY(+50%)"}:{[c?"right":"left"]:`${S}%`,[c?"left":"right"]:"auto",transform:`translateX(${c?"+":"-"}50%)`}});return()=>{const{prefixCls:m,disabled:S,min:c,max:C,value:V,tabindex:x,ariaLabel:v,ariaLabelledBy:p,ariaValueTextFormatter:T,onMouseenter:H,onMouseleave:P}=e,L=I(t.class,{[`${m}-handle-click-focused`]:s.value}),M={"aria-valuemin":c,"aria-valuemax":C,"aria-valuenow":V,"aria-disabled":!!S},O=[t.style,B.value];let F=x||0;(S||x===null)&&(F=null);let _;T&&(_=T(V));const se=h(h(h(h({},t),{role:"slider",tabindex:F}),M),{class:L,onBlur:l,onKeydown:d,onMousedown:$,onMouseenter:H,onMouseleave:P,ref:o,style:O});return k("div",w(w({},se),{},{"aria-label":v,"aria-labelledby":p,"aria-valuetext":_}),null)}}});function oe(e,n){try{return Object.keys(n).some(t=>e.target===n[t].ref)}catch{return!1}}function we(e,n){let{min:t,max:a}=n;return e<t||e>a}function ve(e){return e.touches.length>1||e.type.toLowerCase()==="touchend"&&e.touches.length>0}function be(e,n){let{marks:t,step:a,min:r,max:s}=n;const o=Object.keys(t).map(parseFloat);if(a!==null){const l=Math.pow(10,Me(a)),d=Math.floor((s*l-r*l)/(a*l)),u=Math.min((e-r)/a,d),f=Math.round(u)*a+r;o.push(f)}const i=o.map(l=>Math.abs(e-l));return o[i.indexOf(Math.min(...i))]}function Me(e){const n=e.toString();let t=0;return n.indexOf(".")>=0&&(t=n.length-n.indexOf(".")-1),t}function ye(e,n){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?n.clientY:n.pageX)/t}function Se(e,n){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?n.touches[0].clientY:n.touches[0].pageX)/t}function xe(e,n){const t=n.getBoundingClientRect();return e?t.top+t.height*.5:window.scrollX+t.left+t.width*.5}function ce(e,n){let{max:t,min:a}=n;return e<=a?a:e>=t?t:e}function He(e,n){const{step:t}=n,a=isFinite(be(e,n))?be(e,n):0;return t===null?a:parseFloat(a.toFixed(Me(t)))}function W(e){e.stopPropagation(),e.preventDefault()}function ut(e,n,t){const a={increase:(o,i)=>o+i,decrease:(o,i)=>o-i},r=a[e](Object.keys(t.marks).indexOf(JSON.stringify(n)),1),s=Object.keys(t.marks)[r];return t.step?a[e](n,t.step):Object.keys(t.marks).length&&t.marks[s]?t.marks[s]:n}function Oe(e,n,t){const a="increase",r="decrease";let s=a;switch(e.keyCode){case D.UP:s=n&&t?r:a;break;case D.RIGHT:s=!n&&t?r:a;break;case D.DOWN:s=n&&t?a:r;break;case D.LEFT:s=!n&&t?a:r;break;case D.END:return(o,i)=>i.max;case D.HOME:return(o,i)=>i.min;case D.PAGE_UP:return(o,i)=>o+i.step*2;case D.PAGE_DOWN:return(o,i)=>o-i.step*2;default:return}return(o,i)=>ut(s,o,i)}var ct=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};function j(){}function Fe(e){const n={id:String,min:Number,max:Number,step:Number,marks:g.object,included:{type:Boolean,default:void 0},prefixCls:String,disabled:{type:Boolean,default:void 0},handle:Function,dots:{type:Boolean,default:void 0},vertical:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},minimumTrackStyle:g.object,maximumTrackStyle:g.object,handleStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),trackStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),railStyle:g.object,dotStyle:g.object,activeDotStyle:g.object,autofocus:{type:Boolean,default:void 0},draggableTrack:{type:Boolean,default:void 0}};return z({compatConfig:{MODE:3},name:"CreateSlider",mixins:[de,e],inheritAttrs:!1,props:ke(n,{prefixCls:"rc-slider",min:0,max:100,step:1,marks:{},included:!0,disabled:!1,dots:!1,vertical:!1,reverse:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),emits:["change","blur","focus"],data(){const{step:t,max:a,min:r}=this;return this.handlesRefs={},{}},mounted(){this.$nextTick(()=>{this.document=this.sliderRef&&this.sliderRef.ownerDocument;const{autofocus:t,disabled:a}=this;t&&!a&&this.focus()})},beforeUnmount(){this.$nextTick(()=>{this.removeDocumentEvents()})},methods:{defaultHandle(t){var{index:a,directives:r,className:s,style:o}=t,i=ct(t,["index","directives","className","style"]);if(delete i.dragging,i.value===null)return null;const l=h(h({},i),{class:s,style:o,key:a});return k(Pe,l,null)},onDown(t,a){let r=a;const{draggableTrack:s,vertical:o}=this.$props,{bounds:i}=this.$data,l=s&&this.positionGetValue?this.positionGetValue(r)||[]:[],d=oe(t,this.handlesRefs);if(this.dragTrack=s&&i.length>=2&&!d&&!l.map((u,f)=>{const b=f?!0:u>=i[f];return f===l.length-1?u<=i[f]:b}).some(u=>!u),this.dragTrack)this.dragOffset=r,this.startBounds=[...i];else{if(!d)this.dragOffset=0;else{const u=xe(o,t.target);this.dragOffset=r-u,r=u}this.onStart(r)}},onMouseDown(t){if(t.button!==0)return;this.removeDocumentEvents();const a=this.$props.vertical,r=ye(a,t);this.onDown(t,r),this.addDocumentMouseEvents()},onTouchStart(t){if(ve(t))return;const a=this.vertical,r=Se(a,t);this.onDown(t,r),this.addDocumentTouchEvents(),W(t)},onFocus(t){const{vertical:a}=this;if(oe(t,this.handlesRefs)&&!this.dragTrack){const r=xe(a,t.target);this.dragOffset=0,this.onStart(r),W(t),this.$emit("focus",t)}},onBlur(t){this.dragTrack||this.onEnd(),this.$emit("blur",t)},onMouseUp(){this.handlesRefs[this.prevMovedHandleIndex]&&this.handlesRefs[this.prevMovedHandleIndex].clickFocus()},onMouseMove(t){if(!this.sliderRef){this.onEnd();return}const a=ye(this.vertical,t);this.onMove(t,a-this.dragOffset,this.dragTrack,this.startBounds)},onTouchMove(t){if(ve(t)||!this.sliderRef){this.onEnd();return}const a=Se(this.vertical,t);this.onMove(t,a-this.dragOffset,this.dragTrack,this.startBounds)},onKeyDown(t){this.sliderRef&&oe(t,this.handlesRefs)&&this.onKeyboard(t)},onClickMarkLabel(t,a){t.stopPropagation(),this.onChange({sValue:a}),this.setState({sValue:a},()=>this.onEnd(!0))},getSliderStart(){const t=this.sliderRef,{vertical:a,reverse:r}=this,s=t.getBoundingClientRect();return a?r?s.bottom:s.top:window.scrollX+(r?s.right:s.left)},getSliderLength(){const t=this.sliderRef;if(!t)return 0;const a=t.getBoundingClientRect();return this.vertical?a.height:a.width},addDocumentTouchEvents(){this.onTouchMoveListener=U(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=U(this.document,"touchend",this.onEnd)},addDocumentMouseEvents(){this.onMouseMoveListener=U(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=U(this.document,"mouseup",this.onEnd)},removeDocumentEvents(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()},focus(){var t;this.$props.disabled||(t=this.handlesRefs[0])===null||t===void 0||t.focus()},blur(){this.$props.disabled||Object.keys(this.handlesRefs).forEach(t=>{var a,r;(r=(a=this.handlesRefs[t])===null||a===void 0?void 0:a.blur)===null||r===void 0||r.call(a)})},calcValue(t){const{vertical:a,min:r,max:s}=this,o=Math.abs(Math.max(t,0)/this.getSliderLength());return a?(1-o)*(s-r)+r:o*(s-r)+r},calcValueByPos(t){const r=(this.reverse?-1:1)*(t-this.getSliderStart());return this.trimAlignValue(this.calcValue(r))},calcOffset(t){const{min:a,max:r}=this,s=(t-a)/(r-a);return Math.max(0,s*100)},saveSlider(t){this.sliderRef=t},saveHandle(t,a){this.handlesRefs[t]=a}},render(){const{prefixCls:t,marks:a,dots:r,step:s,included:o,disabled:i,vertical:l,reverse:d,min:u,max:f,maximumTrackStyle:b,railStyle:$,dotStyle:y,activeDotStyle:B,id:m}=this,{class:S,style:c}=this.$attrs,{tracks:C,handles:V}=this.renderSlider(),x=I(t,S,{[`${t}-with-marks`]:Object.keys(a).length,[`${t}-disabled`]:i,[`${t}-vertical`]:l,[`${t}-horizontal`]:!l}),v={vertical:l,marks:a,included:o,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:f,min:u,reverse:d,class:`${t}-mark`,onClickLabel:i?j:this.onClickMarkLabel},p={[Ve?"onTouchstartPassive":"onTouchstart"]:i?j:this.onTouchStart};return k("div",w(w({id:m,ref:this.saveSlider,tabindex:"-1",class:x},p),{},{onMousedown:i?j:this.onMouseDown,onMouseup:i?j:this.onMouseUp,onKeydown:i?j:this.onKeyDown,onFocus:i?j:this.onFocus,onBlur:i?j:this.onBlur,style:c}),[k("div",{class:`${t}-rail`,style:h(h({},b),$)},null),C,k(Be,{prefixCls:t,vertical:l,reverse:d,marks:a,dots:r,step:s,included:o,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:f,min:u,dotStyle:y,activeDotStyle:B},null),V,k(Te,v,{mark:this.$slots.mark}),je(this)])}})}const mt=z({compatConfig:{MODE:3},name:"Slider",mixins:[de],inheritAttrs:!1,props:{defaultValue:Number,value:Number,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},min:Number,max:Number,ariaLabelForHandle:String,ariaLabelledByForHandle:String,ariaValueTextFormatterForHandle:String,startPoint:Number},emits:["beforeChange","afterChange","change"],data(){const e=this.defaultValue!==void 0?this.defaultValue:this.min,n=this.value!==void 0?this.value:e;return{sValue:this.trimAlignValue(n),dragging:!1}},watch:{value:{handler(e){this.setChangeValue(e)},deep:!0},min(){const{sValue:e}=this;this.setChangeValue(e)},max(){const{sValue:e}=this;this.setChangeValue(e)}},methods:{setChangeValue(e){const n=e!==void 0?e:this.sValue,t=this.trimAlignValue(n,this.$props);t!==this.sValue&&(this.setState({sValue:t}),we(n,this.$props)&&this.$emit("change",t))},onChange(e){const n=!ie(this,"value"),t=e.sValue>this.max?h(h({},e),{sValue:this.max}):e;n&&this.setState(t);const a=t.sValue;this.$emit("change",a)},onStart(e){this.setState({dragging:!0});const{sValue:n}=this;this.$emit("beforeChange",n);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e,t!==n&&(this.prevMovedHandleIndex=0,this.onChange({sValue:t}))},onEnd(e){const{dragging:n}=this;this.removeDocumentEvents(),(n||e)&&this.$emit("afterChange",this.sValue),this.setState({dragging:!1})},onMove(e,n){W(e);const{sValue:t}=this,a=this.calcValueByPos(n);a!==t&&this.onChange({sValue:a})},onKeyboard(e){const{reverse:n,vertical:t}=this.$props,a=Oe(e,t,n);if(a){W(e);const{sValue:r}=this,s=a(r,this.$props),o=this.trimAlignValue(s);if(o===r)return;this.onChange({sValue:o}),this.$emit("afterChange",o),this.onEnd()}},getLowerBound(){const e=this.$props.startPoint||this.$props.min;return this.$data.sValue>e?e:this.$data.sValue},getUpperBound(){return this.$data.sValue<this.$props.startPoint?this.$props.startPoint:this.$data.sValue},trimAlignValue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e===null)return null;const t=h(h({},this.$props),n),a=ce(e,t);return He(a,t)},getTrack(e){let{prefixCls:n,reverse:t,vertical:a,included:r,minimumTrackStyle:s,mergedTrackStyle:o,length:i,offset:l}=e;return k(ue,{class:`${n}-track`,vertical:a,included:r,offset:l,reverse:t,length:i,style:h(h({},s),o)},null)},renderSlider(){const{prefixCls:e,vertical:n,included:t,disabled:a,minimumTrackStyle:r,trackStyle:s,handleStyle:o,tabindex:i,ariaLabelForHandle:l,ariaLabelledByForHandle:d,ariaValueTextFormatterForHandle:u,min:f,max:b,startPoint:$,reverse:y,handle:B,defaultHandle:m}=this,S=B||m,{sValue:c,dragging:C}=this,V=this.calcOffset(c),x=S({class:`${e}-handle`,prefixCls:e,vertical:n,offset:V,value:c,dragging:C,disabled:a,min:f,max:b,reverse:y,index:0,tabindex:i,ariaLabel:l,ariaLabelledBy:d,ariaValueTextFormatter:u,style:o[0]||o,ref:T=>this.saveHandle(0,T),onFocus:this.onFocus,onBlur:this.onBlur}),v=$!==void 0?this.calcOffset($):0,p=s[0]||s;return{tracks:this.getTrack({prefixCls:e,reverse:y,vertical:n,included:t,offset:v,minimumTrackStyle:r,mergedTrackStyle:p,length:V-v}),handles:x}}}}),ht=Fe(mt),G=e=>{let{value:n,handle:t,bounds:a,props:r}=e;const{allowCross:s,pushable:o}=r,i=Number(o),l=ce(n,r);let d=l;return!s&&t!=null&&a!==void 0&&(t>0&&l<=a[t-1]+i&&(d=a[t-1]+i),t<a.length-1&&l>=a[t+1]-i&&(d=a[t+1]-i)),He(d,r)},pt={defaultValue:g.arrayOf(g.number),value:g.arrayOf(g.number),count:Number,pushable:Ie(g.oneOfType([g.looseBool,g.number])),allowCross:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},tabindex:g.arrayOf(g.number),prefixCls:String,min:Number,max:Number,autofocus:{type:Boolean,default:void 0},ariaLabelGroupForHandles:Array,ariaLabelledByGroupForHandles:Array,ariaValueTextFormatterGroupForHandles:Array,draggableTrack:{type:Boolean,default:void 0}},ft=z({compatConfig:{MODE:3},name:"Range",mixins:[de],inheritAttrs:!1,props:ke(pt,{count:1,allowCross:!0,pushable:!1,tabindex:[],draggableTrack:!1,ariaLabelGroupForHandles:[],ariaLabelledByGroupForHandles:[],ariaValueTextFormatterGroupForHandles:[]}),emits:["beforeChange","afterChange","change"],displayName:"Range",data(){const{count:e,min:n,max:t}=this,a=Array(...Array(e+1)).map(()=>n),r=ie(this,"defaultValue")?this.defaultValue:a;let{value:s}=this;s===void 0&&(s=r);const o=s.map((l,d)=>G({value:l,handle:d,props:this.$props}));return{sHandle:null,recent:o[0]===t?0:o.length-1,bounds:o}},watch:{value:{handler(e){const{bounds:n}=this;this.setChangeValue(e||n)},deep:!0},min(){const{value:e}=this;this.setChangeValue(e||this.bounds)},max(){const{value:e}=this;this.setChangeValue(e||this.bounds)}},methods:{setChangeValue(e){const{bounds:n}=this;let t=e.map((a,r)=>G({value:a,handle:r,bounds:n,props:this.$props}));if(n.length===t.length){if(t.every((a,r)=>a===n[r]))return null}else t=e.map((a,r)=>G({value:a,handle:r,props:this.$props}));if(this.setState({bounds:t}),e.some(a=>we(a,this.$props))){const a=e.map(r=>ce(r,this.$props));this.$emit("change",a)}},onChange(e){if(!ie(this,"value"))this.setState(e);else{const r={};["sHandle","recent"].forEach(s=>{e[s]!==void 0&&(r[s]=e[s])}),Object.keys(r).length&&this.setState(r)}const a=h(h({},this.$data),e).bounds;this.$emit("change",a)},positionGetValue(e){const n=this.getValue(),t=this.calcValueByPos(e),a=this.getClosestBound(t),r=this.getBoundNeedMoving(t,a),s=n[r];if(t===s)return null;const o=[...n];return o[r]=t,o},onStart(e){const{bounds:n}=this;this.$emit("beforeChange",n);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e;const a=this.getClosestBound(t);this.prevMovedHandleIndex=this.getBoundNeedMoving(t,a),this.setState({sHandle:this.prevMovedHandleIndex,recent:this.prevMovedHandleIndex});const r=n[this.prevMovedHandleIndex];if(t===r)return;const s=[...n];s[this.prevMovedHandleIndex]=t,this.onChange({bounds:s})},onEnd(e){const{sHandle:n}=this;this.removeDocumentEvents(),n||(this.dragTrack=!1),(n!==null||e)&&this.$emit("afterChange",this.bounds),this.setState({sHandle:null})},onMove(e,n,t,a){W(e);const{$data:r,$props:s}=this,o=s.max||100,i=s.min||0;if(t){let b=s.vertical?-n:n;b=s.reverse?-b:b;const $=o-Math.max(...a),y=i-Math.min(...a),B=Math.min(Math.max(b/(this.getSliderLength()/100),y),$),m=a.map(S=>Math.floor(Math.max(Math.min(S+B,o),i)));r.bounds.map((S,c)=>S===m[c]).some(S=>!S)&&this.onChange({bounds:m});return}const{bounds:l,sHandle:d}=this,u=this.calcValueByPos(n),f=l[d];u!==f&&this.moveTo(u)},onKeyboard(e){const{reverse:n,vertical:t}=this.$props,a=Oe(e,t,n);if(a){W(e);const{bounds:r,sHandle:s}=this,o=r[s===null?this.recent:s],i=a(o,this.$props),l=G({value:i,handle:s,bounds:r,props:this.$props});if(l===o)return;this.moveTo(l,!0)}},getClosestBound(e){const{bounds:n}=this;let t=0;for(let a=1;a<n.length-1;a+=1)e>=n[a]&&(t=a);return Math.abs(n[t+1]-e)<Math.abs(n[t]-e)&&(t+=1),t},getBoundNeedMoving(e,n){const{bounds:t,recent:a}=this;let r=n;const s=t[n+1]===t[n];return s&&t[a]===t[n]&&(r=a),s&&e!==t[n+1]&&(r=e<t[n+1]?n:n+1),r},getLowerBound(){return this.bounds[0]},getUpperBound(){const{bounds:e}=this;return e[e.length-1]},getPoints(){const{marks:e,step:n,min:t,max:a}=this,r=this.internalPointsCache;if(!r||r.marks!==e||r.step!==n){const s=h({},e);if(n!==null)for(let i=t;i<=a;i+=n)s[i]=i;const o=Object.keys(s).map(parseFloat);o.sort((i,l)=>i-l),this.internalPointsCache={marks:e,step:n,points:o}}return this.internalPointsCache.points},moveTo(e,n){const t=[...this.bounds],{sHandle:a,recent:r}=this,s=a===null?r:a;t[s]=e;let o=s;this.$props.pushable!==!1?this.pushSurroundingHandles(t,o):this.$props.allowCross&&(t.sort((i,l)=>i-l),o=t.indexOf(e)),this.onChange({recent:o,sHandle:o,bounds:t}),n&&(this.$emit("afterChange",t),this.setState({},()=>{this.handlesRefs[o].focus()}),this.onEnd())},pushSurroundingHandles(e,n){const t=e[n],{pushable:a}=this,r=Number(a);let s=0;if(e[n+1]-t<r&&(s=1),t-e[n-1]<r&&(s=-1),s===0)return;const o=n+s,i=s*(e[o]-t);this.pushHandle(e,o,s,r-i)||(e[n]=e[o]-s*r)},pushHandle(e,n,t,a){const r=e[n];let s=e[n];for(;t*(s-r)<a;){if(!this.pushHandleOnePoint(e,n,t))return e[n]=r,!1;s=e[n]}return!0},pushHandleOnePoint(e,n,t){const a=this.getPoints(),s=a.indexOf(e[n])+t;if(s>=a.length||s<0)return!1;const o=n+t,i=a[s],{pushable:l}=this,d=Number(l),u=t*(e[o]-i);return this.pushHandle(e,o,t,d-u)?(e[n]=i,!0):!1},trimAlignValue(e){const{sHandle:n,bounds:t}=this;return G({value:e,handle:n,bounds:t,props:this.$props})},ensureValueNotConflict(e,n,t){let{allowCross:a,pushable:r}=t;const s=this.$data||{},{bounds:o}=s;if(e=e===void 0?s.sHandle:e,r=Number(r),!a&&e!=null&&o!==void 0){if(e>0&&n<=o[e-1]+r)return o[e-1]+r;if(e<o.length-1&&n>=o[e+1]-r)return o[e+1]-r}return n},getTrack(e){let{bounds:n,prefixCls:t,reverse:a,vertical:r,included:s,offsets:o,trackStyle:i}=e;return n.slice(0,-1).map((l,d)=>{const u=d+1,f=I({[`${t}-track`]:!0,[`${t}-track-${u}`]:!0});return k(ue,{class:f,vertical:r,reverse:a,included:s,offset:o[u-1],length:o[u]-o[u-1],style:i[d],key:u},null)})},renderSlider(){const{sHandle:e,bounds:n,prefixCls:t,vertical:a,included:r,disabled:s,min:o,max:i,reverse:l,handle:d,defaultHandle:u,trackStyle:f,handleStyle:b,tabindex:$,ariaLabelGroupForHandles:y,ariaLabelledByGroupForHandles:B,ariaValueTextFormatterGroupForHandles:m}=this,S=d||u,c=n.map(x=>this.calcOffset(x)),C=`${t}-handle`,V=n.map((x,v)=>{let p=$[v]||0;(s||$[v]===null)&&(p=null);const T=e===v;return S({class:I({[C]:!0,[`${C}-${v+1}`]:!0,[`${C}-dragging`]:T}),prefixCls:t,vertical:a,dragging:T,offset:c[v],value:x,index:v,tabindex:p,min:o,max:i,reverse:l,disabled:s,style:b[v],ref:H=>this.saveHandle(v,H),onFocus:this.onFocus,onBlur:this.onBlur,ariaLabel:y[v],ariaLabelledBy:B[v],ariaValueTextFormatter:m[v]})});return{tracks:this.getTrack({bounds:n,prefixCls:t,reverse:l,vertical:a,included:r,offsets:c,trackStyle:f}),handles:V}}}}),gt=Fe(ft),vt=z({compatConfig:{MODE:3},name:"SliderTooltip",inheritAttrs:!1,props:ot(),setup(e,n){let{attrs:t,slots:a}=n;const r=re(null),s=re(null);function o(){ge.cancel(s.value),s.value=null}function i(){s.value=ge(()=>{var d;(d=r.value)===null||d===void 0||d.forcePopupAlign(),s.value=null})}const l=()=>{o(),e.open&&i()};return ze([()=>e.open,()=>e.title],()=>{l()},{flush:"post",immediate:!0}),Ae(()=>{l()}),$e(()=>{o()}),()=>k(it,w(w({ref:r},e),t),a)}}),bt=e=>{const{componentCls:n,controlSize:t,dotSize:a,marginFull:r,marginPart:s,colorFillContentHover:o}=e;return{[n]:h(h({},Ge(e)),{position:"relative",height:t,margin:`${s}px ${r}px`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${r}px ${s}px`},[`${n}-rail`]:{position:"absolute",backgroundColor:e.colorFillTertiary,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${n}-track`]:{position:"absolute",backgroundColor:e.colorPrimaryBorder,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},"&:hover":{[`${n}-rail`]:{backgroundColor:e.colorFillSecondary},[`${n}-track`]:{backgroundColor:e.colorPrimaryBorderHover},[`${n}-dot`]:{borderColor:o},[`${n}-handle::after`]:{boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`},[`${n}-dot-active`]:{borderColor:e.colorPrimary}},[`${n}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none",[`${n}-dragging`]:{zIndex:1},"&::before":{content:'""',position:"absolute",insetInlineStart:-e.handleLineWidth,insetBlockStart:-e.handleLineWidth,width:e.handleSize+e.handleLineWidth*2,height:e.handleSize+e.handleLineWidth*2,backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),insetBlockStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),width:e.handleSizeHover+e.handleLineWidthHover*2,height:e.handleSizeHover+e.handleLineWidthHover*2},"&::after":{boxShadow:`0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:(e.handleSize-e.handleSizeHover)/2,insetBlockStart:(e.handleSize-e.handleSizeHover)/2}}},[`${n}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${n}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${n}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${n}-dot`]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:`${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,"&-active":{borderColor:e.colorPrimaryBorder}},[`&${n}-disabled`]:{cursor:"not-allowed",[`${n}-rail`]:{backgroundColor:`${e.colorFillSecondary} !important`},[`${n}-track`]:{backgroundColor:`${e.colorTextDisabled} !important`},[`
          ${n}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed"},[`${n}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${e.handleLineWidth}px ${new Ue(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,insetInlineStart:0,insetBlockStart:0},[`
          ${n}-mark-text,
          ${n}-dot
        `]:{cursor:"not-allowed !important"}}})}},Ne=(e,n)=>{const{componentCls:t,railSize:a,handleSize:r,dotSize:s}=e,o=n?"paddingBlock":"paddingInline",i=n?"width":"height",l=n?"height":"width",d=n?"insetBlockStart":"insetInlineStart",u=n?"top":"insetInlineStart";return{[o]:a,[l]:a*3,[`${t}-rail`]:{[i]:"100%",[l]:a},[`${t}-track`]:{[l]:a},[`${t}-handle`]:{[d]:(a*3-r)/2},[`${t}-mark`]:{insetInlineStart:0,top:0,[u]:r,[i]:"100%"},[`${t}-step`]:{insetInlineStart:0,top:0,[u]:a,[i]:"100%",[l]:a},[`${t}-dot`]:{position:"absolute",[d]:(a-s)/2}}},yt=e=>{const{componentCls:n,marginPartWithMark:t}=e;return{[`${n}-horizontal`]:h(h({},Ne(e,!0)),{[`&${n}-with-marks`]:{marginBottom:t}})}},St=e=>{const{componentCls:n}=e;return{[`${n}-vertical`]:h(h({},Ne(e,!1)),{height:"100%"})}},xt=We("Slider",e=>{const n=_e(e,{marginPart:(e.controlHeight-e.controlSize)/2,marginFull:e.controlSize/2,marginPartWithMark:e.controlHeightLG-e.controlSize});return[bt(n),yt(n),St(n)]},e=>{const t=e.controlHeightLG/4,a=e.controlHeightSM/2,r=e.lineWidth+1,s=e.lineWidth+1*3;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:a,dotSize:8,handleLineWidth:r,handleLineWidthHover:s}});var Ce=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Ct=e=>typeof e=="number"?e.toString():"",$t=()=>({id:String,prefixCls:String,tooltipPrefixCls:String,range:E([Boolean,Object]),reverse:R(),min:Number,max:Number,step:E([Object,Number]),marks:Xe(),dots:R(),value:E([Array,Number]),defaultValue:E([Array,Number]),included:R(),disabled:R(),vertical:R(),tipFormatter:E([Function,Object],()=>Ct),tooltipOpen:R(),tooltipVisible:R(),tooltipPlacement:Ke(),getTooltipPopupContainer:A(),autofocus:R(),handleStyle:E([Array,Object]),trackStyle:E([Array,Object]),onChange:A(),onAfterChange:A(),onFocus:A(),onBlur:A(),"onUpdate:value":A()}),Vt=z({compatConfig:{MODE:3},name:"ASlider",inheritAttrs:!1,props:$t(),slots:Object,setup(e,n){let{attrs:t,slots:a,emit:r,expose:s}=n;const{prefixCls:o,rootPrefixCls:i,direction:l,getPopupContainer:d,configProvider:u}=Ye("slider",e),[f,b]=xt(o),$=lt(),y=re(),B=re({}),m=(p,T)=>{B.value[p]=T},S=le(()=>e.tooltipPlacement?e.tooltipPlacement:e.vertical?l.value==="rtl"?"left":"right":"top"),c=()=>{var p;(p=y.value)===null||p===void 0||p.focus()},C=()=>{var p;(p=y.value)===null||p===void 0||p.blur()},V=p=>{r("update:value",p),r("change",p),$.onFieldChange()},x=p=>{r("blur",p)};s({focus:c,blur:C});const v=p=>{var{tooltipPrefixCls:T}=p,H=p.info,{value:P,dragging:L,index:M}=H,O=Ce(H,["value","dragging","index"]);const{tipFormatter:F,tooltipOpen:_=e.tooltipVisible,getTooltipPopupContainer:se}=e,Le=F?B.value[M]||L:!1,Re=_||_===void 0&&Le;return k(vt,{prefixCls:T,title:F?F(P):"",open:Re,placement:S.value,transitionName:`${i.value}-zoom-down`,key:M,overlayClassName:`${o.value}-tooltip`,getPopupContainer:se||d?.value},{default:()=>[k(Pe,w(w({},O),{},{value:P,onMouseenter:()=>m(M,!0),onMouseleave:()=>m(M,!1)}),null)]})};return()=>{const{tooltipPrefixCls:p,range:T,id:H=$.id.value}=e,P=Ce(e,["tooltipPrefixCls","range","id"]),L=u.getPrefixCls("tooltip",p),M=I(t.class,{[`${o.value}-rtl`]:l.value==="rtl"},b.value);l.value==="rtl"&&!P.vertical&&(P.reverse=!P.reverse);let O;return typeof T=="object"&&(O=T.draggableTrack),f(T?k(gt,w(w(w({},t),P),{},{step:P.step,draggableTrack:O,class:M,ref:y,handle:F=>v({tooltipPrefixCls:L,prefixCls:o.value,info:F}),prefixCls:o.value,onChange:V,onBlur:x}),{mark:a.mark}):k(ht,w(w(w({},t),P),{},{id:H,step:P.step,class:M,ref:y,handle:F=>v({tooltipPrefixCls:L,prefixCls:o.value,info:F}),prefixCls:o.value,onChange:V,onBlur:x}),{mark:a.mark}))}}}),kt=qe(Vt),N=z({__name:"Slider",props:{disabled:{type:Boolean},dots:{type:Boolean},included:{type:Boolean},marks:{},max:{},min:{},range:{type:Boolean},reverse:{type:Boolean},step:{},tipFormatter:{type:[Function,null]},value:{},defaultValue:{},vertical:{type:Boolean},tooltipVisible:{type:Boolean},tooltipPlacement:{},getTooltipPopupContainer:{type:Function}},setup(e){const n=e,t=Je(),a=Qe(),r=le(()=>{const s={};return Object.keys(t).filter(o=>o.startsWith("on")).forEach(o=>{s[o]=t[o]}),s});return(s,o)=>(at(),Ze(pe(kt),tt(n,nt(r.value)),et({default:he(()=>[fe(s.$slots,"default")]),_:2},[pe(a).mark?{name:"mark",fn:he(i=>[fe(s.$slots,"mark",rt(st(i||{})))]),key:"0"}:void 0]),1040))}});N.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"dots",required:!1,type:{name:"boolean"}},{name:"included",required:!1,type:{name:"boolean"}},{name:"marks",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"union",elements:[{name:"string"},{name:"{ style: Record<string, any>; label: string }"}]}]}},{name:"max",required:!1,type:{name:"number"}},{name:"min",required:!1,type:{name:"number"}},{name:"range",required:!1,type:{name:"boolean"}},{name:"reverse",required:!1,type:{name:"boolean"}},{name:"step",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"tipFormatter",required:!1,type:{name:"union",elements:[{name:"TSParenthesizedType"},{name:"null"}]}},{name:"value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"tuple",elements:[{name:"number"},{name:"number"}]}]}},{name:"defaultValue",required:!1,type:{name:"union",elements:[{name:"number"},{name:"tuple",elements:[{name:"number"},{name:"number"}]}]}},{name:"vertical",required:!1,type:{name:"boolean"}},{name:"tooltipVisible",required:!1,type:{name:"boolean"}},{name:"tooltipPlacement",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"left"'},{name:'"right"'},{name:'"bottom"'},{name:'"topLeft"'},{name:'"topRight"'},{name:'"bottomLeft"'},{name:'"bottomRight"'},{name:'"leftTop"'},{name:'"leftBottom"'},{name:'"rightTop"'},{name:'"rightBottom"'}]}},{name:"getTooltipPopupContainer",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"mark",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Slider/Slider.vue"]};const Xt={title:"Components/Slider",component:N,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"值为 true 时，滑块为禁用状态"},dots:{control:"boolean",description:"是否只能拖拽到刻度上"},included:{control:"boolean",description:"marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列"},max:{control:"number",description:"最大值"},min:{control:"number",description:"最小值"},range:{control:"boolean",description:"双滑块模式"},reverse:{control:"boolean",description:"反向坐标轴"},step:{control:"number",description:"步长，取值必须大于 0，并且可被 (max - min) 整除"},vertical:{control:"boolean",description:"值为 true 时，Slider 为垂直方向"},value:{control:"number",description:"设置当前取值"},defaultValue:{control:"number",description:"设置初始取值"}}},q={args:{defaultValue:30}},K={args:{defaultValue:30,step:10}},X={args:{defaultValue:30,step:10,dots:!0}},Y={render:()=>({components:{CgSlider:N},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgSlider :default-value="30" disabled />
        <CgSlider range :default-value="[20, 50]" disabled />
      </div>
    `})},J={args:{range:!0,defaultValue:[20,50]}},Q={render:()=>({components:{CgSlider:N},setup(){return{marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}}}},template:`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <CgSlider :marks="marks" :default-value="37" />
        <CgSlider range :marks="marks" :default-value="[26, 37]" />
      </div>
    `})},Z={render:()=>({components:{CgSlider:N},setup(){return{marks:{0:"0°C",26:"26°C",37:"37°C",100:"100°C"}}},template:`
      <div style="display: flex; gap: 32px; height: 300px;">
        <CgSlider vertical :default-value="30" />
        <CgSlider vertical range :default-value="[20, 50]" />
        <CgSlider vertical :marks="marks" :default-value="60" />
      </div>
    `})},ee={render:()=>({components:{CgSlider:N},setup(){return{formatter:n=>`${n}%`}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgSlider :tip-formatter="formatter" :default-value="37" />
        <CgSlider :tip-formatter="null" :default-value="37" />
      </div>
    `})},te={render:()=>({components:{CgSlider:N},setup(){return{marks:{0:"0°C",26:"26°C",37:"37°C",100:"100°C"}}},template:`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="margin-bottom: 16px;">Normal</div>
          <CgSlider :marks="marks" :default-value="37" />
        </div>
        <div>
          <div style="margin-bottom: 16px;">Reverse</div>
          <CgSlider reverse :marks="marks" :default-value="37" />
        </div>
      </div>
    `})},ne={render:()=>({components:{CgSlider:N},setup(){const{ref:e}=require("vue"),n=e(30),t=e([20,50]);return{value:n,rangeValue:t,handleChange:s=>{n.value=s},handleRangeChange:s=>{t.value=s}}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px;">Single Value: {{ value }}</div>
          <CgSlider :value="value" @change="handleChange" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Range Value: {{ rangeValue }}</div>
          <CgSlider range :value="rangeValue" @change="handleRangeChange" />
        </div>
      </div>
    `})},ae={render:()=>({components:{CgSlider:N},setup(){const{ref:e}=require("vue"),n=e(1);return{value:n,handleChange:a=>{isNaN(a)||(n.value=a)}}},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="flex: 1;">
          <CgSlider 
            :min="1" 
            :max="20" 
            :value="value" 
            @change="handleChange" 
          />
        </div>
        <input 
          type="number" 
          :value="value" 
          @input="handleChange($event.target.value)"
          :min="1" 
          :max="20"
          style="width: 80px; padding: 4px 8px; border: 1px solid #d9d9d9; border-radius: 4px;"
        />
      </div>
    `})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30
  }
}`,...q.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    step: 10
  }
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30,
    step: 10,
    dots: true
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgSlider :default-value="30" disabled />
        <CgSlider range :default-value="[20, 50]" disabled />
      </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    range: true,
    defaultValue: [20, 50]
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const marks = {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50'
          },
          label: '100°C'
        }
      };
      return {
        marks
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <CgSlider :marks="marks" :default-value="37" />
        <CgSlider range :marks="marks" :default-value="[26, 37]" />
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const marks = {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: '100°C'
      };
      return {
        marks
      };
    },
    template: \`
      <div style="display: flex; gap: 32px; height: 300px;">
        <CgSlider vertical :default-value="30" />
        <CgSlider vertical range :default-value="[20, 50]" />
        <CgSlider vertical :marks="marks" :default-value="60" />
      </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const formatter = (value: number) => \`\${value}%\`;
      return {
        formatter
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgSlider :tip-formatter="formatter" :default-value="37" />
        <CgSlider :tip-formatter="null" :default-value="37" />
      </div>
    \`
  })
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const marks = {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: '100°C'
      };
      return {
        marks
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <div style="margin-bottom: 16px;">Normal</div>
          <CgSlider :marks="marks" :default-value="37" />
        </div>
        <div>
          <div style="margin-bottom: 16px;">Reverse</div>
          <CgSlider reverse :marks="marks" :default-value="37" />
        </div>
      </div>
    \`
  })
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const {
        ref
      } = require('vue');
      const value = ref(30);
      const rangeValue = ref([20, 50]);
      const handleChange = (val: number) => {
        value.value = val;
      };
      const handleRangeChange = (val: [number, number]) => {
        rangeValue.value = val;
      };
      return {
        value,
        rangeValue,
        handleChange,
        handleRangeChange
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px;">Single Value: {{ value }}</div>
          <CgSlider :value="value" @change="handleChange" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Range Value: {{ rangeValue }}</div>
          <CgSlider range :value="rangeValue" @change="handleRangeChange" />
        </div>
      </div>
    \`
  })
}`,...ne.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSlider: Slider
    },
    setup() {
      const {
        ref
      } = require('vue');
      const value = ref(1);
      const handleChange = (val: number) => {
        if (isNaN(val)) return;
        value.value = val;
      };
      return {
        value,
        handleChange
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="flex: 1;">
          <CgSlider 
            :min="1" 
            :max="20" 
            :value="value" 
            @change="handleChange" 
          />
        </div>
        <input 
          type="number" 
          :value="value" 
          @input="handleChange($event.target.value)"
          :min="1" 
          :max="20"
          style="width: 80px; padding: 4px 8px; border: 1px solid #d9d9d9; border-radius: 4px;"
        />
      </div>
    \`
  })
}`,...ae.parameters?.docs?.source}}};const Yt=["Basic","WithStep","WithDots","Disabled","Range","WithMarks","Vertical","CustomTipFormatter","Reverse","Interactive","WithInputNumber"];export{q as Basic,ee as CustomTipFormatter,Y as Disabled,ne as Interactive,J as Range,te as Reverse,Z as Vertical,X as WithDots,ae as WithInputNumber,Q as WithMarks,K as WithStep,Yt as __namedExportsOrder,Xt as default};
