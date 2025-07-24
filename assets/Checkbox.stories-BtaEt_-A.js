import{d as C,ae as x,c as g,ag as v,ai as f,aj as y,ak as S,v as V,al as A,am as B,r as m}from"./iframe-CiolPNwv.js";import{C as _}from"./index-E-vnUIhK.js";import{S as h}from"./index-C9_4AhMb.js";import"./Checkbox-AHtH9zIz.js";import"./initDefaultProps-CZpOG6Cc.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./index-BCOXaZG9.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";const o=C({__name:"Checkbox",props:{autofocus:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{}},setup(e){const t=e,b=x(),k=g(()=>{const s={};return Object.keys(b).filter(a=>a.startsWith("on")).forEach(a=>{s[a]=b[a]}),s});return(s,a)=>(A(),v(V(_),y(t,S(k.value)),{default:f(()=>[B(s.$slots,"default")]),_:3},16))}});o.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"checked",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"indeterminate",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"any"}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Checkbox/Checkbox.vue"]};o.install=e=>{e.component("CgCheckbox",o)};const{fn:F}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Checkbox",component:o,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},autofocus:{control:"boolean"},value:{control:"text"},onChange:{action:"changed"}},args:{checked:!1,disabled:!1}},c={args:{},render:e=>({components:{Checkbox:o},setup(){return{args:e}},template:'<Checkbox v-bind="args">复选框</Checkbox>'})},r={args:{checked:!0},render:e=>({components:{Checkbox:o},setup(){return{args:e}},template:'<Checkbox v-bind="args">已选中</Checkbox>'})},n={render:()=>({components:{Checkbox:o,Space:h},template:`
      <Space>
        <Checkbox disabled>禁用</Checkbox>
        <Checkbox disabled checked>禁用且选中</Checkbox>
      </Space>
    `}),parameters:{docs:{description:{story:"禁用状态的复选框。"}}}},p={args:{indeterminate:!0},render:e=>({components:{Checkbox:o},setup(){return{args:e}},template:'<Checkbox v-bind="args">半选状态</Checkbox>'}),parameters:{docs:{description:{story:"半选状态的复选框，通常用于表示下级节点中有选中的节点，但不是全部选中。"}}}},d={render:()=>({components:{Checkbox:o},setup(){const e=m(!1);return{checked:e,toggleChecked:()=>{e.value=!e.value}}},template:`
      <div>
        <p style="margin-bottom: 16px;">
          <Checkbox :checked="checked" @change="toggleChecked">受控的复选框</Checkbox>
        </p>
        <p>
          <button @click="toggleChecked">{{ checked ? '取消选中' : '选中' }}</button>
        </p>
      </div>
    `}),parameters:{docs:{description:{story:"受控模式的复选框，通过外部状态控制选中状态。"}}}},l={render:()=>({components:{Checkbox:o,Space:h},setup(){const e=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"}],t=m(["A"]);return{options:e,selectedValues:t,onChange:k=>{t.value=k}}},template:`
      <div>
        <div style="margin-bottom: 16px;">
          <Checkbox.Group :options="options" v-model:value="selectedValues" @change="onChange" />
        </div>
        <p>选中的值: {{ selectedValues }}</p>
      </div>
    `}),parameters:{docs:{description:{story:"使用 Checkbox.Group 实现复选框组。"}}}},i={render:()=>({components:{Checkbox:o,Space:h},setup(){const e=["选项 A","选项 B","选项 C"],t=m(["选项 A"]);return{plainOptions:e,selectedValues:t}},template:`
      <div>
        <div style="margin-bottom: 16px;">
          <Checkbox.Group v-model:value="selectedValues">
            <Space direction="vertical">
              <Checkbox v-for="option in plainOptions" :key="option" :value="option">{{ option }}</Checkbox>
            </Space>
          </Checkbox.Group>
        </div>
        <p>选中的值: {{ selectedValues }}</p>
      </div>
    `}),parameters:{docs:{description:{story:"使用 Space 组件实现垂直布局的复选框组。"}}}},u={render:()=>({components:{Checkbox:o,Space:h},setup(){const e=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"}],t=m(["A"]);return{options:e,selectedValues:t}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">复选框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Checkbox>未选中</Checkbox>
            <Checkbox checked>已选中</Checkbox>
            <Checkbox indeterminate>半选状态</Checkbox>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox disabled checked>禁用且选中</Checkbox>
          </Space>
          
          <div>
            <Checkbox.Group :options="options" v-model:value="selectedValues" />
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的复选框组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示复选框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args">复选框</Checkbox>'
  })
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args">已选中</Checkbox>'
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Space
    },
    template: \`
      <Space>
        <Checkbox disabled>禁用</Checkbox>
        <Checkbox disabled checked>禁用且选中</Checkbox>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '禁用状态的复选框。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<Checkbox v-bind="args">半选状态</Checkbox>'
  }),
  parameters: {
    docs: {
      description: {
        story: '半选状态的复选框，通常用于表示下级节点中有选中的节点，但不是全部选中。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      const toggleChecked = () => {
        checked.value = !checked.value;
      };
      return {
        checked,
        toggleChecked
      };
    },
    template: \`
      <div>
        <p style="margin-bottom: 16px;">
          <Checkbox :checked="checked" @change="toggleChecked">受控的复选框</Checkbox>
        </p>
        <p>
          <button @click="toggleChecked">{{ checked ? '取消选中' : '选中' }}</button>
        </p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '受控模式的复选框，通过外部状态控制选中状态。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Space
    },
    setup() {
      const options = [{
        label: '选项 A',
        value: 'A'
      }, {
        label: '选项 B',
        value: 'B'
      }, {
        label: '选项 C',
        value: 'C'
      }];
      const selectedValues = ref(['A']);
      const onChange = (checkedValues: string[]) => {
        selectedValues.value = checkedValues;
      };
      return {
        options,
        selectedValues,
        onChange
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 16px;">
          <Checkbox.Group :options="options" v-model:value="selectedValues" @change="onChange" />
        </div>
        <p>选中的值: {{ selectedValues }}</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 Checkbox.Group 实现复选框组。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Space
    },
    setup() {
      const plainOptions = ['选项 A', '选项 B', '选项 C'];
      const selectedValues = ref(['选项 A']);
      return {
        plainOptions,
        selectedValues
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 16px;">
          <Checkbox.Group v-model:value="selectedValues">
            <Space direction="vertical">
              <Checkbox v-for="option in plainOptions" :key="option" :value="option">{{ option }}</Checkbox>
            </Space>
          </Checkbox.Group>
        </div>
        <p>选中的值: {{ selectedValues }}</p>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 Space 组件实现垂直布局的复选框组。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox,
      Space
    },
    setup() {
      const options = [{
        label: '选项 A',
        value: 'A'
      }, {
        label: '选项 B',
        value: 'B'
      }, {
        label: '选项 C',
        value: 'C'
      }];
      const selectedValues = ref(['A']);
      return {
        options,
        selectedValues
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">复选框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Checkbox>未选中</Checkbox>
            <Checkbox checked>已选中</Checkbox>
            <Checkbox indeterminate>半选状态</Checkbox>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox disabled checked>禁用且选中</Checkbox>
          </Space>
          
          <div>
            <Checkbox.Group :options="options" v-model:value="selectedValues" />
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的复选框组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示复选框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const K=["Default","Checked","Disabled","Indeterminate","Controlled","Group","Layout","ThemeShowcase"];export{r as Checked,d as Controlled,c as Default,n as Disabled,l as Group,p as Indeterminate,i as Layout,u as ThemeShowcase,K as __namedExportsOrder,H as default};
