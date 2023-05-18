// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../support/TileTreeDebugger ../../../../geometry/Polygon".split(" "),
function(l,u,m,B,n,r,C,D,v,w,x,c,y,k,z,A){l.I3STreeDebugger=function(t){function p(q){return t.call(this,q)||this}u._inheritsLoose(p,t);p.prototype.getTiles=function(){const q=this.lv.getVisibleNodes(),g=this.view.renderSpatialReference,h=this.nodeSR;return q.map(d=>{{const f=d.serviceObb;if(n.isNone(f)||n.isNone(g))d=null;else{w.fromQuat(e,f.quaternion);c.copy(a,f.center);k.projectBuffer(a,h,0,a,g,0,1);e[12]=a[0];e[13]=a[1];e[14]=a[2];var b=[[],[],[]];c.copy(a,f.halfSize);c.transformMat4(a,a,e);
k.projectBuffer(a,g,0,a,h,0,1);b[0].push([a[0],a[1]]);c.copy(a,f.halfSize);a[0]=-a[0];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0,1);b[0].push([a[0],a[1]]);c.copy(a,f.halfSize);a[0]=-a[0];a[1]=-a[1];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0,1);b[0].push([a[0],a[1]]);c.copy(a,f.halfSize);a[1]=-a[1];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0,1);b[0].push([a[0],a[1]]);b[1].push(b[0][0]);b[1].push(b[0][1]);c.copy(a,f.halfSize);a[0]=-a[0];a[2]=-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,
g,0,a,h,0,1);b[1].push([a[0],a[1]]);c.copy(a,f.halfSize);a[2]=-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0,1);b[1].push([a[0],a[1]]);b[2].push(b[0][0]);b[2].push(b[0][3]);c.copy(a,f.halfSize);a[1]=-a[1];a[2]=-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0,1);b[2].push([a[0],a[1]]);b[2].push(b[1][3]);b=new A({rings:b,spatialReference:h});d={lij:[d.level,d.childCount,0],label:d.id,geometry:b}}}return d}).filter(n.isSome).sort((d,b)=>d.lij[0]===b.lij[0]?d.label>b.label?-1:1:d.lij[0]-
b.lij[0])};return p}(z.TileTreeDebugger);m.__decorate([r.property({constructOnly:!0})],l.I3STreeDebugger.prototype,"lv",void 0);m.__decorate([r.property({constructOnly:!0})],l.I3STreeDebugger.prototype,"nodeSR",void 0);l.I3STreeDebugger=m.__decorate([v.subclass("esri.views.3d.layers.support.I3STreeDebugger")],l.I3STreeDebugger);const e=x.create(),a=y.create();Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});