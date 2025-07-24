import{d as O,b as se,ax as H,P as g,b5 as fe,ay as W,g as ee,a as u,e as w,f as ve,_ as l,aQ as be,G as ye,H as Ie,I as xe,u as ze,D as we,c as B,aA as Te,az as De,Z as He,ae,af as ce,ag as le,ah as pe,ai as _,v as A,aj as de,ak as me,al as ge,am as R,an as J,ao as k,r as L}from"./iframe-CiolPNwv.js";import{C as Pe}from"./CheckOutlined-CIIIVjBf.js";import{i as We}from"./initDefaultProps-CZpOG6Cc.js";import{o as ue}from"./omit-BBXwSgK8.js";import{c as Be}from"./vnode-B4SLhmi3.js";import{u as Me}from"./useBreakpoint-BpzVhzE_.js";import{P as Xe}from"./index-CZebOuYK.js";import{T as Ne}from"./index-D70oGXWT.js";import"./responsiveObserve-Cqxd3VwU.js";import"./devWarning-MTSIIkhh.js";import"./useRefs-BWK2Gk1T.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./zoom-D2IHdkts.js";import"./motion-CzF1iTch.js";function re(e){return typeof e=="string"}function _e(){}const Se=()=>({prefixCls:String,itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:W(),iconPrefix:String,icon:g.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:g.any,title:g.any,subTitle:g.any,progressDot:fe(g.oneOfType([g.looseBool,g.func])),tailContent:g.any,icons:g.shape({finish:g.any,error:g.any}).loose,onClick:H(),onStepClick:H(),stepIcon:H(),itemRender:H(),__legacy:se()}),he=O({compatConfig:{MODE:3},name:"Step",inheritAttrs:!1,props:Se(),setup(e,t){let{slots:i,emit:n,attrs:o}=t;const r=a=>{n("click",a),n("stepClick",e.stepIndex)},c=a=>{let{icon:s,title:d,description:v}=a;const{prefixCls:p,stepNumber:x,status:C,iconPrefix:y,icons:m,progressDot:b=i.progressDot,stepIcon:z=i.stepIcon}=e;let S;const $=ee(`${p}-icon`,`${y}icon`,{[`${y}icon-${s}`]:s&&re(s),[`${y}icon-check`]:!s&&C==="finish"&&(m&&!m.finish||!m),[`${y}icon-cross`]:!s&&C==="error"&&(m&&!m.error||!m)}),h=u("span",{class:`${p}-icon-dot`},null);return b?typeof b=="function"?S=u("span",{class:`${p}-icon`},[b({iconDot:h,index:x-1,status:C,title:d,description:v,prefixCls:p})]):S=u("span",{class:`${p}-icon`},[h]):s&&!re(s)?S=u("span",{class:`${p}-icon`},[s]):m&&m.finish&&C==="finish"?S=u("span",{class:`${p}-icon`},[m.finish]):m&&m.error&&C==="error"?S=u("span",{class:`${p}-icon`},[m.error]):s||C==="finish"||C==="error"?S=u("span",{class:$},null):S=u("span",{class:`${p}-icon`},[x]),z&&(S=z({index:x-1,status:C,title:d,description:v,node:S})),S};return()=>{var a,s,d,v;const{prefixCls:p,itemWidth:x,active:C,status:y="wait",tailContent:m,adjustMarginRight:b,disabled:z,title:S=(a=i.title)===null||a===void 0?void 0:a.call(i),description:$=(s=i.description)===null||s===void 0?void 0:s.call(i),subTitle:h=(d=i.subTitle)===null||d===void 0?void 0:d.call(i),icon:f=(v=i.icon)===null||v===void 0?void 0:v.call(i),onClick:I,onStepClick:P}=e,M=y||"wait",te=ee(`${p}-item`,`${p}-item-${M}`,{[`${p}-item-custom`]:f,[`${p}-item-active`]:C,[`${p}-item-disabled`]:z===!0}),X={};x&&(X.width=x),b&&(X.marginRight=b);const N={onClick:I||_e};P&&!z&&(N.role="button",N.tabindex=0,N.onClick=r);const q=u("div",w(w({},ue(o,["__legacy"])),{},{class:[te,o.class],style:[o.style,X]}),[u("div",w(w({},N),{},{class:`${p}-item-container`}),[u("div",{class:`${p}-item-tail`},[m]),u("div",{class:`${p}-item-icon`},[c({icon:f,title:S,description:$})]),u("div",{class:`${p}-item-content`},[u("div",{class:`${p}-item-title`},[S,h&&u("div",{title:typeof h=="string"?h:void 0,class:`${p}-item-subtitle`},[h])]),$&&u("div",{class:`${p}-item-description`},[$])])])]);return e.itemRender?e.itemRender(q):q}}});var Ae=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i};const Re=O({compatConfig:{MODE:3},name:"Steps",props:{type:g.string.def("default"),prefixCls:g.string.def("vc-steps"),iconPrefix:g.string.def("vc"),direction:g.string.def("horizontal"),labelPlacement:g.string.def("horizontal"),status:W("process"),size:g.string.def(""),progressDot:g.oneOfType([g.looseBool,g.func]).def(void 0),initial:g.number.def(0),current:g.number.def(0),items:g.array.def(()=>[]),icons:g.shape({finish:g.any,error:g.any}).loose,stepIcon:H(),isInline:g.looseBool,itemRender:H()},emits:["change"],setup(e,t){let{slots:i,emit:n}=t;const o=a=>{const{current:s}=e;s!==a&&n("change",a)},r=(a,s,d)=>{const{prefixCls:v,iconPrefix:p,status:x,current:C,initial:y,icons:m,stepIcon:b=i.stepIcon,isInline:z,itemRender:S,progressDot:$=i.progressDot}=e,h=z||$,f=l(l({},a),{class:""}),I=y+s,P={active:I===C,stepNumber:I+1,stepIndex:I,key:I,prefixCls:v,iconPrefix:p,progressDot:h,stepIcon:b,icons:m,onStepClick:o};return x==="error"&&s===C-1&&(f.class=`${v}-next-error`),f.status||(I===C?f.status=x:I<C?f.status="finish":f.status="wait"),z&&(f.icon=void 0,f.subTitle=void 0),d?d(l(l({},f),P)):(S&&(f.itemRender=M=>S(f,M)),u(he,w(w(w({},f),P),{},{__legacy:!1}),null))},c=(a,s)=>r(l({},a.props),s,d=>Be(a,d));return()=>{var a;const{prefixCls:s,direction:d,type:v,labelPlacement:p,iconPrefix:x,status:C,size:y,current:m,progressDot:b=i.progressDot,initial:z,icons:S,items:$,isInline:h,itemRender:f}=e,I=Ae(e,["prefixCls","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","initial","icons","items","isInline","itemRender"]),P=v==="navigation",M=h||b,te=h?"horizontal":d,X=h?void 0:y,N=M?"vertical":p,q=ee(s,`${s}-${d}`,{[`${s}-${X}`]:X,[`${s}-label-${N}`]:te==="horizontal",[`${s}-dot`]:!!M,[`${s}-navigation`]:P,[`${s}-inline`]:h});return u("div",w({class:q},I),[$.filter(ie=>ie).map((ie,$e)=>r(ie,$e)),ve((a=i.default)===null||a===void 0?void 0:a.call(i)).map(c)])}}}),Ee=e=>{const{componentCls:t,stepsIconCustomTop:i,stepsIconCustomSize:n,stepsIconCustomFontSize:o}=e;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:i,width:n,height:n,fontSize:o,lineHeight:`${n}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},Oe=e=>{const{componentCls:t,stepsIconSize:i,lineHeight:n,stepsSmallIconSize:o}=e;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:i/2+e.controlHeightLG,padding:`${e.paddingXXS}px ${e.paddingLG}px`},"&-content":{display:"block",width:(i/2+e.controlHeightLG)*2,marginTop:e.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:e.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:e.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:e.controlHeightLG+(i-o)/2}}}}}},Le=e=>{const{componentCls:t,stepsNavContentMaxWidth:i,stepsNavArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=e;return{[`&${t}-navigation`]:{paddingTop:e.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-e.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-e.margin,paddingBottom:e.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:i},[`${t}-item-title`]:l(l({maxWidth:"100%",paddingInlineEnd:0},be),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${e.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:e.fontSizeIcon,height:e.fontSizeIcon,borderTop:`${e.lineWidth}px ${e.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:e.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:e.lineWidth*3,height:`calc(100% - ${e.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:e.controlHeight*.25,height:e.controlHeight*.25,marginBottom:e.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},qe=e=>{const{antCls:t,componentCls:i}=e;return{[`&${i}-with-progress`]:{[`${i}-item`]:{paddingTop:e.paddingXXS,[`&-process ${i}-item-container ${i}-item-icon ${i}-icon`]:{color:e.processIconColor}},[`&${i}-vertical > ${i}-item `]:{paddingInlineStart:e.paddingXXS,[`> ${i}-item-container > ${i}-item-tail`]:{top:e.marginXXS,insetInlineStart:e.stepsIconSize/2-e.lineWidth+e.paddingXXS}},[`&, &${i}-small`]:{[`&${i}-horizontal ${i}-item:first-child`]:{paddingBottom:e.paddingXXS,paddingInlineStart:e.paddingXXS}},[`&${i}-small${i}-vertical > ${i}-item > ${i}-item-container > ${i}-item-tail`]:{insetInlineStart:e.stepsSmallIconSize/2-e.lineWidth+e.paddingXXS},[`&${i}-label-vertical`]:{[`${i}-item ${i}-item-tail`]:{top:e.margin-2*e.lineWidth}},[`${i}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(e.stepsIconSize-e.stepsProgressSize-e.lineWidth*2)/2,insetInlineStart:(e.stepsIconSize-e.stepsProgressSize-e.lineWidth*2)/2}}}}},je=e=>{const{componentCls:t,descriptionWidth:i,lineHeight:n,stepsCurrentDotSize:o,stepsDotSize:r,motionDurationSlow:c}=e;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((e.stepsDotSize-e.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${i/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${e.marginSM*2}px)`,height:e.lineWidth*3,marginInlineStart:e.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(e.descriptionWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${c}`,"&::after":{position:"absolute",top:-e.marginSM,insetInlineStart:(r-e.controlHeightLG*1.5)/2,width:e.controlHeightLG*1.5,height:e.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:i},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(e.descriptionWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(e.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(e.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(e.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+e.paddingXS}px 0 ${e.paddingXS}px`,"&::after":{marginInlineStart:(r-e.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(e.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(e.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(e.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},Fe=e=>{const{componentCls:t}=e;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},Ge=e=>{const{componentCls:t,stepsSmallIconSize:i,fontSizeSM:n,fontSize:o,colorTextDescription:r}=e;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:e.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:i,height:i,marginTop:0,marginBottom:0,marginInline:`0 ${e.marginXS}px`,fontSize:n,lineHeight:`${i}px`,textAlign:"center",borderRadius:i},[`${t}-item-title`]:{paddingInlineEnd:e.paddingSM,fontSize:o,lineHeight:`${i}px`,"&::after":{top:i/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:i/2-e.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:i,lineHeight:`${i}px`,transform:"none"}}}}},Ve=e=>{const{componentCls:t,stepsSmallIconSize:i,stepsIconSize:n}=e;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:e.margin},[`${t}-item-content`]:{display:"block",minHeight:e.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:e.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e.stepsIconSize/2-e.lineWidth,width:e.lineWidth,height:"100%",padding:`${n+e.marginXXS*1.5}px 0 ${e.marginXXS*1.5}px`,"&::after":{width:e.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e.stepsSmallIconSize/2-e.lineWidth,padding:`${i+e.marginXXS*1.5}px 0 ${e.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${i}px`}}}}},Ke=e=>{const{componentCls:t,inlineDotSize:i,inlineTitleColor:n,inlineTailColor:o}=e,r=e.paddingXS+e.lineWidth,c={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${e.paddingXXS}px 0`,margin:`0 ${e.marginXXS/2}px`,borderRadius:e.borderRadiusSM,cursor:"pointer",transition:`background-color ${e.motionDurationMid}`,"&:hover":{background:e.controlItemBgHover},"&[role='button']:hover":{opacity:1}},"&-icon":{width:i,height:i,marginInlineStart:`calc(50% - ${i/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:e.fontSizeSM/4}},"&-content":{width:"auto",marginTop:e.marginXS-e.lineWidth},"&-title":{color:n,fontSize:e.fontSizeSM,lineHeight:e.lineHeightSM,fontWeight:"normal",marginBottom:e.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+i/2,transform:"translateY(-50%)","&:after":{width:"100%",height:e.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":l({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:e.colorBorderBg,border:`${e.lineWidth}px ${e.lineType} ${o}`}},c),"&-finish":l({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${e.lineWidth}px ${e.lineType} ${o}`}},c),"&-error":c,"&-active, &-process":l({[`${t}-item-icon`]:{width:i,height:i,marginInlineStart:`calc(50% - ${i/2}px)`,top:0}},c),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}};var E;(function(e){e.wait="wait",e.process="process",e.finish="finish",e.error="error"})(E||(E={}));const j=(e,t)=>{const i=`${t.componentCls}-item`,n=`${e}IconColor`,o=`${e}TitleColor`,r=`${e}DescriptionColor`,c=`${e}TailColor`,a=`${e}IconBgColor`,s=`${e}IconBorderColor`,d=`${e}DotColor`;return{[`${i}-${e} ${i}-icon`]:{backgroundColor:t[a],borderColor:t[s],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[d]}}},[`${i}-${e}${i}-custom ${i}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[d]}},[`${i}-${e} > ${i}-container > ${i}-content > ${i}-title`]:{color:t[o],"&::after":{backgroundColor:t[c]}},[`${i}-${e} > ${i}-container > ${i}-content > ${i}-description`]:{color:t[r]},[`${i}-${e} > ${i}-container > ${i}-tail::after`]:{backgroundColor:t[c]}}},Ue=e=>{const{componentCls:t,motionDurationSlow:i}=e,n=`${t}-item`;return l(l(l(l(l(l({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:e.stepsIconSize,height:e.stepsIconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:e.marginXS,fontSize:e.stepsIconFontSize,fontFamily:e.fontFamily,lineHeight:`${e.stepsIconSize}px`,textAlign:"center",borderRadius:e.stepsIconSize,border:`${e.lineWidth}px ${e.lineType} transparent`,transition:`background-color ${i}, border-color ${i}`,[`${t}-icon`]:{position:"relative",top:e.stepsIconTop,color:e.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:e.stepsIconSize/2-e.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:e.lineWidth,background:e.colorSplit,borderRadius:e.lineWidth,transition:`background ${i}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:e.padding,color:e.colorText,fontSize:e.fontSizeLG,lineHeight:`${e.stepsTitleLineHeight}px`,"&::after":{position:"absolute",top:e.stepsTitleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:e.lineWidth,background:e.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize},[`${n}-description`]:{color:e.colorTextDescription,fontSize:e.fontSize}},j(E.wait,e)),j(E.process,e)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:e.fontWeightStrong}}),j(E.finish,e)),j(E.error,e)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:e.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Ye=e=>{const{componentCls:t,motionDurationSlow:i}=e;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${i}`}},"&:hover":{[`${t}-item`]:{"&-title, &-subtitle, &-description":{color:e.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:e.colorPrimary,[`${t}-icon`]:{color:e.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:e.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:e.descriptionWidth,whiteSpace:"normal"}}}}},Qe=e=>{const{componentCls:t}=e;return{[t]:l(l(l(l(l(l(l(l(l(l(l(l(l({},xe(e)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Ue(e)),Ye(e)),Ee(e)),Ge(e)),Ve(e)),Oe(e)),je(e)),Le(e)),Fe(e)),qe(e)),Ke(e))}},Ze=ye("Steps",e=>{const{wireframe:t,colorTextDisabled:i,fontSizeHeading3:n,fontSize:o,controlHeight:r,controlHeightLG:c,colorTextLightSolid:a,colorText:s,colorPrimary:d,colorTextLabel:v,colorTextDescription:p,colorTextQuaternary:x,colorFillContent:C,controlItemBgActive:y,colorError:m,colorBgContainer:b,colorBorderSecondary:z}=e,S=e.controlHeight,$=e.colorSplit,h=Ie(e,{processTailColor:$,stepsNavArrowColor:i,stepsIconSize:S,stepsIconCustomSize:S,stepsIconCustomTop:0,stepsIconCustomFontSize:c/2,stepsIconTop:-.5,stepsIconFontSize:o,stepsTitleLineHeight:r,stepsSmallIconSize:n,stepsDotSize:r/4,stepsCurrentDotSize:c/4,stepsNavContentMaxWidth:"auto",processIconColor:a,processTitleColor:s,processDescriptionColor:s,processIconBgColor:d,processIconBorderColor:d,processDotColor:d,waitIconColor:t?i:v,waitTitleColor:p,waitDescriptionColor:p,waitTailColor:$,waitIconBgColor:t?b:C,waitIconBorderColor:t?i:"transparent",waitDotColor:i,finishIconColor:d,finishTitleColor:s,finishDescriptionColor:p,finishTailColor:d,finishIconBgColor:t?b:y,finishIconBorderColor:t?d:y,finishDotColor:d,errorIconColor:a,errorTitleColor:m,errorDescriptionColor:m,errorTailColor:$,errorIconBgColor:m,errorIconBorderColor:m,errorDotColor:m,stepsNavActiveColor:d,stepsProgressSize:c,inlineDotSize:6,inlineTitleColor:x,inlineTailColor:z});return[Qe(h)]},{descriptionWidth:140}),Je=()=>({prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:se(),items:De(),labelPlacement:W(),status:W(),size:W(),direction:W(),progressDot:Te([Boolean,Function]),type:W(),onChange:H(),"onUpdate:current":H()}),ne=O({compatConfig:{MODE:3},name:"ASteps",inheritAttrs:!1,props:We(Je(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:Object,setup(e,t){let{attrs:i,slots:n,emit:o}=t;const{prefixCls:r,direction:c,configProvider:a}=ze("steps",e),[s,d]=Ze(r),[,v]=we(),p=Me(),x=B(()=>e.responsive&&p.value.xs?"vertical":e.direction),C=B(()=>a.getPrefixCls("",e.iconPrefix)),y=$=>{o("update:current",$),o("change",$)},m=B(()=>e.type==="inline"),b=B(()=>m.value?void 0:e.percent),z=$=>{let{node:h,status:f}=$;if(f==="process"&&e.percent!==void 0){const I=e.size==="small"?v.value.controlHeight:v.value.controlHeightLG;return u("div",{class:`${r.value}-progress-icon`},[u(Xe,{type:"circle",percent:b.value,size:I,strokeWidth:4,format:()=>null},null),h])}return h},S=B(()=>({finish:u(Pe,{class:`${r.value}-finish-icon`},null),error:u(He,{class:`${r.value}-error-icon`},null)}));return()=>{const $=ee({[`${r.value}-rtl`]:c.value==="rtl",[`${r.value}-with-progress`]:b.value!==void 0},i.class,d.value),h=(f,I)=>f.description?u(Ne,{title:f.description},{default:()=>[I]}):I;return s(u(Re,w(w(w({icons:S.value},i),ue(e,["percent","responsive"])),{},{items:e.items,direction:x.value,prefixCls:r.value,iconPrefix:C.value,class:$,onChange:y,isInline:m.value,itemRender:m.value?h:void 0}),l({stepIcon:z},n)))}}}),oe=O(l(l({compatConfig:{MODE:3}},he),{name:"AStep",props:Se()})),Ce=l(ne,{Step:oe,install:e=>(e.component(ne.name,ne),e.component(oe.name,oe),e)}),T=O({__name:"Steps",props:{type:{},current:{},direction:{},labelPlacement:{},percent:{},progressDot:{type:[Boolean,Function]},size:{},status:{},initial:{},responsive:{type:Boolean}},setup(e){const t=e,i=ae(),n=ce(),o=B(()=>{const r={};return Object.keys(i).filter(c=>c.startsWith("on")).forEach(c=>{r[c]=i[c]}),r});return(r,c)=>(ge(),le(A(Ce),de(t,me(o.value)),pe({default:_(()=>[R(r.$slots,"default")]),_:2},[A(n).progressDot?{name:"progressDot",fn:_(a=>[R(r.$slots,"progressDot",J(k(a||{})))]),key:"0"}:void 0]),1040))}});T.__docgenInfo={exportName:"default",displayName:"Steps",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"navigation"'}]}},{name:"current",required:!1,type:{name:"number"}},{name:"direction",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]}},{name:"labelPlacement",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]}},{name:"percent",required:!1,type:{name:"number"}},{name:"progressDot",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"Function"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"small"'}]}},{name:"status",required:!1,type:{name:"union",elements:[{name:'"wait"'},{name:'"process"'},{name:'"finish"'},{name:'"error"'}]}},{name:"initial",required:!1,type:{name:"number"}},{name:"responsive",required:!1,type:{name:"boolean"}}],slots:[{name:"progressDot",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Steps/Steps.vue"]};const D=O({__name:"Step",props:{description:{},icon:{},status:{},disabled:{type:Boolean},title:{},subTitle:{}},setup(e){const t=Ce.Step,i=e,n=ae(),o=ce(),r=B(()=>{const c={};return Object.keys(n).filter(a=>a.startsWith("on")).forEach(a=>{c[a]=n[a]}),c});return(c,a)=>(ge(),le(A(t),de(i,me(r.value)),pe({default:_(()=>[R(c.$slots,"default")]),_:2},[A(o).title?{name:"title",fn:_(s=>[R(c.$slots,"title",J(k(s||{})))]),key:"0"}:void 0,A(o).description?{name:"description",fn:_(s=>[R(c.$slots,"description",J(k(s||{})))]),key:"1"}:void 0,A(o).icon?{name:"icon",fn:_(s=>[R(c.$slots,"icon",J(k(s||{})))]),key:"2"}:void 0]),1040))}});D.__docgenInfo={exportName:"default",displayName:"Step",description:"",tags:{},props:[{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"status",required:!1,type:{name:"union",elements:[{name:'"wait"'},{name:'"process"'},{name:'"finish"'},{name:'"error"'}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"subTitle",required:!1,type:{name:"string"}}],slots:[{name:"title",scoped:!0,bindings:[]},{name:"description",scoped:!0,bindings:[]},{name:"icon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Steps/Step.vue"]};const wt={title:"Components/Steps",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{current:{control:{type:"number"},description:"指定当前步骤，从 0 开始记数"},direction:{control:{type:"select",options:["horizontal","vertical"]},description:"指定步骤条方向"},labelPlacement:{control:{type:"select",options:["horizontal","vertical"]},description:"指定标签放置位置"},progressDot:{control:{type:"boolean"},description:"点状步骤条"},size:{control:{type:"select",options:["default","small"]},description:"指定大小"},status:{control:{type:"select",options:["wait","process","finish","error"]},description:"指定当前步骤的状态"},type:{control:{type:"select",options:["default","navigation"]},description:"步骤条类型"},percent:{control:{type:"number",min:0,max:100},description:"当前步骤进度条百分比"},responsive:{control:{type:"boolean"},description:"当屏幕宽度小于 532px 时自动变为垂直模式"}}},F={render:e=>({components:{CgSteps:T,CgStep:D},setup(){return{args:e}},template:`
      <CgSteps v-bind="args">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    `}),args:{current:1}},G={render:()=>({components:{CgSteps:T,CgStep:D},template:`
      <CgSteps>
        <CgStep status="finish" title="登录">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="process" title="验证">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="solution" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.5 2-33.2 20.7-63.9 48.4-83.7 32.6-23.4 74.9-23.4 107.5 0 27.8 19.8 46.4 50.5 48.4 83.7.3 4.2 3.8 7.5 8 7.5H784c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM512 628c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="wait" title="付款">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="anticon-spin">
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="wait" title="完成">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="smile" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"></path>
            </svg>
          </template>
        </CgStep>
      </CgSteps>
    `})},V={render:()=>({components:{CgSteps:T,CgStep:D},setup(){return{current:L(1)}},template:`
      <CgSteps direction="vertical" :current="current">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    `})},K={render:()=>({components:{CgSteps:T,CgStep:D},setup(){return{current:L(1)}},template:`
      <div>
        <CgSteps :current="current" progress-dot>
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
        <br />
        <CgSteps :current="current" progress-dot direction="vertical">
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
      </div>
    `})},U={render:()=>({components:{CgSteps:T,CgStep:D},template:`
      <div>
        <CgSteps>
          <CgStep status="finish" title="步骤1" description="这是步骤1的描述" />
          <CgStep status="error" title="步骤2" description="这是步骤2的描述" />
          <CgStep status="wait" title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
        <br />
        <CgSteps status="error">
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
      </div>
    `})},Y={render:()=>({components:{CgSteps:T,CgStep:D},setup(){return{percent:L(50)}},template:`
      <CgSteps :current="1" :percent="percent">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    `})},Q={render:()=>({components:{CgSteps:T,CgStep:D},setup(){return{current:L(0),onChange:i=>{console.log("onChange:",i)}}},template:`
      <CgSteps 
        type="navigation" 
        :current="current" 
        @change="onChange"
        style="margin-bottom: 60px; box-shadow: 0px -1px 0 0 #e8e8e8 inset;"
      >
        <CgStep title="步骤1" sub-title="00:00:05" status="finish" description="这是步骤1的描述" />
        <CgStep title="步骤2" sub-title="00:01:02" status="process" description="这是步骤2的描述" />
        <CgStep title="步骤3" sub-title="待运行" status="wait" description="这是步骤3的描述" />
      </CgSteps>
    `})},Z={render:()=>({components:{CgSteps:T,CgStep:D},setup(){const e=L(0);return{current:e,onChange:i=>{console.log("onChange:",i),e.value=i}}},template:`
      <CgSteps :current="current" @change="onChange">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    `})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CgSteps v-bind="args">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    \`
  }),
  args: {
    current: 1
  }
}`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    template: \`
      <CgSteps>
        <CgStep status="finish" title="登录">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="process" title="验证">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="solution" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.5 2-33.2 20.7-63.9 48.4-83.7 32.6-23.4 74.9-23.4 107.5 0 27.8 19.8 46.4 50.5 48.4 83.7.3 4.2 3.8 7.5 8 7.5H784c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM512 628c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="wait" title="付款">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="anticon-spin">
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </template>
        </CgStep>
        <CgStep status="wait" title="完成">
          <template #icon>
            <svg viewBox="64 64 896 896" data-icon="smile" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"></path>
            </svg>
          </template>
        </CgStep>
      </CgSteps>
    \`
  })
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      const current = ref(1);
      return {
        current
      };
    },
    template: \`
      <CgSteps direction="vertical" :current="current">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    \`
  })
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      const current = ref(1);
      return {
        current
      };
    },
    template: \`
      <div>
        <CgSteps :current="current" progress-dot>
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
        <br />
        <CgSteps :current="current" progress-dot direction="vertical">
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
      </div>
    \`
  })
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    template: \`
      <div>
        <CgSteps>
          <CgStep status="finish" title="步骤1" description="这是步骤1的描述" />
          <CgStep status="error" title="步骤2" description="这是步骤2的描述" />
          <CgStep status="wait" title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
        <br />
        <CgSteps status="error">
          <CgStep title="步骤1" description="这是步骤1的描述" />
          <CgStep title="步骤2" description="这是步骤2的描述" />
          <CgStep title="步骤3" description="这是步骤3的描述" />
        </CgSteps>
      </div>
    \`
  })
}`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      const percent = ref(50);
      return {
        percent
      };
    },
    template: \`
      <CgSteps :current="1" :percent="percent">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    \`
  })
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      const current = ref(0);
      const onChange = (current: number) => {
        console.log('onChange:', current);
      };
      return {
        current,
        onChange
      };
    },
    template: \`
      <CgSteps 
        type="navigation" 
        :current="current" 
        @change="onChange"
        style="margin-bottom: 60px; box-shadow: 0px -1px 0 0 #e8e8e8 inset;"
      >
        <CgStep title="步骤1" sub-title="00:00:05" status="finish" description="这是步骤1的描述" />
        <CgStep title="步骤2" sub-title="00:01:02" status="process" description="这是步骤2的描述" />
        <CgStep title="步骤3" sub-title="待运行" status="wait" description="这是步骤3的描述" />
      </CgSteps>
    \`
  })
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgSteps: Steps,
      CgStep: Step
    },
    setup() {
      const current = ref(0);
      const onChange = (value: number) => {
        console.log('onChange:', value);
        current.value = value;
      };
      return {
        current,
        onChange
      };
    },
    template: \`
      <CgSteps :current="current" @change="onChange">
        <CgStep title="步骤1" description="这是步骤1的描述" />
        <CgStep title="步骤2" description="这是步骤2的描述" />
        <CgStep title="步骤3" description="这是步骤3的描述" />
      </CgSteps>
    \`
  })
}`,...Z.parameters?.docs?.source}}};const Tt=["Basic","WithIcon","Vertical","ProgressDot","WithStatus","WithPercent","Navigation","Clickable"];export{F as Basic,Z as Clickable,Q as Navigation,K as ProgressDot,V as Vertical,G as WithIcon,Y as WithPercent,U as WithStatus,Tt as __namedExportsOrder,wt as default};
