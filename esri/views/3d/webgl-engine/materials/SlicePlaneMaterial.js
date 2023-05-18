// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ../shaders/SlicePlaneMaterialTechnique".split(" "),function(e,f,l,m,n,p,q,r,t,u,g,h){g=function(c){function b(d){d=c.call(this,d,new k)||this;d._configuration=new n.ShaderTechniqueConfiguration;return d}f._inheritsLoose(b,
c);var a=b.prototype;a.createBufferWriter=function(){return new t.DefaultBufferWriter(u.PositionUVLayout)};a.requiresSlot=function(d,v){return v===m.ShaderOutput.Color&&d===r.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL};a.createGLMaterial=function(d){return new w(d)};a.getConfiguration=function(){return this._configuration};return b}(g.TriangleMaterial);let w=function(c){function b(a){a=c.call(this,a)||this;a.ensureTechnique(h.SlicePlaneMaterialTechnique,null);return a}f._inheritsLoose(b,
c);b.prototype.beginSlot=function(){return l.unwrap(this.technique)};return b}(p),k=function(c){function b(){var a=c.apply(this,arguments)||this;a.renderOccluded=q.RenderOccludedFlag.Occlude;return a}f._inheritsLoose(b,c);return b}(h.SlicePlaneMaterialPassParameters);e.Parameters=k;e.SlicePlaneMaterial=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});