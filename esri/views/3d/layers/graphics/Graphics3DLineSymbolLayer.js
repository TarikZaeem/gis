// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry ../../../../core/Error ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../renderers/support/renderingInfoUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./interfaces ./lineUtils ../support/FastSymbolUpdates ../../support/debugFlags ../../support/engineContent/line ../../support/engineContent/marker ../../support/renderInfoUtils/line ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/LineMarkerMaterial ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/RibbonLineMaterial ../../../../geometry/Extent ../../../../geometry/Polygon".split(" "),
function(H,B,C,L,e,v,M,D,l,N,O,t,P,Q,R,z,E,F,I,G,S,T,J,U,V,W,X,A,Y,Z){const aa=["polyline","polygon","extent"];C=function(r){function w(a,b,c,d){return r.call(this,a,b,c,d)||this}B._inheritsLoose(w,r);var f=w.prototype;f.doLoad=function(){var a=B._asyncToGenerator(function*(){this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[1,1,1],unitInMeters:1,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}};this._fastUpdates=this._context.renderer&&
this._context.renderer.visualVariables&&0<this._context.renderer.visualVariables.length?I.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};if(!this._drivenProperties.size&&0>(null!=this.symbolLayer.size?this.symbolLayer.size:v.px2pt(1)))throw new L("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");this._markerTexture=e.isSome(this.symbolLayer.marker)&&e.isSome(this._context.sharedResources.textures)?T.prepareMarkerResources(this._context.sharedResources.textures,
F.parseLineMarkerStyle(this.symbolLayer.marker.style)):null});return function(){return a.apply(this,arguments)}}();f._getMaterialParameters=function(a,b=!1){const c=this._getCombinedOpacityAndColor(b&&this._markerColor||this._materialColor);this._patternHidesLine&&!b&&(c[3]=0);a={width:this._computeMaterialWidth(this.symbolLayer?.size),color:c,hasPolygonOffset:!0,join:this.symbolLayer.join||"miter",cap:F.parseCapType(this.symbolLayer.cap||"butt"),hasSlicePlane:this._context.slicePlaneEnabled,isClosed:a,
stipplePattern:X.getStipplePatternForLinePattern(this.symbolLayer.pattern),stippleScaleWithLineWidth:!0};return this._fastUpdates&&this._fastUpdates.visualVariables?{...a,...this._fastUpdates.materialParameters}:a};f.destroy=function(){r.prototype.destroy.call(this);this._forEachMaterial(a=>this._context.stage.remove(a));this._markerMaterialCached=this._wireframeRingMaterialCached=this._wireframeLineMaterialCached=this._ringMaterialCached=this._lineMaterialCached=null;this._markerTexture=e.releaseMaybe(this._markerTexture)};
f._getDrivenSize=function(a){return this._drivenProperties.size&&a.size?v.pt2px(N.getDriverAxisSizeValueAny(a.size)):1};f._getSizeFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?z.getAttributeValue(this._fastUpdates.visualVariables.size.field,a):null};f._getDrivenColor=function(a){const b=D.fromValues(1,1,1,1);this._drivenProperties.color&&a.color&&(b[0]=a.color[0],b[1]=a.color[1],b[2]=a.color[2],0<a.color.length&&(b[3]=a.color[3]));this._drivenProperties.opacity&&
a.opacity&&(b[3]=a.opacity);return b};f._getColorFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color?z.getAttributeValue(this._fastUpdates.visualVariables.color.field,a):null};f._getOpacityFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.opacity?z.getAttributeValue(this._fastUpdates.visualVariables.opacity.field,a):null};f.createGraphics3DGraphic=function(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,
aa,this.symbolLayer.type))return null;const c=this.setGraphicElevationContext(b,new P.ElevationContext);this.ensureDrapedStatus("on-the-ground"===c.mode);return this.draped?this._createAsOverlay(a,this._context.layer.uid):this._createAs3DShape(a,c,b.uid)};f.applyRendererDiff=function(a,b){for(const c in a.diff)switch(c){case "visualVariables":if(I.updateFastSymbolUpdatesState(this._fastUpdates,b,this._vvConvertOptions))this._forEachMaterial(d=>d.setParameters(this._fastUpdates.materialParameters));
else return E.ApplyRendererDiffResult.Recreate_Symbol;break;default:return E.ApplyRendererDiffResult.Recreate_Symbol}return E.ApplyRendererDiffResult.Fast_Update};f.prepareSymbolLayerPatch=function(a){if("partial"===a.diff.type){var b=a.diff.diff,c={};"complete"===b.size?.type&&(c.width=this._computeMaterialWidth(b.size.newValue),delete b.size);"complete"===b.cap?.type&&(c.cap=F.parseCapType(e.unwrapOr(b.cap.newValue,"butt")),delete b.cap);var d=this._prepareMarkerPatch(a,b);this._prepareMaterialPatch(a,
b,d);a.symbolLayerStatePatches.push(()=>this._forEachMaterial(g=>g.setParameters(c)))}};f.layerOpacityChanged=function(){this._forEachMaterial((a,b)=>this._updateMaterialLayerOpacity(a,b))};f._forEachMaterial=function(a){e.isSome(this._lineMaterialCached)&&a(this._lineMaterialCached);e.isSome(this._ringMaterialCached)&&a(this._ringMaterialCached);e.isSome(this._wireframeLineMaterialCached)&&a(this._wireframeLineMaterialCached);e.isSome(this._wireframeRingMaterialCached)&&a(this._wireframeRingMaterialCached);
e.isSome(this._markerMaterialCached)&&a(this._markerMaterialCached,!0)};f._updateMaterialLayerOpacity=function(a,b=!1){var c=a.parameters.color;const d=e.get(this.symbolLayer,"material","color");b=this._patternHidesLine&&!b?0:this._getCombinedOpacity(d);c=D.fromValues(c[0],c[1],c[2],b);a.setParameters({color:c})};f.layerElevationInfoChanged=function(a,b,c){const d=this._elevationContext.mode;c=t.elevationModeChangeUpdateType(w.elevationModeChangeTypes,c,d);if(c!==t.SymbolUpdateType.UPDATE)return c;
const g=t.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>g)};f.slicePlaneEnabledChanged=function(){const a={hasSlicePlane:this._context.slicePlaneEnabled};this._forEachMaterial(b=>b.setParameters(a));return!0};f.physicalBasedRenderingChanged=function(){return!0};f.pixelRatioChanged=function(){return!0};f.skipHighSymbolLodsChanged=function(){return!0};f._getGeometryAsPolygonOrPolyline=function(a){switch(a.type){case "extent":if(a instanceof Y)return Z.fromExtent(a);
break;case "polygon":case "polyline":return a}return null};f._createAs3DShape=function(a,b,c){const d=this._getGeometryAsPolygonOrPolyline(a.graphic.geometry);var g="polygon"===d.type?d.rings:d.paths,h=[];const m=l.create(),n=J.geometryToRenderInfo(d,this._context.elevationProvider,this._context.renderCoordsHelper,b);this._logGeometryCreationWarnings(n,g,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");for(g=0;g<n.lines.length;g++){var q=n.lines[g],k=q.position;q=q.mapPositions;if(e.isSome(this._context.clippingExtent)&&
(l.empty(m),l.expandWithBuffer(m,q),!l.intersectsClippingArea(m,this._context.clippingExtent)))continue;k=this._createGeometry("polygon"===d.type?this._ringMaterial:this._lineMaterial,a,k,q,d.type,x.ELEVATED,c);h.push(k);G.LINE_WIREFRAMES&&h.push(k.instantiate({material:"polygon"===d.type?this._wireframeRingMaterial:this._wireframeLineMaterial}));e.isSome(this._markerMaterial)&&h.push(k.instantiate({material:this._markerMaterial}))}if(0===h.length)return null;a=new U.Object3D({geometries:h,castShadow:!1,
metadata:{layerUid:this._context.layer.uid,graphicUid:c}});h=new R.Graphics3DObject3DGraphicLayer(this,a,h,null,null,O.sharedGeometryElevationAligner,b);h.alignedSampledElevation=n.sampledElevation;h.needsElevationUpdates=t.needsElevationUpdates2D(b.mode);return h};f._createGeometry=function(a,b,c,d,g,h,m){g="polygon"===g;const n=this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color,q=this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size;m=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:m,
layerUid:this._context.layer.uid});return S.createGeometry(a,{overlayInfo:h===x.DRAPED?{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper}:null,removeDuplicateStartEnd:g,mapPositions:d,attributeData:{position:c,size:q?null:this._getDrivenSize(b.renderingInfo),color:n?null:this._getDrivenColor(b.renderingInfo),sizeFeature:this._getSizeFeatureAttributeData(b.graphic),colorFeature:this._getColorFeatureAttributeData(b.graphic),opacityFeature:this._getOpacityFeatureAttributeData(b.graphic)}},
m)};f._createAsOverlay=function(a,b){const c=a.graphic,d=this._getGeometryAsPolygonOrPolyline(c.geometry);var g="polygon"===d.type?d.rings:d.paths;const h="polygon"===d.type?this._ringMaterial:this._lineMaterial;h.renderPriority=this._renderPriority;const m=G.LINE_WIREFRAMES?"polygon"===d.type?this._wireframeRingMaterial:this._wireframeLineMaterial:null,n=this._markerMaterial;e.isSome(m)&&(m.renderPriority=this._renderPriority-.001);e.isSome(n)&&(n.renderPriority=this._renderPriority-.002);const q=
[],k=l.create(),K=l.empty();var u=J.geometryToRenderInfoDraped(d,this._context.overlaySR);this._logGeometryCreationWarnings(u,g,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");for(const y of u.lines)if(l.empty(k),l.expandWithBuffer(k,y.position),l.intersectsClippingArea(k,this._context.clippingExtent)){l.expandWithAABB(K,k);g=p=>{p=this._createGeometry(p,a,y.position,void 0,d.type,x.DRAPED,c.uid);p=new V.RenderGeometry(p,{layerUid:b,graphicUid:c.uid});q.push(p);return p};if(e.isSome(n)){u=
g(n);const p=e.unwrap(this.symbolLayer.marker).placement;"begin"!==p&&"begin-end"!==p||l.expandWithBuffer(k,y.position,0,1);"end"!==p&&"begin-end"!==p||l.expandWithBuffer(k,y.position,y.position.length-3,1);this._updateBoundingSphere(u,k)}u=g(h);this._updateBoundingSphere(u,k);G.LINE_WIREFRAMES&&(g=g(m),this._updateBoundingSphere(g,k))}return new Q(this,q,K,this._context.drapeSourceRenderer)};f._updateBoundingSphere=function(a,b){M.set(a.boundingSphere,.5*(b[0]+b[3]),.5*(b[1]+b[4]),0,.5*Math.sqrt((b[3]-
b[0])*(b[3]-b[0])+(b[4]-b[1])*(b[4]-b[1])))};f._computeMaterialWidth=function(a){a=e.unwrapOr(a,v.px2pt(1));return this._drivenProperties.size?this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?v.pt2px(1):1:v.pt2px(a)};f._prepareMaterialPatch=function(a,b,c){var d=b.material;e.isNone(d)?c.changed&&c.useMaterialColor&&this._patchMaterialColor(this._getCombinedOpacityAndColor(this._materialColor),this._markerMaterialCached,a):"collection"!==d.type&&(d="complete"===d.type?e.applySome(d.newValue,
g=>g.color):"complete"===d.diff.color?.type?d.diff.color.newValue:null,d=this._getCombinedOpacityAndColor(d),c.useMaterialColor&&this._patchMaterialColor(D.clone(d),this._markerMaterialCached,a),this._patternHidesLine&&(d[3]=0),this._patchMaterialColor(d,this._lineMaterialCached,a),delete b.material)};f._prepareMarkerPatch=function(a,b){var c=b.marker;if(e.isNone(c)||"partial"!==c.type||e.isSome(c.diff.style)||e.isSome(c.diff.placement)||e.isSome(c.diff.color)&&"complete"!==c.diff.color.type)return{changed:!1,
useMaterialColor:e.isNone(this._markerColor)};c=c.diff.color;if(e.isNone(c))return delete b.marker,{changed:!1,useMaterialColor:e.isNone(this._markerColor)};c=e.unwrap(c.newValue);if(e.isNone(c))return delete b.marker,{changed:!0,useMaterialColor:!0};this._patchMaterialColor(this._getCombinedOpacityAndColor(c),this._markerMaterialCached,a);delete b.marker;return{changed:!0,useMaterialColor:!1}};f._patchMaterialColor=function(a,b,c){e.isNone(b)||c.symbolLayerStatePatches.push(()=>b.setParameters({color:a}))};
B._createClass(w,[{key:"_materialColor",get:function(){return e.applySome(this.symbolLayer.material,a=>a.color)}},{key:"_markerColor",get:function(){return e.applySome(this.symbolLayer.marker,a=>a.color)}},{key:"_lineMaterial",get:function(){e.isNone(this._lineMaterialCached)&&(this._lineMaterialCached=new A.RibbonLineMaterial(this._getMaterialParameters(!1)),this._context.stage.add(this._lineMaterialCached));return this._lineMaterialCached}},{key:"_ringMaterial",get:function(){e.isNone(this._ringMaterialCached)&&
(this._ringMaterialCached=new A.RibbonLineMaterial(this._getMaterialParameters(!0)),this._context.stage.add(this._ringMaterialCached));return this._ringMaterialCached}},{key:"_wireframeLineMaterial",get:function(){e.isNone(this._wireframeLineMaterialCached)&&(this._wireframeLineMaterialCached=new A.RibbonLineMaterial({...this._getMaterialParameters(!1),wireframe:!0}),this._context.stage.add(this._wireframeLineMaterialCached));return this._wireframeLineMaterialCached}},{key:"_wireframeRingMaterial",
get:function(){e.isNone(this._wireframeRingMaterialCached)&&(this._wireframeRingMaterialCached=new A.RibbonLineMaterial({...this._getMaterialParameters(!0),wireframe:!0}),this._context.stage.add(this._wireframeRingMaterialCached));return this._wireframeRingMaterialCached}},{key:"_markerMaterial",get:function(){e.isNone(this._markerMaterialCached)&&e.isSome(this.symbolLayer.marker)&&e.isSome(this._markerTexture)&&(this._markerMaterialCached=new W.LineMarkerMaterial({...this._getMaterialParameters(!1,
!0),placement:this.symbolLayer.marker.placement,textureId:this._markerTexture.texture.id}),this._context.stage.add(this._markerMaterialCached));return this._markerMaterialCached}},{key:"_patternHidesLine",get:function(){const a=this.symbolLayer.pattern;return e.isSome(a)&&"style"===a.type&&"none"===a.style}}]);return w}(z.Graphics3DSymbolLayer);C.elevationModeChangeTypes={definedChanged:t.SymbolUpdateType.RECREATE,staysOnTheGround:t.SymbolUpdateType.NONE,onTheGroundChanged:t.SymbolUpdateType.RECREATE};
var x;(function(r){r[r.DRAPED=0]="DRAPED";r[r.ELEVATED=1]="ELEVATED"})(x||(x={}));H.Graphics3DLineSymbolLayer=C;Object.defineProperty(H,Symbol.toStringTag,{value:"Module"})});