// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Evented ../../../core/Handles ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../../../geometry/projection ../../../geometry/support/spatialReferenceUtils ../../ViewingMode ./EnvironmentRenderer ../support/earthUtils ../support/sunUtils ../webgl-engine/lib/Update ../webgl-engine/lighting/Lightsources ../../../webscene/background/ColorBackground".split(" "),
function(h,t,k,E,F,G,l,y,e,n,Q,R,H,p,u,z,v,A,I,J,B,q,w,x,K){h.SceneViewEnvironmentManager=function(C){function r(){var a=C.call(this)||this;a._referencePointUpdateDelay=200;a._referencePointUpdateInterval=3E3;a._referencePointUpdateDistThreshold=1E6;a._referencePosUpdateQuery=null;a._referencePosMapCoordsRequested=null;a._viewHandles=new G;a._preserveAbsoluteDateTime=!1;a._trackingEnabled=!1;a._referencePosResetPreserveAbsoluteTime=!1;a._referencePosUpdateTimer=null;a._referencePosMapCoords=null;
a._mainLight=new x.MainLight;a._ambientLight=new x.AmbientLight;a._moonLight=new x.FillLight;a.disableQueries=!1;a._disableWeather=!1;a._renderer=null;a._referencePosWGS84Comparable=null;a._resetReferencePosition();return a}t._inheritsLoose(r,C);var f=r.prototype;f.destroy=function(){this.disconnectView();this._viewHandles.destroy()};f.connectView=function(a){if(!this._renderer){this._renderer=new J.EnvironmentRenderer({view:a});var c=()=>this._updateRenderParameters(),b=()=>this._cameraHandler();
this._viewHandles.add([e.watch(()=>a.environment.lighting,d=>this._updateLightingHandler(d),e.sync),e.watch(()=>"virtual"!==a.environment.lighting.type?a.environment.lighting.date:null,d=>this._lightingDateHandler(d),e.sync),e.watch(()=>a.stationary,()=>this._interactingStationaryHandler()),e.watch(()=>a.environment.lighting.directShadowsEnabled,c,e.sync),e.watch(()=>a.environment.lighting.ambientOcclusionEnabled,c,e.sync),e.watch(()=>a.environment.lighting.waterReflectionEnabled,c,e.sync),e.watch(()=>
a.environment.background?.color,c,e.sync),e.watch(()=>a.spatialReference,()=>this._resetReferencePosition(!0),e.sync),e.watch(()=>a.environment.weather.type,()=>this._updateLighting(null,w.Update.Faded),e.sync),e.watch(()=>this.weatherEnabled,()=>this._updateLighting(null,w.Update.Faded),e.sync),e.watch(()=>a.viewingMode,()=>this._resetReferencePosition(!0),e.syncAndInitial),e.watch(()=>"virtual"!==a.environment.lighting.type?a.environment.lighting.cameraTrackingEnabled:!1,d=>this._updateCameraTracking(d),
e.syncAndInitial),e.watch(()=>a.state.camera,b,e.syncAndInitial),e.watch(()=>this.disableQueries,b)]);this._updateRenderParameters();this._updateLighting();this._cameraHandler();this.notifyChange("updating")}};f.disconnectView=function(){this._viewHandles.removeAll();this._resetReferencePosition();this._renderer=l.destroyMaybe(this._renderer)};f._updateLightingHandler=function(a){this._updateCameraTracking("virtual"!==a.type?a.cameraTrackingEnabled:!1);this._lightingDateHandler("virtual"!==a.type?
a.date:null);this._updateRenderParameters()};f._updateCameraTracking=function(a){(this._trackingEnabled=a)?this._cameraHandler():(a=this._view.environment.lighting,"virtual"!==a?.type&&(a.positionTimezoneInfo.autoUpdated=!1))};f._lightingDateHandler=function(a){const c=this._view.environment.lighting;if("virtual"===c?.type)this._updateLighting();else if(a){if(!c.positionTimezoneInfo.autoUpdated){this._preserveAbsoluteDateTime=!0;if(!v.canProjectToWGS84ComparableLonLat(this._view.spatialReference)){var b=
this._view.camera.position;if(!this._referencePosMapCoords||!this._referencePosMapCoords.equals(b)){this._requestReferencePositionUpdate(b);return}}this._preupdateTracking(a);l.isSome(this._referencePosWGS84Comparable)&&(b=B.positionToTimezoneInfo(this._referencePosWGS84Comparable,D),l.isSome(b)&&(c.autoUpdate(null,b),this._trackingEnabled&&(c.positionTimezoneInfo.autoUpdated=!0)))}this._updateLighting(a)}};f._preupdateTracking=function(a){!this._trackingEnabled&&"virtual"!==this._view.environment.lighting.type&&
this._view.environment.lighting.cameraTrackingEnabled&&this._cameraHandler(a)};f._cameraHandler=function(a=null){var c=this._view;c.ready&&(c=c.stateManager.camera)&&(this._cameraHandlerClientSide(c,a)||this._cameraHandlerServerSide(c))};f._cameraHandlerClientSide=function(a,c){const b=A.isEarth(this._view.spatialReference);if(b&&!v.canProjectToWGS84ComparableLonLat(this._view.spatialReference))return"virtual"===this._view.environment.lighting.type&&this._updateLighting(),!1;a=a.position;l.isNone(this._referencePosWGS84Comparable)&&
(this._referencePosWGS84Comparable=u.create());b?v.projectPointToWGS84ComparableLonLat(a,this._referencePosWGS84Comparable):p.set(this._referencePosWGS84Comparable,a.longitude??0,a.latitude??0,a.z??0);this.notifyChange("referencePositionWGS84Comparable");this._autoUpdateTimezone(this._referencePosWGS84Comparable,c)||this._updateLighting(c);return!0};f._cameraHandlerServerSide=function(a){a=a.position;(!this._referencePosMapCoords||this._referencePosMapCoordsRequested||this._exceedsReferencePosDistThreshold(a))&&
this._requestReferencePositionUpdate(a,!0);this._view.mapCoordsHelper&&this._referencePosWGS84Comparable&&(this._referencePosWGS84Comparable[2]=(a.z??0)*this._view.mapCoordsHelper.unitInMeters,this._referencePosChanged())};f._interactingStationaryHandler=function(){this._view.stationary&&this._executePendingReferencePositionUpdate()};f._updateLighting=function(a,c=w.Update.Immediate){var b=this._view;a=a||("virtual"===b.environment.lighting.type?null:b.environment.lighting.date);var d=this._referencePosWGS84Comparable;
const g=l.isSome(d)?L:M;var m=this.weatherVisible?b.environment.weather.type:"disabled";l.isSome(d)?q.computeColorAndIntensity(a,d,b.state.viewingMode,m,b.state.camera,g):"virtual"===b.environment.lighting.type&&q.computeVirtualLightDirection(b.state.camera,b.state.viewingMode,g.direct.directionToLightSource);a=this._mainLight;b=g.direct;p.scale(a.intensity,b.color,b.intensity*Math.PI);p.copy(a.direction,b.directionToLightSource);a.specularStrength=g.specularStrength;a.environmentStrength=g.environmentStrength;
d=this._ambientLight;p.scale(d.intensity,g.ambient.color,g.ambient.intensity);m=this._moonLight;p.lerp(m.intensity,N,O,g.globalFactor);p.scale(m.intensity,m.intensity,(1-.5*g.globalFactor)*(1-.4*g.noonFactor*(1-g.globalFactor)));p.copy(m.direction,b.directionToLightSource);this._renderer.updateLightSources([a,d,m],g.noonFactor,g.globalFactor,c);this._updateRenderParameters()};f._autoUpdateTimezone=function(a,c=null){if("virtual"===this._view.environment.lighting.type||!this._view.environment.lighting.cameraTrackingEnabled||
l.isNone(a))return!1;const b=P;b.setTime((c||this._view.environment.lighting.date).getTime());a=B.positionToTimezoneInfo(a,D);if(l.isNone(a))return!1;var d=this._view.environment.lighting.positionTimezoneInfo;if(!d.autoUpdated)d=a;else if(d.hours===a.hours&&d.minutes===a.minutes&&d.seconds===a.seconds)return!1;const g=b.getUTCHours()-(a.hours-d.hours),m=b.getUTCMinutes()-(a.minutes-d.minutes);d=b.getUTCSeconds()-(a.seconds-d.seconds);b.setUTCHours(g);b.setUTCMinutes(m);b.setUTCSeconds(d);return c?
!1:this._view.environment.lighting.autoUpdate(b,a)};f._updateRenderParameters=function(){const a=this._view._stage;if(a){var c=l.mapOr(this._referencePosWGS84Comparable,!0,d=>q.computeShadowsEnabled(d[2],this._view.state.viewingMode)),b=this._view.environment.background;b=b instanceof K?{type:"color",color:z.fromArray(E.toUnitRGBA(b.color))}:{type:"color",color:z.fromValues(0,0,0,1)};a.renderer.setParameters({shadowMap:this._view.environment.lighting.directShadowsEnabled&&c,background:b,environment:this._view.environment,
weatherVisible:this._view.environmentManager.weatherVisible})}};f._resetReferencePosition=function(a=!1){this._cancelReferencePosUpdates();this._referencePosWGS84Comparable=this._referencePosResetPreserveAbsoluteTime=this._referencePosMapCoordsRequested=this._referencePosMapCoords=null;this.notifyChange("updating");a&&this._cameraHandler()};f._requestReferencePositionUpdate=function(a,c=!1){if(!this.disableQueries&&(this._referencePosMapCoordsRequested?this._referencePosMapCoordsRequested.copy(a):
this._referencePosMapCoordsRequested=a.clone(),this._referencePosResetPreserveAbsoluteTime=!!c,!this._referencePosUpdateQuery&&!this._referencePosUpdateTimer&&this._view.stationary)){const b=this._referencePosUpdateQuery=y.after(this._referencePointUpdateDelay).then(()=>{if(this._referencePosUpdateQuery===b)return this._doReferencePositionUpdateQuery(()=>this._referencePosUpdateQuery!==b)}).catch(g=>{"mapcoordshelper:missing-geometry-service"===g.name&&(this.disableQueries=!0)}).then(()=>{this._referencePosUpdateQuery===
b&&(this._referencePosUpdateQuery=null,this._referencePosUpdateTimer||this._executePendingReferencePositionUpdate(),this.notifyChange("updating"))}),d=this._referencePosUpdateTimer=y.after(this._referencePointUpdateInterval).then(()=>{this._referencePosUpdateTimer===d&&(this._referencePosUpdateTimer=null,this._referencePosUpdateQuery||this._executePendingReferencePositionUpdate())});this.notifyChange("updating")}};f._doReferencePositionUpdateQuery=function(){var a=t._asyncToGenerator(function*(c){this._referencePosResetPreserveAbsoluteTime&&
(this._preserveAbsoluteDateTime=!1);this._referencePosMapCoords?this._referencePosMapCoords.copy(this._referencePosMapCoordsRequested):this._referencePosMapCoords=this._referencePosMapCoordsRequested.clone();this._referencePosMapCoordsRequested=this._referencePosResetPreserveAbsoluteTime=null;const b=yield this._view.mapCoordsHelper.toGeographic(this._referencePosMapCoords);c()||isNaN(b[0])||isNaN(b[1])||(c=(this._referencePosMapCoords.z??0)*this._view.mapCoordsHelper.unitInMeters,this._referencePosWGS84Comparable?
(this._referencePosWGS84Comparable[0]=b[0],this._referencePosWGS84Comparable[1]=b[1],this._referencePosWGS84Comparable[2]=c):this._referencePosWGS84Comparable=[b[0],b[1],c],this._referencePosChanged())});return function(c){return a.apply(this,arguments)}}();f._executePendingReferencePositionUpdate=function(){const a=this._referencePosMapCoordsRequested;a&&this._requestReferencePositionUpdate(a,this._referencePosResetPreserveAbsoluteTime)};f._referencePosChanged=function(){this._preserveAbsoluteDateTime?
this._updateLighting():this._autoUpdateTimezone(this._referencePosWGS84Comparable)||this._updateLighting();this.notifyChange("referencePositionWGS84Comparable")};f._exceedsReferencePosDistThreshold=function(a){return this._referencePosMapCoords?(a=this._referencePosMapCoords.distance(a),this._view.mapCoordsHelper&&(a*=this._view.mapCoordsHelper.unitInMeters),a>this._referencePointUpdateDistThreshold):!0};f._cancelReferencePosUpdates=function(){const a=!!this._referencePosUpdateQuery;this._referencePosUpdateTimer=
this._referencePosUpdateQuery=null;return a};t._createClass(r,[{key:"_view",get:function(){return this._renderer?.view}},{key:"updating",get:function(){return!((this.disableQueries||!this._referencePosUpdateQuery&&!this._referencePosMapCoordsRequested)&&!this._renderer?.updating)}},{key:"weatherEnabled",get:function(){return this._view?.environment.atmosphereEnabled&&!this._disableWeather&&this._view?.state?.viewingMode===I.ViewingMode.Global&&A.isEarth(this._view.spatialReference)}},{key:"weatherVisible",
get:function(){return this.weatherEnabled&&this._renderer?.weatherVisible}},{key:"referencePositionWGS84Comparable",get:function(){return this._referencePosWGS84Comparable}},{key:"test",get:function(){const a=this;return{get renderer(){return a._renderer},set referencePointUpdateInterval(c){a._referencePointUpdateInterval=c},set referencePointUpdateDistThreshold(c){a._referencePointUpdateDistThreshold=c},set referencePosUpdateTimer(c){a._referencePosUpdateTimer=c},set referencePointUpdateDelay(c){a._referencePointUpdateDelay=
c},set disableWeather(c){a._disableWeather=c}}}}]);return r}(F.EventedAccessor);k.__decorate([n.property({type:Boolean,readOnly:!0})],h.SceneViewEnvironmentManager.prototype,"updating",null);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"disableQueries",void 0);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"_disableWeather",void 0);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"weatherEnabled",null);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,
"weatherVisible",null);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"referencePositionWGS84Comparable",null);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"_renderer",void 0);k.__decorate([n.property()],h.SceneViewEnvironmentManager.prototype,"_referencePosWGS84Comparable",void 0);h.SceneViewEnvironmentManager=k.__decorate([H.subclass("esri.views.3d.environment.SceneViewEnvironmentManager")],h.SceneViewEnvironmentManager);const L=new q.ColorAndIntensity,
M=new q.ColorAndIntensity,P=new Date,D={hours:0,minutes:0,seconds:0},N=u.fromValues(.22,.22,.33),O=u.fromValues(.22,.22,.22);Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});