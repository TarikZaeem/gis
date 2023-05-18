// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../enums ../shaders/VTLBackgroundMaterial ../shaders/VTLCircleMaterial ../shaders/VTLFillMaterial ../shaders/VTLLineMaterial ../shaders/VTLSymbolMaterial ./Filter ./StyleDefinition ./StyleProperty ../../webgl/definitions".split(" "),function(h,q,m,t,u,k,v,n,y,g,w,z){h.CapType=void 0;(function(e){e[e.BUTT=0]="BUTT";e[e.ROUND=1]="ROUND";e[e.SQUARE=2]="SQUARE";e[e.UNKNOWN=4]="UNKNOWN"})(h.CapType||(h.CapType={}));let p=function(){function e(a,
b,d,f){this.type=a;this.typeName=b.type;this.id=b.id;this.source=b.source;this.sourceLayer=b["source-layer"];this.minzoom=b.minzoom;this.maxzoom=b.maxzoom;this.filter=b.filter;this.layout=b.layout;this.paint=b.paint;this.z=d;this.uid=f;switch(a){case g.StyleLayerType.BACKGROUND:this._layoutDefinition=g.StyleDefinition.backgroundLayoutDefinition;this._paintDefinition=g.StyleDefinition.backgroundPaintDefinition;break;case g.StyleLayerType.FILL:this._layoutDefinition=g.StyleDefinition.fillLayoutDefinition;
this._paintDefinition=g.StyleDefinition.fillPaintDefinition;break;case g.StyleLayerType.LINE:this._layoutDefinition=g.StyleDefinition.lineLayoutDefinition;this._paintDefinition=g.StyleDefinition.linePaintDefinition;break;case g.StyleLayerType.SYMBOL:this._layoutDefinition=g.StyleDefinition.symbolLayoutDefinition;this._paintDefinition=g.StyleDefinition.symbolPaintDefinition;break;case g.StyleLayerType.CIRCLE:this._layoutDefinition=g.StyleDefinition.circleLayoutDefinition,this._paintDefinition=g.StyleDefinition.circlePaintDefinition}this._layoutProperties=
this._parseLayout(this.layout);this._paintProperties=this._parsePaint(this.paint)}var c=e.prototype;c.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=y.createFilter(this.filter)};c.getLayoutProperty=function(a){return this._layoutProperties[a]};c.getPaintProperty=function(a){return this._paintProperties[a]};c.getLayoutValue=function(a,b,d){let f;const l=this._layoutProperties[a];l&&(f=l.getValue(b,d));void 0===f&&(f=this._layoutDefinition[a]["default"]);
return f};c.getPaintValue=function(a,b,d){let f;const l=this._paintProperties[a];l&&(f=l.getValue(b,d));void 0===f&&(f=this._paintDefinition[a]["default"]);return f};c.isPainterDataDriven=function(){const a=this._paintProperties;if(a)for(const b in a)if(a[b].isDataDriven)return!0;return!1};c._parseLayout=function(a){const b={};for(const d in a){const f=this._layoutDefinition[d];f&&(b[d]=new w(f,a[d]))}return b};c._parsePaint=function(a){const b={};for(const d in a){const f=this._paintDefinition[d];
f&&(b[d]=new w(f,a[d]))}return b};c.computeAttributesKey=function(a,b,d,f){let l=0,x=0;for(const r of b){b=3;if(!r||r!==f){const {isLayout:A,isOptional:B}=d[r];b=A?this.getLayoutProperty(r):this.getPaintProperty(r);b=b?.interpolator?2:b?.isDataDriven?1:B&&!b?3:0}x|=b<<l;l+=2}return x<<3|a};return e}(),C=function(e){function c(a,b,d,f){a=e.call(this,a,b,d,f)||this;a.backgroundMaterial=new t.VTLBackgroundMaterial(a.computeAttributesKey(m.ShaderProgramType.BACKGROUND,t.VTLBackgroundMaterial.ATTRIBUTES,
t.VTLBackgroundMaterial.ATTRIBUTES_INFO));return a}q._inheritsLoose(c,e);return c}(p),D=function(e){function c(a,b,d,f){a=e.call(this,a,b,d,f)||this;b=a.getPaintProperty("fill-color");d=a.getPaintProperty("fill-opacity");f=a.getPaintProperty("fill-pattern");a.hasDataDrivenColor=b?.isDataDriven;a.hasDataDrivenOpacity=d?.isDataDriven;a.hasDataDrivenFill=a.hasDataDrivenColor||a.hasDataDrivenOpacity||f?.isDataDriven;d=a.getPaintProperty("fill-outline-color");a.outlineUsesFillColor=!d;a.hasDataDrivenOutlineColor=
d?.isDataDriven;a.hasDataDrivenOutline=d?d.isDataDriven:b?b.isDataDriven:!1;a.hasDataDrivenOutline=(d?a.hasDataDrivenOutlineColor:a.hasDataDrivenColor)||a.hasDataDrivenOpacity;a.fillMaterial=new k.VTLFillMaterial(a.computeAttributesKey(m.ShaderProgramType.FILL,k.VTLFillMaterial.ATTRIBUTES,k.VTLFillMaterial.ATTRIBUTES_INFO));a.outlineMaterial=new k.VTLOutlineMaterial(a.computeAttributesKey(m.ShaderProgramType.OUTLINE,a.outlineUsesFillColor?k.VTLOutlineMaterial.ATTRIBUTES_FILL:k.VTLOutlineMaterial.ATTRIBUTES_OUTLINE,
a.outlineUsesFillColor?k.VTLOutlineMaterial.ATTRIBUTES_INFO_FILL:k.VTLOutlineMaterial.ATTRIBUTES_INFO_OUTLINE),a.outlineUsesFillColor);return a}q._inheritsLoose(c,e);return c}(p),E=function(e){function c(a,b,d,f){a=e.call(this,a,b,d,f)||this;b=a.getPaintProperty("line-pattern");a.lineMaterial=new v.VTLLineMaterial(a.computeAttributesKey(m.ShaderProgramType.LINE,v.VTLLineMaterial.ATTRIBUTES,v.VTLLineMaterial.ATTRIBUTES_INFO,b?"line-dasharray":""));a.hasDataDrivenLine=a.getPaintProperty("line-blur")?.isDataDriven||
a.getPaintProperty("line-color")?.isDataDriven||a.getPaintProperty("line-gap-width")?.isDataDriven||a.getPaintProperty("line-offset")?.isDataDriven||a.getPaintProperty("line-opacity")?.isDataDriven||a.getPaintProperty("line-pattern")?.isDataDriven||a.getPaintProperty("line-dasharray")?.isDataDriven||a.getLayoutProperty("line-cap")?.isDataDriven||a.getPaintProperty("line-width")?.isDataDriven;a.canUseThinTessellation=!1;!a.hasDataDrivenLine&&(b=a.getPaintProperty("line-width"),!b||"number"===typeof b&&
.5*b<z.THIN_LINE_HALF_WIDTH_THRESHOLD)&&(b=a.getPaintProperty("line-offset"),!b||"number"===typeof b&&0===b)&&(a.canUseThinTessellation=!0);return a}q._inheritsLoose(c,e);c.prototype.getDashKey=function(a,b){switch(b){case h.CapType.BUTT:b="Butt";break;case h.CapType.ROUND:b="Round";break;case h.CapType.SQUARE:b="Square";break;default:b="Butt"}return`dasharray-[${a.toString()}]-${b}`};return c}(p),F=function(e){function c(a,b,d,f){a=e.call(this,a,b,d,f)||this;a.iconMaterial=new n.VTLIconMaterial(a.computeAttributesKey(m.ShaderProgramType.ICON,
n.VTLIconMaterial.ATTRIBUTES,n.VTLIconMaterial.ATTRIBUTES_INFO));a.textMaterial=new n.VTLTextMaterial(a.computeAttributesKey(m.ShaderProgramType.TEXT,n.VTLTextMaterial.ATTRIBUTES,n.VTLTextMaterial.ATTRIBUTES_INFO));a.hasDataDrivenIcon=a.getPaintProperty("icon-color")?.isDataDriven||a.getPaintProperty("icon-halo-blur")?.isDataDriven||a.getPaintProperty("icon-halo-color")?.isDataDriven||a.getPaintProperty("icon-halo-width")?.isDataDriven||a.getPaintProperty("icon-opacity")?.isDataDriven||a.getLayoutProperty("icon-size")?.isDataDriven;
a.hasDataDrivenText=a.getPaintProperty("text-color")?.isDataDriven||a.getPaintProperty("text-halo-blur")?.isDataDriven||a.getPaintProperty("text-halo-color")?.isDataDriven||a.getPaintProperty("text-halo-width")?.isDataDriven||a.getPaintProperty("text-opacity")?.isDataDriven||a.getLayoutProperty("text-size")?.isDataDriven;return a}q._inheritsLoose(c,e);return c}(p),G=function(e){function c(a,b,d,f){a=e.call(this,a,b,d,f)||this;a.circleMaterial=new u.VTLCircleMaterial(a.computeAttributesKey(m.ShaderProgramType.CIRCLE,
u.VTLCircleMaterial.ATTRIBUTES,u.VTLCircleMaterial.ATTRIBUTES_INFO));return a}q._inheritsLoose(c,e);return c}(p),H=function(){function e(c,a,b){this.allowOverlap=c.getLayoutValue("icon-allow-overlap",a);this.ignorePlacement=c.getLayoutValue("icon-ignore-placement",a);this.keepUpright=c.getLayoutValue("icon-keep-upright",a);this.optional=c.getLayoutValue("icon-optional",a);this.rotationAlignment=c.getLayoutValue("icon-rotation-alignment",a);this.rotationAlignment===g.RotationAlignment.AUTO&&(this.rotationAlignment=
b?g.RotationAlignment.MAP:g.RotationAlignment.VIEWPORT);b=c.getLayoutProperty("icon-anchor");b?.isDataDriven?this._anchorProp=b:this.anchor=c.getLayoutValue("icon-anchor",a);b=c.getLayoutProperty("icon-offset");b?.isDataDriven?this._offsetProp=b:this.offset=c.getLayoutValue("icon-offset",a);b=c.getLayoutProperty("icon-padding");b?.isDataDriven?this._paddingProp=b:this.padding=c.getLayoutValue("icon-padding",a);b=c.getLayoutProperty("icon-rotate");b?.isDataDriven?this._rotateProp=b:this.rotate=c.getLayoutValue("icon-rotate",
a);b=c.getLayoutProperty("icon-size");b?.isDataDriven?this._sizeProp=b:this.size=c.getLayoutValue("icon-size",a)}e.prototype.update=function(c,a){this._anchorProp&&(this.anchor=this._anchorProp.getValue(c,a));this._offsetProp&&(this.offset=this._offsetProp.getValue(c,a));this._paddingProp&&(this.padding=this._paddingProp.getValue(c,a));this._rotateProp&&(this.rotate=this._rotateProp.getValue(c,a));this._sizeProp&&(this.size=this._sizeProp.getValue(c,a))};return e}(),I=function(){function e(c,a,b){this.allowOverlap=
c.getLayoutValue("text-allow-overlap",a);this.ignorePlacement=c.getLayoutValue("text-ignore-placement",a);this.keepUpright=c.getLayoutValue("text-keep-upright",a);this.optional=c.getLayoutValue("text-optional",a);this.rotationAlignment=c.getLayoutValue("text-rotation-alignment",a);this.rotationAlignment===g.RotationAlignment.AUTO&&(this.rotationAlignment=b?g.RotationAlignment.MAP:g.RotationAlignment.VIEWPORT);b=c.getLayoutProperty("text-anchor");b?.isDataDriven?this._anchorProp=b:this.anchor=c.getLayoutValue("text-anchor",
a);b=c.getLayoutProperty("text-justify");b?.isDataDriven?this._justifyProp=b:this.justify=c.getLayoutValue("text-justify",a);b=c.getLayoutProperty("text-letter-spacing");b?.isDataDriven?this._letterSpacingProp=b:this.letterSpacing=c.getLayoutValue("text-letter-spacing",a);b=c.getLayoutProperty("text-line-height");b?.isDataDriven?this._lineHeightProp=b:this.lineHeight=c.getLayoutValue("text-line-height",a);b=c.getLayoutProperty("text-max-angle");b?.isDataDriven?this._maxAngleProp=b:this.maxAngle=c.getLayoutValue("text-max-angle",
a);b=c.getLayoutProperty("text-max-width");b?.isDataDriven?this._maxWidthProp=b:this.maxWidth=c.getLayoutValue("text-max-width",a);b=c.getLayoutProperty("text-offset");b?.isDataDriven?this._offsetProp=b:this.offset=c.getLayoutValue("text-offset",a);b=c.getLayoutProperty("text-padding");b?.isDataDriven?this._paddingProp=b:this.padding=c.getLayoutValue("text-padding",a);b=c.getLayoutProperty("text-rotate");b?.isDataDriven?this._rotateProp=b:this.rotate=c.getLayoutValue("text-rotate",a);b=c.getLayoutProperty("text-size");
b?.isDataDriven?this._sizeProp=b:this.size=c.getLayoutValue("text-size",a);b=c.getLayoutProperty("text-writing-mode");b?.isDataDriven?this._writingModeProp=b:this.writingMode=c.getLayoutValue("text-writing-mode",a)}e.prototype.update=function(c,a){this._anchorProp&&(this.anchor=this._anchorProp.getValue(c,a));this._justifyProp&&(this.justify=this._justifyProp.getValue(c,a));this._letterSpacingProp&&(this.letterSpacing=this._letterSpacingProp.getValue(c,a));this._lineHeightProp&&(this.lineHeight=this._lineHeightProp.getValue(c,
a));this._maxAngleProp&&(this.maxAngle=this._maxAngleProp.getValue(c,a));this._maxWidthProp&&(this.maxWidth=this._maxWidthProp.getValue(c,a));this._offsetProp&&(this.offset=this._offsetProp.getValue(c,a));this._paddingProp&&(this.padding=this._paddingProp.getValue(c,a));this._rotateProp&&(this.rotate=this._rotateProp.getValue(c,a));this._sizeProp&&(this.size=this._sizeProp.getValue(c,a));this._writingModeProp&&(this.writingMode=this._writingModeProp.getValue(c,a))};return e}();h.BackgroundStyleLayer=
C;h.CircleStyleLayer=G;h.FillStyleLayer=D;h.IconLayout=H;h.LineStyleLayer=E;h.StyleLayer=p;h.SymbolStyleLayer=F;h.TextLayout=I;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});