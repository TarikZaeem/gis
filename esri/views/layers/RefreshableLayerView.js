// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(f,c,g,h,k,l,p,q,m){return a=>{a=function(d){function b(){return d.apply(this,arguments)||this}f._inheritsLoose(b,d);b.prototype.initialize=function(){this.handles.add(k.on(()=>this.layer,"refresh",
n=>{this.doRefresh(n.dataChanged).catch(e=>{h.isAbortError(e)||g.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")};return b}(a);c.__decorate([l.property()],a.prototype,"layer",void 0);return a=c.__decorate([m.subclass("esri.layers.mixins.RefreshableLayerView")],a)}});