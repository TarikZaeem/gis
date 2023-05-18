// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../support/requestPresets"],function(f,k,g){function c(){c=k._asyncToGenerator(function*(a,d){const b=yield g.fetchArcGISServiceJSON(a,d);b.layers=b.layers.filter(h);const e={serviceJSON:b};if(10.5>(b.currentVersion??0))return e;a=yield g.fetchArcGISServiceJSON(a+"/layers",d);e.layersJSON={layers:a.layers.filter(h),tables:a.tables};return e});return c.apply(this,arguments)}function h(a){return!a.type||"Feature Layer"===a.type}f.fetchFeatureService=
function(a,d){return c.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});