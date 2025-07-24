import{d as B,ae as _,af as T,c as q,ag as F,ah as N,ai as y,v as C,aj as V,ak as E,al as I,am as b,an as x,ao as O,Z as D,r as i}from"./iframe-CiolPNwv.js";import{S as W}from"./index-8Ky1p_Uh.js";import{S as r}from"./index-C9_4AhMb.js";import{C as z}from"./CheckOutlined-CIIIVjBf.js";import{B as $}from"./index-DWv55aqM.js";import"./KeyCode-D63Tfrq7.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./omit-BBXwSgK8.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./initDefaultProps-CZpOG6Cc.js";const n=B({__name:"Switch",props:{autofocus:{type:Boolean},checked:{type:Boolean},checkedChildren:{},checkedValue:{type:[Boolean,String,Number]},disabled:{type:Boolean},loading:{type:Boolean},size:{},unCheckedChildren:{},unCheckedValue:{type:[Boolean,String,Number]}},setup(e){const t=e,a=_(),d=T(),o=q(()=>{const s={};return Object.keys(a).filter(c=>c.startsWith("on")).forEach(c=>{s[c]=a[c]}),s});return(s,c)=>(I(),F(C(W),V(t,E(o.value)),N({_:2},[C(d).checkedChildren?{name:"checkedChildren",fn:y(f=>[b(s.$slots,"checkedChildren",x(O(f||{})))]),key:"0"}:void 0,C(d).unCheckedChildren?{name:"unCheckedChildren",fn:y(f=>[b(s.$slots,"unCheckedChildren",x(O(f||{})))]),key:"1"}:void 0]),1040))}});n.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"checked",required:!1,type:{name:"boolean"}},{name:"checkedChildren",required:!1,type:{name:"any"}},{name:"checkedValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"default"'}]}},{name:"unCheckedChildren",required:!1,type:{name:"any"}},{name:"unCheckedValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"},{name:"number"}]}}],slots:[{name:"checkedChildren",scoped:!0,bindings:[]},{name:"unCheckedChildren",scoped:!0,bindings:[]}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Switch/Switch.vue"]};n.install=e=>{e.component("CgSwitch",n)};const{fn:ie}=__STORYBOOK_MODULE_TEST__,re={title:"Components/Switch",component:n,tags:["autodocs"],argTypes:{autofocus:{control:"boolean"},checked:{control:"boolean"},checkedChildren:{control:"text"},checkedValue:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},size:{control:"select",options:["small","default"]},unCheckedChildren:{control:"text"},unCheckedValue:{control:"text"}},args:{autofocus:!1,checked:!1,disabled:!1,loading:!1,size:"default"}},l={render:()=>({components:{Switch:n},setup(){return{onChange:t=>{console.log(`switch to ${t}`)}}},template:`
      <Switch default-checked @change="onChange" />
    `}),parameters:{docs:{description:{story:"最简单的用法。"}}}},h={render:()=>({components:{Switch:n,Space:r},template:`
      <Space>
        <Switch disabled />
        <Switch disabled default-checked />
      </Space>
    `}),parameters:{docs:{description:{story:"Switch 失效状态。"}}}},p={render:()=>({components:{Switch:n,Space:r},template:`
      <Space direction="vertical">
        <Switch checked-children="开" un-checked-children="关" default-checked />
        <Switch checked-children="1" un-checked-children="0" />
      </Space>
    `}),parameters:{docs:{description:{story:"带有文字和图标。"}}}},m={render:()=>({components:{Switch:n,CheckOutlined:z,CloseOutlined:D},template:`
      <Switch default-checked>
        <template #checkedChildren>
          <CheckOutlined />
        </template>
        <template #unCheckedChildren>
          <CloseOutlined />
        </template>
      </Switch>
    `}),parameters:{docs:{description:{story:"带有图标的开关。"}}}},u={render:()=>({components:{Switch:n,Space:r},template:`
      <Space direction="vertical">
        <Switch default-checked />
        <Switch size="small" default-checked />
      </Space>
    `}),parameters:{docs:{description:{story:'size="small" 表示小号开关。'}}}},g={render:()=>({components:{Switch:n,Space:r},template:`
      <Space direction="vertical">
        <Switch loading default-checked />
        <Switch loading />
        <Switch loading size="small" />
      </Space>
    `}),parameters:{docs:{description:{story:"标识开关操作仍在执行中。"}}}},S={render:()=>({components:{Switch:n,Button:$,Space:r},setup(){const e=i(!0),t=i(!1);return{checked:e,loading:t,toggle:()=>{t.value=!0,setTimeout(()=>{e.value=!e.value,t.value=!1},1e3)}}},template:`
      <Space>
        <Switch :loading="loading" :checked="checked" @change="toggle" />
        <Button type="primary" @click="toggle">Toggle</Button>
      </Space>
    `}),parameters:{docs:{description:{story:"需要异步控制开关时，可以使用 loading。"}}}},k={render:()=>({components:{Switch:n},setup(){const e=i("close");return{value:e,onChange:a=>{console.log("switch value:",a),e.value=a}}},template:`
      <Switch
        :checked="value === 'open'"
        checked-value="open"
        un-checked-value="close"
        @change="onChange"
      />
    `}),parameters:{docs:{description:{story:"自定义 checked 和 unchecked 时的值。"}}}},w={render:()=>({components:{Switch:n,Space:r},setup(){const e=i({switch1:!0,switch2:!1,switch3:!0});return{formData:e,onSwitch1Change:o=>{e.value.switch1=o},onSwitch2Change:o=>{e.value.switch2=o},onSwitch3Change:o=>{e.value.switch3=o}}},template:`
      <div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Enable notifications:</label>
          <Switch :checked="formData.switch1" @change="onSwitch1Change" />
        </div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Auto save:</label>
          <Switch :checked="formData.switch2" @change="onSwitch2Change" />
        </div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Dark mode:</label>
          <Switch :checked="formData.switch3" @change="onSwitch3Change" />
        </div>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Form Data:</strong>
          <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"在表单中使用开关。"}}}},v={render:()=>({components:{Switch:n,Space:r,CheckOutlined:z,CloseOutlined:D},setup(){const e=i(!0),t=i(!1),a=i(!0);return{checked1:e,checked2:t,checked3:a,onChange1:c=>{e.value=c},onChange2:c=>{t.value=c},onChange3:c=>{a.value=c}}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">开关组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础开关</h4>
            <Space>
              <Switch default-checked />
              <Switch />
              <Switch disabled />
              <Switch disabled default-checked />
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space>
              <Switch default-checked />
              <Switch size="small" default-checked />
            </Space>
          </div>
          
          <div>
            <h4>带文字</h4>
            <Space>
              <Switch 
                :checked="checked1" 
                @change="onChange1"
                checked-children="开" 
                un-checked-children="关" 
              />
              <Switch 
                :checked="checked2" 
                @change="onChange2"
                checked-children="ON" 
                un-checked-children="OFF" 
              />
            </Space>
          </div>
          
          <div>
            <h4>带图标</h4>
            <Switch :checked="checked3" @change="onChange3">
              <template #checkedChildren>
                <CheckOutlined />
              </template>
              <template #unCheckedChildren>
                <CloseOutlined />
              </template>
            </Switch>
          </div>
          
          <div>
            <h4>加载状态</h4>
            <Space>
              <Switch loading default-checked />
              <Switch loading />
              <Switch loading size="small" />
            </Space>
          </div>
          
          <div>
            <h4>表单应用</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">启用通知:</span>
                <Switch default-checked />
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">自动保存:</span>
                <Switch />
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">深色模式:</span>
                <Switch default-checked />
              </div>
            </div>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的开关组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示开关组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch
    },
    setup() {
      const onChange = (checked: boolean) => {
        console.log(\`switch to \${checked}\`);
      };
      return {
        onChange
      };
    },
    template: \`
      <Switch default-checked @change="onChange" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '最简单的用法。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space
    },
    template: \`
      <Space>
        <Switch disabled />
        <Switch disabled default-checked />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Switch 失效状态。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space
    },
    template: \`
      <Space direction="vertical">
        <Switch checked-children="开" un-checked-children="关" default-checked />
        <Switch checked-children="1" un-checked-children="0" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '带有文字和图标。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      CheckOutlined,
      CloseOutlined
    },
    template: \`
      <Switch default-checked>
        <template #checkedChildren>
          <CheckOutlined />
        </template>
        <template #unCheckedChildren>
          <CloseOutlined />
        </template>
      </Switch>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '带有图标的开关。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space
    },
    template: \`
      <Space direction="vertical">
        <Switch default-checked />
        <Switch size="small" default-checked />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'size="small" 表示小号开关。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space
    },
    template: \`
      <Space direction="vertical">
        <Switch loading default-checked />
        <Switch loading />
        <Switch loading size="small" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '标识开关操作仍在执行中。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Button,
      Space
    },
    setup() {
      const checked = ref(true);
      const loading = ref(false);
      const toggle = () => {
        loading.value = true;
        setTimeout(() => {
          checked.value = !checked.value;
          loading.value = false;
        }, 1000);
      };
      return {
        checked,
        loading,
        toggle
      };
    },
    template: \`
      <Space>
        <Switch :loading="loading" :checked="checked" @change="toggle" />
        <Button type="primary" @click="toggle">Toggle</Button>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '需要异步控制开关时，可以使用 loading。'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch
    },
    setup() {
      const value = ref('close');
      const onChange = (val: string) => {
        console.log('switch value:', val);
        value.value = val;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <Switch
        :checked="value === 'open'"
        checked-value="open"
        un-checked-value="close"
        @change="onChange"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '自定义 checked 和 unchecked 时的值。'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space
    },
    setup() {
      const formData = ref({
        switch1: true,
        switch2: false,
        switch3: true
      });
      const onSwitch1Change = (checked: boolean) => {
        formData.value.switch1 = checked;
      };
      const onSwitch2Change = (checked: boolean) => {
        formData.value.switch2 = checked;
      };
      const onSwitch3Change = (checked: boolean) => {
        formData.value.switch3 = checked;
      };
      return {
        formData,
        onSwitch1Change,
        onSwitch2Change,
        onSwitch3Change
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Enable notifications:</label>
          <Switch :checked="formData.switch1" @change="onSwitch1Change" />
        </div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Auto save:</label>
          <Switch :checked="formData.switch2" @change="onSwitch2Change" />
        </div>
        <div style="margin-bottom: 16px;">
          <label style="margin-right: 8px;">Dark mode:</label>
          <Switch :checked="formData.switch3" @change="onSwitch3Change" />
        </div>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Form Data:</strong>
          <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '在表单中使用开关。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Switch,
      Space,
      CheckOutlined,
      CloseOutlined
    },
    setup() {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(true);
      const onChange1 = (val: boolean) => {
        checked1.value = val;
      };
      const onChange2 = (val: boolean) => {
        checked2.value = val;
      };
      const onChange3 = (val: boolean) => {
        checked3.value = val;
      };
      return {
        checked1,
        checked2,
        checked3,
        onChange1,
        onChange2,
        onChange3
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">开关组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础开关</h4>
            <Space>
              <Switch default-checked />
              <Switch />
              <Switch disabled />
              <Switch disabled default-checked />
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space>
              <Switch default-checked />
              <Switch size="small" default-checked />
            </Space>
          </div>
          
          <div>
            <h4>带文字</h4>
            <Space>
              <Switch 
                :checked="checked1" 
                @change="onChange1"
                checked-children="开" 
                un-checked-children="关" 
              />
              <Switch 
                :checked="checked2" 
                @change="onChange2"
                checked-children="ON" 
                un-checked-children="OFF" 
              />
            </Space>
          </div>
          
          <div>
            <h4>带图标</h4>
            <Switch :checked="checked3" @change="onChange3">
              <template #checkedChildren>
                <CheckOutlined />
              </template>
              <template #unCheckedChildren>
                <CloseOutlined />
              </template>
            </Switch>
          </div>
          
          <div>
            <h4>加载状态</h4>
            <Space>
              <Switch loading default-checked />
              <Switch loading />
              <Switch loading size="small" />
            </Space>
          </div>
          
          <div>
            <h4>表单应用</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">启用通知:</span>
                <Switch default-checked />
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">自动保存:</span>
                <Switch />
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 120px;">深色模式:</span>
                <Switch default-checked />
              </div>
            </div>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的开关组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示开关组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const se=["Default","Disabled","WithText","WithIcon","TwoSizes","Loading","Controlled","CustomValue","SwitchInForm","ThemeShowcase"];export{S as Controlled,k as CustomValue,l as Default,h as Disabled,g as Loading,w as SwitchInForm,v as ThemeShowcase,u as TwoSizes,m as WithIcon,p as WithText,se as __namedExportsOrder,re as default};
