// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./BandArithmeticFunctionArguments ./bandIndexUtils ./BaseRasterFunction".split(" "),function(p,h,q,l,g,w,r,t,d,u){const v=new Set(["vari","mtvi2","rtvi-core","evi"]);g=function(n){function m(){var b=n.apply(this,arguments)||this;b.functionName=
"BandArithmetic";b.functionArguments=null;b.rasterArgumentNames=["raster"];return b}p._inheritsLoose(m,n);var k=m.prototype;k._bindSourceRasters=function(){this.outputPixelType=this._getOutputPixelType("f32");const b=this.sourceRasterInfos[0],a=b.clone();a.pixelType=this.outputPixelType;a.statistics=null;a.histograms=null;a.bandCount="sultan"===this.functionArguments.method?b.bandCount:1;this.rasterInfo=a;return{success:!0,supportsGPU:!["custom","gvitm","sultan"].includes(this.functionArguments.method)}};
k._processPixels=function(b){b=b.pixelBlocks?.[0];if(q.isNone(b))return b;const {method:a,bandIndexes:e}=this.functionArguments,c=e.split(" ").map(f=>parseFloat(f));return d.calculateBandIndex(b,{method:a,bandIndexes:c,equation:e})};k._getWebGLParameters=function(){const b=this.functionArguments.bandIndexes.split(" ").map(f=>parseFloat(f)-1);2===b.length&&b.push(0);var a=this.isInputBandIdsSwizzled?[0,1,2]:b;const e=new Float32Array(3);({method:c}=this.functionArguments);switch(c){case "gndvi":case "nbr":case "ndbi":case "ndvi":case "ndvi-re":case "ndsi":case "ndmi":case "mndwi":a=
d.getBandMatrix3([a[0],a[1],0]);var c="ndxi";break;case "ndwi":a=d.getBandMatrix3([a[1],a[0],0]);c="ndxi";break;case "sr":case "sr-re":case "iron-oxide":case "ferrous-minerals":case "clay-minerals":a=d.getBandMatrix3([a[0],a[1],0]);c="sr";break;case "ci-g":case "ci-re":a=d.getBandMatrix3([a[0],a[1],0]);c="ci";break;case "savi":a=d.getBandMatrix3([a[0],a[1],0]);c="savi";e[0]=b[2]+1;break;case "tsavi":a=d.getBandMatrix3([a[0],a[1],0]);c="tsavi";e[0]=b[2]+1;e[1]=b[3]+1;e[2]=b[4]+1;break;case "msavi":a=
d.getBandMatrix3([a[0],a[1],0]);c="msavi";break;case "gemi":a=d.getBandMatrix3([a[0],a[1],0]);c="gemi";break;case "pvi":a=d.getBandMatrix3([a[0],a[1],0]);c="tsavi";e[0]=b[2]+1;e[1]=b[3]+1;break;case "vari":a=d.getBandMatrix3([a[0],a[1],a[2]]);c="vari";break;case "mtvi2":a=d.getBandMatrix3([a[0],a[1],a[2]]);c="mtvi2";break;case "rtvi-core":a=d.getBandMatrix3([a[0],a[1],a[2]]);c="rtvicore";break;case "evi":a=d.getBandMatrix3([a[0],a[1],a[2]]);c="evi";break;case "wndwi":a=d.getBandMatrix3([a[0],a[1],
0]);c="wndwi";e[0]=b[3]?b[3]+1:.5;break;case "bai":a=d.getBandMatrix3([a[1],a[0],0]);c="bai";break;default:a=d.getBandMatrix3([0,1,2]),c="custom"}return{bandIndexMat3:a,indexType:c,adjustments:e}};k._getInputBandIds=function(b){if("custom"===this.functionArguments.method)return b;var a=this.functionArguments.bandIndexes.split(" ").map(f=>parseFloat(f)-1);const e=b.length;a=a.map(f=>f>=e?e-1:f);const c=v.has(this.functionArguments.method)?3:2;a=a.slice(0,c).map(f=>b[f]);2===a.length&&a.push(0);return a};
return m}(u);h.__decorate([l.property({json:{write:!0,name:"rasterFunction"}})],g.prototype,"functionName",void 0);h.__decorate([l.property({type:t,json:{write:!0,name:"rasterFunctionArguments"}})],g.prototype,"functionArguments",void 0);h.__decorate([l.property()],g.prototype,"rasterArgumentNames",void 0);return g=h.__decorate([r.subclass("esri.layers.support.rasterFunctions.BandArithmeticFunction")],g)});