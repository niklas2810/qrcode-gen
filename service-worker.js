if(!self.define){let e,r={};const n=(n,s)=>(n=new URL(n+".js",s).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let i={};const t=e=>n(e,c),d={module:{uri:c},exports:i,require:t};r[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(o(...e),i)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"qrcode-gen"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/qrcode-gen/css/app.2c532c7c.css",revision:null},{url:"/qrcode-gen/index.html",revision:"6d1b112a4e3ddbccbf739f4bd6514e70"},{url:"/qrcode-gen/js/app.c1209a74.js",revision:null},{url:"/qrcode-gen/js/chunk-vendors.972bb14e.js",revision:null},{url:"/qrcode-gen/manifest.json",revision:"6b631199ca15b0c0156d4f938b6114a2"},{url:"/qrcode-gen/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
