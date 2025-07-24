import{d as D,ae as J,af as H,c as P,ag as z,ah as W,ai as s,v as p,aj as M,ak as _,al as N,am as u,an as m,ao as h,r as d,aw as v}from"./iframe-CiolPNwv.js";import{S as i}from"./index-DIa8XZVm.js";import{S as g}from"./index-C9_4AhMb.js";import{B as j}from"./index-DWv55aqM.js";import{I as R}from"./index-lJJICqKF.js";import{D as $}from"./index-CJwjXjc_.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./KeyCode-D63Tfrq7.js";import"./BaseInput-D2epJhM9.js";import"./css-DDkvXkMO.js";import"./pickAttrs-8uwpYw_5.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./List-CLOwepni.js";import"./isMobile-x7Gj6jC1.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useMemo-BmGKJ0MZ.js";import"./omit-BBXwSgK8.js";import"./useMergedState-8OkYKI-g.js";import"./useState-Ds4oJkA7.js";import"./DownOutlined-DeIOKUSk.js";import"./CheckOutlined-CIIIVjBf.js";import"./SearchOutlined-UrLs3OCM.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./statusUtils-QYI0Q3t5.js";import"./Compact-DDa3__kb.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./compact-item-X_Nkrb5h.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./index-vtqL8OYL.js";import"./devWarning-MTSIIkhh.js";import"./index-BQIp7ISY.js";import"./isPlainObject-CGgsQr0R.js";import"./EyeOutlined-Cwmsf3ds.js";const E=D({__name:"Select",setup(n){const l=n,o=J(),e=H(),S=P(()=>{const a={};return Object.keys(o).filter(r=>r.startsWith("on")).forEach(r=>{a[r]=o[r]}),a});return(a,r)=>(N(),z(p(i),M(l,_(S.value)),W({default:s(()=>[u(a.$slots,"default")]),_:2},[p(e).suffixIcon?{name:"suffixIcon",fn:s(t=>[u(a.$slots,"suffixIcon",m(h(t||{})))]),key:"0"}:void 0,p(e).clearIcon?{name:"clearIcon",fn:s(t=>[u(a.$slots,"clearIcon",m(h(t||{})))]),key:"1"}:void 0,p(e).removeIcon?{name:"removeIcon",fn:s(t=>[u(a.$slots,"removeIcon",m(h(t||{})))]),key:"2"}:void 0,p(e).menuItemSelectedIcon?{name:"menuItemSelectedIcon",fn:s(t=>[u(a.$slots,"menuItemSelectedIcon",m(h(t||{})))]),key:"3"}:void 0,p(e).notFoundContent?{name:"notFoundContent",fn:s(t=>[u(a.$slots,"notFoundContent",m(h(t||{})))]),key:"4"}:void 0,p(e).placeholder?{name:"placeholder",fn:s(t=>[u(a.$slots,"placeholder",m(h(t||{})))]),key:"5"}:void 0,p(e).maxTagPlaceholder?{name:"maxTagPlaceholder",fn:s(t=>[u(a.$slots,"maxTagPlaceholder",m(h(t||{})))]),key:"6"}:void 0]),1040))}});E.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},slots:[{name:"suffixIcon",scoped:!0,bindings:[]},{name:"clearIcon",scoped:!0,bindings:[]},{name:"removeIcon",scoped:!0,bindings:[]},{name:"menuItemSelectedIcon",scoped:!0,bindings:[]},{name:"notFoundContent",scoped:!0,bindings:[]},{name:"placeholder",scoped:!0,bindings:[]},{name:"maxTagPlaceholder",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Select/Select.vue"]};const B=D({__name:"SelectGroup",props:{label:{},key:{}},setup(n){const l=i.OptGroup,o=n,e=J(),S=P(()=>{const a={};return Object.keys(e).filter(r=>r.startsWith("on")).forEach(r=>{a[r]=e[r]}),a});return(a,r)=>(N(),z(p(l),M(o,_(S.value)),{default:s(()=>[u(a.$slots,"default")]),_:3},16))}});B.__docgenInfo={exportName:"default",displayName:"SelectGroup",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"key",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Select/SelectGroup.vue"]};const c=E,F=B;c.Group=F;c.install=n=>{n.component("CgSelect",c),n.component("CgSelectGroup",F)};const{fn:_e}=__STORYBOOK_MODULE_TEST__,Ne={title:"Components/Select",component:c,tags:["autodocs"],argTypes:{allowClear:{control:"boolean"},autoClearSearchValue:{control:"boolean"},bordered:{control:"boolean"},defaultActiveFirstOption:{control:"boolean"},defaultOpen:{control:"boolean"},disabled:{control:"boolean"},dropdownClassName:{control:"text"},dropdownMatchSelectWidth:{control:"boolean"},fieldNames:{control:"object"},labelInValue:{control:"boolean"},listHeight:{control:"number"},loading:{control:"boolean"},maxTagCount:{control:"number"},maxTagTextLength:{control:"number"},mode:{control:"select",options:["multiple","tags"]},optionFilterProp:{control:"text"},optionLabelProp:{control:"text"},options:{control:"object"},placeholder:{control:"text"},popupClassName:{control:"text"},searchValue:{control:"text"},showArrow:{control:"boolean"},showSearch:{control:"boolean"},size:{control:"select",options:["large","middle","small"]},tokenSeparators:{control:"array"},value:{control:"text"},virtual:{control:"boolean"}},args:{placeholder:"Please select",allowClear:!1,bordered:!0,disabled:!1,loading:!1,showArrow:!0,showSearch:!1,size:"middle"}},y={render:()=>({components:{Select:c,AntSelect:i},setup(){const n=d("lucy");return{value:n,handleChange:o=>{console.log(`selected ${o}`),n.value=o}}},template:`
      <Select
        :value="value"
        style="width: 120px"
        @change="handleChange"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="disabled" disabled>Disabled</AntSelect.Option>
        <AntSelect.Option value="Yiminghe">yiminghe</AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"基本选择器。"}}}},A={render:()=>({components:{Select:c,AntSelect:i},setup(){const n=d("lucy");return{value:n,handleChange:o=>{console.log(`selected ${o}`),n.value=o}}},template:`
      <Select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        :value="value"
        style="width: 200px"
        @change="handleChange"
        :filter-option="(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="tom">Tom</AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"可搜索的选择器。"}}}},O={render:()=>({components:{Select:c,AntSelect:i},setup(){const n=d(["a10","c12"]),l=e=>{console.log(`selected ${e}`),n.value=e},o=[];for(let e=10;e<36;e++)o.push({value:e.toString(36)+e,label:e.toString(36)+e});return{value:n,handleChange:l,children:o}},template:`
      <Select
        mode="multiple"
        allow-clear
        style="width: 100%"
        placeholder="Please select"
        :value="value"
        @change="handleChange"
      >
        <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
          {{ item.label }}
        </AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"多选，从已有条目中选择。"}}}},f={render:()=>({components:{Select:c,AntSelect:i,Space:g},setup(){return{handleChange:l=>{console.log(`selected ${l}`)}}},template:`
      <Space direction="vertical" style="width: 100%;">
        <Select
          size="large"
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
        
        <Select
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
        
        <Select
          size="small"
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
      </Space>
    `}),parameters:{docs:{description:{story:"三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。"}}}},C={render:()=>({components:{Select:c,AntSelect:i},setup(){const n=d(["gold","lime"]),l=e=>{console.log(`selected ${e}`),n.value=e},o=[];for(let e=10;e<36;e++)o.push({value:e.toString(36)+e,label:e.toString(36)+e});return{value:n,handleChange:l,children:o}},template:`
      <Select
        mode="tags"
        style="width: 100%"
        placeholder="Tags Mode"
        :value="value"
        @change="handleChange"
      >
        <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
          {{ item.label }}
        </AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"tags select，随意输入的内容（scroll the menu）。"}}}},w={render:()=>({components:{Select:c,AntSelect:i,CgSelectGroup:c.Group},setup(){return{handleChange:l=>{console.log(`selected ${l}`)}}},template:`
      <Select
        default-value="lucy"
        style="width: 200px"
        @change="handleChange"
      >
        <CgSelectGroup label="Manager">
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </CgSelectGroup>
        <CgSelectGroup label="Engineer">
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </CgSelectGroup>
      </Select>
    `}),parameters:{docs:{description:{story:"用 OptGroup 进行选项分组。"}}}},b={render:()=>({components:{Select:c,AntSelect:i},template:`
      <Select
        default-value="lucy"
        style="width: 120px"
        loading
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"加载中状态。"}}}},x={render:()=>({components:{Select:c,AntSelect:i,Space:g},template:`
      <Space>
        <Select default-value="lucy" style="width: 120px" disabled>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
        <Select default-value="lucy" style="width: 120px" loading>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
        <Select
          mode="multiple"
          disabled
          placeholder="Disabled"
          style="width: 100%"
          :value="['lucy']"
        >
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
      </Space>
    `}),parameters:{docs:{description:{story:"选择框不可用状态。"}}}},k={render:()=>({components:{Select:c,AntSelect:i},setup(){return{handleChange:l=>{console.log(`selected ${l}`)}}},template:`
      <Select
        default-value="lucy"
        style="width: 120px"
        :bordered="false"
        @change="handleChange"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="tom">Tom</AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"无边框样式。"}}}},L={render:()=>({components:{Select:c,AntSelect:i,Divider:$,Input:R,Button:j,Space:g},setup(){const n=d(["jack","lucy"]),l=d(""),o=a=>{l.value=a.target.value},e=()=>{l.value&&(n.value.push(l.value),l.value="")};return{items:n,name:l,onNameChange:o,addItem:e,dropdownRender:({menuNode:a})=>v("div",[a,v($,{style:{margin:"8px 0"}}),v(g,{style:{padding:"0 8px 4px"}},[v(R,{placeholder:"Please enter item",value:l.value,onInput:o}),v(j,{type:"text",onClick:e},"Add item")])])}},template:`
      <Select
        style="width: 240px"
        placeholder="custom dropdown render"
        :dropdown-render="dropdownRender"
      >
        <AntSelect.Option v-for="item in items" :key="item" :value="item">
          {{ item }}
        </AntSelect.Option>
      </Select>
    `}),parameters:{docs:{description:{story:"使用 dropdownRender 对下拉菜单进行自由扩展。"}}}},T={render:()=>({components:{Select:c,AntSelect:i},setup(){return{options:[{value:"gold"},{value:"lime"},{value:"green"},{value:"cyan"}],tagRender:({label:o,value:e,closable:S,onClose:a})=>{const r=G=>{G.preventDefault(),G.stopPropagation()},t=[o];return S&&t.push(v("span",{style:{marginLeft:"5px",cursor:"pointer"},onClick:a},"×")),v("span",{onMousedown:r,style:{marginRight:"3px",background:e,border:"1px solid #d9d9d9",borderRadius:"2px",padding:"0 7px",fontSize:"12px",lineHeight:"20px",color:"#000"}},t)}}},template:`
      <Select
        mode="multiple"
        :tag-render="tagRender"
        :default-value="['gold', 'cyan']"
        style="width: 100%"
        :options="options"
      />
    `}),parameters:{docs:{description:{story:"自定义 tag 内容 render，仅适用于 mode 为 multiple 或 tags 时使用。"}}}},I={render:()=>({components:{Select:c,AntSelect:i,Space:g},setup(){const n=d("lucy"),l=d(["a10","c12"]),o=d(["gold","lime"]),e=t=>{n.value=t},S=t=>{l.value=t},a=t=>{o.value=t},r=[];for(let t=10;t<36;t++)r.push({value:t.toString(36)+t,label:t.toString(36)+t});return{value1:n,value2:l,value3:o,handleChange1:e,handleChange2:S,handleChange3:a,children:r}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">选择器组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础选择器</h4>
            <Space>
              <Select
                :value="value1"
                style="width: 120px"
                @change="handleChange1"
              >
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </Select>
              
              <Select
                show-search
                placeholder="Search to Select"
                style="width: 200px"
                :value="value1"
                @change="handleChange1"
              >
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space>
              <Select
                size="large"
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
              
              <Select
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
              
              <Select
                size="small"
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>多选模式</h4>
            <Select
              mode="multiple"
              allow-clear
              style="width: 100%"
              placeholder="Please select"
              :value="value2"
              @change="handleChange2"
            >
              <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
                {{ item.label }}
              </AntSelect.Option>
            </Select>
          </div>
          
          <div>
            <h4>标签模式</h4>
            <Select
              mode="tags"
              style="width: 100%"
              placeholder="Tags Mode"
              :value="value3"
              @change="handleChange3"
            >
              <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
                {{ item.label }}
              </AntSelect.Option>
            </Select>
          </div>
          
          <div>
            <h4>状态展示</h4>
            <Space>
              <Select default-value="lucy" style="width: 120px" disabled>
                <AntSelect.Option value="lucy">Disabled</AntSelect.Option>
              </Select>
              
              <Select default-value="lucy" style="width: 120px" loading>
                <AntSelect.Option value="lucy">Loading</AntSelect.Option>
              </Select>
              
              <Select
                default-value="lucy"
                style="width: 120px"
                :bordered="false"
              >
                <AntSelect.Option value="lucy">Borderless</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>分组选项</h4>
            <Select
              default-value="lucy"
              style="width: 200px"
            >
              <AntSelect.OptGroup label="Manager">
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </AntSelect.OptGroup>
              <AntSelect.OptGroup label="Engineer">
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </AntSelect.OptGroup>
            </Select>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的选择器组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示选择器组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const value = ref('lucy');
      const handleChange = (val: string) => {
        console.log(\`selected \${val}\`);
        value.value = val;
      };
      return {
        value,
        handleChange
      };
    },
    template: \`
      <Select
        :value="value"
        style="width: 120px"
        @change="handleChange"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="disabled" disabled>Disabled</AntSelect.Option>
        <AntSelect.Option value="Yiminghe">yiminghe</AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '基本选择器。'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const value = ref('lucy');
      const handleChange = (val: string) => {
        console.log(\`selected \${val}\`);
        value.value = val;
      };
      return {
        value,
        handleChange
      };
    },
    template: \`
      <Select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        :value="value"
        style="width: 200px"
        @change="handleChange"
        :filter-option="(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="tom">Tom</AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可搜索的选择器。'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const value = ref(['a10', 'c12']);
      const handleChange = (val: string[]) => {
        console.log(\`selected \${val}\`);
        value.value = val;
      };
      const children = [];
      for (let i = 10; i < 36; i++) {
        children.push({
          value: i.toString(36) + i,
          label: i.toString(36) + i
        });
      }
      return {
        value,
        handleChange,
        children
      };
    },
    template: \`
      <Select
        mode="multiple"
        allow-clear
        style="width: 100%"
        placeholder="Please select"
        :value="value"
        @change="handleChange"
      >
        <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
          {{ item.label }}
        </AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '多选，从已有条目中选择。'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect,
      Space
    },
    setup() {
      const handleChange = (value: string) => {
        console.log(\`selected \${value}\`);
      };
      return {
        handleChange
      };
    },
    template: \`
      <Space direction="vertical" style="width: 100%;">
        <Select
          size="large"
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
        
        <Select
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
        
        <Select
          size="small"
          default-value="lucy"
          style="width: 200px"
          @change="handleChange"
        >
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </Select>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const value = ref(['gold', 'lime']);
      const handleChange = (val: string[]) => {
        console.log(\`selected \${val}\`);
        value.value = val;
      };
      const children = [];
      for (let i = 10; i < 36; i++) {
        children.push({
          value: i.toString(36) + i,
          label: i.toString(36) + i
        });
      }
      return {
        value,
        handleChange,
        children
      };
    },
    template: \`
      <Select
        mode="tags"
        style="width: 100%"
        placeholder="Tags Mode"
        :value="value"
        @change="handleChange"
      >
        <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
          {{ item.label }}
        </AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'tags select，随意输入的内容（scroll the menu）。'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect,
      CgSelectGroup: Select.Group
    },
    setup() {
      const handleChange = (value: string) => {
        console.log(\`selected \${value}\`);
      };
      return {
        handleChange
      };
    },
    template: \`
      <Select
        default-value="lucy"
        style="width: 200px"
        @change="handleChange"
      >
        <CgSelectGroup label="Manager">
          <AntSelect.Option value="jack">Jack</AntSelect.Option>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </CgSelectGroup>
        <CgSelectGroup label="Engineer">
          <AntSelect.Option value="tom">Tom</AntSelect.Option>
        </CgSelectGroup>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '用 OptGroup 进行选项分组。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    template: \`
      <Select
        default-value="lucy"
        style="width: 120px"
        loading
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '加载中状态。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect,
      Space
    },
    template: \`
      <Space>
        <Select default-value="lucy" style="width: 120px" disabled>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
        <Select default-value="lucy" style="width: 120px" loading>
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
        <Select
          mode="multiple"
          disabled
          placeholder="Disabled"
          style="width: 100%"
          :value="['lucy']"
        >
          <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        </Select>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '选择框不可用状态。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const handleChange = (value: string) => {
        console.log(\`selected \${value}\`);
      };
      return {
        handleChange
      };
    },
    template: \`
      <Select
        default-value="lucy"
        style="width: 120px"
        :bordered="false"
        @change="handleChange"
      >
        <AntSelect.Option value="jack">Jack</AntSelect.Option>
        <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
        <AntSelect.Option value="tom">Tom</AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '无边框样式。'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect,
      Divider,
      Input,
      Button,
      Space
    },
    setup() {
      const items = ref(['jack', 'lucy']);
      const name = ref('');
      const onNameChange = (event: Event) => {
        name.value = (event.target as HTMLInputElement).value;
      };
      const addItem = () => {
        if (name.value) {
          items.value.push(name.value);
          name.value = '';
        }
      };
      const dropdownRender = ({
        menuNode
      }: any) => {
        return h('div', [menuNode, h(Divider, {
          style: {
            margin: '8px 0'
          }
        }), h(Space, {
          style: {
            padding: '0 8px 4px'
          }
        }, [h(Input, {
          placeholder: 'Please enter item',
          value: name.value,
          onInput: onNameChange
        }), h(Button, {
          type: 'text',
          onClick: addItem
        }, 'Add item')])]);
      };
      return {
        items,
        name,
        onNameChange,
        addItem,
        dropdownRender
      };
    },
    template: \`
      <Select
        style="width: 240px"
        placeholder="custom dropdown render"
        :dropdown-render="dropdownRender"
      >
        <AntSelect.Option v-for="item in items" :key="item" :value="item">
          {{ item }}
        </AntSelect.Option>
      </Select>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 dropdownRender 对下拉菜单进行自由扩展。'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect
    },
    setup() {
      const options = [{
        value: 'gold'
      }, {
        value: 'lime'
      }, {
        value: 'green'
      }, {
        value: 'cyan'
      }];
      const tagRender = ({
        label,
        value,
        closable,
        onClose
      }: any) => {
        const onPreventMouseDown = (event: MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
        };
        const children = [label];
        if (closable) {
          children.push(h('span', {
            style: {
              marginLeft: '5px',
              cursor: 'pointer'
            },
            onClick: onClose
          }, '×'));
        }
        return h('span', {
          onMousedown: onPreventMouseDown,
          style: {
            marginRight: '3px',
            background: value,
            border: '1px solid #d9d9d9',
            borderRadius: '2px',
            padding: '0 7px',
            fontSize: '12px',
            lineHeight: '20px',
            color: '#000'
          }
        }, children);
      };
      return {
        options,
        tagRender
      };
    },
    template: \`
      <Select
        mode="multiple"
        :tag-render="tagRender"
        :default-value="['gold', 'cyan']"
        style="width: 100%"
        :options="options"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '自定义 tag 内容 render，仅适用于 mode 为 multiple 或 tags 时使用。'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      AntSelect,
      Space
    },
    setup() {
      const value1 = ref('lucy');
      const value2 = ref(['a10', 'c12']);
      const value3 = ref(['gold', 'lime']);
      const handleChange1 = (val: string) => {
        value1.value = val;
      };
      const handleChange2 = (val: string[]) => {
        value2.value = val;
      };
      const handleChange3 = (val: string[]) => {
        value3.value = val;
      };
      const children = [];
      for (let i = 10; i < 36; i++) {
        children.push({
          value: i.toString(36) + i,
          label: i.toString(36) + i
        });
      }
      return {
        value1,
        value2,
        value3,
        handleChange1,
        handleChange2,
        handleChange3,
        children
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">选择器组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础选择器</h4>
            <Space>
              <Select
                :value="value1"
                style="width: 120px"
                @change="handleChange1"
              >
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </Select>
              
              <Select
                show-search
                placeholder="Search to Select"
                style="width: 200px"
                :value="value1"
                @change="handleChange1"
              >
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>不同尺寸</h4>
            <Space>
              <Select
                size="large"
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
              
              <Select
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
              
              <Select
                size="small"
                default-value="lucy"
                style="width: 120px"
              >
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>多选模式</h4>
            <Select
              mode="multiple"
              allow-clear
              style="width: 100%"
              placeholder="Please select"
              :value="value2"
              @change="handleChange2"
            >
              <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
                {{ item.label }}
              </AntSelect.Option>
            </Select>
          </div>
          
          <div>
            <h4>标签模式</h4>
            <Select
              mode="tags"
              style="width: 100%"
              placeholder="Tags Mode"
              :value="value3"
              @change="handleChange3"
            >
              <AntSelect.Option v-for="item in children" :key="item.value" :value="item.value">
                {{ item.label }}
              </AntSelect.Option>
            </Select>
          </div>
          
          <div>
            <h4>状态展示</h4>
            <Space>
              <Select default-value="lucy" style="width: 120px" disabled>
                <AntSelect.Option value="lucy">Disabled</AntSelect.Option>
              </Select>
              
              <Select default-value="lucy" style="width: 120px" loading>
                <AntSelect.Option value="lucy">Loading</AntSelect.Option>
              </Select>
              
              <Select
                default-value="lucy"
                style="width: 120px"
                :bordered="false"
              >
                <AntSelect.Option value="lucy">Borderless</AntSelect.Option>
              </Select>
            </Space>
          </div>
          
          <div>
            <h4>分组选项</h4>
            <Select
              default-value="lucy"
              style="width: 200px"
            >
              <AntSelect.OptGroup label="Manager">
                <AntSelect.Option value="jack">Jack</AntSelect.Option>
                <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
              </AntSelect.OptGroup>
              <AntSelect.OptGroup label="Engineer">
                <AntSelect.Option value="tom">Tom</AntSelect.Option>
              </AntSelect.OptGroup>
            </Select>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的选择器组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示选择器组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};const Ee=["Default","WithSearch","Multiple","Sizes","Tags","OptionGroup","Loading","Disabled","Borderless","CustomDropdownRender","CustomTagRender","ThemeShowcase"];export{k as Borderless,L as CustomDropdownRender,T as CustomTagRender,y as Default,x as Disabled,b as Loading,O as Multiple,w as OptionGroup,f as Sizes,C as Tags,I as ThemeShowcase,A as WithSearch,Ee as __namedExportsOrder,Ne as default};
