// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../state/Constraints".split(" "),function(a,h,b,k,d,m,n,l,e){a.AltitudeConstraint=function(f){function g(){var c=f.apply(this,arguments)||this;c.min=e.earthAltitudeConstraint.min;c.max=e.earthAltitudeConstraint.max;return c}h._inheritsLoose(g,
f);return g}(k);b.__decorate([d.property({type:Number})],a.AltitudeConstraint.prototype,"min",void 0);b.__decorate([d.property({type:Number})],a.AltitudeConstraint.prototype,"max",void 0);a.AltitudeConstraint=b.__decorate([l.subclass("esri.views.3d.constraints.AltitudeConstraint")],a.AltitudeConstraint);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});