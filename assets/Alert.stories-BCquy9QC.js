import{d as S,ae as v,af as C,c as O,ag as x,ah as I,ai as g,v as y,aj as _,ak as k,al as q,am as A,R as T,S as B,U as E,T as D}from"./iframe-CiolPNwv.js";import{A as W}from"./index-CWJ8WGwR.js";import{S as u}from"./index-C9_4AhMb.js";import"./vnode-B4SLhmi3.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";const e=S({__name:"Alert",props:{action:{},afterClose:{type:Function},banner:{type:Boolean},closable:{type:Boolean},closeIcon:{},description:{},icon:{},message:{},showIcon:{type:Boolean},type:{}},setup(n){const w=n,f=v(),h=C(),b=O(()=>{const t={};return Object.keys(f).forEach(r=>{r.startsWith("on")&&(t[r]=f[r])}),t});return(t,r)=>(q(),x(y(W),_(w,k(b.value)),I({default:g(()=>[A(t.$slots,"default")]),_:2},[y(h).icon?{name:"icon",fn:g(()=>[A(t.$slots,"icon")]),key:"0"}:void 0,y(h).description?{name:"description",fn:g(()=>[A(t.$slots,"description")]),key:"1"}:void 0]),1040))}});e.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"any"}},{name:"afterClose",required:!1,type:{name:"Function"}},{name:"banner",required:!1,type:{name:"boolean"}},{name:"closable",required:!1,type:{name:"boolean"}},{name:"closeIcon",required:!1,type:{name:"any"}},{name:"description",required:!1,type:{name:"any"}},{name:"icon",required:!1,type:{name:"any"}},{name:"message",required:!1,type:{name:"any"}},{name:"showIcon",required:!1,type:{name:"boolean"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"info"'},{name:'"warning"'},{name:'"error"'}]}}],slots:[{name:"icon"},{name:"description"},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Alert/Alert.vue"]};e.install=n=>{n.component("CgAlert",e)};const{fn:M}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Alert",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error"]},message:{control:"text"},description:{control:"text"},showIcon:{control:"boolean"},banner:{control:"boolean"},closable:{control:"boolean"}},args:{message:"提示信息"}},s={args:{},render:n=>({components:{Alert:e},setup(){return{args:n}},template:'<Alert v-bind="args" />'})},o={render:()=>({components:{Alert:e,Space:u},template:`
      <Space direction="vertical" style="width: 100%">
        <Alert message="成功提示" type="success" />
        <Alert message="信息提示" type="info" />
        <Alert message="警告提示" type="warning" />
        <Alert message="错误提示" type="error" />
      </Space>
    `}),parameters:{docs:{description:{story:"共有四种样式：成功、信息、警告、错误。"}}}},a={args:{message:"提示标题",description:"这是一段详细的描述信息，可以包含更多内容。"},render:n=>({components:{Alert:e},setup(){return{args:n}},template:'<Alert v-bind="args" />'})},c={render:()=>({components:{Alert:e,Space:u},template:`
      <Space direction="vertical" style="width: 100%">
        <Alert message="成功提示" type="success" show-icon />
        <Alert message="信息提示" type="info" show-icon />
        <Alert message="警告提示" type="warning" show-icon />
        <Alert message="错误提示" type="error" show-icon />
        <Alert
          message="成功提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="success"
          show-icon
        />
        <Alert
          message="信息提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="info"
          show-icon
        />
        <Alert
          message="警告提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="warning"
          show-icon
        />
        <Alert
          message="错误提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="error"
          show-icon
        />
      </Space>
    `}),parameters:{docs:{description:{story:"可以设置显示图标，根据 type 不同显示不同图标。"}}}},i={args:{message:"可关闭的提示",closable:!0},render:n=>({components:{Alert:e},setup(){return{args:n}},template:'<Alert v-bind="args" />'})},l={args:{message:"公告提示",banner:!0},render:n=>({components:{Alert:e},setup(){return{args:n}},template:'<Alert v-bind="args" />'})},p={render:()=>({components:{Alert:e,InfoCircleOutlined:D,CheckCircleOutlined:E,CloseCircleOutlined:B,ExclamationCircleOutlined:T},template:`
      <div>
        <Alert
          message="自定义图标"
          type="info"
        >
          <template #icon>
            <InfoCircleOutlined style="color: #1890ff" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="success"
        >
          <template #icon>
            <CheckCircleOutlined style="color: #52c41a" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="error"
        >
          <template #icon>
            <CloseCircleOutlined style="color: #ff4d4f" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="warning"
        >
          <template #icon>
            <ExclamationCircleOutlined style="color: #faad14" />
          </template>
        </Alert>
      </div>
    `}),parameters:{docs:{description:{story:"可以自定义图标。"}}}},m={render:()=>({components:{Alert:e,Space:u},template:`
      <Space direction="vertical" style="width: 100%">
        <Alert
          message="成功提示"
          type="success"
          show-icon
        >
          <template #action>
            <Space>
              <button>详情</button>
              <button>关闭</button>
            </Space>
          </template>
        </Alert>
        <Alert
          message="错误提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="error"
          show-icon
        >
          <template #action>
            <button>查看详情</button>
          </template>
        </Alert>
      </Space>
    `}),parameters:{docs:{description:{story:"可以自定义操作按钮。"}}}},d={render:()=>({components:{Alert:e,Space:u},template:`
      <div>
        <h3 style="margin-bottom: 16px;">提示组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space direction="vertical" style="width: 100%">
            <Alert message="成功提示" type="success" show-icon />
            <Alert message="信息提示" type="info" show-icon />
            <Alert message="警告提示" type="warning" show-icon />
            <Alert message="错误提示" type="error" show-icon />
          </Space>
          
          <Space direction="vertical" style="width: 100%">
            <Alert
              message="成功提示"
              description="这是一段详细的描述信息，可以包含更多内容。"
              type="success"
              show-icon
            />
            <Alert
              message="信息提示"
              description="这是一段详细的描述信息，可以包含更多内容。"
              type="info"
              show-icon
            />
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的提示组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示提示组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      Space
    },
    template: \`
      <Space direction="vertical" style="width: 100%">
        <Alert message="成功提示" type="success" />
        <Alert message="信息提示" type="info" />
        <Alert message="警告提示" type="warning" />
        <Alert message="错误提示" type="error" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '共有四种样式：成功、信息、警告、错误。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: '提示标题',
    description: '这是一段详细的描述信息，可以包含更多内容。'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      Space
    },
    template: \`
      <Space direction="vertical" style="width: 100%">
        <Alert message="成功提示" type="success" show-icon />
        <Alert message="信息提示" type="info" show-icon />
        <Alert message="警告提示" type="warning" show-icon />
        <Alert message="错误提示" type="error" show-icon />
        <Alert
          message="成功提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="success"
          show-icon
        />
        <Alert
          message="信息提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="info"
          show-icon
        />
        <Alert
          message="警告提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="warning"
          show-icon
        />
        <Alert
          message="错误提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="error"
          show-icon
        />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置显示图标，根据 type 不同显示不同图标。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: '可关闭的提示',
    closable: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    message: '公告提示',
    banner: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      InfoCircleOutlined,
      CheckCircleOutlined,
      CloseCircleOutlined,
      ExclamationCircleOutlined
    },
    template: \`
      <div>
        <Alert
          message="自定义图标"
          type="info"
        >
          <template #icon>
            <InfoCircleOutlined style="color: #1890ff" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="success"
        >
          <template #icon>
            <CheckCircleOutlined style="color: #52c41a" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="error"
        >
          <template #icon>
            <CloseCircleOutlined style="color: #ff4d4f" />
          </template>
        </Alert>
        <br />
        <Alert
          message="自定义图标"
          type="warning"
        >
          <template #icon>
            <ExclamationCircleOutlined style="color: #faad14" />
          </template>
        </Alert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义图标。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      Space
    },
    template: \`
      <Space direction="vertical" style="width: 100%">
        <Alert
          message="成功提示"
          type="success"
          show-icon
        >
          <template #action>
            <Space>
              <button>详情</button>
              <button>关闭</button>
            </Space>
          </template>
        </Alert>
        <Alert
          message="错误提示"
          description="这是一段详细的描述信息，可以包含更多内容。"
          type="error"
          show-icon
        >
          <template #action>
            <button>查看详情</button>
          </template>
        </Alert>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义操作按钮。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">提示组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space direction="vertical" style="width: 100%">
            <Alert message="成功提示" type="success" show-icon />
            <Alert message="信息提示" type="info" show-icon />
            <Alert message="警告提示" type="warning" show-icon />
            <Alert message="错误提示" type="error" show-icon />
          </Space>
          
          <Space direction="vertical" style="width: 100%">
            <Alert
              message="成功提示"
              description="这是一段详细的描述信息，可以包含更多内容。"
              type="success"
              show-icon
            />
            <Alert
              message="信息提示"
              description="这是一段详细的描述信息，可以包含更多内容。"
              type="info"
              show-icon
            />
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的提示组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示提示组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const Y=["Default","Types","WithDescription","WithIcon","Closable","Banner","CustomIcon","CustomAction","ThemeShowcase"];export{l as Banner,i as Closable,m as CustomAction,p as CustomIcon,s as Default,d as ThemeShowcase,o as Types,a as WithDescription,c as WithIcon,Y as __namedExportsOrder,P as default};
