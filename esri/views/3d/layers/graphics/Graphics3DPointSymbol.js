// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DCalloutSymbolLayerFactory ./Graphics3DLineCalloutSymbolLayer ./Graphics3DSymbol".split(" "),function(h,k,f,l,m,n,p){return function(d){function g(a,b,c){a=d.call(this,a,b,c)||this;a._calloutSymbolLayer=null;a.symbol.hasVisibleCallout()&&(a._calloutSymbolLayer=m.make(a.symbol,b));return a}h._inheritsLoose(g,d);var e=g.prototype;e.doLoad=function(){var a=
h._asyncToGenerator(function*(b){const c=this._calloutSymbolLayer?k.result(this._calloutSymbolLayer.load()):null;try{yield d.prototype.doLoad.call(this,b),l.throwIfAborted(b)}catch(q){throw this._calloutSymbolLayer?.abortLoad(),q;}c&&(yield c)});return function(b){return a.apply(this,arguments)}}();e.destroy=function(){d.prototype.destroy.call(this);this._calloutSymbolLayer=f.destroyMaybe(this._calloutSymbolLayer)};e.createGraphics3DGraphic=function(a,b){b=d.prototype.createGraphics3DGraphic.call(this,
a,b);f.isSome(this._calloutSymbolLayer)&&f.isSome(b)&&(a=this._createCalloutGraphic(a),f.isSome(a)&&b.addAuxiliaryGraphic(a));return b};e.globalPropertyChanged=function(a,b){return d.prototype.globalPropertyChanged.call(this,a,b)?this._calloutSymbolLayer?this._calloutSymbolLayer.globalPropertyChanged(a,b,c=>this._getCalloutGraphicLayer(c)):!0:!1};e.updateGeometry=function(a,b){const c=d.prototype.updateGeometry.call(this,a,b);return c&&this._calloutSymbolLayer&&(a=this._getCalloutGraphicLayer(a))?
this._calloutSymbolLayer.updateGeometry(a,b):c};e._createCalloutGraphic=function(a){const b=a.renderingInfo;a.renderingInfo=new n.LineCalloutSymbolLayerRenderingInfo(b.renderer,b.symbol);return this._calloutSymbolLayer.createGraphics3DGraphic(a)};e._getCalloutGraphicLayer=function(a){for(const b of a._auxiliaryLayers)if(b.graphics3DSymbolLayer===this._calloutSymbolLayer)return b};return g}(p)});