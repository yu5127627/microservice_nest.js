var ve=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var U=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))we.call(t,n)&&U(e,n,t[n]);if(Z)for(var n of Z(t))$e.call(t,n)&&U(e,n,t[n]);return e},te=(e,t)=>ye(e,be(t));var P=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);import{c as ke,d as $,a as g,b as m,r as I,o as p,e as N,f as E,s as Ce,E as Y,g as Ee,h as Se,i as h,w as _,F as R,j as k,k as v,n as F,t as S,l as q,m as L,u as H,p as ae,q as Ie,v as Me,x as re,y as Ae,z as Re,A as Le,B as Oe,C as B,D as j,G as De,H as Ve,I as Te,J as qe,K as Be,L as Pe,M as Fe,N as Ne,O as ze,P as Ue,Q as je,R as xe,S as Xe,T as Ye,U as He,V as We,W as Ge,X as ne,Y as Je,Z as oe,_ as C,$ as Ke}from"./vendor.e69dd649.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Qe();const z=ke();function Ze(e){e.use(z)}const et={class:"app-view"},tt=$({setup(e){return(t,n)=>{const s=I("router-view");return p(),g("div",et,[m(s)])}}}),nt="modulepreload",se={},ot="./",T=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${ot}${s}`,s in se)return;se[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":nt,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((o,l)=>{a.addEventListener("load",o),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},W=N("menu",()=>{const e=E([]),t=E([]),n=E([...X]),s=(o,l)=>{for(const c of o)a(c,l);return t.push(...o,{id:9999,path:"/:pathMatch(.*)*",component:()=>T(()=>import("./404.4e4dd5cc.js"),["assets/404.4e4dd5cc.js","assets/vendor.e69dd649.js","assets/vendor.1c59050f.css"]),meta:{title:"404",type:1,cache:!1,pid:0,affix:!1},hidden:!0,redirect:"/"}),X.push(...t),n.push(...o),t},i=o=>{const{id:l,type:c,icon:d,cache:u,hide:f,title:b,url:O,name:w,action:D,sort:Xt,path:Q,pid:he,redirect:ge}=o;return{id:l,path:O,component:Q?()=>T(()=>import(`../../views${Q}`),[]):Ce(fe),redirect:ge,hidden:f,alwaysShow:!0,name:w,meta:{type:c,icon:d,cache:u,title:b,pid:he,affix:!1}}},r=o=>{const l=[],c=[],d=[];o.sort((u,f)=>u.sort-f.sort);for(const u of o){const{id:f,title:b,action:O,sort:w,pid:D}=u;u.type===3?d.push({id:f,pid:D,title:b,action:O,sort:w}):(e.push(u),D===0?l.push(i(u)):c.push(i(u)))}return{topMenu:l,subMenu:c,actions:d}},a=(o,l)=>{var d;const c=[];for(const u of l)((d=u.meta)==null?void 0:d.pid)===o.id&&(u.path=o.path+u.path,c.push(u));c.length&&(o.children=c)};return{filterMenu:r,resolveMenu:i,originAsyncMenu:e,asyncMenu:t,allMenu:n,setAsyncMenu:s}}),G=N("tagView",()=>{const e=E([{title:"\u4EEA\u8868\u76D8",path:"/dashboard",affix:!0,active:!0}]),t=E([{label:"\u5237   \u65B0",value:"reload"},{label:"\u5173\u95ED\u5176\u4ED6",value:"close-other"},{label:"\u5173\u95ED\u6240\u6709",value:"close-all"}]);return{keepTags:e,downMenu:t,handleClose:o=>{const l=e.findIndex(c=>c.title===o.title);l&&e[l].active&&(e.splice(l,1),e[l-1].active=!0,M.push({path:e[l-1].path}))},handleOpen:o=>{let l=!1;for(const c of e)c.active&&(c.active=!1),c.title===o.title&&(c.active=!0,l=!0);l||e.push(o),M.push({path:o.path})},handleReload:()=>{console.log("handleReload")},handleCloseAll:()=>{console.log("handleCloseAll")},handleCloseOther:()=>{console.log("handleCloseOther")}}});var A=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n};const st=$({name:"MenuItem",props:{item:{type:Object,required:!0}},setup(e){const t=W(),n=G();return{menu:t.allMenu,handleMenuItem:r=>{var a;((a=r.meta)==null?void 0:a.type)===2?window.open(r.path):n.handleOpen({path:r.path,title:r.meta.title,affix:r.meta.affix,active:!0})}}}});function at(e,t,n,s,i,r){var d;const a=Y,o=I("menu-item",!0),l=Ee,c=Se;return e.item.hidden?k("",!0):(p(),g(R,{key:0},[e.item.alwaysShow&&((d=e.item.children)==null?void 0:d.length)?(p(),h(l,{key:0,index:e.item.path},{title:_(()=>{var u;return[(u=e.item.meta)!=null&&u.icon?(p(),h(a,{key:0},{default:_(()=>{var f;return[v("i",{class:F("iconfont "+((f=e.item.meta)==null?void 0:f.icon))},null,2)]}),_:1})):k("",!0),v("span",null,S(e.item.meta.title),1)]}),default:_(()=>[e.item.children.length?(p(!0),g(R,{key:0},q(e.item.children,u=>(p(),h(o,{key:u.path,item:u},null,8,["item"]))),128)):k("",!0)]),_:1},8,["index"])):!e.item.alwaysShow&&e.item.children?(p(),h(c,{key:1,index:e.item.children[0].path,onClick:t[0]||(t[0]=u=>e.handleMenuItem(e.item.children[0]))},{title:_(()=>{var u,f;return[(u=e.item.children[0].meta)!=null&&u.icon?(p(),h(a,{key:0},{default:_(()=>{var b;return[v("i",{class:F("iconfont "+((b=e.item.children[0].meta)==null?void 0:b.icon))},null,2)]}),_:1})):k("",!0),v("span",null,S((f=e.item.children[0].meta)==null?void 0:f.title),1)]}),_:1},8,["index"])):(p(),h(c,{key:2,index:e.item.path,onClick:t[1]||(t[1]=u=>e.handleMenuItem(e.item))},{title:_(()=>{var u,f;return[(u=e.item.meta)!=null&&u.icon?(p(),h(a,{key:0},{default:_(()=>{var b;return[v("i",{class:F("iconfont "+((b=e.item.meta)==null?void 0:b.icon))},null,2)]}),_:1})):k("",!0),v("span",null,S((f=e.item.meta)==null?void 0:f.title),1)]}),_:1},8,["index"]))],64))}var ie=A(st,[["render",at]]);const le=N("setting",()=>{const e=L(!1),t="Nest.js \u5FAE\u670D\u52A1\u540E\u53F0\u7BA1\u7406\u6A21\u677F";return{sidebarLog:L(!1),title:t,isCollapse:e}});const rt=$({name:"Sidebar",components:{menuItem:ie},setup(){const t=W().allMenu,n=le(),s=H();return{menu:t,route:s,settingStore:n}}}),it=["width"],lt={key:0,class:"sidebar-title"};function ct(e,t,n,s,i,r){const a=ae,o=ie,l=Ie,c=Me;return p(),h(c,{width:e.settingStore.isCollapse?"64px":"210px"},{default:_(()=>[e.settingStore.sidebarLog?(p(),g("div",{key:0,width:e.settingStore.isCollapse?"64px":"200px",class:"horizontal-collapse-transition sidebar-header"},[m(a,{class:"sidebar-logo",src:"http://egg.yls.red/static/img/logo.21bf62ca.png"}),e.settingStore.isCollapse?k("",!0):(p(),g("h1",lt,"nestjs \u5FAE\u670D\u52A1"))],8,it)):k("",!0),m(l,{"default-active":e.route.path,"background-color":"#304156","text-color":"#fff",collapse:e.settingStore.isCollapse,"unique-opened":"","collapse-transition":!1},{default:_(()=>[(p(!0),g(R,null,q(e.menu,d=>(p(),h(o,{key:d.path,item:d},null,8,["item"]))),128))]),_:1},8,["default-active","collapse"])]),_:1},8,["width"])}var ce=A(rt,[["render",ct]]);const ut=$({name:"TagView",setup(){const e=H();let t=L(!1),n=E({top:"0px",left:"0px"});const s=G(),i=s.keepTags,r=s.downMenu;s.handleOpen({path:e.path,title:e.meta.title,affix:!1,active:!0}),re(t,()=>{var c,d;t.value?(c=document.querySelector("#app"))==null||c.addEventListener("click",o):(d=document.querySelector("#app"))==null||d.removeEventListener("click",o)});const a=(c,d)=>{n.left=d.layerX+"px",n.top=d.layerY+"px",t.value=!0},o=()=>{t.value=!1};return{tags:i,tagStore:s,openDownMenu:a,downFlag:t,position:n,downMenu:r,eventClick:c=>{switch(c){case"reload":s.handleReload();break;case"close-other":s.handleCloseOther();break;case"close-all":s.handleCloseAll();break}}}}}),dt={class:"tag-view"},pt=["onClick"];function _t(e,t,n,s,i,r){const a=Ae;return p(),g("div",dt,[(p(!0),g(R,null,q(e.tags,o=>(p(),h(a,{key:o.title,closable:!o.affix,class:F(o.active?"el-tag-active":""),onClose:j(l=>e.tagStore.handleClose(o),["stop"]),onClick:j(l=>e.tagStore.handleOpen(o),["left"]),onContextmenu:j(l=>e.openDownMenu(o,l),["prevent","right"])},{default:_(()=>[B(S(o.title),1)]),_:2},1032,["closable","class","onClose","onClick","onContextmenu"]))),128)),Re(v("div",{class:"down-box",style:Oe(e.position)},[(p(!0),g(R,null,q(e.downMenu,o=>(p(),g("div",{key:o.label,class:"down-item",onClick:l=>e.eventClick(o.value)},S(o.label),9,pt))),128))],4),[[Le,e.downFlag]])])}var ue=A(ut,[["render",_t],["__scopeId","data-v-d9df1354"]]);const de=N("user",()=>{const e=L(null);let t=E({avatar:"",ctime:"",id:null,nickname:"",roleId:null,username:""});return{userInfo:t,token:e,setToken:r=>{e.value=r,sessionStorage.setItem("token",r)},setUserInfo:r=>{const{avatar:a,ctime:o,id:l,nickname:c,roleId:d,username:u}=r;t={avatar:a,ctime:o,id:l,nickname:c,roleId:d,username:u}},logout:()=>{sessionStorage.removeItem("token"),M.push({path:"/login"})}}}),mt=$({name:"Avatar",components:{caretBottom:De},setup(){return{userStore:de()}}}),ft={class:"avatar-container"},ht=B("\u6587\u6863"),gt=B("\u4E2A\u4EBA\u4E2D\u5FC3"),vt=B("\u9000\u51FA\u767B\u5F55");function yt(e,t,n,s,i,r){const a=ae,o=I("caret-bottom"),l=Y,c=Ve,d=Te,u=qe;return p(),g("div",ft,[m(u,{trigger:"click",size:"small"},{dropdown:_(()=>[m(d,null,{default:_(()=>[m(c,null,{default:_(()=>[ht]),_:1}),m(c,null,{default:_(()=>[gt]),_:1}),m(c,{onClick:e.userStore.logout},{default:_(()=>[vt]),_:1},8,["onClick"])]),_:1})]),default:_(()=>[m(a,{src:"http://egg.yls.red/upload/avatar.gif?imageView2/1/w/80/h/80",class:"user-avatar"}),m(l,null,{default:_(()=>[m(o)]),_:1})]),_:1})])}var pe=A(mt,[["render",yt]]);const bt=$({name:"ActionBar",setup(){let e=L(!1);return{openSetting:()=>{e.value=!0},drawerFlag:e}}}),_e=e=>(Pe("data-v-49647ed3"),e=e(),Fe(),e),wt={class:"action-bar"},$t={class:"action-list"},kt=_e(()=>v("i",{class:"iconfont icon-quanping_o"},null,-1)),Ct=_e(()=>v("span",null,"Hi, there!",-1));function Et(e,t,n,s,i,r){const a=Be;return p(),g("div",wt,[v("div",$t,[v("i",{class:"iconfont icon-quanjushezhi_o",onClick:t[0]||(t[0]=(...o)=>e.openSetting&&e.openSetting(...o))}),kt]),m(a,{modelValue:e.drawerFlag,"onUpdate:modelValue":t[1]||(t[1]=o=>e.drawerFlag=o),title:"I am the title",size:"24%"},{default:_(()=>[Ct]),_:1},8,["modelValue"])])}var me=A(bt,[["render",Et],["__scopeId","data-v-49647ed3"]]);const St=$({name:"Header",components:{expand:Ne,fold:ze,avatar:pe,actionBar:me,tagView:ue},setup(){const e=H(),t=le();let n=L([]);const s=()=>{t.isCollapse=!t.isCollapse};re(e,(r,a)=>{i()});const i=()=>{let r=e.matched.filter(a=>a.meta&&a.meta.title);n.value=[{path:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8"}},...r]};return i(),{settingStore:t,breadcrumbList:n,handleCollapseChange:s}}}),It={class:"header-action"},Mt={class:"icon-box"},At={class:"breadcrumb"},Rt={key:0},Lt=["href"];function Ot(e,t,n,s,i,r){const a=I("expand"),o=I("fold"),l=Y,c=Ue,d=je,u=me,f=pe,b=ue,O=xe;return p(),h(O,null,{default:_(()=>[v("div",It,[v("div",Mt,[m(l,{size:24,color:"#999",onClick:e.handleCollapseChange},{default:_(()=>[e.settingStore.isCollapse?(p(),h(a,{key:0})):(p(),h(o,{key:1}))]),_:1},8,["onClick"])]),v("div",At,[m(d,{separator:"/"},{default:_(()=>[(p(!0),g(R,null,q(e.breadcrumbList,(w,D)=>(p(),h(c,{key:w.path},{default:_(()=>[D%2!==0||e.$route.path===w.path?(p(),g("span",Rt,S(w.meta.title),1)):(p(),g("a",{key:1,href:w.path},S(w.meta.title),9,Lt))]),_:2},1024))),128))]),_:1})]),m(u),m(f)]),m(b)]),_:1})}var Dt=A(St,[["render",Ot]]);const Vt=$({name:"Layout",components:{sidebar:ce,uheader:Dt}}),Tt=B("Footer");function qt(e,t,n,s,i,r){const a=ce,o=I("uheader"),l=I("router-view"),c=Xe,d=Ye,u=He;return p(),h(u,{class:"app-container"},{default:_(()=>[m(a),m(u,null,{default:_(()=>[m(o),m(c,null,{default:_(()=>[m(l)]),_:1}),m(d,null,{default:_(()=>[Tt]),_:1})]),_:1})]),_:1})}var fe=A(Vt,[["render",qt]]);const X=[{path:"/login",component:()=>T(()=>import("./login.393df5e9.js"),["assets/login.393df5e9.js","assets/login.f11ec0f9.css","assets/vendor.e69dd649.js","assets/vendor.1c59050f.css"]),hidden:!0},{path:"/404",component:()=>T(()=>import("./404.4e4dd5cc.js"),["assets/404.4e4dd5cc.js","assets/vendor.e69dd649.js","assets/vendor.1c59050f.css"]),hidden:!0},{path:"/",component:fe,redirect:"/dashboard",meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0},alwaysShow:!0,children:[{path:"/dashboard",name:"Dashboard",component:()=>T(()=>import("./dashboard.b6bbff46.js"),["assets/dashboard.b6bbff46.js","assets/vendor.e69dd649.js","assets/vendor.1c59050f.css"]),meta:{title:"\u4EEA\u8868\u76D8",icon:"icon-configure",affix:!0}}]}],M=We({history:Ge(),routes:X});const Bt=()=>({VITE_APP_TITLE:"\u751F\u4EA7\u73AF\u5883",VITE_BASE_URL:"http://micro.ukode.cn:8001/",VITE_SOME_KEY:"123",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}),{VITE_PROXY_DOMAIN:Wt,VITE_PROXY_DOMAIN_REAL:Pt}=Bt(),Ft={baseURL:Pt,timeout:1e4,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:e=>oe.stringify(e,{indices:!1}),transformRequest:[(e,t)=>{switch(t["Content-Type"].toLowerCase()){case"application/x-www-form-urlencoded":return oe.stringify(e);case"multipart/form-data;charset=utf-8":return e;default:return JSON.stringify(e)}}]},y=class{constructor(){this.httpInterceptorsRequest(),this.httpInterceptorsResponse()}httpInterceptorsRequest(){y.axiosInstance.interceptors.request.use(t=>{const n=t;if(typeof t.beforeRequestCallback=="function")return t.beforeRequestCallback(n),n;if(y.initConfig.beforeRequestCallback)return y.initConfig.beforeRequestCallback(n),n;const s=sessionStorage.getItem("token");return s&&(t.headers.Authorization="Bearer "+s),n},t=>Promise.reject(t))}httpInterceptorsResponse(){y.axiosInstance.interceptors.response.use(n=>{const s=n.config;return typeof s.beforeResponseCallback=="function"?(s.beforeResponseCallback(n),n.data):(y.initConfig.beforeResponseCallback&&y.initConfig.beforeResponseCallback(n),n.data)},n=>{const s=n;return s.isCancelRequest=ne.isCancel(s),Promise.reject(s)})}request({method:t="GET",url:n,data:s={},cache:i=!1,headers:r={}}){let a,o={};if(i){if(a=Je(o?t+n+JSON.stringify(o):t+n),y.caches[a])return y.caches[a];y.caches[a]=null}return t.toLocaleUpperCase()==="GET"&&(o=s,s={}),new Promise((l,c)=>{y.axiosInstance.request({method:t,url:n,params:o,data:s,headers:r}).then(d=>{i&&(y.caches[a]=d),l(d)}).catch(d=>{c(d)})})}};let V=y;P(V,"caches",{}),P(V,"initConfig",{}),P(V,"axiosInstance",ne.create(Ft));const Nt=new V,J=Nt.request,zt=e=>J({method:"get",url:"/api/v1/menu/list",data:e}),Gt=e=>J({method:"POST",url:"/api/v1/auth/login",data:e}),Ut=()=>J({method:"get",url:"/api/v1/auth/detail"});C.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3});const x=W(z),jt=de(z);G(z);const xt=["/login"];M.beforeEach(async(e,t,n)=>{if(C.start(),sessionStorage.getItem("token")){if(e.path==="/login")return e.query.to?n(`${e.query.to}`):n("/");if(x.asyncMenu.length>0)return n();try{const[r,a]=await Promise.all([Ut(),zt({attrs:"all"})]);if(r.code===200&&a.code===200){jt.$state.userInfo=r.result;const{topMenu:o,subMenu:l,actions:c}=x.filterMenu(a.result),d=x.setAsyncMenu(o,l);for(const u of d)M.addRoute(u);C.done(),n(te(ee({},e),{replace:!0}))}}catch(r){console.log(r),C.done(),n(`/login?to=${e.path}`)}}else{if(xt.includes(e.path)){C.done(),n();return}C.done(),n(`/login?to=${e.path}`)}});M.afterEach((e,t)=>{C.done()});const K=Ke(tt);Ze(K);K.use(M);K.mount("#app");export{A as _,de as a,W as b,Gt as g,le as u};
//# sourceMappingURL=index.ed8157b7.js.map