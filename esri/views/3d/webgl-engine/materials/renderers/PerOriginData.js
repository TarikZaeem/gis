// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){let f=function(){function c(a){this.origin=a;this.buffers=[]}var d=c.prototype;d.dispose=function(){this.buffers.forEach(a=>a.vao.dispose());this.buffers.length=0};d.findBuffer=function(a){return this.buffers.find(e=>e.instances.has(a))};return c}();b.PerOriginData=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});