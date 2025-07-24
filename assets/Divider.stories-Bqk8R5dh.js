import{d as g,ae as y,c as f,ag as h,ai as x,aj as S,ak as _,v as b,al as T,am as O}from"./iframe-CiolPNwv.js";import{D as k}from"./index-CJwjXjc_.js";import{S as m}from"./index-C9_4AhMb.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";const e=g({__name:"Divider",props:{dashed:{type:Boolean},orientation:{},orientationMargin:{},plain:{type:Boolean},type:{}},setup(n){const D=n,l=y(),u=f(()=>{const i={};return Object.keys(l).filter(r=>r.startsWith("on")).forEach(r=>{i[r]=l[r]}),i});return(i,r)=>(T(),h(b(k),S(D,_(u.value)),{default:x(()=>[O(i.$slots,"default")]),_:3},16))}});e.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"dashed",required:!1,type:{name:"boolean"}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"orientationMargin",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Divider/Divider.vue"]};e.install=n=>{n.component("CgDivider",e)};const{fn:W}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Divider",component:e,tags:["autodocs"],argTypes:{dashed:{control:"boolean"},plain:{control:"boolean"},type:{control:"select",options:["horizontal","vertical"]},orientation:{control:"select",options:["left","right","center"]},orientationMargin:{control:"text"}},args:{type:"horizontal",orientation:"center"}},t={args:{},render:n=>({components:{Divider:e},setup(){return{args:n}},template:`
      <div>
        <p>上面的内容</p>
        <Divider v-bind="args" />
        <p>下面的内容</p>
      </div>
    `})},o={render:()=>({components:{Divider:e},template:`
      <div>
        <p>上面的内容</p>
        <Divider>文本</Divider>
        <p>下面的内容</p>
      </div>
    `}),parameters:{docs:{description:{story:"分割线中带有文字。"}}}},a={render:()=>({components:{Divider:e,Space:m},template:`
      <div>
        <p>上面的内容</p>
        <Divider orientation="left">左对齐</Divider>
        <p>中间的内容</p>
        <Divider orientation="center">居中对齐</Divider>
        <p>中间的内容</p>
        <Divider orientation="right">右对齐</Divider>
        <p>下面的内容</p>
      </div>
    `}),parameters:{docs:{description:{story:"可以自定义分割线中文字的位置：左、中、右。"}}}},p={render:()=>({components:{Divider:e},template:`
      <div>
        <p>上面的内容</p>
        <Divider dashed />
        <p>下面的内容</p>
      </div>
    `}),parameters:{docs:{description:{story:"虚线分割线。"}}}},d={render:()=>({components:{Divider:e,Space:m},template:`
      <div>
        <p>上面的内容</p>
        <Divider plain>普通文本</Divider>
        <p>中间的内容</p>
        <Divider>默认文本</Divider>
        <p>下面的内容</p>
      </div>
    `}),parameters:{docs:{description:{story:"使用 plain 可以设置为更轻量的分割文字样式。"}}}},s={render:()=>({components:{Divider:e},template:`
      <div>
        文本 <Divider type="vertical" /> 文本 <Divider type="vertical" /> 文本
      </div>
    `}),parameters:{docs:{description:{story:"垂直分割线。"}}}},c={render:()=>({components:{Divider:e,Space:m},template:`
      <div>
        <p>上面的内容</p>
        <Divider orientation="left" orientation-margin="0px">无边距</Divider>
        <p>中间的内容</p>
        <Divider orientation="left" orientation-margin="20px">20px 边距</Divider>
        <p>下面的内容</p>
      </div>
    `}),parameters:{docs:{description:{story:"可以设置文字和边缘的距离。"}}}},v={render:()=>({components:{Divider:e,Space:m},template:`
      <div>
        <h3 style="margin-bottom: 16px;">分割线组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <p>默认分割线</p>
            <Divider />
            <p>带文本的分割线</p>
            <Divider>文本</Divider>
            <p>虚线分割线</p>
            <Divider dashed />
          </div>
          
          <div>
            <p>文本位置</p>
            <Divider orientation="left">左对齐</Divider>
            <Divider orientation="center">居中对齐</Divider>
            <Divider orientation="right">右对齐</Divider>
          </div>
          
          <div>
            <p>垂直分割线</p>
            <div>文本 <Divider type="vertical" /> 文本 <Divider type="vertical" /> 文本</div>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的分割线组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示分割线组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Divider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider v-bind="args" />
        <p>下面的内容</p>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider>文本</Divider>
        <p>下面的内容</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '分割线中带有文字。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider orientation="left">左对齐</Divider>
        <p>中间的内容</p>
        <Divider orientation="center">居中对齐</Divider>
        <p>中间的内容</p>
        <Divider orientation="right">右对齐</Divider>
        <p>下面的内容</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义分割线中文字的位置：左、中、右。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider dashed />
        <p>下面的内容</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '虚线分割线。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider plain>普通文本</Divider>
        <p>中间的内容</p>
        <Divider>默认文本</Divider>
        <p>下面的内容</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 plain 可以设置为更轻量的分割文字样式。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div>
        文本 <Divider type="vertical" /> 文本 <Divider type="vertical" /> 文本
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '垂直分割线。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`
      <div>
        <p>上面的内容</p>
        <Divider orientation="left" orientation-margin="0px">无边距</Divider>
        <p>中间的内容</p>
        <Divider orientation="left" orientation-margin="20px">20px 边距</Divider>
        <p>下面的内容</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置文字和边缘的距离。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">分割线组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <p>默认分割线</p>
            <Divider />
            <p>带文本的分割线</p>
            <Divider>文本</Divider>
            <p>虚线分割线</p>
            <Divider dashed />
          </div>
          
          <div>
            <p>文本位置</p>
            <Divider orientation="left">左对齐</Divider>
            <Divider orientation="center">居中对齐</Divider>
            <Divider orientation="right">右对齐</Divider>
          </div>
          
          <div>
            <p>垂直分割线</p>
            <div>文本 <Divider type="vertical" /> 文本 <Divider type="vertical" /> 文本</div>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的分割线组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示分割线组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const U=["Default","WithText","TextPosition","Dashed","Plain","Vertical","OrientationMargin","ThemeShowcase"];export{p as Dashed,t as Default,c as OrientationMargin,d as Plain,a as TextPosition,v as ThemeShowcase,s as Vertical,o as WithText,U as __namedExportsOrder,N as default};
