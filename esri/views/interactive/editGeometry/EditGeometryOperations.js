// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Evented ../../../core/maybe ./EditGeometry ./interfaces ./operations/AppendVertex ./operations/UpdateVertices ./operations/RemoveVertices ./operations/SplitEdge ./operations/SetVertexPosition ./operations/CloseComponent ./operations/MoveVertex ./operations/OffsetEdgeVertex ./operations/RotateVertex ./operations/ScaleVertex ./operations/UndoGroup".split(" "),function(m,n,k,q,r,e,t,l,u,v,w,x,y,z,A,B,C){k=function(p){function g(a){var b=
p.call(this)||this;b.data=a;b._undoStack=[];b._redoStack=[];b._listener=b.data.on("change",c=>{c.addedVertices&&b.emit("vertex-add",{type:"vertex-add",vertices:c.addedVertices,operation:c.operation});c.removedVertices&&b.emit("vertex-remove",{type:"vertex-remove",vertices:c.removedVertices,operation:c.operation});c.updatedVertices&&b.emit("vertex-update",{type:"vertex-update",vertices:c.updatedVertices,operation:c.operation})});return b}n._inheritsLoose(g,p);var d=g.prototype;d.destroy=function(){this._listener.remove()};
d.splitEdge=function(a,b){return this._apply(new v.SplitEdge(this.data,a,b))};d.updateVertices=function(a,b,c=e.AccumulationBehaviour.ACCUMULATE_STEPS){return this._apply(new l.UpdateVertices(this.data,a,b),c)};d.moveVertices=function(a,b,c,f,h=e.AccumulationBehaviour.ACCUMULATE_STEPS){return this.updateVertices(a,new y.MoveVertex(this.data.coordinateHelper,b,c,f),h)};d.scaleVertices=function(a,b,c,f,h,D=e.AccumulationBehaviour.ACCUMULATE_STEPS,E=l.AccumulationType.CUMULATIVE){return this.updateVertices(a,
new B.ScaleVertex(b,c,f,h,E),D)};d.rotateVertices=function(a,b,c,f=e.AccumulationBehaviour.ACCUMULATE_STEPS,h=l.AccumulationType.CUMULATIVE){return this.updateVertices(a,new A.RotateVertex(b,c,h),f)};d.removeVertices=function(a){return this._apply(new u.RemoveVertices(this.data,a,this._minNumVerticesPerType))};d.appendVertex=function(a){return 0===this.data.components.length?null:this._apply(new t.AppendVertex(this.data,this.data.components[0],a))};d.setVertexPosition=function(a,b){return this._apply(new w.SetVertexPosition(this.data,
a,b))};d.offsetEdge=function(a,b,c,f=e.AccumulationBehaviour.ACCUMULATE_STEPS){return this.updateVertices([b.leftVertex,b.rightVertex],new z.OffsetEdgeVertex(this.data.coordinateHelper,a,b,c),f)};d.closeComponent=function(a){return this.data.components.includes(a)?this._apply(new x.CloseComponent(this.data,a)):null};d.canRemoveVertex=function(){return this.data.components[0].vertices.length>this._minNumVerticesPerType};d.createUndoGroup=function(){const a=new C.UndoGroup;this._apply(a);return{remove(){return a.close()}}};
d.undo=function(){if(0<this._undoStack.length){const a=this._undoStack.pop();a.undo();this._redoStack.push(a);return a}return null};d.redo=function(){if(0<this._redoStack.length){const a=this._redoStack.pop();a.apply();this._undoStack.push(a);return a}return null};d._apply=function(a,b=e.AccumulationBehaviour.ACCUMULATE_STEPS){if(b===e.AccumulationBehaviour.NEW_STEP||q.isNone(this.lastOperation)||!this.lastOperation.accumulate(a))a.apply(),this._undoStack.push(a),this._redoStack=[];return a};g.fromGeometry=
function(a,b){return new g(r.EditGeometry.fromGeometry(a,b))};n._createClass(g,[{key:"canUndo",get:function(){return 0<this._undoStack.length}},{key:"canRedo",get:function(){return 0<this._redoStack.length}},{key:"lastOperation",get:function(){return 0<this._undoStack.length?this._undoStack[this._undoStack.length-1]:null}},{key:"_minNumVerticesPerType",get:function(){switch(this.data.type){case "point":return 1;case "polyline":return 2;case "polygon":return 3;default:return 0}}}]);return g}(k);m.EditGeometryOperations=
k;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});