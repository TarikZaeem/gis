// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],function(c,f,g,h,k){function b(){b=f._asyncToGenerator(function*(a,d,e){a=g.parseUrl(a);return h.executeQueryForCount(a,k.from(d),{...e}).then(l=>l.data.count)});return b.apply(this,arguments)}c.executeForCount=function(a,d,e){return b.apply(this,arguments)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});