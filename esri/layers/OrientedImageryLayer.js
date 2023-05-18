// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./FeatureLayer".split(" "),function(g,b,h,c,a,m,k,l){a=function(e){function f(d){d=e.call(this,d)||this;d.geometryType="point";d.type="oriented-imagery";d.operationalLayerType="OrientedImageryLayer";return d}g._inheritsLoose(f,e);f.prototype._verifySource=function(){e.prototype._verifySource.call(this);
if("point"!==this.geometryType)throw new h("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type");};return f}(l);b.__decorate([c.property()],a.prototype,"cameraProperties",void 0);b.__decorate([c.property()],a.prototype,"coverage",void 0);b.__decorate([c.property()],a.prototype,"coveragePercent",void 0);b.__decorate([c.property()],a.prototype,"defaultSearchLocation",void 0);b.__decorate([c.property()],a.prototype,"depthImage",void 0);b.__decorate([c.property()],
a.prototype,"digitalElevationModel",void 0);b.__decorate([c.property()],a.prototype,"geometryType",void 0);b.__decorate([c.property()],a.prototype,"imageProperties",void 0);b.__decorate([c.property()],a.prototype,"maximumDistance",void 0);b.__decorate([c.property({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({type:["OrientedImageryLayer"]})],a.prototype,"operationalLayerType",void 0);return a=b.__decorate([k.subclass("esri.layers.OrientedImageryLayer")],
a)});