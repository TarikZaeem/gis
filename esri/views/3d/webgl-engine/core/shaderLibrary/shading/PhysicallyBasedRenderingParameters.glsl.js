// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f32 ../attributes/VertexTextureCoordinates.glsl ../util/WebGL2Utils ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderModules/TextureSizeUniformType ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(f,v,k,w,l,r,t,d,m,n,p,
g,q){k=k.fromValues(0,.6,.2);f.PBRMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]="Schematic";a[a.Water=3]="Water";a[a.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";a[a.Terrain=5]="Terrain";a[a.TerrainWithWater=6]="TerrainWithWater";a[a.COUNT=7]="COUNT"})(f.PBRMode||(f.PBRMode={}));q=function(a){function b(){return a.apply(this,arguments)||this}v._inheritsLoose(b,a);return b}(q.GLTextureMaterialBindParameters);f.PBRBindParameters=q;f.PBRSchematicMRRValues=
k;f.PhysicallyBasedRenderingParameters=function(a,b){const e=a.fragment,u=b.hasMetallicRoughnessTexture||b.hasEmissionTexture||b.hasOcclusionTexture;b.pbrMode===f.PBRMode.Normal&&u&&a.include(w.VertexTextureCoordinates,b);if(b.pbrMode===f.PBRMode.Schematic)e.code.add(d.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);else if(b.pbrMode===f.PBRMode.Disabled)e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`);else if(b.pbrMode===f.PBRMode.Normal){e.code.add(d.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);a=b.supportsTextureAtlas?b.hasWebGL2Context?p.TextureSizeUniformType.None:p.TextureSizeUniformType.Size:p.TextureSizeUniformType.None;const h=b.pbrTextureBindType;b.hasMetallicRoughnessTexture&&(e.uniforms.add(h===g.BindType.Pass?n.createTexture2DPassSizeUniforms("texMetallicRoughness",c=>c.textureMetallicRoughness,a):m.createTexture2DDrawSizeUniforms("texMetallicRoughness",c=>c.textureMetallicRoughness,a)),e.code.add(d.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`));b.hasEmissionTexture&&(e.uniforms.add(h===g.BindType.Pass?n.createTexture2DPassSizeUniforms("texEmission",c=>c.textureEmissive,a):m.createTexture2DDrawSizeUniforms("texEmission",c=>c.textureEmissive,a)),e.code.add(d.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`));b.hasOcclusionTexture?(e.uniforms.add(h===g.BindType.Pass?n.createTexture2DPassSizeUniforms("texOcclusion",c=>c.textureOcclusion,a):m.createTexture2DDrawSizeUniforms("texOcclusion",c=>c.textureOcclusion,a)),e.code.add(d.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`);e.uniforms.add(h===g.BindType.Pass?[new t.Float3PassUniform("emissionFactor",c=>c.emissiveFactor),new t.Float3PassUniform("mrrFactors",c=>c.mrrFactors)]:[new r.Float3DrawUniform("emissionFactor",c=>c.emissiveFactor),new r.Float3DrawUniform("mrrFactors",c=>c.mrrFactors)]);e.code.add(d.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${u?d.glsl`vtc.uv = vuv0;`:""}
      ${b.hasMetallicRoughnessTextureTransform?d.glsl`vtc.uv = metallicRoughnessUV;`:""}
      ${b.hasMetallicRoughnessTexture?b.supportsTextureAtlas?d.glsl`
                vtc.size = ${l.textureSize(b,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:d.glsl`applyMetallnessAndRoughness(vtc);`:""}
      ${b.hasEmissiveTextureTransform?d.glsl`vtc.uv = emissiveUV;`:""}
      ${b.hasEmissionTexture?b.supportsTextureAtlas?d.glsl`
                vtc.size = ${l.textureSize(b,"texEmission")};
                applyEmission(vtc);`:d.glsl`applyEmission(vtc);`:""}
      ${b.hasOcclusionTextureTransform?d.glsl`vtc.uv = occlusionUV;`:""}
      ${b.hasOcclusionTexture?b.supportsTextureAtlas?d.glsl`
                vtc.size = ${l.textureSize(b,"texOcclusion")};
                applyOcclusion(vtc);`:d.glsl`applyOcclusion(vtc);`:""}
    }
  `)}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});