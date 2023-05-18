// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../chunks/mat2d ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2 ../../../../../../chunks/vec2f32 ../../../../../../layers/graphics/featureConversionUtils ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper ../../definitions ../../enums ../../number ../../materialKey/MaterialKey".split(" "),function(y,p,z,r,A,l,t,u,B,C,v,m,D){const w=
3.14159265359/180;return E=>function(x){function q(...a){a=x.call(this,...a)||this;a.angle=0;a.xOffset=0;a.yOffset=0;a.width=0;a.height=0;a.boundsType="square";a._anchorX=0;a._anchorY=0;a._computedWidth=0;a._computedHeight=0;a._allowBorrowing=!0;a._vertexBoundsScaleX=1;a._vertexBoundsScaleY=1;a._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0};a.geometryType=v.WGLGeometryType.MARKER;return a}y._inheritsLoose(q,x);var k=q.prototype;
k._write=function(a,b,c,d){const g=b.getDisplayId();a.recordStart(g,this._materialKey,this.geometryType,!0);this._writeGeometry(a,b,g,c,d);a.recordEnd()};k._writeGeometry=function(a,b,c,d,g){if(p.isSome(this._markerPlacement))return this._writePlacedMarkers(a,b,d,g);this._allowBorrowing=!0;if(!g&&"esriGeometryPoint"===b.geometryType)return d=b.getX(),b=b.getY(),!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>d||513<=d||0>b||513<=b)?void 0:this._writeVertices(a,c,this._getPos(d,b),d,b);b=g?u.deltaDecodeGeometry(u.convertFromGeometry(g),
2):"esriGeometryPolygon"===b.geometryType?b.readCentroid():b.readGeometryForDisplay();if(!p.isNone(b)){if(b.isPoint){const [e,f]=b.coords;return!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>e||512<=e||0>f||512<=f)?void 0:this._writeVertices(a,c,this._getPos(e,f),e,f)}b.forEachVertex((e,f)=>{const h=2*C.TILE_SIZE;e<-h||e>=h||f<-h||f>=h||this._writeVertices(a,c,this._getPos(e,f),e,f)})}};k._writePlacedMarkers=function(a,b,c,d){d=d??b.readLegacyGeometryForDisplay();if(c=B.CIMMarkerPlacementHelper.getPlacement(d,
p.unwrap(this._markerPlacement),z.pt2px(1),a.tileKey,c.geometryEngine)){this._allowBorrowing="esriGeometryPolygon"===b.geometryType?!1:!0;b=b.getDisplayId();d=t.create();for(var g=A.create(),e=c.next();null!=e;){const f=e.tx,h=-e.ty;-128<=f&&640>=f&&-128<=h&&640>=h&&(this._applyTransformation(g,d,-e.getAngle()/w),this._writeVertices(a,b,this._getPos(f,h),f,h));e=c.next()}}};k._writeVertices=function(a,b,c,d,g){const e=D.MarkerMaterialKey.load(this._materialKey);switch(e.symbologyType){case v.WGLSymbologyType.HEATMAP:return this._writeHeatmapVertices(a,
b,c);default:return this._writeMarkerVertices(a,b,e,c,d,g)}};k._writeMarkerVertices=function(a,b,c,d,g,e){var f=c.vvRotation;c=a.vertexCount();let h=this._computedWidth*this._vertexBoundsScaleX;var n=this._computedHeight*this._vertexBoundsScaleY;this.angle&&(h=n=Math.max(h,n));f&&(f=Math.max(this.xOffset,this.yOffset),h+=f,n+=f);this._allowBorrowing&&a.vertexBounds(g+this.xOffset,e-this.yOffset,h,n);a.vertexWrite(d);a.vertexWrite(this._offsetUpperLeft);a.vertexWrite(this._texUpperLeft);a.vertexWrite(this._bitestAndDistRatio);
a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetUpperRight);a.vertexWrite(this._texUpperRight);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetBottomLeft);
a.vertexWrite(this._texBottomLeft);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetBottomRight);a.vertexWrite(this._texBottomRight);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);
a.vertexEnd();this._writeIndices(a,c)};k._writeHeatmapVertices=function(a,b,c){const d=a.vertexCount();a.vertexWrite(c);a.vertexWrite(this._offsetUpperLeft);a.vertexWrite(b);a.vertexEnd();a.vertexWrite(c);a.vertexWrite(this._offsetUpperRight);a.vertexWrite(b);a.vertexEnd();a.vertexWrite(c);a.vertexWrite(this._offsetBottomLeft);a.vertexWrite(b);a.vertexEnd();a.vertexWrite(c);a.vertexWrite(this._offsetBottomRight);a.vertexWrite(b);a.vertexEnd();this._writeIndices(a,d)};k._writeIndices=function(a,b){a.indexWrite(b+
0);a.indexWrite(b+1);a.indexWrite(b+2);a.indexWrite(b+1);a.indexWrite(b+3);a.indexWrite(b+2)};k._applyTransformation=function(a,b,c=0){r.fromTranslation(a,t.fromValues(this.xOffset,-this.yOffset));null!=this.angle&&0!==this.angle+c&&r.rotate(a,a,w*(this.angle+c));c=this._computedWidth;const d=this._computedHeight,g=-(.5+this._anchorX)*c,e=-(.5-this._anchorY)*d;l.set(b,g,e);l.transformMat2d(b,b,a);this._offsetUpperLeft=m.i1616to32(16*b[0],16*b[1]);this._offsets.xUpperLeft=b[0];this._offsets.yUpperLeft=
b[1];l.set(b,g+c,e);l.transformMat2d(b,b,a);this._offsetUpperRight=m.i1616to32(16*b[0],16*b[1]);this._offsets.xUpperRight=b[0];this._offsets.yUpperRight=b[1];l.set(b,g,e+d);l.transformMat2d(b,b,a);this._offsetBottomLeft=m.i1616to32(16*b[0],16*b[1]);this._offsets.xBottomLeft=b[0];this._offsets.yBottomLeft=b[1];l.set(b,g+c,e+d);l.transformMat2d(b,b,a);this._offsetBottomRight=m.i1616to32(16*b[0],16*b[1]);this._offsets.xBottomRight=b[0];this._offsets.yBottomRight=b[1]};k._getPos=function(a,b){return m.i1616to32(Math.round(8*
a),Math.round(8*b))};return q}(E)});