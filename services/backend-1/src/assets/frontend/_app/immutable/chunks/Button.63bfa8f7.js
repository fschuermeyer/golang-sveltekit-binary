import{S as I,i as J,s as B,e as _,b as N,g as S,d as E,h as m,C as x,D as Q,E as w,F as C,H as R,k as T,l as V,m as W,X as z,K as y,L as Z,M as $,N as ee,O as re,Y as te,G as k}from"./index.22c0949a.js";import{t as ae}from"./Indicator.svelte_svelte_type_style_lang.97fd6b4f.js";function v(r){let e,l,g,a,d,u;const s=r[10].default,n=R(s,r,r[9],null);let h=[{type:l=r[0]?void 0:r[1]},{href:r[0]},r[3],{class:r[2]},{role:g=r[0]?"button":void 0}],f={};for(let o=0;o<h.length;o+=1)f=w(f,h[o]);return{c(){e=T(r[0]?"a":"button"),n&&n.c(),this.h()},l(o){e=V(o,((r[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,class:!0,role:!0});var i=W(e);n&&n.l(i),i.forEach(m),this.h()},h(){z(r[0]?"a":"button")(e,f)},m(o,i){N(o,e,i),n&&n.m(e,null),a=!0,d||(u=[y(e,"click",r[11]),y(e,"change",r[12]),y(e,"keydown",r[13]),y(e,"keyup",r[14]),y(e,"touchstart",r[15]),y(e,"touchend",r[16]),y(e,"touchcancel",r[17]),y(e,"mouseenter",r[18]),y(e,"mouseleave",r[19])],d=!0)},p(o,i){n&&n.p&&(!a||i&512)&&Z(n,s,o,o[9],a?ee(s,o[9],i,null):$(o[9]),null),z(o[0]?"a":"button")(e,f=re(h,[(!a||i&3&&l!==(l=o[0]?void 0:o[1]))&&{type:l},(!a||i&1)&&{href:o[0]},i&8&&o[3],(!a||i&4)&&{class:o[2]},(!a||i&1&&g!==(g=o[0]?"button":void 0))&&{role:g}]))},i(o){a||(S(n,o),a=!0)},o(o){E(n,o),a=!1},d(o){o&&m(e),n&&n.d(o),d=!1,te(u)}}}function oe(r){let e=r[0]?"a":"button",l,g,a=(r[0]?"a":"button")&&v(r);return{c(){a&&a.c(),l=_()},l(d){a&&a.l(d),l=_()},m(d,u){a&&a.m(d,u),N(d,l,u),g=!0},p(d,[u]){d[0],e?B(e,d[0]?"a":"button")?(a.d(1),a=v(d),e=d[0]?"a":"button",a.c(),a.m(l.parentNode,l)):a.p(d,u):(a=v(d),e=d[0]?"a":"button",a.c(),a.m(l.parentNode,l))},i(d){g||(S(a),g=!0)},o(d){E(a),g=!1},d(d){d&&m(l),a&&a.d(d)}}}function le(r,e,l){const g=["pill","outline","size","href","type","color","shadow"];let a=x(e,g),{$$slots:d={},$$scope:u}=e;const s=Q("group");let{pill:n=!1}=e,{outline:h=!1}=e,{size:f=s?"sm":"md"}=e,{href:o=void 0}=e,{type:i="button"}=e,{color:b=s?h?"dark":"alternative":"primary"}=e,{shadow:c=!1}=e;const F={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},M={alternative:"focus:ring-gray-200 dark:focus:ring-gray-700",blue:"focus:ring-blue-300 dark:focus:ring-blue-800",dark:"focus:ring-gray-300 dark:focus:ring-gray-700",green:"focus:ring-green-300 dark:focus:ring-green-800",light:"focus:ring-gray-200 dark:focus:ring-gray-700",primary:"focus:ring-primary-300 dark:focus:ring-primary-800",purple:"focus:ring-purple-300 dark:focus:ring-purple-900",red:"focus:ring-red-300 dark:focus:ring-red-900",yellow:"focus:ring-yellow-300 dark:focus:ring-yellow-900",none:""},j={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},q={alternative:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},D={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},G=()=>h||b==="alternative"||b==="light";let p;function H(t){k.call(this,r,t)}function K(t){k.call(this,r,t)}function L(t){k.call(this,r,t)}function O(t){k.call(this,r,t)}function P(t){k.call(this,r,t)}function U(t){k.call(this,r,t)}function X(t){k.call(this,r,t)}function Y(t){k.call(this,r,t)}function A(t){k.call(this,r,t)}return r.$$set=t=>{l(27,e=w(w({},e),C(t))),l(3,a=x(e,g)),"pill"in t&&l(4,n=t.pill),"outline"in t&&l(5,h=t.outline),"size"in t&&l(6,f=t.size),"href"in t&&l(0,o=t.href),"type"in t&&l(1,i=t.type),"color"in t&&l(7,b=t.color),"shadow"in t&&l(8,c=t.shadow),"$$scope"in t&&l(9,u=t.$$scope)},r.$$.update=()=>{l(2,p=ae("text-center font-medium",s?"focus:ring-2":"focus:ring-4",s&&"focus:z-10",s||"focus:outline-none","inline-flex items-center justify-center "+D[f],h?q[b]:F[b],b==="alternative"&&(s?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),h&&b==="dark"&&(s?"dark:text-white dark:border-white":"dark:text-gray-400 dark:border-gray-700"),M[b],G()&&s&&"border-l-0 first:border-l",s?n&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":n&&"rounded-full"||"rounded-lg",c&&"shadow-lg",c&&j[b],e.disabled&&"cursor-not-allowed opacity-50",e.class))},e=C(e),[o,i,p,a,n,h,f,b,c,u,d,H,K,L,O,P,U,X,Y,A]}class ie extends I{constructor(e){super(),J(this,e,le,oe,B,{pill:4,outline:5,size:6,href:0,type:1,color:7,shadow:8})}}export{ie as B};