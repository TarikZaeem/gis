// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../intl ../../../core/mathUtils ../../../core/maybe ../../../core/timeUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory ../../../intl/substitute".split(" "),
function(b,g,d,y,h,k,l,e,z,A,r,t,u,m,B,v,n,w){const x=l.convertTime(1,"minutes","milliseconds"),p=l.convertTime(15,"minutes","milliseconds");b.ShadowTooltipContent=function(q){function f(a,c){a=q.call(this,a,c)||this;a.accumulatedShadowTime=null;a._messages=null;return a}g._inheritsLoose(f,q);f.prototype.render=function(){const a=this._formattedContent;return n.tsx("div",{class:m.TOOLTIP_CSS.base},a&&n.tsx("div",{class:m.TOOLTIP_CSS.content},a))};g._createClass(f,[{key:"_formattedContent",get:function(){const a=
this._messages;var c=this.accumulatedShadowTime;if(k.isNone(a)||k.isNone(c))return null;c=c<p?h.roundToNearest(c,x):h.roundToNearest(c,p);return w.substitute(a.timeInShadow,{duration:t.formatDuration(c)})}}]);return f}(u);d.__decorate([e.property()],b.ShadowTooltipContent.prototype,"accumulatedShadowTime",void 0);d.__decorate([e.property()],b.ShadowTooltipContent.prototype,"view",void 0);d.__decorate([e.property(),v.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],b.ShadowTooltipContent.prototype,
"_messages",void 0);d.__decorate([e.property({readOnly:!0})],b.ShadowTooltipContent.prototype,"_formattedContent",null);b.ShadowTooltipContent=d.__decorate([r.subclass("esri.widgets.ShadowCast.components.ShadowTooltipContent")],b.ShadowTooltipContent);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});