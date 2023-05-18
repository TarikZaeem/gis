// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/asyncUtils ../../../core/Handles ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass".split(" "),function(n,d,p,q,v,w,x,c,r,t,y,B,C,z){d.ElevationProfileView=function(u){function h(a){a=
u.call(this,a)||this;a._implementation=null;a._loadingTask=null;a._handles=new x;return a}p._inheritsLoose(h,u);var f=h.prototype;f.initialize=function(){this._handles.add(t.watch(()=>({tool:this.tool,view:this.tool.viewModel.view,visible:this.tool.visible&&!!c.applySome(this.tool.viewModel.view,a=>a.ready)}),({tool:a,view:e,visible:g})=>{c.isSome(e)&&g?this._show(e,a):this._hide()},t.syncAndInitial))};f.destroy=function(){this._handles=c.destroyMaybe(this._handles);this._hide()};f._show=function(a,
e){var g=this;this._loadingTask=c.abortMaybe(this._loadingTask);this._loadingTask=w.createTask(function(){var A=p._asyncToGenerator(function*(b){if("2d"===a.type){var m=new Promise((k,l)=>n(["./ElevationProfileView2D"],k,l));b=(yield r.whenOrAbort(m,b)).ElevationProfileView2D;g._implementation=new b(a,e)}else"3d"===a.type&&(m=new Promise((k,l)=>n(["./ElevationProfileView3D"],k,l)),b=(yield r.whenOrAbort(m,b)).ElevationProfileView3D,g._implementation=new b(a,e))});return function(b){return A.apply(this,
arguments)}}())};f._hide=function(){this._loadingTask=c.abortMaybe(this._loadingTask);this._implementation=c.destroyMaybe(this._implementation)};return h}(v);q.__decorate([y.property()],d.ElevationProfileView.prototype,"tool",void 0);d.ElevationProfileView=q.__decorate([z.subclass("esri.widgets.ElevationProfile.support.ElevationProfileView")],d.ElevationProfileView);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});