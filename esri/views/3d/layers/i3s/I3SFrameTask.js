// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../support/Scheduler".split(" "),function(m,n,p,q,r,t,x,u,v){let k=function(c){function d(){var a=c.call(this)||this;a.referenceCount=0;a.callbacks=[];a.runIndex=0;return a}n._inheritsLoose(d,c);var b=
d.prototype;b.runTask=function(a){this._sort();const g=this.callbacks,h={numIndexLoading:0,numNodesLoading:0};for(let e=0;e<g.length&&!a.done;++e)g[e].priority=g[e].runTask(a,h),this.runIndex=e};b._sort=function(){const a=this.callbacks;let g=a.length;for(let h=this.runIndex;0<h;h--){const e=a[h-1];let f=h;for(;f<a.length&&e.priority<=a[f].priority&&(f!==g||e.priority<a[f].priority);)a[f-1]=a[f],f++;a[f-1]=e;g=f-1}this.runIndex=0};b.add=function(a){this._sort();a.priority=Infinity;this.callbacks.unshift(a);
this.notifyChange("running")};b.remove=function(a){r.removeUnordered(this.callbacks,a);this.runIndex=this.callbacks.length;this._sort();this.notifyChange("running")};n._createClass(d,[{key:"running",get:function(){return this.callbacks.some(a=>a.running)}}]);return d}(q);p.__decorate([t.property({readOnly:!0})],k.prototype,"running",null);k=p.__decorate([u.subclass("esri.views.3d.layers.i3s.I3SFrameTask")],k);let w=function(c,d){this.task=c;this.handle=d};const l=new Map;m.addCallback=function(c,
d){let b=l.get(c);if(null==b){const a=new k,g=c.registerTask(v.TaskPriority.I3S_CONTROLLER,a);b=new w(a,g);l.set(c,b)}b.task.add(d);return{remove:()=>{null!=b&&(b.task.remove(d),0<b.task.callbacks.length||(l.delete(c),b.handle.remove(),b.task.destroy()),b=null)}}};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});