// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/promiseUtils"],function(a,h,c,k){let l=function(){function b(d){this.schedule=d;this._abortController=null;this._loadStatus=a.LoadStatus.LOADING;this.logger=this._loader=this._loadError=null}var f=b.prototype;f.destroy=function(){this.abortLoad()};f.load=function(d,g){if(this._loadStatus===a.LoadStatus.LOADED)return d&&d(),c.unwrapOr(this._loader,Promise.resolve());if(this._loadStatus===a.LoadStatus.FAILED)return g&&
g(this._loadError),c.unwrapOr(this._loader,Promise.resolve());c.isNone(this._loader)&&(this._abortController=new AbortController,this._loader=this.doLoad(this._abortController.signal).then(()=>{this._abortController=null;this._loadStatus=a.LoadStatus.LOADED},e=>{this._loadError=e;this._abortController=null;this._loadStatus=a.LoadStatus.FAILED;!k.isAbortError(e)&&this.logger&&e.message&&this.logger.warn(e.message);throw e;}));this._loader.then(d,g).catch(()=>{});return this._loader};f.abortLoad=function(){c.isSome(this._abortController)?
this._abortController=c.abortMaybe(this._abortController):this._loadStatus===a.LoadStatus.LOADING&&(this._loadStatus=a.LoadStatus.FAILED);this._loader=null};h._createClass(b,[{key:"loadStatus",get:function(){return this._loadStatus}}]);return b}();a.LoadStatus=void 0;(function(b){b[b.LOADING=0]="LOADING";b[b.LOADED=1]="LOADED";b[b.FAILED=2]="FAILED"})(a.LoadStatus||(a.LoadStatus={}));a.Loadable=l;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});