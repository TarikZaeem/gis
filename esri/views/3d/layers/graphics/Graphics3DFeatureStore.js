// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/OptimizedGeometry ../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter".split(" "),
function(d,t,f,u,v,l,g,C,D,w,x,y,z,A,B,k){const n=y.create();d.Graphics3DFeatureStore=function(p){function m(h){var b=p.call(this,h)||this;b.events=new v;b.hasZ=null;b.hasM=null;b.objectIdField=null;b.featureAdapter={getAttribute(a,c){return"graphic"in a?a.graphic.attributes[c]:k.optimizedFeatureQueryEngineAdapter.getAttribute(a,c)},getAttributes(a){return"graphic"in a?a.graphic.attributes:k.optimizedFeatureQueryEngineAdapter.getAttributes(a)},getObjectId:a=>"graphic"in a?z.getObjectId(a.graphic,
b.objectIdField)??void 0:k.optimizedFeatureQueryEngineAdapter.getObjectId(a),getGeometry:a=>"graphic"in a?a.getAsOptimizedGeometry(b.hasZ,b.hasM):k.optimizedFeatureQueryEngineAdapter.getGeometry(a),getCentroid:(a,c)=>{if("graphic"in a){let e=null;l.isSome(a.centroid)?e=a.centroid:"point"===a.graphic.geometry.type&&x.projectPoint(a.graphic.geometry,q,b.viewSpatialReference)&&(e=q);a=Array(2+(c.hasZ?1:0)+(c.hasM?1:0));l.isNone(e)?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=e.x,a[1]=e.y,c.hasZ&&(a[2]=e.hasZ?
e.z:0),c.hasM&&(a[c.hasZ?3:2]=e.hasM?e.m:0));return new B([],a)}return k.optimizedFeatureQueryEngineAdapter.getCentroid(a,c)},cloneWithGeometry:(a,c)=>"graphic"in a?new A.OptimizedFeature(c,b.featureAdapter.getAttributes(a),null,b.featureAdapter.getObjectId(a)):k.optimizedFeatureQueryEngineAdapter.cloneWithGeometry(a,c)};return b}t._inheritsLoose(m,p);var r=m.prototype;r.forEachInBounds=function(h,b){this.getSpatialIndex().forEachInBounds(h,b)};r.forEachBounds=function(h,b){const a=this.getSpatialIndex();
for(const c of h)h=this.featureAdapter.getObjectId(c),l.isSome(a.getBounds(h,n))&&b(n)};return m}(u);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"getSpatialIndex",void 0);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"forEach",void 0);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"hasZ",void 0);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"hasM",void 0);f.__decorate([g.property({constructOnly:!0})],
d.Graphics3DFeatureStore.prototype,"objectIdField",void 0);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"viewSpatialReference",void 0);f.__decorate([g.property({constructOnly:!0})],d.Graphics3DFeatureStore.prototype,"featureSpatialReference",void 0);d.Graphics3DFeatureStore=f.__decorate([w.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],d.Graphics3DFeatureStore);const q={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});