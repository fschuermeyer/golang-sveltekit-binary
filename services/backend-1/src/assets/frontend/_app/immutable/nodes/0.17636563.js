import{S as V,i as q,s as B,e as oe,b as k,v as Se,d as v,f as we,g as b,h as d,C as N,D as ze,E as C,F as M,G as K,H as Q,k as L,a as R,l as I,m as E,c as j,I as G,J as P,K as J,L as X,M as Z,N as x,O as $,q as W,r as Y,n as w,u as te,P as Ie,Q as se,R as ae,T as le,U as Ae,y as T,z as F,A as H,V as Ee,B as O,W as ce,X as me,Y as Me,Z as De,_ as Ne,$ as de,a0 as Te,a1 as Fe,p as He,a2 as Oe,o as Ue,a3 as Ge}from"../chunks/index.6840f6e3.js";import{t as D}from"../chunks/Indicator.svelte_svelte_type_style_lang.97fd6b4f.js";import{F as Pe}from"../chunks/Frame.4ae5314b.js";import{m as he,O as Be,z as Re}from"../chunks/runtime.esm.cf986d2a.js";import{w as je}from"../chunks/index.7d8f7407.js";const Ve={navigation:{home:"Home",github:"GitHub"}},qe={home:{"header-1":"Use Golang and SvelteKit in a standalone app!",text:"This open-source repository provides a SvelteKit frontend template that has been specifically adapted for integration with a Golang Fiber API. Using the binary compilation process, the frontend is fully integrated into the API, allowing for a very lightweight installation for server administrators who cannot or do not want to use Docker (due to the virtualization method). Thanks to dynamic routing, the template can be flexibly adapted to different URL structures."}},Ke={http:{404:{text:"Page Not Found"}}},Je={endpoints:{"pokemon-all":"https://www.pokemon.com/us/api/pokedex/kalos"}},We={header:Ve,page:qe,error:Ke,api:Je},Ye={navigation:{home:"Startseite",github:"GitHub"}},Qe={home:{"header-1":"Nutze Golang und SvelteKit in einem Binary!",text:"Dieses OpenSource Repository bietet ein SvelteKit Frontend Template, das speziell für die Integration in eine Golang Fiber API angepasst wurde. Mit dem Binary-Kompilierungsprozess wird das Frontend vollständig in die API integriert, wodurch auch eine sehr leichte Installation für die Serveradministratoren ermöglicht wird, welche kein Docker nutzen können (aufgrund der Virtualisierungsart), oder möchten. Dank des dynamischen Routings kann das Template flexibel auf verschiedene URL-Strukturen angepasst werden."}},Xe={http:{404:{text:"Seite Nicht Gefunden"}}},Ze={endpoints:{"pokemon-all":"https://www.pokemon.com/de/api/pokedex/kalos"}},xe={header:Ye,page:Qe,error:Xe,api:Ze};function $e(s){const e=s-1;return e*e*e+1}function et(s){return--s*s*s*s*s+1}function ge(s,{delay:e=0,duration:t=400,easing:l=$e,axis:r="y"}={}){const a=getComputedStyle(s),i=+a.opacity,n=r==="y"?"height":"width",o=parseFloat(a[n]),f=r==="y"?["top","bottom"]:["left","right"],u=f.map(z=>`${z[0].toUpperCase()}${z.slice(1)}`),c=parseFloat(a[`padding${u[0]}`]),m=parseFloat(a[`padding${u[1]}`]),g=parseFloat(a[`margin${u[0]}`]),h=parseFloat(a[`margin${u[1]}`]),S=parseFloat(a[`border${u[0]}Width`]),_=parseFloat(a[`border${u[1]}Width`]);return{delay:e,duration:t,easing:l,css:z=>`overflow: hidden;opacity: ${Math.min(z*20,1)*i};${n}: ${z*o}px;padding-${f[0]}: ${z*c}px;padding-${f[1]}: ${z*m}px;margin-${f[0]}: ${z*g}px;margin-${f[1]}: ${z*h}px;border-${f[0]}-width: ${z*S}px;border-${f[1]}-width: ${z*_}px;`}}const tt=s=>({svgSize:s&4}),_e=s=>({svgSize:s[5][s[2]]}),lt=s=>({svgSize:s&4}),ve=s=>({svgSize:s[5][s[2]]});function st(s){let e,t,l,r,a,i,n=s[0]&&be(s);const o=s[9].default,f=Q(o,s,s[8],_e);let u=[{type:"button"},s[6],{class:s[4]},{"aria-label":l=s[1]??s[0]}],c={};for(let m=0;m<u.length;m+=1)c=C(c,u[m]);return{c(){e=L("button"),n&&n.c(),t=R(),f&&f.c(),this.h()},l(m){e=I(m,"BUTTON",{type:!0,class:!0,"aria-label":!0});var g=E(e);n&&n.l(g),t=j(g),f&&f.l(g),g.forEach(d),this.h()},h(){G(e,c)},m(m,g){k(m,e,g),n&&n.m(e,null),P(e,t),f&&f.m(e,null),e.autofocus&&e.focus(),r=!0,a||(i=J(e,"click",s[10]),a=!0)},p(m,g){m[0]?n?n.p(m,g):(n=be(m),n.c(),n.m(e,t)):n&&(n.d(1),n=null),f&&f.p&&(!r||g&260)&&X(f,o,m,m[8],r?x(o,m[8],g,tt):Z(m[8]),_e),G(e,c=$(u,[{type:"button"},g&64&&m[6],(!r||g&16)&&{class:m[4]},(!r||g&3&&l!==(l=m[1]??m[0]))&&{"aria-label":l}]))},i(m){r||(b(f,m),r=!0)},o(m){v(f,m),r=!1},d(m){m&&d(e),n&&n.d(),f&&f.d(m),a=!1,i()}}}function at(s){let e,t,l,r,a=s[0]&&ke(s);const i=s[9].default,n=Q(i,s,s[8],ve);let o=[{href:s[3]},s[6],{class:s[4]},{"aria-label":l=s[1]??s[0]}],f={};for(let u=0;u<o.length;u+=1)f=C(f,o[u]);return{c(){e=L("a"),a&&a.c(),t=R(),n&&n.c(),this.h()},l(u){e=I(u,"A",{href:!0,class:!0,"aria-label":!0});var c=E(e);a&&a.l(c),t=j(c),n&&n.l(c),c.forEach(d),this.h()},h(){G(e,f)},m(u,c){k(u,e,c),a&&a.m(e,null),P(e,t),n&&n.m(e,null),r=!0},p(u,c){u[0]?a?a.p(u,c):(a=ke(u),a.c(),a.m(e,t)):a&&(a.d(1),a=null),n&&n.p&&(!r||c&260)&&X(n,i,u,u[8],r?x(i,u[8],c,lt):Z(u[8]),ve),G(e,f=$(o,[(!r||c&8)&&{href:u[3]},c&64&&u[6],(!r||c&16)&&{class:u[4]},(!r||c&3&&l!==(l=u[1]??u[0]))&&{"aria-label":l}]))},i(u){r||(b(n,u),r=!0)},o(u){v(n,u),r=!1},d(u){u&&d(e),a&&a.d(),n&&n.d(u)}}}function be(s){let e,t;return{c(){e=L("span"),t=W(s[0]),this.h()},l(l){e=I(l,"SPAN",{class:!0});var r=E(e);t=Y(r,s[0]),r.forEach(d),this.h()},h(){w(e,"class","sr-only")},m(l,r){k(l,e,r),P(e,t)},p(l,r){r&1&&te(t,l[0])},d(l){l&&d(e)}}}function ke(s){let e,t;return{c(){e=L("span"),t=W(s[0]),this.h()},l(l){e=I(l,"SPAN",{class:!0});var r=E(e);t=Y(r,s[0]),r.forEach(d),this.h()},h(){w(e,"class","sr-only")},m(l,r){k(l,e,r),P(e,t)},p(l,r){r&1&&te(t,l[0])},d(l){l&&d(e)}}}function rt(s){let e,t,l,r;const a=[at,st],i=[];function n(o,f){return o[3]?0:1}return e=n(s),t=i[e]=a[e](s),{c(){t.c(),l=oe()},l(o){t.l(o),l=oe()},m(o,f){i[e].m(o,f),k(o,l,f),r=!0},p(o,[f]){let u=e;e=n(o),e===u?i[e].p(o,f):(Se(),v(i[u],1,1,()=>{i[u]=null}),we(),t=i[e],t?t.p(o,f):(t=i[e]=a[e](o),t.c()),b(t,1),t.m(l.parentNode,l))},i(o){r||(b(t),r=!0)},o(o){v(t),r=!1},d(o){i[e].d(o),o&&d(l)}}}function nt(s,e,t){const l=["color","name","ariaLabel","size","href"];let r=N(e,l),{$$slots:a={},$$scope:i}=e;const n=ze("background");let{color:o="default"}=e,{name:f=void 0}=e,{ariaLabel:u=void 0}=e,{size:c="md"}=e,{href:m=void 0}=e;const g={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400"},h={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let S;const _={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function z(A){K.call(this,s,A)}return s.$$set=A=>{t(14,e=C(C({},e),M(A))),t(6,r=N(e,l)),"color"in A&&t(7,o=A.color),"name"in A&&t(0,f=A.name),"ariaLabel"in A&&t(1,u=A.ariaLabel),"size"in A&&t(2,c=A.size),"href"in A&&t(3,m=A.href),"$$scope"in A&&t(8,i=A.$$scope)},s.$$.update=()=>{t(4,S=D("focus:outline-none whitespace-normal",h[c],g[o],o==="default"&&(n?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=M(e),[f,u,c,m,S,_,r,o,i,a,z]}class ot extends V{constructor(e){super(),q(this,e,nt,rt,B,{color:7,name:0,ariaLabel:1,size:2,href:3})}}const it=s=>({}),Ce=s=>({}),ft=s=>({}),ye=s=>({});function ut(s){let e,t,l;return{c(){e=se("svg"),t=se("path"),this.h()},l(r){e=ae(r,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var a=E(e);t=ae(a,"path",{d:!0,"fill-rule":!0,"clip-rule":!0}),E(t).forEach(d),a.forEach(d),this.h()},h(){w(t,"d",`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z`),w(t,"fill-rule","evenodd"),w(t,"clip-rule","evenodd"),w(e,"class",l=s[2][s[1]]),w(e,"fill","currentColor"),w(e,"viewBox","0 0 20 20"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(r,a){k(r,e,a),P(e,t)},p(r,a){a&2&&l!==(l=r[2][r[1]])&&w(e,"class",l)},d(r){r&&d(e)}}}function ct(s){let e,t,l;return{c(){e=se("svg"),t=se("path"),this.h()},l(r){e=ae(r,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var a=E(e);t=ae(a,"path",{d:!0}),E(t).forEach(d),a.forEach(d),this.h()},h(){w(t,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),w(e,"class",l=s[2][s[1]]),w(e,"fill","currentColor"),w(e,"viewBox","0 0 20 20"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(r,a){k(r,e,a),P(e,t)},p(r,a){a&2&&l!==(l=r[2][r[1]])&&w(e,"class",l)},d(r){r&&d(e)}}}function mt(s){let e,t,l,r,a,i,n,o,f,u,c;const m=s[7].lightIcon,g=Q(m,s,s[6],ye),h=g||ut(s),S=s[7].darkIcon,_=Q(S,s,s[6],Ce),z=_||ct(s);let A=[{"aria-label":"Dark mode"},{type:"button"},s[4],{class:o=D(s[0],s[5].class)}],ee={};for(let y=0;y<A.length;y+=1)ee=C(ee,A[y]);return{c(){e=L("script"),t=W(`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),l=R(),r=L("button"),a=L("span"),h&&h.c(),i=R(),n=L("span"),z&&z.c(),this.h()},l(y){const U=Ie("svelte-7ajg2y",document.head);e=I(U,"SCRIPT",{});var re=E(e);t=Y(re,`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),re.forEach(d),U.forEach(d),l=j(y),r=I(y,"BUTTON",{"aria-label":!0,type:!0,class:!0});var p=E(r);a=I(p,"SPAN",{class:!0});var fe=E(a);h&&h.l(fe),fe.forEach(d),i=j(p),n=I(p,"SPAN",{class:!0});var ue=E(n);z&&z.l(ue),ue.forEach(d),p.forEach(d),this.h()},h(){w(a,"class","hidden dark:block"),w(n,"class","block dark:hidden"),G(r,ee)},m(y,U){P(document.head,e),P(e,t),k(y,l,U),k(y,r,U),P(r,a),h&&h.m(a,null),P(r,i),P(r,n),z&&z.m(n,null),r.autofocus&&r.focus(),f=!0,u||(c=J(r,"click",s[3]),u=!0)},p(y,[U]){g?g.p&&(!f||U&64)&&X(g,m,y,y[6],f?x(m,y[6],U,ft):Z(y[6]),ye):h&&h.p&&(!f||U&2)&&h.p(y,f?U:-1),_?_.p&&(!f||U&64)&&X(_,S,y,y[6],f?x(S,y[6],U,it):Z(y[6]),Ce):z&&z.p&&(!f||U&2)&&z.p(y,f?U:-1),G(r,ee=$(A,[{"aria-label":"Dark mode"},{type:"button"},U&16&&y[4],(!f||U&33&&o!==(o=D(y[0],y[5].class)))&&{class:o}]))},i(y){f||(b(h,y),b(z,y),f=!0)},o(y){v(h,y),v(z,y),f=!1},d(y){d(e),y&&d(l),y&&d(r),h&&h.d(y),z&&z.d(y),u=!1,c()}}}function dt(s,e,t){const l=["btnClass","size"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{btnClass:n="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"}=e,{size:o="md"}=e;const f={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},u=()=>{const c=window.document.documentElement.classList.toggle("dark");localStorage.setItem("color-theme",c?"dark":"light")};return s.$$set=c=>{t(5,e=C(C({},e),M(c))),t(4,r=N(e,l)),"btnClass"in c&&t(0,n=c.btnClass),"size"in c&&t(1,o=c.size),"$$scope"in c&&t(6,i=c.$$scope)},e=M(e),[n,o,f,u,r,e,i,a]}class ht extends V{constructor(e){super(),q(this,e,dt,mt,B,{btnClass:0,size:1})}}function gt(s){let e,t;const l=s[4].default,r=Q(l,s,s[3],null);let a=[s[1],{class:s[0]}],i={};for(let n=0;n<a.length;n+=1)i=C(i,a[n]);return{c(){e=L("footer"),r&&r.c(),this.h()},l(n){e=I(n,"FOOTER",{class:!0});var o=E(e);r&&r.l(o),o.forEach(d),this.h()},h(){G(e,i)},m(n,o){k(n,e,o),r&&r.m(e,null),t=!0},p(n,[o]){r&&r.p&&(!t||o&8)&&X(r,l,n,n[3],t?x(l,n[3],o,null):Z(n[3]),null),G(e,i=$(a,[o&2&&n[1],{class:n[0]}]))},i(n){t||(b(r,n),t=!0)},o(n){v(r,n),t=!1},d(n){n&&d(e),r&&r.d(n)}}}function _t(s,e,t){const l=["footerType"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{footerType:n="default"}=e,o=D(n==="sitemap"&&"bg-gray-800",n==="socialmedia"&&"p-4 bg-white sm:p-6 dark:bg-gray-800",n==="logo"&&"p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",n==="default"&&"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",e.class);return s.$$set=f=>{t(5,e=C(C({},e),M(f))),t(1,r=N(e,l)),"footerType"in f&&t(2,n=f.footerType),"$$scope"in f&&t(3,i=f.$$scope)},e=M(e),[o,r,n,i,a]}class vt extends V{constructor(e){super(),q(this,e,_t,gt,B,{footerType:2})}}function bt(s){let e,t;return{c(){e=L("span"),t=W(s[2]),this.h()},l(l){e=I(l,"SPAN",{class:!0});var r=E(e);t=Y(r,s[2]),r.forEach(d),this.h()},h(){w(e,"class","ml-1")},m(l,r){k(l,e,r),P(e,t)},p(l,r){r&4&&te(t,l[2])},d(l){l&&d(e)}}}function kt(s){let e,t,l=[s[7],{href:s[1]},{target:s[3]},{class:s[6]}],r={};for(let a=0;a<l.length;a+=1)r=C(r,l[a]);return{c(){e=L("a"),t=W(s[2]),this.h()},l(a){e=I(a,"A",{href:!0,target:!0,class:!0});var i=E(e);t=Y(i,s[2]),i.forEach(d),this.h()},h(){G(e,r)},m(a,i){k(a,e,i),P(e,t)},p(a,i){i&4&&Ae(t,a[2],r.contenteditable),G(e,r=$(l,[i&128&&a[7],i&2&&{href:a[1]},i&8&&{target:a[3]},{class:a[6]}]))},d(a){a&&d(e)}}}function Ct(s){let e,t,l,r,a,i;function n(u,c){return u[1]?kt:bt}let o=n(s),f=o(s);return{c(){e=L("span"),t=W("© "),l=W(s[0]),r=R(),f.c(),a=R(),i=W(s[4]),this.h()},l(u){e=I(u,"SPAN",{class:!0});var c=E(e);t=Y(c,"© "),l=Y(c,s[0]),r=j(c),f.l(c),a=j(c),i=Y(c,s[4]),c.forEach(d),this.h()},h(){w(e,"class",s[5])},m(u,c){k(u,e,c),P(e,t),P(e,l),P(e,r),f.m(e,null),P(e,a),P(e,i)},p(u,[c]){c&1&&te(l,u[0]),o===(o=n(u))&&f?f.p(u,c):(f.d(1),f=o(u),f&&(f.c(),f.m(e,a))),c&16&&te(i,u[4])},i:le,o:le,d(u){u&&d(e),f.d()}}}function yt(s,e,t){const l=["spanClass","aClass","year","href","by","target","copyrightMessage"];let r=N(e,l),{spanClass:a="block text-sm text-gray-500 sm:text-center dark:text-gray-400"}=e,{aClass:i="hover:underline"}=e,{year:n=new Date().getFullYear()}=e,{href:o=""}=e,{by:f=""}=e,{target:u=void 0}=e,{copyrightMessage:c="All Rights Reserved."}=e,m=D(a,e.classSpan),g=D(i,e.classA);return s.$$set=h=>{t(10,e=C(C({},e),M(h))),t(7,r=N(e,l)),"spanClass"in h&&t(8,a=h.spanClass),"aClass"in h&&t(9,i=h.aClass),"year"in h&&t(0,n=h.year),"href"in h&&t(1,o=h.href),"by"in h&&t(2,f=h.by),"target"in h&&t(3,u=h.target),"copyrightMessage"in h&&t(4,c=h.copyrightMessage)},e=M(e),[n,o,f,u,c,m,g,r,a,i]}class pt extends V{constructor(e){super(),q(this,e,yt,Ct,B,{spanClass:8,aClass:9,year:0,href:1,by:2,target:3,copyrightMessage:4})}}function St(s){let e,t,l;const r=s[8].default,a=Q(r,s,s[7],null);let i=[s[4],{href:s[0]},{class:s[3]},{target:s[1]}],n={};for(let o=0;o<i.length;o+=1)n=C(n,i[o]);return{c(){e=L("li"),t=L("a"),a&&a.c(),this.h()},l(o){e=I(o,"LI",{class:!0});var f=E(e);t=I(f,"A",{href:!0,class:!0,target:!0});var u=E(t);a&&a.l(u),u.forEach(d),f.forEach(d),this.h()},h(){G(t,n),w(e,"class",s[2])},m(o,f){k(o,e,f),P(e,t),a&&a.m(t,null),l=!0},p(o,[f]){a&&a.p&&(!l||f&128)&&X(a,r,o,o[7],l?x(r,o[7],f,null):Z(o[7]),null),G(t,n=$(i,[f&16&&o[4],(!l||f&1)&&{href:o[0]},{class:o[3]},(!l||f&2)&&{target:o[1]}]))},i(o){l||(b(a,o),l=!0)},o(o){v(a,o),l=!1},d(o){o&&d(e),a&&a.d(o)}}}function wt(s,e,t){const l=["liClass","aClass","href","target"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{liClass:n="mr-4 last:mr-0 md:mr-6"}=e,{aClass:o="hover:underline"}=e,{href:f=""}=e,{target:u=void 0}=e,c=D(n,e.classLi),m=D(o,e.classA);return s.$$set=g=>{t(9,e=C(C({},e),M(g))),t(4,r=N(e,l)),"liClass"in g&&t(5,n=g.liClass),"aClass"in g&&t(6,o=g.aClass),"href"in g&&t(0,f=g.href),"target"in g&&t(1,u=g.target),"$$scope"in g&&t(7,i=g.$$scope)},e=M(e),[f,u,c,m,r,n,o,i,a]}class zt extends V{constructor(e){super(),q(this,e,wt,St,B,{liClass:5,aClass:6,href:0,target:1})}}function Et(s){let e,t,l;const r=s[3].default,a=Q(r,s,s[2],null);return{c(){e=L("ul"),a&&a.c(),this.h()},l(i){e=I(i,"UL",{class:!0});var n=E(e);a&&a.l(n),n.forEach(d),this.h()},h(){w(e,"class",t=D(s[0],s[1].class))},m(i,n){k(i,e,n),a&&a.m(e,null),l=!0},p(i,[n]){a&&a.p&&(!l||n&4)&&X(a,r,i,i[2],l?x(r,i[2],n,null):Z(i[2]),null),(!l||n&3&&t!==(t=D(i[0],i[1].class)))&&w(e,"class",t)},i(i){l||(b(a,i),l=!0)},o(i){v(a,i),l=!1},d(i){i&&d(e),a&&a.d(i)}}}function Pt(s,e,t){let{$$slots:l={},$$scope:r}=e,{ulClass:a="text-gray-600 dark:text-gray-400"}=e;return s.$$set=i=>{t(1,e=C(C({},e),M(i))),"ulClass"in i&&t(0,a=i.ulClass),"$$scope"in i&&t(2,r=i.$$scope)},e=M(e),[a,e,r,l]}class Lt extends V{constructor(e){super(),q(this,e,Pt,Et,B,{ulClass:0})}}const It=s=>({hidden:s&8}),pe=s=>({hidden:s[3],toggle:s[4]});function At(s){let e,t,l;const r=s[7].default,a=Q(r,s,s[8],pe);return{c(){e=L("div"),a&&a.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var n=E(e);a&&a.l(n),n.forEach(d),this.h()},h(){w(e,"class",t=D(s[1],s[6].classNavDiv,s[2]&&"w-full"||"container"))},m(i,n){k(i,e,n),a&&a.m(e,null),l=!0},p(i,n){a&&a.p&&(!l||n&264)&&X(a,r,i,i[8],l?x(r,i[8],n,It):Z(i[8]),pe),(!l||n&70&&t!==(t=D(i[1],i[6].classNavDiv,i[2]&&"w-full"||"container")))&&w(e,"class",t)},i(i){l||(b(a,i),l=!0)},o(i){v(a,i),l=!1},d(i){i&&d(e),a&&a.d(i)}}}function Mt(s){let e,t;const l=[{tag:"nav"},s[5],{class:D(s[0],s[6].class)}];let r={$$slots:{default:[At]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)r=C(r,l[a]);return e=new Pe({props:r}),{c(){T(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,i){H(e,a,i),t=!0},p(a,[i]){const n=i&97?$(l,[l[0],i&32&&Ee(a[5]),i&65&&{class:D(a[0],a[6].class)}]):{};i&334&&(n.$$scope={dirty:i,ctx:a}),e.$set(n)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}function Dt(s,e,t){const l=["navClass","navDivClass","fluid"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{navClass:n="px-2 sm:px-4 py-2.5 w-full"}=e,{navDivClass:o="mx-auto flex flex-wrap justify-between items-center "}=e,{fluid:f=!1}=e,u=!0,c=()=>{t(3,u=!u)};return s.$$set=m=>{t(6,e=C(C({},e),M(m))),t(5,r=N(e,l)),"navClass"in m&&t(0,n=m.navClass),"navDivClass"in m&&t(1,o=m.navDivClass),"fluid"in m&&t(2,f=m.fluid),"$$scope"in m&&t(8,i=m.$$scope)},s.$$.update=()=>{t(5,r.color=r.color??"navbar",r)},e=M(e),[n,o,f,u,c,r,e,a,i]}class Nt extends V{constructor(e){super(),q(this,e,Dt,Mt,B,{navClass:0,navDivClass:1,fluid:2})}}function Tt(s){let e,t,l;const r=s[4].default,a=Q(r,s,s[3],null);let i=[{href:s[0]},s[1],{class:t=D("flex items-center",s[2].class)}],n={};for(let o=0;o<i.length;o+=1)n=C(n,i[o]);return{c(){e=L("a"),a&&a.c(),this.h()},l(o){e=I(o,"A",{href:!0,class:!0});var f=E(e);a&&a.l(f),f.forEach(d),this.h()},h(){G(e,n)},m(o,f){k(o,e,f),a&&a.m(e,null),l=!0},p(o,[f]){a&&a.p&&(!l||f&8)&&X(a,r,o,o[3],l?x(r,o[3],f,null):Z(o[3]),null),G(e,n=$(i,[(!l||f&1)&&{href:o[0]},f&2&&o[1],(!l||f&4&&t!==(t=D("flex items-center",o[2].class)))&&{class:t}]))},i(o){l||(b(a,o),l=!0)},o(o){v(a,o),l=!1},d(o){o&&d(e),a&&a.d(o)}}}function Ft(s,e,t){const l=["href"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{href:n=""}=e;return s.$$set=o=>{t(2,e=C(C({},e),M(o))),t(1,r=N(e,l)),"href"in o&&t(0,n=o.href),"$$scope"in o&&t(3,i=o.$$scope)},e=M(e),[n,r,e,i,a]}class Ht extends V{constructor(e){super(),q(this,e,Ft,Tt,B,{href:0})}}function Ot(s){let e,t,l,r,a=[{xmlns:"http://www.w3.org/2000/svg"},{role:"button"},{tabindex:"0"},{width:s[0]},{height:s[0]},{class:t=s[4].class},s[5],{"aria-label":s[1]},{fill:"none"},{viewBox:s[2]},{"stroke-width":"2"}],i={};for(let n=0;n<a.length;n+=1)i=C(i,a[n]);return{c(){e=se("svg"),this.h()},l(n){e=ae(n,"svg",{xmlns:!0,role:!0,tabindex:!0,width:!0,height:!0,class:!0,"aria-label":!0,fill:!0,viewBox:!0,"stroke-width":!0});var o=E(e);o.forEach(d),this.h()},h(){ce(e,i)},m(n,o){k(n,e,o),e.innerHTML=s[3],l||(r=J(e,"click",s[8]),l=!0)},p(n,[o]){o&8&&(e.innerHTML=n[3]),ce(e,i=$(a,[{xmlns:"http://www.w3.org/2000/svg"},{role:"button"},{tabindex:"0"},o&1&&{width:n[0]},o&1&&{height:n[0]},o&16&&t!==(t=n[4].class)&&{class:t},o&32&&n[5],o&2&&{"aria-label":n[1]},{fill:"none"},o&4&&{viewBox:n[2]},{"stroke-width":"2"}]))},i:le,o:le,d(n){n&&d(e),l=!1,r()}}}function Ut(s,e,t){const l=["size","color","variation","ariaLabel"];let r=N(e,l),{size:a="24"}=e,{color:i="currentColor"}=e,{variation:n="outline"}=e,{ariaLabel:o="bars 3"}=e,f,u,c=`<path stroke="${i}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,m=`<path fill="${i}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;function g(h){K.call(this,s,h)}return s.$$set=h=>{t(4,e=C(C({},e),M(h))),t(5,r=N(e,l)),"size"in h&&t(0,a=h.size),"color"in h&&t(6,i=h.color),"variation"in h&&t(7,n=h.variation),"ariaLabel"in h&&t(1,o=h.ariaLabel)},s.$$.update=()=>{if(s.$$.dirty&128)switch(n){case"outline":t(3,u=c),t(2,f="0 0 24 24");break;case"solid":t(3,u=m),t(2,f="0 0 24 24");break;default:t(3,u=c),t(2,f="0 0 24 24")}},e=M(e),[a,o,f,u,e,r,i,n,g]}class Gt extends V{constructor(e){super(),q(this,e,Ut,Ot,B,{size:0,color:6,variation:7,ariaLabel:1})}}function Bt(s){let e,t;return e=new Gt({props:{class:D(s[1],s[3].classMenu)}}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p(l,r){const a={};r&10&&(a.class=D(l[1],l[3].classMenu)),e.$set(a)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Rt(s){let e,t;const l=[{name:"Open main menu"},s[2],{class:D(s[0],s[3].class)}];let r={$$slots:{default:[Bt]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)r=C(r,l[a]);return e=new ot({props:r}),e.$on("click",s[4]),{c(){T(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,i){H(e,a,i),t=!0},p(a,[i]){const n=i&13?$(l,[l[0],i&4&&Ee(a[2]),i&9&&{class:D(a[0],a[3].class)}]):{};i&42&&(n.$$scope={dirty:i,ctx:a}),e.$set(n)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){O(e,a)}}}function jt(s,e,t){const l=["btnClass","menuClass"];let r=N(e,l),{btnClass:a="ml-3 md:hidden"}=e,{menuClass:i="h-6 w-6 shrink-0"}=e;function n(o){K.call(this,s,o)}return s.$$set=o=>{t(3,e=C(C({},e),M(o))),t(2,r=N(e,l)),"btnClass"in o&&t(0,a=o.btnClass),"menuClass"in o&&t(1,i=o.menuClass)},e=M(e),[a,i,r,e,n]}class Vt extends V{constructor(e){super(),q(this,e,jt,Rt,B,{btnClass:0,menuClass:1})}}function ie(s){let e,t,l,r,a;const i=s[7].default,n=Q(i,s,s[6],null);let o=[{role:t=s[0]?void 0:"link"},{href:s[0]},s[2],{class:s[1]}],f={};for(let u=0;u<o.length;u+=1)f=C(f,o[u]);return{c(){e=L(s[0]?"a":"div"),n&&n.c(),this.h()},l(u){e=I(u,((s[0]?"a":"div")||"null").toUpperCase(),{role:!0,href:!0,class:!0});var c=E(e);n&&n.l(c),c.forEach(d),this.h()},h(){me(s[0]?"a":"div")(e,f)},m(u,c){k(u,e,c),n&&n.m(e,null),l=!0,r||(a=[J(e,"blur",s[8]),J(e,"change",s[9]),J(e,"click",s[10]),J(e,"focus",s[11]),J(e,"keydown",s[12]),J(e,"keypress",s[13]),J(e,"keyup",s[14]),J(e,"mouseenter",s[15]),J(e,"mouseleave",s[16]),J(e,"mouseover",s[17])],r=!0)},p(u,c){n&&n.p&&(!l||c&64)&&X(n,i,u,u[6],l?x(i,u[6],c,null):Z(u[6]),null),me(u[0]?"a":"div")(e,f=$(o,[(!l||c&1&&t!==(t=u[0]?void 0:"link"))&&{role:t},(!l||c&1)&&{href:u[0]},c&4&&u[2],(!l||c&2)&&{class:u[1]}]))},i(u){l||(b(n,u),l=!0)},o(u){v(n,u),l=!1},d(u){u&&d(e),n&&n.d(u),r=!1,Me(a)}}}function qt(s){let e,t=s[0]?"a":"div",l,r=(s[0]?"a":"div")&&ie(s);return{c(){e=L("li"),r&&r.c()},l(a){e=I(a,"LI",{});var i=E(e);r&&r.l(i),i.forEach(d)},m(a,i){k(a,e,i),r&&r.m(e,null),l=!0},p(a,[i]){a[0],t?B(t,a[0]?"a":"div")?(r.d(1),r=ie(a),t=a[0]?"a":"div",r.c(),r.m(e,null)):r.p(a,i):(r=ie(a),t=a[0]?"a":"div",r.c(),r.m(e,null))},i(a){l||(b(r),l=!0)},o(a){v(r),l=!1},d(a){a&&d(e),r&&r.d(a)}}}function Kt(s,e,t){const l=["href","active","activeClass","nonActiveClass"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{href:n=""}=e,{active:o=!1}=e,{activeClass:f=void 0}=e,{nonActiveClass:u=void 0}=e;const c=ze("navbar")??{};let m;function g(p){K.call(this,s,p)}function h(p){K.call(this,s,p)}function S(p){K.call(this,s,p)}function _(p){K.call(this,s,p)}function z(p){K.call(this,s,p)}function A(p){K.call(this,s,p)}function ee(p){K.call(this,s,p)}function y(p){K.call(this,s,p)}function U(p){K.call(this,s,p)}function re(p){K.call(this,s,p)}return s.$$set=p=>{t(19,e=C(C({},e),M(p))),t(2,r=N(e,l)),"href"in p&&t(0,n=p.href),"active"in p&&t(3,o=p.active),"activeClass"in p&&t(4,f=p.activeClass),"nonActiveClass"in p&&t(5,u=p.nonActiveClass),"$$scope"in p&&t(6,i=p.$$scope)},s.$$.update=()=>{t(1,m=D("block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",o?f??c.activeClass:u??c.nonActiveClass,e.class))},e=M(e),[n,m,r,o,f,u,i,a,g,h,S,_,z,A,ee,y,U,re]}class ne extends V{constructor(e){super(),q(this,e,Kt,qt,B,{href:0,active:3,activeClass:4,nonActiveClass:5})}}function Jt(s){let e,t,l;const r=s[9].default,a=Q(r,s,s[11],null);let i=[s[4],{class:s[2]},{hidden:s[0]}],n={};for(let o=0;o<i.length;o+=1)n=C(n,i[o]);return{c(){e=L("div"),t=L("ul"),a&&a.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var f=E(e);t=I(f,"UL",{class:!0});var u=E(t);a&&a.l(u),u.forEach(d),f.forEach(d),this.h()},h(){w(t,"class",s[3]),G(e,n)},m(o,f){k(o,e,f),P(e,t),a&&a.m(t,null),l=!0},p(o,f){a&&a.p&&(!l||f&2048)&&X(a,r,o,o[11],l?x(r,o[11],f,null):Z(o[11]),null),(!l||f&8)&&w(t,"class",o[3]),G(e,n=$(i,[f&16&&o[4],(!l||f&4)&&{class:o[2]},(!l||f&1)&&{hidden:o[0]}]))},i(o){l||(b(a,o),l=!0)},o(o){v(a,o),l=!1},d(o){o&&d(e),a&&a.d(o)}}}function Wt(s){let e,t,l,r,a,i;t=new Pe({props:{tag:"ul",border:!0,rounded:!0,color:"navbarUl",class:s[3],$$slots:{default:[Yt]},$$scope:{ctx:s}}});let n=[s[4],{class:s[2]},{role:"button"},{tabindex:"0"}],o={};for(let f=0;f<n.length;f+=1)o=C(o,n[f]);return{c(){e=L("div"),T(t.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0,role:!0,tabindex:!0});var u=E(e);F(t.$$.fragment,u),u.forEach(d),this.h()},h(){G(e,o)},m(f,u){k(f,e,u),H(t,e,null),r=!0,a||(i=J(e,"click",s[10]),a=!0)},p(f,u){s=f;const c={};u&8&&(c.class=s[3]),u&2048&&(c.$$scope={dirty:u,ctx:s}),t.$set(c),G(e,o=$(n,[u&16&&s[4],(!r||u&4)&&{class:s[2]},{role:"button"},{tabindex:"0"}]))},i(f){r||(b(t.$$.fragment,f),Ne(()=>{r&&(l||(l=de(e,ge,s[1],!0)),l.run(1))}),r=!0)},o(f){v(t.$$.fragment,f),l||(l=de(e,ge,s[1],!1)),l.run(0),r=!1},d(f){f&&d(e),O(t),f&&l&&l.end(),a=!1,i()}}}function Yt(s){let e;const t=s[9].default,l=Q(t,s,s[11],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,a){l&&l.m(r,a),e=!0},p(r,a){l&&l.p&&(!e||a&2048)&&X(l,t,r,r[11],e?x(t,r[11],a,null):Z(r[11]),null)},i(r){e||(b(l,r),e=!0)},o(r){v(l,r),e=!1},d(r){l&&l.d(r)}}}function Qt(s){let e,t,l,r;const a=[Wt,Jt],i=[];function n(o,f){return o[0]?1:0}return e=n(s),t=i[e]=a[e](s),{c(){t.c(),l=oe()},l(o){t.l(o),l=oe()},m(o,f){i[e].m(o,f),k(o,l,f),r=!0},p(o,[f]){let u=e;e=n(o),e===u?i[e].p(o,f):(Se(),v(i[u],1,1,()=>{i[u]=null}),we(),t=i[e],t?t.p(o,f):(t=i[e]=a[e](o),t.c()),b(t,1),t.m(l.parentNode,l))},i(o){r||(b(t),r=!0)},o(o){v(t),r=!1},d(o){i[e].d(o),o&&d(l)}}}function Xt(s,e,t){const l=["divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass"];let r=N(e,l),{$$slots:a={},$$scope:i}=e,{divClass:n="w-full md:block md:w-auto"}=e,{ulClass:o="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}=e,{hidden:f=!0}=e,{slideParams:u={delay:250,duration:500,easing:et}}=e,{activeClass:c="text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent"}=e,{nonActiveClass:m="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}=e;De("navbar",{activeClass:c,nonActiveClass:m});let g,h;function S(_){K.call(this,s,_)}return s.$$set=_=>{t(12,e=C(C({},e),M(_))),t(4,r=N(e,l)),"divClass"in _&&t(5,n=_.divClass),"ulClass"in _&&t(6,o=_.ulClass),"hidden"in _&&t(0,f=_.hidden),"slideParams"in _&&t(1,u=_.slideParams),"activeClass"in _&&t(7,c=_.activeClass),"nonActiveClass"in _&&t(8,m=_.nonActiveClass),"$$scope"in _&&t(11,i=_.$$scope)},s.$$.update=()=>{t(2,g=D(n,e.class)),t(3,h=D(o,e.classUl))},e=M(e),[f,u,g,h,r,n,o,c,m,a,S,i]}class Zt extends V{constructor(e){super(),q(this,e,Xt,Qt,B,{divClass:5,ulClass:6,hidden:0,slideParams:1,activeClass:7,nonActiveClass:8})}}function xt(s){let e,t;return e=new ht({props:{btnClass:$t}}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p:le,i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}const $t="";class el extends V{constructor(e){super(),q(this,e,null,xt,B,{})}}function tl(s){let e,t,l,r,a;return{c(){e=L("img"),l=R(),r=L("span"),a=W("Go Svelte!"),this.h()},l(i){e=I(i,"IMG",{src:!0,class:!0,alt:!0}),l=j(i),r=I(i,"SPAN",{class:!0});var n=E(r);a=Y(n,"Go Svelte!"),n.forEach(d),this.h()},h(){Fe(e.src,t="/assets/gifs/gopher-dance.gif")||w(e,"src",t),w(e,"class","mr-3 h-6 sm:h-9"),w(e,"alt","Dancing Gopher as a Logo"),w(r,"class","self-center whitespace-nowrap text-xl font-semibold dark:text-white")},m(i,n){k(i,e,n),k(i,l,n),k(i,r,n),P(r,a)},p:le,d(i){i&&d(e),i&&d(l),i&&d(r)}}}function ll(s){let e;return{c(){e=W("Home")},l(t){e=Y(t,"Home")},m(t,l){k(t,e,l)},d(t){t&&d(e)}}}function sl(s){let e;return{c(){e=W("GitHub")},l(t){e=Y(t,"GitHub")},m(t,l){k(t,e,l)},d(t){t&&d(e)}}}function al(s){let e;return{c(){e=W("Login")},l(t){e=Y(t,"Login")},m(t,l){k(t,e,l)},d(t){t&&d(e)}}}function rl(s){let e,t;return e=new el({}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function nl(s){let e,t,l,r,a,i,n,o;return e=new ne({props:{href:"/",$$slots:{default:[ll]},$$scope:{ctx:s}}}),l=new ne({props:{href:"/github",$$slots:{default:[sl]},$$scope:{ctx:s}}}),a=new ne({props:{href:"/login",$$slots:{default:[al]},$$scope:{ctx:s}}}),n=new ne({props:{$$slots:{default:[rl]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment),t=R(),T(l.$$.fragment),r=R(),T(a.$$.fragment),i=R(),T(n.$$.fragment)},l(f){F(e.$$.fragment,f),t=j(f),F(l.$$.fragment,f),r=j(f),F(a.$$.fragment,f),i=j(f),F(n.$$.fragment,f)},m(f,u){H(e,f,u),k(f,t,u),H(l,f,u),k(f,r,u),H(a,f,u),k(f,i,u),H(n,f,u),o=!0},p(f,u){const c={};u&4&&(c.$$scope={dirty:u,ctx:f}),e.$set(c);const m={};u&4&&(m.$$scope={dirty:u,ctx:f}),l.$set(m);const g={};u&4&&(g.$$scope={dirty:u,ctx:f}),a.$set(g);const h={};u&4&&(h.$$scope={dirty:u,ctx:f}),n.$set(h)},i(f){o||(b(e.$$.fragment,f),b(l.$$.fragment,f),b(a.$$.fragment,f),b(n.$$.fragment,f),o=!0)},o(f){v(e.$$.fragment,f),v(l.$$.fragment,f),v(a.$$.fragment,f),v(n.$$.fragment,f),o=!1},d(f){O(e,f),f&&d(t),O(l,f),f&&d(r),O(a,f),f&&d(i),O(n,f)}}}function ol(s){let e,t,l,r,a,i;return e=new Ht({props:{href:"/",$$slots:{default:[tl]},$$scope:{ctx:s}}}),l=new Vt({}),l.$on("click",function(){Te(s[1])&&s[1].apply(this,arguments)}),a=new Zt({props:{hidden:s[0],$$slots:{default:[nl]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment),t=R(),T(l.$$.fragment),r=R(),T(a.$$.fragment)},l(n){F(e.$$.fragment,n),t=j(n),F(l.$$.fragment,n),r=j(n),F(a.$$.fragment,n)},m(n,o){H(e,n,o),k(n,t,o),H(l,n,o),k(n,r,o),H(a,n,o),i=!0},p(n,o){s=n;const f={};o&4&&(f.$$scope={dirty:o,ctx:s}),e.$set(f);const u={};o&1&&(u.hidden=s[0]),o&4&&(u.$$scope={dirty:o,ctx:s}),a.$set(u)},i(n){i||(b(e.$$.fragment,n),b(l.$$.fragment,n),b(a.$$.fragment,n),i=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),v(a.$$.fragment,n),i=!1},d(n){O(e,n),n&&d(t),O(l,n),n&&d(r),O(a,n)}}}function il(s){let e,t;return e=new Nt({props:{$$slots:{default:[ol,({hidden:l,toggle:r})=>({0:l,1:r}),({hidden:l,toggle:r})=>(l?1:0)|(r?2:0)]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p(l,[r]){const a={};r&7&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}class fl extends V{constructor(e){super(),q(this,e,null,il,B,{})}}function ul(s){let e;return{c(){e=W("GitHub")},l(t){e=Y(t,"GitHub")},m(t,l){k(t,e,l)},d(t){t&&d(e)}}}function cl(s){let e,t;return e=new zt({props:{href:"/github",$$slots:{default:[ul]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p(l,r){const a={};r&1&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function ml(s){let e,t,l,r;return e=new pt({props:{href:"/",by:"uVulpos",year:2023}}),l=new Lt({props:{ulClass:"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",$$slots:{default:[cl]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment),t=R(),T(l.$$.fragment)},l(a){F(e.$$.fragment,a),t=j(a),F(l.$$.fragment,a)},m(a,i){H(e,a,i),k(a,t,i),H(l,a,i),r=!0},p(a,i){const n={};i&1&&(n.$$scope={dirty:i,ctx:a}),l.$set(n)},i(a){r||(b(e.$$.fragment,a),b(l.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),v(l.$$.fragment,a),r=!1},d(a){O(e,a),a&&d(t),O(l,a)}}}function dl(s){let e,t;return e=new vt({props:{$$slots:{default:[ml]},$$scope:{ctx:s}}}),{c(){T(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p(l,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}class hl extends V{constructor(e){super(),q(this,e,null,dl,B,{})}}function gl(){const s=localStorage.getItem("color-theme"),e="color-theme"in localStorage,t=document.documentElement.classList,l=window.matchMedia("(prefers-color-scheme: dark)").matches;e&&s==="dark"||!e&&l?(t.add("dark"),localStorage.setItem("color-theme","dark")):(t.remove("dark"),localStorage.setItem("color-theme","light"))}function _l(s){return{username:s.username??""}}const Le=je(void 0);function vl(s){Le.set(s)}async function bl(){const s=await fetch("/api/profile/getProfile",{method:"POST",cache:"no-cache",credentials:"same-origin",redirect:"follow"});return _l(await s.json())}function kl(s){let e,t,l,r,a,i=JSON.stringify(s[0])+"",n,o,f,u,c,m;l=new fl({});const g=s[5].default,h=Q(g,s,s[4],null);return c=new hl({}),{c(){e=L("div"),t=L("header"),T(l.$$.fragment),r=R(),a=L("span"),n=W(i),o=R(),h&&h.c(),f=R(),u=L("footer"),T(c.$$.fragment),this.h()},l(S){e=I(S,"DIV",{class:!0});var _=E(e);t=I(_,"HEADER",{});var z=E(t);F(l.$$.fragment,z),z.forEach(d),r=j(_),a=I(_,"SPAN",{style:!0});var A=E(a);n=Y(A,i),A.forEach(d),o=j(_),h&&h.l(_),f=j(_),u=I(_,"FOOTER",{class:!0});var ee=E(u);F(c.$$.fragment,ee),ee.forEach(d),_.forEach(d),this.h()},h(){He(a,"color","white"),w(u,"class","svelte-1mzq52"),w(e,"class","root bg-white dark:bg-gray-900 svelte-1mzq52")},m(S,_){k(S,e,_),P(e,t),H(l,t,null),P(e,r),P(e,a),P(a,n),P(e,o),h&&h.m(e,null),P(e,f),P(e,u),H(c,u,null),m=!0},p(S,[_]){(!m||_&1)&&i!==(i=JSON.stringify(S[0])+"")&&te(n,i),h&&h.p&&(!m||_&16)&&X(h,g,S,S[4],m?x(g,S[4],_,null):Z(S[4]),null)},i(S){m||(b(l.$$.fragment,S),b(h,S),b(c.$$.fragment,S),m=!0)},o(S){v(l.$$.fragment,S),v(h,S),v(c.$$.fragment,S),m=!1},d(S){S&&d(e),O(l),h&&h.d(S),O(c)}}}function Cl(s,e){const t={};for(const l in s)e.hasOwnProperty(l)&&(t[l]=e[l]);return t}function yl(s,e,t){let l;Oe(s,Le,m=>t(0,l=m));let{$$slots:r={},$$scope:a}=e;const i=!1,n=!1,o="always";he("en",We),he("de",xe),Be({fallbackLocale:"en",initialLocale:Re()});let f;Ue(()=>{gl(),u();const m=Cl(typeDefinition,c);console.log(m),f=setInterval(u,10*1e3)}),Ge(()=>{clearInterval(f)});async function u(){let m;const g=await bl();try{m=g,console.log(g)}catch{}vl(m)}const c={name:"John Doe",age:30,email:"john@example.com",city:"New York"};return s.$$set=m=>{"$$scope"in m&&t(4,a=m.$$scope)},[l,i,n,o,a,r]}class Pl extends V{constructor(e){super(),q(this,e,yl,kl,B,{prerender:1,ssr:2,trailingSlash:3})}get prerender(){return this.$$.ctx[1]}get ssr(){return this.$$.ctx[2]}get trailingSlash(){return this.$$.ctx[3]}}export{Pl as component};
