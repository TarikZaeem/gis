// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(d,f){d.addUniqueLayer=function(b,c,a){if(c&&b&&b.map){({map:b}=b);var e=b.layers.find(g=>g===c);e||b.add(c,a);e&&void 0!==a&&null!==a&&b.layers.reorder(e,a)}};d.findLayerView=function(b,c){return b.allLayerViews.find(a=>{a=a.layer;return a===c||"sublayers"in a&&f.isSome(a.sublayers)&&a.sublayers.includes(c)})};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});