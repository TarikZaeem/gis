// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(a,h,b,k,f,c,n,l){var d;a.WMTSLayerInfo=d=function(g){function e(m){return g.call(this,m)||this}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({customLayerParameters:f.clone(this.customLayerParameters),customParameters:f.clone(this.customParameters),
layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})};return e}(k.JSONSupport);b.__decorate([c.property({json:{type:Object,write:!0}})],a.WMTSLayerInfo.prototype,"customLayerParameters",void 0);b.__decorate([c.property({json:{type:Object,write:!0}})],a.WMTSLayerInfo.prototype,"customParameters",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.WMTSLayerInfo.prototype,"layerIdentifier",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],
a.WMTSLayerInfo.prototype,"tileMatrixSet",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.WMTSLayerInfo.prototype,"url",void 0);a.WMTSLayerInfo=d=b.__decorate([l.subclass("esri.layer.support.WMTSLayerInfo")],a.WMTSLayerInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});