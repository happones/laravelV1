(function(e){function t(t){for(var a,o,u=t[0],l=t[1],i=t[2],c=0,f=[];c<u.length;c++)o=u[c],s[o]&&f.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},s={app:0},r=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0ca312cf"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e),r=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[e]=void 0}};var i=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n("2877"),u={},l=Object(o["a"])(u,s,r,!1,null,null,null),i=l.exports,c=n("8c4f");a["default"].use(c["a"]);var d=new c["a"]({mode:"history",base:"/",linkActiveClass:"is-active",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[{path:"/",component:function(){return n.e("about").then(n.bind(null,"be7f"))},meta:{auth:!0},children:[{path:"",name:"home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"user",component:function(){return n.e("about").then(n.bind(null,"3a65"))},meta:{auth:!0},children:[{path:"",name:"user",component:function(){return n.e("about").then(n.bind(null,"dab6"))},meta:{title:"Usuarios"}},{path:"create",name:"create-user",component:function(){return n.e("about").then(n.bind(null,"3669"))},meta:{title:"Crear usuarios"}},{path:":id",name:"show-user",props:!0,component:function(){return n.e("about").then(n.bind(null,"91d1"))},meta:{title:"Mostrar usuarios"}},{path:":id/edit",name:"edit-user",props:!0,component:function(){return n.e("about").then(n.bind(null,"9504"))},meta:{title:"Editar usuarios"}}]}]},{path:"/register",name:"register",component:function(){return n.e("about").then(n.bind(null,"935e"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"5326"))}}]}),f=n("2f62");a["default"].use(f["a"]);var b=new f["a"].Store({state:{},mutations:{},actions:{}}),j=n("c1df"),h=n.n(j),p=(n("6597"),n("5abe"),n("15f5"),n("bc3a")),m=n.n(p),v=n("a7fe"),g=n.n(v),y=n("8a9b"),k=n.n(y),w=n("8a03"),z=n.n(w),O=n("967d"),P=new a["default"],x={loader:null,show:function(){this.loader=P.$loading.open()},hide:function(){this.loader&&this.loader.close()}},S=new a["default"],T={open:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-dark",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.toast(e,t,n,a)},primary:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.toast(e,"is-primary",t,n)},success:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.toast(e,"is-success",t,n)},info:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.toast(e,"is-info",t,n)},warning:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.toast(e,"is-warning",t,n)},danger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.toast(e,"is-danger",t,n)},toast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;S.$toast.open({message:e,type:t,position:n||"is-top",duration:a||6e3})}};a["default"].config.productionTip=!1,m.a.defaults.baseURL="/api",a["default"].use(O["default"]),a["default"].use(z.a,{defaultIconPack:"fas"}),a["default"].use(g.a,m.a),a["default"].router=d,a["default"].use(k.a,{auth:n("5a17"),http:n("680f"),router:n("4ae6"),tokenDefaultName:"checkify_token",fetchData:{url:"me",method:"GET",enabled:!0},refreshData:{url:"refresh",method:"GET",enabled:!1,interval:30},logoutData:{url:"logout",method:"POST",redirect:"/login",makeRequest:!1},loginData:{url:"login",method:"POST",redirect:"/",fetchUser:!0},registerData:{url:"register",method:"POST",redirect:"/login",autoLogin:!0},rolesVar:"role"}),a["default"].prototype.$loader=x,a["default"].prototype.$notify=T,a["default"].filter("date",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;h.a.locale("es");h()(),h()(e);return"now"===t?h()(e).fromNow():null!==t?h()(e).format(t):h()(e).format("LLLL")}),new a["default"]({router:d,store:b,render:function(e){return e(i)}}).$mount("#app")}});
//# sourceMappingURL=app.ab05878f.js.map