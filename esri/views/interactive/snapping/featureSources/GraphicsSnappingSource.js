// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/asyncUtils ../../../../core/HandleOwner ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Polygon ../../../../geometry/projection ../../../../geometry/support/normalizeUtilsSync ../../../../geometry/support/typeUtils ../../../../layers/graphics/featureConversionUtils ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/data/FeatureStore ../../../../layers/graphics/data/QueryEngine ../../../../support/elevationInfoUtils ../../../../symbols/support/utils ../snappingUtils ./queryEngineUtils ./snappingCandidateElevationAlignment ./snappingCandidateElevationFilter ./symbologySnappingCandidates".split(" "),
function(g,p,l,D,E,F,G,h,q,r,n,R,H,I,v,J,K,L,M,N,O,P,x,y,z,A,Q,B){g.GraphicsSnappingSource=function(C){function t(a){a=C.call(this,a)||this;a.availability=1;a._sources={multipoint:null,point:null,polygon:null,polyline:null};a._loadedWkids=new Set;a._loadedWkts=new Set;a._pendingAdds=[];a._extrudedPolygonSymbolsCount=0;return a}p._inheritsLoose(t,C);var f=t.prototype;f.destroy=function(){for(const a of this._pendingAdds)a.task.abort();this._pendingAdds.length=0;this._mapSources(a=>this._destroySource(a))};
f.initialize=function(){this.updatingHandles.add(()=>this.getGraphicsLayers(),c=>{this.updatingHandles.removeHandles("graphics-collections");for(const d of c)this._addMany(d.graphics.toArray()),this.handles.add([d.on("graphic-update",e=>this._onGraphicUpdate(e)),this.updatingHandles.addOnCollectionChange(()=>d.graphics,e=>this._onGraphicsChanged(e))],"graphics-collections")},r.initial);const {view:a}=this,{layer:b}=this.layerSource;h.isSome(a)&&"3d"===a.type&&"map-notes"!==b.type&&this.addHandles([a.elevationProvider.on("elevation-change",
({context:c})=>{P.elevationContextAffectsAlignment(c,b.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),r.watch(()=>b.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),r.initial),r.on(()=>b,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])};f.fetchCandidates=function(){var a=p._asyncToGenerator(function*(b,c){const {point:d}=b;var e=yield q.eachAlwaysValues(this._mapSources(m=>this._fetchCandidatesForSource(m,
b,c)));q.throwIfAborted(c);const k=this._getGroundElevation;e=e.flat().map(m=>z.convertSnappingCandidate(m,k));y.sortCandidatesInPlace(d,e);return e});return function(b,c){return a.apply(this,arguments)}}();f._fetchCandidatesForSource=function(){var a=p._asyncToGenerator(function*(b,c,d){c=y.makeSnappingQuery(c,h.unwrap(this.view)?.type??"2d");b=yield b.queryEngine.executeQueryForSnapping(c,d);q.throwIfAborted(d);b=yield this._snappingElevationAligner.alignCandidates(b.candidates,d);q.throwIfAborted(d);
const e=yield this._symbologySnappingFetcher.fetch(b,d);q.throwIfAborted(d);d=0===e.length?b:[...b,...e];return this._snappingElevationFilter.filter(c,d)});return function(b,c,d){return a.apply(this,arguments)}}();f.refresh=function(){};f._onGraphicUpdate=function(a){if(this.getGraphicsLayers().some(b=>b.graphics.includes(a.graphic)))switch(a.property){case "geometry":case "visible":this._remove(a.graphic),this._addMany([a.graphic])}};f._onGraphicsChanged=function(a){for(const b of a.removed)this._remove(b);
this._addMany(a.added)};f._addMany=function(a){const b=[],c=new Map;for(const d of a)h.isNone(d.geometry)||(this._needsInitializeProjection(d.geometry.spatialReference)?(b.push(d.geometry.spatialReference),c.set(d.uid,d)):this._add(d));this._createPendingAdd(b,c)};f._createPendingAdd=function(a,b){var c=this;if(a.length){var d=F.createTask(function(){var m=p._asyncToGenerator(function*(u){yield v.initializeProjection(a.map(w=>({source:w,dest:c.spatialReference})),{signal:u});c._markLoadedSpatialReferences(a);
for(const [,w]of b)c._add(w)});return function(u){return m.apply(this,arguments)}}());this.updatingHandles.addPromise(d.promise);var e={task:d,graphics:b},k=()=>E.removeUnordered(this._pendingAdds,e);d.promise.then(k,k);this._pendingAdds.push(e)}};f._markLoadedSpatialReferences=function(a){for(const b of a)null!=b.wkid&&this._loadedWkids.add(b.wkid),null!=b.wkt&&this._loadedWkts.add(b.wkt)};f._add=function(a){if(!h.isNone(a.geometry)&&a.visible){var b=a.geometry;if("mesh"!==b.type){"extent"===b.type&&
(b=I.fromExtent(b));var c=this._ensureSource(b.type);h.isNone(c)||(b=this._createOptimizedFeature(a.uid,b),h.isNone(b)||(c.featureStore.add(b),x.symbolHasExtrudeSymbolLayer(a.symbol)&&this._extrudedPolygonSymbolsCount++))}}};f._needsInitializeProjection=function(a){return null!=a.wkid&&this._loadedWkids.has(a.wkid)||null!=a.wkt&&this._loadedWkts.has(a.wkt)?!1:!v.canProjectWithoutEngine(a,this.spatialReference)};f._createOptimizedFeature=function(a,b){b=v.project(J.normalizeCentralMeridianForDisplay(b),
this.spatialReference);if(!b)return null;b=this._ensureGeometryHasZ(b);b=L.convertFromGeometry(b,this._hasZ,!1);return new M.OptimizedFeature(b,{OBJECTID:a},null,a)};f._ensureGeometryHasZ=function(a){if(!this._hasZ)return a;const b=c=>{for(;3>c.length;)c.push(0)};a=a.clone();a.hasZ=!0;switch(a.type){case "point":a.z=a.z??0;break;case "multipoint":a.points.forEach(b);break;case "polyline":a.paths.forEach(c=>c.forEach(b));break;case "polygon":a.rings.forEach(c=>c.forEach(b))}return a};f._ensureSource=
function(a){var b=this._sources[a];if(h.isSome(b))return b;b=this._createSource(a);return this._sources[a]=b};f._createSource=function(a){var b=K.featureGeometryTypeKebabDictionary.toJSON(a);const c=this._hasZ,d=new N({geometryType:b,hasZ:c,hasM:!1});b=new O.QueryEngine({featureStore:d,fields:[{name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID"}],geometryType:b,hasM:!1,hasZ:c,objectIdField:"OBJECTID",spatialReference:this.spatialReference,scheduler:h.isSome(this.view)&&"3d"===this.view.type?
this.view.resourceController.scheduler:null});return{featureStore:d,queryEngine:b,type:a}};f._remove=function(a){this._mapSources(b=>this._removeFromSource(b,a));for(const b of this._pendingAdds)b.graphics.delete(a.uid),0===b.graphics.size&&b.task.abort()};f._removeFromSource=function(a,b){a.featureStore.has(b.uid)&&(a.featureStore.removeById(b.uid),x.symbolHasExtrudeSymbolLayer(b.symbol)&&this._extrudedPolygonSymbolsCount--)};f._destroySource=function(a){a.queryEngine.destroy();this._sources[a.type]=
null};f._mapSources=function(a){const {point:b,polygon:c,polyline:d,multipoint:e}=this._sources,k=[];h.isSome(b)&&k.push(a(b));h.isSome(c)&&k.push(a(c));h.isSome(d)&&k.push(a(d));h.isSome(e)&&k.push(a(e));return k};p._createClass(t,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"_hasZ",get:function(){const a=this.view;return h.isSome(a)&&"3d"===a.type&&"map-notes"!==this.layerSource.layer.type}},{key:"_snappingElevationAligner",get:function(){const {view:a}=this,{layer:b}=
this.layerSource,c=h.isSome(a)&&"3d"===a.type;if(!c||"map-notes"===b.type)return A.getSnappingCandidateElevationAligner();const d=function(){var e=p._asyncToGenerator(function*(k,m){return(yield q.whenOrAbort(a.whenLayerView(b),m)).elevationAlignPointsInFeatures(k,m)});return function(k,m){return e.apply(this,arguments)}}();return A.getSnappingCandidateElevationAligner(c,{elevationInfo:b.elevationInfo,alignPointsInFeatures:d,spatialReference:a.spatialReference})}},{key:"_snappingElevationFilter",
get:function(){var {view:a}=this;a=h.isSome(a)&&"3d"===a.type&&"map-notes"!==this.layerSource.layer.type;return Q.getSnappingCandidateElevationFilter(a)}},{key:"_symbologySnappingFetcher",get:function(){const {view:a}=this,{layer:b}=this.layerSource,c=h.isSome(a)&&"3d"===a.type,d=0<this._extrudedPolygonSymbolsCount;return c&&"map-notes"!==b.type&&d?B.getSymbologySnappingCandidatesFetcher(d,function(){var e=p._asyncToGenerator(function*(k,m){const u=yield a.whenLayerView(b);q.throwIfAborted(m);return u.queryForSymbologySnapping({candidates:k,
spatialReference:a.spatialReference},m)});return function(k,m){return e.apply(this,arguments)}}()):B.getSymbologySnappingCandidatesFetcher()}},{key:"_getGroundElevation",get:function(){return z.makeGetGroundElevation(this.view)}}]);return t}(G.HandleOwnerMixin(D));l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"getGraphicsLayers",void 0);l.__decorate([n.property({constructOnly:!0})],g.GraphicsSnappingSource.prototype,"layerSource",void 0);l.__decorate([n.property({constructOnly:!0})],
g.GraphicsSnappingSource.prototype,"spatialReference",void 0);l.__decorate([n.property({constructOnly:!0})],g.GraphicsSnappingSource.prototype,"view",void 0);l.__decorate([n.property({readOnly:!0})],g.GraphicsSnappingSource.prototype,"updating",null);l.__decorate([n.property({readOnly:!0})],g.GraphicsSnappingSource.prototype,"availability",void 0);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_hasZ",null);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_snappingElevationAligner",
null);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_snappingElevationFilter",null);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_symbologySnappingFetcher",null);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_extrudedPolygonSymbolsCount",void 0);l.__decorate([n.property()],g.GraphicsSnappingSource.prototype,"_getGroundElevation",null);g.GraphicsSnappingSource=l.__decorate([H.subclass("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],
g.GraphicsSnappingSource);Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});