parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mAbx":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=o(require("../scss/styles.scss"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function t(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}function l(e){return document.querySelector(e)}function i(e){return Array.from(document.querySelectorAll(e))}var a="#111",c="#fefefe",u="#002573",s="#f7d708",d="#FFDBB5",f="#F1FAEE",h="floralwhite",k="#B80C09",m="#FF8484",g="orange",b="#239a3b",y="papayawhip",v=[{background:a,color:c,linkColor:c},{background:c,color:a,linkColor:a},{background:u,color:c,linkColor:c},{background:b,color:c,linkColor:c},{background:f,color:a,linkColor:a},{background:m,color:c,linkColor:c},{background:k,color:c,linkColor:c},{background:d,color:a,linkColor:a},{background:s,color:a,linkColor:a},{background:y,color:a,linkColor:a},{background:g,color:a,linkColor:a}],C=function(){function e(){n(this,e),this.trigger=document.querySelector("#secret-button"),this.setTheme=this.setTheme.bind(this),this.handleUpdate=this.handleUpdate.bind(this)}return r(e,[{key:"listen",value:function(){this.trigger.addEventListener("click",this.handleUpdate)}},{key:"unlisten",value:function(){this.trigger.removeEventListener("click",this.handleUpdate)}},{key:"handleUpdate",value:function(){var e=p(0,v.length-1),o=v[e];this.setTheme(o)}},{key:"setTheme",value:function(e){var o=e.background,n=e.color,t=e.linkColor,r=l("body"),a=i("p"),c=i("a");r.style.background=o,r.style.color=n,c.forEach(function(e){return e.style.color=t}),a.forEach(function(e){return e.style.color=n})}},{key:"setInitialTheme",value:function(){for(var e=(new Date).getHours(),o=v.length,n=e;n>=o;)n-=o;this.setTheme(v[1])}}]),e}(),p=function(e,o){return Math.floor(Math.random()*(o-e+1)+e)};function T(e){var o=document.querySelector("#hello");setTimeout(function(){o.classList.add("animate-in")},0),setTimeout(function(){o.classList.remove("animate-in")},e/2)}function E(){(new C).listen();setTimeout(function(){Array.from(document.querySelectorAll(".animate")).forEach(function(e){return e.classList.add("animate-in")})},1e3)}document.addEventListener("DOMContentLoaded",function(){E()});
},{"../scss/styles.scss":"mAbx"}]},{},["QvaY"], null)
//# sourceMappingURL=js.00bb6f8f.map