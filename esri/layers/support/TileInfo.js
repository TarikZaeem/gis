// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/maybe ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/aaBoundingRect ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ./LOD ./TileKey".split(" "),
function(A,l,z,g,F,G,n,B,L,C,H,I,t,D,E,w,J,r,K){var q;z=new z.JSONMap({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});g=q=function(h){function x(a){a=h.call(this,a)||this;a.dpi=96;a.format=null;a.origin=null;a.minScale=0;a.maxScale=0;a.size=null;a.spatialReference=null;return a}A._inheritsLoose(x,h);x.create=function(a=
{}){const {resolutionFactor:b=1,scales:c,size:d=256,spatialReference:e=D.WebMercator,numLODs:f=24}=a;if(!w.isValid(e)){a=[];if(c)for(var k=0;k<c.length;k++){var p=c[k];a.push(new r({level:k,scale:p,resolution:p}))}else for(k=5E-4,p=f-1;0<=p;p--)a.unshift(new r({level:p,scale:k,resolution:k})),k*=2;return new q({dpi:96,lods:a,origin:new t(0,0,e),size:[d,d],spatialReference:e})}k=w.getInfo(e);a=a.origin?new t({x:a.origin.x,y:a.origin.y,spatialReference:e}):k?new t({x:k.origin[0],y:k.origin[1],spatialReference:e}):
new t({x:0,y:0,spatialReference:e});k=1/(39.37*G.getMetersPerUnitForSR(e)*96);p=[];if(c)for(var u=0;u<c.length;u++){var v=c[u];p.push(new r({level:u,scale:v,resolution:v*k}))}else{var y=w.isGeographic(e)?512/d*5.916575275917094E8:256/d*5.91657527591555E8;u=Math.ceil(f/b);p.push(new r({level:0,scale:y,resolution:y*k}));for(v=1;v<u;v++)y/=2**b,p.push(new r({level:v,scale:y,resolution:y*k}))}return new q({dpi:96,lods:p,origin:a,size:[d,d],spatialReference:e})};var m=x.prototype;m.readOrigin=function(a,
b){return t.fromJSON({spatialReference:b.spatialReference,...a})};m.readSize=function(a,b){return[b.cols,b.rows]};m.writeSize=function(a,b){b.cols=a[0];b.rows=a[1]};m.zoomToScale=function(a){const b=this.scales;if(0>=a)return b[0];if(a>=b.length-1)return b[b.length-1];const c=Math.floor(a);return b[c]/(b[c]/b[c+1])**(a-c)};m.scaleToZoom=function(a){const b=this.scales,c=b.length-1;let d=0;for(;d<c;d++){const e=b[d],f=b[d+1];if(e<=a)break;if(f===a)return d+1;if(e>a&&f<a)return d+Math.log(e/a)/Math.log(e/
f)}return d};m.snapScale=function(a,b=.95){a=this.scaleToZoom(a);return a%Math.floor(a)>=b?this.zoomToScale(Math.ceil(a)):this.zoomToScale(Math.floor(a))};m.tileAt=function(a,b,c,d){var e=this.lodAt(a);if(!e)return null;let f;if("number"===typeof b)f=b,b=c;else{if(w.equals(b.spatialReference,this.spatialReference))f=b.x,b=b.y;else{d=J.project(b,this.spatialReference);if(F.isNone(d))return null;f=d.x;b=d.y}d=c}c=e.resolution*this.size[0];e=e.resolution*this.size[1];d||(d=new K.TileKey(null,0,0,0,E.create()));
d.level=a;d.row=Math.floor((this.origin.y-b)/e+.001);d.col=Math.floor((f-this.origin.x)/c+.001);this.updateTileInfo(d);return d};m.updateTileInfo=function(a,b=q.ExtrapolateOptions.NONE){var c=this.lodAt(a.level);c||b!==q.ExtrapolateOptions.POWER_OF_TWO||(b=this.lods[this.lods.length-1],b.level<a.level&&(c=b));if(c){var d=a.level-c.level;b=c.resolution*this.size[0]/2**d;c=c.resolution*this.size[1]/2**d;a.id=`${a.level}/${a.row}/${a.col}`;a.extent||(a.extent=E.create());a.extent[0]=this.origin.x+a.col*
b;a.extent[1]=this.origin.y-(a.row+1)*c;a.extent[2]=a.extent[0]+b;a.extent[3]=a.extent[1]+c}};m.upsampleTile=function(a){const b=this._upsampleLevels[a.level];if(!b||-1===b.parentLevel)return!1;a.level=b.parentLevel;a.row=Math.floor(a.row/b.factor+.001);a.col=Math.floor(a.col/b.factor+.001);this.updateTileInfo(a);return!0};m.getTileBounds=function(a,b){var c=this.lodAt(b.level);if(null==c)return null;var {resolution:d}=c;c=d*this.size[0];d*=this.size[1];a[0]=this.origin.x+b.col*c;a[1]=this.origin.y-
(b.row+1)*d;a[2]=a[0]+c;a[3]=a[1]+d;return a};m.lodAt=function(a){return this._levelToLOD?.[a]??null};m.clone=function(){return q.fromJSON(this.write({}))};m.getOrCreateCompatible=function(a,b){if(256===this.size[0]&&256===this.size[1])return 256===a?this:null;const c=[],d=this.lods.length;for(let e=0;e<d;e++){const f=this.lods[e];c.push(new r({level:f.level,scale:f.scale,resolution:f.resolution*b}))}return new q({size:[a,a],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,
origin:this.origin,spatialReference:this.spatialReference,lods:c})};m._initializeUpsampleLevels=function(){const a=this.lods;this._upsampleLevels=[];let b=null;for(let c=0;c<a.length;c++){const d=a[c];this._upsampleLevels[d.level]={parentLevel:b?b.level:-1,factor:b?b.resolution/d.resolution:0};b=d}};A._createClass(x,[{key:"isWrappable",get:function(){const {spatialReference:a,origin:b}=this;if(a&&b){const c=w.getInfo(a);return a.isWrappable&&!!c&&Math.abs(c.origin[0]-b.x)<=c.dx}return!1}},{key:"lods",
set:function(a){let b=0,c=0;const d=[],e=this._levelToLOD={};a&&(b=-Infinity,c=Infinity,a.forEach(f=>{d.push(f.scale);b=f.scale>b?f.scale:b;c=f.scale<c?f.scale:c;e[f.level]=f}));this._set("scales",d);this._set("minScale",b);this._set("maxScale",c);this._set("lods",a);this._initializeUpsampleLevels()}}]);return x}(g.JSONSupport);l.__decorate([n.property({type:Number,json:{write:!0}})],g.prototype,"compressionQuality",void 0);l.__decorate([n.property({type:Number,json:{write:!0}})],g.prototype,"dpi",
void 0);l.__decorate([n.property({type:String,json:{read:z.read,write:z.write,origins:{"web-scene":{read:!1,write:!1}}}})],g.prototype,"format",void 0);l.__decorate([n.property({readOnly:!0})],g.prototype,"isWrappable",null);l.__decorate([n.property({type:t,json:{write:!0}})],g.prototype,"origin",void 0);l.__decorate([C.reader("origin")],g.prototype,"readOrigin",null);l.__decorate([n.property({type:[r],value:null,json:{write:!0}})],g.prototype,"lods",null);l.__decorate([n.property({readOnly:!0})],
g.prototype,"minScale",void 0);l.__decorate([n.property({readOnly:!0})],g.prototype,"maxScale",void 0);l.__decorate([n.property({readOnly:!0})],g.prototype,"scales",void 0);l.__decorate([n.property({cast:h=>Array.isArray(h)?h:"number"===typeof h?[h,h]:[256,256]})],g.prototype,"size",void 0);l.__decorate([C.reader("size",["rows","cols"])],g.prototype,"readSize",null);l.__decorate([I.writer("size",{cols:{type:B.Integer},rows:{type:B.Integer}})],g.prototype,"writeSize",null);l.__decorate([n.property({type:D,
json:{write:!0}})],g.prototype,"spatialReference",void 0);g=q=l.__decorate([H.subclass("esri.layers.support.TileInfo")],g);(function(h){h=h.ExtrapolateOptions||(h.ExtrapolateOptions={});h[h.NONE=0]="NONE";h[h.POWER_OF_TWO=1]="POWER_OF_TWO"})(g||(g={}));return g});