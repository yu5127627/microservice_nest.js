var be=Object.defineProperty,we=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var W=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))$e.call(t,n)&&W(e,n,t[n]);if(ee)for(var n of ee(t))ke.call(t,n)&&W(e,n,t[n]);return e},ne=(e,t)=>we(e,Ce(t));var B=(e,t,n)=>(W(e,typeof t!="symbol"?t+"":t,n),n);import{c as Ie,d as k,r as C,a as A,E as Se,b as y,e as h,w as _,z as De,f as L,o as p,g as N,h as J,i as Re,j as Ae,k as v,F as T,l as D,m as E,n as F,t as $,p as q,s as Le,u as K,q as Oe,v as ie,x as Ve,y as Te,A as le,B as Me,C as Pe,D as qe,G as je,H as j,I as x,J as Be,K as Fe,L as Ne,M as ze,N as Ue,O as Xe,P as Ye,Q as We,R as xe,S as Ge,T as He,U as Je,V as Ke,W as Qe,X as Ze,Y as et,Z as tt,_ as nt,$ as ot,a0 as oe,a1 as st,a2 as se,a3 as R,a4 as at}from"./vendor.628a587a.js";const rt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};rt();const z=Ie();function it(e){e.use(z)}var I=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const lt=k({setup(){let e=C({autoInsertSpace:!0});return{locale:A(De),btnConfig:e}}}),ct={class:"app-view"};function ut(e,t,n,o,r,l){const s=L("router-view"),a=Se;return p(),y("div",ct,[h(a,{button:e.btnConfig,locale:e.locale},{default:_(()=>[h(s)]),_:1},8,["button","locale"])])}var dt=I(lt,[["render",ut]]);const pt="modulepreload",ae={},_t="/",g=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${_t}${o}`,o in ae)return;ae[o]=!0;const r=o.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":pt,r||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),r)return new Promise((a,c)=>{s.addEventListener("load",a),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ce=N("tagView",()=>{const e=C([{title:"\u4EEA\u8868\u76D8",path:"/dashboard",affix:!0,active:!0}]),t=C([{label:"\u5237   \u65B0",value:"reload"},{label:"\u5173\u95ED\u5176\u4ED6",value:"close-other"},{label:"\u5173\u95ED\u6240\u6709",value:"close-all"}]);return{keepTags:e,downMenu:t,handleClose:a=>{const c=e.findIndex(i=>i.title===a.title);c&&e[c].active&&(e.splice(c,1),e[c-1].active=!0,O.push({path:e[c-1].path}))},handleOpen:a=>{let c=!1;for(const i of e)i.active&&(i.active=!1),i.title===a.title&&(i.active=!0,c=!0);c||(a.active=!0,e.push(a)),O.push({path:a.path,query:a.query})},handleReload:()=>{console.log("handleReload")},handleCloseAll:()=>{console.log("handleCloseAll")},handleCloseOther:()=>{console.log("handleCloseOther")}}}),mt=k({name:"MenuItem",props:{item:{type:Object,required:!0}},setup(e){const t=ce();return{handleMenuItem:o=>{var r;((r=o.meta)==null?void 0:r.type)===2?window.open(o.path):t.handleOpen({path:o.path,title:o.meta.title,affix:o.meta.affix,active:!0})}}}});function ft(e,t,n,o,r,l){var u;const s=J,a=L("menu-item",!0),c=Re,i=Ae;return e.item.hidden?D("",!0):(p(),y(T,{key:0},[e.item.alwaysShow&&((u=e.item.children)==null?void 0:u.length)?(p(),v(c,{key:0,index:e.item.path},{title:_(()=>{var d;return[(d=e.item.meta)!=null&&d.icon?(p(),v(s,{key:0},{default:_(()=>{var m;return[E("i",{class:F("iconfont "+((m=e.item.meta)==null?void 0:m.icon))},null,2)]}),_:1})):D("",!0),E("span",null,$(e.item.meta.title),1)]}),default:_(()=>[e.item.children.length?(p(!0),y(T,{key:0},q(e.item.children,d=>(p(),v(a,{key:d.path,item:d},null,8,["item"]))),128)):D("",!0)]),_:1},8,["index"])):!e.item.alwaysShow&&e.item.children?(p(),v(i,{key:1,index:e.item.children[0].path,onClick:t[0]||(t[0]=d=>e.handleMenuItem(e.item.children[0]))},{title:_(()=>{var d,m;return[(d=e.item.children[0].meta)!=null&&d.icon?(p(),v(s,{key:0},{default:_(()=>{var f;return[E("i",{class:F("iconfont "+((f=e.item.children[0].meta)==null?void 0:f.icon))},null,2)]}),_:1})):D("",!0),E("span",null,$((m=e.item.children[0].meta)==null?void 0:m.title),1)]}),_:1},8,["index"])):(p(),v(i,{key:2,index:e.item.path,onClick:t[1]||(t[1]=d=>e.handleMenuItem(e.item))},{title:_(()=>{var d,m;return[(d=e.item.meta)!=null&&d.icon?(p(),v(s,{key:0},{default:_(()=>{var f;return[E("i",{class:F("iconfont "+((f=e.item.meta)==null?void 0:f.icon))},null,2)]}),_:1})):D("",!0),E("span",null,$((m=e.item.meta)==null?void 0:m.title),1)]}),_:1},8,["index"]))],64))}var ue=I(mt,[["render",ft]]);const U=N("setting",()=>{const e=C({}),t=A(!1),n="Nest.js \u540E\u53F0\u6A21\u677F",o=A(!0);return{parseByOption:(l,s)=>{if(!l)return null;const a=e.option;if(a&&a[s]instanceof Array){const c=a[s].find(i=>i.value===l);return c&&c.label}},defaultConfig:e,sidebarLog:o,title:n,isCollapse:t}}),de=N("menu",()=>{const e=C([]),t=C([]),n=C([...H]),o=(i,u)=>{for(const d of i)a(d,u);return t.push(...i,{id:9999,path:"/:pathMatch(.*)*",component:()=>g(()=>import("./404.d0311392.js"),["assets/404.d0311392.js","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),meta:{title:"404",type:1,cache:!1,pid:0,affix:!1},hidden:!0,redirect:"/"}),H.push(...t),n.push(...i),t},r={"../../views/404.vue":()=>g(()=>import("./404.d0311392.js"),["assets/404.d0311392.js","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),"../../views/dashboard/dashboard.vue":()=>g(()=>import("./dashboard.2db74e31.js"),["assets/dashboard.2db74e31.js","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),"../../views/log/loginLog.vue":()=>g(()=>import("./loginLog.9a13099c.js"),["assets/loginLog.9a13099c.js","assets/el-loading.fb7520d6.css","assets/el-pagination.95890ae0.css","assets/el-select.a5512aee.css","assets/el-scrollbar.3388c378.css","assets/el-table-column.9b165819.css","assets/el-checkbox.860aa1c2.css","assets/el-form-item.1c8e9085.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js"]),"../../views/login/login.vue":()=>g(()=>import("./login.91274f62.js"),["assets/login.91274f62.js","assets/login.d82b543e.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),"../../views/cms/category/category.vue":()=>g(()=>import("./category.4dbded12.js"),["assets/category.4dbded12.js","assets/category.d1266832.css","assets/el-loading.fb7520d6.css","assets/el-tree.e1fda0a7.css","assets/el-checkbox.860aa1c2.css","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-input-number.2c408599.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/category.52e5baaf.js","assets/categoryDialog.7c8240c3.js","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js"]),"../../views/cms/content/add.vue":()=>g(()=>import("./add.031aa44e.js"),["assets/add.031aa44e.js","assets/add.5025dd3b.css","assets/el-form-item.1c8e9085.css","assets/el-checkbox.860aa1c2.css","assets/el-radio.2c1e6670.css","assets/el-scrollbar.3388c378.css","assets/el-select.a5512aee.css","assets/el-input-number.2c408599.css","assets/el-radio-group.7eea6836.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/content.e35d62f8.js","assets/tag.a7b4bd66.js","assets/category.52e5baaf.js"]),"../../views/cms/content/content.vue":()=>g(()=>import("./content.cf0c247a.js"),["assets/content.cf0c247a.js","assets/content.6013f2c4.css","assets/el-loading.fb7520d6.css","assets/el-pagination.95890ae0.css","assets/el-select.a5512aee.css","assets/el-scrollbar.3388c378.css","assets/el-table-column.9b165819.css","assets/el-checkbox.860aa1c2.css","assets/el-form-item.1c8e9085.css","assets/el-dialog.af9102a5.css","assets/el-input-number.2c408599.css","assets/el-radio-group.7eea6836.css","assets/el-radio.2c1e6670.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/content.e35d62f8.js","assets/base.cbd3d2de.js","assets/contentDialog.b952b451.js","assets/lodash.6a43960b.js","assets/tag.a7b4bd66.js","assets/category.52e5baaf.js"]),"../../views/cms/tag/tag.vue":()=>g(()=>import("./tag.fa144c47.js"),["assets/tag.fa144c47.js","assets/tag.4288bf88.css","assets/el-loading.fb7520d6.css","assets/el-tree.e1fda0a7.css","assets/el-checkbox.860aa1c2.css","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-input-number.2c408599.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/tag.a7b4bd66.js","assets/tagDialog.afa23b3b.js","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js"]),"../../views/system/manage/manage.vue":()=>g(()=>import("./manage.988385a7.js"),["assets/manage.988385a7.js","assets/el-loading.fb7520d6.css","assets/el-pagination.95890ae0.css","assets/el-select.a5512aee.css","assets/el-scrollbar.3388c378.css","assets/el-table-column.9b165819.css","assets/el-checkbox.860aa1c2.css","assets/el-form-item.1c8e9085.css","assets/el-dialog.af9102a5.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/manageDialog.baf5bd0d.js"]),"../../views/system/menu/menu.vue":()=>g(()=>import("./menu.b5ad7553.js"),["assets/menu.b5ad7553.js","assets/el-loading.fb7520d6.css","assets/el-table-column.9b165819.css","assets/el-checkbox.860aa1c2.css","assets/el-scrollbar.3388c378.css","assets/el-form-item.1c8e9085.css","assets/el-dialog.af9102a5.css","assets/el-tree.e1fda0a7.css","assets/el-input-number.2c408599.css","assets/el-radio-group.7eea6836.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/menuDialog.8fb2fd25.js","assets/menuDialog.14df16bc.css","assets/lodash.6a43960b.js"]),"../../views/system/role/role.vue":()=>g(()=>import("./role.70b7dc6f.js"),["assets/role.70b7dc6f.js","assets/el-loading.fb7520d6.css","assets/el-pagination.95890ae0.css","assets/el-select.a5512aee.css","assets/el-scrollbar.3388c378.css","assets/el-table-column.9b165819.css","assets/el-checkbox.860aa1c2.css","assets/el-form-item.1c8e9085.css","assets/el-dialog.af9102a5.css","assets/el-tree.e1fda0a7.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/roleDialog.19e61b03.js","assets/authDialog.e20fae3e.js"]),"../../views/cms/category/components/categoryDialog.vue":()=>g(()=>import("./categoryDialog.7c8240c3.js"),["assets/categoryDialog.7c8240c3.js","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-input-number.2c408599.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js","assets/category.52e5baaf.js"]),"../../views/cms/content/components/contentDialog.vue":()=>g(()=>import("./contentDialog.b952b451.js"),["assets/contentDialog.b952b451.js","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-input-number.2c408599.css","assets/el-radio-group.7eea6836.css","assets/el-radio.2c1e6670.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js"]),"../../views/cms/tag/components/tagDialog.vue":()=>g(()=>import("./tagDialog.afa23b3b.js"),["assets/tagDialog.afa23b3b.js","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-input-number.2c408599.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js"]),"../../views/system/manage/components/authDialog.vue":()=>g(()=>import("./authDialog.015c63a1.js"),["assets/authDialog.015c63a1.js","assets/el-dialog.af9102a5.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js"]),"../../views/system/manage/components/manageDialog.vue":()=>g(()=>import("./manageDialog.baf5bd0d.js"),["assets/manageDialog.baf5bd0d.js","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-select.a5512aee.css","assets/el-scrollbar.3388c378.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js"]),"../../views/system/menu/components/menuDialog.vue":()=>g(()=>import("./menuDialog.8fb2fd25.js"),["assets/menuDialog.8fb2fd25.js","assets/menuDialog.14df16bc.css","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/el-tree.e1fda0a7.css","assets/el-checkbox.860aa1c2.css","assets/el-input-number.2c408599.css","assets/el-radio-group.7eea6836.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js","assets/lodash.6a43960b.js"]),"../../views/system/role/components/authDialog.vue":()=>g(()=>import("./authDialog.e20fae3e.js"),["assets/authDialog.e20fae3e.js","assets/el-dialog.af9102a5.css","assets/el-tree.e1fda0a7.css","assets/el-checkbox.860aa1c2.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),"../../views/system/role/components/roleDialog.vue":()=>g(()=>import("./roleDialog.19e61b03.js"),["assets/roleDialog.19e61b03.js","assets/el-dialog.af9102a5.css","assets/el-form-item.1c8e9085.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css","assets/base.cbd3d2de.js"])},l=i=>{const{id:u,type:d,icon:m,cache:f,hide:S,title:w,url:M,name:X,action:Y,sort:on,path:Z,pid:ye,redirect:Ee}=i;return{id:u,path:M,component:Z?r[`../../views${Z}`]:Le(ve),redirect:Ee,hidden:S,alwaysShow:!0,name:X,meta:{type:d,icon:m,cache:f,title:w,pid:ye,affix:!1}}},s=i=>{const u=[],d=[],m=[];i.sort((f,S)=>f.sort-S.sort);for(const f of i){const{id:S,title:w,action:M,sort:X,pid:Y}=f;f.type===3?m.push({id:S,pid:Y,title:w,action:M,sort:X}):(e.push(f),Y===0?u.push(l(f)):d.push(l(f)))}return{topMenu:u,subMenu:d,actions:m}},a=(i,u)=>{var m;const d=[];for(const f of u)((m=f.meta)==null?void 0:m.pid)===i.id&&(f.path=i.path+f.path,d.push(f));d.length&&(i.children=d)},c=(i,u)=>{const d=[];for(const m of u)if(m.pid===i.id){const f=c(m,u);f.length&&(m.children=f),d.push(m)}return d.length&&(i.children=d),d};return{deepMergeMenu:c,filterMenu:s,resolveMenu:l,originAsyncMenu:e,asyncMenu:t,allMenu:n,setAsyncMenu:o}});const ht=k({name:"Sidebar",components:{menuItem:ue},setup(){const t=de().allMenu,n=U(),o=K();return{sidebarTitle:Oe(()=>n.defaultConfig.title||n.title),menu:t,route:o,settingStore:n}}}),gt=["width"],vt={key:0,class:"sidebar-title"};function yt(e,t,n,o,r,l){const s=ie,a=ue,c=Ve,i=Te;return p(),v(i,{width:e.settingStore.isCollapse?"64px":"210px"},{default:_(()=>[e.settingStore.sidebarLog?(p(),y("div",{key:0,width:e.settingStore.isCollapse?"64px":"200px",class:"horizontal-collapse-transition sidebar-header"},[h(s,{class:"sidebar-logo",src:"http://egg.yls.red/static/img/logo.21bf62ca.png",lazy:""}),e.settingStore.isCollapse?D("",!0):(p(),y("h1",vt,$(e.sidebarTitle),1))],8,gt)):D("",!0),h(c,{"default-active":e.route.path,"background-color":"#304156","text-color":"#fff",collapse:e.settingStore.isCollapse,"unique-opened":"","collapse-transition":!1},{default:_(()=>[(p(!0),y(T,null,q(e.menu,u=>(p(),v(a,{key:u.path,item:u},null,8,["item"]))),128))]),_:1},8,["default-active","collapse"])]),_:1},8,["width"])}var pe=I(ht,[["render",yt]]);const Et=k({name:"TagView",setup(){const e=K();let t=A(!1),n=C({top:"0px",left:"0px"});const o=ce(),r=o.keepTags,l=o.downMenu;o.handleOpen({path:e.path,title:e.meta.title,affix:!1,active:!0}),le(t,()=>{var i,u;t.value?(i=document.querySelector("#app"))==null||i.addEventListener("click",a):(u=document.querySelector("#app"))==null||u.removeEventListener("click",a)});const s=(i,u)=>{n.left=u.layerX+"px",n.top=u.layerY+"px",t.value=!0},a=()=>{t.value=!1};return{tags:r,tagStore:o,openDownMenu:s,downFlag:t,position:n,downMenu:l,eventClick:i=>{switch(i){case"reload":o.handleReload();break;case"close-other":o.handleCloseOther();break;case"close-all":o.handleCloseAll();break}}}}}),bt={class:"tag-view"},wt=["onClick"];function Ct(e,t,n,o,r,l){const s=Me;return p(),y("div",bt,[(p(!0),y(T,null,q(e.tags,a=>(p(),v(s,{key:a.title,closable:!a.affix,class:F(a.active?"el-tag-active":""),onClose:x(c=>e.tagStore.handleClose(a),["stop"]),onClick:x(c=>e.tagStore.handleOpen(a),["left"]),onContextmenu:x(c=>e.openDownMenu(a,c),["prevent","right"])},{default:_(()=>[j($(a.title),1)]),_:2},1032,["closable","class","onClose","onClick","onContextmenu"]))),128)),Pe(E("div",{class:"down-box",style:je(e.position)},[(p(!0),y(T,null,q(e.downMenu,a=>(p(),y("div",{key:a.label,class:"down-item",onClick:c=>e.eventClick(a.value)},$(a.label),9,wt))),128))],4),[[qe,e.downFlag]])])}var _e=I(Et,[["render",Ct],["__scopeId","data-v-4b77c506"]]);const me=N("user",()=>{const e=A(null);let t=C({avatar:"",ctime:"",id:null,nickname:"",roleId:null,username:""});return{userInfo:t,token:e,setToken:l=>{e.value=l,sessionStorage.setItem("token",l)},setUserInfo:l=>{const{avatar:s,ctime:a,id:c,nickname:i,roleId:u,username:d}=l;t={avatar:s,ctime:a,id:c,nickname:i,roleId:u,username:d}},logout:()=>{sessionStorage.removeItem("token"),O.push({path:"/login"})}}}),$t=k({name:"Avatar",components:{caretBottom:Be},setup(){return{userStore:me()}}}),kt={class:"avatar-container"},It=j("\u6587\u6863"),St=j("\u4E2A\u4EBA\u4E2D\u5FC3"),Dt=j("\u9000\u51FA\u767B\u5F55");function Rt(e,t,n,o,r,l){const s=ie,a=L("caret-bottom"),c=J,i=Fe,u=Ne,d=ze;return p(),y("div",kt,[h(d,{trigger:"click",size:"small"},{dropdown:_(()=>[h(u,null,{default:_(()=>[h(i,null,{default:_(()=>[It]),_:1}),h(i,null,{default:_(()=>[St]),_:1}),h(i,{onClick:e.userStore.logout},{default:_(()=>[Dt]),_:1},8,["onClick"])]),_:1})]),default:_(()=>[h(s,{src:"http://egg.yls.red/upload/avatar.gif?imageView2/1/w/80/h/80",class:"user-avatar"}),h(c,null,{default:_(()=>[h(a)]),_:1})]),_:1})])}var fe=I($t,[["render",Rt]]);const At=k({name:"ActionBar",setup(){const e=U();let t=A(!1);return{settingStore:e,openSetting:()=>{t.value=!0},drawerFlag:t}}}),he=e=>(Ye("data-v-5699377e"),e=e(),We(),e),Lt={class:"action-bar"},Ot={class:"action-list"},Vt=he(()=>E("i",{class:"iconfont icon-quanping_o"},null,-1)),Tt=he(()=>E("span",null,"\u4FA7\u8FB9\u6807\u9898:",-1));function Mt(e,t,n,o,r,l){const s=Ue,a=Xe;return p(),y("div",Lt,[E("div",Ot,[E("i",{class:"iconfont icon-quanjushezhi_o",onClick:t[0]||(t[0]=(...c)=>e.openSetting&&e.openSetting(...c))}),Vt]),h(a,{modelValue:e.drawerFlag,"onUpdate:modelValue":t[2]||(t[2]=c=>e.drawerFlag=c),title:"\u7CFB\u7EDF\u914D\u7F6E\u9879",size:"20%"},{default:_(()=>[Tt,h(s,{modelValue:e.settingStore.sidebarLog,"onUpdate:modelValue":t[1]||(t[1]=c=>e.settingStore.sidebarLog=c),size:"large"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}var ge=I(At,[["render",Mt],["__scopeId","data-v-5699377e"]]);const Pt=k({name:"Header",components:{expand:xe,fold:Ge,avatar:fe,actionBar:ge,tagView:_e},setup(){const e=K(),t=U();let n=A([]);const o=()=>{t.isCollapse=!t.isCollapse};le(e,(l,s)=>{r()});const r=()=>{let l=e.matched.filter(s=>s.meta&&s.meta.title);n.value=[{path:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8"}},...l]};return r(),{settingStore:t,breadcrumbList:n,handleCollapseChange:o}}}),qt={class:"header-action"},jt={class:"icon-box"},Bt={class:"breadcrumb"},Ft={key:0},Nt=["href"];function zt(e,t,n,o,r,l){const s=L("expand"),a=L("fold"),c=J,i=He,u=Je,d=ge,m=fe,f=_e,S=Ke;return p(),v(S,null,{default:_(()=>[E("div",qt,[E("div",jt,[h(c,{size:24,color:"#999",onClick:e.handleCollapseChange},{default:_(()=>[e.settingStore.isCollapse?(p(),v(s,{key:0})):(p(),v(a,{key:1}))]),_:1},8,["onClick"])]),E("div",Bt,[h(u,{separator:"/"},{default:_(()=>[(p(!0),y(T,null,q(e.breadcrumbList,(w,M)=>(p(),v(i,{key:w.path},{default:_(()=>[M%2!==0||e.$route.path===w.path?(p(),y("span",Ft,$(w.meta.title),1)):(p(),y("a",{key:1,href:w.path},$(w.meta.title),9,Nt))]),_:2},1024))),128))]),_:1})]),h(d),h(m)]),h(f)]),_:1})}var Ut=I(Pt,[["render",zt]]);const Xt=k({name:"Layout",components:{sidebar:pe,uheader:Ut}}),Yt=j("Footer");function Wt(e,t,n,o,r,l){const s=pe,a=L("uheader"),c=L("router-view"),i=Qe,u=Ze,d=et;return p(),v(d,{class:"app-container"},{default:_(()=>[h(s),h(d,null,{default:_(()=>[h(a),h(i,null,{default:_(()=>[h(c)]),_:1}),h(u,null,{default:_(()=>[Yt]),_:1})]),_:1})]),_:1})}var ve=I(Xt,[["render",Wt]]);const H=[{path:"/login",component:()=>g(()=>import("./login.91274f62.js"),["assets/login.91274f62.js","assets/login.d82b543e.css","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),hidden:!0},{path:"/404",component:()=>g(()=>import("./404.d0311392.js"),["assets/404.d0311392.js","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),hidden:!0},{path:"/",component:ve,redirect:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0},alwaysShow:!0,children:[{path:"/dashboard",name:"Dashboard",component:()=>g(()=>import("./dashboard.2db74e31.js"),["assets/dashboard.2db74e31.js","assets/vendor.628a587a.js","assets/vendor.b77cdc6a.css"]),meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0}}]}],O=tt({history:nt(),routes:H});const xt=()=>({VITE_APP_TITLE:"\u751F\u4EA7\u73AF\u5883",VITE_BASE_URL:"http://micro.ukode.cn:8001/",VITE_SOME_KEY:"123",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),re=(e,t,n,o)=>ot({message:e,showClose:!0,type:t||"success",duration:n||2e3,icon:o}),{VITE_PROXY_DOMAIN:rn,VITE_PROXY_DOMAIN_REAL:Gt}=xt(),Ht={baseURL:Gt,timeout:1e4,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:e=>se.stringify(e,{indices:!1}),transformRequest:[(e,t)=>{switch(t["Content-Type"].toLowerCase()){case"application/x-www-form-urlencoded":return se.stringify(e);case"multipart/form-data;charset=utf-8":return e;default:return JSON.stringify(e)}}]},b=class{constructor(){this.httpInterceptorsRequest(),this.httpInterceptorsResponse()}httpInterceptorsRequest(){b.axiosInstance.interceptors.request.use(t=>{const n=t;if(typeof t.beforeRequestCallback=="function")return t.beforeRequestCallback(n),n;if(b.initConfig.beforeRequestCallback)return b.initConfig.beforeRequestCallback(n),n;const o=sessionStorage.getItem("token");return o&&(t.headers.Authorization="Bearer "+o),n},t=>Promise.reject(t))}httpInterceptorsResponse(){b.axiosInstance.interceptors.response.use(n=>{const o=n.config;return typeof o.beforeResponseCallback=="function"?(o.beforeResponseCallback(n),n.data):(b.initConfig.beforeResponseCallback&&b.initConfig.beforeResponseCallback(n),n.data)},n=>{var r;const o=n;return o.isCancelRequest=oe.isCancel(o),Promise.reject((r=o.response)==null?void 0:r.data)})}request({method:t="GET",url:n,data:o={},cache:r=!1,headers:l={}}){let s,a={};if(r){if(s=st(o?t+n+JSON.stringify(o):t+n),b.caches[s])return b.caches[s];b.caches[s]=null}return t.toLocaleUpperCase()==="GET"&&(a=o,o={}),new Promise((c,i)=>{b.axiosInstance.request({method:t,url:n,params:a,data:o,headers:l}).then(u=>{r&&(b.caches[s]=u),c(u)}).catch(u=>{switch(u.code){case 401:sessionStorage.removeItem("token"),re(u.message,"error");break;case 400:case 403:re(u.message,"error");break}i(u)})})}};let P=b;B(P,"caches",{}),B(P,"initConfig",{}),B(P,"axiosInstance",oe.create(Ht));const Jt=new P,V=Jt.request,Kt=(e,t)=>V({method:"get",url:"/api/v1/menu/list",data:e,cache:t}),ln=e=>V({method:"get",url:"/api/v1/menu/list/"+e}),cn=(e,t)=>V({method:"put",url:"/api/v1/menu/list/"+e,data:{menuIds:t}});R.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const un=e=>V({method:"POST",url:"/api/v1/auth/login",data:e}),Qt=()=>V({method:"get",url:"/api/v1/auth/detail"}),dn=e=>V({method:"get",url:"/api/v1/manage",data:e}),Zt=()=>V({method:"get",url:"/api/v1/setting/admin"}),G=de(z),en=me(z),tn=U(z),nn=["/login"];O.beforeEach(async(e,t,n)=>{if(R.start(),sessionStorage.getItem("token")){if(e.path==="/login")return e.query.to?n(`${e.query.to}`):n("/");if(G.asyncMenu.length>0)return n();try{const[l,s,a]=await Promise.all([Qt(),Kt({attrs:"all"}),Zt()]);if(l.code===200&&s.code===200&&a.code===200){Object.assign(tn.defaultConfig,a.result),en.$state.userInfo=l.result;const{topMenu:c,subMenu:i,actions:u}=G.filterMenu(s.result),d=G.setAsyncMenu(c,i);for(const m of d)O.addRoute(m);R.done(),n(ne(te({},e),{replace:!0}))}}catch(l){console.log(l),R.done(),n(`/login?to=${e.path}`)}}else{if(nn.includes(e.path)){R.done(),n();return}R.done(),n(`/login?to=${e.path}`)}});O.afterEach((e,t)=>{R.done()});const Q=at(dt);it(Q);Q.use(O);Q.mount("#app");export{I as _,me as a,ce as b,dn as c,de as d,ln as e,Kt as g,un as l,V as r,cn as s,re as t,U as u};
//# sourceMappingURL=index.6b964819.js.map