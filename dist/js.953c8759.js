parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mAbx":[function(require,module,exports) {

},{}],"qwQt":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&r(e.prototype,o),n&&r(e,n),e}function n(e){return i(e)||l(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var r=0,o=new Array(e.length);r<e.length;r++)o[r]=e[r];return o}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a="#111",c="#888888",u="#fefefe",s="#002573",d="#f7d708",h="#FFDBB5",f="#F1FAEE",k="floralwhite",g="#B80C09",y="#FF8484",b="orange",p="green",v="papayawhip",m={dark:a,gray:c,light:u,green:p,yellow:d,red:g,pink:y,orange:b,darkblue:s,tan:h,ice:f,papayawhip:v},C=[{background:a,color:u,linkColor:u},{background:u,color:a,linkColor:a},{background:s,color:u,linkColor:u},{background:p,color:u,linkColor:u},{background:f,color:a,linkColor:a},{background:y,color:u,linkColor:u},{background:g,color:u,linkColor:u},{background:h,color:a,linkColor:a},{background:d,color:a,linkColor:a},{background:v,color:a,linkColor:a},{background:b,color:a,linkColor:a}],w=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)},E=function(e){return n(document.querySelectorAll(e))},T=function(){function r(){e(this,r),this.trigger=document.querySelector("#secret-button"),this.setTheme=this.setTheme.bind(this),this.handleUpdate=this.handleUpdate.bind(this),this.currentIndex=0}return o(r,[{key:"listen",value:function(){this.trigger.addEventListener("click",this.handleUpdate)}},{key:"unlisten",value:function(){this.trigger.removeEventListener("click",this.handleUpdate)}},{key:"handleUpdate",value:function(){var e=null;do{e=w(0,C.length-1)}while(e===this.currentIndex);var r=C[e];this.setTheme(r),this.currentIndex=e}},{key:"setTheme",value:function(e){var r=e.background,o=e.color,n=e.linkColor,t=document.querySelector("body"),l=E("p"),i=E("a"),a=E("svg");t.style.background=r,t.style.color=o,i.forEach(function(e){return e.style.color=n}),l.forEach(function(e){return e.style.color=o}),a.forEach(function(e){return e.style.fill=o})}},{key:"setInitialTheme",value:function(){for(var e=(new Date).getHours(),r=C.length,o=e;o>=r;)o-=r;e>17?this.setTheme(C[0]):this.setTheme(C[1])}}]),r}(),A=T;exports.default=A;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=s(require("../scss/styles.scss")),t=s(require("./theme"));function s(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var e=new t.default;e.setInitialTheme(),e.listen()});
},{"../scss/styles.scss":"mAbx","./theme":"qwQt"}]},{},["QvaY"], null)
//# sourceMappingURL=js.953c8759.js.map