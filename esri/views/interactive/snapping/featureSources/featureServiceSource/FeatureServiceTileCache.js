// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){let k=function(f){function e(){this._store=new Map;this._byteSize=0}var c=e.prototype;c.set=function(a,b){this.delete(a);this._store.set(a,b);this._byteSize+=b.byteSize};c.delete=function(a){const b=this._store.get(a);return this._store.delete(a)?(null!=b&&(this._byteSize-=b.byteSize),!0):!1};c.get=function(a){this._used(a);return this._store.get(a)};c.has=function(a){this._used(a);return this._store.has(a)};c.clear=function(){this._store.clear()};c.applyByteSizeLimit=
function(a,b){for(const [g,h]of this._store){if(this._byteSize<=a)break;this.delete(g);b(h)}};c.values=function(){return this._store.values()};c[f]=function(){return this._store[Symbol.iterator]()};c._used=function(a){const b=this._store.get(a);b&&(this._store.delete(a),this._store.set(a,b))};return e}(Symbol.iterator);d.FeatureServiceTileCache=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});