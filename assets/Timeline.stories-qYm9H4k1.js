import{d as W,u as Y,c as S,a as I,P as b,b as J,t as Q,G as Te,H as pe,_ as U,I as Ie,f as ue,ac as ge,h as be,g as F,e as K,ae as Z,af as k,ag as ee,ah as ie,ai as $,v as y,aj as ne,ak as te,al as me,am as C,an as j,ao as M}from"./iframe-CiolPNwv.js";import{i as le}from"./initDefaultProps-CZpOG6Cc.js";import{C as he}from"./ClockCircleOutlined-D5OxAzgY.js";import{S as re}from"./index-C9_4AhMb.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";const fe=()=>({prefixCls:String,color:String,dot:b.any,pending:J(),position:b.oneOf(Q("left","right","")).def(""),label:b.any}),w=W({compatConfig:{MODE:3},name:"ATimelineItem",props:le(fe(),{color:"blue",pending:!1}),slots:Object,setup(e,i){let{slots:t}=i;const{prefixCls:m}=Y("timeline",e),n=S(()=>({[`${m.value}-item`]:!0,[`${m.value}-item-pending`]:e.pending})),a=S(()=>/blue|red|green|gray/.test(e.color||"")?void 0:e.color||"blue"),l=S(()=>({[`${m.value}-item-head`]:!0,[`${m.value}-item-head-${e.color||"blue"}`]:!a.value}));return()=>{var o,d,T;const{label:p=(o=t.label)===null||o===void 0?void 0:o.call(t),dot:c=(d=t.dot)===null||d===void 0?void 0:d.call(t)}=e;return I("li",{class:n.value},[p&&I("div",{class:`${m.value}-item-label`},[p]),I("div",{class:`${m.value}-item-tail`},null),I("div",{class:[l.value,!!c&&`${m.value}-item-head-custom`],style:{borderColor:a.value,color:a.value}},[c]),I("div",{class:`${m.value}-item-content`},[(T=t.default)===null||T===void 0?void 0:T.call(t)])])}}}),ve=e=>{const{componentCls:i}=e;return{[i]:U(U({},Ie(e)),{margin:0,padding:0,listStyle:"none",[`${i}-item`]:{position:"relative",margin:0,paddingBottom:e.timeLineItemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize,insetInlineStart:(e.timeLineItemHeadSize-e.timeLineItemTailWidth)/2,height:`calc(100% - ${e.timeLineItemHeadSize}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px ${e.lineType} ${e.colorSplit}`},"&-pending":{[`${i}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${i}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.timeLineItemHeadSize,height:e.timeLineItemHeadSize,backgroundColor:e.colorBgContainer,border:`${e.timeLineHeadBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize/2,insetInlineStart:e.timeLineItemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.timeLineItemCustomHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.timeLineItemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${i}-item-tail`]:{display:"none"},[`> ${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}}},[`&${i}-alternate,
        &${i}-right,
        &${i}-label`]:{[`${i}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.timeLineItemTailWidth/2}},"&-left":{[`${i}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${i}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${i}-right`]:{[`${i}-item-right`]:{[`${i}-item-tail,
            ${i}-item-head,
            ${i}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.timeLineItemHeadSize+e.timeLineItemTailWidth)/2}px)`},[`${i}-item-content`]:{width:`calc(100% - ${e.timeLineItemHeadSize+e.marginXS}px)`}}},[`&${i}-pending
        ${i}-item-last
        ${i}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`&${i}-reverse
        ${i}-item-last
        ${i}-item-tail`]:{display:"none"},[`&${i}-reverse ${i}-item-pending`]:{[`${i}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}},[`&${i}-label`]:{[`${i}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.timeLineItemTailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${i}-item-right`]:{[`${i}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${i}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},Se=Te("Timeline",e=>{const i=pe(e,{timeLineItemPaddingBottom:e.padding*1.25,timeLineItemHeadSize:10,timeLineItemCustomHeadPaddingVertical:e.paddingXXS,timeLinePaddingInlineEnd:2,timeLineItemTailWidth:e.lineWidthBold,timeLineHeadBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3});return[ve(i)]}),$e=()=>({prefixCls:String,pending:b.any,pendingDot:b.any,reverse:J(),mode:b.oneOf(Q("left","alternate","right",""))}),h=W({compatConfig:{MODE:3},name:"ATimeline",inheritAttrs:!1,props:le($e(),{reverse:!1,mode:""}),slots:Object,setup(e,i){let{slots:t,attrs:m}=i;const{prefixCls:n,direction:a}=Y("timeline",e),[l,o]=Se(n),d=(T,p)=>{const c=T.props||{};return e.mode==="alternate"?c.position==="right"?`${n.value}-item-right`:c.position==="left"?`${n.value}-item-left`:p%2===0?`${n.value}-item-left`:`${n.value}-item-right`:e.mode==="left"?`${n.value}-item-left`:e.mode==="right"?`${n.value}-item-right`:c.position==="right"?`${n.value}-item-right`:""};return()=>{var T,p,c;const{pending:g=(T=t.pending)===null||T===void 0?void 0:T.call(t),pendingDot:ae=(p=t.pendingDot)===null||p===void 0?void 0:p.call(t),reverse:E,mode:R}=e,oe=typeof g=="boolean"?null:g,A=ue((c=t.default)===null||c===void 0?void 0:c.call(t)),X=g?I(w,{pending:!!g,dot:ae||I(ge,null,null)},{default:()=>[oe]}):null;X&&A.push(X);const N=E?A.reverse():A,q=N.length,V=`${n.value}-item-last`,se=N.map((f,u)=>{const v=u===q-2?V:"",de=u===q-1?V:"";return be(f,{class:F([!E&&g?v:de,d(f,u)])})}),G=N.some(f=>{var u,v;return!!(!((u=f.props)===null||u===void 0)&&u.label||!((v=f.children)===null||v===void 0)&&v.label)}),ce=F(n.value,{[`${n.value}-pending`]:!!g,[`${n.value}-reverse`]:!!E,[`${n.value}-${R}`]:!!R&&!G,[`${n.value}-label`]:G,[`${n.value}-rtl`]:a.value==="rtl"},m.class,o.value);return l(I("ul",K(K({},m),{},{class:ce}),[se]))}}});h.Item=w;h.install=function(e){return e.component(h.name,h),e.component(w.name,w),e};const r=W({__name:"Timeline",setup(e){const i=e,t=Z(),m=k(),n=S(()=>{const a={};return Object.keys(t).filter(l=>l.startsWith("on")).forEach(l=>{a[l]=t[l]}),a});return(a,l)=>(me(),ee(y(h),ne(i,te(n.value)),ie({default:$(()=>[C(a.$slots,"default")]),_:2},[y(m).pendingDot?{name:"pendingDot",fn:$(o=>[C(a.$slots,"pendingDot",j(M(o||{})))]),key:"0"}:void 0]),1040))}});r.__docgenInfo={exportName:"default",displayName:"Timeline",description:"",tags:{},slots:[{name:"pendingDot",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Timeline/Timeline.vue"]};const s=W({__name:"TimelineItem",props:{color:{},dot:{},label:{},position:{}},setup(e){const i=h.Item,t=e,m=Z(),n=k(),a=S(()=>{const l={};return Object.keys(m).filter(o=>o.startsWith("on")).forEach(o=>{l[o]=m[o]}),l});return(l,o)=>(me(),ee(y(i),ne(t,te(a.value)),ie({default:$(()=>[C(l.$slots,"default")]),_:2},[y(n).dot?{name:"dot",fn:$(d=>[C(l.$slots,"dot",j(M(d||{})))]),key:"0"}:void 0,y(n).label?{name:"label",fn:$(d=>[C(l.$slots,"label",j(M(d||{})))]),key:"1"}:void 0]),1040))}});s.__docgenInfo={exportName:"default",displayName:"TimelineItem",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"string"}},{name:"dot",required:!1,type:{name:"any"}},{name:"label",required:!1,type:{name:"any"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]}}],slots:[{name:"dot",scoped:!0,bindings:[]},{name:"label",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Timeline/TimelineItem/TimelineItem.vue"]};s.install=e=>{e.component("CgTimelineItem",s)};r.install=e=>{e.component("CgTimeline",r)};r.Item=s;const{fn:De}=__STORYBOOK_MODULE_TEST__,we={title:"Components/Timeline",component:r,tags:["autodocs"],argTypes:{mode:{control:"select",options:["left","alternate","right"]},pending:{control:"text"},reverse:{control:"boolean"}},args:{}},x={render:()=>({components:{Timeline:r,TimelineItem:s},template:`
      <Timeline>
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"基本的时间轴组件展示。"}}}},L={render:()=>({components:{Timeline:r,TimelineItem:s},template:`
      <Timeline>
        <TimelineItem color="green">创建服务 2023-09-01</TimelineItem>
        <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
        <TimelineItem color="blue">网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"可以设置不同颜色的时间轴节点。"}}}},_={args:{mode:"alternate"},render:e=>({components:{Timeline:r,TimelineItem:s},setup(){return{args:e}},template:`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"时间轴节点可以交替展示在左右两侧。"}}}},z={args:{mode:"right"},render:e=>({components:{Timeline:r,TimelineItem:s},setup(){return{args:e}},template:`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"时间轴节点可以展示在右侧。"}}}},H={args:{pending:"记录中..."},render:e=>({components:{Timeline:r,TimelineItem:s},setup(){return{args:e}},template:`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"可以设置最后一个节点为幽灵节点，表示时间轴正在进行中。"}}}},B={render:()=>({components:{Timeline:r,TimelineItem:s,ClockCircleOutlined:he},template:`
      <Timeline>
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>
          <template #dot>
            <ClockCircleOutlined style="font-size: 16px;" />
          </template>
          技术测试 2023-09-03
        </TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"可以自定义时间轴节点的图标。"}}}},P={args:{reverse:!0},render:e=>({components:{Timeline:r,TimelineItem:s},setup(){return{args:e}},template:`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    `}),parameters:{docs:{description:{story:"时间轴节点排序可以倒序展示。"}}}},O={render:()=>({components:{Timeline:r,TimelineItem:s,Space:re},template:`
      <div>
        <h3 style="margin-bottom: 16px;">时间轴组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Timeline>
            <TimelineItem color="green">创建服务 2023-09-01</TimelineItem>
            <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
            <TimelineItem color="blue">网络问题正在解决 2023-09-04</TimelineItem>
          </Timeline>
          
          <Timeline mode="alternate">
            <TimelineItem>创建服务 2023-09-01</TimelineItem>
            <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
            <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
          </Timeline>
          
          <Timeline pending="记录中...">
            <TimelineItem>创建服务 2023-09-01</TimelineItem>
            <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem>技术测试 2023-09-03</TimelineItem>
          </Timeline>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的时间轴组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示时间轴组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}},D={render:()=>({components:{Timeline:r,TimelineItem:s,Space:re},template:`
      <Space direction="vertical" size="large">
        <Timeline>
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
        
        <Timeline mode="alternate">
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
        
        <Timeline mode="right">
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
      </Space>
    `}),parameters:{docs:{description:{story:"可以为每个节点设置标签。"}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`
      <Timeline>
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '基本的时间轴组件展示。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`
      <Timeline>
        <TimelineItem color="green">创建服务 2023-09-01</TimelineItem>
        <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
        <TimelineItem color="blue">网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置不同颜色的时间轴节点。'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'alternate'
  },
  render: args => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '时间轴节点可以交替展示在左右两侧。'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'right'
  },
  render: args => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '时间轴节点可以展示在右侧。'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    pending: '记录中...'
  },
  render: args => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置最后一个节点为幽灵节点，表示时间轴正在进行中。'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline,
      TimelineItem,
      ClockCircleOutlined
    },
    template: \`
      <Timeline>
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>
          <template #dot>
            <ClockCircleOutlined style="font-size: 16px;" />
          </template>
          技术测试 2023-09-03
        </TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义时间轴节点的图标。'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true
  },
  render: args => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline v-bind="args">
        <TimelineItem>创建服务 2023-09-01</TimelineItem>
        <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
        <TimelineItem>技术测试 2023-09-03</TimelineItem>
        <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
      </Timeline>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '时间轴节点排序可以倒序展示。'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline,
      TimelineItem,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">时间轴组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Timeline>
            <TimelineItem color="green">创建服务 2023-09-01</TimelineItem>
            <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
            <TimelineItem color="blue">网络问题正在解决 2023-09-04</TimelineItem>
          </Timeline>
          
          <Timeline mode="alternate">
            <TimelineItem>创建服务 2023-09-01</TimelineItem>
            <TimelineItem color="green">解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem color="red">技术测试 2023-09-03</TimelineItem>
            <TimelineItem>网络问题正在解决 2023-09-04</TimelineItem>
          </Timeline>
          
          <Timeline pending="记录中...">
            <TimelineItem>创建服务 2023-09-01</TimelineItem>
            <TimelineItem>解决初始网络问题 2023-09-02</TimelineItem>
            <TimelineItem>技术测试 2023-09-03</TimelineItem>
          </Timeline>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的时间轴组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示时间轴组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline,
      TimelineItem,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <Timeline>
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
        
        <Timeline mode="alternate">
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
        
        <Timeline mode="right">
          <TimelineItem label="2023-09-01">创建服务</TimelineItem>
          <TimelineItem label="2023-09-02">解决初始网络问题</TimelineItem>
          <TimelineItem label="2023-09-03">技术测试</TimelineItem>
          <TimelineItem label="2023-09-04">网络问题正在解决</TimelineItem>
        </Timeline>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以为每个节点设置标签。'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};const We=["Default","Color","Alternate","Right","Pending","CustomDot","Reverse","ThemeShowcase","LabelPosition"];export{_ as Alternate,L as Color,B as CustomDot,x as Default,D as LabelPosition,H as Pending,P as Reverse,z as Right,O as ThemeShowcase,We as __namedExportsOrder,we as default};
