var ye=Object.defineProperty,Ee=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var U=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))we.call(t,n)&&U(e,n,t[n]);if(Q)for(var n of Q(t))$e.call(t,n)&&U(e,n,t[n]);return e},ee=(e,t)=>Ee(e,be(t));var j=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);import{c as Ce,d as C,r as $,a as R,E as ke,b as v,e as f,w as _,z as Ie,f as L,o as p,g as F,h as H,i as Se,j as Ae,k as g,F as O,l as I,m as y,n as B,t as A,p as P,s as Re,u as W,q as se,v as Le,x as Me,y as ae,A as Oe,B as De,C as Ve,D as Te,G as q,H as x,I as Pe,J as qe,K as je,L as Be,M as Fe,N as Ne,O as ze,P as Ue,Q as xe,R as Xe,S as Ye,T as He,U as We,V as Ge,W as Je,X as Ke,Y as Qe,Z as te,_ as Ze,$ as ne,a0 as S,a1 as et}from"./vendor.9e830f57.js";const tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};tt();const G=Ce();function nt(e){e.use(G)}var k=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const ot=C({setup(){let e=$({autoInsertSpace:!0});return{locale:R(Ie),btnConfig:e}}}),st={class:"app-view"};function at(e,t,n,o,s,l){const a=L("router-view"),r=ke;return p(),v("div",st,[f(r,{button:e.btnConfig,locale:e.locale},{default:_(()=>[f(a)]),_:1},8,["button","locale"])])}var rt=k(ot,[["render",at]]);const it="modulepreload",oe={},lt="/",h=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${lt}${o}`,o in oe)return;oe[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":it,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((r,i)=>{a.addEventListener("load",r),a.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},re=F("tagView",()=>{const e=$([{title:"\u4EEA\u8868\u76D8",path:"/dashboard",affix:!0,active:!0}]),t=$([{label:"\u5237   \u65B0",value:"reload"},{label:"\u5173\u95ED\u5176\u4ED6",value:"close-other"},{label:"\u5173\u95ED\u6240\u6709",value:"close-all"}]);return{keepTags:e,downMenu:t,handleClose:r=>{const i=e.findIndex(c=>c.title===r.title);i&&e[i].active&&(e.splice(i,1),e[i-1].active=!0,M.push({path:e[i-1].path}))},handleOpen:r=>{let i=!1;for(const c of e)c.active&&(c.active=!1),c.title===r.title&&(c.active=!0,i=!0);i||e.push(r),M.push({path:r.path})},handleReload:()=>{console.log("handleReload")},handleCloseAll:()=>{console.log("handleCloseAll")},handleCloseOther:()=>{console.log("handleCloseOther")}}}),ct=C({name:"MenuItem",props:{item:{type:Object,required:!0}},setup(e){const t=re();return{handleMenuItem:o=>{var s;((s=o.meta)==null?void 0:s.type)===2?window.open(o.path):t.handleOpen({path:o.path,title:o.meta.title,affix:o.meta.affix,active:!0})}}}});function ut(e,t,n,o,s,l){var u;const a=H,r=L("menu-item",!0),i=Se,c=Ae;return e.item.hidden?I("",!0):(p(),v(O,{key:0},[e.item.alwaysShow&&((u=e.item.children)==null?void 0:u.length)?(p(),g(i,{key:0,index:e.item.path},{title:_(()=>{var d;return[(d=e.item.meta)!=null&&d.icon?(p(),g(a,{key:0},{default:_(()=>{var m;return[y("i",{class:B("iconfont "+((m=e.item.meta)==null?void 0:m.icon))},null,2)]}),_:1})):I("",!0),y("span",null,A(e.item.meta.title),1)]}),default:_(()=>[e.item.children.length?(p(!0),v(O,{key:0},P(e.item.children,d=>(p(),g(r,{key:d.path,item:d},null,8,["item"]))),128)):I("",!0)]),_:1},8,["index"])):!e.item.alwaysShow&&e.item.children?(p(),g(c,{key:1,index:e.item.children[0].path,onClick:t[0]||(t[0]=d=>e.handleMenuItem(e.item.children[0]))},{title:_(()=>{var d,m;return[(d=e.item.children[0].meta)!=null&&d.icon?(p(),g(a,{key:0},{default:_(()=>{var E;return[y("i",{class:B("iconfont "+((E=e.item.children[0].meta)==null?void 0:E.icon))},null,2)]}),_:1})):I("",!0),y("span",null,A((m=e.item.children[0].meta)==null?void 0:m.title),1)]}),_:1},8,["index"])):(p(),g(c,{key:2,index:e.item.path,onClick:t[1]||(t[1]=d=>e.handleMenuItem(e.item))},{title:_(()=>{var d,m;return[(d=e.item.meta)!=null&&d.icon?(p(),g(a,{key:0},{default:_(()=>{var E;return[y("i",{class:B("iconfont "+((E=e.item.meta)==null?void 0:E.icon))},null,2)]}),_:1})):I("",!0),y("span",null,A((m=e.item.meta)==null?void 0:m.title),1)]}),_:1},8,["index"]))],64))}var ie=k(ct,[["render",ut]]);const le=F("setting",()=>{const e=R(!1),t="Nest.js \u5FAE\u670D\u52A1\u540E\u53F0\u7BA1\u7406\u6A21\u677F";return{sidebarLog:R(!1),title:t,isCollapse:e}}),ce=F("menu",()=>{const e=$([]),t=$([]),n=$([...Y]),o=(i,c)=>{for(const u of i)r(u,c);return t.push(...i,{id:9999,path:"/:pathMatch(.*)*",component:()=>h(()=>import("./404.f0398167.js"),["assets/404.f0398167.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),meta:{title:"404",type:1,cache:!1,pid:0,affix:!1},hidden:!0,redirect:"/"}),Y.push(...t),n.push(...i),t},s={"../../views/404.vue":()=>h(()=>import("./404.f0398167.js"),["assets/404.f0398167.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/dashboard/dashboard.vue":()=>h(()=>import("./dashboard.4aec8056.js"),["assets/dashboard.4aec8056.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/log/loginLog.vue":()=>h(()=>import("./loginLog.cf409f08.js"),["assets/loginLog.cf409f08.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/login/login.vue":()=>h(()=>import("./login.5ea0e557.js"),["assets/login.5ea0e557.js","assets/login.0c92168e.css","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css","assets/index.8d87168f.js"]),"../../views/cms/category/category.vue":()=>h(()=>import("./category.26cc066c.js"),["assets/category.26cc066c.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/cms/content/content.vue":()=>h(()=>import("./content.9e7b9ad2.js"),["assets/content.9e7b9ad2.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/cms/tag/tag.vue":()=>h(()=>import("./tag.95a44f82.js"),["assets/tag.95a44f82.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/system/manage/manage.vue":()=>h(()=>import("./manage.478c9c0e.js"),["assets/manage.478c9c0e.js","assets/manage.6bc41f16.css","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css","assets/manageDialog.49e924d4.js","assets/manageDialog.0e9d0263.css","assets/index.8d87168f.js"]),"../../views/system/menu/menu.vue":()=>h(()=>import("./menu.86baea45.js"),["assets/menu.86baea45.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/system/role/role.vue":()=>h(()=>import("./role.108ab625.js"),["assets/role.108ab625.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),"../../views/system/manage/components/manageDialog.vue":()=>h(()=>import("./manageDialog.49e924d4.js").then(function(i){return i.m}),["assets/manageDialog.49e924d4.js","assets/manageDialog.0e9d0263.css","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css","assets/index.8d87168f.js"])},l=i=>{const{id:c,type:u,icon:d,cache:m,hide:E,title:D,url:w,name:V,action:z,sort:Jt,path:K,pid:ge,redirect:ve}=i;return{id:c,path:w,component:K?s[`../../views${K}`]:Re(he),redirect:ve,hidden:E,alwaysShow:!0,name:V,meta:{type:u,icon:d,cache:m,title:D,pid:ge,affix:!1}}},a=i=>{const c=[],u=[],d=[];i.sort((m,E)=>m.sort-E.sort);for(const m of i){const{id:E,title:D,action:w,sort:V,pid:z}=m;m.type===3?d.push({id:E,pid:z,title:D,action:w,sort:V}):(e.push(m),z===0?c.push(l(m)):u.push(l(m)))}return{topMenu:c,subMenu:u,actions:d}},r=(i,c)=>{var d;const u=[];for(const m of c)((d=m.meta)==null?void 0:d.pid)===i.id&&(m.path=i.path+m.path,u.push(m));u.length&&(i.children=u)};return{filterMenu:a,resolveMenu:l,originAsyncMenu:e,asyncMenu:t,allMenu:n,setAsyncMenu:o}});const dt=C({name:"Sidebar",components:{menuItem:ie},setup(){const t=ce().allMenu,n=le(),o=W();return{menu:t,route:o,settingStore:n}}}),pt=["width"],_t={key:0,class:"sidebar-title"};function mt(e,t,n,o,s,l){const a=se,r=ie,i=Le,c=Me;return p(),g(c,{width:e.settingStore.isCollapse?"64px":"210px"},{default:_(()=>[e.settingStore.sidebarLog?(p(),v("div",{key:0,width:e.settingStore.isCollapse?"64px":"200px",class:"horizontal-collapse-transition sidebar-header"},[f(a,{class:"sidebar-logo",src:"http://egg.yls.red/static/img/logo.21bf62ca.png"}),e.settingStore.isCollapse?I("",!0):(p(),v("h1",_t,"nestjs \u5FAE\u670D\u52A1"))],8,pt)):I("",!0),f(i,{"default-active":e.route.path,"background-color":"#304156","text-color":"#fff",collapse:e.settingStore.isCollapse,"unique-opened":"","collapse-transition":!1},{default:_(()=>[(p(!0),v(O,null,P(e.menu,u=>(p(),g(r,{key:u.path,item:u},null,8,["item"]))),128))]),_:1},8,["default-active","collapse"])]),_:1},8,["width"])}var ue=k(dt,[["render",mt]]);const ft=C({name:"TagView",setup(){const e=W();let t=R(!1),n=$({top:"0px",left:"0px"});const o=re(),s=o.keepTags,l=o.downMenu;o.handleOpen({path:e.path,title:e.meta.title,affix:!1,active:!0}),ae(t,()=>{var c,u;t.value?(c=document.querySelector("#app"))==null||c.addEventListener("click",r):(u=document.querySelector("#app"))==null||u.removeEventListener("click",r)});const a=(c,u)=>{n.left=u.layerX+"px",n.top=u.layerY+"px",t.value=!0},r=()=>{t.value=!1};return{tags:s,tagStore:o,openDownMenu:a,downFlag:t,position:n,downMenu:l,eventClick:c=>{switch(c){case"reload":o.handleReload();break;case"close-other":o.handleCloseOther();break;case"close-all":o.handleCloseAll();break}}}}}),ht={class:"tag-view"},gt=["onClick"];function vt(e,t,n,o,s,l){const a=Oe;return p(),v("div",ht,[(p(!0),v(O,null,P(e.tags,r=>(p(),g(a,{key:r.title,closable:!r.affix,class:B(r.active?"el-tag-active":""),onClose:x(i=>e.tagStore.handleClose(r),["stop"]),onClick:x(i=>e.tagStore.handleOpen(r),["left"]),onContextmenu:x(i=>e.openDownMenu(r,i),["prevent","right"])},{default:_(()=>[q(A(r.title),1)]),_:2},1032,["closable","class","onClose","onClick","onContextmenu"]))),128)),De(y("div",{class:"down-box",style:Te(e.position)},[(p(!0),v(O,null,P(e.downMenu,r=>(p(),v("div",{key:r.label,class:"down-item",onClick:i=>e.eventClick(r.value)},A(r.label),9,gt))),128))],4),[[Ve,e.downFlag]])])}var de=k(ft,[["render",vt],["__scopeId","data-v-4b77c506"]]);const pe=F("user",()=>{const e=R(null);let t=$({avatar:"",ctime:"",id:null,nickname:"",roleId:null,username:""});return{userInfo:t,token:e,setToken:l=>{e.value=l,sessionStorage.setItem("token",l)},setUserInfo:l=>{const{avatar:a,ctime:r,id:i,nickname:c,roleId:u,username:d}=l;t={avatar:a,ctime:r,id:i,nickname:c,roleId:u,username:d}},logout:()=>{sessionStorage.removeItem("token"),M.push({path:"/login"})}}}),yt=C({name:"Avatar",components:{caretBottom:Pe},setup(){return{userStore:pe()}}}),Et={class:"avatar-container"},bt=q("\u6587\u6863"),wt=q("\u4E2A\u4EBA\u4E2D\u5FC3"),$t=q("\u9000\u51FA\u767B\u5F55");function Ct(e,t,n,o,s,l){const a=se,r=L("caret-bottom"),i=H,c=qe,u=je,d=Be;return p(),v("div",Et,[f(d,{trigger:"click",size:"small"},{dropdown:_(()=>[f(u,null,{default:_(()=>[f(c,null,{default:_(()=>[bt]),_:1}),f(c,null,{default:_(()=>[wt]),_:1}),f(c,{onClick:e.userStore.logout},{default:_(()=>[$t]),_:1},8,["onClick"])]),_:1})]),default:_(()=>[f(a,{src:"http://egg.yls.red/upload/avatar.gif?imageView2/1/w/80/h/80",class:"user-avatar"}),f(i,null,{default:_(()=>[f(r)]),_:1})]),_:1})])}var _e=k(yt,[["render",Ct]]);const kt=C({name:"ActionBar",setup(){let e=R(!1);return{openSetting:()=>{e.value=!0},drawerFlag:e}}}),me=e=>(Ne("data-v-49647ed3"),e=e(),ze(),e),It={class:"action-bar"},St={class:"action-list"},At=me(()=>y("i",{class:"iconfont icon-quanping_o"},null,-1)),Rt=me(()=>y("span",null,"Hi, there!",-1));function Lt(e,t,n,o,s,l){const a=Fe;return p(),v("div",It,[y("div",St,[y("i",{class:"iconfont icon-quanjushezhi_o",onClick:t[0]||(t[0]=(...r)=>e.openSetting&&e.openSetting(...r))}),At]),f(a,{modelValue:e.drawerFlag,"onUpdate:modelValue":t[1]||(t[1]=r=>e.drawerFlag=r),title:"I am the title",size:"24%"},{default:_(()=>[Rt]),_:1},8,["modelValue"])])}var fe=k(kt,[["render",Lt],["__scopeId","data-v-49647ed3"]]);const Mt=C({name:"Header",components:{expand:Ue,fold:xe,avatar:_e,actionBar:fe,tagView:de},setup(){const e=W(),t=le();let n=R([]);const o=()=>{t.isCollapse=!t.isCollapse};ae(e,(l,a)=>{s()});const s=()=>{let l=e.matched.filter(a=>a.meta&&a.meta.title);n.value=[{path:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8"}},...l]};return s(),{settingStore:t,breadcrumbList:n,handleCollapseChange:o}}}),Ot={class:"header-action"},Dt={class:"icon-box"},Vt={class:"breadcrumb"},Tt={key:0},Pt=["href"];function qt(e,t,n,o,s,l){const a=L("expand"),r=L("fold"),i=H,c=Xe,u=Ye,d=fe,m=_e,E=de,D=He;return p(),g(D,null,{default:_(()=>[y("div",Ot,[y("div",Dt,[f(i,{size:24,color:"#999",onClick:e.handleCollapseChange},{default:_(()=>[e.settingStore.isCollapse?(p(),g(a,{key:0})):(p(),g(r,{key:1}))]),_:1},8,["onClick"])]),y("div",Vt,[f(u,{separator:"/"},{default:_(()=>[(p(!0),v(O,null,P(e.breadcrumbList,(w,V)=>(p(),g(c,{key:w.path},{default:_(()=>[V%2!==0||e.$route.path===w.path?(p(),v("span",Tt,A(w.meta.title),1)):(p(),v("a",{key:1,href:w.path},A(w.meta.title),9,Pt))]),_:2},1024))),128))]),_:1})]),f(d),f(m)]),f(E)]),_:1})}var jt=k(Mt,[["render",qt]]);const Bt=C({name:"Layout",components:{sidebar:ue,uheader:jt}}),Ft=q("Footer");function Nt(e,t,n,o,s,l){const a=ue,r=L("uheader"),i=L("router-view"),c=We,u=Ge,d=Je;return p(),g(d,{class:"app-container"},{default:_(()=>[f(a),f(d,null,{default:_(()=>[f(r),f(c,null,{default:_(()=>[f(i)]),_:1}),f(u,null,{default:_(()=>[Ft]),_:1})]),_:1})]),_:1})}var he=k(Bt,[["render",Nt]]);const Y=[{path:"/login",component:()=>h(()=>import("./login.5ea0e557.js"),["assets/login.5ea0e557.js","assets/login.0c92168e.css","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css","assets/index.8d87168f.js"]),hidden:!0},{path:"/404",component:()=>h(()=>import("./404.f0398167.js"),["assets/404.f0398167.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),hidden:!0},{path:"/",component:he,redirect:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0},alwaysShow:!0,children:[{path:"/dashboard",name:"Dashboard",component:()=>h(()=>import("./dashboard.4aec8056.js"),["assets/dashboard.4aec8056.js","assets/vendor.9e830f57.js","assets/vendor.232fa8b1.css"]),meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0}}]}],M=Ke({history:Qe(),routes:Y});const zt=()=>({VITE_APP_TITLE:"\u751F\u4EA7\u73AF\u5883",VITE_BASE_URL:"http://micro.ukode.cn:8001/",VITE_SOME_KEY:"123",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),{VITE_PROXY_DOMAIN:Zt,VITE_PROXY_DOMAIN_REAL:Ut}=zt(),xt={baseURL:Ut,timeout:1e4,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:e=>ne.stringify(e,{indices:!1}),transformRequest:[(e,t)=>{switch(t["Content-Type"].toLowerCase()){case"application/x-www-form-urlencoded":return ne.stringify(e);case"multipart/form-data;charset=utf-8":return e;default:return JSON.stringify(e)}}]},b=class{constructor(){this.httpInterceptorsRequest(),this.httpInterceptorsResponse()}httpInterceptorsRequest(){b.axiosInstance.interceptors.request.use(t=>{const n=t;if(typeof t.beforeRequestCallback=="function")return t.beforeRequestCallback(n),n;if(b.initConfig.beforeRequestCallback)return b.initConfig.beforeRequestCallback(n),n;const o=sessionStorage.getItem("token");return o&&(t.headers.Authorization="Bearer "+o),n},t=>Promise.reject(t))}httpInterceptorsResponse(){b.axiosInstance.interceptors.response.use(n=>{const o=n.config;return typeof o.beforeResponseCallback=="function"?(o.beforeResponseCallback(n),n.data):(b.initConfig.beforeResponseCallback&&b.initConfig.beforeResponseCallback(n),n.data)},n=>{var s;const o=n;return o.isCancelRequest=te.isCancel(o),Promise.reject((s=o.response)==null?void 0:s.data)})}request({method:t="GET",url:n,data:o={},cache:s=!1,headers:l={}}){let a,r={};if(s){if(a=Ze(r?t+n+JSON.stringify(r):t+n),b.caches[a])return b.caches[a];b.caches[a]=null}return t.toLocaleUpperCase()==="GET"&&(r=o,o={}),new Promise((i,c)=>{b.axiosInstance.request({method:t,url:n,params:r,data:o,headers:l}).then(u=>{s&&(b.caches[a]=u),i(u)}).catch(u=>{c(u)})})}};let T=b;j(T,"caches",{}),j(T,"initConfig",{}),j(T,"axiosInstance",te.create(xt));const Xt=new T,N=Xt.request,Yt=(e={attrs:"all"})=>N({method:"get",url:"/api/v1/menu/list",data:e});S.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const en=e=>N({method:"POST",url:"/api/v1/auth/login",data:e}),Ht=()=>N({method:"get",url:"/api/v1/auth/detail"}),tn=e=>N({method:"get",url:"/api/v1/manage",data:e}),X=ce(G),Wt=pe(G),Gt=["/login"];M.beforeEach(async(e,t,n)=>{if(S.start(),sessionStorage.getItem("token")){if(e.path==="/login")return e.query.to?n(`${e.query.to}`):n("/");if(X.asyncMenu.length>0)return n();try{const[l,a]=await Promise.all([Ht(),Yt({attrs:"all"})]);if(l.code===200&&a.code===200){Wt.$state.userInfo=l.result;const{topMenu:r,subMenu:i,actions:c}=X.filterMenu(a.result),u=X.setAsyncMenu(r,i);for(const d of u)M.addRoute(d);S.done(),n(ee(Z({},e),{replace:!0}))}}catch(l){console.log(l),S.done(),n(`/login?to=${e.path}`)}}else{if(Gt.includes(e.path)){S.done(),n();return}S.done(),n(`/login?to=${e.path}`)}});M.afterEach((e,t)=>{S.done()});const J=et(rt);nt(J);J.use(M);J.mount("#app");export{k as _,pe as a,tn as g,en as l,N as r,le as u};
//# sourceMappingURL=index.a7f87fd0.js.map
