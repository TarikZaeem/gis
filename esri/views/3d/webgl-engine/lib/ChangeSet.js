// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/PooledArray"],function(a,g,c){let h=function(){function d(){this.adds=new c;this.removes=new c;this.updates=new c({allocator:b=>b||new e,deallocator:b=>{b.renderGeometry=null;return b}})}var f=d.prototype;f.clear=function(){this.adds.clear();this.removes.clear();this.updates.clear()};f.prune=function(){this.adds.prune();this.removes.prune();this.updates.prune()};g._createClass(d,[{key:"empty",get:function(){return 0===
this.adds.length&&0===this.removes.length&&0===this.updates.length}}]);return d}(),e=function(){};a.ChangeSet=h;a.MaterialChangeSet=function(){this.adds=[];this.removes=[];this.updates=[]};a.RenderGeometryUpdate=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});