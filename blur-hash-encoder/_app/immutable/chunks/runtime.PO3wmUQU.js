var wn=Array.isArray,Tn=Array.from,mn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,An=Object.prototype,kn=Array.prototype,Bt=Object.getPrototypeOf;const gn=()=>{};function In(t){return t()}function it(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ft=4,C=8,_t=16,k=32,Z=64,R=128,U=256,p=512,A=1024,M=2048,N=4096,L=8192,Vt=16384,ct=32768,Rn=65536,$t=1<<18,vt=1<<19,at=Symbol("$state"),Sn=Symbol("");function pt(t){return t===this.v}function Gt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Gt(t,this.v)}function Kt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Dn(){throw new Error("hydration_failed")}function On(t){throw new Error("props_invalid_value")}function xn(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function zt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return Qt(rt(t))}function qn(t){var r;const n=rt(t);return n.equals=ht,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function Qt(t){return u!==null&&u.f&w&&(E===null?cn([t]):E.push(t)),t}function bn(t,n){return u!==null&&tt()&&u.f&w&&(E===null||!E.includes(t))&&Jt(),t.equals(n)||(t.v=n,t.version=Pt(),dt(t,A),tt()&&o!==null&&o.f&p&&!(o.f&k)&&(v!==null&&v.includes(t)?(y(o,A),X(o)):m===null?vn([t]):m.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&A||!e&&l===o||(y(l,n),i&(p|R)&&(i&w?dt(l,M):X(l)))}}const Pn=1,Fn=2,Mn=16,Ln=1,Yn=2,jn=4,Hn=8,Un=16,Bn=1,Vn=2,tn="[",nn="[!",rn="]",Et={},$n=Symbol();function yt(t){console.warn("hydration_mismatch")}let I=!1;function Gn(t){I=t}let d;function B(t){if(t===null)throw yt(),Et;return d=t}function Kn(){return B(S(d))}function Zn(t){if(I){if(S(d)!==null)throw yt(),Et;d=t}}function Wn(t=1){if(I){for(var n=t,r=d;n--;)r=S(r);d=r}}function Xn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===rn){if(t===0)return n;t-=1}else(r===tn||r===nn)&&(t+=1)}var e=S(n);n.remove(),n=e}}var lt,en,wt,Tt;function zn(){if(lt===void 0){lt=window,en=document;var t=Element.prototype,n=Node.prototype;wt=st(n,"firstChild").get,Tt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function mt(t=""){return document.createTextNode(t)}function z(t){return wt.call(t)}function S(t){return Tt.call(t)}function Jn(t){if(!I)return z(t);var n=z(d);return n===null&&(n=d.appendChild(mt())),B(n),n}function Qn(t,n){if(!I){var r=z(t);return r instanceof Comment&&r.data===""?S(r):r}return d}function tr(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=S(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var a=mt();return e==null||e.before(a),B(a),a}return B(e),e}function nr(t){t.textContent=""}function At(t){o===null&&u===null&&Wt(),u!==null&&u.f&R&&Zt(),et&&Kt()}function sn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,a=o,l={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ot(!0),W(l),l.f|=Vt}catch(T){throw Y(l),T}finally{ot(i)}}else n!==null&&X(l);var _=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&vt)===0;if(!_&&!s&&e&&(a!==null&&sn(l,a),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(l)}return l}function rr(t){const n=q(C,null,!1);return y(n,p),n.teardown=t,n}function er(t){At();var n=o!==null&&(o.f&C)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=kt(t);return e}}function sr(t){return At(),gt(t)}function ar(t){const n=q(Z,t,!0);return()=>{Y(n)}}function kt(t){return q(ft,t,!1)}function gt(t){return q(C,t,!0)}function lr(t){return gt(t)}function or(t,n=0){return q(C|_t|n,t,!0)}function ur(t,n=!0){return q(C|k,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=et,e=u;ut(!0),G(null);try{n.call(null)}finally{ut(r),G(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:S(e);e.remove(),e=a}r=!0}Mt(t,n&&!r),F(t,0),y(t,L);var l=t.transitions;if(l!==null)for(const _ of l)_.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];St(t,r,!0),an(r,()=>{Y(t),n&&n()})}function an(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function St(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ct)!==0||(e.f&k)!==0;St(e,n,a?r:!1),e=s}}}function fr(t){Dt(t,!0)}function Dt(t,n){if(t.f&N){t.f^=N,j(t)&&W(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&k)!==0;Dt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const ln=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,$=!1,J=[],Q=[];function Ot(){V=!1;const t=J.slice();J=[],it(t)}function xt(){$=!1;const t=Q.slice();Q=[],it(t)}function _r(t){V||(V=!0,queueMicrotask(Ot)),J.push(t)}function cr(t){$||($=!0,ln(xt)),Q.push(t)}function on(){V&&Ot(),$&&xt()}function un(t){let n=w|A;o===null?n|=R:o.f|=vt;const r={children:null,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&w){var e=u;(e.children??(e.children=[])).push(r)}return r}function vr(t){const n=un(t);return n.equals=ht,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?fn(e):Y(e)}}}function Ct(t){var n,r=o;K(t.parent);try{Nt(t),n=Ft(t)}finally{K(r)}var e=(D||t.f&R)&&t.deps!==null?M:p;y(t,e),t.equals(n)||(t.v=n,t.version=Pt())}function fn(t){Nt(t),F(t,0),y(t,L),t.children=t.deps=t.reactions=t.fn=null}const qt=0,_n=1;let H=qt,P=!1,O=!1,et=!1;function ot(t){O=t}function ut(t){et=t}let g=[],x=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let E=null;function cn(t){E=t}let v=null,h=0,m=null;function vn(t){m=t}let bt=0,D=!1,f=null;function Pt(){return++bt}function tt(){return f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&A)return!0;if(n&M){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&Ct(a),e&&o!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,p)}return!1}function pn(t,n,r){throw t}function Ft(t){var T;var n=v,r=h,e=m,s=u,a=D,l=E;v=null,h=0,m=null,u=t.f&(k|Z)?null:t,D=!O&&(t.f&R)!==0,E=null;try{var i=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(F(t,h),_!==null&&h>0)for(_.length=h+v.length,c=0;c<v.length;c++)_[h+c]=v[c];else t.deps=_=v;if(!D)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(F(t,h),_.length=h);return i}finally{v=n,h=r,m=e,u=s,D=a,E=l}}function hn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(y(n,M),n.f&(R|U)||(n.f^=U),F(n,0))}function F(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)hn(t,r[e])}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function W(t){var n=t.f;if(!(n&L)){y(t,p);var r=o,e=f;o=t,f=t.ctx;try{n&_t||Mt(t),It(t);var s=Ft(t);t.teardown=typeof s=="function"?s:null,t.version=bt}catch(a){pn(a)}finally{o=r,f=e}}}function Lt(){x>1e3&&(x=0,Xt()),x++}function Yt(t){var n=t.length;if(n!==0){Lt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];jt(s,a),dn(a)}}finally{O=r}}}function dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(L|N))&&j(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function En(){if(P=!1,x>1001)return;const t=g;g=[],Yt(t),P||(x=0)}function X(t){H===qt&&(P||(P=!0,queueMicrotask(En)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|k)){if(!(r&p))return;n.f^=p}}g.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&k)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&C){a?r.f^=p:j(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ft&&e.push(r);var _=r.next;if(_===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var c=b.next;if(c!==null){r=c;continue t}b=b.parent}}r=_}for(var T=0;T<e.length;T++)i=e[T],n.push(i),jt(i,n)}function Ht(t){var n=H,r=g;try{Lt();const s=[];H=_n,g=s,P=!1,Yt(r);var e=t==null?void 0:t();return on(),(g.length>0||s.length>0)&&Ht(),x=0,e}finally{H=n,g=r}}async function pr(){await Promise.resolve(),Ht()}function hr(t){var n=t.f;if(n&L)return t.v;if(u!==null){E!==null&&E.includes(t)&&zt();var r=u.deps;v===null&&r!==null&&r[h]===t?h++:v===null?v=[t]:v.push(t),m!==null&&o!==null&&o.f&p&&!(o.f&k)&&m.includes(t)&&(y(o,A),X(o))}if(n&w){var e=t;j(e)&&Ct(e)}return t.v}function dr(t){const n=u;try{return u=null,t()}finally{u=n}}const yn=~(A|M|p);function y(t,n){t.f=t.f&yn|n}function Er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function yr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),G(a.reaction),kt(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(at in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&at in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{wr as $,mn as A,rr as B,_r as C,mt as D,ct as E,$t as F,tn as G,nn as H,S as I,z as J,zn as K,Et as L,rn as M,yt as N,Dn as O,nr as P,Tn as Q,ar as R,at as S,f as T,$n as U,Bn as V,Vn as W,sr as X,er as Y,dr as Z,it as _,ur as a,In as a0,qn as a1,lr as a2,Jn as a3,Zn as a4,tr as a5,N as a6,Pn as a7,Mn as a8,Fn as a9,St as aa,an as ab,cr as ac,Sn as ad,Ut as ae,tt as af,gt as ag,Cn as ah,en as ai,Wn as aj,un as ak,kt as al,On as am,Rn as an,jn as ao,ht as ap,Ln as aq,Yn as ar,Hn as as,vr as at,Un as au,Ht as av,pr as aw,Gt as ax,or as b,d as c,Y as d,yr as e,Qn as f,kn as g,I as h,xn as i,bn as j,st as k,hr as l,o as m,gn as n,An as o,Er as p,Nn as q,Bt as r,rt as s,wn as t,Kn as u,Xn as v,B as w,Gn as x,fr as y,ir as z};
