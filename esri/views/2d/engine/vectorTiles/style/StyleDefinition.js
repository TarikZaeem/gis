// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../symbols/cim/enums"],function(b,d){b.StyleLayerType=void 0;(function(a){a[a.BACKGROUND=0]="BACKGROUND";a[a.FILL=1]="FILL";a[a.LINE=2]="LINE";a[a.SYMBOL=3]="SYMBOL";a[a.CIRCLE=4]="CIRCLE"})(b.StyleLayerType||(b.StyleLayerType={}));b.Visibility=void 0;(function(a){a[a.VISIBLE=0]="VISIBLE";a[a.NONE=1]="NONE"})(b.Visibility||(b.Visibility={}));b.SymbolPlacement=void 0;(function(a){a[a.POINT=0]="POINT";a[a.LINE=1]="LINE";a[a.LINE_CENTER=2]="LINE_CENTER"})(b.SymbolPlacement||
(b.SymbolPlacement={}));b.RotationAlignment=void 0;(function(a){a[a.MAP=0]="MAP";a[a.VIEWPORT=1]="VIEWPORT";a[a.AUTO=2]="AUTO"})(b.RotationAlignment||(b.RotationAlignment={}));b.TextJustification=void 0;(function(a){a[a.AUTO=0]="AUTO";a[a.LEFT=1]="LEFT";a[a.CENTER=2]="CENTER";a[a.RIGHT=3]="RIGHT"})(b.TextJustification||(b.TextJustification={}));b.SymbolAnchor=void 0;(function(a){a[a.CENTER=0]="CENTER";a[a.LEFT=1]="LEFT";a[a.RIGHT=2]="RIGHT";a[a.TOP=3]="TOP";a[a.BOTTOM=4]="BOTTOM";a[a.TOP_LEFT=5]=
"TOP_LEFT";a[a.TOP_RIGHT=6]="TOP_RIGHT";a[a.BOTTOM_LEFT=7]="BOTTOM_LEFT";a[a.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"})(b.SymbolAnchor||(b.SymbolAnchor={}));b.TextTransform=void 0;(function(a){a[a.NONE=0]="NONE";a[a.UPPERCASE=1]="UPPERCASE";a[a.LOWERCASE=2]="LOWERCASE"})(b.TextTransform||(b.TextTransform={}));b.TranslateAnchor=void 0;(function(a){a[a.MAP=0]="MAP";a[a.VIEWPORT=1]="VIEWPORT"})(b.TranslateAnchor||(b.TranslateAnchor={}));b.TextWritingMode=void 0;(function(a){a[a.HORIZONTAL=0]="HORIZONTAL";a[a.VERTICAL=
1]="VERTICAL"})(b.TextWritingMode||(b.TextWritingMode={}));let c=function(){};c.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:b.Visibility.VISIBLE}};c.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:b.Visibility.VISIBLE}};c.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:b.Visibility.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:d.CapType.BUTT},"line-join":{type:"enum",
values:["bevel","round","miter"],default:d.JoinType.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}};c.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:b.Visibility.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:b.SymbolPlacement.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},
"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:"center left right top bottom top-left top-right bottom-left bottom-right".split(" "),default:b.SymbolAnchor.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",
default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:b.RotationAlignment.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:"center left right top bottom top-left top-right bottom-left bottom-right".split(" "),default:b.SymbolAnchor.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",
default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:b.TextJustification.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",
minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:b.RotationAlignment.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:b.TextTransform.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[b.TextWritingMode.HORIZONTAL]}};c.circleLayoutDefinition={visibility:{type:"enum",values:["visible",
"none"],default:b.Visibility.VISIBLE}};c.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}};c.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",
value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:b.TranslateAnchor.MAP}};c.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",
value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:b.TranslateAnchor.MAP},"line-width":{type:"number",minimum:0,default:1}};c.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",
value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:b.TranslateAnchor.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",
values:["map","viewport"],default:b.TranslateAnchor.MAP}};c.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",
minimum:0,default:300}};c.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,
default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:b.TranslateAnchor.MAP}};b.StyleDefinition=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});