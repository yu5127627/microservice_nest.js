import{d as b,a as L,r as D,ag as $,ah as T,ai as w,aj as F,f as N,ae as V,o as n,b as g,m as c,e as p,w as h,C as q,k as f,F as k,H as y,t as v,l as E,a8 as z}from"./vendor.628a587a.js";/* empty css                   *//* empty css                *//* empty css                    */import{r as M}from"./tag.a7b4bd66.js";import O from"./tagDialog.afa23b3b.js";import{e as U,o as P,h as j}from"./base.cbd3d2de.js";import{_ as H}from"./index.6b964819.js";/* empty css                  *//* empty css                     *//* empty css                        */import"./lodash.6a43960b.js";const C="blog/tag",I=b({name:"Tag",components:{TagDialog:O},setup(){let e=L(""),l=D({visible:!1,title:"",data:{}}),o=D({data:[],load:!1,query:{limit:20,page:1,total:0,attrs:"all"}});const _=i=>{let a=[];for(const t of i){let s=a.find(u=>u.name===t.group);s?s.children?s.children.push(t):s.children=[t]:a.push({name:t.group,children:[t]})}return a},d=async()=>{try{o.load=!0;const{code:i,result:a}=await M(o.query);o.data=_(a),o.load=!1}catch{o.load=!1}};return d(),U.on("list-reload",i=>{i===C&&d()}),{group:e,MODULE:C,list:o,dialogData:l,Edit:$,Delete:T,Plus:w,openDialog:P,handleDelete:j,getList:d}}}),R={class:"page-main"},S={class:"operate-box"},A={class:"operate-btns"},G=y("\u65B0\u589E"),J={class:"custom-tree-node"};function K(e,l,o,_,d,i){const a=z,t=F,s=N("tag-dialog"),u=V;return n(),g("div",R,[c("div",S,[c("div",A,[p(a,{type:"primary",onClick:l[0]||(l[0]=m=>{e.group="",e.openDialog(e.dialogData,"\u65B0\u589E\u6807\u7B7E")})},{default:h(()=>[G]),_:1})]),p(a,{type:"primary",icon:"Refresh",onClick:l[1]||(l[1]=()=>{e.getList()})})]),q((n(),f(t,{data:e.list.data,"node-key":"id",props:{children:"children",label:"name"},"default-expand-all":"","expand-on-click-node":!1},{default:h(({node:m,data:r})=>[c("span",J,[r.id?(n(),g(k,{key:0},[y(v(r.id)+"_",1)],64)):E("",!0),y(" "+v(m.label)+" ",1),r.group?(n(),g(k,{key:1},[p(a,{type:"primary",icon:e.Edit,size:"small",onClick:B=>e.openDialog(e.dialogData,"\u7F16\u8F91\u6807\u7B7E",r)},null,8,["icon","onClick"]),p(a,{type:"danger",icon:e.Delete,size:"small",onClick:B=>e.handleDelete([r.id],e.MODULE)},null,8,["icon","onClick"])],64)):(n(),f(a,{key:2,type:"primary",icon:e.Plus,size:"small",onClick:()=>{e.group=m.label,e.openDialog(e.dialogData,"\u65B0\u589E\u6807\u7B7E")}},null,8,["icon","onClick"]))])]),_:1},8,["data"])),[[u,e.list.load]]),e.dialogData.visible?(n(),f(s,{key:0,"dialog-data":e.dialogData,module:e.MODULE,group:e.group},null,8,["dialog-data","module","group"])):E("",!0)])}var se=H(I,[["render",K],["__scopeId","data-v-0804f441"]]);export{se as default};
//# sourceMappingURL=tag.fa144c47.js.map
