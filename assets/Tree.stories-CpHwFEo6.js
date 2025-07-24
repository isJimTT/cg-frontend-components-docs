import{d as w,ae as I,af as L,c as B,ag as N,ah as A,ai as D,v,aj as O,ak as V,al as j,am as q,an as P,ao as S,r as u}from"./iframe-CiolPNwv.js";import{T as W}from"./index-ByAmJvpu.js";import"./omit-BBXwSgK8.js";import"./List-CLOwepni.js";import"./index-TLYrHIS2.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./raf-Deuc0E8-.js";import"./supportsPassive-CeduFZj4.js";import"./devWarning-MTSIIkhh.js";import"./pickAttrs-8uwpYw_5.js";import"./eagerComputed-DbQ3AthJ.js";import"./collapseMotion-DlFXgzvQ.js";import"./initDefaultProps-CZpOG6Cc.js";import"./KeyCode-D63Tfrq7.js";import"./FileOutlined-CdeZM7N_.js";import"./index-BCOXaZG9.js";import"./debounce-DAxstHlp.js";import"./isObject-C3e4t58V.js";import"./isObjectLike-Dipz0mOK.js";import"./isSymbol-C1qQj8zB.js";const m=w({__name:"Tree",props:{treeData:{},checkable:{type:Boolean},checkedKeys:{},defaultCheckedKeys:{},defaultExpandedKeys:{},defaultSelectedKeys:{},disabled:{type:Boolean},draggable:{type:Boolean},expandedKeys:{},fieldNames:{},filterTreeNode:{type:Function},height:{},loadData:{type:Function},loadedKeys:{},multiple:{type:Boolean},selectable:{type:Boolean},selectedKeys:{},showIcon:{type:Boolean},showLine:{type:[Boolean,Object]},virtual:{type:Boolean},blockNode:{type:Boolean},checkStrictly:{type:Boolean},defaultExpandAll:{type:Boolean},defaultExpandParent:{type:Boolean},replaceFields:{},searchValue:{},titleRender:{type:Function}},setup(a){const i=a,n=I(),c=L(),g=B(()=>{const l={};return Object.keys(n).filter(y=>y.startsWith("on")).forEach(y=>{l[y]=n[y]}),l});return(l,y)=>(j(),N(v(W),O(i,V(g.value)),A({default:D(()=>[q(l.$slots,"default")]),_:2},[v(c).title?{name:"title",fn:D(p=>[q(l.$slots,"title",P(S(p)))]),key:"0"}:void 0,v(c).switcherIcon?{name:"switcherIcon",fn:D(p=>[q(l.$slots,"switcherIcon",P(S(p)))]),key:"1"}:void 0]),1040))}});m.__docgenInfo={exportName:"default",displayName:"Tree",description:"",tags:{},props:[{name:"treeData",required:!1,type:{name:"Array",elements:[{name:"any"}]}},{name:"checkable",required:!1,type:{name:"boolean"}},{name:"checkedKeys",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"string"}]},{name:"{ checked: string[]; halfChecked: string[] }"}]}},{name:"defaultCheckedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"defaultExpandedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"defaultSelectedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"draggable",required:!1,type:{name:"boolean"}},{name:"expandedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"fieldNames",required:!1,type:{name:"{ children?: string; title?: string; key?: string }"}},{name:"filterTreeNode",required:!1,type:{name:"TSFunctionType"}},{name:"height",required:!1,type:{name:"number"}},{name:"loadData",required:!1,type:{name:"TSFunctionType"}},{name:"loadedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!1,type:{name:"boolean"}},{name:"selectable",required:!1,type:{name:"boolean"}},{name:"selectedKeys",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"showIcon",required:!1,type:{name:"boolean"}},{name:"showLine",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"{ showLeafIcon?: boolean }"}]}},{name:"virtual",required:!1,type:{name:"boolean"}},{name:"blockNode",required:!1,type:{name:"boolean"}},{name:"checkStrictly",required:!1,type:{name:"boolean"}},{name:"defaultExpandAll",required:!1,type:{name:"boolean"}},{name:"defaultExpandParent",required:!1,type:{name:"boolean"}},{name:"replaceFields",required:!1,type:{name:"{ children?: string; title?: string; key?: string }"}},{name:"searchValue",required:!1,type:{name:"string"}},{name:"titleRender",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"title",scoped:!0,bindings:[]},{name:"switcherIcon",scoped:!0,bindings:[]},{name:"default"}],sourceFiles:["/Users/jim/code/font-end/cg-frontend-components/packages/Tree/Tree.vue"]};const se={title:"Components/Tree",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checkable:{control:"boolean",description:"节点前添加 Checkbox 复选框"},multiple:{control:"boolean",description:"支持点选多个节点（节点本身）"},showIcon:{control:"boolean",description:"是否展示 TreeNode title 前的图标"},showLine:{control:"boolean",description:"是否展示连接线"},draggable:{control:"boolean",description:"设置节点可拖拽"},blockNode:{control:"boolean",description:"是否节点占据一行"},defaultExpandAll:{control:"boolean",description:"默认展开所有树节点"}}},h=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]}]}],f={render:a=>({components:{CgTree:m},setup(){const i=u(["0-0-0","0-0-1"]),n=u(["0-0-0","0-0-1"]),c=u(["0-0-0","0-0-1"]);return{args:a,expandedKeys:i,selectedKeys:n,checkedKeys:c,treeData:h}},template:`
      <CgTree
        v-bind="args"
        :tree-data="treeData"
        :expanded-keys="expandedKeys"
        :selected-keys="selectedKeys"
        :checked-keys="checkedKeys"
        @expand="(keys) => expandedKeys = keys"
        @select="(keys) => selectedKeys = keys"
        @check="(keys) => checkedKeys = keys"
      />
    `}),args:{checkable:!0,showIcon:!1,showLine:!1,multiple:!1,draggable:!1,blockNode:!1,defaultExpandAll:!1}},k={render:()=>({components:{CgTree:m},setup(){return{treeData:h,onSelect:(i,n)=>{console.log("selected",i,n)}}},template:`
      <CgTree
        :tree-data="treeData"
        @select="onSelect"
      />
    `})},b={render:()=>({components:{CgTree:m},setup(){const a=u(["0-0-0"]);return{treeData:h,checkedKeys:a,onCheck:n=>{console.log("onCheck",n),a.value=n}}},template:`
      <CgTree
        checkable
        :tree-data="treeData"
        :checked-keys="checkedKeys"
        @check="onCheck"
      />
    `})},x={render:()=>({components:{CgTree:m},setup(){const a=u([...h]);return{gData:a,onDrop:n=>{console.log(n);const c=n.node.key,g=n.dragNode.key,l=n.node.pos.split("-"),y=n.dropPosition-Number(l[l.length-1]),p=(e,t,s)=>{for(let d=0;d<e.length;d++){if(e[d].key===t)return s(e[d],d,e);e[d].children&&p(e[d].children,t,s)}},r=[...a.value];let o;if(p(r,g,(e,t,s)=>{s.splice(t,1),o=e}),!n.dropToGap)p(r,c,e=>{e.children=e.children||[],e.children.unshift(o)});else if((n.node.props.children||[]).length>0&&n.node.props.expanded&&y===1)p(r,c,e=>{e.children=e.children||[],e.children.unshift(o)});else{let e=[],t=0;p(r,c,(s,d,E)=>{e=E,t=d}),y===-1?e.splice(t,0,o):e.splice(t+1,0,o)}a.value=r}}},template:`
      <CgTree
        draggable
        block-node
        :tree-data="gData"
        @drop="onDrop"
      />
    `})},K={render:()=>({components:{CgTree:m},setup(){return{treeData:h}},template:`
      <CgTree
        show-line
        :show-icon="false"
        :tree-data="treeData"
      />
    `})},T={render:()=>({components:{CgTree:m},setup(){return{treeDataWithIcon:[{title:"parent 1",key:"0-0",icon:"📁",children:[{title:"parent 1-0",key:"0-0-0",icon:"📁",children:[{title:"leaf",key:"0-0-0-0",icon:"📄"},{title:"leaf",key:"0-0-0-1",icon:"📄"}]},{title:"parent 1-1",key:"0-0-1",icon:"📁",children:[{title:"leaf",key:"0-0-1-0",icon:"📄"}]}]}]}},template:`
      <CgTree
        show-icon
        :tree-data="treeDataWithIcon"
      />
    `})},C={render:()=>({components:{CgTree:m},setup(){const a=u([]),i=u(""),n=u(!0),c=[],g=r=>{for(let o=0;o<r.length;o++){const e=r[o],{key:t,title:s}=e;c.push({key:t,title:s}),e.children&&g(e.children)}};g(h);const l=(r,o)=>{let e="";for(let t=0;t<o.length;t++){const s=o[t];s.children&&(s.children.some(d=>d.key===r)?e=s.key:l(r,s.children)&&(e=l(r,s.children)))}return e};return{treeData:h,expandedKeys:a,searchValue:i,autoExpandParent:n,onExpand:r=>{a.value=r,n.value=!1},onChange:r=>{const{value:o}=r.target,e=c.map(t=>t.title.indexOf(o)>-1?l(t.key,h):null).filter((t,s,d)=>t&&d.indexOf(t)===s);a.value=e,i.value=o,n.value=!0}}},template:`
      <div>
        <input 
          placeholder="Search" 
          :value="searchValue" 
          @input="onChange"
          style="margin-bottom: 8px; width: 100%; padding: 4px 8px; border: 1px solid #d9d9d9; border-radius: 4px;"
        />
        <CgTree
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :tree-data="treeData"
          :search-value="searchValue"
          @expand="onExpand"
        />
      </div>
    `})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const expandedKeys = ref(['0-0-0', '0-0-1']);
      const selectedKeys = ref(['0-0-0', '0-0-1']);
      const checkedKeys = ref(['0-0-0', '0-0-1']);
      return {
        args,
        expandedKeys,
        selectedKeys,
        checkedKeys,
        treeData
      };
    },
    template: \`
      <CgTree
        v-bind="args"
        :tree-data="treeData"
        :expanded-keys="expandedKeys"
        :selected-keys="selectedKeys"
        :checked-keys="checkedKeys"
        @expand="(keys) => expandedKeys = keys"
        @select="(keys) => selectedKeys = keys"
        @check="(keys) => checkedKeys = keys"
      />
    \`
  }),
  args: {
    checkable: true,
    showIcon: false,
    showLine: false,
    multiple: false,
    draggable: false,
    blockNode: false,
    defaultExpandAll: false
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const onSelect = (selectedKeys: any, info: any) => {
        console.log('selected', selectedKeys, info);
      };
      return {
        treeData,
        onSelect
      };
    },
    template: \`
      <CgTree
        :tree-data="treeData"
        @select="onSelect"
      />
    \`
  })
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const checkedKeys = ref(['0-0-0']);
      const onCheck = (checkedKeysValue: any) => {
        console.log('onCheck', checkedKeysValue);
        checkedKeys.value = checkedKeysValue;
      };
      return {
        treeData,
        checkedKeys,
        onCheck
      };
    },
    template: \`
      <CgTree
        checkable
        :tree-data="treeData"
        :checked-keys="checkedKeys"
        @check="onCheck"
      />
    \`
  })
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const gData = ref([...treeData]);
      const onDrop = (info: any) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data: any[], key: string, callback: Function) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].key === key) {
              return callback(data[i], i, data);
            }
            if (data[i].children) {
              loop(data[i].children, key, callback);
            }
          }
        };
        const data = [...gData.value];
        let dragObj: any;
        loop(data, dragKey, (item: any, index: number, arr: any[]) => {
          arr.splice(index, 1);
          dragObj = item;
        });
        if (!info.dropToGap) {
          loop(data, dropKey, (item: any) => {
            item.children = item.children || [];
            item.children.unshift(dragObj);
          });
        } else if ((info.node.props.children || []).length > 0 && info.node.props.expanded && dropPosition === 1) {
          loop(data, dropKey, (item: any) => {
            item.children = item.children || [];
            item.children.unshift(dragObj);
          });
        } else {
          let ar: any[] = [];
          let i: number = 0;
          loop(data, dropKey, (item: any, index: number, arr: any[]) => {
            ar = arr;
            i = index;
          });
          if (dropPosition === -1) {
            ar.splice(i, 0, dragObj);
          } else {
            ar.splice(i + 1, 0, dragObj);
          }
        }
        gData.value = data;
      };
      return {
        gData,
        onDrop
      };
    },
    template: \`
      <CgTree
        draggable
        block-node
        :tree-data="gData"
        @drop="onDrop"
      />
    \`
  })
}`,...x.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      return {
        treeData
      };
    },
    template: \`
      <CgTree
        show-line
        :show-icon="false"
        :tree-data="treeData"
      />
    \`
  })
}`,...K.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const treeDataWithIcon = [{
        title: 'parent 1',
        key: '0-0',
        icon: '📁',
        children: [{
          title: 'parent 1-0',
          key: '0-0-0',
          icon: '📁',
          children: [{
            title: 'leaf',
            key: '0-0-0-0',
            icon: '📄'
          }, {
            title: 'leaf',
            key: '0-0-0-1',
            icon: '📄'
          }]
        }, {
          title: 'parent 1-1',
          key: '0-0-1',
          icon: '📁',
          children: [{
            title: 'leaf',
            key: '0-0-1-0',
            icon: '📄'
          }]
        }]
      }];
      return {
        treeDataWithIcon
      };
    },
    template: \`
      <CgTree
        show-icon
        :tree-data="treeDataWithIcon"
      />
    \`
  })
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CgTree: Tree
    },
    setup() {
      const expandedKeys = ref<string[]>([]);
      const searchValue = ref('');
      const autoExpandParent = ref(true);
      const dataList: Array<{
        key: string;
        title: string;
      }> = [];
      const generateList = (data: any[]) => {
        for (let i = 0; i < data.length; i++) {
          const node = data[i];
          const {
            key,
            title
          } = node;
          dataList.push({
            key,
            title
          });
          if (node.children) {
            generateList(node.children);
          }
        }
      };
      generateList(treeData);
      const getParentKey = (key: string, tree: any[]): string => {
        let parentKey = '';
        for (let i = 0; i < tree.length; i++) {
          const node = tree[i];
          if (node.children) {
            if (node.children.some((item: any) => item.key === key)) {
              parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
              parentKey = getParentKey(key, node.children);
            }
          }
        }
        return parentKey;
      };
      const onExpand = (keys: string[]) => {
        expandedKeys.value = keys;
        autoExpandParent.value = false;
      };
      const onChange = (e: Event) => {
        const {
          value
        } = e.target as HTMLInputElement;
        const keys = dataList.map(item => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, treeData);
          }
          return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
        expandedKeys.value = keys as string[];
        searchValue.value = value;
        autoExpandParent.value = true;
      };
      return {
        treeData,
        expandedKeys,
        searchValue,
        autoExpandParent,
        onExpand,
        onChange
      };
    },
    template: \`
      <div>
        <input 
          placeholder="Search" 
          :value="searchValue" 
          @input="onChange"
          style="margin-bottom: 8px; width: 100%; padding: 4px 8px; border: 1px solid #d9d9d9; border-radius: 4px;"
        />
        <CgTree
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :tree-data="treeData"
          :search-value="searchValue"
          @expand="onExpand"
        />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};const le=["Default","BasicTree","CheckableTree","DraggableTree","WithLine","WithIcon","SearchableTree"];export{k as BasicTree,b as CheckableTree,f as Default,x as DraggableTree,C as SearchableTree,T as WithIcon,K as WithLine,le as __namedExportsOrder,se as default};
