var ve=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var z=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))$e.call(t,n)&&z(e,n,t[n]);if(K)for(var n of K(t))we.call(t,n)&&z(e,n,t[n]);return e},Z=(e,t)=>ye(e,be(t));var B=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n);import{c as Ce,d as C,r as w,a as M,E as ke,b as g,e as m,w as _,z as Ee,f as A,o as p,g as N,h as X,i as Se,j as Ie,k as h,F as L,l as E,m as v,n as F,t as I,p as q,s as Me,u as Y,q as oe,v as Ae,x as Re,y as se,A as Le,B as Oe,C as De,D as Ve,G as P,H as U,I as Te,J as qe,K as Pe,L as Be,M as Fe,N as Ne,O as ze,P as Ue,Q as je,R as xe,S as Xe,T as Ye,U as He,V as We,W as Ge,X as Je,Y as Ke,Z as ee,_ as Qe,$ as te,a0 as S,a1 as Ze}from"./vendor.be1891b2.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}};et();const H=Ce();function tt(e){e.use(H)}var k=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n};const nt=C({setup(){let e=w({autoInsertSpace:!0});return{locale:M(Ee),btnConfig:e}}}),ot={class:"app-view"};function st(e,t,n,s,a,l){const r=A("router-view"),o=ke;return p(),g("div",ot,[m(o,{button:e.btnConfig,locale:e.locale},{default:_(()=>[m(r)]),_:1},8,["button","locale"])])}var at=k(nt,[["render",st]]);const rt="modulepreload",ne={},lt="/",T=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${lt}${s}`,s in ne)return;ne[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":rt,a||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),a)return new Promise((o,i)=>{r.addEventListener("load",o),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},ae=N("tagView",()=>{const e=w([{title:"\u4EEA\u8868\u76D8",path:"/dashboard",affix:!0,active:!0}]),t=w([{label:"\u5237   \u65B0",value:"reload"},{label:"\u5173\u95ED\u5176\u4ED6",value:"close-other"},{label:"\u5173\u95ED\u6240\u6709",value:"close-all"}]);return{keepTags:e,downMenu:t,handleClose:o=>{const i=e.findIndex(c=>c.title===o.title);i&&e[i].active&&(e.splice(i,1),e[i-1].active=!0,R.push({path:e[i-1].path}))},handleOpen:o=>{let i=!1;for(const c of e)c.active&&(c.active=!1),c.title===o.title&&(c.active=!0,i=!0);i||e.push(o),R.push({path:o.path})},handleReload:()=>{console.log("handleReload")},handleCloseAll:()=>{console.log("handleCloseAll")},handleCloseOther:()=>{console.log("handleCloseOther")}}}),it=C({name:"MenuItem",props:{item:{type:Object,required:!0}},setup(e){const t=ae();return{handleMenuItem:s=>{var a;((a=s.meta)==null?void 0:a.type)===2?window.open(s.path):t.handleOpen({path:s.path,title:s.meta.title,affix:s.meta.affix,active:!0})}}}});function ct(e,t,n,s,a,l){var d;const r=X,o=A("menu-item",!0),i=Se,c=Ie;return e.item.hidden?E("",!0):(p(),g(L,{key:0},[e.item.alwaysShow&&((d=e.item.children)==null?void 0:d.length)?(p(),h(i,{key:0,index:e.item.path},{title:_(()=>{var u;return[(u=e.item.meta)!=null&&u.icon?(p(),h(r,{key:0},{default:_(()=>{var f;return[v("i",{class:F("iconfont "+((f=e.item.meta)==null?void 0:f.icon))},null,2)]}),_:1})):E("",!0),v("span",null,I(e.item.meta.title),1)]}),default:_(()=>[e.item.children.length?(p(!0),g(L,{key:0},q(e.item.children,u=>(p(),h(o,{key:u.path,item:u},null,8,["item"]))),128)):E("",!0)]),_:1},8,["index"])):!e.item.alwaysShow&&e.item.children?(p(),h(c,{key:1,index:e.item.children[0].path,onClick:t[0]||(t[0]=u=>e.handleMenuItem(e.item.children[0]))},{title:_(()=>{var u,f;return[(u=e.item.children[0].meta)!=null&&u.icon?(p(),h(r,{key:0},{default:_(()=>{var b;return[v("i",{class:F("iconfont "+((b=e.item.children[0].meta)==null?void 0:b.icon))},null,2)]}),_:1})):E("",!0),v("span",null,I((f=e.item.children[0].meta)==null?void 0:f.title),1)]}),_:1},8,["index"])):(p(),h(c,{key:2,index:e.item.path,onClick:t[1]||(t[1]=u=>e.handleMenuItem(e.item))},{title:_(()=>{var u,f;return[(u=e.item.meta)!=null&&u.icon?(p(),h(r,{key:0},{default:_(()=>{var b;return[v("i",{class:F("iconfont "+((b=e.item.meta)==null?void 0:b.icon))},null,2)]}),_:1})):E("",!0),v("span",null,I((f=e.item.meta)==null?void 0:f.title),1)]}),_:1},8,["index"]))],64))}var re=k(it,[["render",ct]]);const le=N("setting",()=>{const e=M(!1),t="Nest.js \u5FAE\u670D\u52A1\u540E\u53F0\u7BA1\u7406\u6A21\u677F";return{sidebarLog:M(!1),title:t,isCollapse:e}}),ie=N("menu",()=>{const e=w([]),t=w([]),n=w([...x]),s=(o,i)=>{for(const c of o)r(c,i);return t.push(...o,{id:9999,path:"/:pathMatch(.*)*",component:()=>T(()=>import("./404.b41eb5a0.js"),["assets/404.b41eb5a0.js","assets/vendor.be1891b2.js","assets/vendor.232fa8b1.css"]),meta:{title:"404",type:1,cache:!1,pid:0,affix:!1},hidden:!0,redirect:"/"}),x.push(...t),n.push(...o),t},a=o=>{const{id:i,type:c,icon:d,cache:u,hide:f,title:b,url:O,name:$,action:D,sort:Gt,path:J,pid:he,redirect:ge}=o;return{id:i,path:O,component:J?()=>T(()=>import(`../../views${J}`),[]):Me(fe),redirect:ge,hidden:f,alwaysShow:!0,name:$,meta:{type:c,icon:d,cache:u,title:b,pid:he,affix:!1}}},l=o=>{const i=[],c=[],d=[];o.sort((u,f)=>u.sort-f.sort);for(const u of o){const{id:f,title:b,action:O,sort:$,pid:D}=u;u.type===3?d.push({id:f,pid:D,title:b,action:O,sort:$}):(e.push(u),D===0?i.push(a(u)):c.push(a(u)))}return{topMenu:i,subMenu:c,actions:d}},r=(o,i)=>{var d;const c=[];for(const u of i)((d=u.meta)==null?void 0:d.pid)===o.id&&(u.path=o.path+u.path,c.push(u));c.length&&(o.children=c)};return{filterMenu:l,resolveMenu:a,originAsyncMenu:e,asyncMenu:t,allMenu:n,setAsyncMenu:s}});const ut=C({name:"Sidebar",components:{menuItem:re},setup(){const t=ie().allMenu,n=le(),s=Y();return{menu:t,route:s,settingStore:n}}}),dt=["width"],pt={key:0,class:"sidebar-title"};function _t(e,t,n,s,a,l){const r=oe,o=re,i=Ae,c=Re;return p(),h(c,{width:e.settingStore.isCollapse?"64px":"210px"},{default:_(()=>[e.settingStore.sidebarLog?(p(),g("div",{key:0,width:e.settingStore.isCollapse?"64px":"200px",class:"horizontal-collapse-transition sidebar-header"},[m(r,{class:"sidebar-logo",src:"http://egg.yls.red/static/img/logo.21bf62ca.png"}),e.settingStore.isCollapse?E("",!0):(p(),g("h1",pt,"nestjs \u5FAE\u670D\u52A1"))],8,dt)):E("",!0),m(i,{"default-active":e.route.path,"background-color":"#304156","text-color":"#fff",collapse:e.settingStore.isCollapse,"unique-opened":"","collapse-transition":!1},{default:_(()=>[(p(!0),g(L,null,q(e.menu,d=>(p(),h(o,{key:d.path,item:d},null,8,["item"]))),128))]),_:1},8,["default-active","collapse"])]),_:1},8,["width"])}var ce=k(ut,[["render",_t]]);const mt=C({name:"TagView",setup(){const e=Y();let t=M(!1),n=w({top:"0px",left:"0px"});const s=ae(),a=s.keepTags,l=s.downMenu;s.handleOpen({path:e.path,title:e.meta.title,affix:!1,active:!0}),se(t,()=>{var c,d;t.value?(c=document.querySelector("#app"))==null||c.addEventListener("click",o):(d=document.querySelector("#app"))==null||d.removeEventListener("click",o)});const r=(c,d)=>{n.left=d.layerX+"px",n.top=d.layerY+"px",t.value=!0},o=()=>{t.value=!1};return{tags:a,tagStore:s,openDownMenu:r,downFlag:t,position:n,downMenu:l,eventClick:c=>{switch(c){case"reload":s.handleReload();break;case"close-other":s.handleCloseOther();break;case"close-all":s.handleCloseAll();break}}}}}),ft={class:"tag-view"},ht=["onClick"];function gt(e,t,n,s,a,l){const r=Le;return p(),g("div",ft,[(p(!0),g(L,null,q(e.tags,o=>(p(),h(r,{key:o.title,closable:!o.affix,class:F(o.active?"el-tag-active":""),onClose:U(i=>e.tagStore.handleClose(o),["stop"]),onClick:U(i=>e.tagStore.handleOpen(o),["left"]),onContextmenu:U(i=>e.openDownMenu(o,i),["prevent","right"])},{default:_(()=>[P(I(o.title),1)]),_:2},1032,["closable","class","onClose","onClick","onContextmenu"]))),128)),Oe(v("div",{class:"down-box",style:Ve(e.position)},[(p(!0),g(L,null,q(e.downMenu,o=>(p(),g("div",{key:o.label,class:"down-item",onClick:i=>e.eventClick(o.value)},I(o.label),9,ht))),128))],4),[[De,e.downFlag]])])}var ue=k(mt,[["render",gt],["__scopeId","data-v-4b77c506"]]);const de=N("user",()=>{const e=M(null);let t=w({avatar:"",ctime:"",id:null,nickname:"",roleId:null,username:""});return{userInfo:t,token:e,setToken:l=>{e.value=l,sessionStorage.setItem("token",l)},setUserInfo:l=>{const{avatar:r,ctime:o,id:i,nickname:c,roleId:d,username:u}=l;t={avatar:r,ctime:o,id:i,nickname:c,roleId:d,username:u}},logout:()=>{sessionStorage.removeItem("token"),R.push({path:"/login"})}}}),vt=C({name:"Avatar",components:{caretBottom:Te},setup(){return{userStore:de()}}}),yt={class:"avatar-container"},bt=P("\u6587\u6863"),$t=P("\u4E2A\u4EBA\u4E2D\u5FC3"),wt=P("\u9000\u51FA\u767B\u5F55");function Ct(e,t,n,s,a,l){const r=oe,o=A("caret-bottom"),i=X,c=qe,d=Pe,u=Be;return p(),g("div",yt,[m(u,{trigger:"click",size:"small"},{dropdown:_(()=>[m(d,null,{default:_(()=>[m(c,null,{default:_(()=>[bt]),_:1}),m(c,null,{default:_(()=>[$t]),_:1}),m(c,{onClick:e.userStore.logout},{default:_(()=>[wt]),_:1},8,["onClick"])]),_:1})]),default:_(()=>[m(r,{src:"http://egg.yls.red/upload/avatar.gif?imageView2/1/w/80/h/80",class:"user-avatar"}),m(i,null,{default:_(()=>[m(o)]),_:1})]),_:1})])}var pe=k(vt,[["render",Ct]]);const kt=C({name:"ActionBar",setup(){let e=M(!1);return{openSetting:()=>{e.value=!0},drawerFlag:e}}}),_e=e=>(Ne("data-v-49647ed3"),e=e(),ze(),e),Et={class:"action-bar"},St={class:"action-list"},It=_e(()=>v("i",{class:"iconfont icon-quanping_o"},null,-1)),Mt=_e(()=>v("span",null,"Hi, there!",-1));function At(e,t,n,s,a,l){const r=Fe;return p(),g("div",Et,[v("div",St,[v("i",{class:"iconfont icon-quanjushezhi_o",onClick:t[0]||(t[0]=(...o)=>e.openSetting&&e.openSetting(...o))}),It]),m(r,{modelValue:e.drawerFlag,"onUpdate:modelValue":t[1]||(t[1]=o=>e.drawerFlag=o),title:"I am the title",size:"24%"},{default:_(()=>[Mt]),_:1},8,["modelValue"])])}var me=k(kt,[["render",At],["__scopeId","data-v-49647ed3"]]);const Rt=C({name:"Header",components:{expand:Ue,fold:je,avatar:pe,actionBar:me,tagView:ue},setup(){const e=Y(),t=le();let n=M([]);const s=()=>{t.isCollapse=!t.isCollapse};se(e,(l,r)=>{a()});const a=()=>{let l=e.matched.filter(r=>r.meta&&r.meta.title);n.value=[{path:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8"}},...l]};return a(),{settingStore:t,breadcrumbList:n,handleCollapseChange:s}}}),Lt={class:"header-action"},Ot={class:"icon-box"},Dt={class:"breadcrumb"},Vt={key:0},Tt=["href"];function qt(e,t,n,s,a,l){const r=A("expand"),o=A("fold"),i=X,c=xe,d=Xe,u=me,f=pe,b=ue,O=Ye;return p(),h(O,null,{default:_(()=>[v("div",Lt,[v("div",Ot,[m(i,{size:24,color:"#999",onClick:e.handleCollapseChange},{default:_(()=>[e.settingStore.isCollapse?(p(),h(r,{key:0})):(p(),h(o,{key:1}))]),_:1},8,["onClick"])]),v("div",Dt,[m(d,{separator:"/"},{default:_(()=>[(p(!0),g(L,null,q(e.breadcrumbList,($,D)=>(p(),h(c,{key:$.path},{default:_(()=>[D%2!==0||e.$route.path===$.path?(p(),g("span",Vt,I($.meta.title),1)):(p(),g("a",{key:1,href:$.path},I($.meta.title),9,Tt))]),_:2},1024))),128))]),_:1})]),m(u),m(f)]),m(b)]),_:1})}var Pt=k(Rt,[["render",qt]]);const Bt=C({name:"Layout",components:{sidebar:ce,uheader:Pt}}),Ft=P("Footer");function Nt(e,t,n,s,a,l){const r=ce,o=A("uheader"),i=A("router-view"),c=He,d=We,u=Ge;return p(),h(u,{class:"app-container"},{default:_(()=>[m(r),m(u,null,{default:_(()=>[m(o),m(c,null,{default:_(()=>[m(i)]),_:1}),m(d,null,{default:_(()=>[Ft]),_:1})]),_:1})]),_:1})}var fe=k(Bt,[["render",Nt]]);const x=[{path:"/login",component:()=>T(()=>import("./login.54705f32.js"),["assets/login.54705f32.js","assets/login.0c92168e.css","assets/vendor.be1891b2.js","assets/vendor.232fa8b1.css"]),hidden:!0},{path:"/404",component:()=>T(()=>import("./404.b41eb5a0.js"),["assets/404.b41eb5a0.js","assets/vendor.be1891b2.js","assets/vendor.232fa8b1.css"]),hidden:!0},{path:"/",component:fe,redirect:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0},alwaysShow:!0,children:[{path:"/dashboard",name:"Dashboard",component:()=>T(()=>import("./dashboard.4d160d59.js"),["assets/dashboard.4d160d59.js","assets/vendor.be1891b2.js","assets/vendor.232fa8b1.css"]),meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0}}]}],R=Je({history:Ke(),routes:x});const zt=()=>({VITE_APP_TITLE:"\u751F\u4EA7\u73AF\u5883",VITE_BASE_URL:"http://micro.ukode.cn:8001/",VITE_SOME_KEY:"123",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),{VITE_PROXY_DOMAIN:Qt,VITE_PROXY_DOMAIN_REAL:Ut}=zt(),jt={baseURL:Ut,timeout:1e4,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:e=>te.stringify(e,{indices:!1}),transformRequest:[(e,t)=>{switch(t["Content-Type"].toLowerCase()){case"application/x-www-form-urlencoded":return te.stringify(e);case"multipart/form-data;charset=utf-8":return e;default:return JSON.stringify(e)}}]},y=class{constructor(){this.httpInterceptorsRequest(),this.httpInterceptorsResponse()}httpInterceptorsRequest(){y.axiosInstance.interceptors.request.use(t=>{const n=t;if(typeof t.beforeRequestCallback=="function")return t.beforeRequestCallback(n),n;if(y.initConfig.beforeRequestCallback)return y.initConfig.beforeRequestCallback(n),n;const s=sessionStorage.getItem("token");return s&&(t.headers.Authorization="Bearer "+s),n},t=>Promise.reject(t))}httpInterceptorsResponse(){y.axiosInstance.interceptors.response.use(n=>{const s=n.config;return typeof s.beforeResponseCallback=="function"?(s.beforeResponseCallback(n),n.data):(y.initConfig.beforeResponseCallback&&y.initConfig.beforeResponseCallback(n),n.data)},n=>{var a;const s=n;return s.isCancelRequest=ee.isCancel(s),Promise.reject((a=s.response)==null?void 0:a.data)})}request({method:t="GET",url:n,data:s={},cache:a=!1,headers:l={}}){let r,o={};if(a){if(r=Qe(o?t+n+JSON.stringify(o):t+n),y.caches[r])return y.caches[r];y.caches[r]=null}return t.toLocaleUpperCase()==="GET"&&(o=s,s={}),new Promise((i,c)=>{y.axiosInstance.request({method:t,url:n,params:o,data:s,headers:l}).then(d=>{a&&(y.caches[r]=d),i(d)}).catch(d=>{c(d)})})}};let V=y;B(V,"caches",{}),B(V,"initConfig",{}),B(V,"axiosInstance",ee.create(jt));const xt=new V,W=xt.request,Xt=(e={attrs:"all"})=>W({method:"get",url:"/api/v1/menu/list",data:e});S.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const Zt=e=>W({method:"POST",url:"/api/v1/auth/login",data:e}),Yt=()=>W({method:"get",url:"/api/v1/auth/detail"}),j=ie(H),Ht=de(H),Wt=["/login"];R.beforeEach(async(e,t,n)=>{if(S.start(),sessionStorage.getItem("token")){if(e.path==="/login")return e.query.to?n(`${e.query.to}`):n("/");if(j.asyncMenu.length>0)return n();try{const[l,r]=await Promise.all([Yt(),Xt({attrs:"all"})]);if(l.code===200&&r.code===200){Ht.$state.userInfo=l.result;const{topMenu:o,subMenu:i,actions:c}=j.filterMenu(r.result),d=j.setAsyncMenu(o,i);for(const u of d)R.addRoute(u);S.done(),n(Z(Q({},e),{replace:!0}))}}catch(l){console.log(l),S.done(),n(`/login?to=${e.path}`)}}else{if(Wt.includes(e.path)){S.done(),n();return}S.done(),n(`/login?to=${e.path}`)}});R.afterEach((e,t)=>{S.done()});const G=Ze(at);tt(G);G.use(R);G.mount("#app");export{k as _,de as a,Zt as l,le as u};
//# sourceMappingURL=index.53ed169a.js.map