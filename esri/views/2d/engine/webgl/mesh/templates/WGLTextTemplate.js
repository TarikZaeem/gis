// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/BidiText ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../alignmentUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLMeshTemplate".split(" "),function(w,r,g,t,m,e,n,x,y,p,z,A){return function(u){function h(a,f,c,d,k,q,l,v,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){var b=u.call(this)||this;b._xOffset=g.pt2px(F);b._yOffset=g.pt2px(G);b._decoration=
C||"none";b._backgroundColor=O;b._borderLineColor=P;b._borderLineSize=Q;b._color=k;b._haloColor=q;b._haloSize=Math.min(Math.floor(5*g.pt2px(g.toPt(c))),127);b._size=Math.min(Math.round(g.pt2px(f)),127);f=Math.min(Math.round(g.pt2px(d||f)),127);b._referenceSize=Math.round(Math.sqrt(256*f));b._scale=b._size/n.GLYPH_SIZE;b._angle=E;b._justify=m.getJustification(l||"center");b._xAlignD=m.getXAnchorDirection(l||"center");b._yAlignD=m.getYAnchorDirection(v||"baseline");b._baseline="baseline"===(v||"baseline");
b._bitset=(B===t.Alignment.MAP?1:0)|(D?1:0)<<1;a=y.MaterialKeyBase.load(a);a.sdf=!0;b._materialKey=a.data;b._lineWidth=g.pt2px(H)||512;b._lineHeight=I||1;b._textPlacement=J;b._effects=K;b._isCIM=L??!1;b._minMaxZoom=x.i1616to32(Math.round(M*n.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(N*n.MIN_MAX_ZOOM_PRECISION_FACTOR));return b}w._inheritsLoose(h,u);h.fromText=function(a,f){const c=a.font?.size,d=new h(a.materialKey,c,a.haloSize||0,c,a.color&&e.premultiplyAlphaRGBAArray(a.color)||0,a.haloColor&&e.premultiplyAlphaRGBAArray(a.haloColor)||
0,a.horizontalAlignment,a.verticalAlignment,t.Alignment.SCREEN,a.font?.decoration,!1,a.angle||0,a.xoffset||0,a.yoffset||0,a.lineWidth||0,a.lineHeight||0,null,null,!1,p.DEFAULT_MIN_ZOOM,p.DEFAULT_MAX_ZOOM,a.backgroundColor&&e.premultiplyAlphaRGBAArray(a.backgroundColor),a.borderLineColor&&e.premultiplyAlphaRGBAArray(a.borderLineColor),a.borderLineSize),[,k]=r.bidiText(a.text);d.bindTextInfo(f??[],k);d._vertexBoundsScale=a.maxVVSize&&c?a.maxVVSize/c:1;return d};h.fromCIMText=function(a,f,c){var d=a.scaleFactor||
1;const k=a.size*a.sizeRatio*d,[q,l]=p.getMinMaxZoom(a.scaleInfo,c);c=new h(a.materialKey,k,a.outlineSize*a.sizeRatio,a.referenceSize,e.premultiplyAlphaRGBA(a.color),e.premultiplyAlphaRGBA(a.outlineColor),a.horizontalAlignment,a.verticalAlignment,a.alignment,a.decoration,a.colorLocked??!1,a.angle,a.offsetX*a.sizeRatio*d,a.offsetY*a.sizeRatio*d,512,1,a.markerPlacement,a.effects,!0,q,l,a.backgroundColor?e.premultiplyAlphaRGBA(a.backgroundColor):void 0,a.borderLineColor?e.premultiplyAlphaRGBA(a.borderLineColor):
void 0,a.borderLineWidth);[,d]=r.bidiText(a.text);c.bindTextInfo(f,d);c._vertexBoundsScale=a.maxVVSize?a.maxVVSize/k:1;return c};return h}(z(A))});