// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../analysis/DirectLineMeasurementAnalysis ../../core/maybe ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool ../support/InteractiveAnalysisViewModel".split(" "),
function(n,d,p,f,q,m,e,c,x,t,u,v,w){c=function(r){function k(a){a=r.call(this,a)||this;a.analysis=null;a.supportedViewType="3d";a.unsupportedErrorMessage="DirectLineMeasurement3DViewModel is only supported in 3D views.";a._userUnit=null;a._userUnitOptions=null;return a}n._inheritsLoose(k,r);var g=k.prototype;g.initialize=function(){this.addHandles(q.watch(()=>({analysis:this.analysis,unit:this.unit}),({analysis:a,unit:b})=>{f.isSome(a)&&(a.unit=b)},q.syncAndInitial))};g.constructAnalysis=function(){return new p};
g.constructTool=function(){return new v({view:f.unwrap(this.view),analysis:this.analysis,analysisViewData:f.unwrap(this.analysisView),visible:this.visible})};g._findSelectableUnit=function(a,b){const l=this.unitOptions;return l.includes(a)?a:b?this._findSelectableUnit(b):l[0]};g._filteredOrAllUnits=function(a){if(!a)return m.measurementLengthUnits.slice();a=a.filter(b=>m.measurementLengthUnits.includes(b));return 0===a.length?m.measurementLengthUnits.slice():a};n._createClass(k,[{key:"state",get:function(){return this.disabled||
!this.ready?"disabled":f.isNone(this.tool)?"ready":this.tool.state}},{key:"measurement",get:function(){if(f.isNone(this.tool))return null;const a={mode:"euclidean",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}},{analysisViewData:b}=this.tool;if(f.isNone(b))return a;const l=b.actualVisualizedMeasurement,h=f.isSome(b.result)?"available":"unavailable";switch(l){case "euclidean":return{mode:"euclidean",
directDistance:{text:b.directLabelText,state:h},horizontalDistance:{text:b.horizontalLabelText,state:h},verticalDistance:{text:b.verticalLabelText,state:h}};case "geodesic":return{mode:"geodesic",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:b.horizontalLabelText,state:h},verticalDistance:{text:b.verticalLabelText,state:h}};default:return a}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;
this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(a){this._userUnit=a?this._findSelectableUnit(a,this._userUnit):null}}]);return k}(w.InteractiveAnalysisViewModel);d.__decorate([e.property({type:p})],c.prototype,"analysis",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);
d.__decorate([e.property({readOnly:!0})],c.prototype,"measurement",null);d.__decorate([e.property()],c.prototype,"unitOptions",null);d.__decorate([e.property()],c.prototype,"unit",null);d.__decorate([e.property(u.defaultUnitPropertyMetadata)],c.prototype,"defaultUnit",void 0);d.__decorate([e.property()],c.prototype,"_userUnit",void 0);d.__decorate([e.property()],c.prototype,"_userUnitOptions",void 0);return c=d.__decorate([t.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],
c)});