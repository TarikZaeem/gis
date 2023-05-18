// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ./Zoom/IconButton ./Zoom/ZoomViewModel".split(" "),function(h,c,k,d,b,x,p,q,y,r,t,l,m){b=function(n){function f(a,g){a=n.call(this,a,g)||this;a.iconClass="esri-icon-zoom-in-magnifying-glass";a.messages=
null;a.viewModel=new m;return a}h._inheritsLoose(f,n);var e=f.prototype;e.initialize=function(){this._zoomInButton=new l({action:this.zoomIn.bind(this),iconClass:"esri-icon-plus"});this._zoomOutButton=new l({action:this.zoomOut.bind(this),iconClass:"esri-icon-minus"})};e.destroy=function(){this._zoomInButton=k.destroyMaybe(this._zoomInButton);this._zoomOutButton=k.destroyMaybe(this._zoomOutButton)};e.render=function(){const a={["esri-zoom--horizontal"]:"horizontal"===this.layout},{canZoomIn:g,canZoomOut:u}=
this.viewModel;this._zoomInButton.enabled=g;this._zoomOutButton.enabled=u;const {zoomIn:v,zoomOut:w}=this.messages;this._zoomInButton.title=v;this._zoomOutButton.title=w;return t.tsx("div",{class:this.classes("esri-zoom esri-widget",a)},this._zoomInButton.render(),this._zoomOutButton.render())};e.zoomIn=function(){return this.viewModel.zoomIn()};e.zoomOut=function(){return this.viewModel.zoomOut()};h._createClass(f,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",
a)}},{key:"layout",set:function(a){"horizontal"!==a&&(a="vertical");this._set("layout",a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return f}(q);c.__decorate([d.property()],b.prototype,"iconClass",void 0);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property({value:"vertical"})],b.prototype,"layout",null);c.__decorate([d.property(),r.messageBundle("esri/widgets/Zoom/t9n/Zoom")],b.prototype,"messages",void 0);c.__decorate([d.property()],
b.prototype,"view",null);c.__decorate([d.property({type:m})],b.prototype,"viewModel",void 0);return b=c.__decorate([p.subclass("esri.widgets.Zoom")],b)});