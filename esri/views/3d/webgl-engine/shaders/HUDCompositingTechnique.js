// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/HUDCompositing.glsl ../../../webgl/renderState".split(" "),function(f,d,g,h,b,k,l,m,n){b=function(c){function a(){return c.apply(this,arguments)||this}g._inheritsLoose(a,c);var e=a.prototype;e.initializeProgram=function(p){return new l.Program(p.rctx,a.shader.get().build(),
k.Default3D)};e.initializePipeline=function(){return n.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}})};return a}(b.ShaderTechnique);b.shader=new h.ReloadableShaderModule(m.HUDCompositing,()=>new Promise((c,a)=>f(["./HUDCompositing.glsl"],c,a)));d.HUDCompositingTechnique=b;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});