// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/HandleOwner ../../../../../../core/maybe ../../../../../../core/reactiveUtils ../../../../../../core/accessorSupport/decorators/property ../../../../../../core/accessorSupport/ensureType ../../../../../../core/arrayUtils ../../../../../../core/accessorSupport/decorators/subclass ../../../../../../layers/support/TileKey ../../../../layers/support/FeatureTileDescriptor3D ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils".split(" "),
function(b,p,c,r,l,q,e,z,A,t,u,v,m){function w({lij:[h,f,k],extent:a}){return new u.TileKey(`${h}/${f}/${k}`,h,f,k,a)}b.FeatureServiceTiles3D=function(h){function f(a){a=h.call(this,a)||this;a.pointOfInterest=null;return a}p._inheritsLoose(f,h);var k=f.prototype;k.initialize=function(){this.handles.add(q.watch(()=>this.view.featureTiles,a=>{this.handles.remove("feature-tiles");a&&this.handles.add(a.addClient(),"feature-tiles")},q.initial))};k._filterTiles=function(a){return l.isNone(a)?[]:a.filter(d=>
50<Math.abs(d.measures.screenRect[3]-d.measures.screenRect[1])&&d.measures.visibility===v.Visibility.VISIBLE_ON_SURFACE)};p._createClass(f,[{key:"tiles",get:function(){const a=this.tilesCoveringView,d=this._effectivePointOfInterest;if(l.isSome(d)){const n=a.map(g=>m.distanceToTile(d,g));for(let g=1;g<n.length;g++)if(n[g-1]>n[g])return a.sort((x,y)=>m.distanceToTile(d,x)-m.distanceToTile(d,y)),a.slice()}return a}},{key:"tilesCoveringView",get:function(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(w)}},
{key:"tileInfo",get:function(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}},{key:"tileSize",get:function(){return this.view.featureTiles?.tileSize??256}},{key:"_effectivePointOfInterest",get:function(){const a=this.pointOfInterest;return l.isSome(a)?a:this.view.pointsOfInterest?.focus.location}}]);return f}(r.HandleOwner);c.__decorate([e.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tiles",null);c.__decorate([e.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,
"tilesCoveringView",null);c.__decorate([e.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tileInfo",null);c.__decorate([e.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tileSize",null);c.__decorate([e.property({constructOnly:!0})],b.FeatureServiceTiles3D.prototype,"view",void 0);c.__decorate([e.property()],b.FeatureServiceTiles3D.prototype,"pointOfInterest",void 0);c.__decorate([e.property()],b.FeatureServiceTiles3D.prototype,"_effectivePointOfInterest",null);b.FeatureServiceTiles3D=
c.__decorate([t.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],b.FeatureServiceTiles3D);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});