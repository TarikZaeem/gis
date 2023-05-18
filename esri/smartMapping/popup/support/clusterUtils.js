// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/RelationshipContent ../../../popup/content/TextContent ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../popup/support/FieldInfoFormat ./utils ../../support/clusterUtils ../../../views/2d/layers/support/clusterUtils".split(" "),
function(t,C,u,J,P,Q,R,S,T,U,V,v,K,L,M,D,n,E){function w(a){const {fieldName:b,label:d,type:c}=a;a=J.numericTypes.includes(c);a=new L({fieldName:b,label:d,visible:!0,format:a?{places:"integer"===c||"small-integer"===c?0:2,digitSeparator:!0}:null});"date"===c&&(a.format=new M({dateFormat:"short-date-short-time"}));return a}function p(a,b){return(a=b.getField(a))&&(a.alias||a.name)}function F(a,b,d,c){const {attributeInfo:g,statisticType:h}=b,{field:m,normalizationField:f}=g;b="";let e;"avg"===h?e=
f?c.clusters.avgNormFieldSummary:c.clusters.avgFieldSummary:"type"===h&&(e=c.clusters.predominantFieldSummary);e&&(c=g.valueExpression?g.valueExpressionTitle:p(m,a),a=f&&p(f,a),b=u.substitute(e,{fieldLabel:c||"",normFieldLabel:a||"",fieldValue:"{"+d+"}"}));return b}function G(a){return{fieldInfo:w({fieldName:n.clusterCountField,label:a.clusters.numFeatures,type:"integer"}),fieldSummary:new v({text:u.substitute(a.clusters.countSummary,{count:`{${n.clusterCountField}}`})})}}function x(){x=C._asyncToGenerator(function*(a,
b,d){if(!E.isClusterCompatibleRenderer(b))return null;var c=n.getStatisticInfos(a,b);const g=d.clusters.predominantNoneValue;b="unique-value"===b.type?b.uniqueValueInfos:[];const {fieldInfo:h,fieldSummary:m}=G(d),f=[m],e=[h],H=[];for(const q of c){const {statisticType:y,attributeInfo:N}=q;c=n.getClusterField(N,y);var k=void 0,l=a;const {attributeInfo:z,statisticType:I}=q,{field:O,normalizationField:A}=z;var r="";"avg"===I?k=A?d.clusters.avgNormFieldLabel:d.clusters.avgFieldLabel:"type"===I&&(k=d.clusters.predominantFieldLabel);
k&&(r=z.valueExpression?z.valueExpressionTitle:p(O,l),l=A&&p(A,l),r=u.substitute(k,{fieldLabel:r||"",normFieldLabel:l||""}));k=r;"avg"===y?(f.push(new v({text:F(a,q,c,d)})),e.push(w({fieldName:c,label:k,type:"double"}))):"type"===y&&(l=`expression/${c}`,f.push(new v({text:F(a,q,l,d)})),H.push(new K({name:c,title:k,returnType:"string",expression:n.getPredominantTypeExpression(b,c,g)})),e.push(w({fieldName:l})))}return{fieldInfos:e,expressionInfos:H,content:f}});return x.apply(this,arguments)}function B(){B=
C._asyncToGenerator(function*(a,b,d){if(!E.isClusterCompatibleRenderer(b))return null;const {fieldInfo:c,fieldSummary:g}=G(d);d=[g];const h=[c],m=[],{fieldInfos:f,expressionInfos:e}=yield D.getFieldAndExpressionInfos({renderer:b,layer:a,isFeatureReduction:!0});a=yield D.getContentFromFieldInfos(a,{fieldInfos:f,expressionInfos:e},!0);d.push(...a);h.push(...f);m.push(...e);return{fieldInfos:h,expressionInfos:m,content:d}});return B.apply(this,arguments)}t.getContentAndInfos=function(a,b,d){return x.apply(this,
arguments)};t.getContentAndInfosForPieChart=function(a,b,d){return B.apply(this,arguments)};Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});