// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Evented ../../../core/maybe ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper ./unnormalizationHelper".split(" "),function(r,x,C,y,A,D,E,F,B){let u=function(){function n(e){this.component=e;this.rightEdge=this.leftEdge=null;this.type="vertex";this.index=null}x._createClass(n,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e;this.component.unnormalizeVertexPositions()}}]);
return n}(),v=function(n,e,g){this.component=n;this.leftVertex=e;this.rightVertex=g;this.type="edge";e.rightEdge=this;g.leftEdge=this},w=function(){function n(g,a){this._spatialReference=g;this._viewingMode=a;this.vertices=[];this.edges=[];this.index=null}var e=n.prototype;e.unnormalizeVertexPositions=function(){1>=this.vertices.length||B.unnormalize(this.vertices,B.getUnnormalizationInfo(this._spatialReference,this._viewingMode))};e.updateVertexIndex=function(g,a){if(0!==this.vertices.length){var c=
this.vertices[0],b=null;do b=g,b.index=a++,g=b.rightEdge?b.rightEdge.rightVertex:null;while(null!=g&&g!==c);b.leftEdge&&b!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(b),this.vertices.length-1)}};e.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]};e.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]};e.isClosed=function(){return 2<this.vertices.length&&null!==this.vertices[0].leftEdge};
e.swapVertices=function(g,a){const c=this.vertices[g];this.vertices[g]=this.vertices[a];this.vertices[a]=c};e.iterateVertices=function(g){if(0!==this.vertices.length){var a=this.vertices[0],c=a;do g(c,c.index),c=A.isSome(c.rightEdge)?c.rightEdge.rightVertex:null;while(c!==a&&null!=c)}};return n}();y=function(n){function e(a,c){var b=n.call(this)||this;b.type=a;b.coordinateHelper=c;b._geometry=null;b._dirty=!0;b.components=[];return b}x._inheritsLoose(e,n);var g=e.prototype;g.notifyChanges=function(a){this._dirty=
!0;this.emit("change",a)};g._toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)};g._toPolyline=function(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const m=[];let k=b.vertices.find(f=>null==f.leftEdge);const h=k;do m.push(c(k.pos)),k=k.rightEdge?k.rightEdge.rightVertex:null;while(k&&k!==h);a.push(m)}return new E({paths:a,
spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};g._toPolygon=function(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const m=[],k=b.vertices[0];let h=k;const f=h;do m.push(c(h.pos)),h=A.isSome(h.rightEdge)?h.rightEdge.rightVertex:null;while(h&&h!==f);b.isClosed()&&m.push(c(k.pos));a.push(m)}return new D({rings:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),
hasM:this.coordinateHelper.hasM()})};e.fromGeometry=function(a,c){var b=a.spatialReference;const m=F.createCoordinateHelper(a.hasZ,a.hasM,b),k=new e(a.type,m);switch(a.type){case "polygon":a=a.rings;for(var h=0;h<a.length;++h){var f=a[h],d=new w(b,c);d.index=h;var p=2<f.length&&C.equals(f[0],f[f.length-1]),l=p?f.length-1:f.length;for(var q=0;q<l;++q){var t=m.arrayToVector(f[q]);const z=new u(d);d.vertices.push(z);z.pos=t;z.index=q}f=d.vertices.length-1;for(l=0;l<f;++l)q=new v(d,d.vertices[l],d.vertices[l+
1]),d.edges.push(q);p&&(p=new v(d,d.vertices[d.vertices.length-1],d.vertices[0]),d.edges.push(p));k.components.push(d)}break;case "polyline":a=a.paths;for(h=0;h<a.length;++h){p=a[h];d=new w(b,c);d.index=h;f=p.length;for(l=0;l<f;++l)q=m.arrayToVector(p[l]),t=new u(d),d.vertices.push(t),t.pos=q,t.index=l;p=d.vertices.length-1;for(f=0;f<p;++f)l=new v(d,d.vertices[f],d.vertices[f+1]),d.edges.push(l);k.components.push(d)}break;case "point":c=new w(b,c),c.index=0,b=new u(c),b.index=0,b.pos=m.pointToVector(a),
c.vertices.push(b),k.components.push(c)}return k};x._createClass(e,[{key:"geometry",get:function(){if(this._dirty){switch(this.type){case "point":this._geometry=this._toPoint();break;case "polyline":this._geometry=this._toPolyline();break;case "polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}}]);return e}(y);r.Component=w;r.Edge=v;r.EditGeometry=y;r.Vertex=u;Object.defineProperty(r,
Symbol.toStringTag,{value:"Module"})});