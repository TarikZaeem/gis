// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Identifiable ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../layers/interfaces ../../webgl-engine/lib/ModelDirtyTypes ../../webgl-engine/lib/UpdatePolicy".split(" "),function(l,m,f,r,t,c,h,n,w,u,k,p,v){n=function(){function e(a){this._resourceFactory=
a;this._resources=null;this._visible=!0;this._attached=!1;this._renderGroup=k.DrapedRenderGroup.Outline}var b=e.prototype;b.destroy=function(){this._destroyResources()};b.recreate=function(){this.attached&&this._createResources()};b.recreateGeometry=function(){this._resourceFactory.recreateGeometry?c.isNone(this._resources)||(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()};b._createOrDestroyResources=
function(){this._attached?c.isNone(this._resources)&&this._createResources():this._destroyResources()};b._createResources=function(){this._destroyResources();const a=this._resourceFactory.createResources(),g=new d({view:this._resourceFactory.view,renderGroup:this._renderGroup}),q=this._resourceFactory.view.basemapTerrain?.overlayManager;this._resources={layerView:new d({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:a,geometriesAdded:!1};q&&(this._resources.drapeSourceRenderer=
q.registerGeometryDrapeSource(g));this._syncGeometriesToRenderer()};b._destroyResources=function(){if(!c.isNone(this._resources)){this._ensureRenderGeometriesRemoved();var a=this._resourceFactory.view.basemapTerrain?.overlayManager;a&&a.unregisterDrapeSource(this._resources.layerView);this._resourceFactory.destroyResources(this._resources.external);this._resources=null}};b._syncGeometriesToRenderer=function(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()};
b._ensureRenderGeometriesRemoved=function(){c.isNone(this._resources)||c.isNone(this._resources.drapeSourceRenderer)||!this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,p.DirtyOperation.UPDATE),this._resources.geometriesAdded=!1)};b._ensureRenderGeometriesAdded=function(){c.isNone(this._resources)||c.isNone(this._resources.drapeSourceRenderer)||this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,
p.DirtyOperation.UPDATE),this._resources.geometriesAdded=!0)};m._createClass(e,[{key:"resources",get:function(){return c.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this._syncGeometriesToRenderer())}},{key:"attached",get:function(){return this._attached},set:function(a){a!==this._attached&&(this._attached=a,this._createOrDestroyResources())}},{key:"renderGroup",get:function(){return this._renderGroup},
set:function(a){this._renderGroup=a;const g=c.toNullable(this._resources)?.layerView;g&&(g.renderGroup=a)}}]);return e}();let d=function(e){function b(a){a=e.call(this,a)||this;a.drapeSourceType=k.DrapeSourceType.Features;a.updatePolicy=v.UpdatePolicy.SYNC;a.renderGroup=k.DrapedRenderGroup.Outline;return a}m._inheritsLoose(b,e);return b}(t.IdentifiableMixin(r));f.__decorate([h.property({constructOnly:!0})],d.prototype,"view",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"drapeSourceType",
void 0);f.__decorate([h.property()],d.prototype,"renderGroup",void 0);d=f.__decorate([u.subclass("DrapedVisualElementLayerView")],d);l.DrapedVisualElementResources=n;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});