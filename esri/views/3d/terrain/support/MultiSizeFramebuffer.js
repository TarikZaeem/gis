// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../webgl/enums","../../../webgl/FramebufferObject"],function(d,e,g){let h=function(){function f(a){this._rctx=a;this._fbos=new Map}var c=f.prototype;c.get=function(a){return this._getPool(a)};c.dispose=function(){this._fbos.forEach(a=>a.dispose());this._fbos.clear()};c._getPool=function(a){var b=this._fbos.get(a);if(b)return b;b=new g.FramebufferObject(this._rctx,{colorTarget:e.TargetType.TEXTURE,depthStencilTarget:e.DepthStencilTargetType.DEPTH_RENDER_BUFFER,width:a,height:a});
this._fbos.set(a,b);return b};return f}();d.MultiSizeFramebuffer=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});