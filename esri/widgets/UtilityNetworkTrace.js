// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/HandleOwner ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ./Widget ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./UtilityNetworkTrace/UtilityNetworkTraceViewModel ./UtilityNetworkTrace/support/GraphicHandler".split(" "),function(m,t,k,h,r,l,
G,H,B,C,D,E,F,d,v,w){function x(){return{textAlign:"center",padding:"1rem"}}h=function(y){function u(a,b){a=y.call(this,a,b)||this;a._tracesExists=!0;a._graphicHandler=null;a._selectToolActive=!1;a._activeTrace=null;a._activeSwatch="";a._traceHeaderForFlow="";a._assetGroupHeader="";a._assetTypeHeader="";a._traceResultsFunctions=[];a._traceResultsAssetGroup=[];a._traceResultsAssetType=[];a._traceResultsIndividual=[];a._showTraceResultFunctions=!1;a._showTraceResultAssetGroup=!1;a._showTraceResultAssetType=
!1;a._showIndividualRecords=!1;a._activeTab="input";a._flagViewType="starting-point";a._alertRemoveModal=!1;a._warningNoFlag=!1;a._warningNoTraceSelected=!1;a._warningNoStartAssetFound=!1;a._warningNoBarrierAssetFound=!1;a._warningNoTerminal=!1;a._confirmReset=!1;a._showResultOptions=!1;a._resultObjectIdField="objectid";a._resultDisplayField="objectid";a._resultSortField="objectid";a._resultSortOrder="desc";a._swatchNode=null;a._individualResultNode=null;a._symbolStartFlag=null;a._symbolBarrier=null;
a._watchHandler=null;a._loadUNError=!0;a._errorMessage="";a.disabled=!0;a.iconClass="esri-icon-UtilityNetworkTrace";a.inputSettings=[];a.messages=null;a.viewModel=new v;return a}t._inheritsLoose(u,y);var g=u.prototype;g.initialize=function(){this._utilityNetworkTraceInitialized();this._graphicHandler=new w.GraphicHandler};g.checkCanTrace=function(){var a=t._asyncToGenerator(function*(){this._confirmReset=!1;const b=this.viewModel.checkCanTrace();b.status?(this._showIndividualRecords=this._showTraceResultAssetType=
this._showTraceResultAssetGroup=this._showTraceResultFunctions=this._warningNoTerminal=this._warningNoTraceSelected=this._warningNoTraceSelected=this._warningNoFlag=!1,this.switchTab("result"),this.viewModel._activeProgress=!0,yield this.viewModel.callTrace(),this.viewModel._activeProgress=!1):b.issues.forEach(c=>{switch(c){case "noStart":this._warningNoFlag=!0;break;case "noTerminalSelected":this._warningNoTerminal=!0;break;default:this._warningNoTraceSelected=!0}})});return function(){return a.apply(this,
arguments)}}();g.confirmReset=function(){this._confirmReset=!0};g.render=function(){var {state:a}=this.viewModel;this._mixCustomStrings();this._overrideFlagSymbol();a="loading"===a?this.renderLoading():this.renderUtilityNetworkTrace();return d.tsx("div",{class:this.classes("esri-utility-trace-network","esri-widget","esri-widget--panel",{["esri-widget--disabled"]:this.disabled}),styles:{height:"100%"}},a)};g.loadDependencies=function(){return Promise.all([new Promise((a,b)=>m(["../chunks/calcite-action"],
a,b)),new Promise((a,b)=>m(["../chunks/calcite-action-group"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-action-pad"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-block"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-block-section"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-button"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-checkbox"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-color-picker-swatch"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-combobox"],a,b)),new Promise((a,
b)=>m(["../chunks/calcite-combobox-item"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-flow"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-flow-item"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-icon"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-label"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-list"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-list-item"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-loader"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-modal"],a,b)),new Promise((a,
b)=>m(["../chunks/calcite-notice"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-option"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-panel"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-popover"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-select"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-tab"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-tab-nav"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-tab-title"],a,b)),new Promise((a,b)=>m(["../chunks/calcite-tabs"],a,b))])};g.switchTab=
function(a){this._activeTab=a};g.switchToFunctions=function(a,b){this._traceResultsFunctions=a;this._showTraceResultFunctions=b};g.switchToAssetGroup=function(a,b,c){this._traceHeaderForFlow=b;this._traceResultsAssetGroup=a;this._showTraceResultAssetGroup=c};g.switchToAssetType=function(a,b,c){this._assetGroupHeader=b;this._traceResultsAssetType=a;this._showTraceResultAssetType=c};g.switchToIndividualRecords=function(a,b,c){this._assetTypeHeader=b;this._traceResultsIndividual=a;this._showIndividualRecords=
c};g.renderLoading=function(){return d.tsx("div",{class:"esri-utility-trace-network__loader-container",key:"loader"},d.tsx("div",{class:"esri-utility-trace-network__loader"}))};g.renderUtilityNetworkTrace=function(){var {messages:a}=this;a=d.tsx("calcite-tabs",{position:"top",layout:"center",styles:{width:"100%"}},d.tsx("calcite-tab-nav",{slot:"title-group"},d.tsx("calcite-tab-title",{selected:"input"===this._activeTab?!0:!1,onclick:()=>{this.switchTab("input")}},a.inputsStrings.headerTabInputs),
d.tsx("calcite-tab-title",{selected:"result"===this._activeTab?!0:!1,onclick:()=>{this.switchTab("result")}},a.resultsStrings.headerTabResults)),d.tsx("calcite-tab",{selected:"input"===this._activeTab?!0:!1},this.renderInputPanel()),d.tsx("calcite-tab",{selected:"result"===this._activeTab?!0:!1},this.viewModel._activeProgress?d.tsx("calcite-loader",{label:a.alertsStrings.traceExecuting,text:a.alertsStrings.traceExecuting,type:"indeterminate"}):0<this.viewModel._traceResults.length?this.renderResultPanel():
this.renderWarningMessage("noTraceExecuted",!1),d.tsx("calcite-modal",{open:this._confirmReset,kind:"brand",scale:"m",width:"s",onCalciteModalClose:()=>{this._confirmReset=!1}},d.tsx("h3",{slot:"header"},a.resultsStrings.startOverButton),d.tsx("div",{slot:"content"},a.resultsStrings.startOverValidation),d.tsx("calcite-button",{slot:"secondary",width:"full",appearance:"outline",onclick:()=>{this._confirmReset=!1}},a.globalStrings.cancel),d.tsx("calcite-button",{slot:"primary",width:"full",onclick:()=>
{this._confirmReset=!1;this.viewModel.reset();this.switchTab("input")}},a.globalStrings.ok))));this._tracesExists||(a=d.tsx("calcite-panel",null,this.renderWarningMessage("noTraceConfig",!1)));this._loadUNError||(a=d.tsx("calcite-panel",null,this.renderWarningMessage("loadUNError",!1,this._errorMessage)));return a};g.renderInputPanel=function(){const {messages:a}=this;return d.tsx("calcite-flow",{class:"esri-utility-trace-network__flow"},d.tsx("calcite-flow-item",null,this._warningNoFlag?this.renderWarningMessage("flag",
!0):null,this._warningNoTerminal?this.renderWarningMessage("noTerminal",!0):null,this._warningNoTraceSelected?this.renderWarningMessage("trace",!0):null,this.renderTraceSelectorContainer(),this.renderStartFlagsContainer(),this.renderBarriersFlagsContainer(),this._warningNoFlag&&this._warningNoTraceSelected?d.tsx("div",{styles:{height:"10px"}}):null,d.tsx("calcite-button",{slot:"footer",scale:"m",kind:"brand",width:"full",onclick:()=>{this.checkCanTrace()}},a.tracingStrings.runTrace)),this._selectToolActive?
this.renderActiveTool():null)};g.renderResultPanel=function(){return d.tsx("calcite-flow",{styles:{height:"100%"}},this.renderTraceResults(),this._showTraceResultFunctions?this.renderTraceResultFunctions():null,this._showTraceResultAssetGroup?this.renderTraceResultByAssetGroup():null,this._showTraceResultAssetType?this.renderTraceResultByAssetType():null,this._showIndividualRecords?this.renderTraceResultIndividual():null,this._showIndividualRecords?this.renderTraceResultIndividualPopover():null)};
g.renderStartFlagsContainer=function(){const {messages:a}=this,b=[];let c=[];c=this.viewModel._flags.filter(f=>"starting-point"===f.type);c.forEach(f=>{f.displayValue&&b.push(this.renderFlagRow(f,"start"))});let e=null;this._symbolStartFlag&&(e=this._getSymbolIcon(this._symbolStartFlag));return d.tsx("calcite-block",{heading:a.inputsStrings.headerStartingPoint+" ("+c.length+")",open:!0,collapsible:!0},d.tsx("div",{slot:"icon"},e?e:d.tsx("calcite-icon",{icon:"pin",scale:"s"})),d.tsx("div",null,a.inputsStrings.startingPointHint),
d.tsx("div",{class:"esri-utility-trace-network__list-container"},b),this._warningNoStartAssetFound?this.renderWarningMessage("noStartAsset",!0):null,d.tsx("div",{class:"esri-utility-trace-network__add-button-container"},d.tsx("calcite-button",{alignment:"center",appearance:"outline",iconStart:"plus",scale:"m",href:"",label:a.inputsStrings.addPointOption,onclick:()=>{this._flagViewType="starting-point";this._selectToolActive=!0;this._warningNoStartAssetFound=!1;this.viewModel.addFlagByHit("starting-point",
this._symbolStartFlag).then(f=>{f?this._warningNoFlag=!1:this._warningNoStartAssetFound=!0;this._selectToolActive=!1})},round:!0})))};g.renderBarriersFlagsContainer=function(){const {messages:a}=this,b=[];let c=[];c=this.viewModel._flags.filter(f=>"barrier"===f.type);c.forEach(f=>{f.displayValue&&b.push(this.renderFlagRow(f,"barrier"))});let e=null;this._symbolBarrier&&(e=this._getSymbolIcon(this._symbolBarrier));return d.tsx("calcite-block",{heading:a.inputsStrings.headerBarrier+" ("+c.length+")",
open:!1,collapsible:!0},d.tsx("div",{slot:"icon"},e?e:d.tsx("calcite-icon",{icon:"x-circle-f",scale:"s"})),d.tsx("div",null,a.inputsStrings.barrierPointHint),d.tsx("div",{class:"esri-utility-trace-network__list-container"},b),this._warningNoBarrierAssetFound?this.renderWarningMessage("noBarrierAsset",!0):null,d.tsx("div",{class:"esri-utility-trace-network__add-button-container"},d.tsx("calcite-button",{alignment:"center",appearance:"outline",kind:"brand",iconStart:"plus",scale:"m",href:"",round:!0,
label:a.inputsStrings.addPointOption,onclick:()=>{this._flagViewType="barrier";this._selectToolActive=!0;this._warningNoBarrierAssetFound=!1;this.viewModel.addFlagByHit("barrier",this._symbolBarrier).then(f=>{f||(this._warningNoBarrierAssetFound=!0);this._selectToolActive=!1})}})))};g.renderFlagRow=function(a,b){const {messages:c}=this,e=[];let f=!1;null!==a.allTerminals&&"undefined"!==typeof a.allTerminals&&0<a.allTerminals.terminals.length&&(f=!0,a.allTerminals.terminals.forEach(n=>{let p=!1;a?.selectedTerminals?.includes(n.id)&&
(p=!0);e.push(d.tsx("calcite-combobox-item",{key:n.name,selected:p,value:n.id,textLabel:n.name}))}));return d.tsx("calcite-block",{key:"pop"+a.globalId+a.type+a.id+b,heading:a.displayValue.value,collapsible:null!==a.allTerminals?!0:"barrier"===a.type?!0:!1},d.tsx("calcite-action",{textEnabled:!0,slot:"header-menu-actions",text:c.globalStrings.remove,label:c.globalStrings.remove,onclick:()=>{this.viewModel.removeFlag(a)},scale:"s",icon:"trash"}),d.tsx("calcite-action",{textEnabled:!0,slot:"header-menu-actions",
text:c.globalStrings.zoomToFeature,label:c.globalStrings.zoomToFeature,onclick:()=>{this.viewModel.zoomToAsset(a.details.geometry)},scale:"s",icon:"zoom-to-object"}),"barrier"===a.type?d.tsx("calcite-label",{scale:"s",layout:"inline"},d.tsx("calcite-checkbox",{checked:a.isFilterBarrier,scale:"s",onclick:()=>{this.viewModel.manageFilterBarrier(!a.isFilterBarrier,a)}}),c.inputsStrings.barrierFilter):null,f?d.tsx("calcite-combobox",{label:c.globalStrings.selectTerminalPlaceholder,placeholder:c.globalStrings.selectTerminalPlaceholder,
selectionMode:"multiple",scale:"s",maxItems:0,onCalciteComboboxChange:n=>{0<n.target.selectedItems.length?(a.selectedTerminals=[],n.target.selectedItems.forEach(p=>{this.viewModel.addTerminal(p.value,a)})):a.selectedTerminals=[]},onCalciteComboboxChipClose:n=>{n.preventDefault();this.viewModel.removeTerminal(n.target.value,a)}},e):null)};g.renderActiveTool=function(){const {messages:a}=this;let b=null;"starting-point"===this._flagViewType?this._symbolStartFlag&&(b=this._getSymbolIcon(this._symbolStartFlag)):
this._symbolBarrier&&(b=this._getSymbolIcon(this._symbolBarrier));return d.tsx("calcite-flow-item",{onCalciteFlowItemBack:()=>{this.viewModel._clickHandler&&(this.viewModel._clickHandler.remove(),this.view.popup.autoOpenEnabled=!0);this._selectToolActive=!1},heading:a.inputsStrings.addPointOption},d.tsx("calcite-block",{open:!0,collapsible:!1,heading:""},d.tsx("div",{styles:x()},b?b:d.tsx("calcite-icon",{icon:"starting-point"===this._flagViewType?"pin-plus":"x-circle-f",scale:"m"})),d.tsx("div",{styles:x()},
a.inputsStrings.addPointHint)))};g.renderTraceSelectorContainer=function(){const {messages:a}=this,b=[];0<this.viewModel._traces.length&&this.viewModel._traces.forEach(c=>{b.push(d.tsx("calcite-combobox-item",{key:c.globalId,selected:c.selected,value:c.globalId,textLabel:c.title,onCalciteComboboxItemChange:e=>{this.viewModel.selectTraces(e.target.selected,c.globalId);0<this.viewModel._traces.length&&(this._warningNoTraceSelected=!1)}}))});return d.tsx("calcite-block",{heading:a.tracingStrings.traceOperation,
open:!0,collapsible:!0},d.tsx("calcite-combobox",{label:a.inputsStrings.selectTraces,placeholder:a.inputsStrings.selectTraces,selectionMode:"multiple",overlayPositioning:"fixed",scale:"s",maxItems:0,onCalciteComboboxChipClose:c=>{this.viewModel.selectTraces(!1,c.target.value);0<this.viewModel._traces.length&&(this._warningNoTraceSelected=!1)}},b))};g.renderStartOverContainer=function(){const {messages:a}=this;return d.tsx("calcite-button",{slot:"footer",scale:"m",kind:"brand",width:"full",onclick:()=>
{this.confirmReset()}},a.resultsStrings.startOverButton)};g.renderWarningMessage=function(a,b,c){const {messages:e}=this;let f=e.alertsStrings.NoRunAlertHeader,n=e.alertsStrings.noResultsInfo;switch(a){case "flag":f=e.alertsStrings.startingPointAlertHeader;n=e.alertsStrings.startingPointAlert;break;case "noTerminal":f=e.alertsStrings.noTerminalDefinedHeader;n=e.alertsStrings.noTerminalDefined;break;case "trace":f=e.alertsStrings.selectTraceAlertHeader;n=e.alertsStrings.selectTraceAlert;break;case "noTraceExecuted":f=
e.alertsStrings.NoRunAlertHeader;n=e.alertsStrings.noResultsInfo;break;case "noBarrierAsset":case "noStartAsset":f=e.alertsStrings.noAssetsFoundHeader;n=e.alertsStrings.noAssetFound;break;case "noTraceConfig":f="";n=e.alertsStrings.noTraceSupported;break;default:f=e.alertsStrings.genericErrorHeader,n=c?c:""}return d.tsx("div",{class:"esri-utility-trace-network__notice-container",key:a},d.tsx("calcite-notice",{key:a,open:!0,closable:b,icon:!0,scale:"s",width:"auto",kind:"danger",onCalciteNoticeClose:()=>
{switch(a){case "flag":this._warningNoFlag=!1;break;case "noTerminal":this._warningNoTerminal=!1;break;case "trace":this._warningNoTraceSelected=!1;break;case "noStartAsset":this._warningNoStartAssetFound=!1;break;case "noBarrierAsset":this._warningNoBarrierAssetFound=!1}}},d.tsx("div",{slot:"title"},f),d.tsx("div",{slot:"message"},n)))};g.renderRemoveTraceContainer=function(a){const {messages:b}=this;return d.tsx("calcite-action",{textEnabled:!0,slot:"header-menu-actions",text:b.globalStrings.clearResults,
label:b.globalStrings.clearResults,onclick:()=>{this._alertRemoveModal=!0;this._activeTrace=a.trace},scale:"s",icon:"trash"})};g.renderHighlightColorPicker=function(a,b){const {messages:c}=this,e=[];for(let f=0;f<w.HIGHLIGHT_COLOR.length;f++)e.push(d.tsx("calcite-action",{key:f,text:c.resultsStrings.graphicColor,label:c.resultsStrings.graphicColor,scale:"s",onclick:()=>{this.viewModel.changeResultGraphicColor(this._graphicHandler.getHighlightColor(f),b)}},d.tsx("calcite-color-picker-swatch",{scale:"s",
color:this._graphicHandler.getHighlightColor(f).hex,active:a.color===this._graphicHandler.getHighlightColor(f).color?!0:!1})));return d.tsx("calcite-action-pad",{position:"start",layout:"grid",expandDisabled:!0},d.tsx("calcite-action-group",{layout:"grid",columns:4},e))};g.renderTraceResults=function(){const {messages:a}=this,b=[];this.viewModel._traceResults.forEach((c,e)=>{let f=[],n=[],p=!1,z=!1,A=!1;null!==c.results?c.results.hasOwnProperty("elements")?(null!==c.results.aggregatedGeometry&&(z=
!0),null!==c.results.globalFunctionResults&&0<c.results.globalFunctionResults.length&&(n=c.results.globalFunctionResults,0<n.length&&(A=!0)),0<c.results.elements.length&&(f=c.results.elements,0<f.length&&(p=!0)),b.push(d.tsx("calcite-block",{key:c.trace.title,heading:c.trace.title,description:c.trace.description,collapsible:!1,open:!0},this.renderRemoveTraceContainer(c),d.tsx("calcite-list",null,A?d.tsx("calcite-list-item",{label:a.resultsStrings.functionHeader+" ("+n.length+")",onCalciteListItemSelect:()=>
{this.switchToFunctions(n,!0)}},d.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})):null,p&&this.viewModel.showSelectionAttributes?d.tsx("calcite-list-item",{key:this.id,label:a.resultsStrings.viewFeatures+" ("+f.length+")",onCalciteListItemSelect:()=>{this.switchToAssetGroup(this._groupResultsByAssetGroup(c),c.trace.title+" ("+f.length+")",!0)}},d.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})):this.viewModel.showSelectionAttributes?d.tsx("calcite-label",
{layout:"inline",scale:"s"},a.resultsStrings.noSelectionResults):null),d.tsx("div",{styles:{height:"10px"}}),p?d.tsx("calcite-label",{layout:"inline",scale:"s",onclick:q=>{q.preventDefault();q.stopPropagation();this.viewModel.mergeSelection(!c.selectionEnabled,c.trace)}},d.tsx("calcite-checkbox",{checked:c.selectionEnabled,scale:"m",onclick:q=>{q.preventDefault();q.stopPropagation();this.viewModel.mergeSelection(!c.selectionEnabled,c.trace)}}),this.viewModel.showSelectionAttributes?a.resultsStrings.selectFeatures:
a.resultsStrings.selectFeatures+" ("+f.length+")"):null,z?d.tsx("calcite-block-section",{toggleDisplay:"switch",text:a.resultsStrings.highlightTrace,open:c.graphicEnabled,onCalciteBlockSectionToggle:q=>{q.target.open?this.viewModel.changeResultGraphicColor(c.graphicColor,c):this.viewModel.removeResultGraphicFromView(c)}},d.tsx("calcite-action",{text:a.resultsStrings.graphicColor,label:a.resultsStrings.graphicColor,scale:"s",onclick:q=>{this._swatchNode=q.target;this._activeSwatch="aggGeom_"+e}},d.tsx("calcite-color-picker-swatch",
{scale:"s",color:c.graphicColor.hex})),d.tsx("calcite-popover",{autoClose:!0,label:a.resultsStrings.graphicColor,referenceElement:this._swatchNode,placement:"auto-start",offsetDistance:0,offsetSkidding:0,open:this._activeSwatch==="aggGeom_"+e?!0:!1,onCalcitePopoverClose:()=>{this._activeSwatch=this._swatchNode=null}},this.renderHighlightColorPicker(c.graphicColor,c))):null))):b.push(d.tsx("calcite-block",{key:"error-"+e,heading:c.trace.title,collapsible:!1,open:!0},this.renderRemoveTraceContainer(c),
this.renderWarningMessage("noController",!1,c.status))):b.push(d.tsx("calcite-block",{key:"error-"+e,heading:c.trace.title,collapsible:!1,open:!0},this.renderRemoveTraceContainer(c),this.renderWarningMessage("noController",!1,c.status)))});return d.tsx("calcite-flow-item",{key:"traceResults",styles:{height:"100%"}},b,this.renderStartOverContainer(),d.tsx("calcite-modal",{open:this._alertRemoveModal,kind:"brand",scale:"m",width:"s",onCalciteModalClose:()=>{this._alertRemoveModal=!1}},d.tsx("h3",{slot:"header"},
a.globalStrings.clearResults),d.tsx("div",{slot:"content"},a.alertsStrings.clearResultsAlert),d.tsx("calcite-button",{slot:"secondary",width:"full",appearance:"outline",onclick:()=>{this._alertRemoveModal=!1}},a.globalStrings.cancel),d.tsx("calcite-button",{slot:"primary",width:"full",onclick:()=>{this.viewModel.clearResult(this._activeTrace);this._alertRemoveModal=!1;0===this.viewModel._traceResults.length?this.switchTab("input"):(this._activeTrace=this.viewModel._traceResults[0].trace,this._showIndividualRecords=
this._showTraceResultAssetType=this._showTraceResultAssetGroup=this._showTraceResultFunctions=!1)}},a.globalStrings.ok)))};g.renderTraceResultFunctions=function(){const {messages:a}=this,b=[];this._traceResultsFunctions.forEach(c=>{b.push(this.renderResultRowFunctions(c))});return d.tsx("calcite-flow-item",{key:"functionResultMultiple",onCalciteFlowItemBack:()=>{this.switchToFunctions([],!1)},heading:a.resultsStrings.functionHeader},b,this.renderStartOverContainer())};g.renderTraceResultByAssetGroup=
function(){const a=this._traceResultsAssetGroup,b=[];for(const c in a){const e=a[c];for(const f in e)b.push(this.renderResultRowAssetGroup(e[f]))}return d.tsx("calcite-flow-item",{key:"assetGroupResultMultiple",onCalciteFlowItemBack:()=>{this.switchToAssetGroup([],"",!1)},heading:this._traceHeaderForFlow},d.tsx("calcite-list",null,b),this.renderStartOverContainer())};g.renderTraceResultByAssetType=function(){const a=this._traceResultsAssetType,b=[];for(const c in a)0<a[c].length&&b.push(this.renderResultRowAssetType(a[c]));
return d.tsx("calcite-flow-item",{key:"assetTypeResult",onCalciteFlowItemBack:()=>{this.switchToAssetType([],"",!1)},heading:this._assetGroupHeader},d.tsx("calcite-list",{selectionMode:"none"},b),this.renderStartOverContainer())};g.renderTraceResultIndividual=function(){const {messages:a}=this,b=this._traceResultsIndividual;b.sort(this._compare(this._resultSortField,this._resultSortOrder));const c=[];0<b.length&&(b[0].details.fields.some(e=>e.name.toLowerCase()===this._resultDisplayField.toLocaleLowerCase())||
(this._resultSortField=this._resultDisplayField=this._resultObjectIdField),b.forEach(e=>{c.push(this.renderResultRowIndividual(e))}));return d.tsx("calcite-flow-item",{key:"individualResult",onCalciteFlowItemBack:()=>{this._showResultOptions=!1;this.switchToIndividualRecords([],"",!1)},heading:this._assetTypeHeader},d.tsx("calcite-action",{slot:"header-actions-end",text:a.resultsStrings.displayAttribute,onclick:()=>{this._showResultOptions=!0},scale:"m",icon:"gear",label:a.resultsStrings.displayAttribute,
id:"field_options"+this.id,afterCreate:D.storeNode,bind:this,"data-node-ref":"_individualResultNode"}),d.tsx("calcite-list",{selectionMode:"none"},c),this.renderStartOverContainer())};g.renderTraceResultIndividualPopover=function(){const {messages:a}=this,b=this._traceResultsIndividual,c=[],e=[];0<b.length&&b[0].details.fields.forEach(f=>{c.push(d.tsx("calcite-option",{key:"display"+f.name,label:f.alias,value:f.name,selected:f.name===this._resultDisplayField?!0:!1}));e.push(d.tsx("calcite-option",
{key:"sort"+f.name,label:f.alias,value:f.name,selected:f.name===this._resultSortField?!0:!1}))});return d.tsx("calcite-popover",{autoClose:!0,label:a.resultsStrings.displayAttribute,referenceElement:this._individualResultNode,placement:"left-start",overlayPositioning:"fixed",offsetDistance:0,offsetSkidding:0,open:this._showResultOptions,styles:null!==this.domNode?{width:.75*this.domNode.clientWidth+"px"}:{width:"75%"}},d.tsx("calcite-block",{heading:"",open:!0},d.tsx("calcite-label",{scale:"s"},a.resultsStrings.displayAttribute,
d.tsx("calcite-select",{scale:"s",label:a.resultsStrings.displayAttribute,onCalciteSelectChange:f=>{this._resultDisplayField=f.target.selectedOption.value;this._showResultOptions=!1}},c)),d.tsx("calcite-label",{scale:"s"},a.resultsStrings.sortBy,d.tsx("calcite-select",{scale:"s",label:a.resultsStrings.sortBy,onCalciteSelectChange:f=>{this._resultSortField=f.target.selectedOption.value;b.sort(this._compare(this._resultSortField,this._resultSortOrder));this._traceResultsIndividual=b;this._showResultOptions=
!1}},e))))};g.renderResultRow=function(a){let b=a[0].assetGroupCode;var c=this.viewModel.getValidSources().filter(e=>e.sourceId===a[0].networkSourceId);0<c.length&&(c=c[0].assetGroups.filter(e=>e.assetGroupCode===a[0].assetGroupCode),0<c.length&&(b=c[0].assetGroupName));return d.tsx("calcite-list-item",{label:b+" ("+a.length+")",onCalciteListItemSelect:()=>{this.switchToAssetType(this._groupResultsByAssetType(a),b+" ("+a.length+")",!0)}},d.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"}))};
g.renderResultRowFunctions=function(a){return d.tsx("calcite-block",{heading:a.networkAttributeName+" "+a.functionType+" \x3d "+a.result,collapsible:!1})};g.renderResultRowAssetGroup=function(a){const b=this._getAssetGroupName(a[0]);return d.tsx("calcite-list-item",{label:b+" ("+a.length+")",onCalciteListItemSelect:()=>{this.switchToAssetType(this._groupResultsByAssetType(a),b+" ("+a.length+")",!0)}},d.tsx("calcite-icon",{slot:"content-end",icon:"chevron-right",scale:"s"}))};g.renderResultRowAssetType=
function(a){const b=this._getAssetTypeName(a[0]);return d.tsx("calcite-list-item",{label:b+" ("+a.length+")",onCalciteListItemSelect:()=>{this.viewModel.queryFeaturesById(a).then(c=>{c?.length?(this._resultObjectIdField=c[0].layer.objectIdField,"objectid"===this._resultDisplayField&&(this._resultDisplayField=c[0].layer.objectIdField),"objectid"===this._resultSortField&&(this._resultSortField=c[0].layer.objectIdField),c=this._appendAttributes(a,c,"objectId"),this.switchToIndividualRecords(c,b+" ("+
a.length+")",!0)):this.switchToIndividualRecords(a,b+" ("+a.length+")",!0)})}},d.tsx("calcite-icon",{slot:"content-end",icon:"chevron-right",scale:"s"}))};g.renderResultRowIndividual=function(a){const {messages:b}=this;var c="";c=null;for(var e=0;e<a.details.fields.length;e++)a.details.fields[e].name===this._resultDisplayField&&(c=a.details.fields[e]);if("date"===c.type)c=(new Date(a.details.attributes[this._resultDisplayField])).toDateString();else if(null!==c.domain){c=c.domain.codedValues;e="";
for(let f=0;f<c.length;f++)c[f].code===a.details.attributes[this._resultDisplayField]&&(e=c[f].name);c=e}else c="assetgroup"===this._resultDisplayField.toLocaleLowerCase()?this._getAssetGroupName(a):"assettype"===this._resultDisplayField.toLocaleLowerCase()?this._getAssetTypeName(a):a.details.attributes[this._resultDisplayField];c&&""!==c&&null!==c||(c=b.resultsStrings.noValue);return d.tsx("calcite-list-item",{label:c,onCalciteListItemSelect:()=>{this.viewModel.zoomToAsset(a.details.geometry)}},
d.tsx("calcite-icon",{icon:"zoom-to-object",textLabel:b.globalStrings.zoomToFeature,scale:"s",slot:"content-end"}))};g._mixCustomStrings=function(){const {messages:a}=this;0<this.inputSettings.length&&this.inputSettings.forEach(b=>{"starting-point"===b.type&&(a.inputsStrings.headerStartingPoint=b.label,a.inputsStrings.startingPointHint=b.description);"barrier"===b.type&&(a.inputsStrings.headerBarrier=b.label,a.inputsStrings.barrierPointHint=b.description)})};g._overrideFlagSymbol=function(){0<this.inputSettings.length&&
this.inputSettings.forEach(a=>{"starting-point"===a.type?this._symbolStartFlag=a.symbol:this._symbolBarrier=a.symbol;this.viewModel.changeFlagSymbol(a.type,a.symbol)})};g._utilityNetworkTraceInitialized=function(){var a=this;return this.viewModel.loadUtilityNetwork().then(b=>{if(b)return this.viewModel.selectTracesOnLoad(),this._registerWatchers(),0>=this.viewModel._traces.length&&(this._tracesExists=!1),0<this.viewModel.flags.length?this.view.when().then(()=>{this._watchHandler=r.when(()=>!this.view?.updating,
t._asyncToGenerator(function*(){a._warningNoFlag=!1;a._warningNoBarrierAssetFound=!1;a._warningNoStartAssetFound=!1;const c=yield a.viewModel.addFlagsOnLoad();a.viewModel.removeFlagsOnLoadWatcher();c.includes("barrier")&&(a._warningNoBarrierAssetFound=!0);c.includes("starting-point")&&(a._warningNoStartAssetFound=!0);a.disabled=!1;null!==a._watchHandler&&a._watchHandler.remove()}))}):this.view.when().then(()=>{this._watchHandler=r.when(()=>!this.view?.updating,()=>{this.disabled=!1;null!==this._watchHandler&&
this._watchHandler.remove()},{initial:!0})});this._tracesExists=!1;return this.view.when().then(()=>{this._watchHandler=r.when(()=>!this.view?.updating,()=>{this.disabled=!1;null!==this._watchHandler&&this._watchHandler.remove()},{initial:!0})})}).catch(b=>{const {messages:c}=this;this._loadUNError=!1;this._errorMessage=-2147208474===b.details.raw.extendedCode?c?.alertsStrings?.noUserExtension||b.message:b.message;this.disabled=!1})};g._registerWatchers=function(){this.addHandles([r.watch(()=>this.selectedTraces,
()=>{this.viewModel.selectTracesOnLoad();this.scheduleRender()}),r.watch(()=>this.defaultGraphicColor,()=>{0<this.viewModel._traceResults.length&&this.viewModel._traceResults.forEach(a=>{this.viewModel.changeResultGraphicColor(this.viewModel.defaultGraphicColor,a)});this.scheduleRender()})])};g._groupResultsByAssetGroup=function(a){const b=[];a=this._groupBy(a.results.elements,"networkSourceId");for(const c in a)b.push(this._groupBy(a[c],"assetGroupCode"));return b};g._groupResultsByAssetType=function(a){return this._groupBy(a,
"assetTypeCode")};g._appendAttributes=function(a,b,c){const e=[];a.forEach(f=>{b.forEach(n=>{n.featureSet.features.forEach(p=>{f[c]===p.attributes[this._resultObjectIdField]&&(f.details=p,f.details.fields=n.featureSet.fields,e.push(f))})})});return e};g._getAssetGroupName=function(a){let b=a.assetGroupCode.toString();const c=a.assetGroupCode;var e=this.viewModel.getValidSources().find(f=>f.sourceId===a.networkSourceId);e&&(e=e.assetGroups.find(f=>f.assetGroupCode===c))&&(b=e.assetGroupName);return b};
g._getAssetTypeName=function(a){let b=a.assetTypeCode.toString();const c=a.assetGroupCode;var e=this.viewModel.getValidSources().find(f=>f.sourceId===a.networkSourceId);e&&(e=e.assetGroups.find(f=>f.assetGroupCode===c))&&(e=e.assetTypes.find(f=>f.assetTypeCode===a.assetTypeCode))&&(b=e.assetTypeName);return b};g._compare=function(a,b){return(c,e)=>{let f=0;c=c.details.attributes[a];e=e.details.attributes[a];isNaN(c)&&(c=c.toLowerCase());isNaN(e)&&(e=e.toLowerCase());"desc"===b?c>e?f=1:c<e&&(f=-1):
c<e?f=1:c>e&&(f=-1);return f}};g._groupBy=function(a,b){return a.reduce((c,e)=>{(c[e[b]]=c[e[b]]||[]).push(e);return c},{})};g._getSymbolIcon=function(a){return"picture-marker"===a.type?d.tsx("img",{src:a.url,width:a.width,height:a.height}):null};t._createClass(u,[{key:"defaultGraphicColor",get:function(){return this.viewModel.defaultGraphicColor},set:function(a){this.viewModel.defaultGraphicColor=a}},{key:"flags",get:function(){return this.viewModel.flags},set:function(a){this.viewModel.flags=a}},
{key:"gdbVersion",get:function(){return this.viewModel.gdbVersion},set:function(a){this.viewModel.gdbVersion=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"selectedTraces",get:function(){return this.viewModel.selectedTraces},set:function(a){this.viewModel.selectedTraces=a}},{key:"selectOnComplete",get:function(){return this.viewModel.selectOnComplete},set:function(a){this.viewModel.selectOnComplete=a}},{key:"showGraphicsOnComplete",
get:function(){return this.viewModel.showGraphicsOnComplete},set:function(a){this.viewModel.showGraphicsOnComplete=a}},{key:"showSelectionAttributes",get:function(){return this.viewModel.showSelectionAttributes},set:function(a){this.viewModel.showSelectionAttributes=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return u}(h.HandleOwnerMixin(C));k.__decorate([l.property()],h.prototype,"_tracesExists",void 0);k.__decorate([l.property()],h.prototype,
"_selectToolActive",void 0);k.__decorate([l.property()],h.prototype,"_activeTrace",void 0);k.__decorate([l.property()],h.prototype,"_activeSwatch",void 0);k.__decorate([l.property()],h.prototype,"_traceHeaderForFlow",void 0);k.__decorate([l.property()],h.prototype,"_assetGroupHeader",void 0);k.__decorate([l.property()],h.prototype,"_assetTypeHeader",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsFunctions",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsAssetGroup",void 0);
k.__decorate([l.property()],h.prototype,"_traceResultsAssetType",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsIndividual",void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultFunctions",void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultAssetGroup",void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultAssetType",void 0);k.__decorate([l.property()],h.prototype,"_showIndividualRecords",void 0);k.__decorate([l.property()],h.prototype,"_activeTab",
void 0);k.__decorate([l.property()],h.prototype,"_alertRemoveModal",void 0);k.__decorate([l.property()],h.prototype,"_warningNoFlag",void 0);k.__decorate([l.property()],h.prototype,"_warningNoTraceSelected",void 0);k.__decorate([l.property()],h.prototype,"_confirmReset",void 0);k.__decorate([l.property()],h.prototype,"_swatchNode",void 0);k.__decorate([l.property()],h.prototype,"_errorMessage",void 0);k.__decorate([l.property()],h.prototype,"defaultGraphicColor",null);k.__decorate([l.property()],
h.prototype,"disabled",void 0);k.__decorate([l.property()],h.prototype,"flags",null);k.__decorate([l.property()],h.prototype,"gdbVersion",null);k.__decorate([l.property()],h.prototype,"iconClass",void 0);k.__decorate([l.property()],h.prototype,"inputSettings",void 0);k.__decorate([l.property()],h.prototype,"label",null);k.__decorate([l.property(),E.messageBundle("esri/widgets/UtilityNetworkTrace/t9n/UtilityNetworkTrace")],h.prototype,"messages",void 0);k.__decorate([l.property()],h.prototype,"selectedTraces",
null);k.__decorate([l.property()],h.prototype,"selectOnComplete",null);k.__decorate([l.property()],h.prototype,"showGraphicsOnComplete",null);k.__decorate([l.property()],h.prototype,"showSelectionAttributes",null);k.__decorate([l.property()],h.prototype,"view",null);k.__decorate([F.vmEvent(["add-flag","add-flag-complete","add-flag-error","select-features","clear-selection"]),l.property({type:v})],h.prototype,"viewModel",void 0);return h=k.__decorate([B.subclass("esri.widgets.UtilityNetworkTrace")],
h)});