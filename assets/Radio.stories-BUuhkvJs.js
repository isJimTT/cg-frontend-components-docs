import{d as y,ae as f,c as S,ag as k,ai as O,aj as z,ak as _,v as A,al as x,am as D,r}from"./iframe-CiolPNwv.js";import{R as j}from"./index-C6pOj_In.js";import{S as g}from"./index-C9_4AhMb.js";import{B as W}from"./index-DWv55aqM.js";import"./Checkbox-AHtH9zIz.js";import"./initDefaultProps-CZpOG6Cc.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./omit-BBXwSgK8.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";const H=y({__name:"Radio",props:{autofocus:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},value:{}},setup(a){const n=a,e=f(),u=S(()=>{const i={};return Object.keys(e).filter(t=>t.startsWith("on")).forEach(t=>{i[t]=e[t]}),i});return(i,t)=>(x(),k(A(j),z(n,_(u.value)),{default:O(()=>[D(i.$slots,"default")]),_:3},16))}});H.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"checked",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"any"}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Radio/Radio.vue"]};const P=y({__name:"RadioButton",setup(a){const n=j.Button,e=a,u=f(),i=S(()=>{const t={};return Object.keys(u).filter(d=>d.startsWith("on")).forEach(d=>{t[d]=u[d]}),t});return(t,d)=>(x(),k(A(n),z(e,_(i.value)),{default:O(()=>[D(t.$slots,"default")]),_:3},16))}});P.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Radio/RadioButton.vue"]};const q=y({__name:"RadioGroup",props:{disabled:{type:Boolean},name:{},options:{},size:{},value:{},defaultValue:{},buttonStyle:{},optionType:{}},setup(a){const n=j.Group,e=a,u=f(),i=S(()=>{const t={};return Object.keys(u).filter(d=>d.startsWith("on")).forEach(d=>{t[d]=u[d]}),t});return(t,d)=>(x(),k(A(n),z(e,_(i.value)),{default:O(()=>[D(t.$slots,"default")]),_:3},16))}});q.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"name",required:!1,type:{name:"string"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"{ label: string; value: any; disabled?: boolean }"}]}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"large"'},{name:'"default"'},{name:'"small"'}]}},{name:"value",required:!1,type:{name:"any"}},{name:"defaultValue",required:!1,type:{name:"any"}},{name:"buttonStyle",required:!1,type:{name:"union",elements:[{name:'"outline"'},{name:'"solid"'}]}},{name:"optionType",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"button"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Radio/RadioGroup.vue"]};const o=H;o.Button=P;o.Group=q;o.install=a=>{a.component("CgRadio",o),a.component("CgRadioButton",o.Button),a.component("CgRadioGroup",o.Group)};const{fn:ta}=__STORYBOOK_MODULE_TEST__,na={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{autofocus:{control:"boolean"},checked:{control:"boolean"},disabled:{control:"boolean"},value:{control:"text"}},args:{autofocus:!1,checked:!1,disabled:!1}},s={render:()=>({components:{Radio:o},template:`
      <Radio>Radio</Radio>
    `}),parameters:{docs:{description:{story:"最简单的用法。"}}}},c={render:()=>({components:{Radio:o,Space:g},template:`
      <Space direction="vertical">
        <Radio disabled>Disabled</Radio>
        <Radio disabled checked>Disabled Checked</Radio>
      </Space>
    `}),parameters:{docs:{description:{story:"不可用的 radio。"}}}},p={render:()=>({components:{Radio:o,CgRadioGroup:o.Group},setup(){const a=r("a");return{value:a,onChange:e=>{console.log("radio checked",e.target.value),a.value=e.target.value}}},template:`
      <CgRadioGroup :value="value" @change="onChange">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </CgRadioGroup>
    `}),parameters:{docs:{description:{story:"一组互斥的 Radio 配合使用。"}}}},R={render:()=>({components:{Radio:o,CgRadioGroup:o.Group,Space:g},setup(){const a=r("a");return{value:a,onChange:e=>{console.log("radio checked",e.target.value),a.value=e.target.value}}},template:`
      <CgRadioGroup :value="value" @change="onChange">
        <Space direction="vertical">
          <Radio value="a">Option A</Radio>
          <Radio value="b">Option B</Radio>
          <Radio value="c">Option C</Radio>
          <Radio value="d">
            More...
            <br />
            <span style="color: #999;">We can use radio to render more complex content</span>
          </Radio>
        </Space>
      </CgRadioGroup>
    `}),parameters:{docs:{description:{story:"垂直的 Radio.Group，配合更多输入框选项。"}}}},C={render:()=>({components:{CgRadioGroup:o.Group},setup(){const a=r("Apple");return{value:a,plainOptions:["Apple","Pear","Orange"],options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],optionsWithDisabled:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],onChange:t=>{console.log("radio checked",t.target.value),a.value=t.target.value}}},template:`
      <div>
        <CgRadioGroup :options="plainOptions" :value="value" @change="onChange" />
        <br />
        <br />
        <CgRadioGroup :options="options" :value="value" @change="onChange" />
        <br />
        <br />
        <CgRadioGroup :options="optionsWithDisabled" :value="value" @change="onChange" />
      </div>
    `}),parameters:{docs:{description:{story:"通过配置 options 参数来渲染单选框。"}}}},v={render:()=>({components:{CgRadioGroup:o.Group,CgRadioButton:o.Button,Space:g},setup(){const a=r("a");return{value:a,onChange:e=>{a.value=e.target.value}}},template:`
      <Space direction="vertical">
        <CgRadioGroup :value="value" @change="onChange" size="large">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        
        <CgRadioGroup :value="value" @change="onChange" size="small">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
      </Space>
    `}),parameters:{docs:{description:{story:"大中小三种组合，可以和表单输入框进行对应配合。"}}}},h={render:()=>({components:{CgRadioGroup:o.Group,CgRadioButton:o.Button},setup(){const a=r("a");return{value:a,onChange:e=>{console.log("radio checked",e.target.value),a.value=e.target.value}}},template:`
      <div>
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        <br />
        <br />
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b" disabled>Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        <br />
        <br />
        <CgRadioGroup disabled :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
      </div>
    `}),parameters:{docs:{description:{story:"按钮样式的单选组合。"}}}},m={render:()=>({components:{CgRadioGroup:o.Group,CgRadioButton:o.Button},setup(){const a=r("a");return{value:a,onChange:e=>{console.log("radio checked",e.target.value),a.value=e.target.value}}},template:`
      <CgRadioGroup :value="value" @change="onChange" button-style="solid">
        <CgRadioButton value="a">Hangzhou</CgRadioButton>
        <CgRadioButton value="b">Shanghai</CgRadioButton>
        <CgRadioButton value="c">Beijing</CgRadioButton>
        <CgRadioButton value="d">Chengdu</CgRadioButton>
      </CgRadioGroup>
    `}),parameters:{docs:{description:{story:"实色填底的单选按钮样式。"}}}},B={render:()=>({components:{CgRadioGroup:o.Group,Radio:o},setup(){const a=r("a"),n=r("a");return{value1:a,value2:n,onChange1:i=>{a.value=i.target.value},onChange2:i=>{n.value=i.target.value}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">默认样式:</div>
          <CgRadioGroup :value="value1" @change="onChange1">
            <Radio value="a">选项A</Radio>
            <Radio value="b">选项B</Radio>
            <Radio value="c">选项C</Radio>
          </CgRadioGroup>
        </div>
        <div>
          <div style="margin-bottom: 8px;">按钮样式:</div>
          <CgRadioGroup :value="value2" @change="onChange2" option-type="button">
            <Radio value="a">选项A</Radio>
            <Radio value="b">选项B</Radio>
            <Radio value="c">选项C</Radio>
          </CgRadioGroup>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"RadioGroup 支持默认和按钮两种样式。"}}}},b={render:()=>({components:{Radio:o,Button:W,Space:g},setup(){const a=r(!0);return{checked:a,toggleChecked:()=>{a.value=!a.value},onChange:u=>{console.log("checked = ",u.target.checked),a.value=u.target.checked}}},template:`
      <Space direction="vertical">
        <Radio :checked="checked" @change="onChange">
          {{ checked ? 'Checked' : 'Unchecked' }}
        </Radio>
        <Button type="primary" @click="toggleChecked">
          {{ checked ? 'Uncheck' : 'Check' }}
        </Button>
      </Space>
    `}),parameters:{docs:{description:{story:"联动 checkbox。"}}}},G={render:()=>({components:{Radio:o,CgRadioGroup:o.Group,CgRadioButton:o.Button,Space:g},setup(){const a=r("a"),n=r("Apple"),e=r("a");return{value1:a,value2:n,value3:e,onChange1:l=>{a.value=l.target.value},onChange2:l=>{n.value=l.target.value},onChange3:l=>{e.value=l.target.value},options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">单选框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础单选框</h4>
            <Space>
              <Radio>Radio</Radio>
              <Radio checked>Checked</Radio>
              <Radio disabled>Disabled</Radio>
              <Radio disabled checked>Disabled Checked</Radio>
            </Space>
          </div>
          
          <div>
            <h4>单选框组</h4>
            <CgRadioGroup :value="value1" @change="onChange1">
              <Radio value="a">Option A</Radio>
              <Radio value="b">Option B</Radio>
              <Radio value="c">Option C</Radio>
              <Radio value="d">Option D</Radio>
            </CgRadioGroup>
          </div>
          
          <div>
            <h4>配置方式</h4>
            <CgRadioGroup :options="options" :value="value2" @change="onChange2" />
          </div>
          
          <div>
            <h4>按钮样式</h4>
            <Space direction="vertical">
              <CgRadioGroup :value="value3" @change="onChange3">
                <CgRadioButton value="a">Hangzhou</CgRadioButton>
                <CgRadioButton value="b">Shanghai</CgRadioButton>
                <CgRadioButton value="c">Beijing</CgRadioButton>
                <CgRadioButton value="d">Chengdu</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3" button-style="solid">
                <CgRadioButton value="a">Hangzhou</CgRadioButton>
                <CgRadioButton value="b">Shanghai</CgRadioButton>
                <CgRadioButton value="c">Beijing</CgRadioButton>
                <CgRadioButton value="d">Chengdu</CgRadioButton>
              </CgRadioGroup>
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space direction="vertical">
              <CgRadioGroup :value="value3" @change="onChange3" size="large">
                <CgRadioButton value="a">Large</CgRadioButton>
                <CgRadioButton value="b">Large</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3">
                <CgRadioButton value="a">Default</CgRadioButton>
                <CgRadioButton value="b">Default</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3" size="small">
                <CgRadioButton value="a">Small</CgRadioButton>
                <CgRadioButton value="b">Small</CgRadioButton>
              </CgRadioGroup>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的单选框组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示单选框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    template: \`
      <Radio>Radio</Radio>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '最简单的用法。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio,
      Space
    },
    template: \`
      <Space direction="vertical">
        <Radio disabled>Disabled</Radio>
        <Radio disabled checked>Disabled Checked</Radio>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '不可用的 radio。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio,
      CgRadioGroup: Radio.Group
    },
    setup() {
      const value = ref('a');
      const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        value.value = e.target.value;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <CgRadioGroup :value="value" @change="onChange">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </CgRadioGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '一组互斥的 Radio 配合使用。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio,
      CgRadioGroup: Radio.Group,
      Space
    },
    setup() {
      const value = ref('a');
      const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        value.value = e.target.value;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <CgRadioGroup :value="value" @change="onChange">
        <Space direction="vertical">
          <Radio value="a">Option A</Radio>
          <Radio value="b">Option B</Radio>
          <Radio value="c">Option C</Radio>
          <Radio value="d">
            More...
            <br />
            <span style="color: #999;">We can use radio to render more complex content</span>
          </Radio>
        </Space>
      </CgRadioGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '垂直的 Radio.Group，配合更多输入框选项。'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRadioGroup: Radio.Group
    },
    setup() {
      const value = ref('Apple');
      const plainOptions = ['Apple', 'Pear', 'Orange'];
      const options = [{
        label: 'Apple',
        value: 'Apple'
      }, {
        label: 'Pear',
        value: 'Pear'
      }, {
        label: 'Orange',
        value: 'Orange'
      }];
      const optionsWithDisabled = [{
        label: 'Apple',
        value: 'Apple'
      }, {
        label: 'Pear',
        value: 'Pear'
      }, {
        label: 'Orange',
        value: 'Orange',
        disabled: true
      }];
      const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        value.value = e.target.value;
      };
      return {
        value,
        plainOptions,
        options,
        optionsWithDisabled,
        onChange
      };
    },
    template: \`
      <div>
        <CgRadioGroup :options="plainOptions" :value="value" @change="onChange" />
        <br />
        <br />
        <CgRadioGroup :options="options" :value="value" @change="onChange" />
        <br />
        <br />
        <CgRadioGroup :options="optionsWithDisabled" :value="value" @change="onChange" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '通过配置 options 参数来渲染单选框。'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRadioGroup: Radio.Group,
      CgRadioButton: Radio.Button,
      Space
    },
    setup() {
      const value = ref('a');
      const onChange = (e: any) => {
        value.value = e.target.value;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <Space direction="vertical">
        <CgRadioGroup :value="value" @change="onChange" size="large">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        
        <CgRadioGroup :value="value" @change="onChange" size="small">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '大中小三种组合，可以和表单输入框进行对应配合。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRadioGroup: Radio.Group,
      CgRadioButton: Radio.Button
    },
    setup() {
      const value = ref('a');
      const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        value.value = e.target.value;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <div>
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        <br />
        <br />
        <CgRadioGroup :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b" disabled>Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
        <br />
        <br />
        <CgRadioGroup disabled :value="value" @change="onChange">
          <CgRadioButton value="a">Hangzhou</CgRadioButton>
          <CgRadioButton value="b">Shanghai</CgRadioButton>
          <CgRadioButton value="c">Beijing</CgRadioButton>
          <CgRadioButton value="d">Chengdu</CgRadioButton>
        </CgRadioGroup>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '按钮样式的单选组合。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRadioGroup: Radio.Group,
      CgRadioButton: Radio.Button
    },
    setup() {
      const value = ref('a');
      const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        value.value = e.target.value;
      };
      return {
        value,
        onChange
      };
    },
    template: \`
      <CgRadioGroup :value="value" @change="onChange" button-style="solid">
        <CgRadioButton value="a">Hangzhou</CgRadioButton>
        <CgRadioButton value="b">Shanghai</CgRadioButton>
        <CgRadioButton value="c">Beijing</CgRadioButton>
        <CgRadioButton value="d">Chengdu</CgRadioButton>
      </CgRadioGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '实色填底的单选按钮样式。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRadioGroup: Radio.Group,
      Radio
    },
    setup() {
      const value1 = ref('a');
      const value2 = ref('a');
      const onChange1 = (e: any) => {
        value1.value = e.target.value;
      };
      const onChange2 = (e: any) => {
        value2.value = e.target.value;
      };
      return {
        value1,
        value2,
        onChange1,
        onChange2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px;">默认样式:</div>
          <CgRadioGroup :value="value1" @change="onChange1">
            <Radio value="a">选项A</Radio>
            <Radio value="b">选项B</Radio>
            <Radio value="c">选项C</Radio>
          </CgRadioGroup>
        </div>
        <div>
          <div style="margin-bottom: 8px;">按钮样式:</div>
          <CgRadioGroup :value="value2" @change="onChange2" option-type="button">
            <Radio value="a">选项A</Radio>
            <Radio value="b">选项B</Radio>
            <Radio value="c">选项C</Radio>
          </CgRadioGroup>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup 支持默认和按钮两种样式。'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio,
      Button,
      Space
    },
    setup() {
      const checked = ref(true);
      const toggleChecked = () => {
        checked.value = !checked.value;
      };
      const onChange = (e: any) => {
        console.log('checked = ', e.target.checked);
        checked.value = e.target.checked;
      };
      return {
        checked,
        toggleChecked,
        onChange
      };
    },
    template: \`
      <Space direction="vertical">
        <Radio :checked="checked" @change="onChange">
          {{ checked ? 'Checked' : 'Unchecked' }}
        </Radio>
        <Button type="primary" @click="toggleChecked">
          {{ checked ? 'Uncheck' : 'Check' }}
        </Button>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '联动 checkbox。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio,
      CgRadioGroup: Radio.Group,
      CgRadioButton: Radio.Button,
      Space
    },
    setup() {
      const value1 = ref('a');
      const value2 = ref('Apple');
      const value3 = ref('a');
      const onChange1 = (e: any) => {
        value1.value = e.target.value;
      };
      const onChange2 = (e: any) => {
        value2.value = e.target.value;
      };
      const onChange3 = (e: any) => {
        value3.value = e.target.value;
      };
      const options = [{
        label: 'Apple',
        value: 'Apple'
      }, {
        label: 'Pear',
        value: 'Pear'
      }, {
        label: 'Orange',
        value: 'Orange'
      }];
      return {
        value1,
        value2,
        value3,
        onChange1,
        onChange2,
        onChange3,
        options
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">单选框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础单选框</h4>
            <Space>
              <Radio>Radio</Radio>
              <Radio checked>Checked</Radio>
              <Radio disabled>Disabled</Radio>
              <Radio disabled checked>Disabled Checked</Radio>
            </Space>
          </div>
          
          <div>
            <h4>单选框组</h4>
            <CgRadioGroup :value="value1" @change="onChange1">
              <Radio value="a">Option A</Radio>
              <Radio value="b">Option B</Radio>
              <Radio value="c">Option C</Radio>
              <Radio value="d">Option D</Radio>
            </CgRadioGroup>
          </div>
          
          <div>
            <h4>配置方式</h4>
            <CgRadioGroup :options="options" :value="value2" @change="onChange2" />
          </div>
          
          <div>
            <h4>按钮样式</h4>
            <Space direction="vertical">
              <CgRadioGroup :value="value3" @change="onChange3">
                <CgRadioButton value="a">Hangzhou</CgRadioButton>
                <CgRadioButton value="b">Shanghai</CgRadioButton>
                <CgRadioButton value="c">Beijing</CgRadioButton>
                <CgRadioButton value="d">Chengdu</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3" button-style="solid">
                <CgRadioButton value="a">Hangzhou</CgRadioButton>
                <CgRadioButton value="b">Shanghai</CgRadioButton>
                <CgRadioButton value="c">Beijing</CgRadioButton>
                <CgRadioButton value="d">Chengdu</CgRadioButton>
              </CgRadioGroup>
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space direction="vertical">
              <CgRadioGroup :value="value3" @change="onChange3" size="large">
                <CgRadioButton value="a">Large</CgRadioButton>
                <CgRadioButton value="b">Large</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3">
                <CgRadioButton value="a">Default</CgRadioButton>
                <CgRadioButton value="b">Default</CgRadioButton>
              </CgRadioGroup>
              
              <CgRadioGroup :value="value3" @change="onChange3" size="small">
                <CgRadioButton value="a">Small</CgRadioButton>
                <CgRadioButton value="b">Small</CgRadioButton>
              </CgRadioGroup>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的单选框组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示单选框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};const ia=["Default","Disabled","RadioGroup","RadioGroupVertical","RadioGroupOptions","RadioGroupSize","RadioButton","RadioButtonSolid","RadioButtonTypes","ControlledRadio","ThemeShowcase"];export{b as ControlledRadio,s as Default,c as Disabled,h as RadioButton,m as RadioButtonSolid,B as RadioButtonTypes,p as RadioGroup,C as RadioGroupOptions,v as RadioGroupSize,R as RadioGroupVertical,G as ThemeShowcase,ia as __namedExportsOrder,na as default};
