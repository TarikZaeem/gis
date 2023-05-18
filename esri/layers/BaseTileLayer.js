// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Error ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/SpatialReference ../geometry/support/aaBoundingRect ./Layer ./mixins/BlendLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/imageBitmapUtils ./support/TileInfo ./support/TileKey".split(" "),function(r,f,t,u,h,e,H,x,y,m,z,A,
B,C,D,E,v,F){var n;const g=new F.TileKey("0/0/0",0,0,0,void 0);e=n=function(w){function p(){var b=w.apply(this,arguments)||this;b.tileInfo=v.create({spatialReference:m.WebMercator,size:256});b.type="base-tile";b.fullExtent=new y(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,m.WebMercator);b.spatialReference=m.WebMercator;return b}r._inheritsLoose(p,w);var k=p.prototype;k.getTileBounds=function(b,c,d,a){a=a||z.create();g.level=b;g.row=c;g.col=d;g.extent=a;this.tileInfo.updateTileInfo(g);
g.extent=void 0;return a};k.fetchTile=function(b,c,d,a={}){({signal:a}=a);b=this.getTileUrl(b,c,d);return t(b??"",{responseType:"image",signal:a,query:{...this.refreshParameters}}).then(l=>l.data)};k.fetchImageBitmapTile=function(){var b=r._asyncToGenerator(function*(c,d,a,l={}){var {signal:q}=l;if(this.fetchTile!==n.prototype.fetchTile){q=yield this.fetchTile(c,d,a,l);try{return createImageBitmap(q)}catch(G){throw new u("request:server",`Unable to load tile ${c}/${d}/${a}`,{error:G,level:c,row:d,
col:a});}}c=this.getTileUrl(c,d,a)??"";({data:d}=yield t(c,{responseType:"blob",signal:q,query:{...this.refreshParameters}}));return E.createBitmap(d,c)});return function(c,d,a){return b.apply(this,arguments)}}();k.getTileUrl=function(){throw new u("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented");};return p}(B.BlendLayer(D.ScaleRangeLayer(C.RefreshableLayer(A))));f.__decorate([h.property({type:v})],e.prototype,"tileInfo",void 0);f.__decorate([h.property({type:["show",
"hide"]})],e.prototype,"listMode",void 0);f.__decorate([h.property({readOnly:!0,value:"base-tile"})],e.prototype,"type",void 0);f.__decorate([h.property({nonNullable:!0})],e.prototype,"fullExtent",void 0);f.__decorate([h.property()],e.prototype,"spatialReference",void 0);return e=n=f.__decorate([x.subclass("esri.layers.BaseTileLayer")],e)});