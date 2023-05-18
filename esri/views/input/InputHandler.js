// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Logger","./EventMatch"],function(l,m,k,p){const n=k.getLogger("esri.views.input.InputHandler");k=function(){function e(a){this._manager=null;this._incoming={};this._outgoing={};this._outgoingEventTypes=this._incomingEventTypes=this._incomingEventMatches=null;this._hasSideEffects=a}var d=e.prototype;d.onInstall=function(a){this._manager?n.error("This InputHandler has already been registered with an InputManager"):(a.setEventCallback(b=>
this._handleEvent(b)),a.setUninstallCallback(()=>this._onUninstall()),this._manager=a)};d.onUninstall=function(){};d.registerIncoming=function(a,b,c){"function"===typeof b?(c=b,b=[]):b=b||[];a="string"===typeof a?new p.EventMatch(a,b):a;const h=()=>{this._incomingEventMatches=this._incomingEventTypes=null};b=f=>{const g=this._incoming[f.match.eventType];g&&(f=g.indexOf(f),g.splice(f,1),h(),this._manager&&this._manager.updateDependencies())};c=new q(a,c,{onPause:b,onRemove:b,onResume:f=>{const g=this._incoming[f.match.eventType];
g&&!g.includes(f)&&(g.push(f),h(),this._manager&&this._manager.updateDependencies())}});b=this._incoming[a.eventType];b||(b=[],this._incoming[a.eventType]=b);b.push(c);h();this._manager&&this._manager.updateDependencies();return c};d.registerOutgoing=function(a){if(this._outgoing[a])throw Error("There is already a callback registered for this outgoing InputEvent: "+a);const b=new r(a,{onEmit:(c,h,f,g)=>{this._manager?.emit(c.eventType,h,f,g)},onRemove:c=>{delete this._outgoing[c.eventType];this._manager?.updateDependencies()}});
this._outgoing[a]=b;this._outgoingEventTypes=null;this._manager&&this._manager.updateDependencies();return b};d.startCapturingPointer=function(a){this._manager?.setPointerCapture(a,!0)};d.stopCapturingPointer=function(a){this._manager?.setPointerCapture(a,!1)};d.refreshHasPendingInputs=function(){this._manager?.refreshHasPendingInputs()};d._onUninstall=function(){this._manager?(this.onUninstall(),this._manager=null):n.error("This InputHandler is not registered with an InputManager")};d._handleEvent=
function(a){const b=this._incoming[a.type];if(b)for(const c of b)if(c.match.matches(a)&&(c.callback?.(a),a.shouldStopPropagation()))break};m._createClass(e,[{key:"incomingEventMatches",get:function(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const a in this._incoming){const b=this._incoming[a];for(const c of b)this._incomingEventMatches.push(c.match)}}return this._incomingEventMatches}},{key:"incomingEventTypes",get:function(){this._incomingEventTypes||(this._incomingEventTypes=
this.incomingEventMatches.map(a=>a.eventType));return this._incomingEventTypes}},{key:"outgoingEventTypes",get:function(){this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing));return this._outgoingEventTypes}},{key:"hasSideEffects",get:function(){return this._hasSideEffects}},{key:"hasPendingInputs",get:function(){return!1}}]);return e}();let q=function(){function e(a,b,c){this.match=a;this._callback=b;this._handler=c}var d=e.prototype;d.pause=function(){this._handler.onPause(this)};
d.resume=function(){this._handler.onResume(this)};d.remove=function(){this._handler.onRemove(this)};m._createClass(e,[{key:"callback",get:function(){return this._callback}}]);return e}(),r=function(){function e(a,b){this.eventType=a;this._removed=!1;this._handler=b}var d=e.prototype;d.emit=function(a,b,c){if(!this._removed)this._handler.onEmit(this,a,b,c)};d.remove=function(){this._removed=!0;this._handler.onRemove(this)};return e}();l.InputHandler=k;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});