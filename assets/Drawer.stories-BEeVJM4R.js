import{_ as M,aB as j,ax as Me,az as Ee,P as c,d as re,s as O,y as $e,ab as ne,w as V,A as Oe,g as de,a as u,a1 as ye,a2 as be,a3 as ge,e as P,r as N,G as Ve,H as We,N as Ae,c as _,l as Le,u as He,a0 as Ce,O as De,ad as ue,Z as Re,p as Ye,ae as Ue,af as Xe,ag as Ke,ai as L,aj as Ge,ak as qe,v as Ze,al as Je,am as H,an as X,ao as K}from"./iframe-CiolPNwv.js";import{K as Qe}from"./KeyCode-D63Tfrq7.js";import{o as Pe}from"./omit-BBXwSgK8.js";import{i as _e}from"./initDefaultProps-CZpOG6Cc.js";import{P as et}from"./PortalWrapper-ig5OaliN.js";import{d as tt}from"./devWarning-MTSIIkhh.js";import{N as ot}from"./Compact-DDa3__kb.js";import{i as Se}from"./isNumeric-DjvBa-1E.js";import{B as E}from"./index-DWv55aqM.js";import{S as R}from"./index-C9_4AhMb.js";import"./raf-Deuc0E8-.js";import"./createContext-BoBCVfLB.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./index-vtqL8OYL.js";import"./isVisible-BHYmLg1T.js";import"./useState-Ds4oJkA7.js";import"./compact-item-X_Nkrb5h.js";import"./useFlexGapSupport-CPj-DJgt.js";const Ne=()=>({prefixCls:String,width:c.oneOfType([c.string,c.number]),height:c.oneOfType([c.string,c.number]),style:{type:Object,default:void 0},class:String,rootClassName:String,rootStyle:j(),placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:Ee(),autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},motion:Me(),maskMotion:j()}),nt=()=>M(M({},Ne()),{forceRender:{type:Boolean,default:void 0},getContainer:c.oneOfType([c.string,c.func,c.object,c.looseBool])}),rt=()=>M(M({},Ne()),{getContainer:Function,getOpenCount:Function,scrollLocker:c.any,inline:Boolean});function at(e){return Array.isArray(e)?e:[e]}const lt={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};Object.keys(lt).filter(e=>{if(typeof document>"u")return!1;const o=document.getElementsByTagName("html")[0];return e in(o?o.style:{})})[0];const st=!(typeof window<"u"&&window.document&&window.document.createElement);var it=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ke=re({compatConfig:{MODE:3},inheritAttrs:!1,props:rt(),emits:["close","handleClick","change"],setup(e,o){let{emit:r,slots:t}=o;const a=O(),d=O(),m=O(),C=O(),D=O();let w=[];`${Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)}`,$e(()=>{ne(()=>{var l;const{open:i,getContainer:f,showMask:k,autofocus:h}=e,v=f?.();z(e),i&&(v&&(v.parentNode,document.body),ne(()=>{h&&b()}),k&&((l=e.scrollLocker)===null||l===void 0||l.lock()))})}),V(()=>e.level,()=>{z(e)},{flush:"post"}),V(()=>e.open,()=>{const{open:l,getContainer:i,scrollLocker:f,showMask:k,autofocus:h}=e,v=i?.();v&&(v.parentNode,document.body),l?(h&&b(),k&&f?.lock()):f?.unLock()},{flush:"post"}),Oe(()=>{var l;const{open:i}=e;i&&(document.body.style.touchAction=""),(l=e.scrollLocker)===null||l===void 0||l.unLock()}),V(()=>e.placement,l=>{l&&(D.value=null)});const b=()=>{var l,i;(i=(l=d.value)===null||l===void 0?void 0:l.focus)===null||i===void 0||i.call(l)},y=l=>{r("close",l)},g=l=>{l.keyCode===Qe.ESC&&(l.stopPropagation(),y(l))},S=()=>{const{open:l,afterVisibleChange:i}=e;i&&i(!!l)},z=l=>{let{level:i,getContainer:f}=l;if(st)return;const k=f?.(),h=k?k.parentNode:null;w=[],i==="all"?(h?Array.prototype.slice.call(h.children):[]).forEach(B=>{B.nodeName!=="SCRIPT"&&B.nodeName!=="STYLE"&&B.nodeName!=="LINK"&&B!==k&&w.push(B)}):i&&at(i).forEach(v=>{document.querySelectorAll(v).forEach(B=>{w.push(B)})})},I=l=>{r("handleClick",l)},F=O(!1);return V(d,()=>{ne(()=>{F.value=!0})}),()=>{var l,i;const{width:f,height:k,open:h,prefixCls:v,placement:B,level:W,levelMove:A,ease:me,duration:fe,getContainer:ve,onChange:we,afterVisibleChange:he,showMask:Y,maskClosable:ae,maskStyle:le,keyboard:se,getOpenCount:n,scrollLocker:s,contentWrapperStyle:p,style:x,class:T,rootClassName:ie,rootStyle:ce,maskMotion:ze,motion:pe,inline:Fe}=e,Ie=it(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class","rootClassName","rootStyle","maskMotion","motion","inline"]),U=h&&F.value,Te=de(v,{[`${v}-${B}`]:!0,[`${v}-open`]:U,[`${v}-inline`]:Fe,"no-mask":!Y,[ie]:!0}),je=typeof pe=="function"?pe(B):pe;return u("div",P(P({},Pe(Ie,["autofocus"])),{},{tabindex:-1,class:Te,style:ce,ref:d,onKeydown:U&&se?g:void 0}),[u(ye,ze,{default:()=>[Y&&be(u("div",{class:`${v}-mask`,onClick:ae?y:void 0,style:le,ref:m},null),[[ge,U]])]}),u(ye,P(P({},je),{},{onAfterEnter:S,onAfterLeave:S}),{default:()=>[be(u("div",{class:`${v}-content-wrapper`,style:[p],ref:a},[u("div",{class:[`${v}-content`,T],style:x,ref:D},[(l=t.default)===null||l===void 0?void 0:l.call(t)]),t.handler?u("div",{onClick:I,ref:C},[(i=t.handler)===null||i===void 0?void 0:i.call(t)]):null]),[[ge,U]])]})])}}});var Be=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ct=re({compatConfig:{MODE:3},inheritAttrs:!1,props:_e(nt(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:()=>{},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],setup(e,o){let{emit:r,slots:t}=o;const a=N(null),d=C=>{r("handleClick",C)},m=C=>{r("close",C)};return()=>{const{getContainer:C,wrapperClassName:D,rootClassName:w,rootStyle:b,forceRender:y}=e,g=Be(e,["getContainer","wrapperClassName","rootClassName","rootStyle","forceRender"]);let S=null;if(!C)return u(ke,P(P({},g),{},{rootClassName:w,rootStyle:b,open:e.open,onClose:m,onHandleClick:d,inline:!0}),t);const z=!!t.handler||y;return(z||e.open||a.value)&&(S=u(et,{autoLock:!0,visible:e.open,forceRender:z,getContainer:C,wrapperClassName:D},{default:I=>{var{visible:F,afterClose:l}=I,i=Be(I,["visible","afterClose"]);return u(ke,P(P(P({ref:a},g),i),{},{rootClassName:w,rootStyle:b,open:F!==void 0?F:e.open,afterVisibleChange:l!==void 0?l:e.afterVisibleChange,onClose:m,onHandleClick:d}),t)}})),S}}}),pt=e=>{const{componentCls:o,motionDurationSlow:r}=e,t={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${r}`}}};return{[o]:{[`${o}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${r}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${o}-panel-motion`]:{"&-left":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}},ut=e=>{const{componentCls:o,zIndexPopup:r,colorBgMask:t,colorBgElevated:a,motionDurationSlow:d,motionDurationMid:m,padding:C,paddingLG:D,fontSizeLG:w,lineHeightLG:b,lineWidth:y,lineType:g,colorSplit:S,marginSM:z,colorIcon:I,colorIconHover:F,colorText:l,fontWeightStrong:i,drawerFooterPaddingVertical:f,drawerFooterPaddingHorizontal:k}=e,h=`${o}-content-wrapper`;return{[o]:{position:"fixed",inset:0,zIndex:r,pointerEvents:"none","&-pure":{position:"relative",background:a,[`&${o}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${o}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${o}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${o}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${o}-mask`]:{position:"absolute",inset:0,zIndex:r,background:t,pointerEvents:"auto"},[h]:{position:"absolute",zIndex:r,transition:`all ${d}`,"&-hidden":{display:"none"}},[`&-left > ${h}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${h}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${h}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${h}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${o}-content`]:{width:"100%",height:"100%",overflow:"auto",background:a,pointerEvents:"auto"},[`${o}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${o}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${C}px ${D}px`,fontSize:w,lineHeight:b,borderBottom:`${y}px ${g} ${S}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${o}-extra`]:{flex:"none"},[`${o}-close`]:{display:"inline-block",marginInlineEnd:z,color:I,fontWeight:i,fontSize:w,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${m}`,textRendering:"auto","&:focus, &:hover":{color:F,textDecoration:"none"}},[`${o}-title`]:{flex:1,margin:0,color:l,fontWeight:e.fontWeightStrong,fontSize:w,lineHeight:b},[`${o}-body`]:{flex:1,minWidth:0,minHeight:0,padding:D,overflow:"auto"},[`${o}-footer`]:{flexShrink:0,padding:`${f}px ${k}px`,borderTop:`${y}px ${g} ${S}`},"&-rtl":{direction:"rtl"}}}},dt=Ve("Drawer",e=>{const o=We(e,{drawerFooterPaddingVertical:e.paddingXS,drawerFooterPaddingHorizontal:e.padding});return[ut(o),pt(o)]},e=>({zIndexPopup:e.zIndexPopupBase}));var mt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ft=["top","right","bottom","left"],xe={distance:180},vt=()=>({autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:c.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:{type:[String,Function,Boolean,Object],default:void 0},maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:j(),rootClassName:String,rootStyle:j(),size:{type:String},drawerStyle:j(),headerStyle:j(),bodyStyle:j(),contentWrapperStyle:{type:Object,default:void 0},title:c.any,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},width:c.oneOfType([c.string,c.number]),height:c.oneOfType([c.string,c.number]),zIndex:Number,prefixCls:String,push:c.oneOfType([c.looseBool,{type:Object}]),placement:c.oneOf(ft),keyboard:{type:Boolean,default:void 0},extra:c.any,footer:c.any,footerStyle:j(),level:c.any,levelMove:{type:[Number,Array,Function]},handle:c.any,afterVisibleChange:Function,onAfterVisibleChange:Function,onAfterOpenChange:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onClose:Function}),wt=re({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:_e(vt(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:xe}),slots:Object,setup(e,o){let{emit:r,slots:t,attrs:a}=o;const d=O(!1),m=O(!1),C=O(null),D=O(!1),w=O(!1),b=_(()=>{var n;return(n=e.open)!==null&&n!==void 0?n:e.visible});V(b,()=>{b.value?D.value=!0:w.value=!1},{immediate:!0}),V([b,D],()=>{b.value&&D.value&&(w.value=!0)},{immediate:!0});const y=Le("parentDrawerOpts",null),{prefixCls:g,getPopupContainer:S,direction:z}=He("drawer",e),[I,F]=dt(g),l=_(()=>e.getContainer===void 0&&S?.value?()=>S.value(document.body):e.getContainer);tt(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),Ye("parentDrawerOpts",{setPush:()=>{d.value=!0},setPull:()=>{d.value=!1,ne(()=>{k()})}}),$e(()=>{b.value&&y&&y.setPush()}),Oe(()=>{y&&y.setPull()}),V(w,()=>{y&&(w.value?y.setPush():y.setPull())},{flush:"post"});const k=()=>{var n,s;(s=(n=C.value)===null||n===void 0?void 0:n.domFocus)===null||s===void 0||s.call(n)},h=n=>{r("update:visible",!1),r("update:open",!1),r("close",n)},v=n=>{var s;n||(m.value===!1&&(m.value=!0),e.destroyOnClose&&(D.value=!1)),(s=e.afterVisibleChange)===null||s===void 0||s.call(e,n),r("afterVisibleChange",n),r("afterOpenChange",n)},B=_(()=>{const{push:n,placement:s}=e;let p;return typeof n=="boolean"?p=n?xe.distance:0:p=n.distance,p=parseFloat(String(p||0)),s==="left"||s==="right"?`translateX(${s==="left"?p:-p}px)`:s==="top"||s==="bottom"?`translateY(${s==="top"?p:-p}px)`:null}),W=_(()=>{var n;return(n=e.width)!==null&&n!==void 0?n:e.size==="large"?736:378}),A=_(()=>{var n;return(n=e.height)!==null&&n!==void 0?n:e.size==="large"?736:378}),me=_(()=>{const{mask:n,placement:s}=e;if(!w.value&&!n)return{};const p={};return s==="left"||s==="right"?p.width=Se(W.value)?`${W.value}px`:W.value:p.height=Se(A.value)?`${A.value}px`:A.value,p}),fe=_(()=>{const{zIndex:n,contentWrapperStyle:s}=e,p=me.value;return[{zIndex:n,transform:d.value?B.value:void 0},M({},s),p]}),ve=n=>{const{closable:s,headerStyle:p}=e,x=ue(t,e,"extra"),T=ue(t,e,"title");return!T&&!s?null:u("div",{class:de(`${n}-header`,{[`${n}-header-close-only`]:s&&!T&&!x}),style:p},[u("div",{class:`${n}-header-title`},[we(n),T&&u("div",{class:`${n}-title`},[T])]),x&&u("div",{class:`${n}-extra`},[x])])},we=n=>{var s;const{closable:p}=e,x=t.closeIcon?(s=t.closeIcon)===null||s===void 0?void 0:s.call(t):e.closeIcon;return p&&u("button",{key:"closer",onClick:h,"aria-label":"Close",class:`${n}-close`},[x===void 0?u(Re,null,null):x])},he=n=>{var s;if(m.value&&!e.forceRender&&!D.value)return null;const{bodyStyle:p,drawerStyle:x}=e;return u("div",{class:`${n}-wrapper-body`,style:x},[ve(n),u("div",{key:"body",class:`${n}-body`,style:p},[(s=t.default)===null||s===void 0?void 0:s.call(t)]),Y(n)])},Y=n=>{const s=ue(t,e,"footer");if(!s)return null;const p=`${n}-footer`;return u("div",{class:p,style:e.footerStyle},[s])},ae=_(()=>de({"no-mask":!e.mask,[`${g.value}-rtl`]:z.value==="rtl"},e.rootClassName,F.value)),le=_(()=>Ce(De(g.value,"mask-motion"))),se=n=>Ce(De(g.value,`panel-motion-${n}`));return()=>{const{width:n,height:s,placement:p,mask:x,forceRender:T}=e,ie=mt(e,["width","height","placement","mask","forceRender"]),ce=M(M(M({},a),Pe(ie,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","onAfterVisibleChange","onClose","onUpdate:visible","onUpdate:open","visible"])),{forceRender:T,onClose:h,afterVisibleChange:v,handler:!1,prefixCls:g.value,open:w.value,showMask:x,placement:p,ref:C});return I(u(ot,null,{default:()=>[u(ct,P(P({},ce),{},{maskMotion:le.value,motion:se,width:W.value,height:A.value,getContainer:l.value,rootClassName:ae.value,rootStyle:e.rootStyle,contentWrapperStyle:fe.value}),{handler:e.handle?()=>e.handle:t.handle,default:()=>he(g.value)})]}))}}}),ht=Ae(wt),$=re({__name:"Drawer",setup(e){const o=e,r=Ue();Xe();const t=_(()=>{const a={};return Object.keys(r).filter(d=>d.startsWith("on")).forEach(d=>{a[d]=r[d]}),a});return(a,d)=>(Je(),Ke(Ze(ht),Ge(o,qe(t.value)),{title:L(m=>[H(a.$slots,"title",X(K(m||{})))]),extra:L(m=>[H(a.$slots,"extra",X(K(m||{})))]),footer:L(m=>[H(a.$slots,"footer",X(K(m||{})))]),closeIcon:L(m=>[H(a.$slots,"closeIcon",X(K(m||{})))]),default:L(()=>[H(a.$slots,"default")]),_:3},16))}});$.__docgenInfo={exportName:"default",displayName:"Drawer",description:"",tags:{},slots:[{name:"title",scoped:!0,bindings:[]},{name:"extra",scoped:!0,bindings:[]},{name:"footer",scoped:!0,bindings:[]},{name:"closeIcon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Drawer/Drawer.vue"]};$.install=e=>{e.component("CgDrawer",$)};const{fn:Et}=__STORYBOOK_MODULE_TEST__,Vt={title:"Components/Drawer",component:$,tags:["autodocs"],argTypes:{open:{control:"boolean"},title:{control:"text"},placement:{control:"select",options:["top","right","bottom","left"]},size:{control:"select",options:["default","large"]},width:{control:"text"},height:{control:"text"},closable:{control:"boolean"},mask:{control:"boolean"},maskClosable:{control:"boolean"},destroyOnClose:{control:"boolean"},keyboard:{control:"boolean"},zIndex:{control:"number"},bodyStyle:{control:"object"},headerStyle:{control:"object"},drawerStyle:{control:"object"},maskStyle:{control:"object"},onClose:{action:"closed"}},args:{title:"抽屉标题",placement:"right",closable:!0,mask:!0,maskClosable:!0}},G={render:()=>({components:{Drawer:$,Button:E},setup(){const e=N(!1);return{visible:e,showDrawer:()=>{e.value=!0},onClose:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showDrawer">打开抽屉</Button>
        <Drawer
          title="基础抽屉"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。"}}}},q={render:()=>({components:{Drawer:$,Button:E,Space:R},setup(){const e=N({top:!1,right:!1,bottom:!1,left:!1});return{visible:e,showDrawer:t=>{e.value[t]=!0},onClose:t=>{e.value[t]=!1}}},template:`
      <div>
        <Space>
          <Button type="primary" @click="showDrawer('top')">上方</Button>
          <Button type="primary" @click="showDrawer('right')">右侧</Button>
          <Button type="primary" @click="showDrawer('bottom')">下方</Button>
          <Button type="primary" @click="showDrawer('left')">左侧</Button>
        </Space>
        <Drawer
          title="上方抽屉"
          placement="top"
          :open="visible.top"
          :height="256"
          @close="onClose('top')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="右侧抽屉"
          placement="right"
          :open="visible.right"
          @close="onClose('right')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="下方抽屉"
          placement="bottom"
          :open="visible.bottom"
          :height="256"
          @close="onClose('bottom')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="左侧抽屉"
          placement="left"
          :open="visible.left"
          @close="onClose('left')"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"抽屉可以从上、右、下、左四个方向滑出。"}}}},Z={render:()=>({components:{Drawer:$,Button:E,Space:R},setup(){const e=N({default:!1,large:!1});return{visible:e,showDrawer:t=>{e.value[t]=!0},onClose:t=>{e.value[t]=!1}}},template:`
      <div>
        <Space>
          <Button type="primary" @click="showDrawer('default')">默认尺寸</Button>
          <Button type="primary" @click="showDrawer('large')">大尺寸</Button>
        </Space>
        <Drawer
          title="默认尺寸抽屉"
          size="default"
          :open="visible.default"
          @close="onClose('default')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="大尺寸抽屉"
          size="large"
          :open="visible.large"
          @close="onClose('large')"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"抽屉有两种预设尺寸：默认（default）和大（large）。"}}}},J={render:()=>({components:{Drawer:$,Button:E},setup(){const e=N(!1);return{visible:e,showDrawer:()=>{e.value=!0},onClose:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showDrawer">自定义尺寸</Button>
        <Drawer
          title="自定义宽度抽屉"
          :width="500"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"可以自定义抽屉的宽度或高度。"}}}},Q={render:()=>({components:{Drawer:$,Button:E,Space:R},setup(){const e=N(!1);return{visible:e,showDrawer:()=>{e.value=!0},onClose:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showDrawer">带页脚的抽屉</Button>
        <Drawer
          title="带页脚的抽屉"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <template #footer>
            <div style="text-align: right">
              <Space>
                <Button @click="onClose">取消</Button>
                <Button type="primary" @click="onClose">确定</Button>
              </Space>
            </div>
          </template>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"在抽屉底部添加页脚，常用于放置操作按钮。"}}}},ee={render:()=>({components:{Drawer:$,Button:E,Space:R},setup(){const e=N(!1);return{visible:e,showDrawer:()=>{e.value=!0},onClose:()=>{e.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showDrawer">带额外操作的抽屉</Button>
        <Drawer
          title="带额外操作的抽屉"
          :open="visible"
          @close="onClose"
        >
          <template #extra>
            <Space>
              <Button>提交</Button>
              <Button type="primary">保存</Button>
            </Space>
          </template>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"在抽屉头部添加额外的操作区域。"}}}},te={render:()=>({components:{Drawer:$,Button:E},setup(){const e=N(!1),o=N(!1);return{visible:e,childVisible:o,showDrawer:()=>{e.value=!0},showChildDrawer:()=>{o.value=!0},onClose:()=>{e.value=!1},onChildClose:()=>{o.value=!1}}},template:`
      <div>
        <Button type="primary" @click="showDrawer">打开嵌套抽屉</Button>
        <Drawer
          title="第一层抽屉"
          :open="visible"
          @close="onClose"
        >
          <Button type="primary" @click="showChildDrawer">打开第二层抽屉</Button>
          <Drawer
            title="第二层抽屉"
            :open="childVisible"
            @close="onChildClose"
          >
            <p>这是第二层抽屉的内容</p>
          </Drawer>
          <p>这是第一层抽屉的内容</p>
        </Drawer>
      </div>
    `}),parameters:{docs:{description:{story:"在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。"}}}},oe={render:()=>({components:{Drawer:$,Button:E,Space:R},setup(){const e=N({default:!1,withFooter:!1});return{visible:e,showDrawer:t=>{e.value[t]=!0},onClose:t=>{e.value[t]=!1}}},template:`
      <div>
        <h3 style="margin-bottom: 16px;">抽屉组件主题展示</h3>
        <Space>
          <Button type="primary" @click="showDrawer('default')">基础抽屉</Button>
          <Button type="primary" @click="showDrawer('withFooter')">带页脚的抽屉</Button>
        </Space>
        
        <Drawer
          title="基础抽屉"
          :open="visible.default"
          @close="onClose('default')"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
        
        <Drawer
          title="带页脚的抽屉"
          :open="visible.withFooter"
          @close="onClose('withFooter')"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <template #footer>
            <div style="text-align: right">
              <Space>
                <Button @click="onClose('withFooter')">取消</Button>
                <Button type="primary" @click="onClose('withFooter')">确定</Button>
              </Space>
            </div>
          </template>
        </Drawer>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的抽屉组件效果
          </p>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示抽屉组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。"}}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showDrawer">打开抽屉</Button>
        <Drawer
          title="基础抽屉"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button,
      Space
    },
    setup() {
      const visible = ref({
        top: false,
        right: false,
        bottom: false,
        left: false
      });
      const showDrawer = (position: string) => {
        visible.value[position] = true;
      };
      const onClose = (position: string) => {
        visible.value[position] = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Space>
          <Button type="primary" @click="showDrawer('top')">上方</Button>
          <Button type="primary" @click="showDrawer('right')">右侧</Button>
          <Button type="primary" @click="showDrawer('bottom')">下方</Button>
          <Button type="primary" @click="showDrawer('left')">左侧</Button>
        </Space>
        <Drawer
          title="上方抽屉"
          placement="top"
          :open="visible.top"
          :height="256"
          @close="onClose('top')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="右侧抽屉"
          placement="right"
          :open="visible.right"
          @close="onClose('right')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="下方抽屉"
          placement="bottom"
          :open="visible.bottom"
          :height="256"
          @close="onClose('bottom')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="左侧抽屉"
          placement="left"
          :open="visible.left"
          @close="onClose('left')"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '抽屉可以从上、右、下、左四个方向滑出。'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button,
      Space
    },
    setup() {
      const visible = ref({
        default: false,
        large: false
      });
      const showDrawer = (size: string) => {
        visible.value[size] = true;
      };
      const onClose = (size: string) => {
        visible.value[size] = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Space>
          <Button type="primary" @click="showDrawer('default')">默认尺寸</Button>
          <Button type="primary" @click="showDrawer('large')">大尺寸</Button>
        </Space>
        <Drawer
          title="默认尺寸抽屉"
          size="default"
          :open="visible.default"
          @close="onClose('default')"
        >
          <p>抽屉内容...</p>
        </Drawer>
        <Drawer
          title="大尺寸抽屉"
          size="large"
          :open="visible.large"
          @close="onClose('large')"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '抽屉有两种预设尺寸：默认（default）和大（large）。'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showDrawer">自定义尺寸</Button>
        <Drawer
          title="自定义宽度抽屉"
          :width="500"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '可以自定义抽屉的宽度或高度。'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button,
      Space
    },
    setup() {
      const visible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showDrawer">带页脚的抽屉</Button>
        <Drawer
          title="带页脚的抽屉"
          :open="visible"
          @close="onClose"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <template #footer>
            <div style="text-align: right">
              <Space>
                <Button @click="onClose">取消</Button>
                <Button type="primary" @click="onClose">确定</Button>
              </Space>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '在抽屉底部添加页脚，常用于放置操作按钮。'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button,
      Space
    },
    setup() {
      const visible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showDrawer">带额外操作的抽屉</Button>
        <Drawer
          title="带额外操作的抽屉"
          :open="visible"
          @close="onClose"
        >
          <template #extra>
            <Space>
              <Button>提交</Button>
              <Button type="primary">保存</Button>
            </Space>
          </template>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '在抽屉头部添加额外的操作区域。'
      }
    }
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      const childVisible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
      const showChildDrawer = () => {
        childVisible.value = true;
      };
      const onClose = () => {
        visible.value = false;
      };
      const onChildClose = () => {
        childVisible.value = false;
      };
      return {
        visible,
        childVisible,
        showDrawer,
        showChildDrawer,
        onClose,
        onChildClose
      };
    },
    template: \`
      <div>
        <Button type="primary" @click="showDrawer">打开嵌套抽屉</Button>
        <Drawer
          title="第一层抽屉"
          :open="visible"
          @close="onClose"
        >
          <Button type="primary" @click="showChildDrawer">打开第二层抽屉</Button>
          <Drawer
            title="第二层抽屉"
            :open="childVisible"
            @close="onChildClose"
          >
            <p>这是第二层抽屉的内容</p>
          </Drawer>
          <p>这是第一层抽屉的内容</p>
        </Drawer>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。'
      }
    }
  }
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer,
      Button,
      Space
    },
    setup() {
      const visible = ref({
        default: false,
        withFooter: false
      });
      const showDrawer = (type: string) => {
        visible.value[type] = true;
      };
      const onClose = (type: string) => {
        visible.value[type] = false;
      };
      return {
        visible,
        showDrawer,
        onClose
      };
    },
    template: \`
      <div>
        <h3 style="margin-bottom: 16px;">抽屉组件主题展示</h3>
        <Space>
          <Button type="primary" @click="showDrawer('default')">基础抽屉</Button>
          <Button type="primary" @click="showDrawer('withFooter')">带页脚的抽屉</Button>
        </Space>
        
        <Drawer
          title="基础抽屉"
          :open="visible.default"
          @close="onClose('default')"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
        
        <Drawer
          title="带页脚的抽屉"
          :open="visible.withFooter"
          @close="onClose('withFooter')"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <template #footer>
            <div style="text-align: right">
              <Space>
                <Button @click="onClose('withFooter')">取消</Button>
                <Button type="primary" @click="onClose('withFooter')">确定</Button>
              </Space>
            </div>
          </template>
        </Drawer>
        
        <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
          <p style="margin: 0; color: #666;">
            💡 提示：使用工具栏中的主题切换器来查看不同主题下的抽屉组件效果
          </p>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: '展示抽屉组件在不同主题下的视觉效果。可以通过工具栏切换主题来查看变化。'
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};const Wt=["Default","Placement","Size","CustomSize","WithFooter","WithExtra","NestedDrawers","ThemeShowcase"];export{J as CustomSize,G as Default,te as NestedDrawers,q as Placement,Z as Size,oe as ThemeShowcase,ee as WithExtra,Q as WithFooter,Wt as __namedExportsOrder,Vt as default};
