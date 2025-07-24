import{d as h,ae as v,af as C,c as x,ag as _,ah as z,ai as B,v as g,aj as w,ak as D,al as L,am as y,an as P,ao as O}from"./iframe-CiolPNwv.js";import{B as R}from"./index-DWv55aqM.js";import{S as T}from"./index-C9_4AhMb.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useFlexGapSupport-CPj-DJgt.js";const e=h({__name:"Button",props:{type:{},disabled:{type:Boolean},loading:{type:Boolean},shape:{},size:{}},setup(t){const k=t,l=v(),S=C(),f=x(()=>{const r={};return Object.keys(l).filter(n=>n.startsWith("on")).forEach(n=>{r[n]=l[n]}),r});return(r,n)=>(L(),_(g(R),w(k,D(f.value)),z({default:B(()=>[y(r.$slots,"default")]),_:2},[g(S).icon?{name:"icon",fn:B(b=>[y(r.$slots,"icon",P(O(b||{})))]),key:"0"}:void 0]),1040))}});e.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"default"'},{name:'"dashed"'},{name:'"text"'},{name:'"link"'}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"shape",required:!1,type:{name:"union",elements:[{name:'"circle"'},{name:'"round"'},{name:'"default"'}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"large"'},{name:'"middle"'},{name:'"small"'}]}}],slots:[{name:"icon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Button/Button.vue"]};e.install=t=>{t.component("CgButton",e)};const{fn:Q}=__STORYBOOK_MODULE_TEST__,V={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","default","dashed","text","link"]},size:{control:"select",options:["large","middle","small"]},shape:{control:"select",options:["circle","round","default"]},disabled:{control:"boolean"},loading:{control:"boolean"}},args:{}},a={args:{type:"primary"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Primary Button</Button>'})},o={args:{type:"default"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Default Button</Button>'})},s={args:{type:"dashed"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Dashed Button</Button>'})},p={args:{type:"primary",size:"large"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Large Button</Button>'})},u={args:{type:"primary",size:"small"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Small Button</Button>'})},i={args:{type:"primary",loading:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Loading Button</Button>'})},c={args:{type:"primary",disabled:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Disabled Button</Button>'})},m={args:{type:"primary",shape:"round"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args" @click="args.onClick">Round Button</Button>'})},d={render:()=>({components:{Button:e,Space:T},template:`
      <div>
        <h3 style="margin-bottom: 16px;">主题色彩展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space wrap>
            <Button type="primary">主要按钮</Button>
            <Button>默认按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="text">文本按钮</Button>
            <Button type="link">链接按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" danger>危险主要按钮</Button>
            <Button danger>危险默认按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" size="large">大号按钮</Button>
            <Button type="primary">默认按钮</Button>
            <Button type="primary" size="small">小号按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" shape="round">圆角按钮</Button>
            <Button type="primary" loading>加载中</Button>
            <Button type="primary" disabled>禁用按钮</Button>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的按钮效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示按钮在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Primary Button</Button>'
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Default Button</Button>'
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashed'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Dashed Button</Button>'
  })
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'large'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Large Button</Button>'
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'small'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Small Button</Button>'
  })
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    loading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Loading Button</Button>'
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Disabled Button</Button>'
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    shape: 'round'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" @click="args.onClick">Round Button</Button>'
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">主题色彩展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space wrap>
            <Button type="primary">主要按钮</Button>
            <Button>默认按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="text">文本按钮</Button>
            <Button type="link">链接按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" danger>危险主要按钮</Button>
            <Button danger>危险默认按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" size="large">大号按钮</Button>
            <Button type="primary">默认按钮</Button>
            <Button type="primary" size="small">小号按钮</Button>
          </Space>
          
          <Space wrap>
            <Button type="primary" shape="round">圆角按钮</Button>
            <Button type="primary" loading>加载中</Button>
            <Button type="primary" disabled>禁用按钮</Button>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的按钮效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示按钮在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const X=["Primary","Default","Dashed","Large","Small","Loading","Disabled","Round","ThemeShowcase"];export{s as Dashed,o as Default,c as Disabled,p as Large,i as Loading,a as Primary,m as Round,u as Small,d as ThemeShowcase,X as __namedExportsOrder,V as default};
