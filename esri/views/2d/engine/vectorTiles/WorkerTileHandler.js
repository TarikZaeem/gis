// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils","./enums","./WorkerTile","./style/StyleRepository"],function(p,q,l,r,t){return function(){function n(){this._spriteInfo={};this._glyphInfo={}}var f=n.prototype;f.reset=function(){this._spriteInfo={};this._glyphInfo={};return Promise.resolve()};f.getLayers=function(){return this._styleRepository?.layers??[]};f.createTileAndParse=function(){var a=p._asyncToGenerator(function*(b,d){var {key:e}=b;const h={};for(const c of Object.keys(b.sourceName2DataAndRefKey))h[c]=
b.sourceName2DataAndRefKey[c].refKey;e=new r(e,h,this,this._styleRepository);try{return yield e.parse(b,d)}catch(c){e.setObsolete();e.release();if(!q.isAbortError(c))throw c;return null}});return function(b,d){return a.apply(this,arguments)}}();f.updateStyle=function(a){if(a&&0!==a.length&&this._styleRepository){var b=this._styleRepository;for(const d of a)switch(a=d.data,d.type){case l.StyleUpdateType.PAINTER_CHANGED:b.setPaintProperties(a.layer,a.paint);break;case l.StyleUpdateType.LAYOUT_CHANGED:b.setLayoutProperties(a.layer,
a.layout);break;case l.StyleUpdateType.LAYER_REMOVED:b.deleteStyleLayer(a.layer);break;case l.StyleUpdateType.LAYER_CHANGED:b.setStyleLayer(a.layer,a.index);break;case l.StyleUpdateType.SPRITES_CHANGED:this._spriteInfo={}}}};f.setStyle=function(a){this._styleRepository=new t(a);this._spriteInfo={};this._glyphInfo={}};f.fetchSprites=function(a,b,d){const e=[],h=this._spriteInfo;for(const c of a)void 0===h[c.name]&&e.push(c);return 0===e.length?Promise.resolve():b.invoke("getSprites",e,{signal:d&&d.signal}).then(c=>
{for(const k in c)h[k]=c[k]})};f.getSpriteItems=function(){return this._spriteInfo};f.fetchGlyphs=function(a,b,d,e,h){const c=[];let k=this._glyphInfo[b];k?d.forEach(g=>{k[g]||c.push(g)}):(k=this._glyphInfo[b]=[],d.forEach(g=>c.push(g)));return 0===c.length?Promise.resolve():e.invoke("getGlyphs",{tileID:a,font:b,codePoints:c},h).then(g=>{for(let m=0;m<g.length;m++)g[m]&&(k[m]=g[m])})};f.getGlyphItems=function(a){return this._glyphInfo[a]};return n}()});