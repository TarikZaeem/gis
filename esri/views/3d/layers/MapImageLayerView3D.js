// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ./DynamicLayerView3D ../../layers/MapImageLayerView ../../layers/support/MapServiceLayerViewHelper ../../support/drapedUtils".split(" "),function(g,h,c,q,r,t,u,k,l,m,n,p){c=function(f){function d(){var a=f.apply(this,arguments)||this;a.type="map-image-3d";
return a}g._inheritsLoose(d,f);var b=d.prototype;b.initialize=function(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()));this._popupHighlightHelper=new n.MapServiceLayerViewHelper({createFetchPopupFeaturesQueryGeometry:(a,e)=>p.createQueryGeometry(a,e,this.view),layerView:this,updatingHandles:this.updatingHandles})};b.destroy=function(){this._popupHighlightHelper?.destroy()};b.fetchPopupFeatures=function(a,e){return this._popupHighlightHelper.fetchPopupFeatures(a,
e)};b.getFetchOptions=function(){return{timeExtent:this.timeExtent}};return d}(m(l));return c=h.__decorate([k.subclass("esri.views.3d.layers.MapImageLayerView3D")],c)});