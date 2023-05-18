// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./loadable ./locale ./t9n ./ExpandToggle ./action ./action-group ./action-menu ./icon ./loader ./popover".split(" "),function(f,b,l,t,g,m,e,h,u,v,w,x,y,z){function n(){"undefined"!==typeof customElements&&"calcite-action-pad calcite-action calcite-action-group calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-pad":customElements.get(a)||customElements.define(a,p);break;case "calcite-action":customElements.get(a)||
u.defineCustomElement();break;case "calcite-action-group":customElements.get(a)||v.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||w.defineCustomElement();break;case "calcite-icon":customElements.get(a)||x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||y.defineCustomElement();break;case "calcite-popover":customElements.get(a)||z.defineCustomElement()}})}const p=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();
this.__attachShadow();this.calciteActionPadToggle=b.createEvent(this,"calciteActionPadToggle",6);this.actionMenuOpenHandler=a=>{if(a.target.menuOpen){const c=a.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(d=>{c.includes(d)||(d.menuOpen=!1)})}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionPadToggle.emit()};this.setExpandToggleRef=a=>{this.expandToggleEl=a};this.expanded=this.expandDisabled=!1;this.layout="vertical";this.messageOverrides=
this.messages=this.scale=this.position=void 0;this.effectiveLocale="";this.defaultMessages=void 0}expandedHandler(a){h.toggleChildActionText({parent:this.el,expanded:a})}onMessagesChange(){}effectiveLocaleChange(){e.updateMessages(this,this.effectiveLocale)}connectedCallback(){l.connectConditionalSlotComponent(this);m.connectLocalized(this);e.connectMessages(this)}disconnectedCallback(){m.disconnectLocalized(this);e.disconnectMessages(this);l.disconnectConditionalSlotComponent(this)}async componentWillLoad(){g.setUpLoadableComponent(this);
const {el:a,expanded:c}=this;h.toggleChildActionText({parent:a,expanded:c});await e.setUpMessages(this)}componentDidLoad(){g.setComponentLoaded(this)}async setFocus(){await g.componentLoaded(this);this.el?.focus()}renderBottomActionGroup(){const {expanded:a,expandDisabled:c,messages:d,el:q,position:A,toggleExpand:B,scale:r,layout:C}=this;var k=t.getSlotted(q,"expand-tooltip");return(k=c?null:b.h(h.ExpandToggle,{el:q,expanded:a,intlCollapse:d.collapse,intlExpand:d.expand,position:A,ref:this.setExpandToggleRef,
scale:r,toggle:B,tooltip:k}))?b.h("calcite-action-group",{class:"action-group--bottom",layout:C,scale:r},b.h("slot",{name:"expand-tooltip"}),k):null}render(){return b.h(b.Host,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},b.h("div",{class:"container"},b.h("slot",null),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],
effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout\x3dvertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout\x3dhorizontal]) .container{flex-direction:row}:host([layout\x3dhorizontal]) .container .action-group--bottom{padding:0px}:host([layout\x3dhorizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}"}},
[17,"calcite-action-pad",{expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);n();f.CalciteActionPad=p;f.defineCustomElement=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});