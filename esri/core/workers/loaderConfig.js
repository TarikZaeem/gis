// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../assets","../has","../urlUtils"],function(c,d,m,e){c.DEFAULT_LOADER_URL=null;c.DEFAULT_LOADER_URL=e.makeAbsolute(d.getAssetUrl("esri/core/workers/init.js"));var h=e.makeAbsolute(d.getAssetUrl("dojo/"));var k=[{name:"esri",location:"../esri"}];c.loaderConfig=function(a){const b={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages&&a.packages.concat()||[],paths:{...a.paths}};a.hasOwnProperty("async")||(b.async=!0);
a.hasOwnProperty("isDebug")||(b.isDebug=!1);a.baseUrl||(b.baseUrl=h);k?.forEach(f=>{a:{var g=b.packages??[];for(const l of g)if(l.name===f.name)break a;g.push(f)}});return b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});