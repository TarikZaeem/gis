// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/CollectionFlattener ../core/loadAll ../core/maybe ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/utils ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/lazyLayerLoader ../support/collectionUtils ../support/LayersMixin ../support/TablesMixin ../webdoc/support/writeUtils".split(" "),
function(m,d,r,t,u,c,n,f,I,J,v,w,x,y,z,A,B,C,D,E,F,G,H){c=function(q){function p(a){var b=q.call(this,a)||this;b._visibilityHandles={};b.allLayers=new r({getCollections:()=>[b.layers],getChildrenFunction:g=>"layers"in g?g.layers:null});b.allTables=E.createFlattenedTablesCollection(m._assertThisInitialized(b));b.fullExtent=void 0;b.operationalLayerType="GroupLayer";b.spatialReference=void 0;b.type="group";return b}m._inheritsLoose(p,q);var e=p.prototype;e.initialize=function(){this._enforceVisibility(this.visibilityMode,
this.visible);this.addHandles(n.watch(()=>this.visible,this._onVisibilityChange.bind(this),n.sync))};e._writeLayers=function(a,b,g,h){const k=[];if(!a)return k;a.forEach(l=>{l=H.getLayerJSON(l,h.webmap?h.webmap.getLayerJSONFromResourceInfo(l):null,h);u.isSome(l)&&l.layerType&&k.push(l)});b.layers=k};e.load=function(a){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:D.layerLookupMap},a));return Promise.resolve(this)};
e.loadAll=function(){var a=m._asyncToGenerator(function*(){return t.loadAll(this,b=>{b(this.layers,this.tables)})});return function(){return a.apply(this,arguments)}}();e.layerAdded=function(a){a.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(a):"inherited"===this.visibilityMode&&(a.visible=this.visible);this._visibilityHandles[a.uid]=n.watch(()=>a.visible,b=>this._onChildVisibilityChange(a,b),n.sync)};e.layerRemoved=function(a){const b=this._visibilityHandles[a.uid];b&&(b.remove(),
delete this._visibilityHandles[a.uid]);this._enforceVisibility(this.visibilityMode,this.visible)};e._turnOffOtherLayers=function(a){this.layers.forEach(b=>{b!==a&&(b.visible=!1)})};e._enforceVisibility=function(a,b){if(v.getProperties(this).initialized){var g=this.layers,h=g.find(k=>k.visible);switch(a){case "exclusive":g.length&&!h&&(h=g.getItemAt(0),h.visible=!0);this._turnOffOtherLayers(h);break;case "inherited":g.forEach(k=>{k.visible=b})}}};e._onVisibilityChange=function(a){"inherited"===this.visibilityMode&&
this.layers.forEach(b=>{b.visible=a})};e._onChildVisibilityChange=function(a,b){switch(this.visibilityMode){case "exclusive":b?this._turnOffOtherLayers(a):this._isAnyLayerVisible()||(a.visible=!0);break;case "inherited":a.visible=this.visible}};e._isAnyLayerVisible=function(){return this.layers.some(a=>a.visible)};m._createClass(p,[{key:"portalItem",set:function(a){this._set("portalItem",a)}},{key:"visibilityMode",set:function(a){const b=this._get("visibilityMode")!==a;this._set("visibilityMode",
a);b&&this._enforceVisibility(a,this.visible)}}]);return p}(z.BlendLayer(C.ScaleRangeLayer(A.OperationalLayer(B.PortalLayer(G.TablesMixin(F.LayersMixin(c.MultiOriginJSONMixin(y))))))));d.__decorate([f.property({readOnly:!0,dependsOn:[]})],c.prototype,"allLayers",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"allTables",void 0);d.__decorate([f.property()],c.prototype,"fullExtent",void 0);d.__decorate([f.property({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0);d.__decorate([f.property({json:{read:!1,
write:{ignoreOrigin:!0}}})],c.prototype,"layers",void 0);d.__decorate([x.writer("layers")],c.prototype,"_writeLayers",null);d.__decorate([f.property({type:["GroupLayer"]})],c.prototype,"operationalLayerType",void 0);d.__decorate([f.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",null);d.__decorate([f.property()],c.prototype,"spatialReference",void 0);d.__decorate([f.property({json:{read:!1},readOnly:!0,value:"group"})],c.prototype,"type",void 0);d.__decorate([f.property({type:["independent",
"inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],c.prototype,"visibilityMode",null);return c=d.__decorate([w.subclass("esri.layers.GroupLayer")],c)});