// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass".split(" "),function(g,d,a,e,n,p,k){a=function(h){function f(c){var b=h.call(this)||this;b.nativeIndex=null;b._detectedDeviceType="unknown";"standard"===c.mapping?b._detectedDeviceType="standard":l.test(c.id)?b._detectedDeviceType="spacemouse":
b._detectedDeviceType="unknown";b.nativeIndex=c.index;return b}g._inheritsLoose(f,h);g._createClass(f,[{key:"native",get:function(){const c=navigator.getGamepads?navigator.getGamepads():[];return null!=this.nativeIndex&&this.nativeIndex<c.length?c[this.nativeIndex]:null}},{key:"deviceType",get:function(){return this._detectedDeviceType}},{key:"axisThreshold",get:function(){return m[this.deviceType]}}]);return f}(a);d.__decorate([e.property({nonNullable:!0,readOnly:!0})],a.prototype,"nativeIndex",
void 0);d.__decorate([e.property({type:String,readOnly:!0})],a.prototype,"deviceType",null);d.__decorate([e.property({type:Number,readOnly:!0})],a.prototype,"axisThreshold",null);a=d.__decorate([k.subclass("esri.views.input.gamepad.GamepadInputDevice")],a);const l=RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))","i"),m={standard:.15,spacemouse:.025,unknown:0};return a});