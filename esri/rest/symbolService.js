// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../core/urlUtils ./utils ../symbols/CIMSymbol".split(" "),function(g,h,k,l,m,n){function f(){f=h._asyncToGenerator(function*(c,a,d){c=m.parseUrl(c);var b=a.svgImage;a=new FormData;if("FormData"in globalThis&&"HTMLFormElement"in globalThis)if(b instanceof FormData){var e=b.get("svgImage");a.append("svgImage",e,e.name)}else b instanceof HTMLFormElement&&(e=(new FormData(b)).get("svgImage"),a.append("svgImage",e,e.name));"string"===typeof b&&
(b=new Blob([b.trim()],{type:"image/svg+xml"}),a.append("svgImage",b,"symbol.svg"));a.append("f","json");d={...d,method:"post",body:a};c=l.join(c.path,"generateSymbol");({data:d}=yield k(c,d));return{symbol:new n({data:{type:"CIMSymbolReference",symbol:d}})}});return f.apply(this,arguments)}g.generateSymbol=function(c,a,d){return f.apply(this,arguments)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});