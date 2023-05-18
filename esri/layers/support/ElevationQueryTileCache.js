// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let f=function(){function d(a){this._store=a}var b=d.prototype;b.destroy=function(){this._store.destroy()};b.get=function(a){return this._store.get(a)};b.put=function(a,e){this._store.put(a,e,e.values.byteLength+256)};return d}();c.ElevationQueryTileCache=f;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});