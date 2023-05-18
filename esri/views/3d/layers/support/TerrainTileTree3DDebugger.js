// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/aaBoundingRect ../../../support/TileTreeDebugger ../../../../geometry/Polygon".split(" "),function(b,h,k,r,l,d,t,u,
v,w,x,m,n,p,q){b.TerrainTileTree3DDebugger=function(e){function c(a){a=e.call(this,a)||this;a.enablePolygons=!1;return a}h._inheritsLoose(c,e);var f=c.prototype;f.initialize=function(){d.watch(()=>this.enabled,a=>this.view.basemapTerrain.renderPatchBorders=a,d.initial)};f.getTiles=function(){const a=l.isSome(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(g=>({...g,geometry:q.fromExtent(n.toExtent(g.extent,
a))}))};return c}(p.TileTreeDebugger);b.TerrainTileTree3DDebugger=k.__decorate([m.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],b.TerrainTileTree3DDebugger);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});