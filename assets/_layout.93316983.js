import{S as D,i as E,s as G,r as H,e as p,f as b,g as y,h as C,j as l,k as S,v as I,w as J,x as K,t as M,a as N,l as s,o as O,u as P}from"./vendor.64a25fd0.js";function Q(u){let a,n,i,k,_,r,d,m,z,w,q,v,A,F,L,$,B,j,T,o;const V=u[2].default,f=H(V,u,u[1],null);return{c(){a=p("p"),a.textContent="V1.1 has only one file: feature2.svelte",n=b(),i=p("p"),i.textContent="The rest are handled with _fallback.svelte, which redirects to v1",k=b(),_=p("code"),r=p("pre"),r.textContent=`/** _fallback.svelte **/
    import {(goto, leftover)} from '@roxi/routify'
    $goto('../../v1/'+$leftover, null, true, true)`,d=b(),m=p("a"),z=y("Feature 1"),q=b(),v=p("a"),A=y("Feature 2"),L=b(),$=p("a"),B=y("Feature 3"),T=b(),f&&f.c(),C(m,"href",w=u[0]("./feature1")),C(v,"href",F=u[0]("./feature2")),C($,"href",j=u[0]("./feature3"))},m(e,t){l(e,a,t),l(e,n,t),l(e,i,t),l(e,k,t),l(e,_,t),S(_,r),l(e,d,t),l(e,m,t),S(m,z),l(e,q,t),l(e,v,t),S(v,A),l(e,L,t),l(e,$,t),S($,B),l(e,T,t),f&&f.m(e,t),o=!0},p(e,[t]){(!o||t&1&&w!==(w=e[0]("./feature1")))&&C(m,"href",w),(!o||t&1&&F!==(F=e[0]("./feature2")))&&C(v,"href",F),(!o||t&1&&j!==(j=e[0]("./feature3")))&&C($,"href",j),f&&f.p&&(!o||t&2)&&I(f,V,e,e[1],o?K(V,e[1],t,null):J(e[1]),null)},i(e){o||(M(f,e),o=!0)},o(e){N(f,e),o=!1},d(e){e&&s(a),e&&s(n),e&&s(i),e&&s(k),e&&s(_),e&&s(d),e&&s(m),e&&s(q),e&&s(v),e&&s(L),e&&s($),e&&s(T),f&&f.d(e)}}}function R(u,a,n){let i;O(u,P,r=>n(0,i=r));let{$$slots:k={},$$scope:_}=a;return u.$$set=r=>{"$$scope"in r&&n(1,_=r.$$scope)},[i,_,k]}class W extends D{constructor(a){super();E(this,a,R,Q,G,{})}}export{W as default};