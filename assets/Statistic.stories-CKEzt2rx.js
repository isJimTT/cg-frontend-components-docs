import{a as d,G as X,H as Q,_ as f,I as J,d as z,u as K,e as B,b as Z,aS as U,Q as ee,ax as te,aA as q,r as j,y as ae,z as ne,o as se,ae as ie,af as re,c as oe,ag as le,ah as ce,ai as C,v as b,aj as ue,ak as pe,al as de,am as h,an as me,ao as fe}from"./iframe-CiolPNwv.js";import{i as W}from"./initDefaultProps-CZpOG6Cc.js";import{S as ge}from"./Skeleton-DwFaGTX-.js";import{o as ve}from"./omit-BBXwSgK8.js";const M=e=>{const{value:t,formatter:a,precision:n,decimalSeparator:r,groupSeparator:i="",prefixCls:o}=e;let u;if(typeof a=="function")u=a({value:t});else{const l=String(t),p=l.match(/^(-?)(\d*)(\.(\d+))?$/);if(!p)u=l;else{const m=p[1];let s=p[2]||"0",c=p[4]||"";s=s.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n=="number"&&(c=c.padEnd(n,"0").slice(0,n>0?n:0)),c&&(c=`${r}${c}`),u=[d("span",{key:"int",class:`${o}-content-value-int`},[m,s]),c&&d("span",{key:"decimal",class:`${o}-content-value-decimal`},[c])]}}return d("span",{class:`${o}-content-value`},[u])};M.displayName="StatisticNumber";const xe=e=>{const{componentCls:t,marginXXS:a,padding:n,colorTextDescription:r,statisticTitleFontSize:i,colorTextHeading:o,statisticContentFontSize:u,statisticFontFamily:l}=e;return{[`${t}`]:f(f({},J(e)),{[`${t}-title`]:{marginBottom:a,color:r,fontSize:i},[`${t}-skeleton`]:{paddingTop:n},[`${t}-content`]:{color:o,fontSize:u,fontFamily:l,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:a},[`${t}-content-suffix`]:{marginInlineStart:a}}})}},Se=X("Statistic",e=>{const{fontSizeHeading3:t,fontSize:a,fontFamily:n}=e,r=Q(e,{statisticTitleFontSize:a,statisticContentFontSize:t,statisticFontFamily:n});return[xe(r)]}),G=()=>({prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:q([Number,String,Object]),valueStyle:{type:Object,default:void 0},valueRender:te(),formatter:ee(),precision:Number,prefix:U(),suffix:U(),title:U(),loading:Z()}),g=z({compatConfig:{MODE:3},name:"AStatistic",inheritAttrs:!1,props:W(G(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:Object,setup(e,t){let{slots:a,attrs:n}=t;const{prefixCls:r,direction:i}=K("statistic",e),[o,u]=Se(r);return()=>{var l,p,m,s,c,v,x;const{value:Y=0,valueStyle:L,valueRender:E}=e,S=r.value,H=(l=e.title)!==null&&l!==void 0?l:(p=a.title)===null||p===void 0?void 0:p.call(a),O=(m=e.prefix)!==null&&m!==void 0?m:(s=a.prefix)===null||s===void 0?void 0:s.call(a),P=(c=e.suffix)!==null&&c!==void 0?c:(v=a.suffix)===null||v===void 0?void 0:v.call(a),V=(x=e.formatter)!==null&&x!==void 0?x:a.formatter;let D=d(M,B({"data-for-update":Date.now()},f(f({},e),{prefixCls:S,value:Y,formatter:V})),null);return E&&(D=E(D)),o(d("div",B(B({},n),{},{class:[S,{[`${S}-rtl`]:i.value==="rtl"},n.class,u.value]}),[H&&d("div",{class:`${S}-title`},[H]),d(ge,{paragraph:!1,loading:e.loading},{default:()=>[d("div",{style:L,class:`${S}-content`},[O&&d("span",{class:`${S}-content-prefix`},[O]),D,P&&d("span",{class:`${S}-content-suffix`},[P])])]})]))}}}),ye=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Ce(e,t){let a=e;const n=/\[[^\]]*]/g,r=(t.match(n)||[]).map(l=>l.slice(1,-1)),i=t.replace(n,"[]"),o=ye.reduce((l,p)=>{let[m,s]=p;if(l.includes(m)){const c=Math.floor(a/s);return a-=c*s,l.replace(new RegExp(`${m}+`,"g"),v=>{const x=v.length;return c.toString().padStart(x,"0")})}return l},i);let u=0;return o.replace(n,()=>{const l=r[u];return u+=1,l})}function be(e,t){const{format:a=""}=t,n=new Date(e).getTime(),r=Date.now(),i=Math.max(n-r,0);return Ce(i,a)}const he=1e3/30;function I(e){return new Date(e).getTime()}const we=()=>f(f({},G()),{value:q([Number,String,Object]),format:String,onFinish:Function,onChange:Function}),$e=z({compatConfig:{MODE:3},name:"AStatisticCountdown",props:W(we(),{format:"HH:mm:ss"}),setup(e,t){let{emit:a,slots:n}=t;const r=j(),i=j(),o=()=>{const{value:s}=e;I(s)>=Date.now()?u():l()},u=()=>{if(r.value)return;const s=I(e.value);r.value=setInterval(()=>{i.value.$forceUpdate(),s>Date.now()&&a("change",s-Date.now()),o()},he)},l=()=>{const{value:s}=e;r.value&&(clearInterval(r.value),r.value=void 0,I(s)<Date.now()&&a("finish"))},p=s=>{let{value:c,config:v}=s;const{format:x}=e;return be(c,f(f({},v),{format:x}))},m=s=>s;return ae(()=>{o()}),ne(()=>{o()}),se(()=>{l()}),()=>{const s=e.value;return d(g,B({ref:i},f(f({},ve(e,["onFinish","onChange"])),{value:s,valueRender:m,formatter:p})),n)}}});g.Countdown=$e;g.install=function(e){return e.component(g.name,g),e.component(g.Countdown.name,g.Countdown),e};g.Countdown;const y=z({__name:"Statistic",props:{title:{},value:{},precision:{},formatter:{type:Function},parser:{type:Function},prefix:{},suffix:{},valueStyle:{},loading:{type:Boolean}},setup(e){const t=e,a=ie(),n=re(),r=oe(()=>{const i={};return Object.keys(a).filter(o=>o.startsWith("on")).forEach(o=>{i[o]=a[o]}),i});return(i,o)=>(de(),le(b(g),ue(t,pe(r.value)),ce({default:C(()=>[h(i.$slots,"default")]),_:2},[b(n).title?{name:"title",fn:C(()=>[h(i.$slots,"title")]),key:"0"}:void 0,b(n).prefix?{name:"prefix",fn:C(()=>[h(i.$slots,"prefix")]),key:"1"}:void 0,b(n).suffix?{name:"suffix",fn:C(()=>[h(i.$slots,"suffix")]),key:"2"}:void 0,b(n).formatter?{name:"formatter",fn:C(u=>[h(i.$slots,"formatter",me(fe(u||{})))]),key:"3"}:void 0]),1040))}});y.__docgenInfo={exportName:"default",displayName:"Statistic",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"precision",required:!1,type:{name:"number"}},{name:"formatter",required:!1,type:{name:"TSFunctionType"}},{name:"parser",required:!1,type:{name:"TSFunctionType"}},{name:"prefix",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"valueStyle",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]}},{name:"loading",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"prefix"},{name:"suffix"},{name:"formatter",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Statistic/Statistic.vue"]};const Re={title:"Components/Statistic",component:y,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text",description:"数值的标题"},value:{control:"text",description:"数值内容"},precision:{control:"number",description:"数值精度"},prefix:{control:"text",description:"设置数值的前缀"},suffix:{control:"text",description:"设置数值的后缀"},loading:{control:"boolean",description:"数值是否加载中"}}},w={args:{title:"Active Users",value:112893}},$={args:{title:"Account Balance (CNY)",value:112893.12345,precision:2}},T={args:{title:"Growth Rate",value:93,precision:2,suffix:"%",prefix:"+"}},k={args:{title:"Active Users",value:112893,valueStyle:{color:"#3f8600"}}},A={args:{title:"Active Users",value:112893,loading:!0}},F={render:()=>({components:{CgStatistic:y},template:`
      <CgStatistic :value="112893">
        <template #title>
          <span style="color: #1890ff;">👥 Active Users</span>
        </template>
        <template #prefix>
          <span style="color: #52c41a;">↗</span>
        </template>
        <template #suffix>
          <span style="color: #999;">/ day</span>
        </template>
      </CgStatistic>
    `})},R={render:()=>({components:{CgStatistic:y},setup(){return{formatter:t=>`$ ${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}},template:`
      <CgStatistic
        title="Account Balance"
        :value="112893"
        :formatter="formatter"
      />
    `})},N={render:()=>({components:{CgStatistic:y},template:`
      <div style="display: flex; gap: 32px;">
        <CgStatistic
          title="Active Users"
          :value="112893"
          :value-style="{ color: '#3f8600' }"
        />
        <CgStatistic
          title="Account Balance (CNY)"
          :value="112893"
          :precision="2"
          prefix="¥"
        />
        <CgStatistic
          title="Growth Rate"
          :value="93"
          :precision="2"
          suffix="%"
          prefix="+"
          :value-style="{ color: '#cf1322' }"
        />
        <CgStatistic
          title="Downloads"
          :value="1128934"
          suffix="times"
        />
      </div>
    `})},_={render:()=>({components:{CgStatistic:y},template:`
      <div style="background: #fafafa; padding: 24px; border-radius: 8px;">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Total Sales"
              :value="1234567"
              prefix="$"
              :value-style="{ color: '#3f8600' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Orders"
              :value="8846"
              suffix="orders"
              :value-style="{ color: '#1890ff' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Conversion Rate"
              :value="92.5"
              suffix="%"
              :precision="1"
              :value-style="{ color: '#722ed1' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Revenue Growth"
              :value="15.2"
              suffix="%"
              prefix="+"
              :precision="1"
              :value-style="{ color: '#52c41a' }"
            />
          </div>
        </div>
      </div>
    `})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: 112893
  }
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Account Balance (CNY)',
    value: 112893.12345,
    precision: 2
  }
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Growth Rate',
    value: 93,
    precision: 2,
    suffix: '%',
    prefix: '+'
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: 112893,
    valueStyle: {
      color: '#3f8600'
    }
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: 112893,
    loading: true
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgStatistic: Statistic
    },
    template: \`
      <CgStatistic :value="112893">
        <template #title>
          <span style="color: #1890ff;">👥 Active Users</span>
        </template>
        <template #prefix>
          <span style="color: #52c41a;">↗</span>
        </template>
        <template #suffix>
          <span style="color: #999;">/ day</span>
        </template>
      </CgStatistic>
    \`
  })
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgStatistic: Statistic
    },
    setup() {
      const formatter = (value: number) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
      return {
        formatter
      };
    },
    template: \`
      <CgStatistic
        title="Account Balance"
        :value="112893"
        :formatter="formatter"
      />
    \`
  })
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgStatistic: Statistic
    },
    template: \`
      <div style="display: flex; gap: 32px;">
        <CgStatistic
          title="Active Users"
          :value="112893"
          :value-style="{ color: '#3f8600' }"
        />
        <CgStatistic
          title="Account Balance (CNY)"
          :value="112893"
          :precision="2"
          prefix="¥"
        />
        <CgStatistic
          title="Growth Rate"
          :value="93"
          :precision="2"
          suffix="%"
          prefix="+"
          :value-style="{ color: '#cf1322' }"
        />
        <CgStatistic
          title="Downloads"
          :value="1128934"
          suffix="times"
        />
      </div>
    \`
  })
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgStatistic: Statistic
    },
    template: \`
      <div style="background: #fafafa; padding: 24px; border-radius: 8px;">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Total Sales"
              :value="1234567"
              prefix="$"
              :value-style="{ color: '#3f8600' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Orders"
              :value="8846"
              suffix="orders"
              :value-style="{ color: '#1890ff' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Conversion Rate"
              :value="92.5"
              suffix="%"
              :precision="1"
              :value-style="{ color: '#722ed1' }"
            />
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <CgStatistic
              title="Revenue Growth"
              :value="15.2"
              suffix="%"
              prefix="+"
              :precision="1"
              :value-style="{ color: '#52c41a' }"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};const Ne=["Basic","WithPrecision","WithPrefixAndSuffix","WithCustomValueStyle","Loading","WithSlots","CustomFormatter","MultipleStatistics","InCard"];export{w as Basic,R as CustomFormatter,_ as InCard,A as Loading,N as MultipleStatistics,k as WithCustomValueStyle,$ as WithPrecision,T as WithPrefixAndSuffix,F as WithSlots,Ne as __namedExportsOrder,Re as default};
