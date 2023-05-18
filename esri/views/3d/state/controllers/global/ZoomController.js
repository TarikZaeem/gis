// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/Error ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/ellipsoidUtils ../../../../../geometry/support/axisAngle ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/surfaceCollision ../../../camera/constraintUtils/TiltMode ../InteractiveController ../../utils/navigationUtils ../../../support/geometryUtils/ray".split(" "),
function(h,p,y,z,m,A,K,L,M,N,O,B,q,r,c,g,C,t,D,u,E,F,G,H,I,d,J){h.ZoomController=function(v){function k(){var a=v.apply(this,arguments)||this;a._pickPoint=g.create();a._tmpP0=r.create();a._panAxisAngle=t.create();a._tmpRayDir=g.create();a._tmpRayDirPick=g.create();a._targetOnSphere=g.create();a._navMode=d.NavigationMode.Horizontal;a._tmpRay={origin:g.create(),direction:g.create()};a.dragBeginPoint=A.createScreenPointArray();a._normalizedAnchorPoint=r.create();a._constraintOptions={selection:E.ConstraintTypes.ALL_EXCEPT_COLLISION,
interactionType:F.InteractionType.ZOOM,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:H.TiltMode.TUMBLE};a._sphere=D.create();a._hasPickPoint=!1;return a}p._inheritsLoose(k,v);var n=k.prototype;n.begin=function(a){if(this.active){q.copy(this.dragBeginPoint,a);d.normalizeCoordinate(this.startCamera,a,this._normalizedAnchorPoint);var b=C.getReferenceEllipsoid(this.view.spatialReference),f=d.pickPointAndInitSphere(this._intersectionHelper,this.startCamera,a,b,d.SpherePickPointFallback.Ellipsoid,
0===this.view.map.ground.opacity?d.contentIntersectorOptions:{});this._navMode=d.decideNavigationMode(this.startCamera,a,b);if(this._navMode===d.NavigationMode.Horizontal)this._hasPickPoint=!!f.scenePickPoint,this._pickPoint=m.unwrapOr(f.scenePickPoint,this._pickPoint),this._sphere=f.sphere;else{J.fromScreenAtEye(this.startCamera,a,this._tmpRay);c.normalize(this._tmpRay.direction,this._tmpRay.direction);let e;m.isSome(f.scenePickPoint)&&(c.subtract(this._tmpRayDirPick,this.startCamera.eye,f.scenePickPoint),
e=c.length(this._tmpRayDirPick));b=Math.abs(this.view.camera.position.z);this.view.renderCoordsHelper.worldUpAtPosition(this.startCamera.eye,w);b=z.clamp(Math.min(d.PIVOT_DISTANCE_MODIFIER,1/Math.abs(c.dot(w,this._tmpRay.direction)))*b,d.DISTANCE_CLAMP_VALUES[0],d.DISTANCE_CLAMP_VALUES[1]);a=this.view._stage.renderView.getMinimalDepthForArea(null,a[0],a[1],this.view.state.camera,d.SCREEN_PIXEL_AREA);b=m.isSome(a)?a:b;b=null!=e?Math.min(b,e):b;this._hasPickPoint=!0;c.scale(this._tmpRay.direction,this._tmpRay.direction,
b);c.add(this._pickPoint,this._tmpRay.origin,this._tmpRay.direction)}this._constraintOptions.interactionStartCamera=this.startCamera}};n.update=function(a){if(this.active){this.currentCamera.eye=this.startCamera.eye;this.currentCamera.center=this.startCamera.center;this.currentCamera.up=this.startCamera.up;if(this._navMode===d.NavigationMode.Horizontal){c.subtract(this._tmpRayDir,this.currentCamera.center,this.currentCamera.eye);var b=c.length(this._tmpRayDir);d.normalizeCoordinate(this.currentCamera,
a,this._tmpP0);var f=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]),e=b*2**f;const x=this.view.state.constraints.minimumPoiDistance;0>f&&e<x&&(e=x);if(1E-6>Math.abs(b-e))return;this._hasPickPoint&&e<b&&(f=1-(1-e/b)*(1-this._sphere[3]/c.length(this.currentCamera.center)),this.currentCamera.center=c.scale(l,this.currentCamera.center,f));c.scale(this._tmpRayDir,this._tmpRayDir,-e/b);this.currentCamera.eye=c.add(l,this.currentCamera.center,this._tmpRayDir);this._constraintOptions.interactionFactor=
u.pixelDistanceToInteractionFactor(q.distance(this.dragBeginPoint,a));u.applyAll(this.view,this.currentCamera,this._constraintOptions);this._hasPickPoint&&(d.sphereOrPlanePointFromScreenPoint(this._sphere,this.currentCamera,this.dragBeginPoint,this._targetOnSphere),t.fromPoints(this._pickPoint,this._targetOnSphere,this._panAxisAngle),d.applyRotation(this.currentCamera,this._sphere,this._panAxisAngle))}else{b=c.length(this._tmpRay.direction);d.normalizeCoordinate(this.currentCamera,a,this._tmpP0);
a=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]);e=b*2**a;f=this.view.state.constraints.minimumPoiDistance;0>a&&e<f&&(e=f);if(1E-6>Math.abs(b-e))return;c.scale(this._tmpRayDir,this._tmpRay.direction,1-e/b);this.currentCamera.eye=c.add(l,this.currentCamera.eye,this._tmpRayDir);this.currentCamera.center=c.add(l,this.currentCamera.center,this._tmpRayDir)}G.applySurfaceCollisionConstraint(this.view,this.currentCamera);this.commitCamera()}};n.end=function(){this.active&&this.finishController()};p._createClass(k,
[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]);return k}(I.InteractiveController);h.ZoomController=y.__decorate([B.subclass("esri.views.3d.state.controllers.global.ZoomController")],h.ZoomController);const l=g.create(),w=g.create();Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});