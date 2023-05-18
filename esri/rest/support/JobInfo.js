// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/has ../../core/jsonMap ../../core/JSONSupport ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../utils ../geoprocessor/GPOptions ../geoprocessor/utils ./GPMessage".split(" "),function(z,l,m,r,x,A,f,v,p,G,H,B,C,q,D,t,E){var u;
x=A.strict()({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"},{ignoreUnknown:!1});f=u=function(y){function w(b){b=y.call(this,b)||this;b.jobId=null;b.jobStatus=null;b.messages=null;b.progress=null;b.requestOptions=
null;b.sourceUrl=null;b._timer=void 0;return b}l._inheritsLoose(w,y);var h=w.prototype;h.cancelJob=function(){var b=l._asyncToGenerator(function*(a){const {jobId:c,sourceUrl:e}=this;var {path:d}=q.parseUrl(e);a={...this.requestOptions,...a,query:{f:"json"}};this._clearTimer();({data:d}=yield r(`${d}/jobs/${c}/cancel`,a));const {messages:g,jobStatus:n,progress:k}=u.fromJSON(d);this.set({messages:g,jobStatus:n,progress:k});return this});return function(a){return b.apply(this,arguments)}}();h.destroy=
function(){clearInterval(this._timer)};h.checkJobStatus=function(){var b=l._asyncToGenerator(function*(a){const {path:c}=q.parseUrl(this.sourceUrl);({data:a}=yield r(`${c}/jobs/${this.jobId}`,{...this.requestOptions,...a,query:{f:"json"}}));const {messages:e,jobStatus:d,progress:g}=u.fromJSON(a);this.set({messages:e,jobStatus:d,progress:g});return this});return function(a){return b.apply(this,arguments)}}();h.fetchResultData=function(){var b=l._asyncToGenerator(function*(a,c,e){c=D.from(c||{});const {returnFeatureCollection:d,
returnM:g,returnZ:n,outSpatialReference:k}=c;({path:c}=q.parseUrl(this.sourceUrl));const F=t.gpEncode({returnFeatureCollection:d,returnM:g,returnZ:n,outSR:k,returnType:"data",f:"json"},null);({data:a}=yield r(`${c}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...e,query:F}));return t.decode(a)});return function(a,c,e){return b.apply(this,arguments)}}();h.fetchResultImage=function(){var b=l._asyncToGenerator(function*(a,c,e){const {path:d}=q.parseUrl(this.sourceUrl);c={...c.toJSON(),f:"json"};
c=t.gpEncode(c);({data:a}=yield r(`${d}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...e,query:c}));return t.decode(a)});return function(a,c,e){return b.apply(this,arguments)}}();h.fetchResultMapImageLayer=function(){var b=l._asyncToGenerator(function*(){var {path:a}=q.parseUrl(this.sourceUrl);const c=a.indexOf("/GPServer/");a=`${a.substring(0,c)}/MapServer/jobs/${this.jobId}`;return new (yield new Promise((e,d)=>z(["../../layers/MapImageLayer"],g=>e(Object.freeze(Object.defineProperty({__proto__:null,
default:g},Symbol.toStringTag,{value:"Module"}))),d))).default({url:a})});return function(){return b.apply(this,arguments)}}();h.waitForJobCompletion=function(){var b=l._asyncToGenerator(function*(a={}){const {interval:c=1E3,signal:e,statusCallback:d}=a;return new Promise((g,n)=>{v.onAbort(e,()=>{this._clearTimer();n(v.createAbortError())});this._clearTimer();this._timer=setInterval(()=>{this._timer||n(v.createAbortError());this.checkJobStatus(this.requestOptions).then(k=>{({jobStatus:k}=k);this.jobStatus=
k;switch(k){case "job-succeeded":this._clearTimer();g(this);break;case "job-submitted":case "job-executing":case "job-waiting":case "job-new":d&&d(this);break;case "job-cancelled":case "job-cancelling":case "job-deleted":case "job-deleting":case "job-timed-out":case "job-failed":this._clearTimer(),n(this)}})},c)})});return function(){return b.apply(this,arguments)}}();h._clearTimer=function(){clearInterval(this._timer);this._timer=void 0};return w}(f.JSONSupport);m.__decorate([p.property()],f.prototype,
"jobId",void 0);m.__decorate([B.enumeration(x,{ignoreUnknown:!1})],f.prototype,"jobStatus",void 0);m.__decorate([p.property({type:[E]})],f.prototype,"messages",void 0);m.__decorate([p.property()],f.prototype,"progress",void 0);m.__decorate([p.property()],f.prototype,"requestOptions",void 0);m.__decorate([p.property({json:{write:!0}})],f.prototype,"sourceUrl",void 0);return f=u=m.__decorate([C.subclass("esri.rest.support.JobInfo")],f)});