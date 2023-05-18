// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/vec2f64","../../../../webgl/rasterUtils"],function(h,l){const m={vsPath:"raster/common",fsPath:"raster/reproject",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(c,a){const {painter:d}=c,b=[];c=!c.context.capabilities.textureFloat?.textureFloatLinear;const {interpolation:e,transformGrid:f}=a;"cubic"===e?b.push("bicubic"):"bilinear"===e&&c&&b.push("bilinear");f&&(b.push("applyProjection"),1===f.spacing[0]&&b.push("lookupProjection"));
return d.materialManager.getProgram(m,b)},bindTextureAndUniforms:function(c,a,d){const {names:b,textures:e}=d.getTextures({forProcessing:!0});l.setTextures(c.context,a,b,e);a.setUniform1f("u_scale",1);a.setUniform2fv("u_offset",[0,0]);a.setUniform2fv("u_coordScale",[1,1]);a.setUniformMatrix3fv("u_dvsMat3",[2,0,0,0,2,0,-1,-1,0]);a.setUniform1i("u_flipY",0);a.setUniform1f("u_opacity",1);const {width:f,height:n,source:k,transformGrid:g}=d;a.setUniform2fv("u_srcImageSize",[k.width,k.height]);a.setUniform2fv("u_targetImageSize",
[f,n]);a.setUniform2fv("u_transformSpacing",g?g.spacing:h.ZEROS);a.setUniform2fv("u_transformGridSize",g?g.size:h.ZEROS)}}});