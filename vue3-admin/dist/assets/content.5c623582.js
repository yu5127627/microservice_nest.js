import{d as F,a as D,r as _,a7 as E,a8 as V,a9 as B,aa as z,ab as $,f as w,ac as A,o as g,b as L,m as p,e as t,w as n,B as P,k as b,l as N,G as u,a6 as S,a5 as T}from"./vendor.4a9810fe.js";/* empty css                   *//* empty css                      *//* empty css                  *//* empty css                     *//* empty css                        *//* empty css                    */import{e as U,o as I,h as j}from"./base.9d953e07.js";import{a as G}from"./content.5cfa00e9.js";import O from"./contentDialog.ab648f34.js";import{_ as R,b as H}from"./index.c8841313.js";/* empty css                  *//* empty css                        *//* empty css                       *//* empty css                 */import"./lodash.8defdf7a.js";const J=F({name:"Content",components:{ContentDialog:O},setup(){let e=D();const a=H();let c=_({visible:!1,title:"",data:{}}),i=_({data:[],load:!1,query:{page:1,limit:15,total:0}});const d=async()=>{try{i.load=!0;const{code:o,result:r}=await G(i.query);i.data=r.rows,i.query.total=r.total,i.load=!1}catch{i.load=!1}};d();const f=o=>{a.handleOpen({title:"\u6587\u7AE0",path:"/blog/content/add",query:{id:o==null?void 0:o.id},affix:!0,active:!0})};return U.on("list-reload",o=>{o==="blog/content"&&d()}),{list:i,form:e,dialogData:c,tagStore:a,handleAdd:f,getList:d,openDialog:I,handleDelete:j}}}),K={class:"page-main"},M={class:"operate-box"},Q={class:"operate-btns"},W=u("\u65B0\u589E"),X={class:"filter-box"},Y=u("\u641C\u7D22"),Z=u("\u91CD\u7F6E"),x=u("\u7F16\u8F91"),ee=u("\u5220\u9664"),te={class:"pagination"};function ae(e,a,c,i,d,f){const o=S,r=T,m=E,C=V,s=B,y=z,v=$,k=w("content-dialog"),h=A;return g(),L("div",K,[p("div",M,[p("div",Q,[t(o,{type:"primary",onClick:a[0]||(a[0]=l=>e.handleAdd())},{default:n(()=>[W]),_:1})]),t(o,{type:"primary",icon:"Refresh",onClick:a[1]||(a[1]=()=>{e.form.resetFields(),e.getList()})})]),p("div",X,[t(C,{ref:"form",class:"filter-form",model:e.list.query,"label-width":"80px",inline:""},{default:n(()=>[t(m,{label:"\u6635\u79F0",prop:"nickname"},{default:n(()=>[t(r,{modelValue:e.list.query.nickname,"onUpdate:modelValue":a[2]||(a[2]=l=>e.list.query.nickname=l)},null,8,["modelValue"])]),_:1}),t(m,{label:"\u7528\u6237\u540D",prop:"username"},{default:n(()=>[t(r,{modelValue:e.list.query.username,"onUpdate:modelValue":a[3]||(a[3]=l=>e.list.query.username=l)},null,8,["modelValue"])]),_:1}),t(m,null,{default:n(()=>[t(o,{type:"primary",onClick:e.getList},{default:n(()=>[Y]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:a[4]||(a[4]=()=>{e.form.resetFields()})},{default:n(()=>[Z]),_:1})]),_:1})]),_:1},8,["model"])]),P((g(),b(y,{data:e.list.data,border:"",size:"small"},{default:n(()=>[t(s,{prop:"id",label:"ID",width:"60",align:"center"}),t(s,{prop:"title",label:"\u6807\u9898",align:"center"}),t(s,{prop:"status",label:"\u72B6\u6001",align:"center"}),t(s,{prop:"recom",label:"\u63A8\u8350\u6307\u6570",align:"center"}),t(s,{prop:"scan",label:"\u6D4F\u89C8\u91CF",align:"center"}),t(s,{prop:"top",label:"\u7F6E\u9876",align:"center"}),t(s,{prop:"ctime",label:"\u521B\u5EFA\u65F6\u95F4",align:"center"}),t(s,{label:"\u64CD\u4F5C",align:"center"},{default:n(l=>[t(o,{onClick:q=>e.handleAdd(l.row)},{default:n(()=>[x]),_:2},1032,["onClick"]),t(o,{type:"danger",onClick:q=>e.handleDelete([l.row.id],"blog/content")},{default:n(()=>[ee]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[h,e.list.load]]),p("div",te,[t(v,{currentPage:e.list.query.page,"onUpdate:currentPage":a[5]||(a[5]=l=>e.list.query.page=l),"page-size":e.list.query.limit,"onUpdate:page-size":a[6]||(a[6]=l=>e.list.query.limit=l),"page-sizes":[15,20,50,100],small:"",layout:"total, sizes, prev, pager, next, jumper",total:e.list.query.total,onSizeChange:e.getList,onCurrentChange:e.getList},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])]),e.dialogData.visible?(g(),b(k,{key:0,"dialog-data":e.dialogData},null,8,["dialog-data"])):N("",!0)])}var ye=R(J,[["render",ae]]);export{ye as default};
//# sourceMappingURL=content.5c623582.js.map
