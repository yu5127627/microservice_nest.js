import{a3 as _,d as f,a4 as g,u as h,z as v,f as w,E as y,a5 as S,a6 as b,a as V,t as m,x as D,b as o,w as n,r as B,o as C,G as E}from"./vendor.4870a2ae.js";import{_ as k,u as x,a as I,b as $,g as M}from"./index.5aa7076e.js";const N=(e,t,r,l)=>_({message:e,type:t||"success",duration:r||2e3,icon:l});const U=f({name:"Login",components:{avatarIcon:g},setup(){const e=x(),t=I();$();const r=h(),d=v().query.to;let u=w({username:"admin",password:"123456"});return{formData:u,settingStore:e,handleSubmit:async()=>{try{const{code:a,result:s,message:c}=await M({username:u.username,password:u.password});a===200&&s&&(N(c),t.setToken(s),r.push({path:d||"/"}))}catch(a){console.log(a)}}}}}),L={class:"login-page"},R={class:"form-box"},T={class:"title"},q=E("\u767B\u9646");function z(e,t,r,l,d,u){const i=B("avatar-icon"),a=y,s=S,c=b;return C(),V("div",L,[m("div",R,[m("h1",T,D(e.settingStore.title),1),o(s,{modelValue:e.formData.username,"onUpdate:modelValue":t[0]||(t[0]=p=>e.formData.username=p),class:"item-input",placeholder:"\u8D26\u53F7"},{prefix:n(()=>[o(a,{class:"el-input__icon"},{default:n(()=>[o(i)]),_:1})]),_:1},8,["modelValue"]),o(s,{modelValue:e.formData.password,"onUpdate:modelValue":t[1]||(t[1]=p=>e.formData.password=p),type:"password",class:"item-input",placeholder:"\u5BC6\u7801","show-password":""},{prefix:n(()=>[o(a,{class:"el-input__icon"},{default:n(()=>[o(i)]),_:1})]),_:1},8,["modelValue"]),o(c,{type:"primary","auto-insert-space":"",style:{width:"100%","margin-bottom":"30px"},onClick:e.handleSubmit},{default:n(()=>[q]),_:1},8,["onClick"])])])}var P=k(U,[["render",z],["__scopeId","data-v-cdb2b392"]]);export{P as default};
//# sourceMappingURL=login.c01bc428.js.map
