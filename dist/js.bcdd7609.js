parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mAbx":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=n(require("../scss/styles.scss"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function l(e){return document.querySelector(e)}function a(e){return Array.from(document.querySelectorAll(e))}var i="#111",c="#fefefe",u="#002573",s="#f7d708",d="#FFDBB5",f="#F1FAEE",h="floralwhite",k="#B80C09",g="#FF8484",b="orange",y="#239a3b",m="papayawhip",p={dark:"#111",gray:"#888888",light:"#fefefe",blue:"blue",green:"#239a3b",yellow:"#f7d708",red:"#B80C09",pink:"#FF8484",orange:"orange",darkblue:"#002573",tan:"#FFDBB5",ice:"#F1FAEE",papayawhip:"papayawhip"},v=[{background:i,color:c,linkColor:c},{background:c,color:i,linkColor:i},{background:u,color:c,linkColor:c},{background:y,color:c,linkColor:c},{background:f,color:i,linkColor:i},{background:g,color:c,linkColor:c},{background:k,color:c,linkColor:c},{background:d,color:i,linkColor:i},{background:s,color:i,linkColor:i},{background:m,color:i,linkColor:i},{background:b,color:i,linkColor:i}],C=function(){function e(){o(this,e),this.trigger=document.querySelector("#secret-button"),this.setTheme=this.setTheme.bind(this),this.handleUpdate=this.handleUpdate.bind(this)}return r(e,[{key:"listen",value:function(){this.trigger.addEventListener("click",this.handleUpdate)}},{key:"unlisten",value:function(){this.trigger.removeEventListener("click",this.handleUpdate)}},{key:"handleUpdate",value:function(){var e=F(0,v.length-1),n=v[e];this.setTheme(n)}},{key:"setTheme",value:function(e){var n=e.background,o=e.color,t=e.linkColor,r=l("body"),i=a("p"),c=a("a");r.style.background=n,r.style.color=o,c.forEach(function(e){return e.style.color=t}),i.forEach(function(e){return e.style.color=o})}},{key:"setInitialTheme",value:function(){for(var e=(new Date).getHours(),n=v.length,o=e;o>=n;)o-=n;this.setTheme(v[1])}}]),e}(),F=function(e,n){return Math.floor(Math.random()*(n-e+1)+e)};function E(e){var n=document.querySelector("#hello");setTimeout(function(){n.classList.add("animate-in")},0),setTimeout(function(){n.classList.remove("animate-in")},e/2)}function w(){(new C).listen();setTimeout(function(){Array.from(document.querySelectorAll(".animate")).forEach(function(e){return e.classList.add("animate-in")})},1e3)}document.addEventListener("DOMContentLoaded",function(){w()});
},{"../scss/styles.scss":"mAbx"}]},{},["QvaY"], null)
//# sourceMappingURL=/evanwinter.github.io/js.bcdd7609.map