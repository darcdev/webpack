!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=12)}([function(e,t,n){e.exports=n(1)(0)},function(e,t){e.exports=modules},function(e,t,n){e.exports=n(1)(4)},function(e,t,n){var r=n(6),o=n(7),a=n(8),u=n(10);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||u()}},function(e){e.exports={loaders:[{name:"css-loader",id:"1"},{name:"style-loader",id:"2"},{name:"babel-loader",id:"3"}]}},function(e,t,n){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){"use strict";n.r(t);n(5);var r=n(0),o=n.n(r),a=n(2),u=n(3),i=n.n(u),l=n(4);var c=function(e){return o.a.createElement("li",null,e.data.name)},f=n.p+"42f6aa72808bc49f9ff7359b482ca377.png",d=n.p+"a9d38779b07dcf7d4bc2232949310183.mp4";var s=function(){var e=Object(r.useState)([]),t=i()(e,2),n=t[0],a=t[1];return o.a.createElement("div",null,o.a.createElement("video",{width:360,src:d,controls:!0,poster:f}),o.a.createElement("p",null,o.a.createElement("img",{src:f,alt:"logo platzi"})),o.a.createElement("ul",null,n.map((function(e){return o.a.createElement(c,{data:e,key:e.id})}))),o.a.createElement("button",{onClick:function(){a(l.loaders)}},"Mostrar lo aprendido hasta el momento"))};Object(a.render)(o.a.createElement(s,null),document.getElementById("container"))}]);