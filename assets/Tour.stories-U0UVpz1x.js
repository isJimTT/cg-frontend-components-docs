import{n as me,y as ke,w as J,o as Pe,c as x,_ as T,aA as P,aB as te,ay as ge,ax as I,d as A,a,b1 as z,e as f,g as N,F as oe,r as y,a4 as Se,b as ee,b7 as ne,s as Oe,az as Re,aJ as Ie,aW as Ne,Z as _e,b8 as se,G as Ae,H as je,I as He,a7 as L,N as Ee,u as Me,ae as Fe,af as ze,ag as Le,ah as We,ai as ie,v as ue,aj as De,ak as Ve,al as Ue,am as de,an as Xe,ao as Je}from"./iframe-CiolPNwv.js";import{T as Ze,t as Ge}from"./Trigger-D0k0f5w4.js";import{u as ce}from"./useMergedState-8OkYKI-g.js";import{u as pe}from"./useState-Ds4oJkA7.js";import{P as be}from"./PortalWrapper-ig5OaliN.js";import{i as qe}from"./initDefaultProps-CZpOG6Cc.js";import{B as H}from"./index-DWv55aqM.js";import{g as Ke,M as Qe,b as Ye}from"./placementArrow-Blz2ASAV.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./index-vtqL8OYL.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./roundedArrow-EYTrNAJt.js";function et(e){const t=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,{top:o,right:n,bottom:d,left:p}=e.getBoundingClientRect();return o>=0&&p>=0&&n<=t&&d<=r}function tt(e,t,r,o){const[n,d]=pe(void 0);me(()=>{const l=typeof e.value=="function"?e.value():e.value;d(l||null)},{flush:"post"});const[p,i]=pe(null),g=()=>{if(!t.value){i(null);return}if(n.value){!et(n.value)&&t.value&&n.value.scrollIntoView(o.value);const{left:l,top:u,width:v,height:C}=n.value.getBoundingClientRect(),m={left:l,top:u,width:v,height:C,radius:0};JSON.stringify(p.value)!==JSON.stringify(m)&&i(m)}else i(null)};return ke(()=>{J([t,n],()=>{g()},{flush:"post",immediate:!0}),window.addEventListener("resize",g)}),Pe(()=>{window.removeEventListener("resize",g)}),[x(()=>{var l,u;if(!p.value)return p.value;const v=((l=r.value)===null||l===void 0?void 0:l.offset)||6,C=((u=r.value)===null||u===void 0?void 0:u.radius)||2;return{left:p.value.left-v,top:p.value.top-v,width:p.value.width+v*2,height:p.value.height+v*2,radius:C}}),n]}const ot=()=>({arrow:P([Boolean,Object]),target:P([String,Function,Object]),title:P([String,Object]),description:P([String,Object]),placement:ge(),mask:P([Object,Boolean],!0),className:{type:String},style:te(),scrollIntoViewOptions:P([Boolean,Object])}),re=()=>T(T({},ot()),{prefixCls:{type:String},total:{type:Number},current:{type:Number},onClose:I(),onFinish:I(),renderPanel:I(),onPrev:I(),onNext:I()}),nt=A({name:"DefaultPanel",inheritAttrs:!1,props:re(),setup(e,t){let{attrs:r}=t;return()=>{const{prefixCls:o,current:n,total:d,title:p,description:i,onClose:g,onPrev:s,onNext:l,onFinish:u}=e;return a("div",f(f({},r),{},{class:N(`${o}-content`,r.class)}),[a("div",{class:`${o}-inner`},[a("button",{type:"button",onClick:g,"aria-label":"Close",class:`${o}-close`},[a("span",{class:`${o}-close-x`},[z("×")])]),a("div",{class:`${o}-header`},[a("div",{class:`${o}-title`},[p])]),a("div",{class:`${o}-description`},[i]),a("div",{class:`${o}-footer`},[a("div",{class:`${o}-sliders`},[d>1?[...Array.from({length:d}).keys()].map((v,C)=>a("span",{key:v,class:C===n?"active":""},null)):null]),a("div",{class:`${o}-buttons`},[n!==0?a("button",{class:`${o}-prev-btn`,onClick:s},[z("Prev")]):null,n===d-1?a("button",{class:`${o}-finish-btn`,onClick:u},[z("Finish")]):a("button",{class:`${o}-next-btn`,onClick:l},[z("Next")])])])])])}}}),rt=A({name:"TourStep",inheritAttrs:!1,props:re(),setup(e,t){let{attrs:r}=t;return()=>{const{current:o,renderPanel:n}=e;return a(oe,null,[typeof n=="function"?n(T(T({},r),e),o):a(nt,f(f({},r),e),null)])}}});let fe=0;const at=Se();function lt(){let e;return at?(e=fe,fe+=1):e="TEST_OR_SSR",e}function st(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y("");const t=`vc_unique_${lt()}`;return e.value||t}const W={fill:"transparent","pointer-events":"auto"},it=A({name:"TourMask",props:{prefixCls:{type:String},pos:te(),rootClassName:{type:String},showMask:ee(),fill:{type:String,default:"rgba(0,0,0,0.5)"},open:ee(),animated:P([Boolean,Object]),zIndex:{type:Number}},setup(e,t){let{attrs:r}=t;const o=st();return()=>{const{prefixCls:n,open:d,rootClassName:p,pos:i,showMask:g,fill:s,animated:l,zIndex:u}=e,v=`${n}-mask-${o}`,C=typeof l=="object"?l?.placeholder:l;return a(be,{visible:d,autoLock:!0},{default:()=>d&&a("div",f(f({},r),{},{class:N(`${n}-mask`,p,r.class),style:[{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:u,pointerEvents:"none"},r.style]}),[g?a("svg",{style:{width:"100%",height:"100%"}},[a("defs",null,[a("mask",{id:v},[a("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"},null),i&&a("rect",{x:i.left,y:i.top,rx:i.radius,width:i.width,height:i.height,fill:"black",class:C?`${n}-placeholder-animated`:""},null)])]),a("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:s,mask:`url(#${v})`},null),i&&a(oe,null,[a("rect",f(f({},W),{},{x:"0",y:"0",width:"100%",height:i.top}),null),a("rect",f(f({},W),{},{x:"0",y:"0",width:i.left,height:"100%"}),null),a("rect",f(f({},W),{},{x:"0",y:i.top+i.height,width:"100%",height:`calc(100vh - ${i.top+i.height}px)`}),null),a("rect",f(f({},W),{},{x:i.left+i.width,y:"0",width:`calc(100vw - ${i.left+i.width}px)`,height:"100%"}),null)])]):null])})}}}),ut=[0,0],ve={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function he(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const t={};return Object.keys(ve).forEach(r=>{t[r]=T(T({},ve[r]),{autoArrow:e,targetOffset:ut})}),t}he();var dt=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Y={left:"50%",top:"50%",width:"1px",height:"1px"},ye=()=>{const{builtinPlacements:e,popupAlign:t}=Ge();return{builtinPlacements:e,popupAlign:t,steps:Re(),open:ee(),defaultCurrent:{type:Number},current:{type:Number},onChange:I(),onClose:I(),onFinish:I(),mask:P([Boolean,Object],!0),arrow:P([Boolean,Object],!0),rootClassName:{type:String},placement:ge("bottom"),prefixCls:{type:String,default:"rc-tour"},renderPanel:I(),gap:te(),animated:P([Boolean,Object]),scrollIntoViewOptions:P([Boolean,Object],!0),zIndex:{type:Number,default:1001}}},ct=A({name:"Tour",inheritAttrs:!1,props:qe(ye(),{}),setup(e){const{defaultCurrent:t,placement:r,mask:o,scrollIntoViewOptions:n,open:d,gap:p,arrow:i}=ne(e),g=y(),[s,l]=ce(0,{value:x(()=>e.current),defaultValue:t.value}),[u,v]=ce(void 0,{value:x(()=>e.open),postState:c=>s.value<0||s.value>=e.steps.length?!1:c??!0}),C=Oe(u.value);me(()=>{u.value&&!C.value&&l(0),C.value=u.value});const m=x(()=>e.steps[s.value]||{}),_=x(()=>{var c;return(c=m.value.placement)!==null&&c!==void 0?c:r.value}),h=x(()=>{var c;return u.value&&((c=m.value.mask)!==null&&c!==void 0?c:o.value)}),w=x(()=>{var c;return(c=m.value.scrollIntoViewOptions)!==null&&c!==void 0?c:n.value}),[$,B]=tt(x(()=>m.value.target),d,p,w),k=x(()=>B.value?typeof m.value.arrow>"u"?i.value:m.value.arrow:!1),S=x(()=>typeof k.value=="object"?k.value.pointAtCenter:!1);J(S,()=>{var c;(c=g.value)===null||c===void 0||c.forcePopupAlign()}),J(s,()=>{var c;(c=g.value)===null||c===void 0||c.forcePopupAlign()});const O=c=>{var b;l(c),(b=e.onChange)===null||b===void 0||b.call(e,c)};return()=>{var c;const{prefixCls:b,steps:R,onClose:Z,onFinish:G,rootClassName:q,renderPanel:Ce,animated:xe,zIndex:ae}=e,K=dt(e,["prefixCls","steps","onClose","onFinish","rootClassName","renderPanel","animated","zIndex"]);if(B.value===void 0)return null;const le=()=>{v(!1),Z?.(s.value)},we=typeof h.value=="boolean"?h.value:!!h.value,j=typeof h.value=="boolean"?void 0:h.value,Te=()=>B.value||document.body,$e=()=>a(rt,f({arrow:k.value,key:"content",prefixCls:b,total:R.length,renderPanel:Ce,onPrev:()=>{O(s.value-1)},onNext:()=>{O(s.value+1)},onClose:le,current:s.value,onFinish:()=>{le(),G?.()}},m.value),null),Be=x(()=>{const F=$.value||Y,Q={};return Object.keys(F).forEach(M=>{typeof F[M]=="number"?Q[M]=`${F[M]}px`:Q[M]=F[M]}),Q});return u.value?a(oe,null,[a(it,{zIndex:ae,prefixCls:b,pos:$.value,showMask:we,style:j?.style,fill:j?.color,open:u.value,animated:xe,rootClassName:q},null),a(Ze,f(f({},K),{},{arrow:!!K.arrow,builtinPlacements:m.value.target?(c=K.builtinPlacements)!==null&&c!==void 0?c:he(S.value):void 0,ref:g,popupStyle:m.value.target?m.value.style:T(T({},m.value.style),{position:"fixed",left:Y.left,top:Y.top,transform:"translate(-50%, -50%)"}),popupPlacement:_.value,popupVisible:u.value,popupClassName:N(q,m.value.className),prefixCls:b,popup:$e,forceRender:!1,destroyPopupOnHide:!0,zIndex:ae,mask:!1,getTriggerDOMNode:Te}),{default:()=>[a(be,{visible:u.value,autoLock:!0},{default:()=>[a("div",{class:N(q,`${b}-target-placeholder`),style:T(T({},Be.value),{position:"fixed",pointerEvents:"none"})},null)]})]})]):null}}}),pt=()=>T(T({},ye()),{steps:{type:Array},prefixCls:{type:String},current:{type:Number},type:{type:String},"onUpdate:current":Function}),ft=()=>T(T({},re()),{cover:{type:Object},nextButtonProps:{type:Object},prevButtonProps:{type:Object},current:{type:Number},type:{type:String}}),vt=A({name:"ATourPanel",inheritAttrs:!1,props:ft(),setup(e,t){let{attrs:r,slots:o}=t;const{current:n,total:d}=ne(e),p=x(()=>n.value===d.value-1),i=s=>{var l;const u=e.prevButtonProps;(l=e.onPrev)===null||l===void 0||l.call(e,s),typeof u?.onClick=="function"&&u?.onClick()},g=s=>{var l,u;const v=e.nextButtonProps;p.value?(l=e.onFinish)===null||l===void 0||l.call(e,s):(u=e.onNext)===null||u===void 0||u.call(e,s),typeof v?.onClick=="function"&&v?.onClick()};return()=>{const{prefixCls:s,title:l,onClose:u,cover:v,description:C,type:m,arrow:_}=e,h=e.prevButtonProps,w=e.nextButtonProps;let $;l&&($=a("div",{class:`${s}-header`},[a("div",{class:`${s}-title`},[l])]));let B;C&&(B=a("div",{class:`${s}-description`},[C]));let k;v&&(k=a("div",{class:`${s}-cover`},[v]));let S;o.indicatorsRender?S=o.indicatorsRender({current:n.value,total:d}):S=[...Array.from({length:d.value}).keys()].map((b,R)=>a("span",{key:b,class:N(R===n.value&&`${s}-indicator-active`,`${s}-indicator`)},null));const O=m==="primary"?"default":"primary",c={type:"default",ghost:m==="primary"};return a(Ne,{componentName:"Tour",defaultLocale:Ie.Tour},{default:b=>{var R;return a("div",f(f({},r),{},{class:N(m==="primary"?`${s}-primary`:"",r.class,`${s}-content`)}),[_&&a("div",{class:`${s}-arrow`,key:"arrow"},null),a("div",{class:`${s}-inner`},[a(_e,{class:`${s}-close`,onClick:u},null),k,$,B,a("div",{class:`${s}-footer`},[d.value>1&&a("div",{class:`${s}-indicators`},[S]),a("div",{class:`${s}-buttons`},[n.value!==0?a(H,f(f(f({},c),h),{},{onClick:i,size:"small",class:N(`${s}-prev-btn`,h?.className)}),{default:()=>[se(h?.children)?h.children():(R=h?.children)!==null&&R!==void 0?R:b.Previous]}):null,a(H,f(f({type:O},w),{},{onClick:g,size:"small",class:N(`${s}-next-btn`,w?.className)}),{default:()=>[se(w?.children)?w?.children():p.value?b.Finish:b.Next]})])])])])}})}}}),mt=e=>{let{defaultType:t,steps:r,current:o,defaultCurrent:n}=e;const d=y(n?.value),p=x(()=>o?.value);J(p,l=>{d.value=l??n?.value},{immediate:!0});const i=l=>{d.value=l},g=x(()=>{var l,u;return typeof d.value=="number"?r&&((u=(l=r.value)===null||l===void 0?void 0:l[d.value])===null||u===void 0?void 0:u.type):t?.value});return{currentMergedType:x(()=>{var l;return(l=g.value)!==null&&l!==void 0?l:t?.value}),updateInnerCurrent:i}},gt=e=>{const{componentCls:t,lineHeight:r,padding:o,paddingXS:n,borderRadius:d,borderRadiusXS:p,colorPrimary:i,colorText:g,colorFill:s,indicatorHeight:l,indicatorWidth:u,boxShadowTertiary:v,tourZIndexPopup:C,fontSize:m,colorBgContainer:_,fontWeightStrong:h,marginXS:w,colorTextLightSolid:$,tourBorderRadius:B,colorWhite:k,colorBgTextHover:S,tourCloseSize:O,motionDurationSlow:c,antCls:b}=e;return[{[t]:T(T({},He(e)),{color:g,position:"absolute",zIndex:C,display:"block",visibility:"visible",fontSize:m,lineHeight:r,width:520,"--antd-arrow-background-color":_,"&-pure":{maxWidth:"100%",position:"relative"},[`&${t}-hidden`]:{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:B,boxShadow:v,position:"relative",backgroundColor:_,border:"none",backgroundClip:"padding-box",[`${t}-close`]:{position:"absolute",top:o,insetInlineEnd:o,color:e.colorIcon,outline:"none",width:O,height:O,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${t}-cover`]:{textAlign:"center",padding:`${o+O+n}px ${o}px 0`,img:{width:"100%"}},[`${t}-header`]:{padding:`${o}px ${o}px ${n}px`,[`${t}-title`]:{lineHeight:r,fontSize:m,fontWeight:h}},[`${t}-description`]:{padding:`0 ${o}px`,lineHeight:r,wordWrap:"break-word"},[`${t}-footer`]:{padding:`${n}px ${o}px ${o}px`,textAlign:"end",borderRadius:`0 0 ${p}px ${p}px`,display:"flex",[`${t}-indicators`]:{display:"inline-block",[`${t}-indicator`]:{width:u,height:l,display:"inline-block",borderRadius:"50%",background:s,"&:not(:last-child)":{marginInlineEnd:l},"&-active":{background:i}}},[`${t}-buttons`]:{marginInlineStart:"auto",[`${b}-btn`]:{marginInlineStart:w}}}},[`${t}-primary, &${t}-primary`]:{"--antd-arrow-background-color":i,[`${t}-inner`]:{color:$,textAlign:"start",textDecoration:"none",backgroundColor:i,borderRadius:d,boxShadow:v,[`${t}-close`]:{color:$},[`${t}-indicators`]:{[`${t}-indicator`]:{background:new L($).setAlpha(.15).toRgbString(),"&-active":{background:$}}},[`${t}-prev-btn`]:{color:$,borderColor:new L($).setAlpha(.15).toRgbString(),backgroundColor:i,"&:hover":{backgroundColor:new L($).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${t}-next-btn`]:{color:i,borderColor:"transparent",background:k,"&:hover":{background:new L(S).onBackground(k).toRgbString()}}}}}),[`${t}-mask`]:{[`${t}-placeholder-animated`]:{transition:`all ${c}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:Math.min(B,Qe)}}},Ke(e,{colorBg:"var(--antd-arrow-background-color)",contentRadius:B,limitVerticalRadius:!0})]},bt=Ae("Tour",e=>{const{borderRadiusLG:t,fontSize:r,lineHeight:o}=e,n=je(e,{tourZIndexPopup:e.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:t,tourCloseSize:r*o});return[gt(n)]});var ht=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const yt=A({name:"ATour",inheritAttrs:!1,props:pt(),setup(e,t){let{attrs:r,emit:o,slots:n}=t;const{current:d,type:p,steps:i,defaultCurrent:g}=ne(e),{prefixCls:s,direction:l}=Me("tour",e),[u,v]=bt(s),{currentMergedType:C,updateInnerCurrent:m}=mt({defaultType:p,steps:i,current:d,defaultCurrent:g});return()=>{const{steps:_,current:h,type:w,rootClassName:$}=e,B=ht(e,["steps","current","type","rootClassName"]),k=N({[`${s.value}-primary`]:C.value==="primary",[`${s.value}-rtl`]:l.value==="rtl"},v.value,$),S=(b,R)=>a(vt,f(f({},b),{},{type:w,current:R}),{indicatorsRender:n.indicatorsRender}),O=b=>{m(b),o("update:current",b),o("change",b)},c=x(()=>Ye({arrowPointAtCenter:!0,autoAdjustOverflow:!0}));return u(a(ct,f(f(f({},r),B),{},{rootClassName:k,prefixCls:s.value,current:h,defaultCurrent:e.defaultCurrent,animated:!0,renderPanel:S,onChange:O,steps:_,builtinPlacements:c.value}),null))}}}),Ct=Ee(yt),E=A({__name:"Tour",setup(e){const t=e,r=Fe(),o=ze(),n=x(()=>{const d={};return Object.keys(r).filter(p=>p.startsWith("on")).forEach(p=>{d[p]=r[p]}),d});return(d,p)=>(Ue(),Le(ue(Ct),De(t,Ve(n.value)),We({default:ie(()=>[de(d.$slots,"default")]),_:2},[ue(o).indicatorsRender?{name:"indicatorsRender",fn:ie(i=>[de(d.$slots,"indicatorsRender",Xe(Je(i)))]),key:"0"}:void 0]),1040))}});E.__docgenInfo={exportName:"default",displayName:"Tour",description:"",tags:{},slots:[{name:"indicatorsRender",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Tour/Tour.vue"]};const Vt={title:"Components/Tour",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{arrow:{control:"boolean",description:"是否显示箭头"},mask:{control:"boolean",description:"是否启用蒙层"},placement:{control:"select",options:["left","right","top","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],description:"引导卡片相对于目标元素的位置"},type:{control:"select",options:["default","primary"],description:"类型"}}},D={render:e=>({components:{CgTour:E,AButton:H},setup(){const t=y(null),r=y(null),o=y(null),n=y(null),d=y(!1),p=y([{title:"上传文件",description:"把你的文件放在这里",target:()=>t.value&&t.value.$el},{title:"保存",description:"保存你的更改",target:()=>r.value},{title:"其他操作",description:"点击查看更多操作",target:()=>o.value},{title:"最后一步",description:"点击完成操作",target:()=>n.value}]);return{refButton:t,refHeader:r,refContent:o,refFooter:n,open:d,steps:p,showTour:()=>{d.value=!0},onClose:()=>{d.value=!1},args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; border: 1px solid #f0f0f0; border-radius: 8px; width: 500px;">
        <div ref="refHeader" style="padding: 16px; background: #fafafa; border-radius: 4px;">Header</div>
        <div ref="refContent" style="padding: 16px; background: #fafafa; border-radius: 4px;">Content</div>
        <div ref="refFooter" style="padding: 16px; background: #fafafa; border-radius: 4px;">Footer</div>
        <a-button ref="refButton" type="primary" @click="showTour">开始导览</a-button>
        
        <CgTour
          v-bind="args"
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    `}),args:{arrow:!0,mask:!0,type:"primary"}},V={render:()=>({components:{CgTour:E,AButton:H},setup(){const e=y(null),t=y(!1),r=y([{title:"左侧显示",description:"这是左侧显示的引导",target:()=>e.value&&e.value.$el,placement:"left"}]);return{refButton:e,open:t,steps:r,showTour:()=>{t.value=!0},onClose:()=>{t.value=!1}}},template:`
      <div style="display: flex; justify-content: center; padding: 24px;">
        <a-button ref="refButton" type="primary" @click="showTour">自定义位置</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    `})},U={render:()=>({components:{CgTour:E,AButton:H},setup(){const e=y(null),t=y(!1),r=y([{title:"无蒙层引导",description:"这是没有蒙层的引导示例",target:()=>e.value&&e.value.$el,mask:!1}]);return{refButton:e,open:t,steps:r,showTour:()=>{t.value=!0},onClose:()=>{t.value=!1}}},template:`
      <div style="display: flex; justify-content: center; padding: 24px;">
        <a-button ref="refButton" type="primary" @click="showTour">无蒙层引导</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    `})},X={render:()=>({components:{CgTour:E,AButton:H},setup(){const e=y(null),t=y(null),r=y(null),o=y(!1),n=y([{title:"第一步",description:"这是第一步",target:()=>e.value&&e.value.$el},{title:"第二步",description:"这是第二步",target:()=>t.value},{title:"第三步",description:"这是第三步",target:()=>r.value}]);return{refButton:e,refHeader:t,refContent:r,open:o,steps:n,indicatorsRender:(g,s)=>`${g} / ${s}`,showTour:()=>{o.value=!0},onClose:()=>{o.value=!1}}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; border: 1px solid #f0f0f0; border-radius: 8px; width: 500px;">
        <div ref="refHeader" style="padding: 16px; background: #fafafa; border-radius: 4px;">Header</div>
        <div ref="refContent" style="padding: 16px; background: #fafafa; border-radius: 4px;">Content</div>
        <a-button ref="refButton" type="primary" @click="showTour">自定义指示器</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          :indicators-render="indicatorsRender"
          @close="onClose"
        />
      </div>
    `})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgTour: Tour,
      AButton: Button
    },
    setup() {
      const refButton = ref<any>(null);
      const refHeader = ref<HTMLElement | null>(null);
      const refContent = ref<HTMLElement | null>(null);
      const refFooter = ref<HTMLElement | null>(null);
      const open = ref<boolean>(false);
      const steps = ref([{
        title: '上传文件',
        description: '把你的文件放在这里',
        target: () => refButton.value && refButton.value.$el
      }, {
        title: '保存',
        description: '保存你的更改',
        target: () => refHeader.value
      }, {
        title: '其他操作',
        description: '点击查看更多操作',
        target: () => refContent.value
      }, {
        title: '最后一步',
        description: '点击完成操作',
        target: () => refFooter.value
      }]);
      const showTour = () => {
        open.value = true;
      };
      const onClose = () => {
        open.value = false;
      };
      return {
        refButton,
        refHeader,
        refContent,
        refFooter,
        open,
        steps,
        showTour,
        onClose,
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; border: 1px solid #f0f0f0; border-radius: 8px; width: 500px;">
        <div ref="refHeader" style="padding: 16px; background: #fafafa; border-radius: 4px;">Header</div>
        <div ref="refContent" style="padding: 16px; background: #fafafa; border-radius: 4px;">Content</div>
        <div ref="refFooter" style="padding: 16px; background: #fafafa; border-radius: 4px;">Footer</div>
        <a-button ref="refButton" type="primary" @click="showTour">开始导览</a-button>
        
        <CgTour
          v-bind="args"
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    \`
  }),
  args: {
    arrow: true,
    mask: true,
    type: 'primary'
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTour: Tour,
      AButton: Button
    },
    setup() {
      const refButton = ref<any>(null);
      const open = ref<boolean>(false);
      const steps = ref([{
        title: '左侧显示',
        description: '这是左侧显示的引导',
        target: () => refButton.value && refButton.value.$el,
        placement: 'left'
      }]);
      const showTour = () => {
        open.value = true;
      };
      const onClose = () => {
        open.value = false;
      };
      return {
        refButton,
        open,
        steps,
        showTour,
        onClose
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 24px;">
        <a-button ref="refButton" type="primary" @click="showTour">自定义位置</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTour: Tour,
      AButton: Button
    },
    setup() {
      const refButton = ref<any>(null);
      const open = ref<boolean>(false);
      const steps = ref([{
        title: '无蒙层引导',
        description: '这是没有蒙层的引导示例',
        target: () => refButton.value && refButton.value.$el,
        mask: false
      }]);
      const showTour = () => {
        open.value = true;
      };
      const onClose = () => {
        open.value = false;
      };
      return {
        refButton,
        open,
        steps,
        showTour,
        onClose
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; padding: 24px;">
        <a-button ref="refButton" type="primary" @click="showTour">无蒙层引导</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          @close="onClose"
        />
      </div>
    \`
  })
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTour: Tour,
      AButton: Button
    },
    setup() {
      const refButton = ref<any>(null);
      const refHeader = ref<HTMLElement | null>(null);
      const refContent = ref<HTMLElement | null>(null);
      const open = ref<boolean>(false);
      const steps = ref([{
        title: '第一步',
        description: '这是第一步',
        target: () => refButton.value && refButton.value.$el
      }, {
        title: '第二步',
        description: '这是第二步',
        target: () => refHeader.value
      }, {
        title: '第三步',
        description: '这是第三步',
        target: () => refContent.value
      }]);
      const indicatorsRender = (current: number, total: number) => {
        return \`\${current} / \${total}\`;
      };
      const showTour = () => {
        open.value = true;
      };
      const onClose = () => {
        open.value = false;
      };
      return {
        refButton,
        refHeader,
        refContent,
        open,
        steps,
        indicatorsRender,
        showTour,
        onClose
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; border: 1px solid #f0f0f0; border-radius: 8px; width: 500px;">
        <div ref="refHeader" style="padding: 16px; background: #fafafa; border-radius: 4px;">Header</div>
        <div ref="refContent" style="padding: 16px; background: #fafafa; border-radius: 4px;">Content</div>
        <a-button ref="refButton" type="primary" @click="showTour">自定义指示器</a-button>
        
        <CgTour
          v-model:open="open"
          :steps="steps"
          :indicators-render="indicatorsRender"
          @close="onClose"
        />
      </div>
    \`
  })
}`,...X.parameters?.docs?.source}}};const Ut=["Basic","WithCustomPlacement","WithoutMask","WithCustomIndicators"];export{D as Basic,X as WithCustomIndicators,V as WithCustomPlacement,U as WithoutMask,Ut as __namedExportsOrder,Vt as default};
