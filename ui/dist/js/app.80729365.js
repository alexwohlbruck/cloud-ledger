(function(t){function e(e){for(var a,c,i=e[0],s=e[1],d=e[2],u=0,f=[];u<i.length;u++)c=i[u],o[c]&&f.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=n("43f9"),r=n.n(o),c=(n("51de"),n("e094"),n("fce9"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container",attrs:{id:"app"}},[n("md-app",[n("md-app-toolbar",{staticClass:"md-transparent"},[n("span",{staticClass:"md-title"},[t._v("Ledger")])]),n("md-app-drawer",{attrs:{"md-permanent":"card"}},[n("md-list",[n("md-list-item",{attrs:{to:"/balance"}},[n("md-icon",[t._v("account_balance")]),n("span",{staticClass:"md-list-item-text"},[t._v("Balance")])],1),n("md-list-item",{attrs:{to:"/register"}},[n("md-icon",[t._v("list_alt")]),n("span",{staticClass:"md-list-item-text"},[t._v("Register")])],1),n("md-list-item",{attrs:{to:"/add"}},[n("md-icon",[t._v("add")]),n("span",{staticClass:"md-list-item-text"},[t._v("Add")])],1)],1)],1),n("md-app-content",[n("router-view")],1)],1)],1)}),i=[],s=(n("5c0b"),n("2877")),d={},l=Object(s["a"])(d,c,i,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"balance"},[n("p",[t._v("balance")])])}],v={},b=Object(s["a"])(v,m,p,!1,null,null,null);b.options.__file="Balance.vue";var _=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"add md-layout md-alignment-top-space-between"},[n("div",{staticClass:"md-layout-item md-size-50 padding"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.postAdd(e)}}},[n("md-field",[n("label",{attrs:{for:"account"}},[t._v("Account")]),n("md-select",{attrs:{id:"account",name:"account"},model:{value:t.add.account,callback:function(e){t.$set(t.add,"account",e)},expression:"add.account"}},[n("md-option",{attrs:{value:"1"}},[t._v("Account 1")]),n("md-option",{attrs:{value:"2"}},[t._v("Account 2")])],1)],1),n("md-field",[n("label",[t._v("Comment")]),n("md-input",{model:{value:t.add.comment,callback:function(e){t.$set(t.add,"comment",e)},expression:"add.comment"}})],1),n("md-button",{attrs:{type:"submit"}},[t._v("Add")])],1)]),n("div",{staticClass:"md-layout-item md-size-50"},[n("md-list",t._l(t.adds,function(e){return n("md-list-item",[n("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.comment))])])}))],1)])])},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",[n("span",{staticClass:"md-list-item-text"},[t._v("test")])])},w=[],x={data:function(){return{}}},O=x,j=Object(s["a"])(O,y,w,!1,null,null,null);j.options.__file="NestedItem.vue";var C=j.exports,A=n("bc3a"),k=n.n(A),$="https://dincyl6edgih8.cloudfront.net",E={name:"add",data:function(){return{add:{account:null,comment:null},adds:[{comment:"hello"},{comment:"world"}],input:"test"}},components:{NestedItem:C},mounted:function(){var t=this;k()("".concat($,"/add"),{method:"GET"}).then(function(e){t.adds=e.data})},methods:{postAdd:function(){k()("".concat($,"/add"),{method:"POST",data:this.add}).then(function(t){adds.push(t.data)})}}},P=E,S=(n("d3f1"),Object(s["a"])(P,h,g,!1,null,"08f0211d",null));S.options.__file="Add.vue";var T=S.exports;a["default"].use(f["a"]);var M=new f["a"]({routes:[{path:"/balance",name:"balance",component:_},{path:"/add",name:"add",component:T}]}),N=n("2f62");a["default"].use(N["a"]);var B=new N["a"].Store({state:{},mutations:{},actions:{}}),z=n("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].use(r.a),a["default"].config.productionTip=!1,new a["default"]({router:M,store:B,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),o=n.n(a);o.a},"7b4a":function(t,e,n){},d3f1:function(t,e,n){"use strict";var a=n("7b4a"),o=n.n(a);o.a},fce9:function(t,e,n){}});
//# sourceMappingURL=app.80729365.js.map