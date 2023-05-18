// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["./errorsupport","./shared","./sqlUtils","../../../core/sql/WhereClause"],function(b,k,l,g){return function(){function f(){this.tofieldname=this.field="";this.typeofstat="MIN";this.workingexpr=null}var h=f.prototype;h.clone=function(){const a=new f;a.field=this.field;a.tofieldname=this.tofieldname;a.typeofstat=this.typeofstat;a.workingexpr=this.workingexpr;return a};f.parseStatField=function(a,d,e){const c=new f;c.field=a;a=g.WhereClause.create(d,e);if("function"===a.parseTree.type)if(0===
a.parseTree.args.value.length)d={name:a.parseTree.name,expr:null};else{if(1<a.parseTree.args.value.length)throw new b.SqlError(b.SqlErrorCodes.MissingStatisticParameters);d=g.WhereClause.create(l.toWhereClauseFromTree(a.parseTree.args.value[0],k.FeatureServiceDatabaseType.Standardised,a.parameters),a.fieldsIndex);d={name:a.parseTree.name,expr:d}}else d=null;if(null===d)throw new b.SqlError(b.SqlErrorCodes.UnsupportedSqlFunction,{function:""});e=d.name.toUpperCase().trim();if("MIN"===e){if(c.typeofstat=
"MIN",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"min"});}else if("MAX"===e){if(c.typeofstat="MAX",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"max"});}else if("COUNT"===e)c.typeofstat="COUNT",c.workingexpr=d.expr;else if("STDEV"===e){if(c.typeofstat="STDDEV",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"stdev"});}else if("SUM"===
e){if(c.typeofstat="SUM",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"sum"});}else if("MEAN"===e){if(c.typeofstat="AVG",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:e});}else if("AVG"===e){if(c.typeofstat="AVG",c.workingexpr=d.expr,null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"avg"});}else if("VAR"===e){if(c.typeofstat="VAR",c.workingexpr=d.expr,
null===a)throw new b.SqlError(b.SqlErrorCodes.InvalidFunctionParameters,{function:"var"});}else throw new b.SqlError(b.SqlErrorCodes.UnsupportedSqlFunction,{function:e});return c};h.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case "MIN":return"min";case "MAX":return"max";case "SUM":return"sum";case "COUNT":return"count";case "VAR":return"var";case "STDDEV":return"stddev";case "AVG":return"avg";default:return"count"}};return f}()});