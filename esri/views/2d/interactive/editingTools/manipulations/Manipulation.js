// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(c,f){let h=function(){function a(){}var e=a.prototype;e.hasManipulator=function(b){return this.someManipulator(d=>d===b)};e.someManipulator=function(b){let d=!1;this.forEachManipulator(g=>{!d&&b(g)&&(d=!0)});return d};f._createClass(a,[{key:"hovering",get:function(){return this.someManipulator(b=>b.hovering)}},{key:"grabbing",get:function(){return this.someManipulator(b=>b.grabbing)}},{key:"dragging",get:function(){return this.someManipulator(b=>
b.dragging)}}]);return a}();c.ManipulatorType=void 0;(function(a){a[a.TRANSLATE_XY=0]="TRANSLATE_XY";a[a.SCALE=1]="SCALE";a[a.ROTATE=2]="ROTATE"})(c.ManipulatorType||(c.ManipulatorType={}));c.Manipulation=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});