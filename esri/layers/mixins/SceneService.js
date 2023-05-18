// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/originUtils ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties ../support/I3SIndexInfo ../support/schemaValidatorLoader ../../portal/Portal ../../portal/PortalItem ../../webdoc/support/saveUtils".split(" "),
function(p,m,f,x,n,I,J,K,A,h,R,S,t,L,M,B,y,N,z,u,C,O,P,D,Q,E){const q=I.getLogger("esri.layers.mixins.SceneService");var v;(function(d){d[d.existingItem=0]="existingItem";d[d.newItem=1]="newItem"})(v||(v={}));const F={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};p.SaveOperationType=void 0;(function(d){d[d.SAVE=0]="SAVE";d[d.SAVE_AS=1]="SAVE_AS"})(p.SaveOperationType||(p.SaveOperationType={}));p.SCENE_SERVICE_ITEM_TYPE=
"Scene Service";p.SceneService=d=>{d=function(G){function w(){var b=G.apply(this,arguments)||this;b.spatialReference=null;b.fullExtent=null;b.heightModelInfo=null;b.minScale=0;b.maxScale=0;b.version={major:Number.NaN,minor:Number.NaN,versionString:""};b.copyright=null;b.sublayerTitleMode="item-title";b.title=null;b.layerId=null;b.indexInfo=null;b._debouncedSaveOperations=K.debounce(function(){var a=m._asyncToGenerator(function*(c,e,k){switch(c){case p.SaveOperationType.SAVE:return b._save(e);case p.SaveOperationType.SAVE_AS:return b._saveAs(k,
e)}});return function(c,e,k){return a.apply(this,arguments)}}());return b}m._inheritsLoose(w,G);var g=w.prototype;g.readSpatialReference=function(b,a){return this._readSpatialReference(a)};g._readSpatialReference=function(b){if(null!=b.spatialReference)return z.fromJSON(b.spatialReference);b=b.store;b=(b=b.indexCRS||b.geographicCRS)&&parseInt(b.substring(b.lastIndexOf("/")+1,b.length),10);return null!=b?new z(b):null};g.readFullExtent=function(b,a,c){if(null!=b&&"object"===typeof b)return a=null==
b.spatialReference?{...b,spatialReference:this._readSpatialReference(a)}:b,y.fromJSON(a,c);c=a.store;a=this._readSpatialReference(a);return null==a||null==c||null==c.extent||!Array.isArray(c.extent)||c.extent.some(e=>-1E38>e)?null:new y({xmin:c.extent[0],ymin:c.extent[1],xmax:c.extent[2],ymax:c.extent[3],spatialReference:a})};g.parseVersionString=function(b){const a={major:Number.NaN,minor:Number.NaN,versionString:b};b=b.split(".");2<=b.length&&(a.major=parseInt(b[0],10),a.minor=parseInt(b[1],10));
return a};g.readVersion=function(b,a){b=a.store;return this.parseVersionString(null!=b.version?b.version.toString():"")};g.readTitlePortalItem=function(b){return"item-title"!==this.sublayerTitleMode?void 0:b};g.readTitleService=function(b,a){b=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return u.titleFromUrlAndName(this.url,a.name);a=a.name;if(!a&&this.url){const c=u.parse(this.url);J.isSome(c)&&(a=c.title)}"item-title-and-service-name"===this.sublayerTitleMode&&
b&&(a=b+" - "+a);return u.cleanTitle(a)};g.writeUrl=function(b,a,c,e){u.writeUrlWithLayerId(this,b,"layers",a,e)};g._fetchIndexAndUpdateExtent=function(){var b=m._asyncToGenerator(function*(a,c){this.indexInfo=O.fetchIndexInfo(this.parsedUrl.path,this.rootNode,a,this.apiKey,q,c);null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(yield this.indexInfo)});return function(a,c){return b.apply(this,arguments)}}();g._updateExtent=function(b){if("page"===b?.type){var a=b.rootIndex%b.pageSize;
a=b.rootPage?.nodes?.[a];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new n("sceneservice:invalid-node-page","Invalid node page.");-1E38>a.obb.center[0]||null==this.fullExtent||this.fullExtent.hasZ||(b=a.obb.halfSize,a=a.obb.center[2],b=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]),this.fullExtent.zmin=a-b,this.fullExtent.zmax=a+b)}else if("node"===b?.type&&(a=b.rootNode?.mbs,Array.isArray(a)&&4===a.length&&!(-1E38>a[0]))){b=a[2];a=a[3];var {fullExtent:c}=this;c&&(c.zmin=b-a,
c.zmax=b+a)}};g._fetchService=function(){var b=m._asyncToGenerator(function*(a){if(null==this.url)throw new n("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const c=yield this._fetchFirstLayerId(a);null!=c&&(this.layerId=c)}return this._fetchServiceLayer(a)});return function(a){return b.apply(this,arguments)}}();g._fetchFirstLayerId=function(){var b=m._asyncToGenerator(function*(a){a=yield x(this.url,
{query:{f:"json",token:this.apiKey},responseType:"json",signal:a});if(a.data&&Array.isArray(a.data.layers)&&0<a.data.layers.length)return a.data.layers[0].id});return function(a){return b.apply(this,arguments)}}();g._fetchServiceLayer=function(){var b=m._asyncToGenerator(function*(a){a=yield x(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:a});a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let c=!1;a.data.layerType&&"Voxel"===a.data.layerType&&(c=!0);
if(c)return this._fetchVoxelServiceLayer();a=a.data;this.read(a,this._getServiceContext());this.validateLayer(a)});return function(a){return b.apply(this,arguments)}}();g._fetchVoxelServiceLayer=function(){var b=m._asyncToGenerator(function*(a){a=(yield x(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:a})).data;this.read(a,this._getServiceContext());this.validateLayer(a)});return function(a){return b.apply(this,arguments)}}();g._getServiceContext=function(){return{origin:"service",
portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}};g._ensureLoadBeforeSave=function(){var b=m._asyncToGenerator(function*(){yield this.load();"beforeSave"in this&&"function"===typeof this.beforeSave&&(yield this.beforeSave())});return function(){return b.apply(this,arguments)}}();g.validateLayer=function(b){};g._updateTypeKeywords=function(b,a,c){b.typeKeywords||(b.typeKeywords=[]);a=a.getTypeKeywords();for(const e of a)b.typeKeywords.push(e);b.typeKeywords&&(b.typeKeywords=
b.typeKeywords.filter((e,k,r)=>r.indexOf(e)===k),c===v.newItem&&(b.typeKeywords=b.typeKeywords.filter(e=>"Hosted Service"!==e)))};g._saveAs=function(){var b=m._asyncToGenerator(function*(a,c){c={...F,...c};a=Q.from(a);a||(q.error("_saveAs(): requires a portal item parameter"),yield Promise.reject(new n("sceneservice:portal-item-required","_saveAs() requires a portal item to save to")));a.id&&(a=a.clone(),a.id=null);const e=a.portal||D.getDefault();yield this._ensureLoadBeforeSave();a.type="Scene Service";
a.portal=e;const k={origin:"portal-item",url:null,messages:[],portal:e,portalItem:a,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},k)]};yield Promise.all(k.resources.pendingOperations??[]);yield this._validateAgainstJSONSchema(r,k,c);a.url=this.url;a.title||(a.title=this.title);this._updateTypeKeywords(a,c,v.newItem);yield e.signIn();yield e.user?.addItem({item:a,folder:c&&c.folder,data:r});yield E.saveResources(this.resourceReferences,
k,null);this.portalItem=a;B.updateOrigins(k);return k.portalItem=a});return function(a,c){return b.apply(this,arguments)}}();g._save=function(){var b=m._asyncToGenerator(function*(a){a={...F,...a};if(!this.portalItem)throw q.error("_save(): requires the .portalItem property to be set"),new n("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if("Scene Service"!==this.portalItem.type)throw q.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+
", expected Scene Service"),new n("sceneservice:portal-item-wrong-type",'Portal item needs to have type "Scene Service"');yield this._ensureLoadBeforeSave();const c={origin:"portal-item",url:this.portalItem.itemUrl&&A.urlToObject(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||D.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},e={layers:[this.write({},c)]};yield Promise.all(c.resources.pendingOperations??
[]);yield this._validateAgainstJSONSchema(e,c,a);this.portalItem.url=this.url;this.portalItem.title||(this.portalItem.title=this.title);this._updateTypeKeywords(this.portalItem,a,v.existingItem);yield this.portalItem.update({data:e});yield E.saveResources(this.resourceReferences,c,null);B.updateOrigins(c);return this.portalItem});return function(a){return b.apply(this,arguments)}}();g._validateAgainstJSONSchema=function(){var b=m._asyncToGenerator(function*(a,c,e){c=c.messages?.filter(l=>"error"===
l.type).map(l=>new n(l.name,l.message,l.details))??[];e?.validationOptions?.ignoreUnsupported&&(c=c.filter(l=>"layer:unsupported"!==l.name&&"symbol:unsupported"!==l.name&&"symbol-layer:unsupported"!==l.name&&"property:unsupported"!==l.name&&"url:unsupported"!==l.name&&"scenemodification:unsupported"!==l.name));const k=e?.validationOptions,r=k?.enabled,H=P.getLoader();if(r&&H&&(a=(yield H()).validate(a,e.portalItemLayerType),0<a.length&&(e=`Layer item did not validate:\n${a.join("\n")}`,q.error(`_validateAgainstJSONSchema(): ${e}`),
"throw"===k.failPolicy)))throw c=a.map(l=>new n("sceneservice:schema-validation",l)).concat(c),new n("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:c});if(0<c.length)throw new n("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:c});});return function(a,c,e){return b.apply(this,arguments)}}();m._createClass(w,[{key:"url",set:function(b){b=
u.sanitizeUrlWithLayerId({layer:this,url:b,nonStandardUrlAllowed:!1,logger:q});this._set("url",b.url);null!=b.layerId&&this._set("layerId",b.layerId)}},{key:"parsedUrl",get:function(){var b=this._get("url");b=A.urlToObject(b);null!=this.layerId&&(b.path=`${b.path}/layers/${this.layerId}`);return b}}]);return w}(d);f.__decorate([h.property(C.id)],d.prototype,"id",void 0);f.__decorate([h.property({type:z})],d.prototype,"spatialReference",void 0);f.__decorate([t.reader("spatialReference",["spatialReference",
"store.indexCRS","store.geographicCRS"])],d.prototype,"readSpatialReference",null);f.__decorate([h.property({type:y})],d.prototype,"fullExtent",void 0);f.__decorate([t.reader("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],d.prototype,"readFullExtent",null);f.__decorate([h.property({readOnly:!0,type:N})],d.prototype,"heightModelInfo",void 0);f.__decorate([h.property({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},
write:!1}}}})],d.prototype,"minScale",void 0);f.__decorate([h.property({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],d.prototype,"maxScale",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"version",void 0);f.__decorate([t.reader("version",["store.version"])],d.prototype,"readVersion",null);f.__decorate([h.property({type:String,json:{read:{source:"copyrightText"}}})],d.prototype,"copyright",void 0);f.__decorate([h.property({type:String,
json:{read:!1}})],d.prototype,"sublayerTitleMode",void 0);f.__decorate([h.property({type:String})],d.prototype,"title",void 0);f.__decorate([t.reader("portal-item","title")],d.prototype,"readTitlePortalItem",null);f.__decorate([t.reader("service","title",["name"])],d.prototype,"readTitleService",null);f.__decorate([h.property({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],d.prototype,"layerId",void 0);f.__decorate([h.property(C.url)],
d.prototype,"url",null);f.__decorate([M.writer("url")],d.prototype,"writeUrl",null);f.__decorate([h.property()],d.prototype,"parsedUrl",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"store",void 0);f.__decorate([h.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],d.prototype,"rootNode",void 0);return d=f.__decorate([L.subclass("esri.layers.mixins.SceneService")],d)};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});