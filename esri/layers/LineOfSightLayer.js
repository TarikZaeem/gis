// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../analysis/LineOfSightAnalysis ../analysis/LineOfSightAnalysisObserver ../analysis/LineOfSightAnalysisTarget ../core/Collection ../core/collectionUtils ../core/maybe ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Layer ./mixins/OperationalLayer".split(" "),function(h,c,m,r,k,n,t,d,b,p,
e,x,y,u,v,w){k=n.ofType(k);b=function(q){function g(a){a=q.call(this,a)||this;a.type="line-of-sight";a.operationalLayerType="LineOfSightLayer";a.analysis=new m;a.opacity=1;return a}h._inheritsLoose(g,q);var l=g.prototype;l.initialize=function(){this.addHandles(p.watch(()=>this.analysis,(a,f)=>{d.isSome(f)&&f.parent===this&&(f.parent=null);d.isSome(a)&&(a.parent=this)},p.syncAndInitial))};l.load=function(){var a=h._asyncToGenerator(function*(){d.isSome(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent());
return this});return function(){return a.apply(this,arguments)}}();l.releaseAnalysis=function(a){this.analysis===a&&(this.analysis=new m)};h._createClass(g,[{key:"observer",get:function(){return d.applySome(this.analysis,a=>a.observer)},set:function(a){d.applySome(this.analysis,f=>f.observer=a)}},{key:"targets",get:function(){return d.isSome(this.analysis)?this.analysis.targets:new n},set:function(a){t.referenceSetter(a,this.analysis?.targets)}},{key:"fullExtent",get:function(){return d.isSome(this.analysis)?
this.analysis.extent:null}},{key:"spatialReference",get:function(){return d.isSome(this.analysis)?d.unwrap(this.analysis.spatialReference):null}}]);return g}(w.OperationalLayer(b.MultiOriginJSONMixin(v)));c.__decorate([e.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);c.__decorate([e.property({type:["LineOfSightLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([e.property({type:r,json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"observer",null);c.__decorate([e.property({type:k,
json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"targets",null);c.__decorate([e.property({nonNullable:!0,json:{read:!1,write:!1}})],b.prototype,"analysis",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"fullExtent",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"spatialReference",null);c.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",
void 0);c.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);return b=c.__decorate([u.subclass("esri.layers.LineOfSightLayer")],b)});