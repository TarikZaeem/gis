// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers"],function(y,f,h){function t(){return k.apply(this,arguments)}function k(){k=h._asyncToGenerator(function*(){return new Promise((c,a)=>y(["../../../geometry/geometryEngineJSON"],c,a))});return k.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){l=h._asyncToGenerator(function*(){return t().then(({contains:c,intersects:a,overlaps:d,simplify:b})=>({contains:c,intersects:a,overlaps:d,simplify:b}))});return l.apply(this,
arguments)}function m(){m=h._asyncToGenerator(function*(c){const {selector:a,candidates:d,currentSelection:b,options:v,view:w}=c;if(!(d&&d.length&&b&&w&&v))return{added:[],removed:[]};const {overlaps:z,intersects:A,contains:B}=v,{spatialReference:n}=w;if(!a)return{added:[],removed:b.removeAll()};const p=yield u(),q=[],r=[];d.forEach(g=>{var e=g.geometry;const C=z&&!!p.overlaps(n,a,e),D=A&&!!p.intersects(n,a,e);e=B&&!!p.contains(n,a,e);const x=b.includes(g);C||D||e?!x&&q.push(g):x&&r.push(g)});b.removeMany(r);
b.addMany(q);return{added:q,removed:r}});return m.apply(this,arguments)}f.getGeometryEngineOperations=u;f.importGeometryEngine=t;f.updateSelection=function(c){return m.apply(this,arguments)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});