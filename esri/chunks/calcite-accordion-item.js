// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./index","./conditionalSlot","./dom","./icon"],function(d,a,e,c,k){function f(){"undefined"!==typeof customElements&&["calcite-accordion-item","calcite-icon"].forEach(b=>{switch(b){case "calcite-accordion-item":customElements.get(b)||customElements.define(b,g);break;case "calcite-icon":customElements.get(b)||k.defineCustomElement()}})}const g=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalAccordionItemSelect=
a.createEvent(this,"calciteInternalAccordionItemSelect",6);this.calciteInternalAccordionItemClose=a.createEvent(this,"calciteInternalAccordionItemClose",6);this.calciteInternalAccordionItemRegister=a.createEvent(this,"calciteInternalAccordionItemRegister",6);this.iconPosition="end";this.itemHeaderClickHandler=()=>this.emitRequestedItem();this.scale="m";this.expanded=!1;this.iconFlipRtl=this.iconEnd=this.iconStart=this.description=this.heading=void 0}connectedCallback(){this.parent=this.el.parentElement;
this.iconType=c.getElementProp(this.el,"icon-type","chevron");this.iconPosition=c.getElementProp(this.el,"icon-position",this.iconPosition);this.scale=c.getElementProp(this.el,"scale",this.scale);e.connectConditionalSlotComponent(this)}componentDidLoad(){this.itemPosition=this.getItemPosition();this.calciteInternalAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}disconnectedCallback(){e.disconnectConditionalSlotComponent(this)}renderActionsStart(){const {el:b}=this;return c.getSlotted(b,
"actions-start")?a.h("div",{class:"actions-start"},a.h("slot",{name:"actions-start"})):null}renderActionsEnd(){const {el:b}=this;return c.getSlotted(b,"actions-end")?a.h("div",{class:"actions-end"},a.h("slot",{name:"actions-end"})):null}render(){var {iconFlipRtl:b}=this;const l=c.getElementDir(this.el),m=this.iconStart?a.h("calcite-icon",{class:"icon--start",flipRtl:"both"===b||"start"===b,icon:this.iconStart,key:"icon-start",scale:"l"===this.scale?"m":"s"}):null;b=this.iconEnd?a.h("calcite-icon",
{class:"icon--end",flipRtl:"both"===b||"end"===b,icon:this.iconEnd,key:"icon-end",scale:"l"===this.scale?"m":"s"}):null;const {description:h}=this;return a.h(a.Host,null,a.h("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},a.h("div",{class:{header:!0,[c.CSS_UTILITY.rtl]:"rtl"===l}},this.renderActionsStart(),a.h("div",{"aria-expanded":c.toAriaBoolean(this.expanded),class:"header-content",onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},a.h("div",
{class:"header-container"},m,a.h("div",{class:"header-text"},a.h("span",{class:"heading"},this.heading),h?a.h("span",{class:"description"},h):null),b),a.h("calcite-icon",{class:"expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:"l"===this.scale?"m":"s"})),this.renderActionsEnd()),a.h("div",{class:"content"},a.h("slot",null))))}keyDownHandler(b){if(b.target===this.el)switch(b.key){case " ":case "Enter":this.emitRequestedItem(),
b.preventDefault()}}updateActiveItemOnChange(b){this.requestedAccordionItem=b.detail.requestedAccordionItem;this.el.parentNode===this.requestedAccordionItem.parentNode&&(this.determineActiveItem(),b.stopPropagation())}determineActiveItem(){this.selectionMode=c.getElementProp(this.el,"selection-mode","multiple");switch(this.selectionMode){case "multiple":this.el===this.requestedAccordionItem&&(this.expanded=!this.expanded);break;case "single":this.expanded=this.el===this.requestedAccordionItem?!this.expanded:
!1;break;case "single-persist":this.expanded=this.el===this.requestedAccordionItem}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}getItemPosition(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}"}},
[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"]]]);f();d.CalciteAccordionItem=g;d.defineCustomElement=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});