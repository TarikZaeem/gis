// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","./FilteredFiniteDifference","./Momentum"],function(e,h,f,k){let m=function(){function g(a=2.5,b=.01,c=.95,l=12){this._minimumInitialVelocity=a;this._stopVelocity=b;this._friction=c;this._maxVelocity=l;this.enabled=!0;this.value=new f.FilteredFiniteDifference(.8);this.time=new f.FilteredFiniteDifference(.3)}var d=g.prototype;d.add=function(a,b){if(this.enabled&&null!=b){if(this.time.hasLastValue()){if(.01>this.time.computeDelta(b))return;if(this.value.hasFilteredDelta()){const c=
this.value.computeDelta(a);0>this.value.filteredDelta*c&&this.value.reset()}}this.time.update(b);this.value.update(a)}};d.reset=function(){this.value.reset();this.time.reset()};d.evaluateMomentum=function(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let a=this.value.filteredDelta/this.time.filteredDelta;a=h.clamp(a,-this._maxVelocity,this._maxVelocity);return Math.abs(a)<this._minimumInitialVelocity?null:this.createMomentum(a,this._stopVelocity,this._friction)};
d.createMomentum=function(a,b,c){return new k.Momentum(a,b,c)};return g}();e.MomentumEstimator=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});