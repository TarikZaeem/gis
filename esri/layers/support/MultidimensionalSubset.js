// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/Polygon ../../geometry/support/jsonUtils ./DimensionalDefinition ../../geometry/Geometry".split(" "),function(m,f,n,e,g,x,y,q,r,t,u,v,w){var k;n={base:w,key:"type",typeMap:{extent:r,polygon:t}};e=k=function(p){function h(b){b=
p.call(this,b)||this;b.areaOfInterest=null;b.subsetDefinitions=null;return b}m._inheritsLoose(h,p);h.prototype.clone=function(){const b=this.subsetDefinitions?.map(a=>a.clone()),c=this.areaOfInterest?this.areaOfInterest.clone():this.areaOfInterest;return new k({areaOfInterest:c,subsetDefinitions:b})};m._createClass(h,[{key:"dimensions",get:function(){var {subsetDefinitions:b}=this;if(null==b||0===b.length)return[];const c=new Map;b.forEach(a=>{if(a.dimensionName){if(Array.isArray(a.values[0])){var d=
a.values;var l=d[0][0];d=d[a.values.length-1][1]}else d=a.values,l=d[0],d=d[a.values.length-1];c.has(a.dimensionName)?(a=c.get(a.dimensionName),a[0]=Math.min(l,a[0]),a[1]=Math.max(d,a[1])):c.set(a.dimensionName,[l,d])}});b=[];for(const a of c)b.push({name:a[0],extent:a[1]});return b}},{key:"variables",get:function(){const {subsetDefinitions:b}=this;if(null==b||0===b.length)return[];const c=new Set;b.forEach(a=>{a.variableName&&c.add(a.variableName)});return[...c]}}]);return h}(e.JSONSupport);f.__decorate([g.property({types:n,
json:{read:u.fromJSON,write:!0}})],e.prototype,"areaOfInterest",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"dimensions",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"variables",null);f.__decorate([g.property({type:[v],json:{write:!0}})],e.prototype,"subsetDefinitions",void 0);return e=k=f.__decorate([q.subclass("esri.layers.support.MultidimensionalSubset")],e)});