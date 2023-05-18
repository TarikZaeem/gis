// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../viewpointUtils ../../../navigation/RotationMomentumEstimator ../../../navigation/ZoomMomentumEstimator ../../../../geometry/Point".split(" "),
function(x,n,h,y,z,A,q,F,G,B,t,u,v,C,D,E){h=function(w){function r(b){var a=w.call(this,b)||this;a._animationTime=0;a._momentumFinished=!1;a._previousAngle=0;a._previousRadius=0;a._previousCenter=null;a._rotationMomentumEstimator=new C.RotationMomentumEstimator(.6,.15,.95);a._rotationDirection=1;a._startAngle=0;a._startRadius=0;a._updateTimestamp=null;a._zoomDirection=1;a._zoomMomentumEstimator=new D.ZoomMomentumEstimator;a._zoomOnly=null;a.zoomMomentum=null;a.rotateMomentum=null;a.viewpoint=new y({targetGeometry:new E,
scale:0,rotation:0});a.addHandles(A.when(()=>a._momentumFinished,()=>a.navigation.stop()));return a}x._inheritsLoose(r,w);var d=r.prototype;d.begin=function(b,a){this.navigation.begin();this._rotationMomentumEstimator.reset();this._zoomMomentumEstimator.reset();this._zoomOnly=null;this._previousAngle=this._startAngle=a.angle;this._previousRadius=this._startRadius=a.radius;this._previousCenter=a.center;this._updateTimestamp=null;b.constraints.rotationEnabled&&this.addToRotateEstimator(0,a.timestamp);
this.addToZoomEstimator(a,1)};d.update=function(b,a){null===this._updateTimestamp&&(this._updateTimestamp=a.timestamp);const e=a.angle,c=a.radius,f=a.center,g=Math.abs(180*(e-this._startAngle)/Math.PI),k=Math.abs(c-this._startRadius),l=this._startRadius/c;if(this._previousRadius&&this._previousCenter){const m=c/this._previousRadius;let p=180*(e-this._previousAngle)/Math.PI;this._rotationDirection=0<=p?1:-1;this._zoomDirection=1<=m?1:-1;b.constraints.rotationEnabled?(null===this._zoomOnly&&200<a.timestamp-
this._updateTimestamp&&(this._zoomOnly=0<k-g),null===this._zoomOnly||this._zoomOnly?p=0:this.addToRotateEstimator(e-this._startAngle,a.timestamp)):p=0;this.addToZoomEstimator(a,l);this.navigation.setViewpoint([f.x,f.y],1/m,p,[this._previousCenter.x-f.x,f.y-this._previousCenter.y])}this._previousAngle=e;this._previousRadius=c;this._previousCenter=f};d.end=function(b){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum();this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum();
this._animationTime=0;if(this.rotateMomentum||this.zoomMomentum)this.onAnimationUpdate(b);this.navigation.end()};d.addToRotateEstimator=function(b,a){this._rotationMomentumEstimator.add(b,.001*a)};d.addToZoomEstimator=function(b,a){this._zoomMomentumEstimator.add(a,.001*b.timestamp)};d.canZoomIn=function(b){const a=b.scale;b=b.constraints.effectiveMaxScale;return 0===b||a>b};d.canZoomOut=function(b){const a=b.scale;b=b.constraints.effectiveMinScale;return 0===b||a<b};d.onAnimationUpdate=function(b){this.navigation.animationManager?.animateContinous(b.viewpoint,
(a,e)=>{var c=!this.canZoomIn(b)&&1<this._zoomDirection||!this.canZoomOut(b)&&1>this._zoomDirection,f=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime);c=c||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime);e*=.001;this._momentumFinished=f&&c;if(!this._momentumFinished){f=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,e))*this._rotationDirection*180/Math.PI:0;c=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,
e)):1;const k=u.create();var g=u.create();if(this._previousCenter){t.set(k,this._previousCenter.x,this._previousCenter.y);v.getPaddingScreenTranslation(g,b.size,b.padding);t.add(k,k,g);const {constraints:l,scale:m}=b;g=m*c;1>c&&!l.canZoomInTo(g)?(c=m/l.effectiveMaxScale,this.rotateMomentum=this.zoomMomentum=null):1<c&&!l.canZoomOutTo(g)&&(c=m/l.effectiveMinScale,this.rotateMomentum=this.zoomMomentum=null);v.scaleAndRotateBy(a,b.viewpoint,c,f,k,b.size);b.constraints.constrainByGeometry(a)}}this._animationTime+=
e})};d.stopMomentumNavigation=function(){if(this.rotateMomentum||this.zoomMomentum)this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop()};return r}(z);n.__decorate([q.property()],h.prototype,"_momentumFinished",void 0);n.__decorate([q.property()],h.prototype,"viewpoint",void 0);n.__decorate([q.property()],h.prototype,"navigation",void 0);return h=n.__decorate([B.subclass("esri.views.2d.navigation.actions.Pinch")],
h)});