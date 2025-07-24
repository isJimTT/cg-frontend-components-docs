import{d as k,ae as R,af as x,c as C,ag as _,ah as j,ai as b,v as S,aj as q,ak as O,al as E,am as y,an as B,ao as D,r as F,aw as f}from"./iframe-CiolPNwv.js";import{P as M}from"./index-CxF76u_P.js";import{S as T}from"./index-C9_4AhMb.js";import"./LeftOutlined-BWzCsPQo.js";import"./RightOutlined-_q3ZrV7U.js";import"./index-DIa8XZVm.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./KeyCode-D63Tfrq7.js";import"./BaseInput-D2epJhM9.js";import"./css-DDkvXkMO.js";import"./pickAttrs-8uwpYw_5.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./List-CLOwepni.js";import"./isMobile-x7Gj6jC1.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useMemo-BmGKJ0MZ.js";import"./omit-BBXwSgK8.js";import"./useMergedState-8OkYKI-g.js";import"./useState-Ds4oJkA7.js";import"./DownOutlined-DeIOKUSk.js";import"./CheckOutlined-CIIIVjBf.js";import"./SearchOutlined-UrLs3OCM.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./statusUtils-QYI0Q3t5.js";import"./Compact-DDa3__kb.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./compact-item-X_Nkrb5h.js";import"./useBreakpoint-BpzVhzE_.js";import"./responsiveObserve-Cqxd3VwU.js";import"./index-BQIp7ISY.js";import"./firstNotUndefined-CLFzEa0p.js";import"./useFlexGapSupport-CPj-DJgt.js";const e=k({__name:"Pagination",setup(t){const o=t,n=R(),a=x(),z=C(()=>{const r={};return Object.keys(n).filter(s=>s.startsWith("on")).forEach(s=>{r[s]=n[s]}),r});return(r,s)=>(E(),_(S(M),q(o,O(z.value)),j({default:b(()=>[y(r.$slots,"default")]),_:2},[S(a).itemRender?{name:"itemRender",fn:b($=>[y(r.$slots,"itemRender",B(D($||{})))]),key:"0"}:void 0]),1040))}});e.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},slots:[{name:"itemRender",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Pagination/Pagination.vue"]};e.install=t=>{t.component("CgPagination",e)};const{fn:qn}=__STORYBOOK_MODULE_TEST__,On={title:"Components/Pagination",component:e,tags:["autodocs"],argTypes:{current:{control:"number"},defaultCurrent:{control:"number"},defaultPageSize:{control:"number"},disabled:{control:"boolean"},hideOnSinglePage:{control:"boolean"},pageSize:{control:"number"},pageSizeOptions:{control:"array"},responsive:{control:"boolean"},showLessItems:{control:"boolean"},showQuickJumper:{control:"boolean"},showSizeChanger:{control:"boolean"},showTitle:{control:"boolean"},simple:{control:"boolean"},size:{control:"select",options:["default","small"]},total:{control:"number"}},args:{defaultCurrent:1,defaultPageSize:10,total:50}},i={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="50" />
    `}),parameters:{docs:{description:{story:"基础分页。"}}}},p={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="500" />
    `}),parameters:{docs:{description:{story:"更多分页。"}}}},c={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="500" :show-size-changer="true" />
    `}),parameters:{docs:{description:{story:"可以切换每页显示条目数。"}}}},m={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="500" :show-quick-jumper="true" />
    `}),parameters:{docs:{description:{story:"快速跳转到某一页。"}}}},l={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="50" simple />
    `}),parameters:{docs:{description:{story:"简单的翻页。"}}}},d={render:()=>({components:{Pagination:e},setup(){const t=F(3);return{current:t,onChange:n=>{console.log("Page changed to:",n),t.value=n}}},template:`
      <Pagination :current="current" :total="500" @change="onChange" />
    `}),parameters:{docs:{description:{story:"受控的分页。"}}}},u={render:()=>({components:{Pagination:e},setup(){return{showTotal:n=>`共 ${n} 条`,showTotalRange:(n,a)=>`${a[0]}-${a[1]} 共 ${n} 条`}},template:`
      <div>
        <Pagination :total="85" :show-total="showTotal" />
        <br />
        <Pagination :total="85" :show-total="showTotalRange" />
      </div>
    `}),parameters:{docs:{description:{story:"显示总数和当前数据范围。"}}}},g={render:()=>({components:{Pagination:e},setup(){return{itemRender:(o,n,a)=>n==="prev"?f("a","上一页"):n==="next"?f("a","下一页"):a}},template:`
      <Pagination :total="500" :item-render="itemRender" />
    `}),parameters:{docs:{description:{story:"修改上一步和下一步为文字链接。"}}}},h={render:()=>({components:{Pagination:e,Space:T},template:`
      <Space direction="vertical">
        <Pagination size="small" :total="50" />
        <Pagination size="small" :total="50" show-size-changer show-quick-jumper />
        <Pagination size="small" :total="50" simple />
      </Space>
    `}),parameters:{docs:{description:{story:"迷你版本。"}}}},P={render:()=>({components:{Pagination:e},template:`
      <Pagination :total="50" disabled />
    `}),parameters:{docs:{description:{story:"禁用分页。"}}}},w={render:()=>({components:{Pagination:e},setup(){return{showTotal:(o,n)=>`${n[0]}-${n[1]} 共 ${o} 条`}},template:`
      <Pagination 
        :total="500" 
        :show-total="showTotal" 
        :show-size-changer="true" 
        :show-quick-jumper="true" 
      />
    `}),parameters:{docs:{description:{story:"全功能分页器。"}}}},v={render:()=>({components:{Pagination:e,Space:T},setup(){return{showTotal:(o,n)=>`${n[0]}-${n[1]} 共 ${o} 条`}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">分页组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础分页</h4>
            <Pagination :total="500" />
          </div>
          
          <div>
            <h4>带页码切换器和快速跳转</h4>
            <Pagination 
              :total="500" 
              :show-size-changer="true" 
              :show-quick-jumper="true" 
              :show-total="showTotal" 
            />
          </div>
          
          <div>
            <h4>迷你版本</h4>
            <Pagination size="small" :total="50" />
            <br />
            <Pagination size="small" :total="50" show-size-changer show-quick-jumper />
          </div>
          
          <div>
            <h4>简单模式</h4>
            <Pagination simple :total="50" />
          </div>
          
          <div>
            <h4>禁用状态</h4>
            <Pagination :total="50" disabled />
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的分页组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示分页组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="50" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '基础分页。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="500" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '更多分页。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="500" :show-size-changer="true" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以切换每页显示条目数。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="500" :show-quick-jumper="true" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '快速跳转到某一页。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="50" simple />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '简单的翻页。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(3);
      const onChange = (page: number) => {
        console.log('Page changed to:', page);
        current.value = page;
      };
      return {
        current,
        onChange
      };
    },
    template: \`
      <Pagination :current="current" :total="500" @change="onChange" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '受控的分页。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const showTotal = (total: number) => {
        return \`共 \${total} 条\`;
      };
      const showTotalRange = (total: number, range: [number, number]) => {
        return \`\${range[0]}-\${range[1]} 共 \${total} 条\`;
      };
      return {
        showTotal,
        showTotalRange
      };
    },
    template: \`
      <div>
        <Pagination :total="85" :show-total="showTotal" />
        <br />
        <Pagination :total="85" :show-total="showTotalRange" />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '显示总数和当前数据范围。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const itemRender = (page: number, type: string, originalElement: any) => {
        if (type === 'prev') {
          return h('a', '上一页');
        }
        if (type === 'next') {
          return h('a', '下一页');
        }
        return originalElement;
      };
      return {
        itemRender
      };
    },
    template: \`
      <Pagination :total="500" :item-render="itemRender" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '修改上一步和下一步为文字链接。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination,
      Space
    },
    template: \`
      <Space direction="vertical">
        <Pagination size="small" :total="50" />
        <Pagination size="small" :total="50" show-size-changer show-quick-jumper />
        <Pagination size="small" :total="50" simple />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '迷你版本。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <Pagination :total="50" disabled />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '禁用分页。'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const showTotal = (total: number, range: [number, number]) => {
        return \`\${range[0]}-\${range[1]} 共 \${total} 条\`;
      };
      return {
        showTotal
      };
    },
    template: \`
      <Pagination 
        :total="500" 
        :show-total="showTotal" 
        :show-size-changer="true" 
        :show-quick-jumper="true" 
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '全功能分页器。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination,
      Space
    },
    setup() {
      const showTotal = (total: number, range: [number, number]) => {
        return \`\${range[0]}-\${range[1]} 共 \${total} 条\`;
      };
      return {
        showTotal
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">分页组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <div>
            <h4>基础分页</h4>
            <Pagination :total="500" />
          </div>
          
          <div>
            <h4>带页码切换器和快速跳转</h4>
            <Pagination 
              :total="500" 
              :show-size-changer="true" 
              :show-quick-jumper="true" 
              :show-total="showTotal" 
            />
          </div>
          
          <div>
            <h4>迷你版本</h4>
            <Pagination size="small" :total="50" />
            <br />
            <Pagination size="small" :total="50" show-size-changer show-quick-jumper />
          </div>
          
          <div>
            <h4>简单模式</h4>
            <Pagination simple :total="50" />
          </div>
          
          <div>
            <h4>禁用状态</h4>
            <Pagination :total="50" disabled />
          </div>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的分页组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示分页组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const En=["Default","MorePages","SizeChanger","QuickJumper","Simple","Controlled","TotalText","PrevNextButtons","MiniSize","Disabled","FullFeatured","ThemeShowcase"];export{d as Controlled,i as Default,P as Disabled,w as FullFeatured,h as MiniSize,p as MorePages,g as PrevNextButtons,m as QuickJumper,l as Simple,c as SizeChanger,v as ThemeShowcase,u as TotalText,En as __namedExportsOrder,On as default};
