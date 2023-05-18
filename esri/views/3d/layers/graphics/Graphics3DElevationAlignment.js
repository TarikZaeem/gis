// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Handles ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ./ExtentSet ../../webgl-engine/lib/UpdatePolicy ../../../support/Scheduler".split(" "),function(n,e,c,r,t,m,u,f,
z,A,v,w,x,y){c=function(p){function k(a){a=p.call(this,a)||this;a._dirtyExtents=new w.ExtentSet;a._globalDirty=!1;a._averageExtentUpdateSize=0;a._dirtyGraphicsSet=new Set;a._handles=new t;a._updateElevation=!1;a.graphicsCoreOwner=null;a.graphicsCore=null;a.events=new r;return a}n._inheritsLoose(k,p);var d=k.prototype;d.initialize=function(){const a=this.graphicsCoreOwner.view.resourceController.scheduler;this._handles.add([this.elevationProvider.on("elevation-change",b=>this._elevationChanged(b)),
u.watch(()=>this.graphicsCoreOwner.suspended,()=>this._suspendedChange()),a.registerTask(y.TaskPriority.ELEVATION_ALIGNMENT,this)])};d.destroy=function(){this._dirtyGraphicsSet.clear();this._handles=m.destroyMaybe(this._handles);this.elevationProvider=this.queryGraphicUIDsInExtent=this.graphicsCore=this.graphicsCoreOwner=null};d.clear=function(){this._dirtyGraphicsSet.clear();this.notifyChange("updating")};d._suspendedChange=function(){!0===this.graphicsCoreOwner.suspended?this._updateElevation=!1:
!1===this.graphicsCoreOwner.suspended&&this._updateElevation&&(this._globalDirty=!0,this.notifyChange("updating"))};d.elevationInfoChange=function(){this._globalDirty=!0;this.notifyChange("updating")};d.runTask=function(a){this._globalDirty&&(this._markAllGraphicsElevationDirty(),this._globalDirty=!1,a.madeProgress());for(a.run(()=>this._dirtyExtents.merge(a));this.running&&!a.done;)this._updateDirtyGraphics(a),this._updateDirtyExtents(a);this.notifyChange("updating")};d._updateDirtyGraphics=function(a){const b=
this.graphicsCoreOwner.view.renderCoordsHelper,g=this.graphicsCore.effectiveUpdatePolicy===x.UpdatePolicy.ASYNC;for(const l of this._dirtyGraphicsSet.keys()){const h=this.graphicsCore.getGraphics3DGraphicById(l);this._dirtyGraphicsSet.delete(l);m.isSome(h)&&(h.alignWithElevation(this.elevationProvider,b,g),this.graphicsCoreOwner.view.deconflictor.setDirty(),a.madeProgress());if(a.done)break}};d._updateDirtyExtents=function(a){for(;!this._dirtyExtents.empty&&!a.done;){const b=this._dirtyExtents.pop(),
g=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:b,spatialReference:g});const l=this._dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(b,g,h=>{const q=this.graphicsCore.getGraphics3DGraphicById(h);m.isSome(q)&&q.needsElevationUpdates()&&this._dirtyGraphicsSet.add(h)});this._averageExtentUpdateSize=.1*(this._dirtyGraphicsSet.size-l)+.9*this._averageExtentUpdateSize;a.madeProgress()}};d._markAllGraphicsElevationDirty=function(){this._dirtyExtents.clear();
this._dirtyGraphicsSet.clear();this.graphicsCore.graphics3DGraphics.forEach((a,b)=>this._dirtyGraphicsSet.add(b))};d._elevationChanged=function(a){if("scene"!==a.context||this.graphicsCore.layer.elevationInfo&&"relative-to-scene"===this.graphicsCore.layer.elevationInfo.mode){var {extent:b,spatialReference:g}=a;this.graphicsCoreOwner.suspended?(this._updateElevation||(a=this.graphicsCore.computedExtent)&&b[2]>a.xmin&&b[0]<a.xmax&&b[3]>a.ymin&&b[1]<a.ymax&&(this._updateElevation=!0),this.events.emit("invalidate-elevation",
{extent:b,spatialReference:g})):(-Infinity===b[0]?this._globalDirty=!0:this._dirtyExtents.add(b),this.notifyChange("updating"))}};n._createClass(k,[{key:"updating",get:function(){return this.running}},{key:"running",get:function(){return 0<this._dirtyGraphicsSet.size||this._dirtyExtents&&!this._dirtyExtents.empty||this._globalDirty}},{key:"updatingRemaining",get:function(){return this._dirtyGraphicsSet.size+this._dirtyExtents.size*this._averageExtentUpdateSize}}]);return k}(c);e.__decorate([f.property()],
c.prototype,"graphicsCoreOwner",void 0);e.__decorate([f.property()],c.prototype,"graphicsCore",void 0);e.__decorate([f.property()],c.prototype,"queryGraphicUIDsInExtent",void 0);e.__decorate([f.property()],c.prototype,"elevationProvider",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"updating",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"updatingRemaining",null);return c=e.__decorate([v.subclass("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],c)});