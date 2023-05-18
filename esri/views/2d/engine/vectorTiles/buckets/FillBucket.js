// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/ArrayPool ../../../../../chunks/earcut ../../../../../geometry/libtess ../../../../../geometry/support/TileClipper ../enums ./BaseBucket".split(" "),function(B,C,D,F,A,G,H){return function(E){function z(a,b,c,d,q,g,e){a=E.call(this,a,b,c)||this;a.type=G.BucketType.FILL;a._patternMap=new Map;a._fillVertexBuffer=d;a._fillIndexBuffer=q;a._outlineVertexBuffer=g;a._outlineIndexBuffer=e;return a}B._inheritsLoose(z,E);var x=z.prototype;
x.getResources=function(a,b,c){a=this.zoom;if(c=this.layer.getPaintProperty("fill-pattern"))if(c.isDataDriven)for(const d of this._features)b(c.getValue(a,d),!0);else b(c.getValue(a),!0)};x.processFeatures=function(a){this._fillIndexStart=3*this._fillIndexBuffer.index;this._fillIndexCount=0;this._outlineIndexStart=3*this._outlineIndexBuffer.index;this._outlineIndexCount=0;const b=this.layer,c=this.zoom,{fillMaterial:d,outlineMaterial:q,hasDataDrivenFill:g,hasDataDrivenOutline:e}=b;a&&a.setExtent(this.layerExtent);
var n=b.getPaintProperty("fill-pattern"),h=n?.isDataDriven;let k=!n&&b.getPaintValue("fill-antialias",c);if(b.outlineUsesFillColor){if(k&&!b.hasDataDrivenOpacity){var p=b.getPaintValue("fill-opacity",c),f=b.getPaintValue("fill-opacity",c+1);1>p&&1>f&&(k=!1)}k&&!b.hasDataDrivenColor&&(p=b.getPaintValue("fill-color",c),f=b.getPaintValue("fill-color",c+1),1>p[3]&&1>f[3]&&(k=!1))}f=this._features;p=a?.validateTessellation;if(h){var l=[];for(var m of f){h=n.getValue(c,m);h=this._spriteInfo[h];if(!h||!h.rect)continue;
f=d.encodeAttributes(m,c,b,h);const t=k&&e?q.encodeAttributes(m,c,b):[],w=m.getGeometry(a);l.push({ddFillAttributes:f,ddOutlineAttributes:t,page:h.page,geometry:w});l.sort((y,r)=>y.page-r.page);for(const {ddFillAttributes:y,ddOutlineAttributes:r,page:v,geometry:u}of l)this._processFeature(u,k,b.outlineUsesFillColor,y,r,p,v)}}else for(l of f)n=g?d.encodeAttributes(l,c,b):null,m=k&&e?q.encodeAttributes(l,c,b):null,h=l.getGeometry(a),this._processFeature(h,k,b.outlineUsesFillColor,n,m,p)};x.serialize=
function(){var a=10+this.layerUIDs.length;a+=this._fillVertexBuffer.array.length;a+=this._fillIndexBuffer.array.length;a+=this._outlineVertexBuffer.array.length;a+=this._outlineIndexBuffer.array.length;a+=3*this._patternMap.size+1;a=new Uint32Array(a);var b=new Int32Array(a.buffer);let c=0;a[c++]=this.type;a[c++]=this.layerUIDs.length;for(var d=0;d<this.layerUIDs.length;d++)a[c++]=this.layerUIDs[d];a[c++]=this._fillIndexStart;a[c++]=this._fillIndexCount;a[c++]=this._outlineIndexStart;a[c++]=this._outlineIndexCount;
d=this._patternMap;const q=d.size;a[c++]=q;if(0<q)for(const [g,[e,n]]of d)a[c++]=g,a[c++]=e,a[c++]=n;a[c++]=this._fillVertexBuffer.array.length;for(d=0;d<this._fillVertexBuffer.array.length;d++)b[c++]=this._fillVertexBuffer.array[d];a[c++]=this._fillIndexBuffer.array.length;for(d=0;d<this._fillIndexBuffer.array.length;d++)a[c++]=this._fillIndexBuffer.array[d];a[c++]=this._outlineVertexBuffer.array.length;for(d=0;d<this._outlineVertexBuffer.array.length;d++)b[c++]=this._outlineVertexBuffer.array[d];
a[c++]=this._outlineIndexBuffer.array.length;for(b=0;b<this._outlineIndexBuffer.array.length;b++)a[c++]=this._outlineIndexBuffer.array[b];return a.buffer};x._processFeature=function(a,b,c,d,q,g,e){if(a){var n=a.length,h=!q||0===q.length;if(b&&(!c||h))for(b=0;b<n;b++)this._processOutline(a[b],q);for(q=0;q<n;q++)if(b=z._area(a[q]),32<b){void 0!==k&&this._processFill(a,k,d,g,e);var k=[q]}else-32>b&&void 0!==k&&k.push(q);void 0!==k&&this._processFill(a,k,d,g,e)}};x._processOutline=function(a,b){const c=
this._outlineVertexBuffer,d=this._outlineIndexBuffer,q=d.index;var g;let e,n;const h=new A.Point(0,0),k=new A.Point(0,0),p=new A.Point(0,0);let f=-1,l=-1;var m=-1;let t=-1,w=-1,y=!1,r=a.length;if(!(2>r)){var v=a[0];for(g=a[r-1];r&&g.isEqual(v);)--r,g=a[r-1];if(!(2>r-0)){for(v=0;v<r;++v){0===v?(g=a[r-1],e=a[0],n=a[1],h.assignSub(e,g),h.normalize(),h.rightPerpendicular()):(g=e,e=n,n=v!==r-1?a[v+1]:a[0],h.assign(k));g=this._isClipEdge(g,e);-1===t&&(y=g);k.assignSub(n,e);k.normalize();k.rightPerpendicular();
m=h.x*k.y-h.y*k.x;p.assignAdd(h,k);p.normalize();var u=-p.x*-h.x+-p.y*-h.y;u=Math.abs(0!==u?1/u:1);8<u&&(u=8);0<=m?(m=c.add(e.x,e.y,h.x,h.y,0,1,b),-1===t&&(t=m),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,u*-p.x,u*-p.y,0,-1,b),-1===w&&(w=l),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=l,l=m,m=c.add(e.x,e.y,p.x,p.y,0,1,b),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,k.x,k.y,0,1,b)):(m=c.add(e.x,e.y,u*p.x,u*p.y,0,1,b),-1===t&&(t=m),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,-h.x,-h.y,0,
-1,b),-1===w&&(w=l),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=l,l=m,m=c.add(e.x,e.y,-p.x,-p.y,0,-1,b),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=c.add(e.x,e.y,-k.x,-k.y,0,-1,b));0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m)}0<=f&&0<=l&&0<=t&&!y&&d.add(f,l,t);0<=f&&0<=t&&0<=w&&!y&&d.add(f,w,t);this._outlineIndexCount+=3*(d.index-q)}}};x._processFill=function(a,b,c,d,q){d=!0;var g;1<b.length&&(g=[]);var e=0;for(var n of b)0!==e&&g.push(e),e+=a[n].length;n=2*e;e=C.acquire();for(var h of b){const k=a[h],p=k.length;for(let f=
0;f<p;++f)e.push(k[f].x,k[f].y)}h=D.earcut(e,g,2);if(d&&0<D.earcut.deviation(e,g,2,h)){n=b.map(f=>a[f].length);const {buffer:k,vertexCount:p}=F.triangulate(e,n);if(0<p){n=this._fillVertexBuffer.index;for(b=0;b<p;b++)this._fillVertexBuffer.add(k[2*b],k[2*b+1],c);for(c=0;c<p;c+=3)b=n+c,this._fillIndexBuffer.add(b,b+1,b+2);void 0!==q&&(c=this._patternMap,(n=c.get(q))?n[1]+=p:c.set(q,[this._fillIndexStart+this._fillIndexCount,p]));this._fillIndexCount+=p}}else if(b=h.length,0<b){d=this._fillVertexBuffer.index;
for(g=0;g<n;)this._fillVertexBuffer.add(e[g++],e[g++],c);for(c=0;c<b;)this._fillIndexBuffer.add(d+h[c++],d+h[c++],d+h[c++]);void 0!==q&&(c=this._patternMap,(n=c.get(q))?n[1]+=b:c.set(q,[this._fillIndexStart+this._fillIndexCount,b]));this._fillIndexCount+=b}C.release(e)};x._isClipEdge=function(a,b){return a.x===b.x?-64>=a.x||4160<=a.x:a.y===b.y?-64>=a.y||4160<=a.y:!1};z._area=function(a){let b=0;const c=a.length-1;for(let d=0;d<c;d++)b+=(a[d].x-a[d+1].x)*(a[d].y+a[d+1].y);b+=(a[c].x-a[0].x)*(a[c].y+
a[0].y);return.5*b};B._createClass(z,[{key:"fillIndexStart",get:function(){return this._fillIndexStart}},{key:"fillIndexCount",get:function(){return this._fillIndexCount}},{key:"outlineIndexStart",get:function(){return this._outlineIndexStart}},{key:"outlineIndexCount",get:function(){return this._outlineIndexCount}}]);return z}(H)});