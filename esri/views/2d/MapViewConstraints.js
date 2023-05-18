// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../layers/support/LOD ./constraints/GeometryConstraint ./constraints/RotationConstraint ./constraints/ZoomConstraint ../../geometry/Extent ../../geometry/Polygon".split(" "),function(h,c,k,b,d,A,B,w,x,l,m,n,y,z){k={base:null,key:"type",typeMap:{extent:y,
polygon:z}};b=function(p){function g(a){a=p.call(this,a)||this;a.lods=null;a.minScale=0;a.maxScale=0;a.minZoom=-1;a.maxZoom=-1;a.rotationEnabled=!0;a.snapToZoom=!0;return a}h._inheritsLoose(g,p);var f=g.prototype;f.destroy=function(){this.view=null};f.canZoomInTo=function(a){const e=this.effectiveMaxScale;return 0===e||a>=e};f.canZoomOutTo=function(a){const e=this.effectiveMinScale;return 0===e||a<=e};f.constrain=function(a,e){this._zoom.constrain(a,e);this._rotation.constrain(a,e);this._geometry.constrain(a,
e);return a};f.constrainByGeometry=function(a){return this._geometry.constrain(a)};f.fit=function(a){return this._zoom.fit(a)};f.zoomToScale=function(a){return this._zoom.zoomToScale(a)};f.scaleToZoom=function(a){return this._zoom.scaleToZoom(a)};f.snapScale=function(a){return this._zoom.snapToClosestScale(a)};f.snapToNextScale=function(a){return this._zoom.snapToNextScale(a)};f.snapToPreviousScale=function(a){return this._zoom.snapToPreviousScale(a)};h._createClass(g,[{key:"effectiveLODs",get:function(){return this._zoom.effectiveLODs}},
{key:"effectiveMinScale",get:function(){return this._zoom.effectiveMinScale}},{key:"effectiveMaxScale",get:function(){return this._zoom.effectiveMaxScale}},{key:"effectiveMinZoom",get:function(){return this._zoom.effectiveMinZoom}},{key:"effectiveMaxZoom",get:function(){return this._zoom.effectiveMaxZoom}},{key:"geometry",set:function(a){a?this._set("geometry",a):this._set("geometry",null)}},{key:"version",get:function(){return`${this._zoom?.uid}/${this._rotation?.uid}/${this._geometry?.uid}`}},{key:"_defaultLODs",
get:function(){const a=this.view?.defaultsFromMap?.tileInfo,e=this.view?.spatialReference;return a&&e&&a.spatialReference.equals(e)?a.lods:null}},{key:"_geometry",get:function(){return new l.GeometryConstraint({geometry:this.geometry,spatialReference:this.view?.spatialReference})}},{key:"_rotation",get:function(){return new m({rotationEnabled:this.rotationEnabled})}},{key:"_zoom",get:function(){const a=this._get("_zoom"),e=this.lods||this._defaultLODs,q=this.minZoom,r=this.maxZoom,t=this.minScale,
u=this.maxScale,v=this.snapToZoom;return a&&a.lods===e&&a.minZoom===q&&a.maxZoom===r&&a.minScale===t&&a.maxScale===u&&a.snapToZoom===v?a:new n({lods:e,minZoom:q,maxZoom:r,minScale:t,maxScale:u,snapToZoom:v})}}]);return g}(b);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveLODs",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMinScale",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMaxScale",null);c.__decorate([d.property({readOnly:!0})],b.prototype,
"effectiveMinZoom",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMaxZoom",null);c.__decorate([d.property({types:k,value:null})],b.prototype,"geometry",null);c.__decorate([d.property({type:[x]})],b.prototype,"lods",void 0);c.__decorate([d.property()],b.prototype,"minScale",void 0);c.__decorate([d.property()],b.prototype,"maxScale",void 0);c.__decorate([d.property()],b.prototype,"minZoom",void 0);c.__decorate([d.property()],b.prototype,"maxZoom",void 0);c.__decorate([d.property()],
b.prototype,"rotationEnabled",void 0);c.__decorate([d.property()],b.prototype,"snapToZoom",void 0);c.__decorate([d.property()],b.prototype,"view",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"version",null);c.__decorate([d.property()],b.prototype,"_defaultLODs",null);c.__decorate([d.property({type:l.GeometryConstraint})],b.prototype,"_geometry",null);c.__decorate([d.property({type:m})],b.prototype,"_rotation",null);c.__decorate([d.property({readOnly:!0,type:n})],b.prototype,"_zoom",
null);return b=c.__decorate([w.subclass("esri.views.2d.MapViewConstraints")],b)});