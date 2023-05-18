// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],function(c,f,g,e){let h=function(){function a(){this.enabled=!0;this._time=e.Milliseconds(0)}a.prototype.advance=function({deltaTime:b,fixedTime:d}){if(g.isSome(d)){if(this._time===d)return!1;this._time=d;return!0}this._time=e.Milliseconds(this._time+b);return 0!==b};f._createClass(a,[{key:"time",get:function(){return this._time}}]);return a}();c.AnimationTimer=h;c.Parameters=function(a,
b){this.deltaTime=a;this.fixedTime=b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});