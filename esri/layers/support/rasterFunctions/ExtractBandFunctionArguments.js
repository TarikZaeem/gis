// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments ./pixelUtils".split(" "),function(h,b,f,a,n,k,l,m){var c;a=c=function(g){function d(){var e=g.apply(this,arguments)||this;e.bandIds=[];e.missingBandAction=m.MissingBandAction.bestMatch;return e}h._inheritsLoose(d,g);d.prototype.clone=function(){return new c({bandIds:[...this.bandIds],
missingBandAction:this.missingBandAction})};return d}(l);b.__decorate([f.property({json:{write:!0}})],a.prototype,"bandIds",void 0);b.__decorate([f.property({json:{write:!0}})],a.prototype,"missingBandAction",void 0);return a=c=b.__decorate([k.subclass("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")],a)});