!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/hiraginoyuki/Documents/Git/fifteen-puzzle/public",n(n.s=14)}([function(e,t){e.exports=React},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var u,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(3),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),u=[];function a(e){for(var t=-1,n=0;n<u.length;n++)if(u[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],c=n[s]||0,l="".concat(s," ").concat(c);n[s]=c+1;var f=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(u[f].references++,u[f].updater(p)):u.push({identifier:l,updater:m(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=i(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,d=0;function m(e,t){var n,r,o;if(t.singleton){var i=d++;n=v||(v=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);u[o].references--}for(var i=s(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}n=i}}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(3),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(){"use strict";var t=function(e,t){return t=t||"",e.replace(/(^|-)/g,"$1\\u"+t).replace(/,/g,"\\u"+t)},n=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),r="a-z"+t("DF-F6,F8-FF","00"),o="A-Z"+t("C0-D6,D8-DE","00"),i=function(e,t,i,u){return e=e||n,t=t||r,i=i||o,u=u||"A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",{capitalize:new RegExp("(^|["+e+"])(["+t+"])","g"),pascal:new RegExp("(^|["+e+"])+(["+t+i+"])","g"),fill:new RegExp("["+e+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+t+"])","g"),improper:new RegExp("\\b("+u+")\\b","g"),relax:new RegExp("([^"+i+"])(["+i+"]*)(["+i+"])(?=[^"+i+"]|$)","g"),upper:new RegExp("^[^"+t+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+e+"]")}},u=i(),a={re:u,unicodes:t,regexps:i,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(e){return a.up.call(e.charAt(0))+e.slice(1)},decap:function(e){return a.low.call(e.charAt(0))+e.slice(1)},deapostrophe:function(e){return e.replace(u.apostrophe,"")},fill:function(e,t,n){return null!=t&&(e=e.replace(u.fill,(function(e,n){return n?t+n:""}))),n&&(e=a.deapostrophe(e)),e},prep:function(e,t,n,r){if(e=null==e?"":e+"",!r&&u.upper.test(e)&&(e=a.low.call(e)),!t&&!u.hole.test(e)){var o=a.fill(e," ");u.hole.test(o)&&(e=o)}return n||u.room.test(e)||(e=e.replace(u.relax,a.relax)),e},relax:function(e,t,n,r){return t+" "+(n?n+" ":"")+r}},s={_:a,of:function(e){for(var t=0,n=a.types.length;t<n;t++)if(s[a.types[t]].apply(s,arguments)===e)return a.types[t]},flip:function(e){return e.replace(/\w/g,(function(e){return(e==a.up.call(e)?a.low:a.up).call(e)}))},random:function(e){return e.replace(/\w/g,(function(e){return(Math.round(Math.random())?a.up:a.low).call(e)}))},type:function(e,t){s[e]=t,a.types.push(e)}},c={lower:function(e,t,n){return a.fill(a.low.call(a.prep(e,t)),t,n)},snake:function(e){return s.lower(e,"_",!0)},constant:function(e){return s.upper(e,"_",!0)},camel:function(e){return a.decap(s.pascal(e))},kebab:function(e){return s.lower(e,"-",!0)},upper:function(e,t,n){return a.fill(a.up.call(a.prep(e,t,!1,!0)),t,n)},capital:function(e,t,n){return a.fill(a.prep(e).replace(u.capitalize,(function(e,t,n){return t+a.up.call(n)})),t,n)},header:function(e){return s.capital(e,"-",!0)},pascal:function(e){return a.fill(a.prep(e,!1,!0).replace(u.pascal,(function(e,t,n){return a.up.call(n)})),"",!0)},title:function(e){return s.capital(e).replace(u.improper,(function(e,t,n,r){return n>0&&n<r.lastIndexOf(" ")?a.low.call(e):e}))},sentence:function(e,t,n){return e=s.lower(e).replace(u.sentence,(function(e,t,n){return t+a.up.call(n)})),t&&t.forEach((function(t){e=e.replace(new RegExp("\\b"+s.lower(t)+"\\b","g"),a.cap)})),n&&n.forEach((function(t){e=e.replace(new RegExp("(\\b"+s.lower(t)+"\\. +)(\\w)"),(function(e,t,n){return t+a.low.call(n)}))})),e}};for(var l in c.squish=c.pascal,s.default=s,c)s.type(l,c[l]);var f="function"==typeof f?f:function(){};f(e.exports?e.exports=s:this.Case=s)}).call(this)},function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var u=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,r){function o(){void 0!==i&&e.removeListener("error",i),n([].slice.call(arguments))}var i;"error"!==t&&(i=function(n){e.removeListener(t,o),r(n)},e.once("error",i)),e.once(t,o)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var s=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var o,i,u,a;if(c(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),u=i[t]),void 0===u)u=i[t]=n,++e._eventsCount;else if("function"==typeof u?u=i[t]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),(o=l(e))>0&&u.length>o&&!u.warned){u.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=u.length,a=s,console&&console.warn&&console.warn(a)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function v(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):m(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return l(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var u;if(t.length>0&&(u=t[0]),u instanceof Error)throw u;var a=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw a.context=u,a}var s=o[e];if(void 0===s)return!1;if("function"==typeof s)i(s,this,t);else{var c=s.length,l=m(s,c);for(n=0;n<c;++n)i(l[n],this,t)}return!0},a.prototype.addListener=function(e,t){return f(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return f(this,e,t,!0)},a.prototype.once=function(e,t){return c(t),this.on(e,h(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,h(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,o,i,u;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){u=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,u||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return v(this,e,!0)},a.prototype.rawListeners=function(e){return v(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){var r=n(3),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".flexCenteringContainer__2IhkERfb{display:flex;width:100%;height:100%;justify-content:center;align-content:center}.flexCenteringContainer__2IhkERfb>*{position:relative;margin:auto}\n",""]),o.locals={flexCenteringContainer:"flexCenteringContainer__2IhkERfb"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".fifteenPuzzleRenderer__qLinV4ur{user-select:none;-webkit-user-select:none;width:calc(80px * var(--columns));height:calc(80px * var(--rows))}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB{--width: 80px;--height: 80px;display:flex;position:absolute;width:76px;height:76px;margin:2px;transform:translate(calc(var(--width) * var(--x)), calc(var(--height) * var(--y)));border-radius:5px;background-color:#111;font-weight:900;filter:invert(0%);transition:0.1s transform var(--easeOutCirc),0.2s filter var(--easeOutCirc)}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.hidden__32VDde5O{opacity:0}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.correct__2xpy-Yms{filter:invert(100%)}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB>.number__2LpDRuQv{margin:auto;font-size:28pt}\n",""]),o.locals={fifteenPuzzleRenderer:"fifteenPuzzleRenderer__qLinV4ur",piece:"piece__3-JQfuFB",hidden:"hidden__32VDde5O",correct:"correct__2xpy-Yms",number:"number__2LpDRuQv"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".name__qMxwrnEO{position:fixed;left:0;bottom:0;margin:8px 10px;font-size:14px;color:#777}\n",""]),o.locals={name:"name__qMxwrnEO"},t.default=o},function(e,t,n){var r=n(3),o=n(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);"]),o.push([e.i,"body{margin:0;width:100vw;height:100vh;overflow:hidden;background-color:#222;color:#ccc;font-family:'Roboto', sans-serif}body>#app{width:100%;height:100%}:root{--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1)}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(4),u=n.n(i),a=n(5),s=n.n(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e){return o.a.createElement("div",c({},e,{className:m(s.a.flexCenteringContainer,e.className)})," ",e.children," ")}var f=function(e){return Math.floor(Math.random()*e.length)},p=function(e){return e[f(e)]},h=function(){function e(e){this.compute=e}return Object.defineProperty(e.prototype,"value",{get:function(){return this.isCached||(this.cachedValue=this.compute(),this.isCached=!0),this.cachedValue},enumerable:!1,configurable:!0}),e}();function v(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];window.hasOwnProperty(t)&&delete window[t],Object.defineProperty(window,t,{value:n,configurable:!0})}))}document.addEventListener("touchmove",(function(e){e.target.classList.contains("allow-scroll")?e.stopPropagation():e.preventDefault()}),{passive:!1});var d=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());function m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"==typeof e})).map((function(e){return e.trim()})).filter((function(e){return e.length})).join(" ")}var g=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r};function y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];switch(e.length){case 1:return y(0,e[0],1);case 2:return y(e[0],e[1],1);default:var n=e[0],r=e[1],o=e[2];return g(Array(Math.ceil((r-n)/o))).map((function(e,t){return n+t*o}))}}var b=function(e,t,n){return n[n.length-1-t]},w=n(6);var _=function(e){return"--"+Object(w.kebab)(e)},x={var:function(e){return Object.assign(E,O(e))}},O=function(e){return function(e,t){return Object.fromEntries(Object.entries(e).map((function(e){var n=e[0],r=e[1];return[t(n),r]})))}(e,_)};function E(e){return Object.assign(Object.create(x),e)}E.var=O;var P,L=n(7),j=(P=function(e,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=Math.floor,R=Math.abs,M=function(){function e(e){this.columns=e}return e.prototype.convertPointToIndex=function(e){return e[0]+e[1]*this.columns},e.prototype.convertIndexToPoint=function(e){return[e%this.columns,C(e/this.columns)]},e}(),F=function(e){function t(t,n){void 0===t&&(t=4),void 0===n&&(n=y(1,Array.isArray(t)?t[0]*t[1]:Math.pow(t,2)).concat(0));var r=e.call(this)||this;if(r.numbers=n,Array.isArray(t)?(r.columns=t[0],r.rows=t[1]):r.columns=r.rows=t,r.pointUtil=new M(r.columns),!r.isCorrect())throw new RangeError("Invalid numbers");return r}return j(t,e),t.generateRandom=function(e,t){void 0===e&&(e=4),void 0===t&&(t=e);for(var n=t*e,r=[],o=y(1,n),i=0,u=y(n-3);i<u.length;i++){u[i];r.push(o.splice(f(o),1)[0])}var a=new this([e,t],r.concat(o,0));a.isSolvable()||(a=new this([e,t],r.concat(o.map(b),0)));var s=p([!0,!1]);return a.tap(s?[p(y(e)),t-1]:[e-1,p(y(t))]),a.tap(s?[a.getEmptyPoint()[0],p(y(t))]:[p(y(e)),a.getEmptyPoint()[1]]),a},Object.defineProperty(t.prototype,"length",{get:function(){return this.numbers.length},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new this.constructor([this.rows,this.columns],this.numbers.slice())},t.prototype.equals=function(e,t){return e[0]===t[0]&&e[1]===t[1]},t.prototype.setValueOfPoint=function(e,t){return this.numbers[this.pointUtil.convertPointToIndex(e)]=t,this},t.prototype.getValueFromPoint=function(e){return this.numbers[this.pointUtil.convertPointToIndex(e)]},t.prototype.getPointFromValue=function(e){return this.pointUtil.convertIndexToPoint(this.numbers.findIndex((function(t){return t===e})))},t.prototype.getEmptyPoint=function(){return this.getPointFromValue(0)},t.prototype.isCorrect=function(){var e=this;return this.numbers.length===this.columns*this.rows&&y(this.numbers.length).every((function(t){return e.numbers.includes(t)}))},t.prototype.isSolvable=function(){if(!this.isCorrect())return!1;var e=this.clone();return e.equals(e.getPointFromValue(0),[e.columns,e.rows])||(e.tap([e.columns-1,e.getPointFromValue(0)[1]]),e.tap([e.columns-1,e.rows-1])),y(e.columns*e.rows-1).reduce((function(t,n){var r=e.getPointFromValue(n+1);return n!==e.pointUtil.convertPointToIndex(r)?(e.swap(e.pointUtil.convertIndexToPoint(n),r),t+1):t}))%2==0},t.prototype.isSolved=function(){var e=this;return this.isCorrect()&&y(1,this.length).concat(0).every((function(t,n){return e.getValueFromPoint(e.pointUtil.convertIndexToPoint(n))==t}))},t.prototype.swap=function(e,t){var n=this.getValueFromPoint(e),r=this.getValueFromPoint(t);return this.setValueOfPoint(e,r),this.setValueOfPoint(t,n),!0},t.prototype.tap=function(e){var t=this,n=this.getEmptyPoint();if(this.equals(e,n))return!1;if(e[0]!==n[0]&&e[1]!==n[1])return!1;var r=e[0]===n[0],o=+r,i=n[o]-e[o];return y(1,R(i)+1).map((function(e){return i>0?e:-e})).forEach((function(o){return t.swap(t.getEmptyPoint(),r?[e[0],n[1]-o]:[n[0]-o,e[1]])})),this.emit("on-tap",this),!0},t}(L.EventEmitter),A=n(2),z=n.n(A),S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},T=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r},V={4:[0,0],5:[1,0],6:[2,0],7:[3,0],r:[0,1],t:[1,1],y:[2,1],u:[3,1],f:[0,2],g:[1,2],h:[2,2],j:[3,2],v:[0,3],b:[1,3],n:[2,3],m:[3,3]};function I(){var e,t=Object(r.useState)(F.generateRandom(4)),n=t[0],i=t[1],u=d?"onTouchStart":"onMouseDown",a=(e=Object(r.useState)(0)[1],function(){return e((function(e){return e+1}))}),s=Object(r.useRef)();function c(){i(F.generateRandom())}function l(e){n.tap(e),console.log("tapped",e),a()}return Object(r.useEffect)((function(){return v({puzzle:n,setPuzzle:i,forceUpdate:a})})),Object(r.useEffect)((function(){document.removeEventListener("keydown",s.current),document.addEventListener("keydown",s.current=function(e){return function(e){" "==e&&c();var t=V[e];console.log(e,t),Array.isArray(t)&&l(t)}(e.key)})}),[n]),o.a.createElement("div",{className:z.a.fifteenPuzzleRenderer,style:E.var({columns:n.columns,rows:n.rows})},y(n.numbers.length).map((function(e){var t=n.getPointFromValue(e),r=n.pointUtil.convertPointToIndex(t),i=0==e,a=new h((function(){return n.isSolved()}));return o.a.createElement(k,{key:e,hidden:i&&!a.value,correct:e==r+1,tapEvent:u,onTap:i&&a.value?c:l,x:t[0],y:t[1]},i?o.a.createElement("div",{className:z.a.number}," R "):o.a.createElement("div",{className:z.a.number}," ",e," "))})))}function k(e){var t,n=e.x,r=e.y,i=e.hidden,u=e.tapEvent,a=e.onTap,s=e.key,c=e.correct,l=e.children;return o.a.createElement("div",S({className:m(z.a.piece,c&&z.a.correct,i&&z.a.hidden),style:E.var({x:n,y:r}),key:s},((t={})[u]=function(){return a([n,r])},t))," ",l," ")}v({forceSolve:function(e){return e.numbers=T(Array(e.columns*e.rows-1)).map((function(e,t){return t+1})).concat(0),e}});var N=n(8),U=n.n(N);v({FifteenPuzzle:F});n(12);u.a.render(o.a.createElement((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null,o.a.createElement(I,null)),o.a.createElement("div",{className:U.a.name},"Made by Yuki Hiragino"))}),null),document.getElementById("app"))}]);