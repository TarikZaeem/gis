// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/zscale ../../../support/StreamConnection".split(" "),function(m,q,v,k,h,n,y,B,
z,F,G,C,D,E){var p;(function(f){f[f.CONNECTING=0]="CONNECTING";f[f.OPEN=1]="OPEN";f[f.CLOSING=2]="CLOSING";f[f.CLOSED=3]="CLOSED"})(p||(p={}));m.WebSocketConnection=function(f){function t(a){var c=f.call(this)||this;c._outstandingMessages=[];c.errorString=null;const {geometryType:d,spatialReference:b,sourceSpatialReference:e}=a;c._config=a;c._featureZScaler=D.getGeometryZScaler(d,e,b);c._open();return c}q._inheritsLoose(t,f);var g=t.prototype;g._open=function(){var a=q._asyncToGenerator(function*(){yield this._tryCreateWebSocket();
this.destroyed||(yield this._handshake())});return function(){return a.apply(this,arguments)}}();g.destroy=function(){f.prototype.destroy.call(this);n.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close());this._websocket=null};g.sendMessageToSocket=function(a){n.isNone(this._websocket)?this._outstandingMessages.push(a):this._websocket.send(JSON.stringify(a))};g.sendMessageToClient=function(a){this._onMessage(a)};
g.updateCustomParameters=function(a){this._config.customParameters=a;n.isSome(this._websocket)&&this._websocket.close()};g._tryCreateWebSocket=function(){var a=q._asyncToGenerator(function*(c=this._config.source.path,d=1E3,b=0){try{if(!this.destroyed){var e=B.addQueryParameters(c,this._config.customParameters??{});this._websocket=yield this._createWebSocket(e);this.notifyChange("connectionStatus")}}catch(r){if(e=d/1E3,this._config.maxReconnectionAttempts&&b>=this._config.maxReconnectionAttempts)h.getLogger(this.declaredClass).error(new k("websocket-connection",
"Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),this.destroy();else return h.getLogger(this.declaredClass).error(new k("websocket-connection",`Failed to connect. Attempting to reconnect in ${e}s`,r)),yield y.after(d),this._tryCreateWebSocket(c,Math.min(1.5*d,1E3*this._config.maxReconnectionInterval),b+1)}});return function(){return a.apply(this,arguments)}}();g._setWebSocketJSONParseHandler=function(a){a.onmessage=c=>{try{const d=JSON.parse(c.data);this._onMessage(d)}catch(d){h.getLogger(this.declaredClass).error(new k("websocket-connection",
"Failed to parse message, invalid JSON",{error:d}))}}};g._createWebSocket=function(a){return new Promise((c,d)=>{const b=new WebSocket(a);b.onopen=()=>{b.onopen=null;this.destroyed?(b.onclose=null,b.close()):(b.onclose=e=>this._onClose(e),b.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(b),c(b))};b.onclose=e=>{b.onopen=b.onclose=null;d(e)}})};g._handshake=function(){var a=q._asyncToGenerator(function*(c=1E4){const d=this._websocket;if(!n.isNone(d)){var b=y.createResolver(),e=d.onmessage,
{filter:r,outFields:w,spatialReference:x}=this._config;b.timeout(c);d.onmessage=u=>{let l=null;try{l=JSON.parse(u.data)}catch(A){}l&&"object"===typeof l||(h.getLogger(this.declaredClass).error(new k("websocket-connection","Protocol violation. Handshake failed - malformed message",u.data)),b.reject(),this.destroy());l.spatialReference?.wkid!==x?.wkid&&(h.getLogger(this.declaredClass).error(new k("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${x.wkid}`,u.data)),b.reject(),
this.destroy());"json"!==l.format&&(h.getLogger(this.declaredClass).error(new k("websocket-connection","Protocol violation. Handshake failed - format is not set",u.data)),b.reject(),this.destroy());r&&l.filter!==r&&h.getLogger(this.declaredClass).error(new k("websocket-connection","Tried to set filter, but server doesn't support it"));w&&l.outFields!==w&&h.getLogger(this.declaredClass).error(new k("websocket-connection","Tried to set outFields, but server doesn't support it"));d.onmessage=e;for(const A of this._outstandingMessages)d.send(JSON.stringify(A));
this._outstandingMessages=[];b.resolve()};d.send(JSON.stringify({filter:r,outFields:w,format:"json",spatialReference:{wkid:x.wkid}}));return b.promise}});return function(){return a.apply(this,arguments)}}();g._onMessage=function(a){this.onMessage(a);if("type"in a)switch(a.type){case "features":case "featureResult":for(const c of a.features)n.isSome(this._featureZScaler)&&this._featureZScaler(c.geometry),this.onFeature(c)}};g._onError=function(a){this._set("errorString","Encountered an error over WebSocket connection");
h.getLogger(this.declaredClass).error("websocket-connection","Encountered an error over WebSocket connection")};g._onClose=function(a){this._websocket=null;this.notifyChange("connectionStatus");1E3!==a.code&&h.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${a.code}`);this.destroyed||this._open()};q._createClass(t,[{key:"connectionStatus",get:function(){if(n.isNone(this._websocket))return"disconnected";switch(this._websocket.readyState){case p.CONNECTING:case p.OPEN:return"connected";
case p.CLOSING:case p.CLOSED:return"disconnected"}}}]);return t}(E);v.__decorate([z.property()],m.WebSocketConnection.prototype,"connectionStatus",null);v.__decorate([z.property()],m.WebSocketConnection.prototype,"errorString",void 0);m.WebSocketConnection=v.__decorate([C.subclass("esri.layers.graphics.sources.connections.WebSocketConnection")],m.WebSocketConnection);Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});