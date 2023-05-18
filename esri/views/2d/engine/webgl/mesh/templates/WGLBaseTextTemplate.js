// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../layers/graphics/featureConversionUtils ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./shapingUtils".split(" "),function(D,p,E,y,F,G,H,k,z,I){const l=k.i1616to32(4,4),r=k.i1616to32(4,2),m=k.i1616to32(4,6),A=[r,r,m,m],B=[r,m,r,m],J=[m,m,l,l],K=[l,l,m,m],L=[m,l,m,l],M=
[l,m,l,m];return N=>function(C){function x(...a){a=C.call(this,...a)||this;a._isCIM=!1;a._vertexBoundsScale=1;a.geometryType=H.WGLGeometryType.TEXT;a._aux=k.i8888to32(0,0,a._referenceSize,a._bitset);return a}D._inheritsLoose(x,C);var n=x.prototype;n.bindTextInfo=function(a,c){this._shapingInfo=a&&a.length?p.applySome(a,e=>I.shapeGlyphs(e,c,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,
512)),lineHeight:G.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM,hasBackground:!!this._backgroundColor,borderLineSize:this._borderLineSize})):null};n._write=function(a,c,e,b){const d=c.getDisplayId();this._writeGeometry(a,c,d,e,b)};n._writeGeometry=function(a,c,e,b,d){const f=this._shapingInfo;if(!p.isNone(f)){if(p.isSome(this._textPlacement))return c=d??c.readLegacyGeometryForDisplay(),this._writePlacedText(a,e,c,f,b);b=d?y.deltaDecodeGeometry(y.convertFromGeometry(d),
2):"esriGeometryPolygon"===c.geometryType?c.readCentroid():c.readGeometryForDisplay();if(!p.isNone(b)){if(b.isPoint){const [g,h]=b.coords;return!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>g||512<=g||0>h||512<=h)?void 0:this._writeGlyphs(a,e,{x:g,y:h},f)}b.forEachVertex((g,h)=>this._writeGlyphs(a,e,{x:g,y:h},f))}}};n._writePlacedText=function(a,c,e,b,d){var f=p.unwrap(this._textPlacement);if(e=F.CIMMarkerPlacementHelper.getPlacement(e,f,E.pt2px(1),a.tileKey,d.geometryEngine))for(var g=e.next();null!=
g;)d=-g.getAngle(),b.setRotation(d),f=g.tx,g=-g.ty,0>f||512<=f||0>g||512<=g||(this._writeGlyphs(a,c,{x:f,y:g},b),b.setRotation(-d)),g=e.next()};n._writeGlyphs=function(a,c,e,b){const d=z.MaterialKeyBase.load(this._materialKey),f=k.i1616to32(Math.round(8*e.x),Math.round(8*e.y)),g=this._vertexBoundsScale,{bounds:h,background:q,glyphs:t}=b;0<t.length&&(this._borderLineColor||this._backgroundColor)&&(d.textureBinding=t[0].textureBinding,a.recordStart(c,d.data,this.geometryType,!0),this._writeBackgroundGeometry(a,
c,e,h,q),a.recordEnd());const u=2*Math.max(h.width,h.height);for(const v of b.glyphs)d.textureBinding=v.textureBinding,a.recordStart(c,d.data,this.geometryType,!0),a.vertexBounds(e.x+h.x+this._xOffset,e.y+h.y-this._yOffset,u*g,u*g),this._writeVertices(a,c,f,v),a.recordEnd()};n._writeGlyph=function(a,c,e,b,d){var f=z.MaterialKeyBase.load(this._materialKey);const g=k.i1616to32(Math.round(8*e),Math.round(8*b));f.textureBinding=d.textureBinding;a.recordStart(c,f.data,this.geometryType,!0);f=d.bounds;
const h=this._vertexBoundsScale;a.vertexBounds(e+f.x*h,b+f.y*h,f.width*h,f.height*h);this._writeVertices(a,c,g,d);a.recordEnd()};n._writeVertices=function(a,c,e,b){const d=a.vertexCount();this._writeVertexCommon(a,c,e,b);a.vertexWrite(b.offsets.upperLeft);a.vertexWrite(b.texcoords.upperLeft);a.vertexEnd();this._writeVertexCommon(a,c,e,b);a.vertexWrite(b.offsets.upperRight);a.vertexWrite(b.texcoords.upperRight);a.vertexEnd();this._writeVertexCommon(a,c,e,b);a.vertexWrite(b.offsets.lowerLeft);a.vertexWrite(b.texcoords.lowerLeft);
a.vertexEnd();this._writeVertexCommon(a,c,e,b);a.vertexWrite(b.offsets.lowerRight);a.vertexWrite(b.texcoords.lowerRight);a.vertexEnd();a.indexWrite(d+0);a.indexWrite(d+1);a.indexWrite(d+2);a.indexWrite(d+1);a.indexWrite(d+3);a.indexWrite(d+2)};n._writeVertexCommon=function(a,c,e,b){b=this._color;const d=this._haloColor,f=k.i8888to32(0,0,this._referenceSize,this._bitset),g=k.i8888to32(0,0,this._size,this._haloSize);a.vertexWrite(e);a.vertexWrite(c);a.vertexWrite(b);a.vertexWrite(d);a.vertexWrite(g);
a.vertexWrite(f);a.vertexWrite(this._minMaxZoom)};n._writeBackgroundVertex=function(a,c,e,b,d,f){const g=k.i8888to32(0,1,this._referenceSize,this._bitset),h=k.i8888to32(0,0,this._size,this._haloSize),q=k.i8888to32(0,0,0,0);a.vertexWrite(e);a.vertexWrite(c);a.vertexWrite(b);a.vertexWrite(q);a.vertexWrite(h);a.vertexWrite(g);a.vertexWrite(this._minMaxZoom);a.vertexWrite(d);a.vertexWrite(f);a.vertexEnd()};n._writeBackgroundQuad=function(a,c,e,b,d,f){const g=a.vertexCount();this._writeBackgroundVertex(a,
c,e,b,d.upperLeft,f[0]);this._writeBackgroundVertex(a,c,e,b,d.upperRight,f[1]);this._writeBackgroundVertex(a,c,e,b,d.lowerLeft,f[2]);this._writeBackgroundVertex(a,c,e,b,d.lowerRight,f[3]);a.indexWrite(g+0);a.indexWrite(g+1);a.indexWrite(g+2);a.indexWrite(g+1);a.indexWrite(g+3);a.indexWrite(g+2)};n._writeBackgroundGeometry=function(a,c,e,b,d){const f=k.i1616to32(Math.round(8*e.x),Math.round(8*e.y)),{x:g,y:h,width:q,height:t}=b;b=2*Math.max(q,t);a.vertexBounds(e.x+g+this._xOffset,e.y+h-this._yOffset,
b*this._vertexBoundsScale,b*this._vertexBoundsScale);this._backgroundColor&&this._writeBackgroundQuad(a,c,f,this._backgroundColor,d.main,[l,l,l,l]);if(this._borderLineColor||this._backgroundColor){const [u,v,O,P,w]=this._borderLineColor&&this._borderLineSize&&0<this._borderLineSize?[A,A,B,B,this._borderLineColor]:[J,K,L,M,this._backgroundColor];this._writeBackgroundQuad(a,c,f,w,d.top,u);this._writeBackgroundQuad(a,c,f,w,d.bot,v);this._writeBackgroundQuad(a,c,f,w,d.left,O);this._writeBackgroundQuad(a,
c,f,w,d.right,P)}};return x}(N)});