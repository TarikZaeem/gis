// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,e,k,l,h){a=function(f){function d(b){b=f.call(this,b)||this;b.field=null;b.type=null;return b}g._inheritsLoose(d,f);d.prototype.clone=function(){console.warn(".clone() is not implemented for "+this.declaredClass);return null};return d}(a.JSONSupport);
c.__decorate([e.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"field",void 0);c.__decorate([e.property({readOnly:!0,nonNullable:!0,json:{read:!1}})],a.prototype,"type",void 0);return a=c.__decorate([h.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],a)});