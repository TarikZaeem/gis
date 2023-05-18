// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./comment-handler","./error-handler","./scanner","./types"],function(q,w,t,x,b){function u(h,f=0){let a=h.start-h.lineStart,c=h.lineNumber;0>a&&(a+=f,c--);return{index:h.start,line:c,column:a}}function v(h){return[{index:h.range[0],...h.loc.start},{index:h.range[1],...h.loc.end}]}function r(h){return b.OperatorPrecedence[h]??0}var l;(function(h){h[h.None=0]="None";h[h.Function=1]="Function";h[h.IfClause=2]="IfClause";h[h.ForLoop=4]="ForLoop";h[h.WhileLoop=8]="WhileLoop"})(l||(l=
{}));var p;(function(h){h[h.AsObject=0]="AsObject";h[h.Automatic=1]="Automatic"})(p||(p={}));let y=function(){function h(a,c={},d){this.delegate=d;this.hasLineTerminator=!1;this.options={tokens:"boolean"===typeof c.tokens&&c.tokens,comments:"boolean"===typeof c.comments&&c.comments,tolerant:"boolean"===typeof c.tolerant&&c.tolerant};this.options.comments&&(this.commentHandler=new w.CommentHandler);this.errorHandler=new t.ErrorHandler(this.options.tolerant);this.scanner=new x.Scanner(a,this.errorHandler);
this.context={isAssignmentTarget:!1,blockContext:l.None,curlyParsingType:p.AsObject};this.rawToken={type:b.TokenType.EOF,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0};this.tokens=[];this.startMarker={index:0,line:this.scanner.lineNumber,column:0};this.endMarker={index:0,line:this.scanner.lineNumber,column:0};this.readNextRawToken();this.endMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}var f=h.prototype;f.throwIfInvalidType=
function(a,c,{validTypes:d,invalidTypes:e}){d?.some(g=>a.type===g)||e?.some(g=>a.type===g)&&this.throwError(b.ParsingErrorCodes.InvalidExpression,c)};f.throwError=function(a,c,d=this.endMarker){const {index:e,line:g,column:k}=c;this.errorHandler.throwError({code:a,index:e,line:g,column:k+1,len:d.index-e-1})};f.tolerateError=function(a,c){throw Error("######################################### !!!");};f.unexpectedTokenError=function(a={}){const {rawToken:c}=a;let {code:d,data:e}=a;if(c){if(!d)switch(c.type){case b.TokenType.EOF:d=
b.ParsingErrorCodes.UnexpectedEndOfScript;break;case b.TokenType.Identifier:d=b.ParsingErrorCodes.UnexpectedIdentifier;break;case b.TokenType.NumericLiteral:d=b.ParsingErrorCodes.UnexpectedNumber;break;case b.TokenType.StringLiteral:d=b.ParsingErrorCodes.UnexpectedString;break;case b.TokenType.Template:d=b.ParsingErrorCodes.UnexpectedTemplate}a=c.value.toString()}else a="ILLEGAL";d=d??b.ParsingErrorCodes.UnexpectedToken;e||(e={value:a});a=t.formatErrorDescription(d,e);if(c)return new b.ParsingError({code:d,
index:c.start,line:c.lineNumber,column:c.start-c.lineStart+1,len:c.end-c.start-1,data:e,description:a});const {index:g,line:k}=this.endMarker;return new b.ParsingError({code:d,index:g,line:k,column:this.endMarker.column+1,data:e,description:a})};f.throwUnexpectedToken=function(a={}){a.rawToken=a.rawToken??this.rawToken;throw this.unexpectedTokenError(a);};f.collectComments=function(a){const {commentHandler:c}=this;c&&a.length&&a.forEach(d=>{d={type:d.multiLine?b.Syntax.BlockComment:b.Syntax.LineComment,
value:this.getSourceValue(d),range:d.range,loc:d.loc};c.collectComment(d)})};f.peekAhead=function(a){const c=this.scanner.saveState();a=a.call(this,()=>{this.scanner.scanComments();return this.scanner.lex()});this.scanner.restoreState(c);return a};f.getSourceValue=function(a){return this.scanner.source.slice(a.start,a.end)};f.convertToToken=function(a){return{type:b.TokenNames[a.type],value:this.getSourceValue(a),range:[a.start,a.end],loc:{start:{line:this.startMarker.line,column:this.startMarker.column},
end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}}};f.readNextRawToken=function(){this.endMarker.index=this.scanner.index;this.endMarker.line=this.scanner.lineNumber;this.endMarker.column=this.scanner.index-this.scanner.lineStart;const a=this.rawToken;this.collectComments(this.scanner.scanComments());this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-
this.scanner.lineStart);this.rawToken=this.scanner.lex();this.hasLineTerminator=a.lineNumber!==this.rawToken.lineNumber;this.options.tokens&&this.rawToken.type!==b.TokenType.EOF&&this.tokens.push(this.convertToToken(this.rawToken))};f.captureStartMarker=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}};f.getItemLocation=function(a){return{range:[a.index,this.endMarker.index],loc:{start:{line:a.line,column:a.column},end:{line:this.endMarker.line,
column:this.endMarker.column}}}};f.finalize=function(a){if(this.delegate||this.commentHandler)this.commentHandler?.attachComments(a),this.delegate?.(a);return a};f.expectPunctuator=function(a){const c=this.rawToken;this.matchPunctuator(a)?this.readNextRawToken():this.throwUnexpectedToken({rawToken:c,code:b.ParsingErrorCodes.PunctuatorExpected,data:{value:a}})};f.expectKeyword=function(a){this.rawToken.type===b.TokenType.Keyword&&this.rawToken.value.toLowerCase()===a?this.readNextRawToken():this.throwUnexpectedToken({rawToken:this.rawToken})};
f.expectContextualKeyword=function(a){this.rawToken.type===b.TokenType.Identifier&&this.rawToken.value.toLowerCase()===a?this.readNextRawToken():this.throwUnexpectedToken({rawToken:this.rawToken})};f.matchKeyword=function(a){return this.rawToken.type===b.TokenType.Keyword&&this.rawToken.value.toLowerCase()===a};f.matchContextualKeyword=function(a){return this.rawToken.type===b.TokenType.Identifier&&this.rawToken.value===a};f.matchPunctuator=function(a){return this.rawToken.type===b.TokenType.Punctuator&&
this.rawToken.value===a};f.getMatchingPunctuator=function(a){"string"===typeof a&&(a=a.split(""));if(this.rawToken.type===b.TokenType.Punctuator&&a?.length)return a.find(this.matchPunctuator,this)};f.isolateCoverGrammar=function(a){const c=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;a=a.call(this);this.context.isAssignmentTarget=c;return a};f.inheritCoverGrammar=function(a){const c=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;a=a.call(this);this.context.isAssignmentTarget=
this.context.isAssignmentTarget&&c;return a};f.withBlockContext=function(a,c){const d=this.context.blockContext;this.context.blockContext|=a;a=this.context.curlyParsingType;this.context.curlyParsingType=p.Automatic;c=c.call(this);this.context.blockContext=d;this.context.curlyParsingType=a;return c};f.consumeSemicolon=function(){this.matchPunctuator(";")?this.readNextRawToken():this.hasLineTerminator||(this.rawToken.type===b.TokenType.EOF||this.matchPunctuator("}")?(this.endMarker.index=this.startMarker.index,
this.endMarker.line=this.startMarker.line,this.endMarker.column=this.startMarker.column):this.throwUnexpectedToken({rawToken:this.rawToken}))};f.parsePrimaryExpression=function(){const a=this.captureStartMarker(),c=this.rawToken;switch(c.type){case b.TokenType.Identifier:return this.readNextRawToken(),this.finalize({type:b.Syntax.Identifier,name:c.value,...this.getItemLocation(a)});case b.TokenType.NumericLiteral:case b.TokenType.StringLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),
this.finalize({type:b.Syntax.Literal,value:c.value,raw:this.getSourceValue(c),isString:"string"===typeof c.value,...this.getItemLocation(a)});case b.TokenType.BooleanLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:b.Syntax.Literal,value:c.value.toLowerCase()===b.Keywords.True,raw:this.getSourceValue(c),isString:!1,...this.getItemLocation(a)});case b.TokenType.NullLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:b.Syntax.Literal,
value:null,raw:this.getSourceValue(c),isString:!1,...this.getItemLocation(a)});case b.TokenType.Template:return this.parseTemplateLiteral();case b.TokenType.Punctuator:switch(c.value){case "(":return this.inheritCoverGrammar(this.parseGroupExpression);case "[":return this.inheritCoverGrammar(this.parseArrayInitializer);case "{":return this.inheritCoverGrammar(this.parseObjectExpression);default:return this.throwUnexpectedToken({rawToken:this.rawToken})}case b.TokenType.Keyword:return this.context.isAssignmentTarget=
!1,this.throwUnexpectedToken({rawToken:this.rawToken});default:return this.throwUnexpectedToken({rawToken:this.rawToken})}};f.parseArrayInitializer=function(){const a=this.captureStartMarker();this.expectPunctuator("[");const c=[];for(;!this.matchPunctuator("]");){const d=this.captureStartMarker();this.matchPunctuator(",")?(this.readNextRawToken(),this.throwError(b.ParsingErrorCodes.InvalidExpression,d)):(c.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.matchPunctuator("]")||
this.expectPunctuator(","))}this.expectPunctuator("]");return this.finalize({type:b.Syntax.ArrayExpression,elements:c,...this.getItemLocation(a)})};f.parseObjectPropertyKey=function(){const a=this.captureStartMarker(),c=this.rawToken;switch(c.type){case b.TokenType.StringLiteral:return this.readNextRawToken(),this.finalize({type:b.Syntax.Literal,value:c.value,raw:this.getSourceValue(c),isString:!0,...this.getItemLocation(a)});case b.TokenType.Identifier:case b.TokenType.BooleanLiteral:case b.TokenType.NullLiteral:case b.TokenType.Keyword:return this.readNextRawToken(),
this.finalize({type:b.Syntax.Identifier,name:c.value,...this.getItemLocation(a)});default:this.throwError(b.ParsingErrorCodes.KeyMustBeString,a)}};f.parseObjectProperty=function(){const a=this.rawToken,c=this.captureStartMarker(),d=this.parseObjectPropertyKey();let e=!1,g=null;this.matchPunctuator(":")?(this.readNextRawToken(),g=this.inheritCoverGrammar(this.parseAssignmentExpression)):a.type===b.TokenType.Identifier?(e=!0,g=this.finalize({type:b.Syntax.Identifier,name:a.value,...this.getItemLocation(c)})):
this.throwUnexpectedToken({rawToken:this.rawToken});return this.finalize({type:b.Syntax.Property,kind:"init",key:d,value:g,shorthand:e,...this.getItemLocation(c)})};f.parseObjectExpression=function(){const a=this.captureStartMarker();this.expectPunctuator("{");const c=[];for(;!this.matchPunctuator("}");)c.push(this.parseObjectProperty()),this.matchPunctuator("}")||this.expectPunctuator(",");this.expectPunctuator("}");return this.finalize({type:b.Syntax.ObjectExpression,properties:c,...this.getItemLocation(a)})};
f.parseTemplateElement=function(a=!1){var c=this.rawToken;c.type!==b.TokenType.Template&&this.throwUnexpectedToken({rawToken:c});a&&!c.head&&this.throwUnexpectedToken({code:b.ParsingErrorCodes.InvalidTemplateHead,rawToken:c});a=this.captureStartMarker();this.readNextRawToken();const {value:d,cooked:e,tail:g}=c;c=this.finalize({type:b.Syntax.TemplateElement,value:{raw:d,cooked:e},tail:g,...this.getItemLocation(a)});c.loc.start.column++;c.loc.end.column-=g?1:2;return c};f.parseTemplateLiteral=function(){const a=
this.captureStartMarker(),c=[],d=[];let e=this.parseTemplateElement(!0);for(d.push(e);!e.tail;)c.push(this.parseExpression()),e=this.parseTemplateElement(),d.push(e);return this.finalize({type:b.Syntax.TemplateLiteral,quasis:d,expressions:c,...this.getItemLocation(a)})};f.parseGroupExpression=function(){this.expectPunctuator("(");const a=this.inheritCoverGrammar(this.parseAssignmentExpression);this.expectPunctuator(")");return a};f.parseArguments=function(){this.expectPunctuator("(");const a=[];if(!this.matchPunctuator(")"))for(;;){const c=
this.isolateCoverGrammar(this.parseAssignmentExpression);a.push(c);if(this.matchPunctuator(")"))break;this.expectPunctuator(",");if(this.matchPunctuator(")"))break}this.expectPunctuator(")");return a};f.parseMemberName=function(){const a=this.rawToken,c=this.captureStartMarker();this.readNextRawToken();a.type!==b.TokenType.NullLiteral&&a.type!==b.TokenType.Identifier&&a.type!==b.TokenType.Keyword&&a.type!==b.TokenType.BooleanLiteral&&this.throwUnexpectedToken({rawToken:a});return this.finalize({type:b.Syntax.Identifier,
name:a.value,...this.getItemLocation(c)})};f.parseLeftHandSideExpression=function(){const a=this.captureStartMarker();let c=this.inheritCoverGrammar(this.parsePrimaryExpression);const d=this.captureStartMarker();for(var e;e=this.getMatchingPunctuator("([.");)switch(e){case "(":this.context.isAssignmentTarget=!1;c.type!==b.Syntax.Identifier&&c.type!==b.Syntax.MemberExpression&&this.throwError(b.ParsingErrorCodes.IdentiferExpected,a,d);e=this.parseArguments();c=this.finalize({type:b.Syntax.CallExpression,
callee:c,arguments:e,...this.getItemLocation(a)});continue;case "[":this.context.isAssignmentTarget=!0;this.expectPunctuator("[");e=this.isolateCoverGrammar(this.parseExpression);this.expectPunctuator("]");c=this.finalize({type:b.Syntax.MemberExpression,computed:!0,object:c,property:e,...this.getItemLocation(a)});continue;case ".":this.context.isAssignmentTarget=!0,this.expectPunctuator("."),e=this.parseMemberName(),c=this.finalize({type:b.Syntax.MemberExpression,computed:!1,object:c,property:e,...this.getItemLocation(a)})}return c};
f.parseUpdateExpression=function(){const a=this.captureStartMarker();let c=this.getMatchingPunctuator(b.UpdateOperators);if(c){this.readNextRawToken();var d=this.captureStartMarker(),e=this.inheritCoverGrammar(this.parseUnaryExpression);e.type!==b.Syntax.Identifier&&e.type!==b.Syntax.MemberExpression&&e.type!==b.Syntax.CallExpression&&this.throwError(b.ParsingErrorCodes.InvalidExpression,d);this.context.isAssignmentTarget||this.tolerateError(b.ParsingErrorCodes.InvalidLeftHandSideInAssignment,a);
this.context.isAssignmentTarget=!1;return this.finalize({type:b.Syntax.UpdateExpression,operator:c,argument:e,prefix:!0,...this.getItemLocation(a)})}d=this.captureStartMarker();e=this.inheritCoverGrammar(this.parseLeftHandSideExpression);const g=this.captureStartMarker();if(this.hasLineTerminator)return e;c=this.getMatchingPunctuator(b.UpdateOperators);if(!c)return e;e.type!==b.Syntax.Identifier&&e.type!==b.Syntax.MemberExpression&&this.throwError(b.ParsingErrorCodes.InvalidExpression,d,g);this.context.isAssignmentTarget||
this.tolerateError(b.ParsingErrorCodes.InvalidLeftHandSideInAssignment,a);this.readNextRawToken();this.context.isAssignmentTarget=!1;return this.finalize({type:b.Syntax.UpdateExpression,operator:c,argument:e,prefix:!1,...this.getItemLocation(a)})};f.parseUnaryExpression=function(){const a=this.getMatchingPunctuator(b.UnaryOperators);if(a){const c=this.captureStartMarker();this.readNextRawToken();const d=this.inheritCoverGrammar(this.parseUnaryExpression);this.context.isAssignmentTarget=!1;return this.finalize({type:b.Syntax.UnaryExpression,
operator:a,argument:d,prefix:!0,...this.getItemLocation(c)})}return this.parseUpdateExpression()};f.parseBinaryExpression=function(){var a=this.rawToken,c=this.inheritCoverGrammar(this.parseUnaryExpression);if(this.rawToken.type!==b.TokenType.Punctuator)return c;var d=this.rawToken.value,e=r(d);if(0===e)return c;this.readNextRawToken();this.context.isAssignmentTarget=!1;a=[a,this.rawToken];var g=this.inheritCoverGrammar(this.parseUnaryExpression);d=[c,d,g];for(var k=[e];this.rawToken.type===b.TokenType.Punctuator&&
0<(e=r(this.rawToken.value));){for(;2<d.length&&e<=k[k.length-1];){g=d.pop();const n=d.pop();k.pop();c=d.pop();a.pop();var m=a[a.length-1];m=u(m,m.lineStart);d.push(this.finalize(this.createBinaryOrLogicalExpression(m,n,c,g)))}d.push(this.rawToken.value);k.push(e);a.push(this.rawToken);this.readNextRawToken();d.push(this.inheritCoverGrammar(this.parseUnaryExpression))}e=d.length-1;c=d[e];for(k=a.pop();1<e;){g=a.pop();if(!g)break;k=u(g,k?.lineStart);c=this.finalize(this.createBinaryOrLogicalExpression(k,
d[e-1],d[e-2],c));e-=2;k=g}return c};f.createBinaryOrLogicalExpression=function(a,c,d,e){const g=b.LogicalOperators.includes(c)?b.Syntax.LogicalExpression:b.Syntax.BinaryExpression;if(g===b.Syntax.BinaryExpression)return{type:g,operator:c,left:d,right:e,...this.getItemLocation(a)};d.type!==b.Syntax.AssignmentExpression&&d.type!==b.Syntax.UpdateExpression||this.throwError(b.ParsingErrorCodes.InvalidExpression,...v(d));e.type!==b.Syntax.AssignmentExpression&&e.type!==b.Syntax.UpdateExpression||this.throwError(b.ParsingErrorCodes.InvalidExpression,
...v(d));return{type:g,operator:c,left:d,right:e,...this.getItemLocation(a)}};f.parseAssignmentExpression=function(){const a=this.captureStartMarker(),c=this.inheritCoverGrammar(this.parseBinaryExpression);var d=this.captureStartMarker();const e=this.getMatchingPunctuator(b.AssignmentOperators);if(!e)return c;c.type!==b.Syntax.Identifier&&c.type!==b.Syntax.MemberExpression&&this.throwError(b.ParsingErrorCodes.InvalidExpression,a,d);this.context.isAssignmentTarget||this.tolerateError(b.ParsingErrorCodes.InvalidLeftHandSideInAssignment,
a);this.matchPunctuator("\x3d")||(this.context.isAssignmentTarget=!1);this.readNextRawToken();d=this.isolateCoverGrammar(this.parseAssignmentExpression);return this.finalize({type:b.Syntax.AssignmentExpression,left:c,operator:e,right:d,...this.getItemLocation(a)})};f.parseExpression=function(){return this.isolateCoverGrammar(this.parseAssignmentExpression)};f.parseStatements=function(a){const c=[];for(;this.rawToken.type!==b.TokenType.EOF&&!this.matchPunctuator(a);){const d=this.parseStatementListItem();
b.isEmptyStatement(d)||c.push(d)}return c};f.parseStatementListItem=function(){this.context.isAssignmentTarget=!0;return this.matchKeyword(b.Keywords.Function)?this.parseFunctionDeclaration():this.matchKeyword(b.Keywords.Export)?this.parseExportDeclaration():this.matchKeyword(b.Keywords.Import)?this.parseImportDeclaration():this.parseStatement()};f.parseBlock=function(){const a=this.captureStartMarker();this.expectPunctuator("{");const c=this.parseStatements("}");this.expectPunctuator("}");return this.finalize({type:b.Syntax.BlockStatement,
body:c,...this.getItemLocation(a)})};f.parseObjectStatement=function(){const a=this.captureStartMarker(),c=this.parseObjectExpression();return this.finalize({type:b.Syntax.ExpressionStatement,expression:c,...this.getItemLocation(a)})};f.parseBlockOrObjectStatement=function(){return this.context.curlyParsingType===p.AsObject||this.peekAhead(a=>{let c=a();if(c.type!==b.TokenType.Identifier&&c.type!==b.TokenType.StringLiteral)return!1;c=a();return c.type!==b.TokenType.Punctuator||":"!==c.value?!1:!0})?
this.parseObjectStatement():this.parseBlock()};f.parseIdentifier=function(){const a=this.rawToken;if(a.type!==b.TokenType.Identifier)return null;const c=this.captureStartMarker();this.readNextRawToken();return this.finalize({type:b.Syntax.Identifier,name:a.value,...this.getItemLocation(c)})};f.parseVariableDeclarator=function(){const a=this.captureStartMarker(),c=this.parseIdentifier();c||this.throwUnexpectedToken({code:b.ParsingErrorCodes.IdentiferExpected});let d=null;if(this.matchPunctuator("\x3d")){this.readNextRawToken();
const e=this.rawToken;try{d=this.isolateCoverGrammar(this.parseAssignmentExpression)}catch(g){this.throwUnexpectedToken({rawToken:e,code:b.ParsingErrorCodes.InvalidVariableAssignment})}}return this.finalize({type:b.Syntax.VariableDeclarator,id:c,init:d,...this.getItemLocation(a)})};f.parseVariableDeclarationList=function(){const a=[this.parseVariableDeclarator()];for(;this.matchPunctuator(",");)this.readNextRawToken(),a.push(this.parseVariableDeclarator());return a};f.parseVariableDeclaration=function(){const a=
this.captureStartMarker();this.expectKeyword(b.Keywords.Var);const c=this.parseVariableDeclarationList();this.consumeSemicolon();return this.finalize({type:b.Syntax.VariableDeclaration,declarations:c,kind:"var",...this.getItemLocation(a)})};f.parseEmptyStatement=function(){const a=this.captureStartMarker();this.expectPunctuator(";");return this.finalize({type:b.Syntax.EmptyStatement,...this.getItemLocation(a)})};f.parseExpressionStatement=function(){const a=this.captureStartMarker(),c=this.parseExpression();
this.consumeSemicolon();return this.finalize({type:b.Syntax.ExpressionStatement,expression:c,...this.getItemLocation(a)})};f.parseIfClause=function(){return this.withBlockContext(l.IfClause,this.parseStatement)};f.parseIfStatement=function(){const a=this.captureStartMarker();this.expectKeyword(b.Keywords.If);this.expectPunctuator("(");var c=this.captureStartMarker();const d=this.parseExpression();var e=this.captureStartMarker();this.expectPunctuator(")");d.type!==b.Syntax.AssignmentExpression&&d.type!==
b.Syntax.UpdateExpression||this.throwError(b.ParsingErrorCodes.InvalidExpression,c,e);c=this.parseIfClause();e=null;this.matchKeyword(b.Keywords.Else)&&(this.readNextRawToken(),e=this.parseIfClause());return this.finalize({type:b.Syntax.IfStatement,test:d,consequent:c,alternate:e,...this.getItemLocation(a)})};f.parseWhileStatement=function(){const a=this.captureStartMarker();this.expectKeyword(b.Keywords.While);this.expectPunctuator("(");var c=this.captureStartMarker();const d=this.parseExpression(),
e=this.captureStartMarker();this.expectPunctuator(")");d.type!==b.Syntax.AssignmentExpression&&d.type!==b.Syntax.UpdateExpression||this.throwError(b.ParsingErrorCodes.InvalidExpression,c,e);c=this.withBlockContext(l.WhileLoop,this.parseStatement);return this.finalize({type:b.Syntax.WhileStatement,test:d,body:c,...this.getItemLocation(a)})};f.parseForStatement=function(){let a=null,c=null,d=null,e=null,g=null;const k=this.captureStartMarker();this.expectKeyword(b.Keywords.For);this.expectPunctuator("(");
if(this.matchPunctuator(";"))this.readNextRawToken();else if(this.matchKeyword(b.Keywords.Var)){var m=this.captureStartMarker();this.readNextRawToken();var n=this.parseVariableDeclarationList();1===n.length&&this.matchKeyword(b.Keywords.In)?(n[0].init&&this.throwError(b.ParsingErrorCodes.ForInOfLoopInitializer,m),e=this.finalize({type:b.Syntax.VariableDeclaration,declarations:n,kind:"var",...this.getItemLocation(m)}),this.readNextRawToken(),g=this.parseExpression()):(this.matchKeyword(b.Keywords.In)&&
this.throwError(b.ParsingErrorCodes.InvalidLeftHandSideInForIn,m),a=this.finalize({type:b.Syntax.VariableDeclaration,declarations:n,kind:"var",...this.getItemLocation(m)}),this.expectPunctuator(";"))}else m=this.context.isAssignmentTarget,n=this.captureStartMarker(),a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.matchKeyword(b.Keywords.In)?(this.context.isAssignmentTarget||this.tolerateError(b.ParsingErrorCodes.InvalidLeftHandSideInForIn,n),a.type!==b.Syntax.Identifier&&this.throwError(b.ParsingErrorCodes.InvalidLeftHandSideInForIn,
n),this.readNextRawToken(),e=a,g=this.parseExpression(),a=null):(this.context.isAssignmentTarget=m,this.expectPunctuator(";"));e||(this.matchPunctuator(";")||(c=this.isolateCoverGrammar(this.parseExpression)),this.expectPunctuator(";"),this.matchPunctuator(")")||(d=this.isolateCoverGrammar(this.parseExpression)));this.expectPunctuator(")");m=this.withBlockContext(l.ForLoop,()=>this.isolateCoverGrammar(this.parseStatement));return e&&g?this.finalize({type:b.Syntax.ForInStatement,left:e,right:g,body:m,
...this.getItemLocation(k)}):this.finalize({type:b.Syntax.ForStatement,init:a,test:c,update:d,body:m,...this.getItemLocation(k)})};f.parseContinueStatement=function(){const a=this.captureStartMarker();this.expectKeyword(b.Keywords.Continue);this.consumeSemicolon();return this.finalize({type:b.Syntax.ContinueStatement,...this.getItemLocation(a)})};f.parseBreakStatement=function(){const a=this.captureStartMarker();this.expectKeyword(b.Keywords.Break);this.consumeSemicolon();return this.finalize({type:b.Syntax.BreakStatement,
...this.getItemLocation(a)})};f.parseReturnStatement=function(){const a=this.captureStartMarker();this.expectKeyword(b.Keywords.Return);const c=(this.matchPunctuator(";")||this.matchPunctuator("}")||this.hasLineTerminator||this.rawToken.type===b.TokenType.EOF)&&this.rawToken.type!==b.TokenType.StringLiteral&&this.rawToken.type!==b.TokenType.Template?null:this.parseExpression();this.consumeSemicolon();return this.finalize({type:b.Syntax.ReturnStatement,argument:c,...this.getItemLocation(a)})};f.parseStatement=
function(){switch(this.rawToken.type){case b.TokenType.BooleanLiteral:case b.TokenType.NullLiteral:case b.TokenType.NumericLiteral:case b.TokenType.StringLiteral:case b.TokenType.Template:case b.TokenType.Identifier:return this.parseExpressionStatement();case b.TokenType.Punctuator:return"{"===this.rawToken.value?this.parseBlockOrObjectStatement():"("===this.rawToken.value?this.parseExpressionStatement():";"===this.rawToken.value?this.parseEmptyStatement():this.parseExpressionStatement();case b.TokenType.Keyword:switch(this.rawToken.value.toLowerCase()){case b.Keywords.Break:return this.parseBreakStatement();
case b.Keywords.Continue:return this.parseContinueStatement();case b.Keywords.For:return this.parseForStatement();case b.Keywords.Function:return this.parseFunctionDeclaration();case b.Keywords.If:return this.parseIfStatement();case b.Keywords.Return:return this.parseReturnStatement();case b.Keywords.Var:return this.parseVariableDeclaration();case b.Keywords.While:return this.parseWhileStatement();default:return this.parseExpressionStatement()}default:return this.throwUnexpectedToken({rawToken:this.rawToken})}};
f.parseFormalParameters=function(){const a=[];this.expectPunctuator("(");if(!this.matchPunctuator(")"))for(;this.rawToken.type!==b.TokenType.EOF;){const c=this.parseIdentifier();c||this.throwUnexpectedToken({rawToken:this.rawToken,code:b.ParsingErrorCodes.IdentiferExpected});a.push(c);if(this.matchPunctuator(")"))break;this.expectPunctuator(",");if(this.matchPunctuator(")"))break}this.expectPunctuator(")");return a};f.parseFunctionDeclaration=function(){(this.context.blockContext&l.Function)===l.Function&&
this.throwUnexpectedToken({code:b.ParsingErrorCodes.NoFunctionInsideFunction});(this.context.blockContext&l.WhileLoop)!==l.WhileLoop&&(this.context.blockContext&l.IfClause)!==l.IfClause||this.throwUnexpectedToken({code:b.ParsingErrorCodes.NoFunctionInsideBlock});const a=this.captureStartMarker();this.expectKeyword(b.Keywords.Function);const c=this.parseIdentifier();c||this.throwUnexpectedToken({code:b.ParsingErrorCodes.InvalidFunctionIdentifier});const d=this.parseFormalParameters(),e=this.context.blockContext;
this.context.blockContext|=l.Function;const g=this.parseBlock();this.context.blockContext=e;return this.finalize({type:b.Syntax.FunctionDeclaration,id:c,params:d,body:g,...this.getItemLocation(a)})};f.parseScript=function(){var a=this.captureStartMarker();const c=this.parseStatements();a=this.finalize({type:b.Syntax.Program,body:c,...this.getItemLocation(a)});this.options.tokens&&(a.tokens=this.tokens);this.options.tolerant&&(a.errors=this.errorHandler.errors);return a};f.parseExportDeclaration=function(){this.context.blockContext!==
l.None&&this.throwUnexpectedToken({code:b.ParsingErrorCodes.ModuleExportRootOnly});let a=null;const c=this.captureStartMarker();this.expectKeyword(b.Keywords.Export);this.matchKeyword(b.Keywords.Var)?a=this.parseVariableDeclaration():this.matchKeyword("function")?a=this.parseFunctionDeclaration():this.throwUnexpectedToken({code:b.ParsingErrorCodes.InvalidExpression});return this.finalize({type:b.Syntax.ExportNamedDeclaration,declaration:a,specifiers:[],source:null,...this.getItemLocation(c)})};f.parseModuleSpecifier=
function(){const a=this.captureStartMarker(),c=this.rawToken;if(c.type===b.TokenType.StringLiteral)return this.readNextRawToken(),this.finalize({type:b.Syntax.Literal,value:c.value,raw:this.getSourceValue(c),isString:!0,...this.getItemLocation(a)});this.throwError(b.ParsingErrorCodes.InvalidModuleUri,a)};f.parseDefaultSpecifier=function(){const a=this.captureStartMarker(),c=this.parseIdentifier();c||this.throwUnexpectedToken({code:b.ParsingErrorCodes.IdentiferExpected});return this.finalize({type:b.Syntax.ImportDefaultSpecifier,
local:c,...this.getItemLocation(a)})};f.parseImportDeclaration=function(){this.context.blockContext!==l.None&&this.throwUnexpectedToken({code:b.ParsingErrorCodes.ModuleImportRootOnly});const a=this.captureStartMarker();this.expectKeyword(b.Keywords.Import);const c=this.parseDefaultSpecifier();this.expectContextualKeyword(b.Keywords.From);const d=this.parseModuleSpecifier();return this.finalize({type:b.Syntax.ImportDeclaration,specifiers:[c],source:d,...this.getItemLocation(a)})};return h}();q.Parser=
y;q.binaryOperatorPrecedence=r;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});