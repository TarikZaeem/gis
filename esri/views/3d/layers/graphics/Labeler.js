// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/asyncUtils ../../../../core/Handles ../../../../core/Logger ../../../../core/MapUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/hydratedFeatures ../../../../layers/support/labelFormatUtils ../../../../symbols/callouts/calloutUtils ./CreateLabelParameters ./enums ./Graphics3DCalloutSymbolLayerFactory ./Graphics3DLineCalloutSymbolLayer ./graphicSymbolUtils ./labelPlacement ./placementUtils ../../webgl-engine/lib/MaterialCollection ../../webgl-engine/lib/TextRenderer ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTextureAtlas ../../webgl-engine/lib/WebGLLayer ../../../support/Scheduler".split(" "),
function(u,w,A,M,F,N,G,O,m,x,H,C,ea,fa,P,Q,R,S,T,t,U,I,V,W,D,J,X,Y,Z,aa,K){function B(p){return!0===p.labelsVisible&&!!p.labelingInfo?.some(q=>!!q.symbol)}let L=function(p,q){this.labelingContext=p;this.graphics3DGraphic=q;this.textInitialized=this.rendered=this.visible=this.hasGraphics3DResources=!1;this.textRenderers=[];this.textLabelPlacements=[]},ba=function(p,q,f,b,a){this.labelClass=p;this.graphics3DSymbol=q;this.graphics3DCalloutSymbolLayer=f;this.textRenderParameters=b;this.labelFunction=
a;this.calloutSymbolLayerIndex=0},ca=function(p,q,f,b,a,c,d){this.layer=p;this.graphics3DCore=q;this.scaleVisibility=f;this.emptySymbolLabelSupported=b;this.elevationInfoOverride=a;this.disablePlacement=c;this.active=d;this.labelClassAbortController=new AbortController;this.labelClassContexts=[];this.graphics=new Map;this.labelsToInitialize=new Map;this.stageLayer=new aa.WebGLLayer({pickable:!0,disableOctree:!0},p.uid)};u.Labeler=function(p){function q(b){b=p.call(this,b)||this;b._dirty=!1;b._labels=
new Map;b._labelsToAdd=new Map;b._labelsToRemove=new Map;b._labelingContexts=[];return b}w._inheritsLoose(q,p);var f=q.prototype;f.setup=function(){this.dispose();this._handles=new N;this._handles.add([H.watch(()=>this.view.state?.camera,()=>this.setDirty()),H.watch(()=>this.view.state?.rasterPixelRatio,()=>this._resetAllLabels()),this.view.resourceController.scheduler.registerTask(K.TaskPriority.LABELER,this)]);this._textTextureAtlas=new Z.TextTextureAtlas({view:this.view});this._hudMaterialCollection=
new J.MaterialCollection(this.view._stage);this._calloutMaterialCollection=new J.MaterialCollection(this.view._stage)};f.dispose=function(){this._handles=m.destroyMaybe(this._handles);this._textTextureAtlas=m.disposeMaybe(this._textTextureAtlas);this._hudMaterialCollection=m.disposeMaybe(this._hudMaterialCollection);this._calloutMaterialCollection=m.disposeMaybe(this._calloutMaterialCollection);this._labelingContexts.length=0;this._labels.clear();this._labelsToAdd.clear();this._labelsToRemove.clear()};
f._activateLabelingContext=function(b){b.graphics.forEach((a,c)=>{const d=new L(b,a);this._labels.set(c,d);b.labelsToInitialize.set(c,d);a.setVisibilityFlag(t.VisibilityFlag.USER_SETTING,!0,t.VisibilityGroup.LABEL)});b.active=!0};f._deactivateLabelingContext=function(b){b.graphics.forEach((a,c)=>{a.setVisibilityFlag(t.VisibilityFlag.USER_SETTING,!1,t.VisibilityGroup.LABEL);this.setLabelGraphicVisibility(a,!1);this._labels.delete(c)});b.active=!1};f._addLabelTextureToAtlas=function(b){for(const a of b.graphics3DGraphic.labelLayers){if(!a._labelClass)continue;
const c=b.textRenderers[a._labelIndex];m.isSome(c)&&this._textTextureAtlas.addTextTexture(c,a.stageObject)}b.rendered=!0};f._removeLabelTextureFromAtlas=function(b){for(const a of b.graphics3DGraphic.labelLayers){if(!a._labelClass)continue;const c=b.textRenderers[a._labelIndex];m.isSome(c)&&this._textTextureAtlas.removeTextTexture(c,a.stageObject)}b.rendered=!1};f.runTask=function(b){this._updateLabels(b);!this._dirty&&this.deconflictor.running&&this.deconflictor.runTask(b);return K.Task.YIELD};f._updateLabels=
function(b){if(this._dirty){this._dirty=!1;for(const a of this._labelingContexts)if(a.active){if(!a.labelClassContexts||!a.labelClassContexts.length){if(null===a.labelClassContexts){this._deactivateLabelingContext(a);continue}this._createLabelClassContext(a);if(a.labelClassPromise&&a.labelClassAbortController){this._dirty=!0;continue}if(!a.labelClassContexts||!a.labelClassContexts.length)continue}O.someMap(a.labelsToInitialize,(c,d)=>{this._ensureGraphics3DResources(c)&&(this._labels.set(d,c),this.deconflictor.setDirty(),
b.madeProgress());if(c.visible&&c.textInitialized||!c.visible&&c.hasGraphics3DResources)a.labelsToInitialize.delete(d),b.madeProgress();return b.done})&&(this._dirty=!0)}this._labelsToRemove.forEach(a=>this._removeLabelTextureFromAtlas(a));this._labelsToAdd.forEach(a=>this._addLabelTextureToAtlas(a));this._labelsToRemove.clear();this._labelsToAdd.clear();this._dirty||this.notifyChange("updating")}};f._createLabelClassContextAsync=function(){var b=w._asyncToGenerator(function*(a){var c=this;const d=
a.labelClassAbortController?.signal;yield a.layer.when?.();x.throwIfAborted(d);a.scaleVisibility&&a.scaleVisibility.updateScaleRangeActive();const e=a.graphics3DCore;var l=e.layer;(l=l.labelingInfo&&l.labelingInfo.filter(g=>!!g.symbol))&&0!==l.length&&(yield F.forEach(l,function(){var g=w._asyncToGenerator(function*(h,n){var k=h.symbol;const r=V.getGraphics3DSymbol(e.getOrCreateGraphics3DSymbol(k));if(m.isNone(r))G.getLogger(c.declaredClass).error("Failed to create Graphics3DSymbol for label");else{yield r.load();
x.throwIfAborted(d);var y=null;S.hasCalloutSupport(k)&&k.hasVisibleCallout()&&(y=U.make(k,e.symbolCreationContext),yield y.load(),x.throwIfAborted(d));k=yield F.result(R.createLabelFunction(h,a.layer.fieldsIndex,c.view.spatialReference));x.throwIfAborted(d);if(!0===k.ok){const z=yield c._createTextRenderParameters(r.symbol);x.throwIfAborted(d);a.labelClassContexts[n]=new ba(h,r,y,z,k.value)}else G.getLogger(c.declaredClass).error(`Label expression failed to evaluate: ${k.error}`)}});return function(h,
n){return g.apply(this,arguments)}}()),x.throwIfAborted(d))});return function(a){return b.apply(this,arguments)}}();f._createLabelClassContext=function(){var b=w._asyncToGenerator(function*(a){m.isNone(a.labelClassPromise)&&(a.labelClassPromise=this._createLabelClassContextAsync(a).catch(c=>{if(x.isAbortError(c))throw c;a.labelClassContexts.length=0}).then(()=>{a.labelClassAbortController=null;this.notifyChange("updating")}).catch(()=>{}),this.notifyChange("updating"));return a.labelClassPromise});
return function(a){return b.apply(this,arguments)}}();f._createTextRenderParameters=function(){var b=w._asyncToGenerator(function*(a){return(a=a.symbolLayers.getItemAt(0))&&"text"===a.type?Y.TextRenderParameters.fromSymbol(a,this.view.state.rasterPixelRatio):null});return function(a){return b.apply(this,arguments)}}();f._destroyLabelClassContext=function(b){for(var a of b.labelClassContexts)--a.graphics3DSymbol.referenced;a=b.labelClassAbortController;b.labelClassAbortController=new AbortController;
m.abortMaybe(a);b.labelClassContexts.length=0;b.labelClassPromise=null;this.notifyChange("updating")};f._createTextSymbolGraphic=function(b,a,c,d,e){b=new T.CreateLabelParameters(c.verticalOffset,D.horizontalPlacementFromAnchor(c.anchor),D.verticalPlacementFromAnchor(c.anchor),b.text,c.translation,c.elevationOffset,c.centerOffset,c.screenOffset,c.centerOffsetUnits,b.displayWidth,b.displayHeight);v.graphic=a;v.renderingInfo=null;v.layer=d;return e.createLabel(v,b,this._hudMaterialCollection,this._textTextureAtlas)};
f._createLineCalloutGraphic=function(b,a,c,d,e){v.graphic=b;v.layer=e;v.renderingInfo=new I.LineCalloutSymbolLayerRenderingInfo(null,a,d.translation,d.centerOffset,d.screenOffset,d.centerOffsetUnits,d.elevationOffset,this._calloutMaterialCollection);return c.createGraphics3DGraphic(v)};f._ensureGraphics3DResources=function(b){if(b.hasGraphics3DResources)return!1;const a=b.graphics3DGraphic;if(a.destroyed)return!1;this._ensureTextTextureResources(b);const c=b.labelingContext,d=c.labelClassContexts;
if(!d||0===d.length||!c.emptySymbolLabelSupported&&0===a.layers.length)return!1;var e=!1,l=a.graphic;const g=c.layer;var h=B(c.layer);const n=this.view._stage;for(let r=0;r<d.length;r++){const y=b.textRenderers[r],z=b.textLabelPlacements[r];if(m.isNone(y)||m.isNone(z))continue;const E=d[r];var k=E.graphics3DSymbol;const da=k.symbol&&"label-3d"===k.symbol.type?k.symbol:null;if(k=k.symbolLayers[0]){k.setElevationInfoOverride(c.elevationInfoOverride);e=this._createTextSymbolGraphic(y,l,z,g,k);if(m.isNone(e))return!1;
e._labelClass=E.labelClass;e._labelIndex=r;a.addLabelGraphic(e,n,c.stageLayer);a.setVisibilityFlag(t.VisibilityFlag.USER_SETTING,h,t.VisibilityGroup.LABEL);a.clearVisibilityFlag(t.VisibilityFlag.SCALE_RANGE,t.VisibilityGroup.LABEL);a.setVisibilityFlag(t.VisibilityFlag.DECONFLICTION,!1,t.VisibilityGroup.LABEL);e=!0;(h=E.graphics3DCalloutSymbolLayer)&&z.hasLabelVerticalOffset&&(h.setElevationInfoOverride(c.elevationInfoOverride),l=this._createLineCalloutGraphic(l,da,h,z,g),m.isSome(l)&&(E.calloutSymbolLayerIndex=
a.labelLayers.length,a.addLabelGraphic(l,n,c.stageLayer)));break}}c.scaleVisibility&&e&&c.scaleVisibility.updateGraphicLabelScaleVisibility(a);return b.hasGraphics3DResources=!0};f._destroyGraphics3DResources=function(b){const a=b.labelingContext.labelClassContexts;for(const c of b.graphics3DGraphic.labelLayers){if(null==c._labelClass)continue;const d=a[c._labelIndex].graphics3DSymbol.symbolLayers[0];if(null!=d)d.onRemoveGraphic(c)}b.graphics3DGraphic.clearLabelGraphics();b.hasGraphics3DResources=
!1};f._ensureTextTextureResources=function(b){if(!b.textInitialized){var a=b.labelingContext,c=a.labelClassContexts;if(c&&0!==c.length){var d=b.graphics3DGraphic.graphic;for(let g=0;g<c.length;g++){const h=c[g];b.textRenderers[g]=null;b.textLabelPlacements[g]=null;if(!h.textRenderParameters)continue;var e=h.labelFunction;let n;if("arcade"===e.type)try{const k=e.needsHydrationToEvaluate()?Q.hydrateGraphic(d,a.layer):d;n=e.evaluate(k)}catch(k){n=null}else n=e.evaluate(d);if(!m.isNone(n)&&""!==n&&!/^\s+$/.test(n)&&
(e=h.graphics3DSymbol,e.symbolLayers[0]&&(e=W.get({graphics3DGraphic:b.graphics3DGraphic,labelSymbol:"label-3d"===e.symbol?.type?e.symbol:null,labelClass:h.labelClass,disablePlacement:a.disablePlacement}),!m.isNone(e)))){var l=D.horizontalPlacementFromAnchor(e.anchor);l=D.textRenderAlignmentFromHorizontalPlacement(l);b.textRenderers[g]=new X.TextRenderer(n,l,h.textRenderParameters);b.textLabelPlacements[g]=e}}b.textInitialized=!0}}};f._destroyTextTextureResources=function(b){b.textInitialized=!1;
b.textRenderers.length=0;b.textLabelPlacements.length=0};f._addGraphic=function(b,a){const c=a.graphic.uid;b.graphics.set(c,a);b.active&&(a=new L(b,a),this._labels.set(c,a),b.labelsToInitialize.set(c,a));this.setDirty();this.deconflictor.setDirty()};f._removeGraphic=function(b,a){a=a.graphic.uid;const c=this._labels.get(a);b.graphics.delete(a);c&&(this._destroyGraphic(c,a),b.labelsToInitialize.delete(a),this.setDirty(),this.deconflictor.setDirty())};f._destroyGraphic=function(b,a){this._labels.has(a)&&
(this._labels.delete(a),this._labelsToAdd.delete(a),this._labelsToRemove.delete(a));b.textInitialized&&(this._removeLabelTextureFromAtlas(b),this._destroyTextTextureResources(b));b.hasGraphics3DResources&&this._destroyGraphics3DResources(b)};f._labelingInfoChange=function(){var b=w._asyncToGenerator(function*(a,c){if(c)for(const d of c){if(c=a.graphics.get(d))this._removeGraphic(a,c),this._addGraphic(a,c)}else return this._visibilityInfoChange(a),this._resetLabels(a),this._createLabelClassContext(a)});
return function(a,c){return b.apply(this,arguments)}}();f._globalPropertyChanged=function(b,a){for(const c of a.labelClassContexts){const d=new Map;a.graphics.forEach(e=>d.set(e.graphic.uid,e));m.unwrap(c.graphics3DSymbol.symbolLayers[0]).globalPropertyChanged(b,d,e=>e.labelLayers[0]);c.graphics3DCalloutSymbolLayer&&c.graphics3DCalloutSymbolLayer.globalPropertyChanged(b,d,e=>e.labelLayers[c.calloutSymbolLayerIndex])}};f._visibilityInfoChange=function(b){const a=B(b.layer);a&&!b.active&&this._activateLabelingContext(b);
!a&&b.active&&this._deactivateLabelingContext(b);this.setDirty()};f._resetAllLabels=function(){for(const b of this._labelingContexts)this._resetLabels(b)};f._resetLabels=function(b){b.graphics.forEach((a,c)=>{if(a=this._labels.get(c))this._destroyGraphic(a,c),a.visible=!1,a.rendered=!1,b.labelsToInitialize.set(c,a)});this._destroyLabelClassContext(b);this.setDirty();this.deconflictor.setDirty()};f._findLabelingContext=function(b){for(const a of this._labelingContexts)if(a.graphics3DCore===b)return a;
return null};f.addGraphicsOwner=function(b,a,c){const d=c&&c.emptySymbolLabelSupported||!1,e=c&&c.elevationInfoOverride||null;c=c&&c.disablePlacement||null;if(!this._findLabelingContext(b)){var l=b.layer,g=new ca(l,b,a,d,e,c,B(l));this.view._stage.add(g.stageLayer);this._labelingContexts.push(g);this.setDirty();return{addGraphic:h=>this._addGraphic(g,h),removeGraphic:h=>this._removeGraphic(g,h),featureReductionChange:()=>{},layerLabelsEnabled:()=>B(g.layer),labelingInfoChange:h=>this._labelingInfoChange(g,
h),elevationInfoChange:()=>this._globalPropertyChanged("elevationInfo",g),slicePlaneEnabledChange:()=>this._globalPropertyChanged("slicePlaneEnabled",g),visibilityInfoChange:()=>this._visibilityInfoChange(g),reset:()=>this._resetLabels(g),clear:()=>{}}}};f.removeGraphicsOwner=function(b){const a=this._findLabelingContext(b);a&&(b=this._labelingContexts.indexOf(a),this._labelingContexts.splice(b,1),a.graphics.forEach(c=>this._removeGraphic(a,c)),this.view._stage.remove(a.stageLayer),this.setDirty())};
f.setLabelGraphicVisibility=function(b,a){b=b.graphic.uid;const c=this._labels.get(b);c&&c.visible!==a&&(a&&!c.rendered?(this._labelsToAdd.set(b,c),this._labelsToRemove.delete(b),c.textInitialized||c.labelingContext.labelsToInitialize.set(b,c)):!a&&c.rendered&&(this._labelsToRemove.set(b,c),this._labelsToAdd.delete(b)),c.visible=a,this.setDirty())};f.setDirty=function(){!this._dirty&&0<this._labelingContexts.length&&(this._dirty=!0,this.notifyChange("updating"))};w._createClass(q,[{key:"running",
get:function(){return this.view.ready&&(this._dirty||this.deconflictor.running)}},{key:"updating",get:function(){return this._dirty||this._textTextureAtlas?.updating||this.deconflictor.updating||this._labelingContexts.some(b=>!!b.labelClassPromise&&!!b.labelClassAbortController)}},{key:"updatingProgress",get:function(){if(!this.updating||!this._textTextureAtlas)return 1;const b=0<this._labelingContexts.length?this._labelingContexts.reduce((a,c)=>a+(c.labelClassPromise&&c.labelClassAbortController?
0:1),0)/this._labelingContexts.length:1;return(this._dirty?0:.3)+(this._textTextureAtlas.updating?0:.1)+.1*b+.5*this.deconflictor.updatingProgress}},{key:"test",get:function(){return{textTextureAtlas:this._textTextureAtlas,resetAllLabels:()=>this._resetAllLabels()}}}]);return q}(M);A.__decorate([C.property({constructOnly:!0})],u.Labeler.prototype,"view",void 0);A.__decorate([C.property({constructOnly:!0})],u.Labeler.prototype,"deconflictor",void 0);A.__decorate([C.property()],u.Labeler.prototype,
"_textTextureAtlas",void 0);A.__decorate([C.property({type:Boolean,readOnly:!0})],u.Labeler.prototype,"updating",null);u.Labeler=A.__decorate([P.subclass("esri.views.3d.layers.graphics.Labeler")],u.Labeler);const v=new I.LineCalloutCreationContext(null,null,null);u.areLabelsVisible=B;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});