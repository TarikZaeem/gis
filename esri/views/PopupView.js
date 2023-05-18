// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/Logger ../core/accessorSupport/ensureType ../core/arrayUtils ../core/Error ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(r,k,u,h,v,x,y,z,A,B,w){r.PopupView=l=>{l=function(t){function n(){return t.apply(this,arguments)||this}k._inheritsLoose(n,t);var g=n.prototype;g.fetchPopupFeatures=function(){var b=k._asyncToGenerator(function*(a,c){yield this.when();
const {location:e,queryArea:d,layerViewsAndGraphics:f,clientOnlyGraphics:m}=yield this._prepareFetchPopupFeatures(a,c);a=Promise.resolve(m);c=this._queryLayerPopupFeatures(d,f,c);const q=c.map(p=>p.promise);a=v.eachAlwaysValues([a,...q]).then(p=>Array.from(new Set(p.flat())));return{location:e,clientOnlyGraphics:m,allGraphicsPromise:a,promisesPerLayerView:c}});return function(a,c){return b.apply(this,arguments)}}();g._queryLayerPopupFeatures=function(b,a,c){return a.map(({layerView:e,graphics:d})=>
{d={clientGraphics:d,event:h.isSome(c)?c.event:void 0,signal:h.isSome(c)?c.signal:void 0,defaultPopupTemplateEnabled:h.isSome(c)?!!c.defaultPopupTemplateEnabled:!1};d=e.fetchPopupFeatures(b,d);return{layerView:e,promise:d}})};g._isValidPopupGraphic=function(b,a){return b&&!!b.getEffectivePopupTemplate(h.isSome(a)&&a.defaultPopupTemplateEnabled)};g._prepareFetchPopupFeatures=function(){var b=k._asyncToGenerator(function*(a,c){const {clientGraphics:e,queryArea:d,location:f}=yield this._popupHitTestGraphics(a,
c);a=this._getFetchPopupLayerViews();const {layerViewsAndGraphics:m,clientOnlyGraphics:q}=this._graphicsPerFetchPopupLayerView(e,a);return{clientOnlyGraphics:q,layerViewsAndGraphics:m,queryArea:d,location:f}});return function(a,c){return b.apply(this,arguments)}}();g._popupHitTestGraphics=function(){var b=k._asyncToGenerator(function*(a,c){var e=yield this.popupHitTest(a);a=e.mapPoint;e=e.results.filter(f=>"graphic"===f.type&&this._isValidPopupGraphic(f.graphic,c));const d=e.length?e[0].mapPoint:
null;return{clientGraphics:e.map(f=>f.graphic),queryArea:a,location:a||d}});return function(a,c){return b.apply(this,arguments)}}();g._getFetchPopupLayerViews=function(){const b=[];this.allLayerViews.forEach(a=>{this._isValidPopupLayerView(a)&&b.push(a)});h.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&b.push(this.graphicsView);return b.reverse()};g._isValidPopupLayerView=function(b){return h.isSome(b)&&(!("layer"in b)||!b.suspended)&&"fetchPopupFeatures"in b};g._graphicsPerFetchPopupLayerView=
function(b,a){const c=[],e=new Map;a=a.map(d=>{const f=[];"layer"in d?e.set(d.layer,f):e.set(d.graphics,f);return{layerView:d,graphics:f}});for(const d of b)(b=e.get(d.layer)||e.get(d.sourceLayer)||null)?b.push(d):c.push(d);return{layerViewsAndGraphics:a,clientOnlyGraphics:c}};return n}(l);return l=u.__decorate([w.subclass("esri.views.PopupView")],l)};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});