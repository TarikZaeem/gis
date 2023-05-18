// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","./BufferRange"],function(d,e,f,b){b=function(g){function c(h,a,k){a=g.call(this,a,k)||this;a.geometry=h;return a}e._inheritsLoose(c,g);e._createClass(c,[{key:"isVisible",get:function(){return this.geometry.visible}},{key:"hasHighlights",get:function(){return f.isSome(this.geometry.highlights)&&this.isVisible}},{key:"hasOccludees",get:function(){return f.isSome(this.geometry.occludees)}}]);return c}(b.BufferRange);
d.Instance=b;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});