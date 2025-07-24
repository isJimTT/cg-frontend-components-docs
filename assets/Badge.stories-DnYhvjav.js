import{d as N,c as g,m as _e,r as ee,w as Se,A as De,_ as c,a as f,g as ae,P as D,u as pe,f as Ie,G as Ee,H as We,I as fe,K as q,e as _,ad as Fe,a6 as je,a0 as Ze,a1 as Me,a2 as Ve,a3 as Le,ae as he,af as Ce,ag as ye,ah as xe,ai as ne,v as oe,aj as ze,ak as $e,al as we,am as re}from"./iframe-CiolPNwv.js";import{c as Re}from"./vnode-B4SLhmi3.js";import{g as ve,i as Ae}from"./colors-C8AO4Xlz.js";import{i as Ue}from"./isNumeric-DjvBa-1E.js";import{A as $}from"./index-CV9ql-fH.js";import{S as x}from"./index-C9_4AhMb.js";import{C as ie}from"./index-DiqdqizW.js";import"./useBreakpoint-BpzVhzE_.js";import"./responsiveObserve-Cqxd3VwU.js";import"./index-TLYrHIS2.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./eagerComputed-DbQ3AthJ.js";import"./index-CK7QGXoe.js";import"./index-D70oGXWT.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./isVisible-BHYmLg1T.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";import"./initDefaultProps-CZpOG6Cc.js";import"./omit-BBXwSgK8.js";import"./useFlexGapSupport-CPj-DJgt.js";import"./Compact-DDa3__kb.js";import"./createContext-BoBCVfLB.js";import"./index-CQ15eLOt.js";import"./KeyCode-D63Tfrq7.js";import"./index-AnxN_syn.js";import"./shallowequal-M8HXjn8A.js";import"./devWarning-MTSIIkhh.js";import"./_arrayIncludes-B8uzE354.js";import"./Overflow-BI-bb3Ua.js";import"./collapseMotion-DlFXgzvQ.js";import"./slide-0rv4PiHr.js";import"./Dropdown-6CklYmQZ.js";import"./useState-Ds4oJkA7.js";import"./useRefs-BWK2Gk1T.js";import"./hasIn-C_lX_94a.js";import"./isSymbol-C1qQj8zB.js";import"./isMobile-x7Gj6jC1.js";import"./useMergedState-8OkYKI-g.js";import"./PlusOutlined-CuxwsYuO.js";import"./isPlainObject-CGgsQr0R.js";import"./Skeleton-DwFaGTX-.js";function Be(e){let{prefixCls:a,value:o,current:t,offset:n=0}=e,r;return n&&(r={position:"absolute",top:`${n}00%`,left:0}),f("p",{style:r,class:ae(`${a}-only-unit`,{current:t})},[o])}function Xe(e,a,o){let t=e,n=0;for(;(t+10)%10!==a;)t+=o,n+=o;return n}const Ke=N({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup(e){const a=g(()=>Number(e.value)),o=g(()=>Math.abs(e.count)),t=_e({prevValue:a.value,prevCount:o.value}),n=()=>{t.prevValue=a.value,t.prevCount=o.value},r=ee();return Se(a,()=>{clearTimeout(r.value),r.value=setTimeout(()=>{n()},1e3)},{flush:"post"}),De(()=>{clearTimeout(r.value)}),()=>{let s,v={};const d=a.value;if(t.prevValue===d||Number.isNaN(d)||Number.isNaN(t.prevValue))s=[Be(c(c({},e),{current:!0}))],v={transition:"none"};else{s=[];const B=d+10,p=[];for(let i=d;i<=B;i+=1)p.push(i);const l=p.findIndex(i=>i%10===t.prevValue);s=p.map((i,y)=>{const S=i%10;return Be(c(c({},e),{value:S,offset:y-l,current:y===l}))});const u=t.prevCount<o.value?1:-1;v={transform:`translateY(${-Xe(t.prevValue,d,u)}00%)`}}return f("span",{class:`${e.prefixCls}-only`,style:v,onTransitionend:()=>n()},[s])}}});var Ye=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const Ge={prefixCls:String,count:D.any,component:String,title:D.any,show:Boolean},Je=N({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:Ge,setup(e,a){let{attrs:o,slots:t}=a;const{prefixCls:n}=pe("scroll-number",e);return()=>{var r;const s=c(c({},e),o),{prefixCls:v,count:d,title:B,show:p,component:l="sup",class:u,style:i}=s,y=Ye(s,["prefixCls","count","title","show","component","class","style"]),S=c(c({},y),{style:i,"data-show":e.show,class:ae(n.value,u),title:B});let m=d;if(d&&Number(d)%1===0){const b=String(d).split("");m=b.map((H,T)=>f(Ke,{prefixCls:n.value,count:Number(d),value:H,key:b.length-T},null))}i&&i.borderColor&&(S.style=c(c({},i),{boxShadow:`0 0 0 1px ${i.borderColor} inset`}));const h=Ie((r=t.default)===null||r===void 0?void 0:r.call(t));return h&&h.length?Re(h,{class:ae(`${n.value}-custom-component`)},!1):f(l,S,{default:()=>[m]})}}}),Qe=new q("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),ke=new q("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),et=new q("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),tt=new q("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),at=new q("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),nt=new q("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),ot=e=>{const{componentCls:a,iconCls:o,antCls:t,badgeFontHeight:n,badgeShadowSize:r,badgeHeightSm:s,motionDurationSlow:v,badgeStatusSize:d,marginXS:B,badgeRibbonOffset:p}=e,l=`${t}-scroll-number`,u=`${t}-ribbon`,i=`${t}-ribbon-wrapper`,y=ve(e,(m,h)=>{let{darkColor:b}=h;return{[`&${a} ${a}-color-${m}`]:{background:b,[`&:not(${a}-count)`]:{color:b}}}}),S=ve(e,(m,h)=>{let{darkColor:b}=h;return{[`&${u}-color-${m}`]:{background:b,color:b}}});return{[a]:c(c(c(c({},fe(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${a}-count`]:{zIndex:e.badgeZIndex,minWidth:e.badgeHeight,height:e.badgeHeight,color:e.badgeTextColor,fontWeight:e.badgeFontWeight,fontSize:e.badgeFontSize,lineHeight:`${e.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:e.badgeHeight/2,boxShadow:`0 0 0 ${r}px ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${a}-count-sm`]:{minWidth:s,height:s,fontSize:e.badgeFontSizeSm,lineHeight:`${s}px`,borderRadius:s/2},[`${a}-multiple-words`]:{padding:`0 ${e.paddingXS}px`},[`${a}-dot`]:{zIndex:e.badgeZIndex,width:e.badgeDotSize,minWidth:e.badgeDotSize,height:e.badgeDotSize,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${r}px ${e.badgeShadowColor}`},[`${a}-dot${l}`]:{transition:`background ${v}`},[`${a}-count, ${a}-dot, ${l}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${o}-spin`]:{animationName:nt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${a}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${a}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:d,height:d,verticalAlign:"middle",borderRadius:"50%"},[`${a}-status-success`]:{backgroundColor:e.colorSuccess},[`${a}-status-processing`]:{overflow:"visible",color:e.colorPrimary,backgroundColor:e.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:r,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:Qe,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${a}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${a}-status-error`]:{backgroundColor:e.colorError},[`${a}-status-warning`]:{backgroundColor:e.colorWarning},[`${a}-status-text`]:{marginInlineStart:B,color:e.colorText,fontSize:e.fontSize}}}),y),{[`${a}-zoom-appear, ${a}-zoom-enter`]:{animationName:ke,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${a}-zoom-leave`]:{animationName:et,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${a}-not-a-wrapper`]:{[`${a}-zoom-appear, ${a}-zoom-enter`]:{animationName:tt,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${a}-zoom-leave`]:{animationName:at,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${a}-status)`]:{verticalAlign:"middle"},[`${l}-custom-component, ${a}-count`]:{transform:"none"},[`${l}-custom-component, ${l}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${l}`]:{overflow:"hidden",[`${l}-only`]:{position:"relative",display:"inline-block",height:e.badgeHeight,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${l}-only-unit`]:{height:e.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${l}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${a}-count, ${a}-dot, ${l}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${i}`]:{position:"relative"},[`${u}`]:c(c(c(c({},fe(e)),{position:"absolute",top:B,padding:`0 ${e.paddingXS}px`,color:e.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${u}-text`]:{color:e.colorTextLightSolid},[`${u}-corner`]:{position:"absolute",top:"100%",width:p,height:p,color:"currentcolor",border:`${p/2}px solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),S),{[`&${u}-placement-end`]:{insetInlineEnd:-p,borderEndEndRadius:0,[`${u}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${u}-placement-start`]:{insetInlineStart:-p,borderEndStartRadius:0,[`${u}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Oe=Ee("Badge",e=>{const{fontSize:a,lineHeight:o,fontSizeSM:t,lineWidth:n,marginXS:r,colorBorderBg:s}=e,v=Math.round(a*o),d=n,B="auto",p=v-2*d,l=e.colorBgContainer,u="normal",i=t,y=e.colorError,S=e.colorErrorHover,m=a,h=t/2,b=t,H=t/2,T=We(e,{badgeFontHeight:v,badgeShadowSize:d,badgeZIndex:B,badgeHeight:p,badgeTextColor:l,badgeFontWeight:u,badgeFontSize:i,badgeColor:y,badgeColorHover:S,badgeShadowColor:s,badgeHeightSm:m,badgeDotSize:h,badgeFontSizeSm:b,badgeStatusSize:H,badgeProcessingDuration:"1.2s",badgeRibbonOffset:r,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[ot(T)]});var rt=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const st=()=>({prefix:String,color:{type:String},text:D.any,placement:{type:String,default:"end"}}),se=N({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:st(),slots:Object,setup(e,a){let{attrs:o,slots:t}=a;const{prefixCls:n,direction:r}=pe("ribbon",e),[s,v]=Oe(n),d=g(()=>Ae(e.color,!1)),B=g(()=>[n.value,`${n.value}-placement-${e.placement}`,{[`${n.value}-rtl`]:r.value==="rtl",[`${n.value}-color-${e.color}`]:d.value}]);return()=>{var p,l;const{class:u,style:i}=o,y=rt(o,["class","style"]),S={},m={};return e.color&&!d.value&&(S.background=e.color,m.color=e.color),s(f("div",_({class:`${n.value}-wrapper ${v.value}`},y),[(p=t.default)===null||p===void 0?void 0:p.call(t),f("div",{class:[B.value,u,v.value],style:c(c({},S),i)},[f("span",{class:`${n.value}-text`},[e.text||((l=t.text)===null||l===void 0?void 0:l.call(t))]),f("div",{class:`${n.value}-corner`,style:m},null)])]))}}}),it=()=>({count:D.any.def(null),showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:D.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}),te=N({compatConfig:{MODE:3},name:"ABadge",Ribbon:se,inheritAttrs:!1,props:it(),slots:Object,setup(e,a){let{slots:o,attrs:t}=a;const{prefixCls:n,direction:r}=pe("badge",e),[s,v]=Oe(n),d=g(()=>e.count>e.overflowCount?`${e.overflowCount}+`:e.count),B=g(()=>d.value==="0"||d.value===0),p=g(()=>e.count===null||B.value&&!e.showZero),l=g(()=>(e.status!==null&&e.status!==void 0||e.color!==null&&e.color!==void 0)&&p.value),u=g(()=>e.dot&&!B.value),i=g(()=>u.value?"":d.value),y=g(()=>(i.value===null||i.value===void 0||i.value===""||B.value&&!e.showZero)&&!u.value),S=ee(e.count),m=ee(i.value),h=ee(u.value);Se([()=>e.count,i,u],()=>{y.value||(S.value=e.count,m.value=i.value,h.value=u.value)},{immediate:!0});const b=g(()=>Ae(e.color,!1)),H=g(()=>({[`${n.value}-status-dot`]:l.value,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:b.value})),T=g(()=>e.color&&!b.value?{background:e.color,color:e.color}:{}),Ne=g(()=>({[`${n.value}-dot`]:h.value,[`${n.value}-count`]:!h.value,[`${n.value}-count-sm`]:e.size==="small",[`${n.value}-multiple-words`]:!h.value&&m.value&&m.value.toString().length>1,[`${n.value}-status-${e.status}`]:!!e.status,[`${n.value}-color-${e.color}`]:b.value}));return()=>{var I,le;const{offset:O,title:ce,color:ge}=e,me=t.style,de=Fe(o,e,"text"),w=n.value,z=S.value;let R=je((I=o.default)===null||I===void 0?void 0:I.call(o));R=R.length?R:null;const ue=!!(!y.value||o.count),E=(()=>{if(!O)return c({},me);const P={marginTop:Ue(O[1])?`${O[1]}px`:O[1]};return r.value==="rtl"?P.left=`${parseInt(O[0],10)}px`:P.right=`${-parseInt(O[0],10)}px`,c(c({},P),me)})(),qe=ce??(typeof z=="string"||typeof z=="number"?z:void 0),He=ue||!de?null:f("span",{class:`${w}-status-text`},[de]),Te=typeof z=="object"||z===void 0&&o.count?Re(z??((le=o.count)===null||le===void 0?void 0:le.call(o)),{style:E},!1):null,be=ae(w,{[`${w}-status`]:l.value,[`${w}-not-a-wrapper`]:!R,[`${w}-rtl`]:r.value==="rtl"},t.class,v.value);if(!R&&l.value){const P=E.color;return s(f("span",_(_({},t),{},{class:be,style:E}),[f("span",{class:H.value,style:T.value},null),f("span",{style:{color:P},class:`${w}-status-text`},[de])]))}const Pe=Ze(R?`${w}-zoom`:"",{appear:!1});let W=c(c({},E),e.numberStyle);return ge&&!b.value&&(W=W||{},W.background=ge),s(f("span",_(_({},t),{},{class:be}),[R,f(Me,Pe,{default:()=>[Ve(f(Je,{prefixCls:e.scrollNumberPrefixCls,show:ue,class:Ne.value,count:m.value,title:qe,style:W,key:"scrollNumber"},{default:()=>[Te]}),[[Le,ue]])]}),He]))}}});te.install=function(e){return e.component(te.name,te),e.component(se.name,se),e};const C=N({__name:"Badge",setup(e){const a=e,o=he(),t=Ce(),n=g(()=>{const r={};return Object.keys(o).forEach(s=>{s.startsWith("on")&&(r[s]=o[s])}),r});return(r,s)=>(we(),ye(oe(te),ze(a,$e(n.value)),xe({default:ne(()=>[re(r.$slots,"default")]),_:2},[oe(t).count?{name:"count",fn:ne(()=>[re(r.$slots,"count")]),key:"0"}:void 0]),1040))}});C.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},slots:[{name:"count"},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Badge/Badge.vue"]};const A=N({__name:"BadgeRibbon",props:{color:{},placement:{},text:{}},setup(e){const a=e,o=he(),t=Ce(),n=g(()=>{const r={};return Object.keys(o).forEach(s=>{s.startsWith("on")&&(r[s]=o[s])}),r});return(r,s)=>(we(),ye(oe(se),ze(a,$e(n.value)),xe({default:ne(()=>[re(r.$slots,"default")]),_:2},[oe(t).text?{name:"text",fn:ne(()=>[re(r.$slots,"text")]),key:"0"}:void 0]),1040))}});A.__docgenInfo={exportName:"default",displayName:"BadgeRibbon",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"string"}},{name:"placement",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]}},{name:"text",required:!1,type:{name:"any"}}],slots:[{name:"text"},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Badge/BadgeRibbon.vue"]};C.install=e=>{e.component("CgBadge",C)};A.install=e=>{e.component("CgBadgeRibbon",A)};const{fn:sa}=__STORYBOOK_MODULE_TEST__,ia={title:"Components/Badge",component:C,tags:["autodocs"],argTypes:{count:{control:"number"},dot:{control:"boolean"},showZero:{control:"boolean"},overflowCount:{control:"number"},color:{control:"color"},size:{control:"select",options:["default","small"]},status:{control:"select",options:["success","processing","default","error","warning"]},text:{control:"text"},title:{control:"text"}},args:{count:5}},F={args:{},render:e=>({components:{Badge:C,Avatar:$},setup(){return{args:e}},template:`
      <Badge v-bind="args">
        <Avatar shape="square" :size="40" />
      </Badge>
    `})},j={render:()=>({components:{Badge:C,Space:x},template:`
      <Space size="large">
        <Badge count="5" />
        <Badge count="0" show-zero />
        <Badge count="25" />
        <Badge count="99+" />
        <Badge count="hot" />
      </Space>
    `}),parameters:{docs:{description:{story:"不包裹任何元素即是独立使用，可自定义样式展示。"}}}},Z={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge count="0" show-zero>
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"徽标可以包裹其他元素。"}}}},M={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge :count="99">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="100">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="99" :overflow-count="10">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="1000" :overflow-count="999">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99。"}}}},V={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge dot>
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge dot>
          <a href="#">链接</a>
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"不显示具体的数字，只显示一个小红点。"}}}},L={render:()=>({components:{Badge:C,Space:x},template:`
      <Space direction="vertical" style="width: 100%">
        <Badge status="success" />
        <Badge status="processing" />
        <Badge status="default" />
        <Badge status="error" />
        <Badge status="warning" />
        <br />
        <Badge status="success" text="成功" />
        <Badge status="processing" text="处理中" />
        <Badge status="default" text="默认" />
        <Badge status="error" text="错误" />
        <Badge status="warning" text="警告" />
      </Space>
    `}),parameters:{docs:{description:{story:"设置 status 属性可以展示不同的状态徽标。"}}}},U={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge :count="5" color="#f50">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#2db7f5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#87d068">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#108ee9">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"可以自定义徽标的颜色。"}}}},X={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge size="default" count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge size="small" count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"可以设置徽标的大小。"}}}},K={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <Space size="large">
        <Badge count="5" :offset="[10, 10]">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    `}),parameters:{docs:{description:{story:"可以设置徽标的位置偏移。"}}}},Y={render:()=>({components:{Badge:C,Avatar:$,Space:x},template:`
      <div>
        <h3 style="margin-bottom: 16px;">徽标组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Badge count="5">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge dot>
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge status="success" text="成功" />
            <Badge status="processing" text="处理中" />
            <Badge status="error" text="错误" />
          </Space>
          
          <Space size="large">
            <Badge :count="5" color="#f50">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge :count="5" color="#2db7f5">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge :count="5" color="#87d068">
              <Avatar shape="square" :size="40" />
            </Badge>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的徽标组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示徽标组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}},G={render:()=>({components:{BadgeRibbon:A,Card:ie},template:`
      <BadgeRibbon text="Ribbon">
        <Card title="推荐" size="small">
          <p>可以快速实现一个产品推荐的标记。</p>
        </Card>
      </BadgeRibbon>
    `}),parameters:{docs:{description:{story:"缎带徽标的基本用法。"}}}},J={render:()=>({components:{BadgeRibbon:A,Card:ie,Space:x},template:`
      <Space direction="vertical" size="large" >
        <BadgeRibbon text="Hippies" placement="start">
          <Card title="推荐" size="small" >
            <p>左上角的缎带样式。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" placement="end">
          <Card title="推荐" size="small"  >
            <p>右上角的缎带样式。</p>
          </Card>
        </BadgeRibbon>
      </Space>
    `}),parameters:{docs:{description:{story:"设置缎带的位置，start 表示左上角，end 表示右上角。"}}}},Q={render:()=>({components:{BadgeRibbon:A,Card:ie,Space:x},template:`
      <Space direction="vertical" size="large" style="width: 100%;">
        <BadgeRibbon text="Hippies" color="pink">
          <Card title="推荐" size="small"  >
            <p>粉色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="red">
          <Card title="推荐" size="small"  >
            <p>红色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="cyan">
          <Card title="推荐" size="small"  >
            <p>青色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="green">
          <Card title="推荐" size="small"  >
            <p>绿色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="purple">
          <Card title="推荐" size="small"  >
            <p>紫色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="volcano">
          <Card title="推荐" size="small"  >
            <p>火山色缎带。</p>
          </Card>
        </BadgeRibbon>
      </Space>
    `}),parameters:{docs:{description:{story:"我们提供多种预设色彩的缎带，你也可以自定义颜色。"}}}},k={render:()=>({components:{BadgeRibbon:A,Card:ie},template:`
      <BadgeRibbon color="red">
        <template #text>
          <span style="color: white; font-weight: bold;">🔥 HOT</span>
        </template>
        <Card title="推荐" size="small"  >
          <p>使用 slot 自定义缎带文本内容。</p>
        </Card>
      </BadgeRibbon>
    `}),parameters:{docs:{description:{story:"可以通过 text slot 自定义缎带的文本内容。"}}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Badge,
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">
        <Avatar shape="square" :size="40" />
      </Badge>
    \`
  })
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Space
    },
    template: \`
      <Space size="large">
        <Badge count="5" />
        <Badge count="0" show-zero />
        <Badge count="25" />
        <Badge count="99+" />
        <Badge count="hot" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '不包裹任何元素即是独立使用，可自定义样式展示。'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge count="0" show-zero>
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '徽标可以包裹其他元素。'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge :count="99">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="100">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="99" :overflow-count="10">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="1000" :overflow-count="999">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '超过 overflowCount 的会显示为 \${overflowCount}+，默认的 overflowCount 为 99。'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge dot>
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge dot>
          <a href="#">链接</a>
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '不显示具体的数字，只显示一个小红点。'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Space
    },
    template: \`
      <Space direction="vertical" style="width: 100%">
        <Badge status="success" />
        <Badge status="processing" />
        <Badge status="default" />
        <Badge status="error" />
        <Badge status="warning" />
        <br />
        <Badge status="success" text="成功" />
        <Badge status="processing" text="处理中" />
        <Badge status="default" text="默认" />
        <Badge status="error" text="错误" />
        <Badge status="warning" text="警告" />
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置 status 属性可以展示不同的状态徽标。'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge :count="5" color="#f50">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#2db7f5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#87d068">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge :count="5" color="#108ee9">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义徽标的颜色。'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge size="default" count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
        <Badge size="small" count="5">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置徽标的大小。'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <Space size="large">
        <Badge count="5" :offset="[10, 10]">
          <Avatar shape="square" :size="40" />
        </Badge>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以设置徽标的位置偏移。'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Avatar,
      Space
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">徽标组件主题展示</h3>
        <Space direction="vertical" size="large" style="width: 100%;">
          <Space size="large">
            <Badge count="5">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge dot>
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge status="success" text="成功" />
            <Badge status="processing" text="处理中" />
            <Badge status="error" text="错误" />
          </Space>
          
          <Space size="large">
            <Badge :count="5" color="#f50">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge :count="5" color="#2db7f5">
              <Avatar shape="square" :size="40" />
            </Badge>
            <Badge :count="5" color="#87d068">
              <Avatar shape="square" :size="40" />
            </Badge>
          </Space>
        </Space>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的徽标组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示徽标组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BadgeRibbon,
      Card
    },
    template: \`
      <BadgeRibbon text="Ribbon">
        <Card title="推荐" size="small">
          <p>可以快速实现一个产品推荐的标记。</p>
        </Card>
      </BadgeRibbon>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '缎带徽标的基本用法。'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BadgeRibbon,
      Card,
      Space
    },
    template: \`
      <Space direction="vertical" size="large" >
        <BadgeRibbon text="Hippies" placement="start">
          <Card title="推荐" size="small" >
            <p>左上角的缎带样式。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" placement="end">
          <Card title="推荐" size="small"  >
            <p>右上角的缎带样式。</p>
          </Card>
        </BadgeRibbon>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '设置缎带的位置，start 表示左上角，end 表示右上角。'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BadgeRibbon,
      Card,
      Space
    },
    template: \`
      <Space direction="vertical" size="large" style="width: 100%;">
        <BadgeRibbon text="Hippies" color="pink">
          <Card title="推荐" size="small"  >
            <p>粉色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="red">
          <Card title="推荐" size="small"  >
            <p>红色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="cyan">
          <Card title="推荐" size="small"  >
            <p>青色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="green">
          <Card title="推荐" size="small"  >
            <p>绿色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="purple">
          <Card title="推荐" size="small"  >
            <p>紫色缎带。</p>
          </Card>
        </BadgeRibbon>
        <BadgeRibbon text="Hippies" color="volcano">
          <Card title="推荐" size="small"  >
            <p>火山色缎带。</p>
          </Card>
        </BadgeRibbon>
      </Space>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '我们提供多种预设色彩的缎带，你也可以自定义颜色。'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BadgeRibbon,
      Card
    },
    template: \`
      <BadgeRibbon color="red">
        <template #text>
          <span style="color: white; font-weight: bold;">🔥 HOT</span>
        </template>
        <Card title="推荐" size="small"  >
          <p>使用 slot 自定义缎带文本内容。</p>
        </Card>
      </BadgeRibbon>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以通过 text slot 自定义缎带的文本内容。'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};const la=["Default","StandaloneBadge","WithContent","OverflowCount","Dot","Status","CustomColor","Size","Offset","ThemeShowcase","RibbonDefault","RibbonPlacement","RibbonColor","RibbonCustomText"];export{U as CustomColor,F as Default,V as Dot,K as Offset,M as OverflowCount,Q as RibbonColor,k as RibbonCustomText,G as RibbonDefault,J as RibbonPlacement,X as Size,j as StandaloneBadge,L as Status,Y as ThemeShowcase,Z as WithContent,la as __namedExportsOrder,ia as default};
