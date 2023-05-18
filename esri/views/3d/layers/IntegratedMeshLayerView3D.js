// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./I3SMeshView3D ./interfaces ./LayerView3D ../support/updatingProperties ../../layers/LayerView".split(" "),function(h,c,l,m,k,d,b,v,n,p,q,r,t,u){b=function(g){function f(){var a=g.apply(this,arguments)||
this;a.type="integrated-mesh-3d";a._elevationContext="im";a._isIntegratedMesh=!0;a._supportsLabeling=!1;a.drapeTargetType=q.DrapeTargetType.WithoutRasterImage;return a}h._inheritsLoose(f,g);var e=f.prototype;e.initialize=function(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),k.initial);this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)};e.destroy=function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)};e._createLayerGraphic=
function(){const a=new l;a.layer=this.layer;a.sourceLayer=this.layer;return a};e.canResume=function(){return g.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};e._loadModifications=function(){this.handles.remove("modifications");if(m.isNone(this.layer.modifications))this._modifications=[];else{var a=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>a,()=>this._modifications=a.toArray(),k.initial),"modifications")}};h._createClass(f,
[{key:"i3slayer",get:function(){return this.layer}},{key:"updatingProgressValue",get:function(){return this._controller?.updatingProgress??0}},{key:"lodFactor",get:function(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}},{key:"progressiveLoadFactor",get:function(){return 1<=this.lodFactor?.2:1}},{key:"layerPopupEnabled",get:function(){return!1}}]);return f}(p.I3SMeshView3D(r.LayerView3D(u)));c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],
b.prototype,"i3slayer",null);c.__decorate([d.property(t.updatingProgress)],b.prototype,"updatingProgress",void 0);c.__decorate([d.property()],b.prototype,"updatingProgressValue",null);c.__decorate([d.property()],b.prototype,"lodFactor",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"progressiveLoadFactor",null);return b=c.__decorate([n.subclass("esri.views.3d.layers.SceneLayerView3D")],b)});