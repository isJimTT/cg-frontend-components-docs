import{d as h,ae as I,af as v,c as k,ag as _,ah as P,ai as g,v as u,aj as N,ak as j,al as D,am as y,an as C,ao as b,ap as A}from"./iframe-CiolPNwv.js";const e=h({__name:"Empty",props:{description:{type:[String,Boolean]},image:{},imageStyle:{}},setup(t){const x=t,f=I(),E=v(),S=k(()=>{const n={};return Object.keys(f).filter(r=>r.startsWith("on")).forEach(r=>{n[r]=f[r]}),n});return(n,r)=>(D(),_(u(A),N(x,j(S.value)),P({default:g(()=>[y(n.$slots,"default")]),_:2},[u(E).description?{name:"description",fn:g(l=>[y(n.$slots,"description",C(b(l||{})))]),key:"0"}:void 0,u(E).image?{name:"image",fn:g(l=>[y(n.$slots,"image",C(b(l||{})))]),key:"1"}:void 0]),1040))}});e.__docgenInfo={exportName:"default",displayName:"Empty",description:"",tags:{},props:[{name:"description",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"image",required:!1,type:{name:"string"}},{name:"imageStyle",required:!1,type:{name:"object"}}],slots:[{name:"description",scoped:!0,bindings:[]},{name:"image",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Empty/Empty.vue"]};const z={title:"Components/Empty",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{description:{control:"text",description:"自定义描述内容"},image:{control:"text",description:"设置显示图片，为 string 时表示自定义图片地址"},imageStyle:{control:"object",description:"图片样式"}}},o={render:t=>({components:{CgEmpty:e},setup(){return{args:t}},template:`
      <CgEmpty v-bind="args" />
    `}),args:{}},s={render:()=>({components:{CgEmpty:e},template:`
      <CgEmpty description="暂无数据" />
    `})},a={render:()=>({components:{CgEmpty:e},template:`
      <CgEmpty :description="false" />
    `})},p={render:()=>({components:{CgEmpty:e},setup(){return{customImageStyle:{height:"60px"}}},template:`
      <CgEmpty 
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        :image-style="customImageStyle"
        description="自定义图片"
      />
    `})},m={render:()=>({components:{CgEmpty:e},setup(){return{simpleImage:"PRESENTED_IMAGE_SIMPLE"}},template:`
      <CgEmpty 
        :image="simpleImage"
        description="简单图片"
      />
    `})},c={render:()=>({components:{CgEmpty:e},setup(){return{handleCreate:()=>{console.log("创建新项目")}}},template:`
      <CgEmpty description="暂无项目">
        <template #default>
          <button 
            @click="handleCreate"
            style="padding: 6px 15px; border: 1px solid #1890ff; border-radius: 4px; background: #1890ff; color: #fff; cursor: pointer;"
          >
            创建项目
          </button>
        </template>
      </CgEmpty>
    `})},i={render:()=>({components:{CgEmpty:e},template:`
      <div style="border: 1px solid #d9d9d9; border-radius: 4px; padding: 40px 20px; background: #fafafa;">
        <h3 style="margin-bottom: 20px; text-align: center;">数据列表</h3>
        <CgEmpty description="列表为空" />
      </div>
    `})},d={render:()=>({components:{CgEmpty:e},template:`
      <CgEmpty>
        <template #image>
          <div style="font-size: 48px; color: #ccc;">📭</div>
        </template>
        <template #description>
          <span style="color: #999;">
            自定义空状态
            <br />
            没有找到相关内容
          </span>
        </template>
        <template #default>
          <button style="padding: 6px 15px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff; cursor: pointer; margin-right: 8px;">
            重新加载
          </button>
          <button style="padding: 6px 15px; border: 1px solid #1890ff; border-radius: 4px; background: #1890ff; color: #fff; cursor: pointer;">
            添加数据
          </button>
        </template>
      </CgEmpty>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgEmpty: Empty
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CgEmpty v-bind="args" />
    \`
  }),
  args: {}
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    template: \`
      <CgEmpty description="暂无数据" />
    \`
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    template: \`
      <CgEmpty :description="false" />
    \`
  })
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    setup() {
      const customImageStyle = {
        height: '60px'
      };
      return {
        customImageStyle
      };
    },
    template: \`
      <CgEmpty 
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        :image-style="customImageStyle"
        description="自定义图片"
      />
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    setup() {
      // 使用 Empty.PRESENTED_IMAGE_SIMPLE 的等效值
      const simpleImage = 'PRESENTED_IMAGE_SIMPLE';
      return {
        simpleImage
      };
    },
    template: \`
      <CgEmpty 
        :image="simpleImage"
        description="简单图片"
      />
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    setup() {
      const handleCreate = () => {
        console.log('创建新项目');
      };
      return {
        handleCreate
      };
    },
    template: \`
      <CgEmpty description="暂无项目">
        <template #default>
          <button 
            @click="handleCreate"
            style="padding: 6px 15px; border: 1px solid #1890ff; border-radius: 4px; background: #1890ff; color: #fff; cursor: pointer;"
          >
            创建项目
          </button>
        </template>
      </CgEmpty>
    \`
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    template: \`
      <div style="border: 1px solid #d9d9d9; border-radius: 4px; padding: 40px 20px; background: #fafafa;">
        <h3 style="margin-bottom: 20px; text-align: center;">数据列表</h3>
        <CgEmpty description="列表为空" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgEmpty: Empty
    },
    template: \`
      <CgEmpty>
        <template #image>
          <div style="font-size: 48px; color: #ccc;">📭</div>
        </template>
        <template #description>
          <span style="color: #999;">
            自定义空状态
            <br />
            没有找到相关内容
          </span>
        </template>
        <template #default>
          <button style="padding: 6px 15px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff; cursor: pointer; margin-right: 8px;">
            重新加载
          </button>
          <button style="padding: 6px 15px; border: 1px solid #1890ff; border-radius: 4px; background: #1890ff; color: #fff; cursor: pointer;">
            添加数据
          </button>
        </template>
      </CgEmpty>
    \`
  })
}`,...d.parameters?.docs?.source}}};const B=["Basic","CustomDescription","NoDescription","CustomImage","SimpleImage","WithAction","InContainer","CustomSlot"];export{o as Basic,s as CustomDescription,p as CustomImage,d as CustomSlot,i as InContainer,a as NoDescription,m as SimpleImage,c as WithAction,B as __namedExportsOrder,z as default};
