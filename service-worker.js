if(!self.define){let e,r={};const n=(n,s)=>(n=new URL(n+".js",s).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let i={};const t=e=>n(e,o),l={module:{uri:o},exports:i,require:t};r[o]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(c(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"qrcode-gen"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/qrcode-gen/css/app.2c532c7c.css",revision:null},{url:"/qrcode-gen/index.html",revision:"7cb41c114c9607e5bc8a44189c6674bc"},{url:"/qrcode-gen/js/app.fd9630d9.js",revision:null},{url:"/qrcode-gen/js/chunk-vendors.4be7bdb9.js",revision:null},{url:"/qrcode-gen/manifest.json",revision:"6b631199ca15b0c0156d4f938b6114a2"},{url:"/qrcode-gen/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
