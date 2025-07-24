import{r as U,m as ae,_ as s,y as ze,l as pt,c as p,s as X,d as ee,w as J,n as gt,a as c,e as P,F as Ke,p as mt,g as q,A as et,h as vt,P as dt,M as ie,G as ft,a7 as K,H as Qe,aQ as wt,I as ht,Z as At,Q as bt,u as tt,O as je,aJ as Ct,ae as yt,af as jt,ag as St,ah as Pt,ai as Ge,v as Ve,aj as It,ak as xt,al as Mt,am as Te,an as Ot,ao as kt}from"./iframe-CiolPNwv.js";import{i as Dt,b as Et}from"./isObjectLike-Dipz0mOK.js";import{g as zt,a as nt}from"./css-DDkvXkMO.js";import{u as rt}from"./useMergedState-8OkYKI-g.js";import{D as Nt,d as Lt,g as Rt,i as Ut}from"./index-CkwMM7Xi.js";import{a as W}from"./addEventListener-CC7Mt4qC.js";import{K as Ye}from"./KeyCode-D63Tfrq7.js";import{w as He}from"./raf-Deuc0E8-.js";import{L as $t}from"./LeftOutlined-BWzCsPQo.js";import{R as Bt}from"./RightOutlined-_q3ZrV7U.js";import{i as Qt}from"./zoom-D2IHdkts.js";import{E as Gt}from"./EyeOutlined-Cwmsf3ds.js";import"./omit-BBXwSgK8.js";import"./pickAttrs-8uwpYw_5.js";import"./initDefaultProps-CZpOG6Cc.js";import"./PortalWrapper-ig5OaliN.js";import"./motion-CzF1iTch.js";import"./supportsPassive-CeduFZj4.js";var Vt="[object Number]";function Tt(e){return typeof e=="number"||Dt(e)&&Et(e)==Vt}function Yt(e){const t=U(null),n=ae(s({},e)),r=U([]),o=i=>{t.value===null&&(r.value=[],t.value=He(()=>{let u;r.value.forEach(m=>{u=s(s({},u),m)}),s(n,u),t.value=null})),r.value.push(i)};return ze(()=>{t.value&&He.cancel(t.value)}),[n,o]}function _e(e,t,n,r){const o=t+n,i=(n-r)/2;if(n>r){if(t>0)return{[e]:i};if(t<0&&o<r)return{[e]:-i}}else if(t<0||o>r)return{[e]:t<0?i:-i};return{}}function Ht(e,t,n,r){const{width:o,height:i}=zt();let u=null;return e<=o&&t<=i?u={x:0,y:0}:(e>o||t>i)&&(u=s(s({},_e("x",n,e,o)),_e("y",r,t,i))),u}var _t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Fe=Symbol("previewGroupContext"),Ne={provide:e=>{mt(Fe,e)},inject:()=>pt(Fe,{isPreviewGroup:X(!1),previewUrls:p(()=>new Map),setPreviewUrls:()=>{},current:U(null),setCurrent:()=>{},setShowPreview:()=>{},setMousePosition:()=>{},registerImage:null,rootClassName:""})},Ft=()=>({previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:()=>({})}}),ot=ee({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:Ft(),setup(e,t){let{slots:n}=t;const r=p(()=>{const l={visible:void 0,onVisibleChange:()=>{},getContainer:void 0,current:0};return typeof e.preview=="object"?st(e.preview,l):l}),o=ae(new Map),i=U(),u=p(()=>r.value.visible),m=p(()=>r.value.getContainer),y=(l,S)=>{var C,z;(z=(C=r.value).onVisibleChange)===null||z===void 0||z.call(C,l,S)},[I,v]=rt(!!u.value,{value:u,onChange:y}),f=U(null),D=p(()=>u.value!==void 0),d=p(()=>Array.from(o.keys())),h=p(()=>d.value[r.value.current]),A=p(()=>new Map(Array.from(o).filter(l=>{let[,{canPreview:S}]=l;return!!S}).map(l=>{let[S,{url:C}]=l;return[S,C]}))),w=function(l,S){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;o.set(l,{url:S,canPreview:C})},b=l=>{i.value=l},E=l=>{f.value=l},$=function(l,S){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const z=()=>{o.delete(l)};return o.set(l,{url:S,canPreview:C}),z},j=l=>{l?.stopPropagation(),v(!1),E(null)};return J(h,l=>{b(l)},{immediate:!0,flush:"post"}),gt(()=>{I.value&&D.value&&b(h.value)},{flush:"post"}),Ne.provide({isPreviewGroup:X(!0),previewUrls:A,setPreviewUrls:w,current:i,setCurrent:b,setShowPreview:v,setMousePosition:E,registerImage:$}),()=>{const l=_t(r.value,[]);return c(Ke,null,[n.default&&n.default(),c(at,P(P({},l),{},{"ria-hidden":!I.value,visible:I.value,prefixCls:e.previewPrefixCls,onClose:j,mousePosition:f.value,src:A.value.get(i.value),icons:e.icons,getContainer:m.value}),null)])}}}),F={x:0,y:0},Xt=s(s({},Lt()),{src:String,alt:String,rootClassName:String,icons:{type:Object,default:()=>({})}}),at=ee({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:Xt,emits:["close","afterClose"],setup(e,t){let{emit:n,attrs:r}=t;const{rotateLeft:o,rotateRight:i,zoomIn:u,zoomOut:m,close:y,left:I,right:v,flipX:f,flipY:D}=ae(e.icons),d=X(1),h=X(0),A=ae({x:1,y:1}),[w,b]=Yt(F),E=()=>n("close"),$=X(),j=ae({originX:0,originY:0,deltaX:0,deltaY:0}),l=X(!1),S=Ne.inject(),{previewUrls:C,current:z,isPreviewGroup:te,setCurrent:k}=S,T=p(()=>C.value.size),Y=p(()=>Array.from(C.value.keys())),x=p(()=>Y.value.indexOf(z.value)),Pe=p(()=>te.value?C.value.get(z.value):e.src),L=p(()=>te.value&&T.value>1),B=X({wheelDirection:0}),ne=()=>{d.value=1,h.value=0,A.x=1,A.y=1,b(F),n("afterClose")},g=a=>{a?d.value+=.5:d.value++,b(F)},R=a=>{d.value>1&&(a?d.value-=.5:d.value--),b(F)},M=()=>{h.value+=90},H=()=>{h.value-=90},se=()=>{A.x=-A.x},Ie=()=>{A.y=-A.y},le=a=>{a.preventDefault(),a.stopPropagation(),x.value>0&&k(Y.value[x.value-1])},ce=a=>{a.preventDefault(),a.stopPropagation(),x.value<T.value-1&&k(Y.value[x.value+1])},re=q({[`${e.prefixCls}-moving`]:l.value}),xe=`${e.prefixCls}-operations-operation`,Me=`${e.prefixCls}-operations-icon`,ue=[{icon:y,onClick:E,type:"close"},{icon:u,onClick:()=>g(),type:"zoomIn"},{icon:m,onClick:()=>R(),type:"zoomOut",disabled:p(()=>d.value===1)},{icon:i,onClick:M,type:"rotateRight"},{icon:o,onClick:H,type:"rotateLeft"},{icon:f,onClick:se,type:"flipX"},{icon:D,onClick:Ie,type:"flipY"}],pe=()=>{if(e.visible&&l.value){const a=$.value.offsetWidth*d.value,O=$.value.offsetHeight*d.value,{left:Q,top:_}=nt($.value),G=h.value%180!==0;l.value=!1;const V=Ht(G?O:a,G?a:O,Q,_);V&&b(s({},V))}},Oe=a=>{a.button===0&&(a.preventDefault(),a.stopPropagation(),j.deltaX=a.pageX-w.x,j.deltaY=a.pageY-w.y,j.originX=w.x,j.originY=w.y,l.value=!0)},ge=a=>{e.visible&&l.value&&b({x:a.pageX-j.deltaX,y:a.pageY-j.deltaY})},ke=a=>{if(!e.visible)return;a.preventDefault();const O=a.deltaY;B.value={wheelDirection:O}},De=a=>{!e.visible||!L.value||(a.preventDefault(),a.keyCode===Ye.LEFT?x.value>0&&k(Y.value[x.value-1]):a.keyCode===Ye.RIGHT&&x.value<T.value-1&&k(Y.value[x.value+1]))},me=()=>{e.visible&&(d.value!==1&&(d.value=1),(w.x!==F.x||w.y!==F.y)&&b(F))};let oe=()=>{};return ze(()=>{J([()=>e.visible,l],()=>{oe();let a,O;const Q=W(window,"mouseup",pe,!1),_=W(window,"mousemove",ge,!1),G=W(window,"wheel",ke,{passive:!1}),V=W(window,"keydown",De,!1);try{window.top!==window.self&&(a=W(window.top,"mouseup",pe,!1),O=W(window.top,"mousemove",ge,!1))}catch{}oe=()=>{Q.remove(),_.remove(),G.remove(),V.remove(),a&&a.remove(),O&&O.remove()}},{flush:"post",immediate:!0}),J([B],()=>{const{wheelDirection:a}=B.value;a>0?R(!0):a<0&&g(!0)})}),et(()=>{oe()}),()=>{const{visible:a,prefixCls:O,rootClassName:Q}=e;return c(Nt,P(P({},r),{},{transitionName:e.transitionName,maskTransitionName:e.maskTransitionName,closable:!1,keyboard:!0,prefixCls:O,onClose:E,afterClose:ne,visible:a,wrapClassName:re,rootClassName:Q,getContainer:e.getContainer}),{default:()=>[c("div",{class:[`${e.prefixCls}-operations-wrapper`,Q]},[c("ul",{class:`${e.prefixCls}-operations`},[ue.map(_=>{let{icon:G,onClick:V,type:Be,disabled:ve}=_;return c("li",{class:q(xe,{[`${e.prefixCls}-operations-operation-disabled`]:ve&&ve?.value}),onClick:V,key:Be},[vt(G,{class:Me})])})])]),c("div",{class:`${e.prefixCls}-img-wrapper`,style:{transform:`translate3d(${w.x}px, ${w.y}px, 0)`}},[c("img",{onMousedown:Oe,onDblclick:me,ref:$,class:`${e.prefixCls}-img`,src:Pe.value,alt:e.alt,style:{transform:`scale3d(${A.x*d.value}, ${A.y*d.value}, 1) rotate(${h.value}deg)`}},null)]),L.value&&c("div",{class:q(`${e.prefixCls}-switch-left`,{[`${e.prefixCls}-switch-left-disabled`]:x.value<=0}),onClick:le},[I]),L.value&&c("div",{class:q(`${e.prefixCls}-switch-right`,{[`${e.prefixCls}-switch-right-disabled`]:x.value>=T.value-1}),onClick:ce},[v])]})}}});var Zt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const it=()=>({src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,width:[Number,String],height:[Number,String],previewMask:{type:[Boolean,Function],default:void 0},placeholder:dt.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}),st=(e,t)=>{const n=s({},e);return Object.keys(t).forEach(r=>{e[r]===void 0&&(n[r]=t[r])}),n};let qt=0;const lt=ee({compatConfig:{MODE:3},name:"VcImage",inheritAttrs:!1,props:it(),emits:["click","error"],setup(e,t){let{attrs:n,slots:r,emit:o}=t;const i=p(()=>e.prefixCls),u=p(()=>`${i.value}-preview`),m=p(()=>{const g={visible:void 0,onVisibleChange:()=>{},getContainer:void 0};return typeof e.preview=="object"?st(e.preview,g):g}),y=p(()=>{var g;return(g=m.value.src)!==null&&g!==void 0?g:e.src}),I=p(()=>e.placeholder&&e.placeholder!==!0||r.placeholder),v=p(()=>m.value.visible),f=p(()=>m.value.getContainer),D=p(()=>v.value!==void 0),d=(g,R)=>{var M,H;(H=(M=m.value).onVisibleChange)===null||H===void 0||H.call(M,g,R)},[h,A]=rt(!!v.value,{value:v,onChange:d}),w=U(I.value?"loading":"normal");J(()=>e.src,()=>{w.value=I.value?"loading":"normal"});const b=U(null),E=p(()=>w.value==="error"),$=Ne.inject(),{isPreviewGroup:j,setCurrent:l,setShowPreview:S,setMousePosition:C,registerImage:z}=$,te=U(qt++),k=p(()=>e.preview&&!E.value),T=()=>{w.value="normal"},Y=g=>{w.value="error",o("error",g)},x=g=>{if(!D.value){const{left:R,top:M}=nt(g.target);j.value?(l(te.value),C({x:R,y:M})):b.value={x:R,y:M}}j.value?S(!0):A(!0),o("click",g)},Pe=()=>{A(!1),D.value||(b.value=null)},L=U(null);J(()=>L,()=>{w.value==="loading"&&L.value.complete&&(L.value.naturalWidth||L.value.naturalHeight)&&T()});let B=()=>{};ze(()=>{J([y,k],()=>{if(B(),!j.value)return()=>{};B=z(te.value,y.value,k.value),k.value||B()},{flush:"post",immediate:!0})}),et(()=>{B()});const ne=g=>Tt(g)?g+"px":g;return()=>{const{prefixCls:g,wrapperClassName:R,fallback:M,src:H,placeholder:se,wrapperStyle:Ie,rootClassName:le,width:ce,height:re,crossorigin:xe,decoding:Me,alt:ue,sizes:pe,srcset:Oe,usemap:ge,class:ke,style:De}=s(s({},e),n),me=m.value,{icons:oe,maskClassName:a}=me,O=Zt(me,["icons","maskClassName"]),Q=q(g,R,le,{[`${g}-error`]:E.value}),_=E.value&&M?M:y.value,G={crossorigin:xe,decoding:Me,alt:ue,sizes:pe,srcset:Oe,usemap:ge,width:ce,height:re,class:q(`${g}-img`,{[`${g}-img-placeholder`]:se===!0},ke),style:s({height:ne(re)},De)};return c(Ke,null,[c("div",{class:Q,onClick:k.value?x:V=>{o("click",V)},style:s({width:ne(ce),height:ne(re)},Ie)},[c("img",P(P(P({},G),E.value&&M?{src:M}:{onLoad:T,onError:Y,src:H}),{},{ref:L}),null),w.value==="loading"&&c("div",{"aria-hidden":"true",class:`${g}-placeholder`},[se||r.placeholder&&r.placeholder()]),r.previewMask&&k.value&&c("div",{class:[`${g}-mask`,a]},[r.previewMask()])]),!j.value&&k.value&&c(at,P(P({},O),{},{"aria-hidden":!h.value,visible:h.value,prefixCls:u.value,onClose:Pe,mousePosition:b.value,src:_,alt:ue,getContainer:f.value,icons:oe,rootClassName:le}),null)])}}});lt.PreviewGroup=ot;var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Jt(e,o,n[o])})}return e}function Jt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Le=function(t,n){var r=Xe({},t,n.attrs);return c(ie,Xe({},r,{icon:Wt}),null)};Le.displayName="RotateLeftOutlined";Le.inheritAttrs=!1;var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){en(e,o,n[o])})}return e}function en(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Re=function(t,n){var r=Ze({},t,n.attrs);return c(ie,Ze({},r,{icon:Kt}),null)};Re.displayName="RotateRightOutlined";Re.inheritAttrs=!1;var tn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){nn(e,o,n[o])})}return e}function nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ue=function(t,n){var r=qe({},t,n.attrs);return c(ie,qe({},r,{icon:tn}),null)};Ue.displayName="ZoomInOutlined";Ue.inheritAttrs=!1;var rn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){on(e,o,n[o])})}return e}function on(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e=function(t,n){var r=We({},t,n.attrs);return c(ie,We({},r,{icon:rn}),null)};$e.displayName="ZoomOutOutlined";$e.inheritAttrs=!1;var an={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){sn(e,o,n[o])})}return e}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Se=function(t,n){var r=Je({},t,n.attrs);return c(ie,Je({},r,{icon:an}),null)};Se.displayName="SwapOutlined";Se.inheritAttrs=!1;const Ee=e=>({position:e||"absolute",inset:0}),ln=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:r,marginXXS:o,prefixCls:i}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new K("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${i}-mask-info`]:s(s({},wt),{padding:`0 ${r}px`,[t]:{marginInlineEnd:o,svg:{verticalAlign:"baseline"}}})}},cn=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:r,previewOperationColorDisabled:o,motionDurationSlow:i}=e,u=new K(n).setAlpha(.1),m=u.clone().setAlpha(.2);return{[`${t}-operations`]:s(s({},ht(e)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:e.previewOperationColor,listStyle:"none",background:u.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:r,padding:r,cursor:"pointer",transition:`all ${i}`,userSelect:"none","&:hover":{background:m.toRgbString()},"&-disabled":{color:o,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:e.previewOperationSize}})}},un=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:r,previewCls:o,zIndexPopup:i,motionDurationSlow:u}=e,m=new K(t).setAlpha(.1),y=m.clone().setAlpha(.2);return{[`${o}-switch-left, ${o}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:i+1,display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:-e.imagePreviewSwitchSize/2,color:e.previewOperationColor,background:m.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${u}`,pointerEvents:"auto",userSelect:"none","&:hover":{background:y.toRgbString()},"&-disabled":{"&, &:hover":{color:r,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${o}-switch-left`]:{insetInlineStart:e.marginSM},[`${o}-switch-right`]:{insetInlineEnd:e.marginSM}}},pn=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:r,componentCls:o}=e;return[{[`${o}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:s(s({},Ee()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${r} ${t} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":s(s({},Ee()),{transition:`transform ${r} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${o}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${o}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:e.zIndexPopup+1,width:"100%"},"&":[cn(e),un(e)]}]},gn=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:s({},ln(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:s({},Ee())}}},mn=e=>{const{previewCls:t}=e;return{[`${t}-root`]:Qt(e,"zoom"),"&":Ut(e,!0)}},ct=ft("Image",e=>{const t=`${e.componentCls}-preview`,n=Qe(e,{previewCls:t,modalMaskBg:new K("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[gn(n),pn(n),Rt(Qe(n,{componentCls:t})),mn(n)]},e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new K(e.colorTextLightSolid).toRgbString(),previewOperationColorDisabled:new K(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:e.fontSizeIcon*1.5})),ut={rotateLeft:c(Le,null,null),rotateRight:c(Re,null,null),zoomIn:c(Ue,null,null),zoomOut:c($e,null,null),close:c(At,null,null),left:c($t,null,null),right:c(Bt,null,null),flipX:c(Se,null,null),flipY:c(Se,{rotate:90},null)},vn=()=>({previewPrefixCls:String,preview:bt()}),dn=ee({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:vn(),setup(e,t){let{attrs:n,slots:r}=t;const{prefixCls:o,rootPrefixCls:i}=tt("image",e),u=p(()=>`${o.value}-preview`),[m,y]=ct(o),I=p(()=>{const{preview:v}=e;if(v===!1)return v;const f=typeof v=="object"?v:{};return s(s({},f),{rootClassName:y.value,transitionName:je(i.value,"zoom",f.transitionName),maskTransitionName:je(i.value,"fade",f.maskTransitionName)})});return()=>m(c(ot,P(P({},s(s({},n),e)),{},{preview:I.value,icons:ut,previewPrefixCls:u.value}),r))}}),Z=ee({name:"AImage",inheritAttrs:!1,props:it(),setup(e,t){let{slots:n,attrs:r}=t;const{prefixCls:o,rootPrefixCls:i,configProvider:u}=tt("image",e),[m,y]=ct(o),I=p(()=>{const{preview:v}=e;if(v===!1)return v;const f=typeof v=="object"?v:{};return s(s({icons:ut},f),{transitionName:je(i.value,"zoom",f.transitionName),maskTransitionName:je(i.value,"fade",f.maskTransitionName)})});return()=>{var v,f;const D=((f=(v=u.locale)===null||v===void 0?void 0:v.value)===null||f===void 0?void 0:f.Image)||Ct.Image,d=()=>c("div",{class:`${o.value}-mask-info`},[c(Gt,null,null),D?.preview]),{previewMask:h=n.previewMask||d}=e;return m(c(lt,P(P({},s(s(s({},r),e),{prefixCls:o.value})),{},{preview:I.value,rootClassName:q(e.rootClassName,y.value)}),s(s({},n),{previewMask:typeof h=="function"?h:null})))}}});Z.PreviewGroup=dn;Z.install=function(e){return e.component(Z.name,Z),e.component(Z.PreviewGroup.name,Z.PreviewGroup),e};const N=ee({__name:"Image",setup(e){const t=e,n=yt(),r=jt(),o=p(()=>{const i={};return Object.keys(n).filter(u=>u.startsWith("on")).forEach(u=>{i[u]=n[u]}),i});return(i,u)=>(Mt(),St(Ve(Z),It(t,xt(o.value)),Pt({default:Ge(()=>[Te(i.$slots,"default")]),_:2},[Ve(r).placeholder?{name:"placeholder",fn:Ge(m=>[Te(i.$slots,"placeholder",Ot(kt(m||{})))]),key:"0"}:void 0]),1040))}});N.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},slots:[{name:"placeholder",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Image/Image.vue"]};const Nn={title:"Components/Image",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{alt:{control:"text",description:"图像描述"},fallback:{control:"text",description:"加载失败容错地址"},height:{control:"text",description:"图像高度"},placeholder:{control:"text",description:"加载占位，为 true 时使用默认占位"},preview:{control:"boolean",description:"预览参数，为 false 时禁用"},src:{control:"text",description:"图片地址"},width:{control:"text",description:"图像宽度"}}},de={render:e=>({components:{CgImage:N},setup(){return{args:e}},template:`
      <CgImage v-bind="args" />
    `}),args:{width:200,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg",alt:"示例图片"}},fe={render:()=>({components:{CgImage:N},template:`
      <CgImage
        width="200"
        height="200"
        src="error.jpg"
        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN4BMghRGi0jtIaxFhGDs7FzvrLOxdGBs7SzYWdpaNvQsrGzsXmXvXVja2rGDEfrLOyEQcrQRmRv3rU/+m+6v/1Hvee5AaGb3dPV1dXV+9bx/aGFmRAgAA"
        alt="加载失败的图片"
      />
    `})},we={render:()=>({components:{CgImage:N},template:`
      <CgImage
        width="200"
        height="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        placeholder="true"
        alt="带占位符的图片"
      />
    `})},he={render:()=>({components:{CgImage:N},template:`
      <CgImage
        width="200"
        height="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        alt="自定义占位符"
      >
        <template #placeholder>
          <div style="width: 200px; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999;">
            加载中...
          </div>
        </template>
      </CgImage>
    `})},Ae={render:()=>({components:{CgImage:N},template:`
      <CgImage
        width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        :preview="false"
        alt="禁用预览"
      />
    `})},be={args:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},render:()=>({components:{CgImage:N},setup(){return{previewConfig:{visible:!1,onVisibleChange:t=>{console.log("预览状态变化:",t)},getContainer:!1}}},template:`
      <CgImage
        width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        :preview="previewConfig"
        alt="自定义预览配置"
      />
    `})},Ce={render:()=>({components:{CgImage:N},setup(){return{images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg","https://zos.alipayobjects.com/rmsportal/nJRMjhzSBpDHSp.jpg","https://zos.alipayobjects.com/rmsportal/ngqDzydkqHnVXSS.jpg"]}},template:`
      <div style="display: flex; gap: 16px;">
        <CgImage
          v-for="(src, index) in images"
          :key="index"
          width="150"
          height="150"
          :src="src"
          :alt="'图片 ' + (index + 1)"
          style="object-fit: cover;"
        />
      </div>
    `})},ye={render:()=>({components:{CgImage:N},template:`
      <div style="max-width: 400px;">
        <CgImage
          width="100%"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
          alt="响应式图片"
          style="display: block;"
        />
      </div>
    `})};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgImage: Image
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CgImage v-bind="args" />
    \`
  }),
  args: {
    width: 200,
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg',
    alt: '示例图片'
  }
}`,...de.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    template: \`
      <CgImage
        width="200"
        height="200"
        src="error.jpg"
        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN4BMghRGi0jtIaxFhGDs7FzvrLOxdGBs7SzYWdpaNvQsrGzsXmXvXVja2rGDEfrLOyEQcrQRmRv3rU/+m+6v/1Hvee5AaGb3dPV1dXV+9bx/aGFmRAgAA"
        alt="加载失败的图片"
      />
    \`
  })
}`,...fe.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    template: \`
      <CgImage
        width="200"
        height="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        placeholder="true"
        alt="带占位符的图片"
      />
    \`
  })
}`,...we.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    template: \`
      <CgImage
        width="200"
        height="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        alt="自定义占位符"
      >
        <template #placeholder>
          <div style="width: 200px; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999;">
            加载中...
          </div>
        </template>
      </CgImage>
    \`
  })
}`,...he.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    template: \`
      <CgImage
        width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        :preview="false"
        alt="禁用预览"
      />
    \`
  })
}`,...Ae.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  render: () => ({
    components: {
      CgImage: Image
    },
    setup() {
      const previewConfig = {
        visible: false,
        onVisibleChange: (visible: boolean) => {
          console.log('预览状态变化:', visible);
        },
        getContainer: false
      };
      return {
        previewConfig
      };
    },
    template: \`
      <CgImage
        width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
        :preview="previewConfig"
        alt="自定义预览配置"
      />
    \`
  })
}`,...be.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    setup() {
      const images = ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg', 'https://zos.alipayobjects.com/rmsportal/nJRMjhzSBpDHSp.jpg', 'https://zos.alipayobjects.com/rmsportal/ngqDzydkqHnVXSS.jpg'];
      return {
        images
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CgImage
          v-for="(src, index) in images"
          :key="index"
          width="150"
          height="150"
          :src="src"
          :alt="'图片 ' + (index + 1)"
          style="object-fit: cover;"
        />
      </div>
    \`
  })
}`,...Ce.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgImage: Image
    },
    template: \`
      <div style="max-width: 400px;">
        <CgImage
          width="100%"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPiUjbvlMlVQ.jpg"
          alt="响应式图片"
          style="display: block;"
        />
      </div>
    \`
  })
}`,...ye.parameters?.docs?.source}}};const Ln=["Basic","Fallback","Placeholder","CustomPlaceholder","PreviewDisabled","CustomPreview","MultipleImages","ResponsiveImage"];export{de as Basic,he as CustomPlaceholder,be as CustomPreview,fe as Fallback,Ce as MultipleImages,we as Placeholder,Ae as PreviewDisabled,ye as ResponsiveImage,Ln as __namedExportsOrder,Nn as default};
