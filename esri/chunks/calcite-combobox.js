// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./index ./filter2 ./dom ./floating-ui ./form ./interactive ./label2 ./loadable ./locale ./observers ./openCloseComponent ./t9n ./utils2 ./conditionalSlot ./icon ./debounce".split(" "),function(u,d,F,p,l,r,G,v,q,t,w,x,m,k,y,z,A){function B(){"undefined"!==typeof customElements&&["calcite-chip","calcite-icon"].forEach(a=>{switch(a){case "calcite-chip":customElements.get(a)||customElements.define(a,H);break;case "calcite-icon":customElements.get(a)||z.defineCustomElement()}})}function C(){"undefined"!==
typeof customElements&&["calcite-combobox","calcite-chip","calcite-icon"].forEach(a=>{switch(a){case "calcite-combobox":customElements.get(a)||customElements.define(a,D);break;case "calcite-chip":customElements.get(a)||B();break;case "calcite-icon":customElements.get(a)||z.defineCustomElement()}})}const H=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteChipClose=d.createEvent(this,"calciteChipClose",6);this.closeClickHandler=a=>
{a.preventDefault();this.calciteChipClose.emit();this.closed=!0};this.handleSlotImageChange=a=>{this.hasImage=p.slotChangeHasAssignedElement(a)};this.mutationObserver=w.createObserver("mutation",()=>this.updateHasContent());this.guid=p.guid();this.appearance="solid";this.kind="neutral";this.closable=!1;this.icon=void 0;this.iconFlipRtl=!1;this.scale="m";this.value=void 0;this.closed=!1;this.effectiveLocale=this.defaultMessages=this.messages=this.messageOverrides=void 0;this.hasImage=this.hasContent=
!1}onMessagesChange(){}effectiveLocaleChange(){m.updateMessages(this,this.effectiveLocale)}connectedCallback(){y.connectConditionalSlotComponent(this);t.connectLocalized(this);m.connectMessages(this);this.setupTextContentObserver()}componentDidLoad(){q.setComponentLoaded(this)}disconnectedCallback(){y.disconnectConditionalSlotComponent(this);t.disconnectLocalized(this);m.disconnectMessages(this)}async componentWillLoad(){q.setUpLoadableComponent(this);d.Build.isBrowser&&(await m.setUpMessages(this),
this.updateHasContent())}async setFocus(){await q.componentLoaded(this);this.closeButton?.focus()}updateHasContent(){const a=0<this.el.textContent.trim().length||0<this.el.childNodes.length;this.hasContent=0<this.el.childNodes.length&&"#text"===this.el.childNodes[0]?.nodeName?0<this.el.textContent?.trim().length:a}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}renderChipImage(){return d.h("div",{class:"image-container",key:"image"},d.h("slot",{name:"image",
onSlotchange:this.handleSlotImageChange}))}render(){const a=d.h("calcite-icon",{class:"chip-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"===this.scale?"m":"s"}),b=d.h("button",{"aria-describedby":this.guid,"aria-label":this.messages.dismissLabel,class:"close",onClick:this.closeClickHandler,ref:c=>this.closeButton=c},d.h("calcite-icon",{class:"close-icon",icon:"x",scale:"l"===this.scale?"m":"s"}));return d.h("div",{class:{container:!0,["content--slotted"]:this.hasContent,["image--slotted"]:this.hasImage}},
this.renderChipImage(),this.icon?a:null,d.h("span",{class:"title",id:this.guid},d.h("slot",null)),this.closable?b:null)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale\x3ds]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale\x3ds]) .image-container{block-size:1.25rem;inline-size:1.25rem;padding-inline-start:0.125rem}:host([scale\x3dm]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:calc(0.75rem / 2)}:host([scale\x3dm]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale\x3dl]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale\x3dl]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.5rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-block:0}.content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable][icon]) .container:not(.content--slotted) .title{padding-inline:0 var(--calcite-chip-spacing-unit-s)}:host(:not([closable])) .container:not(.content--slotted) .chip-icon{margin-inline:auto}.container:not(.image--slotted) .image-container{display:none}:host([scale\x3ds][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.125rem}:host([scale\x3dm][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.25rem}:host([scale\x3dl][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.5rem}:host([scale\x3ds]:not([closable])) .container:not(.content--slotted){block-size:1.5rem;inline-size:1.5rem}:host([scale\x3ds]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.125rem}:host([scale\x3dm]:not([closable])) .container:not(.content--slotted){block-size:2rem;inline-size:2rem}:host([scale\x3dm]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.25rem}:host([scale\x3dl]:not([closable])) .container:not(.content--slotted){block-size:2.75rem;inline-size:2.75rem}:host([scale\x3dl]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:calc(0.75rem / 2)}:host([closable]) .content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([scale\x3ds]) button{inline-size:1rem;block-size:1rem;margin-inline-end:0.125rem}:host([scale\x3dm]) button{inline-size:1.5rem;block-size:1.5rem;margin-inline-end:0.25rem}:host([scale\x3dl]) button{inline-size:2rem;block-size:2rem;margin-inline-end:0.5rem}button{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}button:hover{background-color:var(--calcite-chip-transparent-hover)}button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden}slot[name\x3dimage]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l)}:host([kind\x3dneutral]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind\x3dneutral]) button,:host([kind\x3dneutral]) .close-icon{color:var(--calcite-ui-text-3)}:host([kind\x3dneutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind\x3dinverse]){border-color:transparent;background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind\x3dinverse]) button,:host([kind\x3dinverse]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind\x3dinverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind\x3dbrand]){border-color:transparent;background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind\x3dbrand]) button,:host([kind\x3dbrand]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind\x3dbrand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance\x3doutline-fill]),:host([appearance\x3doutline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance\x3doutline-fill]) button,:host([appearance\x3doutline-fill]) .close-icon,:host([appearance\x3doutline]) button,:host([appearance\x3doutline]) .close-icon{color:var(--calcite-ui-text-3)}:host([appearance\x3doutline-fill]) .chip-icon,:host([appearance\x3doutline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance\x3doutline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance\x3doutline]){background-color:transparent}:host([kind\x3dneutral][appearance\x3doutline-fill]),:host([kind\x3dneutral][appearance\x3doutline]){border-color:var(--calcite-ui-border-1)}:host([kind\x3dinverse][appearance\x3doutline-fill]),:host([kind\x3dinverse][appearance\x3doutline]){border-color:var(--calcite-ui-border-inverse)}:host([kind\x3dbrand][appearance\x3doutline-fill]),:host([kind\x3dbrand][appearance\x3doutline]){border-color:var(--calcite-ui-brand)}:host([kind\x3dbrand][appearance\x3dsolid]) button,:host([kind\x3dinverse][appearance\x3dsolid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}"}},
[1,"calcite-chip",{appearance:[513],kind:[513],closable:[1540],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],value:[8],closed:[1540],messageOverrides:[1040],messages:[1040],defaultMessages:[32],effectiveLocale:[32],hasContent:[32],hasImage:[32],setFocus:[64]}]);B();const D=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteComboboxChange=d.createEvent(this,"calciteComboboxChange",6);this.calciteComboboxFilterChange=d.createEvent(this,
"calciteComboboxFilterChange",6);this.calciteComboboxChipClose=d.createEvent(this,"calciteComboboxChipClose",6);this.calciteComboboxBeforeClose=d.createEvent(this,"calciteComboboxBeforeClose",6);this.calciteComboboxClose=d.createEvent(this,"calciteComboboxClose",6);this.calciteComboboxBeforeOpen=d.createEvent(this,"calciteComboboxBeforeOpen",6);this.calciteComboboxOpen=d.createEvent(this,"calciteComboboxOpen",6);this.placement=l.defaultMenuPlacement;this.internalValueChangeFlag=!1;this.textInput=
null;this.mutationObserver=w.createObserver("mutation",()=>this.updateItems());this.resizeObserver=w.createObserver("resize",()=>this.setMaxScrollerHeight());this.guid=p.guid();this.inputHeight=0;this.ignoreSelectedEventsFlag=!1;this.openTransitionProp="opacity";this.setFilteredPlacements=()=>{const {el:a,flipPlacements:b}=this;this.filteredFlipPlacements=b?l.filterComputedPlacements(b,a):null};this.getValue=()=>{const a=this.selectedItems.map(b=>b?.value?.toString());return a?.length?1<a.length?
a:a[0]:""};this.onLabelClick=()=>{this.setFocus()};this.keydownHandler=a=>{const {key:b}=a;switch(b){case "Tab":this.activeItemIndex=this.activeChipIndex=-1;this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),a.preventDefault()):this.open&&(this.open=!1,a.preventDefault());break;case "ArrowLeft":this.previousChip();a.preventDefault();break;case "ArrowRight":this.nextChip();a.preventDefault();break;case "ArrowUp":a.preventDefault();this.shiftActiveItemIndex(-1);this.comboboxInViewport()||
this.el.scrollIntoView();break;case "ArrowDown":a.preventDefault();this.open||(this.open=!0);this.shiftActiveItemIndex(1);this.comboboxInViewport()||this.el.scrollIntoView();break;case " ":this.textInput.value||(a.preventDefault(),this.open=!0,this.shiftActiveItemIndex(1));break;case "Home":if(!this.open)break;a.preventDefault();this.updateActiveItemIndex(0);this.scrollToActiveItem();this.comboboxInViewport()||this.el.scrollIntoView();break;case "End":if(!this.open)break;a.preventDefault();this.updateActiveItemIndex(this.filteredItems.length-
1);this.scrollToActiveItem();this.comboboxInViewport()||this.el.scrollIntoView();break;case "Escape":this.open=!1;a.preventDefault();break;case "Enter":-1<this.activeItemIndex?(this.toggleSelection(this.filteredItems[this.activeItemIndex]),a.preventDefault()):-1<this.activeChipIndex?(this.removeActiveChip(),a.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),a.preventDefault()):a.defaultPrevented||r.submitForm(this)&&a.preventDefault();break;case "Delete":case "Backspace":-1<
this.activeChipIndex?(a.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(a.preventDefault(),this.removeLastChip())}};this.toggleCloseEnd=()=>{this.open=!1;this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)};this.toggleOpenEnd=()=>{this.open=!1;this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)};this.setMaxScrollerHeight=async()=>{const {listContainerEl:a,open:b,referenceEl:c}=this;if(a&&b){await this.reposition(!0);var e=this.getMaxScrollerHeight();
a.style.maxHeight=0<e?`${e}px`:"";a.style.minWidth=`${c.clientWidth}px`;await this.reposition(!0)}};this.calciteChipCloseHandler=a=>{this.open=!1;const b=this.items.find(c=>c===a);b&&this.toggleSelection(b,!1);this.calciteComboboxChipClose.emit()};this.clickHandler=a=>{a.composedPath().some(b=>"CALCITE-CHIP"===b.tagName)||(this.open=!this.open,this.updateActiveItemIndex(0),this.setFocus())};this.setInactiveIfNotContained=a=>{a=a.composedPath();!this.open||a.includes(this.el)||a.includes(this.referenceEl)||
(this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),"single"===this.selectionMode&&(this.textInput&&(this.textInput.value=""),this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.open=!1)};this.setFloatingEl=a=>{this.floatingEl=a;l.connectFloatingUI(this,this.referenceEl,this.floatingEl)};this.setContainerEl=a=>{this.resizeObserver.observe(a);this.transitionEl=this.listContainerEl=a;x.connectOpenCloseComponent(this)};this.setReferenceEl=a=>{this.referenceEl=
a;l.connectFloatingUI(this,this.referenceEl,this.floatingEl)};this.inputHandler=a=>{this.text=a=a.target.value;this.filterItems(a);a&&(this.activeChipIndex=-1)};this.filterItems=(()=>{const a=(b,c)=>b&&c.some(({label:e,value:f})=>b.tagName===k.ComboboxItemGroup?f===b.label:f===b.textLabel||f===b.value||e===b.textLabel||e===b.value);return A.debounce(b=>{const c=F.filter(this.data,b);this.getCombinedItems().forEach(e=>{const f=!a(e,c);e.hidden=f;const [g,h]=e.ancestors;if(a(g,c)||a(h,c))e.hidden=!1;
f||e.ancestors.forEach(n=>n.hidden=!1)});this.filteredItems=this.getfilteredItems();this.calciteComboboxFilterChange.emit()},100)})();this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()};this.emitComboboxChange=A.debounce(this.internalComboboxChangeEvent,0);this.updateItems=()=>{this.items=this.getItems();this.groupItems=this.getGroupItems();this.data=this.getData();this.selectedItems=this.getSelectedItems();this.filteredItems=this.getfilteredItems();this.needsIcon=this.getNeedsIcon();
this.allowCustomValues||this.setMaxScrollerHeight()};this.scrollToActiveItem=()=>{const a=this.filteredItems[this.activeItemIndex];if(a){var b=this.calculateSingleItemHeight(a),{offsetHeight:c,scrollTop:e}=this.listContainerEl;c+e<a.offsetTop+b?this.listContainerEl.scrollTop=a.offsetTop-c+b:a.offsetTop<e&&(this.listContainerEl.scrollTop=a.offsetTop)}};this.comboboxFocusHandler=()=>{this.textInput?.focus()};this.comboboxBlurHandler=a=>{this.setInactiveIfNotContained(a)};this.disabled=this.open=!1;
this.placeholderIcon=this.placeholder=this.label=void 0;this.placeholderIconFlipRtl=!1;this.maxItems=0;this.allowCustomValues=this.name=void 0;this.overlayPositioning="absolute";this.required=!1;this.selectionMode="multiple";this.scale="m";this.value=null;this.messageOverrides=this.messages=this.flipPlacements=void 0;this.selectedItems=[];this.filteredItems=[];this.items=[];this.groupItems=[];this.needsIcon=void 0;this.activeChipIndex=this.activeItemIndex=-1;this.text=this.activeDescendant="";this.defaultMessages=
this.effectiveLocale=void 0}openHandler(a){a||l.updateAfterClose(this.floatingEl);this.disabled?this.open=!1:this.setMaxScrollerHeight()}handleDisabledChange(a){a||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}valueHandler(a){if(!this.internalValueChangeFlag){const b=this.getItems();Array.isArray(a)?b.forEach(c=>c.selected=a.includes(c.value)):a?b.forEach(c=>c.selected=a===c.value):b.forEach(c=>c.selected=!1);this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements();
this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0;this.value=this.getValue();this.internalValueChangeFlag=!1}documentClickHandler(a){p.isPrimaryPointerButton(a)&&this.setInactiveIfNotContained(a)}calciteComboboxItemChangeHandler(a){if(!this.ignoreSelectedEventsFlag){a=a.target;var b=this.filteredItems.indexOf(a);this.updateActiveItemIndex(b);this.toggleSelection(a,a.selected)}}async reposition(a=!1){const {floatingEl:b,referenceEl:c,placement:e,overlayPositioning:f,filteredFlipPlacements:g}=
this;return l.reposition(this,{floatingEl:b,referenceEl:c,overlayPositioning:f,placement:e,flipPlacements:g,type:"menu"},a)}async setFocus(){await q.componentLoaded(this);this.textInput?.focus();this.activeItemIndex=this.activeChipIndex=-1}connectedCallback(){t.connectLocalized(this);m.connectMessages(this);this.internalValueChangeFlag=!0;this.value=this.getValue();this.internalValueChangeFlag=!1;this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0});v.connectLabel(this);r.connectForm(this);
x.connectOpenCloseComponent(this);this.setFilteredPlacements();this.reposition(!0);this.open&&this.openHandler(this.open)}async componentWillLoad(){q.setUpLoadableComponent(this);this.updateItems();await m.setUpMessages(this)}componentDidLoad(){r.afterConnectDefaultValueSet(this,this.getValue());this.reposition(!0);q.setComponentLoaded(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight);G.updateHostInteraction(this)}disconnectedCallback(){this.mutationObserver?.disconnect();
this.resizeObserver?.disconnect();v.disconnectLabel(this);r.disconnectForm(this);l.disconnectFloatingUI(this,this.referenceEl,this.floatingEl);x.disconnectOpenCloseComponent(this);t.disconnectLocalized(this);m.disconnectMessages(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){m.updateMessages(this,this.effectiveLocale)}comboboxInViewport(){const a=this.el.getBoundingClientRect();return 0<=a.top&&0<=a.left&&a.right<=(window.innerWidth||document.documentElement.clientWidth)&&
a.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}getMaxScrollerHeight(){const a=this.getCombinedItems().filter(f=>!f.hidden),{maxItems:b}=this;let c=0,e=0;a.length>b&&a.forEach(f=>{c<b&&0<b&&(f=this.calculateSingleItemHeight(f),0<f&&(e+=f,c++))});return e}calculateSingleItemHeight(a){if(a){var b=
a.offsetHeight;Array.from(a.querySelectorAll(k.ComboboxChildSelector)).map(c=>c?.offsetHeight).forEach(c=>{b-=c});return b}}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(a,b=!a.selected){a&&(this.isMulti()?(a.selected=b,this.updateAncestors(a),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange()):(this.ignoreSelectedEventsFlag=!0,this.items.forEach(c=>c.selected=c===a?b:!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),
this.textInput&&(this.textInput.value=a.textLabel),this.open=!1,this.updateActiveItemIndex(-1)),this.resetText(),this.filterItems(""))}updateAncestors(a){if("ancestors"===this.selectionMode){var b=k.getItemAncestors(a),c=k.getItemChildren(a);a.selected?b.forEach(e=>{e.selected=!0}):(c.forEach(e=>e.selected=!1),[...b].forEach(e=>{k.hasActiveChildren(e)||(e.selected=!1)}))}}getfilteredItems(){return this.items.filter(a=>!a.hidden)}getSelectedItems(){if(!this.isMulti()){const a=this.items.find(({selected:b})=>
b);return a?[a]:[]}return this.items.filter(a=>a.selected&&("ancestors"!==this.selectionMode||!k.hasActiveChildren(a))).sort((a,b)=>{a=this.selectedItems.indexOf(a);b=this.selectedItems.indexOf(b);return-1<a&&-1<b?a-b:b-a})}getData(){return this.items.map(a=>({filterDisabled:a.filterDisabled,value:a.value,label:a.textLabel}))}getNeedsIcon(){return"single"===this.selectionMode&&this.items.some(a=>a.icon)}resetText(){this.textInput&&(this.textInput.value="");this.text=""}getItems(){return Array.from(this.el.querySelectorAll(k.ComboboxItem)).filter(a=>
!a.disabled)}getGroupItems(){return Array.from(this.el.querySelectorAll(k.ComboboxItemGroup))}addCustomChip(a,b){var c=this.items.find(e=>e.textLabel===a);c?this.toggleSelection(c,!0):(this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),c=document.createElement(k.ComboboxItem),c.value=a,c.textLabel=a,c.selected=!0,this.el.appendChild(c),this.resetText(),b&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitComboboxChange())}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],
!1);this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);this.setFocus()}previousChip(){if(!this.text){var a=this.selectedItems.length-1,b=this.activeChipIndex;this.activeChipIndex=-1===b?a:Math.max(b-1,0);this.updateActiveItemIndex(-1);this.focusChip()}}nextChip(){if(!this.text&&-1!==this.activeChipIndex){var a=this.activeChipIndex+1;a>this.selectedItems.length-1?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=a,this.focusChip());
this.updateActiveItemIndex(-1)}}focusChip(){const a=this.selectedItems[this.activeChipIndex]?.guid;(a?this.referenceEl.querySelector(`#${"combobox-chip-"}${a}`):null)?.setFocus()}shiftActiveItemIndex(a){const {length:b}=this.filteredItems;this.updateActiveItemIndex((this.activeItemIndex+b+a)%b);this.scrollToActiveItem()}updateActiveItemIndex(a){this.activeItemIndex=a;let b=null;this.filteredItems.forEach((c,e)=>{e===a?(c.active=!0,b=`${"combobox-item-"}${c.guid}`):c.active=!1});this.activeDescendant=
b;-1<this.activeItemIndex&&(this.activeChipIndex=-1)}isMulti(){return"single"!==this.selectionMode}renderChips(){const {activeChipIndex:a,scale:b,selectionMode:c,messages:e}=this;return this.selectedItems.map((f,g)=>{g={chip:!0,"chip--active":a===g};var h=[...[...k.getItemAncestors(f)].reverse(),f].map(n=>n.textLabel);h="ancestors"!==c?f.textLabel:h.join(" / ");return d.h("calcite-chip",{class:g,closable:!0,icon:f.icon,iconFlipRtl:f.iconFlipRtl,id:f.guid?`${"combobox-chip-"}${f.guid}`:null,key:f.textLabel,
messageOverrides:{dismissLabel:e.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(f),scale:b,title:h,value:f.value},h)})}renderInput(){const {guid:a,disabled:b,placeholder:c,selectionMode:e,selectedItems:f,open:g}=this,h="single"===e,n=f[0],E=!g&&h&&!!n;return d.h("span",{class:{"input-wrap":!0,"input-wrap--single":h}},E&&d.h("span",{class:{label:!0,"label--icon":!!n?.icon},key:"label"},n.textLabel),d.h("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list",
"aria-controls":`${"combobox-listbox-"}${a}`,"aria-label":v.getLabelText(this),class:{input:!0,"input--single":!0,"input--transparent":-1<this.activeChipIndex,"input--hidden":E,"input--icon":!!this.placeholderIcon},disabled:b,id:`${"combobox-input-"}${a}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:c,ref:I=>this.textInput=I,type:"text"}))}renderListBoxOptions(){return this.filteredItems.map(a=>d.h("li",{"aria-selected":p.toAriaBoolean(a.selected),
id:a.guid?`${"combobox-item-"}${a.guid}`:null,role:"option",tabindex:"-1"},a.textLabel))}renderFloatingUIContainer(){const {setFloatingEl:a,setContainerEl:b,open:c}=this;return d.h("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":c},ref:a},d.h("div",{class:{"list-container":!0,[l.FloatingCSS.animation]:!0,[l.FloatingCSS.animationActive]:c},ref:b},d.h("ul",{class:{list:!0,"list--hide":!c}},d.h("slot",null))))}renderIconStart(){const {selectedItems:a,placeholderIcon:b,
selectionMode:c,placeholderIconFlipRtl:e}=this,f=a[0],g=f?.icon,h="single"===c;return(!this.open&&f?!!g&&h:!!this.placeholderIcon&&(!f||h))&&d.h("span",{class:"icon-start"},d.h("calcite-icon",{class:"selected-icon",flipRtl:this.open&&f?f.iconFlipRtl:e,icon:!this.open&&f?g:b,scale:"s"}))}renderIconEnd(){const {open:a}=this;return d.h("span",{class:"icon-end"},d.h("calcite-icon",{icon:a?"chevron-up":"chevron-down",scale:"s"}))}render(){const {guid:a,label:b,open:c}=this,e="single"===this.selectionMode;
return d.h(d.Host,{onClick:this.comboboxFocusHandler},d.h("div",{"aria-autocomplete":"list","aria-controls":`${"combobox-listbox-"}${a}`,"aria-expanded":p.toAriaBoolean(c),"aria-haspopup":"listbox","aria-labelledby":`${"combobox-label-"}${a}`,"aria-live":"polite","aria-owns":`${"combobox-listbox-"}${a}`,class:{wrapper:!0,"wrapper--single":e||!this.selectedItems.length,"wrapper--active":c},onClick:this.clickHandler,onKeyDown:this.keydownHandler,ref:this.setReferenceEl,role:"combobox"},d.h("div",{class:"grid-input"},
this.renderIconStart(),!e&&this.renderChips(),d.h("label",{class:"screen-readers-only",htmlFor:`${"combobox-input-"}${a}`,id:`${"combobox-label-"}${a}`},b),this.renderInput()),this.renderIconEnd()),d.h("ul",{"aria-labelledby":`${"combobox-label-"}${a}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${"combobox-listbox-"}${a}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),d.h(r.HiddenFormInputSlot,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],
disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale\x3ds]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale\x3dm]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale\x3dl]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^\x3dbottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^\x3dtop] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^\x3dleft] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^\x3dright] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},
[1,"calcite-combobox",{open:[1540],disabled:[516],label:[1],placeholder:[1],placeholderIcon:[513,"placeholder-icon"],placeholderIconFlipRtl:[516,"placeholder-icon-flip-rtl"],maxItems:[514,"max-items"],name:[513],allowCustomValues:[516,"allow-custom-values"],overlayPositioning:[513,"overlay-positioning"],required:[516],selectionMode:[513,"selection-mode"],scale:[513],value:[1025],flipPlacements:[16],messages:[1040],messageOverrides:[1040],selectedItems:[1040],filteredItems:[1040],items:[32],groupItems:[32],
needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],text:[32],effectiveLocale:[32],defaultMessages:[32],reposition:[64],setFocus:[64]},[[5,"pointerdown","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"]]]);C();u.CalciteCombobox=D;u.defineCustomElement=C;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});