// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./core ./jobs ./SymbolDeclutterer ./SymbolRepository ./util ../style/StyleDefinition".split(" "),function(e,h,k,l,m,n,p){e.declutterSingleTile=function(b,q){const c=[],f=new m.SymbolRepository(4096,c,()=>{const a=new h.VTLUniqueSymbol;a.show=!1;a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1});a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1});return a}),g=new l.SymbolDeclutterer(c,f,(a,d,r)=>new k.CollisionJob(a,d,r,b.styleRepository,b.key.level,0),
(a,d)=>{n.writeOpacityToBuffers(a,d,!1)},()=>0,a=>(a=q.getStyleLayerByUID(a).getLayoutProperty("visibility"))&&a.getValue()===p.Visibility.NONE?!1:!0);c.push(b);f.add(b);g.setScreenSize(512,512);g.continue(Infinity)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});