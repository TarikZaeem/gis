// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error"],function(d,g){function h(a){return b.apply(this,arguments)}function b(){b=d._asyncToGenerator(function*(a){if(!a.view)throw new g("bin-level:missing-parameters","'view' parameter is required");yield a.view.when();return{...a}});return b.apply(this,arguments)}function c(){c=d._asyncToGenerator(function*(a){({view:a}=yield h(a));let e=2;for(const f of k)if(!(f.scale<a.scale)){e=f.level;break}return e});return c.apply(this,arguments)}
const k=[{scale:565,level:9},{scale:9028,level:8},{scale:72224,level:7},{scale:288896,level:6},{scale:2311163,level:5},{scale:18489298,level:4},{scale:73957191,level:3},{scale:295828764,level:2}];return function(a){return c.apply(this,arguments)}});