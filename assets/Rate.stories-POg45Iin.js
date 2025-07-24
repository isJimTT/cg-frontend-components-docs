import{a as x,M as ie,d as q,P as H,c as Y,G as ce,H as ue,_ as V,I as de,N as fe,u as pe,r as me,m as ve,w as ge,y as he,g as Ce,e as G,B as ye,ae as xe,af as be,ag as Re,ah as Se,ai as k,v as U,aj as we,ak as Ve,al as He,am as J,an as $e,ao as Fe}from"./iframe-CiolPNwv.js";import{K as D}from"./KeyCode-D63Tfrq7.js";import{T as De}from"./index-D70oGXWT.js";import{u as Be}from"./useRefs-BWK2Gk1T.js";import{u as ze}from"./FormItemContext-BKi0klUv.js";import{i as Oe}from"./initDefaultProps-CZpOG6Cc.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./createContext-BoBCVfLB.js";function Ie(e){let a=e.scrollX;const t="scrollLeft";if(typeof a!="number"){const r=e.document;a=r.documentElement[t],typeof a!="number"&&(a=r.body[t])}return a}function Ne(e){let a,t;const r=e.ownerDocument,{body:s}=r,d=r&&r.documentElement,f=e.getBoundingClientRect();return a=f.left,t=f.top,a-=d.clientLeft||s.clientLeft||0,t-=d.clientTop||s.clientTop||0,{left:a,top:t}}function Te(e){const a=Ne(e),t=e.ownerDocument,r=t.defaultView||t.parentWindow;return a.left+=Ie(r),a.left}var Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};function Q(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?Object(arguments[a]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){Ae(e,s,t[s])})}return e}function Ae(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var M=function(a,t){var r=Q({},a,t.attrs);return x(ie,Q({},r,{icon:Le}),null)};M.displayName="StarFilled";M.inheritAttrs=!1;const Ee={value:Number,index:Number,prefixCls:String,allowHalf:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},character:H.any,characterRender:Function,focused:{type:Boolean,default:void 0},count:Number,onClick:Function,onHover:Function},Pe=q({compatConfig:{MODE:3},name:"Star",inheritAttrs:!1,props:Ee,emits:["hover","click"],setup(e,a){let{emit:t}=a;const r=o=>{const{index:p}=e;t("hover",o,p)},s=o=>{const{index:p}=e;t("click",o,p)},d=o=>{const{index:p}=e;o.keyCode===13&&t("click",o,p)},f=Y(()=>{const{prefixCls:o,index:p,value:h,allowHalf:C,focused:v}=e,y=p+1;let g=o;return h===0&&p===0&&v?g+=` ${o}-focused`:C&&h+.5>=y&&h<y?(g+=` ${o}-half ${o}-active`,v&&(g+=` ${o}-focused`)):(g+=y<=h?` ${o}-full`:` ${o}-zero`,y===h&&v&&(g+=` ${o}-focused`)),g});return()=>{const{disabled:o,prefixCls:p,characterRender:h,character:C,index:v,count:y,value:g}=e,n=typeof C=="function"?C({disabled:o,prefixCls:p,index:v,count:y,value:g}):C;let R=x("li",{class:f.value},[x("div",{onClick:o?null:s,onKeydown:o?null:d,onMousemove:o?null:r,role:"radio","aria-checked":g>v?"true":"false","aria-posinset":v+1,"aria-setsize":y,tabindex:o?-1:0},[x("div",{class:`${p}-first`},[n]),x("div",{class:`${p}-second`},[n])])]);return h&&(R=h(R,e)),R}}}),_e=e=>{const{componentCls:a}=e;return{[`${a}-star`]:{position:"relative",display:"inline-block",color:"inherit",cursor:"pointer","&:not(:last-child)":{marginInlineEnd:e.marginXS},"> div":{transition:`all ${e.motionDurationMid}, outline 0s`,"&:hover":{transform:e.rateStarHoverScale},"&:focus":{outline:0},"&:focus-visible":{outline:`${e.lineWidth}px dashed ${e.rateStarColor}`,transform:e.rateStarHoverScale}},"&-first, &-second":{color:e.defaultColor,transition:`all ${e.motionDurationMid}`,userSelect:"none",[e.iconCls]:{verticalAlign:"middle"}},"&-first":{position:"absolute",top:0,insetInlineStart:0,width:"50%",height:"100%",overflow:"hidden",opacity:0},[`&-half ${a}-star-first, &-half ${a}-star-second`]:{opacity:1},[`&-half ${a}-star-first, &-full ${a}-star-second`]:{color:"inherit"}}}},qe=e=>({[`&-rtl${e.componentCls}`]:{direction:"rtl"}}),Me=e=>{const{componentCls:a}=e;return{[a]:V(V(V(V(V({},de(e)),{display:"inline-block",margin:0,padding:0,color:e.rateStarColor,fontSize:e.rateStarSize,lineHeight:"unset",listStyle:"none",outline:"none",[`&-disabled${a} ${a}-star`]:{cursor:"default","&:hover":{transform:"scale(1)"}}}),_e(e)),{[`+ ${a}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,fontSize:e.fontSize}}),qe(e))}},je=ce("Rate",e=>{const{colorFillContent:a}=e,t=ue(e,{rateStarColor:e["yellow-6"],rateStarSize:e.controlHeightLG*.5,rateStarHoverScale:"scale(1.1)",defaultColor:a});return[Me(t)]}),We=()=>({prefixCls:String,count:Number,value:Number,allowHalf:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},tooltips:Array,disabled:{type:Boolean,default:void 0},character:H.any,autofocus:{type:Boolean,default:void 0},tabindex:H.oneOfType([H.number,H.string]),direction:String,id:String,onChange:Function,onHoverChange:Function,"onUpdate:value":Function,onFocus:Function,onBlur:Function,onKeydown:Function}),Ke=q({compatConfig:{MODE:3},name:"ARate",inheritAttrs:!1,props:Oe(We(),{value:0,count:5,allowHalf:!1,allowClear:!0,tabindex:0,direction:"ltr"}),setup(e,a){let{slots:t,attrs:r,emit:s,expose:d}=a;const{prefixCls:f,direction:o}=pe("rate",e),[p,h]=je(f),C=ze(),v=me(),[y,g]=Be(),n=ve({value:e.value,focused:!1,cleanedValue:null,hoverValue:void 0});ge(()=>e.value,()=>{n.value=e.value});const R=l=>ye(g.value.get(l)),j=(l,c)=>{const i=o.value==="rtl";let u=l+1;if(e.allowHalf){const m=R(l),$=Te(m),F=m.clientWidth;(i&&c-$>F/2||!i&&c-$<F/2)&&(u-=.5)}return u},S=l=>{e.value===void 0&&(n.value=l),s("update:value",l),s("change",l),C.onFieldChange()},Z=(l,c)=>{const i=j(c,l.pageX);i!==n.cleanedValue&&(n.hoverValue=i,n.cleanedValue=null),s("hoverChange",i)},W=()=>{n.hoverValue=void 0,n.cleanedValue=null,s("hoverChange",void 0)},ee=(l,c)=>{const{allowClear:i}=e,u=j(c,l.pageX);let m=!1;i&&(m=u===n.value),W(),S(m?0:u),n.cleanedValue=m?u:null},ae=l=>{n.focused=!0,s("focus",l)},te=l=>{n.focused=!1,s("blur",l),C.onFieldBlur()},ne=l=>{const{keyCode:c}=l,{count:i,allowHalf:u}=e,m=o.value==="rtl";c===D.RIGHT&&n.value<i&&!m?(u?n.value+=.5:n.value+=1,S(n.value),l.preventDefault()):c===D.LEFT&&n.value>0&&!m||c===D.RIGHT&&n.value>0&&m?(u?n.value-=.5:n.value-=1,S(n.value),l.preventDefault()):c===D.LEFT&&n.value<i&&m&&(u?n.value+=.5:n.value+=1,S(n.value),l.preventDefault()),s("keydown",l)},K=()=>{e.disabled||v.value.focus()};d({focus:K,blur:()=>{e.disabled||v.value.blur()}}),he(()=>{const{autofocus:l,disabled:c}=e;l&&!c&&K()});const le=(l,c)=>{let{index:i}=c;const{tooltips:u}=e;return u?x(De,{title:u[i]},{default:()=>[l]}):l};return()=>{const{count:l,allowHalf:c,disabled:i,tabindex:u,id:m=C.id.value}=e,{class:$,style:F}=r,X=[],oe=i?`${f.value}-disabled`:"",re=e.character||t.character||(()=>x(M,null,null));for(let w=0;w<l;w++)X.push(x(Pe,{ref:y(w),key:w,index:w,count:l,disabled:i,prefixCls:`${f.value}-star`,allowHalf:c,value:n.hoverValue===void 0?n.value:n.hoverValue,onClick:ee,onHover:Z,character:re,characterRender:le,focused:n.focused},null));const se=Ce(f.value,oe,$,{[h.value]:!0,[`${f.value}-rtl`]:o.value==="rtl"});return p(x("ul",G(G({},r),{},{id:m,class:se,style:F,onMouseleave:i?null:W,tabindex:i?-1:u,onFocus:i?null:ae,onBlur:i?null:te,onKeydown:i?null:ne,ref:v,role:"radiogroup"}),[X]))}}}),Xe=fe(Ke),b=q({__name:"Rate",props:{allowClear:{type:Boolean},allowHalf:{type:Boolean},autoFocus:{type:Boolean},character:{},count:{},disabled:{type:Boolean},tooltips:{},value:{},defaultValue:{}},setup(e){const a=e,t=xe(),r=be(),s=Y(()=>{const d={};return Object.keys(t).filter(f=>f.startsWith("on")).forEach(f=>{d[f]=t[f]}),d});return(d,f)=>(He(),Re(U(Xe),we(a,Ve(s.value)),Se({default:k(()=>[J(d.$slots,"default")]),_:2},[U(r).character?{name:"character",fn:k(o=>[J(d.$slots,"character",$e(Fe(o||{})))]),key:"0"}:void 0]),1040))}});b.__docgenInfo={exportName:"default",displayName:"Rate",description:"",tags:{},props:[{name:"allowClear",required:!1,type:{name:"boolean"}},{name:"allowHalf",required:!1,type:{name:"boolean"}},{name:"autoFocus",required:!1,type:{name:"boolean"}},{name:"character",required:!1,type:{name:"string"}},{name:"count",required:!1,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"tooltips",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"value",required:!1,type:{name:"number"}},{name:"defaultValue",required:!1,type:{name:"number"}}],slots:[{name:"character",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Rate/Rate.vue"]};const Ca={title:"Components/Rate",component:b,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{allowClear:{control:"boolean",description:"是否允许再次点击后清除"},allowHalf:{control:"boolean",description:"是否允许半选"},autoFocus:{control:"boolean",description:"自动获取焦点"},character:{control:"text",description:"自定义字符"},count:{control:"number",description:"star 总数"},disabled:{control:"boolean",description:"只读，无法进行交互"},value:{control:{type:"range",min:0,max:5,step:.5},description:"当前数，受控值"},defaultValue:{control:{type:"range",min:0,max:5,step:.5},description:"默认值"}}},B={args:{defaultValue:3}},z={args:{allowHalf:!0,defaultValue:2.5}},O={args:{tooltips:["terrible","bad","normal","good","wonderful"],defaultValue:3}},I={args:{disabled:!0,defaultValue:3}},N={args:{allowClear:!1,defaultValue:3}},T={render:()=>({components:{CgRate:b},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgRate character="A" :allow-half="true" :default-value="2.5" />
        <CgRate character="好" :default-value="3" />
        <CgRate character="❤" :default-value="3" />
      </div>
    `})},L={render:()=>({components:{CgRate:b},template:`
      <CgRate :default-value="3">
        <template #character="{ index }">
          <span style="font-size: 20px;">😀</span>
        </template>
      </CgRate>
    `})},A={render:()=>({components:{CgRate:b},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">Small (16px)</div>
          <CgRate :default-value="3" style="font-size: 16px;" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Default (20px)</div>
          <CgRate :default-value="3" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Large (24px)</div>
          <CgRate :default-value="3" style="font-size: 24px;" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Extra Large (32px)</div>
          <CgRate :default-value="3" style="font-size: 32px;" />
        </div>
      </div>
    `})},E={render:()=>({components:{CgRate:b},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">3 Stars</div>
          <CgRate :count="3" :default-value="2" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">5 Stars (Default)</div>
          <CgRate :default-value="3" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">10 Stars</div>
          <CgRate :count="10" :default-value="6" />
        </div>
      </div>
    `})},P={render:()=>({components:{CgRate:b},setup(){const{ref:e}=require("vue"),a=e(3),t=e(0);return{value:a,hoverValue:t,handleChange:d=>{a.value=d},handleHoverChange:d=>{t.value=d}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgRate 
          :value="value" 
          @change="handleChange"
          @hover-change="handleHoverChange"
        />
        <div>
          <div>Current Value: {{ value }}</div>
          <div>Hover Value: {{ hoverValue }}</div>
        </div>
      </div>
    `})},_={render:()=>({components:{CgRate:b},setup(){const{ref:e}=require("vue"),a=e(3);return{value:a,desc:["terrible","bad","normal","good","wonderful"],handleChange:s=>{a.value=s}}},template:`
      <div style="display: flex; align-items: center; gap: 8px;">
        <CgRate 
          :tooltips="desc"
          :value="value" 
          @change="handleChange"
        />
        <span style="margin-left: 8px;">{{ desc[value - 1] }}</span>
      </div>
    `})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    allowHalf: true,
    defaultValue: 2.5
  }
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
    defaultValue: 3
  }
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 3
  }
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: false,
    defaultValue: 3
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgRate character="A" :allow-half="true" :default-value="2.5" />
        <CgRate character="好" :default-value="3" />
        <CgRate character="❤" :default-value="3" />
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    template: \`
      <CgRate :default-value="3">
        <template #character="{ index }">
          <span style="font-size: 20px;">😀</span>
        </template>
      </CgRate>
    \`
  })
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">Small (16px)</div>
          <CgRate :default-value="3" style="font-size: 16px;" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Default (20px)</div>
          <CgRate :default-value="3" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Large (24px)</div>
          <CgRate :default-value="3" style="font-size: 24px;" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">Extra Large (32px)</div>
          <CgRate :default-value="3" style="font-size: 32px;" />
        </div>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">3 Stars</div>
          <CgRate :count="3" :default-value="2" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">5 Stars (Default)</div>
          <CgRate :default-value="3" />
        </div>
        <div>
          <div style="margin-bottom: 8px;">10 Stars</div>
          <CgRate :count="10" :default-value="6" />
        </div>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    setup() {
      const {
        ref
      } = require('vue');
      const value = ref(3);
      const hoverValue = ref(0);
      const handleChange = (val: number) => {
        value.value = val;
      };
      const handleHoverChange = (val: number) => {
        hoverValue.value = val;
      };
      return {
        value,
        hoverValue,
        handleChange,
        handleHoverChange
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgRate 
          :value="value" 
          @change="handleChange"
          @hover-change="handleHoverChange"
        />
        <div>
          <div>Current Value: {{ value }}</div>
          <div>Hover Value: {{ hoverValue }}</div>
        </div>
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRate: Rate
    },
    setup() {
      const {
        ref
      } = require('vue');
      const value = ref(3);
      const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
      const handleChange = (val: number) => {
        value.value = val;
      };
      return {
        value,
        desc,
        handleChange
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 8px;">
        <CgRate 
          :tooltips="desc"
          :value="value" 
          @change="handleChange"
        />
        <span style="margin-left: 8px;">{{ desc[value - 1] }}</span>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};const ya=["Basic","AllowHalf","ShowTooltips","ReadOnly","AllowClear","CustomCharacter","CustomCharacterSlot","DifferentSizes","CustomCount","Interactive","WithText"];export{N as AllowClear,z as AllowHalf,B as Basic,T as CustomCharacter,L as CustomCharacterSlot,E as CustomCount,A as DifferentSizes,P as Interactive,I as ReadOnly,O as ShowTooltips,_ as WithText,ya as __namedExportsOrder,Ca as default};
