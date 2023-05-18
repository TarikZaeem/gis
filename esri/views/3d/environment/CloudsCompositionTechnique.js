// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/CloudsComposition.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(l,g,m,n,p,c,q,r,t,b,e){c=function(d){function a(f){var h;return h=d.call(this,
f,new q.ShaderTechniqueConfiguration,()=>h.destroy())||this}m._inheritsLoose(a,d);var k=a.prototype;k.initializeProgram=function(f){return new t.Program(f.rctx,a.shader.get().build(),r.Default3D)};k.initializePipeline=function(){return e.makePipelineState({blending:e.separateBlendingParams(b.BlendFactor.ONE,b.BlendFactor.ZERO,b.BlendFactor.SRC_ALPHA,b.BlendFactor.ONE),depthTest:{func:b.CompareFunction.LEQUAL},colorWrite:e.defaultColorWriteParams})};return a}(c.ShaderTechnique);c.shader=new p.ReloadableShaderModule(n.CloudsCompositionShader,
()=>new Promise((d,a)=>l(["./CloudsComposition.glsl"],d,a)));g.CloudsCompositionTechnique=c;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});