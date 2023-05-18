// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass".split(" "),function(a,g,b,h,d,l,m,k){a.RangeInfo=function(e){function f(){var c=e.apply(this,arguments)||this;c.name=null;c.field=null;c.currentRangeExtent=null;c.fullRangeExtent=null;c.type="rangeInfo";return c}g._inheritsLoose(f,e);return f}(h.JSONSupport);
b.__decorate([d.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,"name",void 0);b.__decorate([d.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,"field",void 0);b.__decorate([d.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"currentRangeExtent",void 0);b.__decorate([d.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"fullRangeExtent",void 0);b.__decorate([d.property({type:["rangeInfo"],readOnly:!0,json:{read:!1,
write:!0}})],a.RangeInfo.prototype,"type",void 0);a.RangeInfo=b.__decorate([k.subclass("esri.layers.support.RangeInfo")],a.RangeInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});