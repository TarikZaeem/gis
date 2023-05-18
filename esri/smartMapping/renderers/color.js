// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../renderers/PointCloudClassBreaksRenderer ../../renderers/PointCloudRenderer ../../renderers/PointCloudRGBRenderer ../../renderers/PointCloudStretchRenderer ../../renderers/PointCloudUniqueValueRenderer ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Error ../../core/maybe ../../intl/messages ../../intl/substitute ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/utils ../../renderers/visualVariables/ColorVariable ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ./support/utils ../statistics/support/ageUtils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/color".split(" "),
function(y,r,ya,za,fa,ha,Aa,W,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,k,w,E,ia,X,ja,Y,ka,la,Z,aa,d,B,F,C,l,x){function ma(a){return G.apply(this,arguments)}function G(){G=r._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new k("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new k("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a.forBinning&&F.verifyBinningParams(a,"color-visual-variable");const b={...a};if("90-10"===b.theme)throw new k("color-visual-variable:not-supported","Only 'high-to-low', 'above-and-below', 'centered-on', 'extremes', 'above', 'below' themes are supported.");var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);b.layer=a;if(!a)throw new k("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));
c=w.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);if("mesh"!==a.geometryType&&b.worldScale&&(!b.view||"3d"!==b.view.type))throw d.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");c=yield C.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=d.verifyBasicFieldValidity(a,c,"color-visual-variable:invalid-parameters"))throw a;return b});return G.apply(this,
arguments)}function na(a){return H.apply(this,arguments)}function H(){H=r._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new k("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new k("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&F.verifyBinningParams(a,
"color-continuous-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);b.layer=a;if(!a)throw new k("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));c=w.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=a.geometryType;
b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new k("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(b.symbolType.includes("3d-volumetric")&&
(!b.view||"3d"!==b.view.type))throw new k("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=yield C.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=d.verifyBasicFieldValidity(a,c,"color-continuous-renderer:invalid-parameters"))throw a;return b});return H.apply(this,arguments)}function oa(a){return I.apply(this,
arguments)}function I(){I=r._asyncToGenerator(function*(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new k("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(a.valueExpression&&!a.view)throw new k("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&F.verifyBinningParams(a,"color-class-breaks-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=
null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.classificationMethod=b.classificationMethod||"equal-interval";b.normalizationType=C.getNormalizationType(b);var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);b.layer=a;if(!a)throw new k("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));if(!(null!=b.minValue&&null!=b.maxValue||null==b.minValue&&null==
b.maxValue))throw new k("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");c=w.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=a.geometryType;b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new k("color-continuous-renderer:not-supported",
"3d-volumetric-uniform symbols are supported for point layers only");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new k("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=yield C.getFieldsList({field:b.field,normalizationField:b.normalizationField});if(a=d.verifyBasicFieldValidity(a,c,"color-class-breaks-renderer:invalid-parameters"))throw a;
return b});return I.apply(this,arguments)}function pa(a){if(!a||!a.layer)return Promise.reject(d.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));const b={...a};var c=[l.LayerType.PointCloudLayer];a=l.createLayerAdapter(b.layer,c);b.layer=a;b.density=b.density||25;b.size=b.size||"100%";if(!d.isValidPointSize(b.size))return Promise.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));
if(!a)return Promise.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", ")));c=w.isSome(b.signal)?{signal:b.signal}:null;return a.load(c).then(()=>b)}function qa(a){if(!(a&&a.layer&&a.field))return Promise.reject(d.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var b=a.field.toLowerCase();if("intensity"!==b&&"elevation"!==b)return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters",
"'field' should be either 'intensity' or 'elevation'"));const c={...a};b=[l.LayerType.PointCloudLayer];a=l.createLayerAdapter(c.layer,b);c.layer=a;c.density=c.density||25;c.size=c.size||"100%";if(!d.isValidPointSize(c.size))return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));if(!a)return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+
l.getLayerTypeLabels(b).join(", ")));b=w.isSome(c.signal)?{signal:c.signal}:null;return a.load(b).then(()=>c)}function ba(a){a={...a};const b=a.symbolType.includes("3d-volumetric");delete a.symbolType;delete a.defaultSymbolEnabled;delete a.colorMixMode;delete a.edgesType;a.worldScale=b;return a}function ra(a){return J.apply(this,arguments)}function J(){J=r._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view&&a.startTime&&a.endTime))throw new k("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");
a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;var b=l.createLayerAdapter(a.layer,l.featureCapableLayerTypes);a.layer=b;if(!b)throw new k("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(l.featureCapableLayerTypes).join(", "));var c=w.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:
!1;a.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?a.sizeOptimizationEnabled:!1;if("mesh"===c)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new k("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(a.symbolType.includes("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new k("color-age-renderer:invalid-parameters",
"'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(b=B.verifyDates(b,a.startTime,a.endTime,"color-age-renderer:invalid-parameters"))throw b;if(a.unit&&!B.supportedAgeUnits.includes(a.unit))throw new k("color-age-renderer:invalid-unit",`Supported units are: ${B.supportedAgeUnits.join(", ")}`);return a});return J.apply(this,arguments)}function K(a,b){return L.apply(this,arguments)}function L(){L=r._asyncToGenerator(function*(a,
b){let c=a.colorScheme,f=null;var e=null;e=yield d.getBasemapInfo(a.basemap,a.view);f=w.isSome(e.basemapId)?e.basemapId:null;e=w.isSome(e.basemapTheme)?e.basemapTheme:null;if(c)return{scheme:x.cloneScheme(c),basemapId:f,basemapTheme:e};b=b||a.theme||"high-to-low";const g=x.getSchemes({theme:b,basemap:f,basemapTheme:e,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view});g&&(f=g.basemapId,e=g.basemapTheme,c=a.schemeId?x.getSchemeById({id:b+"/"+f+"/"+a.schemeId,geometryType:a.geometryType}):
g.primaryScheme);return{scheme:c,basemapId:f,basemapTheme:e}});return L.apply(this,arguments)}function sa(a,b){return M.apply(this,arguments)}function M(){M=r._asyncToGenerator(function*(a,b){b=yield K({basemap:b.basemap,colorScheme:b.colorScheme,geometryType:b.layer.geometryType,schemeId:"elevation"===b.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"});const c=b.scheme;if(!c)throw d.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");
const f=d.createColors(c.colors,5);if(5>f.length)throw d.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const e=d.getDefaultDataRange(a,!1,!0),g=e?d.createDefaultStopValues(e[0],e[1],5):d.createStopValues(a);return{stops:Y.createColorStops({values:g,isDate:!1,dateFormatOptions:null,colors:f,labelIndexes:[0,2,4]}),basemapId:b.basemapId,basemapTheme:b.basemapTheme,statistics:a,defaultValuesUsed:!!e,colorScheme:x.cloneScheme(c)}});return M.apply(this,
arguments)}function ta(a,b,c,f,e){return N.apply(this,arguments)}function N(){N=r._asyncToGenerator(function*(a,b,c,f,e){const {field:g,theme:h}=a;f=yield K({basemap:a.basemap,theme:a.theme,geometryType:f,colorScheme:a.colorScheme,worldScale:a.worldScale,view:a.view});const m=f.scheme;if(!m)throw d.createError("color-visual-variable:insufficient-info","Unable to find color scheme");var n=d.createColors(m.colors,5);if(5>n.length)throw d.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors");
const t=m.id.includes("seq-");c=d.getDataRange(b,c,h,e,"90-10"!==h);e=d.createDataValues(c,b,h,t);const p=d.createColors(n,5);n=new ka({field:g,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:a.normalizationField,stops:e.map((u,q)=>({value:u,color:p[q]})),legendOptions:a.legendOptions});a=new ja({type:"color",minSliderValue:null!=a.minValue?a.minValue:b.min,maxSliderValue:null!=a.maxValue?a.maxValue:b.max,theme:m.theme});a=new X({visualVariables:[a]});
return{basemapId:f.basemapId,basemapTheme:f.basemapTheme,visualVariable:n,statistics:b,defaultValuesUsed:c.defaultValuesUsed,colorScheme:x.cloneScheme(m),authoringInfo:a}});return N.apply(this,arguments)}function ca(a,b,c,f,e,g,h){return O.apply(this,arguments)}function O(){O=r._asyncToGenerator(function*(a,b,c,f,e,g,h){const m=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{field:n,defaultSymbolEnabled:t}=h,p=x.cloneScheme(a.colorScheme),u=b&&b.opacity,q=[a.visualVariable.clone()];
b&&b.visualVariables&&b.visualVariables.length&&q.push(...b.visualVariables.map(z=>z.clone()));c&&c.minSize&&q.push(c.minSize);return{renderer:new W({classBreakInfos:[{minValue:-da,maxValue:da,symbol:d.createSymbol(g,{type:h.symbolType,color:p.noDataColor,size:d.getSymbolSizeFromScheme(p,g),outline:d.getSymbolOutlineFromScheme(p,g,u),meshInfo:{colorMixMode:h.colorMixMode,edgesType:h.edgesType}})}],defaultLabel:t?m.other:null,defaultSymbol:t?d.createSymbol(g,{type:h.symbolType,color:p.noDataColor,
size:d.getSymbolSizeFromScheme(p,g),outline:d.getSymbolOutlineFromScheme(p,g,u),meshInfo:{colorMixMode:h.colorMixMode,edgesType:h.edgesType}}):null,field:n,normalizationType:f,normalizationField:e,valueExpression:h.valueExpression,valueExpressionTitle:h.valueExpressionTitle,visualVariables:q,authoringInfo:a.authoringInfo&&a.authoringInfo.clone()}),visualVariable:a.visualVariable.clone(),statistics:a.statistics,defaultValuesUsed:a.defaultValuesUsed,colorScheme:x.cloneScheme(a.colorScheme),basemapId:a.basemapId,
basemapTheme:a.basemapTheme}});return O.apply(this,arguments)}function P(a){return Q.apply(this,arguments)}function Q(){Q=r._asyncToGenerator(function*(a){a=yield ma(a);const {view:b,field:c,valueExpression:f,minValue:e,maxValue:g,layer:h,normalizationField:m,signal:n,statistics:t}=a,[p,u]=yield Promise.all([t?t:d.getSummaryStatistics({layer:h,field:c,valueExpression:f,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:m?"field":void 0,normalizationField:m,minValue:e,maxValue:g,view:b,
signal:n}),"90-10"===a.theme?d.getClassBreaks({layer:h,field:c,normalizationField:m,valueExpression:f,classificationMethod:"quantile",minValue:e,maxValue:g,view:b,numClasses:10,signal:n}):null]),q=c&&"function"!==typeof c?h.getField(c):null;return ta(a,p,u?.result,h.geometryType,q&&"date"===q.type)});return Q.apply(this,arguments)}function ua(a,b){a=a.colorsForClassBreaks;let c;if(a&&0<a.length&&(a.some(e=>{e.numClasses===b&&(c=e.colors);return!!c}),!c)){var f=a[a.length-1];a=b-f.numClasses;if(0<
a){const e=f.colors[f.numClasses-1];c=f.colors.splice(0);for(f=1;f<=a;f++)c.push(e)}}c&&(c=d.createColors(c,c.length));return c}function va(a,b){return R.apply(this,arguments)}function R(){R=r._asyncToGenerator(function*(a,b){var c=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const f=a.defaultSymbolEnabled,e=a.layer.geometryType,g=a.classificationMethod,h="standard-deviation"===g,m=yield K({basemap:a.basemap,geometryType:e,theme:h?"above-and-below":null,colorScheme:a.colorScheme,
worldScale:a.symbolType.includes("3d-volumetric"),view:a.view}),n=m.scheme,{result:t,outlineResult:p}=b,u=t.classBreakInfos,q=a.normalizationType;if(!n)throw new k("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const z=ua(n,u.length);if(!z||z.length!==u.length)throw new k("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const D=p&&p.opacity;c=new W({classBreakInfos:u.map((A,v)=>({minValue:A.minValue,maxValue:A.maxValue,symbol:d.createSymbol(e,
{type:a.symbolType,color:z[v],size:d.getSymbolSizeFromScheme(n,e),outline:d.getSymbolOutlineFromScheme(n,e,D),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}),label:A.label})),defaultLabel:f?c.other:null,defaultSymbol:f?d.createSymbol(e,{type:a.symbolType,color:n.noDataColor,size:d.getSymbolSizeFromScheme(n,e),outline:d.getSymbolOutlineFromScheme(n,e,D),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}):null,field:a.field,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,
normalizationType:q,normalizationField:a.normalizationField,normalizationTotal:"percent-of-total"===q?t.normalizationTotal:void 0,legendOptions:a.legendOptions,authoringInfo:new X({type:"class-breaks-color",classificationMethod:g,standardDeviationInterval:a.standardDeviationInterval})});h||Y.setLabelsForClassBreaks({classBreakInfos:c.classBreakInfos,classificationMethod:g,normalizationType:q,round:!0});p&&p.visualVariables&&p.visualVariables.length&&(c.visualVariables=p.visualVariables.map(A=>A.clone()));
return{renderer:c,colorScheme:x.cloneScheme(n),classBreaksResult:t,defaultValuesUsed:b.defaultValuesUsed,basemapId:m.basemapId,basemapTheme:m.basemapTheme}});return R.apply(this,arguments)}function S(){S=r._asyncToGenerator(function*(a){a=yield na(a);const {layer:b,view:c,signal:f}=a,[e,g,h]=yield Promise.all([P(ba(a)),a.outlineOptimizationEnabled?Z({layer:b,view:c,signal:f}):null,a.sizeOptimizationEnabled?aa({layer:b,view:c,signal:f}):null]),m=a.normalizationField;return ca(e,g,h,m?"field":void 0,
m,b.geometryType,a)});return S.apply(this,arguments)}function T(){T=r._asyncToGenerator(function*(a){a=yield oa(a);var b=d.getClassBreaks;const c={...a};delete c.basemap;delete c.colorScheme;delete c.legendOptions;delete c.symbolType;delete c.defaultSymbolEnabled;delete c.colorMixMode;delete c.edgesType;c.analyzeData=!(null!=c.minValue&&null!=c.maxValue);b=yield b.call(d,c,a.outlineOptimizationEnabled);return va(a,b)});return T.apply(this,arguments)}function U(){U=r._asyncToGenerator(function*(a){a=
yield qa(a);var b=a.statistics?a.statistics:yield d.getSummaryStatistics({layer:a.layer,field:a.field,signal:a.signal});b=yield sa(b,a);return{renderer:new ha({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:d.getPointSizeAlgorithm(a.size),stops:b.stops}),basemapId:b.basemapId,basemapTheme:b.basemapTheme,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,colorScheme:b.colorScheme}});return U.apply(this,arguments)}function V(){V=r._asyncToGenerator(function*(a){var b=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");
const c=yield ra(a),{defaultSymbolEnabled:f,view:e,startTime:g,endTime:h,symbolType:m,colorMixMode:n,edgesType:t,minValue:p,maxValue:u,signal:q}=c;a=c.layer;const [z,D,A]=yield Promise.all([c.unit?{unit:c.unit,statistics:null}:la({view:e,layer:a,startTime:g,endTime:h,minValue:p,maxValue:u,signal:q}),c.outlineOptimizationEnabled?Z({layer:a,view:e,signal:q}):null,c.sizeOptimizationEnabled?aa({layer:a,view:e,signal:q}):null]),{unit:v,statistics:wa}=z,ea=B.getAgeExpressions({layer:a,startTime:g,endTime:h,
unit:v}).valueExpression;b=ia.substitute(b[`ageInfo_${v}`],{unit:v,startTime:d.formatDate(g,v,a),endTime:d.formatDate(h,v,a)});b=yield P(ba({layer:a,basemap:c.basemap,valueExpression:ea,symbolType:m,statistics:wa,legendOptions:{title:b},colorScheme:c.colorScheme,theme:c.theme,view:e,minValue:c.minValue,maxValue:c.maxValue,signal:q}));a=yield ca(b,D,A,null,null,a.geometryType,{layer:a,valueExpression:ea,defaultSymbolEnabled:f,symbolType:m,colorMixMode:n,edgesType:t});a.renderer.authoringInfo.visualVariables.forEach(xa=>
d.updateAgeRendererAuthoringInfoVV(xa,g,h,v));return{...a,unit:v}});return V.apply(this,arguments)}const da=2**53-1;y.createAgeRenderer=function(a){return V.apply(this,arguments)};y.createClassBreaksRenderer=function(a){return T.apply(this,arguments)};y.createContinuousRenderer=function(a){return S.apply(this,arguments)};y.createPCContinuousRenderer=function(a){return U.apply(this,arguments)};y.createPCTrueColorRenderer=function(a){return pa(a).then(b=>({renderer:new fa({field:"RGB",pointsPerInch:b.density,
pointSizeAlgorithm:d.getPointSizeAlgorithm(b.size)})}))};y.createVisualVariable=P;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});