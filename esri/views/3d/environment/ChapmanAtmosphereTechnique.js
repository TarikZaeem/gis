// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/vec2f64 ../../../chunks/vec4f64 ../../../chunks/ChapmanAtmosphere.glsl ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(l,g,k,m,n,p,h,q,f,r,t,a,e){h=function(d){function b(){var c=
d.apply(this,arguments)||this;c.heightParameters=n.create();c.radii=m.create();c.innerFadeDistance=0;c.altitudeFade=0;c.hazeStrength=1;return c}k._inheritsLoose(b,d);return b}(h.NoParameters);f=function(d){function b(){return d.apply(this,arguments)||this}k._inheritsLoose(b,d);var c=b.prototype;c.initializeProgram=function(u){return new t.Program(u.rctx,b.shader.get().build(this.configuration),r.Default3D)};c.initializePipeline=function(){return this.configuration.haze?e.makePipelineState({blending:e.separateBlendingParams(a.BlendFactor.ONE,
a.BlendFactor.ZERO,a.BlendFactor.ONE_MINUS_SRC_COLOR,a.BlendFactor.ONE),colorWrite:e.defaultColorWriteParams}):e.makePipelineState({blending:e.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:e.defaultColorWriteParams})};return b}(f.ShaderTechnique);f.shader=new q.ReloadableShaderModule(p.ChapmanAtmosphere,()=>new Promise((d,b)=>l(["./ChapmanAtmosphere.glsl"],d,
b)));g.ChapmanAtmospherePassParameters=h;g.ChapmanAtmosphereTechnique=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});