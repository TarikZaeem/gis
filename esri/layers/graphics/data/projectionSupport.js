// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../geometry/projection ../../../geometry/geometryAdapters/json ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils".split(" "),function(k,q,r,m,t,g,l){function u(c,a){if(!a)return null;if("x"in a){var b={x:0,y:0};[b.x,b.y]=c(a.x,a.y,n);null!=a.z&&(b.z=a.z);null!=a.m&&(b.m=a.m);return b}return"xmin"in a?(b={xmin:0,ymin:0,xmax:0,ymax:0},[b.xmin,b.ymin]=c(a.xmin,a.ymin,n),[b.xmax,
b.ymax]=c(a.xmax,a.ymax,n),a.hasZ&&(b.zmin=a.zmin,b.zmax=a.zmax,b.hasZ=!0),a.hasM&&(b.mmin=a.mmin,b.mmax=a.mmax,b.hasM=!0),b):"rings"in a?{rings:v(a.rings,c),hasM:a.hasM,hasZ:a.hasZ}:"paths"in a?{paths:v(a.paths,c),hasM:a.hasM,hasZ:a.hasZ}:"points"in a?{points:w(a.points,c),hasM:a.hasM,hasZ:a.hasZ}:null}function v(c,a){const b=[];for(const d of c)b.push(w(d,a));return b}function w(c,a){const b=[];for(const d of c)c=a(d[0],d[1],[0,0]),b.push(c),2<d.length&&c.push(d[2]),3<d.length&&c.push(d[3]);return b}
function p(){p=q._asyncToGenerator(function*(c,a){c&&a&&(c=Array.isArray(c)?c.map(b=>r.isSome(b.geometry)?b.geometry.spatialReference:null).filter(r.isSome):[c],yield m.initializeProjection(c.map(b=>({source:b,dest:a}))))});return p.apply(this,arguments)}const n=[0,0],x=u.bind(null,l.lngLatToXY),y=u.bind(null,l.xyToLngLat),A=new (function(){function c(){this._jobs=[];this._timer=null;this._process=this._process.bind(this)}var a=c.prototype;a.push=function(){var b=q._asyncToGenerator(function*(d,f,
e){if(!(d&&d.length&&f&&e)||g.equals(f,e))return d;const h={geometries:d,inSpatialReference:f,outSpatialReference:e,resolve:null};this._jobs.push(h);return new Promise(z=>{h.resolve=z;null===this._timer&&(this._timer=setTimeout(this._process,10))})});return function(d,f,e){return b.apply(this,arguments)}}();a._process=function(){this._timer=null;const b=this._jobs.shift();if(b){var {geometries:d,inSpatialReference:f,outSpatialReference:e,resolve:h}=b;l.canProject(f,e)?g.isWebMercator(e)?h(d.map(x)):
h(d.map(y)):h(m.projectMany(t.jsonAdapter,d,f,e,null,null));0<this._jobs.length&&(this._timer=setTimeout(this._process,10))}};return c}());k.checkProjectionSupport=function(c,a){return p.apply(this,arguments)};k.project=function(c,a,b,d){if(!c)return c;b||(b=a,a=c.spatialReference);return g.isValid(a)&&g.isValid(b)&&!g.equals(a,b)?l.canProject(a,b)?(c=g.isWebMercator(b)?x(c):y(c),c.spatialReference=b,c):m.projectMany(t.jsonAdapter,[c],a,b,null,d)[0]:c};k.projectMany=function(c,a,b){return A.push(c,
a,b)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});