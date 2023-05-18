// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../layers/support/fieldUtils ./support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(p,e,t,q,g,u,r,f){function v(a){return h.apply(this,arguments)}function h(){h=p._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new e("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");
if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new e("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&u.verifyBinningParams(a,"summary-statistics");const {layer:k,...l}=a;var c=a.forBinning?f.binningCapableLayerTypes:f.defaultSupportedLayerTypes,b=f.createLayerAdapter(k,c,a.forBinning);a={layerAdapter:b,...l};a.normalizationType=r.getNormalizationType(a);if(!b)throw new e("summary-statistics:invalid-parameters","'layer' must be one of these types: "+
f.getLayerTypeLabels(c).join(", "));c=t.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);var d=a.field;c=a.normalizationType;const w=a.valueExpression||a.sqlExpression;d=d?b.getField(d):null;var m=yield r.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(m=g.verifyBasicFieldValidity(b,m,"summary-statistics:invalid-parameters"))throw m;if(d){if(b=g.verifyFieldType(b,d,"summary-statistics:invalid-parameters",x))throw b;if(q.isDateField(d)&&
c)throw new e("summary-statistics:invalid-parameters","Normalization is not allowed for date fields");}else if(w&&c)throw new e("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(b=g.verifyFilterValidty(a.filter,"summary-statistics:invalid-parameters"))throw b;return a});return h.apply(this,arguments)}function n(){n=p._asyncToGenerator(function*(a){const {layerAdapter:k,...l}=yield v(a);return k.summaryStatistics(l)});
return n.apply(this,arguments)}const x=[...q.numericTypes,"date","string"];return function(a){return n.apply(this,arguments)}});