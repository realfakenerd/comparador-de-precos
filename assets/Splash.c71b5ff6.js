import{S as N,i as Y,s as A,_ as d,h as e,y as w,j as L,k as o,P as H,$ as C,l as y,e as b,f as j,a0 as G,t as S,a as O,N as F,O as I}from"./vendor.64a25fd0.js";import{d as k}from"./index.f3d5f78d.js";function U(g){let t,l,s,u,f,p,n,a;return{c(){t=d("path"),s=d("linearGradient"),u=d("stop"),f=d("stop"),p=d("path"),e(t,"d",` M 564.251 625.251 L 659 720 L 700 675 L 781 994 L 457 921 L 506
            873 L 249 626 L 249 626 L 542.5 626 C 549.812 626 557.065 625.748
            564.251 625.251 Z `),e(t,"fill","url(#_lgradient_2)"),e(t,"class","svelte-1mewqmc"),e(u,"offset","2.1739130434782608%"),e(u,"stop-opacity","1"),w(u,"stop-color","rgb(241,93,232)"),e(f,"offset","100%"),e(f,"stop-opacity","1"),w(f,"stop-color","rgb(184,58,177)"),e(s,"id","_lgradient_3"),e(s,"x1","0.13056277056277052"),e(s,"y1","0.05232744783306609"),e(s,"x2","0.9350649350649348"),e(s,"y2","0.7710005350454795"),e(s,"gradientTransform","matrix(770,0,0,623,84,3)"),e(s,"gradientUnits","userSpaceOnUse"),e(p,"d",` M 542.5 215.388 L 84 215.388 L 203 3 L 542.5 3 L 542.5 3 C
            714.422 3 854 142.578 854 314.5 C 854 486.422 714.422 626 542.5 626
            L 249 626 L 364 413.612 L 542.5 413.612 L 542.5 413.612 C 597.201
            413.612 641.612 369.201 641.612 314.5 C 641.612 259.799 597.201
            215.388 542.5 215.388 L 542.5 215.388 L 542.5 215.388 Z `),e(p,"fill","url(#_lgradient_3)"),e(p,"class","svelte-1mewqmc")},m(i,_){L(i,t,_),L(i,s,_),o(s,u),o(s,f),L(i,p,_),a=!0},p(i,_){},i(i){a||(i&&H(()=>{l||(l=C(t,k,{duration:q},!0)),l.run(1)}),i&&H(()=>{n||(n=C(p,k,{duration:q},!0)),n.run(1)}),a=!0)},o(i){i&&(l||(l=C(t,k,{duration:q},!1)),l.run(0)),i&&(n||(n=C(p,k,{duration:q},!1)),n.run(0)),a=!1},d(i){i&&y(t),i&&l&&l.end(),i&&y(s),i&&y(p),i&&n&&n.end()}}}function Z(g){let t;return{c(){t=b("h3"),t.textContent="Your app should probably have loaded by now"},m(l,s){L(l,t,s)},d(l){l&&y(t)}}}function M(g){let t,l,s,u,f,p,n,a,i,_,P,x,T,h,r=g[1]&&U(),c=g[2]&&Z();return{c(){t=b("div"),l=b("div"),s=d("svg"),u=d("defs"),f=d("clipPath"),p=d("rect"),n=d("g"),a=d("linearGradient"),i=d("stop"),_=d("stop"),r&&r.c(),P=j(),x=b("h1"),x.textContent="Generating routes...",T=j(),h=b("div"),c&&c.c(),e(p,"width","1000"),e(p,"height","1000"),e(f,"id","_clipPath_40vHZL606H8eXCPAFONHYpjfq1ISybTL"),e(i,"offset","1.7391304347826086%"),e(i,"stop-opacity","1"),w(i,"stop-color","rgb(255,124,247)"),e(_,"offset","100%"),e(_,"stop-opacity","1"),w(_,"stop-color","rgb(255,203,252)"),e(a,"id","_lgradient_2"),e(a,"x1","-0.011142038971568513"),e(a,"y1","-0.011791871475954507"),e(a,"x2","0.9938039543302696"),e(a,"y2","0.9909604299907665"),e(a,"gradientTransform","matrix(532,0,0,368.749,249,625.251)"),e(a,"gradientUnits","userSpaceOnUse"),e(n,"clip-path","url(#_clipPath_40vHZL606H8eXCPAFONHYpjfq1ISybTL)"),e(s,"xmlns","http://www.w3.org/2000/svg"),e(s,"xmlns:xlink","http://www.w3.org/1999/xlink"),w(s,"isolation","isolate"),e(s,"viewBox","0 0 1000 1000"),e(l,"class","svg svelte-1mewqmc"),G(l,"drawing",g[0]),e(x,"style",""),e(h,"class","error svelte-1mewqmc"),e(t,"class","container svelte-1mewqmc")},m(m,v){L(m,t,v),o(t,l),o(l,s),o(s,u),o(u,f),o(f,p),o(s,n),o(n,a),o(a,i),o(a,_),r&&r.m(n,null),o(t,P),o(t,x),o(t,T),o(t,h),c&&c.m(h,null)},p(m,[v]){m[1]?r?(r.p(m,v),v&2&&S(r,1)):(r=U(),r.c(),S(r,1),r.m(n,null)):r&&(I(),O(r,1,1,()=>{r=null}),F()),v&1&&G(l,"drawing",m[0]),m[2]?c||(c=Z(),c.c(),c.m(h,null)):c&&(c.d(1),c=null)},i(m){S(r)},o(m){O(r)},d(m){m&&y(t),r&&r.d(),c&&c.d()}}}let q=2e3;function X(g,t,l){let s=!0,u=!1,f=!1;return setTimeout(()=>l(1,u=!0)),setTimeout(()=>l(0,s=!1),1800),setTimeout(()=>l(2,f=!0),5e3),[s,u,f]}class z extends N{constructor(t){super();Y(this,t,X,M,A,{})}}export{z as default};