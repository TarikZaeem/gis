// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../core/events","../../core/has"],function(c,g,f){f=f("mac")?"Meta":"Ctrl";const d={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(var a=48;58>a;a++)d[a]=String.fromCharCode(a);for(a=1;25>a;a++)d[111+a]=`F${a}`;for(a=65;91>a;a++)d[a]=[String.fromCharCode(a+32),String.fromCharCode(a)];c.eventKey=function(b){if(void 0!==b.key)return g.eventKey(b);const e=
d[b.keyCode];return Array.isArray(e)?b.shiftKey?e[1]:e[0]:e};c.isSystemModifier=function(b){switch(b){case "Ctrl":case "Alt":case "Shift":case "Meta":case "Primary":return!0}return!1};c.primaryKey=f;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});