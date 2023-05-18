// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../core/Collection ../core/CollectionFlattener ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/SpatialReference ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/commonProperties ./support/KMLSublayer ./support/kmlUtils ../geometry/Extent".split(" "),
function(l,e,d,v,w,m,x,y,q,z,g,L,M,r,A,B,t,C,D,E,F,G,H,I,u,n,J){const K=["kml","xml"];d=function(p){function k(...a){var b=p.call(this,...a)||this;b._visibleFolders=[];b.allSublayers=new w({getCollections:()=>[b.sublayers],getChildrenFunction(c){return c.sublayers}});b.outSpatialReference=t.WGS84;b.path=null;b.legendEnabled=!1;b.operationalLayerType="KML";b.sublayers=null;b.type="kml";b.url=null;return b}l._inheritsLoose(k,p);var h=k.prototype;h.initialize=function(){this.addHandles([q.watch(()=>
this.sublayers,(a,b)=>{b&&b.forEach(c=>{c.parent=null;c.layer=null});a&&a.forEach(c=>{c.parent=this;c.layer=this})},q.sync),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])};h.normalizeCtorArgs=function(a,b){return"string"===typeof a?{url:a,...b}:a};h.readSublayersFromItemOrWebMap=function(a,b){this._visibleFolders=b.visibleFolders};h.readSublayers=function(a,b,c){return n.sublayersFromJSON(u,b,c,this._visibleFolders)};h.writeSublayers=function(a,b){const c=[];for(a=a.toArray();a.length;){const f=
a[0];f.networkLink||(f.visible&&c.push(f.id),f.sublayers&&a.push(...f.sublayers.toArray()));a.shift()}b.visibleFolders=c};h.load=function(a){const b=m.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},a).catch(y.throwIfAbortError).then(()=>this._fetchService(b)));return Promise.resolve(this)};h.destroy=function(){p.prototype.destroy.call(this);this.allSublayers.destroy()};h._fetchService=function(){var a=l._asyncToGenerator(function*(b){var c=
yield Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:n.fetchService(this.url??"",this.outSpatialReference,this.refreshInterval,b));(c=n.parseKML(c.data))&&this.read(c,{origin:"service"})});return function(b){return a.apply(this,arguments)}}();h._recomputeFullExtent=function(){let a=null;m.isSome(this.extent)&&(a=this.extent.clone());const b=c=>{if(c.sublayers)for(const f of c.sublayers.items)b(f),f.visible&&f.fullExtent&&(m.isSome(a)?a.union(f.fullExtent):a=f.fullExtent.clone())};
b(this);return a};l._createClass(k,[{key:"title",get:function(){const a=this._get("title");return a&&"defaults"!==this.originOf("title")?a:this.url?z.getFilename(this.url,K)||"KML":a||""},set:function(a){this._set("title",a)}},{key:"visibleSublayers",get:function(){const a=this.sublayers,b=[],c=f=>{f.visible&&(b.push(f),f.sublayers&&f.sublayers.forEach(c))};a&&a.forEach(c);return b}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}}]);return k}(D.BlendLayer(G.RefreshableLayer(H.ScaleRangeLayer(E.OperationalLayer(F.PortalLayer(x.MultiOriginJSONMixin(C)))))));
e.__decorate([g.property({readOnly:!0})],d.prototype,"allSublayers",void 0);e.__decorate([g.property({type:t})],d.prototype,"outSpatialReference",void 0);e.__decorate([g.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0);e.__decorate([g.property({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"legendEnabled",void 0);e.__decorate([g.property({type:["show","hide","hide-children"]})],d.prototype,"listMode",void 0);e.__decorate([g.property({type:["KML"]})],
d.prototype,"operationalLayerType",void 0);e.__decorate([g.property({})],d.prototype,"resourceInfo",void 0);e.__decorate([g.property({type:v.ofType(u),json:{write:{ignoreOrigin:!0}}})],d.prototype,"sublayers",void 0);e.__decorate([r.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],d.prototype,"readSublayersFromItemOrWebMap",null);e.__decorate([r.reader("service","sublayers",["sublayers"])],d.prototype,"readSublayers",null);e.__decorate([B.writer("sublayers")],d.prototype,"writeSublayers",
null);e.__decorate([g.property({readOnly:!0,json:{read:!1}})],d.prototype,"type",void 0);e.__decorate([g.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],d.prototype,"title",null);e.__decorate([g.property(I.url)],d.prototype,"url",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"visibleSublayers",null);e.__decorate([g.property({type:J})],d.prototype,"extent",void 0);e.__decorate([g.property()],d.prototype,"fullExtent",null);return d=e.__decorate([A.subclass("esri.layers.KMLLayer")],
d)});