// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./nextTick"],function(c,e){let f=function(){function d(a){this._allocator=a;this._items=[];this._itemsPtr=0;this._grow()}var b=d.prototype;b.get=function(){0===this._itemsPtr&&e.nextTick(()=>this._reset());this._itemsPtr===this._items.length&&this._grow();return this._items[this._itemsPtr++]};b._reset=function(){this._items.length=Math.min(Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3072),this._items.length);this._itemsPtr=0};b._grow=function(){for(let a=0;a<Math.max(8,
Math.min(this._items.length,1024));a++)this._items.push(this._allocator())};return d}();c.ObjectStack=f;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});