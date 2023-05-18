// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Promise ../../../../core/promiseUtils ../../../../core/workers/workers ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass".split(" "),function(d,k,h,g,r,m,u,v,t){h=function(p){function l(b){b=p.call(this,b)||this;b._startupResolver=g.createResolver();b.isReady=!1;return b}d._inheritsLoose(l,
p);var e=l.prototype;e.initialize=function(){this._controller=new AbortController;this.addResolvingPromise(this._startWorker(this._controller.signal))};e.destroy=function(){this._controller.abort();this._connection&&this._connection.close()};e.startup=function(){var b=d._asyncToGenerator(function*(a,c,f,q){yield this.when();var n=this._controller.signal;n=Array.isArray(f.source)?{transferList:f.source,signal:n}:void 0;a=a.tileInfo.toJSON();yield this._connection.invoke("startup",{service:f,config:c,
tileInfo:a,tiles:q},n);this._startupResolver.resolve();this._set("isReady",!0)});return function(a,c,f,q){return b.apply(this,arguments)}}();e.updateTiles=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("updateTiles",a))});return function(a){return b.apply(this,arguments)}}();e.update=function(){var b=d._asyncToGenerator(function*(a){a={config:a};yield this._startupResolver.promise;return this._connection.invoke("update",
a)});return function(a){return b.apply(this,arguments)}}();e.applyUpdate=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("applyUpdate",a)});return function(a){return b.apply(this,arguments)}}();e.setHighlight=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",a))});return function(a){return b.apply(this,arguments)}}();
e.stop=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;if(!this.closed)return g.ignoreAbortErrors(this._connection.invoke("stop"))});return function(){return b.apply(this,arguments)}}();e.refresh=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.refresh",a))});return function(a){return b.apply(this,arguments)}}();e.querySummaryStatistics=function(){var b=d._asyncToGenerator(function*(a,
c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.querySummaryStatistics",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryAggregateSummaryStatistics=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateSummaryStatistics",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryUniqueValues=
function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryUniqueValues",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryAggregateUniqueValues=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateUniqueValues",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,
arguments)}}();e.queryClassBreaks=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryClassBreaks",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryAggregateClassBreaks=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateClassBreaks",{query:a.toJSON(),params:c},f)});return function(a,
c,f){return b.apply(this,arguments)}}();e.queryHistogram=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryHistogram",{query:a.toJSON(),params:c},f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryAggregateHistogram=function(){var b=d._asyncToGenerator(function*(a,c,f){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateHistogram",{query:a.toJSON(),params:c},
f)});return function(a,c,f){return b.apply(this,arguments)}}();e.queryFeatures=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryFeatures",a?.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryVisibleFeatures=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryVisibleFeatures",a?.toJSON(),c)});return function(a,
c){return b.apply(this,arguments)}}();e.queryObjectIds=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryObjectIds",a?.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryFeatureCount=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryFeatureCount",a?.toJSON(),c)});return function(a,c){return b.apply(this,
arguments)}}();e.queryExtent=function(){var b=d._asyncToGenerator(function*(a,c){return this._connection.invoke("controller.queryExtent",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryLatestObservations=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryLatestObservations",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryStatistics=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;
return this._connection.invoke("controller.queryStatistics",a)});return function(a){return b.apply(this,arguments)}}();e.queryAggregates=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregates",a?.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryAggregateCount=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateCount",
a?.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryAggregateIds=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryAggregateIds",a?.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.getObjectId=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getObjectId",a)});return function(a){return b.apply(this,
arguments)}}();e.getDisplayId=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getDisplayId",a)});return function(a){return b.apply(this,arguments)}}();e.getFeatures=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getFeatures",a)});return function(a){return b.apply(this,arguments)}}();e.getAggregates=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;
return this._connection.invoke("controller.getAggregates")});return function(){return b.apply(this,arguments)}}();e.getAggregateValueRanges=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;return this._connection.invoke("controller.getAggregateValueRanges")});return function(){return b.apply(this,arguments)}}();e.mapValidDisplayIds=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.mapValidDisplayIds",
a)});return function(a){return b.apply(this,arguments)}}();e.onEdits=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.onEdits",a))});return function(a){return b.apply(this,arguments)}}();e.enableEvent=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",{name:a,value:c}))});return function(a,
c){return b.apply(this,arguments)}}();e.pauseStream=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.pauseStream"))});return function(){return b.apply(this,arguments)}}();e.resumeStream=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.resumeStream"))});return function(){return b.apply(this,arguments)}}();
e.sendMessageToSocket=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.sendMessageToSocket",a))});return function(a){return b.apply(this,arguments)}}();e.sendMessageToClient=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.sendMessageToClient",a))});return function(a){return b.apply(this,arguments)}}();
e.updateCustomParameters=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return g.ignoreAbortErrors(this._connection.invoke("controller.updateCustomParameters",a))});return function(a){return b.apply(this,arguments)}}();e._startWorker=function(){var b=d._asyncToGenerator(function*(a){try{this._connection=yield r.open("Pipeline",{client:this.client,strategy:"dedicated",signal:a})}catch(c){g.throwIfNotAbortError(c)}});return function(a){return b.apply(this,arguments)}}();
d._createClass(l,[{key:"tileRenderer",set:function(b){this.client.tileRenderer=b}},{key:"closed",get:function(){return this._connection.closed}}]);return l}(h.EsriPromise);k.__decorate([m.property()],h.prototype,"isReady",void 0);k.__decorate([m.property({constructOnly:!0})],h.prototype,"client",void 0);k.__decorate([m.property()],h.prototype,"tileRenderer",null);return h=k.__decorate([t.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],h)});