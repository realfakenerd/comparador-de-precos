import{V as _,W as O,X as v}from"./vendor.64a25fd0.js";function j(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function m(t){const n=t-1;return n*n*n+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function M(t,n){var c={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(c[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(c[e[o]]=t[e[o]]);return c}function P(t,{delay:n=0,duration:c=400,easing:e=v}={}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:c,easing:e,css:a=>`opacity: ${a*o}`}}function q(t,{delay:n=0,duration:c=400,easing:e=m,x:o=0,y:a=0,opacity:i=0}={}){const s=getComputedStyle(t),f=+s.opacity,u=s.transform==="none"?"":s.transform,l=f*(1-i);return{delay:n,duration:c,easing:e,css:(r,y)=>`
			transform: ${u} translate(${(1-r)*o}px, ${(1-r)*a}px);
			opacity: ${f-l*y}`}}function B(t,{delay:n=0,duration:c=400,easing:e=m,start:o=0,opacity:a=0}={}){const i=getComputedStyle(t),s=+i.opacity,f=i.transform==="none"?"":i.transform,u=1-o,l=s*(1-a);return{delay:n,duration:c,easing:e,css:(r,y)=>`
			transform: ${f} scale(${1-u*y});
			opacity: ${s-l*y}
		`}}function L(t,{delay:n=0,speed:c,duration:e,easing:o=j}={}){let a=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(a+=parseInt(i.strokeWidth)),e===void 0?c===void 0?e=800:e=a/c:typeof e=="function"&&(e=e(a)),{delay:n,duration:e,easing:o,css:(s,f)=>`stroke-dasharray: ${s*a} ${f*a}`}}function R(t){var{fallback:n}=t,c=M(t,["fallback"]);const e=new Map,o=new Map;function a(s,f,u){const{delay:l=0,duration:r=p=>Math.sqrt(p)*30,easing:y=m}=O(O({},c),u),d=f.getBoundingClientRect(),g=s.left-d.left,h=s.top-d.top,k=s.width/d.width,w=s.height/d.height,x=Math.sqrt(g*g+h*h),$=getComputedStyle(f),C=$.transform==="none"?"":$.transform,S=+$.opacity;return{delay:l,duration:_(r)?r(x):r,easing:y,css:(p,b)=>`
				opacity: ${p*S};
				transform-origin: top left;
				transform: ${C} translate(${b*g}px,${b*h}px) scale(${p+(1-p)*k}, ${p+(1-p)*w});
			`}}function i(s,f,u){return(l,r)=>(s.set(r.key,{rect:l.getBoundingClientRect()}),()=>{if(f.has(r.key)){const{rect:y}=f.get(r.key);return f.delete(r.key),a(y,l,r)}return s.delete(r.key),n&&n(l,r,u)})}return[i(o,e,!1),i(e,o,!0)]}export{q as a,R as c,L as d,P as f,B as s};
