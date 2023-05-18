// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./NetworkElement ../../../geometry/Polyline".split(" "),function(n,c,b,p,e,t,u,k,q,l,f,r){b=function(m){function h(a){a=
m.call(this,a)||this;a.globalId=null;a.associationType=null;a.fromNetworkElement=null;a.toNetworkElement=null;a.geometry=null;a.errorMessage=null;a.percentAlong=null;a.errorCode=null;a.isContentVisible=null;a.status=null;return a}n._inheritsLoose(h,m);var g=h.prototype;g.readFromNetworkElement=function(a,d){a=new f;a.globalId=d.fromGlobalId;a.networkSourceId=d.fromNetworkSourceId;a.terminalId=d.fromTerminalId;return a};g.writeFromNetworkElement=function(a,d){a&&(d.fromGlobalId=a.globalId,d.fromNetworkSourceId=
a.networkSourceId,d.fromTerminalId=a.terminalId)};g.readToNetworkElement=function(a,d){a=new f;a.globalId=d.toGlobalId;a.networkSourceId=d.toNetworkSourceId;a.terminalId=d.toTerminalId;return a};g.writeToNetworkElement=function(a,d){a&&(d.toGlobalId=a.globalId,d.toNetworkSourceId=a.networkSourceId,d.toTerminalId=a.terminalId)};return h}(p.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"globalId",void 0);c.__decorate([e.property({type:["attachment","connectivity",
"containment"],json:{write:!0}})],b.prototype,"associationType",void 0);c.__decorate([e.property({type:f,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],b.prototype,"fromNetworkElement",void 0);c.__decorate([k.reader("fromNetworkElement")],b.prototype,"readFromNetworkElement",null);c.__decorate([l.writer("fromNetworkElement")],b.prototype,"writeFromNetworkElement",
null);c.__decorate([e.property({type:f,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],b.prototype,"toNetworkElement",void 0);c.__decorate([k.reader("toNetworkElement")],b.prototype,"readToNetworkElement",null);c.__decorate([l.writer("toNetworkElement")],b.prototype,"writeToNetworkElement",null);c.__decorate([e.property({type:r,json:{write:!0}})],b.prototype,"geometry",void 0);
c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"errorMessage",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"percentAlong",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"errorCode",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"isContentVisible",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"status",void 0);return b=c.__decorate([q.subclass("esri.rest.networks.support.Association")],
b)});