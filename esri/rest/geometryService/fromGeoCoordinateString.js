// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],function(f,h,k,g,l){function e(){e=h._asyncToGenerator(function*(b,a,d){const c={};c.sr=null!=a.sr&&"object"===typeof a.sr?a.sr.wkid||JSON.stringify(a.sr):a.sr;c.strings=JSON.stringify(a.strings);c.conversionType=l.conversionTypeKebabDict.toJSON(a.conversionType||"mgrs");c.conversionMode=a.conversionMode;b=g.parseUrl(b);d=g.asValidOptions({...b.query,f:"json",...c},d);return k(b.path+"/fromGeoCoordinateString",
d).then(({data:m})=>m.coordinates)});return e.apply(this,arguments)}f.fromGeoCoordinateString=function(b,a,d){return e.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});