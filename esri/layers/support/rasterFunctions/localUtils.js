// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../PixelBlock","../rasterFunctionConstants","../rasterFormats/pixelRangeUtils"],function(v,N,k,p,O){function P(a,d=!1){var b=a.map(c=>c.mask);const e=b.filter(c=>N.isSome(c));var f=a[0].pixels[0].length;if(0===e.length)return(new Uint8Array(f)).fill(255);a=new Uint8Array(e[0]);if(1===e.length)return a;if(!d){for(d=1;d<e.length;d++)for(b=e[d],f=0;f<a.length;f++)a[f]&&(a[f]=b[f]?255:0);return a}if(e.length!==b.length)return(new Uint8Array(f)).fill(255);for(d=
1;d<e.length;d++)for(b=e[d],f=0;f<a.length;f++)0===a[f]&&(a[f]=b[f]?255:0);return a}function Q(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]+f[c];return b}function R(a,d,b){[a]=a;d=k.createEmptyBand("f32",a.length);d.set(a);return d}function S(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]-f[c];return b}function T(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||
d[c])b[c]=e[c]*f[c];return b}function U(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=Math.sign(a[f])*Math.floor(Math.abs(a[f]));return b}function z(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]/f[c];return b}function V(a,d,b){return z(a,d,"f32")}function W(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=Math.floor(e[c]/f[c]);return b}function X(a,d,b,e){a=
a[0];const f=a.length;b=k.createEmptyBand(b,f);if(e===p.localTrigonometricOperation.atanh){for(e=0;e<f;e++)if(d[e]){var c=a[e];1<=Math.abs(c)?d[e]=0:b[e]=Math.atanh(c)}return b}e=e===p.localTrigonometricOperation.asin?Math.asin:Math.acos;for(c=0;c<f;c++)if(d[c]){const g=a[c];1<Math.abs(g)?d[c]=0:b[c]=e(g)}return b}function Y(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])b[c]=e(a[c]);return b}function Z(a,d,b,e){const [f,c]=a;a=f.length;b=k.createEmptyBand(b,
a);for(let g=0;g<a;g++)if(!d||d[g])b[g]=e(f[g],c[g]);return b}function aa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]&f[c];return b}function A(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<<f[c];return b}function ba(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=~a[f];return b}function ca(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=
0;c<a;c++)if(!d||d[c])b[c]=e[c]|f[c];return b}function da(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>>f[c];return b}function ea(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]^f[c];return b}function fa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]&&f[c]?1:0;return b}function ha(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=
0;f<e;f++)if(!d||d[f])b[f]=a[f]?0:1;return b}function ia(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]||f[c]?1:0;return b}function ja(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=(e[c]?1:0)^(f[c]?1:0);return b}function ka(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]===f[c]?1:0;return b}function x(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,
f);const c=e===Math.E;for(let g=0;g<f;g++)if(!d||d[g])b[g]=c?Math.exp(a[g]):e**a[g];return b}function la(a,d,b){return x(a,d,b,10)}function ma(a,d,b){return x(a,d,b,2)}function na(a,d,b){return x(a,d,b,Math.E)}function y(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])0>=a[c]?d[c]=0:b[c]=e(a[c]);return b}function oa(a,d,b){return y(a,d,b,Math.log10)}function pa(a,d,b){return y(a,d,b,Math.log2)}function qa(a,d,b){return y(a,d,b,Math.log)}function ra(a,d,b){const [e,
f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>f[c]?1:0;return b}function sa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>=f[c]?1:0;return b}function ta(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<f[c]?1:0;return b}function ua(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<=f[c]?1:0;return b}function va(a,
d,b){[a]=a;a=a.length;b=k.createEmptyBand(b,a);if(!d)return b;for(let e=0;e<a;e++)b[e]=d[e]?0:1;return b}function wa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]%f[c];return b}function xa(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=-a[f];return b}function ya(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]===f[c]?0:1;return b}function za(a,d,b){const [e,
f]=a;a=e.length;b=k.createEmptyBand(b,a);const c=new Uint8Array(a);for(let g=0;g<a;g++)null!=d&&!d[g]||0!==e[g]||(b[g]=f[g],c[g]=255);return{band:b,mask:c}}function B(a,d,b){const [e,f,c]=a;a=e.length;b=k.createEmptyBand(b,a);for(let g=0;g<a;g++)if(!d||d[g])b[g]=e[g]?f[g]:c[g];return b}function C(a,d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=f[g];for(let l=1;l<e;l++){const n=a[l][g];h<n&&(h=n)}b[g]=h}return b}function D(a,
d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=f[g];for(let l=1;l<e;l++){const n=a[l][g];h>n&&(h=n)}b[g]=h}return b}function E(a,d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=f[g],l=h;for(let n=1;n<e;n++){const u=a[n][g];l<u?l=u:h>u&&(h=u)}b[g]=l-h}return b}function F(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,
f);for(let c=0;c<f;c++)if(!d||d[c]){let g=0;for(let h=0;h<e;h++)g+=a[h][c];b[c]=g/e}return b}function G(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])for(let g=0;g<e;g++)b[c]+=a[g][c];return b}function H(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);for(let h=0;h<f;h++)if(!d||d[h]){const l=new Float32Array(e);let n=0;for(var c=0;c<e;c++){var g=a[c];n+=g[h];l[c]=g[h]}n/=e;c=0;for(g=
0;g<e;g++)c+=(l[g]-n)**2;b[h]=Math.sqrt(c/e)}return b}function I(a,d,b){const e=a.length;if(2>e)return a[0];const f=Math.floor(e/2);var [c]=a;c=c.length;b=k.createEmptyBand(b,c);const g=new Float32Array(e),h=1===e%2;for(let l=0;l<c;l++)if(!d||d[l]){for(let n=0;n<e;n++)g[n]=a[n][l];g.sort();b[l]=h?g[f]:(g[f]+g[f-1])/2}return b}function J(a,d,b){const [e,f]=a;if(null==f)return e;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)d[c]&&(e[c]===f[c]?b[c]=e[c]:d[c]=0);return b}function K(a,d,b){const e=
a.length;if(2>=e)return J(a,d,b);const f=a[0].length;b=k.createEmptyBand(b,f);const c=new Map;for(let h=0;h<f;h++)if(!d||d[h]){c.clear();let l;for(var g=0;g<e;g++)l=a[g][h],c.set(l,c.has(l)?c.get(l)+1:1);let n=g=0;for(const u of c.keys())g=c.get(u),g>n&&(n=g,l=u);b[h]=l}return b}function L(a,d,b){const e=a.length;if(2>=e)return J(a,d,b);const f=a[0].length;b=k.createEmptyBand(b,f);const c=new Map;for(let h=0;h<f;h++)if(!d||d[h]){c.clear();let l;for(var g=0;g<e;g++)l=a[g][h],c.set(l,c.has(l)?c.get(l)+
1:1);g=0;let n=a.length;for(const u of c.keys())g=c.get(u),g<n&&(n=g,l=u);b[h]=l}return b}function M(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);const c=new Set;for(let g=0;g<f;g++)if(!d||d[g]){c.clear();let h;for(let l=0;l<e;l++)h=a[l][g],c.add(h);b[g]=c.size}return b}function Aa(a,d,b,e){let [f,c]=O.getPixelValueRange(b);if(b=b.startsWith("u")||b.startsWith("s"))f-=1E-5,c+=1E-5;for(let g=0;g<d.length;g++)if(d[g]){const h=a[g];isNaN(h)||h<f||h>c?d[g]=
0:e[g]=b?Math.round(h):h}}const t=new Map;t.set(p.localTrigonometricOperation.acos,[0,Math.PI]);t.set(p.localTrigonometricOperation.asin,[-Math.PI/2,Math.PI/2]);t.set(p.localTrigonometricOperation.atan,[-Math.PI/2,Math.PI/2]);t.set(p.localTrigonometricOperation.cos,[-1,1]);t.set(p.localTrigonometricOperation.sin,[-1,1]);t.set(p.localLogicalOperation.booleanAnd,[0,1]);t.set(p.localLogicalOperation.booleanNot,[0,1]);t.set(p.localLogicalOperation.booleanOr,[0,1]);t.set(p.localLogicalOperation.booleanXOr,
[0,1]);t.set(p.localLogicalOperation.equalTo,[0,1]);t.set(p.localLogicalOperation.notEqual,[0,1]);t.set(p.localLogicalOperation.greaterThan,[0,1]);t.set(p.localLogicalOperation.greaterThanEqual,[0,1]);t.set(p.localLogicalOperation.lessThan,[0,1]);t.set(p.localLogicalOperation.lessThanEqual,[0,1]);t.set(p.localLogicalOperation.isNull,[0,1]);const r=new Map,w=new Map,m=new Map,q=new Map;v.getOutputDomain=function(a){return t.get(a)};v.local=function(a,d,b={}){r.size||(r.set(4,Math.sqrt),r.set(6,Math.acos),
r.set(7,Math.asin),r.set(8,Math.atan),r.set(9,Math.atanh),r.set(10,Math.abs),r.set(21,Math.cos),r.set(22,Math.cosh),r.set(48,Math.floor),r.set(49,Math.ceil),r.set(51,Math.sin),r.set(52,Math.sinh),r.set(56,Math.tan),r.set(57,Math.tanh),r.set(59,Math.acosh),r.set(60,Math.asinh),r.set(65,Math.floor),w.set(5,Math.pow),w.set(61,Math.atan2),m.set(1,Q),m.set(2,S),m.set(3,T),m.set(11,aa),m.set(12,A),m.set(12,A),m.set(13,ba),m.set(14,ca),m.set(15,da),m.set(16,ea),m.set(17,fa),m.set(18,ha),m.set(19,ia),m.set(20,
ja),m.set(23,z),m.set(24,ka),m.set(25,na),m.set(26,la),m.set(27,ma),m.set(28,ra),m.set(29,sa),m.set(30,U),m.set(31,va),m.set(32,R),m.set(33,ta),m.set(34,ua),m.set(35,qa),m.set(36,oa),m.set(37,pa),m.set(44,wa),m.set(45,xa),m.set(46,ya),m.set(64,V),m.set(65,W),m.set(76,B),m.set(78,B),q.set(38,K),q.set(39,C),q.set(40,F),q.set(41,I),q.set(42,D),q.set(43,L),q.set(47,E),q.set(54,H),q.set(55,G),q.set(58,M),q.set(66,K),q.set(67,C),q.set(68,F),q.set(69,I),q.set(70,D),q.set(71,L),q.set(72,E),q.set(73,H),q.set(74,
G),q.set(75,M));var e=P(a,66<=d&&75>=d);const {outputPixelType:f="f32"}=b,c=!q.has(d)||b.processAsMultiband,g=c?a[0].pixels.length:1;b=[];for(let n=0;n<g;n++){var h=q.has(d)&&!c?a.flatMap(u=>u.pixels):a.map(u=>u.pixels[n]),l=!0;d===p.localConditionalOperation.setNull?(e=za(h,e,f),h=e.band,e=e.mask,l=!1):m.has(d)?h=m.get(d)(h,e,"f64"):r.has(d)?h=d===p.localTrigonometricOperation.asin||d===p.localTrigonometricOperation.acos||d===p.localTrigonometricOperation.atanh?X(h,e,"f64",d):Y(h,e,"f64",r.get(d)):
w.has(d)?h=Z(h,e,"f64",w.get(d)):q.has(d)?h=q.get(d)(h,e,"f64"):(h=h[0],l=!1);l&&d!==p.localLogicalOperation.isNull&&!t.has(d)&&(l=k.createEmptyBand(f,h.length),e||(e=(new Uint8Array(h.length)).fill(255)),Aa(h,e,f,l),h=l);b.push(h)}a=a[0];return new k({width:a.width,height:a.height,pixelType:f,mask:d===p.localLogicalOperation.isNull?null:e,pixels:b})};v.operandsCount=[0,2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,2,1,1,1,999,999,
1,1,999,1,1,2,999,999,2,2,999,999,999,999,999,999,999,999,999,999,3,999,3];Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});