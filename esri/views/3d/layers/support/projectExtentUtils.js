// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(f,d,h,k){f.toViewIfLocal=function(b){const e=b.view.spatialReference,a=b.layer.fullExtent;var c=d.isSome(a)&&a.spatialReference;if(d.isNone(a)||!c)return Promise.resolve(null);if(c.equals(e))return Promise.resolve(a.clone());c=h.project(a,e);return d.isSome(c)?Promise.resolve(c):b.view.state.isLocal?k.projectGeometry(a,e,b.layer.portalItem).then(g=>
!b.destroyed&&g?g:null).catch(()=>null):Promise.resolve(null)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});