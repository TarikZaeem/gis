// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo".split(" "),function(r,g,f,n,h,t,y,u,v,w){f=function(p){function q(){var a=p.apply(this,arguments)||this;a.functionArguments=null;a.readingBufferSize=0;a.id=-1;a.isNoopProcess=!1;a.rawInputBandIds=
[];a.isInputBandIdsSwizzled=!1;a.swizzledBandSelection=[];a.isBranch=!1;a._bindingResult=null;return a}r._inheritsLoose(q,p);var k=q.prototype;k.bind=function(a,c=!1,b=-1){this.id=b+1;b=this._getRasterValues();let d=!0;for(let m=0;m<b.length;m++){var e=b[m];if(n.isSome(e)&&this._isRasterFunctionValue(e)){e=e.bind(a,c,this.id+m);if(!e.success)return this._bindingResult=e;d=d&&e.supportsGPU}}if(!this.rasterInfo||c)return this.sourceRasterInfos=this._getSourceRasterInfos(a),this._bindingResult=this._bindSourceRasters(),
this._bindingResult.supportsGPU=d&&this._bindingResult.supportsGPU,this.processInputBandIds(),this._bindingResult;this._bindingResult={success:!0,supportsGPU:!0};this.processInputBandIds();return this._bindingResult};k.process=function(a){var c=this._getRasterValues();c=0===c.length?a.pixelBlocks??a.primaryPixelBlocks:c.map(b=>this._readRasterValue(b,a));return this._processPixels({...a,pixelBlocks:c})};k.processInputBandIds=function(){var a=this._getRasterValues().filter(this._isRasterFunctionValue);
if(1<a.length)return this.rawInputBandIds=a.map(b=>b.processInputBandIds()[0]),this.isInputBandIdsSwizzled=this.rawInputBandIds.some((b,d)=>b!==d),a=a.filter(b=>"ExtractBand"===b.functionName),a.length&&a.forEach((b,d)=>{b.isInputBandIdsSwizzled=!0;b.swizzledBandSelection=[d,d,d]}),this.rawInputBandIds;var c=a[0];if(c){if(a=c.processInputBandIds(),c.isInputBandIdsSwizzled)return this.rawInputBandIds=a}else{a=[];({bandCount:c}=this.sourceRasterInfos[0]);for(let b=0;b<c;b++)a.push(b)}a=this._getInputBandIds(a);
this.isInputBandIdsSwizzled=a.some((b,d)=>b!==d);return this.rawInputBandIds=a};k.getPrimaryRasters=function(){const a=[],c=[];this._getPrimaryRasters(this,a,c);return{rasters:a,rasterIds:c}};k.getWebGLProcessorDefinition=function(){const a=this._getWebGLParameters(),{raster:c,rasters:b}=this.functionArguments;b&&Array.isArray(b)&&b.length?(a.rasters=b.map(d=>this._isRasterFunctionValue(d)?d.getWebGLProcessorDefinition():"number"===typeof d?{name:"Constant",parameters:{value:d},pixelType:"f32",id:-1,
isNoopProcess:!1}:{name:"Identity",parameters:{value:d},pixelType:"f32",id:-1,isNoopProcess:!1}),a.rasters.some(d=>null!=d)||(a.rasters=null)):this._isRasterFunctionValue(c)&&(a.raster=c.getWebGLProcessorDefinition());return{name:this.functionName,parameters:a,pixelType:this.outputPixelType,id:this.id,isNoopProcess:this.isNoopProcess}};k.getFlatWebGLFunctionChain=function(){var a=this.getWebGLProcessorDefinition();if(!a)return null;const c=[a];({parameters:a}=a);for(a=a.rasters||a.raster&&[a.raster];a?.length;){c.unshift(...a);
var b=[];for(var d=0;d<a.length;d++){var {parameters:e}=a[d];e=e.rasters||e.raster&&[e.raster];e?.length&&b.push(...e)}a=b}for(a=c.length-1;0<=a;a--)c[a].isNoopProcess&&c.splice(a,1);a=!1;for(b=0;b<c.length;b++)d=c[b],d.id=c.length-b-1,{rasters:d}=d.parameters,a=a||null!=d&&1<d.length;return{hasBranches:a,functions:c}};k._getOutputPixelType=function(a){return"unknown"===this.outputPixelType?a:this.outputPixelType??a};k._getWebGLParameters=function(){return{}};k._getInputBandIds=function(a){return a};
k._isOutputRoundingNeeded=function(){const {outputPixelType:a}=this;return(a?.startsWith("u")||a?.startsWith("s"))??!1};k._getRasterValues=function(){const {rasterArgumentNames:a}=this;return"rasters"===a[0]?this.functionArguments.rasters??[]:a.map(c=>this.functionArguments[c])};k._getSourceRasterInfos=function(a){const c=this._getRasterValues(),{rasterInfos:b,rasterIds:d}=a;if(0===c.length)return b;const e=c.map(l=>{if(l&&"object"===typeof l&&"bind"in l&&l.rasterInfo)return l.rasterInfo;if("string"===
typeof l&&d.includes(l))return b[d.indexOf(l)];if("number"!==typeof l)return b[0]}),m=e.find(l=>l)??b[0];e.forEach((l,x)=>{void 0===l&&(e[x]=m)});return e};k._getPrimaryRasterId=function(a){return a?.url};k._getPrimaryRasters=function(a,c=[],b=[]){for(let e=0;e<a.sourceRasters.length;e++){var d=a.sourceRasters[e];if("number"!==typeof d)if("bind"in d)this._getPrimaryRasters(d,c,b);else{const m=this._getPrimaryRasterId(d);null==m||b.includes(m)||(this.mainPrimaryRasterId===m?(c.unshift(d),b.unshift(m)):
(c.push(d),b.push(m)))}}};k._isRasterFunctionValue=function(a){return null!=a&&"object"===typeof a&&"getWebGLProcessorDefinition"in a};k._readRasterValue=function(a,c){var {primaryPixelBlocks:b}=c;if(n.isNone(a)||"$$"===a)return a=b[0],n.isNone(a)?null:a.clone();if("string"===typeof a)return a=c.primaryRasterIds.indexOf(a),-1===a?null:b[a];if("number"===typeof a){b=b[0];if(n.isNone(b))return null;const {width:d,height:e,pixelType:m,mask:l}=b;b=l?new Uint8Array(l):null;c=new Float32Array(d*e);c.fill(a);
a=Array(this.sourceRasterInfos[0].bandCount).fill(c);return new v({width:d,height:e,pixelType:m,pixels:a,mask:b})}return a.process(c)};r._createClass(q,[{key:"supportsGPU",get:function(){return this._bindingResult.supportsGPU}}]);return q}(f.JSONSupport);g.__decorate([h.property({json:{write:!0}})],f.prototype,"functionName",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"functionArguments",void 0);g.__decorate([h.property()],f.prototype,"rasterArgumentNames",void 0);g.__decorate([h.property({json:{write:!0}}),
t.cast(p=>p?.toLowerCase())],f.prototype,"outputPixelType",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"mainPrimaryRasterId",void 0);g.__decorate([h.property()],f.prototype,"sourceRasters",void 0);g.__decorate([h.property({type:[w],json:{write:!0}})],f.prototype,"sourceRasterInfos",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"rasterInfo",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"readingBufferSize",void 0);g.__decorate([h.property({json:{write:!0}})],
f.prototype,"id",void 0);g.__decorate([h.property()],f.prototype,"isNoopProcess",void 0);g.__decorate([h.property()],f.prototype,"supportsGPU",null);g.__decorate([h.property()],f.prototype,"rawInputBandIds",void 0);g.__decorate([h.property()],f.prototype,"isInputBandIdsSwizzled",void 0);g.__decorate([h.property()],f.prototype,"swizzledBandSelection",void 0);g.__decorate([h.property()],f.prototype,"isBranch",void 0);g.__decorate([h.property()],f.prototype,"_bindingResult",void 0);return f=g.__decorate([u.subclass("esri.layers.support.rasterFunctions.BaseRasterFunction")],
f)});