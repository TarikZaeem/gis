// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./ZoomConditions2D ./ZoomConditions3D".split(" "),function(g,c,b,h,k,d,q,r,m,n,p){b=function(l){function e(a){return l.call(this,a)||this}g._inheritsLoose(e,l);var f=e.prototype;f.destroy=function(){this.view=null};f.zoomIn=
function(){if(this.canZoomIn){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomIn():k.ignoreAbortErrors(a.goTo({zoomFactor:2}))}};f.zoomOut=function(){if(this.canZoomOut){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomOut():k.ignoreAbortErrors(a.goTo({zoomFactor:.5}))}};g._createClass(e,[{key:"canZoomIn",get:function(){return h.isSome(this._zoomConditions)&&this._zoomConditions.canZoomIn}},{key:"canZoomOut",get:function(){return h.isSome(this._zoomConditions)&&this._zoomConditions?.canZoomOut}},
{key:"state",get:function(){return this.view?.ready?"ready":"disabled"}},{key:"view",set:function(a){a?"2d"===a.type?this._zoomConditions=new n({view:a}):"3d"===a.type&&(this._zoomConditions=new p({view:a})):this._zoomConditions=null;this._set("view",a)}}]);return e}(b);c.__decorate([d.property()],b.prototype,"_zoomConditions",void 0);c.__decorate([d.property()],b.prototype,"canZoomIn",null);c.__decorate([d.property()],b.prototype,"canZoomOut",null);c.__decorate([d.property({readOnly:!0})],b.prototype,
"state",null);c.__decorate([d.property()],b.prototype,"view",null);return b=c.__decorate([m.subclass("esri.widgets.Zoom.ZoomViewModel")],b)});