// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Logger ../../../core/maybe ../../../core/MemCache ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../layers/support/MemoryManagedLayerView".split(" "),function(p,q,c,u,v,r,t,d,y,z,w,x){let b=function(l){function m(a){a=l.call(this,a)||this;a._quality=1;a._memoryUsed=
0;a._updating=!1;a.minQuality=.1;a._stableQuality=0;a._downscaleMemoryUsed=0;a._canFastRecover=!1;a._memoryPredicted=0;a._cacheStorage=new t.MemCacheStorage;a._warnMemoryUsage=null;a._numQualityChanges=0;a._maxMemory=500;a._additionalCacheMemory=100;return a}q._inheritsLoose(m,l);var e=m.prototype;e.destroy=function(){this._cacheStorage.destroy()};e.newCache=function(a,g){return new t.MemCache(a,this._cacheStorage,g)};e.resetStableQuality=function(){this._stableQuality=0};e.disableMemCache=function(){this.additionalCacheMemory=
-4096};e.update=function(){this._updateMemory();if(!(0>=this._memoryPredicted)||this._updating){var a=this._layersUpdating();if(.6>this._memoryPredicted&&this._canFastRecover)this._stableQuality=this._downscaleMemoryUsed=0,this._canFastRecover=!1,this._updateQuality(1);else if(a){if(1.1<this._memoryPredicted||1<this._memoryUsed)0<this._stableQuality?(this._downscaleMemoryUsed=0,this._updateQuality(this._stableQuality)):this._quality>this.minQuality&&this._downscaleMemoryUsed<this._memoryUsed&&(this._updateQuality(this._quality/
1.3),this._downscaleMemoryUsed=this._memoryUsed,this._canFastRecover=!1)}else this._downscaleMemoryUsed=0,1<this._memoryUsed?(this._stableQuality=0,this._canFastRecover=!1,a=this._updateQuality(this._quality/1.3),this._downscaleMemoryUsed=this._memoryPredicted):this._stableQuality!==this._quality&&(.75>this._memoryUsed&&1>this._quality?(this._stableQuality=this._quality,a=this._updateQuality(this._quality+.05)):1>this._quality&&(this._canFastRecover=!0));this._updating=a}};e._updateQuality=function(a){a=
Math.min(Math.max(a,this.minQuality),1);if(a===this._quality)return!1;this._quality=a;++this._numQualityChanges;return!0};e._layersUpdating=function(){return this.view.allLayerViews.some(a=>!!a.updating)};e._updateMemory=function(){let a=0,g=0;this.view.basemapTerrain&&this.view.basemapTerrain.getUsedMemory&&(a+=this.view.basemapTerrain.getUsedMemory());var f=this.view._stage&&this.view._stage.renderView&&this.view._stage.renderer.edgeView;r.isSome(f)&&(a+=f.usedMemory);this.view.allLayerViews&&this.view.allLayerViews.forEach(h=>
{if(x.isMemoryManagedLayerView(h)){const n=h.ignoresMemoryFactor()?this._quality:1;a+=h.getUsedMemory()*n;g+=h.getUnloadedMemory()*n}});var k=r.isNone(this._warnMemoryUsage)||Math.round(10*a)!==Math.round(10*this._warnMemoryUsage);f=1048576*this.maxMemory;if(a>f&&k){this._warnMemoryUsage=a;k=n=>(n/1048576).toLocaleString(void 0,{maximumFractionDigits:1})+" MB";const h=Math.round(100*this._quality);v.getLogger(this.declaredClass).warn(`Memory Limit exceeded! Limit: ${k(f)} Current: ${k(a)} Projected: ${k(a+
g)} Quality: ${h}%`)}this._memoryUsed=a/f;this._memoryPredicted=(a+g)/f;this._cacheStorage.maxSize=Math.max(0,f-a+1048576*this.additionalCacheMemory)};q._createClass(m,[{key:"maxMemory",get:function(){return this._maxMemory},set:function(a){null==a||0>=a||(this._stableQuality=0,this._canFastRecover=!1,this._maxMemory<a&&this._updateQuality(1),this._maxMemory=a)}},{key:"additionalCacheMemory",get:function(){return this._additionalCacheMemory},set:function(a){null!=a&&0<=a&&(this._additionalCacheMemory=
a)}},{key:"memoryFactor",get:function(){return this._quality}},{key:"updating",get:function(){return this._updating}},{key:"usedMemory",get:function(){return this._memoryUsed}},{key:"test",get:function(){const a=this;return{cacheStorage:this._cacheStorage,resetQualityChanges:()=>{const g=a._numQualityChanges;a._numQualityChanges=0;return g}}}}]);return m}(u);c.__decorate([d.property({constructOnly:!0})],b.prototype,"view",void 0);c.__decorate([d.property()],b.prototype,"maxMemory",null);c.__decorate([d.property()],
b.prototype,"additionalCacheMemory",null);c.__decorate([d.property()],b.prototype,"memoryFactor",null);c.__decorate([d.property()],b.prototype,"updating",null);c.__decorate([d.property()],b.prototype,"usedMemory",null);c.__decorate([d.property()],b.prototype,"_quality",void 0);c.__decorate([d.property()],b.prototype,"_memoryUsed",void 0);c.__decorate([d.property()],b.prototype,"_updating",void 0);c.__decorate([d.property()],b.prototype,"_stableQuality",void 0);c.__decorate([d.property()],b.prototype,
"_maxMemory",void 0);c.__decorate([d.property()],b.prototype,"_additionalCacheMemory",void 0);b=c.__decorate([w.subclass("esri.views.3d.support.MemoryController")],b);p.newMemoryController=function(l){return new b({view:l})};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});