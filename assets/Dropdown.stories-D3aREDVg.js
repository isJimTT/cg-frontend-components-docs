import{d as O,ae as f,af as S,c as C,ag as _,ah as x,ai as v,v as B,aj as L,ak as R,al as U,am as g,an as T,ao as P,r as V}from"./iframe-CiolPNwv.js";import"./index-CYtBa4td.js";import{D as N}from"./dropdown-BkM7Uf4_.js";import{_ as t}from"./index-tj4f3acd.js";import{D as o}from"./DownOutlined-DeIOKUSk.js";import{B as u}from"./index-DWv55aqM.js";import{S as D}from"./index-C9_4AhMb.js";import{U as j}from"./UserOutlined-CYnCTF5v.js";import"./Dropdown-6CklYmQZ.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./RightOutlined-_q3ZrV7U.js";import"./devWarning-MTSIIkhh.js";import"./omit-BBXwSgK8.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./zoom-D2IHdkts.js";import"./index-AnxN_syn.js";import"./shallowequal-M8HXjn8A.js";import"./_arrayIncludes-B8uzE354.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./index-D70oGXWT.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./initDefaultProps-CZpOG6Cc.js";import"./KeyCode-D63Tfrq7.js";import"./collapseMotion-DlFXgzvQ.js";import"./index-vtqL8OYL.js";import"./useState-Ds4oJkA7.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./useFlexGapSupport-CPj-DJgt.js";const e=O({__name:"Dropdown",setup(n){const a=n,r=f(),m=S(),h=C(()=>{const p={};return Object.keys(r).filter(M=>M.startsWith("on")).forEach(M=>{p[M]=r[M]}),p});return(p,M)=>(U(),_(B(N),L(a,R(h.value)),x({default:v(()=>[g(p.$slots,"default")]),_:2},[B(m)&&B(m).overlay?{name:"overlay",fn:v(b=>[g(p.$slots,"overlay",T(P(b||{})))]),key:"0"}:void 0]),1040))}});e.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},slots:[{name:"overlay",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Dropdown/Dropdown.vue"]};e.install=n=>{n.component("CgDropdown",e)};const{fn:Le}=__STORYBOOK_MODULE_TEST__,Re={title:"Components/Dropdown",component:e,tags:["autodocs"],argTypes:{arrow:{control:"boolean"},disabled:{control:"boolean"},destroyPopupOnHide:{control:"boolean"},open:{control:"boolean"},placement:{control:"select",options:["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]},trigger:{control:"multi-select",options:["click","hover","contextmenu"]},overlayClassName:{control:"text"},overlayStyle:{control:"object"}},args:{placement:"bottomLeft",trigger:["hover"]}},l={render:()=>({components:{Dropdown:e,Menu:t,Button:u,DownOutlined:o},setup(){return{handleMenuClick:a=>{console.log("click",a)}}},template:`
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <a @click.prevent>
          悬停我 <DownOutlined />
        </a>
      </Dropdown>
    `}),parameters:{docs:{description:{story:"最简单的下拉菜单。"}}}},d={render:()=>({components:{Dropdown:e,Menu:t,Space:D,Button:u,DownOutlined:o},template:`
      <Space wrap>
        <Dropdown placement="bottomLeft">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomLeft <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="bottomCenter">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomCenter <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="bottomRight">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomRight <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topLeft">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topLeft <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topCenter">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topCenter <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topRight">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topRight <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    `}),parameters:{docs:{description:{story:"支持 6 个弹出位置。"}}}},s={render:()=>({components:{Dropdown:e,Menu:t,Space:D,Button:u,DownOutlined:o},template:`
      <Space wrap>
        <Dropdown>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            悬停触发 <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown :trigger="['click']">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            点击触发 <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown :trigger="['contextmenu']">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            右键触发 <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    `}),parameters:{docs:{description:{story:"默认是移入触发菜单，可以点击触发或右键触发。"}}}},i={render:()=>({components:{Dropdown:e,Menu:t,Button:u,DownOutlined:o},template:`
      <Dropdown :arrow="true">
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          带箭头的下拉菜单 <DownOutlined />
        </Button>
      </Dropdown>
    `}),parameters:{docs:{description:{story:"可以展示一个箭头。"}}}},c={render:()=>({components:{Dropdown:e,Menu:t,Button:u,DownOutlined:o},template:`
      <Dropdown :disabled="true">
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          禁用状态 <DownOutlined />
        </Button>
      </Dropdown>
    `}),parameters:{docs:{description:{story:"禁用状态的下拉菜单。"}}}},I={render:()=>({components:{Dropdown:e,Menu:t,Button:u,DownOutlined:o},setup(){const n=V(!1);return{visible:n,handleVisibleChange:m=>{n.value=m},handleMenuClick:m=>{m.key==="3"&&(n.value=!1)}}},template:`
      <Dropdown
        v-model:open="visible"
        :trigger="['click']"
        @openChange="handleVisibleChange"
      >
        <template #overlay>
          <Menu @click="handleMenuClick">
            <Menu.Item key="1">点击我不会关闭菜单</Menu.Item>
            <Menu.Item key="2">点击我不会关闭菜单</Menu.Item>
            <Menu.Item key="3">点击我会关闭菜单</Menu.Item>
          </Menu>
        </template>
        <Button>
          点击触发 <DownOutlined />
        </Button>
      </Dropdown>
    `}),parameters:{docs:{description:{story:"点击菜单项后可以自定义是否关闭菜单。"}}}},y={render:()=>({components:{Dropdown:e,Menu:t,Button:u,DownOutlined:o},template:`
      <Dropdown>
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.SubMenu key="sub1" title="子菜单">
              <Menu.Item key="3">子菜单项 1</Menu.Item>
              <Menu.Item key="4">子菜单项 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="5">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          嵌套菜单 <DownOutlined />
        </Button>
      </Dropdown>
    `}),parameters:{docs:{description:{story:"下拉菜单可以嵌套子菜单。"}}}},k={render:()=>({components:{Dropdown:e,Menu:t,Space:D,Button:u,DownOutlined:o},setup(){return{handleButtonClick:r=>{console.log("click left button",r)},handleMenuClick:r=>{console.log("click menu item",r)}}},template:`
      <Space wrap>
        <Dropdown.Button @click="handleButtonClick">
          <template #overlay>
            <Menu @click="handleMenuClick">
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          下拉菜单按钮
        </Dropdown.Button>
        <Dropdown.Button primary>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          主按钮
        </Dropdown.Button>
        <Dropdown.Button :disabled="true">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          禁用
        </Dropdown.Button>
        <Dropdown.Button danger>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          危险按钮
        </Dropdown.Button>
      </Space>
    `}),parameters:{docs:{description:{story:"使用 Dropdown.Button 可以创建带有下拉菜单的按钮。"}}}},w={render:()=>({components:{Dropdown:e,Menu:t,Space:D,Button:u,DownOutlined:o,UserOutlined:j},template:`
      <div>
        <h3 style="margin-bottom: 16px;">下拉菜单组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space wrap>
            <Dropdown>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">
                    <UserOutlined /> 菜单项 1
                  </Menu.Item>
                  <Menu.Item key="2">
                    <UserOutlined /> 菜单项 2
                  </Menu.Item>
                  <Menu.Item key="3">
                    <UserOutlined /> 菜单项 3
                  </Menu.Item>
                </Menu>
              </template>
              <Button>
                基础下拉菜单 <DownOutlined />
              </Button>
            </Dropdown>
            
            <Dropdown :arrow="true">
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              <Button>
                带箭头的下拉菜单 <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
          
          <Space wrap>
            <Dropdown.Button type="primary">
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              主按钮
            </Dropdown.Button>
            
            <Dropdown.Button>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              默认按钮
            </Dropdown.Button>
            
            <Dropdown.Button danger>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              危险按钮
            </Dropdown.Button>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的下拉菜单组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示下拉菜单组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Button,
      DownOutlined
    },
    setup() {
      const handleMenuClick = (e: any) => {
        console.log('click', e);
      };
      return {
        handleMenuClick
      };
    },
    template: \`
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <a @click.prevent>
          悬停我 <DownOutlined />
        </a>
      </Dropdown>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '最简单的下拉菜单。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Space,
      Button,
      DownOutlined
    },
    template: \`
      <Space wrap>
        <Dropdown placement="bottomLeft">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomLeft <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="bottomCenter">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomCenter <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="bottomRight">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            bottomRight <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topLeft">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topLeft <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topCenter">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topCenter <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown placement="topRight">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            topRight <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '支持 6 个弹出位置。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Space,
      Button,
      DownOutlined
    },
    template: \`
      <Space wrap>
        <Dropdown>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            悬停触发 <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown :trigger="['click']">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            点击触发 <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown :trigger="['contextmenu']">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          <Button>
            右键触发 <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '默认是移入触发菜单，可以点击触发或右键触发。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Button,
      DownOutlined
    },
    template: \`
      <Dropdown :arrow="true">
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          带箭头的下拉菜单 <DownOutlined />
        </Button>
      </Dropdown>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以展示一个箭头。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Button,
      DownOutlined
    },
    template: \`
      <Dropdown :disabled="true">
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.Item key="3">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          禁用状态 <DownOutlined />
        </Button>
      </Dropdown>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '禁用状态的下拉菜单。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Button,
      DownOutlined
    },
    setup() {
      const visible = ref(false);
      const handleVisibleChange = (flag: boolean) => {
        visible.value = flag;
      };
      const handleMenuClick = (e: any) => {
        if (e.key === '3') {
          visible.value = false;
        }
      };
      return {
        visible,
        handleVisibleChange,
        handleMenuClick
      };
    },
    template: \`
      <Dropdown
        v-model:open="visible"
        :trigger="['click']"
        @openChange="handleVisibleChange"
      >
        <template #overlay>
          <Menu @click="handleMenuClick">
            <Menu.Item key="1">点击我不会关闭菜单</Menu.Item>
            <Menu.Item key="2">点击我不会关闭菜单</Menu.Item>
            <Menu.Item key="3">点击我会关闭菜单</Menu.Item>
          </Menu>
        </template>
        <Button>
          点击触发 <DownOutlined />
        </Button>
      </Dropdown>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '点击菜单项后可以自定义是否关闭菜单。'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Button,
      DownOutlined
    },
    template: \`
      <Dropdown>
        <template #overlay>
          <Menu>
            <Menu.Item key="1">菜单项 1</Menu.Item>
            <Menu.Item key="2">菜单项 2</Menu.Item>
            <Menu.SubMenu key="sub1" title="子菜单">
              <Menu.Item key="3">子菜单项 1</Menu.Item>
              <Menu.Item key="4">子菜单项 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="5">菜单项 3</Menu.Item>
          </Menu>
        </template>
        <Button>
          嵌套菜单 <DownOutlined />
        </Button>
      </Dropdown>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '下拉菜单可以嵌套子菜单。'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Space,
      Button,
      DownOutlined
    },
    setup() {
      const handleButtonClick = (e: any) => {
        console.log('click left button', e);
      };
      const handleMenuClick = (e: any) => {
        console.log('click menu item', e);
      };
      return {
        handleButtonClick,
        handleMenuClick
      };
    },
    template: \`
      <Space wrap>
        <Dropdown.Button @click="handleButtonClick">
          <template #overlay>
            <Menu @click="handleMenuClick">
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          下拉菜单按钮
        </Dropdown.Button>
        <Dropdown.Button primary>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          主按钮
        </Dropdown.Button>
        <Dropdown.Button :disabled="true">
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          禁用
        </Dropdown.Button>
        <Dropdown.Button danger>
          <template #overlay>
            <Menu>
              <Menu.Item key="1">菜单项 1</Menu.Item>
              <Menu.Item key="2">菜单项 2</Menu.Item>
              <Menu.Item key="3">菜单项 3</Menu.Item>
            </Menu>
          </template>
          危险按钮
        </Dropdown.Button>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 Dropdown.Button 可以创建带有下拉菜单的按钮。'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown,
      Menu,
      Space,
      Button,
      DownOutlined,
      UserOutlined
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">下拉菜单组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space wrap>
            <Dropdown>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">
                    <UserOutlined /> 菜单项 1
                  </Menu.Item>
                  <Menu.Item key="2">
                    <UserOutlined /> 菜单项 2
                  </Menu.Item>
                  <Menu.Item key="3">
                    <UserOutlined /> 菜单项 3
                  </Menu.Item>
                </Menu>
              </template>
              <Button>
                基础下拉菜单 <DownOutlined />
              </Button>
            </Dropdown>
            
            <Dropdown :arrow="true">
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              <Button>
                带箭头的下拉菜单 <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
          
          <Space wrap>
            <Dropdown.Button type="primary">
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              主按钮
            </Dropdown.Button>
            
            <Dropdown.Button>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              默认按钮
            </Dropdown.Button>
            
            <Dropdown.Button danger>
              <template #overlay>
                <Menu>
                  <Menu.Item key="1">菜单项 1</Menu.Item>
                  <Menu.Item key="2">菜单项 2</Menu.Item>
                  <Menu.Item key="3">菜单项 3</Menu.Item>
                </Menu>
              </template>
              危险按钮
            </Dropdown.Button>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的下拉菜单组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示下拉菜单组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const Ue=["Default","Placement","Trigger","WithArrow","Disabled","ClickHide","NestedMenu","DropdownButton","ThemeShowcase"];export{I as ClickHide,l as Default,c as Disabled,k as DropdownButton,y as NestedMenu,d as Placement,w as ThemeShowcase,s as Trigger,i as WithArrow,Ue as __namedExportsOrder,Re as default};
