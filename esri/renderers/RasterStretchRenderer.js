// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./support/stretchRendererUtils ../rest/support/colorRamps".split(" "),function(r,c,b,f,d,x,t,n,u,v,e,p){var k;b=k=function(q){function l(a){a=q.call(this,
a)||this;a.colorRamp=null;a.computeGamma=!1;a.dynamicRangeAdjustment=!1;a.gamma=[];a.maxPercent=null;a.minPercent=null;a.numberOfStandardDeviations=null;a.outputMax=null;a.outputMin=null;a.sigmoidStrengthLevel=null;a.statistics=[];a.histograms=null;a.useGamma=!1;a.stretchType="none";a.type="raster-stretch";return a}r._inheritsLoose(l,q);var g=l.prototype;g.readColorRamp=function(a){if(a)return p.fromJSON(a)};g.writeStatistics=function(a,m,w){a?.length&&(Array.isArray(a[0])||(a=a.map(h=>[h.min,h.max,
h.avg,h.stddev])),m[w]=a)};g.readStretchType=function(a,m){a=m.stretchType;"number"===typeof a&&(a=e.stretchTypeFunctionEnum[a]);return e.stretchTypeJSONDict.read(a)};g.clone=function(){return new k({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:f.clone(this.statistics),gamma:f.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,
minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:f.clone(this.colorRamp),histograms:f.clone(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})};return l}(b.JSONSupport);c.__decorate([d.property({types:p.types,json:{write:!0}})],b.prototype,"colorRamp",void 0);c.__decorate([n.reader("colorRamp")],b.prototype,"readColorRamp",null);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"computeGamma",void 0);c.__decorate([d.property({type:Boolean,json:{write:{target:"dra"},
read:{source:"dra"}}})],b.prototype,"dynamicRangeAdjustment",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],b.prototype,"gamma",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"maxPercent",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"minPercent",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"numberOfStandardDeviations",void 0);c.__decorate([d.property({type:Number,json:{read:{source:"max"},
write:{target:"max"}}})],b.prototype,"outputMax",void 0);c.__decorate([d.property({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],b.prototype,"outputMin",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"sigmoidStrengthLevel",void 0);c.__decorate([d.property({json:{type:[[Number]],write:!0}})],b.prototype,"statistics",void 0);c.__decorate([d.property()],b.prototype,"histograms",void 0);c.__decorate([v.writer("statistics")],b.prototype,"writeStatistics",
null);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"useGamma",void 0);c.__decorate([d.property({type:e.stretchTypeJSONDict.apiValues,json:{type:e.stretchTypeJSONDict.jsonValues,write:e.stretchTypeJSONDict.write}})],b.prototype,"stretchType",void 0);c.__decorate([n.reader("stretchType",["stretchType"])],b.prototype,"readStretchType",null);c.__decorate([t.enumeration({rasterStretch:"raster-stretch"})],b.prototype,"type",void 0);return b=k=c.__decorate([u.subclass("esri.renderers.RasterStretchRenderer")],
b)});