import{_ as N}from"./index.13897939.js";import{S as q,i as L,s as P,e as g,g as O,f as b,h as v,a0 as w,j as A,k as m,l as y,I as x,n as k,F as D,J as F,o as E,aa as H,u as J,ac as K,r as V,c as S,m as T,v as W,w as z,x as G,t as C,a as R,d as B,M as Q}from"./vendor.64a25fd0.js";function I(t,e,s){const l=t.slice();return l[6]=e[s][0],l[7]=e[s][1],l}function M(t){let e,s=t[7]+"",l,o,a;return{c(){e=g("a"),l=O(s),o=b(),v(e,"class","link svelte-15aixkh"),v(e,"href",a=t[2](t[6])),w(e,"active",t[1](t[6]))},m(n,i){A(n,e,i),m(e,l),m(e,o)},p(n,i){i&4&&a!==(a=n[2](n[6]))&&v(e,"href",a),i&10&&w(e,"active",n[1](n[6]))},d(n){n&&y(e)}}}function U(t){let e,s,l,o,a,n,i,_,c,p,h,d=t[3],u=[];for(let r=0;r<d.length;r+=1)u[r]=M(I(t,d,r));return{c(){e=g("aside"),s=g("nav"),l=g("span"),l.textContent="\u2630",o=b(),a=g("span"),a.textContent="Routify Examples",n=b(),i=g("span"),_=b(),c=g("nav");for(let r=0;r<u.length;r+=1)u[r].c();v(l,"class","burger svelte-15aixkh"),v(a,"class","title svelte-15aixkh"),v(i,"class","svelte-15aixkh"),v(s,"class","mobile-nav svelte-15aixkh"),v(c,"class","svelte-15aixkh"),w(c,"show",t[0]),v(e,"class","svelte-15aixkh")},m(r,$){A(r,e,$),m(e,s),m(s,l),m(s,o),m(s,a),m(s,n),m(s,i),m(e,_),m(e,c);for(let f=0;f<u.length;f+=1)u[f].m(c,null);p||(h=[x(l,"click",t[4]),x(c,"click",t[5])],p=!0)},p(r,[$]){if($&14){d=r[3];let f;for(f=0;f<d.length;f+=1){const j=I(r,d,f);u[f]?u[f].p(j,$):(u[f]=M(j),u[f].c(),u[f].m(c,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=d.length}$&1&&w(c,"show",r[0])},i:k,o:k,d(r){r&&y(e),D(u,r),p=!1,F(h)}}}function X(t,e,s){let l,o;E(t,H,c=>s(1,l=c)),E(t,J,c=>s(2,o=c));let a=!1;const n=[["/","\u2BC7 BACK TO APP"],["./index","Home"],["./modal","Modal"],["./reset","Reset"],["./layouts","Layouts"],["./widget","Widget"],["./aliasing","Aliasing"],["./404","404"],["./api","Api"],["./app","App"],["./transitions/tabs","Transitions"]];function i(){s(0,a=!a)}return[a,l,o,n,i,()=>s(0,a=!1)]}class Y extends q{constructor(e){super();L(this,e,X,U,P,{})}}function Z(t){return{c:k,m:k,i:k,o:k,d:k}}function ee(t){let e,s,l;var o=t[2].default;function a(n){return{}}return o&&(e=new o(a())),{c(){e&&S(e.$$.fragment),s=Q()},m(n,i){e&&T(e,n,i),A(n,s,i),l=!0},i(n){l||(e&&C(e.$$.fragment,n),l=!0)},o(n){e&&R(e.$$.fragment,n),l=!1},d(n){n&&y(s),e&&B(e,n)}}}function te(t){return{c:k,m:k,i:k,o:k,d:k}}function se(t){let e,s,l,o,a,n,i;l=new Y({});let _={ctx:t,current:null,token:null,hasCatch:!1,pending:te,then:ee,catch:Z,value:2,blocks:[,,,]};K(N(()=>import("./RenderStatus.75df2b10.js"),["assets/RenderStatus.75df2b10.js","assets/RenderStatus.4bca14b9.css","assets/vendor.64a25fd0.js","assets/index.f3d5f78d.js"]),_);const c=t[1].default,p=V(c,t,t[0],null);return{c(){e=g("div"),s=g("div"),S(l.$$.fragment),o=b(),_.block.c(),a=b(),n=g("div"),p&&p.c(),v(s,"class","nav svelte-rq329u"),v(n,"class","main svelte-rq329u"),v(e,"class","example svelte-rq329u")},m(h,d){A(h,e,d),m(e,s),T(l,s,null),m(s,o),_.block.m(s,_.anchor=null),_.mount=()=>s,_.anchor=null,m(e,a),m(e,n),p&&p.m(n,null),i=!0},p(h,[d]){t=h,p&&p.p&&(!i||d&1)&&W(p,c,t,t[0],i?G(c,t[0],d,null):z(t[0]),null)},i(h){i||(C(l.$$.fragment,h),C(_.block),C(p,h),i=!0)},o(h){R(l.$$.fragment,h);for(let d=0;d<3;d+=1){const u=_.blocks[d];R(u)}R(p,h),i=!1},d(h){h&&y(e),B(l),_.block.d(),_.token=null,_=null,p&&p.d(h)}}}function le(t,e,s){let{$$slots:l={},$$scope:o}=e;return t.$$set=a=>{"$$scope"in a&&s(0,o=a.$$scope)},[o,l]}class ie extends q{constructor(e){super();L(this,e,le,se,P,{})}}export{ie as default};