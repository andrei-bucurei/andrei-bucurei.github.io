import{p as Be,a as xe,u as qe,b as Je,o as Ne,f as ne,i as F,c as we,d as ye,e as S,g as Ue,t as q,h as l,s as V,j as Ke,k as _e,l as m,m as K,n as Me,q as w,r as re,v as Q,w as ee,x as _,y as k,z as Ge,L as Qe,E as Xe,A as Ye,B as Ze,C as $e,D as Pe,$ as et,F as tt,G as at,H as Ie,I as He,J as pe,K as De,M as ge,N as st,O as rt,P as nt,Q as ot,R as lt,S as ct,T as Le}from"./vendor.BDTzTWHN.js";var je;const it=((je=globalThis.__sveltekit_18ugktu)==null?void 0:je.base)??"/blur-hash-encoder";var Ae;const Rt=((Ae=globalThis.__sveltekit_18ugktu)==null?void 0:Ae.assets)??it,jt="1728254915072",ut="modulepreload",dt=function(v,c){return new URL(v,c).href},Re={},Ce=function(c,h,y){let C=Promise.resolve();if(h&&h.length>0){const f=document.getElementsByTagName("link"),b=document.querySelector("meta[property=csp-nonce]"),z=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));C=Promise.allSettled(h.map(H=>{if(H=dt(H,y),H in Re)return;Re[H]=!0;const B=H.endsWith(".css"),a=B?'[rel="stylesheet"]':"";if(!!y)for(let s=f.length-1;s>=0;s--){const o=f[s];if(o.href===H&&(!B||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${H}"]${a}`))return;const t=document.createElement("link");if(t.rel=B?"stylesheet":ut,B||(t.as="script"),t.crossOrigin="",t.href=H,z&&t.setAttribute("nonce",z),document.head.appendChild(t),B)return new Promise((s,o)=>{t.addEventListener("load",s),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${H}`)))})}))}function T(f){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=f,window.dispatchEvent(b),!b.defaultPrevented)throw f}return C.then(f=>{for(const b of f||[])b.status==="rejected"&&T(b.reason);return c().catch(T)})},At={};var mt=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),vt=q("<!> <!>",1);function ht(v,c){Be(c,!0);let h=xe(c,"components",23,()=>[]),y=xe(c,"data_0",3,null),C=xe(c,"data_1",3,null);qe(()=>c.stores.page.set(c.page)),Je(()=>{c.stores,c.page,c.constructors,h(),c.form,y(),C(),c.stores.page.notify()});let T=K(!1),f=K(!1),b=K(null);Ne(()=>{const e=c.stores.page.subscribe(()=>{l(T)&&(V(f,!0),Ke().then(()=>{V(b,_e(document.title||"untitled page"))}))});return V(T,!0),e});const z=k(()=>c.constructors[1]);var H=vt(),B=ne(H);F(B,()=>c.constructors[1],e=>{var t=we();const s=k(()=>c.constructors[0]);var o=ne(t);ye(o,()=>l(s),(d,O)=>{Me(O(d,{get data(){return y()},get form(){return c.form},children:(M,L)=>{var p=we(),u=ne(p);ye(u,()=>l(z),(i,g)=>{Me(g(i,{get data(){return C()},get form(){return c.form}}),U=>h()[1]=U,()=>{var U;return(U=h())==null?void 0:U[1]})}),S(M,p)},$$slots:{default:!0}}),M=>h()[0]=M,()=>{var M;return(M=h())==null?void 0:M[0]})}),S(e,t)},e=>{var t=we();const s=k(()=>c.constructors[0]);var o=ne(t);ye(o,()=>l(s),(d,O)=>{Me(O(d,{get data(){return y()},get form(){return c.form}}),M=>h()[0]=M,()=>{var M;return(M=h())==null?void 0:M[0]})}),S(e,t)});var a=m(B,2);F(a,()=>l(T),e=>{var t=mt(),s=w(t);F(s,()=>l(f),o=>{var d=re();Q(()=>ee(d,l(b))),S(o,d)}),_(t),S(e,t)}),S(v,H),Ue()}const Bt=Ge(ht),Ut=[()=>Ce(()=>Promise.resolve().then(()=>gt),void 0,import.meta.url),()=>Ce(()=>Promise.resolve().then(()=>_t),void 0,import.meta.url),()=>Ce(()=>Promise.resolve().then(()=>Ht),void 0,import.meta.url)],zt=[],Ft={"/":[2]},Vt={handleError:({error:v})=>{console.error(v)},reroute:()=>{}},pt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),gt=Object.freeze(Object.defineProperty({__proto__:null,component:Qe,universal:pt},Symbol.toStringTag,{value:"Module"})),_t=Object.freeze(Object.defineProperty({__proto__:null,component:Xe},Symbol.toStringTag,{value:"Module"})),Ee=function(v){const c=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],h=a=>{let e=0;for(let t=0;t<a.length;t++){const s=a[t];e=83*e+c.indexOf(s)}return e},y=(a,e)=>{var t="";for(let s=1;s<=e;s++){let o=Math.floor(a)/Math.pow(83,e-s)%83;t+=c[Math.floor(o)]}return t},C=a=>{let e=a/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},T=a=>{let e=Math.max(0,Math.min(1,a));return e<=.0031308?Math.round(12.92*e*255+.5):Math.round(255*(1.055*Math.pow(e,.4166666666666667)-.055)+.5)},f=(a,e)=>(t=>t<0?-1:1)(a)*Math.pow(Math.abs(a),e),b=a=>{if(!a||a.length<6)throw new Error("The blurhash string must be at least 6 characters");const e=h(a[0]),t=Math.floor(e/9)+1,s=e%9+1;if(a.length!==4+2*s*t)throw new Error(`blurhash length mismatch: length is ${a.length} but it should be ${4+2*s*t}`)},z=a=>{const e=a>>8&255,t=255&a;return[C(a>>16),C(e),C(t)]},H=(a,e)=>{const t=Math.floor(a/361),s=Math.floor(a/19)%19,o=a%19;return[f((t-9)/9,2)*e,f((s-9)/9,2)*e,f((o-9)/9,2)*e]},B=(a,e,t,s)=>{let o=0,d=0,O=0;const M=4*e;for(let p=0;p<e;p++)for(let u=0;u<t;u++){const i=s(p,u);o+=i*C(a[4*p+0+u*M]),d+=i*C(a[4*p+1+u*M]),O+=i*C(a[4*p+2+u*M])}let L=1/(e*t);return[o*L,d*L,O*L]};return v.decodePromise=(a,e,t,s=1)=>new Promise((o,d)=>{o(v.decode(a,e,t,s))}),v.decode=(a,e,t,s=1)=>{b(a),s|=1;const o=h(a[0]),d=Math.floor(o/9)+1,O=o%9+1,M=(h(a[1])+1)/166,L=new Array(O*d);for(let i=0;i<L.length;i++)if(i===0){const g=h(a.substring(2,6));L[i]=z(g)}else{const g=h(a.substring(4+2*i,6+2*i));L[i]=H(g,M*s)}const p=4*e,u=new Uint8ClampedArray(p*t);for(let i=0;i<t;i++)for(let g=0;g<e;g++){let U=0,J=0,G=0;for(let te=0;te<d;te++)for(let X=0;X<O;X++){const ae=Math.cos(Math.PI*g*X/e)*Math.cos(Math.PI*i*te/t);let le=L[X+te*O];U+=le[0]*ae,J+=le[1]*ae,G+=le[2]*ae}let ve=T(U),oe=T(J),he=T(G);u[4*g+0+i*p]=ve,u[4*g+1+i*p]=oe,u[4*g+2+i*p]=he,u[4*g+3+i*p]=255}return u},v.encodePromise=(a,e,t,s,o)=>new Promise((d,O)=>{d(v.encode(a,e,t,s,o))}),v.encode=(a,e,t,s,o)=>{if(s<1||s>9||o<1||o>9)throw new Error("BlurHash must have between 1 and 9 components");if(e*t*4!==a.length)throw new Error("Width and height must match the pixels array");let d=[];for(let u=0;u<o;u++)for(let i=0;i<s;i++){const g=i==0&&u==0?1:2,U=B(a,e,t,(J,G)=>g*Math.cos(Math.PI*i*J/e)*Math.cos(Math.PI*u*G/t));d.push(U)}const O=d[0],M=d.slice(1);let L,p="";if(p+=y(s-1+9*(o-1),1),M.length>0){let u=Math.max(...M.map(g=>Math.max(...g))),i=Math.floor(Math.max(0,Math.min(82,Math.floor(166*u-.5))));L=(i+1)/166,p+=y(i,1)}else L=1,p+=y(0,1);return p+=y((u=>(T(u[0])<<16)+(T(u[1])<<8)+T(u[2]))(O),4),M.forEach(u=>{p+=y(((i,g)=>19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*f(i[0]/g,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*f(i[1]/g,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*f(i[2]/g,.5)+9.5)))))(u,L),2)}),p},v.getImageData=a=>{const e=a.width,t=a.height,s=document.createElement("canvas"),o=s.getContext("2d");return s.width=e,s.height=t,o.width=e,o.height=t,o.drawImage(a,0,0),o.getImageData(0,0,e,t).data},v.drawImageDataOnNewCanvas=(a,e,t)=>{const s=document.createElement("canvas"),o=s.getContext("2d");return s.width=e,s.height=t,o.width=e,o.height=t,o.putImageData(new ImageData(a,e,t),0,0),s},v.getImageDataAsImageWithOnloadPromise=(a,e,t)=>new Promise((s,o)=>{v.getImageDataAsImage(a,e,t,(d,O)=>{s(O)})}),v.getImageDataAsImage=(a,e,t,s)=>{const o=v.drawImageDataOnNewCanvas(a,e,t).toDataURL(),d=new Image(e,t);return d.onload=O=>s(O,d),d.width=e,d.height=t,d.src=o,d},v}({});async function ft(v,c,h){const y=l(c).split(/\r?\n/).filter(C=>C.trim()!=="");await new Promise(C=>setTimeout(C,0)),V(c,""),h(y)}async function bt(v,c,h){V(c,_e(l(c).filter(y=>y.status!=="failed"))),V(h,!0),await new Promise(y=>setTimeout(y,2e3)),V(h,!1)}var xt=tt('<script src="analytics.js"><\/script><!---->',1),wt=q('<img alt="BlurHash" class="svelte-1c9cxpu">'),yt=q('<span class="not-available svelte-1c9cxpu">n/a</span>'),Mt=(v,c,h)=>c(v,h().blurHash),Pt=q('<input class="blur-hash svelte-1c9cxpu" type="text" title="Copy" readonly=""> <button class="copy-button svelte-1c9cxpu">⧉</button>',1),It=q('| <span class="cors-tag svelte-1c9cxpu" title="Used CORS proxy">CORS</span>',1),Dt=q("<span> </span>"),Ct=q('<div class="item svelte-1c9cxpu"><div class="thumbnail image-thumbnail svelte-1c9cxpu"><img alt="Original" class="svelte-1c9cxpu"></div> <div class="spacer svelte-1c9cxpu"></div> <div class="thumbnail blur-hash-thumbnail svelte-1c9cxpu"><!> <!></div> <div class="spacer svelte-1c9cxpu"></div> <div class="info svelte-1c9cxpu"><div class="blur-hash-section svelte-1c9cxpu"><span class="label svelte-1c9cxpu">BlurHash:</span> <!></div> <div class="truncated svelte-1c9cxpu"><span class="label svelte-1c9cxpu">Components:</span> <span> </span></div> <div class="truncated svelte-1c9cxpu"><span class="label svelte-1c9cxpu">URL:</span> <a target="_blank"> </a></div> <div class="truncated svelte-1c9cxpu"><span class="label svelte-1c9cxpu">Status:</span> <span> </span> <!></div> <div class="truncated svelte-1c9cxpu"><span class="label svelte-1c9cxpu">Duration:</span> <!></div></div></div>'),Et=q('<button class="tool-bar-button svelte-1c9cxpu" title="Export completed tasks"><!></button>'),St=q('<button class="tool-bar-button svelte-1c9cxpu" title="Clear failed tasks"><!></button>'),Tt=q('<div id="page-layout" class="svelte-1c9cxpu"><header class="svelte-1c9cxpu"><h1>BlurHash Encoder</h1> <textarea id="input" rows="4" placeholder="Enter image URLs" class="svelte-1c9cxpu"></textarea> <div id="tool-bar" class="svelte-1c9cxpu"><button class="tool-bar-button svelte-1c9cxpu">Encode</button> <div id="settings" class="svelte-1c9cxpu">Components: <input class="components-input svelte-1c9cxpu" type="number" min="1" max="10"> ✕ <input class="components-input svelte-1c9cxpu" type="number" min="1" max="10"></div> <div id="tools" class="svelte-1c9cxpu"><span> <!></span> | <span> <!></span></div></div></header> <main class="svelte-1c9cxpu"><noscript></noscript> <div id="items"></div></main> <footer class="svelte-1c9cxpu">Made with <a href="https://kit.svelte.dev/">SvelteKit</a> 5</footer></div>');function Ot(v,c){Be(c,!0);const h=(n,r=lt)=>{var E=Ct(),P=w(E),x=w(P);_(P);var I=m(P,4),D=w(I);F(D,()=>r().blurHashImageSrc,W=>{var R=wt();Q(()=>ge(R,"src",r().blurHashImageSrc)),S(W,R)});var j=m(D,2);F(j,()=>r().status==="failed",W=>{var R=yt();S(W,R)}),_(I);var A=m(I,4),Y=w(A),ce=m(w(Y),2);F(ce,()=>r().blurHash!=="",W=>{var R=Pt(),me=ne(R);Ie(me);var be=m(me,2);be.__click=[Mt,O,r],Q(()=>st(me,r().blurHash)),S(W,R)},W=>{var R=re("n/a");S(W,R)}),_(Y);var Z=m(Y,2),ie=m(w(Z),2),fe=w(ie);_(ie),_(Z);var ue=m(Z,2),de=m(w(ue),2),$=w(de);_(de),_(ue);var N=m(ue,2),se=m(w(N),2),ze=w(se);_(se);var Fe=m(se,2);F(Fe,()=>r().usedCorsProxy,W=>{var R=It();He(),S(W,R)}),_(N);var Oe=m(N,2),Ve=m(w(Oe),2);F(Ve,()=>r().endDate,W=>{var R=Dt();const me=k(()=>r().endDate.getTime()-r().startDate.getTime()),be=k(()=>r().startDate.toLocaleString()+"."+r().startDate.getMilliseconds()),We=k(()=>r().endDate.toLocaleString()+"."+r().endDate.getMilliseconds());var ke=w(R);_(R),Q(()=>{ge(R,"title",`${l(be)??""} - ${l(We)??""}`),ee(ke,`${l(me)??""} ms`)}),S(W,R)}),_(Oe),_(A),_(E),Q(()=>{ge(x,"src",r().imageSrc),ee(fe,`${r().xComponents??""} ✕ ${r().yComponents??""}`),ge(de,"href",r().imageSrc),ee($,r().imageSrc),rt(se,`task-status ${r().status??""} svelte-1c9cxpu`),ee(ze,r().status)}),nt("error",x,d),ot(x),De(3,E,()=>ct,()=>({x:"50%"})),S(n,E)};let y=K(""),C=K(4),T=K(4),f=K(_e([])),b=K(!1),z=K(!1);const H=k(()=>l(f).filter(n=>n.status==="completed").length),B=k(()=>l(f).filter(n=>n.status==="failed").length),a=k(()=>l(y).trim()===""),e=k(()=>l(C)>0&&l(T)>0),t=k(()=>l(a)||!l(e));function s(n){const E=`job-${Math.random().toString(36).substring(2,8)}-${Date.now()}`,P=l(C),x=l(T),I=n.map((D,j)=>_e({id:`${E}-${j}`,url:D,xComponents:P,yComponents:x,blurHash:"",image:new Image,imageSrc:D,blurHashImage:new Image,blurHashImageSrc:"",startDate:new Date,endDate:null,usedCorsProxy:!1,status:"in-progress",error:null}));l(f).unshift(...I);for(const D of I)o(D)}async function o(n){const r=new Date;n.startDate=r;const E=n.url;let P=null,x=!1;const I=new Image;I.crossOrigin="Anonymous";try{await new Promise(($,N)=>{I.onload=$,I.onerror=N,I.src=E})}catch($){P=$}if(P!=null){P=null;const $=`https://corsproxy.io/?${encodeURIComponent(E)}`;try{await new Promise((N,se)=>{I.onload=N,I.onerror=se,I.src=$}),x=!0}catch(N){P=N}}if(P!=null){n.status="failed",n.error=P,n.endDate=new Date;return}const D=64;let j=I.width,A=I.height;j>A?j>D&&(A=Math.round(A*D/j),j=D):A>D&&(j=Math.round(j*D/A),A=D);const Y=document.createElement("canvas");Y.width=j,Y.height=A;const ce=Y.getContext("2d");if(ce==null){n.status="failed",n.error=new Error("Failed to get 2d context"),n.endDate=new Date,n.usedCorsProxy=x;return}ce.drawImage(I,0,0,I.width,I.height,0,0,j,A);const Z=ce.getImageData(0,0,j,A),ie=await Ee.encodePromise(Z.data,Z.width,Z.height,n.xComponents,n.yComponents),fe=await Ee.decodePromise(ie,j,A,1),ue=await Ee.getImageDataAsImageWithOnloadPromise(fe,j,A),de=new Date;n.endDate=de,n.blurHash=ie,n.blurHashImageSrc=ue.src,n.status="completed",n.usedCorsProxy=x}function d(n){n.target.classList.add("broken-image")}async function O(n,r){try{await navigator.clipboard.writeText(r)}catch(x){console.error("Failed to copy text: ",x);return}const E=n.target;E instanceof HTMLButtonElement&&(E.classList.add("success"),E.disabled=!0,await new Promise(x=>setTimeout(x,1e3)),E.classList.remove("success"),E.disabled=!1)}async function M(){const r=l(f).filter(D=>D.status==="completed").map(D=>({url:D.url,xComponents:D.xComponents,yComponents:D.yComponents,blurHash:D.blurHash})),E=JSON.stringify(r,null,2),P=new Blob([E],{type:"application/json"}),x=URL.createObjectURL(P),I=document.createElement("a");I.href=x,I.download="blur-hashes.json",I.click(),URL.revokeObjectURL(x),V(b,!0),await new Promise(D=>setTimeout(D,2e3)),V(b,!1)}var L=Tt();Ze(n=>{var r=xt();et.title="BlurHash Encoder";var E=m(ne(r));S(n,r)});var p=w(L),u=m(w(p),2);at(u);var i=m(u,2),g=w(i);g.__click=[ft,y,s];var U=m(g,2),J=m(w(U));Ie(J);var G=m(J,2);Ie(G),_(U);var ve=m(U,2),oe=w(ve),he=w(oe),te=m(he);F(te,()=>l(H)>0,n=>{var r=Et();r.__click=M;var E=w(r);F(E,()=>l(b),P=>{var x=re("Exported");S(P,x)},P=>{var x=re("📥 Export");S(P,x)}),_(r),Q(()=>{r.disabled=l(b),pe(r,"success",l(b))}),De(3,r,()=>Le),S(n,r)}),_(oe);var X=m(oe,2),ae=w(X),le=m(ae);F(le,()=>l(B)>0||l(z),n=>{var r=St();r.__click=[bt,f,z];var E=w(r);F(E,()=>l(z),P=>{var x=re("Cleared");S(P,x)},P=>{var x=re("❌ Clear");S(P,x)}),_(r),Q(()=>{r.disabled=l(z),pe(r,"success",l(z))}),De(3,r,()=>Le),S(n,r)}),_(X),_(ve),_(i),_(p);var Se=m(p,2),Te=m(w(Se),2);$e(Te,21,()=>l(f),n=>n.id,(n,r)=>{h(n,()=>l(r))}),_(Te),_(Se),He(2),_(L),Q(()=>{g.disabled=l(t),pe(J,"invalid",l(C)<=0),pe(G,"invalid",l(T)<=0),ee(he,`Completed: ${l(H)??""} `),ee(ae,`Failed: ${l(B)??""} `)}),Pe(u,()=>l(y),n=>V(y,n)),Pe(J,()=>l(C),n=>V(C,n)),Pe(G,()=>l(T),n=>V(T,n)),S(v,L),Ue()}Ye(["click"]);const Ht=Object.freeze(Object.defineProperty({__proto__:null,component:Ot},Symbol.toStringTag,{value:"Module"}));export{pt as _,Rt as a,it as b,Ot as c,Ft as d,Vt as h,At as m,Ut as n,Bt as r,zt as s,jt as v};
