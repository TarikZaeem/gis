// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/promiseUtils ../../views/2d/engine/webgl/animatedFormats/apng ../../views/2d/engine/webgl/animatedFormats/gif".split(" "),function(h,n,p,q,r,t){function u(b,c){return k.apply(this,arguments)}function k(){k=h._asyncToGenerator(function*(b,c){b=window.URL.createObjectURL(b);try{const {data:a}=yield n(b,{...c,responseType:"image"});return a}catch(a){if(!q.isAbortError(a))throw new p("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);
throw a;}finally{window.URL.revokeObjectURL(b)}});return k.apply(this,arguments)}function v(b,c){return l.apply(this,arguments)}function l(){l=h._asyncToGenerator(function*(b,c){const {arrayBuffer:a,mediaType:d}=yield w(b,c);b="image/png"===d;if("image/gif"===d&&t.isAnimatedGIF(a))return t.parseGif(a,c);if(b&&r.isAnimatedPNG(a))return r.parseApng(a,c);b=new Blob([a],{type:d});return u(b,c)});return l.apply(this,arguments)}function w(b,c){return m.apply(this,arguments)}function m(){m=h._asyncToGenerator(function*(b,
c){if(b.includes(";base64,")){c=b.indexOf(";base64,");var a=b.indexOf(";base64,")+8;a=b.substring(a);a=atob(a);var d=new Uint8Array(a.length);for(var f=0;f<a.length;f++)d[f]=a.charCodeAt(f);a=d.buffer;b=b.substring(0,c).replace("data:","");a={arrayBuffer:a,mediaType:b}}else try{d=yield n(b,{responseType:"array-buffer",...c});f=d.data;const e=d.getHeader("Content-Type");a={arrayBuffer:f,mediaType:e}}catch(e){if(!q.isAbortError(e))throw new p("mapview-invalid-resource",`Could not fetch requested resource at ${b}`);
}return a});return m.apply(this,arguments)}return function(){function b(){this._resourceMap=new Map;this._inFlightResourceMap=new Map;this.geometryEnginePromise=this.geometryEngine=null}var c=b.prototype;c.destroy=function(){this._inFlightResourceMap.clear();this._resourceMap.clear()};c.getResource=function(a){return this._resourceMap.get(a)??null};c.fetchResource=function(){var a=h._asyncToGenerator(function*(d,f){var e=this._resourceMap.get(d);if(e)return{width:e.width,height:e.height};if(e=this._inFlightResourceMap.get(d))return e.then(g=>
({width:g.width,height:g.height}));e=v(d,f);this._inFlightResourceMap.set(d,e);return e.then(g=>{this._inFlightResourceMap.delete(d);this._resourceMap.set(d,g);return{width:g.width,height:g.height}},()=>({width:0,height:0}))});return function(d,f){return a.apply(this,arguments)}}();c.deleteResource=function(a){this._inFlightResourceMap.delete(a);this._resourceMap.delete(a)};return b}()});