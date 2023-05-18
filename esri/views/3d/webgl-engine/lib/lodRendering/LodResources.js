// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/arrayUtils","../../../../../core/maybe"],function(c,f,g){c.LodComponentResources=function(b,a=null){this.geometry=b;this.textures=a};c.geometriesFromLodLevelResources=function(b){b=b.components.map(a=>a.geometry);return f.unique(b)};c.geometriesFromLodResources=function(b){const a=[];b.levels.forEach(e=>{e.components.forEach(d=>{a.push(d.geometry)})});return f.unique(a)};c.materialsFromLodResources=function(b){const a=[];b.levels.forEach(e=>e.components.forEach(d=>
a.push(d.geometry.material)));return f.unique(a)};c.texturesFromLodResources=function(b){const a=[];b.levels.forEach(e=>{e.components.forEach(d=>{g.isSome(d.textures)&&a.push(...d.textures)})});return f.unique(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});