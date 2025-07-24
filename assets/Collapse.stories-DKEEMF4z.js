import{ax as K,b as P,ay as ee,P as W,aA as le,G as $e,H as we,_ as I,I as Se,aX as Ae,d as _,r as Ce,w as Ie,u as ce,c as te,g as F,a as g,e as X,aY as Ke,a6 as Be,aU as Ee,$ as _e,s as Re,n as Te,a2 as Ne,a3 as Oe,a1 as He,ae as ie,af as ge,ag as ue,ah as me,ai as B,v as ae,aj as Pe,ak as ye,al as he,am as E,an as ne,ao as oe}from"./iframe-CiolPNwv.js";import{c as pe}from"./vnode-B4SLhmi3.js";import{R as je}from"./RightOutlined-_q3ZrV7U.js";import{f as Me}from"./firstNotUndefined-CLFzEa0p.js";import{g as De,c as Ve}from"./collapseMotion-DlFXgzvQ.js";import{i as fe}from"./initDefaultProps-CZpOG6Cc.js";import{d as ze}from"./devWarning-MTSIIkhh.js";const Ge=()=>({prefixCls:String,activeKey:le([Array,Number,String]),defaultActiveKey:le([Array,Number,String]),accordion:P(),destroyInactivePanel:P(),bordered:P(),expandIcon:K(),openAnimation:W.object,expandIconPosition:ee(),collapsible:ee(),ghost:P(),onChange:K(),"onUpdate:activeKey":K()}),xe=()=>({openAnimation:W.object,prefixCls:String,header:W.any,headerClass:String,showArrow:P(),isActive:P(),destroyInactivePanel:P(),disabled:P(),accordion:P(),forceRender:P(),expandIcon:K(),extra:W.any,panelKey:le(),collapsible:ee(),role:String,onItemClick:K()}),Ue=l=>{const{componentCls:e,collapseContentBg:a,padding:r,collapseContentPaddingHorizontal:p,collapseHeaderBg:s,collapseHeaderPadding:o,collapsePanelBorderRadius:d,lineWidth:u,lineType:f,colorBorder:v,colorText:k,colorTextHeading:h,colorTextDisabled:x,fontSize:$,lineHeight:b,marginSM:w,paddingSM:n,motionDurationSlow:t,fontSizeIcon:C}=l,c=`${u}px ${f} ${v}`;return{[e]:I(I({},Se(l)),{backgroundColor:s,border:c,borderBottom:0,borderRadius:`${d}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:c,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:o,color:h,lineHeight:b,cursor:"pointer",transition:`all ${t}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:$*b,display:"flex",alignItems:"center",paddingInlineEnd:w},[`${e}-arrow`]:I(I({},Ae()),{fontSize:C,svg:{transition:`transform ${t}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"},[`${e}-expand-icon`]:{cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:n}}},[`${e}-content`]:{color:k,backgroundColor:a,borderTop:c,[`& > ${e}-content-box`]:{padding:`${r}px ${p}px`},"&-hidden":{display:"none"}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:x,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:w}}}}})}},We=l=>{const{componentCls:e}=l,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},Fe=l=>{const{componentCls:e,collapseHeaderBg:a,paddingXXS:r,colorBorder:p}=l;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${p}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:r}}}},Xe=l=>{const{componentCls:e,paddingSM:a}=l;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Le=$e("Collapse",l=>{const e=we(l,{collapseContentBg:l.colorBgContainer,collapseHeaderBg:l.colorFillAlter,collapseHeaderPadding:`${l.paddingSM}px ${l.padding}px`,collapsePanelBorderRadius:l.borderRadiusLG,collapseContentPaddingHorizontal:16});return[Ue(e),Fe(e),Xe(e),We(e),De(e)]});function de(l){let e=l;if(!Array.isArray(e)){const a=typeof e;e=a==="number"||a==="string"?[e]:[]}return e.map(a=>String(a))}const A=_({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:fe(Ge(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,expandIconPosition:"start"}),slots:Object,setup(l,e){let{attrs:a,slots:r,emit:p}=e;const s=Ce(de(Me([l.activeKey,l.defaultActiveKey])));Ie(()=>l.activeKey,()=>{s.value=de(l.activeKey)},{deep:!0});const{prefixCls:o,direction:d,rootPrefixCls:u}=ce("collapse",l),[f,v]=Le(o),k=te(()=>{const{expandIconPosition:n}=l;return n!==void 0?n:d.value==="rtl"?"end":"start"}),h=n=>{const{expandIcon:t=r.expandIcon}=l,C=t?t(n):g(je,{rotate:n.isActive?90:void 0},null);return g("div",{class:[`${o.value}-expand-icon`,v.value],onClick:()=>["header","icon"].includes(l.collapsible)&&$(n.panelKey)},[_e(Array.isArray(t)?C[0]:C)?pe(C,{class:`${o.value}-arrow`},!1):C])},x=n=>{l.activeKey===void 0&&(s.value=n);const t=l.accordion?n[0]:n;p("update:activeKey",t),p("change",t)},$=n=>{let t=s.value;if(l.accordion)t=t[0]===n?[]:[n];else{t=[...t];const C=t.indexOf(n);C>-1?t.splice(C,1):t.push(n)}x(t)},b=(n,t)=>{var C,c,S;if(Ee(n))return;const i=s.value,{accordion:R,destroyInactivePanel:L,collapsible:T,openAnimation:Y}=l,q=Y||Ve(`${u.value}-motion-collapse`),N=String((C=n.key)!==null&&C!==void 0?C:t),{header:be=(S=(c=n.children)===null||c===void 0?void 0:c.header)===null||S===void 0?void 0:S.call(c),headerClass:ve,collapsible:J,disabled:re}=n.props||{};let Q=!1;R?Q=i[0]===N:Q=i.indexOf(N)>-1;let Z=J??T;(re||re==="")&&(Z="disabled");const ke={key:N,panelKey:N,header:be,headerClass:ve,isActive:Q,prefixCls:o.value,destroyInactivePanel:L,openAnimation:q,accordion:R,onItemClick:Z==="disabled"?null:$,expandIcon:h,collapsible:Z};return pe(n,ke)},w=()=>{var n;return Be((n=r.default)===null||n===void 0?void 0:n.call(r)).map(b)};return()=>{const{accordion:n,bordered:t,ghost:C}=l,c=F(o.value,{[`${o.value}-borderless`]:!t,[`${o.value}-icon-position-${k.value}`]:!0,[`${o.value}-rtl`]:d.value==="rtl",[`${o.value}-ghost`]:!!C,[a.class]:!!a.class},v.value);return f(g("div",X(X({class:c},Ke(a)),{},{style:a.style,role:n?"tablist":null}),[w()]))}}}),Ye=_({compatConfig:{MODE:3},name:"PanelContent",props:xe(),setup(l,e){let{slots:a}=e;const r=Re(!1);return Te(()=>{(l.isActive||l.forceRender)&&(r.value=!0)}),()=>{var p;if(!r.value)return null;const{prefixCls:s,isActive:o,role:d}=l;return g("div",{class:F(`${s}-content`,{[`${s}-content-active`]:o,[`${s}-content-inactive`]:!o}),role:d},[g("div",{class:`${s}-content-box`},[(p=a.default)===null||p===void 0?void 0:p.call(a)])])}}}),se=_({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:fe(xe(),{showArrow:!0,isActive:!1,onItemClick(){},headerClass:"",forceRender:!1}),slots:Object,setup(l,e){let{slots:a,emit:r,attrs:p}=e;ze(l.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');const{prefixCls:s}=ce("collapse",l),o=()=>{r("itemClick",l.panelKey)},d=u=>{(u.key==="Enter"||u.keyCode===13||u.which===13)&&o()};return()=>{var u,f;const{header:v=(u=a.header)===null||u===void 0?void 0:u.call(a),headerClass:k,isActive:h,showArrow:x,destroyInactivePanel:$,accordion:b,forceRender:w,openAnimation:n,expandIcon:t=a.expandIcon,extra:C=(f=a.extra)===null||f===void 0?void 0:f.call(a),collapsible:c}=l,S=c==="disabled",i=s.value,R=F(`${i}-header`,{[k]:k,[`${i}-header-collapsible-only`]:c==="header",[`${i}-icon-collapsible-only`]:c==="icon"}),L=F({[`${i}-item`]:!0,[`${i}-item-active`]:h,[`${i}-item-disabled`]:S,[`${i}-no-arrow`]:!x,[`${p.class}`]:!!p.class});let T=g("i",{class:"arrow"},null);x&&typeof t=="function"&&(T=t(l));const Y=Ne(g(Ye,{prefixCls:i,isActive:h,forceRender:w,role:b?"tabpanel":null},{default:a.default}),[[Oe,h]]),q=I({appear:!1,css:!1},n);return g("div",X(X({},p),{},{class:L}),[g("div",{class:R,onClick:()=>!["header","icon"].includes(c)&&o(),role:b?"tab":"button",tabindex:S?-1:0,"aria-expanded":h,onKeypress:d},[x&&T,g("span",{onClick:()=>c==="header"&&o(),class:`${i}-header-text`},[v]),C&&g("div",{class:`${i}-extra`},[C])]),g(He,q,{default:()=>[!$||h?Y:null]})])}}});A.Panel=se;A.install=function(l){return l.component(A.name,A),l.component(se.name,se),l};const m=_({__name:"Collapse",setup(l){const e=l,a=ie(),r=ge(),p=te(()=>{const s={};return Object.keys(a).filter(o=>o.startsWith("on")).forEach(o=>{s[o]=a[o]}),s});return(s,o)=>(he(),ue(ae(A),Pe(e,ye(p.value)),me({default:B(()=>[E(s.$slots,"default")]),_:2},[ae(r).expandIcon?{name:"expandIcon",fn:B(d=>[E(s.$slots,"expandIcon",ne(oe(d||{})))]),key:"0"}:void 0]),1040))}});m.__docgenInfo={exportName:"default",displayName:"Collapse",description:"",tags:{},slots:[{name:"expandIcon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Collapse/Collapse.vue"]};const y=_({__name:"CollapsePanel",setup(l){const e=A.Panel,a=l,r=ie();ge();const p=te(()=>{const s={};return Object.keys(r).filter(o=>o.startsWith("on")).forEach(o=>{s[o]=r[o]}),s});return(s,o)=>(he(),ue(ae(e),Pe(a,ye(p.value)),me({default:B(()=>[E(s.$slots,"default")]),_:2},[s.$slots.header?{name:"header",fn:B(d=>[E(s.$slots,"header",ne(oe(d||{})))]),key:"0"}:void 0,s.$slots.extra?{name:"extra",fn:B(d=>[E(s.$slots,"extra",ne(oe(d||{})))]),key:"1"}:void 0]),1040))}});y.__docgenInfo={exportName:"default",displayName:"CollapsePanel",description:"",tags:{},slots:[{name:"header",scoped:!0,bindings:[]},{name:"extra",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Collapse/CollapsePanel.vue"]};const nl={title:"Components/Collapse",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeKey:{control:{type:"text"},description:"当前激活 tab 面板的 key"},bordered:{control:"boolean",description:"带边框风格的折叠面板",defaultValue:!0},collapsible:{control:{type:"select",options:["header","disabled"]},description:"所有子面板是否可折叠或指定可折叠触发区域"},defaultActiveKey:{control:{type:"text"},description:"初始化选中面板的 key"},destroyInactivePanel:{control:"boolean",description:"销毁折叠隐藏的面板",defaultValue:!1},expandIconPosition:{control:{type:"select",options:["left","right"]},description:"设置图标位置",defaultValue:"left"},ghost:{control:"boolean",description:"使折叠面板透明且无边框",defaultValue:!1},accordion:{control:"boolean",description:"手风琴模式",defaultValue:!1}}},O={render:l=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){const e=Ce(["1"]);return{args:l,activeKey:e,onChange:r=>{console.log(r)}}},template:`
      <CgCollapse v-model:activeKey="activeKey" @change="onChange" v-bind="args" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `}),args:{bordered:!0}},H={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse accordion style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},j={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse :bordered="false" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3" :collapsible="'disabled'">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},M={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse ghost style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},D={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{text:`
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
      `,customStyle:{background:"#f7f7f7",borderRadius:"4px",marginBottom:"24px",border:"0px",overflow:"hidden"}}},template:`
      <CgCollapse :bordered="false" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},V={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <CgCollapse>
            <CgCollapsePanel key="1-1" header="嵌套面板标题1-1">
              <p>这是嵌套折叠面板内容1-1</p>
            </CgCollapsePanel>
            <CgCollapsePanel key="1-2" header="嵌套面板标题1-2">
              <p>这是嵌套折叠面板内容1-2</p>
            </CgCollapsePanel>
          </CgCollapse>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},z={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1" :show-arrow="false">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},G={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{onExtraClick:e=>{e.stopPropagation(),console.log("Extra clicked")}}},template:`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <template #extra>
            <a @click="onExtraClick">更多</a>
          </template>
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})},U={render:()=>({components:{CgCollapse:m,CgCollapsePanel:y},setup(){return{}},template:`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1 (可点击整个头部区域)" collapsible="header">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2 (禁用状态)" collapsible="disabled">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3 (默认状态)">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      const activeKey = ref(['1']);
      const onChange = (key: string | string[]) => {
        console.log(key);
      };
      return {
        args,
        activeKey,
        onChange
      };
    },
    template: \`
      <CgCollapse v-model:activeKey="activeKey" @change="onChange" v-bind="args" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  }),
  args: {
    bordered: true
  }
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse accordion style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...H.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse :bordered="false" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3" :collapsible="'disabled'">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse ghost style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      const text = \`
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
        这是一段很长的文字内容，用于测试折叠面板的内容显示效果。
      \`;
      const customStyle = {
        background: '#f7f7f7',
        borderRadius: '4px',
        marginBottom: '24px',
        border: '0px',
        overflow: 'hidden'
      };
      return {
        text,
        customStyle
      };
    },
    template: \`
      <CgCollapse :bordered="false" style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3" :style="customStyle">
          <p>{{ text }}</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <CgCollapse>
            <CgCollapsePanel key="1-1" header="嵌套面板标题1-1">
              <p>这是嵌套折叠面板内容1-1</p>
            </CgCollapsePanel>
            <CgCollapsePanel key="1-2" header="嵌套面板标题1-2">
              <p>这是嵌套折叠面板内容1-2</p>
            </CgCollapsePanel>
          </CgCollapse>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1" :show-arrow="false">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      const onExtraClick = (e: Event) => {
        e.stopPropagation();
        console.log('Extra clicked');
      };
      return {
        onExtraClick
      };
    },
    template: \`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1">
          <template #extra>
            <a @click="onExtraClick">更多</a>
          </template>
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgCollapse: Collapse,
      CgCollapsePanel: CollapsePanel
    },
    setup() {
      return {};
    },
    template: \`
      <CgCollapse style="width: 500px;">
        <CgCollapsePanel key="1" header="这是面板标题1 (可点击整个头部区域)" collapsible="header">
          <p>这是折叠面板内容1</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="2" header="这是面板标题2 (禁用状态)" collapsible="disabled">
          <p>这是折叠面板内容2</p>
        </CgCollapsePanel>
        <CgCollapsePanel key="3" header="这是面板标题3 (默认状态)">
          <p>这是折叠面板内容3</p>
        </CgCollapsePanel>
      </CgCollapse>
    \`
  })
}`,...U.parameters?.docs?.source}}};const ol=["Basic","Accordion","Borderless","Ghost","CustomPanel","NestedCollapse","NoArrow","ExtraContent","CollapsibleOptions"];export{H as Accordion,O as Basic,j as Borderless,U as CollapsibleOptions,D as CustomPanel,G as ExtraContent,M as Ghost,V as NestedCollapse,z as NoArrow,ol as __namedExportsOrder,nl as default};
