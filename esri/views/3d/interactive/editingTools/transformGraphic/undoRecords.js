// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe"],function(g,e){function h(a){let d=a.geometry,c=e.none;return{undo(b){c=b.geometry;b.geometry=d},redo(b){d=b.geometry;b.geometry=c}}}function k(a,d){let c=d.clone(),b=null;return{undo:f=>{b=e.isSome(a.transform)?a.transform.clone():null;a.transform=c;f.notifyGeometryChanged()},redo:f=>{c=e.isSome(a.transform)?a.transform.clone():null;a.transform=b;f.notifyGeometryChanged()}}}function l(a){let d=a.vertexAttributes.clonePositional(),c;return{undo:b=>{c=
a.vertexAttributes.clonePositional();a.vertexAttributes=d;b.notifyGeometryChanged()},redo:b=>{d=a.vertexAttributes.clonePositional();a.vertexAttributes=c;b.notifyGeometryChanged()}}}g.createGraphicGeometryUndoRecord=function(a){e.isSome(a.geometry)&&"mesh"===a.geometry.type?(a=a.geometry,a=e.isSome(a.transform)?k(a,a.transform):l(a)):a=h(a);return a};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});