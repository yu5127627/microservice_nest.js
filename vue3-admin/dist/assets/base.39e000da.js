import{r as n}from"./index.b9411d14.js";import{t as u}from"./index.4632b5d2.js";import{ad as m,a6 as f}from"./vendor.43efceae.js";function l(e){return{all:e=e||new Map,on:function(t,r){var s=e.get(t);s?s.push(r):e.set(t,[r])},off:function(t,r){var s=e.get(t);s&&(r?s.splice(s.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var s=e.get(t);s&&s.slice().map(function(a){a(r)}),(s=e.get("*"))&&s.slice().map(function(a){a(t,r)})}}}const c=l(),i="/api/v1/",F=(e,t,r)=>{e.visible=!0,e.title=t,e.type=r?"update":"create",e.data=r},h=(e,t)=>{m.confirm("\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u64CD\u4F5C\u5417\uFF1F","\u8B66\u544A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",draggable:!0}).then(async()=>{const{code:r,message:s}=await n({method:"DELETE",url:`${i}${t}`,data:{ids:e}});r===200?(u(s),c.emit("list-reload",t)):u(s,"error")}).catch(()=>{f({type:"info",message:"\u64CD\u4F5C\u53D6\u6D88"})})},v=async(e,t)=>{var r,s;try{const{code:a,message:o,result:p}=await n({method:(r=e.data)!=null&&r.id?"PUT":"POST",url:(s=e.data)!=null&&s.id?`${i}${t}/${e.data.id}`:`${i}${t}`,data:e.data});u(o),c.emit("list-reload",t),e.visible=!1}catch(a){if(typeof a.message!="string")for(const o of a.message)u(o,"error",2e3);else u(a.message,"error",2e3)}};export{v as a,c as e,h,F as o};
//# sourceMappingURL=base.39e000da.js.map
