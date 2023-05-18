// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/WMSLayerView".split(" "),
function(r,k,B,C,D,E,t,e,N,F,G,u,H,I,J,K,L){e=function(v){function l(){var a=v.apply(this,arguments)||this;a.bitmapContainer=new u.BitmapContainer;return a}r._inheritsLoose(l,v);var b=l.prototype;b.supportsSpatialReference=function(a){return this.layer.serviceSupportsSpatialReference(a)};b.update=function(a){this.strategy.update(a).catch(c=>{D.isAbortError(c)||B.getLogger(this.declaredClass).error(c)})};b.attach=function(){const {layer:a}=this,{imageMaxHeight:c,imageMaxWidth:f}=a;this.bitmapContainer=
new u.BitmapContainer;this.container.addChild(this.bitmapContainer);this.strategy=new I({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:c,imageMaxWidth:f,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1});this.addAttachHandles(E.watch(()=>this.exportImageVersion,()=>this.requestUpdate()))};b.detach=function(){this.strategy=C.destroyMaybe(this.strategy);this.container.removeAllChildren()};b.moveStart=
function(){};b.viewChange=function(){};b.moveEnd=function(){this.requestUpdate()};b.createFetchPopupFeaturesQuery=function(a){const {view:c,bitmapContainer:f}=this,{x:g,y:m}=a,{spatialReference:M}=c;let d,n=0,w=0;f.children.some(h=>{const {width:x,height:y,resolution:z,x:p,y:q}=h;h=p+z*x;const A=q-z*y;return g>=p&&g<=h&&m<=q&&m>=A?(d=new G({xmin:p,ymin:A,xmax:h,ymax:q,spatialReference:M}),n=x,w=y,!0):!1});if(!d)return null;a=d.width/n;return{extent:d,width:n,height:w,x:Math.round((g-d.xmin)/a),y:Math.round((d.ymax-
m)/a)}};b.doRefresh=function(){var a=r._asyncToGenerator(function*(){this.requestUpdate()});return function(){return a.apply(this,arguments)}}();b.isUpdating=function(){return this.strategy.updating||this.updateRequested};b.fetchImage=function(a,c,f,g){return this.layer.fetchImageBitmap(a,c,f,{timeExtent:this.timeExtent,...g})};return l}(L(K(H.LayerView2DMixin(J))));k.__decorate([t.property()],e.prototype,"strategy",void 0);k.__decorate([t.property()],e.prototype,"updating",void 0);return e=k.__decorate([F.subclass("esri.views.2d.layers.WMSLayerView2D")],
e)});