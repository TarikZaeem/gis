// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ./BaseImageMeasureParameters".split(" "),function(k,c,p,q,g,b,r,t,l,d){var h;b=h=function(m){function e(){var a=m.apply(this,arguments)||this;a.type="point";a.geometry=null;a.is3D=!1;return a}
k._inheritsLoose(e,m);var n=e.prototype;n.writeGeometry=function(a,f,u){null!=a&&(f.geometryType=l.getJsonType(a),f[u]=a.toJSON())};n.clone=function(){return new h(q.clone({geometry:this.geometry,is3D:this.is3D,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster}))};k._createClass(e,[{key:"measureOperation",get:function(){const {is3D:a,geometry:f}=this;return"point"===f.type?a?"point-3D":"point":a?"centroid-3D":"centroid"}}]);return e}(d.BaseImageMeasureParameters);
c.__decorate([g.property({types:p.geometryTypes,json:{name:"fromGeometry",read:l.fromJSON}})],b.prototype,"geometry",void 0);c.__decorate([t.writer("geometry")],b.prototype,"writeGeometry",null);c.__decorate([g.property({type:d.measureOperationJSONMap.apiValues,json:{read:d.measureOperationJSONMap.read,write:d.measureOperationJSONMap.write}})],b.prototype,"measureOperation",null);c.__decorate([g.property({json:{read:!0}})],b.prototype,"is3D",void 0);return b=h=c.__decorate([r.subclass("esri.rest.support.ImagePointParameters")],
b)});