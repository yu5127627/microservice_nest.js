import{d as v,a as E,r as g,a7 as L,a8 as h,a9 as B,aa as D,ab as V,ac as w,o as f,b as z,m as c,e as a,w as r,B as k,k as F,G as _,a5 as P,a6 as I}from"./vendor.42ea62c2.js";/* empty css                   *//* empty css                      *//* empty css                  *//* empty css                     *//* empty css                        *//* empty css                    */import{o as U,h as $}from"./base.dd3c68c1.js";import{r as A,_ as N}from"./index.39bf48ea.js";const T=e=>A({method:"get",url:"/api/v1/log/login",data:e}),S=v({name:"LoginLog",setup(){let e=E(),t=g({visible:!1,title:"",data:{}}),l=g({data:[],load:!1,query:{page:1,limit:20,total:0,username:"",address:""}});const n=async()=>{try{l.load=!0;const{code:d,result:i}=await T(l.query);l.data=i.rows,l.query.total=i.total,l.load=!1}catch{l.load=!1}};return n(),{list:l,form:e,dialogData:t,getList:n,openDialog:U,handleDelete:$}}}),j={class:"page-main"},G={class:"filter-box"},H=_("\u641C\u7D22"),J=_("\u91CD\u7F6E"),K={class:"pagination"};function M(e,t,l,n,d,i){const p=P,u=L,m=I,b=h,o=B,y=D,q=V,C=w;return f(),z("div",j,[c("div",G,[a(b,{ref:"form",class:"filter-form",model:e.list.query,"label-width":"80px",inline:""},{default:r(()=>[a(u,{label:"\u540D\u79F0",prop:"username"},{default:r(()=>[a(p,{modelValue:e.list.query.username,"onUpdate:modelValue":t[0]||(t[0]=s=>e.list.query.username=s)},null,8,["modelValue"])]),_:1}),a(u,{label:"\u7EA7\u522B",prop:"address"},{default:r(()=>[a(p,{modelValue:e.list.query.address,"onUpdate:modelValue":t[1]||(t[1]=s=>e.list.query.address=s)},null,8,["modelValue"])]),_:1}),a(u,null,{default:r(()=>[a(m,{type:"primary",onClick:e.getList},{default:r(()=>[H]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:t[2]||(t[2]=()=>{e.form.resetFields()})},{default:r(()=>[J]),_:1})]),_:1})]),_:1},8,["model"])]),k((f(),F(y,{data:e.list.data,border:"",size:"small"},{default:r(()=>[a(o,{prop:"id",label:"ID",width:"80",align:"center"}),a(o,{prop:"username",label:"\u7528\u6237\u540D",align:"center"}),a(o,{prop:"manageId",label:"\u7BA1\u7406\u5458",align:"center"}),a(o,{prop:"ip",label:"IP",align:"center"}),a(o,{prop:"address",label:"\u5730\u5740",align:"center"}),a(o,{prop:"ua",label:"UA",align:"center",width:"360"}),a(o,{prop:"login_time",label:"\u767B\u9646\u65F6\u95F4",align:"center"})]),_:1},8,["data"])),[[C,e.list.load]]),c("div",K,[a(q,{currentPage:e.list.query.page,"onUpdate:currentPage":t[3]||(t[3]=s=>e.list.query.page=s),"page-size":e.list.query.limit,"onUpdate:page-size":t[4]||(t[4]=s=>e.list.query.limit=s),"page-sizes":[20,50,100],small:"",layout:"total, sizes, prev, pager, next, jumper",total:e.list.query.total,onSizeChange:e.getList,onCurrentChange:e.getList},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])])}var ae=N(S,[["render",M]]);export{ae as default};
//# sourceMappingURL=loginLog.9b90315d.js.map
