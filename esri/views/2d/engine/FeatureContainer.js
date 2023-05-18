// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/promiseUtils ../../../core/Queue ./webgl/AttributeStoreView ./webgl/TileContainer ./webgl/WGLRendererInfo".split(" "),function(l,m,n,p,q,h,r){h=function(g){function k(a){var b=g.call(this,a)||this;b._rendererInfo=new r.WGLRendererInfo;b._materialItemsRequestQueue=new p;b.attributeView=new q.AttributeStoreView(()=>b.onAttributeStoreUpdate());return b}m._inheritsLoose(k,g);var c=k.prototype;c.destroy=function(){this.children.forEach(a=>
a.destroy());this.removeAllChildren();this.attributeView.destroy();this._materialItemsRequestQueue.clear()};c.setRendererInfo=function(a,b,d){this._rendererInfo.setInfo(a,b,d);this.requestRender()};c.getMaterialItems=function(){var a=m._asyncToGenerator(function*(b,d){if(!b||0===b.length)return[];const e=n.createResolver();this._materialItemsRequestQueue.push({items:b,abortOptions:d,resolver:e});this.requestRender();return e.promise});return function(b,d){return a.apply(this,arguments)}}();c.doRender=
function(a){a.context.capabilities.enable("textureFloat");a.context.capabilities.enable("vao");if(0<this._materialItemsRequestQueue.length){let b=this._materialItemsRequestQueue.pop();for(;b;)this._processMaterialItemRequest(a,b),b=this._materialItemsRequestQueue.pop()}g.prototype.doRender.call(this,a)};c.renderChildren=function(a){for(const b of this.children)b.commit(a);this._rendererInfo.update(a.state);g.prototype.renderChildren.call(this,a)};c.updateTransforms=function(a){if(this.children.some(b=>
b.hasData))for(const b of this.children)b.setTransform(a)};c.createRenderParams=function(a){a=g.prototype.createRenderParams.call(this,a);a.rendererInfo=this._rendererInfo;a.attributeView=this.attributeView;return a};c.onAttributeStoreUpdate=function(){};c._processMaterialItemRequest=function(a,{items:b,abortOptions:d,resolver:e}){const {painter:t,pixelRatio:u}=a;a=b.map(f=>t.textureManager.rasterizeItem(f.symbol,u,f.glyphIds,d));Promise.all(a).then(f=>{this.stage?(f=f.map((v,w)=>({id:b[w].id,mosaicItem:v})),
e.resolve(f)):e.reject()},e.reject)};return k}(h);l.FeatureContainer=h;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});