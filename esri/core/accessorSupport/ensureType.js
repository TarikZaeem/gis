// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../has","../Logger","../MapUtils"],function(e,T,N,O){function B(a){return null==a?a:new Date(a)}function C(a){return null==a?a:!!a}function D(a){return null==a?a:a.toString()}function E(a){if(null==a)return a;a=parseFloat(a);return isNaN(a)?0:a}function F(a){return null==a?a:Math.round(parseFloat(a))}function x(a){return a&&a.constructor&&void 0!==a.constructor.__accessorMetadata__}function q(a,b){return null!=b&&a&&!(b instanceof a)}function G(a){return a&&a.Type?"function"===
typeof a.Type?a.Type:a.Type.base:null}function P(a,b){var c;(c=!b||!b.constructor)||(c=b.constructor,c=!(c&&"isCollection"in c));if(c)return y(a,b)?b:new a(b);c=G(a.prototype.itemType);const f=G(b.constructor.prototype.itemType);if(!c)return b;if(!f)return new a(b);if(c===f)return b;if(c.prototype.isPrototypeOf(f.prototype))return new a(b);y(a,b);return b}function y(a,b){return x(b)?(n.error("Accessor#set","Assigning an instance of '"+(b.declaredClass||"unknown")+"' which is not a subclass of '"+
u(a)+"'"),!0):!1}function H(a,b){return null==b?b:a&&"isCollection"in a?P(a,b):q(a,b)?y(a,b)?b:new a(b):b}function u(a){return a&&a.prototype&&a.prototype.declaredClass||"unknown"}function Q(a){switch(a){case Number:return E;case v:return F;case Boolean:return C;case String:return D;case Date:return B;default:return O.getOrCreateMapValue(R,a,()=>H.bind(null,a))}}function m(a,b){const c=Q(a);return 1===arguments.length?c:c(b)}function r(a,b,c){return 1===arguments.length?r.bind(null,a):b?Array.isArray(b)?
b.map(f=>a(f,c)):[a(b,c)]:b}function I(a,b,c){return 0!==b&&Array.isArray(c)?c.map(f=>I(a,b-1,f)):a(c)}function w(a,b,c){if(2===arguments.length)return w.bind(null,a,b);if(!c)return c;c=I(a,b,c);let f=b;for(var h=c;0<f&&Array.isArray(h);)f--,h=h[0];if(void 0!==h)for(h=0;h<f;h++)c=[c];return c}function J(a,b){if(2===arguments.length)return J(a).call(null,b);const c=new Set,f=a.filter(d=>"function"!==typeof d),h=a.filter(d=>"function"===typeof d);for(const d of a)"string"!==typeof d&&"number"!==typeof d||
c.add(d);let t=null,g=null;return(d,p)=>{if(null==d)return d;const l=typeof d,K="string"===l||"number"===l;if(K&&(c.has(d)||h.some(k=>"string"===l&&k===String||"number"===l&&k===Number))||"object"===l&&h.some(k=>!q(d,k)))return d;K&&f.length?(t||(t=f.map(k=>"string"===typeof k?`'${k}'`:`${k}`).join(", ")),n.error("Accessor#set",`'${d}' is not a valid value for this property, only the following values are valid: ${t}`)):"object"===typeof d&&h.length?(g||(g=h.map(k=>u(k)).join(", ")),n.error("Accessor#set",
`'${d}' is not a valid value for this property, value must be one of ${g}`)):n.error("Accessor#set",`'${d}' is not a valid value for this property`);p&&(p.valid=!1);return null}}function L(a,b){if(2===arguments.length)return L(a).call(null,b);const c={},f=[],h=[];for(const g in a.typeMap){const d=a.typeMap[g];c[g]=m(d);f.push(u(d));h.push(g)}const t="string"===typeof a.key?g=>g[a.key]:a.key;return g=>{if(a.base&&!q(a.base,g)||null==g)return g;var d=t(g)||a.defaultKeyValue;const p=c[d];if(!p)return n.error("Accessor#set",
`Invalid property value, value needs to be one of ${`'${f.join("', '")}'`}, or a plain object that can autocast (having .type = ${`'${h.join("', '")}'`})`),null;if(!q(a.typeMap[d],g))return g;if("string"===typeof a.key&&!x(g)){d={};for(const l in g)l!==a.key&&(d[l]=g[l]);return p(d)}return p(g)}}function M(a){switch(a.type){case "native":return m(a.value);case "array":return r(M(a.value));case "one-of":return S(a);default:return null}}function S(a){let b=null;return(c,f)=>{if(z(c,a))return c;null==
b&&(b=A(a));n.error("Accessor#set",`Invalid property value, value needs to be of type ${b}`);f&&(f.valid=!1);return null}}function A(a){switch(a.type){case "native":switch(a.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case v:return"integer";case Date:return"date";default:return u(a.value)}case "array":return`array of ${A(a.value)}`;case "one-of":return a=a.values.map(b=>A(b)),`one of ${a.slice(0,a.length-1)} or ${a[a.length-1]}`}return"unknown"}function z(a,
b){if(null==a)return!0;switch(b.type){case "native":switch(b.value){case Number:case v:return"number"===typeof a;case Boolean:return"boolean"===typeof a;case String:return"string"===typeof a}return a instanceof b.value;case "array":return Array.isArray(a)?!a.some(c=>!z(c,b.value)):!1;case "one-of":return b.values.some(c=>z(a,c))}}const n=N.getLogger("esri.core.accessorSupport.ensureTypes"),R=new WeakMap;let v=function(){};e.Integer=v;e.ensureArray=function(a,b){return 1===arguments.length?r(m.bind(null,
a)):r(m.bind(null,a),b)};e.ensureArrayTyped=r;e.ensureBoolean=C;e.ensureClass=H;e.ensureDate=B;e.ensureInteger=F;e.ensureLongFormType=M;e.ensureNArray=function(a,b,c){return 2===arguments.length?w(m.bind(null,a),b):w(m.bind(null,a),b,c)};e.ensureNArrayTyped=w;e.ensureNumber=E;e.ensureOneOf=J;e.ensureOneOfType=L;e.ensureString=D;e.ensureType=m;e.isClassedType=x;e.isLongFormType=function(a){if(!(a&&"type"in a))return!1;switch(a.type){case "native":case "array":case "one-of":return!0}return!1};e.isOneOf=
function(a){return Array.isArray(a)?!a.some(b=>{b=typeof b;return!("string"===b||"number"===b||"function"===b&&1<a.length)}):!1};e.requiresType=q;e.types={native(a){return{type:"native",value:a}},array(a){return{type:"array",value:a}},oneOf(a){return{type:"one-of",values:a}}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});