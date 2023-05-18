// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){let g=function(){function c(a,b,f){this._editGeometry=a;this._vertices=b;this.operation=f;this._undone=!1}var e=c.prototype;e.apply=function(){this._vertices.forEach(a=>this.operation.apply(a));this._editGeometry.components.forEach(a=>a.unnormalizeVertexPositions());this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})};e.undo=function(){this._vertices.forEach(a=>this.operation.undo(a));this._editGeometry.notifyChanges({operation:"undo",
updatedVertices:this._vertices});this._undone=!0};e.canAccumulate=function(a){if(this._undone||a._vertices.length!==this._vertices.length)return!1;for(let b=0;b<a._vertices.length;++b)if(a._vertices[b]!==this._vertices[b])return!1;return this.operation.canAccumulate(a.operation)};e.accumulate=function(a){return a instanceof c&&this.canAccumulate(a)?(this._vertices.forEach(b=>this.operation.accumulate(b,a.operation)),this.operation.accumulateParams(a.operation),this._editGeometry.components.forEach(b=>
b.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0):!1};return c}();d.AccumulationType=void 0;(function(c){c[c.CUMULATIVE=0]="CUMULATIVE";c[c.REPLACE=1]="REPLACE"})(d.AccumulationType||(d.AccumulationType={}));d.UpdateVertices=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});