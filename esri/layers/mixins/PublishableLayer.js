// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../support/PublishingInfo".split(" "),function(f,g,k,r,x,y,t,u){const l=Symbol("esri.layers.mixins.PublishableLayer");f.PublishableLayer=b=>{b=function(m){function d(){var a=m.apply(this,arguments)||this;a[v]=!0;return a}g._inheritsLoose(d,m);d.prototype._checkPublishingStatus=
function(a){var n=this;let p=0;const q=function(){var w=g._asyncToGenerator(function*(h){a.updating=!0;let c;try{c=yield n.fetchPublishingStatus()}catch(z){c="unavailable"}if("published"===c||"unavailable"===c)"publishing"===a.status&&n.refresh(),e.remove();a.status=c;a.updating=!1;e.removed||(p=setTimeout(q,h,h+125))});return function(h){return w.apply(this,arguments)}}(),e={removed:!1,remove(){this.removed=!0;clearTimeout(p)}};this.when().catch(()=>e.remove());q(250);this.own(e)};g._createClass(d,
[{key:"publishingInfo",get:function(){if(this.destroyed)return null;var a=this._get("publishingInfo");if(a)return a;a=new u;this._checkPublishingStatus(a);return a}}]);return d}(b);var v=l;k.__decorate([r.property({readOnly:!0,clonable:!1})],b.prototype,"publishingInfo",null);return b=k.__decorate([t.subclass("esri.layers.mixins.PublishableLayer")],b)};f.isPublishableLayer=function(b){return null!=b&&"object"===typeof b&&l in b};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});