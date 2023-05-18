// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],function(k,e){return function(){function h(){this._materialKey=null}var f=h.prototype;f.bindFeature=function(a,b,c){};f.write=function(a,b,c,d){if(k.isNone(this._effects)||0===this._effects?.length)return this._write(a,b,d);c=e.CIMEffectHelper.executeEffects(this._effects,b.readLegacyGeometryForDisplay(),a.tileKey,d.geometryEngine);let g=e.CIMEffectHelper.next(c);for(;g;)this._write(a,b,d,g),g=e.CIMEffectHelper.next(c)};
f._write=function(a,b,c,d){};return h}()});