// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/HandleOwner ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/decorators/subclass".split(" "),function(e,b,a,c,l,m,k){a=function(f){function d(){return f.apply(this,arguments)||this}e._inheritsLoose(d,f);var g=d.prototype;g.initialize=function(){};g.destroy=function(){};e._createClass(d,
[{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){const h=this.get("tileStore.tileScheme.spatialReference");return h&&h.toJSON()||null}}]);return d}(a.HandleOwner);b.__decorate([c.property({readOnly:!0})],a.prototype,"supportsTileUpdates",null);b.__decorate([c.property({constructOnly:!0})],a.prototype,"remoteClient",void 0);b.__decorate([c.property({constructOnly:!0})],a.prototype,"service",void 0);b.__decorate([c.property()],a.prototype,"spatialReference",
null);b.__decorate([c.property({constructOnly:!0})],a.prototype,"tileInfo",void 0);b.__decorate([c.property({constructOnly:!0})],a.prototype,"tileStore",void 0);return a=b.__decorate([k.subclass("esri.views.2d.layers.features.processors.BaseProcessor")],a)});