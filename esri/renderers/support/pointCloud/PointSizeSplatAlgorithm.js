// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass ./PointSizeAlgorithm".split(" "),function(g,b,h,a,n,k,l,m){var c;a=c=function(f){function d(){var e=f.apply(this,arguments)||this;e.type="splat";e.scaleFactor=1;return e}g._inheritsLoose(d,f);d.prototype.clone=
function(){return new c({scaleFactor:this.scaleFactor})};return d}(m);b.__decorate([k.enumeration({pointCloudSplatAlgorithm:"splat"})],a.prototype,"type",void 0);b.__decorate([h.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],a.prototype,"scaleFactor",void 0);return a=c=b.__decorate([l.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],a)});