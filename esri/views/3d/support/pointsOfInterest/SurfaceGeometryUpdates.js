// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingRect ../../../support/Scheduler".split(" "),function(b,q,d,u,v,w,g,B,C,x,r,k,p){b.SurfaceGeometryUpdates=
function(t){function m(a){a=t.call(this,a)||this;a._tileGeometryUpdateExtent=k.empty();a._tileGeometryUpdateSpatialReference=null;a.events=new v;a.updating=!1;return a}q._inheritsLoose(m,t);var l=m.prototype;l.initialize=function(){this.addHandles([this.surface.on("elevation-change",a=>this._tileGeometryChanged(a)),this.scheduler.registerTask(p.TaskPriority.SURFACE_GEOMETRY_UPDATES,this)])};l.runTask=function(){if(!this.updating)return p.Task.YIELD;this._tileGeometryUpdateSpatialReference&&this._centerIntersectsExtent(this._tileGeometryUpdateExtent,
this._tileGeometryUpdateSpatialReference)&&this.events.emit("request-update",y);k.empty(this._tileGeometryUpdateExtent);this._set("updating",!1);return p.Task.YIELD};l._tileGeometryChanged=function(a){this._tileGeometryUpdateSpatialReference=w.unwrap(a.spatialReference);k.expand(this._tileGeometryUpdateExtent,a.extent,this._tileGeometryUpdateExtent);this._set("updating",!0)};l._furthestCenterOnSurface=function(){let a=this.centerOnSurfaces[0];for(let h=1;h<this.centerOnSurfaces.length;h++){const n=
this.centerOnSurfaces[h];n.distance>a.distance&&(a=n)}return a};l._centerIntersectsExtent=function(a,h){const n=this.state.contentCamera.eye,c=z,A=this._furthestCenterOnSurface();this.renderCoordsHelper.fromRenderCoords(n,e,h);this.renderCoordsHelper.fromRenderCoords(A.renderLocation,f,h);e[0]<f[0]?(c[0]=e[0],c[2]=f[0]):(c[0]=f[0],c[2]=e[0]);e[1]<f[1]?(c[1]=e[1],c[3]=f[1]):(c[1]=f[1],c[3]=e[1]);return k.intersects(c,a)};q._createClass(m,[{key:"running",get:function(){return this.updating}}]);return m}(u);
d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"state",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"centerOnSurfaces",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"renderCoordsHelper",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"scheduler",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"surface",
void 0);d.__decorate([g.property({readOnly:!0})],b.SurfaceGeometryUpdates.prototype,"updating",void 0);b.SurfaceGeometryUpdates=d.__decorate([x.subclass("esri.views.3d.support.SurfaceGeometryUpdates")],b.SurfaceGeometryUpdates);const y={},e=r.create(),f=r.create(),z=k.empty();Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});