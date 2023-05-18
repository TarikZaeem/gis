// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../RasterInfo ../RasterStorageInfo ./BaseRaster ./DBFParser ./pamParser ../rasterFormats/TiffDecoder ../rasterFormats/TiffTags ../rasterFunctions/stretchUtils ../rasterTransforms/PolynomialTransform ../../../rest/support/FeatureSet ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(z,E,A,J,B,H,aa,ba,P,Q,R,S,T,M,C,I,U,V,W,X,N,F){A=function(O){function K(){var d=O.apply(this,arguments)||this;d._files=null;d._headerInfo=null;d._bufferSize=1048576;d.datasetFormat="TIFF";return d}z._inheritsLoose(K,O);var x=K.prototype;x.open=function(){var d=z._asyncToGenerator(function*(a){yield this.init();var b=a?B.unwrap(a.signal):null,{data:c}=yield this.request(this.url,{range:{from:0,to:this._bufferSize},responseType:"array-buffer",signal:b});if(!c)throw new J("tiffraster:open",
"failed to open url "+this.url);this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1,this.url.lastIndexOf("."));const {littleEndian:e,firstIFDPos:g,isBigTiff:h}=C.parseSignature(c);var f=[];yield this._readIFDs(f,c,e,g,0,h?8:4,b);const {imageInfo:l,rasterInfo:k}=this._parseIFDs(f);b=C.getPyramidIFDs(f);c=C.getMaskIFDs(f);this._headerInfo={littleEndian:e,isBigTiff:h,ifds:f,pyramidIFDs:b,maskIFDs:c,...l};this._set("rasterInfo",k);if(!l.isSupported)throw new J("tiffraster:open","this tiff is not supported: "+
l.message);if(!l.tileWidth)throw new J("tiffraster:open","none-tiled tiff is not optimized for access, convert to COG and retry.");({skipExtensions:f=[]}=this.ioConfig);f.includes("aux.xml")||(b=yield this._fetchAuxiliaryMetaData(a),null!=b&&this._processPAMInfo(b,k));f.includes("vat.dbf")||1!==k.bandCount||"u8"!==k.pixelType||(k.attributeTable=yield this._fetchAuxiliaryTable(a),B.isSome(k.attributeTable)&&(k.keyProperties.DataType="thematic"));this.updateTileInfo()});return function(a){return d.apply(this,
arguments)}}();x.fetchRawTile=function(){var d=z._asyncToGenerator(function*(a,b,c,e={}){if(!this._headerInfo?.isSupported||this.isBlockOutside(a,b,c))return null;const g=yield this._fetchRawTiffTile(a,b,c,!1,e);B.isSome(g)&&this._headerInfo.hasMaskBand&&(a=yield this._fetchRawTiffTile(a,b,c,!0,e),B.isSome(a)&&a.pixels[0]instanceof Uint8Array&&(g.mask=a.pixels[0]));return g});return function(a,b,c){return d.apply(this,arguments)}}();x._parseIFDs=function(d){const a=C.getImageInfo(d),{width:b,height:c,
tileWidth:e,tileHeight:g,planes:h,pixelType:f,compression:l,firstPyramidLevel:k,maximumPyramidLevel:t,pyramidBlockWidth:u,pyramidBlockHeight:y,tileBoundary:v,affine:n,metadata:r}=a;let p=M.parseSpatialReference(a.extent.spatialReference?.wkt||a.extent.spatialReference?.wkid);var m=!!a.isPseudoGeographic;null==p&&(m=!0,p=new X({wkid:3857}));const q=new N({...a.extent,spatialReference:p});var w=q?new F({x:q.xmin,y:q.ymax,spatialReference:p}):new F({x:0,y:0});w=new R({blockWidth:e,blockHeight:g,pyramidBlockWidth:u,
pyramidBlockHeight:y,compression:l,origin:w,firstPyramidLevel:k,maximumPyramidLevel:t,blockBoundary:v});const Y=new F({x:(q.xmax-q.xmin)/b,y:(q.ymax-q.ymin)/c,spatialReference:p}),Z=r?{BandProperties:r.bandProperties,DataType:r.dataType}:{};let L=null;var G=d[0].get("PHOTOMETRICINTERPRETATION")?.values?.[0];d=d[0].get("COLORMAP")?.values;if(3>=G&&3<d?.length&&0===d.length%3){L=[];G=d.length/3;for(let D=0;D<G;D++)L.push([D,d[D]>>>8,d[D+G]>>>8,d[D+2*G]>>>8])}m=new Q({width:b,height:c,bandCount:h,pixelType:f,
pixelSize:Y,storageInfo:w,spatialReference:p,isPseudoSpatialReference:m,keyProperties:Z,extent:q,colormap:L,statistics:r?r.statistics:null});n?.length&&(m.nativeExtent=new N({xmin:-.5,ymin:.5-c,xmax:b-.5,ymax:.5,spatialReference:p}),m.transform=new V({polynomialOrder:1,forwardCoefficients:[n[2]+n[0]/2,n[5]-n[3]/2,n[0],n[3],-n[1],-n[4]]}),m.extent=m.transform.forwardTransform(m.nativeExtent),m.pixelSize=new F({x:(q.xmax-q.xmin)/b,y:(q.ymax-q.ymin)/c,spatialReference:p}),w.origin.x=-.5,w.origin.y=.5);
return{imageInfo:a,rasterInfo:m}};x._processPAMInfo=function(d,a){a.statistics=d.statistics??a.statistics;(a.histograms=d.histograms)&&B.isNone(a.statistics)&&(a.statistics=U.estimateStatisticsFromHistograms(d.histograms));if(d.transform&&B.isNone(a.transform)){a.transform=d.transform;a.nativeExtent=a.extent;const b=a.transform.forwardTransform(a.nativeExtent);a.pixelSize=new F({x:(b.xmax-b.xmin)/a.width,y:(b.ymax-b.ymin)/a.height,spatialReference:a.spatialReference});a.extent=b}a.isPseudoSpatialReference&&
d.spatialReference&&(a.spatialReference=d.spatialReference)};x._readIFDs=function(){var d=z._asyncToGenerator(function*(a,b,c,e,g,h=4,f){if(!e)return null;if(e>=b.byteLength||0>e)b=(yield this.request(this.url,{range:{from:e+g,to:e+g+this._bufferSize},responseType:"array-buffer",signal:f})).data,g=e+g,e=0;e=yield this._readIFD(b,c,e,g,I.TIFF_TAGS,h,f);a.push(e.ifd);if(!e.nextIFD)return null;yield this._readIFDs(a,b,c,e.nextIFD-g,g,h,f)});return function(a,b,c,e,g){return d.apply(this,arguments)}}();
x._readIFD=function(){var d=z._asyncToGenerator(function*(a,b,c,e,g=I.TIFF_TAGS,h=4,f){if(!a)return null;c=C.parseIFD(a,b,c,e,g,h);if(c.success){const l=[];c.ifd?.forEach(k=>{k.values||l.push(k)});0<l.length&&(h=l.map(k=>k.offlineOffsetSize).filter(B.isSome),g=Math.min.apply(null,h.map(k=>k[0])),Math.min.apply(null,h.map(k=>k[0]+k[1]))-g<=this._bufferSize&&({data:h}=yield this.request(this.url,{range:{from:g,to:g+this._bufferSize},responseType:"array-buffer",signal:f}),a=h,e=g,l.forEach(k=>C.parseFieldValues(a,
b,k,e))));c.ifd?.has("GEOKEYDIRECTORY")&&(g=c.ifd.get("GEOKEYDIRECTORY"),(h=g?.values)&&4<h.length&&(h=h[0]+"."+h[1]+"."+h[2],f=yield this._readIFD(a,b,g.valueOffset+6-e,e,I.GEO_KEYS,2,f),g.data=f.ifd,g.data&&g.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,values:[h]})));return c}if(c.requiredBufferSize&&c.requiredBufferSize!==a.byteLength)return a=(yield this.request(this.url,{range:{from:e,to:e+c.requiredBufferSize+4},responseType:"array-buffer",signal:f})).data,a.byteLength<
c.requiredBufferSize?null:this._readIFD(a,b,0,e,I.TIFF_TAGS,4,f)});return function(a,b,c,e){return d.apply(this,arguments)}}();x._fetchRawTiffTile=function(){var d=z._asyncToGenerator(function*(a,b,c,e,g={}){b=this._getTileLocation(a,b,c,e);if(!b)return null;const {ranges:h,actualTileWidth:f,actualTileHeight:l,ifd:k}=b;b=h.map(v=>this.request(this.url,{range:v,responseType:"array-buffer",signal:g.signal}));b=yield Promise.all(b);c=b.map(v=>v.data.byteLength).reduce((v,n)=>v+n);c=1===b.length?b[0].data:
new ArrayBuffer(c);e=[0];var t=[0];if(1<b.length){const v=new Uint8Array(c);for(let n=0,r=0;n<b.length;n++){const p=b[n].data;v.set(new Uint8Array(p),r);e[n]=r;r+=p.byteLength;t[n]=p.byteLength}}const {blockWidth:u,blockHeight:y}=this.getBlockWidthHeight(a);a=yield this.decodePixelBlock(c,{format:"tiff",customOptions:{headerInfo:this._headerInfo,ifd:k,offsets:e,sizes:t},width:u,height:y,planes:null,pixelType:null});if(null==a)return null;if(f!==u||l!==y)if(t=a.mask)for(b=0;b<y;b++)for(e=b*u,c=b<l?
f:0;c<u;c++)t[e+c]=0;else for(t=new Uint8Array(u*y),a.mask=t,b=0;b<l;b++)for(e=b*u,c=0;c<f;c++)t[e+c]=1;return a});return function(a,b,c,e){return d.apply(this,arguments)}}();x._getTileLocation=function(d,a,b,c=!1){const {firstPyramidLevel:e,blockBoundary:g}=this.rasterInfo.storageInfo;var h=0===d?0:d-(e-1);({_headerInfo:d}=this);if(!d)return null;c=c?d.maskIFDs[h]:0===h?d?.ifds[0]:d?.pyramidIFDs[h-1];if(!c)return null;var f=C.isBSQConfig(c,d);d=c.get("TILEOFFSETS")?.values;if(void 0===d)return null;
var l=c.get("TILEBYTECOUNTS")?.values;const {minRow:k,minCol:t,maxRow:u,maxCol:y}=g[h];if(a>u||b>y||a<k||b<t)return null;h=c.get("IMAGEWIDTH")?.values?.[0];const v=c.get("IMAGELENGTH")?.values?.[0],n=c.get("TILEWIDTH")?.values?.[0],r=c.get("TILELENGTH")?.values?.[0],p=f?this.rasterInfo.bandCount:1,m=p*a*(y+1)+b,q=[{from:d[m],to:d[m+p-1]+l[m+p-1]-1}];if(f){f=!0;for(let w=0;w<p;w++)if(d[m+w]+l[m+w]!==d[m+w+1]){f=!1;break}if(!f)for(f=0;f<p;f++)q[f]={from:d[m+f],to:d[m+f]+l[m+f]-1}}l=l[m];return null==
d[m]||null==l?null:{ranges:q,ifd:c,actualTileWidth:b===y?h%n||n:n,actualTileHeight:a===u?v%r||r:r}};x._fetchAuxiliaryMetaData=function(){var d=z._asyncToGenerator(function*(a){try{const {data:b}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:a?.signal});return M.parsePAMInfo(b)}catch{return null}});return function(a){return d.apply(this,arguments)}}();x._fetchAuxiliaryTable=function(){var d=z._asyncToGenerator(function*(a){try{const {data:b}=yield this.request(this.url+".vat.dbf",
{responseType:"array-buffer",signal:a?.signal}),c=T.parse(b);return c?.recordSet?W.fromJSON(c.recordSet):null}catch{return null}});return function(a){return d.apply(this,arguments)}}();return K}(S);E.__decorate([H.property()],A.prototype,"_files",void 0);E.__decorate([H.property()],A.prototype,"_headerInfo",void 0);E.__decorate([H.property()],A.prototype,"_bufferSize",void 0);E.__decorate([H.property({type:String,json:{write:!0}})],A.prototype,"datasetFormat",void 0);return A=E.__decorate([P.subclass("esri.layers.support.rasterDatasets.TIFFRaster")],
A)});