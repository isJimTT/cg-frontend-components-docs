import{a,l as ue,r as k,F as Ie,aO as fe,aP as ye,aD as Se,_ as p,G as ve,H as xe,I as he,aQ as $e,d as T,P as q,u as we,aa as Be,o as _e,p as ze,aR as ie,c as Y,e as oe,a6 as Pe,ae,af as ce,ag as pe,ah as me,ai as w,aj as de,ak as ge,v as Q,al as Ce,am as B,an as J,ao as K}from"./iframe-CiolPNwv.js";import{u as Ee,r as re}from"./responsiveObserve-Cqxd3VwU.js";import{c as je}from"./vnode-B4SLhmi3.js";function z(e){return e!=null}const X=e=>{const{itemPrefixCls:t,component:n,span:i,labelStyle:s,contentStyle:o,bordered:r,label:l,content:c,colon:d}=e,m=n;return r?a(m,{class:[{[`${t}-item-label`]:z(l),[`${t}-item-content`]:z(c)}],colSpan:i},{default:()=>[z(l)&&a("span",{style:s},[l]),z(c)&&a("span",{style:o},[c])]}):a(m,{class:[`${t}-item`],colSpan:i},{default:()=>[a("div",{class:`${t}-item-container`},[(l||l===0)&&a("span",{class:[`${t}-item-label`,{[`${t}-item-no-colon`]:!d}],style:s},[l]),(c||c===0)&&a("span",{class:`${t}-item-content`,style:o},[c])])]})},Le=e=>{const t=(d,m,W)=>{let{colon:C,prefixCls:h,bordered:u}=m,{component:I,type:_,showLabel:A,showContent:H,labelStyle:y,contentStyle:S}=W;return d.map((D,$)=>{var v,x;const N=D.props||{},{prefixCls:G=h,span:Z=1,labelStyle:ee=N["label-style"],contentStyle:te=N["content-style"],label:se=(x=(v=D.children)===null||v===void 0?void 0:v.label)===null||x===void 0?void 0:x.call(v)}=N,ne=fe(D),V=ye(D),F=Se(D),{key:U}=D;return typeof I=="string"?a(X,{key:`${_}-${String(U)||$}`,class:V,style:F,labelStyle:p(p({},y),ee),contentStyle:p(p({},S),te),span:Z,colon:C,component:I,itemPrefixCls:G,bordered:u,label:A?se:null,content:H?ne:null},null):[a(X,{key:`label-${String(U)||$}`,class:V,style:p(p(p({},y),F),ee),span:1,colon:C,component:I[0],itemPrefixCls:G,bordered:u,label:se},null),a(X,{key:`content-${String(U)||$}`,class:V,style:p(p(p({},S),F),te),span:Z*2-1,component:I[1],itemPrefixCls:G,bordered:u,content:ne},null)]})},{prefixCls:n,vertical:i,row:s,index:o,bordered:r}=e,{labelStyle:l,contentStyle:c}=ue(be,{labelStyle:k({}),contentStyle:k({})});return i?a(Ie,null,[a("tr",{key:`label-${o}`,class:`${n}-row`},[t(s,e,{component:"th",type:"label",showLabel:!0,labelStyle:l.value,contentStyle:c.value})]),a("tr",{key:`content-${o}`,class:`${n}-row`},[t(s,e,{component:"td",type:"content",showContent:!0,labelStyle:l.value,contentStyle:c.value})])]):a("tr",{key:o,class:`${n}-row`},[t(s,e,{component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:l.value,contentStyle:c.value})])},Me=e=>{const{componentCls:t,descriptionsSmallPadding:n,descriptionsDefaultPadding:i,descriptionsMiddlePadding:s,descriptionsBg:o}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:i,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:o,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:s}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:n}}}}},Re=e=>{const{componentCls:t,descriptionsExtraColor:n,descriptionItemPaddingBottom:i,descriptionsItemLabelColonMarginRight:s,descriptionsItemLabelColonMarginLeft:o,descriptionsTitleMarginBottom:r}=e;return{[t]:p(p(p({},he(e)),Me(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:r},[`${t}-title`]:p(p({},$e),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:n,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:i},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${o}px ${s}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},Oe=ve("Descriptions",e=>{const t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,i=e.colorText,s=`${e.paddingXS}px ${e.padding}px`,o=`${e.padding}px ${e.paddingLG}px`,r=`${e.paddingSM}px ${e.paddingLG}px`,l=e.padding,c=e.marginXS,d=e.marginXXS/2,m=xe(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:i,descriptionItemPaddingBottom:l,descriptionsSmallPadding:s,descriptionsDefaultPadding:o,descriptionsMiddlePadding:r,descriptionsItemLabelColonMarginRight:c,descriptionsItemLabelColonMarginLeft:d});return[Re(m)]});q.any;const qe=()=>({prefixCls:String,label:q.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}),Te=T({compatConfig:{MODE:3},name:"ADescriptionsItem",props:qe(),setup(e,t){let{slots:n}=t;return()=>{var i;return(i=n.default)===null||i===void 0?void 0:i.call(n)}}}),De={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function We(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let n=0;n<re.length;n++){const i=re[n];if(t[i]&&e[i]!==void 0)return e[i]||De[i]}return 3}function le(e,t,n){let i=e;return(n===void 0||n>t)&&(i=je(e,{span:t})),i}function Ae(e,t){const n=Pe(e),i=[];let s=[],o=t;return n.forEach((r,l)=>{var c;const d=(c=r.props)===null||c===void 0?void 0:c.span,m=d||1;if(l===n.length-1){s.push(le(r,o,d)),i.push(s);return}m<o?(o-=m,s.push(r)):(s.push(le(r,o,m)),i.push(s),o=t,s=[])}),i}const He=()=>({prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:q.any,extra:q.any,column:{type:[Number,Object],default:()=>De},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}),be=Symbol("descriptionsContext"),f=T({compatConfig:{MODE:3},name:"ADescriptions",inheritAttrs:!1,props:He(),slots:Object,Item:Te,setup(e,t){let{slots:n,attrs:i}=t;const{prefixCls:s,direction:o}=we("descriptions",e);let r;const l=k({}),[c,d]=Oe(s),m=Ee();Be(()=>{r=m.value.subscribe(C=>{typeof e.column=="object"&&(l.value=C)})}),_e(()=>{m.value.unsubscribe(r)}),ze(be,{labelStyle:ie(e,"labelStyle"),contentStyle:ie(e,"contentStyle")});const W=Y(()=>We(e.column,l.value));return()=>{var C,h,u;const{size:I,bordered:_=!1,layout:A="horizontal",colon:H=!0,title:y=(C=n.title)===null||C===void 0?void 0:C.call(n),extra:S=(h=n.extra)===null||h===void 0?void 0:h.call(n)}=e,D=(u=n.default)===null||u===void 0?void 0:u.call(n),$=Ae(D,W.value);return c(a("div",oe(oe({},i),{},{class:[s.value,{[`${s.value}-${I}`]:I!=="default",[`${s.value}-bordered`]:!!_,[`${s.value}-rtl`]:o.value==="rtl"},i.class,d.value]}),[(y||S)&&a("div",{class:`${s.value}-header`},[y&&a("div",{class:`${s.value}-title`},[y]),S&&a("div",{class:`${s.value}-extra`},[S])]),a("div",{class:`${s.value}-view`},[a("table",null,[a("tbody",null,[$.map((v,x)=>a(Le,{key:x,index:x,colon:H,prefixCls:s.value,vertical:A==="vertical",bordered:_,row:v},null))])])])]))}}});f.install=function(e){return e.component(f.name,f),e.component(f.Item.name,f.Item),e};const g=T({__name:"Descriptions",props:{bordered:{type:Boolean},colon:{type:Boolean},column:{},contentStyle:{},extra:{},labelStyle:{},layout:{},size:{},title:{}},setup(e){const t=e,n=ae();ce();const i=Y(()=>{const s={};return Object.keys(n).filter(o=>o.startsWith("on")).forEach(o=>{s[o]=n[o]}),s});return(s,o)=>(Ce(),pe(Q(f),de(t,ge(i.value)),me({default:w(()=>[B(s.$slots,"default")]),_:2},[s.$slots.title?{name:"title",fn:w(r=>[B(s.$slots,"title",J(K(r||{})))]),key:"0"}:void 0,s.$slots.extra?{name:"extra",fn:w(r=>[B(s.$slots,"extra",J(K(r||{})))]),key:"1"}:void 0]),1040))}});g.__docgenInfo={exportName:"default",displayName:"Descriptions",description:"",tags:{},props:[{name:"bordered",required:!1,type:{name:"boolean"}},{name:"colon",required:!1,type:{name:"boolean"}},{name:"column",required:!1,type:{name:"union",elements:[{name:"number"},{name:"object"}]}},{name:"contentStyle",required:!1,type:{name:"object"}},{name:"extra",required:!1,type:{name:"any"}},{name:"labelStyle",required:!1,type:{name:"object"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"middle"'},{name:'"small"'}]}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"title",scoped:!0,bindings:[]},{name:"extra",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Descriptions/Descriptions.vue"]};const b=T({__name:"DescriptionsItem",props:{contentStyle:{},label:{},labelStyle:{},span:{}},setup(e){const t=f.Item,n=e,i=ae(),s=ce(),o=Y(()=>{const r={};return Object.keys(i).filter(l=>l.startsWith("on")).forEach(l=>{r[l]=i[l]}),r});return(r,l)=>(Ce(),pe(Q(t),de(n,ge(o.value)),me({default:w(()=>[B(r.$slots,"default")]),_:2},[Q(s).label?{name:"label",fn:w(c=>[B(r.$slots,"label",J(K(c||{})))]),key:"0"}:void 0]),1040))}});b.__docgenInfo={exportName:"default",displayName:"DescriptionsItem",description:"",tags:{},props:[{name:"contentStyle",required:!1,type:{name:"object"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelStyle",required:!1,type:{name:"object"}},{name:"span",required:!1,type:{name:"number"}}],slots:[{name:"label",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Descriptions/DescriptionsItem.vue"]};const Fe={title:"Components/Descriptions",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{bordered:{control:"boolean",description:"是否展示边框",defaultValue:!1},colon:{control:"boolean",description:"配置 Descriptions.Item 的 colon 的默认值",defaultValue:!0},column:{control:{type:"number",min:1},description:"一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法",defaultValue:3},layout:{control:{type:"select",options:["horizontal","vertical"]},description:"描述布局",defaultValue:"horizontal"},size:{control:{type:"select",options:["default","middle","small"]},description:"设置列表的大小",defaultValue:"default"},title:{control:"text",description:"描述列表的标题，显示在最顶部"},extra:{control:"text",description:"描述列表的操作区域，显示在右上方"}}},P={render:e=>({components:{CgDescriptions:g,CgDescriptionsItem:b},setup(){return{args:e}},template:`
      <CgDescriptions title="用户信息" v-bind="args">
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">
          <a>空</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    `}),args:{bordered:!1,column:3}},E={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},template:`
      <CgDescriptions title="用户信息" bordered>
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem label="使用时长" :span="2">2年</CgDescriptionsItem>
        <CgDescriptionsItem label="状态" :span="3">
          <span style="color: #52c41a;">运行中</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="商品折扣">
          <span style="color: #ff4d4f;">$20.00</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="保险">
          <span style="color: #52c41a;">已购买</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="官网">
          <a href="https://www.antdv.com/">antdv.com</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="配置信息">
          Data disk type: MongoDB<br/>
          Database version: 3.4<br/>
          Package: dds.mongo.mid<br/>
          Storage space: 10 GB<br/>
          Replication factor: 3<br/>
          Region: East China 1<br/>
        </CgDescriptionsItem>
      </CgDescriptions>
    `})},j={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},template:`
      <div>
        <CgDescriptions size="small" title="小尺寸" bordered style="margin-bottom: 20px;">
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
        
        <CgDescriptions size="middle" title="中等尺寸" bordered style="margin-bottom: 20px;">
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
        
        <CgDescriptions title="默认尺寸" bordered>
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
      </div>
    `})},L={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},template:`
      <CgDescriptions title="用户信息" layout="vertical" bordered>
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">空</CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    `})},M={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},setup(){return{column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}}},template:`
      <CgDescriptions title="响应式描述列表" bordered :column="column">
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem label="使用时长" :span="2">2年</CgDescriptionsItem>
        <CgDescriptionsItem label="状态" :span="3">
          <span style="color: #52c41a;">运行中</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="商品折扣">
          <span style="color: #ff4d4f;">$20.00</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="保险">
          <span style="color: #52c41a;">已购买</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="官网">
          <a href="https://www.antdv.com/">antdv.com</a>
        </CgDescriptionsItem>
      </CgDescriptions>
    `})},R={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},setup(){return{handleEdit:()=>{console.log("编辑")}}},template:`
      <CgDescriptions title="用户信息" bordered>
        <template #extra>
          <button @click="handleEdit" style="padding: 4px 15px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff; cursor: pointer;">
            编辑
          </button>
        </template>
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">
          <a>空</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    `})},O={render:()=>({components:{CgDescriptions:g,CgDescriptionsItem:b},setup(){return{labelStyle:{background:"#fafafa"},contentStyle:{background:"#fff"}}},template:`
      <CgDescriptions 
        title="自定义样式" 
        bordered 
        :label-style="labelStyle"
        :content-style="contentStyle"
      >
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem 
          label="使用时长" 
          :span="2"
          :label-style="{ background: '#e6f7ff' }"
          :content-style="{ background: '#f0f9ff' }"
        >
          2年
        </CgDescriptionsItem>
      </CgDescriptions>
    `})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CgDescriptions title="用户信息" v-bind="args">
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">
          <a>空</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  }),
  args: {
    bordered: false,
    column: 3
  }
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    template: \`
      <CgDescriptions title="用户信息" bordered>
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem label="使用时长" :span="2">2年</CgDescriptionsItem>
        <CgDescriptionsItem label="状态" :span="3">
          <span style="color: #52c41a;">运行中</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="商品折扣">
          <span style="color: #ff4d4f;">$20.00</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="保险">
          <span style="color: #52c41a;">已购买</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="官网">
          <a href="https://www.antdv.com/">antdv.com</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="配置信息">
          Data disk type: MongoDB<br/>
          Database version: 3.4<br/>
          Package: dds.mongo.mid<br/>
          Storage space: 10 GB<br/>
          Replication factor: 3<br/>
          Region: East China 1<br/>
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  })
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    template: \`
      <div>
        <CgDescriptions size="small" title="小尺寸" bordered style="margin-bottom: 20px;">
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
        
        <CgDescriptions size="middle" title="中等尺寸" bordered style="margin-bottom: 20px;">
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
        
        <CgDescriptions title="默认尺寸" bordered>
          <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
          <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
          <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
          <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        </CgDescriptions>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    template: \`
      <CgDescriptions title="用户信息" layout="vertical" bordered>
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">空</CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  })
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    setup() {
      const column = {
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1
      };
      return {
        column
      };
    },
    template: \`
      <CgDescriptions title="响应式描述列表" bordered :column="column">
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem label="使用时长" :span="2">2年</CgDescriptionsItem>
        <CgDescriptionsItem label="状态" :span="3">
          <span style="color: #52c41a;">运行中</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="商品折扣">
          <span style="color: #ff4d4f;">$20.00</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="保险">
          <span style="color: #52c41a;">已购买</span>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="官网">
          <a href="https://www.antdv.com/">antdv.com</a>
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  })
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    setup() {
      const handleEdit = () => {
        console.log('编辑');
      };
      return {
        handleEdit
      };
    },
    template: \`
      <CgDescriptions title="用户信息" bordered>
        <template #extra>
          <button @click="handleEdit" style="padding: 4px 15px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff; cursor: pointer;">
            编辑
          </button>
        </template>
        <CgDescriptionsItem label="用户名">周小明</CgDescriptionsItem>
        <CgDescriptionsItem label="手机号">1810000000</CgDescriptionsItem>
        <CgDescriptionsItem label="居住地">浙江杭州</CgDescriptionsItem>
        <CgDescriptionsItem label="备注">
          <a>空</a>
        </CgDescriptionsItem>
        <CgDescriptionsItem label="地址">
          杭州市西湖区文三路 188 号东方通信大厦 7 楼 501 室
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  })
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgDescriptions: Descriptions,
      CgDescriptionsItem: DescriptionsItem
    },
    setup() {
      const labelStyle = {
        background: '#fafafa'
      };
      const contentStyle = {
        background: '#fff'
      };
      return {
        labelStyle,
        contentStyle
      };
    },
    template: \`
      <CgDescriptions 
        title="自定义样式" 
        bordered 
        :label-style="labelStyle"
        :content-style="contentStyle"
      >
        <CgDescriptionsItem label="产品">Cloud Database</CgDescriptionsItem>
        <CgDescriptionsItem label="计费方式">预付费</CgDescriptionsItem>
        <CgDescriptionsItem label="自动续费">已开通</CgDescriptionsItem>
        <CgDescriptionsItem label="订单时间">2018-04-24 18:00:00</CgDescriptionsItem>
        <CgDescriptionsItem 
          label="使用时长" 
          :span="2"
          :label-style="{ background: '#e6f7ff' }"
          :content-style="{ background: '#f0f9ff' }"
        >
          2年
        </CgDescriptionsItem>
      </CgDescriptions>
    \`
  })
}`,...O.parameters?.docs?.source}}};const Ue=["Basic","Bordered","Size","Vertical","Responsive","WithExtra","CustomStyle"];export{P as Basic,E as Bordered,O as CustomStyle,M as Responsive,j as Size,L as Vertical,R as WithExtra,Ue as __namedExportsOrder,Fe as default};
