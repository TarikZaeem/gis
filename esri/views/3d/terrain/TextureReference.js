// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/vec3f64","../../../chunks/vec4f64"],function(b,e,f){let m=function(){function c(d,g,a,h,k,l){this.texture=d;this.type=g;d.retain();this.offsetAndScale=f.fromValues(a.offset[0],a.offset[1],a.scale,a.scale);this.opacities=e.fromValues(h,k,l)}c.prototype.destroy=function(){this.texture.release()};return c}();b.TextureReference=m;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});