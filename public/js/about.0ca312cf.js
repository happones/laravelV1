(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,a){var r=a("4588"),s=a("be13");t.exports=function(t){return function(e,a){var n,i,o=String(s(e)),c=r(a),l=o.length;return c<0||c>=l?t?"":void 0:(n=o.charCodeAt(c),n<55296||n>56319||c+1===l||(i=o.charCodeAt(c+1))<56320||i>57343?t?o.charAt(c):n:t?o.slice(c,c+2):i-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,a){var r=a("52a7"),s=a("4630"),n=a("6821"),i=a("6a99"),o=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=n(t),e=i(e,!0),c)try{return l(t,e)}catch(a){}if(o(t,e))return s(!r.f.call(t,e),t[e])}},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),s=a("32e9"),n=a("79e5"),i=a("be13"),o=a("2b4c"),c=a("520a"),l=o("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=o(t),p=!n(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),m=p?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[f](""),!e}):void 0;if(!p||!m||"replace"===t&&!u||"split"===t&&!d){var v=/./[f],h=a(i,f,""[t],function(t,e,a,r,s){return e.exec===c?p&&!s?{done:!0,value:v.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),b=h[0],g=h[1];r(String.prototype,t,b),s(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},3669:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.storeData(e)}}},[a("form-user",{attrs:{data:t.data,errors:t.errors}}),a("hr"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n                Guardar datos\n            ")])])])}],n=a("86e4"),i={name:"Create",components:{FormUser:n["a"]},data:function(){return{data:{},errors:{}}},methods:{storeData:function(){var t=this;this.errors={},this.$loader.show();var e=new FormData;for(var a in this.data)e.append(a,this.data[a]);this.$http.post("user",e).then(function(e){var a=e.data;t.$loader.hide(),t.$notify.success(a.message),t.$router.back()},function(e){var a=e.response;t.$loader.hide();var r=a.data;t.errors=r.errors||{},t.$notify.danger(r.message)})}}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,"44a8de76",null);e["default"]=l.exports},"3a65":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:{name:"home"}}},[t._v("Inicio")]),a("b-breadcrumb-item",{attrs:{to:{name:"user"}}},[t._v("Usuarios")]),"user"!==t.$route.name?a("b-breadcrumb-item",[t._v(t._s(t.$route.meta.title))]):t._e()],1),a("router-view")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"breadcrumb",class:t.extraClass,attrs:{"aria-label":"breadcrumbs"}},[a("ul",[t._t("default")],2)])},i=[],o=(a("ac6a"),{name:"BBreadcrumb",data:function(){return{childs:null}},props:{separator:String,alignment:String,size:String},mounted:function(){this.updateChild(),this.childs=this.$children},computed:{extraClass:function(){return"".concat(this.separator||""," ").concat(this.alignment||""," ").concat(this.size||"")}},watch:{childs:"updateChild"},methods:{updateChild:function(){var t=this.$children.length;t&&(this.$children.forEach(function(t){t.active=!1}),this.$children[t-1].active=!0)}}}),c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,"52802910",null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{"is-active":t.active}},[t.active||void 0===t.to?a("a",{attrs:{href:t.href}},[t.icon?a("b-icon",{attrs:{icon:t.icon,size:"is-small"}}):t._e(),a("span",[t._v("\n            "+t._s(t.btext)+"\n        ")])],1):a("router-link",{attrs:{to:t.to}},[t.icon?a("b-icon",{attrs:{icon:t.icon,size:"is-small"}}):t._e(),a("span",[t._v("\n            "+t._s(t.btext)+"\n       ")])],1)],1)},p=[],m={name:"BBreadcrumbItem",data:function(){return{active:!1,index:0}},props:{href:String,label:String,to:String|Object,icon:String},computed:{btext:function(){if(this.label)return this.label;var t=this.$slots.default||[];return t[0].text||""}}},v=m,h=Object(l["a"])(v,f,p,!1,null,"7093407e",null),b=h.exports,g={name:"Layout",components:{BBreadcrumbItem:b,BBreadcrumb:d}},_=g,C=Object(l["a"])(_,r,s,!1,null,"8a57521a",null);e["default"]=C.exports},"520a":function(t,e,a){"use strict";var r=a("0bfb"),s=RegExp.prototype.exec,n=String.prototype.replace,i=s,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(t){var e,a,i,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(e=d[o]),i=s.call(d,t),c&&i&&(d[o]=d.global?i.index+i[0].length:e),l&&i&&i.length>1&&n.call(i[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},5326:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-layout",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-6 is-offset-3 is-4-widescreen is-offset-4-widescreen"},[a("div",{staticClass:"box"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onLogin(e)}}},[a("b-field",{attrs:{label:"Correo",type:t.errors.email?"is-danger":"",message:t.errors.email}},[a("b-input",{attrs:{placeholder:"correo@dominio.com",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-field",{attrs:{label:"Contraseña",type:t.errors.password?"is-danger":"",message:t.errors.password}},[a("b-input",{attrs:{placeholder:"**********",type:"password","password-reveal":""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n                                Iniciar\n                            ")])])])],1)])])])])},s=[],n=a("e4cc"),i={name:"Login",components:{AuthLayout:n["a"]},data:function(){return{user:{},errors:{}}},methods:{onLogin:function(){this.$loader.show(),this.errors={},this.$auth.login({data:this.user,success:function(t){var e=t.data;this.$loader.hide(),this.$notify.success(e.message)},error:function(t){var e=t.response;this.$loader.hide();var a=e.data;this.errors=a.errors||{},this.$notify.danger(a.message)}})}}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,"392a0aba",null);e["default"]=l.exports},"5dbc":function(t,e,a){var r=a("d3f4"),s=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&s&&s(t,n),t}},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"86e4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:"Nombre",type:t.errors.name?"is-danger":"",message:t.errors.name}},[a("b-input",{attrs:{placeholder:"Nombre Completo",type:"text"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),a("b-field",{attrs:{label:"Correo",type:t.errors.email?"is-danger":"",message:t.errors.email}},[a("b-input",{attrs:{placeholder:"correo@dominio.com",type:"email"},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1),a("b-field",{attrs:{label:"Contraseña",type:t.errors.password?"is-danger":"",message:t.errors.password}},[a("b-input",{attrs:{placeholder:"**********",type:"password","password-reveal":""},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}})],1),a("b-field",{attrs:{label:"Confirmar contraseña",type:t.errors.password_confirmation?"is-danger":"",message:t.errors.password_confirmation}},[a("b-input",{attrs:{placeholder:"**********",type:"password","password-reveal":""},model:{value:t.data.password_confirmation,callback:function(e){t.$set(t.data,"password_confirmation",e)},expression:"data.password_confirmation"}})],1),t.data.avatar?a("b-field",[a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:t.data.avatar,alt:"Avatar"}})]),a("a",{staticClass:"delete",on:{click:function(e){t.data.avatar=null}}})]):a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:"image/*"},model:{value:t.data.image,callback:function(e){t.$set(t.data,"image",e)},expression:"data.image"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload"}}),a("span",[t._v("Click para subir")])],1)]),t.data.image?a("span",{staticClass:"file-name"},[t._v("\n        "+t._s(t.data.image.name)+"\n    ")]):t._e()],1),a("input-date",{attrs:{error:t.errors.birthday},model:{value:t.data.birthday,callback:function(e){t.$set(t.data,"birthday",e)},expression:"data.birthday"}})],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{attrs:{label:"Cumpleaños",type:t.error?"is-danger":"",message:t.error}},[a("b-datepicker",{attrs:{value:t.date,inline:""},on:{input:t.setDate}})],1)},i=[],o=a("c1df"),c=a.n(o),l={name:"InputDate",data:function(){return{date:new Date}},props:{value:{},error:{}},created:function(){this.date=new Date(c()(this.value||new Date).format()),this.value||this.setDate(new Date)},methods:{setDate:function(t){this.$emit("input",c()(t).format("Y-M-D"))}}},u=l,d=a("2877"),f=Object(d["a"])(u,n,i,!1,null,"56c6bcbd",null),p=f.exports,m={name:"FormUser",components:{InputDate:p},data:function(){return{file:null}},props:{data:Object,errors:Object}},v=m,h=Object(d["a"])(v,r,s,!1,null,"9d390f3a",null);e["a"]=h.exports},"8b97":function(t,e,a){var r=a("d3f4"),s=a("cb7c"),n=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:n}},9093:function(t,e,a){var r=a("ce10"),s=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"91d1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t.isLoading?a("content-placeholders",[a("content-placeholders-heading"),a("content-placeholders-text",{attrs:{lines:3}})],1):a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:t.data.avatar,alt:"Avatar "+t.data.name}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(t.data.name))]),a("small",[t._v(t._s(t.data.email))]),a("small",[t._v(t._s(t.data.age)+" años")]),a("br"),t._v("\n                    "+t._s(t.data.birthday)+"\n                ")])])])])],1)},s=[],n=(a("a481"),a("c5f6"),{name:"Show",data:function(){return{data:{},errors:{},isLoading:!0}},props:{id:String|Number},watch:{$router:"getData"},created:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getData()},getData:function(){var t=this;this.isLoading=!0,this.$http.get("user/".concat(this.id)).then(function(e){var a=e.data;t.isLoading=!1,t.data=a},function(e){e.response;t.isLoading=!1,t.$router.replace({name:"user"})})}}}),i=n,o=a("2877"),c=Object(o["a"])(i,r,s,!1,null,"7dae6d8d",null);e["default"]=c.exports},"935e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-layout",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-6 is-offset-3 is-4-widescreen is-offset-4-widescreen"},[a("div",{staticClass:"box"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onRegister(e)}}},[a("b-field",{attrs:{label:"Nombre",type:t.errors.name?"is-danger":"",message:t.errors.name}},[a("b-input",{attrs:{placeholder:"Nombre Completo",type:"text"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),a("b-field",{attrs:{label:"Correo",type:t.errors.email?"is-danger":"",message:t.errors.email}},[a("b-input",{attrs:{placeholder:"correo@dominio.com",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-field",{attrs:{label:"Contraseña",type:t.errors.password?"is-danger":"",message:t.errors.password}},[a("b-input",{attrs:{placeholder:"**********",type:"password","password-reveal":""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-field",{attrs:{label:"Confirmar contraseña",type:t.errors.password_confirmation?"is-danger":"",message:t.errors.password_confirmation}},[a("b-input",{attrs:{placeholder:"**********",type:"password","password-reveal":""},model:{value:t.user.password_confirmation,callback:function(e){t.$set(t.user,"password_confirmation",e)},expression:"user.password_confirmation"}})],1),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n                                Registrarme\n                            ")])])])],1)])])])])},s=[],n=a("e4cc"),i={name:"Register",components:{AuthLayout:n["a"]},data:function(){return{user:{},errors:{}}},methods:{onRegister:function(){this.$loader.show(),this.errors={},this.$auth.register({data:this.user,success:function(t){var e=t.data;this.$loader.hide(),this.$notify.success(e.message)},error:function(t){var e=t.response;this.$loader.hide();var a=e.data;this.errors=a.errors||{},this.$notify.danger(a.message)}})}}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,"5a7c500b",null);e["default"]=l.exports},9504:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.updateData(e)}}},[t.isLoading?a("content-placeholders",[a("content-placeholders-heading"),a("content-placeholders-text",{attrs:{lines:3}})],1):a("form-user",{attrs:{data:t.data,errors:t.errors}}),a("hr"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n                Guardar datos\n            ")])])])}],n=(a("a481"),a("c5f6"),a("86e4")),i={name:"Edit",components:{FormUser:n["a"]},data:function(){return{data:{},errors:{},isLoading:!0}},props:{id:String|Number},watch:{$router:"getData"},created:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getData()},getData:function(){var t=this;this.isLoading=!0,this.$http.get("user/".concat(this.id)).then(function(e){var a=e.data;t.isLoading=!1,t.data=a},function(e){e.response;t.isLoading=!1,t.$router.replace({name:"user"})})},updateData:function(){var t=this;this.errors={},this.$loader.show();var e=new FormData;for(var a in this.data)e.append(a,this.data[a]);e.append("_method","put"),this.$http.post("user/".concat(this.id),e).then(function(e){var a=e.data;t.$loader.hide(),t.$notify.success(a.message),t.$router.back()},function(e){var a=e.response;t.$loader.hide();var r=a.data;t.errors=r.errors||{},t.$notify.danger(r.message)})}}},o=i,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,"6e99325f",null);e["default"]=l.exports},a481:function(t,e,a){"use strict";var r=a("cb7c"),s=a("4bf8"),n=a("9def"),i=a("4588"),o=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,v){return[function(r,s){var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,s):a.call(String(n),r,s)},function(t,e){var s=v(a,t,this,e);if(s.done)return s.value;var d=r(t),f=String(this),p="function"===typeof e;p||(e=String(e));var b=d.global;if(b){var g=d.unicode;d.lastIndex=0}var _=[];while(1){var C=c(d,f);if(null===C)break;if(_.push(C),!b)break;var y=String(C[0]);""===y&&(d.lastIndex=o(f,n(d.lastIndex),g))}for(var x="",w=0,$=0;$<_.length;$++){C=_[$];for(var L=String(C[0]),S=l(u(i(C.index),f.length),0),k=[],E=1;E<C.length;E++)k.push(m(C[E]));var D=C.groups;if(p){var N=[L].concat(k,S,f);void 0!==D&&N.push(D);var I=String(e.apply(void 0,N))}else I=h(L,f,S,k,D,e);S>=w&&(x+=f.slice(w,S)+I,w=S+L.length)}return x+f.slice(w)}];function h(t,e,r,n,i,o){var c=r+t.length,l=n.length,u=p;return void 0!==i&&(i=s(i),u=f),a.call(o,u,function(a,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":o=i[s.slice(1,-1)];break;default:var u=+s;if(0===u)return a;if(u>l){var f=d(u/10);return 0===f?a:f<=l?void 0===n[f-1]?s.charAt(1):n[f-1]+s.charAt(1):a}o=n[u-1]}return void 0===o?"":o})}})},aa77:function(t,e,a){var r=a("5ca1"),s=a("be13"),n=a("79e5"),i=a("fdef"),o="["+i+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,a){var s={},o=n(function(){return!!i[t]()||c[t]()!=c}),l=s[t]=o?e(f):i[t];a&&(s[a]=l),r(r.P+r.F*o,"String",s)},f=d.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ac6a:function(t,e,a){for(var r=a("cadf"),s=a("0d58"),n=a("2aba"),i=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(p),v=0;v<m.length;v++){var h,b=m[v],g=p[b],_=i[b],C=_&&_.prototype;if(C&&(C[u]||o(C,u,f),C[d]||o(C,d,b),c[b]=f,g))for(h in r)C[h]||n(C,h,r[h],!0)}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box"},[a("router-link",{attrs:{to:{name:"user"}}},[t._v("\n      Hacia el crud\n    ")])],1)])},s=[],n={name:"home"},i=n,o=a("2877"),c=Object(o["a"])(i,r,s,!1,null,null,null);e["default"]=c.exports},be7f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero"},[r("div",{staticClass:"hero-head"},[r("nav",{staticClass:"navbar has-shadow"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"}}},[r("img",{attrs:{src:a("cf05"),alt:"Logo"}})]),r("span",{staticClass:"navbar-burger burger",class:t.toggle?"is-active":"",on:{click:function(e){t.toggle=!t.toggle}}},[r("span"),r("span"),r("span")])],1),r("div",{staticClass:"navbar-menu",class:t.toggle?"is-active":""},[r("div",{staticClass:"navbar-end"},[r("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"}}},[r("a",[t._v("Inicio")])]),r("router-link",{staticClass:"navbar-item",attrs:{to:{name:"user"}}},[r("a",[t._v("CRUD")])]),r("profile-nav")],1)])])])]),r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("router-view")],1)])])},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-dropdown",{attrs:{position:"is-bottom-left","aria-role":"menu"}},[a("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("figure",[a("img",{attrs:{src:t.user.avatar,alt:"Avatar "+t.user.name}})]),a("span",[t._v(t._s(t.user.name))]),a("b-icon",{attrs:{icon:"caret-down"}})],1),a("b-dropdown-item",{attrs:{custom:"","aria-role":"menuitem"}},[a("b",[t._v(t._s(t.user.email))])]),a("hr",{staticClass:"dropdown-divider"}),a("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[a("a",{on:{click:t.onLogout}},[a("b-icon",{attrs:{icon:"sign-out-alt"}}),t._v("\n           Cerrar sesión\n        ")],1)])],1)},i=[],o={name:"ProfileNav",data:function(){return{user:{}}},created:function(){this.user=this.$auth.user()||{}},methods:{onLogout:function(){this.$auth.logout()}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,"742ec546",null),d=u.exports,f={name:"MainLayout",components:{ProfileNav:d},data:function(){return{toggle:!1}}},p=f,m=Object(l["a"])(p,r,s,!1,null,"786b523e",null);e["default"]=m.exports},c5f6:function(t,e,a){"use strict";var r=a("7726"),s=a("69a8"),n=a("2d95"),i=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",m=r[p],v=m,h=m.prototype,b=n(a("2aeb")(h))==p,g="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var a,r,s,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var i,c=e.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>s)return NaN;return parseInt(c,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?c(function(){h.valueOf.call(a)}):n(a)!=p)?i(new v(_(e)),a,m):_(e)};for(var C,y=a("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)s(v,C=y[x])&&!s(m,C)&&d(m,C,u(v,C));m.prototype=h,h.constructor=m,a("2aba")(r,p,m)}},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},dab6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-field",{attrs:{grouped:"","group-multiline":""}},[a("b-select",{on:{input:t.getData},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}},[a("option",{attrs:{value:"5"}},[t._v("5 por página")]),a("option",{attrs:{value:"10"}},[t._v("10 por página")]),a("option",{attrs:{value:"15"}},[t._v("15 por página")]),a("option",{attrs:{value:"20"}},[t._v("20 por página")])]),a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-success",attrs:{to:{name:"create-user"}}},[t._v("\n                Nuevo Registro\n            ")])],1),a("div",{staticClass:"control"},[a("b-field",[a("b-input",{attrs:{placeholder:"Busqueda",icon:"search",type:"search"},on:{input:t.getData},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1)],1),a("b-table",{attrs:{data:t.data,paginated:"",loading:t.loading,"per-page":t.perPage,"backend-pagination":"","default-sort":"id","default-sort-direction":t.order,"backend-sorting":"","current-page":t.currentPage,total:t.total},on:{sort:t.sorted,"page-change":t.pageChange},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-table-column",{attrs:{label:"Acciones"}},[a("div",{staticClass:"buttons are-small"},[a("router-link",{staticClass:"button is-info",attrs:{to:{name:"show-user",params:{id:e.row.id}}}},[a("b-icon",{attrs:{icon:"eye"}})],1),a("router-link",{staticClass:"button is-warning",attrs:{to:{name:"edit-user",params:{id:e.row.id}}}},[a("b-icon",{attrs:{icon:"edit"}})],1),a("a",{staticClass:"button is-danger",on:{click:function(a){return t.deleteData(e.row.id)}}},[a("b-icon",{attrs:{icon:"trash"}})],1)],1)]),a("b-table-column",{attrs:{field:"id",label:"ID",width:"40",sortable:"",numeric:""}},[t._v("\n                "+t._s(e.row.id)+"\n            ")]),a("b-table-column",{attrs:{field:"name",label:"Nombre",sortable:""}},[t._v("\n                "+t._s(e.row.name)+"\n            ")]),a("b-table-column",{attrs:{field:"email",label:"Correo",sortable:""}},[t._v("\n                "+t._s(e.row.email)+"\n            ")]),a("b-table-column",{attrs:{field:"avatar",label:"Avatar",sortable:""}},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:e.row.avatar,alt:e.row.name}})])]),a("b-table-column",{attrs:{field:"birthday",label:"Cumpleaños",sortable:""}},[e.row.birthday?a("span",[t._v("\n                    "+t._s(t._f("date")(e.row.birthday,"LL"))+"\n                ")]):a("span",[t._v("\n                    Sin Fecha\n                ")])])]}}])})],1)},s=[],n={name:"Index",data:function(){return{data:[],currentPage:1,perPage:10,total:0,order:"desc",field:"id",loading:!1,query:null}},created:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getData()},sorted:function(t,e){this.field=t,this.order=e,this.getData()},pageChange:function(t){this.currentPage=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$http.get("user",{params:{perPage:this.perPage,page:this.currentPage,field:this.field,sort:this.order,query:this.query}}).then(function(e){var a=e.data;t.loading=!1,t.data=a.data||[],t.total=a.total},function(e){var a=e.response;a.data;t.loading=!1,t.$notify.danger(error.response.data.message)})},deleteData:function(t){var e=this;this.$dialog.confirm({confirmText:"Si, eliminar",cancelText:"No, cancelar",message:"¿Deseas eliminar este registro?",onConfirm:function(){e.loading=!0,e.$http.delete("user/".concat(t)).then(function(t){var a=t.data;e.loading=!1,e.$notify.success(a.message),e.getData()},function(t){var a=t.response,r=a.data;e.loading=!1,e.$notify.danger(r.message)})}})}}},i=n,o=a("2877"),c=Object(o["a"])(i,r,s,!1,null,null,null);e["default"]=c.exports},e4cc:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar has-shadow"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("span",{staticClass:"navbar-burger burger",class:t.toggle?"is-active":"",on:{click:function(e){t.toggle=!t.toggle}}},[a("span"),a("span"),a("span")])]),a("div",{staticClass:"navbar-menu",class:t.toggle?"is-active":""},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"login"}}},[a("a",[t._v("Iniciar")])]),a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"register"}}},[a("a",[t._v("Registro")])])],1)])])])]),a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[t._t("default")],2)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item",attrs:{href:"/"}},[r("img",{attrs:{src:a("cf05"),alt:"Logo"}})])}],n={name:"AuthLayout",data:function(){return{toggle:!1}}},i=n,o=a("2877"),c=Object(o["a"])(i,r,s,!1,null,"7a3672fe",null);e["a"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=about.0ca312cf.js.map