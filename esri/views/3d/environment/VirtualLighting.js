// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../webscene/VirtualLighting".split(" "),function(l,c,b,f,p,q,m,n){var d;b=d=function(h){function e(a){a=h.call(this,a)||this;a.ambientOcclusionEnabled=!1;a.waterReflectionEnabled=!1;a.cameraTrackingEnabled=!0;return a}l._inheritsLoose(e,
h);var g=e.prototype;g.clone=function(){return new d({...this.cloneConstructProperties(),ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled,cameraTrackingEnabled:this.cameraTrackingEnabled})};e.fromWebsceneLighting=function(a){return new d(a.cloneConstructProperties())};g.cloneWithWebsceneLighting=function(a){const k=this.clone();k.directShadowsEnabled=a.directShadowsEnabled;return k};g.cloneNonPersistentConstructProperties=function(){return{ambientOcclusionEnabled:this.ambientOcclusionEnabled,
waterReflectionEnabled:this.waterReflectionEnabled,cameraTrackingEnabled:this.cameraTrackingEnabled}};return e}(b.EventedMixin(n));c.__decorate([f.property({type:Boolean})],b.prototype,"ambientOcclusionEnabled",void 0);c.__decorate([f.property({type:Boolean})],b.prototype,"waterReflectionEnabled",void 0);c.__decorate([f.property({type:Boolean})],b.prototype,"cameraTrackingEnabled",void 0);return b=d=c.__decorate([m.subclass("esri.views.3d.environment.VirtualLighting")],b)});