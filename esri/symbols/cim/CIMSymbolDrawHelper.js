// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/BidiText ../../core/fontUtils ../../core/lang ../../core/Logger ../../core/maybe ../../core/ObjectPool ../../core/screenUtils ../../geometry/support/aaBoundingRect ../../geometry/support/boundsUtils ../../geometry/support/centroid ../../geometry/support/jsonUtils ./CIMEffects ./CIMImageColorSubstitutionHelper ./CIMOperators ./CIMPlacements ./enums ./imageUtils ./Rect ./TextRasterizer ./utils ../../views/2d/engine/webgl/alignmentUtils ../../views/2d/engine/webgl/definitions ../../views/2d/engine/webgl/mesh/templates/shapingUtils".split(" "),
function(w,J,W,X,Y,F,G,Z,K,N,aa,ba,q,ca,da,O,ea,H,L,fa,P,v,y,Q,ha){function R(k,l=1){const c=v.fromCIMFontDecoration(k);var a=v.fromCIMFontStyle(k.fontStyleName);const b=X.getFontFamily(k.fontFamilyName),{weight:e,style:d}=a;a=l*(k.height||5);const f=v.fromCIMHorizontalAlignment(k.horizontalAlignment),g=v.fromCIMVerticalAlignment(k.verticalAlignment),h=v.getFillColor(k),m=v.getStrokeColor(k.haloSymbol);k=m?l*(k.haloSize|0):0;return{color:h,size:a,horizontalAlignment:f,verticalAlignment:g,font:{family:b,
style:v.getFontStyle(d),weight:v.getFontWeight(e),decoration:c},halo:{size:k||0,color:m,style:d},pixelRatio:1,premultiplyColors:!0}}const z=Math.PI/180,S=F.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");let B=function(){function k(c){this._t=c}k.createIdentity=function(){return new k([1,0,0,0,1,0])};var l=k.prototype;l.clone=function(){return new k(this._t.slice())};l.transform=function(c){const a=this._t;return[a[0]*c[0]+a[1]*c[1]+a[2],a[3]*c[0]+a[4]*c[1]+a[5]]};k.createScale=function(c,a){return new k([c,
0,0,0,a,0])};l.scale=function(c,a){const b=this._t;b[0]*=c;b[1]*=c;b[2]*=c;b[3]*=a;b[4]*=a;b[5]*=a;return this};l.scaleRatio=function(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])};k.createTranslate=function(c,a){return new k([0,0,c,0,0,a])};l.translate=function(c,a){const b=this._t;b[2]+=c;b[5]+=a;return this};k.createRotate=function(c){const a=Math.cos(c);c=Math.sin(c);return new k([a,-c,0,c,a,0])};l.rotate=function(c){return k.multiply(this,k.createRotate(c),this)};l.angle=function(){const c=
this._t[0],a=this._t[3],b=Math.sqrt(c*c+a*a);return[c/b,a/b]};k.multiply=function(c,a,b){c=c._t;a=a._t;const e=c[1]*a[0]+c[4]*a[1],d=c[2]*a[0]+c[5]*a[1]+a[2],f=c[0]*a[3]+c[3]*a[4],g=c[1]*a[3]+c[4]*a[4],h=c[2]*a[3]+c[5]*a[4]+a[5],m=b._t;m[0]=c[0]*a[0]+c[3]*a[1];m[1]=e;m[2]=d;m[3]=f;m[4]=g;m[5]=h;return b};l.invert=function(){const c=this._t;let a=c[0]*c[4]-c[1]*c[3];if(0===a)return new k([0,0,0,0,0,0]);a=1/a;return new k([c[4]*a,-c[1]*a,(c[1]*c[5]-c[2]*c[4])*a,-c[3]*a,c[0]*a,(c[2]*c[3]-c[0]*c[5])*
a])};return k}();F=function(){function k(c,a){this._resourceManager=c;this._transfos=[];this._sizeTransfos=[];this._geomUnitsPerPoint=1;this._placementPool=new Z(ea.Placement,void 0,void 0,100);this._earlyReturn=!1;this._mapRotation=0;this._transfos.push(a||B.createIdentity());this._sizeTransfos.push(a?a.scaleRatio():1)}var l=k.prototype;l.setTransform=function(c,a){this._transfos=[c||B.createIdentity()];this._sizeTransfos=[a?a:c?c.scaleRatio():1]};l.setGeomUnitsPerPoint=function(c){this._geomUnitsPerPoint=
c};l.transformPt=function(c){return this._transfos[this._transfos.length-1].transform(c)};l.transformSize=function(c){return c*this._sizeTransfos[this._sizeTransfos.length-1]};l.reverseTransformPt=function(c){return this._transfos[this._transfos.length-1].invert().transform(c)};l.reverseTransformSize=function(c){return c/this._sizeTransfos[this._sizeTransfos.length-1]};l.getTransformAngle=function(){return this._transfos[this._transfos.length-1].angle()};l.geomUnitsPerPoint=function(){return this.isEmbedded()?
1:this._geomUnitsPerPoint};l.isEmbedded=function(){return 1<this._transfos.length};l.back=function(){return this._transfos[this._transfos.length-1]};l.push=function(c,a){a=a?c.scaleRatio():1;B.multiply(c,this.back(),c);this._transfos.push(c);this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*a)};l.pop=function(){this._transfos.splice(-1,1);this._sizeTransfos.splice(-1,1)};l.drawSymbol=function(c,a,b){if(c)switch(c.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":this.drawMultiLayerSymbol(c,
a);break;case "CIMTextSymbol":this.drawTextSymbol(c,a,b)}};l.drawMultiLayerSymbol=function(c,a){if(c&&a){var b=c.symbolLayers;if(b)if((c=c.effects)&&0<c.length){if(a=this.executeEffects(c,a))for(c=a.next();c;)this.drawSymbolLayers(b,c),c=a.next()}else this.drawSymbolLayers(b,a)}};l.executeEffects=function(c,a){const b=this._resourceManager.geometryEngine;a=new ca.SimpleGeometryCursor(a);for(const e of c)(c=O.getEffectOperator(e))&&(a=c.execute(a,e,this.geomUnitsPerPoint(),null,b));return a};l.drawSymbolLayers=
function(c,a){let b=c.length;for(;b--;){const d=c[b];if(d&&!1!==d.enable){var e=d.effects;if(e&&0<e.length){if(e=this.executeEffects(e,a)){let f=null;for(;(f=e.next())&&(this.drawSymbolLayer(d,f),!this._earlyReturn););}}else this.drawSymbolLayer(d,a);if(this._earlyReturn)break}}};l.drawSymbolLayer=function(c,a){switch(c.type){case "CIMSolidFill":this.drawSolidFill(a,c.color);break;case "CIMHatchFill":this.drawHatchFill(a,c);break;case "CIMPictureFill":this.drawPictureFill(a,c);break;case "CIMGradientFill":this.drawGradientFill(a,
c);break;case "CIMSolidStroke":this.drawSolidStroke(a,c.color,c.width,c.capStyle,c.joinStyle,c.miterLimit);break;case "CIMPictureStroke":this.drawPictureStroke(a,c);break;case "CIMGradientStroke":this.drawGradientStroke(a,c);break;case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":this.drawMarkerLayer(c,a)}};l.drawHatchFill=function(c,a){const b=this._buildHatchPolyline(a,c,this.geomUnitsPerPoint());b&&(this.pushClipPath(c),this.drawMultiLayerSymbol(a.lineSymbol,b),this.popClipPath())};
l.drawPictureFill=function(c,a){};l.drawGradientFill=function(c,a){};l.drawPictureStroke=function(c,a){};l.drawGradientStroke=function(c,a){};l.drawMarkerLayer=function(c,a){var b=c.markerPlacement;if(b){var e=O.getPlacementOperator(b);if(e){var d="CIMMarkerPlacementInsidePolygon"===b.type||"CIMMarkerPlacementPolygonCenter"===b.type&&b.clipAtBoundary;d&&this.pushClipPath(a);if(a=e.execute(a,b,this.geomUnitsPerPoint(),null,this._resourceManager.geometryEngine))for(b=null;(b=a.next())&&(this.drawMarker(c,
b),!this._earlyReturn););d&&this.popClipPath()}}else{d=this._placementPool.acquire();if(q.isPoint(a))d.tx=a.x,d.ty=a.y,this.drawMarker(c,d);else if(q.isPolygon(a)){if(a=ba.polygonCentroid(a))[d.tx,d.ty]=a,this.drawMarker(c,d)}else for(e of a.points)if(d.tx=e[0],d.ty=e[1],this.drawMarker(c,d),this._earlyReturn)break;this._placementPool.release(d)}};l.drawMarker=function(c,a){switch(c.type){case "CIMCharacterMarker":case "CIMPictureMarker":this.drawPictureMarker(c,a);break;case "CIMVectorMarker":this.drawVectorMarker(c,
a)}};l.drawPictureMarker=function(c,a){if(c){var b=this._resourceManager.getResource(c.url),e=c.size??10;if(!(G.isNone(b)||0>=e)){var d=b.width;b=b.height;if(d&&b){b=d/b;var f=c.scaleX??1;d=B.createIdentity();var g=c.anchorPoint;if(g){var h=g.x;g=g.y;"Absolute"!==c.anchorPointUnits&&(h*=e*b*f,g*=e);d.translate(-h,-g)}b=c.rotation??0;c.rotateClockwise&&(b=-b);this._mapRotation&&(b+=this._mapRotation);b&&d.rotate(b*z);b=c.offsetX??0;f=c.offsetY??0;if(b||f){if(this._mapRotation){g=z*this._mapRotation;
h=Math.cos(g);g=Math.sin(g);const m=b*g+f*h;b=b*h-f*g;f=m}d.translate(b,f)}b=this.geomUnitsPerPoint();1!==b&&d.scale(b,b);(b=a.getAngle())&&d.rotate(b);d.translate(a.tx,a.ty);this.push(d,!1);this.drawImage(c,e);this.pop()}}}};l.drawVectorMarker=function(c,a){if(c){var b=c.markerGraphics;if(b){var e=c.size??10,d=c.frame,f=d?d.ymax-d.ymin:0;f=e&&f?e/f:1;e=B.createIdentity();d&&e.translate(.5*-(d.xmax+d.xmin),.5*-(d.ymax+d.ymin));var g=c.anchorPoint;if(g){var h=g.x;g=g.y;"Absolute"!==c.anchorPointUnits?
d&&(h*=d.xmax-d.xmin,g*=d.ymax-d.ymin):(h/=f,g/=f);e.translate(-h,-g)}1!==f&&e.scale(f,f);d=c.rotation??0;c.rotateClockwise&&(d=-d);this._mapRotation&&(d+=this._mapRotation);d&&e.rotate(d*z);d=c.offsetX??0;f=c.offsetY??0;if(d||f){if(this._mapRotation){g=z*this._mapRotation;h=Math.cos(g);g=Math.sin(g);const m=d*g+f*h;d=d*h-f*g;f=m}e.translate(d,f)}d=this.geomUnitsPerPoint();1!==d&&e.scale(d,d);(d=a.getAngle())&&e.rotate(d);e.translate(a.tx,a.ty);this.push(e,c.scaleSymbolsProportionally);for(const m of b)if(m&&
m.symbol&&m.geometry||S.error("Invalid marker graphic",m),this.drawSymbol(m.symbol,m.geometry,m.textString),this._earlyReturn)break;this.pop()}}};l.drawTextSymbol=function(c,a,b){if(c&&q.isPoint(a)&&!(0>=(c.height??10))){var e=B.createIdentity(),d=c.angle??0;(d=-d)&&e.rotate(d*z);d=c.offsetX??0;var f=c.offsetY??0;(d||f)&&e.translate(d,f);d=this.geomUnitsPerPoint();1!==d&&e.scale(d,d);e.translate(a.x,a.y);this.push(e,!1);this.drawText(c,b);this.pop()}};l._buildHatchPolyline=function(c,a,b){var e=(void 0!==
c.separation?c.separation:4)*b,d=void 0!==c.rotation?c.rotation:0;if(0===e)return null;0>e&&(e=-e);for(var f=0,g=.5*e;f>g;)f-=e;for(;f<-g;)f+=e;f=N.create();aa.getBoundsXY(f,a);f[0]-=g;f[1]-=g;f[2]+=g;f[3]+=g;for(var h=[[f[0],f[1]],[f[0],f[3]],[f[2],f[3]],[f[2],f[1]]];180<d;)d-=180;for(;0>d;)d+=180;g=Math.cos(d*z);var m=Math.sin(d*z);d=-e*m;a=e*g;f=(void 0!==c.offsetX?c.offsetX*b:0)*m-(void 0!==c.offsetY?c.offsetY*b:0)*g;let r;var n=c=Number.MAX_VALUE;r=b=-Number.MAX_VALUE;for(var t of h){var p=t[0];
const u=t[1];h=g*p+m*u;p=-m*p+g*u;n=Math.min(n,h);c=Math.min(c,p);r=Math.max(r,h);b=Math.max(b,p)}c=Math.floor(c/e)*e;t=g*n-m*c-d*f/e;n=m*n+g*c-a*f/e;h=g*r-m*c-d*f/e;f=m*r+g*c-a*f/e;e=1+Math.round((b-c)/e);g=[];for(m=0;m<e;m++)t+=d,n+=a,h+=d,f+=a,g.push([[t,n],[h,f]]);return{paths:g}};return k}();let ia=function(k){function l(a,b){a=k.call(this,a,b)||this;a.reset();return a}J._inheritsLoose(l,k);var c=l.prototype;c.reset=function(){this._xmin=this._ymin=Infinity;this._xmax=this._ymax=-Infinity;this._clipCount=
0};c.envelope=function(){return new fa(this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)};c.bounds=function(){return N.fromValues(this._xmin,this._ymin,this._xmax,this._ymax)};c.drawSolidFill=function(a){!a||0<this._clipCount||(q.isPolygon(a)?this._processPath(a.rings,0):q.isPolyline(a)?this._processPath(a.paths,0):q.isExtent(a)?(a=C(a))&&this._processPath(a.rings,0):console.error("drawSolidFill Unexpected geometry type!"))};c.drawSolidStroke=function(a,b,e){!a||0<this._clipCount||
(b=.5*this.transformSize(e??0),q.isPolygon(a)?this._processPath(a.rings,b):q.isPolyline(a)?this._processPath(a.paths,b):q.isExtent(a)?(a=C(a))&&this._processPath(a.rings,b):console.error("drawSolidStroke unexpected geometry type!"))};c.drawMarkerLayer=function(a,b){q.isPolygon(b)&&a.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===a.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===a.markerPlacement.type&&a.markerPlacement.clipAtBoundary)?this._processPath(b.rings,0):k.prototype.drawMarkerLayer.call(this,
a,b)};c.drawHatchFill=function(a,b){this.drawSolidFill(a)};c.drawPictureFill=function(a,b){this.drawSolidFill(a)};c.drawGradientFill=function(a,b){this.drawSolidFill(a)};c.drawPictureStroke=function(a,b){this.drawSolidStroke(a,null,b.width)};c.drawGradientStroke=function(a,b){this.drawSolidStroke(a,null,b.width)};c.pushClipPath=function(a){this.drawSolidFill(a);this._clipCount++};c.popClipPath=function(){this._clipCount--};c.drawImage=function(a,b){var {url:e}=a;a=a.scaleX??1;let d=a*b,f=b;e=this._resourceManager.getResource(e);
!b&&G.isSome(e)&&(d=a*e.width,f=e.height);this._merge(this.transformPt([-d/2,-f/2]),0);this._merge(this.transformPt([-d/2,f/2]),0);this._merge(this.transformPt([d/2,-f/2]),0);this._merge(this.transformPt([d/2,f/2]),0)};c.drawText=function(a,b){if(b&&0!==b.length){this._textRasterizer||(this._textRasterizer=new P);var e=R(a),[d,f]=this._textRasterizer.computeTextSize(b,e);b=0;switch(a.horizontalAlignment){case "Left":b=d/2;break;case "Right":b=-d/2}e=0;switch(a.verticalAlignment){case "Bottom":e=f/
2;break;case "Top":e=-f/2;break;case "Baseline":e=f/6}this._merge(this.transformPt([-d/2+b,-f/2+e]),0);this._merge(this.transformPt([-d/2+b,f/2+e]),0);this._merge(this.transformPt([d/2+b,-f/2+e]),0);this._merge(this.transformPt([d/2+b,f/2+e]),0)}};c._processPath=function(a,b){if(a)for(const e of a)if(a=e?e.length:0,1<a){this._merge(this.transformPt(e[0]),b);for(let d=1;d<a;d++)this._merge(this.transformPt(e[d]),b)}};c._merge=function(a,b){a[0]-b<this._xmin&&(this._xmin=a[0]-b);a[0]+b>this._xmax&&
(this._xmax=a[0]+b);a[1]-b<this._ymin&&(this._ymin=a[1]-b);a[1]+b>this._ymax&&(this._ymax=a[1]+b)};return l}(F),ja=function(k){function l(){var a=k.apply(this,arguments)||this;a._searchPoint=[0,0];a._searchDistPoint=0;a._textInfo=null;return a}J._inheritsLoose(l,k);var c=l.prototype;c.hitTest=function(a,b,e,d,f,g){g*=K.pt2px(1);this.setTransform();this.setGeomUnitsPerPoint(g);this._searchPoint=[(a[0]+a[2])/2,(a[1]+a[3])/2];this._searchDistPoint=(a[2]-a[0])/2/g;this._textInfo=d;this._mapRotation=b&&
("CIMPointSymbol"===b.type&&"Map"!==b.angleAlignment||"CIMTextSymbol"===b.type)?f:0;this._earlyReturn=!1;this.drawSymbol(b,e);return this._earlyReturn};c.drawSolidFill=function(a,b){this._hitTestFill(a)};c.drawHatchFill=function(a,b){this._hitTestFill(a)};c.drawPictureFill=function(a,b){this._hitTestFill(a)};c.drawGradientFill=function(a,b){this._hitTestFill(a)};c.drawSolidStroke=function(a,b,e,d,f,g){this._hitTestStroke(a,e)};c.drawPictureStroke=function(a,b){this._hitTestStroke(a,b.width)};c.drawGradientStroke=
function(a,b){this._hitTestStroke(a,b.width)};c.drawMarkerLayer=function(a,b){a.markerPlacement&&("CIMMarkerPlacementInsidePolygon"===a.markerPlacement.type||"CIMMarkerPlacementPolygonCenter"===a.markerPlacement.type&&a.markerPlacement.clipAtBoundary)?this._hitTestFill(b):k.prototype.drawMarkerLayer.call(this,a,b)};c.pushClipPath=function(a){};c.popClipPath=function(){};c.drawImage=function(a,b){var {url:e}=a;a=a.scaleX??1;e=this._resourceManager.getResource(e);if(!G.isNone(e)&&0!==e.height&&0!==
b){b*=this.geomUnitsPerPoint();a=e.width/e.height*a*b;e=this.reverseTransformPt(this._searchPoint);var d=this._searchDistPoint;Math.abs(e[0])<a/2+d&&Math.abs(e[1])<b/2+d&&(this._earlyReturn=!0)}};c.drawText=function(a,b){if(b=this._textInfo)if(b=b.get(a)){var {text:e,mosaicItem:d}=b;if(d?.glyphMosaicItems?.length){b=a.height??10;var {lineGapType:f,lineGap:g}=a,h=f?T(f,g??0,b):0,m=W.bidiText(e)[1],r="CIMBackgroundCallout"===a.callout?.type;a=ha.shapeGlyphs(d.glyphMosaicItems,m,{scale:b/Q.GLYPH_SIZE,
angle:0,xOffset:0,yOffset:0,hAlign:U(a.horizontalAlignment),vAlign:V(a.verticalAlignment),maxLineWidth:512,lineHeight:Q.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(h||1,4)),decoration:a.font.decoration||"none",isCIM:!0,hasBackground:r});h=this.reverseTransformPt(this._searchPoint);b=h[0];h=h[1];for(const n of a.glyphs)if(b>n.xTopLeft&&b<n.xBottomRight&&h>-n.yBottomRight&&h<-n.yTopLeft){this._earlyReturn=!0;break}}}};c._hitTestFill=function(a){let b=null;if(q.isExtent(a))b=[[[a.xmin,a.ymin],[a.xmin,
a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]];else if(q.isPolygon(a))b=a.rings;else if(q.isPolyline(a))b=a.paths;else return;a=this.reverseTransformPt(this._searchPoint);this._pointInPolygon(a,b)&&(this._earlyReturn=!0);if(!this._earlyReturn){const e=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint();this._nearLine(a,b,e)&&(this._earlyReturn=!0)}};c._hitTestStroke=function(a,b){let e=null;if(q.isExtent(a))e=[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,
a.ymin],[a.xmin,a.ymin]]];else if(q.isPolygon(a))e=a.rings;else if(q.isPolyline(a))e=a.paths;else return;a=this.reverseTransformPt(this._searchPoint);b=(b??0)*this.geomUnitsPerPoint();const d=this.reverseTransformSize(this._searchDistPoint)*this.geomUnitsPerPoint();this._nearLine(a,e,b/2+d)&&(this._earlyReturn=!0)};c._pointInPolygon=function(a,b){let e=0;for(const d of b){b=d.length;for(let f=1;f<b;f++){const g=d[f-1],h=d[f];g[1]>a[1]!==h[1]>a[1]&&(0<(h[0]-g[0])*(a[1]-g[1])-(h[1]-g[1])*(a[0]-g[0])?
e++:e--)}}return 0!==e};c._nearLine=function(a,b,e){for(const f of b){b=f.length;for(let g=1;g<b;g++){var d=f[g-1];const h=f[g];let m=(h[0]-d[0])*(h[0]-d[0])+(h[1]-d[1])*(h[1]-d[1]);if(0!==m&&(m=Math.sqrt(m),Math.abs(((h[0]-d[0])*(a[1]-d[1])-(h[1]-d[1])*(a[0]-d[0]))/m)<e&&(d=((h[0]-d[0])*(a[0]-d[0])+(h[1]-d[1])*(a[1]-d[1]))/m,d>-e&&d<m+e)))return!0}}return!1};return l}(F),ka=function(k){function l(a,b,e,d){b=k.call(this,b,e)||this;b._applyAdditionalRenderProps=d;b._colorSubstitutionHelper=new da;
b._ctx=a;return b}J._inheritsLoose(l,k);var c=l.prototype;c.drawSolidFill=function(a,b){if(a){if(q.isPolygon(a))this._buildPath(a.rings,!0);else if(q.isPolyline(a))this._buildPath(a.paths,!0);else if(q.isExtent(a))this._buildPath(C(a).rings,!0);else if(q.isMultipoint(a))console.log("CanvasDrawHelper.drawSolidFill - No implementation!");else return;a=this._ctx;a.fillStyle="string"===typeof b?b:"rgba("+Math.round(b[0])+","+Math.round(b[1])+","+Math.round(b[2])+","+(b[3]??255)/255+")";a.fill("evenodd")}};
c.drawSolidStroke=function(a,b,e,d,f,g){if(a&&b&&0!==e){if(q.isPolygon(a))this._buildPath(a.rings,!0);else if(q.isPolyline(a))this._buildPath(a.paths,!1);else if(q.isExtent(a))this._buildPath(C(a).rings,!0);else{console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");return}a=this._ctx;a.strokeStyle="string"===typeof b?b:"rgba("+Math.round(b[0])+","+Math.round(b[1])+","+Math.round(b[2])+","+(b[3]??255)/255+")";a.lineWidth=Math.max(this.transformSize(e),.5);this._setCapStyle(d);this._setJoinStyle(f);
a.miterLimit=g;a.stroke()}};c.pushClipPath=function(a){this._ctx.save();if(q.isPolygon(a))this._buildPath(a.rings,!0);else if(q.isPolyline(a))this._buildPath(a.paths,!0);else if(q.isExtent(a))this._buildPath(C(a).rings,!0);else return;this._ctx.clip("evenodd")};c.popClipPath=function(){this._ctx.restore()};c.drawImage=function(a,b){const {colorSubstitutions:e,url:d,tintColor:f}=a;a=a.scaleX??1;var g=this._resourceManager.getResource(d);if(!G.isNone(g)){var h=g.width/g.height*b,m=b;b||(h=g.width,m=
g.height);var r=v.isSVGImage(d)||"src"in g&&v.isSVGImage(g.src);b="getFrame"in g?L.getFirstFrame(g):g;e&&(b=this._colorSubstitutionHelper.applyColorSubstituition(b,e));this._applyAdditionalRenderProps&&!r&&f&&(b=this._colorSubstitutionHelper.tintImageData(b,f));g=this.transformPt([0,0]);var [n,t]=this.getTransformAngle();r=this.transformSize(1);var p=this._ctx;p.save();p.setTransform({m11:a*r*n,m12:a*r*t,m21:-r*t,m22:r*n,m41:g[0],m42:g[1]});p.drawImage(b,-h/2,-m/2,h,m);p.restore()}};c.drawText=function(a,
b){if(b&&0!==b.length&&(this._textRasterizer||(this._textRasterizer=new P),a=R(a),a.size*=this.transformSize(K.px2pt(1)),b=this._textRasterizer.rasterizeText(b,a))){var {size:e,anchorX:d,anchorY:f,canvas:g}=b;b=e[0]*(d+.5);a=e[1]*(f-.5);var h=this._ctx,m=this.transformPt([0,0]),[r,n]=this.getTransformAngle();h.save();h.setTransform({m11:1*r,m12:1*n,m21:-1*n,m22:1*r,m41:m[0]-1*b,m42:m[1]+1*a});h.drawImage(g,0,0);h.restore()}};c.drawPictureFill=function(a,b){if(a){var {colorSubstitutions:e,height:d,
offsetX:f,offsetY:g,rotation:h,scaleX:m,tintColor:r,url:n}=b;b=this._resourceManager.getResource(n);if(!G.isNone(b)){if(q.isPolygon(a))this._buildPath(a.rings,!0);else if(q.isPolyline(a))this._buildPath(a.paths,!0);else if(q.isExtent(a))this._buildPath(C(a).rings,!0);else if(q.isMultipoint(a))console.log("CanvasDrawHelper.drawPictureFill - No implementation!");else return;a=this._ctx;var t=v.isSVGImage(n)||"src"in b&&v.isSVGImage(b.src),p="getFrame"in b?L.getFirstFrame(b):b;e&&(p=this._colorSubstitutionHelper.applyColorSubstituition(p,
e));if(this._applyAdditionalRenderProps){if(t||r&&(p=this._colorSubstitutionHelper.tintImageData(p,r)),t=a.createPattern(p,"repeat"),p=this.transformSize(1),h||(h=0),f=f?p*f:0,g=g?p*g:0,d&&(d*=p),p=d?d/b.height:1,b=m&&d?m*d/b.width:1,0!==h||1!==p||1!==b||0!==f||0!==g){const u=new DOMMatrix;u.rotateSelf(0,0,-h).translateSelf(f,g).scaleSelf(b,p,1);t.setTransform(u)}}else t=a.createPattern(p,"repeat");a.save();a.fillStyle=t;a.fill("evenodd");a.restore()}}};c.drawPictureStroke=function(a,b){if(a){var {colorSubstitutions:e,
capStyle:d,joinStyle:f,miterLimit:g,tintColor:h,url:m,width:r}=b;b=this._resourceManager.getResource(m);if(!G.isNone(b)){if(q.isPolygon(a))var n=a.rings;else if(q.isPolyline(a))n=a.paths;else if(q.isExtent(a))n=C(a).rings;else{q.isMultipoint(a)&&console.log("CanvasDrawHelper.drawPictureStroke - No implementation!");return}r||(r=b.width);a=v.isSVGImage(m)||"src"in b&&v.isSVGImage(b.src);var t="getFrame"in b?L.getFirstFrame(b):b;e&&(t=this._colorSubstitutionHelper.applyColorSubstituition(t,e));this._applyAdditionalRenderProps&&
(a||h&&(t=this._colorSubstitutionHelper.tintImageData(t,h)));b=Math.max(this.transformSize(K.pt2px(r)),.5);a=b/t.width;var p=this._ctx;t=p.createPattern(t,"repeat-y");p.save();this._setCapStyle(d);this._setJoinStyle(f);void 0!==g&&(p.miterLimit=g);p.lineWidth=b;var u;for(let A of n){A=Y.clone(A);var I=u=void 0,D=void 0;let M=I=void 0;n=A;for(var E=n[0],x=1;x<n.length;)M=n[x][0]-E[0],I=n[x][1]-E[1],I=0!==M?I/M:Math.PI/2,void 0!==D&&1E-4>=I-D?(n.splice(x-1,1),E=u):(u=E,E=n[x],x++),D=I;if(A&&!(1>=A.length))for(n=
this.transformPt(A[0]),D=1;D<A.length;D++)u=this.transformPt(A[D]),E=180/Math.PI*Math.atan2(u[1]-n[1],u[0]-n[0]),x=new DOMMatrix,x.translateSelf(0,n[1]-b/2).scaleSelf(a,a,1).rotateSelf(0,0,90-E),t.setTransform(x),p.strokeStyle=t,p.beginPath(),p.moveTo(n[0],n[1]),p.lineTo(u[0],u[1]),p.stroke(),n=u}p.restore()}}};c._buildPath=function(a,b){const e=this._ctx;e.beginPath();if(a)for(const d of a)if(a=d?d.length:0,1<a){let f=this.transformPt(d[0]);e.moveTo(f[0],f[1]);for(let g=1;g<a;g++)f=this.transformPt(d[g]),
e.lineTo(f[0],f[1]);b&&e.closePath()}};c._setCapStyle=function(a){switch(a){case H.LineCapStyle.Butt:this._ctx.lineCap="butt";break;case H.LineCapStyle.Round:this._ctx.lineCap="round";break;case H.LineCapStyle.Square:this._ctx.lineCap="square"}};c._setJoinStyle=function(a){switch(a){case H.LineJoinStyle.Bevel:this._ctx.lineJoin="bevel";break;case H.LineJoinStyle.Round:this._ctx.lineJoin="round";break;case H.LineJoinStyle.Miter:this._ctx.lineJoin="miter"}};return l}(F);const C=k=>k?{spatialReference:k.spatialReference,
rings:[[[k.xmin,k.ymin],[k.xmin,k.ymax],[k.xmax,k.ymax],[k.xmax,k.ymin],[k.xmin,k.ymin]]]}:null,U=k=>{switch(k){case "Left":return y.HAlign.Left;case "Right":return y.HAlign.Right;case "Center":return y.HAlign.Center;case "Justify":return S.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),y.HAlign.Center}},V=k=>{switch(k){case "Top":return y.VAlign.Top;case "Center":return y.VAlign.Center;case "Bottom":return y.VAlign.Bottom;case "Baseline":return y.VAlign.Baseline}},
T=(k,l,c)=>{switch(k){case "ExtraLeading":return 1+l/c;case "Multiple":return l;case "Exact":return l/c}};w.CIMSymbolDrawHelper=F;w.C_DEG_TO_RAD=z;w.CanvasDrawHelper=ka;w.EnvDrawHelper=ia;w.HittestDrawHelper=ja;w.Transformation=B;w.horizontalAlignment2HAlign=U;w.lineGapType2LineHeight=T;w.verticalAlignment2VAlign=V;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});