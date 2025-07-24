import{_ as t,ay as Y,b as k,d as $,r as W,a as q,e as b,ae as Z,af as ee,c as re,ag as ne,ah as oe,ai as M,v as R,aj as te,ak as ae,al as se,am as j,an as G,ao as J}from"./iframe-CiolPNwv.js";import{g as ie,c as K,d as me,r as ce,a as de}from"./index-BbVH5SgW.js";import{d as le}from"./devWarning-MTSIIkhh.js";import{u as L}from"./FormItemContext-BKi0klUv.js";import{o as Q}from"./omit-BBXwSgK8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWv55aqM.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./raf-Deuc0E8-.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./initDefaultProps-CZpOG6Cc.js";import"./index-539zgj0H.js";import"./colors-C8AO4Xlz.js";import"./ClockCircleOutlined-D5OxAzgY.js";import"./KeyCode-D63Tfrq7.js";import"./vnode-B4SLhmi3.js";import"./useMergedState-8OkYKI-g.js";import"./Trigger-D0k0f5w4.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./PortalWrapper-ig5OaliN.js";import"./useMemo-BmGKJ0MZ.js";import"./shallowequal-M8HXjn8A.js";import"./statusUtils-QYI0Q3t5.js";import"./index-BQIp7ISY.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./roundedArrow-EYTrNAJt.js";const z=()=>({format:String,showNow:k(),showHour:k(),showMinute:k(),showSecond:k(),use12Hours:k(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:k(),popupClassName:String,status:Y()});function ue(o){const p=ie(o,t(t({},z()),{order:{type:Boolean,default:!0}})),{TimePicker:g,RangePicker:s}=p,C=$({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},K()),me()),z()),{addon:{type:Function}}),slots:Object,setup(m,d){let{slots:f,expose:w,emit:n,attrs:O}=d;const i=m,l=L();le(!(f.addon||i.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const u=W();w({focus:()=>{var r;(r=u.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=u.value)===null||r===void 0||r.blur()}});const _=(r,A)=>{n("update:value",r),n("change",r,A),l.onFieldChange()},N=r=>{n("update:open",r),n("openChange",r)},I=r=>{n("focus",r)},B=r=>{n("blur",r),l.onFieldBlur()},D=r=>{n("ok",r)};return()=>{const{id:r=l.id.value}=i;return q(g,b(b(b({},O),Q(i,["onUpdate:value","onUpdate:open"])),{},{id:r,dropdownClassName:i.popupClassName,mode:void 0,ref:u,renderExtraFooter:i.addon||f.addon||i.renderExtraFooter||f.renderExtraFooter,onChange:_,onOpenChange:N,onFocus:I,onBlur:B,onOk:D}),f)}}}),c=$({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},K()),ce()),z()),{order:{type:Boolean,default:!0}}),slots:Object,setup(m,d){let{slots:f,expose:w,emit:n,attrs:O}=d;const i=m,l=W(),u=L();w({focus:()=>{var e;(e=l.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=l.value)===null||e===void 0||e.blur()}});const _=(e,P)=>{n("update:value",e),n("change",e,P),u.onFieldChange()},N=e=>{n("update:open",e),n("openChange",e)},I=e=>{n("focus",e)},B=e=>{n("blur",e),u.onFieldBlur()},D=(e,P)=>{n("panelChange",e,P)},r=e=>{n("ok",e)},A=(e,P,X)=>{n("calendarChange",e,P,X)};return()=>{const{id:e=u.id.value}=i;return q(s,b(b(b({},O),Q(i,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:i.popupClassName,picker:"time",mode:void 0,ref:l,onChange:_,onOpenChange:N,onFocus:I,onBlur:B,onPanelChange:D,onOk:r,onCalendarChange:A}),f)}}});return{TimePicker:C,TimeRangePicker:c}}const{TimePicker:T,TimeRangePicker:U}=ue(de),pe=t(T,{TimePicker:T,TimeRangePicker:U,install:o=>(o.component(T.name,T),o.component(U.name,U),o)}),a=$({__name:"TimePicker",setup(o){const p=o,g=Z(),s=ee(),C=re(()=>{const c={};return Object.keys(g).filter(m=>m.startsWith("on")).forEach(m=>{c[m]=g[m]}),c});return(c,m)=>(se(),ne(R(pe),te(p,ae(C.value)),oe({default:M(()=>[j(c.$slots,"default")]),_:2},[R(s).suffixIcon?{name:"suffixIcon",fn:M(d=>[j(c.$slots,"suffixIcon",G(J(d||{})))]),key:"0"}:void 0,R(s).renderExtraFooter?{name:"renderExtraFooter",fn:M(d=>[j(c.$slots,"renderExtraFooter",G(J(d||{})))]),key:"1"}:void 0]),1040))}});a.__docgenInfo={exportName:"default",displayName:"TimePicker",description:"",tags:{},slots:[{name:"suffixIcon",scoped:!0,bindings:[]},{name:"renderExtraFooter",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/TimePicker/TimePicker.vue"]};const Xe={title:"Components/TimePicker",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{allowClear:{control:"boolean",description:"是否显示清除按钮",defaultValue:!0},autoFocus:{control:"boolean",description:"自动获取焦点",defaultValue:!1},bordered:{control:"boolean",description:"是否有边框",defaultValue:!0},clearText:{control:"text",description:"清除按钮的提示文案"},disabled:{control:"boolean",description:"禁用全部操作",defaultValue:!1},format:{control:"text",description:"展示的时间格式",defaultValue:"HH:mm:ss"},hideDisabledOptions:{control:"boolean",description:"隐藏禁止选择的选项",defaultValue:!1},hourStep:{control:{type:"number",min:1},description:"小时选项间隔",defaultValue:1},inputReadOnly:{control:"boolean",description:"设置输入框为只读",defaultValue:!1},minuteStep:{control:{type:"number",min:1},description:"分钟选项间隔",defaultValue:1},open:{control:"boolean",description:"面板是否打开"},placeholder:{control:"text",description:"没有值的时候显示的内容"},popupClassName:{control:"text",description:"弹出层类名"},secondStep:{control:{type:"number",min:1},description:"秒选项间隔",defaultValue:1},showNow:{control:"boolean",description:'面板是否显示"此刻"按钮',defaultValue:!0},use12Hours:{control:"boolean",description:"使用12小时制",defaultValue:!1},valueFormat:{control:"text",description:"可选，绑定值的格式，对 value、defaultValue 起作用"},size:{control:{type:"select",options:["large","default","small"]},description:"输入框大小",defaultValue:"default"}}},h={render:o=>({components:{CgTimePicker:a},setup(){const p=W();return{args:o,value:p,onChange:s=>{console.log("Selected Time: ",s)}}},template:`
      <CgTimePicker
        v-model:value="value"
        @change="onChange"
        v-bind="args"
      />
    `}),args:{allowClear:!0,placeholder:"请选择时间"}},x={render:()=>({components:{CgTimePicker:a},setup(){return{}},template:`
      <div>
        <CgTimePicker size="large" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker size="small" />
      </div>
    `})},v={render:()=>({components:{CgTimePicker:a},setup(){return{}},template:`
      <div>
        <CgTimePicker format="HH:mm" placeholder="选择时间 (小时:分钟)" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker format="HH:mm:ss" placeholder="选择时间 (小时:分钟:秒)" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm:ss A" placeholder="选择时间 (12小时制)" />
      </div>
    `})},H={render:()=>({components:{CgTimePicker:a},setup(){return{}},template:`
      <CgTimePicker
        :hour-step="2"
        :minute-step="15"
        :second-step="10"
      />
    `})},S={render:()=>({components:{CgTimePicker:a},setup(){return{disabledHours:()=>[0,1,2,3,4,5,6,20,21,22,23],disabledMinutes:s=>s===9?[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]:[],disabledSeconds:(s,C)=>s===9&&C===30?[55,56,57,58,59]:[]}},template:`
      <CgTimePicker
        format="HH:mm:ss"
        :disabledHours="disabledHours"
        :disabledMinutes="disabledMinutes"
        :disabledSeconds="disabledSeconds"
        hide-disabled-options
      />
    `})},F={render:()=>({components:{CgTimePicker:a},setup(){return{}},template:`
      <div>
        <CgTimePicker use12Hours style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm:ss A" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm a" />
      </div>
    `})},y={render:()=>({components:{CgTimePicker:a},setup(){return{renderExtraFooter:()=>"额外的页脚"}},template:`
      <CgTimePicker :render-extra-footer="renderExtraFooter" />
    `})},V={render:()=>({components:{CgTimePicker:a},setup(){return{defaultValue:new Date("2023-01-01 12:34:56")}},template:`
      <CgTimePicker :default-value="defaultValue" />
    `})},E={render:()=>({components:{CgTimePicker:a},setup(){return{}},template:`
      <CgTimePicker disabled />
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      const value = ref();
      const onChange = (time: any) => {
        console.log('Selected Time: ', time);
      };
      return {
        args,
        value,
        onChange
      };
    },
    template: \`
      <CgTimePicker
        v-model:value="value"
        @change="onChange"
        v-bind="args"
      />
    \`
  }),
  args: {
    allowClear: true,
    placeholder: '请选择时间'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      return {};
    },
    template: \`
      <div>
        <CgTimePicker size="large" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker size="small" />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      return {};
    },
    template: \`
      <div>
        <CgTimePicker format="HH:mm" placeholder="选择时间 (小时:分钟)" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker format="HH:mm:ss" placeholder="选择时间 (小时:分钟:秒)" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm:ss A" placeholder="选择时间 (12小时制)" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      return {};
    },
    template: \`
      <CgTimePicker
        :hour-step="2"
        :minute-step="15"
        :second-step="10"
      />
    \`
  })
}`,...H.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      const disabledHours = () => {
        return [0, 1, 2, 3, 4, 5, 6, 20, 21, 22, 23];
      };
      const disabledMinutes = (hour: number) => {
        if (hour === 9) {
          return [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        }
        return [];
      };
      const disabledSeconds = (hour: number, minute: number) => {
        if (hour === 9 && minute === 30) {
          return [55, 56, 57, 58, 59];
        }
        return [];
      };
      return {
        disabledHours,
        disabledMinutes,
        disabledSeconds
      };
    },
    template: \`
      <CgTimePicker
        format="HH:mm:ss"
        :disabledHours="disabledHours"
        :disabledMinutes="disabledMinutes"
        :disabledSeconds="disabledSeconds"
        hide-disabled-options
      />
    \`
  })
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      return {};
    },
    template: \`
      <div>
        <CgTimePicker use12Hours style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm:ss A" style="margin-right: 10px; margin-bottom: 10px;" />
        <br />
        <CgTimePicker use12Hours format="h:mm a" />
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      const renderExtraFooter = () => {
        return '额外的页脚';
      };
      return {
        renderExtraFooter
      };
    },
    template: \`
      <CgTimePicker :render-extra-footer="renderExtraFooter" />
    \`
  })
}`,...y.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      // 使用dayjs创建一个时间对象
      const defaultValue = new Date('2023-01-01 12:34:56');
      return {
        defaultValue
      };
    },
    template: \`
      <CgTimePicker :default-value="defaultValue" />
    \`
  })
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTimePicker: TimePicker
    },
    setup() {
      return {};
    },
    template: \`
      <CgTimePicker disabled />
    \`
  })
}`,...E.parameters?.docs?.source}}};const Ye=["Basic","Size","Format","Interval","DisabledOptions","TwelveHours","ExtraFooter","DefaultValue","Disabled"];export{h as Basic,V as DefaultValue,E as Disabled,S as DisabledOptions,y as ExtraFooter,v as Format,H as Interval,x as Size,F as TwelveHours,Ye as __namedExportsOrder,Xe as default};
