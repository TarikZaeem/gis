// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../request ../../../core/Error ../../utils ./support/PostResult".split(" "),function(f,k,l,m,d,n){function e(){e=k._asyncToGenerator(function*(c,a,b,g){if(!a)throw new m("post:missing-guid","guid for version is missing");c=d.parseUrl(c);const h=b.toJSON();b.rows&&(h.rows=JSON.stringify(b.rows));b=d.asValidOptions(c.query,{query:d.encode({...h,f:"json"}),...g,method:"post"});a.startsWith("{")&&(a=a.slice(1,-1));({data:a}=yield l(`${c.path}/versions/${a}/post`,
b));return n.fromJSON(a)});return e.apply(this,arguments)}f.post=function(c,a,b,g){return e.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});