import{aq as o}from"./iframe-CiolPNwv.js";import{B as n}from"./index-DWv55aqM.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./initDefaultProps-CZpOG6Cc.js";const t={name:"CgNotification",open:o.open,success:o.success,info:o.info,warning:o.warning,error:o.error,close:o.close,destroy:o.destroy,config:o.config,useNotification:o.useNotification};t.__docgenInfo={displayName:"CgNotification",exportName:"default",description:"",tags:{},sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Notification/Notification.vue"]};const T={title:"Components/Notification",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"通知提醒标题"},description:{control:"text",description:"通知提醒内容"},duration:{control:{type:"number",min:0},description:"默认 4.5 秒后自动关闭，配置为 0 则不自动关闭"},placement:{control:"select",options:["topLeft","topRight","bottomLeft","bottomRight"],description:"弹出位置"},type:{control:"select",options:["success","info","warning","error"],description:"通知类型"}}},a={render:i=>({components:{CgNotification:t,AButton:n},setup(){return{openNotification:()=>{t.open({message:"通知标题",description:"这是通知描述。这是通知描述。这是通知描述。",...i})},args:i}},template:`
      <div>
        <a-button type="primary" @click="openNotification">打开通知</a-button>
      </div>
    `}),args:{duration:4.5,placement:"topRight"}},c={render:()=>({components:{AButton:n},setup(){return{openSuccessNotification:()=>{t.success({message:"成功",description:"这是一条成功的通知提醒"})},openInfoNotification:()=>{t.info({message:"信息",description:"这是一条信息的通知提醒"})},openWarningNotification:()=>{t.warning({message:"警告",description:"这是一条警告的通知提醒"})},openErrorNotification:()=>{t.error({message:"错误",description:"这是一条错误的通知提醒"})}}},template:`
      <div>
        <a-button type="success" style="margin-right: 10px" @click="openSuccessNotification">成功</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openInfoNotification">信息</a-button>
        <a-button type="warning" style="margin-right: 10px" @click="openWarningNotification">警告</a-button>
        <a-button type="danger" @click="openErrorNotification">错误</a-button>
      </div>
    `})},r={render:()=>({components:{AButton:n},setup(){return{openNotificationTopLeft:()=>{t.info({message:"通知标题",description:"这是通知描述",placement:"topLeft"})},openNotificationTopRight:()=>{t.info({message:"通知标题",description:"这是通知描述",placement:"topRight"})},openNotificationBottomLeft:()=>{t.info({message:"通知标题",description:"这是通知描述",placement:"bottomLeft"})},openNotificationBottomRight:()=>{t.info({message:"通知标题",description:"这是通知描述",placement:"bottomRight"})}}},template:`
      <div>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationTopLeft">左上角</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationTopRight">右上角</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationBottomLeft">左下角</a-button>
        <a-button type="primary" @click="openNotificationBottomRight">右下角</a-button>
      </div>
    `})},p={render:()=>({components:{AButton:n},setup(){return{openNotification:()=>{t.info({message:"通知标题",description:"这个通知不会自动关闭",duration:0})}}},template:`
      <div>
        <a-button type="primary" @click="openNotification">打开通知（不自动关闭）</a-button>
      </div>
    `})},s={render:()=>({components:{AButton:n},setup(){return{openNotification:()=>{t.open({message:"通知标题",description:"这是通知描述",btn:e=>e(n,{type:"primary",size:"small",onClick:()=>t.close("custom-key")},"知道了"),key:"custom-key"})}}},template:`
      <div>
        <a-button type="primary" @click="openNotification">自定义按钮</a-button>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgNotification: Notification,
      AButton: Button
    },
    setup() {
      const openNotification = () => {
        Notification.open({
          message: '通知标题',
          description: '这是通知描述。这是通知描述。这是通知描述。',
          ...args
        });
      };
      return {
        openNotification,
        args
      };
    },
    template: \`
      <div>
        <a-button type="primary" @click="openNotification">打开通知</a-button>
      </div>
    \`
  }),
  args: {
    duration: 4.5,
    placement: 'topRight'
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AButton: Button
    },
    setup() {
      const openSuccessNotification = () => {
        Notification.success({
          message: '成功',
          description: '这是一条成功的通知提醒'
        });
      };
      const openInfoNotification = () => {
        Notification.info({
          message: '信息',
          description: '这是一条信息的通知提醒'
        });
      };
      const openWarningNotification = () => {
        Notification.warning({
          message: '警告',
          description: '这是一条警告的通知提醒'
        });
      };
      const openErrorNotification = () => {
        Notification.error({
          message: '错误',
          description: '这是一条错误的通知提醒'
        });
      };
      return {
        openSuccessNotification,
        openInfoNotification,
        openWarningNotification,
        openErrorNotification
      };
    },
    template: \`
      <div>
        <a-button type="success" style="margin-right: 10px" @click="openSuccessNotification">成功</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openInfoNotification">信息</a-button>
        <a-button type="warning" style="margin-right: 10px" @click="openWarningNotification">警告</a-button>
        <a-button type="danger" @click="openErrorNotification">错误</a-button>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AButton: Button
    },
    setup() {
      const openNotificationTopLeft = () => {
        Notification.info({
          message: '通知标题',
          description: '这是通知描述',
          placement: 'topLeft'
        });
      };
      const openNotificationTopRight = () => {
        Notification.info({
          message: '通知标题',
          description: '这是通知描述',
          placement: 'topRight'
        });
      };
      const openNotificationBottomLeft = () => {
        Notification.info({
          message: '通知标题',
          description: '这是通知描述',
          placement: 'bottomLeft'
        });
      };
      const openNotificationBottomRight = () => {
        Notification.info({
          message: '通知标题',
          description: '这是通知描述',
          placement: 'bottomRight'
        });
      };
      return {
        openNotificationTopLeft,
        openNotificationTopRight,
        openNotificationBottomLeft,
        openNotificationBottomRight
      };
    },
    template: \`
      <div>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationTopLeft">左上角</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationTopRight">右上角</a-button>
        <a-button type="primary" style="margin-right: 10px" @click="openNotificationBottomLeft">左下角</a-button>
        <a-button type="primary" @click="openNotificationBottomRight">右下角</a-button>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AButton: Button
    },
    setup() {
      const openNotification = () => {
        Notification.info({
          message: '通知标题',
          description: '这个通知不会自动关闭',
          duration: 0
        });
      };
      return {
        openNotification
      };
    },
    template: \`
      <div>
        <a-button type="primary" @click="openNotification">打开通知（不自动关闭）</a-button>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AButton: Button
    },
    setup() {
      const openNotification = () => {
        Notification.open({
          message: '通知标题',
          description: '这是通知描述',
          btn: (h: any) => h(Button, {
            type: 'primary',
            size: 'small',
            onClick: () => Notification.close('custom-key')
          }, '知道了'),
          key: 'custom-key'
        });
      };
      return {
        openNotification
      };
    },
    template: \`
      <div>
        <a-button type="primary" @click="openNotification">自定义按钮</a-button>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const W=["Basic","WithTypes","WithPlacement","WithCustomDuration","WithCustomButton"];export{a as Basic,s as WithCustomButton,p as WithCustomDuration,r as WithPlacement,c as WithTypes,W as __namedExportsOrder,T as default};
