import{d as h,ae as f,af as I,c as v,ag as y,ah as _,ai as s,v as o,aj as N,ak as S,al as x,am as c,an as V,ao as w}from"./iframe-CiolPNwv.js";import{B as k}from"./index-DRqXHfpB.js";import"./dropdown-BkM7Uf4_.js";import"./Dropdown-6CklYmQZ.js";import"./Trigger-D0k0f5w4.js";import"./raf-Deuc0E8-.js";import"./addEventListener-CC7Mt4qC.js";import"./supportsPassive-CeduFZj4.js";import"./vnode-B4SLhmi3.js";import"./isVisible-BHYmLg1T.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./_getTag-QzhFRzO3.js";import"./isObjectLike-Dipz0mOK.js";import"./isObject-C3e4t58V.js";import"./PortalWrapper-ig5OaliN.js";import"./index-DWv55aqM.js";import"./index-vtqL8OYL.js";import"./useState-Ds4oJkA7.js";import"./devWarning-MTSIIkhh.js";import"./compact-item-X_Nkrb5h.js";import"./createContext-BoBCVfLB.js";import"./Compact-DDa3__kb.js";import"./initDefaultProps-CZpOG6Cc.js";import"./RightOutlined-_q3ZrV7U.js";import"./omit-BBXwSgK8.js";import"./placementArrow-Blz2ASAV.js";import"./roundedArrow-EYTrNAJt.js";import"./move-0SDQgwl3.js";import"./motion-CzF1iTch.js";import"./slide-0rv4PiHr.js";import"./zoom-D2IHdkts.js";import"./index-AnxN_syn.js";import"./shallowequal-M8HXjn8A.js";import"./_arrayIncludes-B8uzE354.js";import"./Overflow-BI-bb3Ua.js";import"./index-TLYrHIS2.js";import"./index-D70oGXWT.js";import"./firstNotUndefined-CLFzEa0p.js";import"./colors-C8AO4Xlz.js";import"./KeyCode-D63Tfrq7.js";import"./collapseMotion-DlFXgzvQ.js";import"./DownOutlined-DeIOKUSk.js";const t=h({__name:"Breadcrumb",props:{routes:{},params:{},separator:{}},setup(m){const B=m,d=f(),n=I(),C=v(()=>{const r={};return Object.keys(d).filter(e=>e.startsWith("on")).forEach(e=>{r[e]=d[e]}),r});return(r,e)=>(x(),y(o(k),N(B,S(C.value)),_({default:s(()=>[c(r.$slots,"default")]),_:2},[o(n).separator?{name:"separator",fn:s(()=>[c(r.$slots,"separator")]),key:"0"}:void 0,o(n).itemRender?{name:"itemRender",fn:s(a=>[c(r.$slots,"itemRender",V(w(a||{})))]),key:"1"}:void 0]),1040))}});t.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"routes",required:!1,type:{name:"Array",elements:[{name:`{
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}`}]}},{name:"params",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"separator",required:!1,type:{name:"string"}}],slots:[{name:"separator"},{name:"itemRender",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Breadcrumb/Breadcrumb.vue"]};const u=h({__name:"BreadcrumbItem",props:{href:{},overlay:{}},setup(m){const B=k.Item,d=m,n=f(),C=I(),r=v(()=>{const e={};return Object.keys(n).filter(a=>a.startsWith("on")).forEach(a=>{e[a]=n[a]}),e});return(e,a)=>(x(),y(o(B),N(d,S(r.value)),_({default:s(()=>[c(e.$slots,"default")]),_:2},[o(C).overlay?{name:"overlay",fn:s(()=>[c(e.$slots,"overlay")]),key:"0"}:void 0]),1040))}});u.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"href",required:!1,type:{name:"string"}},{name:"overlay",required:!1,type:{name:"any"}}],slots:[{name:"overlay"},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Breadcrumb/BreadcrumbItem.vue"]};const he={title:"Components/Breadcrumb",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{separator:{control:"text",description:"分隔符"},routes:{control:"object",description:"路由栈信息"},params:{control:"object",description:"路由的参数"}}},p={render:m=>({components:{CgBreadcrumb:t,CgBreadcrumbItem:u},setup(){return{args:m}},template:`
      <CgBreadcrumb v-bind="args">
        <CgBreadcrumbItem>首页</CgBreadcrumbItem>
        <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    `}),args:{separator:"/"}},i={render:()=>({components:{CgBreadcrumb:t,CgBreadcrumbItem:u},setup(){return{}},template:`
      <CgBreadcrumb>
        <CgBreadcrumbItem>
          <span style="display: inline-flex; align-items: center;">
            <svg viewBox="64 64 896 896" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
            <span style="margin-left: 4px;">首页</span>
          </span>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>
          <span style="display: inline-flex; align-items: center;">
            <svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <span style="margin-left: 4px;">应用列表</span>
          </span>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    `})},b={render:()=>({components:{CgBreadcrumb:t,CgBreadcrumbItem:u},setup(){return{}},template:`
      <div>
        <CgBreadcrumb separator=">">
          <CgBreadcrumbItem>首页</CgBreadcrumbItem>
          <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
          <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
        </CgBreadcrumb>
        <br />
        <CgBreadcrumb separator="-">
          <CgBreadcrumbItem>首页</CgBreadcrumbItem>
          <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
          <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
        </CgBreadcrumb>
      </div>
    `})},g={render:()=>({components:{CgBreadcrumb:t},setup(){return{routes:[{path:"index",breadcrumbName:"首页"},{path:"first",breadcrumbName:"应用列表",children:[{path:"/general",breadcrumbName:"通用应用"},{path:"/layout",breadcrumbName:"布局应用"}]},{path:"second",breadcrumbName:"应用详情"}]}},template:`
      <CgBreadcrumb :routes="routes">
        <template #itemRender="{ route, routes, paths }">
          <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
          <a v-else :href="'#/' + paths.join('/')">{{ route.breadcrumbName }}</a>
        </template>
      </CgBreadcrumb>
    `})},l={render:()=>({components:{CgBreadcrumb:t,CgBreadcrumbItem:u},setup(){return{}},template:`
      <CgBreadcrumb>
        <CgBreadcrumbItem>首页</CgBreadcrumbItem>
        <CgBreadcrumbItem>
          <a href="">应用列表</a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">通用应用</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">布局应用</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">导航应用</a>
              </a-menu-item>
            </a-menu>
          </template>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgBreadcrumb: Breadcrumb,
      CgBreadcrumbItem: BreadcrumbItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CgBreadcrumb v-bind="args">
        <CgBreadcrumbItem>首页</CgBreadcrumbItem>
        <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    \`
  }),
  args: {
    separator: '/'
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgBreadcrumb: Breadcrumb,
      CgBreadcrumbItem: BreadcrumbItem
    },
    setup() {
      return {};
    },
    template: \`
      <CgBreadcrumb>
        <CgBreadcrumbItem>
          <span style="display: inline-flex; align-items: center;">
            <svg viewBox="64 64 896 896" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
            <span style="margin-left: 4px;">首页</span>
          </span>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>
          <span style="display: inline-flex; align-items: center;">
            <svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <span style="margin-left: 4px;">应用列表</span>
          </span>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    \`
  })
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgBreadcrumb: Breadcrumb,
      CgBreadcrumbItem: BreadcrumbItem
    },
    setup() {
      return {};
    },
    template: \`
      <div>
        <CgBreadcrumb separator=">">
          <CgBreadcrumbItem>首页</CgBreadcrumbItem>
          <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
          <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
        </CgBreadcrumb>
        <br />
        <CgBreadcrumb separator="-">
          <CgBreadcrumbItem>首页</CgBreadcrumbItem>
          <CgBreadcrumbItem><a href="">应用列表</a></CgBreadcrumbItem>
          <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
        </CgBreadcrumb>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgBreadcrumb: Breadcrumb
    },
    setup() {
      const routes = [{
        path: 'index',
        breadcrumbName: '首页'
      }, {
        path: 'first',
        breadcrumbName: '应用列表',
        children: [{
          path: '/general',
          breadcrumbName: '通用应用'
        }, {
          path: '/layout',
          breadcrumbName: '布局应用'
        }]
      }, {
        path: 'second',
        breadcrumbName: '应用详情'
      }];
      return {
        routes
      };
    },
    template: \`
      <CgBreadcrumb :routes="routes">
        <template #itemRender="{ route, routes, paths }">
          <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
          <a v-else :href="'#/' + paths.join('/')">{{ route.breadcrumbName }}</a>
        </template>
      </CgBreadcrumb>
    \`
  })
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgBreadcrumb: Breadcrumb,
      CgBreadcrumbItem: BreadcrumbItem
    },
    setup() {
      return {};
    },
    template: \`
      <CgBreadcrumb>
        <CgBreadcrumbItem>首页</CgBreadcrumbItem>
        <CgBreadcrumbItem>
          <a href="">应用列表</a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">通用应用</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">布局应用</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="">导航应用</a>
              </a-menu-item>
            </a-menu>
          </template>
        </CgBreadcrumbItem>
        <CgBreadcrumbItem>应用详情</CgBreadcrumbItem>
      </CgBreadcrumb>
    \`
  })
}`,...l.parameters?.docs?.source}}};const fe=["Basic","WithIcon","WithCustomSeparator","WithRoutes","WithDropdown"];export{p as Basic,b as WithCustomSeparator,l as WithDropdown,i as WithIcon,g as WithRoutes,fe as __namedExportsOrder,he as default};
