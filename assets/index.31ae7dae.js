import{S as b,i as I,s as k,e as h,g as y,f as j,h as p,j as _,k as u,D as F,E as S,l as m,y as q,n as g,F as x,o as A,u as C}from"./vendor.64a25fd0.js";function v(o,l,n){const e=o.slice();return e[4]=l[n][0],e[5]=l[n][1],e}function w(o){let l,n,e=o[5]+"",t,a,s,r,i,d;return{c(){l=h("h3"),n=h("a"),t=y(e),r=j(),p(n,"href",a=o[0]("./:showId",{showId:o[4]}))},m(c,f){_(c,l,f),u(l,n),u(n,t),u(l,r),i||(d=F(s=S.call(null,n,o[1])),i=!0)},p(c,f){f&1&&a!==(a=c[0]("./:showId",{showId:c[4]}))&&p(n,"href",a)},d(c){c&&m(l),i=!1,d()}}}function D(o){let l,n=o[2],e=[];for(let t=0;t<n.length;t+=1)e[t]=w(v(o,n,t));return{c(){l=h("div");for(let t=0;t<e.length;t+=1)e[t].c();q(l,"text-align","center")},m(t,a){_(t,l,a);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(t,[a]){if(a&7){n=t[2];let s;for(s=0;s<n.length;s+=1){const r=v(t,n,s);e[s]?e[s].p(r,a):(e[s]=w(r),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},i:g,o:g,d(t){t&&m(l),x(e,t)}}}function E(o,l,n){let e;A(o,C,r=>n(0,e=r));let{scoped:t}=l;const a={validFor:3600*24*31,writeHeaders:!0},{movies:s}=t;return o.$$set=r=>{"scoped"in r&&n(3,t=r.scoped)},[e,a,s,t]}class z extends b{constructor(l){super();I(this,l,E,D,k,{scoped:3})}}export{z as default};
