// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/screenUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3f64 ../../interactive/SegmentLabels ../../interactive/support/viewUtils".split(" "),function(a,k,l,m,v,w,x,y,z,n,p,q,r){a.SegmentLabels3D=function(e){function c(){return e.apply(this,arguments)||this}
k._inheritsLoose(c,e);var f=c.prototype;f.getCameraOrExtent=function({view:b}){return b.state.camera};f.toScreenPointArray=function({view:b,elevationInfo:t,editGeometryOperations:d},u,g=m.createScreenPointArray()){({spatialReference:d}=d.data.coordinateHelper);r.vectorToRender(u,d,t,b,h);b.state.camera.projectToScreen(h,g);return g};return c}(q.SegmentLabels);a.SegmentLabels3D=l.__decorate([n.subclass("esri.views.3d.interactive.SegmentLabels3D")],a.SegmentLabels3D);const h=p.create();Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});