// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./errorsupport","./shared","./sqlUtils"],function(k,l,p,r,C){function q(a){let b=0;for(let c=0;c<a.length;c++)b+=a[c];return b/a.length}function D(a){const b=q(a);let c=0;for(let d=0;d<a.length;d++)c+=(b-a[d])**2;return c/a.length}function E(a){const b=q(a);let c=0;for(let d=0;d<a.length;d++)c+=(b-a[d])**2;return c/(a.length-1)}function F(a){let b=0;for(let c=0;c<a.length;c++)b+=a[c];return b}function t(){t=l._asyncToGenerator(function*(a,
b,c){a=yield m(a,b,c,!0);return 0===a.length?null:Math.min.apply(Math,a)});return t.apply(this,arguments)}function u(){u=l._asyncToGenerator(function*(a,b,c){a=yield m(a,b,c,!0);return 0===a.length?null:Math.max.apply(Math,a)});return u.apply(this,arguments)}function v(){v=l._asyncToGenerator(function*(a,b,c){var d="";b&&!C.isSingleField(b)&&(d=C.predictType(b,a.fields));a=yield m(a,b,c,!0);if(0===a.length)return null;a=q(a);return null===a?a:"integer"===d?(d=+a,d=isFinite(d)?d-d%1||(0>d?-0:0===d?
d:0):d,d):a});return v.apply(this,arguments)}function w(){w=l._asyncToGenerator(function*(a,b,c){a=yield m(a,b,c,!0);return 0===a.length?null:E(a)});return w.apply(this,arguments)}function x(){x=l._asyncToGenerator(function*(a,b,c){a=yield m(a,b,c,!0);return 0===a.length?null:Math.sqrt(E(a))});return x.apply(this,arguments)}function y(){y=l._asyncToGenerator(function*(a,b,c){a=yield m(a,b,c,!0);return 0===a.length?null:F(a)});return y.apply(this,arguments)}function z(){z=l._asyncToGenerator(function*(a,
b){return a.iterator(b).count()});return z.apply(this,arguments)}function m(a,b,c){return A.apply(this,arguments)}function A(){A=l._asyncToGenerator(function*(a,b,c,d=!1){a=a.iterator(c);const g=[];for(var h=0,e=yield a.next();null!==e;){h++;if(c.aborted)throw new p.FeatureSetError(p.FeatureSetErrorCodes.Cancelled);0===h%100&&(h=0,yield new Promise(f=>{setTimeout(f,0)}));e=b?.calculateValue(e);null===e?!1===d&&(g[g.length]=e):g[g.length]=e;e=yield a.next()}return g});return A.apply(this,arguments)}
function B(){B=l._asyncToGenerator(function*(a,b,c=1E3,d=null){a=a.iterator(d);const g=[],h={};for(var e=0,f=yield a.next();null!==f;){e++;if(d&&d.aborted)throw new p.FeatureSetError(p.FeatureSetErrorCodes.Cancelled);0===e%100&&(e=0,yield new Promise(n=>{setTimeout(n,0)}));f=b?.calculateValue(f);void 0!==f&&null!==f&&void 0===h[f]&&(g.push(f),h[f]=1);if(g.length>=c&&-1!==c)break;f=yield a.next()}return g});return B.apply(this,arguments)}k.calculateStat=function(a,b,c=1E3){switch(a.toLowerCase()){case "distinct":a:{a=
[];const d={},g=[];for(let h=0;h<b.length;h++){if(void 0!==b[h]&&null!==b[h]){const e=b[h];if(r.isNumber(e)||r.isString(e))void 0===d[e]&&(a.push(e),d[e]=1);else{let f=!1;for(let n=0;n<g.length;n++)!0===r.equalityTest(g[n],e)&&(f=!0);!1===f&&(g.push(e),a.push(e))}}if(a.length>=c&&-1!==c){b=a;break a}}b=a}return b;case "avg":case "mean":return q(b);case "min":return Math.min.apply(Math,b);case "sum":return F(b);case "max":return Math.max.apply(Math,b);case "stdev":case "stddev":return Math.sqrt(D(b));
case "var":case "variance":return D(b);case "count":return b.length}return 0};k.count=function(a,b){return z.apply(this,arguments)};k.decodeStatType=function(a){switch(a.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};k.distinct=function(a,b){return B.apply(this,arguments)};k.max=
function(a,b,c){return u.apply(this,arguments)};k.mean=function(a,b,c){return v.apply(this,arguments)};k.min=function(a,b,c){return t.apply(this,arguments)};k.stdev=function(a,b,c){return x.apply(this,arguments)};k.sum=function(a,b,c){return y.apply(this,arguments)};k.variance=function(a,b,c){return w.apply(this,arguments)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});