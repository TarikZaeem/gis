// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/GetVersionInfosResult"],function(f,g,h,d,k){function e(){e=g._asyncToGenerator(function*(b,c,a){b=d.parseUrl(b);c=c.toJSON();a=d.asValidOptions(b.query,{query:d.encode({...c,f:"json"}),...a});({data:a}=yield h(`${b.path}/versionInfos`,a));return a?k.fromJSON(a):null});return e.apply(this,arguments)}f.getVersionInfos=function(b,c,a){return e.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});