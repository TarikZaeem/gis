// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/mathUtils ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../chunks/mat2d ../../../../../../chunks/mat2df32 ../../../../../../symbols/cim/enums ../../alignmentUtils ../../color ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./segmentUtils ./WGLTextTemplate".split(" "),function(A,G,H,B,y,C,I,J,D,u,v,K,L,
r,z,E,M){const F=H.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),N=(p,k="mapview-labeling")=>F.error(new G(k,p)),O=function(p){const k=new Map;return h=>{k.has(h)||k.set(h,p(h));return k.get(h)}}(p=>{let k=0;if(0===p)return Infinity;for(;!(p%2);)k++,p/=2;return k});return function(p){function k(a,c,b,f){var d=p.call(this,a,b.font?.size,b.haloSize||0,b.font?.size,b.color&&v.premultiplyAlphaRGBAArray(b.color)||0,b.haloColor&&v.premultiplyAlphaRGBAArray(b.haloColor)||0,b.horizontalAlignment,
b.verticalAlignment,u.isMapAligned(c.labelPlacement)?D.Alignment.MAP:D.Alignment.SCREEN,b.font?.decoration,!1,b.angle||0,b.xoffset,b.yoffset,b.lineWidth,b.lineHeight,null,null,!1,null,null,b.backgroundColor&&v.premultiplyAlphaRGBAArray(b.backgroundColor),b.borderLineColor&&v.premultiplyAlphaRGBAArray(b.borderLineColor),b.borderLineSize)||this;d._outLineLabelAngle=0;d._refPlacementPadding=0;d._refPlacementDirX=0;d._refPlacementDirY=0;d._refOffsetX=0;d._refOffsetY=0;d._zoomLevel=0;d.geometryType=L.WGLGeometryType.LABEL;
d._allowOverrun=c.allowOverrun??!1;d._repeatLabel=c.repeatLabel??!0;d._labelPosition=c.labelPosition??"curved";var e=!!c.minScale&&f.scaleToZoom(c.minScale)||0;e=B.clamp(e,0,25.5);f=!!c.maxScale&&f.scaleToZoom(c.maxScale)||255;f=B.clamp(f,0,25.5);const [g,m]=u.getAlignmentFromPlacement(c.labelPlacement);d._xAlignD=g;d._yAlignD=m;d._minZoom=e;d._maxZoom=f;d._minBackgroundZoom=e;d._maxBackgroundZoom=f;d._refPlacementPadding=C.pt2px(b.haloSize)+K.TEXT_PLACEMENT_PADDING;d._repeatLabelDistance=c.repeatLabelDistance?
C.pt2px(c.repeatLabelDistance):128;a=z.LabelMaterialKey.load(a);a.sdf=!0;d._materialKey=a.data;return d}A._inheritsLoose(k,p);k.fromLabelClass=function(a,c){if("esriServerLinePlacementCenterAlong"===a.labelPlacement){const b=a.symbol;b.xoffset=0;b.yoffset=0;b.angle=0;b.font.decoration="none"}return new k(a.materialKey,a,a.symbol,c)};var h=k.prototype;h.setZoomLevel=function(a){this._zoomLevel=a};h.bindReferenceTemplate=function(a){let c=u.getXDirection(this._xAlignD),b=u.getYDirection(this._yAlignD);
this._refOffsetY=this._refOffsetX=0;if(y.isNone(a))this._refSymbolAndPlacementOffset=r.i8888to32(0,0,Math.floor(127*c+127),Math.floor(127*b+127));else{if("circle"===a.boundsType&&(c||b)){var f=Math.sqrt(c*c+b*b);c/=f;b/=f}f=Math.max(a.height,a.width);this._refSymbolAndPlacementOffset=r.i8888to32(4*this._refPlacementPadding,f,Math.floor(127*c+127),Math.floor(127*b+127));this._referenceSize=f;this._refPlacementDirX=c;this._refPlacementDirY=b;this._refOffsetX=a.xOffset;this._refOffsetY=a.yOffset}};h._write=
function(a,c){if(!y.isNone(this._shapingInfo)){var b=this._shapingInfo,f=c.getDisplayId(),d="esriGeometryPolygon"===c.geometryType?c.readLegacyCentroid():c.readLegacyGeometry();if(d)switch(this._current={out:a,inId:f,inShaping:b,zoomLevel:this._zoomLevel},"esriGeometryPolyline"===c.geometryType&&"curved"===this._labelPosition&&(this._borderLineColor||this._backgroundColor)&&F.warnOnce("TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"),
c.geometryType){case "esriGeometryPolyline":this._placeLineLabels(d);break;case "esriGeometryPoint":case "esriGeometryPolygon":this._placePointLabels(d);break;default:N(`Geometry of type ${c.geometryType} is not supported`)}}};h._isVisible=function(a,c){const b=Math.floor(10*this._current.zoomLevel);return Math.floor(10*a)<=b&&b<=Math.floor(10*c)};h._placePointLabels=function(a){const {out:c,inId:b,inShaping:f}=this._current;this._writeGlyphs(c,b,a,f)};h._placeLineLabels=function(a){a=E.smoothPaths(a.paths,
this._current.inShaping.bounds.width);const c=this._placeSubdivGlyphs.bind(this),b=(this._shapedBox.width+this._repeatLabelDistance)/2;for(const f of a)E.pathDivide(f,b,c,this._repeatLabel)};h._placeSubdivGlyphs=function(a,c,b,f){var d=O(c),e=this._shapedBox.width/2,g=Math.sqrt(this._repeatLabelDistance)/2;b=Math.min(b,f-b);e=this._current.inShaping.isMultiline?25:Math.log2(b/(g+e/2));d=Math.max(this._minZoom,this._current.zoomLevel+1-(0===c?e:Math.min(d,e)));e=this._current.zoomLevel-d;g=this._shapedBox.width/
2*2**e;this._current.inShaping.isMultiline?0===c&&this._placeStraight(a,d):this._allowOverrun&&0>e?this._placeStraightAlong(a,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(a,d):"curved"===this._labelPosition&&this._placeCurved(a,d,g)};h._placeStraight=function(a,c){const {out:b,inId:f,inShaping:d}=this._current,e=Math.ceil((180/Math.PI*a.angle+180)%360);this._outLineLabelAngle=Math.round(254/360*Math.ceil(180/Math.PI*a.angle%360));this._writeGlyphs(b,f,a,d,c);this._outLineLabelAngle=
Math.round(254/360*e);this._writeGlyphs(b,f,a,d,c)};h._placeCurved=function(a,c,b){const {out:f,inId:d}=this._current;f.metricStart(d,c,a.x,a.y,0,0,0,0);const e=a.clone(),g=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(e,c,1);this._placeBack(a,e,c,b,1);this._placeForward(a,e,c,b,1);this._outLineLabelAngle=Math.round(254/360*g);this._placeFirst(e,c,0);this._placeBack(a,e,c,b,0);this._placeForward(a,e,c,b,0);f.metricEnd()};h._placeStraightAlong=
function(a,c){const {out:b,inId:f,inShaping:d}=this._current;b.metricStart(f,c,a.x,a.y,0,0,0,0);const e=a.clone(),g=180/Math.PI*a.angle%360,m=(180/Math.PI*a.angle+180)%360;var n=0<d.glyphs.length&&(this._borderLineColor||this._backgroundColor);this._maxBackgroundZoom=25;this._minBackgroundZoom=Math.max(c,0);if(n){n=z.LabelMaterialKey.load(this._materialKey);n.textureBinding=d.glyphs[0].textureBinding;const l=I.fromRotation(J.create(),-a.angle),[t,w]=d.shapeBackground(l);this._outLineLabelAngle=Math.round(254/
360*g);b.recordStart(f,n.data,this.geometryType,!0);this._writeBackgroundGeometry(b,f,a,t,w);b.recordEnd();this._outLineLabelAngle=Math.round(254/360*m);b.recordStart(f,n.data,this.geometryType,!0);this._writeBackgroundGeometry(b,f,a,t,w);b.recordEnd()}this._outLineLabelAngle=Math.round(254/360*g);this._placeFirst(e,c,1,!0);this._outLineLabelAngle=Math.round(254/360*m);this._placeFirst(e,c,0,!0);b.metricEnd()};h._placeBack=function(a,c,b,f,d){const e=a.clone();for(a=a.backwardLength+0;e.prev()&&!(a>=
f);)this._placeOnSegment(e,c,a,b,-1,d),a+=e.length+0};h._placeForward=function(a,c,b,f,d){const e=a.clone();for(a=a.remainingLength+0;e.next()&&!(a>=f);)this._placeOnSegment(e,c,a,b,1,d),a+=e.length+0};h._placeFirst=function(a,c,b,f=!1){const d=this._current.inShaping;var e=d.glyphs;const g=this._current.zoomLevel,{out:m,inId:n}=this._current;for(const l of e)e=l.x>d.bounds.x?b:1-b,e=Math.max(0,g+Math.log2(Math.abs(l.x+l.width/2-d.bounds.x)/(e*a.remainingLength+(1-e)*a.backwardLength))),e=Math.max(c,
f?0:e),l.maxZoom=25,l.angle=a.angle+(1-b)*Math.PI,l.minZoom=e,this._writeGlyph(m,n,a.x,a.y,l),b&&this._isVisible(l.minZoom,l.maxZoom)&&(e=l.bounds,m.metricBoxWrite(e.center[0],e.center[1],e.width,e.height))};h._placeOnSegment=function(a,c,b,f,d,e){var g=this._current.inShaping.glyphs;const {out:m,inId:n}=this._current,l=this._current.inShaping,t=this._current.zoomLevel;var w=a.x+a.dx/a.length*-d*b,P=a.y+a.dy/a.length*-d*b;for(const q of g)if((g=q.x>l.bounds.x?e:1-e)&&1===d||!g&&-1===d){var x=Math.abs(q.x+
q.width/2-l.bounds.x);g=Math.max(0,t+Math.log2(x/b)-.1);x=Math.max(f,t+Math.log2(x/(b+a.length+0)));0!==g&&(q.angle=a.angle+(1-e)*Math.PI,q.minZoom=x,q.maxZoom=g,this._writeGlyph(m,n,w,P,q),e&&this._isVisible(q.minZoom,q.maxZoom)&&(g=q.bounds,m.metricBoxWrite(g.center[0]+(a.x-c.x),g.center[1]+(a.y-c.y),g.width,g.height)))}};h._writeGlyphs=function(a,c,b,f,d=this._minZoom){if(!(0>b.x||512<=b.x||0>b.y||512<=b.y)){if(0<f.glyphs.length&&(this._borderLineColor||this._backgroundColor)){var e=z.LabelMaterialKey.load(this._materialKey);
e.textureBinding=f.glyphs[0].textureBinding;a.recordStart(c,e.data,this.geometryType,!0);this._writeBackgroundGeometry(a,c,b,f.bounds,f.background);a.recordEnd()}e=b.x+this._refOffsetX;b=b.y-this._refOffsetY;for(const g of f.glyphs)g.minZoom=d,g.maxZoom=this._maxZoom,this._writeGlyph(a,c,e,b,g);f=f.boundsT;a.metricStart(c,d,e,b,this._refPlacementDirX,this._refPlacementDirY,this._referenceSize,this._materialKey);a.metricBoxWrite(f.center[0],f.center[1],f.width,f.height);a.metricEnd()}};h._writeVertexCommon=
function(a,c,b,f){const d=this._color,e=this._haloColor,g=r.i8888to32(0,0,this._size,this._haloSize);f=r.i8888to32(Math.floor(10*Math.max(f.minZoom,this._minZoom)),Math.floor(10*Math.min(f.maxZoom,this._maxZoom)),this._outLineLabelAngle,0);a.vertexWrite(b);a.vertexWrite(c);a.vertexWrite(d);a.vertexWrite(e);a.vertexWrite(g);a.vertexWrite(this._refSymbolAndPlacementOffset);a.vertexWrite(f)};h._writeBackgroundVertex=function(a,c,b,f,d,e){const g=r.i8888to32(0,0,this._size,this._haloSize),m=r.i8888to32(0,
0,0,0),n=r.i8888to32(Math.floor(10*this._minBackgroundZoom),Math.floor(10*this._maxBackgroundZoom),this._outLineLabelAngle,1);a.vertexWrite(b);a.vertexWrite(c);a.vertexWrite(f);a.vertexWrite(m);a.vertexWrite(g);a.vertexWrite(this._refSymbolAndPlacementOffset);a.vertexWrite(n);a.vertexWrite(d);a.vertexWrite(e);a.vertexEnd()};A._createClass(k,[{key:"_shapedBox",get:function(){return y.unwrap(this._shapingInfo).bounds}}]);return k}(M)});