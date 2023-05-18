// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../core/BidiText ../../core/lang ../../core/Logger ../../core/maybe ../../core/RandomLCG ../../core/screenUtils ../../geometry/support/aaBoundingRect ../../geometry/support/boundsUtils ../../support/arcadeOnDemand ./CIMPlacements ./CIMSymbolDrawHelper ./enums ./utils ../../views/2d/arcade/callExpressionWithFeature ../../views/2d/engine/vectorTiles/GeometryUtils ../../views/2d/engine/webgl/definitions ../../views/2d/engine/webgl/mesh/templates/shapingUtils".split(" "),
function(B,S,aa,T,H,K,G,ba,C,D,ca,da,U,E,q,p,ea,I,L,fa){function J(d,a,c){switch(a.type){case "CIMSymbolReference":return J(d,a.symbol,c);case "CIMPointSymbol":null==c&&(c={x:0,y:0});d.drawSymbol(a,c);break;case "CIMLineSymbol":null==c&&(c={paths:[[[0,0],[10,0]]]});d.drawSymbol(a,c);break;case "CIMPolygonSymbol":null==c&&(c={rings:[[[0,0],[0,10],[10,10],[10,0],[0,0]]]});d.drawSymbol(a,c);break;case "CIMTextSymbol":d.drawSymbol(a,{x:0,y:0});break;case "CIMVectorMarker":c=new U.Placement,d.drawMarker(a,
c)}return d.envelope()}function ha(d){if(!d)return 0;switch(d.type){case "CIMMarkerPlacementAlongLineSameSize":return Math.abs(d.offset);case "CIMMarkerPlacementAlongLineRandomSize":return Math.abs(d.offset);case "CIMMarkerPlacementAtExtremities":return Math.abs(d.offset);case "CIMMarkerPlacementAtMeasuredUnits":return Math.abs(d.offset);case "CIMMarkerPlacementAtRatioPositions":return Math.abs(d.offset);case "CIMMarkerPlacementInsidePolygon":return 0;case "CIMMarkerPlacementOnLine":return Math.abs(d.offset);
case "CIMMarkerPlacementOnVertices":return Math.abs(d.offset);case "CIMMarkerPlacementPolygonCenter":return 0;default:return 0}}function ia(d){if(!d)return 0;switch(d.type){case "CIMGeometricEffectArrow":return Math.abs(.5*d.width);case "CIMGeometricEffectBuffer":return Math.abs(d.size);case "CIMGeometricEffectExtension":return Math.abs(d.length);case "CIMGeometricEffectJog":return Math.abs(.5*d.length);case "CIMGeometricEffectMove":return Math.max(Math.abs(p.getValue(d.offsetX)),Math.abs(p.getValue(d.offsetY)));
case "CIMGeometricEffectOffset":return Math.abs(d.offset);case "CIMGeometricEffectOffsetTangent":return Math.abs(d.offset);case "CIMGeometricEffectRadial":return Math.abs(d.length);case "CIMGeometricEffectRegularPolygon":return Math.abs(d.radius);case "CIMGeometricEffectRotate":return 0;case "CIMGeometricEffectScale":return 0;case "CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(d.fromWidth),Math.abs(d.toWidth));case "CIMGeometricEffectWave":return Math.abs(d.amplitude);default:return 0}}
function V(d){if(!d)return 0;let a=0;for(const c of d)a+=ia(c);return a}function ja(d,a,c){d.effects&&!G.isSome(a.geometryEngine)&&(a.geometryEnginePromise?c.push(a.geometryEnginePromise):p.isGeometryEngineRequired(d.effects)&&(a.geometryEnginePromise=p.importGeometryEngine(),c.push(a.geometryEnginePromise),a.geometryEnginePromise.then(b=>a.geometryEngine=b)))}const W=Math.PI,ka=W/2,v=96/72,X=Math.PI/180,M=K.getLogger("esri.symbols.cim.CIMSymbolHelper");K=function(){function d(){}var a=d.prototype;
a.getSymbolInflateSize=function(c,b,e,g,f){c||(c=[0,0,0,0]);return b?this._getInflateSize(c,b,e,g,f):c};d.safeSize=function(c){const b=Math.max(Math.abs(c[0]),Math.abs(c[2]));c=Math.max(Math.abs(c[1]),Math.abs(c[3]));return Math.sqrt(b*b+c*c)};a._vectorMarkerBounds=function(c,b,e,g){let f=!0;const k=D.create();if(b&&b.markerGraphics)for(const l of b.markerGraphics)b=[0,0,0,0],l.geometry&&(ca.getBoundsXY(k,l.geometry),b[0]=0,b[1]=0,b[2]=0,b[3]=0,this.getSymbolInflateSize(b,l.symbol,e,0,g),k[0]+=b[0],
k[1]+=b[1],k[2]+=b[2],k[3]+=b[3],f?(c[0]=k[0],c[1]=k[1],c[2]=k[2],c[3]=k[3],f=!1):(c[0]=Math.min(c[0],k[0]),c[1]=Math.min(c[1],k[1]),c[2]=Math.max(c[2],k[2]),c[3]=Math.max(c[3],k[3])));return c};a._getInflateSize=function(c,b,e,g,f){return void 0!==b.symbolLayers?(c=this._getLayersInflateSize(c,b.symbolLayers,e,g,f),b=V(b.effects),0<b&&(c[0]-=b,c[1]-=b,c[2]+=b,c[3]+=b),c):this._getTextInflatedSize(c,b,f)};a._getLayersInflateSize=function(c,b,e,g,f){let k=!0;if(!b)return c;for(const r of b)if(r){b=
[0,0,0,0];switch(r.type){case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":var l=r,h=l.width;null!=h&&(h=l.capStyle===q.LineCapStyle.Square||l.joinStyle===q.LineJoinStyle.Miter?h/1.4142135623730951:h/2,b[0]=-h,b[1]=-h,b[2]=h,b[3]=h);break;case "CIMCharacterMarker":case "CIMVectorMarker":case "CIMPictureMarker":l=r;if("CIMVectorMarker"===r.type){if(h=r,b=this._vectorMarkerBounds(b,h,e,f),h.frame){var m=(h.frame.xmin+h.frame.xmax)/2,n=(h.frame.ymin+h.frame.ymax)/2;b[0]-=m;b[1]-=
n;b[2]-=m;b[3]-=n;null!=h.size&&(h=h.size/(h.frame.ymax-h.frame.ymin),b[0]*=h,b[1]*=h,b[2]*=h,b[3]*=h)}}else"CIMPictureMarker"===r.type?(h=r,n=e.getResource(h.url),m=1,G.isSome(n)&&n.height&&(m=n.width/n.height),null!=l.size&&(b=l.size/2,h=l.size*m*h.scaleX/2,b=[-h,-b,h,b])):null!=l.size&&(b=l.size/2,b=[-b,-b,b,b]);l.anchorPoint&&("Absolute"===l.anchorPointUnits?(h=l.anchorPoint.x,m=l.anchorPoint.y):(h=l.anchorPoint.x*(b[2]-b[0]),m=l.anchorPoint.y*(b[3]-b[1])),b[0]-=h,b[1]-=m,b[2]-=h,b[3]-=m);h=p.getValue(l.rotation);
l.rotateClockwise&&(h=-h);g&&(h-=g);h&&(m=X*h,h=Math.cos(m),m=Math.sin(m),n=D.create([I.C_INFINITY,I.C_INFINITY,-I.C_INFINITY,-I.C_INFINITY]),D.expandPointInPlace(n,[b[0]*h-b[1]*m,b[0]*m+b[1]*h]),D.expandPointInPlace(n,[b[0]*h-b[3]*m,b[0]*m+b[3]*h]),D.expandPointInPlace(n,[b[2]*h-b[1]*m,b[2]*m+b[1]*h]),D.expandPointInPlace(n,[b[2]*h-b[3]*m,b[2]*m+b[3]*h]),b=n);h=p.getValue(l.offsetX);m=p.getValue(l.offsetY);if(g){var t=X*g;n=Math.cos(t);t=Math.sin(t);const w=h*t+m*n;h=h*n-m*t;m=w}b[0]+=h;b[1]+=m;
b[2]+=h;b[3]+=m;l=ha(l.markerPlacement);0<l&&(b[0]-=l,b[1]-=l,b[2]+=l,b[3]+=l)}l=V(r.effects);0<l&&(b[0]-=l,b[1]-=l,b[2]+=l,b[3]+=l);k?(c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3],k=!1):(c[0]=Math.min(c[0],b[0]),c[1]=Math.min(c[1],b[1]),c[2]=Math.max(c[2],b[2]),c[3]=Math.max(c[3],b[3]))}return c};a._getTextInflatedSize=function(c,b,e){const g=b.height??10;c[0]=-g/2;c[1]=-g/2;c[2]=g/2;c[3]=g/2;if(!e)return c;e=e.get(b);if(!e)return c;const {text:f,mosaicItem:k}=e;if(!k?.glyphMosaicItems?.length)return c;
const {lineGapType:l,lineGap:h}=b;e=l?E.lineGapType2LineHeight(l,h??0,g):0;const m=T.bidiText(f)[1],n="CIMBackgroundCallout"===b.callout?.type;b=fa.shapeGlyphs(k.glyphMosaicItems,m,{scale:g/L.GLYPH_SIZE,angle:p.getValue(b.angle),xOffset:p.getValue(b.offsetX),yOffset:p.getValue(b.offsetY),hAlign:E.horizontalAlignment2HAlign(b.horizontalAlignment),vAlign:E.verticalAlignment2VAlign(b.verticalAlignment),maxLineWidth:512,lineHeight:L.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(e||1,4)),decoration:b.font.decoration||
"none",isCIM:!0,hasBackground:n}).boundsT;c[0]=b.x-b.halfWidth;c[1]=-b.y-b.halfHeight;c[2]=b.x+b.halfWidth;c[3]=-b.y+b.halfHeight;return c};return d}();let A=function(){function d(){}d.getEnvelope=function(a,c,b){if(!a)return null;b=new E.EnvDrawHelper(b);if(Array.isArray(a)){let e;for(const g of a)e?e.union(J(b,g,c)):e=J(b,g,c);return e}return J(b,a,c)};d.getTextureAnchor=function(a,c){a=this.getEnvelope(a,null,c);if(!a)return[0,0,0];c=a.height*v+2;return[-((a.x+.5*a.width)*v)/(a.width*v+2),-((a.y+
.5*a.height)*v)/c,c]};d.rasterize=function(a,c,b,e,g=!0){var f=b||this.getEnvelope(c,null,e);if(!f)return[null,0,0,0,0];const k=(f.x+.5*f.width)*v,l=(f.y+.5*f.height)*v;a.width=f.width*v;a.height=f.height*v;b||(a.width+=2,a.height+=2);b=a.getContext("2d");f=E.Transformation.createScale(v,-v);f.translate(.5*a.width-k,.5*a.height+l);e=new E.CanvasDrawHelper(b,e,f);switch(c.type){case "CIMPointSymbol":e.drawSymbol(c,{type:"point",x:0,y:0});break;case "CIMVectorMarker":f=new U.Placement,e.drawMarker(c,
f)}c=b.getImageData(0,0,a.width,a.height);c=new Uint8Array(c.data);if(g)for(e=0;e<c.length;e+=4)g=c[e+3]/255,c[e]*=g,c[e+1]*=g,c[e+2]*=g;return[c,a.width,a.height,-k/a.width,-l/a.height]};d.fromTextSymbol=function(a){const {angle:c,color:b,font:e,haloColor:g,haloSize:f,horizontalAlignment:k,kerning:l,text:h,verticalAlignment:m,xoffset:n,yoffset:t,backgroundColor:r,borderLineColor:w,borderLineSize:y}=a;let F,N,Y;if(e){var O=e.family;var z=e.style;var x=e.weight;F=e.size;N=e.decoration}a=!1;h&&(a=T.bidiText(h)[1]);
if(r||y)Y={type:"CIMBackgroundCallout",margin:null,backgroundSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",color:u(r)},{type:"CIMSolidStroke",color:u(w),width:y}]},accentBarSymbol:null,gap:null,leaderLineSymbol:null,lineStyle:null};var la=q.BlockProgression.BTT,ma=q.FontEffects.Normal,na=q.FontEncoding.Unicode;O=O||"Arial";b:{if(x)switch(x.toLowerCase()){case "bold":case "bolder":x="bold";break b}x=""}b:{if(z)switch(z.toLowerCase()){case "italic":case "oblique":z="italic";break b}z=
""}x=x&&z?`${x}-${z}`:`${x}${z}`;return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:c,blockProgression:la,depth3D:1,extrapolateBaselines:!0,fontEffects:ma,fontEncoding:na,fontFamilyName:O,fontStyleName:x,fontType:q.FontType.Unspecified,haloSize:f,height:F,
hinting:q.GlyphHinting.Default,horizontalAlignment:oa(k??"center"),kerning:l,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:p.getValue(n),offsetY:p.getValue(t),strikethrough:"line-through"===N,underline:"underline"===N,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u(b)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u(g)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:a?
q.TextReadingDirection.RTL:q.TextReadingDirection.LTR,verticalAlignment:pa(m??"baseline"),verticalGlyphOrientation:q.VerticalGlyphOrientation.Right,wordSpacing:100,billboardMode3D:q.BillBoardMode.FaceNearPlane,callout:Y},textString:h}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}};d.fromPictureFillSymbol=function(a){const {height:c,outline:b,width:e,xoffset:g,xscale:f,yoffset:k,yscale:l}=a,h=[],m={type:"CIMPolygonSymbol",symbolLayers:h};if(b){const {cap:t,join:r,
miterLimit:w,width:y}=b;h.push({type:"CIMSolidStroke",color:u(b.color),capStyle:P(t),joinStyle:Q(r),miterLimit:w,width:y})}let n=a.url;"esriPFS"===a.type&&a.imageData&&(n=a.imageData);a="angle"in a?a.angle??0:0;h.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:q.TextureFilter.Picture,tintColor:null,url:n,height:(c??0)*(l||1),width:(e??0)*(f||1),offsetX:p.getValue(g),offsetY:p.getValue(k),rotation:p.getValue(-a),colorSubstitutions:null});return m};d.fromSimpleFillSymbol=
function(a){const {color:c,style:b,outline:e}=a;a=[];const g={type:"CIMPolygonSymbol",symbolLayers:a};var f=null;if(e){const {cap:k,join:l,style:h}=e;"solid"!==h&&"none"!==h&&"esriSLSSolid"!==h&&"esriSLSNull"!==h&&(f=[{type:"CIMGeometricEffectDashes",dashTemplate:R(h,k),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);a.push({type:"CIMSolidStroke",color:u(e.color),capStyle:P(k),joinStyle:Q(l),miterLimit:e.miterLimit,width:e.width,effects:f})}if(b&&"solid"!==b&&"none"!==b&&"esriSFSSolid"!==
b&&"esriSFSNull"!==b){f={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:u(c),capStyle:q.LineCapStyle.Butt,joinStyle:q.LineJoinStyle.Miter,width:.75}]};let k=0;const l=C.px2pt("vertical"===b||"horizontal"===b||"cross"===b||"esriSFSCross"===b||"esriSFSVertical"===b||"esriSFSHorizontal"===b?8:10);switch(b){case "vertical":case "esriSFSVertical":k=90;break;case "forward-diagonal":case "esriSFSForwardDiagonal":k=-45;break;case "backward-diagonal":case "esriSFSBackwardDiagonal":k=45;break;
case "cross":case "esriSFSCross":k=0;break;case "diagonal-cross":case "esriSFSDiagonalCross":k=-45}a.push({type:"CIMHatchFill",lineSymbol:f,offsetX:0,offsetY:0,rotation:k,separation:l});"cross"===b||"esriSFSCross"===b?a.push({type:"CIMHatchFill",lineSymbol:H.clone(f),offsetX:0,offsetY:0,rotation:90,separation:l}):("diagonal-cross"===b||"esriSFSDiagonalCross"===b)&&a.push({type:"CIMHatchFill",lineSymbol:H.clone(f),offsetX:0,offsetY:0,rotation:45,separation:l})}else!b||"solid"!==b&&"esriSFSSolid"!==
b||a.push({type:"CIMSolidFill",enable:!0,color:u(c)});return g};d.fromSimpleLineSymbol=function(a){const {cap:c,color:b,join:e,marker:g,miterLimit:f,style:k,width:l}=a;a=null;"solid"!==k&&"none"!==k&&"esriSLSSolid"!==k&&"esriSLSNull"!==k&&(a=[{type:"CIMGeometricEffectDashes",dashTemplate:R(k,c),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);const h=[];if(g){let m;switch(g.placement){case "begin-end":m=q.ExtremityPlacement.Both;break;case "begin":m=q.ExtremityPlacement.JustBegin;
break;case "end":m=q.ExtremityPlacement.JustEnd;break;default:m=q.ExtremityPlacement.None}const n=d.fromSimpleMarker(g,l,b).symbolLayers[0];n.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:m,offsetAlongLine:0};h.push(n)}"none"!==k&&"esriSLSNull"!==k&&h.push({type:"CIMSolidStroke",color:u(b),capStyle:P(c),joinStyle:Q(e),miterLimit:f,width:l,effects:a});return{type:"CIMLineSymbol",symbolLayers:h}};d.fromPictureMarker=function(a){const {angle:c,height:b,
width:e,xoffset:g,yoffset:f}=a;let k=a.url;"esriPMS"===a.type&&a.imageData&&(k=a.imageData);return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:q.TextureFilter.Picture,tintColor:null,url:k,size:b,width:e,offsetX:p.getValue(g),offsetY:p.getValue(f),rotation:p.getValue(-c)}]}};d.fromSimpleMarker=function(a,c,b){var {style:e}=a;b=a.color??b;if("path"===e){c=[];"outline"in a&&a.outline&&(e=a.outline,c.push({type:"CIMSolidStroke",enable:!0,
width:C.pt2px(Math.round(C.px2pt(e.width))),color:u(e.color)}));c.push({type:"CIMSolidFill",enable:!0,color:u(b),path:a.path});const [l,h]=Z("square");return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:p.getValue(-a.angle),size:p.getValue(a.size||6),offsetX:p.getValue(a.xoffset),offsetY:p.getValue(a.yoffset),frame:l,markerGraphics:[{type:"CIMMarkerGraphic",geometry:h,symbol:{type:"CIMPolygonSymbol",symbolLayers:c}}]}]}}const [g,f]=Z(e);if(f&&g){e=[];if("outline"in
a&&a.outline){var k=a.outline;e.push({type:"CIMSolidStroke",enable:!0,width:null!=k.width&&.667<k.width?C.pt2px(Math.round(C.px2pt(k.width))):k.width,color:u(k.color)})}else!c||"line-marker"!==a.type||"cross"!==a.style&&"x"!==a.style||e.push({type:"CIMSolidStroke",enable:!0,width:c,color:u(b)});e.push({type:"CIMSolidFill",enable:!0,color:u(b)});b={type:"CIMPolygonSymbol",symbolLayers:e};k={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:p.getValue(-a.angle),size:p.getValue(a.size||
6*c),offsetX:p.getValue(a.xoffset),offsetY:p.getValue(a.yoffset),frame:g,markerGraphics:[{type:"CIMMarkerGraphic",geometry:f,symbol:b}]}]}}return k};d.fromCIMHatchFill=function(a,c){const b=c*(a.separation??4),e=b/2;a=H.clone(a.lineSymbol);a.symbolLayers?.forEach(f=>{switch(f.type){case "CIMSolidStroke":null!=f.width&&(f.width*=c);f.effects?.forEach(k=>{"CIMGeometricEffectDashes"===k.type&&(k.dashTemplate=k.dashTemplate.map(l=>l*c))});break;case "CIMVectorMarker":null!=f.size&&(f.size*=c),f=f.markerPlacement,
null!=f&&"placementTemplate"in f&&(f.placementTemplate=f.placementTemplate.map(k=>k*c))}});for(var g=this._getLineSymbolPeriod(a)||4;4>g;)g*=2;g/=2;return{type:"CIMVectorMarker",frame:{xmin:-g,xmax:g,ymin:-e,ymax:e},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-g,0],[g,0]]]},symbol:a}],size:b}};d.fetchResources=function(a,c,b){if(a&&c)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a=a.symbolLayers)for(const e of a)switch(ja(e,c,b),e.type){case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMCharacterMarker":case "CIMPictureMarker":"url"in
e&&e.url&&b.push(c.fetchResource(e.url,null));break;case "CIMVectorMarker":if(a=e.markerGraphics)for(const g of a)g&&(a=g.symbol)&&d.fetchResources(a,c,b)}}};d._getLineSymbolPeriod=function(a){if(a){const c=this._getEffectsRepeat(a.effects);if(c)return c;if(a.symbolLayers)for(const b of a.symbolLayers)if(b){if(a=this._getEffectsRepeat(b.effects))return a;switch(b.type){case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":case "CIMObjectMarker3D":case "CIMglTFMarker3D":if(a=this._getPlacementRepeat(b.markerPlacement))return a}}}return 0};
d._getEffectsRepeat=function(a){if(a)for(var c of a)if(c)switch(c.type){case "CIMGeometricEffectDashes":if((a=c.dashTemplate)&&a.length){c=0;for(const b of a)c+=b;a.length&1&&(c*=2);return c}break;case "CIMGeometricEffectWave":return c.period;default:M.error(`unsupported geometric effect type ${c.type}`)}return 0};d._getPlacementRepeat=function(a){if(a)switch(a.type){case "CIMMarkerPlacementAlongLineSameSize":case "CIMMarkerPlacementAlongLineRandomSize":case "CIMMarkerPlacementAlongLineVariableSize":if((a=
a.placementTemplate)&&a.length){let c=0;for(const b of a)c+=+b;a.length&1&&(c*=2);return c}}return 0};d.fromCIMInsidePolygon=function(a){var c=a.markerPlacement;const b={...a,markerPlacement:null,anchorPoint:null};a=Math.abs(c.stepX);const e=Math.abs(c.stepY);var g=(c.randomness??100)/100;let f,k;if("Random"===c.gridType){var l=C.px2pt(L.RANDOM_INSIDE_POLYGON_TEXTURE_SIZE);const h=Math.max(Math.floor(l/a),1),m=Math.max(Math.floor(l/e),1);l=h*a/2;f=m*e/2;k=2*f;c=new ba(c.seed);const n=g*a/1.5,t=g*
e/1.5;g=[];for(let r=0;r<h;r++)for(let w=0;w<m;w++){const y=r*a-l+n*(.5-c.getFloat()),F=w*e-f+t*(.5-c.getFloat());g.push({x:y,y:F});0===r&&g.push({x:y+2*l,y:F});0===w&&g.push({x:y,y:F+2*f})}}else!0===c.shiftOddRows?(l=a/2,f=e,k=2*e,g=[{x:-l,y:0},{x:l,y:0},{x:0,y:f},{x:0,y:-f}]):(l=a/2,f=e/2,k=e,g=[{x:-a,y:0},{x:0,y:-e},{x:-a,y:-e},{x:0,y:0},{x:a,y:0},{x:0,y:e},{x:a,y:e},{x:-a,y:e},{x:a,y:-e}]);a=g.map(h=>({type:"CIMMarkerGraphic",geometry:h,symbol:{type:"CIMPointSymbol",symbolLayers:[b]}}));return{type:"CIMVectorMarker",
frame:{xmin:-l,xmax:l,ymin:-f,ymax:f},markerGraphics:a,size:k}};d.getSize=function(a){if(a)switch(a.type){case "CIMTextSymbol":return a.height;case "CIMPointSymbol":var c=0;if(a.symbolLayers)for(var b of a.symbolLayers)if(b)switch(b.type){case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":case "CIMObjectMarker3D":case "CIMglTFMarker3D":a=b.size,null!=a&&a>c&&(c=a)}return c;case "CIMLineSymbol":case "CIMPolygonSymbol":b=0;if(a.symbolLayers)for(c of a.symbolLayers)if(c)switch(c.type){case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":a=
c.width;null!=a&&a>b&&(b=a);break;case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":case "CIMObjectMarker3D":case "CIMglTFMarker3D":c.markerPlacement&&p.isCIMMarkerStrokePlacement(c.markerPlacement)&&(a=c.size,null!=a&&a>b&&(b=a))}return b}};d.getMarkerScaleRatio=function(a){if(a)switch(a.type){case "CIMVectorMarker":if(!1!==a.scaleSymbolsProportionally&&a.frame&&null!=a.size)return a.size/(a.frame.ymax-a.frame.ymin)}return 1};return d}(),qa=function(){function d(){}d.findApplicableOverrides=
function(a,c,b){if(a&&c){if(a.primitiveName){let e=!1;for(const g of b)if(g.primitiveName===a.primitiveName){e=!0;break}if(!e)for(const g of c)g.primitiveName===a.primitiveName&&b.push(g)}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,c,b);if(a.symbolLayers)for(const e of a.symbolLayers)d.findApplicableOverrides(e,c,b);break;case "CIMSolidStroke":case "CIMPictureStroke":case "CIMGradientStroke":case "CIMSolidFill":case "CIMPictureFill":case "CIMHatchFill":case "CIMGradientFill":case "CIMVectorMarker":case "CIMCharacterMarker":case "CIMPictureMarker":if(a.effects)for(const e of a.effects)d.findApplicableOverrides(e,
c,b);a.markerPlacement&&d.findApplicableOverrides(a.markerPlacement,c,b);if("CIMVectorMarker"===a.type){if(a.markerGraphics)for(const e of a.markerGraphics)d.findApplicableOverrides(e,c,b),d.findApplicableOverrides(e.symbol,c,b)}else"CIMCharacterMarker"===a.type?d.findApplicableOverrides(a.symbol,c,b):"CIMHatchFill"===a.type?d.findApplicableOverrides(a.lineSymbol,c,b):"CIMPictureMarker"===a.type&&d.findApplicableOverrides(a.animatedSymbolProperties,c,b)}}};d.findEffectOverrides=function(a,c,b){if(c&&
a){var e=a.length;for(let g=0;g<e;g++){const f=a[g]?.primitiveName;if(f){let k=!1;for(const l of b)if(l.primitiveName===f){k=!0;break}if(!k)for(const l of c)l.primitiveName===f&&b.push(l)}}}};d.resolveSymbolOverrides=function(){var a=S._asyncToGenerator(function*(c,b,e,g,f,k,l){if(!c||!c.symbol)return null;let {symbol:h,primitiveOverrides:m}=c;c=!!m;if(!c&&!g)return h;h=H.clone(h);let n=!0;b||(b={attributes:{}},n=!1);c&&(n||(m=m.filter(t=>!t.valueExpressionInfo?.expression.includes("$feature"))),
l||(m=m.filter(t=>!t.valueExpressionInfo?.expression.includes("$view"))),0<m.length&&(c=p.attributesToFields(b.attributes),yield d.evaluateOverrides(m,b,{spatialReference:e,fields:c,geometryType:f},k,l)),d.applyOverrides(h,m));g&&d.applyDictionaryTextOverrides(h,b,g);return h});return function(c,b,e,g,f,k,l){return a.apply(this,arguments)}}();d.evaluateOverrides=function(){var a=S._asyncToGenerator(function*(c,b,e,g,f){if(b){var k;for(const l of c)(c=l.valueExpressionInfo)&&e&&e.geometryType&&(k||
(k=[]),l.value=void 0,c=da.createRendererExpression(c.expression,e.spatialReference,e.fields).then(h=>{l.value=ea(h,b,{$view:f},e.geometryType,g)}),k.push(c));void 0!==k&&0<k.length&&(yield Promise.all(k))}});return function(c,b,e,g,f){return a.apply(this,arguments)}}();d.applyDictionaryTextOverrides=function(a,c,b,e="Normal"){if(a&&a.type)switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":case "CIMTextSymbol":var g=a.symbolLayers;if(!g)break;for(var f of g)f&&"CIMVectorMarker"===
f.type&&d.applyDictionaryTextOverrides(f,c,b,"CIMTextSymbol"===a.type?a.textCase:e);break;case "CIMVectorMarker":a=a.markerGraphics;if(!a)break;for(g of a)g&&d.applyDictionaryTextOverrides(g,c,b);break;case "CIMMarkerGraphic":(f=a.textString)&&f.includes("[")&&(b=p.analyzeTextParts(f,b),a.textString=p.assignTextValuesFromFeature(c,b,e))}};d.applyOverrides=function(a,c,b,e){if(a.primitiveName)for(const f of c)if(f.primitiveName===a.primitiveName){var g=(g=f.propertyName)?g.charAt(0).toLowerCase()+
g.substr(1):g;e&&e.push({cim:a,nocapPropertyName:g,value:a[g]});f.expression&&(f.value=d.toValue(f.propertyName,f.expression));if(b){let k=!1;for(const l of b)l.primitiveName===a.primitiveName&&(k=!0);k||b.push(f)}G.isSome(f.value)&&(a[g]=f.value)}switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":if(a.effects)for(const f of a.effects)d.applyOverrides(f,c,b,e);if(a.symbolLayers)for(const f of a.symbolLayers)d.applyOverrides(f,c,b,e);break;case "CIMSolidStroke":case "CIMSolidFill":case "CIMVectorMarker":if(a.effects)for(const f of a.effects)d.applyOverrides(f,
c,b,e);if("CIMVectorMarker"===a.type&&a.markerGraphics)for(const f of a.markerGraphics)d.applyOverrides(f,c,b,e),d.applyOverrides(f.symbol,c,b,e)}};d.restoreOverrides=function(a){for(const c of a)c.cim[c.nocapPropertyName]=c.value};d.buildOverrideKey=function(a){let c="";for(const b of a)void 0!==b.value&&(c+=`${b.primitiveName}${b.propertyName}${JSON.stringify(b.value)}`);return c};d.toValue=function(a,c){return"DashTemplate"===a?c.split(" ").map(b=>Number(b)):"Color"===a?(a=(new aa(c)).toRgba(),
a[3]*=255,a):c};return d}();const P=d=>{if(!d)return q.LineCapStyle.Butt;switch(d){case "butt":return q.LineCapStyle.Butt;case "square":return q.LineCapStyle.Square;case "round":return q.LineCapStyle.Round}},Q=d=>{if(!d)return q.LineJoinStyle.Miter;switch(d){case "miter":return q.LineJoinStyle.Miter;case "round":return q.LineJoinStyle.Round;case "bevel":return q.LineJoinStyle.Bevel}},oa=d=>{if(G.isNone(d))return"Center";switch(d){case "left":return"Left";case "right":return"Right";case "center":return"Center"}},
pa=d=>{if(G.isNone(d))return"Center";switch(d){case "baseline":return"Baseline";case "top":return"Top";case "middle":return"Center";case "bottom":return"Bottom"}},u=d=>{if(!d)return[0,0,0,0];const {r:a,g:c,b,a:e}=d;return[a,c,b,255*e]},R=(d,a)=>{a="butt"===a;switch(d){case "dash":case "esriSLSDash":return a?[4,3]:[3,4];case "dash-dot":case "esriSLSDashDot":return a?[4,3,1,3]:[3,4,0,4];case "dot":case "esriSLSDot":return a?[1,3]:[0,4];case "long-dash":case "esriSLSLongDash":return a?[8,3]:[7,4];case "long-dash-dot":case "esriSLSLongDashDot":return a?
[8,3,1,3]:[7,4,0,4];case "long-dash-dot-dot":case "esriSLSDashDotDot":return a?[8,3,1,3,1,3]:[7,4,0,4,0,4];case "short-dash":case "esriSLSShortDash":return a?[4,1]:[3,2];case "short-dash-dot":case "esriSLSShortDashDot":return a?[4,1,1,1]:[3,2,0,2];case "short-dash-dot-dot":case "esriSLSShortDashDotDot":return a?[4,1,1,1,1,1]:[3,2,0,2,0,2];case "short-dot":case "esriSLSShortDot":return a?[1,1]:[0,2];case "solid":case "esriSLSSolid":case "none":return M.error("Unexpected: style does not require rasterization"),
[0,0];default:return M.error(`Tried to rasterize SLS, but found an unexpected style: ${d}!`),[0,0]}},Z=d=>{if("circle"===d||"esriSMSCircle"===d){var a=Math.acos(.995);d=Math.ceil(W/a/4);0===d&&(d=1);a=ka/d;d*=4;var c=[];c.push([50,0]);for(let b=1;b<d;b++)c.push([50*Math.cos(b*a),-50*Math.sin(b*a)]);c.push([50,0]);a={rings:[c]};c={xmin:-50,ymin:-50,xmax:50,ymax:50}}else"cross"===d||"esriSMSCross"===d?(a={rings:[[[0,50],[0,0],[50,0],[50,-0],[0,-0],[0,-50],[-0,-50],[-0,-0],[-50,-0],[-50,0],[-0,0],[-0,
50],[0,50]]]},c={xmin:-50,ymin:-50,xmax:50,ymax:50}):"diamond"===d||"esriSMSDiamond"===d?(a={rings:[[[-50,0],[0,50],[50,0],[0,-50],[-50,0]]]},c={xmin:-50,ymin:-50,xmax:50,ymax:50}):"square"===d||"esriSMSSquare"===d?(a={rings:[[[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]]]},c={xmin:-50,ymin:-50,xmax:50,ymax:50}):"x"===d||"esriSMSX"===d?(a={rings:[[[0,0],[50,50],[50,50],[0,0],[50,-50],[50,-50],[0,-0],[-50,-50],[-50,-50],[-0,0],[-50,50],[-50,50],[0,0]]]},c={xmin:-50,ymin:-50,xmax:50,ymax:50}):"triangle"===
d||"esriSMSTriangle"===d?(d=2/3*100,c=d-100,a={rings:[[[-57.735026918962575,c],[0,d],[57.735026918962575,c],[-57.735026918962575,c]]]},c={xmin:-57.735026918962575,ymin:c,xmax:57.735026918962575,ymax:d}):"arrow"===d&&(a={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},c={xmin:-50,ymin:-50,xmax:50,ymax:50});return[c,a]};B.CIMSymbolHelper=A;B.CIMSymbolInflatedSizeHelper=K;B.OverrideHelper=qa;B.slsDashToTemplateArray=R;B.symbolToCIM=function(d){if(!d||!d.type)return null;let a;switch(d.type){case "cim":return d.data;
case "web-style":return d;case "simple-marker":d=A.fromSimpleMarker(d);if(!d)return null;a=d;break;case "picture-marker":a=A.fromPictureMarker(d);break;case "simple-line":a=A.fromSimpleLineSymbol(d);break;case "simple-fill":a=A.fromSimpleFillSymbol(d);break;case "picture-fill":a=A.fromPictureFillSymbol(d);break;case "text":a=A.fromTextSymbol(d)}return{type:"CIMSymbolReference",symbol:a}};Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});