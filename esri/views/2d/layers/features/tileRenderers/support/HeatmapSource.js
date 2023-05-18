// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../renderers/support/heatmapUtils"],function(a,c){let e=function(){function b(){this.gradient=null;this.height=512;this.intensities=null;this.width=512}b.prototype.render=function(d){c.drawHeatmap(d,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)};return b}();a.HeatmapSource=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});