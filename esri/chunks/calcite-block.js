// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./interactive ./locale ./t9n ./Heading ./action ./action-menu ./loadable ./icon ./loader ./popover ./scrim".split(" "),function(n,b,q,f,B,r,k,C,D,E,p,t,F,G,H){function u(){"undefined"!==typeof customElements&&["calcite-handle","calcite-icon"].forEach(a=>{switch(a){case "calcite-handle":customElements.get(a)||customElements.define(a,I);break;case "calcite-icon":customElements.get(a)||t.defineCustomElement()}})}function v(){"undefined"!==typeof customElements&&
"calcite-block calcite-action calcite-action-menu calcite-handle calcite-icon calcite-loader calcite-popover calcite-scrim".split(" ").forEach(a=>{switch(a){case "calcite-block":customElements.get(a)||customElements.define(a,w);break;case "calcite-action":customElements.get(a)||D.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||E.defineCustomElement();break;case "calcite-handle":customElements.get(a)||u();break;case "calcite-icon":customElements.get(a)||t.defineCustomElement();
break;case "calcite-loader":customElements.get(a)||F.defineCustomElement();break;case "calcite-popover":customElements.get(a)||G.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||H.defineCustomElement()}})}const I=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteHandleNudge=b.createEvent(this,"calciteHandleNudge",6);this.handleKeyDown=a=>{switch(a.key){case " ":this.activated=!this.activated;a.preventDefault();
break;case "ArrowUp":if(!this.activated)break;a.preventDefault();this.calciteHandleNudge.emit({direction:"up"});break;case "ArrowDown":this.activated&&(a.preventDefault(),this.calciteHandleNudge.emit({direction:"down"}))}};this.handleBlur=()=>{this.activated=!1};this.activated=!1;this.textTitle="handle"}componentWillLoad(){p.setUpLoadableComponent(this)}componentDidLoad(){p.setComponentLoaded(this)}async setFocus(){await p.componentLoaded(this);this.handleButton?.focus()}render(){return b.h("span",
{"aria-pressed":f.toAriaBoolean(this.activated),class:{handle:!0,["handle--activated"]:this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:a=>{this.handleButton=a},role:"button",tabindex:"0",title:this.textTitle},b.h("calcite-icon",{icon:"drag",scale:"s"}))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}"}},
[1,"calcite-handle",{activated:[1540],textTitle:[513,"text-title"],setFocus:[64]}]);u();const l={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"},w=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteBlockToggle=b.createEvent(this,"calciteBlockToggle",6);this.guid=f.guid();this.onHeaderClick=()=>{this.open=!this.open;this.calciteBlockToggle.emit()};this.dragHandle=
this.disabled=this.collapsible=!1;this.headingLevel=this.heading=void 0;this.open=this.loading=!1;this.defaultMessages=this.effectiveLocale=this.messageOverrides=this.messages=this.description=this.status=void 0}onMessagesChange(){}effectiveLocaleChange(){k.updateMessages(this,this.effectiveLocale)}connectedCallback(){q.connectConditionalSlotComponent(this);r.connectLocalized(this);k.connectMessages(this)}disconnectedCallback(){r.disconnectLocalized(this);k.disconnectMessages(this);q.disconnectConditionalSlotComponent(this)}componentDidRender(){B.updateHostInteraction(this)}async componentWillLoad(){await k.setUpMessages(this)}renderScrim(){const {loading:a}=
this,d=b.h("slot",null);return[a?b.h("calcite-scrim",{loading:a}):null,d]}renderIcon(){const {el:a,status:d}=this;var c=this.loading&&!this.open;const e=c?l.refresh:l[d],g=f.getSlotted(a,"icon")||e;c=e?b.h("calcite-icon",{class:{["status-icon"]:!0,valid:"valid"==d,invalid:"invalid"==d,loading:c},icon:e,scale:"m"}):b.h("slot",{key:"icon-slot",name:"icon"});return g?b.h("div",{class:"icon"},c):null}renderTitle(){const {heading:a,headingLevel:d,description:c}=this;return a||c?b.h("div",{class:"title"},
b.h(C.Heading,{class:"heading",level:d},a),c?b.h("div",{class:"description"},c):null):null}render(){const {collapsible:a,el:d,loading:c,open:e,messages:g}=this;var m=e?g.collapse:g.expand;const x=b.h("header",{class:"header"},this.renderIcon(),this.renderTitle()),y=!!f.getSlotted(d,"control"),z=!!f.getSlotted(d,"header-menu-actions"),J=e?l.opened:l.closed;var {guid:h}=this;const A=`${h}-region`;h=`${h}-button`;m=b.h("div",{class:"header-container"},this.dragHandle?b.h("calcite-handle",null):null,
a?b.h("button",{"aria-controls":A,"aria-expanded":a?f.toAriaBoolean(e):null,"aria-label":m,class:"toggle",id:h,onClick:this.onHeaderClick,title:m},x,y||z?null:b.h("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:J,scale:"s"})):x,c?b.h("calcite-loader",{inline:!0,label:g.loading}):y?b.h("div",{class:"control-container"},b.h("slot",{name:"control"})):null,z?b.h("calcite-action-menu",{label:g.options},b.h("slot",{name:"header-menu-actions"})):null);return b.h(b.Host,null,b.h("article",{"aria-busy":f.toAriaBoolean(c),
class:{container:!0}},m,b.h("section",{"aria-expanded":f.toAriaBoolean(e),"aria-labelledby":h,class:"content",hidden:!e,id:A},this.renderScrim())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-inline-start:0.75rem;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{animation:spin calc(var(--calcite-internal-animation-timing-slow) * 2) linear infinite}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:1rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}'}},
[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32]}]);v();n.CalciteBlock=w;n.defineCustomElement=v;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});