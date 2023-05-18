// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../ObservableBase"],function(d,g,b){b=function(e){function c(){return e.apply(this,arguments)||this}g._inheritsLoose(c,e);c.prototype.notify=function(){var a=this._observers;if(a&&0<a.length){a=a.slice();for(const f of a)f.onInvalidated(),f.onCommitted()}};return c}(b.ObservableBase);d.SimpleObservable=b;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});