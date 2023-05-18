// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/Accessor ../../core/maybe ../../core/scheduling ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../ViewAnimation ./unitBezier ./viewpointUtils ../../geometry/Point".split(" "),function(m,g,f,q,r,t,u,h,z,A,v,n,l,w,x){let y=function(){function k(e,d,a,b){const c=e.targetGeometry,p=d.targetGeometry;
b?"string"===typeof b&&(b=l.parse(b)||l.easingFunctions.ease):b=l.easingFunctions.ease;this.easing=b;this.duration=a;this.sCenterX=c.x;this.sCenterY=c.y;this.sScale=e.scale;this.sRotation=e.rotation;this.tCenterX=p.x;this.tCenterY=p.y;this.tScale=d.scale;this.tRotation=d.rotation;this.dCenterX=this.tCenterX-this.sCenterX;this.dCenterY=this.tCenterY-this.sCenterY;this.dScale=this.tScale-this.sScale;this.dRotation=this.tRotation-this.sRotation;180<this.dRotation?this.dRotation-=360:-180>this.dRotation&&
(this.dRotation+=360)}k.prototype.applyRatio=function(e,d){var a=this.easing(d);let b,c;1<=d?(d=this.tCenterX,b=this.tCenterY,c=this.tRotation,a=this.tScale):(d=this.sCenterX+a*this.dCenterX,b=this.sCenterY+a*this.dCenterY,c=this.sRotation+a*this.dRotation,a=this.sScale+a*this.dScale);e.targetGeometry.x=d;e.targetGeometry.y=b;e.scale=a;e.rotation=c};return k}();f=function(k){function e(a){a=k.call(this,a)||this;a.updateFunction=null;a.animation=null;a.duration=200;a.transition=null;a.easing=l.easingFunctions.ease;
a.view=null;a.viewpoint=new q({targetGeometry:new x,scale:0,rotation:0});a._updateTask=u.addFrameTask({postRender:a._postRender.bind(m._assertThisInitialized(a))});a._updateTask.pause();return a}m._inheritsLoose(e,k);var d=e.prototype;d.destroy=function(){this._updateTask=t.removeMaybe(this._updateTask)};d.animate=function(a,b,c){this.stop();w.copy(this.viewpoint,b);this.transition=new y(this.viewpoint,a.target,c&&c.duration||this.duration,c&&c.easing||this.easing);b=()=>{this.animation===a&&this._updateTask&&
("finished"===a.state&&(this.transition?.applyRatio(this.viewpoint,1),this.view?.state&&(this.view.state.viewpoint=this.viewpoint.clone())),this.updateFunction=this.animation=null)};a.when(b,b);this._startTime=performance.now();this._updateTask.resume();return this.animation=a};d.animateContinous=function(a,b){this.stop();this.updateFunction=b;this.viewpoint=a;const c=new n({target:a.clone()});a=()=>{this.animation===c&&this._updateTask&&(this.updateFunction=this.animation=null)};c.when(a,a);this._startTime=
performance.now();this._updateTask.resume();return this.animation=c};d.stop=function(){this.animation&&(this.animation.stop(),this.updateFunction=this.animation=null)};d._postRender=function(a){var b=this.animation;if(b&&b.state!==n.State.STOPPED){if(this.updateFunction)this.updateFunction(this.viewpoint,a.deltaTime);else{a=this.transition;b=(performance.now()-this._startTime)/a.duration;const c=1<=b;a.applyRatio(this.viewpoint,b);c&&this.animation?.finish()}this.view?.state&&(this.view.state.viewpoint=
this.viewpoint.clone())}else this._updateTask.pause()};return e}(r);g.__decorate([h.property()],f.prototype,"animation",void 0);g.__decorate([h.property()],f.prototype,"duration",void 0);g.__decorate([h.property()],f.prototype,"transition",void 0);g.__decorate([h.property()],f.prototype,"easing",void 0);g.__decorate([h.property()],f.prototype,"view",void 0);g.__decorate([h.property()],f.prototype,"viewpoint",void 0);return f=g.__decorate([v.subclass("esri.views.2d.AnimationManager")],f)});