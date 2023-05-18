// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./basicInterfaces","./TextRenderer","./Texture","../../../webgl/enums"],function(f,g,d,h,e){const k={canvas:null};return function(){function c(b,a,l){this._renderer=new d.TextRenderer(b,a,l)}c.prototype.create=function(){const b=d.getTextHelperCanvas(k,this._renderer.renderedWidth,this._renderer.renderedHeight),a=b.getContext("2d");a.save();this._renderer.render(a,0,0);a.restore();return new h.Texture(b,{wrap:{s:e.TextureWrapMode.CLAMP_TO_EDGE,
t:e.TextureWrapMode.CLAMP_TO_EDGE},noUnpackFlip:!1,mipmap:!0,preMultiplyAlpha:!0,powerOfTwoResizeMode:g.PowerOfTwoResizeMode.PAD})};f._createClass(c,[{key:"key",get:function(){return this._renderer.key}},{key:"baselineAnchorY",get:function(){return 1-this._renderer.firstRenderedBaselinePosition/this._renderer.renderedHeight}},{key:"displayWidth",get:function(){return this._renderer.displayWidth}},{key:"displayHeight",get:function(){return this._renderer.displayHeight}}]);return c}()});