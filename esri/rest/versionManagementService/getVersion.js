// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../utils"],function(f,g,h,k,d){function e(){e=g._asyncToGenerator(function*(b,a,c){if(!a||1>a.length)throw new k("get-version:missing-guid","guid for version is missing");b=d.parseUrl(b);c=d.asValidOptions(b.query,{query:d.encode({f:"json"}),...c});a.startsWith("{")&&(a=a.slice(1,-1));({data:a}=yield h(`${b.path}/versions/${a}`,c));return a?a:null});return e.apply(this,arguments)}f.getVersion=function(b,
a,c){return e.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});