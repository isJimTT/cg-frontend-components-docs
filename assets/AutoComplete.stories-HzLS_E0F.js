import{_ as m,d as j,i as D,r as s,u as G,$ as H,a as N,e as W,a6 as q,ae as z,af as V,c as U,ag as X,ah as J,ai as v,v as f,aj as K,ak as Q,al as Y,am as h,an as Z,ao as ee}from"./iframe-CiolPNwv.js";import{S as E,s as te}from"./index-DIa8XZVm.js";import{o as M}from"./omit-BBXwSgK8.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./KeyCode-D63Tfrq7.js";import"./BaseInput-D2epJhM9.js";import"./css-DDkvXkMO.js";import"./pickAttrs-8uwpYw_5.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./List-CLOwepni.js";import"./isMobile-x7Gj6jC1.js";import"./initDefaultProps-CZpOG6Cc.js";import"./useMemo-BmGKJ0MZ.js";import"./useMergedState-8OkYKI-g.js";import"./useState-Ds4oJkA7.js";import"./DownOutlined-DeIOKUSk.js";import"./CheckOutlined-CIIIVjBf.js";import"./SearchOutlined-UrLs3OCM.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./statusUtils-QYI0Q3t5.js";import"./Compact-DDa3__kb.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./compact-item-X_Nkrb5h.js";const i=()=>null;i.isSelectOption=!0;i.displayName="AAutoCompleteOption";const C=()=>null;C.isSelectOptGroup=!0;C.displayName="AAutoCompleteOptGroup";function oe(e){var n,t;return((n=e?.type)===null||n===void 0?void 0:n.isSelectOption)||((t=e?.type)===null||t===void 0?void 0:t.isSelectOptGroup)}const ae=()=>m(m({},M(te(),["loading","mode","optionLabelProp","labelInValue"])),{dataSource:Array,dropdownMenuStyle:{type:Object,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},prefixCls:String,showSearch:{type:Boolean,default:void 0},transitionName:String,choiceTransitionName:{type:String,default:"zoom"},autofocus:{type:Boolean,default:void 0},backfill:{type:Boolean,default:void 0},filterOption:{type:[Boolean,Function],default:!1},defaultActiveFirstOption:{type:Boolean,default:!0},status:String}),F=j({compatConfig:{MODE:3},name:"AAutoComplete",inheritAttrs:!1,props:ae(),slots:Object,setup(e,n){let{slots:t,attrs:r,expose:u}=n;D(!e.dropdownClassName);const o=s(),a=()=>{var l;const d=q((l=t.default)===null||l===void 0?void 0:l.call(t));return d.length?d[0]:void 0};u({focus:()=>{var l;(l=o.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=o.value)===null||l===void 0||l.blur()}});const{prefixCls:S}=G("select",e);return()=>{var l,d,b;const{size:T,dataSource:k,notFoundContent:R=(l=t.notFoundContent)===null||l===void 0?void 0:l.call(t)}=e;let $;const{class:B}=r,L={[B]:!!B,[`${S.value}-lg`]:T==="large",[`${S.value}-sm`]:T==="small",[`${S.value}-show-search`]:!0,[`${S.value}-auto-complete`]:!0};if(e.options===void 0){const I=((d=t.dataSource)===null||d===void 0?void 0:d.call(t))||((b=t.options)===null||b===void 0?void 0:b.call(t))||[];I.length&&oe(I[0])?$=I:$=k?k.map(p=>{if(H(p))return p;switch(typeof p){case"string":return N(i,{key:p,value:p},{default:()=>[p]});case"object":return N(i,{key:p.value,value:p.value},{default:()=>[p.text]});default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[]}const P=M(m(m(m({},e),r),{mode:E.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:a,notFoundContent:R,class:L,popupClassName:e.popupClassName||e.dropdownClassName,ref:o}),["dataSource","loading"]);return N(E,P,W({default:()=>[$]},M(t,["default","dataSource","options"])))}}}),ne=m(F,{Option:i,OptGroup:C,install(e){return e.component(F.name,F),e.component(i.displayName,i),e.component(C.displayName,C),e}}),c=j({__name:"AutoComplete",setup(e){const n=e,t=z(),r=V(),u=U(()=>{const o={};return Object.keys(t).filter(a=>a.startsWith("on")).forEach(a=>{o[a]=t[a]}),o});return(o,a)=>(Y(),X(f(ne),K(n,Q(u.value)),J({default:v(()=>[h(o.$slots,"default")]),_:2},[f(r).option?{name:"option",fn:v(g=>[h(o.$slots,"option",Z(ee(g||{})))]),key:"0"}:void 0,f(r).notFoundContent?{name:"notFoundContent",fn:v(()=>[h(o.$slots,"notFoundContent")]),key:"1"}:void 0,f(r).clearIcon?{name:"clearIcon",fn:v(()=>[h(o.$slots,"clearIcon")]),key:"2"}:void 0,f(r).suffixIcon?{name:"suffixIcon",fn:v(()=>[h(o.$slots,"suffixIcon")]),key:"3"}:void 0]),1040))}});c.__docgenInfo={exportName:"default",displayName:"AutoComplete",description:"",tags:{},slots:[{name:"option",scoped:!0,bindings:[]},{name:"notFoundContent"},{name:"clearIcon"},{name:"suffixIcon"},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/AutoComplete/AutoComplete.vue"]};const He={title:"Components/AutoComplete",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{allowClear:{control:"boolean",description:"是否支持清除"},autoFocus:{control:"boolean",description:"自动获取焦点"},backfill:{control:"boolean",description:"使用键盘选择选项的时候把选中项回填到输入框中"},defaultActiveFirstOption:{control:"boolean",description:"是否默认高亮第一个选项"},defaultOpen:{control:"boolean",description:"是否默认展开下拉菜单"},disabled:{control:"boolean",description:"是否禁用"},dropdownClassName:{control:"text",description:"下拉菜单的 className 属性"},dropdownMatchSelectWidth:{control:"boolean",description:"下拉菜单和选择器同宽"},filterOption:{control:"boolean",description:"是否根据输入项进行筛选"},open:{control:"boolean",description:"是否展开下拉菜单"},placeholder:{control:"text",description:"输入框提示"},notFoundContent:{control:"text",description:"当下拉列表为空时显示的内容"}}},y={render:e=>({components:{CgAutoComplete:c},setup(){const n=s(""),t=s([{value:"北京"},{value:"上海"},{value:"广州"},{value:"深圳"},{value:"杭州"},{value:"南京"},{value:"成都"},{value:"重庆"}]);return{args:e,value:n,options:t,onSearch:a=>{t.value=a?[{value:a},{value:a+a},{value:a+a+a}]:[]},onSelect:a=>{console.log("onSelect",a)},onChange:a=>{console.log("onChange",a)}}},template:`
      <CgAutoComplete
        v-model:value="value"
        :options="options"
        style="width: 200px"
        placeholder="输入城市名"
        @search="onSearch"
        @select="onSelect"
        @change="onChange"
        v-bind="args"
      />
    `}),args:{allowClear:!0,defaultActiveFirstOption:!0}},A={render:()=>({components:{CgAutoComplete:c},setup(){const e=s(""),n=s([{value:"北京",label:"北京市"},{value:"上海",label:"上海市"},{value:"广州",label:"广州市"},{value:"深圳",label:"深圳市"},{value:"杭州",label:"杭州市"},{value:"南京",label:"南京市"},{value:"成都",label:"成都市"},{value:"重庆",label:"重庆市"}]),t=s([]);return{value:e,filteredOptions:t,onSearch:u=>{t.value=n.value.filter(o=>o.value.includes(u)).map(o=>({value:o.value,label:o.label}))}}},template:`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 300px"
        placeholder="输入城市名"
        @search="onSearch"
        allow-clear
      >
        <template #option="{ value, label }">
          <div style="display: flex; justify-content: space-between">
            <span>{{ value }}</span>
            <span style="color: #999">{{ label }}</span>
          </div>
        </template>
      </CgAutoComplete>
    `})},x={render:()=>({components:{CgAutoComplete:c},setup(){const e=s(""),n=s([{value:"Burns Bay Road"},{value:"Downing Street"},{value:"Wall Street"}]),t=s([]);return{value:e,filteredOptions:t,onSearch:u=>{t.value=u?n.value.filter(o=>o.value.toLowerCase().indexOf(u.toLowerCase())!==-1):[]}}},template:`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 200px"
        placeholder="输入地址"
        @search="onSearch"
        allow-clear
      />
    `})},O={render:()=>({components:{CgAutoComplete:c},setup(){const e=s(""),n=s([{value:"北京"},{value:"上海"},{value:"广州"},{value:"深圳"}]),t=s([]);return{value:e,filteredOptions:t,onSearch:u=>{t.value=u?n.value.filter(o=>o.value.includes(u)):[]}}},template:`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 200px"
        @search="onSearch"
      >
        <template #default>
          <input
            style="width: 200px; border: 1px solid #d9d9d9; padding: 4px 11px; border-radius: 4px;"
            placeholder="自定义输入框"
            :value="value"
            @input="(e) => { value = (e.target as HTMLInputElement).value; onSearch((e.target as HTMLInputElement).value); }"
          />
        </template>
      </CgAutoComplete>
    `})},w={render:()=>({components:{CgAutoComplete:c},setup(){const e=s(""),n=(o,a=0)=>Math.floor(Math.random()*(o-a+1))+a,t=o=>new Array(n(5)).fill(null).map((a,g)=>{const _=`${o}${g}`;return{value:_,label:`Found ${o} on ${_}`,results:n(200,100)}}),r=s([]);return{value:e,options:r,onSearch:o=>{r.value=o?t(o):[]}}},template:`
      <CgAutoComplete
        v-model:value="value"
        :options="options"
        style="width: 300px"
        placeholder="输入搜索词"
        @search="onSearch"
        allow-clear
      >
        <template #option="{ value, label, results }">
          <div style="display: flex; justify-content: space-between">
            <span>
              Found {{ value.replace(/d+$/, '') }} on
              <a
                :href="'https://s.taobao.com/search?q=' + value.replace(/d+$/, '')"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ value }}
              </a>
            </span>
            <span>{{ results || Math.floor(Math.random() * 101) + 100 }} results</span>
          </div>
        </template>
      </CgAutoComplete>
    `})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgAutoComplete: AutoComplete
    },
    setup() {
      const value = ref('');
      const options = ref([{
        value: '北京'
      }, {
        value: '上海'
      }, {
        value: '广州'
      }, {
        value: '深圳'
      }, {
        value: '杭州'
      }, {
        value: '南京'
      }, {
        value: '成都'
      }, {
        value: '重庆'
      }]);
      const onSearch = (searchText: string) => {
        options.value = !searchText ? [] : [{
          value: searchText
        }, {
          value: searchText + searchText
        }, {
          value: searchText + searchText + searchText
        }];
      };
      const onSelect = (value: string) => {
        console.log('onSelect', value);
      };
      const onChange = (value: string) => {
        console.log('onChange', value);
      };
      return {
        args,
        value,
        options,
        onSearch,
        onSelect,
        onChange
      };
    },
    template: \`
      <CgAutoComplete
        v-model:value="value"
        :options="options"
        style="width: 200px"
        placeholder="输入城市名"
        @search="onSearch"
        @select="onSelect"
        @change="onChange"
        v-bind="args"
      />
    \`
  }),
  args: {
    allowClear: true,
    defaultActiveFirstOption: true
  }
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgAutoComplete: AutoComplete
    },
    setup() {
      const value = ref('');
      const options = ref([{
        value: '北京',
        label: '北京市'
      }, {
        value: '上海',
        label: '上海市'
      }, {
        value: '广州',
        label: '广州市'
      }, {
        value: '深圳',
        label: '深圳市'
      }, {
        value: '杭州',
        label: '杭州市'
      }, {
        value: '南京',
        label: '南京市'
      }, {
        value: '成都',
        label: '成都市'
      }, {
        value: '重庆',
        label: '重庆市'
      }]);
      const filteredOptions = ref<Array<{
        value: string;
        label: string;
      }>>([]);
      const onSearch = (searchText: string) => {
        filteredOptions.value = options.value.filter(option => option.value.includes(searchText)).map(option => ({
          value: option.value,
          label: option.label
        }));
      };
      return {
        value,
        filteredOptions,
        onSearch
      };
    },
    template: \`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 300px"
        placeholder="输入城市名"
        @search="onSearch"
        allow-clear
      >
        <template #option="{ value, label }">
          <div style="display: flex; justify-content: space-between">
            <span>{{ value }}</span>
            <span style="color: #999">{{ label }}</span>
          </div>
        </template>
      </CgAutoComplete>
    \`
  })
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgAutoComplete: AutoComplete
    },
    setup() {
      const value = ref('');
      const options = ref([{
        value: 'Burns Bay Road'
      }, {
        value: 'Downing Street'
      }, {
        value: 'Wall Street'
      }]);
      const filteredOptions = ref<Array<{
        value: string;
      }>>([]);
      const onSearch = (searchText: string) => {
        filteredOptions.value = !searchText ? [] : options.value.filter(option => option.value.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
      };
      return {
        value,
        filteredOptions,
        onSearch
      };
    },
    template: \`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 200px"
        placeholder="输入地址"
        @search="onSearch"
        allow-clear
      />
    \`
  })
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgAutoComplete: AutoComplete
    },
    setup() {
      const value = ref('');
      const options = ref([{
        value: '北京'
      }, {
        value: '上海'
      }, {
        value: '广州'
      }, {
        value: '深圳'
      }]);
      const filteredOptions = ref<Array<{
        value: string;
      }>>([]);
      const onSearch = (searchText: string) => {
        filteredOptions.value = !searchText ? [] : options.value.filter(option => option.value.includes(searchText));
      };
      return {
        value,
        filteredOptions,
        onSearch
      };
    },
    template: \`
      <CgAutoComplete
        v-model:value="value"
        :options="filteredOptions"
        style="width: 200px"
        @search="onSearch"
      >
        <template #default>
          <input
            style="width: 200px; border: 1px solid #d9d9d9; padding: 4px 11px; border-radius: 4px;"
            placeholder="自定义输入框"
            :value="value"
            @input="(e) => { value = (e.target as HTMLInputElement).value; onSearch((e.target as HTMLInputElement).value); }"
          />
        </template>
      </CgAutoComplete>
    \`
  })
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgAutoComplete: AutoComplete
    },
    setup() {
      const value = ref('');
      const getRandomInt = (max: number, min = 0) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const searchResult = (query: string) => {
        return new Array(getRandomInt(5)).fill(null).map((_, idx) => {
          const category = \`\${query}\${idx}\`;
          return {
            value: category,
            label: \`Found \${query} on \${category}\`,
            results: getRandomInt(200, 100)
          };
        });
      };
      const options = ref<Array<{
        value: string;
        label: string;
        results?: number;
      }>>([]);
      const onSearch = (searchText: string) => {
        options.value = !searchText ? [] : searchResult(searchText);
      };
      return {
        value,
        options,
        onSearch
      };
    },
    template: \`
      <CgAutoComplete
        v-model:value="value"
        :options="options"
        style="width: 300px"
        placeholder="输入搜索词"
        @search="onSearch"
        allow-clear
      >
        <template #option="{ value, label, results }">
          <div style="display: flex; justify-content: space-between">
            <span>
              Found {{ value.replace(/\\d+$/, '') }} on
              <a
                :href="'https://s.taobao.com/search?q=' + value.replace(/\\d+$/, '')"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ value }}
              </a>
            </span>
            <span>{{ results || Math.floor(Math.random() * 101) + 100 }} results</span>
          </div>
        </template>
      </CgAutoComplete>
    \`
  })
}`,...w.parameters?.docs?.source}}};const We=["Basic","CustomOptions","NonCaseSensitive","CustomInput","LookupPatterns"];export{y as Basic,O as CustomInput,A as CustomOptions,w as LookupPatterns,x as NonCaseSensitive,We as __namedExportsOrder,He as default};
