import{d as x,ae as R,af as k,c as L,ag as A,ah as O,ai as C,v as f,aj as _,ak as D,al as z,am as T,an as S,ao as w,r as G}from"./iframe-CiolPNwv.js";import{P as H}from"./index-CK7QGXoe.js";import{B as e}from"./index-DWv55aqM.js";import{S as p}from"./index-C9_4AhMb.js";import"./index-D70oGXWT.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./initDefaultProps-CZpOG6Cc.js";import"./omit-BBXwSgK8.js";import"./index-vtqL8OYL.js";import"./useState-Ds4oJkA7.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./useFlexGapSupport-CPj-DJgt.js";const t=x({__name:"Popover",setup(o){const y=o,g=R(),i=k(),b=L(()=>{const n={};return Object.keys(g).filter(r=>r.startsWith("on")).forEach(r=>{n[r]=g[r]}),n});return(n,r)=>(z(),A(f(H),_(y,D(b.value)),O({default:C(()=>[T(n.$slots,"default")]),_:2},[f(i).title?{name:"title",fn:C(h=>[T(n.$slots,"title",S(w(h||{})))]),key:"0"}:void 0,f(i).content?{name:"content",fn:C(h=>[T(n.$slots,"content",S(w(h||{})))]),key:"1"}:void 0]),1040))}});t.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},slots:[{name:"title",scoped:!0,bindings:[]},{name:"content",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Popover/Popover.vue"]};t.install=o=>{o.component("CgPopover",t)};const{fn:dt}=__STORYBOOK_MODULE_TEST__,Bt={title:"Components/Popover",component:t,tags:["autodocs"],argTypes:{align:{control:"object"},arrowPointAtCenter:{control:"boolean"},autoAdjustOverflow:{control:"boolean"},color:{control:"color"},content:{control:"text"},defaultOpen:{control:"boolean"},destroyTooltipOnHide:{control:"boolean"},mouseEnterDelay:{control:"number"},mouseLeaveDelay:{control:"number"},overlayClassName:{control:"text"},overlayStyle:{control:"object"},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextmenu"]},open:{control:"boolean"},zIndex:{control:"number"},title:{control:"text"}},args:{content:"This is the content",title:"Title",placement:"top",trigger:"hover"}},l={render:()=>({components:{Popover:t,Button:e},template:`
      <Popover content="This is the content" title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    `}),parameters:{docs:{description:{story:"最简单的用法，浮层的大小由内容区域决定。"}}}},c={render:()=>({components:{Popover:t,Button:e,Space:p},template:`
      <div style="padding: 60px;">
        <div style="margin-left: 70px; white-space: nowrap;">
          <Popover placement="topLeft" title="Title" content="Content">
            <Button>TL</Button>
          </Popover>
          <Popover placement="top" title="Title" content="Content">
            <Button>Top</Button>
          </Popover>
          <Popover placement="topRight" title="Title" content="Content">
            <Button>TR</Button>
          </Popover>
        </div>
        <div style="width: 70px; float: left;">
          <Popover placement="leftTop" title="Title" content="Content">
            <Button>LT</Button>
          </Popover>
          <Popover placement="left" title="Title" content="Content">
            <Button>Left</Button>
          </Popover>
          <Popover placement="leftBottom" title="Title" content="Content">
            <Button>LB</Button>
          </Popover>
        </div>
        <div style="width: 70px; margin-left: 304px;">
          <Popover placement="rightTop" title="Title" content="Content">
            <Button>RT</Button>
          </Popover>
          <Popover placement="right" title="Title" content="Content">
            <Button>Right</Button>
          </Popover>
          <Popover placement="rightBottom" title="Title" content="Content">
            <Button>RB</Button>
          </Popover>
        </div>
        <div style="margin-left: 70px; clear: both; white-space: nowrap;">
          <Popover placement="bottomLeft" title="Title" content="Content">
            <Button>BL</Button>
          </Popover>
          <Popover placement="bottom" title="Title" content="Content">
            <Button>Bottom</Button>
          </Popover>
          <Popover placement="bottomRight" title="Title" content="Content">
            <Button>BR</Button>
          </Popover>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"位置有十二个方向。"}}}},a={render:()=>({components:{Popover:t,Button:e,Space:p},template:`
      <Space>
        <Popover content="Content" title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content="Content" title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content="Content" title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </Space>
    `}),parameters:{docs:{description:{story:"鼠标移入、聚集、点击。"}}}},s={render:()=>({components:{Popover:t,Button:e},setup(){const o=G(!1);return{open:o,hide:()=>{o.value=!1},handleOpenChange:i=>{o.value=i}}},template:`
      <Popover 
        :open="open" 
        @openChange="handleOpenChange"
        title="Title"
        trigger="click"
      >
        <template #content>
          <div>
            <p>Content</p>
            <p>Content</p>
            <Button type="primary" @click="hide">Close</Button>
          </div>
        </template>
        <Button type="primary">Click me</Button>
      </Popover>
    `}),parameters:{docs:{description:{story:"使用 open 属性控制浮层显示。"}}}},m={render:()=>({components:{Popover:t,Button:e,Space:p},template:`
      <Space>
        <Popover placement="topLeft" title="Title" content="Content">
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover placement="topLeft" title="Title" content="Content" arrow-point-at-center>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
      </Space>
    `}),parameters:{docs:{description:{story:"设置 arrowPointAtCenter 后，箭头将指向目标元素的中心。"}}}},u={render:()=>({components:{Popover:t,Button:e},template:`
      <Popover trigger="click">
        <template #content>
          <div style="padding: 16px;">
            <h4>Custom Content</h4>
            <p>This is a custom content with rich formatting.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <Button type="primary" size="small">Action</Button>
          </div>
        </template>
        <template #title>
          <span style="color: #1890ff;">Custom Title</span>
        </template>
        <Button>Click me</Button>
      </Popover>
    `}),parameters:{docs:{description:{story:"使用插槽自定义内容和标题。"}}}},v={render:()=>({components:{Popover:t,Button:e,Space:p},template:`
      <Space>
        <Popover content="Content" title="Title" color="#f50">
          <Button>Red</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#2db7f5">
          <Button>Blue</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#87d068">
          <Button>Green</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#108ee9">
          <Button>Cyan</Button>
        </Popover>
      </Space>
    `}),parameters:{docs:{description:{story:"设置背景颜色。"}}}},d={render:()=>({components:{Popover:t,Button:e},template:`
      <Popover 
        content="Content" 
        title="Title" 
        :mouse-enter-delay="1" 
        :mouse-leave-delay="1"
      >
        <Button>Delayed 1 second</Button>
      </Popover>
    `}),parameters:{docs:{description:{story:"延迟显示和隐藏。"}}}},B={render:()=>({components:{Popover:t,Button:e},template:`
      <Popover content="This is content without title">
        <Button>No title</Button>
      </Popover>
    `}),parameters:{docs:{description:{story:"没有标题的气泡卡片。"}}}},P={render:()=>({components:{Popover:t,Button:e,Space:p},template:`
      <div>
        <h3 style="margin-bottom: 16px;">气泡卡片组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础用法</h4>
            <Space>
              <Popover content="This is the content" title="Title">
                <Button type="primary">Hover me</Button>
              </Popover>
              <Popover content="Click to show" title="Click Popover" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>不同位置</h4>
            <Space>
              <Popover placement="top" title="Top" content="Top content">
                <Button>Top</Button>
              </Popover>
              <Popover placement="bottom" title="Bottom" content="Bottom content">
                <Button>Bottom</Button>
              </Popover>
              <Popover placement="left" title="Left" content="Left content">
                <Button>Left</Button>
              </Popover>
              <Popover placement="right" title="Right" content="Right content">
                <Button>Right</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>彩色气泡卡片</h4>
            <Space>
              <Popover content="Red popover" title="Red" color="#f50">
                <Button>Red</Button>
              </Popover>
              <Popover content="Blue popover" title="Blue" color="#2db7f5">
                <Button>Blue</Button>
              </Popover>
              <Popover content="Green popover" title="Green" color="#87d068">
                <Button>Green</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>自定义内容</h4>
            <Popover trigger="click">
              <template #content>
                <div style="padding: 8px;">
                  <h4 style="margin: 0 0 8px 0;">Custom Content</h4>
                  <p style="margin: 0 0 8px 0;">Rich content with formatting</p>
                  <Button type="primary" size="small">Action</Button>
                </div>
              </template>
              <template #title>
                <span style="color: #1890ff;">Custom Title</span>
              </template>
              <Button>Custom Content</Button>
            </Popover>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的气泡卡片组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示气泡卡片组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button
    },
    template: \`
      <Popover content="This is the content" title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '最简单的用法，浮层的大小由内容区域决定。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button,
      Space
    },
    template: \`
      <div style="padding: 60px;">
        <div style="margin-left: 70px; white-space: nowrap;">
          <Popover placement="topLeft" title="Title" content="Content">
            <Button>TL</Button>
          </Popover>
          <Popover placement="top" title="Title" content="Content">
            <Button>Top</Button>
          </Popover>
          <Popover placement="topRight" title="Title" content="Content">
            <Button>TR</Button>
          </Popover>
        </div>
        <div style="width: 70px; float: left;">
          <Popover placement="leftTop" title="Title" content="Content">
            <Button>LT</Button>
          </Popover>
          <Popover placement="left" title="Title" content="Content">
            <Button>Left</Button>
          </Popover>
          <Popover placement="leftBottom" title="Title" content="Content">
            <Button>LB</Button>
          </Popover>
        </div>
        <div style="width: 70px; margin-left: 304px;">
          <Popover placement="rightTop" title="Title" content="Content">
            <Button>RT</Button>
          </Popover>
          <Popover placement="right" title="Title" content="Content">
            <Button>Right</Button>
          </Popover>
          <Popover placement="rightBottom" title="Title" content="Content">
            <Button>RB</Button>
          </Popover>
        </div>
        <div style="margin-left: 70px; clear: both; white-space: nowrap;">
          <Popover placement="bottomLeft" title="Title" content="Content">
            <Button>BL</Button>
          </Popover>
          <Popover placement="bottom" title="Title" content="Content">
            <Button>Bottom</Button>
          </Popover>
          <Popover placement="bottomRight" title="Title" content="Content">
            <Button>BR</Button>
          </Popover>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '位置有十二个方向。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button,
      Space
    },
    template: \`
      <Space>
        <Popover content="Content" title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content="Content" title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content="Content" title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '鼠标移入、聚集、点击。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button
    },
    setup() {
      const open = ref(false);
      const hide = () => {
        open.value = false;
      };
      const handleOpenChange = (newOpen: boolean) => {
        open.value = newOpen;
      };
      return {
        open,
        hide,
        handleOpenChange
      };
    },
    template: \`
      <Popover 
        :open="open" 
        @openChange="handleOpenChange"
        title="Title"
        trigger="click"
      >
        <template #content>
          <div>
            <p>Content</p>
            <p>Content</p>
            <Button type="primary" @click="hide">Close</Button>
          </div>
        </template>
        <Button type="primary">Click me</Button>
      </Popover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 open 属性控制浮层显示。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button,
      Space
    },
    template: \`
      <Space>
        <Popover placement="topLeft" title="Title" content="Content">
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover placement="topLeft" title="Title" content="Content" arrow-point-at-center>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置 arrowPointAtCenter 后，箭头将指向目标元素的中心。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button
    },
    template: \`
      <Popover trigger="click">
        <template #content>
          <div style="padding: 16px;">
            <h4>Custom Content</h4>
            <p>This is a custom content with rich formatting.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <Button type="primary" size="small">Action</Button>
          </div>
        </template>
        <template #title>
          <span style="color: #1890ff;">Custom Title</span>
        </template>
        <Button>Click me</Button>
      </Popover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用插槽自定义内容和标题。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button,
      Space
    },
    template: \`
      <Space>
        <Popover content="Content" title="Title" color="#f50">
          <Button>Red</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#2db7f5">
          <Button>Blue</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#87d068">
          <Button>Green</Button>
        </Popover>
        <Popover content="Content" title="Title" color="#108ee9">
          <Button>Cyan</Button>
        </Popover>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置背景颜色。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button
    },
    template: \`
      <Popover 
        content="Content" 
        title="Title" 
        :mouse-enter-delay="1" 
        :mouse-leave-delay="1"
      >
        <Button>Delayed 1 second</Button>
      </Popover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '延迟显示和隐藏。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button
    },
    template: \`
      <Popover content="This is content without title">
        <Button>No title</Button>
      </Popover>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '没有标题的气泡卡片。'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Popover,
      Button,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">气泡卡片组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础用法</h4>
            <Space>
              <Popover content="This is the content" title="Title">
                <Button type="primary">Hover me</Button>
              </Popover>
              <Popover content="Click to show" title="Click Popover" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>不同位置</h4>
            <Space>
              <Popover placement="top" title="Top" content="Top content">
                <Button>Top</Button>
              </Popover>
              <Popover placement="bottom" title="Bottom" content="Bottom content">
                <Button>Bottom</Button>
              </Popover>
              <Popover placement="left" title="Left" content="Left content">
                <Button>Left</Button>
              </Popover>
              <Popover placement="right" title="Right" content="Right content">
                <Button>Right</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>彩色气泡卡片</h4>
            <Space>
              <Popover content="Red popover" title="Red" color="#f50">
                <Button>Red</Button>
              </Popover>
              <Popover content="Blue popover" title="Blue" color="#2db7f5">
                <Button>Blue</Button>
              </Popover>
              <Popover content="Green popover" title="Green" color="#87d068">
                <Button>Green</Button>
              </Popover>
            </Space>
          </div>
          
          <div>
            <h4>自定义内容</h4>
            <Popover trigger="click">
              <template #content>
                <div style="padding: 8px;">
                  <h4 style="margin: 0 0 8px 0;">Custom Content</h4>
                  <p style="margin: 0 0 8px 0;">Rich content with formatting</p>
                  <Button type="primary" size="small">Action</Button>
                </div>
              </template>
              <template #title>
                <span style="color: #1890ff;">Custom Title</span>
              </template>
              <Button>Custom Content</Button>
            </Popover>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的气泡卡片组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示气泡卡片组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};const Pt=["Default","Placement","TriggerMode","ControlledMode","ArrowPointAtCenter","CustomContent","ColoredPopover","DelayedShow","NoTitle","ThemeShowcase"];export{m as ArrowPointAtCenter,v as ColoredPopover,s as ControlledMode,u as CustomContent,l as Default,d as DelayedShow,B as NoTitle,c as Placement,P as ThemeShowcase,a as TriggerMode,Pt as __namedExportsOrder,Bt as default};
