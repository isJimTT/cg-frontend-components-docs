import{d as C,ae as x,af as z,c as b,ag as w,ah as k,ai as S,v as g,aj as _,ak as A,al as T,am as u,an as B,ao as O}from"./iframe-CiolPNwv.js";import{S as M}from"./index-BtJmWxOl.js";import{S as l}from"./index-C9_4AhMb.js";import{A as E}from"./index-CWJ8WGwR.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./vnode-B4SLhmi3.js";const n=C({__name:"Spin",setup(e){const v=e,m=x(),f=z(),h=b(()=>{const i={};return Object.keys(m).filter(t=>t.startsWith("on")).forEach(t=>{i[t]=m[t]}),i});return(i,t)=>(T(),w(g(M),_(v,A(h.value)),k({default:S(()=>[u(i.$slots,"default")]),_:2},[g(f).indicator?{name:"indicator",fn:S(y=>[u(i.$slots,"indicator",B(O(y||{})))]),key:"0"}:void 0]),1040))}});n.__docgenInfo={exportName:"default",displayName:"Spin",description:"",tags:{},slots:[{name:"indicator",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Spin/Spin.vue"]};n.install=e=>{e.component("CgSpin",n)};const{fn:L}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Spin",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"]},spinning:{control:"boolean"},delay:{control:"number"},tip:{control:"text"}},args:{}},s={args:{},render:e=>({components:{Spin:n},setup(){return{args:e}},template:'<Spin v-bind="args" />'})},a={render:()=>({components:{Spin:n,Space:l},template:`
      <Space direction="vertical" size="large">
        <Space>
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
        <Space>
          <Spin size="small" tip="加载中..." />
          <Spin tip="加载中..." />
          <Spin size="large" tip="加载中..." />
        </Space>
      </Space>
    `}),parameters:{docs:{description:{story:"展示不同尺寸的加载中组件。"}}}},r={args:{tip:"加载中..."},render:e=>({components:{Spin:n},setup(){return{args:e}},template:'<Spin v-bind="args" />'})},p={render:()=>({components:{Spin:n,Alert:E},template:`
      <div>
        <Spin spinning>
          <Alert
            message="Spin 组件"
            description="将内容包裹在 Spin 组件中，可以实现加载中效果。"
            type="info"
          />
        </Spin>
        <div style="margin-top: 16px;">
          <Spin :spinning="false">
            <Alert
              message="Spin 组件"
              description="spinning 设置为 false 时不显示加载效果。"
              type="success"
            />
          </Spin>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"可以包裹任何元素让其处于加载状态。"}}}},o={render:()=>({components:{Spin:n,Space:l},template:`
      <Space direction="vertical" size="large">
        <Spin>
          <template #indicator>
            <div class="custom-indicator">
              <svg viewBox="0 0 1024 1024" width="32" height="32" fill="currentColor">
                <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
              </svg>
            </div>
          </template>
        </Spin>
        <div style="margin-top: 16px;">
          <Spin tip="自定义加载图标">
            <template #indicator>
              <div class="custom-indicator">
                <svg viewBox="0 0 1024 1024" width="32" height="32" fill="#1890ff">
                  <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
                </svg>
              </div>
            </template>
          </Spin>
        </div>
      </Space>
    `}),parameters:{docs:{description:{story:"可以自定义加载指示符。"}}}},c={render:()=>({components:{Spin:n,Space:l},template:`
      <div>
        <h3 style="margin-bottom: 16px;">加载组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
          
          <Space>
            <Spin tip="加载中..." />
            <Spin spinning>
              <div style="padding: 30px; background: #f5f5f5; border-radius: 4px;">
                内容区域
              </div>
            </Spin>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的加载组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示加载组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}},d={render:()=>({components:{Spin:n,Space:l},template:`
      <Space direction="vertical" size="large">
        <Spin>
          <template #indicator>
            <div class="custom-spin">
              <div class="custom-spin-dot"></div>
            </div>
          </template>
        </Spin>
      </Space>
    `,styles:[`
      .custom-spin {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
      }
      .custom-spin-dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #1890ff;
        opacity: 0.3;
        animation: custom-spin 1.2s infinite ease-in-out;
      }
      @keyframes custom-spin {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1.0);
          opacity: 0;
        }
      }
    `]}),parameters:{docs:{description:{story:"使用自定义样式的加载组件。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Spin
    },
    setup() {
      return {
        args
      };
    },
    template: '<Spin v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spin,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <Space>
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
        <Space>
          <Spin size="small" tip="加载中..." />
          <Spin tip="加载中..." />
          <Spin size="large" tip="加载中..." />
        </Space>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示不同尺寸的加载中组件。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tip: '加载中...'
  },
  render: args => ({
    components: {
      Spin
    },
    setup() {
      return {
        args
      };
    },
    template: '<Spin v-bind="args" />'
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spin,
      Alert
    },
    template: \`
      <div>
        <Spin spinning>
          <Alert
            message="Spin 组件"
            description="将内容包裹在 Spin 组件中，可以实现加载中效果。"
            type="info"
          />
        </Spin>
        <div style="margin-top: 16px;">
          <Spin :spinning="false">
            <Alert
              message="Spin 组件"
              description="spinning 设置为 false 时不显示加载效果。"
              type="success"
            />
          </Spin>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以包裹任何元素让其处于加载状态。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spin,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <Spin>
          <template #indicator>
            <div class="custom-indicator">
              <svg viewBox="0 0 1024 1024" width="32" height="32" fill="currentColor">
                <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
              </svg>
            </div>
          </template>
        </Spin>
        <div style="margin-top: 16px;">
          <Spin tip="自定义加载图标">
            <template #indicator>
              <div class="custom-indicator">
                <svg viewBox="0 0 1024 1024" width="32" height="32" fill="#1890ff">
                  <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
                </svg>
              </div>
            </template>
          </Spin>
        </div>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义加载指示符。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spin,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">加载组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
          
          <Space>
            <Spin tip="加载中..." />
            <Spin spinning>
              <div style="padding: 30px; background: #f5f5f5; border-radius: 4px;">
                内容区域
              </div>
            </Spin>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的加载组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示加载组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spin,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <Spin>
          <template #indicator>
            <div class="custom-spin">
              <div class="custom-spin-dot"></div>
            </div>
          </template>
        </Spin>
      </Space>
    \`,
    styles: [\`
      .custom-spin {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
      }
      .custom-spin-dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #1890ff;
        opacity: 0.3;
        animation: custom-spin 1.2s infinite ease-in-out;
      }
      @keyframes custom-spin {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1.0);
          opacity: 0;
        }
      }
    \`]
  }),
  parameters: {
    docs: {
      description: {
        story: '使用自定义样式的加载组件。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const q=["Default","Size","WithTip","Nested","CustomIndicator","ThemeShowcase","CustomStyle"];export{o as CustomIndicator,d as CustomStyle,s as Default,p as Nested,a as Size,c as ThemeShowcase,r as WithTip,q as __namedExportsOrder,Y as default};
