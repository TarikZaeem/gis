// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require exports ../chunks/_rollupPluginBabelHelpers ./Dictionary ./Feature ../chunks/languageUtils ./treeAnalysis ../chunks/array ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../core/promiseUtils ../geometry/Geometry ../geometry/SpatialReference ./ArcadeModuleLoader ./ArcadeModule ./FunctionWrapper ./executionError".split(" "),function(ma,G,O,H,P,g,Z,aa,Q,ba,na,oa,pa,qa,ca,ra,da,ea,sa,A,e){function x(a,b,c){try{return c(a,
null,b.arguments)}catch(d){throw d;}}function h(a,b){try{switch(b.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ta(a,b);case "VariableDeclaration":var c=[];for(var d=0;d<b.declarations.length;d++)c.push(h(a,b.declarations[d]));return c.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";case "BlockStatement":case "Program":return R(a,b);case "FunctionDeclaration":{const l=b.id.name.toLowerCase();y(l);var f="",n=!1;void 0!==a.globalScope[l]?f=l:void 0!==
a.globalScope._SymbolsMap[l]?f=a.globalScope._SymbolsMap[l]:a.undeclaredGlobalsInFunctions.has(l)?(f=a.undeclaredGlobalsInFunctions.get(l).manglename,a.globalScope._SymbolsMap[l]=f,a.mangleMap[l]=f,a.undeclaredGlobalsInFunctions.delete(l),n=!0):(f=z(a),a.globalScope._SymbolsMap[l]=f,a.mangleMap[l]=f);d={isAsync:a.isAsync,console:a.console,exports:a.exports,undeclaredGlobalsInFunctions:a.undeclaredGlobalsInFunctions,customfunctions:a.customfunctions,moduleFactory:a.moduleFactory,moduleFactoryMap:a.moduleFactoryMap,
libraryResolver:a.libraryResolver,lrucache:a.lrucache,interceptor:a.interceptor,services:a.services,symbols:a.symbols,mangleMap:a.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:a.depthCounter,globalScope:a.globalScope};var p="new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; \n   var lscope \x3d runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";for(var q=0;q<b.params.length;q++){const B=b.params[q].name.toLowerCase();
y(B);const E=z(a);d.localScope._SymbolsMap[B]=E;d.mangleMap[B]=E;p+="lscope['"+E+"']\x3darguments["+q.toString()+"];\n"}!0===a.isAsync?(p=p+"return lang.__awaiter(this, void 0, void 0, function* () {\n"+(R(d,b.body)+"\n return lastStatement; "),p=p+"});  }, runtimeCtx),"+(b.params.length+")")):p+=R(d,b.body)+"\n return lastStatement; }, runtimeCtx),"+b.params.length+")";p+="\n lastStatement \x3d lc.voidOperation; \n";c=n?"gscope[lang.setAssig('"+f+"', runtimeCtx)]\x3d"+p:"gscope['"+f+"']\x3d"+p}return c;
case "ImportDeclaration":{const l=b.specifiers[0].local.name.toLowerCase();y(l);const B=a.libraryResolver?.loadLibrary(l),E=z(a);void 0===a.moduleFactory[B.uri]&&(a.moduleFactory[B.uri]=ua(B.syntax,{interceptor:a.interceptor,services:a.services,moduleFactory:a.moduleFactory,lrucache:a.lrucache,timeReference:a.timeReference??null,libraryResolver:a.libraryResolver,customfunctions:a.customfunctions,vars:{}},a.isAsync));a.moduleFactoryMap[E]=B.uri;b="";b=a.isAsync?"(yield lang.loadModule('"+E+"', runtimeCtx) ); ":
"lang.loadModule('"+E+"', runtimeCtx); ";void 0!==a.globalScope[l]?f="gscope['"+l+"']\x3d"+b:void 0!==a.globalScope._SymbolsMap[l]?f="gscope['"+a.globalScope._SymbolsMap[l]+"']\x3d"+b:(c="",a.undeclaredGlobalsInFunctions.has(l)?(c=a.undeclaredGlobalsInFunctions.get(l).manglename,a.undeclaredGlobalsInFunctions.delete(l)):c=z(a),a.globalScope._SymbolsMap[l]=c,a.mangleMap[l]=c,f="gscope[lang.setAssig('"+c+"', runtimeCtx)]\x3d"+b)}return f;case "ExportNamedDeclaration":const S=h(a,b.declaration);if("FunctionDeclaration"===
b.declaration.type)a.exports[b.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===b.declaration.type)for(const l of b.declaration.declarations)a.exports[l.id.name.toLowerCase()]="variable";return S;case "ReturnStatement":var m=null===b.argument?"return lc.voidOperation":"return "+h(a,b.argument);return m;case "IfStatement":return fa(a,b);case "ExpressionStatement":var k="AssignmentExpression"===b.expression.type?"lastStatement \x3d lc.voidOperation; "+h(a,b.expression)+
"; \n ":"lastStatement \x3d "+h(a,b.expression)+"; ";return k;case "AssignmentExpression":return va(a,b);case "UpdateExpression":return wa(a,b);case "BreakStatement":return"break";case "ContinueStatement":return"continue";case "TemplateLiteral":try{c=[];d=0;for(const l of b.quasis)c.push(l.value?JSON.stringify(l.value.cooked):JSON.stringify("")),!1===l.tail&&(c.push(b.expressions[d]?"lang.castString(lang.aCheck("+h(a,b.expressions[d])+", 'TemplateLiteral'))":""),d++);n="(["+c.join(",")+"]).join('')"}catch(l){throw l;
}return n;case "TemplateElement":return JSON.stringify(b.value?b.value.cooked:"");case "ForStatement":c="lastStatement \x3d lc.voidOperation; \n";null!==b.init&&(c+=h(a,b.init)+"; ");const L=C(a),T=C(a);c+="var "+L+" \x3d true; \n do { ";null!==b.update&&(c+=" if ("+L+"\x3d\x3d\x3dfalse) {\n "+h(a,b.update)+"  \n}\n "+L+"\x3dfalse; \n");null!==b.test&&(c+="var "+T+" \x3d "+h(a,b.test)+"; ",c+="if ("+T+"\x3d\x3d\x3dfalse) { break; } else if ("+T+"!\x3d\x3dtrue) { lang.error('"+e.ExecutionErrorCodes.BooleanConditionRequired+
"');   }\n");c+=h(a,b.body);null!==b.update&&(c+="\n "+h(a,b.update));return c+("\n"+L+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation; ");case "ForInStatement":q=C(a);const D=C(a),v=C(a);let r="var "+q+" \x3d "+h(a,b.right)+";\n";"VariableDeclaration"===b.left.type&&(r+=h(a,b.left));let w="VariableDeclaration"===b.left.type?b.left.declarations[0].id.name:b.left.name;w=w.toLowerCase();y(w);c="";null!==a.localScope&&(void 0!==a.localScope[w]?c="lscope['"+w+"']":void 0!==a.localScope._SymbolsMap[w]&&
(c="lscope['"+a.localScope._SymbolsMap[w]+"']"));d="";if(""===c)if(void 0!==a.globalScope[w])c="gscope['"+w+"']";else if(void 0!==a.globalScope._SymbolsMap[w])c="gscope['"+a.globalScope._SymbolsMap[w]+"']";else if(null!==a.localScope)if(a.undeclaredGlobalsInFunctions.has(w))c="gscope['"+a.undeclaredGlobalsInFunctions.get(w).manglename+"']",d=a.undeclaredGlobalsInFunctions.get(w).manglename;else{const l={manglename:z(a),node:b.left};a.undeclaredGlobalsInFunctions.set(w,l);c="gscope['"+l.manglename+
"']";d=l.manglename}d&&(r+="lang.chkAssig('"+d+"',runtimeCtx); \n");r=r+("if ("+q+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n else if (lc.isArray(")+(q+") || lc.isString("+q+")) {var ")+(D+"\x3d"+q+".length; \nfor(var ")+(v+"\x3d0; "+v+"\x3c"+D+"; "+v+"++) {\n");r+=c+"\x3d"+v+";\n";r+=h(a,b.body);r+="\n}\n";r+=" lastStatement \x3d lc.voidOperation; \n";r+=" \n}\n";r+="else if (lc.isImmutableArray("+q+")) {";r=r+("var "+D+"\x3d"+q+".length(); \nfor(var ")+(v+"\x3d0; "+v+"\x3c"+D+
"; "+v+"++) {\n");r+=c+"\x3d"+v+";\n";r+=h(a,b.body);r+="\n}\n";r+=" lastStatement \x3d lc.voidOperation; \n";r+=" \n}\n";r+="else if (( "+q+" instanceof lang.Dictionary) || ( "+q+" instanceof lang.Feature)) {";r=r+("var "+D+"\x3d"+q+".keys(); \nfor(var ")+(v+"\x3d0; "+v+"\x3c"+D+".length; "+v+"++) {\n");r+=c+"\x3d"+D+"["+v+"];\n";r+=h(a,b.body);r+="\n}\n";r+=" lastStatement \x3d lc.voidOperation; \n";r+=" \n}\n";a.isAsync&&(r+="else if (lc.isFeatureSet("+q+")) {",r=r+("var "+D+"\x3d"+q+".iterator(runtimeCtx.abortSignal); \nfor(var ")+
(v+"\x3dlang. graphicToFeature( yield "+D+".next(),"+q+", runtimeCtx); "+v+"!\x3dnull; "+v+"\x3dlang. graphicToFeature( yield "+D+".next(),"+q+", runtimeCtx)) {\n")+(c+"\x3d"+v+";\n"),r+=h(a,b.body),r+="\n}\n",r+=" lastStatement \x3d lc.voidOperation; \n",r+=" \n}\n");return r+"else { lastStatement \x3d lc.voidOperation; } \n";case "WhileStatement":c="lastStatement \x3d lc.voidOperation; \n";const J=C(a);return c+=`\n  var ${J} = true;\n    do {\n      ${J} = ${h(a,b.test)};\n      if (${J}==false) {\n        break;\n      }\n      if (${J}!==true) {\n        lang.error('${e.ExecutionErrorCodes.BooleanConditionRequired}');\n      }\n      ${h(a,
b.body)}\n    }\n    while (${J} !== false);\n    lastStatement = lc.voidOperation;\n  `;case "Identifier":return xa(a,b);case "MemberExpression":try{let l;!0===b.computed?l=h(a,b.property):(l="'"+b.property.name+"'",y(b.property.name));var t="lang.member("+h(a,b.object)+","+l+")"}catch(l){throw l;}return t;case "Literal":return null===b.value||void 0===b.value?"null":JSON.stringify(b.value);case "CallExpression":return ya(a,b);case "UnaryExpression":try{var F="lang.unary("+h(a,b.argument)+",'"+b.operator+
"')"}catch(l){throw l;}return F;case "BinaryExpression":try{var U="lang.binary("+h(a,b.left)+","+h(a,b.right)+",'"+b.operator+"')"}catch(l){throw l;}return U;case "LogicalExpression":try{if("AssignmentExpression"===b.left.type||"UpdateExpression"===b.left.type)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,b);if("AssignmentExpression"===b.right.type||"UpdateExpression"===b.right.type)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,
b);if("\x26\x26"===b.operator||"||"===b.operator)var za="(lang.logicalCheck("+h(a,b.left)+") "+b.operator+" lang.logicalCheck("+h(a,b.right)+"))";else throw new e.ArcadeCompilationError(null,e.ExecutionErrorCodes.LogicExpressionOrAnd,null);}catch(l){throw l;}return za;case "ArrayExpression":try{c=[];for(d=0;d<b.elements.length;d++)"Literal"===b.elements[d].type?c.push(h(a,b.elements[d])):c.push("lang.aCheck("+h(a,b.elements[d])+",'ArrayExpression')");p="["+c.join(",")+"]"}catch(l){throw l;}return p;
case "ObjectExpression":c="lang.dictionary([";for(d=0;d<b.properties.length;d++){const l=b.properties[d];y(l.key.name);const B="Identifier"===l.key.type?"'"+l.key.name+"'":h(a,l.key),E=h(a,l.value);0<d&&(c+=",");c+="lang.strCheck("+B+",'ObjectExpression'),lang.aCheck("+E+", 'ObjectExpression')"}return c+"])";case "Property":throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.NeverReach,b);case "Array":throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.NeverReach,b);default:throw new e.ArcadeCompilationError(a,
e.ExecutionErrorCodes.Unrecognised,b);}}catch(S){throw S;}}function wa(a,b){let c=null;var d="";if("MemberExpression"===b.argument.type)return c=h(a,b.argument.object),!0===b.argument.computed?d=h(a,b.argument.property):(d="'"+b.argument.property.name+"'",y(b.argument.property.name)),"lang.memberupdate("+c+","+d+",'"+b.operator+"',"+b.prefix+")";c=b.argument.name.toLowerCase();y(c);if(null!==a.localScope){if(void 0!==a.localScope[c])return"lang.update(lscope, '"+c+"','"+b.operator+"',"+b.prefix+")";
if(void 0!==a.localScope._SymbolsMap[c])return"lang.update(lscope, '"+a.localScope._SymbolsMap[c]+"','"+b.operator+"',"+b.prefix+")"}if(void 0!==a.globalScope[c])return"lang.update(gscope, '"+c+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.globalScope._SymbolsMap[c])return"lang.update(gscope, '"+a.globalScope._SymbolsMap[c]+"','"+b.operator+"',"+b.prefix+")";if(null!==a.localScope){if(a.undeclaredGlobalsInFunctions.has(c))return"lang.update(gscope,lang.chkAssig( '"+a.undeclaredGlobalsInFunctions.get(c).manglename+
"',runtimeCtx),'"+b.operator+"',"+b.prefix+")";d={manglename:z(a),node:b.argument};a.undeclaredGlobalsInFunctions.set(c,d);return"lang.update(gscope, lang.chkAssig('"+d.manglename+"',runtimeCtx),'"+b.operator+"',"+b.prefix+")"}throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.InvalidIdentifier,b);}function va(a,b){const c=h(a,b.right);let d=null;var f="";if("MemberExpression"===b.left.type)return d=h(a,b.left.object),!0===b.left.computed?f=h(a,b.left.property):(f="'"+b.left.property.name+"'",
y(b.left.property.name)),"lang.assignmember("+d+","+f+",'"+b.operator+"',"+c+")";d=b.left.name.toLowerCase();y(d);if(null!==a.localScope){if(void 0!==a.localScope[d])return"lscope['"+d+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+d+"'])";if(void 0!==a.localScope._SymbolsMap[d])return"lscope['"+a.localScope._SymbolsMap[d]+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+a.localScope._SymbolsMap[d]+"'])"}if(void 0!==a.globalScope[d])return"gscope['"+d+"']\x3dlang.assign("+c+",'"+b.operator+
"', gscope['"+d+"'])";if(void 0!==a.globalScope._SymbolsMap[d])return"gscope['"+a.globalScope._SymbolsMap[d]+"']\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+a.globalScope._SymbolsMap[d]+"'])";if(null!==a.localScope){if(a.undeclaredGlobalsInFunctions.has(d))return"gscope[lang.chkAssig('"+a.undeclaredGlobalsInFunctions.get(d).manglename+"',runtimeCtx)]\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+a.undeclaredGlobalsInFunctions.get(d).manglename+"'])";f={manglename:z(a),node:b.argument};a.undeclaredGlobalsInFunctions.set(d,
f);return"gscope[lang.chkAssig('"+f.manglename+"',runtimeCtx)]\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+f.manglename+"'])"}throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.InvalidIdentifier,b);}function ha(a,b){return"BlockStatement"===b.type?h(a,b):"ReturnStatement"===b.type||"BreakStatement"===b.type||"ContinueStatement"===b.type?h(a,b)+"; ":"UpdateExpression"===b.type?"lastStatement \x3d "+h(a,b)+"; ":"ExpressionStatement"===b.type?h(a,b):"ObjectExpression"===b.type?"lastStatement \x3d "+
h(a,b)+"; ":h(a,b)+"; "}function fa(a,b){if("AssignmentExpression"===b.test.type||"UpdateExpression"===b.test.type)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.BooleanConditionRequired,b);return`if (lang.mustBoolean(${h(a,b.test)}, runtimeCtx) === true) {\n    ${ha(a,b.consequent)}\n  } `+(null!==b.alternate?"IfStatement"===b.alternate.type?" else "+fa(a,b.alternate):` else {\n      ${ha(a,b.alternate)}\n    }\n`:" else {\n      lastStatement \x3d lc.voidOperation;\n    }\n")}function R(a,
b){let c="";for(let d=0;d<b.body.length;d++)"EmptyStatement"!==b.body[d].type&&(c="ReturnStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"BreakStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"ContinueStatement"===b.body[d].type?c+(h(a,b.body[d])+"; \n"):"UpdateExpression"===b.body[d].type?c+("lastStatement \x3d "+h(a,b.body[d])+"; \n"):"ObjectExpression"===b.body[d].type?c+("lastStatement \x3d "+h(a,b.body[d])+"; \n"):c+(h(a,b.body[d])+" \n"));return c}function y(a){if("iif"===a)throw new e.ArcadeUncompilableError;
if("decode"===a)throw new e.ArcadeUncompilableError;if("when"===a)throw new e.ArcadeUncompilableError;}function ta(a,b){let c=null===b.init?null:h(a,b.init);c===g.voidOperation&&(c=null);b=b.id.name.toLowerCase();y(b);if(null!==a.localScope){if(void 0!==a.localScope[b])return"lscope['"+b+"']\x3d"+c+"; ";if(void 0!==a.localScope._SymbolsMap[b])return"lscope['"+a.localScope._SymbolsMap[b]+"']\x3d"+c+"; ";var d=z(a);a.localScope._SymbolsMap[b]=d;a.mangleMap[b]=d;return"lscope['"+d+"']\x3d"+c+"; "}if(void 0!==
a.globalScope[b])return"gscope['"+b+"']\x3d"+c+"; ";if(void 0!==a.globalScope._SymbolsMap[b])return"gscope['"+a.globalScope._SymbolsMap[b]+"']\x3d"+c+"; ";if(a.undeclaredGlobalsInFunctions.has(b))return d=a.undeclaredGlobalsInFunctions.get(b).manglename,a.globalScope._SymbolsMap[b]=d,a.mangleMap[b]=d,a.undeclaredGlobalsInFunctions.delete(b),"gscope[lang.setAssig('"+d+"', runtimeCtx)]\x3d"+c+"; ";d=z(a);a.globalScope._SymbolsMap[b]=d;a.mangleMap[b]=d;return"gscope['"+d+"']\x3d"+c+"; "}function xa(a,
b){try{const c=b.name.toLowerCase();y(c);if(null!==a.localScope){if(void 0!==a.localScope[c])return"lscope['"+c+"']";if(void 0!==a.localScope._SymbolsMap[c])return"lscope['"+a.localScope._SymbolsMap[c]+"']"}if(void 0!==a.globalScope[c])return"gscope['"+c+"']";if(void 0!==a.globalScope._SymbolsMap[c])return"gscope['"+a.globalScope._SymbolsMap[c]+"']";if(null!==a.localScope){if(a.undeclaredGlobalsInFunctions.has(c))return"gscope[lang.chkAssig('"+a.undeclaredGlobalsInFunctions.get(c).manglename+"',runtimeCtx)]";
const d={manglename:z(a),node:b.argument};a.undeclaredGlobalsInFunctions.set(c,d);return"gscope[lang.chkAssig('"+d.manglename+"',runtimeCtx)]"}throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.InvalidIdentifier,b);}catch(c){throw c;}}function ya(a,b){try{if("MemberExpression"===b.callee.type){if(!0===b.callee.computed)var c=h(a,b.callee.property);else c="'"+b.callee.property.name+"'",y(b.callee.property.name);var d="[";for(var f=0;f<b.arguments.length;f++)0<f&&(d+=", "),d+=h(a,b.arguments[f]);
d+="]";return a.isAsync?"(yield lang.callModuleFunction("+h(a,b.callee.object)+","+d+","+c+",runtimeCtx))":"lang.callModuleFunction("+h(a,b.callee.object)+","+d+","+c+",runtimeCtx)"}if("Identifier"!==b.callee.type)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.FuncionNotFound,b);const m=b.callee.name.toLowerCase();if("iif"===m){try{if(3!==b.arguments.length)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.WrongNumberOfParameters,b);const k=C(a);var n=`${a.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":
"function() {"}\n        var ${k} = ${h(a,b.arguments[0])};\n       \n        if (${k} === true) {\n          return  ${h(a,b.arguments[1])};\n        }\n        else if (${k} === false) {\n          return ${h(a,b.arguments[2])};\n        }\n        else {\n          lang.error('ExecutionErrorCodes.BooleanConditionRequired');\n        }\n      ${a.isAsync?"})}()))":"}()"}`}catch(k){throw k;}return n}if("when"===m){try{if(3>b.arguments.length)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.WrongNumberOfParameters,
b);if(0===b.arguments.length%2)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.WrongNumberOfParameters,b);const k=C(a);f="var ";for(var p=0;p<b.arguments.length-1;p+=2)f+=`${k} = lang.mustBoolean(${h(a,b.arguments[p])}, runtimeCtx);\n      if (${k} === true ) {\n        return ${h(a,b.arguments[p+1])} \n      }\n`;d=`${a.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        ${f}\n        return ${h(a,b.arguments[b.arguments.length-
1])}\n        ${a.isAsync?"})}()))":"}()"}`}catch(k){throw k;}return d}if("decode"===m){try{if(2>b.arguments.length)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.WrongNumberOfParameters,b);if(2===b.arguments.length)f=`(${h(a,b.arguments[1])})`;else{if(0===(b.arguments.length-1)%2)throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.WrongNumberOfParameters,b);p=C(a);var q=C(a);d="var ";for(c=1;c<b.arguments.length-1;c+=2)d+=`${q} = ${h(a,b.arguments[c])};\n      if (lang.binary(${q}, ${p}, "==") === true ) {\n        return ${h(a,
b.arguments[c+1])} \n      }\n`;f=`${a.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        var ${p} = ${h(a,b.arguments[0])};\n        ${d}\n        return ${h(a,b.arguments[b.arguments.length-1])}\n        ${a.isAsync?"})}()))":"}()"}`}}catch(k){throw k;}return f}d="";null!==a.localScope&&(void 0!==a.localScope[m]?d="lscope['"+m+"']":void 0!==a.localScope._SymbolsMap[m]&&(d="lscope['"+a.localScope._SymbolsMap[m]+"']"));if(""===d)if(void 0!==
a.globalScope[m])d="gscope['"+m+"']";else if(void 0!==a.globalScope._SymbolsMap[m])d="gscope['"+a.globalScope._SymbolsMap[m]+"']";else if(null!==a.localScope)if(a.undeclaredGlobalsInFunctions.has(m))d="gscope[lang.chkAssig('"+a.undeclaredGlobalsInFunctions.get(m).manglename+"',runtimeCtx)]";else{const k={manglename:z(a),node:b.argument};a.undeclaredGlobalsInFunctions.set(m,k);d="gscope[lang.chkAssig('"+k.manglename+"',runtimeCtx)]"}if(""!==d){f="[";for(p=0;p<b.arguments.length;p++)0<p&&(f+=", "),
f+=h(a,b.arguments[p]);f+="]";return a.isAsync?"(yield lang.callfunc("+d+","+f+",runtimeCtx) )":"lang.callfunc("+d+","+f+",runtimeCtx)"}throw new e.ArcadeCompilationError(a,e.ExecutionErrorCodes.FuncionNotFound,b);}catch(m){throw m;}}function z(a){a.symbols.symbolCounter++;return"_T"+a.symbols.symbolCounter.toString()}function C(a){a.symbols.symbolCounter++;return"_Tvar"+a.symbols.symbolCounter.toString()}function ia(a,b,c){const d={};a||(a={});c||(c={});d._SymbolsMap={};d.textformatting=1;d.infinity=
1;d.pi=1;for(const f in b)d[f]=1;for(const f in c)d[f]=1;for(const f in a)d[f]=1;return d}function ja(a,b,c,d){c=c?new V:new W;a||(a={});b||(b={});const f=new H({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});f.immutable=!1;c._SymbolsMap={textformatting:1,infinity:1,pi:1};c.textformatting=f;c.infinity=Number.POSITIVE_INFINITY;c.pi=Math.PI;for(const n in b)c[n]=b[n],c._SymbolsMap[n]=1;for(const n in a)c._SymbolsMap[n]=1,c[n]=a[n]&&"esri.Graphic"===a[n].declaredClass?
P.createFromGraphic(a[n],d??null):a[n];return c}function M(a,b){const c={mode:b,compiled:!0,functions:{},signatures:[],standardFunction:x,standardFunctionAsync:x,evaluateIdentifier:Aa};for(let d=0;d<a.length;d++)a[d].registerFunctions(c);if("sync"===b){for(const d in c.functions)u[d]=new A.NativeFunction(c.functions[d]),W.prototype[d]=u[d];for(a=0;a<c.signatures.length;a++)Z.addFunctionDeclaration(c.signatures[a],"sync")}else{for(const d in c.functions)I[d]=new A.NativeFunction(c.functions[d]),V.prototype[d]=
I[d];for(a=0;a<c.signatures.length;a++)Z.addFunctionDeclaration(c.signatures[a],"async")}}function Aa(a,b){b=b.name;if("_SymbolsMap"===b)throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.InvalidIdentifier,null);if(0<a.localStack.length){if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.localStack[a.localStack.length-1][b])return a.localStack[a.localStack.length-1][b];const c=a.mangleMap[b];if(void 0!==c&&void 0!==a.localStack[a.localStack.length-1][c])return a.localStack[a.localStack.length-
1][c]}if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.globalScope[b]||1===a.globalScope._SymbolsMap[b])return a.globalScope[b];b=a.mangleMap[b];if(void 0!==b)return a.globalScope[b]}function N(a){console.log(a)}function X(){X=O._asyncToGenerator(function*(){const a=yield new Promise((b,c)=>ma(["./functions/geomasync"],b,c));M([a],"async");return!0});return X.apply(this,arguments)}function ua(a,b,c=!1){b={isAsync:c,moduleFactory:b.moduleFactory,moduleFactoryMap:{},libraryResolver:new ea.ArcadeModuleLoader(null,
a.loadedModules),globalScope:ia(b.vars,c?I:u,b.customfunctions),customfunctions:b.customfunctions,localScope:null,mangleMap:{},undeclaredGlobalsInFunctions:new Map,depthCounter:{depth:1},exports:{},console:N,lrucache:b.lrucache,timeReference:b.timeReference??null,interceptor:b.interceptor,services:b.services,symbols:{symbolCounter:0}};a=h(b,a);""===a&&(a="lc.voidOperation; ");const d=b.moduleFactory,f=b.moduleFactoryMap,n=b.exports,p={};for(var q in n)p[q]=void 0!==b.mangleMap[q]?b.mangleMap[q]:q;
q={lc:g.lc,lang:ka,mangles:b.mangleMap,prepareModule(m){return new K(m)},prepare(m,k){let t=m.spatialReference;if(null===t||void 0===t)t=new da({wkid:102100});const F=ja(m.vars,m.customfunctions,k,m.timeReference);return{localStack:[],isAsync:k,exports:n,exportmangle:p,gdefs:{},moduleFactory:d,moduleFactoryMap:f,moduleSingletons:m.moduleSingletons,mangleMap:this.mangles,spatialReference:t,globalScope:F,abortSignal:void 0===m.abortSignal||null===m.abortSignal?{aborted:!1}:m.abortSignal,localScope:null,
services:m.services,console:m.console?m.console:N,lrucache:m.lrucache,timeReference:m.timeReference??null,interceptor:m.interceptor,symbols:{symbolCounter:0},depthCounter:m.depthCounter}}};return(new Function("context","spatialReference",c?"var runtimeCtx\x3dthis.prepare(context, true);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+
a+"\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); ":"var runtimeCtx\x3dthis.prepare(context, false);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+a+"\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ")).bind(q)}let la=function(a){function b(d,f){var n=a.call(this)||this;n.paramCount=f;n.fn=d;return n}O._inheritsLoose(b,
a);var c=b.prototype;c.createFunction=function(d){return(...f)=>{if(f.length!==this.paramCount)throw new e.ArcadeExecutionError(d,e.ExecutionErrorCodes.WrongNumberOfParameters,null);return this.fn(...f)}};c.call=function(d,f){return this.fn(...f.arguments)};c.marshalledCall=function(d,f,n,p){return p(d,f,(q,m,k)=>{k=k.map(t=>!g.isFunctionParameter(t)||t instanceof A.ScopeMarshalledFunction?t:A.wrapModuleScopedResponse(t,d,p));q=this.call(n,{arguments:k});return ca.isPromiseLike(q)?q.then(t=>A.wrapModuleScopedResponse(t,
n,p)):q})};return b}(A.ArcadeFunction);const u={};Q.registerFunctions(u,x);qa.registerFunctions(u,x);oa.registerFunctions(u,x);ba.registerFunctions(u,x);pa.registerFunctions(u,x);u.iif=function(a,b){try{return x(a,b,(c,d,f)=>{throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.Unrecognised,b);})}catch(c){throw c;}};u.decode=function(a,b){try{return x(a,b,(c,d,f)=>{throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.Unrecognised,b);})}catch(c){throw c;}};u.when=function(a,b){try{return x(a,
b,(c,d,f)=>{throw new e.ArcadeExecutionError(a,e.ExecutionErrorCodes.Unrecognised,b);})}catch(c){throw c;}};const I={};for(const a in u)I[a]=new A.NativeFunction(u[a]);na.registerFunctions(u,x);for(const a in u)u[a]=new A.NativeFunction(u[a]);const W=function(){};W.prototype=u;const V=function(){};V.prototype=I;Q={fixSpatialReference:g.fixSpatialReference,parseArguments:function(a,b){const c=[];for(let d=0;d<b.arguments.length;d++)c.push(h(a,b.arguments[d]));return c},standardFunction:x};M([aa.ArrayFunctions],
"sync");M([aa.ArrayFunctions],"async");let Y=0;const ka={error(a){throw new e.ArcadeExecutionError(null,a,null);},__awaiter(a,b,c,d){return new Promise((f,n)=>{function p(k){try{m(d.next(k))}catch(t){n(t)}}function q(k){try{m(d["throw"](k))}catch(t){n(t)}}function m(k){k.done?f(k.value):k.value&&k.value.then?k.value.then(p,q):(Y++,0===Y%100?setTimeout(()=>{Y=0;p(k.value)},0):p(k.value))}m((d=d.apply(a,b||[])).next())})},functionDepthchecker(a,b){return function(){b.depthCounter.depth++;b.localStack.push([]);
if(64<b.depthCounter.depth)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.MaximumCallDepth,null);const c=a.apply(this,arguments);if(ca.isPromiseLike(c))return c.then(d=>{b.depthCounter.depth--;--b.localStack.length;return d});b.depthCounter.depth--;--b.localStack.length;return c}},chkAssig(a,b){if(void 0===b.gdefs[a])throw new e.ArcadeExecutionError(b,e.ExecutionErrorCodes.InvalidIdentifier,null);return a},mustBoolean(a,b){if(!0===a||!1===a)return a;throw new e.ArcadeExecutionError(b,
e.ExecutionErrorCodes.BooleanConditionRequired,null);},setAssig(a,b){b.gdefs[a]=1;return a},castString(a){return g.toString(a)},aCheck(a,b){if(g.isFunctionParameter(a)){if("ArrayExpression"===b)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.NoFunctionInArray,null);if("ObjectExpression"===b)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.NoFunctionInDictionary,null);throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.NoFunctionInTemplateLiteral,null);}return a===g.voidOperation?
null:a},Dictionary:H,Feature:P,UserDefinedCompiledFunction:la,dictionary(a){const b={},c=new Map;for(let d=0;d<a.length;d+=2){if(g.isFunctionParameter(a[d+1]))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.NoFunctionInDictionary,null);if(!1===g.isString(a[d]))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyMustBeString,null);let f=a[d].toString();const n=f.toLowerCase();c.has(n)?f=c.get(n):c.set(n,f);b[f]=a[d+1]===g.voidOperation?null:a[d+1]}a=new H(b);a.immutable=!1;return a},
strCheck(a){if(!1===g.isString(a))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyMustBeString,null);return a},unary(a,b){if(g.isBoolean(a)){if("!"===b)return!a;if("-"===b)return-1*g.toNumber(a);if("+"===b)return 1*g.toNumber(a);if("~"===b)return~g.toNumber(a);throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.UnsupportedUnaryOperator,null);}if("-"===b)return-1*g.toNumber(a);if("+"===b)return 1*g.toNumber(a);if("~"===b)return~g.toNumber(a);throw new e.ArcadeExecutionError(null,
e.ExecutionErrorCodes.UnsupportedUnaryOperator,null);},logicalCheck(a){if(!1===g.isBoolean(a))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.LogicExpressionOrAnd,null);return a},logical(a,b,c){if(g.isBoolean(a)&&g.isBoolean(b))switch(c){case "||":return a||b;case "\x26\x26":return a&&b}throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.LogicExpressionOrAnd,null);},binary(a,b,c){switch(c){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return g.binaryOperator(g.toNumber(a),
g.toNumber(b),c);case "\x3d\x3d":return g.equalityTest(a,b);case "\x3d":return g.equalityTest(a,b);case "!\x3d":return!g.equalityTest(a,b);case "\x3c":return g.greaterThanLessThan(a,b,c);case "\x3e":return g.greaterThanLessThan(a,b,c);case "\x3c\x3d":return g.greaterThanLessThan(a,b,c);case "\x3e\x3d":return g.greaterThanLessThan(a,b,c);case "+":return g.isString(a)||g.isString(b)?g.toString(a)+g.toString(b):g.toNumber(a)+g.toNumber(b);case "-":return g.toNumber(a)-g.toNumber(b);case "*":return g.toNumber(a)*
g.toNumber(b);case "/":return g.toNumber(a)/g.toNumber(b);case "%":return g.toNumber(a)%g.toNumber(b);default:throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.UnsupportedOperator,null);}},assign(a,b,c){switch(b){case "\x3d":return a===g.voidOperation?null:a;case "/\x3d":return g.toNumber(c)/g.toNumber(a);case "*\x3d":return g.toNumber(c)*g.toNumber(a);case "-\x3d":return g.toNumber(c)-g.toNumber(a);case "+\x3d":return g.isString(c)||g.isString(a)?g.toString(c)+g.toString(a):g.toNumber(c)+
g.toNumber(a);case "%\x3d":return g.toNumber(c)%g.toNumber(a);default:throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.UnsupportedOperator,null);}},update(a,b,c,d){const f=g.toNumber(a[b]);a[b]="++"===c?f+1:f-1;return!1===d?f:"++"===c?f+1:f-1},graphicToFeature(a,b,c){return null===a?null:P.createFromGraphicLikeObject(a.geometry,a.attributes,b,c.timeReference)},memberupdate(a,b,c,d){let f;if(g.isArray(a))if(g.isNumber(b)){0>b&&(b=a.length+b);if(0>b||b>=a.length)throw new e.ArcadeExecutionError(null,
e.ExecutionErrorCodes.OutOfBounds,null);f=g.toNumber(a[b]);a[b]="++"===c?f+1:f-1}else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ArrayAccessorMustBeNumber,null);else if(a instanceof H){if(!1===g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===a.hasField(b))f=g.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.FieldNotFound,null,{key:b});}else if(g.isFeature(a)){if(!1===
g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===a.hasField(b))f=g.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.FieldNotFound,null);}else{if(g.isImmutableArray(a))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.Immutable,null);if(a instanceof K){if(!1===g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ModuleAccessorMustBeString,
null);if(!0===a.hasGlobal(b))f=g.toNumber(a.global(b)),a.setGlobal(b,"++"===c?f+1:f-1);else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ModuleExportNotFound,null);}else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidIdentifier,null);}return!1===d?f:"++"===c?f+1:f-1},assignmember(a,b,c,d){if(g.isArray(a))if(g.isNumber(b)){0>b&&(b=a.length+b);if(0>b||b>a.length)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.OutOfBounds,null);if(b===a.length&&"\x3d"!==
c)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.OutOfBounds,null);a[b]=this.assign(d,c,a[b])}else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ArrayAccessorMustBeNumber,null);else if(a instanceof H){if(!1===g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===a.hasField(b))a.setField(b,this.assign(d,c,a.field(b)));else{if("\x3d"!==c)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.FieldNotFound,null);
a.setField(b,this.assign(d,c,null))}}else if(g.isFeature(a)){if(!1===g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.KeyAccessorMustBeString,null);if(!0===a.hasField(b))a.setField(b,this.assign(d,c,a.field(b)));else{if("\x3d"!==c)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.FieldNotFound,null);a.setField(b,this.assign(d,c,null))}}else{if(g.isImmutableArray(a))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.Immutable,null);if(a instanceof K){if(!1===
g.isString(b))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ModuleAccessorMustBeString,null);if(a.hasGlobal(b))a.setGlobal(b,this.assign(d,c,a.global(b)));else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.ModuleExportNotFound,null);}else throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidIdentifier,null);}},member(a,b){if(null===a)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.MemberOfNull,null);if(a instanceof H||g.isFeature(a)){if(g.isString(b))return a.field(b);
throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidMemberAccessKey,null);}if(a instanceof ra){if(g.isString(b))return ba.geometryMember(a,b,null,null);throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidMemberAccessKey,null);}if(g.isArray(a)){if(g.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length+b);if(b>=a.length||0>b)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.OutOfBounds,null);return a[b]}throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidMemberAccessKey,
null);}if(g.isString(a)){if(g.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length+b);if(b>=a.length||0>b)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.OutOfBounds,null);return a[b]}throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidMemberAccessKey,null);}if(g.isImmutableArray(a)){if(g.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length()+b);if(b>=a.length()||0>b)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.OutOfBounds,null);return a.get(b)}throw new e.ArcadeExecutionError(null,
e.ExecutionErrorCodes.InvalidMemberAccessKey,null);}if(a instanceof K&&g.isString(b))return a.global(b);throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidMemberAccessKey,null);},callfunc(a,b,c){return a.call(c,{arguments:b,preparsed:!0})},loadModule(a,b){a=b.moduleFactoryMap[a];if(b.moduleSingletons[a])return b.moduleSingletons[a];const c=b.moduleFactory[a]({vars:{},moduleSingletons:b.moduleSingletons,depthCounter:b.depthCounter,console:b.console,abortSignal:b.abortSignal,isAsync:b.isAsync,
services:b.services,lrucache:b.lrucache,timeReference:b.timeReference?b.timeReference:null,interceptor:b.interceptor},b.spatialReference);return b.moduleSingletons[a]=c},callModuleFunction(a,b,c,d){if(!(a instanceof K))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.FuncionNotFound,null);a=a.global(c);if(!1===g.isFunctionParameter(a))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.CallNonFunction,null);return a.call(d,{preparsed:!0,arguments:b})}};let K=function(a){function b(d){var f=
a.call(this,null)||this;f.moduleContext=d;return f}O._inheritsLoose(b,a);var c=b.prototype;c.hasGlobal=function(d){void 0===this.moduleContext.exports[d]&&(d=d.toLowerCase());return void 0!==this.moduleContext.exports[d]?!0:!1};c.setGlobal=function(d,f){const n=this.moduleContext.globalScope;d=d.toLowerCase();if(g.isFunctionParameter(f))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.AssignModuleFunction,null);n[this.moduleContext.exportmangle[d]]=f};c.global=function(d){const f=this.moduleContext.globalScope;
d=d.toLowerCase();const n=f[this.moduleContext.exportmangle[d]];if(void 0===n)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.InvalidIdentifier,null);if(g.isFunctionParameter(n)&&!(n instanceof A.ScopeMarshalledFunction)){const p=new A.ScopeMarshalledFunction;p.fn=n;p.parameterEvaluator=x;p.context=this.moduleContext;return f[this.moduleContext.exportmangle[d]]=p}return n};return b}(sa.ArcadeModule);G.UserDefinedCompiledFunction=la;G.compileScript=function(a,b,c=!1){null===b&&(b={vars:{},
customfunctions:{}});var d=null;a.usesModules&&(d=new ea.ArcadeModuleLoader(null,a.loadedModules));d={isAsync:c,globalScope:ia(b.vars,c?I:u,b.customfunctions),moduleFactory:{},moduleFactoryMap:{},undeclaredGlobalsInFunctions:new Map,customfunctions:b.customfunctions,libraryResolver:d,localScope:null,mangleMap:{},depthCounter:{depth:1},exports:{},console:N,lrucache:b.lrucache,timeReference:b.timeReference??null,interceptor:b.interceptor,services:b.services,symbols:{symbolCounter:0}};a=h(d,a);""===
a&&(a="lc.voidOperation; ");0<d.undeclaredGlobalsInFunctions.size&&d.undeclaredGlobalsInFunctions.forEach(k=>{throw new e.ArcadeCompilationError(b,e.ExecutionErrorCodes.InvalidIdentifier,k.node);});const f=d.moduleFactory,n=d.moduleFactoryMap,p=d.exports,q={};for(var m in p)q[m]=void 0!==d.mangleMap[m]?d.mangleMap[m]:m;m={lc:g.lc,lang:ka,mangles:d.mangleMap,postProcess(k){k instanceof g.ReturnResult&&(k=k.value);k instanceof g.ImplicitResult&&(k=k.value);k===g.voidOperation&&(k=null);if(k===g.breakResult)throw new e.ArcadeExecutionError(null,
e.ExecutionErrorCodes.IllegalResult,null);if(k===g.continueResult)throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.IllegalResult,null);if(g.isFunctionParameter(k))throw new e.ArcadeExecutionError(null,e.ExecutionErrorCodes.IllegalResult,null);return k},prepare(k,t){let F=k.spatialReference;if(null===F||void 0===F)F=da.WebMercator;const U=ja(k.vars,k.customfunctions,t,k.timeReference);return{localStack:[],isAsync:t,moduleFactory:f,moduleFactoryMap:n,mangleMap:this.mangles,moduleSingletons:{},
exports:p,gdefs:{},exportmangle:q,spatialReference:F,globalScope:U,abortSignal:void 0===k.abortSignal||null===k.abortSignal?{aborted:!1}:k.abortSignal,localScope:null,services:k.services,console:k.console?k.console:N,lrucache:k.lrucache,timeReference:k.timeReference??null,interceptor:k.interceptor,symbols:{symbolCounter:0},depthCounter:{depth:1}}}};return(new Function("context","spatialReference",c?"var runtimeCtx\x3dthis.prepare(context, true);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+
a+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx\x3dthis.prepare(context, false);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+a+"\n return lastStatement; } \n return this.postProcess(mainBody()); ")).bind(m)};G.enableAsyncSupport=function(){return X.apply(this,arguments)};G.executeScript=function(a,b){return a(b)};G.extend=M;G.functionHelper=
Q;Object.defineProperty(G,Symbol.toStringTag,{value:"Module"})});