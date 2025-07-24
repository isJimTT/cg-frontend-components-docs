import{d as b,ae as w,af as S,c as q,ag as z,ah as D,ai as v,v as k,aj as I,ak as _,al as W,am as h,an as B,ao as F}from"./iframe-CiolPNwv.js";import{P as A}from"./index-CZebOuYK.js";import"./initDefaultProps-CZpOG6Cc.js";import"./CheckOutlined-CIIIVjBf.js";import"./devWarning-MTSIIkhh.js";import"./useRefs-BWK2Gk1T.js";import"./index-D70oGXWT.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";const r=b({__name:"Progress",props:{type:{},percent:{},format:{type:Function},status:{},showInfo:{type:Boolean},strokeWidth:{},strokeLinecap:{},strokeColor:{},trailColor:{},width:{},success:{},size:{},steps:{},strokeDashArray:{},gapDegree:{},gapPosition:{}},setup(a){const o=a,p=w(),e=S(),c=q(()=>{const s={};return Object.keys(p).filter(t=>t.startsWith("on")).forEach(t=>{s[t]=p[t]}),s});return(s,t)=>(W(),z(k(A),I(o,_(c.value)),D({default:v(()=>[h(s.$slots,"default")]),_:2},[k(e).format?{name:"format",fn:v(n=>[h(s.$slots,"format",B(F(n||{})))]),key:"0"}:void 0]),1040))}});r.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"union",elements:[{name:'"line"'},{name:'"circle"'},{name:'"dashboard"'}]}},{name:"percent",required:!1,type:{name:"number"}},{name:"format",required:!1,type:{name:"TSFunctionType"}},{name:"status",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"exception"'},{name:'"normal"'},{name:'"active"'}]}},{name:"showInfo",required:!1,type:{name:"boolean"}},{name:"strokeWidth",required:!1,type:{name:"number"}},{name:"strokeLinecap",required:!1,type:{name:"union",elements:[{name:'"round"'},{name:'"butt"'},{name:'"square"'}]}},{name:"strokeColor",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"{ from: string; to: string; direction: string }"}]}},{name:"trailColor",required:!1,type:{name:"string"}},{name:"width",required:!1,type:{name:"number"}},{name:"success",required:!1,type:{name:"{ percent: number; strokeColor?: string }"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"small"'}]}},{name:"steps",required:!1,type:{name:"number"}},{name:"strokeDashArray",required:!1,type:{name:"string"}},{name:"gapDegree",required:!1,type:{name:"number"}},{name:"gapPosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]}}],slots:[{name:"format",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Progress/Progress.vue"]};const oe={title:"Components/Progress",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["line","circle","dashboard"],description:"类型"},percent:{control:{type:"range",min:0,max:100,step:1},description:"百分比"},status:{control:"select",options:["success","exception","normal","active"],description:"状态"},showInfo:{control:"boolean",description:"是否显示进度数值或状态图标"},strokeWidth:{control:"number",description:"进度条线的宽度"},strokeLinecap:{control:"select",options:["round","butt","square"],description:"进度条端点形状"},size:{control:"select",options:["default","small"],description:"进度条的尺寸"}}},i={args:{percent:30}},l={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" />
        <CgProgress :percent="50" status="active" />
        <CgProgress :percent="70" status="exception" />
        <CgProgress :percent="100" status="success" />
      </div>
    `})},g={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; gap: 16px;">
        <CgProgress type="circle" :percent="75" />
        <CgProgress type="circle" :percent="70" status="exception" />
        <CgProgress type="circle" :percent="100" status="success" />
      </div>
    `})},d={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; gap: 16px;">
        <CgProgress type="dashboard" :percent="75" />
        <CgProgress type="dashboard" :percent="70" status="exception" />
        <CgProgress type="dashboard" :percent="100" status="success" />
      </div>
    `})},m={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" size="small" />
        <CgProgress :percent="50" size="small" status="active" />
        <CgProgress :percent="70" size="small" status="exception" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="30" :width="80" />
          <CgProgress type="circle" :percent="70" :width="80" status="exception" />
          <CgProgress type="dashboard" :percent="75" :width="80" />
        </div>
      </div>
    `})},u={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" stroke-color="#1890ff" />
        <CgProgress :percent="50" stroke-color="#52c41a" />
        <CgProgress :percent="70" stroke-color="#faad14" />
        <CgProgress :percent="90" stroke-color="#f5222d" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="75" stroke-color="#1890ff" />
          <CgProgress type="circle" :percent="75" stroke-color="#52c41a" />
          <CgProgress type="dashboard" :percent="75" stroke-color="#faad14" />
        </div>
      </div>
    `})},f={render:()=>({components:{CgProgress:r},setup(){return{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeColorCircle:{"0%":"#108ee9","100%":"#87d068"}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="99.9" :stroke-color="strokeColor" />
        <CgProgress :percent="99.9" :stroke-color="strokeColor" status="active" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="90" :stroke-color="strokeColorCircle" />
          <CgProgress type="dashboard" :percent="90" :stroke-color="strokeColorCircle" />
        </div>
      </div>
    `})},C={render:()=>({components:{CgProgress:r},setup(){return{format:o=>`${o} Days`}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="75" :format="format" />
        <CgProgress type="circle" :percent="75" :format="format" />
        <CgProgress type="dashboard" :percent="75" :format="format" />
      </div>
    `})},y={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" :show-info="false" />
        <CgProgress :percent="50" :show-info="false" status="active" />
        <CgProgress :percent="70" :show-info="false" status="exception" />
      </div>
    `})},P={render:()=>({components:{CgProgress:r},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="50" :steps="3" />
        <CgProgress :percent="30" :steps="5" />
        <CgProgress :percent="100" :steps="5" status="success" />
        <CgProgress :percent="60" :steps="5" status="exception" />
      </div>
    `})},x={render:()=>({components:{CgProgress:r},setup(){const{ref:a,onMounted:o,onUnmounted:p}=require("vue"),e=a(0);let c;const s=()=>{const n=e.value+10;if(n>=100){e.value=100;return}e.value=n},t=()=>{const n=e.value-10;if(n<0){e.value=0;return}e.value=n};return o(()=>{c=setInterval(()=>{e.value<100?e.value+=1:e.value=0},100)}),p(()=>{c&&clearInterval(c)}),{percent:e,increase:s,decline:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="percent" />
        <CgProgress type="circle" :percent="percent" />
        <div style="display: flex; gap: 8px;">
          <button @click="decline" style="padding: 4px 8px;">-</button>
          <button @click="increase" style="padding: 4px 8px;">+</button>
        </div>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 30
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" />
        <CgProgress :percent="50" status="active" />
        <CgProgress :percent="70" status="exception" />
        <CgProgress :percent="100" status="success" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CgProgress type="circle" :percent="75" />
        <CgProgress type="circle" :percent="70" status="exception" />
        <CgProgress type="circle" :percent="100" status="success" />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CgProgress type="dashboard" :percent="75" />
        <CgProgress type="dashboard" :percent="70" status="exception" />
        <CgProgress type="dashboard" :percent="100" status="success" />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" size="small" />
        <CgProgress :percent="50" size="small" status="active" />
        <CgProgress :percent="70" size="small" status="exception" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="30" :width="80" />
          <CgProgress type="circle" :percent="70" :width="80" status="exception" />
          <CgProgress type="dashboard" :percent="75" :width="80" />
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" stroke-color="#1890ff" />
        <CgProgress :percent="50" stroke-color="#52c41a" />
        <CgProgress :percent="70" stroke-color="#faad14" />
        <CgProgress :percent="90" stroke-color="#f5222d" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="75" stroke-color="#1890ff" />
          <CgProgress type="circle" :percent="75" stroke-color="#52c41a" />
          <CgProgress type="dashboard" :percent="75" stroke-color="#faad14" />
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    setup() {
      const strokeColor = {
        '0%': '#108ee9',
        '100%': '#87d068'
      };
      const strokeColorCircle = {
        '0%': '#108ee9',
        '100%': '#87d068'
      };
      return {
        strokeColor,
        strokeColorCircle
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="99.9" :stroke-color="strokeColor" />
        <CgProgress :percent="99.9" :stroke-color="strokeColor" status="active" />
        <div style="display: flex; gap: 16px; margin-top: 16px;">
          <CgProgress type="circle" :percent="90" :stroke-color="strokeColorCircle" />
          <CgProgress type="dashboard" :percent="90" :stroke-color="strokeColorCircle" />
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    setup() {
      const format = (percent: number) => \`\${percent} Days\`;
      return {
        format
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="75" :format="format" />
        <CgProgress type="circle" :percent="75" :format="format" />
        <CgProgress type="dashboard" :percent="75" :format="format" />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="30" :show-info="false" />
        <CgProgress :percent="50" :show-info="false" status="active" />
        <CgProgress :percent="70" :show-info="false" status="exception" />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="50" :steps="3" />
        <CgProgress :percent="30" :steps="5" />
        <CgProgress :percent="100" :steps="5" status="success" />
        <CgProgress :percent="60" :steps="5" status="exception" />
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgProgress: Progress
    },
    setup() {
      const {
        ref,
        onMounted,
        onUnmounted
      } = require('vue');
      const percent = ref(0);
      let timer: NodeJS.Timeout;
      const increase = () => {
        const newPercent = percent.value + 10;
        if (newPercent >= 100) {
          percent.value = 100;
          return;
        }
        percent.value = newPercent;
      };
      const decline = () => {
        const newPercent = percent.value - 10;
        if (newPercent < 0) {
          percent.value = 0;
          return;
        }
        percent.value = newPercent;
      };
      onMounted(() => {
        timer = setInterval(() => {
          if (percent.value < 100) {
            percent.value += 1;
          } else {
            percent.value = 0;
          }
        }, 100);
      });
      onUnmounted(() => {
        if (timer) {
          clearInterval(timer);
        }
      });
      return {
        percent,
        increase,
        decline
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CgProgress :percent="percent" />
        <CgProgress type="circle" :percent="percent" />
        <div style="display: flex; gap: 8px;">
          <button @click="decline" style="padding: 4px 8px;">-</button>
          <button @click="increase" style="padding: 4px 8px;">+</button>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const ae=["Basic","WithStatus","Circle","Dashboard","SmallSize","CustomStrokeColor","GradientColor","CustomFormat","WithoutInfo","Steps","Dynamic"];export{i as Basic,g as Circle,C as CustomFormat,u as CustomStrokeColor,d as Dashboard,x as Dynamic,f as GradientColor,m as SmallSize,P as Steps,l as WithStatus,y as WithoutInfo,ae as __namedExportsOrder,oe as default};
