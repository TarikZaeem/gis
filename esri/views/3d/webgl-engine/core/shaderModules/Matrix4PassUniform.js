// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./Uniform","../shaderTechnique/BindType"],function(b,f,a,g){a=function(c){function d(e,h){return c.call(this,e,"mat4",g.BindType.Pass,(k,l,m)=>k.setUniformMatrix4fv(e,h(l,m)))||this}f._inheritsLoose(d,c);return d}(a.Uniform);b.Matrix4PassUniform=a;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});