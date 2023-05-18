// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../LayerList/ListItem ../../LayerList/support/layerListUtils ./snappingLayerListUtils".split(" "),function(b,k,c,n,l,d,v,w,p,q,r,t){var g;b.SnappingListItem=g=function(h){function e(a){a=h.call(this,a)||
this;a.children=new n;a.parent=null;return a}k._inheritsLoose(e,h);var m=e.prototype;m._initializeChildLayers=function(a){a&&(a=a.filter(t.isValidSnappingLayer),h.prototype._initializeChildLayers.call(this,a))};m._makeChildren=function(a){return a.map(f=>r.canDisplayLayer(f)?new g({layer:f,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null).filter(l.isSome).reverse()};k._createClass(e,[{key:"enabled",get:function(){return l.isSome(this.featureSource)?this.featureSource.enabled:
!1}},{key:"featureSource",get:function(){const {layer:a,getFeatureSnappingSources:f}=this;return f().find(u=>u.layer===a)}}]);return e}(q);c.__decorate([d.property()],b.SnappingListItem.prototype,"children",void 0);c.__decorate([d.property()],b.SnappingListItem.prototype,"enabled",null);c.__decorate([d.property({constructOnly:!0})],b.SnappingListItem.prototype,"getFeatureSnappingSources",void 0);c.__decorate([d.property()],b.SnappingListItem.prototype,"featureSource",null);c.__decorate([d.property()],
b.SnappingListItem.prototype,"parent",void 0);b.SnappingListItem=g=c.__decorate([p.subclass("esri.widgets.support.SnappingControls.SnappingListItem")],b.SnappingListItem);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});