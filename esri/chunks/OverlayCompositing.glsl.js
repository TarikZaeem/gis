// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../views/3d/terrain/interfaces ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,h,k,l,m,n,e,p,q){function f(){const a=
new p.ShaderBuilder;a.include(l.ScreenSpacePass);a.fragment.uniforms.add(new q.Texture2DPassUniform("tex",b=>b.texture));a.fragment.uniforms.add(new n.IntegerPassUniform("overlayIdx",b=>b.overlayIndex));a.fragment.uniforms.add(new m.FloatPassUniform("opacity",b=>b.opacity));a.fragment.code.add(e.glsl`void main() {
vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
gl_FragColor = texture2D(tex, overlayUV) * opacity;
}`);return a}let g=function(a){function b(){var d=a.apply(this,arguments)||this;d.overlayIndex=k.OverlayIndex.INNER;d.opacity=1;return d}h._inheritsLoose(b,a);return b}(e.NoParameters);const r=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:g,build:f},Symbol.toStringTag,{value:"Module"}));c.OverlayCompositing=r;c.OverlayCompositingPassParameters=g;c.build=f});