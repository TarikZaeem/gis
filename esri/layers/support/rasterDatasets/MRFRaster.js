// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo ../RasterStorageInfo ./BaseRaster ./pamParser ./xmlUtilities ../rasterFormats/utils ../rasterFunctions/stretchUtils ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(A,B,y,C,D,E,S,T,L,M,N,O,P,H,q,Q,R,z,I,J){const t=new Map;t.set("Int8","s8");t.set("UInt8","u8");t.set("Int16","s16");t.set("UInt16","u16");t.set("Int32","s32");t.set("UInt32","u32");t.set("Float32","f32");t.set("Float64","f32");t.set("Double64","f32");const w=new Map;w.set("none",{blobExtension:".til",isOneSegment:!0,decoderFormat:"bip"});w.set("lerc",{blobExtension:".lrc",isOneSegment:!1,decoderFormat:"lerc"});w.set("deflate",{blobExtension:".pzp",isOneSegment:!0,decoderFormat:"deflate"});
w.set("jpeg",{blobExtension:".pjg",isOneSegment:!0,decoderFormat:"jpg"});y=function(K){function F(){var d=K.apply(this,arguments)||this;d._files=null;d._storageIndex=null;d.datasetFormat="MRF";return d}A._inheritsLoose(F,K);var x=F.prototype;x.open=function(){var d=A._asyncToGenerator(function*(a){yield this.init();this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);var b=a?D.unwrap(a.signal):null,e=yield this.request(this.url,{responseType:"xml",signal:b});const {rasterInfo:c,files:l}=this._parseHeader(e.data);
-1===this.ioConfig.skipExtensions?.indexOf("aux.xml")&&(a=yield this._fetchAuxiliaryData(a),null!=a&&(c.statistics=a.statistics??c.statistics,(c.histograms=a.histograms)&&D.isNone(c.statistics)&&(c.statistics=R.estimateStatisticsFromHistograms(a.histograms))));this._set("rasterInfo",c);this._files=l;b=yield this.request(l.index,{responseType:"array-buffer",signal:b});this._storageIndex=this._parseIndex(b.data);const {blockWidth:m,blockHeight:u}=this.rasterInfo.storageInfo;b=this.rasterInfo.storageInfo.pyramidScalingFactor;
const {width:f,height:r}=this.rasterInfo;a=[];e=this._getBandSegmentCount();let p=0,g=-1;for(;p<this._storageIndex.length;){g++;const h=Math.ceil(f/m/b**g)-1,k=Math.ceil(r/u/b**g)-1;p+=(h+1)*(k+1)*e*4;a.push({maxRow:k,maxCol:h,minCol:0,minRow:0})}this.rasterInfo.storageInfo.blockBoundary=a;0<g&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=g);this.updateTileInfo()});return function(a){return d.apply(this,arguments)}}();x.fetchRawTile=function(){var d=
A._asyncToGenerator(function*(a,b,e,c={}){const {blockWidth:l,blockHeight:m,blockBoundary:u}=this.rasterInfo.storageInfo;var f=u[a];if(!f||f.maxRow<b||f.maxCol<e||f.minRow>b||f.minCol>e)return null;const {bandCount:r,pixelType:p}=this.rasterInfo,{ranges:g,actualTileWidth:h,actualTileHeight:k}=this._getTileLocation(a,b,e);if(!g||0===g.length)return null;if(0===g[0].from&&0===g[0].to)return a=new Uint8Array(l*m),new M({width:l,height:m,pixels:null,mask:a,validPixelCount:0});({bandIds:b}=this.ioConfig);
e=this._getBandSegmentCount();f=[];for(a=a=0;a<e;a++)(!b||-1<b.indexOf[a])&&f.push(this.request(this._files.data,{range:{from:g[a].from,to:g[a].to},responseType:"array-buffer",signal:c.signal}));c=yield Promise.all(f);a=c.map(n=>n.data.byteLength).reduce((n,G)=>n+G);f=new Uint8Array(a);let v=0;for(a=0;a<e;a++)f.set(new Uint8Array(c[a].data),v),v+=c[a].data.byteLength;a=w.get(this.rasterInfo.storageInfo.compression).decoderFormat;b=yield this.decodePixelBlock(f.buffer,{width:l,height:m,format:a,planes:b?.length||
r,pixelType:p});if(null==b)return null;if(D.isSome(this.rasterInfo.noDataValue)&&"lerc"!==a&&!b.mask&&(c=this.rasterInfo.noDataValue[0],null!=c)){e=b.width*b.height;f=new Uint8Array(e);if(1E24<Math.abs(c))for(a=0;a<e;a++)1E-6<Math.abs((b.pixels[0][a]-c)/c)&&(f[a]=1);else for(a=0;a<e;a++)b.pixels[0][a]!==c&&(f[a]=1);b.mask=f}e=c=0;if(h!==l||k!==m)if(f=b.mask)for(a=0;a<m;a++)for(e=a*l,c=a<k?h:0;c<l;c++)f[e+c]=0;else for(f=new Uint8Array(l*m),b.mask=f,a=0;a<k;a++)for(e=a*l,c=0;c<h;c++)f[e+c]=1;return b});
return function(a,b,e){return d.apply(this,arguments)}}();x._parseIndex=function(d){if(0<d.byteLength%16)throw Error("invalid array buffer must be multiples of 16");let a,b,e,c,l;if(Q.isPlatformLittleEndian){a=new Uint8Array(d);e=new ArrayBuffer(d.byteLength);b=new Uint8Array(e);for(c=0;c<d.byteLength/4;c++)for(l=0;4>l;l++)b[4*c+l]=a[4*c+3-l];d=new Uint32Array(e)}else d=new Uint32Array(d);return d};x._getBandSegmentCount=function(){return w.get(this.rasterInfo.storageInfo.compression).isOneSegment?
1:this.rasterInfo.bandCount};x._getTileLocation=function(d,a,b){const {blockWidth:e,blockHeight:c,pyramidScalingFactor:l}=this.rasterInfo.storageInfo,{width:m,height:u}=this.rasterInfo,f=this._getBandSegmentCount();let r,p;var g,h=0;let k=0;for(g=0;g<d;g++)k=l**g,r=Math.ceil(m/e/k),p=Math.ceil(u/c/k),h+=r*p;k=l**d;r=Math.ceil(m/e/k);p=Math.ceil(u/c/k);h=4*(h+(a*r+b))*f;d=this._storageIndex.subarray(h,h+4*f);h=g=0;const v=[];for(let n=0;n<f;n++)g=d[4*n]*2**32+d[4*n+1],h=g+d[4*n+2]*2**32+d[4*n+3],v.push({from:g,
to:h});return{ranges:v,actualTileWidth:b<r-1?e:Math.ceil(m/k)-e*(r-1),actualTileHeight:a<p-1?c:Math.ceil(u/k)-c*(p-1)}};x._parseHeader=function(d){var a=q.getElement(d,"MRF_META/Raster");if(!a)throw new C("mrf:open","not a valid MRF format");var b=q.getElement(a,"Size"),e=parseInt(b.getAttribute("x"),10),c=parseInt(b.getAttribute("y"),10);const l=parseInt(b.getAttribute("c"),10);b=(q.getElementValue(a,"Compression")||"none").toLowerCase();if(!w.has(b))throw new C("mrf:open","currently does not support compression "+
b);var m=q.getElementValue(a,"DataType")||"UInt8";const u=t.get(m);if(null==u)throw new C("mrf:open","currently does not support pixel type "+m);var f=q.getElement(a,"PageSize");m=parseInt(f.getAttribute("x"),10);f=parseInt(f.getAttribute("y"),10);a=q.getElement(a,"DataValues");let r;a&&(a=a.getAttribute("NoData"),null!=a&&(r=a.trim().split(" ").map(G=>parseFloat(G))));if(q.getElement(d,"MRF_META/CachedSource"))throw new C("mrf:open","currently does not support MRF referencing other data files");
var p=q.getElement(d,"MRF_META/GeoTags"),g=q.getElement(p,"BoundingBox");a=!1;if(null!=g){var h=parseFloat(g.getAttribute("minx"));var k=parseFloat(g.getAttribute("miny")),v=parseFloat(g.getAttribute("maxx"));g=parseFloat(g.getAttribute("maxy"));var n=q.getElementValue(p,"Projection")||"";p=z.WGS84;"LOCAL_CS[]"!==n?n.toLowerCase().startsWith("epsg:")?(n=Number(n.slice(5)),isNaN(n)||0===n||(p=new z({wkid:n}))):p=H.parseSpatialReference(n)??z.WGS84:(a=!0,p=new z({wkid:3857}));h=new I(h,k,v,g);h.spatialReference=
p}else a=!0,h=new I({xmin:-.5,ymin:.5-c,xmax:e-.5,ymax:.5,spatialReference:new z({wkid:3857})});k=q.getElement(d,"MRF_META/Rsets");v=parseInt(k&&k.getAttribute("scale")||"2",10);k=h.spatialReference;m=new O({origin:new J({x:h.xmin,y:h.ymax,spatialReference:k}),blockWidth:m,blockHeight:f,pyramidBlockWidth:m,pyramidBlockHeight:f,compression:b,pyramidScalingFactor:v});f=new J({x:h.width/e,y:h.height/c,spatialReference:k});e=new N({width:e,height:c,extent:h,isPseudoSpatialReference:a,spatialReference:k,
bandCount:l,pixelType:u,pixelSize:f,noDataValue:r,storageInfo:m});c=q.getElementValue(d,"datafile");d=q.getElementValue(d,"IndexFile");d={mrf:this.url,index:d||this.url.replace(".mrf",".idx"),data:c||this.url.replace(".mrf",w.get(b).blobExtension)};return{rasterInfo:e,files:d}};x._fetchAuxiliaryData=function(){var d=A._asyncToGenerator(function*(a){try{const {data:b}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:a?.signal});return H.parsePAMInfo(b)}catch{return null}});return function(a){return d.apply(this,
arguments)}}();return F}(P);B.__decorate([E.property()],y.prototype,"_files",void 0);B.__decorate([E.property()],y.prototype,"_storageIndex",void 0);B.__decorate([E.property({type:String,json:{write:!0}})],y.prototype,"datasetFormat",void 0);return y=B.__decorate([L.subclass("esri.layers.support.rasterIO.MRFRaster")],y)});