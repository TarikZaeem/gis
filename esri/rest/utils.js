// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../config ../kernel ../core/lang ../core/urlUtils ../support/apiKeyUtils".split(" "),function(f,h,m,n,p,q){function k(b,c,l){const e={};for(const d in b)if("declaredClass"!==d){var a=b[d];if(null!=a&&"function"!==typeof a)if(Array.isArray(a)){e[d]=[];for(let g=0;g<a.length;g++)e[d][g]=k(a[g])}else"object"===typeof a?a.toJSON?(a=a.toJSON(l&&l[d]),e[d]=c?a:JSON.stringify(a)):e[d]=c?a:JSON.stringify(a):e[d]=a}return e}f.asValidOptions=function(b,c){return c?{...c,query:{...(b??{}),...c.query}}:
{query:b}};f.encode=k;f.getToken=function(b,c){return q.supportsApiKey(b)&&(c||h.apiKey)?c||h.apiKey:m.id?.findCredential(b)?.token};f.parseUrl=function(b){return"string"===typeof b?p.urlToObject(b):n.clone(b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});