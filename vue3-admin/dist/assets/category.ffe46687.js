import{d as E,r as C,a as L,ae as $,af as w,ag as F,ah as M,f as N,ac as V,o as d,b as g,m as h,e as u,w as _,B as q,k as B,F as D,G as f,t as k,l as m,a6 as z}from"./vendor.42ea62c2.js";/* empty css                   *//* empty css                *//* empty css                    */import{C as O,r as T}from"./categoryDialog.633b5289.js";import{e as U,o as P,h as S}from"./base.dd3c68c1.js";import{_ as G}from"./index.39bf48ea.js";/* empty css                  */import"./lodash.df3e3838.js";const b="blog/category",I=E({name:"Category",components:{CategoryDialog:O},setup(){let e=C({}),p=L(""),v=C({visible:!1,title:"",data:{}}),i=C({data:[],load:!1,query:{limit:20,page:1,total:0,attrs:"all"}});const y=(a,n)=>{let l=[];for(const o of n)if(o.pid===a.id){let r=y(o,n);r.length&&(o.children=r),l.push(o)}return l.length&&(a.children=l),l},c=async()=>{try{i.load=!0;const{code:a,result:n}=await T(i.query);n.sort((o,r)=>o.sort-r.sort);const l=[...new Set(n.map(o=>o.group))].map(o=>({name:o,children:[]}));for(const o of l){let r=[],t=[];for(const s of n)s.group===o.name&&(r.push(s),s.pid===0&&t.push(s));for(const s of t)s.children=y(s,r);o.children.push(...t)}i.data=l,i.load=!1}catch{i.load=!1}};return c(),U.on("list-reload",a=>{a===b&&c()}),{parentCate:e,group:p,MODULE:b,list:i,dialogData:v,Edit:$,Delete:w,Plus:F,openDialog:P,handleDelete:S,getList:c}}}),R={class:"page-main"},j={class:"operate-box"},A={class:"operate-btns"},H=f("\u65B0\u589E"),J={class:"custom-tree-node"};function K(e,p,v,i,y,c){const a=z,n=M,l=N("category-dialog"),o=V;return d(),g("div",R,[h("div",j,[h("div",A,[u(a,{type:"primary",onClick:p[0]||(p[0]=r=>{e.group="",e.parentCate={},e.openDialog(e.dialogData,"\u65B0\u589E\u5206\u7C7B")})},{default:_(()=>[H]),_:1})]),u(a,{type:"primary",icon:"Refresh",onClick:p[1]||(p[1]=()=>{e.getList()})})]),q((d(),B(n,{data:e.list.data,"node-key":"id",props:{children:"children",label:"name"},"default-expand-all":"","expand-on-click-node":!1},{default:_(({node:r,data:t})=>[h("span",J,[t.id?(d(),g(D,{key:0},[f(k(t.id)+"_",1)],64)):m("",!0),f(" "+k(r.label)+" ",1),t.sort?(d(),g(D,{key:1},[f("("+k(t.sort)+")",1)],64)):m("",!0),u(a,{type:"primary",icon:e.Plus,size:"small",onClick:()=>{e.group=t.group||r.label,t.id&&(e.parentCate=t),e.openDialog(e.dialogData,"\u65B0\u589E\u5206\u7C7B")}},null,8,["icon","onClick"]),t.group?(d(),g(D,{key:2},[u(a,{type:"primary",icon:e.Edit,size:"small",onClick:s=>e.openDialog(e.dialogData,"\u7F16\u8F91\u5206\u7C7B",t)},null,8,["icon","onClick"]),u(a,{type:"danger",icon:e.Delete,size:"small",onClick:s=>e.handleDelete([t.id],e.MODULE)},null,8,["icon","onClick"])],64)):m("",!0)])]),_:1},8,["data"])),[[o,e.list.load]]),e.dialogData.visible?(d(),B(l,{key:0,"dialog-data":e.dialogData,module:e.MODULE,group:e.group,"parent-cate":e.parentCate},null,8,["dialog-data","module","group","parent-cate"])):m("",!0)])}var ae=G(I,[["render",K],["__scopeId","data-v-1c7bd8a8"]]);export{ae as default};
//# sourceMappingURL=category.ffe46687.js.map
