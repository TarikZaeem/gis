// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ./ArcadeModule ./ArcadeModuleLoader ./Dictionary ./executionError ./Feature ./FunctionWrapper ../chunks/languageUtils ./treeAnalysis ../chunks/array ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../geometry/Geometry ../geometry/SpatialReference".split(" "),function(H,Q,K,R,x,d,fa,u,e,ha,ia,ja,L,ka,la,ma,na,S,T){function U(b,a){const c=[];for(let f=0;f<a.arguments.length;f++)c.push(l(b,
a.arguments[f]));return c}function r(b,a,c){try{return!0===a.preparsed?c(b,null,a.arguments):c(b,a,U(b,a))}catch(f){throw f;}}function l(b,a){try{switch(a?.type){case "EmptyStatement":return e.voidOperation;case "VariableDeclarator":let A=null===a.init?null:l(b,a.init);A===e.voidOperation&&(A=null);if("Identifier"!==a.id.type)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);const V=a.id.name.toLowerCase();null!=b.localScope?b.localScope[V]={value:A,valueset:!0,node:a.init}:
b.globalScope[V]={value:A,valueset:!0,node:a.init};return e.voidOperation;case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)l(b,a.declarations[c]);return e.voidOperation;case "ImportDeclaration":const W=a.specifiers[0].local.name.toLowerCase(),I=b.libraryResolver.loadLibrary(W);c=null;b.libraryResolver._moduleSingletons?.has(I.uri)?c=b.libraryResolver._moduleSingletons.get(I.uri):(c=new B(I),c.loadModule(b),b.libraryResolver._moduleSingletons?.set(I.uri,c));b.globalScope[W]={value:c,
valueset:!0,node:a};return e.voidOperation;case "ExportNamedDeclaration":l(b,a.declaration);if("FunctionDeclaration"===a.declaration.type)b.exports[a.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===a.declaration.type)for(const h of a.declaration.declarations)b.exports[h.id.name.toLowerCase()]="variable";return e.voidOperation;case "BlockStatement":case "Program":a:{let h=e.voidOperation;for(c=0;c<a.body.length;c++)if(h=l(b,a.body[c]),h instanceof e.ReturnResult||h===
e.breakResult||h===e.continueResult){var f=h;break a}f=h}return f;case "FunctionDeclaration":const oa=a.id.name.toLowerCase();b.globalScope[oa]={valueset:!0,node:null,value:new pa(a,b)};return e.voidOperation;case "ReturnStatement":if(null===a.argument)var g=new e.ReturnResult(e.voidOperation);else{var m=l(b,a.argument);g=new e.ReturnResult(m)}return g;case "IfStatement":{const h=l(b,a.test);if(!0===h)var p=l(b,a.consequent);else if(!1===h)p=null!==a.alternate?l(b,a.alternate):e.voidOperation;else throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.BooleanConditionRequired,a);}return p;case "ExpressionStatement":if("AssignmentExpression"===a.expression.type||"UpdateExpression"===a.expression.type)var v=l(b,a.expression);else if("CallExpression"===a.expression.type){const h=l(b,a.expression);v=h===e.voidOperation?e.voidOperation:new e.ImplicitResult(h)}else{var M=l(b,a.expression);v=M===e.voidOperation?e.voidOperation:new e.ImplicitResult(M)}return v;case "AssignmentExpression":c=null;var k="";if("MemberExpression"===a.left.type){c=
l(b,a.left.object);if(!0===a.left.computed)k=l(b,a.left.property);else if("Identifier"===a.left.property.type)k=a.left.property.name;else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);const h=l(b,a.right);if(e.isArray(c))if(e.isNumber(k)){0>k&&(k=c.length+k);if(0>k||k>c.length)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.OutOfBounds,a);if(k===c.length&&"\x3d"!==a.operator)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.OutOfBounds,a);c[k]=w(h,a.operator,
c[k],a,b)}else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ArrayAccessorMustBeNumber,a);else if(c instanceof x){if(!1===e.isString(k))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===c.hasField(k))c.setField(k,w(h,a.operator,c.field(k),a,b));else{if("\x3d"!==a.operator)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FieldNotFound,a,{key:k});c.setField(k,w(h,a.operator,null,a,b))}}else if(e.isFeature(c)){if(!1===e.isString(k))throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===c.hasField(k))c.setField(k,w(h,a.operator,c.field(k),a,b));else{if("\x3d"!==a.operator)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FieldNotFound,a,{key:k});c.setField(k,w(h,a.operator,null,a,b))}}else{if(e.isImmutableArray(c))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.Immutable,a);if(c instanceof B){if(!1===e.isString(k))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ModuleAccessorMustBeString,a);if(!0===
c.hasGlobal(k))c.setGlobal(k,w(h,a.operator,c.global(k),a,b));else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ModuleExportNotFound,a);}else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);}var t=e.voidOperation}else{c=a.left.name.toLowerCase();var C=l(b,a.right);if(null!=b.localScope&&void 0!==b.localScope[c])b.localScope[c]={value:w(C,a.operator,b.localScope[c].value,a,b),valueset:!0,node:a.right},t=e.voidOperation;else if(void 0!==b.globalScope[c])b.globalScope[c]=
{value:w(C,a.operator,b.globalScope[c].value,a,b),valueset:!0,node:a.right},t=e.voidOperation;else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);}return t;case "UpdateExpression":{let h;c=null;k="";if("MemberExpression"===a.argument.type){c=l(b,a.argument.object);!0===a.argument.computed?k=l(b,a.argument.property):"Identifier"===a.argument.property.type&&(k=a.argument.property.name);if(e.isArray(c))if(e.isNumber(k)){0>k&&(k=c.length+k);if(0>k||k>=c.length)throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.OutOfBounds,a);h=e.toNumber(c[k]);c[k]="++"===a.operator?h+1:h-1}else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ArrayAccessorMustBeNumber,a);else if(c instanceof x){if(!1===e.isString(k))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===c.hasField(k))h=e.toNumber(c.field(k)),c.setField(k,"++"===a.operator?h+1:h-1);else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FieldNotFound,a);}else if(e.isFeature(c)){if(!1===
e.isString(k))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.KeyAccessorMustBeString,a);if(!0===c.hasField(k))h=e.toNumber(c.field(k)),c.setField(k,"++"===a.operator?h+1:h-1);else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FieldNotFound,a);}else{if(e.isImmutableArray(c))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.Immutable,a);if(c instanceof B){if(!1===e.isString(k))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ModuleAccessorMustBeString,a);if(!0===
c.hasGlobal(k))h=e.toNumber(c.global(k)),c.setGlobal(k,"++"===a.operator?h+1:h-1);else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.ModuleExportNotFound,a);}else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidParameter,a);}var y=!1===a.prefix?h:"++"===a.operator?h+1:h-1}else{c="Identifier"===a.argument.type?a.argument.name.toLowerCase():"";if(!c)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);if(null!=b.localScope&&void 0!==b.localScope[c])h=
e.toNumber(b.localScope[c].value),b.localScope[c]={value:"++"===a.operator?h+1:h-1,valueset:!0,node:a},y=!1===a.prefix?h:"++"===a.operator?h+1:h-1;else if(void 0!==b.globalScope[c])h=e.toNumber(b.globalScope[c].value),b.globalScope[c]={value:"++"===a.operator?h+1:h-1,valueset:!0,node:a},y=!1===a.prefix?h:"++"===a.operator?h+1:h-1;else throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);}}return y;case "BreakStatement":return e.breakResult;case "ContinueStatement":return e.continueResult;
case "TemplateElement":return a.value?a.value.cooked:"";case "TemplateLiteral":C="";y=0;for(const h of a.quasis)if(C+=h.value?h.value.cooked:"",!1===h.tail){if(a.expressions[y]){var J=e;k=J.toString;var q=l(b,a.expressions[y]),D=b;t=a;if(e.isFunctionParameter(q))throw new d.ArcadeExecutionError(D,d.ExecutionErrorCodes.NoFunctionInTemplateLiteral,t);c=k.call(J,q)}else c="";C+=c;y++}return C;case "ForStatement":null!==a.init&&l(b,a.init);D={testResult:!0,lastAction:e.voidOperation};do b:{c=b;k=a;q=
D;if(null!==k.test){q.testResult=l(c,k.test);if(!1===q.testResult)break b;if(!0!==q.testResult)throw new d.ArcadeExecutionError(c,d.ExecutionErrorCodes.BooleanConditionRequired,k);}q.lastAction=l(c,k.body);q.lastAction===e.breakResult?q.testResult=!1:q.lastAction instanceof e.ReturnResult?q.testResult=!1:null!==k.update&&l(c,k.update)}while(!0===D.testResult);J=D.lastAction instanceof e.ReturnResult?D.lastAction:e.voidOperation;return J;case "ForInStatement":return qa(b,a);case "WhileStatement":c=
!0;var F=e.voidOperation;c=l(b,a.test);if(!1===c)var X=e.voidOperation;else{if(!0!==c)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.BooleanConditionRequired,a);for(;!0===c;){F=l(b,a.body);if(F===e.breakResult)break;if(F instanceof e.ReturnResult)break;c=l(b,a.test);if(!0!==c&&!1!==c)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.BooleanConditionRequired,a);}X=F instanceof e.ReturnResult?F:e.voidOperation}return X;case "Identifier":return Y(b,a);case "MemberExpression":return ra(b,
a);case "Literal":return a.value;case "CallExpression":a:try{if("MemberExpression"===a.callee.type){const h=l(b,a.callee.object);if(!(h instanceof B))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FuncionNotFound,a);const z=!1===a.callee.computed?a.callee.property.name:l(b,a.callee.property);if(!h.hasGlobal(z))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FuncionNotFound,a);const E=h.global(z);if(!e.isFunctionParameter(E))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.CallNonFunction,
a);var N=E.call(b,a)}else{if("Identifier"!==a.callee.type)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FuncionNotFound,a);if(null!=b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){const h=b.localScope[a.callee.name.toLowerCase()];if(e.isFunctionParameter(h.value)){N=h.value.call(b,a);break a}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.CallNonFunction,a);}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){const h=b.globalScope[a.callee.name.toLowerCase()];
if(e.isFunctionParameter(h.value)){N=h.value.call(b,a);break a}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.CallNonFunction,a);}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.FuncionNotFound,a);}}catch(h){throw h;}return N;case "UnaryExpression":return sa(b,a);case "BinaryExpression":return ta(b,a);case "LogicalExpression":return ua(b,a);case "ArrayExpression":try{c=[];for(k=0;k<a.elements.length;k++){const h=l(b,a.elements[k]);if(e.isFunctionParameter(h))throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.NoFunctionInArray,a);h===e.voidOperation?c.push(null):c.push(h)}var va=c}catch(h){throw h;}return va;case "ObjectExpression":c={};const O=new Map;for(k=0;k<a.properties.length;k++){const h=l(b,a.properties[k]);if(e.isFunctionParameter(h.value))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.NoFunctionInDictionary,a);if(!1===e.isString(h.key))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.KeyMustBeString,a);let z=h.key.toString();const E=z.toLowerCase();O.has(E)?
z=O.get(E):O.set(E,z);c[z]=h.value===e.voidOperation?null:h.value}const Z=new x(c);Z.immutable=!1;return Z;case "Property":return{key:"Identifier"===a.key.type?a.key.name:l(b,a.key),value:l(b,a.value)};default:throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.Unrecognised,a);}}catch(A){throw d.ensureArcadeExecutionError(b,a,A);}}function qa(b,a){var c=l(b,a.right);"VariableDeclaration"===a.left.type&&l(b,a.left);let f=null;var g="";if("VariableDeclaration"===a.left.type){var m=a.left.declarations[0].id;
"Identifier"===m.type&&(g=m.name)}else"Identifier"===a.left.type&&(g=a.left.name);if(!g)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);g=g.toLowerCase();null!=b.localScope&&void 0!==b.localScope[g]&&(f=b.localScope[g]);null===f&&void 0!==b.globalScope[g]&&(f=b.globalScope[g]);if(null===f)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);if(e.isArray(c)||e.isString(c)){c=c.length;for(g=0;g<c;g++){f.value=g;m=l(b,a.body);if(m===e.breakResult)break;
if(m instanceof e.ReturnResult)return m}return e.voidOperation}if(e.isImmutableArray(c)){for(g=0;g<c.length();g++){f.value=g;m=l(b,a.body);if(m===e.breakResult)break;if(m instanceof e.ReturnResult)return m}return e.voidOperation}if(c instanceof x||e.isFeature(c))for(c=c.keys(),g=0;g<c.length;g++){f.value=c[g];m=l(b,a.body);if(m===e.breakResult)break;if(m instanceof e.ReturnResult)return m}else return e.voidOperation}function w(b,a,c,f,g){switch(a){case "\x3d":return b===e.voidOperation?null:b;case "/\x3d":return e.toNumber(c)/
e.toNumber(b);case "*\x3d":return e.toNumber(c)*e.toNumber(b);case "-\x3d":return e.toNumber(c)-e.toNumber(b);case "+\x3d":return e.isString(c)||e.isString(b)?e.toString(c)+e.toString(b):e.toNumber(c)+e.toNumber(b);case "%\x3d":return e.toNumber(c)%e.toNumber(b);default:throw new d.ArcadeExecutionError(g,d.ExecutionErrorCodes.UnsupportedOperator,f);}}function ra(b,a){try{const c=l(b,a.object);if(null===c)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.MemberOfNull,a);if(!1===a.computed){if("Identifier"===
a.property.type){if(c instanceof x||e.isFeature(c))return c.field(a.property.name);if(c instanceof S)return L.geometryMember(c,a.property.name,a,b);if(c instanceof B){if(!c.hasGlobal(a.property.name))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);return c.global(a.property.name)}}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}let f=l(b,a.property);if(c instanceof x||e.isFeature(c)){if(e.isString(f))return c.field(f);throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}if(c instanceof B){if(e.isString(f))return c.global(f);throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}if(c instanceof S){if(e.isString(f))return L.geometryMember(c,f,a,b);throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}if(e.isArray(c)){if(e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=c.length+f);if(f>=c.length||0>f)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.OutOfBounds,
a);return c[f]}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}if(e.isString(c)){if(e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=c.length+f);if(f>=c.length||0>f)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.OutOfBounds,a);return c[f]}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}if(e.isImmutableArray(c)&&e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=c.length()+f);if(f>=c.length()||0>f)throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.OutOfBounds,a);return c.get(f)}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidMemberAccessKey,a);}catch(c){throw c;}}function sa(b,a){try{const c=l(b,a.argument);if(e.isBoolean(c)){if("!"===a.operator)return!c;if("-"===a.operator)return-1*e.toNumber(c);if("+"===a.operator)return 1*e.toNumber(c);if("~"===a.operator)return~e.toNumber(c);throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.UnsupportedUnaryOperator,a);}if("~"===a.operator)return~e.toNumber(c);
if("-"===a.operator)return-1*e.toNumber(c);if("+"===a.operator)return 1*e.toNumber(c);throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.UnsupportedUnaryOperator,a);}catch(c){throw c;}}function ta(b,a){try{const c=[l(b,a.left),l(b,a.right)],f=c[0],g=c[1];switch(a.operator){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return e.binaryOperator(e.toNumber(f),e.toNumber(g),a.operator);case "\x3d\x3d":return e.equalityTest(f,g);case "!\x3d":return!e.equalityTest(f,
g);case "\x3c":return e.greaterThanLessThan(f,g,a.operator);case "\x3e":return e.greaterThanLessThan(f,g,a.operator);case "\x3c\x3d":return e.greaterThanLessThan(f,g,a.operator);case "\x3e\x3d":return e.greaterThanLessThan(f,g,a.operator);case "+":return e.isString(f)||e.isString(g)?e.toString(f)+e.toString(g):e.toNumber(f)+e.toNumber(g);case "-":return e.toNumber(f)-e.toNumber(g);case "*":return e.toNumber(f)*e.toNumber(g);case "/":return e.toNumber(f)/e.toNumber(g);case "%":return e.toNumber(f)%
e.toNumber(g);default:throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.UnsupportedOperator,a);}}catch(c){throw c;}}function ua(b,a){try{const c=l(b,a.left);if(e.isBoolean(c))switch(a.operator){case "||":if(!0===c)return c;const f=l(b,a.right);if(e.isBoolean(f))return f;throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.LogicExpressionOrAnd,a);case "\x26\x26":if(!1===c)return c;const g=l(b,a.right);if(e.isBoolean(g))return g;throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.LogicExpressionOrAnd,
a);default:throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.LogicExpressionOrAnd,a);}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,a);}catch(c){throw c;}}function Y(b,a){let c;try{const f=a.name.toLowerCase();if(null!=b.localScope&&void 0!==b.localScope[f]){c=b.localScope[f];if(!0===c.valueset)return c.value;c.value=l(b,c.node);c.valueset=!0;return c.value}if(void 0!==b.globalScope[f]){c=b.globalScope[f];if(!0===c.valueset)return c.value;c.value=l(b,
c.node);c.valueset=!0;return c.value}throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.InvalidIdentifier,a);}catch(f){throw f;}}function aa(b,a,c,f){try{const g=l(b,a.arguments[c]);if(e.equalityTest(g,f))return l(b,a.arguments[c+1]);const m=a.arguments.length-c;return 1===m?l(b,a.arguments[c]):2===m?null:3===m?l(b,a.arguments[c+2]):aa(b,a,c+2,f)}catch(g){throw g;}}function ba(b,a,c,f){try{if(!0===f)return l(b,a.arguments[c+1]);if(3===a.arguments.length-c)return l(b,a.arguments[c+2]);const g=
l(b,a.arguments[c+2]);if(!1===e.isBoolean(g))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.BooleanConditionRequired,a.arguments[c+2]);return ba(b,a,c+2,g)}catch(g){throw g;}}function P(b,a,c,f){try{const g=b.body;if(c.length!==b.params.length)throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.WrongNumberOfParameters,f);if(null!=a.localScope)for(let p=0;p<c.length;p++)a.localScope[b.params[p].name.toLowerCase()]={value:c[p],valueset:!0,node:null};const m=l(a,g);if(m instanceof e.ReturnResult)return m.value;
if(m===e.breakResult)throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.UnexpectedToken,f);if(m===e.continueResult)throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.UnexpectedToken,f);return m instanceof e.ImplicitResult?m.value:m}catch(g){throw g;}}function ca(b,a,c){const f=new G;b||(b={});a||(a={});const g=new x({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});g.immutable=!1;f.textformatting={value:g,valueset:!0,node:null};for(const m in a)f[m]=
{value:new u.NativeFunction(a[m]),native:!0,valueset:!0,node:null};for(const m in b)f[m]=b[m]&&"esri.Graphic"===b[m].declaredClass?{value:fa.createFromGraphic(b[m],c),valueset:!0,node:null}:{value:b[m],valueset:!0,node:null};return f}function da(b){console.log(b)}function ea(b){const a={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:r,evaluateIdentifier:Y};for(let c=0;c<b.length;c++)b[c].registerFunctions(a);for(const c in a.functions)n[c]={value:new u.NativeFunction(a.functions[c]),
valueset:!0,node:null},G.prototype[c]=n[c];for(b=0;b<a.signatures.length;b++)ha.addFunctionDeclaration(a.signatures[b],"sync")}let pa=function(b){function a(f,g){var m=b.call(this)||this;m.definition=null;m.context=null;m.definition=f;m.context=g;return m}Q._inheritsLoose(a,b);var c=a.prototype;c.createFunction=function(f){return(...g)=>{const m={spatialReference:this.context.spatialReference,console:this.context.console,timeReference:this.context.timeReference?this.context.timeReference:null,lrucache:this.context.lrucache,
exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:f.depthCounter.depth+1},globalScope:this.context.globalScope};if(64<m.depthCounter.depth)throw new d.ArcadeExecutionError(f,d.ExecutionErrorCodes.MaximumCallDepth,null);return P(this.definition,m,g,null)}};c.call=function(f,g){return r(f,g,(m,p,v)=>{m={spatialReference:f.spatialReference,globalScope:f.globalScope,depthCounter:{depth:f.depthCounter.depth+
1},libraryResolver:f.libraryResolver,exports:f.exports,timeReference:f.timeReference??null,console:f.console,lrucache:f.lrucache,interceptor:f.interceptor,localScope:{}};if(64<m.depthCounter.depth)throw new d.ArcadeExecutionError(f,d.ExecutionErrorCodes.MaximumCallDepth,g);return P(this.definition,m,v,g)})};c.marshalledCall=function(f,g,m,p){return p(f,g,(v,M,k)=>{v={spatialReference:f.spatialReference,globalScope:m.globalScope,depthCounter:{depth:f.depthCounter.depth+1},libraryResolver:f.libraryResolver,
exports:f.exports,console:f.console,timeReference:f.timeReference??null,lrucache:f.lrucache,interceptor:f.interceptor,localScope:{}};k=k.map(t=>!e.isFunctionParameter(t)||t instanceof u.ScopeMarshalledFunction?t:u.wrapModuleScopedResponse(t,f,p));return u.wrapModuleScopedResponse(P(this.definition,v,k,g),m,p)})};return a}(u.ArcadeFunction),B=function(b){function a(f){return b.call(this,f)||this}Q._inheritsLoose(a,b);var c=a.prototype;c.global=function(f){f=this.executingContext.globalScope[f.toLowerCase()];
f.valueset||(f.value=l(this.executingContext,f.node),f.valueset=!0);if(e.isFunctionParameter(f.value)&&!(f.value instanceof u.ScopeMarshalledFunction)){const g=new u.ScopeMarshalledFunction;g.fn=f.value;g.parameterEvaluator=r;g.context=this.executingContext;f.value=g}return f.value};c.setGlobal=function(f,g){if(e.isFunctionParameter(g))throw new d.ArcadeExecutionError(null,d.ExecutionErrorCodes.AssignModuleFunction,null);this.executingContext.globalScope[f.toLowerCase()]={value:g,valueset:!0,node:null}};
c.hasGlobal=function(f){void 0===this.executingContext.exports[f]&&(f=f.toLowerCase());return void 0!==this.executingContext.exports[f]?!0:!1};c.loadModule=function(f){let g=f.spatialReference;if(null===g||void 0===g)g=new T({wkid:102100});this.moduleScope=ca({},f.customfunctions,f.timeReference);this.executingContext={spatialReference:g,globalScope:this.moduleScope,localScope:null,libraryResolver:new R.ArcadeModuleLoader(f.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},
console:f.console?f.console:da,timeReference:f.timeReference??null,lrucache:f.lrucache,interceptor:f.interceptor,depthCounter:{depth:1}};l(this.executingContext,this.source.syntax)};return a}(K.ArcadeModule);const n={};ja.registerFunctions(n,r);na.registerFunctions(n,r);la.registerFunctions(n,r);L.registerFunctions(n,r);ma.registerFunctions(n,r);ka.registerFunctions(n,r);n.iif=function(b,a){try{e.pcCheck(null===a.arguments?[]:a.arguments,3,3,b,a);const c=l(b,a.arguments[0]);if(!1===e.isBoolean(c))throw new d.ArcadeExecutionError(b,
d.ExecutionErrorCodes.BooleanConditionRequired,a);return!0===c?l(b,a.arguments[1]):l(b,a.arguments[2])}catch(c){throw c;}};n.decode=function(b,a){try{if(2>a.arguments.length)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.WrongNumberOfParameters,a);if(2===a.arguments.length)return l(b,a.arguments[1]);if(0===(a.arguments.length-1)%2)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.WrongNumberOfParameters,a);const c=l(b,a.arguments[0]);return aa(b,a,1,c)}catch(c){throw c;}};n.when=
function(b,a){try{if(3>a.arguments.length)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.WrongNumberOfParameters,a);if(0===a.arguments.length%2)throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.WrongNumberOfParameters,a);const c=l(b,a.arguments[0]);if(!1===e.isBoolean(c))throw new d.ArcadeExecutionError(b,d.ExecutionErrorCodes.BooleanConditionRequired,a.arguments[0]);return ba(b,a,0,c)}catch(c){throw c;}};for(const b in n)n[b]={value:new u.NativeFunction(n[b]),valueset:!0,node:null};
const G=function(){};G.prototype=n;G.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};G.prototype.pi={value:Math.PI,valueset:!0,node:null};K={fixSpatialReference:e.fixSpatialReference,parseArguments:U,standardFunction:r};ea([ia.ArrayFunctions]);H.executeScript=function(b,a){let c=a.spatialReference;if(null===c||void 0===c)c=new T({wkid:102100});let f=null;b.usesModules&&(f=new R.ArcadeModuleLoader(new Map,b.loadedModules));const g=ca(a.vars,a.customfunctions,a.timeReference);
a={spatialReference:c,globalScope:g,localScope:null,exports:{},libraryResolver:f,console:a.console?a.console:da,timeReference:a.timeReference??null,lrucache:a.lrucache,interceptor:a.interceptor,depthCounter:{depth:1}};b=l(a,b);b instanceof e.ReturnResult&&(b=b.value);b instanceof e.ImplicitResult&&(b=b.value);b===e.voidOperation&&(b=null);if(b===e.breakResult)throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.IllegalResult,null);if(b===e.continueResult)throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.IllegalResult,
null);if(e.isFunctionParameter(b))throw new d.ArcadeExecutionError(a,d.ExecutionErrorCodes.IllegalResult,null);return b};H.extend=ea;H.functionHelper=K;Object.defineProperty(H,Symbol.toStringTag,{value:"Module"})});