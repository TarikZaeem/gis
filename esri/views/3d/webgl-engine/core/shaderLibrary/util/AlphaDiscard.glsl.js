// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./DiscardOrAdjustAlphaBlend.glsl ../../shaderModules/FloatDrawUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/basicInterfaces".split(" "),function(e,k,l,m,f,c){function h(a,b,d){const g=a.fragment;b.alphaDiscardMode!==c.AlphaDiscardMode.Mask&&b.alphaDiscardMode!==c.AlphaDiscardMode.MaskBlend||g.uniforms.add(d);switch(b.alphaDiscardMode){case c.AlphaDiscardMode.Blend:return a.include(k.DiscardOrAdjustAlphaBlend);case c.AlphaDiscardMode.Opaque:g.code.add(f.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case c.AlphaDiscardMode.Mask:g.code.add(f.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case c.AlphaDiscardMode.MaskBlend:a.fragment.code.add(f.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}e.DiscardOrAdjustAlphaDraw=function(a,b){h(a,b,new l.FloatDrawUniform("textureAlphaCutoff",d=>d.textureAlphaCutoff))};e.DiscardOrAdjustAlphaPass=function(a,b){h(a,b,new m.FloatPassUniform("textureAlphaCutoff",
d=>d.textureAlphaCutoff))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});