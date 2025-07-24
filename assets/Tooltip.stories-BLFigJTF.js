import{d as L,ae as k,af as D,c as R,ag as A,ah as _,ai as v,v as y,aj as U,ak as E,al as G,am as S,an as j,ao as H,r as f}from"./iframe-CiolPNwv.js";import{T as M}from"./index-D70oGXWT.js";import{S as e}from"./index-C9_4AhMb.js";import{B as o}from"./index-DWv55aqM.js";import{U as w}from"./UserOutlined-CYnCTF5v.js";import{D as N}from"./DownloadOutlined-D1g_pkGa.js";import{S as z}from"./SearchOutlined-UrLs3OCM.js";import{D as b}from"./index-CJwjXjc_.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./index-vtqL8OYL.js";import"./useState-Ds4oJkA7.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";const t=L({__name:"Tooltip",setup(n){const x=n,i=k(),C=D(),P=R(()=>{const p={};return Object.keys(i).filter(l=>l.startsWith("on")).forEach(l=>{p[l]=i[l]}),p});return(p,l)=>(G(),A(y(M),U(x,E(P.value)),_({default:v(()=>[S(p.$slots,"default")]),_:2},[y(C).title?{name:"title",fn:v(O=>[S(p.$slots,"title",j(H(O||{})))]),key:"0"}:void 0]),1040))}});t.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},slots:[{name:"title",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Tooltip/Tooltip.vue"]};t.install=n=>{n.component("CgTooltip",t)};const{fn:St}=__STORYBOOK_MODULE_TEST__,ft={title:"Components/Tooltip",component:t,tags:["autodocs"],argTypes:{align:{control:"object"},arrowPointAtCenter:{control:"boolean"},autoAdjustOverflow:{control:"boolean"},color:{control:"color"},defaultOpen:{control:"boolean"},destroyTooltipOnHide:{control:"boolean"},mouseEnterDelay:{control:"number"},mouseLeaveDelay:{control:"number"},overlayClassName:{control:"text"},overlayStyle:{control:"object"},placement:{control:"select",options:["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]},trigger:{control:"select",options:["hover","focus","click","contextmenu"]},open:{control:"boolean"},zIndex:{control:"number"},title:{control:"text"}},args:{arrowPointAtCenter:!1,autoAdjustOverflow:!0,defaultOpen:!1,destroyTooltipOnHide:!1,mouseEnterDelay:.1,mouseLeaveDelay:.1,placement:"top",trigger:"hover"}},r={render:()=>({components:{Tooltip:t},template:`
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    `}),parameters:{docs:{description:{story:"最简单的用法。"}}}},a={render:()=>({components:{Tooltip:t,Button:o,Space:e},template:`
      <div style="margin-left: 60px; white-space: nowrap;">
        <div style="margin-left: 60px;">
          <Tooltip placement="topLeft" title="Prompt Text">
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title="Prompt Text">
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style="width: 60px; float: left;">
          <Tooltip placement="leftTop" title="Prompt Text">
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title="Prompt Text">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title="Prompt Text">
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style="width: 60px; margin-left: 270px;">
          <Tooltip placement="rightTop" title="Prompt Text">
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title="Prompt Text">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title="Prompt Text">
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style="margin-left: 60px; clear: both;">
          <Tooltip placement="bottomLeft" title="Prompt Text">
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Prompt Text">
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title="Prompt Text">
            <Button>BR</Button>
          </Tooltip>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"位置有 12 个方向。"}}}},s={render:()=>({components:{Tooltip:t,Button:o,Space:e},template:`
      <Space>
        <Tooltip placement="topLeft" title="Prompt Text">
          <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
      </Space>
    `}),parameters:{docs:{description:{story:"设置了 arrowPointAtCenter 的提示框。"}}}},u={render:()=>({components:{Tooltip:t,Button:o,Space:e},template:`
      <Space>
        <Tooltip title="prompt text">
          <Button>Hover me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="focus">
          <Button>Focus me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="click">
          <Button>Click me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="contextmenu">
          <Button>Right click me</Button>
        </Tooltip>
      </Space>
    `}),parameters:{docs:{description:{story:"鼠标移入、聚集、点击、右击都可以触发气泡确认框。"}}}},c={render:()=>({components:{Tooltip:t,Button:o,Space:e},setup(){const n=f(!1);return{open:n,handleOpenChange:i=>{n.value=i}}},template:`
      <Space>
        <Tooltip 
          title="prompt text" 
          :open="open"
          @openChange="handleOpenChange"
        >
          <Button>Controlled Tooltip</Button>
        </Tooltip>
        <Button @click="open = !open">
          {{ open ? 'Hide' : 'Show' }} Tooltip
        </Button>
      </Space>
    `}),parameters:{docs:{description:{story:"通过 open 属性控制提示框的显示和隐藏。"}}}},m={render:()=>({components:{Tooltip:t,Button:o,Space:e,Divider:b},template:`
      <div>
        <h4>Preset colors</h4>
        <Space wrap>
          <Tooltip title="prompt text" color="pink">
            <Button>Pink</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="red">
            <Button>Red</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="yellow">
            <Button>Yellow</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="orange">
            <Button>Orange</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="cyan">
            <Button>Cyan</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="green">
            <Button>Green</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="blue">
            <Button>Blue</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="purple">
            <Button>Purple</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="geekblue">
            <Button>Geekblue</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="magenta">
            <Button>Magenta</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="volcano">
            <Button>Volcano</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="gold">
            <Button>Gold</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="lime">
            <Button>Lime</Button>
          </Tooltip>
        </Space>
        
        <Divider />
        
        <h4>Custom colors</h4>
        <Space wrap>
          <Tooltip title="prompt text" color="#f50">
            <Button>#f50</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#2db7f5">
            <Button>#2db7f5</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#87d068">
            <Button>#87d068</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#108ee9">
            <Button>#108ee9</Button>
          </Tooltip>
        </Space>
      </div>
    `}),parameters:{docs:{description:{story:"我们添加了多种预设色彩的提示框样式，用作不同场景使用。"}}}},T={render:()=>({components:{Tooltip:t,Button:o,UserOutlined:w},template:`
      <Tooltip>
        <template #title>
          <span>
            <UserOutlined style="margin-right: 4px;" />
            Custom content with icon
          </span>
        </template>
        <Button>Custom Content</Button>
      </Tooltip>
    `}),parameters:{docs:{description:{story:"使用 slot 自定义提示框的内容。"}}}},d={render:()=>({components:{Tooltip:t,Button:o,Space:e},template:`
      <Space>
        <Tooltip title="prompt text" :mouse-enter-delay="0">
          <Button>No delay</Button>
        </Tooltip>
        <Tooltip title="prompt text" :mouse-enter-delay="0.5">
          <Button>0.5s delay</Button>
        </Tooltip>
        <Tooltip title="prompt text" :mouse-enter-delay="1">
          <Button>1s delay</Button>
        </Tooltip>
      </Space>
    `}),parameters:{docs:{description:{story:"鼠标移入后延时显示，鼠标移出后延时消失。"}}}},B={render:()=>({components:{Tooltip:t,Button:o,Space:e},template:`
      <Space>
        <Tooltip title="prompt text">
          <Button disabled>Disabled Button</Button>
        </Tooltip>
        <Tooltip title="prompt text">
          <span style="cursor: not-allowed;">
            <Button disabled style="pointer-events: none;">
              Disabled Button with wrapper
            </Button>
          </span>
        </Tooltip>
      </Space>
    `}),parameters:{docs:{description:{story:"包装一个被禁用的元素，使其能正常显示提示框。"}}}},g={render:()=>({components:{Tooltip:t,Button:o},template:`
      <Tooltip 
        title="This is a very long tooltip content that might wrap to multiple lines. It demonstrates how the tooltip handles longer text content and maintains readability."
        :overlay-style="{ maxWidth: '300px' }"
      >
        <Button>Long Content Tooltip</Button>
      </Tooltip>
    `}),parameters:{docs:{description:{story:"当提示框内容较长时，可以通过 overlayStyle 设置最大宽度。"}}}},h={render:()=>({components:{Tooltip:t,Button:o,Space:e,Divider:b,UserOutlined:w,SearchOutlined:z,DownloadOutlined:N},setup(){return{open:f(!1)}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">提示框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础提示框</h4>
            <Space wrap>
              <Tooltip title="这是一个基础提示框">
                <Button>基础提示</Button>
              </Tooltip>
              <Tooltip title="点击触发的提示框" trigger="click">
                <Button>点击触发</Button>
              </Tooltip>
              <Tooltip title="聚焦触发的提示框" trigger="focus">
                <Button>聚焦触发</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>不同位置</h4>
            <Space wrap>
              <Tooltip title="顶部提示" placement="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip title="右侧提示" placement="right">
                <Button>Right</Button>
              </Tooltip>
              <Tooltip title="底部提示" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip title="左侧提示" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>彩色提示框</h4>
            <Space wrap>
              <Tooltip title="红色提示框" color="red">
                <Button>Red</Button>
              </Tooltip>
              <Tooltip title="蓝色提示框" color="blue">
                <Button>Blue</Button>
              </Tooltip>
              <Tooltip title="绿色提示框" color="green">
                <Button>Green</Button>
              </Tooltip>
              <Tooltip title="橙色提示框" color="orange">
                <Button>Orange</Button>
              </Tooltip>
              <Tooltip title="紫色提示框" color="purple">
                <Button>Purple</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>自定义内容</h4>
            <Space wrap>
              <Tooltip>
                <template #title>
                  <span>
                    <UserOutlined style="margin-right: 4px;" />
                    用户信息提示
                  </span>
                </template>
                <Button>
                  <UserOutlined />
                  用户
                </Button>
              </Tooltip>
              <Tooltip>
                <template #title>
                  <span>
                    <SearchOutlined style="margin-right: 4px;" />
                    搜索功能说明
                  </span>
                </template>
                <Button>
                  <SearchOutlined />
                  搜索
                </Button>
              </Tooltip>
              <Tooltip>
                <template #title>
                  <span>
                    <DownloadOutlined style="margin-right: 4px;" />
                    下载文件到本地
                  </span>
                </template>
                <Button>
                  <DownloadOutlined />
                  下载
                </Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>箭头指向中心</h4>
            <Space wrap>
              <Tooltip title="边缘对齐" placement="topLeft">
                <Button>边缘对齐</Button>
              </Tooltip>
              <Tooltip title="箭头指向中心" placement="topLeft" arrow-point-at-center>
                <Button>箭头指向中心</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>延时显示</h4>
            <Space wrap>
              <Tooltip title="无延时" :mouse-enter-delay="0">
                <Button>无延时</Button>
              </Tooltip>
              <Tooltip title="0.5秒延时" :mouse-enter-delay="0.5">
                <Button>0.5秒延时</Button>
              </Tooltip>
              <Tooltip title="1秒延时" :mouse-enter-delay="1">
                <Button>1秒延时</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>受控模式</h4>
            <Space>
              <Tooltip 
                title="受控的提示框" 
                :open="open"
                @openChange="(visible) => open = visible"
              >
                <Button>受控提示框</Button>
              </Tooltip>
              <Button @click="open = !open">
                {{ open ? '隐藏' : '显示' }} 提示框
              </Button>
            </Space>
          </div>
          
          <div>
            <h4>禁用元素</h4>
            <Space>
              <Tooltip title="禁用按钮的提示">
                <span style="cursor: not-allowed;">
                  <Button disabled style="pointer-events: none;">
                    禁用按钮
                  </Button>
                </span>
              </Tooltip>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的提示框组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示提示框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip
    },
    template: \`
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '最简单的用法。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    template: \`
      <div style="margin-left: 60px; white-space: nowrap;">
        <div style="margin-left: 60px;">
          <Tooltip placement="topLeft" title="Prompt Text">
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title="Prompt Text">
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style="width: 60px; float: left;">
          <Tooltip placement="leftTop" title="Prompt Text">
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title="Prompt Text">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title="Prompt Text">
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style="width: 60px; margin-left: 270px;">
          <Tooltip placement="rightTop" title="Prompt Text">
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title="Prompt Text">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title="Prompt Text">
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style="margin-left: 60px; clear: both;">
          <Tooltip placement="bottomLeft" title="Prompt Text">
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Prompt Text">
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title="Prompt Text">
            <Button>BR</Button>
          </Tooltip>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '位置有 12 个方向。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    template: \`
      <Space>
        <Tooltip placement="topLeft" title="Prompt Text">
          <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置了 arrowPointAtCenter 的提示框。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    template: \`
      <Space>
        <Tooltip title="prompt text">
          <Button>Hover me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="focus">
          <Button>Focus me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="click">
          <Button>Click me</Button>
        </Tooltip>
        <Tooltip title="prompt text" trigger="contextmenu">
          <Button>Right click me</Button>
        </Tooltip>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '鼠标移入、聚集、点击、右击都可以触发气泡确认框。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    setup() {
      const open = ref(false);
      const handleOpenChange = (visible: boolean) => {
        open.value = visible;
      };
      return {
        open,
        handleOpenChange
      };
    },
    template: \`
      <Space>
        <Tooltip 
          title="prompt text" 
          :open="open"
          @openChange="handleOpenChange"
        >
          <Button>Controlled Tooltip</Button>
        </Tooltip>
        <Button @click="open = !open">
          {{ open ? 'Hide' : 'Show' }} Tooltip
        </Button>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '通过 open 属性控制提示框的显示和隐藏。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space,
      Divider
    },
    template: \`
      <div>
        <h4>Preset colors</h4>
        <Space wrap>
          <Tooltip title="prompt text" color="pink">
            <Button>Pink</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="red">
            <Button>Red</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="yellow">
            <Button>Yellow</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="orange">
            <Button>Orange</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="cyan">
            <Button>Cyan</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="green">
            <Button>Green</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="blue">
            <Button>Blue</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="purple">
            <Button>Purple</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="geekblue">
            <Button>Geekblue</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="magenta">
            <Button>Magenta</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="volcano">
            <Button>Volcano</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="gold">
            <Button>Gold</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="lime">
            <Button>Lime</Button>
          </Tooltip>
        </Space>
        
        <Divider />
        
        <h4>Custom colors</h4>
        <Space wrap>
          <Tooltip title="prompt text" color="#f50">
            <Button>#f50</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#2db7f5">
            <Button>#2db7f5</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#87d068">
            <Button>#87d068</Button>
          </Tooltip>
          <Tooltip title="prompt text" color="#108ee9">
            <Button>#108ee9</Button>
          </Tooltip>
        </Space>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '我们添加了多种预设色彩的提示框样式，用作不同场景使用。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      UserOutlined
    },
    template: \`
      <Tooltip>
        <template #title>
          <span>
            <UserOutlined style="margin-right: 4px;" />
            Custom content with icon
          </span>
        </template>
        <Button>Custom Content</Button>
      </Tooltip>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 slot 自定义提示框的内容。'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    template: \`
      <Space>
        <Tooltip title="prompt text" :mouse-enter-delay="0">
          <Button>No delay</Button>
        </Tooltip>
        <Tooltip title="prompt text" :mouse-enter-delay="0.5">
          <Button>0.5s delay</Button>
        </Tooltip>
        <Tooltip title="prompt text" :mouse-enter-delay="1">
          <Button>1s delay</Button>
        </Tooltip>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '鼠标移入后延时显示，鼠标移出后延时消失。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space
    },
    template: \`
      <Space>
        <Tooltip title="prompt text">
          <Button disabled>Disabled Button</Button>
        </Tooltip>
        <Tooltip title="prompt text">
          <span style="cursor: not-allowed;">
            <Button disabled style="pointer-events: none;">
              Disabled Button with wrapper
            </Button>
          </span>
        </Tooltip>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '包装一个被禁用的元素，使其能正常显示提示框。'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button
    },
    template: \`
      <Tooltip 
        title="This is a very long tooltip content that might wrap to multiple lines. It demonstrates how the tooltip handles longer text content and maintains readability."
        :overlay-style="{ maxWidth: '300px' }"
      >
        <Button>Long Content Tooltip</Button>
      </Tooltip>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '当提示框内容较长时，可以通过 overlayStyle 设置最大宽度。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip,
      Button,
      Space,
      Divider,
      UserOutlined,
      SearchOutlined,
      DownloadOutlined
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">提示框组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础提示框</h4>
            <Space wrap>
              <Tooltip title="这是一个基础提示框">
                <Button>基础提示</Button>
              </Tooltip>
              <Tooltip title="点击触发的提示框" trigger="click">
                <Button>点击触发</Button>
              </Tooltip>
              <Tooltip title="聚焦触发的提示框" trigger="focus">
                <Button>聚焦触发</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>不同位置</h4>
            <Space wrap>
              <Tooltip title="顶部提示" placement="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip title="右侧提示" placement="right">
                <Button>Right</Button>
              </Tooltip>
              <Tooltip title="底部提示" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip title="左侧提示" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>彩色提示框</h4>
            <Space wrap>
              <Tooltip title="红色提示框" color="red">
                <Button>Red</Button>
              </Tooltip>
              <Tooltip title="蓝色提示框" color="blue">
                <Button>Blue</Button>
              </Tooltip>
              <Tooltip title="绿色提示框" color="green">
                <Button>Green</Button>
              </Tooltip>
              <Tooltip title="橙色提示框" color="orange">
                <Button>Orange</Button>
              </Tooltip>
              <Tooltip title="紫色提示框" color="purple">
                <Button>Purple</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>自定义内容</h4>
            <Space wrap>
              <Tooltip>
                <template #title>
                  <span>
                    <UserOutlined style="margin-right: 4px;" />
                    用户信息提示
                  </span>
                </template>
                <Button>
                  <UserOutlined />
                  用户
                </Button>
              </Tooltip>
              <Tooltip>
                <template #title>
                  <span>
                    <SearchOutlined style="margin-right: 4px;" />
                    搜索功能说明
                  </span>
                </template>
                <Button>
                  <SearchOutlined />
                  搜索
                </Button>
              </Tooltip>
              <Tooltip>
                <template #title>
                  <span>
                    <DownloadOutlined style="margin-right: 4px;" />
                    下载文件到本地
                  </span>
                </template>
                <Button>
                  <DownloadOutlined />
                  下载
                </Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>箭头指向中心</h4>
            <Space wrap>
              <Tooltip title="边缘对齐" placement="topLeft">
                <Button>边缘对齐</Button>
              </Tooltip>
              <Tooltip title="箭头指向中心" placement="topLeft" arrow-point-at-center>
                <Button>箭头指向中心</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>延时显示</h4>
            <Space wrap>
              <Tooltip title="无延时" :mouse-enter-delay="0">
                <Button>无延时</Button>
              </Tooltip>
              <Tooltip title="0.5秒延时" :mouse-enter-delay="0.5">
                <Button>0.5秒延时</Button>
              </Tooltip>
              <Tooltip title="1秒延时" :mouse-enter-delay="1">
                <Button>1秒延时</Button>
              </Tooltip>
            </Space>
          </div>
          
          <div>
            <h4>受控模式</h4>
            <Space>
              <Tooltip 
                title="受控的提示框" 
                :open="open"
                @openChange="(visible) => open = visible"
              >
                <Button>受控提示框</Button>
              </Tooltip>
              <Button @click="open = !open">
                {{ open ? '隐藏' : '显示' }} 提示框
              </Button>
            </Space>
          </div>
          
          <div>
            <h4>禁用元素</h4>
            <Space>
              <Tooltip title="禁用按钮的提示">
                <span style="cursor: not-allowed;">
                  <Button disabled style="pointer-events: none;">
                    禁用按钮
                  </Button>
                </span>
              </Tooltip>
            </Space>
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的提示框组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示提示框组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const wt=["Default","Placement","ArrowPointAtCenter","TriggerMode","ControlledMode","ColoredTooltip","CustomContent","DelayedShow","DisabledElement","LongContent","ThemeShowcase"];export{s as ArrowPointAtCenter,m as ColoredTooltip,c as ControlledMode,T as CustomContent,r as Default,d as DelayedShow,B as DisabledElement,g as LongContent,a as Placement,h as ThemeShowcase,u as TriggerMode,wt as __namedExportsOrder,ft as default};
