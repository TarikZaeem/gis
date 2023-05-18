// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/CollectionFlattener ../core/Error ../core/lang ../core/loadAll ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/SpatialReference ./Layer ./buildingSublayers/BuildingComponentSublayer ./buildingSublayers/BuildingGroupSublayer ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/BuildingFilter ./support/BuildingSummaryStatistics ./support/commonProperties ./support/FetchAssociatedFeatureLayer".split(" "),
function(l,f,m,B,v,w,C,r,D,c,E,F,h,Q,x,G,H,I,y,k,J,K,L,M,N,t,O,z,u,P){const A=m.ofType(O);m=w.clone(k.sublayersProperty);m.json.origins["web-scene"]={type:[y],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};m.json.origins["portal-item"]={type:[y],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};c=function(n){function p(a){var b=n.call(this,a)||this;b.operationalLayerType="BuildingSceneLayer";b.allSublayers=new B({getCollections:()=>[b.sublayers],getChildrenFunction:d=>"building-group"===
d.type?d.sublayers:null});b.sublayers=null;b._sublayerOverrides=null;b.filters=new A;b.activeFilterId=null;b.summaryStatistics=null;b.outFields=null;b.type="building-scene";return b}l._inheritsLoose(p,n);var e=p.prototype;e.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a??{}};e.destroy=function(){this.allSublayers.destroy()};e.readSublayers=function(a,b,d){a=k.readSublayers(a,b,d);k.forEachSublayer(a,g=>g.layer=this);this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),
this._sublayerOverrides=null);return a};e.applySublayerOverrides=function(a,{overrides:b,context:d}){k.forEachSublayer(a,g=>g.read(b.get(g.id),d))};e.readSublayerOverrides=function(a,b){const d=new Map;for(const g of a)null==g||"object"!==typeof g||"number"!==typeof g.id?b.messages?.push(new v("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:g})):d.set(g.id,g);return{overrides:d,context:b}};e.writeSublayerOverrides=function(a,
b,d){const g=[];k.forEachSublayer(this.sublayers,q=>{q=q.write({},d);1<Object.keys(q).length&&g.push(q)});0<g.length&&(b.sublayers=g)};e.writeUnappliedOverrides=function(a,b){b.sublayers=[];a.overrides.forEach(d=>{b.sublayers.push(w.clone(d))})};e.write=function(a,b){a=n.prototype.write.call(this,a,b);!b||"web-scene"!==b.origin&&"portal-item"!==b.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,a,b):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,a));
return a};e.read=function(a,b){n.prototype.read.call(this,a,b);b&&("web-scene"===b.origin||"portal-item"===b.origin)&&null!=a&&Array.isArray(a.sublayers)&&(a=this.readSublayerOverrides(a.sublayers,b),this.sublayers?this.applySublayerOverrides(this.sublayers,a):this._sublayerOverrides=a)};e.readSummaryStatistics=function(a,b){return"string"===typeof b.statisticsHRef?(a=F.join(this.parsedUrl?.path,b.statisticsHRef),new z({url:a})):null};e.load=function(a){const b=D.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},
a).catch(E.throwIfAbortError).then(()=>this._fetchService(b)).then(()=>this._fetchAssociatedFeatureService(b));this.addResolvingPromise(a);return Promise.resolve(this)};e.loadAll=function(){return C.loadAll(this,a=>{k.forEachSublayer(this.sublayers,b=>{"building-group"!==b.type&&a(b)});this.summaryStatistics&&a(this.summaryStatistics)})};e.saveAs=function(){var a=l._asyncToGenerator(function*(b,d){return this._debouncedSaveOperations(t.SaveOperationType.SAVE_AS,{...d,getTypeKeywords:()=>this._getTypeKeywords(),
portalItemLayerType:"building-scene"},b)});return function(b,d){return a.apply(this,arguments)}}();e.save=function(){var a=l._asyncToGenerator(function*(){return this._debouncedSaveOperations(t.SaveOperationType.SAVE,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"})});return function(){return a.apply(this,arguments)}}();e.validateLayer=function(a){if(!a.layerType||"Building"!==a.layerType)throw new v("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",
{layerType:a.layerType});};e._getTypeKeywords=function(){return["Building"]};e._validateElevationInfo=function(){const a=this.elevationInfo;a&&("absolute-height"!==a.mode&&r.getLogger(this.declaredClass).warn(".elevationInfo\x3d","Building scene layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&r.getLogger(this.declaredClass).warn(".elevationInfo\x3d","Building scene layers do not support featureExpressionInfo"))};e._fetchAssociatedFeatureService=
function(){var a=l._asyncToGenerator(function*(b){b=new P.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,this.apiKey,b);try{this.associatedFeatureServiceItem=yield b.fetchPortalItem()}catch(d){r.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",d)}});return function(b){return a.apply(this,arguments)}}();l._createClass(p,[{key:"elevationInfo",set:function(a){this._set("elevationInfo",a);this._validateElevationInfo()}}]);return p}(t.SceneService(K.ArcGISService(L.OperationalLayer(M.PortalLayer(N.ScaleRangeLayer(c.MultiOriginJSONMixin(J.APIKeyMixin(I))))))));
f.__decorate([h.property({type:["BuildingSceneLayer"]})],c.prototype,"operationalLayerType",void 0);f.__decorate([h.property({readOnly:!0})],c.prototype,"allSublayers",void 0);f.__decorate([h.property(m)],c.prototype,"sublayers",void 0);f.__decorate([x.reader("service","sublayers")],c.prototype,"readSublayers",null);f.__decorate([h.property({type:A,nonNullable:!0,json:{write:!0}})],c.prototype,"filters",void 0);f.__decorate([h.property({type:String,json:{write:!0}})],c.prototype,"activeFilterId",
void 0);f.__decorate([h.property({readOnly:!0,type:z})],c.prototype,"summaryStatistics",void 0);f.__decorate([x.reader("summaryStatistics",["statisticsHRef"])],c.prototype,"readSummaryStatistics",null);f.__decorate([h.property({type:[String],json:{read:!1}})],c.prototype,"outFields",void 0);f.__decorate([h.property(u.sceneLayerFullExtent)],c.prototype,"fullExtent",void 0);f.__decorate([h.property({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0);f.__decorate([h.property(u.readOnlyService(H))],
c.prototype,"spatialReference",void 0);f.__decorate([h.property(u.elevationInfo)],c.prototype,"elevationInfo",null);f.__decorate([h.property({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0);f.__decorate([h.property()],c.prototype,"associatedFeatureServiceItem",void 0);return c=f.__decorate([G.subclass("esri.layers.BuildingSceneLayer")],c)});