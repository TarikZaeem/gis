// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec4f64 ../../../../../../geometry/support/aaBoundingRect ../../../../terrain/interfaces ../../../../terrain/Overlay ../../renderPasses/AllRenderPasses ../ShaderOutput ../shading/MainLighting.glsl ../shading/PhysicallyBasedRenderingParameters.glsl ../shading/Water.glsl ../util/WebGL2Utils ../../shaderModules/Float4DrawUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(f,A,e,p,B,q,v,w,h,C,r,x,l,D){function y(a,
b){a.extensions.add("GL_OES_standard_derivatives");b.pbrMode!==h.PBRMode.Water&&b.pbrMode!==h.PBRMode.WaterOnIntegratedMesh&&b.pbrMode!==h.PBRMode.TerrainWithWater||a.include(C.Water,b);const {vertex:t,fragment:d}=a;a.varyings.add("vtcOverlay","vec4");t.code.add(l.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`);d.code.add(l.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);d.code.add(l.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`);d.code.add(l.glsl`
    vec4 getOverlayColorTexel(vec4 texCoords) {
          vec2 texDim =  ${r.textureSize(b,"ovColorTex")};

          vec4 color0 = ${r.texelFetch(b,"ovColorTex","vec2(texCoords.x * 0.5, texCoords.y)*texDim")};
          vec4 color1 = ${r.texelFetch(b,"ovColorTex","vec2(texCoords.z * 0.5 + 0.5, texCoords.w)*texDim")};

          bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
          bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));

          return mix(color1 * float(isValid1), color0, float(isValid0));
    }
  `);if(b.pbrMode===h.PBRMode.Water||b.pbrMode===h.PBRMode.WaterOnIntegratedMesh||b.pbrMode===h.PBRMode.TerrainWithWater)w.addMainLightDirection(d),w.addMainLightIntensity(d),d.code.add(l.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`)}function z(a,b){return 0===b.overlays.length?null:a.identifier===q.RenderPassIdentifier.Material&&a.output===v.ShaderOutput.Color?b.overlays[p.OverlayIndex.INNER].getColorTextureNoRasterImage():a.identifier===q.RenderPassIdentifier.Material&&a.output===v.ShaderOutput.ObjectAndLayerIdColor?b.overlays[p.OverlayIndex.INNER].getColorTexture(B.OverlaySource.ObjectAndLayerIdColor):a.identifier===q.RenderPassIdentifier.Highlight?b.overlays[p.OverlayIndex.INNER].getValidTexture(p.RenderTargetType.Highlight):
null}f.OverlayMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Enabled=1]="Enabled";a[a.EnabledWithWater=2]="EnabledWithWater";a[a.COUNT=3]="COUNT"})(f.OverlayMode||(f.OverlayMode={}));const k=A.create();f.OverlayIM=function(a,b){const {vertex:t,fragment:d}=a;t.uniforms.add([new x.Float4DrawUniform("overlayTexOffset",(g,m)=>{for(const u of m.overlays){const {index:n,extent:c}=u;0<e.area(c)&&(k[2*n]=g.toMapSpace[0]/e.width(c)-c[0]/e.width(c),k[2*n+1]=g.toMapSpace[1]/e.height(c)-c[1]/e.height(c))}return k}),
new x.Float4DrawUniform("overlayTexScale",(g,m)=>{for(const u of m.overlays){const {index:n,extent:c}=u;0<e.area(c)&&(k[2*n]=g.toMapSpace[2]/e.width(c),k[2*n+1]=g.toMapSpace[3]/e.height(c))}return k})]);d.constants.add("overlayOpacity","float",1);d.uniforms.add(new D.Texture2DPassUniform("ovColorTex",(g,m)=>z(g,m)));y(a,b)};f.getColorTexture=z;f.overlay=y;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});