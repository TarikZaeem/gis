// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/ShadowCastVisualize.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(l,e,f,m,b,n,p,q,r,t,g){b=function(c){function a(d,u){var h;return h=c.call(this,d,u,()=>h.destroy())||this}f._inheritsLoose(a,c);var k=a.prototype;
k.initializeProgram=function(d){return new q.Program(d.rctx,a.shader.get().build(this.configuration),n.Default3D)};k.initializePipeline=function(){return g.makePipelineState({blending:p.blendingDefault,colorWrite:g.defaultColorWriteParams,depthTest:null,depthWrite:null})};f._createClass(a,[{key:"primitiveType",get:function(){return t.PrimitiveType.TRIANGLE_STRIP}}]);return a}(b.ShaderTechnique);b.shader=new m.ReloadableShaderModule(r.ShadowCastVisualize,()=>new Promise((c,a)=>l(["./ShadowCastVisualize.glsl"],
c,a)));e.ShadowCastVisualizeTechnique=b;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});