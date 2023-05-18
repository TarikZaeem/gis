// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../symbols ../../core/Collection ../../core/Error ../../core/Handles ../../core/Logger ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../geometry/support/webMercatorUtils ../../layers/Layer ../../layers/LayerConstants ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../../symbols/support/symbolUtils ../../views/input/InputManager ../../views/support/layerViewUtils ../Feature/FeatureViewModel ./actions ./actionUtils ../support/AnchorElementViewModel ../support/GoTo ../../symbols/SimpleFillSymbol ../../geometry/Point".split(" "),
function(t,f,d,D,U,E,y,F,z,G,p,h,V,W,H,I,A,J,K,L,M,N,O,B,P,w,q,Q,R,S,T){const u=E.ofType({key:"type",defaultKeyValue:"button",base:K,typeMap:{button:L,toggle:M}});d=function(C){function x(a){a=C.call(this,a)||this;a._handles=new F;a._pendingPromises=new Set;a._fetchFeaturesController=null;a._highlightSelectedFeaturePromise=null;a._highlightActiveFeaturePromise=null;a._selectedClusterFeature=null;a.featurePage=null;a.actions=new u;a.activeFeature=null;a.defaultPopupTemplateEnabled=!1;a.autoCloseEnabled=
!1;a.autoOpenEnabled=!0;a.browseClusterEnabled=!1;a.content=null;a.featuresPerPage=20;a.featureViewModelAbilities=null;a.featureViewModels=[];a.highlightEnabled=!0;a.includeDefaultActions=!0;a.selectedClusterBoundaryFeature=new D({symbol:new S({outline:{width:1.5,color:"cyan"},style:"none"})});a.title=null;a.updateLocationEnabled=!1;a.view=null;a.visible=!1;a.zoomFactor=4;a.zoomToLocation=null;return a}t._inheritsLoose(x,C);var g=x.prototype;g.initialize=function(){this._handles.add([p.watch(()=>
[this.autoOpenEnabled,this.view],()=>this._autoOpenEnabledChange()),this.on("view-change",()=>this._autoClose()),p.watch(()=>[this.highlightEnabled,this.selectedFeature,this.visible,this.view],()=>this._highlightSelectedFeature()),p.watch(()=>[this.highlightEnabled,this.activeFeature,this.visible,this.view],()=>this._highlightActiveFeature()),p.watch(()=>this.view?.animation?.state,a=>this._animationStateChange(a)),p.watch(()=>this.location,a=>this._locationChange(a)),p.watch(()=>this.selectedFeature,
a=>this._selectedFeatureChange(a)),p.watch(()=>[this.selectedFeatureIndex,this.featureCount,this.featuresPerPage],()=>this._selectedFeatureIndexChange()),p.watch(()=>[this.featurePage,this.selectedFeatureIndex,this.featureCount,this.featuresPerPage,this.featureViewModels],()=>this._setGraphicOnFeatureViewModels()),p.watch(()=>this.featureViewModels,()=>this._featureViewModelsChange()),this.on("trigger-action",a=>q.triggerAction({event:a,view:this.view})),p.when(()=>!this.waitingForResult,()=>this._waitingForResultChange(),
p.sync),p.watch(()=>[this.features,this.view?.map,this.view?.spatialReference],()=>this._updateFeatureVMs()),p.watch(()=>this.view?.scale,()=>this._viewScaleChange()),p.when(()=>!this.visible,()=>this.browseClusterEnabled=!1),p.watch(()=>this.browseClusterEnabled,a=>a?this.enableClusterBrowsing():this.disableClusterBrowsing())])};g.destroy=function(){this._cancelFetchingFeatures();this._handles.destroy();this._pendingPromises.clear();this.browseClusterEnabled=!1;this.view=null};g.centerAtLocation=
function(){const {view:a}=this,b=q.getSelectedTarget(this);return b&&a?this.callGoTo({target:{target:b,scale:a.scale}}):Promise.reject(new y("center-at-location:invalid-target-or-view","Cannot center at a location without a target and view.",{target:b,view:a}))};g.zoomTo=function(a){return this.callGoTo(a)};g.clear=function(){this.set({promises:[],features:[],content:null,title:null,location:null,activeFeature:null})};g.fetchFeatures=function(a,b){const {view:c}=this;if(!c||!a)throw new y("fetch-features:invalid-screenpoint-or-view",
"Cannot fetch features without a screenPoint and view.",{screenPoint:a,view:c});return c.fetchPopupFeatures(a,{event:b&&b.event,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,signal:b&&b.signal})};g.open=function(a){a={updateLocationEnabled:!1,promises:[],fetchFeatures:!1,...a,visible:!0};var {fetchFeatures:b}=a;delete a.fetchFeatures;b&&this._setFetchFeaturesPromises(a.location);b=["actionsMenuOpen","collapsed","featureMenuOpen"];for(const c of b)delete a[c];this.set(a)};g.triggerAction=
function(a){(a=this.allActions.getItemAt(a))&&!a.disabled&&this.emit("trigger-action",{action:a})};g.next=function(){this.selectedFeatureIndex+=1;return this};g.previous=function(){--this.selectedFeatureIndex;return this};g.disableClusterBrowsing=function(){q.removeClusteredFeaturesForBrowsing(this);this._clearBrowsedClusterGraphics()};g.enableClusterBrowsing=function(){var a=t._asyncToGenerator(function*(){const {view:b,selectedFeature:c}=this;"2d"!==b?.type?z.getLogger(this.declaredClass).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.",
c):q.isClusterFeature(c)?(yield q.displayClusterExtent(this),yield q.browseAggregateFeatures(this)):z.getLogger(this.declaredClass).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.",c)});return function(){return a.apply(this,arguments)}}();g._animationStateChange=function(a){this.zoomToLocation||(w.zoomToFeature.disabled="waiting-for-target"===a)};g._clearBrowsedClusterGraphics=function(){const a=this.view?.graphics;a&&(a.remove(this.selectedClusterBoundaryFeature),
this._selectedClusterFeature&&a.remove(this._selectedClusterFeature));this._selectedClusterFeature=null;this.selectedClusterBoundaryFeature.geometry=null};g._viewScaleChange=function(){q.isClusterFeature(this.selectedFeature)?(this.visible=this.browseClusterEnabled=!1,this.clear()):this.browseClusterEnabled&&(this.features=this.selectedFeature?[this.selectedFeature]:[])};g._locationChange=function(a){const {selectedFeature:b,updateLocationEnabled:c}=this;c&&a&&(!b||b.geometry)&&this.centerAtLocation()};
g._selectedFeatureIndexChange=function(){this.featurePage=1<this.featureCount?Math.floor(this.selectedFeatureIndex/this.featuresPerPage)+1:null};g._featureViewModelsChange=function(){this.featurePage=1<this.featureCount?1:null};g._setGraphicOnFeatureViewModels=function(){const {features:a,featureCount:b,featurePage:c,featuresPerPage:k,featureViewModels:l}=this;if(null!==c){var e=((c-1)*k+b)%b;l.slice(e,e+k).forEach((m,n)=>{m&&!m.graphic&&(m.graphic=a[e+n])})}};g._selectedFeatureChange=function(){var a=
t._asyncToGenerator(function*(b){const {location:c,updateLocationEnabled:k,view:l}=this;b&&l&&(this.browseClusterEnabled?(this._selectedClusterFeature&&(l.graphics.remove(this._selectedClusterFeature),this._selectedClusterFeature=null),q.isClusterFeature(b)||(b.symbol=yield N.getDisplayedSymbol(b),this._selectedClusterFeature=b,l.graphics.add(this._selectedClusterFeature))):!k&&c||!b.geometry?k&&!b.geometry&&this.centerAtLocation().then(()=>{const e=l.center?.clone();e&&(this.location=e)}):this.location=
G.unwrap(q.getPointFromGeometry(b.geometry)))});return function(b){return a.apply(this,arguments)}}();g._waitingForResultChange=function(){!this.featureCount&&this.promises&&(this.visible=!1)};g._setFetchFeaturesPromises=function(a){return this._fetchFeaturesWithController(this._getScreenPoint(a||this.location)).then(b=>{const {clientOnlyGraphics:c,promisesPerLayerView:k}=b;b=Promise.resolve(c);const l=k.map(e=>e.promise);this.promises=[b,...l]})};g._destroyFeatureVMs=function(){this.featureViewModels.forEach(a=>
a&&!a.destroyed&&a.destroy());this._set("featureViewModels",[])};g._updateFeatureVMs=function(){const {selectedFeature:a,features:b,featureViewModels:c}=this;q.isClusterFeature(a)||(this.browseClusterEnabled=!1);this._destroyFeatureVMs();if(b&&b.length){var k=c.slice(0),l=[];b.forEach((e,m)=>{if(e){var n=null;k.some((r,v)=>{r&&r.graphic===e&&(n=r,k.splice(v,1));return!!n});if(n)l[m]=n;else{const r=new P({abilities:this.featureViewModelAbilities,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,
spatialReference:this.view?.spatialReference,graphic:e===a?e:null,map:this.view?.map,view:this.view});l[m]=r}}});k.forEach(e=>e&&!e.destroyed&&e.destroy());this._set("featureViewModels",l)}};g._getScreenPoint=function(a){const {view:b}=this;return b&&a&&"function"===typeof b.toScreen?b.toScreen(a):null};g._autoOpenEnabledChange=function(){const {_handles:a,autoOpenEnabled:b}=this;a.remove("auto-fetch-features");if(b&&this.view){const c=this.view.on("click",k=>{"mouse"===k.pointerType&&0!==k.button||
this._fetchFeaturesAndOpen(k)},O.ViewEventPriorities.WIDGET);a.add(c,"auto-fetch-features")}};g._cancelFetchingFeatures=function(){const a=this._fetchFeaturesController;a&&a.abort();this._fetchFeaturesController=null;this.notifyChange("waitingForResult")};g._fetchFeaturesWithController=function(a,b){this._cancelFetchingFeatures();const c=new AbortController,{signal:k}=c;this._fetchFeaturesController=c;this.notifyChange("waitingForResult");a=this.fetchFeatures(a,{signal:k,event:b});a.catch(()=>{}).then(()=>
{this._fetchFeaturesController=null;this.notifyChange("waitingForResult")});return a};g._fetchFeaturesAndOpen=function(a){const {screenPoint:b,mapPoint:c}=a,{view:k}=this;this._fetchFeaturesWithController(b,a).then(l=>{const {clientOnlyGraphics:e,promisesPerLayerView:m,location:n}=l,r=[Promise.resolve(e),...m.map(v=>v.promise)];k?.popup?.open({location:n||c,promises:r});return l})};g._updatePendingPromises=function(a){a&&this._pendingPromises.has(a)&&(this._pendingPromises.delete(a),this.notifyChange("pendingPromisesCount"))};
g._autoClose=function(){this.autoCloseEnabled&&(this.visible=!1)};g._getLayerView=function(){var a=t._asyncToGenerator(function*(b,c){yield b.when();return b.whenLayerView(c)});return function(b,c){return a.apply(this,arguments)}}();g._getHighlightLayer=function(a){const {layer:b,sourceLayer:c}=a;return c&&"layer"in c&&c.layer?c.layer:"map-notes"===c?.type||"subtype-group"===c?.type?c:b};g._getHighlightTarget=function(a,b){b="imagery"===b.type?void 0:"objectIdField"in b?b.objectIdField||J.fallbackObjectIDAttribute:
null;const c=a.attributes;return c&&b&&c[b]||a};g._highlightActiveFeature=function(){var a=t._asyncToGenerator(function*(){this._handles.remove("highlight-active-feature");const {highlightEnabled:b,view:c,activeFeature:k,visible:l}=this;if(k&&c&&b&&l){var e=this._getHighlightLayer(k);if(e&&e instanceof A){var m=this._getLayerView(c,e);this._highlightActiveFeaturePromise=m;var n=yield m;n&&B.highlightsSupported(n)&&this._highlightActiveFeaturePromise===m&&this.activeFeature&&this.highlightEnabled&&
(e=n.highlight(this._getHighlightTarget(k,e)),this._handles.add(e,"highlight-active-feature"))}}});return function(){return a.apply(this,arguments)}}();g._highlightSelectedFeature=function(){var a=t._asyncToGenerator(function*(){this._handles.remove("highlight-selected-feature");const {selectedFeature:b,highlightEnabled:c,view:k,visible:l}=this;if(b&&k&&c&&l){var e=this._getHighlightLayer(b);if(e&&e instanceof A){var m=this._getLayerView(k,e);this._highlightSelectedFeaturePromise=m;var n=yield m;
n&&B.highlightsSupported(n)&&this._highlightSelectedFeaturePromise===m&&this.selectedFeature&&this.highlightEnabled&&this.visible&&(e=n.highlight(this._getHighlightTarget(b,e)),this._handles.add(e,"highlight-selected-feature"))}}});return function(){return a.apply(this,arguments)}}();g._updateFeatures=function(a){const {features:b}=this;a&&a.length&&(b.length?(a=a.filter(c=>!b.includes(c)),this.features=b.concat(a)):this.features=a)};t._createClass(x,[{key:"isLoadingFeature",get:function(){return this.featureViewModels.some(a=>
a.waitingForContent)}},{key:"active",get:function(){return!(!this.visible||this.waitingForResult)}},{key:"allActions",get:function(){const a=this._get("allActions")||new u;a.removeAll();const {actions:b,defaultActions:c,defaultPopupTemplateEnabled:k,includeDefaultActions:l,selectedFeature:e}=this;var m=l?c.concat(b):b;const n=e&&("function"===typeof e.getEffectivePopupTemplate&&e.getEffectivePopupTemplate(k)||e.popupTemplate),r=n&&n.actions;(m=n&&n.overwriteActions?r:r?r.concat(m):m)&&m.filter(Boolean).forEach(v=>
a.add(v));return a}},{key:"defaultActions",get:function(){const a=this._get("defaultActions")||new u;a.removeAll();a.addMany(q.isClusterFeature(this.selectedFeature)?[w.zoomToClusteredFeatures.clone(),w.browseClusteredFeatures.clone()]:[w.zoomToFeature.clone()]);return a}},{key:"featureCount",get:function(){return this.features.length}},{key:"features",get:function(){return this._get("features")||[]},set:function(a){a=a||[];this._set("features",a);const {pendingPromisesCount:b,promiseCount:c,selectedFeatureIndex:k}=
this,l=c&&a.length;l&&b&&-1===k?this.selectedFeatureIndex=0:l&&-1!==k||(this.selectedFeatureIndex=a.length?0:-1)}},{key:"location",get:function(){return this._get("location")||null},set:function(a){let b=a;const c=this.view?.spatialReference?.isWebMercator;a&&a?.spatialReference?.isWGS84&&c&&(b=I.geographicToWebMercator(a));this._set("location",b)}},{key:"pendingPromisesCount",get:function(){return this._pendingPromises.size}},{key:"waitingForResult",get:function(){return!(!(this._fetchFeaturesController||
0<this.pendingPromisesCount)||0!==this.featureCount)}},{key:"promiseCount",get:function(){return this.promises.length}},{key:"promises",get:function(){return this._get("promises")||[]},set:function(a){this._pendingPromises.clear();this.features=[];Array.isArray(a)&&a.length?(this._set("promises",a),a=a.slice(0),a.forEach(b=>{this._pendingPromises.add(b);b.then(c=>{this._pendingPromises.has(b)&&this._updateFeatures(c);this._updatePendingPromises(b)},()=>this._updatePendingPromises(b))})):this._set("promises",
[]);this.notifyChange("pendingPromisesCount")}},{key:"selectedFeature",get:function(){const {features:a,selectedFeatureIndex:b}=this;return-1===b?null:a[b]||null}},{key:"selectedFeatureIndex",get:function(){const a=this._get("selectedFeatureIndex");return"number"===typeof a?a:-1},set:function(a){const {featureCount:b}=this;a=isNaN(a)||-1>a||!b?-1:(a+b)%b;this.activeFeature=null;this._set("selectedFeatureIndex",a)}},{key:"selectedFeatureViewModel",get:function(){return this.featureViewModels[this.selectedFeatureIndex]||
null}},{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}}]);return x}(R.GoToMixin(Q));f.__decorate([h.property()],d.prototype,"featurePage",void 0);f.__decorate([h.property()],d.prototype,"isLoadingFeature",null);f.__decorate([h.property({type:u})],d.prototype,"actions",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"active",null);f.__decorate([h.property()],d.prototype,"activeFeature",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"allActions",
null);f.__decorate([h.property({type:Boolean})],d.prototype,"defaultPopupTemplateEnabled",void 0);f.__decorate([h.property()],d.prototype,"autoCloseEnabled",void 0);f.__decorate([h.property()],d.prototype,"autoOpenEnabled",void 0);f.__decorate([h.property()],d.prototype,"browseClusterEnabled",void 0);f.__decorate([h.property()],d.prototype,"content",void 0);f.__decorate([h.property({type:u,readOnly:!0})],d.prototype,"defaultActions",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"featureCount",
null);f.__decorate([h.property()],d.prototype,"features",null);f.__decorate([h.property()],d.prototype,"featuresPerPage",void 0);f.__decorate([h.property()],d.prototype,"featureViewModelAbilities",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"featureViewModels",void 0);f.__decorate([h.property()],d.prototype,"highlightEnabled",void 0);f.__decorate([h.property()],d.prototype,"includeDefaultActions",void 0);f.__decorate([h.property({type:T})],d.prototype,"location",null);f.__decorate([h.property({readOnly:!0})],
d.prototype,"pendingPromisesCount",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"selectedClusterBoundaryFeature",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"waitingForResult",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"promiseCount",null);f.__decorate([h.property()],d.prototype,"promises",null);f.__decorate([h.property({value:null,readOnly:!0})],d.prototype,"selectedFeature",null);f.__decorate([h.property({value:-1})],d.prototype,"selectedFeatureIndex",
null);f.__decorate([h.property({readOnly:!0})],d.prototype,"selectedFeatureViewModel",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"state",null);f.__decorate([h.property()],d.prototype,"title",void 0);f.__decorate([h.property()],d.prototype,"updateLocationEnabled",void 0);f.__decorate([h.property()],d.prototype,"view",void 0);f.__decorate([h.property()],d.prototype,"visible",void 0);f.__decorate([h.property()],d.prototype,"zoomFactor",void 0);f.__decorate([h.property()],d.prototype,
"zoomToLocation",void 0);f.__decorate([h.property()],d.prototype,"centerAtLocation",null);return d=f.__decorate([H.subclass("esri.widgets.Popup.PopupViewModel")],d)});