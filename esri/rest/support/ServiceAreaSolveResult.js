// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./FeatureSet ./NAMessage".split(" "),function(h,c,a,d,m,n,k,e,l){a=function(f){function g(b){b=f.call(this,b)||this;b.facilities=null;b.messages=null;b.pointBarriers=null;b.polylineBarriers=null;b.polygonBarriers=null;b.serviceAreaPolylines=null;b.serviceAreaPolygons=
null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);c.__decorate([d.property({type:e})],a.prototype,"facilities",void 0);c.__decorate([d.property({type:[l]})],a.prototype,"messages",void 0);c.__decorate([d.property({type:e,json:{read:{source:"barriers"}}})],a.prototype,"pointBarriers",void 0);c.__decorate([d.property({type:e})],a.prototype,"polylineBarriers",void 0);c.__decorate([d.property({type:e})],a.prototype,"polygonBarriers",void 0);c.__decorate([d.property({type:e,json:{read:{source:"saPolylines"}}})],
a.prototype,"serviceAreaPolylines",void 0);c.__decorate([d.property({type:e,json:{read:{source:"saPolygons"}}})],a.prototype,"serviceAreaPolygons",void 0);return a=c.__decorate([k.subclass("esri.rest.support.ServiceAreaSolveResult")],a)});