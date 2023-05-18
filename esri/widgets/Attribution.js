// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./Attribution/AttributionViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(n,d,r,e,b,y,t,u,p,v,w,k,z){b=function(q){function l(a,f){var c=q.call(this,a,f)||this;c._isOpen=
!1;c._attributionTextOverflowed=!1;c._prevSourceNodeHeight=0;c._resizeObserver=new ResizeObserver(h=>h.forEach(({target:m})=>c._checkSourceTextOverflow(m)));c.iconClass="esri-icon-description";c.itemDelimiter=" | ";c.messages=null;c.viewModel=new p;return c}n._inheritsLoose(l,q);var g=l.prototype;g.initialize=function(){this.addHandles(r.on(()=>this.viewModel?.items,"change",()=>this.scheduleRender()))};g.destroy=function(){this._resizeObserver?.disconnect()};g.render=function(){return k.tsx("div",
{bind:this,class:this.classes("esri-attribution esri-widget",{["esri-attribution--open"]:this._isOpen}),dir:"ltr",onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())};g.renderPoweredBy=function(){return k.tsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",k.tsx("a",{class:"esri-attribution__link",href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))};g.renderSourcesNode=function(){const a=this._isOpen,f=this._isInteractive,
c=f?"0":"",{attributionText:h}=this;return k.tsx("div",{afterCreate:this._afterSourcesNodeCreate,bind:this,class:this.classes("esri-attribution__sources",{["esri-attribution__sources--open"]:a,["esri-interactive"]:f}),innerHTML:h,tabindex:c})};g._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth;this._resizeObserver.observe(a)};g._checkSourceTextOverflow=function(a){let f=!1;const {clientHeight:c,clientWidth:h,scrollWidth:m}=a;a=m>h;const x=this._attributionTextOverflowed!==
a;this._attributionTextOverflowed=a;x&&(f=!0);this._isOpen&&(a=c<this._prevSourceNodeHeight,this._prevSourceNodeHeight=c,a&&(this._isOpen=!1,f=!0));f&&this.scheduleRender()};g._toggleState=function(){this._isInteractive&&(this._isOpen=!this._isOpen)};n._createClass(l,[{key:"_isInteractive",get:function(){return this._isOpen||this._attributionTextOverflowed}},{key:"attributionText",get:function(){return this.viewModel.items.reduce((a,f)=>{a.includes(f.text)||a.push(f.text);return a},[]).join(this.itemDelimiter)}},
{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return l}(u);d.__decorate([e.property()],b.prototype,"_isOpen",void 0);d.__decorate([e.property()],b.prototype,"_isInteractive",null);d.__decorate([e.property()],b.prototype,"_attributionTextOverflowed",void 0);d.__decorate([e.property()],b.prototype,"_prevSourceNodeHeight",void 0);d.__decorate([e.property({readOnly:!0,
dependsOn:["viewModel.items.length","itemDelimiter"]})],b.prototype,"attributionText",null);d.__decorate([e.property()],b.prototype,"iconClass",void 0);d.__decorate([e.property()],b.prototype,"itemDelimiter",void 0);d.__decorate([e.property()],b.prototype,"label",null);d.__decorate([e.property(),w.messageBundle("esri/widgets/Attribution/t9n/Attribution")],b.prototype,"messages",void 0);d.__decorate([e.property()],b.prototype,"view",null);d.__decorate([e.property({type:p})],b.prototype,"viewModel",
void 0);d.__decorate([v.accessibleHandler()],b.prototype,"_toggleState",null);return b=d.__decorate([t.subclass("esri.widgets.Attribution")],b)});