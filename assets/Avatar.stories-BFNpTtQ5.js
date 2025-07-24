import{d as f,ae as b,c as y,ag as S,ai as x,aj as h,ak as z,v as X,al as j,am as q}from"./iframe-CiolPNwv.js";import{A as O}from"./index-CV9ql-fH.js";import{S as r}from"./index-C9_4AhMb.js";import{U as A}from"./UserOutlined-CYnCTF5v.js";import"./useBreakpoint-BpzVhzE_.js";import"./responsiveObserve-Cqxd3VwU.js";import"./index-TLYrHIS2.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./eagerComputed-DbQ3AthJ.js";import"./vnode-B4SLhmi3.js";import"./index-CK7QGXoe.js";import"./index-D70oGXWT.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./isVisible-BHYmLg1T.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./initDefaultProps-CZpOG6Cc.js";import"./omit-BBXwSgK8.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";const a=f({__name:"Avatar",props:{alt:{},gap:{},icon:{},shape:{},size:{},src:{},srcset:{},draggable:{type:[Boolean,String]},crossOrigin:{}},setup(e){const g=e,v=b(),u=y(()=>{const n={};return Object.keys(v).filter(t=>t.startsWith("on")).forEach(t=>{n[t]=v[t]}),n});return(n,t)=>(j(),S(X(O),h(g,z(u.value)),{default:x(()=>[q(n.$slots,"default")]),_:3},16))}});a.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"alt",required:!1,type:{name:"string"}},{name:"gap",required:!1,type:{name:"number"}},{name:"icon",required:!1,type:{name:"any"}},{name:"shape",required:!1,type:{name:"union",elements:[{name:'"circle"'},{name:'"square"'}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:"number"},{name:'"large"'},{name:'"small"'},{name:'"default"'}]}},{name:"src",required:!1,type:{name:"string"}},{name:"srcset",required:!1,type:{name:"string"}},{name:"draggable",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"}]}},{name:"crossOrigin",required:!1,type:{name:"union",elements:[{name:'"anonymous"'},{name:'"use-credentials"'},{name:'""'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Avatar/Avatar.vue"]};a.install=e=>{e.component("CgAvatar",a)};const{fn:oa}=__STORYBOOK_MODULE_TEST__,ca={title:"Components/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{control:"select",options:["circle","square"]},size:{control:"select",options:["large","default","small"]},src:{control:"text"},alt:{control:"text"},gap:{control:"number"}},args:{shape:"circle",size:"default"}},s={args:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},render:e=>({components:{Avatar:a},setup(){return{args:e}},template:'<Avatar v-bind="args" />'})},o={render:()=>({components:{Avatar:a,Space:r},template:`
      <Space size="large">
        <Avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Space>
    `}),parameters:{docs:{description:{story:"支持两种形状：圆形（circle）和方形（square）。"}}}},c={render:()=>({components:{Avatar:a,Space:r},template:`
      <Space size="large" align="center">
        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar size="default" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar :size="64" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Space>
    `}),parameters:{docs:{description:{story:"支持三种预设尺寸：大（large）、默认（default）、小（small），也可以自定义尺寸。"}}}},p={render:()=>({components:{Avatar:a,UserOutlined:A,Space:r},template:`
      <Space size="large">
        <Avatar>
          <template #icon><UserOutlined /></template>
        </Avatar>
        <Avatar style="background-color: #87d068">
          <template #icon><UserOutlined /></template>
        </Avatar>
      </Space>
    `}),parameters:{docs:{description:{story:"可以使用图标作为头像内容。"}}}},l={render:()=>({components:{Avatar:a,Space:r},template:`
      <Space size="large">
        <Avatar>U</Avatar>
        <Avatar style="color: #f56a00; background-color: #fde3cf">U</Avatar>
        <Avatar style="background-color: #87d068">用户</Avatar>
      </Space>
    `}),parameters:{docs:{description:{story:"可以使用文字作为头像内容。"}}}},i={render:()=>({components:{Avatar:a,Space:r},setup(){return{handleError:()=>!0}},template:`
      <Space size="large">
        <Avatar src="https://invalid-image-url.com/404.png" @error="handleError">
          <template #icon><UserOutlined /></template>
        </Avatar>
        <Avatar src="https://invalid-image-url.com/404.png" @error="handleError">A</Avatar>
      </Space>
    `}),parameters:{docs:{description:{story:"当图片加载失败时，可以使用 @error 事件处理，显示备用内容。"}}}},m={render:()=>({components:{Avatar:a,Space:r},template:`
      <div>
        <div style="margin-bottom: 20px;">
          <Space size="-8px" wrap>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #f56a00">K</Avatar>
            <Avatar style="background-color: #87d068">U</Avatar>
            <Avatar style="background-color: #1890ff">X</Avatar>
            <Avatar style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </div>
        <div>
          <Space size="-8px" wrap>
            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar size="large" style="background-color: #f56a00">K</Avatar>
            <Avatar size="large" style="background-color: #87d068">U</Avatar>
            <Avatar size="large" style="background-color: #1890ff">X</Avatar>
            <Avatar size="large" style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"使用 Space 组件的负间距实现头像组效果。"}}}},d={render:()=>({components:{Avatar:a,Space:r,UserOutlined:A},template:`
      <div>
        <h3 style="margin-bottom: 16px;">头像组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #1890ff">U</Avatar>
            <Avatar>
              <template #icon><UserOutlined /></template>
            </Avatar>
          </Space>
          
          <Space size="large">
            <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar shape="square" style="background-color: #1890ff">U</Avatar>
            <Avatar shape="square">
              <template #icon><UserOutlined /></template>
            </Avatar>
          </Space>
          
          <Space size="-8px" wrap>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #f56a00">K</Avatar>
            <Avatar style="background-color: #87d068">U</Avatar>
            <Avatar style="background-color: #1890ff">X</Avatar>
            <Avatar style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的头像组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示头像组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '支持两种形状：圆形（circle）和方形（square）。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space
    },
    template: \`
      <Space size="large" align="center">
        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar size="default" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar :size="64" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '支持三种预设尺寸：大（large）、默认（default）、小（small），也可以自定义尺寸。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      UserOutlined,
      Space
    },
    template: \`
      <Space size="large">
        <Avatar>
          <template #icon><UserOutlined /></template>
        </Avatar>
        <Avatar style="background-color: #87d068">
          <template #icon><UserOutlined /></template>
        </Avatar>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以使用图标作为头像内容。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Avatar>U</Avatar>
        <Avatar style="color: #f56a00; background-color: #fde3cf">U</Avatar>
        <Avatar style="background-color: #87d068">用户</Avatar>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以使用文字作为头像内容。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space
    },
    setup() {
      return {
        handleError: () => true
      };
    },
    template: \`
      <Space size="large">
        <Avatar src="https://invalid-image-url.com/404.png" @error="handleError">
          <template #icon><UserOutlined /></template>
        </Avatar>
        <Avatar src="https://invalid-image-url.com/404.png" @error="handleError">A</Avatar>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '当图片加载失败时，可以使用 @error 事件处理，显示备用内容。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space
    },
    template: \`
      <div>
        <div style="margin-bottom: 20px;">
          <Space size="-8px" wrap>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #f56a00">K</Avatar>
            <Avatar style="background-color: #87d068">U</Avatar>
            <Avatar style="background-color: #1890ff">X</Avatar>
            <Avatar style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </div>
        <div>
          <Space size="-8px" wrap>
            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar size="large" style="background-color: #f56a00">K</Avatar>
            <Avatar size="large" style="background-color: #87d068">U</Avatar>
            <Avatar size="large" style="background-color: #1890ff">X</Avatar>
            <Avatar size="large" style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 Space 组件的负间距实现头像组效果。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar,
      Space,
      UserOutlined
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">头像组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #1890ff">U</Avatar>
            <Avatar>
              <template #icon><UserOutlined /></template>
            </Avatar>
          </Space>
          
          <Space size="large">
            <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar shape="square" style="background-color: #1890ff">U</Avatar>
            <Avatar shape="square">
              <template #icon><UserOutlined /></template>
            </Avatar>
          </Space>
          
          <Space size="-8px" wrap>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style="background-color: #f56a00">K</Avatar>
            <Avatar style="background-color: #87d068">U</Avatar>
            <Avatar style="background-color: #1890ff">X</Avatar>
            <Avatar style="background-color: #ff4d4f">M</Avatar>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的头像组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示头像组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const pa=["Default","Shapes","Sizes","WithIcon","WithText","FallbackWhenImageError","AvatarGroup","ThemeShowcase"];export{m as AvatarGroup,s as Default,i as FallbackWhenImageError,o as Shapes,c as Sizes,d as ThemeShowcase,p as WithIcon,l as WithText,pa as __namedExportsOrder,ca as default};
