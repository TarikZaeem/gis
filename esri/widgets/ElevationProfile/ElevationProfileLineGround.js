// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/handleUtils ../../core/maybe ../../core/memoize ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ./ElevationProfileLine ./support/elevationQuerySourceUtils".split(" "),function(l,d,q,w,f,x,y,r,e,c,E,z,A,B){c=function(m){function k(a){a=m.call(this,a)||this;
a.type="ground";a.color=new q("#ff7f00");a.viewVisualizationEnabled=!0;a.numSamplesForPreview=50;a.numSamplesPerChunk=1E3;a._getQueryElevationDependencies=x.memoize((b,g)=>({ground:b,groundLayers:g}));return a}l._inheritsLoose(k,m);var t=k.prototype;t.queryElevation=function(){var a=l._asyncToGenerator(function*(b,g){var h=this._queryElevationDependencies;if(f.isNone(h))throw Error("ElevationProfileLineGround: no dependencies");const {ground:n}=h;if(f.isNone(n))throw Error("No ground configured in the view");
h=yield n.queryElevation(b,g);const u=r.getMetersPerVerticalUnitForSR(b.spatialReference),v=r.getMetersPerVerticalUnitForSR(n.layers.getItemAt(0).spatialReference);u!==v&&(b=h.geometry,b.points=b.points.map(([C,D,p])=>[C,D,p===g.noDataValue?p:p*v/u]));return h});return function(b,g){return a.apply(this,arguments)}}();t.attach=function(a){return w.handlesGroup([m.prototype.attach.call(this,a),y.watch(()=>this._queryElevationDependencies,()=>this._onChange())])};l._createClass(k,[{key:"available",get:function(){const a=
this._ground;return f.isSome(a)&&a.layers.some(b=>b.visible)}},{key:"minDemResolution",get:function(){return B.getGroundMinDemResolution(this._ground)}},{key:"_queryElevationDependencies",get:function(){return this._getQueryElevationDependencies(this._ground,this._groundLayers)}},{key:"_ground",get:function(){return f.applySome(this._viewModel?.view,a=>a.map?.ground)}},{key:"_groundLayers",get:function(){const a=f.applySome(this._ground,b=>b.layers?.toArray());return f.unwrapOr(a,[])}}]);return k}(A);
d.__decorate([e.property({type:q,nonNullable:!0})],c.prototype,"color",void 0);d.__decorate([e.property()],c.prototype,"viewVisualizationEnabled",void 0);d.__decorate([e.property()],c.prototype,"available",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"minDemResolution",null);d.__decorate([e.property()],c.prototype,"_queryElevationDependencies",null);d.__decorate([e.property()],c.prototype,"_ground",null);d.__decorate([e.property()],c.prototype,"_groundLayers",null);return c=d.__decorate([z.subclass("esri.widgets.ElevationProfile.ElevationProfileLineGround")],
c)});