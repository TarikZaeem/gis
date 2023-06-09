// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/HandleOwner ../../../../core/handleUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/tracking/ObservableValue ../../../../support/elevationInfoUtils ../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D ../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D ./queryEngineUtils ./WorkerTileTreeDebugger ./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle ./featureServiceSource/FeatureServiceTilesSimple ../../../support/debugFlags".split(" "),
function(c,q,g,B,C,y,n,h,e,k,L,M,D,E,F,G,H,z,I,w,J,K){c.FeatureServiceSnappingSource=function(A){function u(a){a=A.call(this,a)||this;a._workerHandle=null;a._debug=null;return a}q._inheritsLoose(u,A);var v=u.prototype;v.initialize=function(){let a;const d=this.view;if(n.isSome(d))switch(d.type){case "2d":this._tilesOfInterest=new G.FeatureServiceTiles2D({view:d,layer:this._layer});a=this._workerHandle=new w.FeatureServiceSnappingSourceWorkerHandle;break;case "3d":const {resourceController:f}=d,r=
this._layer,t=d.whenLayerView(r);this._tilesOfInterest=new H.FeatureServiceTiles3D({view:d});a=this._workerHandle=new w.FeatureServiceSnappingSourceWorkerHandle({schedule:b=>f.immediate.schedule(b),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:function(){var b=q._asyncToGenerator(function*(l,m){const x=yield t;h.throwIfAborted(m);return x.elevationAlignPointsInFeatures(l,m)});return function(l,m){return b.apply(this,arguments)}}(),queryForSymbologySnapping:function(){var b=
q._asyncToGenerator(function*(l,m){const x=yield t;h.throwIfAborted(m);return x.queryForSymbologySnapping(l,m)});return function(l,m){return b.apply(this,arguments)}}()});const p=new E.ObservableValue(null);t.then(b=>p.set(b));this.addHandles([d.elevationProvider.on("elevation-change",({context:b})=>{const {elevationInfo:l}=r;F.elevationContextAffectsAlignment(b,l)&&h.ignoreAbortErrors(a.notifyElevationSourceChange())}),e.watch(()=>r.elevationInfo,()=>h.ignoreAbortErrors(a.notifyElevationSourceChange()),
e.initial),e.watch(()=>n.applySome(p.get(),({processor:b})=>b?.renderer),()=>h.ignoreAbortErrors(a.notifySymbologyChange()),e.initial),e.watch(()=>n.mapOr(p.get(),!1,b=>b.symbologySnappingSupported),b=>h.ignoreAbortErrors(a.setSymbologySnappingSupported(b)),e.initial),e.on(()=>n.toNullable(p.get())?.layer,["edits","apply-edits","graphic-update"],()=>a.notifySymbologyChange())])}else this._tilesOfInterest=new J.FeatureServiceTilesSimple({layer:this._layer}),a=this._workerHandle=new w.FeatureServiceSnappingSourceWorkerHandle;
this.handles.add([y.destroyHandle(a)]);h.ignoreAbortErrors(a.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null));this.updatingHandles.add(()=>this._updateTilesParameters,()=>h.ignoreAbortErrors(a.updateTiles(this._updateTilesParameters,null)),e.initial);this.handles.add([e.watch(()=>this.configuration,f=>h.ignoreAbortErrors(a.configure(f,null)),e.sync)]);n.isSome(d)&&this.handles.add(e.watch(()=>K.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,
f=>{f&&!this._debug?(this._debug=new I.WorkerTileTreeDebugger({view:d,handle:a}),this.handles.add(y.destroyHandle(this._debug),"debug")):!f&&this._debug&&this.handles.remove("debug")},e.initial));this.handles.add(this.layerSource.layer.on("apply-edits",f=>{h.ignoreAbortErrors(a.applyEdits(f,null))}))};v.refresh=function(){this._workerHandle?.refresh(null)};v.fetchCandidates=function(){var a=q._asyncToGenerator(function*(d,f){const {coordinateHelper:r,point:t}=d;this._tilesOfInterest.pointOfInterest=
r.arrayToPoint(t);const p=this._getGroundElevation;return(yield this._workerHandle.fetchCandidates({...d},f)).candidates.map(b=>z.convertSnappingCandidate(b,p))});return function(d,f){return a.apply(this,arguments)}}();v.getDebugInfo=function(a){return this._workerHandle.getDebugInfo(a)};q._createClass(u,[{key:"_updateTilesParameters",get:function(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}},{key:"updating",get:function(){return this._workerHandle?.updating||
this.updatingHandles.updating}},{key:"configuration",get:function(){var {view:a}=this;a=n.isSome(a)?a.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:a}}},{key:"availability",get:function(){return this._workerHandle?.availability??0}},{key:"_layer",get:function(){return this.layerSource.layer}},{key:"_getGroundElevation",get:function(){return z.makeGetGroundElevation(this.view)}}]);return u}(C.HandleOwnerMixin(B));g.__decorate([k.property({constructOnly:!0})],
c.FeatureServiceSnappingSource.prototype,"spatialReference",void 0);g.__decorate([k.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"layerSource",void 0);g.__decorate([k.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"view",void 0);g.__decorate([k.property()],c.FeatureServiceSnappingSource.prototype,"_tilesOfInterest",void 0);g.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"_updateTilesParameters",null);g.__decorate([k.property({readOnly:!0})],
c.FeatureServiceSnappingSource.prototype,"updating",null);g.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"configuration",null);g.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"availability",null);g.__decorate([k.property()],c.FeatureServiceSnappingSource.prototype,"_getGroundElevation",null);c.FeatureServiceSnappingSource=g.__decorate([D.subclass("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],c.FeatureServiceSnappingSource);
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});