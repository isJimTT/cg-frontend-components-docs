import{d as L,ae as P,c as z,ag as $,ai as v,aj as q,ak as N,v as j,al as K,am as k,an as I,ao as F,aw as l,R as p,S as V,U as E,T as A,r as s}from"./iframe-CiolPNwv.js";import{M as W}from"./index-C3K9ztOD.js";import{B as r}from"./index-DWv55aqM.js";import{S as m}from"./index-C9_4AhMb.js";import{I as R}from"./index-lJJICqKF.js";import{F as _}from"./index-C4zhauUL.js";import{C as U}from"./index-E-vnUIhK.js";import"./index-CkwMM7Xi.js";import"./KeyCode-D63Tfrq7.js";import"./omit-BBXwSgK8.js";import"./pickAttrs-8uwpYw_5.js";import"./initDefaultProps-CZpOG6Cc.js";import"./PortalWrapper-ig5OaliN.js";import"./raf-Deuc0E8-.js";import"./motion-CzF1iTch.js";import"./zoom-D2IHdkts.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./useDestroyed-BcdaAeZk.js";import"./vnode-B4SLhmi3.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./FormItemContext-BKi0klUv.js";import"./statusUtils-QYI0Q3t5.js";import"./BaseInput-D2epJhM9.js";import"./css-DDkvXkMO.js";import"./index-BQIp7ISY.js";import"./SearchOutlined-UrLs3OCM.js";import"./isPlainObject-CGgsQr0R.js";import"./index-TLYrHIS2.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./EyeOutlined-Cwmsf3ds.js";import"./Trigger-D0k0f5w4.js";import"./hasIn-C_lX_94a.js";import"./isSymbol-C1qQj8zB.js";import"./Col-BHb-1vOH.js";import"./responsiveObserve-Cqxd3VwU.js";import"./_arrayIncludes-B8uzE354.js";import"./debounce-DAxstHlp.js";import"./index-D70oGXWT.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./collapseMotion-DlFXgzvQ.js";import"./Checkbox-AHtH9zIz.js";import"./index-BCOXaZG9.js";const D=L({__name:"Modal",setup(e){const t=e,n=P(),c=z(()=>{const a={};return Object.keys(n).filter(i=>i.startsWith("on")).forEach(i=>{a[i]=n[i]}),a});return(a,i)=>(K(),$(j(W),q(t,N(c.value)),{title:v(d=>[k(a.$slots,"title",I(F(d||{})))]),footer:v(d=>[k(a.$slots,"footer",I(F(d||{})))]),closeIcon:v(d=>[k(a.$slots,"closeIcon",I(F(d||{})))]),default:v(()=>[k(a.$slots,"default")]),_:3},16))}});D.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},slots:[{name:"title",scoped:!0,bindings:[]},{name:"footer",scoped:!0,bindings:[]},{name:"closeIcon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Modal/Modal.vue"]};const h=e=>t=>W[e]({...t,content:typeof t.content=="string"?l("div",t.content):t.content}),o=D;o.info=h("info");o.success=h("success");o.error=h("error");o.warning=h("warning");o.confirm=h("confirm");o.destroyAll=()=>{W.destroyAll()};o.install=e=>{e.component("CgModal",o),e.config.globalProperties.$modal={info:o.info,success:o.success,error:o.error,warning:o.warning,confirm:o.confirm,destroyAll:o.destroyAll}};const{fn:Ze}=__STORYBOOK_MODULE_TEST__,eo={title:"Components/Modal",component:o,tags:["autodocs"],argTypes:{centered:{control:"boolean"},closable:{control:"boolean"},confirmLoading:{control:"boolean"},destroyOnClose:{control:"boolean"},keyboard:{control:"boolean"},mask:{control:"boolean"},maskClosable:{control:"boolean"},open:{control:"boolean"},title:{control:"text"},width:{control:"text"},okText:{control:"text"},cancelText:{control:"text"},okType:{control:"select",options:["primary","ghost","dashed","danger","link","text"]}},args:{centered:!1,closable:!0,confirmLoading:!1,destroyOnClose:!1,keyboard:!0,mask:!0,maskClosable:!0,open:!1,title:"对话框标题",okText:"确定",cancelText:"取消",okType:"primary"}},w={render:()=>({components:{Modal:o,Button:r},setup(){const e=s(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:a=>{console.log(a),e.value=!1},handleCancel:a=>{console.log(a),e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">打开对话框</Button>
        <Modal
          title="基础对话框"
          v-model:open="visible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"基础对话框，点击确定按钮和取消按钮分别触发 ok 和 cancel 事件。"}}}},M={render:()=>({components:{Modal:o,Button:r},setup(){const e=s(!1),t=s(!1),n=s("对话框内容");return{visible:e,confirmLoading:t,modalText:n,showModal:()=>{e.value=!0},handleOk:()=>{n.value="对话框将在2秒后关闭",t.value=!0,setTimeout(()=>{e.value=!1,t.value=!1,n.value="对话框内容"},2e3)},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">打开异步关闭对话框</Button>
        <Modal
          title="异步关闭对话框"
          v-model:open="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>{{ modalText }}</p>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"点击确定后异步关闭对话框，例如提交表单。"}}}},C={render:()=>({components:{Modal:o,Button:r,Space:m},setup(){const e=s(!1);return{visible:e,showModal:()=>{e.value=!0},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">自定义页脚按钮</Button>
        <Modal
          title="自定义页脚"
          v-model:open="visible"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <template #footer>
            <Space>
              <Button>重置</Button>
              <Button type="primary" @click="handleCancel">提交</Button>
              <Button @click="handleCancel">取消</Button>
            </Space>
          </template>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"自定义页脚内容，可以添加更多的按钮。"}}}},g={render:()=>({components:{Modal:o,Button:r},setup(){const e=s(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:()=>{e.value=!1},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">垂直居中对话框</Button>
        <Modal
          title="垂直居中对话框"
          v-model:open="visible"
          :centered="true"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"设置 centered 属性使对话框垂直居中显示。"}}}},y={render:()=>({components:{Modal:o,Button:r},setup(){const e=s(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:()=>{e.value=!1},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">自定义宽度对话框</Button>
        <Modal
          title="自定义宽度对话框"
          v-model:open="visible"
          width="80%"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"使用 width 属性来设置对话框宽度。"}}}},b={render:()=>({components:{Button:r,Space:m,ExclamationCircleOutlined:p},setup(){return{showConfirm:()=>{o.confirm({title:"确认对话框",icon:l(p),content:l("div",{},[l("p","确定要执行此操作吗？"),l("p","此操作不可逆。")]),okText:"确定",cancelText:"取消",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})}}},template:`
      <div>
        <Button @click="showConfirm">确认对话框</Button>
      </div>
    `}),parameters:{docs:{description:{story:"使用 Modal.confirm() 可以快速创建确认对话框。"}}}},B={render:()=>({components:{Button:r,Space:m},setup(){return{info:()=>{o.info({title:"信息提示",content:l("div",{},[l("p","这是一条信息提示")]),onOk(){}})},success:()=>{o.success({title:"成功提示",content:"操作已成功完成"})},error:()=>{o.error({title:"错误提示",content:"操作执行失败"})},warning:()=>{o.warning({title:"警告提示",content:"此操作存在风险"})}}},template:`
      <Space>
        <Button @click="info">信息</Button>
        <Button @click="success">成功</Button>
        <Button @click="error">错误</Button>
        <Button @click="warning">警告</Button>
      </Space>
    `}),parameters:{docs:{description:{story:"不同类型的信息提示，包括普通信息、成功、失败、警告。"}}}},S={render:()=>({components:{Modal:o,Button:r,Form:_,Input:R},setup(){const e=s(!1),t=s(),n=s({username:"",password:""});return{visible:e,formRef:t,formState:n,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showModal:()=>{e.value=!0},handleOk:()=>{t.value.validate().then(()=>{console.log("Form values:",n.value),e.value=!1}).catch(f=>{console.log("Validation failed:",f)})},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">表单对话框</Button>
        <Modal
          title="登录表单"
          v-model:open="visible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <Form
            ref="formRef"
            :model="formState"
            :rules="rules"
            layout="vertical"
          >
            <Form.Item label="用户名" name="username">
              <Input v-model:value="formState.username" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password v-model:value="formState.password" placeholder="请输入密码" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"在对话框中使用表单。"}}}},x={render:()=>({components:{Modal:o,Button:r,Form:_,Input:R,Checkbox:U},setup(){const e=s(!1),t=s(),n=s({username:"",remember:!0});return{visible:e,formRef:t,formState:n,showModal:()=>{e.value=!0},handleOk:()=>{console.log("Form values:",n.value),e.value=!1},handleCancel:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showModal">关闭时销毁子元素</Button>
        <Modal
          title="关闭时销毁子元素"
          v-model:open="visible"
          :destroy-on-close="true"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <Form
            ref="formRef"
            :model="formState"
            layout="vertical"
          >
            <Form.Item label="用户名" name="username">
              <Input v-model:value="formState.username" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox v-model:checked="formState.remember">记住我</Checkbox>
            </Form.Item>
          </Form>
          <p>关闭对话框后，表单内容将被销毁</p>
        </Modal>
      </div>
    `}),parameters:{docs:{description:{story:"设置 destroyOnClose 为 true 时，关闭对话框后会销毁其中的子元素。"}}}},O={render:()=>({components:{Modal:o,Button:r,Space:m,InfoCircleOutlined:A,ExclamationCircleOutlined:p,CheckCircleOutlined:E,CloseCircleOutlined:V},setup(){const e=s(!1),t=s(!1),n=s(!1);return{defaultVisible:e,centeredVisible:t,customVisible:n,showDefault:()=>{e.value=!0},showCentered:()=>{t.value=!0},showCustom:()=>{n.value=!0},handleOk:u=>{u==="default"&&(e.value=!1),u==="centered"&&(t.value=!1),u==="custom"&&(n.value=!1)},handleCancel:u=>{u==="default"&&(e.value=!1),u==="centered"&&(t.value=!1),u==="custom"&&(n.value=!1)},showInfo:()=>{o.info({title:"信息提示",content:"这是一条信息提示",icon:l(A),okText:"知道了"})},showSuccess:()=>{o.success({title:"成功提示",content:"操作已成功完成",icon:l(E),okText:"确定"})},showError:()=>{o.error({title:"错误提示",content:"操作执行失败",icon:l(V),okText:"关闭"})},showWarning:()=>{o.warning({title:"警告提示",content:"此操作存在风险",icon:l(p),okText:"我知道了"})}}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">对话框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <Button type="primary" @click="showDefault">基础对话框</Button>
            <Button type="primary" @click="showCentered">垂直居中对话框</Button>
            <Button type="primary" @click="showCustom">自定义对话框</Button>
          </Space>
          
          <Space>
            <Button @click="showInfo">信息对话框</Button>
            <Button @click="showSuccess">成功对话框</Button>
            <Button @click="showError">错误对话框</Button>
            <Button @click="showWarning">警告对话框</Button>
          </Space>
        </Space>
        
        <Modal
          title="基础对话框"
          v-model:open="defaultVisible"
          @ok="() => handleOk('default')"
          @cancel="() => handleCancel('default')"
        >
          <p>这是一个基础对话框的内容</p>
          <p>可以包含多行文本和其他组件</p>
        </Modal>
        
        <Modal
          title="垂直居中对话框"
          v-model:open="centeredVisible"
          :centered="true"
          @ok="() => handleOk('centered')"
          @cancel="() => handleCancel('centered')"
        >
          <p>这个对话框在屏幕中垂直居中显示</p>
          <p>适合需要用户重点关注的内容</p>
        </Modal>
        
        <Modal
          title="自定义对话框"
          v-model:open="customVisible"
          width="600px"
          :mask-closable="false"
          @ok="() => handleOk('custom')"
          @cancel="() => handleCancel('custom')"
        >
          <template #title>
            <div style="display: flex; align-items: center;">
              <ExclamationCircleOutlined style="color: #faad14; margin-right: 8px;" />
              <span>重要提示</span>
            </div>
          </template>
          <div>
            <p>这是一个自定义样式的对话框</p>
            <p>包含自定义标题、宽度和其他属性</p>
          </div>
          <template #footer>
            <Space>
              <Button @click="() => handleCancel('custom')">取消</Button>
              <Button type="primary" @click="() => handleOk('custom')">确认</Button>
            </Space>
          </template>
        </Modal>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的对话框组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示对话框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}},T={render:()=>({components:{Button:r,Space:m},setup(){return{showInfo:()=>{o.info({title:"信息提示",content:"这是使用 Modal.info() 方法创建的信息提示",icon:l(A),okText:"知道了",onOk(){console.log("点击了确定按钮")}})},showSuccess:()=>{o.success({title:"成功提示",content:"操作已成功完成！",icon:l(E),okText:"确定"})},showError:()=>{o.error({title:"错误提示",content:"操作执行失败，请重试",icon:l(V),okText:"确定"})},showWarning:()=>{o.warning({title:"警告提示",content:"此操作存在风险，请谨慎操作",icon:l(p),okText:"我知道了"})},showConfirm:()=>{o.confirm({title:"确认删除",content:"确定要删除这个项目吗？删除后无法恢复。",icon:l(p),okText:"确定删除",okType:"danger",cancelText:"取消",onOk(){return console.log("确认删除"),new Promise(f=>{setTimeout(()=>{console.log("删除完成"),f(void 0)},1e3)})},onCancel(){console.log("取消删除")}})},showCustomContent:()=>{o.info({title:"自定义内容",content:l("div",[l("p","这是自定义的内容："),l("ul",{style:"margin: 8px 0; padding-left: 20px;"},[l("li","支持 VNode 内容"),l("li","支持复杂的组件结构"),l("li","支持自定义样式")]),l("p",{style:"color: #666; font-size: 12px;"},"提示：这些内容都是通过 h() 函数创建的")]),width:500,centered:!0})},destroyAll:()=>{o.destroyAll(),console.log("已销毁所有Modal实例")}}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">Modal 实例方法展示</h3>
        <Space direction="vertical" size="middle" style="width: 100%;">
          <div>
            <h4 style="margin-bottom: 8px;">基础实例方法：</h4>
            <Space>
              <Button @click="showInfo">Modal.info()</Button>
              <Button @click="showSuccess">Modal.success()</Button>
              <Button @click="showError">Modal.error()</Button>
              <Button @click="showWarning">Modal.warning()</Button>
            </Space>
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px;">确认对话框：</h4>
            <Space>
              <Button @click="showConfirm">Modal.confirm()</Button>
            </Space>
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px;">高级用法：</h4>
            <Space>
              <Button @click="showCustomContent">自定义内容</Button>
              <Button @click="destroyAll" type="dashed">销毁所有Modal</Button>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #0369a1;">使用说明：</h4>
          <ul style="margin: 0; padding-left: 20px; color: #0369a1;">
            <li>Modal.info() - 显示信息提示</li>
            <li>Modal.success() - 显示成功提示</li>
            <li>Modal.error() - 显示错误提示</li>
            <li>Modal.warning() - 显示警告提示</li>
            <li>Modal.confirm() - 显示确认对话框</li>
            <li>Modal.destroyAll() - 销毁所有Modal实例</li>
          </ul>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示 Modal 组件的实例方法使用。这些方法可以快速创建各种类型的对话框，类似于 Message.info() 的调用方式。"}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const visible = ref(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = (e: MouseEvent) => {
        console.log(e);
        visible.value = false;
      };
      const handleCancel = (e: MouseEvent) => {
        console.log(e);
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">打开对话框</Button>
        <Modal
          title="基础对话框"
          v-model:open="visible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '基础对话框，点击确定按钮和取消按钮分别触发 ok 和 cancel 事件。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const visible = ref(false);
      const confirmLoading = ref(false);
      const modalText = ref('对话框内容');
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        modalText.value = '对话框将在2秒后关闭';
        confirmLoading.value = true;
        setTimeout(() => {
          visible.value = false;
          confirmLoading.value = false;
          modalText.value = '对话框内容';
        }, 2000);
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        visible,
        confirmLoading,
        modalText,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">打开异步关闭对话框</Button>
        <Modal
          title="异步关闭对话框"
          v-model:open="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>{{ modalText }}</p>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '点击确定后异步关闭对话框，例如提交表单。'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button,
      Space
    },
    setup() {
      const visible = ref(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">自定义页脚按钮</Button>
        <Modal
          title="自定义页脚"
          v-model:open="visible"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <template #footer>
            <Space>
              <Button>重置</Button>
              <Button type="primary" @click="handleCancel">提交</Button>
              <Button @click="handleCancel">取消</Button>
            </Space>
          </template>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '自定义页脚内容，可以添加更多的按钮。'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const visible = ref(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        visible.value = false;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">垂直居中对话框</Button>
        <Modal
          title="垂直居中对话框"
          v-model:open="visible"
          :centered="true"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置 centered 属性使对话框垂直居中显示。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const visible = ref(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        visible.value = false;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">自定义宽度对话框</Button>
        <Modal
          title="自定义宽度对话框"
          v-model:open="visible"
          width="80%"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>对话框内容...</p>
          <p>更多内容...</p>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 width 属性来设置对话框宽度。'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Space,
      ExclamationCircleOutlined
    },
    setup() {
      const showConfirm = () => {
        Modal.confirm({
          title: '确认对话框',
          icon: h(ExclamationCircleOutlined),
          content: h('div', {}, [h('p', '确定要执行此操作吗？'), h('p', '此操作不可逆。')]),
          okText: '确定',
          cancelText: '取消',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          }
        });
      };
      return {
        showConfirm
      };
    },
    template: \`
      <div>
        <Button @click="showConfirm">确认对话框</Button>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 Modal.confirm() 可以快速创建确认对话框。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Space
    },
    setup() {
      const info = () => {
        Modal.info({
          title: '信息提示',
          content: h('div', {}, [h('p', '这是一条信息提示')]),
          onOk() {}
        });
      };
      const success = () => {
        Modal.success({
          title: '成功提示',
          content: '操作已成功完成'
        });
      };
      const error = () => {
        Modal.error({
          title: '错误提示',
          content: '操作执行失败'
        });
      };
      const warning = () => {
        Modal.warning({
          title: '警告提示',
          content: '此操作存在风险'
        });
      };
      return {
        info,
        success,
        error,
        warning
      };
    },
    template: \`
      <Space>
        <Button @click="info">信息</Button>
        <Button @click="success">成功</Button>
        <Button @click="error">错误</Button>
        <Button @click="warning">警告</Button>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '不同类型的信息提示，包括普通信息、成功、失败、警告。'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button,
      Form,
      Input
    },
    setup() {
      const visible = ref(false);
      const formRef = ref();
      const formState = ref({
        username: '',
        password: ''
      });
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        formRef.value.validate().then(() => {
          console.log('Form values:', formState.value);
          visible.value = false;
        }).catch((error: any) => {
          console.log('Validation failed:', error);
        });
      };
      const handleCancel = () => {
        visible.value = false;
      };
      const rules = {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      };
      return {
        visible,
        formRef,
        formState,
        rules,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">表单对话框</Button>
        <Modal
          title="登录表单"
          v-model:open="visible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <Form
            ref="formRef"
            :model="formState"
            :rules="rules"
            layout="vertical"
          >
            <Form.Item label="用户名" name="username">
              <Input v-model:value="formState.username" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password v-model:value="formState.password" placeholder="请输入密码" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '在对话框中使用表单。'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button,
      Form,
      Input,
      Checkbox
    },
    setup() {
      const visible = ref(false);
      const formRef = ref();
      const formState = ref({
        username: '',
        remember: true
      });
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = () => {
        console.log('Form values:', formState.value);
        visible.value = false;
      };
      const handleCancel = () => {
        visible.value = false;
      };
      return {
        visible,
        formRef,
        formState,
        showModal,
        handleOk,
        handleCancel
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showModal">关闭时销毁子元素</Button>
        <Modal
          title="关闭时销毁子元素"
          v-model:open="visible"
          :destroy-on-close="true"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <Form
            ref="formRef"
            :model="formState"
            layout="vertical"
          >
            <Form.Item label="用户名" name="username">
              <Input v-model:value="formState.username" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox v-model:checked="formState.remember">记住我</Checkbox>
            </Form.Item>
          </Form>
          <p>关闭对话框后，表单内容将被销毁</p>
        </Modal>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置 destroyOnClose 为 true 时，关闭对话框后会销毁其中的子元素。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button,
      Space,
      InfoCircleOutlined,
      ExclamationCircleOutlined,
      CheckCircleOutlined,
      CloseCircleOutlined
    },
    setup() {
      const defaultVisible = ref(false);
      const centeredVisible = ref(false);
      const customVisible = ref(false);
      const showDefault = () => {
        defaultVisible.value = true;
      };
      const showCentered = () => {
        centeredVisible.value = true;
      };
      const showCustom = () => {
        customVisible.value = true;
      };
      const handleOk = (type: string) => {
        if (type === 'default') defaultVisible.value = false;
        if (type === 'centered') centeredVisible.value = false;
        if (type === 'custom') customVisible.value = false;
      };
      const handleCancel = (type: string) => {
        if (type === 'default') defaultVisible.value = false;
        if (type === 'centered') centeredVisible.value = false;
        if (type === 'custom') customVisible.value = false;
      };
      const showInfo = () => {
        Modal.info({
          title: '信息提示',
          content: '这是一条信息提示',
          icon: h(InfoCircleOutlined),
          okText: '知道了'
        });
      };
      const showSuccess = () => {
        Modal.success({
          title: '成功提示',
          content: '操作已成功完成',
          icon: h(CheckCircleOutlined),
          okText: '确定'
        });
      };
      const showError = () => {
        Modal.error({
          title: '错误提示',
          content: '操作执行失败',
          icon: h(CloseCircleOutlined),
          okText: '关闭'
        });
      };
      const showWarning = () => {
        Modal.warning({
          title: '警告提示',
          content: '此操作存在风险',
          icon: h(ExclamationCircleOutlined),
          okText: '我知道了'
        });
      };
      return {
        defaultVisible,
        centeredVisible,
        customVisible,
        showDefault,
        showCentered,
        showCustom,
        handleOk,
        handleCancel,
        showInfo,
        showSuccess,
        showError,
        showWarning
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">对话框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <Button type="primary" @click="showDefault">基础对话框</Button>
            <Button type="primary" @click="showCentered">垂直居中对话框</Button>
            <Button type="primary" @click="showCustom">自定义对话框</Button>
          </Space>
          
          <Space>
            <Button @click="showInfo">信息对话框</Button>
            <Button @click="showSuccess">成功对话框</Button>
            <Button @click="showError">错误对话框</Button>
            <Button @click="showWarning">警告对话框</Button>
          </Space>
        </Space>
        
        <Modal
          title="基础对话框"
          v-model:open="defaultVisible"
          @ok="() => handleOk('default')"
          @cancel="() => handleCancel('default')"
        >
          <p>这是一个基础对话框的内容</p>
          <p>可以包含多行文本和其他组件</p>
        </Modal>
        
        <Modal
          title="垂直居中对话框"
          v-model:open="centeredVisible"
          :centered="true"
          @ok="() => handleOk('centered')"
          @cancel="() => handleCancel('centered')"
        >
          <p>这个对话框在屏幕中垂直居中显示</p>
          <p>适合需要用户重点关注的内容</p>
        </Modal>
        
        <Modal
          title="自定义对话框"
          v-model:open="customVisible"
          width="600px"
          :mask-closable="false"
          @ok="() => handleOk('custom')"
          @cancel="() => handleCancel('custom')"
        >
          <template #title>
            <div style="display: flex; align-items: center;">
              <ExclamationCircleOutlined style="color: #faad14; margin-right: 8px;" />
              <span>重要提示</span>
            </div>
          </template>
          <div>
            <p>这是一个自定义样式的对话框</p>
            <p>包含自定义标题、宽度和其他属性</p>
          </div>
          <template #footer>
            <Space>
              <Button @click="() => handleCancel('custom')">取消</Button>
              <Button type="primary" @click="() => handleOk('custom')">确认</Button>
            </Space>
          </template>
        </Modal>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的对话框组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示对话框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Space
    },
    setup() {
      const showInfo = () => {
        Modal.info({
          title: '信息提示',
          content: '这是使用 Modal.info() 方法创建的信息提示',
          icon: h(InfoCircleOutlined),
          okText: '知道了',
          onOk() {
            console.log('点击了确定按钮');
          }
        });
      };
      const showSuccess = () => {
        Modal.success({
          title: '成功提示',
          content: '操作已成功完成！',
          icon: h(CheckCircleOutlined),
          okText: '确定'
        });
      };
      const showError = () => {
        Modal.error({
          title: '错误提示',
          content: '操作执行失败，请重试',
          icon: h(CloseCircleOutlined),
          okText: '确定'
        });
      };
      const showWarning = () => {
        Modal.warning({
          title: '警告提示',
          content: '此操作存在风险，请谨慎操作',
          icon: h(ExclamationCircleOutlined),
          okText: '我知道了'
        });
      };
      const showConfirm = () => {
        Modal.confirm({
          title: '确认删除',
          content: '确定要删除这个项目吗？删除后无法恢复。',
          icon: h(ExclamationCircleOutlined),
          okText: '确定删除',
          okType: 'danger',
          cancelText: '取消',
          onOk() {
            console.log('确认删除');
            return new Promise(resolve => {
              setTimeout(() => {
                console.log('删除完成');
                resolve(void 0);
              }, 1000);
            });
          },
          onCancel() {
            console.log('取消删除');
          }
        });
      };
      const showCustomContent = () => {
        Modal.info({
          title: '自定义内容',
          content: h('div', [h('p', '这是自定义的内容：'), h('ul', {
            style: 'margin: 8px 0; padding-left: 20px;'
          }, [h('li', '支持 VNode 内容'), h('li', '支持复杂的组件结构'), h('li', '支持自定义样式')]), h('p', {
            style: 'color: #666; font-size: 12px;'
          }, '提示：这些内容都是通过 h() 函数创建的')]),
          width: 500,
          centered: true
        });
      };
      const destroyAll = () => {
        Modal.destroyAll();
        console.log('已销毁所有Modal实例');
      };
      return {
        showInfo,
        showSuccess,
        showError,
        showWarning,
        showConfirm,
        showCustomContent,
        destroyAll
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">Modal 实例方法展示</h3>
        <Space direction="vertical" size="middle" style="width: 100%;">
          <div>
            <h4 style="margin-bottom: 8px;">基础实例方法：</h4>
            <Space>
              <Button @click="showInfo">Modal.info()</Button>
              <Button @click="showSuccess">Modal.success()</Button>
              <Button @click="showError">Modal.error()</Button>
              <Button @click="showWarning">Modal.warning()</Button>
            </Space>
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px;">确认对话框：</h4>
            <Space>
              <Button @click="showConfirm">Modal.confirm()</Button>
            </Space>
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px;">高级用法：</h4>
            <Space>
              <Button @click="showCustomContent">自定义内容</Button>
              <Button @click="destroyAll" type="dashed">销毁所有Modal</Button>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #0369a1;">使用说明：</h4>
          <ul style="margin: 0; padding-left: 20px; color: #0369a1;">
            <li>Modal.info() - 显示信息提示</li>
            <li>Modal.success() - 显示成功提示</li>
            <li>Modal.error() - 显示错误提示</li>
            <li>Modal.warning() - 显示警告提示</li>
            <li>Modal.confirm() - 显示确认对话框</li>
            <li>Modal.destroyAll() - 销毁所有Modal实例</li>
          </ul>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示 Modal 组件的实例方法使用。这些方法可以快速创建各种类型的对话框，类似于 Message.info() 的调用方式。'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};const oo=["Default","AsyncClose","CustomFooter","Centered","CustomWidth","ConfirmationModal","ModalTypes","FormInModal","DestroyOnClose","ThemeShowcase","InstanceMethods"];export{M as AsyncClose,g as Centered,b as ConfirmationModal,C as CustomFooter,y as CustomWidth,w as Default,x as DestroyOnClose,S as FormInModal,T as InstanceMethods,B as ModalTypes,O as ThemeShowcase,oo as __namedExportsOrder,eo as default};
