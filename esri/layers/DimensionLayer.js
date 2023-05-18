// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../analysis/DimensionAnalysis ../analysis/DimensionSimpleStyle ../analysis/LengthDimension ../core/Collection ../core/maybe ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/OperationalLayer".split(" "),function(l,c,p,t,u,v,f,b,q,e,B,
C,w,x,y,z){b=function(r){function g(a){var d=r.call(this,a)||this;d.type="dimension";d.operationalLayerType="ArcGISDimensionLayer";d.source=new p;d.opacity=1;if(a){const {source:m,style:h}=a;m&&h&&(m.style=h)}return d}l._inheritsLoose(g,r);var k=g.prototype;k.initialize=function(){this.addHandles([q.watch(()=>this.source,(a,d)=>{f.isSome(d)&&d.parent===this&&(d.parent=null);f.isSome(a)&&(a.parent=this)},q.syncAndInitial)])};k.load=function(){var a=l._asyncToGenerator(function*(){this.addResolvingPromise(this.source.waitComputeExtent());
return this});return function(){return a.apply(this,arguments)}}();k.releaseAnalysis=function(a){this.source===a&&(this.source=new p)};k.writeDimensions=function(a,d,m,h){d.dimensions=a.filter(({startPoint:n,endPoint:A})=>f.isSome(n)&&f.isSome(A)).map(n=>n.toJSON(h)).toJSON()};l._createClass(g,[{key:"spatialReference",get:function(){return f.unwrap(this.source.spatialReference)}},{key:"style",get:function(){return this.source.style},set:function(a){this.source.style=a}},{key:"fullExtent",get:function(){return this.source.extent}},
{key:"analysis",get:function(){return this.source},set:function(a){this.source=a}},{key:"dimensions",get:function(){return this.source.dimensions},set:function(a){this.source.dimensions=a}}]);return g}(z.OperationalLayer(b.MultiOriginJSONMixin(y)));c.__decorate([e.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);c.__decorate([e.property({type:["ArcGISDimensionLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([e.property({nonNullable:!0})],b.prototype,"source",void 0);
c.__decorate([e.property({readOnly:!0})],b.prototype,"spatialReference",null);c.__decorate([e.property({types:{key:"type",base:null,typeMap:{simple:t}},json:{write:{ignoreOrigin:!0}}})],b.prototype,"style",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"fullExtent",null);c.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",void 0);c.__decorate([e.property({type:["show",
"hide"]})],b.prototype,"listMode",void 0);c.__decorate([e.property({type:v.ofType(u),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],b.prototype,"dimensions",null);c.__decorate([x.writer("web-scene","dimensions")],b.prototype,"writeDimensions",null);return b=c.__decorate([w.subclass("esri.layers.DimensionLayer")],b)});