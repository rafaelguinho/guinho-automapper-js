/*! For license information please see index.js.LICENSE.txt */
module.exports=(()=>{"use strict";var e={872:(e,r,t)=>{t.r(r),t.d(r,{map:()=>f,mapReverse:()=>c});const n=function(e,r,t,n){if(!n||"undefined"!==t&&null!==t){var o=(r=function(e){if("string"!=typeof e)return e;var r=[];return(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split(".").forEach((function(e,t){e.split(/\[([^}]+)\]/g).forEach((function(e){e.length>0&&r.push(e)}))})),r}(r)).length,f=e;r.forEach((function(e,n){n===o-1?f[e]=t:(f[e]||/^\d+$/.test(r[n+1])?!f[e]&&/^\d+$/.test(r[n+1])&&(f[e]=[]):f[e]={},f=f[e])}))}},o=function(e,r,t){for(var n=(r=(r=r.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,f=n.length;o<f;++o){var c=n[o];if(!e||!(c in e))return;e=e[c]}return t&&"string"==typeof e&&(e=e.replace(t,"")),e};function f(e,r,t,f){return function(e,r,t,f){t.forEach((t=>{const c=function(e,r){return"process-from"===r.type?function(e,r){const t=o(e,r.process_from.id_field),n=e[r.process_from.collection_find].find(r.process_from.find(t));return o(n,r.process_from.field_find)}(e,r):o(e,r.from,r.fromPatternReplace)}(e,t);n(r,t.to,c,f)}))}(e,r,t,f),r}function c(e,r,t,f){return function(e,r,t,f){t.forEach((t=>{const c=o(r,t.to);n(e,t.from,c,f)}))}(e,r,t,f),r}}},r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}return t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(872)})();