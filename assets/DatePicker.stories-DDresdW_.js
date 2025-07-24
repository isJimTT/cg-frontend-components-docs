import{C as Y,b as l}from"./index-BbVH5SgW.js";import{d as T,ae as j,af as _,c as $,ag as E,ah as M,ai as n,v as e,aj as F,ak as N,al as W,am as s,an as i,ao as p}from"./iframe-CiolPNwv.js";import{D as H}from"./dayjs-teuxD9ct.js";import{S as d}from"./index-C9_4AhMb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./devWarning-MTSIIkhh.js";import"./index-DWv55aqM.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./initDefaultProps-CZpOG6Cc.js";import"./index-539zgj0H.js";import"./colors-C8AO4Xlz.js";import"./ClockCircleOutlined-D5OxAzgY.js";import"./KeyCode-D63Tfrq7.js";import"./vnode-B4SLhmi3.js";import"./useMergedState-8OkYKI-g.js";import"./Trigger-D0k0f5w4.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./PortalWrapper-ig5OaliN.js";import"./useMemo-BmGKJ0MZ.js";import"./shallowequal-M8HXjn8A.js";import"./FormItemContext-BKi0klUv.js";import"./omit-BBXwSgK8.js";import"./statusUtils-QYI0Q3t5.js";import"./index-BQIp7ISY.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./roundedArrow-EYTrNAJt.js";import"./useFlexGapSupport-CPj-DJgt.js";const c=T({__name:"DatePicker",setup(o){const m=o,g=j(),h=_(),r=$(()=>{const k={};return Object.keys(g).filter(a=>a.startsWith("on")).forEach(a=>{k[a]=g[a]}),k});return(k,a)=>(W(),E(e(H),F(m,N(r.value)),M({default:n(()=>[s(k.$slots,"default")]),_:2},[e(h).suffixIcon?{name:"suffixIcon",fn:n(P=>[s(k.$slots,"suffixIcon",i(p(P||{})))]),key:"0"}:void 0]),1040))}});c.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},slots:[{name:"suffixIcon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/DatePicker/DatePicker.vue"]};const u=T({__name:"RangePicker",setup(o){const m=H.RangePicker,g=o,h=j(),r=_(),k=$(()=>{const a={};return Object.keys(h).filter(P=>P.startsWith("on")).forEach(P=>{a[P]=h[P]}),a});return(a,P)=>(W(),E(e(m),F(g,N(k.value)),M({default:n(()=>[s(a.$slots,"default")]),_:2},[e(r)&&e(r).suffixIcon?{name:"suffixIcon",fn:n(t=>[s(a.$slots,"suffixIcon",i(p(t||{})))]),key:"0"}:void 0,e(r)&&e(r).separator?{name:"separator",fn:n(t=>[s(a.$slots,"separator",i(p(t||{})))]),key:"1"}:void 0,e(r)&&e(r).clearIcon?{name:"clearIcon",fn:n(t=>[s(a.$slots,"clearIcon",i(p(t||{})))]),key:"2"}:void 0,e(r)&&e(r).prevIcon?{name:"prevIcon",fn:n(t=>[s(a.$slots,"prevIcon",i(p(t||{})))]),key:"3"}:void 0,e(r)&&e(r).nextIcon?{name:"nextIcon",fn:n(t=>[s(a.$slots,"nextIcon",i(p(t||{})))]),key:"4"}:void 0,e(r)&&e(r).superPrevIcon?{name:"superPrevIcon",fn:n(t=>[s(a.$slots,"superPrevIcon",i(p(t||{})))]),key:"5"}:void 0,e(r)&&e(r).superNextIcon?{name:"superNextIcon",fn:n(t=>[s(a.$slots,"superNextIcon",i(p(t||{})))]),key:"6"}:void 0,e(r)&&e(r).dateRender?{name:"dateRender",fn:n(t=>[s(a.$slots,"dateRender",i(p(t||{})))]),key:"7"}:void 0,e(r)&&e(r).renderExtraFooter?{name:"renderExtraFooter",fn:n(t=>[s(a.$slots,"renderExtraFooter",i(p(t||{})))]),key:"8"}:void 0]),1040))}});u.__docgenInfo={exportName:"default",displayName:"RangePicker",description:"",tags:{},slots:[{name:"suffixIcon",scoped:!0,bindings:[]},{name:"separator",scoped:!0,bindings:[]},{name:"clearIcon",scoped:!0,bindings:[]},{name:"prevIcon",scoped:!0,bindings:[]},{name:"nextIcon",scoped:!0,bindings:[]},{name:"superPrevIcon",scoped:!0,bindings:[]},{name:"superNextIcon",scoped:!0,bindings:[]},{name:"dateRender",scoped:!0,bindings:[]},{name:"renderExtraFooter",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/DatePicker/RangePicker.vue"]};c.install=o=>{o.component("CgDatePicker",c)};u.install=o=>{o.component("CgRangePicker",u)};const{fn:xe}=__STORYBOOK_MODULE_TEST__,we={title:"Components/DatePicker",component:c,tags:["autodocs"],argTypes:{allowClear:{control:"boolean"},autofocus:{control:"boolean"},bordered:{control:"boolean"},disabled:{control:"boolean"},inputReadOnly:{control:"boolean"},open:{control:"boolean"},size:{control:"select",options:["large","middle","small"]},picker:{control:"select",options:["date","week","month","quarter","year"]},mode:{control:"select",options:["time","date","month","year","decade"]},format:{control:"text"},placeholder:{control:"text"},onChange:{action:"changed"}},args:{allowClear:!0,bordered:!0}},D={args:{},render:o=>({components:{DatePicker:c},setup(){return{args:o}},template:'<DatePicker v-bind="args" />'})},f={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <Space>
          <DatePicker placeholder="选择日期" />
          <DatePicker picker="week" placeholder="选择周" />
          <DatePicker picker="month" placeholder="选择月" />
        </Space>
        <Space>
          <DatePicker picker="quarter" placeholder="选择季度" />
          <DatePicker picker="year" placeholder="选择年" />
        </Space>
      </Space>
    `}),parameters:{docs:{description:{story:"不同类型的日期选择器：日期、周、月、季度、年。"}}}},S={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <DatePicker size="large" placeholder="大尺寸" />
        <DatePicker size="middle" placeholder="默认尺寸" />
        <DatePicker size="small" placeholder="小尺寸" />
      </Space>
    `}),parameters:{docs:{description:{story:"三种尺寸的日期选择器：大、默认、小。"}}}},y={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <DatePicker disabled placeholder="禁用状态" />
        <DatePicker.RangePicker disabled placeholder="禁用状态" />
      </Space>
    `}),parameters:{docs:{description:{story:"禁用状态的日期选择器。"}}}},b={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <DatePicker.RangePicker />
        <DatePicker.RangePicker picker="week" />
        <DatePicker.RangePicker picker="month" />
        <DatePicker.RangePicker picker="year" />
      </Space>
    `}),parameters:{docs:{description:{story:"范围日期选择器，可以选择日期范围。"}}}},R={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <DatePicker format="YYYY/MM/DD" placeholder="自定义格式" />
        <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime placeholder="日期时间" />
      </Space>
    `}),parameters:{docs:{description:{story:"使用 format 指定日期格式。"}}}},v={render:()=>({components:{DatePicker:c,Space:d},template:`
      <Space direction="vertical" size="large">
        <DatePicker showTime placeholder="选择日期时间" />
        <DatePicker.RangePicker showTime placeholder="选择日期时间范围" />
      </Space>
    `}),parameters:{docs:{description:{story:"增加时间选择功能。"}}}},C={render:()=>({components:{DatePicker:c},setup(){return{disabledDate:m=>m&&m<l().startOf("day")}},template:`
      <DatePicker :disabledDate="disabledDate" placeholder="不能选择今天之前的日期" />
    `}),parameters:{docs:{description:{story:"可以通过 disabledDate 禁用指定日期。"}}}},I={render:()=>({components:{DatePicker:c,CalendarOutlined:Y},template:`
      <DatePicker>
        <template #suffixIcon>
          <CalendarOutlined style="color: #1890ff" />
        </template>
      </DatePicker>
    `}),parameters:{docs:{description:{story:"自定义后缀图标。"}}}},z={render:()=>({components:{DatePicker:c,Space:d},template:`
      <div>
        <h3 style="margin-bottom: 16px;">日期选择器组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <DatePicker placeholder="选择日期" />
            <DatePicker picker="month" placeholder="选择月份" />
            <DatePicker picker="year" placeholder="选择年份" />
          </Space>
          
          <Space>
            <DatePicker size="large" placeholder="大尺寸" />
            <DatePicker size="middle" placeholder="默认尺寸" />
            <DatePicker size="small" placeholder="小尺寸" />
          </Space>
          
          <Space>
            <DatePicker.RangePicker />
            <DatePicker disabled placeholder="禁用状态" />
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的日期选择器组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示日期选择器组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}},x={render:()=>({components:{CgRangePicker:u,Space:d},setup(){return{datePlaceholder:["开始日期","结束日期"],timePlaceholder:["开始时间","结束时间"],monthPlaceholder:["开始月份","结束月份"],yearPlaceholder:["开始年份","结束年份"]}},template:`
      <Space direction="vertical" size="large">
        <CgRangePicker :placeholder="datePlaceholder" />
        <CgRangePicker showTime :placeholder="timePlaceholder" />
        <CgRangePicker picker="month" :placeholder="monthPlaceholder" />
        <CgRangePicker picker="year" :placeholder="yearPlaceholder" />
      </Space>
    `}),parameters:{docs:{description:{story:"使用自定义封装的RangePicker组件，支持各种类型的范围选择。"}}}},w={render:()=>({components:{CgRangePicker:u},setup(){return{presets:[{label:"最近7天",value:[l().subtract(7,"day"),l()]},{label:"最近14天",value:[l().subtract(14,"day"),l()]},{label:"最近30天",value:[l().subtract(30,"day"),l()]},{label:"最近90天",value:[l().subtract(90,"day"),l()]}],placeholder:["开始日期","结束日期"]}},template:`
      <CgRangePicker :presets="presets" :placeholder="placeholder" />
    `}),parameters:{docs:{description:{story:"带有预设选项的自定义RangePicker组件。"}}}},O={render:()=>({components:{CgRangePicker:u,CalendarOutlined:Y,Space:d},setup(){return{placeholder:["开始日期","结束日期"]}},template:`
      <Space direction="vertical" size="large">
        <CgRangePicker :placeholder="placeholder">
          <template #suffixIcon>
            <CalendarOutlined style="color: #1890ff;" />
          </template>
        </CgRangePicker>
        
        <CgRangePicker :placeholder="placeholder">
          <template #separator>
            <span style="color: #1890ff; font-weight: bold;">至</span>
          </template>
        </CgRangePicker>
      </Space>
    `}),parameters:{docs:{description:{story:"使用插槽自定义RangePicker的图标和分隔符。"}}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DatePicker
    },
    setup() {
      return {
        args
      };
    },
    template: '<DatePicker v-bind="args" />'
  })
}`,...D.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <Space>
          <DatePicker placeholder="选择日期" />
          <DatePicker picker="week" placeholder="选择周" />
          <DatePicker picker="month" placeholder="选择月" />
        </Space>
        <Space>
          <DatePicker picker="quarter" placeholder="选择季度" />
          <DatePicker picker="year" placeholder="选择年" />
        </Space>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '不同类型的日期选择器：日期、周、月、季度、年。'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <DatePicker size="large" placeholder="大尺寸" />
        <DatePicker size="middle" placeholder="默认尺寸" />
        <DatePicker size="small" placeholder="小尺寸" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '三种尺寸的日期选择器：大、默认、小。'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <DatePicker disabled placeholder="禁用状态" />
        <DatePicker.RangePicker disabled placeholder="禁用状态" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '禁用状态的日期选择器。'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <DatePicker.RangePicker />
        <DatePicker.RangePicker picker="week" />
        <DatePicker.RangePicker picker="month" />
        <DatePicker.RangePicker picker="year" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '范围日期选择器，可以选择日期范围。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <DatePicker format="YYYY/MM/DD" placeholder="自定义格式" />
        <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime placeholder="日期时间" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 format 指定日期格式。'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <Space direction="vertical" size="large">
        <DatePicker showTime placeholder="选择日期时间" />
        <DatePicker.RangePicker showTime placeholder="选择日期时间范围" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '增加时间选择功能。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker
    },
    setup() {
      const disabledDate = (current: any) => {
        // 不能选择今天之前的日期
        return current && current < dayjs().startOf('day');
      };
      return {
        disabledDate
      };
    },
    template: \`
      <DatePicker :disabledDate="disabledDate" placeholder="不能选择今天之前的日期" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以通过 disabledDate 禁用指定日期。'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      CalendarOutlined
    },
    template: \`
      <DatePicker>
        <template #suffixIcon>
          <CalendarOutlined style="color: #1890ff" />
        </template>
      </DatePicker>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '自定义后缀图标。'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">日期选择器组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space>
            <DatePicker placeholder="选择日期" />
            <DatePicker picker="month" placeholder="选择月份" />
            <DatePicker picker="year" placeholder="选择年份" />
          </Space>
          
          <Space>
            <DatePicker size="large" placeholder="大尺寸" />
            <DatePicker size="middle" placeholder="默认尺寸" />
            <DatePicker size="small" placeholder="小尺寸" />
          </Space>
          
          <Space>
            <DatePicker.RangePicker />
            <DatePicker disabled placeholder="禁用状态" />
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的日期选择器组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示日期选择器组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRangePicker,
      Space
    },
    setup() {
      return {
        datePlaceholder: ['开始日期', '结束日期'],
        timePlaceholder: ['开始时间', '结束时间'],
        monthPlaceholder: ['开始月份', '结束月份'],
        yearPlaceholder: ['开始年份', '结束年份']
      };
    },
    template: \`
      <Space direction="vertical" size="large">
        <CgRangePicker :placeholder="datePlaceholder" />
        <CgRangePicker showTime :placeholder="timePlaceholder" />
        <CgRangePicker picker="month" :placeholder="monthPlaceholder" />
        <CgRangePicker picker="year" :placeholder="yearPlaceholder" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用自定义封装的RangePicker组件，支持各种类型的范围选择。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRangePicker
    },
    setup() {
      const presets = [{
        label: '最近7天',
        value: [dayjs().subtract(7, 'day'), dayjs()]
      }, {
        label: '最近14天',
        value: [dayjs().subtract(14, 'day'), dayjs()]
      }, {
        label: '最近30天',
        value: [dayjs().subtract(30, 'day'), dayjs()]
      }, {
        label: '最近90天',
        value: [dayjs().subtract(90, 'day'), dayjs()]
      }];
      const placeholder = ['开始日期', '结束日期'];
      return {
        presets,
        placeholder
      };
    },
    template: \`
      <CgRangePicker :presets="presets" :placeholder="placeholder" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '带有预设选项的自定义RangePicker组件。'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgRangePicker,
      CalendarOutlined,
      Space
    },
    setup() {
      const placeholder = ['开始日期', '结束日期'];
      return {
        placeholder
      };
    },
    template: \`
      <Space direction="vertical" size="large">
        <CgRangePicker :placeholder="placeholder">
          <template #suffixIcon>
            <CalendarOutlined style="color: #1890ff;" />
          </template>
        </CgRangePicker>
        
        <CgRangePicker :placeholder="placeholder">
          <template #separator>
            <span style="color: #1890ff; font-weight: bold;">至</span>
          </template>
        </CgRangePicker>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '使用插槽自定义RangePicker的图标和分隔符。'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};const Oe=["Default","Pickers","Sizes","Disabled","RangePicker","Format","ShowTime","DisabledDate","CustomSuffixIcon","ThemeShowcase","CustomRangePicker","CustomRangePickerWithPresets","CustomRangePickerWithSlots"];export{x as CustomRangePicker,w as CustomRangePickerWithPresets,O as CustomRangePickerWithSlots,I as CustomSuffixIcon,D as Default,y as Disabled,C as DisabledDate,R as Format,f as Pickers,b as RangePicker,v as ShowTime,S as Sizes,z as ThemeShowcase,Oe as __namedExportsOrder,we as default};
