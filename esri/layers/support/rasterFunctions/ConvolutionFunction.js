// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../rasterFunctionConstants ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./ConvolutionFunctionArguments ./convolutionUtils".split(" "),function(q,k,r,l,f,z,t,d,u,v,w,x){f=function(p){function m(){var a=p.apply(this,arguments)||this;
a.functionName="Convolution";a.rasterArgumentNames=["raster"];return a}q._inheritsLoose(m,p);var n=m.prototype;n._bindSourceRasters=function(){const {convolutionType:a,rows:c,cols:g,kernel:e}=this.functionArguments;if(!Object.values(d.convolutionKernel).includes(a))return{success:!1,supportsGPU:!1,error:`convolution-function: the specified kernel type is not supported ${a}`};if(a!==d.convolutionKernel.none&&c*g!==e.length)return{success:!1,supportsGPU:!1,error:"convolution-function: the specified rows and cols do not match the length of the kernel"};
var b=this.sourceRasterInfos[0];this.outputPixelType=this._getOutputPixelType(b.pixelType);b=b.clone();b.pixelType=this.outputPixelType;const h=[d.convolutionKernel.none,d.convolutionKernel.sharpen,d.convolutionKernel.sharpen2,d.convolutionKernel.sharpening3x3,d.convolutionKernel.sharpening5x5];"u8"===this.outputPixelType||h.includes(a)||(b.statistics=null,b.histograms=null);b.colormap=null;b.attributeTable=null;this.rasterInfo=b;return{success:!0,supportsGPU:25>=e.length}};n._processPixels=function(a){a=
a.pixelBlocks?.[0];if(r.isNone(a)||this.functionArguments.convolutionType===d.convolutionKernel.none)return a;let {kernel:c,rows:g,cols:e}=this.functionArguments;const b=c.reduce((h,y)=>h+y);0!==b&&1!==b&&(c=c.map(h=>h/b));return x.convolute(a,{kernel:c,rows:g,cols:e,outputPixelType:this.outputPixelType})};n._getWebGLParameters=function(){let {kernel:a}=this.functionArguments;const c=a.reduce((e,b)=>e+b);0!==c&&1!==c&&(a=a.map(e=>e/c));const g=new Float32Array(25);g.set(a);return{kernelRows:this.functionArguments.rows,
kernelCols:this.functionArguments.cols,kernel:g,clampRange:u.getPixelValueRange(this.outputPixelType)}};return m}(v);k.__decorate([l.property({json:{write:!0,name:"rasterFunction"}})],f.prototype,"functionName",void 0);k.__decorate([l.property({type:w,json:{write:!0,name:"rasterFunctionArguments"}})],f.prototype,"functionArguments",void 0);k.__decorate([l.property()],f.prototype,"rasterArgumentNames",void 0);return f=k.__decorate([t.subclass("esri.layers.support.rasterFunctions.ConvolutionFunction")],
f)});