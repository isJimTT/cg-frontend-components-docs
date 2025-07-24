import{d as H,P as q,u as me,a as d,l as Be,r as te,a6 as De,e as W,g as Me,a$ as Pe,aU as We,G as He,H as Oe,_ as z,I as qe,p as Ue,aR as Ie,c as b,w as Ge,aB as Se,aS as F,b as Ae,ax as Ne,aA as de,az as Re,ae as ce,af as pe,ag as ge,ah as ue,ai as S,v as A,aj as fe,ak as ve,al as he,am as x,an as k,ao as E}from"./iframe-CiolPNwv.js";import{S as Ke}from"./index-BtJmWxOl.js";import{P as Fe}from"./index-CxF76u_P.js";import{C as Xe,A as Je}from"./Col-BHb-1vOH.js";import{u as Ve}from"./useBreakpoint-BpzVhzE_.js";import{c as Qe}from"./vnode-B4SLhmi3.js";import{i as Ze}from"./initDefaultProps-CZpOG6Cc.js";import{r as xe}from"./responsiveObserve-Cqxd3VwU.js";import{e as Ye}from"./eagerComputed-DbQ3AthJ.js";import"./LeftOutlined-BWzCsPQo.js";import"./RightOutlined-_q3ZrV7U.js";import"./index-DIa8XZVm.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./KeyCode-D63Tfrq7.js";import"./BaseInput-D2epJhM9.js";import"./css-DDkvXkMO.js";import"./pickAttrs-8uwpYw_5.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./List-CLOwepni.js";import"./isMobile-x7Gj6jC1.js";import"./useMemo-BmGKJ0MZ.js";import"./omit-BBXwSgK8.js";import"./useMergedState-8OkYKI-g.js";import"./useState-Ds4oJkA7.js";import"./DownOutlined-DeIOKUSk.js";import"./CheckOutlined-CIIIVjBf.js";import"./SearchOutlined-UrLs3OCM.js";import"./FormItemContext-BKi0klUv.js";import"./createContext-BoBCVfLB.js";import"./statusUtils-QYI0Q3t5.js";import"./Compact-DDa3__kb.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./compact-item-X_Nkrb5h.js";import"./index-BQIp7ISY.js";import"./firstNotUndefined-CLFzEa0p.js";import"./useFlexGapSupport-CPj-DJgt.js";const et=()=>({avatar:q.any,description:q.any,prefixCls:String,title:q.any}),tt=H({compatConfig:{MODE:3},name:"AListItemMeta",props:et(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:Object,setup(e,t){let{slots:a}=t;const{prefixCls:n}=me("list",e);return()=>{var s,l,r,i,p,c;const g=`${n.value}-item-meta`,u=(s=e.title)!==null&&s!==void 0?s:(l=a.title)===null||l===void 0?void 0:l.call(a),m=(r=e.description)!==null&&r!==void 0?r:(i=a.description)===null||i===void 0?void 0:i.call(a),y=(p=e.avatar)!==null&&p!==void 0?p:(c=a.avatar)===null||c===void 0?void 0:c.call(a),v=d("div",{class:`${n.value}-item-meta-content`},[u&&d("h4",{class:`${n.value}-item-meta-title`},[u]),m&&d("div",{class:`${n.value}-item-meta-description`},[m])]);return d("div",{class:g},[y&&d("div",{class:`${n.value}-item-meta-avatar`},[y]),(u||m)&&v])}}}),we=Symbol("ListContextKey");var at=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const it=()=>({prefixCls:String,extra:q.any,actions:q.array,grid:Object,colStyle:{type:Object,default:void 0}}),nt=H({compatConfig:{MODE:3},name:"AListItem",inheritAttrs:!1,Meta:tt,props:it(),slots:Object,setup(e,t){let{slots:a,attrs:n}=t;const{itemLayout:s,grid:l}=Be(we,{grid:te(),itemLayout:te()}),{prefixCls:r}=me("list",e),i=()=>{var c;const g=((c=a.default)===null||c===void 0?void 0:c.call(a))||[];let u;return g.forEach(m=>{Pe(m)&&!We(m)&&(u=!0)}),u&&g.length>1},p=()=>{var c,g;const u=(c=e.extra)!==null&&c!==void 0?c:(g=a.extra)===null||g===void 0?void 0:g.call(a);return s.value==="vertical"?!!u:!i()};return()=>{var c,g,u,m,y;const{class:v}=n,D=at(n,["class"]),L=r.value,_=(c=e.extra)!==null&&c!==void 0?c:(g=a.extra)===null||g===void 0?void 0:g.call(a),G=(u=a.default)===null||u===void 0?void 0:u.call(a);let h=(m=e.actions)!==null&&m!==void 0?m:De((y=a.actions)===null||y===void 0?void 0:y.call(a));h=h&&!Array.isArray(h)?[h]:h;const B=h&&h.length>0&&d("ul",{class:`${L}-item-action`,key:"actions"},[h.map((M,O)=>d("li",{key:`${L}-item-action-${O}`},[M,O!==h.length-1&&d("em",{class:`${L}-item-action-split`},null)]))]),N=l.value?"div":"li",R=d(N,W(W({},D),{},{class:Me(`${L}-item`,{[`${L}-item-no-flex`]:!p()},v)}),{default:()=>[s.value==="vertical"&&_?[d("div",{class:`${L}-item-main`,key:"content"},[G,B]),d("div",{class:`${L}-item-extra`,key:"extra"},[_])]:[G,B,Qe(_,{key:"extra"})]]});return l.value?d(Xe,{flex:1,style:e.colStyle},{default:()=>[R]}):R}}}),rt=e=>{const{listBorderedCls:t,componentCls:a,paddingLG:n,margin:s,padding:l,listItemPaddingSM:r,marginLG:i,borderRadiusLG:p}=e;return{[`${t}`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:p,[`${a}-header,${a}-footer,${a}-item`]:{paddingInline:n},[`${a}-pagination`]:{margin:`${s}px ${i}px`}},[`${t}${a}-sm`]:{[`${a}-item,${a}-header,${a}-footer`]:{padding:r}},[`${t}${a}-lg`]:{[`${a}-item,${a}-header,${a}-footer`]:{padding:`${l}px ${n}px`}}}},ot=e=>{const{componentCls:t,screenSM:a,screenMD:n,marginLG:s,marginSM:l,margin:r}=e;return{[`@media screen and (max-width:${n})`]:{[`${t}`]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:s}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:s}}}},[`@media screen and (max-width: ${a})`]:{[`${t}`]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:l}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${r}px`}}}}}},st=e=>{const{componentCls:t,antCls:a,controlHeight:n,minHeight:s,paddingSM:l,marginLG:r,padding:i,listItemPadding:p,colorPrimary:c,listItemPaddingSM:g,listItemPaddingLG:u,paddingXS:m,margin:y,colorText:v,colorTextDescription:D,motionDurationSlow:L,lineWidth:_}=e;return{[`${t}`]:z(z({},qe(e)),{position:"relative","*":{outline:"none"},[`${t}-header, ${t}-footer`]:{background:"transparent",paddingBlock:l},[`${t}-pagination`]:{marginBlockStart:r,textAlign:"end",[`${a}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:s,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:p,color:v,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:i},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:v},[`${t}-item-meta-title`]:{marginBottom:e.marginXXS,color:v,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:v,transition:`all ${L}`,"&:hover":{color:c}}},[`${t}-item-meta-description`]:{color:D,fontSize:e.fontSize,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${m}px`,color:D,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:_,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${i}px 0`,color:D,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:i,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${a}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:y,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:r},[`${t}-item-meta`]:{marginBlockEnd:i,[`${t}-item-meta-title`]:{marginBlockEnd:l,color:v,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:i,marginInlineStart:"auto","> li":{padding:`0 ${i}px`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${a}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:u},[`${t}-sm ${t}-item`]:{padding:g},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},lt=He("List",e=>{const t=Oe(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG,listItemPadding:`${e.paddingContentVertical}px ${e.paddingContentHorizontalLG}px`,listItemPaddingSM:`${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,listItemPaddingLG:`${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`});return[st(t),rt(t),ot(t)]},{contentWidth:220}),dt=()=>({bordered:Ae(),dataSource:Re(),extra:F(),grid:Se(),itemLayout:String,loading:de([Boolean,Object]),loadMore:F(),pagination:de([Boolean,Object]),prefixCls:String,rowKey:de([String,Number,Function]),renderItem:Ne(),size:String,split:Ae(),header:F(),footer:F(),locale:Se()}),I=H({compatConfig:{MODE:3},name:"AList",inheritAttrs:!1,Item:nt,props:Ze(dt(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:Object,setup(e,t){let{slots:a,attrs:n}=t;var s,l;Ue(we,{grid:Ie(e,"grid"),itemLayout:Ie(e,"itemLayout")});const r={current:1,total:0},{prefixCls:i,direction:p,renderEmpty:c}=me("list",e),[g,u]=lt(i),m=b(()=>e.pagination&&typeof e.pagination=="object"?e.pagination:{}),y=te((s=m.value.defaultCurrent)!==null&&s!==void 0?s:1),v=te((l=m.value.defaultPageSize)!==null&&l!==void 0?l:10);Ge(m,()=>{"current"in m.value&&(y.value=m.value.current),"pageSize"in m.value&&(v.value=m.value.pageSize)});const D=[],L=o=>(f,$)=>{y.value=f,v.value=$,m.value[o]&&m.value[o](f,$)},_=L("onChange"),G=L("onShowSizeChange"),h=b(()=>typeof e.loading=="boolean"?{spinning:e.loading}:e.loading),B=b(()=>h.value&&h.value.spinning),N=b(()=>{let o="";switch(e.size){case"large":o="lg";break;case"small":o="sm";break}return o}),R=b(()=>({[`${i.value}`]:!0,[`${i.value}-vertical`]:e.itemLayout==="vertical",[`${i.value}-${N.value}`]:N.value,[`${i.value}-split`]:e.split,[`${i.value}-bordered`]:e.bordered,[`${i.value}-loading`]:B.value,[`${i.value}-grid`]:!!e.grid,[`${i.value}-rtl`]:p.value==="rtl"})),M=b(()=>{const o=z(z(z({},r),{total:e.dataSource.length,current:y.value,pageSize:v.value}),e.pagination||{}),f=Math.ceil(o.total/o.pageSize);return o.current>f&&(o.current=f),o}),O=b(()=>{let o=[...e.dataSource];return e.pagination&&e.dataSource.length>(M.value.current-1)*M.value.pageSize&&(o=[...e.dataSource].splice((M.value.current-1)*M.value.pageSize,M.value.pageSize)),o}),Te=Ve(),ae=Ye(()=>{for(let o=0;o<xe.length;o+=1){const f=xe[o];if(Te.value[f])return f}}),_e=b(()=>{if(!e.grid)return;const o=ae.value&&e.grid[ae.value]?e.grid[ae.value]:e.grid.column;if(o)return{width:`${100/o}%`,maxWidth:`${100/o}%`}}),je=(o,f)=>{var $;const P=($=e.renderItem)!==null&&$!==void 0?$:a.renderItem;if(!P)return null;let C;const j=typeof e.rowKey;return j==="function"?C=e.rowKey(o):j==="string"||j==="number"?C=o[e.rowKey]:C=o.key,C||(C=`list-item-${f}`),D[f]=C,P({item:o,index:f})};return()=>{var o,f,$,P,C,j,ie,ne;const ye=(o=e.loadMore)!==null&&o!==void 0?o:(f=a.loadMore)===null||f===void 0?void 0:f.call(a),re=($=e.footer)!==null&&$!==void 0?$:(P=a.footer)===null||P===void 0?void 0:P.call(a),Le=(C=e.header)!==null&&C!==void 0?C:(j=a.header)===null||j===void 0?void 0:j.call(a),be=De((ie=a.default)===null||ie===void 0?void 0:ie.call(a)),ze=!!(ye||e.pagination||re),ke=Me(z(z({},R.value),{[`${i.value}-something-after-last-item`]:ze}),n.class,u.value),$e=e.pagination?d("div",{class:`${i.value}-pagination`},[d(Fe,W(W({},M.value),{},{onChange:_,onShowSizeChange:G}),null)]):null;let oe=B.value&&d("div",{style:{minHeight:"53px"}},null);if(O.value.length>0){D.length=0;const Ce=O.value.map((se,le)=>je(se,le)),Ee=Ce.map((se,le)=>d("div",{key:D[le],style:_e.value},[se]));oe=e.grid?d(Je,{gutter:e.grid.gutter},{default:()=>[Ee]}):d("ul",{class:`${i.value}-items`},[Ce])}else!be.length&&!B.value&&(oe=d("div",{class:`${i.value}-empty-text`},[((ne=e.locale)===null||ne===void 0?void 0:ne.emptyText)||c("List")]));const K=M.value.position||"bottom";return g(d("div",W(W({},n),{},{class:ke}),[(K==="top"||K==="both")&&$e,Le&&d("div",{class:`${i.value}-header`},[Le]),d(Ke,h.value,{default:()=>[oe,be]}),re&&d("div",{class:`${i.value}-footer`},[re]),ye||(K==="bottom"||K==="both")&&$e]))}}});I.install=function(e){return e.component(I.name,I),e.component(I.Item.name,I.Item),e.component(I.Item.Meta.name,I.Item.Meta),e};const w=H({__name:"List",props:{bordered:{type:Boolean},dataSource:{},footer:{},grid:{},header:{},itemLayout:{},loading:{type:[Boolean,Object]},loadMore:{},locale:{},pagination:{type:[Boolean,Object]},renderItem:{},rowKey:{type:[String,Function]},size:{},split:{type:Boolean}},setup(e){const t=e,a=ce(),n=pe(),s=b(()=>{const l={};return Object.keys(a).filter(r=>r.startsWith("on")).forEach(r=>{l[r]=a[r]}),l});return(l,r)=>(he(),ge(A(I),fe(t,ve(s.value)),ue({default:S(()=>[x(l.$slots,"default")]),_:2},[A(n).renderItem?{name:"renderItem",fn:S(i=>[x(l.$slots,"renderItem",k(E(i||{})))]),key:"0"}:void 0,A(n).header?{name:"header",fn:S(i=>[x(l.$slots,"header",k(E(i||{})))]),key:"1"}:void 0,A(n).footer?{name:"footer",fn:S(i=>[x(l.$slots,"footer",k(E(i||{})))]),key:"2"}:void 0,A(n).loadMore?{name:"loadMore",fn:S(i=>[x(l.$slots,"loadMore",k(E(i||{})))]),key:"3"}:void 0]),1040))}});w.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"bordered",required:!1,type:{name:"boolean"}},{name:"dataSource",required:!1,type:{name:"Array",elements:[{name:"any"}]}},{name:"footer",required:!1,type:{name:"any"}},{name:"grid",required:!1,type:{name:"object"}},{name:"header",required:!1,type:{name:"any"}},{name:"itemLayout",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]}},{name:"loading",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"object"}]}},{name:"loadMore",required:!1,type:{name:"any"}},{name:"locale",required:!1,type:{name:"object"}},{name:"pagination",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"object"}]}},{name:"renderItem",required:!1,type:{name:"any"}},{name:"rowKey",required:!1,type:{name:"union",elements:[{name:"string"},{name:"TSParenthesizedType"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"large"'},{name:'"small"'}]}},{name:"split",required:!1,type:{name:"boolean"}}],slots:[{name:"renderItem",scoped:!0,bindings:[]},{name:"header",scoped:!0,bindings:[]},{name:"footer",scoped:!0,bindings:[]},{name:"loadMore",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/List/List.vue"]};const T=H({__name:"ListItem",props:{actions:{},extra:{}},setup(e){const t=I.Item,a=e,n=ce(),s=pe(),l=b(()=>{const r={};return Object.keys(n).filter(i=>i.startsWith("on")).forEach(i=>{r[i]=n[i]}),r});return(r,i)=>(he(),ge(A(t),fe(a,ve(l.value)),ue({default:S(()=>[x(r.$slots,"default")]),_:2},[A(s).actions?{name:"actions",fn:S(p=>[x(r.$slots,"actions",k(E(p||{})))]),key:"0"}:void 0]),1040))}});T.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"any"}]}},{name:"extra",required:!1,type:{name:"any"}}],slots:[{name:"actions",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/List/ListItem.vue"]};const U=H({__name:"ListItemMeta",props:{avatar:{},description:{},title:{}},setup(e){const t=I.Item.Meta,a=e,n=ce(),s=pe(),l=b(()=>{const r={};return Object.keys(n).filter(i=>i.startsWith("on")).forEach(i=>{r[i]=n[i]}),r});return(r,i)=>(he(),ge(A(t),fe(a,ve(l.value)),ue({default:S(()=>[x(r.$slots,"default")]),_:2},[A(s).title?{name:"title",fn:S(p=>[x(r.$slots,"title",k(E(p||{})))]),key:"0"}:void 0,A(s).avatar?{name:"avatar",fn:S(p=>[x(r.$slots,"avatar",k(E(p||{})))]),key:"1"}:void 0]),1040))}});U.__docgenInfo={exportName:"default",displayName:"ListItemMeta",description:"",tags:{},props:[{name:"avatar",required:!1,type:{name:"any"}},{name:"description",required:!1,type:{name:"any"}},{name:"title",required:!1,type:{name:"any"}}],slots:[{name:"title",scoped:!0,bindings:[]},{name:"avatar",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/List/ListItemMeta.vue"]};const na={title:"Components/List",component:w,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{bordered:{control:"boolean",description:"是否展示边框"},dataSource:{control:"object",description:"列表数据源"},itemLayout:{control:"select",options:["horizontal","vertical"],description:"设置 List.Item 布局"},loading:{control:"boolean",description:"当卡片内容还在加载中时，可以用 loading 展示一个占位"},size:{control:"select",options:["default","large","small"],description:"list 的尺寸"},split:{control:"boolean",description:"是否展示分割线"}}},X={render:e=>({components:{CgList:w,CgListItem:T},setup(){return{args:e,data:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."]}},template:`
      <CgList v-bind="args" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>{{ item }}</CgListItem>
        </template>
      </CgList>
    `}),args:{bordered:!0}},J={render:()=>({components:{CgList:w,CgListItem:T,CgListItemMeta:U},setup(){return{data:[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"},{title:"Ant Design Title 3",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"},{title:"Ant Design Title 4",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"}]}},template:`
      <CgList item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    `})},V={render:()=>({components:{CgList:w,CgListItem:T,CgListItemMeta:U},setup(){return{data:[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."}]}},template:`
      <CgList item-layout="vertical" size="large" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <template #actions>
              <span>👁 156</span>
              <span>⭐ 156</span>
              <span>💬 2</span>
            </template>
            <template #extra>
              <img
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            </template>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
            {{ item.content }}
          </CgListItem>
        </template>
      </CgList>
    `})},Q={render:()=>({components:{CgList:w,CgListItem:T},setup(){return{data:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires.","British man dies in Thailand.","Harvard student gets perfect score.","Bank robbery in downtown area."],grid:{gutter:16,column:4}}},template:`
      <CgList :grid="grid" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <div style="padding: 16px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fafafa;">
              {{ item }}
            </div>
          </CgListItem>
        </template>
      </CgList>
    `})},Z={render:()=>({components:{CgList:w,CgListItem:T,CgListItemMeta:U},setup(){return{data:Array.from({length:23},(a,n)=>({title:`Ant Design Title ${n+1}`,description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:`https://joeschmoe.io/api/v1/random?seed=${n}`})),pagination:{onChange:a=>{console.log(a)},pageSize:3}}},template:`
      <CgList
        item-layout="horizontal"
        :data-source="data"
        :pagination="pagination"
      >
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    `})},Y={render:()=>({components:{CgList:w,CgListItem:T,CgListItemMeta:U},setup(){return{data:[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",avatar:"https://joeschmoe.io/api/v1/random"}]}},template:`
      <CgList
        item-layout="horizontal"
        :loading="true"
        :data-source="data"
      >
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    `})},ee={render:()=>({components:{CgList:w,CgListItem:T},setup(){return{data:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl."]}},template:`
      <CgList
        :data-source="data"
        bordered
      >
        <template #header>
          <div>Header</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template>
        <template #renderItem="{ item }">
          <CgListItem>{{ item }}</CgListItem>
        </template>
      </CgList>
    `})};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgList: List,
      CgListItem: ListItem
    },
    setup() {
      const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];
      return {
        args,
        data
      };
    },
    template: \`
      <CgList v-bind="args" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>{{ item }}</CgListItem>
        </template>
      </CgList>
    \`
  }),
  args: {
    bordered: true
  }
}`,...X.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem,
      CgListItemMeta: ListItemMeta
    },
    setup() {
      const data = [{
        title: 'Ant Design Title 1',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }, {
        title: 'Ant Design Title 2',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }, {
        title: 'Ant Design Title 3',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }, {
        title: 'Ant Design Title 4',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }];
      return {
        data
      };
    },
    template: \`
      <CgList item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...J.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem,
      CgListItemMeta: ListItemMeta
    },
    setup() {
      const data = [{
        title: 'Ant Design Title 1',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }, {
        title: 'Ant Design Title 2',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }];
      return {
        data
      };
    },
    template: \`
      <CgList item-layout="vertical" size="large" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <template #actions>
              <span>👁 156</span>
              <span>⭐ 156</span>
              <span>💬 2</span>
            </template>
            <template #extra>
              <img
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            </template>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
            {{ item.content }}
          </CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...V.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem
    },
    setup() {
      const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.', 'British man dies in Thailand.', 'Harvard student gets perfect score.', 'Bank robbery in downtown area.'];
      const grid = {
        gutter: 16,
        column: 4
      };
      return {
        data,
        grid
      };
    },
    template: \`
      <CgList :grid="grid" :data-source="data">
        <template #renderItem="{ item }">
          <CgListItem>
            <div style="padding: 16px; border: 1px solid #d9d9d9; border-radius: 4px; background: #fafafa;">
              {{ item }}
            </div>
          </CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem,
      CgListItemMeta: ListItemMeta
    },
    setup() {
      const data = Array.from({
        length: 23
      }, (_, i) => ({
        title: \`Ant Design Title \${i + 1}\`,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: \`https://joeschmoe.io/api/v1/random?seed=\${i}\`
      }));
      const pagination = {
        onChange: (page: number) => {
          console.log(page);
        },
        pageSize: 3
      };
      return {
        data,
        pagination
      };
    },
    template: \`
      <CgList
        item-layout="horizontal"
        :data-source="data"
        :pagination="pagination"
      >
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...Z.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem,
      CgListItemMeta: ListItemMeta
    },
    setup() {
      const data = [{
        title: 'Ant Design Title 1',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }, {
        title: 'Ant Design Title 2',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        avatar: 'https://joeschmoe.io/api/v1/random'
      }];
      return {
        data
      };
    },
    template: \`
      <CgList
        item-layout="horizontal"
        :loading="true"
        :data-source="data"
      >
        <template #renderItem="{ item }">
          <CgListItem>
            <CgListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
            />
          </CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgList: List,
      CgListItem: ListItem
    },
    setup() {
      const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.'];
      return {
        data
      };
    },
    template: \`
      <CgList
        :data-source="data"
        bordered
      >
        <template #header>
          <div>Header</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template>
        <template #renderItem="{ item }">
          <CgListItem>{{ item }}</CgListItem>
        </template>
      </CgList>
    \`
  })
}`,...ee.parameters?.docs?.source}}};const ra=["Basic","WithMeta","WithActions","Grid","WithPagination","Loading","WithHeaderAndFooter"];export{X as Basic,Q as Grid,Y as Loading,V as WithActions,ee as WithHeaderAndFooter,J as WithMeta,Z as WithPagination,ra as __namedExportsOrder,na as default};
