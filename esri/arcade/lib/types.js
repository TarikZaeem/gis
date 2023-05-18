// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers"],function(b,d){b.Keywords=void 0;(function(a){a.Break="break";a.Continue="continue";a.Else="else";a.False="false";a.For="for";a.From="from";a.Function="function";a.If="if";a.Import="import";a.Export="export";a.In="in";a.Null="null";a.Return="return";a.True="true";a.Var="var";a.While="while"})(b.Keywords||(b.Keywords={}));b.Syntax=void 0;(function(a){a.AssignmentExpression="AssignmentExpression";a.ArrayExpression="ArrayExpression";a.BlockComment=
"BlockComment";a.BlockStatement="BlockStatement";a.BinaryExpression="BinaryExpression";a.BreakStatement="BreakStatement";a.CallExpression="CallExpression";a.ContinueStatement="ContinueStatement";a.EmptyStatement="EmptyStatement";a.ExpressionStatement="ExpressionStatement";a.ExportNamedDeclaration="ExportNamedDeclaration";a.ExportSpecifier="ExportSpecifier";a.ForStatement="ForStatement";a.ForInStatement="ForInStatement";a.FunctionDeclaration="FunctionDeclaration";a.Identifier="Identifier";a.IfStatement=
"IfStatement";a.ImportDeclaration="ImportDeclaration";a.ImportDefaultSpecifier="ImportDefaultSpecifier";a.LineComment="LineComment";a.Literal="Literal";a.LogicalExpression="LogicalExpression";a.MemberExpression="MemberExpression";a.ObjectExpression="ObjectExpression";a.Program="Program";a.Property="Property";a.ReturnStatement="ReturnStatement";a.TemplateElement="TemplateElement";a.TemplateLiteral="TemplateLiteral";a.UnaryExpression="UnaryExpression";a.UpdateExpression="UpdateExpression";a.VariableDeclaration=
"VariableDeclaration";a.VariableDeclarator="VariableDeclarator";a.WhileStatement="WhileStatement"})(b.Syntax||(b.Syntax={}));b.TokenType=void 0;(function(a){a[a.Unknown=0]="Unknown";a[a.BooleanLiteral=1]="BooleanLiteral";a[a.EOF=2]="EOF";a[a.Identifier=3]="Identifier";a[a.Keyword=4]="Keyword";a[a.NullLiteral=5]="NullLiteral";a[a.NumericLiteral=6]="NumericLiteral";a[a.Punctuator=7]="Punctuator";a[a.StringLiteral=8]="StringLiteral";a[a.Template=10]="Template"})(b.TokenType||(b.TokenType={}));b.ParsingErrorCodes=
void 0;(function(a){a.InvalidModuleUri="InvalidModuleUri";a.ForInOfLoopInitializer="ForInOfLoopInitializer";a.IdentiferExpected="IdentiferExpected";a.InvalidEscapedReservedWord="InvalidEscapedReservedWord";a.InvalidExpression="InvalidExpression";a.InvalidFunctionIdentifier="InvalidFunctionIdentifier";a.InvalidHexEscapeSequence="InvalidHexEscapeSequence";a.InvalidLeftHandSideInAssignment="InvalidLeftHandSideInAssignment";a.InvalidLeftHandSideInForIn="InvalidLeftHandSideInForIn";a.InvalidTemplateHead=
"InvalidTemplateHead";a.InvalidVariableAssignment="InvalidVariableAssignment";a.KeyMustBeString="KeyMustBeString";a.NoFunctionInsideBlock="NoFunctionInsideBlock";a.NoFunctionInsideFunction="NoFunctionInsideFunction";a.ModuleExportRootOnly="ModuleExportRootOnly";a.ModuleImportRootOnly="ModuleImportRootOnly";a.PunctuatorExpected="PunctuatorExpected";a.TemplateOctalLiteral="TemplateOctalLiteral";a.UnexpectedBoolean="UnexpectedBoolean";a.UnexpectedEndOfScript="UnexpectedEndOfScript";a.UnexpectedIdentifier=
"UnexpectedIdentifier";a.UnexpectedKeyword="UnexpectedKeyword";a.UnexpectedNull="UnexpectedNull";a.UnexpectedNumber="UnexpectedNumber";a.UnexpectedPunctuator="UnexpectedPunctuator";a.UnexpectedString="UnexpectedString";a.UnexpectedTemplate="UnexpectedTemplate";a.UnexpectedToken="UnexpectedToken"})(b.ParsingErrorCodes||(b.ParsingErrorCodes={}));const m={[b.ParsingErrorCodes.InvalidModuleUri]:"Module uri must be a text literal.",[b.ParsingErrorCodes.ForInOfLoopInitializer]:"for-in loop variable declaration may not have an initializer.",
[b.ParsingErrorCodes.IdentiferExpected]:"'${value}' is an invalid identifier.",[b.ParsingErrorCodes.InvalidEscapedReservedWord]:"Keyword cannot contain escaped characters.",[b.ParsingErrorCodes.InvalidExpression]:"Invalid expression.",[b.ParsingErrorCodes.InvalidFunctionIdentifier]:"'${value}' is an invalid function identifier.",[b.ParsingErrorCodes.InvalidHexEscapeSequence]:"Invalid hexadecimal escape sequence.",[b.ParsingErrorCodes.InvalidLeftHandSideInAssignment]:"Invalid left-hand side in assignment.",
[b.ParsingErrorCodes.InvalidLeftHandSideInForIn]:"Invalid left-hand side in for-in.",[b.ParsingErrorCodes.InvalidTemplateHead]:"Invalid template structure.",[b.ParsingErrorCodes.InvalidVariableAssignment]:"Invalid variable assignment.",[b.ParsingErrorCodes.KeyMustBeString]:"Object property keys must be a word starting with a letter.",[b.ParsingErrorCodes.NoFunctionInsideBlock]:"Functions cannot be declared inside of code blocks.",[b.ParsingErrorCodes.NoFunctionInsideFunction]:"Functions cannot be declared inside another function.",
[b.ParsingErrorCodes.ModuleExportRootOnly]:"Module exports cannot be declared inside of code blocks.",[b.ParsingErrorCodes.ModuleImportRootOnly]:"Module import cannot be declared inside of code blocks.",[b.ParsingErrorCodes.PunctuatorExpected]:"'${value}' expected.",[b.ParsingErrorCodes.TemplateOctalLiteral]:"Octal literals are not allowed in template literals.",[b.ParsingErrorCodes.UnexpectedBoolean]:"Unexpected boolean literal.",[b.ParsingErrorCodes.UnexpectedEndOfScript]:"Unexpected end of Arcade expression.",
[b.ParsingErrorCodes.UnexpectedIdentifier]:"Unexpected identifier.",[b.ParsingErrorCodes.UnexpectedKeyword]:"Unexpected keyword.",[b.ParsingErrorCodes.UnexpectedNull]:"Unexpected null literal.",[b.ParsingErrorCodes.UnexpectedNumber]:"Unexpected number.",[b.ParsingErrorCodes.UnexpectedPunctuator]:"Unexpected ponctuator.",[b.ParsingErrorCodes.UnexpectedString]:"Unexpected text literal.",[b.ParsingErrorCodes.UnexpectedTemplate]:"Unexpected quasi '${value}'.",[b.ParsingErrorCodes.UnexpectedToken]:"Unexpected token '${value}'."};
let q=function(a){function e({code:h,index:n,line:f,column:g,len:k=0,description:l,data:p}){var c=a.call(this,`${l??h}`)||this;c.declaredRootClass="esri.arcade.lib.parsingerror";c.name="ParsingError";c.code=h;c.index=n;c.line=f;c.column=g;c.len=k;c.data=p;c.description=l;c.range={start:{line:f,column:g-1},end:{line:f,column:g+k}};Error.captureStackTrace?.(d._assertThisInitialized(c),e);return c}d._inheritsLoose(e,a);return e}(d._wrapNativeSuper(Error));b.AssignmentOperators="\x3d /\x3d *\x3d %\x3d +\x3d -\x3d".split(" ");
b.BinaryOperators="| \x26 \x3e\x3e \x3c\x3c \x3e\x3e\x3e ^ \x3d\x3d !\x3d \x3c \x3c\x3d \x3e \x3e\x3d + - * / %".split(" ");b.LogicalOperators=["||","\x26\x26"];b.OperatorPrecedence={"||":1,"\x26\x26":2,"|":3,"^":4,"\x26":5,"\x3d\x3d":6,"!\x3d":6,"\x3c":7,"\x3e":7,"\x3c\x3d":7,"\x3e\x3d":7,"\x3c\x3c":8,"\x3e\x3e":8,"\x3e\x3e\x3e":8,"+":9,"-":9,"*":10,"/":10,"%":10};b.ParsingError=q;b.ParsingErrorMessages=m;b.TokenNames="Unknown Boolean \x3cend\x3e Identifier Keyword Null Numeric Punctuator String RegularExpression Template".split(" ");
b.UnaryOperators=["-","+","!","~"];b.UpdateOperators=["++","--"];b.isArrayExpression=function(a){return a?.type===b.Syntax.ArrayExpression};b.isAssignmentExpression=function(a){return a?.type===b.Syntax.AssignmentExpression};b.isBinaryExpression=function(a){return a?.type===b.Syntax.BinaryExpression};b.isBlockComment=function(a){return a?.type===b.Syntax.BlockComment};b.isBlockStatement=function(a){return a?.type===b.Syntax.BlockStatement};b.isBreakStatement=function(a){return a?.type===b.Syntax.BreakStatement};
b.isCallExpression=function(a){return a?.type===b.Syntax.CallExpression};b.isContinueStatement=function(a){return a?.type===b.Syntax.ContinueStatement};b.isEmptyStatement=function(a){return a?.type===b.Syntax.EmptyStatement};b.isExpression=function(a){switch(a?.type){case b.Syntax.ArrayExpression:case b.Syntax.AssignmentExpression:case b.Syntax.BinaryExpression:case b.Syntax.CallExpression:case b.Syntax.Identifier:case b.Syntax.Literal:case b.Syntax.LogicalExpression:case b.Syntax.MemberExpression:case b.Syntax.ObjectExpression:case b.Syntax.TemplateLiteral:case b.Syntax.UpdateExpression:case b.Syntax.UnaryExpression:return!0;
default:return!1}};b.isExpressionStatement=function(a){return a?.type===b.Syntax.ExpressionStatement};b.isForInStatement=function(a){return a?.type===b.Syntax.ForInStatement};b.isForStatement=function(a){return a?.type===b.Syntax.ForStatement};b.isFunctionDeclaration=function(a){return a?.type===b.Syntax.FunctionDeclaration};b.isIdentifier=function(a){return a?.type===b.Syntax.Identifier};b.isIfStatement=function(a){return a?.type===b.Syntax.IfStatement};b.isLiteral=function(a){return a?.type===b.Syntax.Literal};
b.isLogicalExpression=function(a){return a?.type===b.Syntax.LogicalExpression};b.isMemberExpression=function(a){return a?.type===b.Syntax.MemberExpression};b.isObjectExpression=function(a){return a?.type===b.Syntax.ObjectExpression};b.isProgram=function(a){return a?.type===b.Syntax.Program};b.isProperty=function(a){return a?.type===b.Syntax.Property};b.isReturnStatement=function(a){return a?.type===b.Syntax.ReturnStatement};b.isStatement=function(a){switch(a?.type){case b.Syntax.BlockStatement:case b.Syntax.BreakStatement:case b.Syntax.ContinueStatement:case b.Syntax.EmptyStatement:case b.Syntax.ExpressionStatement:case b.Syntax.ForInStatement:case b.Syntax.ForStatement:case b.Syntax.FunctionDeclaration:case b.Syntax.IfStatement:case b.Syntax.ReturnStatement:case b.Syntax.VariableDeclaration:return!0;
default:return!1}};b.isTemplateElement=function(a){return a?.type===b.Syntax.TemplateElement};b.isTemplateLiteral=function(a){return a?.type===b.Syntax.TemplateLiteral};b.isUnaryExpression=function(a){return a?.type===b.Syntax.UnaryExpression};b.isUpdateExpression=function(a){return a?.type===b.Syntax.UpdateExpression};b.isVariableDeclaration=function(a){return a?.type===b.Syntax.VariableDeclaration};b.isVariableDeclarator=function(a){return a?.type===b.Syntax.VariableDeclarator};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});