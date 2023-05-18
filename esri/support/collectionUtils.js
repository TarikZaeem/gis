// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../core/CollectionFlattener"],function(c,e){c.createFlattenedTablesCollection=function(d){return new e({getCollections:()=>[d.tables,d.layers],getChildrenFunction:a=>{const b=[];"tables"in a&&b.push(a.tables);"layers"in a&&b.push(a.layers);return b},itemFilterFunction:a=>{const b=a.parent;return!!b&&"tables"in b&&b.tables.includes(a)}})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});