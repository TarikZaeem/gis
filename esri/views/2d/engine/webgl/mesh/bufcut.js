// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(K){function L(a,e,c,d,b,f,m){let g;c=0;for(let l=d,n=b-f;l<b;l+=f)c+=(a[n+e*f]-a[l+e*f])*(a[l+1+e*f]+a[n+1+e*f]),n=l;if(m===0<c)for(;d<b;d+=f)g=M(d+e*f,a[d+e*f],a[d+1+e*f],g);else for(b-=f;b>=d;b-=f)g=M(b+e*f,a[b+e*f],a[b+1+e*f],g);g&&w(g,g.next)&&(A(g),g=g.next);return g}function B(a,e=a){if(!a)return a;let c;do if(c=!1,a.steiner||!w(a,a.next)&&0!==p(a.prev,a,a.next))a=a.next;else{A(a);a=e=a.prev;if(a===a.next)break;c=!0}while(c||a!==e);return e}function C(a,e,c,d,b,f,
m,g){if(a){!g&&f&&(a=N(a,d,b,f));for(var l=a;a.prev!==a.next;){var n=a.prev,k=a.next;if(f)var h=R(a,d,b,f);else a:{h=a;var q=h.prev,t=h;const u=h.next;if(0<=p(q,t,u)){h=!1;break a}let r=h.next.next;const D=r;let v=0;for(;r!==h.prev&&(0===v||r!==D);){v++;if(y(q.x,q.y,t.x,t.y,u.x,u.y,r.x,r.y)&&0<=p(r.prev,r,r.next)){h=!1;break a}r=r.next}h=!0}if(h)e.push(n.index/c+m),e.push(a.index/c+m),e.push(k.index/c+m),A(a),l=a=k.next;else if(a=k,a===l){if(!g)C(B(a),e,c,d,b,f,m,1);else if(1===g){g=e;l=c;n=m;k=a;
do h=k.prev,q=k.next.next,!w(h,q)&&O(h,k,k.next,q)&&E(h,q)&&E(q,h)&&(g.push(h.index/l+n),g.push(k.index/l+n),g.push(q.index/l+n),A(k),A(k.next),k=a=q),k=k.next;while(k!==a);a=k;C(a,e,c,d,b,f,m,2)}else if(2===g)a:{g=a;do{for(l=g.next.next;l!==g.prev;){if(n=g.index!==l.index){h=h=h=void 0;n=g;k=l;if(h=n.next.index!==k.index&&n.prev.index!==k.index){b:{h=n;do{if(h.index!==n.index&&h.next.index!==n.index&&h.index!==k.index&&h.next.index!==k.index&&O(h,h.next,n,k)){h=!0;break b}h=h.next}while(h!==n);h=
!1}h=!h}if(h=h&&E(n,k)&&E(k,n)){h=n;q=!1;t=(n.x+k.x)/2;k=(n.y+k.y)/2;do h.y>k!==h.next.y>k&&h.next.y!==h.y&&t<(h.next.x-h.x)*(k-h.y)/(h.next.y-h.y)+h.x&&(q=!q),h=h.next;while(h!==n);h=q}n=h}if(n){a=P(g,l);g=B(g,g.next);a=B(a,a.next);C(g,e,c,d,b,f,m,0);C(a,e,c,d,b,f,m,0);break a}l=l.next}g=g.next}while(g!==a)}break}}}}function R(a,e,c,d){const b=a.prev,f=a.next;if(0<=p(b,a,f))return!1;const m=b.x>a.x?b.x>f.x?b.x:f.x:a.x>f.x?a.x:f.x,g=b.y>a.y?b.y>f.y?b.y:f.y:a.y>f.y?a.y:f.y,l=H(b.x<a.x?b.x<f.x?b.x:
f.x:a.x<f.x?a.x:f.x,b.y<a.y?b.y<f.y?b.y:f.y:a.y<f.y?a.y:f.y,e,c,d);e=H(m,g,e,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=e;){if(c!==a.prev&&c!==a.next&&y(b.x,b.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=p(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&y(b.x,b.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=p(d.prev,d,d.next))return!1;d=d.nextZ}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&y(b.x,b.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=p(c.prev,c,c.next))return!1;c=c.prevZ}for(;d&&d.z<=e;){if(d!==a.prev&&d!==a.next&&
y(b.x,b.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=p(d.prev,d,d.next))return!1;d=d.nextZ}return!0}function M(a,e,c,d){a=G.create(a,e,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function A(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function S(a,e){let c=e;const d=a.x,b=a.y;let f=-Infinity,m;do{if(b<=c.y&&b>=c.next.y&&c.next.y!==c.y){var g=c.x+(b-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(b===
c.y)return c;if(b===c.next.y)return c.next}m=c.x<c.next.x?c:c.next}}c=c.next}while(c!==e);if(!m)return null;if(d===f)return m.prev;e=m;g=m.x;const l=m.y;let n=Infinity,k;for(c=m.next;c!==e;)d>=c.x&&c.x>=g&&d!==c.x&&y(b<l?d:f,b,g,l,b<l?f:d,b,c.x,c.y)&&(k=Math.abs(b-c.y)/(d-c.x),(k<n||k===n&&c.x>m.x)&&E(c,a)&&(m=c,n=k)),c=c.next;return m}function N(a,e,c,d){for(var b;b!==a;b=b.next){b=b||a;null===b.z&&(b.z=H(b.x,b.y,e,c,d));if(b.prev.next!==b||b.next.prev!==b)return b.prev.next=b,b.next.prev=b,N(a,
e,c,d);b.prevZ=b.prev;b.nextZ=b.next}a.prevZ.nextZ=null;a.prevZ=null;a:for(c=1;;){d=a;e=a=null;let f=0;for(;d;){f++;b=d;let m=0;for(;m<c&&b;m++)b=b.nextZ;let g=c;for(;0<m||0<g&&b;){let l;0===m?(l=b,b=b.nextZ,g--):0!==g&&b?d.z<=b.z?(l=d,d=d.nextZ,m--):(l=b,b=b.nextZ,g--):(l=d,d=d.nextZ,m--);e?e.nextZ=l:a=l;l.prevZ=e;e=l}d=b}e.nextZ=null;c*=2;if(2>f)break a}return a}function p(a,e,c){return(e.y-a.y)*(c.x-e.x)-(e.x-a.x)*(c.y-e.y)}function O(a,e,c,d){return w(a,e)&&w(c,d)||w(a,d)&&w(c,e)?!0:0<p(a,e,c)!==
0<p(a,e,d)&&0<p(c,d,a)!==0<p(c,d,e)}function y(a,e,c,d,b,f,m,g){return 0<=(b-m)*(e-g)-(a-m)*(f-g)&&0<=(a-m)*(d-g)-(c-m)*(e-g)&&0<=(c-m)*(f-g)-(b-m)*(d-g)}function E(a,e){return 0>p(a.prev,a,a.next)?0<=p(a,e,a.next)&&0<=p(a,a.prev,e):0>p(a,e,a.prev)||0>p(a,a.next,e)}function H(a,e,c,d,b){a=32767*(a-c)*b;e=32767*(e-d)*b;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;e=(e|e<<8)&16711935;e=(e|e<<4)&252645135;e=(e|e<<2)&858993459;return(a|a<<1)&1431655765|((e|e<<1)&1431655765)<<1}function w(a,
e){return a.x===e.x&&a.y===e.y}function T(a,e){return a.x-e.x}function P(a,e){const c=G.create(a.index,a.x,a.y),d=G.create(e.index,e.x,e.y),b=a.next,f=e.prev;a.next=e;e.prev=a;c.next=b;b.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}let G=function(){function a(){this.y=this.x=this.index=0;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}a.create=function(e,c,d){const b=I<J.length?J[I++]:new a;b.index=e;b.x=c;b.y=d;b.prev=null;b.next=null;b.z=null;b.prevZ=null;b.nextZ=null;
b.steiner=!1;return b};return a}();const J=[];let I=0;for(let a=0;8096>a;a++)J.push(new G);K.bufcut=function(a,e,c,d,b,f,m){I=0;var g=(d-c)*f,l=b&&b.length;const n=l?(b[0]-c)*f:g;var k=L(e,c,d,0,n,f,!0);if(k&&k.next!==k.prev){var h;if(l){const D=[];for(let v=0,Q=b.length;v<Q;v++){const z=L(e,c,d,b[v]*f,v<Q-1?b[v+1]*f:d*f,f,!1);z===z.next&&(z.steiner=!0);l=D;var q=l.push;let x=z,F=z;do{if(x.x<F.x||x.x===F.x&&x.y<F.y)F=x;x=x.next}while(x!==z);q.call(l,F)}D.sort(T);for(var t of D)if(d=t,b=S(d,k))d=P(b,
d),B(d,d.next),k=B(b,b.next)}if(g>80*f){var u=g=e[c*f];var r=h=e[1+c*f];for(t=f;t<n;t+=f)d=e[t+c*f],b=e[t+1+c*f],u=Math.min(u,d),r=Math.min(r,b),g=Math.max(g,d),h=Math.max(h,b);h=Math.max(g-u,h-r);h=0!==h?1/h:0}C(k,a,f,u,r,h,m,0)}};Object.defineProperty(K,Symbol.toStringTag,{value:"Module"})});