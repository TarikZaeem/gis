// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/asyncUtils ../../../core/Collection ../../../core/Error ../../../core/HandleOwner ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/scheduling ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/subclass".split(" "),function(n,r,p,z,A,B,g,C,h,k,D,t,E){function x(){const e=k.createResolver();e.promise.catch(()=>{});return e}const q=
e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));var m;(function(e){e[e.PENDING=0]="PENDING";e[e.CREATED=1]="CREATED"})(m||(m={}));var l;(function(e){e[e.ADDED=0]="ADDED";e[e.REMOVED=1]="REMOVED"})(l||(l={}));g=function(e){function u(a){a=e.call(this,a)||this;a._allAnalysisViews=new A;a._creatingViewCount=0;a._items=new Map;a._scheduledUpdateHandle=null;a._attachedToViewResolver=x();a._analysisModules={"area-measurement":{module:null},dimension:{module:null},
"direct-line-measurement":{module:null},"line-of-sight":{module:null},slice:{module:null}};return a}r._inheritsLoose(u,e);var f=u.prototype;f.destroy=function(){this._disconnectOwners();this._attachedToViewResolver.reject(k.createAbortError("AnalysisViewManager was destroyed"))};f.attach=function(){this._connectOwners();this._attachedToViewResolver.resolve()};f.detach=function(){this._disconnectOwners();this._attachedToViewResolver.reject(k.createAbortError());this._attachedToViewResolver=x()};f.whenAnalysisView=
function(){var a=r._asyncToGenerator(function*(c){yield this._attachedToViewResolver.promise;const d=this._items.get(c);if(h.isNone(d)||d.state.list===l.REMOVED)throw new B("AnalysisViewManager:no-analysisview-for-analysis","The analysis has not been added to view.analyses",{analysis:c});return d.createAnalysisViewTask.promise});return function(c){return a.apply(this,arguments)}}();f._connectOwners=function(){this.handles.add(this._connectAnalysesCollection(this.view.analyses),"analyses-owner-handles")};
f._disconnectOwners=function(){this.handles.remove("analyses-owner-handles");this._update();this._creatingViewCount=0};f._connectAnalysesCollection=function(a){for(const b of a)this._addAnalysis(b);const c=a.on("after-add",b=>this._addAnalysis(b.item)),d=a.on("after-remove",b=>this._removeAnalysis(b.item));return{remove:()=>{c.remove();d.remove();for(const b of a)this._removeAnalysis(b)}}};f._addAnalysis=function(a){const c=this._items.get(a);if(null==c){const d={state:{view:m.PENDING,list:l.ADDED},
analysis:a,view:null,createAnalysisViewTask:null};this._items.set(a,d);d.createAnalysisViewTask=z.createTask(b=>this._createAnalysisViewPromise(d,b))}else c.state.list=l.ADDED};f._removeAnalysis=function(a){a=this._items.get(a);null==a?C.getLogger(this.declaredClass).error("Trying to remove analysis which was not added"):(a.state.list=l.REMOVED,this._scheduleUpdate())};f._scheduleUpdate=function(){h.isSome(this._scheduledUpdateHandle)||(this._scheduledUpdateHandle=D.schedule(()=>this._update()))};
f._update=function(){this._scheduledUpdateHandle=h.removeMaybe(this._scheduledUpdateHandle);this._items.forEach(a=>{if(a.state.list===l.REMOVED)switch(this._items.delete(a.analysis),a.state.view){case m.PENDING:a.createAnalysisViewTask=h.abortMaybe(a.createAnalysisViewTask);break;case m.CREATED:h.isSome(a.view)&&(this._allAnalysisViews.remove(a.view),a.view=h.destroyMaybe(a.view),a.createAnalysisViewTask=null)}})};f._createAnalysisViewPromise=function(){var a=r._asyncToGenerator(function*(c,d){var b=
c.analysis;const y=b.type,v=this._analysisModules[y];this._creatingViewCount+=1;if(h.isNone(v.module))try{v.module=yield this._loadAnalysisModule(y)}catch(w){throw--this._creatingViewCount,w;}if(k.isAborted(d))throw--this._creatingViewCount,k.createAbortError("AnalysisView creation aborted");b=new v.module.default({analysis:b,view:this.view});try{yield b.when()}catch(w){throw--this._creatingViewCount,w;}if(k.isAborted(d))throw--this._creatingViewCount,b.destroy(),k.createAbortError("AnalysisView creation aborted");
c.view=b;c.state.view=m.CREATED;this._allAnalysisViews.add(b);--this._creatingViewCount;return b});return function(c,d){return a.apply(this,arguments)}}();f._loadAnalysisModule=function(a){switch(a){case "area-measurement":return new Promise((c,d)=>n(["./AreaMeasurementAnalysisView3D"],b=>c(q(b)),d));case "dimension":return new Promise((c,d)=>n(["./DimensionAnalysisView3D"],b=>c(q(b)),d));case "direct-line-measurement":return new Promise((c,d)=>n(["./DirectLineMeasurementAnalysisView3D"],b=>c(q(b)),
d));case "line-of-sight":return new Promise((c,d)=>n(["./LineOfSightAnalysisView3D"],b=>c(q(b)),d));case "slice":return new Promise((c,d)=>n(["./SliceAnalysisView3D"],b=>c(q(b)),d))}};r._createClass(u,[{key:"updating",get:function(){return!this.view.ready||0!==this._creatingViewCount||this._allAnalysisViews.some(a=>a.updating)}},{key:"testInfo",get:function(){return{allAnalysisViews:this._allAnalysisViews}}}]);return u}(g.HandleOwner);p.__decorate([t.property()],g.prototype,"updating",null);p.__decorate([t.property({constructOnly:!0})],
g.prototype,"view",void 0);p.__decorate([t.property()],g.prototype,"_allAnalysisViews",void 0);p.__decorate([t.property()],g.prototype,"_creatingViewCount",void 0);return g=p.__decorate([E.subclass("esri.views.3d.analysis.AnalysisViewManager3D")],g)});