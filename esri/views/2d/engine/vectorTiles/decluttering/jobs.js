// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/mat3f32","./config","./util","../style/StyleDefinition"],function(z,E,F,G,k){let T=function(){function A(l,b,h,d,e,c){this._symbols=l;this._styleRepository=d;this._zoom=e;this._currentSymbolCursor=this._currentLayerCursor=0;this._styleProps=new Map;this._allNeededMatrices=new Map;this._gridIndex=new G.GridIndex(b,h,F.COLLISION_GRID_CELL_SIZE);this._si=Math.sin(Math.PI*c/180);this._co=Math.cos(Math.PI*c/180);for(const f of l)for(const g of f.symbols)this._allNeededMatrices.has(g.tile)||
this._allNeededMatrices.set(g.tile,E.clone(g.tile.transforms.tileUnitsToPixels))}var B=A.prototype;B.work=function(l){const b=this._gridIndex,h=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const w=this._symbols[this._currentLayerCursor],C=this._getProperties(w.styleLayerUID);for(;this._currentSymbolCursor<w.symbols.length;this._currentSymbolCursor++){if(99===this._currentSymbolCursor%100&&performance.now()-h>l)return!1;
var d=w.symbols[this._currentSymbolCursor];if(!d.unique.show)continue;var e=d,c=this._si,f=this._co,g=this._allNeededMatrices.get(d.tile),m=this._zoom;const {iconRotationAlignment:H,textRotationAlignment:I,iconTranslate:J,iconTranslateAnchor:K,textTranslate:L,textTranslateAnchor:M}=C;var t=0;for(const a of e.colliders){const [n,p]=0===a.partIndex?J:L;var u=0===a.partIndex?K:M,q=a.minLod<=m&&m<=a.maxLod;t+=q?0:1;a.enabled=q;a.xScreen=a.xTile*g[0]+a.yTile*g[3]+g[6];a.yScreen=a.xTile*g[1]+a.yTile*g[4]+
g[7];u===k.TranslateAnchor.MAP?(a.xScreen+=f*n-c*p,a.yScreen+=c*n+f*p):(a.xScreen+=n,a.yScreen+=p);k.RotationAlignment.VIEWPORT===(0===a.partIndex?H:I)?(a.dxScreen=a.dxPixels,a.dyScreen=a.dyPixels):(a.dxScreen=f*(a.dxPixels+a.width/2)-c*(a.dyPixels+a.height/2)-a.width/2,a.dyScreen=c*(a.dxPixels+a.width/2)+f*(a.dyPixels+a.height/2)-a.height/2)}0<e.colliders.length&&t===e.colliders.length&&(e.unique.show=!1);e=d.unique;if(!e.show)continue;const {iconAllowOverlap:N,iconIgnorePlacement:O,textAllowOverlap:P,
textIgnorePlacement:Q}=C;for(const a of d.colliders)if(a.enabled&&(c=e.parts[a.partIndex],c.show)){if(f=!(a.partIndex?P:N))a:{f=a.xScreen+a.dxScreen;g=a.yScreen+a.dyScreen;m=f+a.width;t=g+a.height;const [n,p,x,y]=b.getCellSpan(f,g,m,t);for(u=p;u<=y;u++)for(q=n;q<=x;q++){var v=b.cells[u][q];for(const r of v){v=r.xScreen+r.dxScreen;const D=r.yScreen+r.dyScreen,R=v+r.width,S=D+r.height;if(!(m<v||f>R||t<D||g>S)){f=!0;break a}}}f=!1}f&&(a.hard?e.show=!1:c.show=!1)}if(e.show)for(const a of d.colliders){if(!a.enabled)continue;
if(a.partIndex?Q:O)continue;if(!e.parts[a.partIndex].show)continue;d=a.xScreen+a.dxScreen;c=a.yScreen+a.dyScreen;const [n,p,x,y]=this._gridIndex.getCellSpan(d,c,d+a.width,c+a.height);for(d=p;d<=y;d++)for(c=n;c<=x;c++)this._gridIndex.cells[d][c].push(a)}}}return!0};B._getProperties=function(l){var b=this._styleProps.get(l);if(b)return b;b=this._zoom;const h=this._styleRepository.getStyleLayerByUID(l);var d=h.getLayoutValue("symbol-placement",b)!==k.SymbolPlacement.POINT;let e=h.getLayoutValue("icon-rotation-alignment",
b);e===k.RotationAlignment.AUTO&&(e=d?k.RotationAlignment.MAP:k.RotationAlignment.VIEWPORT);let c=h.getLayoutValue("text-rotation-alignment",b);c===k.RotationAlignment.AUTO&&(c=d?k.RotationAlignment.MAP:k.RotationAlignment.VIEWPORT);d=h.getPaintValue("icon-translate",b);const f=h.getPaintValue("icon-translate-anchor",b),g=h.getPaintValue("text-translate",b),m=h.getPaintValue("text-translate-anchor",b);b={iconAllowOverlap:h.getLayoutValue("icon-allow-overlap",b),iconIgnorePlacement:h.getLayoutValue("icon-ignore-placement",
b),textAllowOverlap:h.getLayoutValue("text-allow-overlap",b),textIgnorePlacement:h.getLayoutValue("text-ignore-placement",b),iconRotationAlignment:e,textRotationAlignment:c,iconTranslateAnchor:f,iconTranslate:d,textTranslateAnchor:m,textTranslate:g};this._styleProps.set(l,b);return b};return A}();z.CollisionJob=T;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});