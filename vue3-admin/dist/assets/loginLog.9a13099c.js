import{d as v,a as E,r as g,a9 as L,aa as h,ab as D,ac as V,ad as w,ae as z,o as f,b as B,m as c,e as a,w as s,C as k,k as F,H as _,a7 as P,a8 as I}from"./vendor.628a587a.js";/* empty css                   *//* empty css                      *//* empty css                  *//* empty css                     *//* empty css                        *//* empty css                    *//* empty css                     */import{r as U,_ as $}from"./index.6b964819.js";import{o as A,h as N}from"./base.cbd3d2de.js";const T=e=>U({method:"get",url:"/api/v1/log/login",data:e}),S=v({name:"LoginLog",setup(){let e=E(),t=g({visible:!1,title:"",data:{}}),l=g({data:[],load:!1,query:{page:1,limit:20,total:0,username:"",address:""}});const n=async()=>{try{l.load=!0;const{code:d,result:i}=await T(l.query);l.data=i.rows,l.query.total=i.total,l.load=!1}catch{l.load=!1}};return n(),{list:l,form:e,dialogData:t,getList:n,openDialog:A,handleDelete:N}}}),j={class:"page-main"},H={class:"filter-box"},G=_("\u641C\u7D22"),J=_("\u91CD\u7F6E"),K={class:"pagination"};function M(e,t,l,n,d,i){const p=P,u=L,m=I,b=h,o=D,y=V,q=w,C=z;return f(),B("div",j,[c("div",H,[a(b,{ref:"form",class:"filter-form",model:e.list.query,"label-width":"80px",inline:""},{default:s(()=>[a(u,{label:"\u540D\u79F0",prop:"username"},{default:s(()=>[a(p,{modelValue:e.list.query.username,"onUpdate:modelValue":t[0]||(t[0]=r=>e.list.query.username=r)},null,8,["modelValue"])]),_:1}),a(u,{label:"\u7EA7\u522B",prop:"address"},{default:s(()=>[a(p,{modelValue:e.list.query.address,"onUpdate:modelValue":t[1]||(t[1]=r=>e.list.query.address=r)},null,8,["modelValue"])]),_:1}),a(u,null,{default:s(()=>[a(m,{type:"primary",onClick:e.getList},{default:s(()=>[G]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:t[2]||(t[2]=()=>{e.form.resetFields()})},{default:s(()=>[J]),_:1})]),_:1})]),_:1},8,["model"])]),k((f(),F(y,{data:e.list.data,border:"",size:"small"},{default:s(()=>[a(o,{prop:"id",label:"ID",width:"80",align:"center"}),a(o,{prop:"username",label:"\u7528\u6237\u540D",align:"center"}),a(o,{prop:"manageId",label:"\u7BA1\u7406\u5458",align:"center"}),a(o,{prop:"ip",label:"IP",align:"center"}),a(o,{prop:"address",label:"\u5730\u5740",align:"center"}),a(o,{prop:"ua",label:"UA",align:"center",width:"360"}),a(o,{prop:"login_time",label:"\u767B\u9646\u65F6\u95F4",align:"center"})]),_:1},8,["data"])),[[C,e.list.load]]),c("div",K,[a(q,{currentPage:e.list.query.page,"onUpdate:currentPage":t[3]||(t[3]=r=>e.list.query.page=r),"page-size":e.list.query.limit,"onUpdate:page-size":t[4]||(t[4]=r=>e.list.query.limit=r),"page-sizes":[20,50,100],small:"",layout:"total, sizes, prev, pager, next, jumper",total:e.list.query.total,onSizeChange:e.getList,onCurrentChange:e.getList},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])])}var te=$(S,[["render",M]]);export{te as default};
//# sourceMappingURL=loginLog.9a13099c.js.map
