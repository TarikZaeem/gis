// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(b,g,h,c){b.PrecipitationType=void 0;(function(a){a[a.Rain=0]="Rain";a[a.Snow=1]="Snow";a[a.COUNT=2]="COUNT"})(b.PrecipitationType||(b.PrecipitationType={}));let f=function(a){function d(){var e=a.apply(this,arguments)||this;e.type=b.PrecipitationType.Rain;return e}g._inheritsLoose(d,a);return d}(c.ShaderTechniqueConfiguration);h.__decorate([c.parameter({count:b.PrecipitationType.COUNT})],
f.prototype,"type",void 0);b.PrecipitationTechniqueConfiguration=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});