var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function r(e){return e&&a(e.destroy)?e.destroy:t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let $;function b(t){$=t}function y(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const x=[],k=[],w=[],E=[],_=Promise.resolve();let C=!1;function T(t){w.push(t)}const j=new Set;let M=0;function A(){const t=$;do{for(;M<x.length;){const t=x[M];M++,b(t),L(t.$$)}for(b(null),x.length=0,M=0;k.length;)k.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];j.has(e)||(j.add(e),e())}w.length=0}while(x.length);for(;E.length;)E.pop()();C=!1,j.clear(),b(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const z=new Set;function N(t,e){t&&t.i&&(z.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),undefined.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function S(t,n,s,c){const{fragment:r,on_mount:l,on_destroy:i,after_update:u}=t.$$;r&&r.m(n,s),c||T((()=>{const n=l.map(e).filter(a);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(T)}function H(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,a,s,c,r,l,i,d=[-1]){const f=$;b(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||f.$$.root};i&&i(p.root);let h=!1;if(p.ctx=s?s(e,a.props||{},((t,n,...o)=>{const a=o.length?o[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),h&&F(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();a.intro&&N(e.$$.fragment),S(e,a.target,a.anchor,a.customElement),A()}b(f)}class B{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){const e={};return[...t.elements].forEach((function(t,n){switch(!0){case!t.name:case t.disabled:case/(file|reset|submit|button)/i.test(t.type):break;case/(select-multiple)/i.test(t.type):e[t.name]=[],[...t.options].forEach((function(n,o){n.selected&&e[t.name].push(n.value)}));break;case/(radio)/i.test(t.type):t.checked&&(e[t.name]=t.value);break;case/(checkbox)/i.test(t.type):t.checked&&(e[t.name]=[...e[t.name]||[],t.value]);break;default:t.value&&(e[t.name]=t.value)}})),e}function q(t){let e=0;function n(){t.dispatchEvent(new CustomEvent("update",{detail:{...J(t)}}))}return[...t.getElementsByTagName("input")].forEach((e=>{e.oninput=t.onchange})),t.addEventListener("input",n),n(),{update(n){2===e?function(t,e){[...t.elements].forEach((function(t,n){switch(!0){case!t.name:case t.disabled:case/(file|reset|submit|button)/i.test(t.type):break;case/(select-multiple)/i.test(t.type):[...t.options].forEach((function(n,o){n.selected=e[t.name]&&e[t.name].includes(n.value)}));break;case/(radio)/i.test(t.type):t.checked=e[t.name]&&e[t.name]===t.value;break;case/(checkbox)/i.test(t.type):t.checked=e[t.name]&&e[t.name].includes(t.value);break;default:t.value=e[t.name]||""}}))}(t,n):e+=1},destroy(){t.removeEventListener("input",n)}}}function I(t,e=[]){let n=[];return e.forEach((([e,o])=>{const{destroy:a=(()=>{})}=e(t,o)||{destroy:()=>{}};n.push(a)})),{destroy(){n.forEach((t=>t()))}}}function R(t){let e,n,s,l,f,p;const m=t[3].default,v=function(t,e,n,o){if(t){const a=c(t,e,n,o);return t[0](a)}}(m,t,t[2],null);return{c(){e=d("form"),v&&v.c()},m(o,a){i(o,e,a),v&&v.m(e,null),l=!0,f||(p=[h(e,"update",t[5]),r(n=q.call(null,e,t[0])),r(s=I.call(null,e,t[1])),h(e,"submit",t[4])],f=!0)},p(t,[e]){v&&v.p&&(!l||4&e)&&function(t,e,n,o,a,s){if(a){const r=c(e,n,o,s);t.p(r,a)}}(v,m,t,t[2],l?function(t,e,n,o){if(t[2]&&o){const a=t[2](o(n));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],n=Math.max(e.dirty.length,a.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|a[o];return t}return e.dirty|a}return e.dirty}(m,t[2],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),n&&a(n.update)&&1&e&&n.update.call(null,t[0]),s&&a(s.update)&&2&e&&s.update.call(null,t[1])},i(t){l||(N(v,t),l=!0)},o(t){O(v,t),l=!1},d(t){t&&u(e),v&&v.d(t),f=!1,o(p)}}}function V(t,e,n){let{$$slots:o={},$$scope:a}=e,{values:s}=e,{actions:c=[]}=e;return t.$$set=t=>{"values"in t&&n(0,s=t.values),"actions"in t&&n(1,c=t.actions),"$$scope"in t&&n(2,a=t.$$scope)},[s,c,a,o,function(e){y.call(this,t,e)},({detail:t})=>n(0,s=t)]}class Z extends B{constructor(t){super(),P(this,t,V,R,s,{values:0,actions:1})}}function D(t,e,n){const o=t.slice();return o[6]=e[n],o}function G(t){let e,n,o;return{c(){e=d("input"),m(e,"class","form-input svelte-1aa6vtd"),m(e,"placeholder","ZIP code"),m(e,"type","text"),m(e,"name","zipcode")},m(a,s){i(a,e,s),g(e,t[0]),n||(o=h(e,"input",t[4]),n=!0)},p(t,n){1&n&&e.value!==t[0]&&g(e,t[0])},d(t){t&&u(e),n=!1,o()}}}function K(t){let e,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=Q(D(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=f("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);i(t,e,n)},p(t,a){if(2&a){let s;for(n=t[1],s=0;s<n.length;s+=1){const c=D(t,n,s);o[s]?o[s].p(c,a):(o[s]=Q(c),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),t&&u(e)}}}function Q(t){let e,n,o,a,s,c,r,h,g,$,b,y,x,k,w,E,_,C=t[6].name+"",T=t[6].phone+"",j=t[6].address+"",M=t[6].city+"",A=t[6].state+"",L=t[6].zip+"";return{c(){e=d("li"),n=d("div"),o=d("h2"),a=f(C),s=p(),c=d("h3"),r=f(T),h=p(),g=d("p"),$=f(j),b=p(),y=f(M),x=f(", "),k=f(A),w=p(),E=f(L),_=p(),m(o,"class","result-header-name svelte-1aa6vtd"),m(c,"class","result-header-phone svelte-1aa6vtd"),m(n,"class","result-header svelte-1aa6vtd"),m(g,"class","result-body svelte-1aa6vtd"),m(e,"class","result svelte-1aa6vtd")},m(t,u){i(t,e,u),l(e,n),l(n,o),l(o,a),l(n,s),l(n,c),l(c,r),l(e,h),l(e,g),l(g,$),l(g,b),l(g,y),l(g,x),l(g,k),l(g,w),l(g,E),l(e,_)},p(t,e){2&e&&C!==(C=t[6].name+"")&&v(a,C),2&e&&T!==(T=t[6].phone+"")&&v(r,T),2&e&&j!==(j=t[6].address+"")&&v($,j),2&e&&M!==(M=t[6].city+"")&&v(y,M),2&e&&A!==(A=t[6].state+"")&&v(k,A),2&e&&L!==(L=t[6].zip+"")&&v(E,L)},d(t){t&&u(e)}}}function U(t){let e,n,o;return{c(){e=d("button"),e.textContent="Show More Results",m(e,"class","load-more svelte-1aa6vtd"),m(e,"id","load-more"),m(e,"type","submit")},m(s,c){i(s,e,c),n||(o=h(e,"click",(function(){a(t[3](t[0]))&&t[3](t[0]).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&u(e),n=!1,o()}}}function W(t){let e,n,o,s,c,r,f,v,g,$,b,y,x,k,w,E,_,C;g=new Z({props:{$$slots:{default:[G]},$$scope:{ctx:t}}});let T=t[1].length>0&&K(t),j=t[1].length>10&&U(t);return{c(){var t;e=d("main"),n=d("header"),n.innerHTML='<img class="header-img svelte-1aa6vtd" src="https://github.com/sparkfish/orbitron/raw/dev/orbitron.svg" alt="The Orbitron logo"/>',o=p(),s=d("div"),s.innerHTML='<div class="hero-left svelte-1aa6vtd"><div class="hero-left-text svelte-1aa6vtd"><h1 class="hero-left-text-title svelte-1aa6vtd">Covid-19 Vaccine Finder</h1> \n\t\t\t\t<h3 class="hero-left-text-info svelte-1aa6vtd">Find a location near you, then call or visit their website to make an appointment.</h3></div> \n\t\t\t<p class="hero-sponsor svelte-1aa6vtd">Powered by <span class="hero-sponsor-name svelte-1aa6vtd">Orbitron</span></p></div> \n\t\t<div class="hero-right svelte-1aa6vtd"><img class="hero-img svelte-1aa6vtd" src="http://sparkfish.github.io/svelte-orb-vax/baby.jpg" align="middle" alt="Family"/></div>',c=p(),r=d("div"),f=d("h2"),f.textContent="Search for a clinic near you",v=p(),(t=g.$$.fragment)&&t.c(),$=p(),b=d("button"),b.textContent="Search",y=p(),x=d("div"),k=d("ol"),T&&T.c(),w=p(),j&&j.c(),m(n,"class","header svelte-1aa6vtd"),m(s,"class","hero svelte-1aa6vtd"),m(f,"class","form-title svelte-1aa6vtd"),m(b,"class","form-button svelte-1aa6vtd"),m(b,"type","submit"),m(r,"class","form svelte-1aa6vtd"),m(k,"class","svelte-1aa6vtd"),m(x,"class","results svelte-1aa6vtd"),m(e,"class","svelte-1aa6vtd")},m(u,d){i(u,e,d),l(e,n),l(e,o),l(e,s),l(e,c),l(e,r),l(r,f),l(r,v),S(g,r,null),l(r,$),l(r,b),l(e,y),l(e,x),l(x,k),T&&T.m(k,null),l(x,w),j&&j.m(x,null),E=!0,_||(C=h(b,"click",(function(){a(t[2](t[0]))&&t[2](t[0]).apply(this,arguments)})),_=!0)},p(e,[n]){t=e;const o={};513&n&&(o.$$scope={dirty:n,ctx:t}),g.$set(o),t[1].length>0?T?T.p(t,n):(T=K(t),T.c(),T.m(k,null)):T&&(T.d(1),T=null),t[1].length>10?j?j.p(t,n):(j=U(t),j.c(),j.m(x,null)):j&&(j.d(1),j=null)},i(t){E||(N(g.$$.fragment,t),E=!0)},o(t){O(g.$$.fragment,t),E=!1},d(t){t&&u(e),H(g),T&&T.d(),j&&j.d(),_=!1,C()}}}function X(t,e,n){let o="",a=[],s=[];return[o,s,async function(t){let e="https://orbitron-dev.azurewebsites.net/nearest/".concat(20).concat("/clinics/to/").concat(t);(new Headers).append("Content-Type","Application/Json"),await fetch(e).then((t=>t.json())).then((t=>a=t)).catch((t=>console.log("error",t)));const o=[...new Map(a.map((t=>[t.name,t]))).values()];n(1,s=o)},async function(t){let e="https://orbitron-dev.azurewebsites.net/nearest/".concat(20).concat("/clinics/to/").concat(t);(new Headers).append("Content-Type","Application/Json"),await fetch(e).then((t=>t.json())).then((t=>a=t)).catch((t=>console.log("error",t)));const o=[...new Map(a.map((t=>[t.name,t]))).values()];n(1,s=o)},function(){o=this.value,n(0,o)}]}return new class extends B{constructor(t){super(),P(this,t,X,W,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
