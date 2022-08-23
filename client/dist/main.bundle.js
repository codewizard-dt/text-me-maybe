/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(t){}function t(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){n(t.data)},t.postMessage(e,[r.port2])}))}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch(t){}var r=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function o(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var i=function(t,e){this.type=t,Object.assign(this,e)};function a(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function c(){}var s={type:"SKIP_WAITING"};function u(t,e){if(!e)return t&&t.then?t.then(c):Promise.resolve()}var f=function(e){var n,c;function f(t,n){var c,s;return void 0===n&&(n={}),(c=e.call(this)||this).nn={},c.tn=0,c.rn=new r,c.en=new r,c.on=new r,c.un=0,c.an=new Set,c.cn=function(){var t=c.fn,e=t.installing;c.tn>0||!o(e.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=e,t.removeEventListener("updatefound",c.cn)):(c.hn=e,c.an.add(e),c.rn.resolve(e)),++c.tn,e.addEventListener("statechange",c.ln)},c.ln=function(t){var e=c.fn,n=t.target,r=n.state,o=n===c.vn,a={sw:n,isExternal:o,originalEvent:t};!o&&c.mn&&(a.isUpdate=!0),c.dispatchEvent(new i(r,a)),"installed"===r?c.wn=self.setTimeout((function(){"installed"===r&&e.waiting===n&&c.dispatchEvent(new i("waiting",a))}),200):"activating"===r&&(clearTimeout(c.wn),o||c.en.resolve(n))},c.dn=function(t){var e=c.hn,n=e!==navigator.serviceWorker.controller;c.dispatchEvent(new i("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:c.mn})),n||c.on.resolve(e)},c.gn=(s=function(t){var e=t.data,n=t.ports,r=t.source;return a(c.getSW(),(function(){c.an.has(r)&&c.dispatchEvent(new i("message",{data:e,originalEvent:t,ports:n,sw:r}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),c.sn=t,c.nn=n,navigator.serviceWorker.addEventListener("message",c.gn),c}c=e,(n=f).prototype=Object.create(c.prototype),n.prototype.constructor=n,n.__proto__=c;var l,h=f.prototype;return h.register=function(t){var e=(void 0===t?{}:t).immediate,n=void 0!==e&&e;try{var r=this;return function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){if(!n&&"complete"!==document.readyState)return u(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),a(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&o(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},h.update=function(){try{return this.fn?u(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(e){try{return a(this.getSW(),(function(n){return t(n,e)}))}catch(t){return Promise.reject(t)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,s)},h.pn=function(){var t=navigator.serviceWorker.controller;return t&&o(t.scriptURL,this.sn.toString())?t:void 0},h.bn=function(){try{var t=this;return function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return a(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(f.prototype,l),f}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,r=n(this.Sn(t.type));!(e=r()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());let l,h;const d=new WeakMap,v=new WeakMap,p=new WeakMap,m=new WeakMap,y=new WeakMap;let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function w(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(h||(h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(E(this),t),b(d.get(this))}:function(...t){return b(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return p.set(r,t.sort?t.sort():[t]),b(r)}:(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));v.set(t,e)}(t),n=t,(l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,g):t);var e,n}function b(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(b(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&d.set(e,t)})).catch((()=>{})),y.set(e,t),e}(t);if(m.has(t))return m.get(t);const e=w(t);return e!==t&&(m.set(t,e),y.set(e,t)),e}const E=t=>y.get(t);function L(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=b(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(b(a.result),t.oldVersion,t.newVersion,b(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const S=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],j=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(j.get(e))return j.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),o&&i.done]))[0]};return j.set(e,i),i}function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function P(){P=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function l(){}function h(){}function d(){}var v={};c(v,o,(function(){return this}));var p=Object.getPrototypeOf,m=p&&p(p(x([])));m&&m!==e&&n.call(m,o)&&(v=m);var y=d.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==I(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=d,c(y,"constructor",d),c(d,"constructor",h),h.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),c(y,a,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function D(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function O(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){D(i,r,o,a,c,"next",t)}function c(t){D(i,r,o,a,c,"throw",t)}a(void 0)}))}}var B;B=g,g={...B,get:(t,e,n)=>k(t,e)||B.get(t,e,n),has:(t,e)=>!!k(t,e)||B.has(t,e)};var W=function(){var t=O(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",L("tmm",1,{upgrade:function(t){t.objectStoreNames.contains("tmm")?console.log("tmm database already exists"):(t.createObjectStore("tmm",{keyPath:"id",autoIncrement:!0}),console.log("tmm database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=O(P().mark((function t(e){var n,r,o,i,a;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L("tmm",1);case 2:return n=t.sent,r=n.transaction("tmm","readwrite"),o=r.objectStore("tmm"),i=o.put({id:1,text:e}),t.next=8,i;case 8:a=t.sent,console.log("🚀 - data saved to the database",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=O(P().mark((function t(){var e,n,r,o,i;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L("tmm",1);case 2:return e=t.sent,n=e.transaction("tmm","readonly"),r=n.objectStore("tmm"),o=r.getAll(),t.next=8,o;case 8:return i=t.sent,t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return e&&N(t.prototype,e),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}W();var C,G=A((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),M().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),e.dbData=t,t&&t.length>0?(console.log(t[0]),e.editor.setValue(t[0].text)):e.editor.setValue(n||"\n/*\n\n████████ ███    ███ ███    ███ \n   ██    ████  ████ ████  ████ \n   ██    ██ ████ ██ ██ ████ ██ \n   ██    ██  ██  ██ ██  ██  ██ \n   ██    ██      ██ ██      ██ \n                               \ntext me maybe  \n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",e.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),T(localStorage.getItem("content"))}))})),U=document.querySelector("#main");U.innerHTML="",void 0===new G&&((C=document.createElement("div")).classList.add("spinner"),C.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',U.appendChild(C)),"serviceWorker"in navigator?new f("/service-worker.js").register():console.error("Service workers are not supported in this browser.")})();