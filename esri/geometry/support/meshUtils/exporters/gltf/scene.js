// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){let e=function(){function c(){this.name="";this._nodes=[]}var d=c.prototype;d.addNode=function(a){if(this._nodes.includes(a))throw Error("Node already added");this._nodes.push(a)};d.forEachNode=function(a){this._nodes.forEach(a)};return c}();b.Scene=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});