import{r as n}from"./index.7c0840fc.js";import{t as r}from"./index.8d87168f.js";import{ad as c,a6 as m}from"./vendor.9e830f57.js";function l(t){return{all:t=t||new Map,on:function(e,u){var a=t.get(e);a?a.push(u):t.set(e,[u])},off:function(e,u){var a=t.get(e);a&&(u?a.splice(a.indexOf(u)>>>0,1):t.set(e,[]))},emit:function(e,u){var a=t.get(e);a&&a.slice().map(function(s){s(u)}),(a=t.get("*"))&&a.slice().map(function(s){s(e,u)})}}}const o=l(),i="/api/v1/",E=(t,e,u)=>{t.visible=!0,t.title=e,t.data=u||{}},F=(t,e)=>{c.confirm("\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u64CD\u4F5C\u5417\uFF1F","\u8B66\u544A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",draggable:!0}).then(async()=>{const{code:u,message:a}=await n({method:"DELETE",url:`${i}${e}`,data:{ids:t}});u===200?(r(a),o.emit("list-reload",e)):r(a,"error")}).catch(()=>{m({type:"info",message:"\u64CD\u4F5C\u53D6\u6D88"})})},h=async(t,e)=>{var u,a;t.visible=!1,await n({method:(u=t.data)!=null&&u.id?"PUT":"POST",url:(a=t.data)!=null&&a.id?`${i}${e}/${t.data.id}`:`${i}${e}`,data:t.data}),o.emit("list-reload",e)};export{h as a,o as e,F as h,E as o};
//# sourceMappingURL=base.fabd8ffb.js.map