// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Clonable ../core/Collection ../core/Error ../core/Handles ../core/lang ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/sql ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/extensions/serializableProperty/reader ../form/FormTemplate ../geometry/SpatialReference ./Layer ./graphics/sources/MemorySource ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/EditBusLayer ./mixins/FeatureEffectLayer ./mixins/FeatureLayerBase ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/PublishableLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/featureLayerUtils ./support/FeatureTemplate ./support/FeatureType ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ./support/serviceCapabilitiesUtils ./support/TimeInfo ./support/versionUtils ./support/source/DataLayerSource ../renderers/support/styleUtils ../rest/support/FeatureSet ../rest/support/Query ../rest/support/TopFeaturesQuery ../support/popupUtils ../webdoc/support/opacityUtils".split(" "),
function(A,m,f,R,v,Ia,Ja,Ka,La,Ma,S,T,U,J,V,K,e,B,r,W,C,X,w,Y,x,L,Z,D,h,aa,n,ba,E,ca,da,ea,fa,M,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,F,t,p,N,O,wa,G,xa,P,ya,za,Aa,Ba,Ca,Da,Ea,y,Fa,Ga){function z(l,q){return new r("layer:unsupported",`Layer (${l.title}, ${l.id}) of type '${l.declaredClass}' ${q}`,{layer:l})}function H(l,q,d){l=!!d?.writeLayerSchema;return{enabled:l,ignoreOrigin:l}}const Ha=X.getLogger("esri.layers.FeatureLayer");v=wa.defineFieldProperties();e=function(l){function q(...b){b=
l.call(this,...b)||this;b._handles=new W;b.charts=null;b.copyright=null;b.displayField=null;b.dynamicDataSource=null;b.fields=null;b.fieldsIndex=null;b.formTemplate=null;b.fullExtent=null;b.geometryType=null;b.hasM=void 0;b.hasZ=void 0;b.infoFor3D=null;b.isTable=!1;b.labelsVisible=!0;b.labelingInfo=null;b.legendEnabled=!0;b.objectIdField=null;b.outFields=null;b.path=null;b.popupEnabled=!0;b.popupTemplate=null;b.screenSizePerspectiveEnabled=!0;b.spatialReference=ea.WGS84;b.subtypeCode=null;b.templates=
null;b.timeInfo=null;b.title=null;b.sublayerTitleMode="item-title";b.type="feature";b.typeIdField=null;b.types=null;b.visible=!0;return b}m._inheritsLoose(q,l);var d=q.prototype;d.destroy=function(){this.source?.destroy();this._handles=w.destroyMaybe(this._handles)};d.normalizeCtorArgs=function(b,a){return"string"===typeof b?{url:b,...a}:b};d.load=function(b){var a=this;const c=w.isSome(b)?b.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(c).then(k=>
this.initLayerProperties(k))),Promise.resolve(this);const g=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},b).catch(L.throwIfAbortError).then(m._asyncToGenerator(function*(){if(a.url&&null==a.layerId&&/FeatureServer|MapServer\/*$/i.test(a.url)){const k=yield a._fetchFirstLayerId(c);null!=k&&(a.layerId=k)}if(!a.url&&!a._hasMemorySource())throw new r("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return a.initLayerProperties(yield a.createGraphicsSource(c))})).then(()=>
this._setUserPrivileges(this.serviceItemId,b)).then(()=>p.ensureLayerCredential(this,b));this.addResolvingPromise(g);return Promise.resolve(this)};d.readCapabilities=function(b,a){a=a.layerDefinition||a;return ya.getFeatureLayerCapabilities(a,this.url)};d.readEditingEnabled=function(b,a){return this._readEditingEnabled(a,!1)};d.readEditingEnabledFromWebMap=function(b,a,c){return this._readEditingEnabled(a,!0,c)};d.writeEditingEnabled=function(b,a){this._writeEditingEnabled(b,a,!1)};d.writeEditingEnabledToWebMap=
function(b,a,c,g){this._writeEditingEnabled(b,a,!0,g)};d.readIsTable=function(b,a){a=a?.layerDefinition??a;return"Table"===a.type||!a.geometryType};d.writeIsTable=function(b,a,c,g){g?.writeLayerSchema&&x.setDeepValue(c,b?"Table":"Feature Layer",a)};d.readGlobalIdField=function(b,a){return p.readGlobalIdField(a.layerDefinition||a)};d.readObjectIdField=function(b,a){return p.readObjectIdField(a.layerDefinition||a)};d.readRenderer=function(b,a,c){a=a.layerDefinition||a;if(b=a.drawingInfo?.renderer)return(b=
U.read(b,a,c)??void 0)||Ha.error("Failed to create renderer",{rendererDefinition:a.drawingInfo.renderer,layer:this,context:c}),b;if(a.defaultSymbol)return a.types&&a.types.length?new T({defaultSymbol:I(a.defaultSymbol,a,c),field:a.typeIdField,uniqueValueInfos:a.types.map(g=>({id:g.id,symbol:I(g.symbol,g,c)}))}):new S({symbol:I(a.defaultSymbol,a,c)})};d.castSource=function(b){return b?Array.isArray(b)||b instanceof B?new M.MemorySource({layer:this,items:b}):b:null};d.readSource=function(b,a){b=Da.fromJSON(a.featureSet);
return new M.MemorySource({layer:this,items:b?.features??[]})};d.readTemplates=function(b,a){var c=a.editFieldsInfo;a=c&&c.creatorField;c=c&&c.editorField;b=b&&b.map(g=>N.fromJSON(g));this._fixTemplates(b,a);this._fixTemplates(b,c);return b};d.readTitle=function(b,a){b=a.layerDefinition?.name??a.name;a=a.title||a.layerDefinition&&a.layerDefinition.title;if(b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?F.titleFromUrlAndName(this.url,b):b;if(!b&&
this.url){const c=F.parse(this.url);w.isSome(c)&&(b=c.title)}if(!b)return;"item-title-and-service-name"===this.sublayerTitleMode&&a&&a!==b&&(b=a+" - "+b);return F.cleanTitle(b)}if("item-title"===this.sublayerTitleMode&&a)return a};d.readTitleFromWebMap=function(b,a){return a.title||a.layerDefinition&&a.layerDefinition.name};d.readTypeIdField=function(b,a){a=a.layerDefinition||a;let c=a.typeIdField;c&&a.fields&&(c=c.toLowerCase(),b=a.fields.find(g=>g.name.toLowerCase()===c))&&(c=b.name);return c};
d.readTypes=function(b,a){a=a.layerDefinition||a;b=a.types;const c=(a=a.editFieldsInfo)&&a.creatorField,g=a&&a.editorField;return b&&b.map(k=>{k=O.fromJSON(k);this._fixTemplates(k.templates,c);this._fixTemplates(k.templates,g);return k})};d.readVisible=function(b,a){if(a.layerDefinition&&null!=a.layerDefinition.defaultVisibility)return!!a.layerDefinition.defaultVisibility;if(null!=a.visibility)return!!a.visibility};d.addAttachment=function(){var b=m._asyncToGenerator(function*(a,c){return p.addAttachment(this,
a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.updateAttachment=function(){var b=m._asyncToGenerator(function*(a,c,g){return p.updateAttachment(this,a,c,g,"FeatureLayer")});return function(a,c,g){return b.apply(this,arguments)}}();d.applyEdits=function(){var b=m._asyncToGenerator(function*(a,c){return p.applyEdits(this,a,c)});return function(a,c){return b.apply(this,arguments)}}();d.on=function(b,a){return l.prototype.on.call(this,b,a)};d.createPopupTemplate=function(b){return Fa.createPopupTemplate(this,
b)};d.createGraphicsSource=function(){var b=m._asyncToGenerator(function*(a){if(this._hasMemorySource()&&this.source)return this.source.load({signal:a});const {default:c}=yield L.whenOrAbort(new Promise((g,k)=>A(["./graphics/sources/FeatureLayerSource"],u=>g(Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}))),k)),a);return(new c({layer:this})).load({signal:a})});return function(a){return b.apply(this,arguments)}}();d.createQuery=function(){const b=
p.createQuery(this);b.dynamicDataSource=this.dynamicDataSource;var a=w.isSome(this.subtypeCode)?`${this.subtypeField} = ${this.subtypeCode}`:null;a=Z.sqlAnd(this.definitionExpression,a);b.where=a||"1\x3d1";return b};d.deleteAttachments=function(){var b=m._asyncToGenerator(function*(a,c){return p.deleteAttachments(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.fetchRecomputedExtents=function(){var b=m._asyncToGenerator(function*(a){return p.fetchRecomputedExtents(this,
a,"FeatureLayer")});return function(a){return b.apply(this,arguments)}}();d.getFeatureType=function(b){const {typeIdField:a,types:c}=this;if(!a||!b)return null;const g=b.attributes?b.attributes[a]:void 0;if(null==g)return null;let k=null;c?.some(u=>{const {id:Q}=u;if(null==Q)return!1;Q.toString()===g.toString()&&(k=u);return!!k});return k};d.getFieldDomain=function(b,a){return(a=this.getFeatureType(a&&a.feature))&&(a=a.domains&&a.domains[b])&&"inherited"!==a.type?a:this._getLayerDomain(b)};d.getField=
function(b){return this.fieldsIndex.get(b)};d.queryAttachments=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryAttachments(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.queryFeatures=function(){var b=m._asyncToGenerator(function*(a,c){const g=yield this.load();a=yield g.source.queryFeatures(Ea.from(a)??g.createQuery(),c);if(a?.features)for(const k of a.features)k.layer=k.sourceLayer=g;return a});return function(a,c){return b.apply(this,arguments)}}();
d.queryObjectIds=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryObjectIds(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.queryFeatureCount=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryFeatureCount(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.queryExtent=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryExtent(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,
arguments)}}();d.queryRelatedFeatures=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryRelatedFeatures(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.queryRelatedFeaturesCount=function(){var b=m._asyncToGenerator(function*(a,c){return p.queryRelatedFeaturesCount(this,a,c,"FeatureLayer")});return function(a,c){return b.apply(this,arguments)}}();d.queryTopFeatures=function(){var b=m._asyncToGenerator(function*(a,c){const {source:g,capabilities:k}=
yield this.load();if(!g.queryTopFeatures||!k?.query?.supportsTopFeaturesQuery)throw new r("FeatureLayer","Layer source does not support queryTopFeatures capability");a=yield g.queryTopFeatures(y.from(a),c);if(a?.features)for(const u of a.features)u.layer=u.sourceLayer=this;return a});return function(a,c){return b.apply(this,arguments)}}();d.queryTopObjectIds=function(){var b=m._asyncToGenerator(function*(a,c){const {source:g,capabilities:k}=yield this.load();if(!g.queryTopObjectIds||!k?.query.supportsTopFeaturesQuery)throw new r("FeatureLayer",
"Layer source does not support queryTopObjectIds capability");return g.queryTopObjectIds(y.from(a),c)});return function(a,c){return b.apply(this,arguments)}}();d.queryTopFeaturesExtent=function(){var b=m._asyncToGenerator(function*(a,c){const {source:g,capabilities:k}=yield this.load();if(!g.queryTopExtents||!k?.query?.supportsTopFeaturesQuery)throw new r("FeatureLayer","Layer source does not support queryTopExtents capability");return g.queryTopExtents(y.from(a),c)});return function(a,c){return b.apply(this,
arguments)}}();d.queryTopFeatureCount=function(){var b=m._asyncToGenerator(function*(a,c){const {source:g,capabilities:k}=yield this.load();if(!g.queryTopCount||!k?.query?.supportsTopFeaturesQuery)throw new r("FeatureLayer","Layer source does not support queryFeatureCount capability");return g.queryTopCount(y.from(a),c)});return function(a,c){return b.apply(this,arguments)}}();d.read=function(b,a){const c=b.featureCollection;if(c){const g=c.layers;g&&1===g.length&&(l.prototype.read.call(this,g[0],
a),null!=c.showLegend&&l.prototype.read.call(this,{showLegend:c.showLegend},a))}l.prototype.read.call(this,b,a);a&&"service"===a.origin&&(this.revert(["objectIdField","fields","timeInfo"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))};d.write=function(b,a){a={...a,origin:a?.origin??void 0,writeLayerSchema:a?.writeLayerSchema??this._hasMemorySource()};const {origin:c,layerContainerType:g,messages:k}=a;if(this.dynamicDataSource)return k?.push(z(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),
null;if(this.isTable){if("web-scene"===c||"web-map"===c&&"tables"!==g)return k?.push(z(this,"using a table source cannot be written to web scenes and web maps")),null;if(this._hasMemorySource())return k?.push(z(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===c&&"tables"===g)return k?.push(z(this,"using a non-table source cannot be written to tables in web maps")),null;return l.prototype.write.call(this,b,a)};d.clone=function(){if(this._hasMemorySource())throw new r("FeatureLayer",
`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return l.prototype.clone.call(this)};d.serviceSupportsSpatialReference=function(b){return this.loaded?"memory"===this.source?.type?!0:Aa.serviceSupportsSpatialReference(this,b):!1};d.save=function(){var b=m._asyncToGenerator(function*(a){return(yield new Promise((c,g)=>A(["./save/featureLayerUtils"],c,g))).save(this,a)});return function(a){return b.apply(this,arguments)}}();d.saveAs=function(){var b=
m._asyncToGenerator(function*(a,c){return(yield new Promise((g,k)=>A(["./save/featureLayerUtils"],g,k))).saveAs(this,a,c)});return function(a,c){return b.apply(this,arguments)}}();d._readEditingEnabled=function(b,a,c){let g=b.layerDefinition?.capabilities;if(g)return this._hasEditingCapability(g);g=b.capabilities;if(a&&"web-map"===c?.origin&&!this._hasMemorySource()&&g)return this._hasEditingCapability(g)};d._hasEditingCapability=function(b){return b.toLowerCase().split(",").map(a=>a.trim()).includes("editing")};
d._writeEditingEnabled=function(b,a,c,g){b||(b=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query",x.setDeepValue("layerDefinition.capabilities",b,a),c&&!g?.writeLayerSchema&&(a.capabilities=b))};d._getLayerDomain=function(b){return(b=this.fieldsIndex.get(b))?b.domain:null};d._fetchFirstLayerId=function(b){return V(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:b}).then(a=>{if(a=a.data){if(Array.isArray(a.layers)&&0<a.layers.length)return a.layers[0].id;
if(Array.isArray(a.tables)&&0<a.tables.length)return a.tables[0].id}})};d.initLayerProperties=function(){var b=m._asyncToGenerator(function*(a){this._set("source",a);a.sourceJSON&&(this.sourceJSON=a.sourceJSON,this.read(a.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}));this._verifySource();this._verifyFields();G.fixRendererFields(this.renderer,this.fieldsIndex);G.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);return Ca.loadStyleRenderer(this,
{origin:"service"})});return function(a){return b.apply(this,arguments)}}();d.hasDataChanged=function(){var b=m._asyncToGenerator(function*(){return p.hasDataChanged(this)});return function(){return b.apply(this,arguments)}}();d.fetchPublishingStatus=function(){var b=m._asyncToGenerator(function*(){const a=this.source;return a?.fetchPublishingStatus?a.fetchPublishingStatus():"unavailable"});return function(){return b.apply(this,arguments)}}();d._verifyFields=function(){const b=this.parsedUrl?.path??
"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+b+")");this.isTable||this._hasMemorySource()||-1!==b.search(/\/FeatureServer\//i)||this.fields?.some(a=>"geometry"===a.type)||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+b+")")};d._fixTemplates=function(b,a){b&&b.forEach(c=>{(c=c.prototype&&c.prototype.attributes)&&
a&&delete c[a]})};d._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new r("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");}else if(!this.url)throw new r("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");};d._initMemorySource=function(b){b.forEach(a=>{a.layer=this;a.sourceLayer=this});this._handles.add([b.on("after-add",a=>{a.item.layer=this;a.item.sourceLayer=
this}),b.on("after-remove",a=>{a.item.layer=null;a.item.sourceLayer=null})],"fl-source")};d._resetMemorySource=function(b){b.forEach(a=>{a.layer=null;a.sourceLayer=null});this._handles.remove("fl-source")};d._hasMemorySource=function(){return!(this.url||!this.source)};m._createClass(q,[{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("dynamicDataSource");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");
this.commitProperty("gdbVersion");this.commitProperty("historicMoment");this.commitProperty("returnZ");this.commitProperty("capabilities");this.commitProperty("returnM");return(this._get("createQueryVersion")??0)+1}},{key:"editingEnabled",get:function(){return this.loaded&&!this.capabilities?.operations.supportsEditing?!1:this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges},set:function(b){this._overrideIfSome("editingEnabled",b)}},
{key:"effectiveEditingEnabled",get:function(){return p.computeEffectiveEditingEnabled(this)}},{key:"parsedUrl",get:function(){const b=D.urlToObject(this.url);null!=b&&(null!=this.dynamicDataSource?b.path=D.join(b.path,"dynamicLayer"):null!=this.layerId&&(b.path=D.join(b.path,this.layerId.toString())));return b}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(b){G.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"source",
set:function(b){const a=this._get("source");a!==b&&(a&&a instanceof B&&this._resetMemorySource(a),b&&b instanceof B&&this._initMemorySource(b),this._set("source",b))}}]);return q}(na.FeatureLayerBase(oa.FeatureReductionLayer(ma.FeatureEffectLayer(sa.PublishableLayer(la.EditBusLayer(ja.BlendLayer(qa.OrderedLayer(va.TemporalLayer(ua.ScaleRangeLayer(ta.RefreshableLayer(ia.ArcGISService(pa.OperationalLayer(ra.PortalLayer(Y.MultiOriginJSONMixin(ka.CustomParametersMixin(ha.APIKeyMixin(e.ClonableMixin(fa))))))))))))))))));
f.__decorate([n.reader("service","capabilities")],e.prototype,"readCapabilities",null);f.__decorate([h.property({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],e.prototype,"charts",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,"createQueryVersion",null);f.__decorate([h.property({json:{read:{source:"layerDefinition.copyrightText"}}})],e.prototype,"copyright",void 0);f.__decorate([h.property({json:{read:{source:"layerDefinition.displayField"}}})],e.prototype,"displayField",
void 0);f.__decorate([h.property({types:K.symbolTypes,readOnly:!0})],e.prototype,"defaultSymbol",void 0);f.__decorate([h.property({type:Ba.DataLayerSource})],e.prototype,"dynamicDataSource",void 0);f.__decorate([h.property({type:Boolean})],e.prototype,"editingEnabled",null);f.__decorate([n.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],e.prototype,"readEditingEnabled",null);f.__decorate([n.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],
e.prototype,"readEditingEnabledFromWebMap",null);f.__decorate([E.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],e.prototype,"writeEditingEnabled",null);f.__decorate([E.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],e.prototype,"writeEditingEnabledToWebMap",null);f.__decorate([h.property({readOnly:!0})],e.prototype,"effectiveEditingEnabled",null);f.__decorate([h.property({...v.fields,
json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:H}}}}})],e.prototype,"fields",void 0);f.__decorate([h.property(v.fieldsIndex)],e.prototype,"fieldsIndex",void 0);f.__decorate([h.property({type:da,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"formTemplate",void 0);f.__decorate([h.property({json:{read:{source:"layerDefinition.extent"}}})],e.prototype,"fullExtent",
void 0);f.__decorate([h.property({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:H,writer(l,q,d){(l=l?p.geometryTypeKebabDict.toJSON(l):null)&&x.setDeepValue(d,l,q)}}}},read:{source:"layerDefinition.geometryType",reader:p.geometryTypeKebabDict.read}}})],e.prototype,"geometryType",void 0);f.__decorate([h.property({json:{read:{source:"layerDefinition.hasM"}}})],e.prototype,"hasM",void 0);f.__decorate([h.property({json:{read:{source:"layerDefinition.hasZ"}}})],
e.prototype,"hasZ",void 0);f.__decorate([h.property(t.id)],e.prototype,"id",void 0);f.__decorate([h.property({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],e.prototype,"infoFor3D",void 0);f.__decorate([h.property({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],e.prototype,"isTable",void 0);f.__decorate([n.reader("service","isTable",["type","geometryType"]),n.reader("isTable",["layerDefinition.type","layerDefinition.geometryType"])],e.prototype,"readIsTable",null);
f.__decorate([E.writer("web-map","isTable")],e.prototype,"writeIsTable",null);f.__decorate([h.property(t.labelsVisible)],e.prototype,"labelsVisible",void 0);f.__decorate([h.property({type:[xa],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:P.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:P.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],e.prototype,"labelingInfo",void 0);f.__decorate([h.property((()=>
{const l=C.clone(t.opacityDrawingInfo);l.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(q,d,b){x.setDeepValue(b,Ga.opacityToTransparency(q),d)}}};return l})())],e.prototype,"opacity",void 0);f.__decorate([h.property(t.legendEnabled)],e.prototype,"legendEnabled",void 0);f.__decorate([h.property({type:["show","hide"],json:(()=>{const l=C.clone(t.listMode.json);l.origins["portal-item"]={read:!1,write:!1};return l})()})],e.prototype,"listMode",void 0);f.__decorate([n.reader("globalIdField",
["layerDefinition.globalIdField","layerDefinition.fields"])],e.prototype,"readGlobalIdField",null);f.__decorate([h.property({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:H}}}}})],e.prototype,"objectIdField",void 0);f.__decorate([n.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],e.prototype,"readObjectIdField",null);f.__decorate([h.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],e.prototype,"operationalLayerType",
void 0);f.__decorate([h.property(v.outFields)],e.prototype,"outFields",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,"parsedUrl",null);f.__decorate([h.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],e.prototype,"path",void 0);f.__decorate([h.property(t.popupEnabled)],e.prototype,"popupEnabled",void 0);f.__decorate([h.property({type:R,json:{name:"popupInfo",write:!0}})],e.prototype,"popupTemplate",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,
"defaultPopupTemplate",null);f.__decorate([h.property({types:J.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:J.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(l,q,d){return{ignoreOrigin:d?.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(l,q,d){return{ignoreOrigin:d?.writeLayerSchema}}}}})],e.prototype,"renderer",null);f.__decorate([n.reader("service","renderer",
["drawingInfo.renderer","defaultSymbol"]),n.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],e.prototype,"readRenderer",null);f.__decorate([h.property((()=>{const l=C.clone(t.screenSizePerspectiveEnabled);l.json.origins["portal-item"]={read:!1,write:!1};return l})())],e.prototype,"screenSizePerspectiveEnabled",void 0);f.__decorate([h.property({clonable:!1})],e.prototype,"source",null);f.__decorate([aa.cast("source")],e.prototype,"castSource",null);f.__decorate([n.reader("portal-item",
"source",["featureSet"]),n.reader("web-map","source",["featureSet"])],e.prototype,"readSource",null);f.__decorate([h.property({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],e.prototype,"spatialReference",void 0);f.__decorate([h.property({type:Number})],e.prototype,"subtypeCode",void 0);f.__decorate([h.property({type:[N]})],e.prototype,"templates",void 0);f.__decorate([n.reader("templates",["editFieldsInfo","creatorField","editorField","templates"])],e.prototype,"readTemplates",
null);f.__decorate([h.property({type:za})],e.prototype,"timeInfo",void 0);f.__decorate([h.property()],e.prototype,"title",void 0);f.__decorate([n.reader("service","title",["name"]),n.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],e.prototype,"readTitle",null);f.__decorate([n.reader("web-map","title",["layerDefinition.name","title"])],e.prototype,"readTitleFromWebMap",null);f.__decorate([h.property({type:String})],e.prototype,"sublayerTitleMode",void 0);f.__decorate([h.property({json:{read:!1}})],
e.prototype,"type",void 0);f.__decorate([h.property({type:String})],e.prototype,"typeIdField",void 0);f.__decorate([n.reader("service","typeIdField"),n.reader("typeIdField",["layerDefinition.typeIdField"])],e.prototype,"readTypeIdField",null);f.__decorate([h.property({type:[O]})],e.prototype,"types",void 0);f.__decorate([n.reader("service","types",["types"]),n.reader("types",["layerDefinition.types"])],e.prototype,"readTypes",null);f.__decorate([h.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],
e.prototype,"visible",void 0);f.__decorate([n.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],e.prototype,"readVisible",null);e=f.__decorate([ba.subclass("esri.layers.FeatureLayer")],e);const I=ca.createTypeReader({types:K.symbolTypesRenderer});return e});