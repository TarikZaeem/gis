// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipContentWithHelpMessage ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,k,l,w,x,y,z,A,m,d,n,p,e,B,b){var q=
`${d.CONTENT} ${`${d.CONTENT}--draw-polygon`}`;a.TooltipContentDrawPolygon=function(f){function c(){return f.apply(this,arguments)||this}k._inheritsLoose(c,f);c.prototype.render=function(){const {area:r,elevation:t,tooltipOptions:u,viewType:v}=this.info,{visibleElements:g}=u,h=this._messagesTooltip.sketch;return b.tsx(p.TooltipContentWithHelpMessage,{className:q,helpMessage:this._getHelpMessage()},g.elevation&&"2d"!==v&&b.tsx(e.TooltipField,{title:h.elevation,value:this._formatVerticalLength(t)}),
g.area&&b.tsx(e.TooltipField,{title:h.area,value:this._formatArea(r)}))};return c}(n.TooltipContent);a.TooltipContentDrawPolygon=l.__decorate([m.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],a.TooltipContentDrawPolygon);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});