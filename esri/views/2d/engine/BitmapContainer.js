// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./brushes","./webgl/enums","./webgl/WGLContainer"],function(g,h,k,l,d){d=function(b){function c(){var a=b.apply(this,arguments)||this;a._hasCrossfade=!1;return a}h._inheritsLoose(c,b);var e=c.prototype;e.beforeRender=function(a){b.prototype.beforeRender.call(this,a);this._manageFade()};e.prepareRenderPasses=function(a){const f=a.registerRenderPass({name:"bitmap",brushes:[k.brushes.bitmap],target:()=>this.children,drawPhase:l.WGLDrawPhase.MAP});
return[...b.prototype.prepareRenderPasses.call(this,a),f]};e._manageFade=function(){2<=this.children.reduce((a,f)=>a+(f.inFadeTransition?1:0),0)?(this.children.forEach(a=>a.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(a=>a.blendFunction="standard"),this._hasCrossfade=!1)};h._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}}]);return c}(d);g.BitmapContainer=d;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});