// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/typedArrayUtil"],function(c,d){c.floatArrayFrom=function(a){return length<=d.NATIVE_ARRAY_MAX_SIZE?Array.from(a):new Float32Array(a)};c.floatSubArray=function(a,b,e){return Array.isArray(a)?a.slice(b,b+e):a.subarray(b,b+e)};c.newFloatArray=function(a,b=!1){return a<=d.NATIVE_ARRAY_MAX_SIZE?b?Array(a).fill(0):Array(a):new Float32Array(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});