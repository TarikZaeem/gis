// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/Logger ../../core/maybe ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/Error ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/projection".split(" "),function(h,k,b,l,m,q,r,t,u,n,p){b=function(d){function c(){return d.apply(this,arguments)||this}h._inheritsLoose(c,d);c.prototype.projectOrWarn=function(a,e){if(m.isNone(a))return a;const {geometry:f,
pending:g}=p.projectOrLoad(a,e);return g?null:g||f?f:(l.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:a,sourceSpatialReference:a.spatialReference,targetSpatialReference:e}),null)};return c}(b.Clonable);return b=k.__decorate([n.subclass("esri.layers.support.GeoreferenceBase")],b)});