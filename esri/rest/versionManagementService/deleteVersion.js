// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],function(f,g,h,d){function e(){e=g._asyncToGenerator(function*(b,c,a){b=d.parseUrl(b);c=c.toJSON();a=d.asValidOptions(b.query,{query:d.encode({...c,f:"json"}),...a,method:"post"});({data:a}=yield h(`${b.path}/delete`,a));return a?a.success:null});return e.apply(this,arguments)}f.deleteVersion=function(b,c,a){return e.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});