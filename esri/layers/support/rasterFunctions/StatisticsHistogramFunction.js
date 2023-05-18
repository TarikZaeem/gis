// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./StatisticsHistogramFunctionArguments".split(" "),function(l,c,d,b,q,m,n,p){b=function(f){function e(){var a=f.apply(this,arguments)||this;a.functionName="StatisticsHistogram";a.functionArguments=null;a.rasterArgumentNames=["raster"];a.isNoopProcess=
!0;return a}l._inheritsLoose(e,f);var g=e.prototype;g._bindSourceRasters=function(){var a=this.sourceRasterInfos[0];this.outputPixelType=this._getOutputPixelType("u8");a=a.clone();const {statistics:h,histograms:k}=this.functionArguments;k&&(a.histograms=k);h&&(a.statistics=h);this.rasterInfo=a;return{success:!0,supportsGPU:!0}};g._processPixels=function(a){return a.pixelBlocks?.[0]};return e}(n);c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);
c.__decorate([d.property({type:p,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"indexedColormap",void 0);c.__decorate([d.property()],b.prototype,"isNoopProcess",void 0);return b=c.__decorate([m.subclass("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")],b)});