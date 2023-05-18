// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/events ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/subclass ../../renderers/support/utils ../Widget ./FeatureMedia/FeatureMediaViewModel ./support/FeatureElementInfo ./support/featureUtils ../support/chartUtils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory ../../support/themeUtils".split(" "),
function(u,n,C,w,q,m,K,D,E,F,y,G,H,z,A,I,p,J){m=function(B){function x(a,b){var e=B.call(this,a,b)||this;e._refreshTimer=null;e._refreshIntervalInfo=null;e._featureElementInfo=null;e.viewModel=new y;e.messages=null;e._getChartDependencies=function(){var k=u._asyncToGenerator(function*(f){const g=yield z.loadChartsModule(),{destroyed:c,viewModel:d}=u._assertThisInitialized(e);if(!c&&d&&f){var {activeMediaInfo:l}=d,t=yield e._getRendererColors(g);e._renderChart({chartDiv:f,mediaInfo:l,chartsModule:g,
colorMap:t})}});return function(f){return k.apply(this,arguments)}}();return e}u._inheritsLoose(x,B);var h=x.prototype;h.initialize=function(){this._featureElementInfo=new G;this.addHandles([w.watch(()=>[this.viewModel?.activeMediaInfo,this.viewModel?.activeMediaInfoIndex],()=>this._setupMediaRefreshTimer(),w.initial),w.watch(()=>[this.viewModel?.description,this.viewModel?.title],()=>this._setupFeatureElementInfo(),w.initial)])};h.destroy=function(){this._clearMediaRefreshTimer();this._featureElementInfo?.destroy()};
h.render=function(){return p.tsx("div",{bind:this,class:"esri-feature-media",onkeyup:this._handleMediaKeyup},this._featureElementInfo?.render(),this.renderMedia())};h.renderMedia=function(){const {formattedMediaInfoCount:a}=this.viewModel;return a?p.tsx("div",{key:"media-element-container",class:"esri-feature-media__container"},this.renderMediaPageButton("previous"),this.renderMediaInfo(),this.renderMediaPageButton("next")):null};h.renderImageMediaInfo=function(a){var {_refreshIntervalInfo:b}=this;
const {activeMediaInfoIndex:e,formattedMediaInfoCount:k}=this.viewModel,{value:f,refreshInterval:g,altText:c,title:d,type:l}=a,{sourceURL:t,linkURL:v}=f;a=H.shouldOpenInNewTab(v??void 0)?"_blank":"_self";const r="_blank"===a?"noreferrer":"";b=g?b:null;b=p.tsx("img",{alt:c||d,key:`media-${l}-${e}-${k}-${b?b.timestamp:0}`,src:(b?b.sourceURL:t)??void 0});return(a=v?p.tsx("a",{title:d,href:v,rel:r,target:a},b):null)?a:b};h.renderChartMediaInfo=function(a){const {activeMediaInfoIndex:b,formattedMediaInfoCount:e}=
this.viewModel;return p.tsx("div",{key:`media-${a.type}-${b}-${e}`,bind:this,class:"esri-feature-media__chart",afterCreate:this._getChartDependencies})};h.renderMediaInfoType=function(){const {activeMediaInfo:a}=this.viewModel;return a?"image"===a.type?this.renderImageMediaInfo(a):a.type.includes("chart")?this.renderChartMediaInfo(a):null:null};h.renderMediaInfo=function(){var {activeMediaInfo:a}=this.viewModel;if(!a)return null;const b=a.title?p.tsx("div",{key:"media-title",class:"esri-feature-media__item-title",
innerHTML:a.title}):null;a=a.caption?p.tsx("div",{key:"media-caption",class:"esri-feature-media__item-caption",innerHTML:a.caption}):null;return p.tsx("div",{key:"media-container",class:"esri-feature-media__item-container"},p.tsx("div",{key:"media-item-container",class:"esri-feature-media__item"},this.renderMediaInfoType()),b,a)};h.renderMediaPageButton=function(a){if(2>this.viewModel.formattedMediaInfoCount)return null;const b=(a="previous"===a)?this.messages.previous:this.messages.next,e=a?this.classes("esri-feature-media__button",
"esri-feature-media__previous"):this.classes("esri-feature-media__button","esri-feature-media__next"),k=a?this.classes("esri-feature-media__icon","esri-feature-media__previous-icon","esri-icon-left-triangle-arrow"):this.classes("esri-feature-media__icon","esri-feature-media__next-icon","esri-icon-right-triangle-arrow"),f=a?this.classes("esri-feature-media__icon","esri-feature-media__previous-icon--rtl","esri-icon-right-triangle-arrow"):this.classes("esri-feature-media__icon","esri-feature-media__next-icon--rtl",
"esri-icon-left-triangle-arrow");return p.tsx("button",{type:"button",key:a?"media-previous":"media-next",title:b,"aria-label":b,tabIndex:0,class:e,bind:this,onclick:a?this._previous:this._next},p.tsx("span",{"aria-hidden":"true",class:k}),p.tsx("span",{"aria-hidden":"true",class:f}))};h._setupFeatureElementInfo=function(){const {description:a,title:b}=this;this._featureElementInfo?.set({description:a,title:b})};h._next=function(){this.viewModel.next()};h._previous=function(){this.viewModel.previous()};
h._getRenderer=function(){const {isAggregate:a,layer:b}=this.viewModel;return a&&b?.featureReduction&&"renderer"in b.featureReduction?b.featureReduction.renderer:b?.renderer};h._getRendererColors=function(){var a=u._asyncToGenerator(function*(b){const {am4core:e}=b,k=new Map;b=this._getRenderer();if(!b)return k;const f=yield E.getColorsFromRenderer(b);f.delete("default");if(!Array.from(f.values()).every(g=>1===g?.length))return k;k.set("default-line-value",e.color({r:50,g:50,b:50,a:1}));Array.from(f.keys()).forEach(g=>
{g&&k.set(g,e.color(f.get(g)?.[0].toCss(!0)))});return k});return function(b){return a.apply(this,arguments)}}();h._handleMediaKeyup=function(a){const b=C.eventKey(a);"ArrowLeft"===b&&(a.stopPropagation(),this.viewModel.previous());"ArrowRight"===b&&(a.stopPropagation(),this.viewModel.next())};h._renderChart=function(a){const {abilities:b}=this.viewModel,{chartsModule:e,chartDiv:k,mediaInfo:f,colorMap:g}=a,{value:c,type:d}=f,{am4core:l}=e,t=z.getColorSet(l);J.isDarkTheme()&&l.useTheme(e.am4themes_dark);
const v=window.matchMedia("(prefers-reduced-motion: reduce)");b.chartAnimation&&!v.matches?l.useTheme(e.am4themes_animated):l.unuseTheme(e.am4themes_animated);l.useTheme(function(r){r instanceof l.ColorSet&&t&&(r.list=t)});a="pie-chart"===d?this._createPieChart(a):this._createXYChart(a);k.setAttribute("aria-label",f.altText||f.title);a.data=c.series.map(r=>({tooltip:r.tooltip,value:r.value,color:g.get(r.fieldName)})).filter(r=>"pie-chart"===d?null!=r.value&&0<r.value:!0)};h._customizeChartTooltip=
function(a,b){a&&(a.label.wrap=!0,a.label.maxWidth=200,a.autoTextColor=!1,a.getFillFromObject=!1,a.label.fill=b.color("#ffffff"),a.background.fill=b.color({r:0,g:0,b:0,a:.7}))};h._createPieChart=function(a){const {chartDiv:b,chartsModule:e}=a,{am4core:k,am4charts:f}=e;a=k.create(b,f.PieChart);a.rtl=A.isRTL(this.container);const g=a.series.push(new f.PieSeries);g.labels.template.disabled=!0;g.ticks.template.disabled=!0;g.dataFields.value="value";g.dataFields.category="tooltip";this._customizeChartTooltip(g.tooltip,
k);g.slices.template.propertyFields.fill="color";g.slices.template.propertyFields.stroke="color";return a};h._getMinSeriesValue=function(a){let b=0;a.forEach(e=>b=Math.min(e.value,b));return b};h._createColumnChart=function(a,b){const {chartsModule:e,mediaInfo:k}=b;({value:b}=k);const {am4core:f,am4charts:g}=e;var c=a.xAxes.push(new g.CategoryAxis);c.dataFields.category="tooltip";c.renderer.labels.template.disabled=!0;const d=c.tooltip;this._customizeChartTooltip(d,f);d.events.on("sizechanged",()=>
{d.dy=-d.contentHeight});c=a.yAxes.push(new g.ValueAxis);const l=c.renderer.labels.template;c.renderer.minLabelPosition=.05;c.renderer.maxLabelPosition=.95;c.min=this._getMinSeriesValue(b.series);this._customizeChartTooltip(c.tooltip,f);l.wrap=!0;c=a.series.push(new g.ColumnSeries);c.dataFields.valueY="value";c.dataFields.categoryX="tooltip";c.columns.template.propertyFields.fill="color";c.columns.template.propertyFields.stroke="color";a.cursor=new g.XYCursor;15<b.series.length&&(a.scrollbarX=new f.Scrollbar)};
h._createBarChart=function(a,b){const {chartsModule:e,mediaInfo:k}=b;({value:b}=k);const {am4core:f,am4charts:g}=e;var c=a.yAxes.push(new g.CategoryAxis);c.dataFields.category="tooltip";c.renderer.inversed=!0;c.renderer.labels.template.disabled=!0;const d=c.tooltip;this._customizeChartTooltip(d,f);d.events.on("sizechanged",()=>{d.dx=d.contentWidth});c=a.xAxes.push(new g.ValueAxis);const l=c.renderer.labels.template;c.renderer.minLabelPosition=.05;c.renderer.maxLabelPosition=.95;c.min=this._getMinSeriesValue(b.series);
this._customizeChartTooltip(c.tooltip,f);l.wrap=!0;c=a.series.push(new g.ColumnSeries);c.dataFields.valueX="value";c.dataFields.categoryY="tooltip";c.columns.template.propertyFields.fill="color";c.columns.template.propertyFields.stroke="color";a.cursor=new g.XYCursor;15<b.series.length&&(a.scrollbarY=new f.Scrollbar)};h._createLineChart=function(a,b){const {chartsModule:e,mediaInfo:k,colorMap:f}=b;({value:b}=k);const {am4core:g,am4charts:c}=e;var d=a.xAxes.push(new c.CategoryAxis);d.dataFields.category=
"tooltip";d.renderer.labels.template.disabled=!0;const l=d.tooltip;this._customizeChartTooltip(l,g);l.events.on("sizechanged",()=>{l.dy=-l.contentHeight});d=a.yAxes.push(new c.ValueAxis);var t=d.renderer.labels.template;d.renderer.minLabelPosition=.05;d.renderer.maxLabelPosition=.95;d.min=this._getMinSeriesValue(b.series);this._customizeChartTooltip(d.tooltip,g);t.wrap=!0;d=a.series.push(new c.LineSeries);d.dataFields.categoryX="tooltip";d.dataFields.valueY="value";d.strokeWidth=1;if(t=f.get("default-line-value"))d.stroke=
t;d=d.bullets.push(new c.CircleBullet);d.propertyFields.fill="color";d.propertyFields.stroke="color";a.cursor=new c.XYCursor;15<b.series.length&&(a.scrollbarX=new g.Scrollbar)};h._createXYChart=function(a){const {chartDiv:b,chartsModule:e,mediaInfo:k}=a,{type:f}=k,{am4core:g,am4charts:c}=e,d=g.create(b,c.XYChart);d.rtl=A.isRTL(this.container);"column-chart"===f&&this._createColumnChart(d,a);"bar-chart"===f&&this._createBarChart(d,a);"line-chart"===f&&this._createLineChart(d,a);return d};h._clearMediaRefreshTimer=
function(){const {_refreshTimer:a}=this;a&&(clearTimeout(a),this._refreshTimer=null)};h._updateMediaInfoTimestamp=function(a){const b=Date.now();this._refreshIntervalInfo={timestamp:b,sourceURL:a&&this._getImageSource(a,b)};this.scheduleRender()};h._setupMediaRefreshTimer=function(){this._clearMediaRefreshTimer();const {activeMediaInfo:a}=this.viewModel;a&&"image"===a.type&&a.refreshInterval&&this._setRefreshTimeout(a)};h._setRefreshTimeout=function(a){const {refreshInterval:b,value:e}=a;b&&(a=6E4*
b,this._updateMediaInfoTimestamp(e.sourceURL),this._refreshTimer=setInterval(()=>{this._updateMediaInfoTimestamp(e.sourceURL)},a))};h._getImageSource=function(a,b){const e=a.includes("?")?"\x26":"?",[k,f=""]=a.split("#");return`${k}${e}timestamp=${b}${f?"#":""}${f}`};u._createClass(x,[{key:"attributes",get:function(){return this.viewModel.attributes},set:function(a){this.viewModel.attributes=a}},{key:"activeMediaInfoIndex",get:function(){return this.viewModel.activeMediaInfoIndex},set:function(a){this.viewModel.activeMediaInfoIndex=
a}},{key:"description",get:function(){return this.viewModel.description},set:function(a){this.viewModel.description=a}},{key:"fieldInfoMap",get:function(){return this.viewModel.fieldInfoMap},set:function(a){this.viewModel.fieldInfoMap=a}},{key:"layer",get:function(){return this.viewModel.layer},set:function(a){this.viewModel.layer=a}},{key:"mediaInfos",get:function(){return this.viewModel.mediaInfos},set:function(a){this.viewModel.mediaInfos=a}},{key:"popupTemplate",get:function(){return this.viewModel.popupTemplate},
set:function(a){this.viewModel.popupTemplate=a}},{key:"relatedInfos",get:function(){return this.viewModel.relatedInfos},set:function(a){this.viewModel.relatedInfos=a}},{key:"title",get:function(){return this.viewModel.title},set:function(a){this.viewModel.title=a}}]);return x}(F);n.__decorate([q.property()],m.prototype,"attributes",null);n.__decorate([q.property()],m.prototype,"activeMediaInfoIndex",null);n.__decorate([q.property()],m.prototype,"description",null);n.__decorate([q.property()],m.prototype,
"fieldInfoMap",null);n.__decorate([q.property()],m.prototype,"layer",null);n.__decorate([q.property()],m.prototype,"mediaInfos",null);n.__decorate([q.property()],m.prototype,"popupTemplate",null);n.__decorate([q.property()],m.prototype,"relatedInfos",null);n.__decorate([q.property()],m.prototype,"title",null);n.__decorate([q.property({type:y})],m.prototype,"viewModel",void 0);n.__decorate([q.property(),I.messageBundle("esri/widgets/Feature/t9n/Feature")],m.prototype,"messages",void 0);return m=n.__decorate([D.subclass("esri.widgets.Feature.FeatureMedia")],
m)});