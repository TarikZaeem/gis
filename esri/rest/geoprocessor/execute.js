// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/GPMessage"],function(c,k,l,d,m){function b(){b=k._asyncToGenerator(function*(e,f,a,g){a=l.from(a||{});return d.constructRequest(e,"execute",a,f??{},g).then(h=>{const n=h.data.messages||[];return{results:(h.data.results||[]).map(d.decode),messages:n.map(p=>m.fromJSON(p))}})});return b.apply(this,arguments)}c.execute=function(e,f,a,g){return b.apply(this,arguments)};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});