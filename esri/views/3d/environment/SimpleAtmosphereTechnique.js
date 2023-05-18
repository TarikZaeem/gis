// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/SimpleAtmosphere.glsl ./SimpleAtmosphereTechniqueConfiguration ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(h,f,k,l,m,n,d,p,q,a,b){d=function(e){function c(){return e.apply(this,arguments)||this}k._inheritsLoose(c,
e);var g=c.prototype;g.initializeProgram=function(r){return new q.Program(r.rctx,c.shader.get().build(this.configuration),p.Default3D)};g.initializePipeline=function(){return this.configuration.geometry===m.SimpleAtmosphereGeometry.Cylinder?b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),culling:b.backFaceCullingParams,depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams}):
b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams})};return c}(d.ShaderTechnique);d.shader=new n.ReloadableShaderModule(l.SimpleAtmosphere,()=>new Promise((e,c)=>h(["./SimpleAtmosphere.glsl"],e,c)));f.SimpleAtmosphereTechnique=d;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});