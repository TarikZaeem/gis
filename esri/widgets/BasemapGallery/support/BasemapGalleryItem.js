// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/HandleOwner ../../../core/Identifiable ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../support/basemapUtils".split(" "),function(k,c,b,n,p,q,e,d,u,v,r,t){b=function(l){function g(a){a=l.call(this,a)||this;a.compatibilityFunction=
null;a.error=null;a.state="loading";a.view=null;return a}k._inheritsLoose(g,l);var h=g.prototype;h.initialize=function(){const a=()=>this.refresh();this.handles.add([e.watch(()=>this.basemap?.loadStatus,a),e.watch(()=>this.compatibilityFunction,a),e.watch(()=>this.view&&"basemapTerrain"in this.view&&this.view.basemapTerrain?.tilingScheme,a),e.watch(()=>this.view?.ready,a),e.watch(()=>this.view?.spatialReference,a)]);this.refresh()};h.destroy=function(){this._cancelRefresh();this.view=this.compatibilityFunction=
this.basemap=null};h.refresh=function(){this._cancelRefresh();this._set("state","loading");var a=this.basemap?.loadStatus;if("loaded"===a||"failed"===a)if(this.compatibilityFunction){a=new AbortController;var {signal:f}=a;this.compatibilityFunction(this,{signal:f}).then(()=>e.whenOnce(()=>!this._spatialReferenceTask.updating,f)).then(()=>{this._set("state","ready");this._set("error",null)}).catch(m=>{q.isAbortError(m)||(this._set("state","error"),this._set("error",m))});this._refreshController=a}else"loaded"===
a?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError))};h._cancelRefresh=function(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)};k._createClass(g,[{key:"_spatialReferenceTask",get:function(){return t.findSpatialReference(this.view,this.basemap)}},{key:"basemap",set:function(a){const f=this._get("basemap");f&&f.cancelLoad();a&&a.load().catch(()=>{});this._set("basemap",a)}},{key:"spatialReference",
get:function(){return this._spatialReferenceTask.spatialReference}}]);return g}(p.IdentifiableMixin(n.HandleOwnerMixin(b)));c.__decorate([d.property({readOnly:!0})],b.prototype,"_spatialReferenceTask",null);c.__decorate([d.property()],b.prototype,"basemap",null);c.__decorate([d.property()],b.prototype,"compatibilityFunction",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"error",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"spatialReference",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"state",void 0);c.__decorate([d.property()],b.prototype,"view",void 0);return b=c.__decorate([r.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],b)});