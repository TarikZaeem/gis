// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/compilerUtils ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/accessorSupport/decorators/subclass ../layers/support/domainUtils ../layers/support/fieldUtils ./Widget ./FeatureForm/css ./FeatureForm/featureFormUtils ./FeatureForm/FeatureFormViewModel ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ../chunks/datetime ../intl/locale".split(" "),
function(A,v,u,r,L,m,M,w,U,V,N,O,P,Q,g,x,R,G,W,J,S,k,E,T){r=function(K){function F(a,b){var c=K.call(this,a,b)||this;c._dateInputFieldMap=new Map;c._activeInputName="";c._activeNumberFieldEdit=null;c._fieldFocusNeeded=!1;c._fieldToInitialIncompatibleDomainValue=new Map;c._switchFieldsWithInitialIncompatibleValue=new Set;c._userUpdatedInputFieldNames=new Set;c.disabled=!1;c.groupDisplay="all";c.headingLevel=2;c.messages=null;c.messagesTemplates=null;c.viewModel=new R;c._handleInputInput=d=>{c._commitInputValue(d.currentTarget)};
c._handleFormKeyDown=c._handleFormKeyDown.bind(v._assertThisInitialized(c));c._handleInputBlur=c._handleInputBlur.bind(v._assertThisInitialized(c));c._handleInputFocus=c._handleInputFocus.bind(v._assertThisInitialized(c));c._handleNumberInputMouseDown=c._handleNumberInputMouseDown.bind(v._assertThisInitialized(c));c._handleInputKeyDown=c._handleInputKeyDown.bind(v._assertThisInitialized(c));c._handleOptionChange=c._handleOptionChange.bind(v._assertThisInitialized(c));c._handleGroupClick=c._handleGroupClick.bind(v._assertThisInitialized(c));
c._handleSubmit=c._handleSubmit.bind(v._assertThisInitialized(c));c._afterInputCreateOrUpdate=c._afterInputCreateOrUpdate.bind(v._assertThisInitialized(c));c._afterDateInputCreateOrUpdate=c._afterDateInputCreateOrUpdate.bind(v._assertThisInitialized(c));return c}v._inheritsLoose(F,K);var e=F.prototype;e.initialize=function(){this.addHandles([M.watch(()=>this.feature,()=>{this._activeInputName=this._getFocusableInput("forward")?.name||"";this._userUpdatedInputFieldNames.clear();this._fieldToInitialIncompatibleDomainValue.clear();
this._switchFieldsWithInitialIncompatibleValue.clear();this._dateInputFieldMap.clear();this._fieldFocusNeeded=!0}),this.on("submit",a=>{if(0<a.invalid.length){const [b]=a.invalid;a.invalid.forEach(c=>this._userUpdatedInputFieldNames.add(c));this._activeInputName=b;this._fieldFocusNeeded=!0;this.scheduleRender()}})])};e.loadDependencies=function(){return Promise.all([new Promise((a,b)=>A(["../chunks/calcite-combobox"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-combobox-item"],a,b)),new Promise((a,
b)=>A(["../chunks/calcite-combobox-item-group"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-input-message"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-progress"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-switch"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-input-date-picker"],a,b)),new Promise((a,b)=>A(["../chunks/calcite-input-time-picker"],a,b))])};e.getValues=function(){return this.viewModel.getValues()};e.submit=function(){return this.viewModel.submit()};e.render=function(){const {state:a}=
this.viewModel;return k.tsx("div",{class:this.classes(g.CSS.base,g.CSS.widget,g.CSS.panel)},"ready"===a?this.renderForm():null)};e.renderForm=function(){var a=this.viewModel,b=m.isSome(a.formTitle)&&k.tsx(G.Heading,{key:"title",level:this.headingLevel},a.formTitle);a=m.isSome(a.formDescription)&&k.tsx("p",{class:g.CSS.description,key:"description"},a.formDescription);b=b||a?k.tsx("div",{class:g.CSS.formHeader},b,a):null;return k.tsx("form",{class:g.CSS.form,novalidate:!0,onsubmit:this._handleSubmit,
onkeydown:this._handleFormKeyDown},b,this.renderFields())};e.renderFields=function(){const {viewModel:{inputFields:a}}=this;return a.filter(b=>b.visible).map((b,c)=>x.isGroupField(b)?this.renderGroup(b,c):this.renderLabeledField(b))};e.renderGroup=function(a,b){const {formTemplate:c,disabled:d}=this,{description:h,inputFields:f,label:l,state:n}=a,q=f.filter(H=>H.visible);var p=this.viewModel.findField(this._activeInputName);p=!(!p||p.group!==a);const y=`${this.id}_group_${b}`,z=`${this.id}_group-label_${b}`,
B=`${this.id}_group-description_${b}`,t=h?k.tsx("p",{class:this.classes(g.CSS.groupDescription,g.CSS.description),id:B},h):null,C="sequential"===this.groupDisplay,D=C?p:"expanded"===n,I=D?g.CSS.collapseIcon:g.CSS.expandIcon;return k.tsx("fieldset",{"aria-expanded":D.toString(),"aria-labelledby":z,"aria-describedby":h?B:"",class:this.classes(g.CSS.group,C?g.CSS.groupSequential:null,D?null:g.CSS.groupCollapsed,p?g.CSS.groupActive:null,d?g.CSS.inputDisabled:null),disabled:d,"data-group":a,id:y,key:b,
onclick:this._handleGroupClick},k.tsx("button",{role:C?"presentation":void 0,class:g.CSS.groupHeader,type:"button",tabIndex:C?-1:0},k.tsx("div",{class:g.CSS.groupTitle},k.tsx(G.Heading,{class:g.CSS.groupLabel,id:z,level:m.isSome(c)&&c.title?G.incrementHeadingLevel(this.headingLevel):this.headingLevel},l),t),C?null:k.tsx("span",{class:this.classes(I,g.CSS.groupToggleIcon)})),q.map(H=>this.renderLabeledField(H)))};e._getFocusableInput=function(a,b){var c=this.viewModel.allInputFields;c="forward"===
a?c:c.slice().reverse();b?x.isGroupField(b)?a=c.indexOf(b.inputFields[0]):(this._isInputFieldInGroup(b)&&"collapsed"===b.group.state?({inputFields:b}=b.group,a="forward"===a?b[b.length-1]:b[0]):a=b,a=c.indexOf(a)+1):a=0;for(;a<c.length;a++)if(b=c[a],b.visible)return b;return null};e.renderLabeledField=function(a){const {feature:b,label:c,layer:d,type:h}=a;return k.tsx("label",{key:`${d.id}-${b.uid}-${a.name}`,class:g.CSS.label},[c,"unsupported"!==h?this.renderInputField(a):this.renderUnsupportedField(a),
this.renderAuxiliaryText(a)])};e.renderInputField=function(a){const {domain:b,name:c,type:d,updating:h,value:f}=a,l=this.getCommonInputProps(a);if("coded-value"===b?.type){if(x.isFieldElementWithInputType(a.fieldElement,"switch")){const {fieldElement:n}=a;if(this._switchFieldsWithInitialIncompatibleValue.has(c)||null==f||n.input.onValue!==f&&n.input.offValue!==f)this._switchFieldsWithInitialIncompatibleValue.add(c);else return this.renderSwitchInputField(a,l)}return"radio-buttons"===a.inputType?this.renderRadioButtonsInputField(a,
b.codedValues.map(({code:n,name:q})=>({value:n,name:q})),l):this.renderSelectInputField(a,this._getFieldValueOptions(c,b),l)}if("datetime-picker"===a.inputType||"date"===d)return this.renderDateInputField(a,l);a="number"===d?k.tsx("input",{type:"number",...l,value:m.isSome(this._activeNumberFieldEdit)&&this._activeNumberFieldEdit.fieldName===a.name?this._activeNumberFieldEdit.value:`${l.value}`}):"text-area"===a.inputType?k.tsx("textarea",{...l}):k.tsx("input",{type:"text",...l});return h?k.tsx("div",
{class:g.CSS.inputFieldWrapper},a,k.tsx("div",{class:g.CSS.inputFieldLoader},k.tsx("calcite-progress",{type:"indeterminate"}))):a};e.renderDateInputField=function(a,b){const {includeTime:c,label:d,name:h,valid:f,value:l}=a,{readOnly:n,required:q}=b,{date:p,time:y}=this._formatValueForDateInputs(l);a=m.isSome(b.max)?this._formatValueForDateInputs(b.max):void 0;var z=m.isSome(b.min)?this._formatValueForDateInputs(b.min):void 0;a=a?.date??void 0;z=z?.date??void 0;const B={afterCreate:this._afterDateInputCreate,
afterUpdate:this._afterDateInputCreateOrUpdate,"aria-invalid":!f,label:d,numberingSystem:"latn",overlayPositioning:"fixed",readOnly:n,required:q,tabIndex:0,["data-field-name"]:h};return k.tsx("div",{key:`${b.key}-date-time-container`,class:g.CSS.dateInputContainer},k.tsx("calcite-input-date-picker",{bind:this,...B,class:this.classes(b.class,g.CSS.inputDate),"data-date-part":"date",key:`${b.key}-date-input`,valueAsDate:p??void 0,maxAsDate:a,minAsDate:z,onCalciteInputDatePickerChange:t=>this._commitDateChanges(t.target),
onblur:t=>this._commitDateChanges(t.target,!0)}),c?k.tsx("calcite-input-time-picker",{bind:this,...B,class:this.classes(b.class,g.CSS.inputTime),"data-date-part":"time",key:`${b.key}-time-input`,value:y??void 0,step:1,onCalciteInputTimePickerChange:t=>this._commitDateChanges(t.target),onfocus:t=>{t.target.calciteTimePickerEl&&(t.target.calciteTimePickerEl.showSecond=!0)},onblur:t=>this._commitDateChanges(t.target,!0)}):null)};e.renderUnsupportedField=function(a){a=this.getCommonInputProps(a);return k.tsx("input",
{afterCreate:a.afterCreate,afterUpdate:a.afterUpdate,class:this.classes(g.CSS.input,g.CSS.inputField,g.CSS.inputDisabled),onfocus:a.onfocus,readOnly:!0,tabIndex:a.tabIndex,type:"text",value:a.value,["data-field-name"]:a["data-field-name"]})};e.renderSelectInputField=function(a,b,c){const {value:d}=a,{messages:h,messagesTemplates:f}=this;var l=b.map(p=>p.map(y=>k.tsx("calcite-combobox-item",{value:`${y.value}`,textLabel:y.name,key:`#${y.value}`,selected:d===y.value})));const [n,q]=l;this._registerIncompatibleValue(d,
b.flat(),a,p=>{q.unshift(k.tsx("calcite-combobox-item",{value:`${p}`,textLabel:`${p}`,key:"incompatible-option",readOnly:!0}))});b=0<q.length?[k.tsx("calcite-combobox-item-group",{key:"recommended",label:h.recommended},n),k.tsx("calcite-combobox-item-group",{key:"other",label:f.other},q)]:n;l=m.isNone(a.fieldElement)||x.isFieldElementWithInputType(a.fieldElement,"combo-box")&&a.fieldElement.input.showNoValueOption;!a.required&&l&&(a=x.isFieldElementWithInputType(a.fieldElement,"combo-box")&&a.fieldElement.input.noValueOptionLabel||
this.messages.empty,b.unshift(k.tsx("calcite-combobox-item",{value:"",textLabel:this.messages.empty,key:"empty-option"},a)));return k.tsx("calcite-combobox",{...c,selectionMode:"single",disabled:c.readOnly,allowCustomValues:!1,onCalciteComboboxChange:p=>this._handleOptionChange(p.target)},b)};e._registerIncompatibleValue=function(a,b,c,d){const h=this._fieldToInitialIncompatibleDomainValue,f=h.has(c.name);if(f||null!=a&&""!==a&&!b.some(l=>l.value===a))f||h.set(c.name,a),d?.(a)};e.renderRadioButtonsInputField=
function(a,b,c){const {value:d}=a,h=b.map(f=>this.renderRadioButton({key:f.name,label:f.name,name:a.name,value:f.value,selected:f.value===d,props:c}));this._registerIncompatibleValue(d,b,a);b=m.isNone(a.fieldElement)||x.isFieldElementWithInputType(a.fieldElement,"radio-buttons")&&a.fieldElement.input.showNoValueOption;!a.required&&b&&(b=x.isFieldElementWithInputType(a.fieldElement,"radio-buttons")&&a.fieldElement.input.noValueOptionLabel||this.messages.empty,h.unshift(this.renderRadioButton({key:"empty-option",
label:b,name:a.name,value:"",selected:""===d||null===d,props:c})));return k.tsx("div",{key:`${c.key}-radio`,class:g.CSS.inputRadioGroup},h)};e.renderSwitchInputField=function(a,b){const {value:c}=a;a=x.isFieldElementWithInputType(a.fieldElement,"switch")?c===a.fieldElement.input.onValue:!1;return k.tsx("calcite-switch",{...b,class:g.CSS.inputSwitch,onCalciteSwitchChange:d=>this._commitInputValue(d.target),checked:a,disabled:b.readOnly})};e.renderRadioButton=function({key:a,name:b,value:c,selected:d,
label:h,props:f}){return k.tsx("label",{key:a,class:g.CSS.inputRadioLabel},k.tsx("input",{...f,class:g.CSS.inputRadio,name:b,type:"radio",value:c,checked:d,disabled:f.readOnly,onchange:l=>this._commitInputValue(l.target)}),h)};e.renderAuxiliaryText=function(a){const b=this._userUpdatedInputFieldNames.has(a.name)&&!a.valid?a.errorMessage:m.isSome(this.viewModel.contingencyConstraintViolations.get(a.name))?this.messages.validationErrors.valuesIncompatible:m.isSome(a.valueExpressionExecutor)&&a.valueExpressionExecutor.stale?
this.messages.valueExpressionError:null;return m.isSome(b)?k.tsx("calcite-input-message",{status:"invalid",icon:!0},b):a.description?k.tsx("div",{key:"description",class:g.CSS.description},a.description):null};e.getCommonInputProps=function(a){const {disabled:b,groupDisplay:c}=this,{editable:d,group:h,hint:f,label:l,maxLength:n,minLength:q,name:p,required:y,type:z,valid:B,value:t}=a,C=this._userUpdatedInputFieldNames.has(p),D=!d||b,I="all"===c&&m.isSome(h)&&"collapsed"===h.state;return{afterCreate:this._afterInputCreateOrUpdate,
afterUpdate:this._afterInputCreateOrUpdate,"aria-invalid":B?"false":"true",class:this.classes(g.CSS.input,g.CSS.inputField,D?g.CSS.inputDisabled:null,C&&!B?g.CSS.inputInvalid:null),key:p,label:l,minlength:-1<q?`${q}`:"",maxlength:-1<n?`${n}`:"",...this._getNumberFieldConstraints(a),readOnly:D,value:null==t?"":`${t}`,["data-field-name"]:p,onfocus:this._handleInputFocus,oninput:this._handleInputInput,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===z?this._handleNumberInputMouseDown:
null,placeholder:"number"===z||"text"===z?f:"",required:y,tabIndex:I?-1:0}};e._isInputFieldInGroup=function(a){return!x.isGroupField(a)&&m.isSome(a.group)};e._handleNumberInputMouseDown=function({target:a}){a.focus();this.scheduleRender()};e._getFieldValueOptions=function(a,b){b=b.codedValues.map(({code:c,name:d})=>({value:c,name:d}));a=this.viewModel.fieldsWithContingentValues.has(a)?this._getContingentValueOptions(a):[];if(0<a.length){const c=new Set(a.map(d=>d.value));b=b.filter(d=>!c.has(d.value));
return[a,b]}return[b,[]]};e._getContingentValueOptions=function(a){const b={};for(var c of this.viewModel.allInputFields){const {name:h,value:f}=c;!m.isNone(f)&&h!==a&&this.viewModel.fieldsWithContingentValues.has(h)&&(b[h]=f)}var d=this.viewModel.joinedContingentValues.slice();c=new Map;for(const h of d){d=h.values[a];if(m.isNone(d)||"code"!==d.objectType&&"null"!==d.objectType)continue;const {code:f,name:l}=d.codedValue&&"null"!==d.objectType?d.codedValue:{code:"",name:this.messages.empty};c.has(f)||
Object.entries(b).every(([n,q])=>!h.values.hasOwnProperty(n)||this._valueIsValidContingentValue(q,h.values[n]))&&c.set(f,{name:l,value:f})}return[...c.values()]};e._getInputFieldFromInput=function(a){return this.viewModel.findField(a.getAttribute("data-field-name"))};e._getNumberFieldConstraints=function(a){return(a=O.getDomainRange(a.domain)||P.getFieldRange(a.field))&&a.max!==Number.MAX_VALUE&&a.min!==Number.MIN_VALUE?a:{min:null,max:null}};e._afterDateInputCreate=function(){var a=v._asyncToGenerator(function*(b){!("valueAsDate"in
b)&&m.isSome(b.value)&&"setValue"in b&&b.setValue({value:b.value,origin:"external"});this._afterDateInputCreateOrUpdate(b)});return function(b){return a.apply(this,arguments)}}();e._afterDateInputCreateOrUpdate=function(a){const {name:b}=this._getInputFieldFromInput(a),c=this._dateInputFieldMap.get(b),d="valueAsDate"in a;m.isSome(c)?d?c.date=a:c.time=a:this._dateInputFieldMap.set(b,{[d?"date":"time"]:a});this._afterInputCreateOrUpdate(a)};e._afterInputCreateOrUpdate=function(a){var {viewModel:b}=
this;const c=this._getInputFieldFromInput(a);b=b.findField(this._activeInputName);const d=this._fieldToInitialIncompatibleDomainValue.get(c.name)===c.value;this._fieldFocusNeeded&&b===c&&("radio-buttons"!==c.inputType||d||a.checked)&&(this._fieldFocusNeeded=!1,this._isInputFieldInGroup(c)&&(c.group.state="expanded"),a.focus())};e._handleInputFocus=function(a){a=a.target;const b=this._getInputFieldFromInput(a);this._activeInputName=b.name;this._isNumberInputField(b)&&(this._activeNumberFieldEdit={fieldName:b.name,
input:a,value:a.value})};e._isNumberInputField=function({domain:a,inputType:b="text-box",type:c}){return"number"===c&&"text-box"===b&&(!a||"coded-value"!==a.type)};e._handleInputBlur=function(a){a=a.target;const b=this._getInputFieldFromInput(a);"number"===b.type&&m.isSome(this._activeNumberFieldEdit)&&(this._activeNumberFieldEdit.input.value=`${b.value}`,this._activeNumberFieldEdit=null);this._commitInputValue(a);this.scheduleRender()};e._commitDateChanges=function(a,b=!1){const {name:c}=this._getInputFieldFromInput(a);
if(this._dateInputFieldMap.has(c)){var d=this._dateInputFieldMap.get(c);d&&d.date&&(a=this._getFieldValueFromDateInput(a),d=this._getFieldValueFromDateInputs(d.date,d.time),this.viewModel.getValue(c)!==d&&(null===a||null===d?b&&this._updateFieldValue(c,null):this._updateFieldValue(c,d)))}};e._commitInputValue=function(a){const b=this._getInputFieldFromInput(a);m.isSome(this._activeNumberFieldEdit)&&this._isNumberInputField(b)&&(this._activeNumberFieldEdit.value=a.value);this._updateFieldValue(b.name,
this._parseValue(a))};e._handleInputKeyDown=function(a){const {key:b,altKey:c,ctrlKey:d,metaKey:h}=a;var f=this._getInputFieldFromInput(a.target);if("Enter"!==b){var {type:l}=f.field;f="single"===l||"double"===l;if(!("integer"!==l&&"small-integer"!==l&&!f||c||d||h)&&1===b.length){l=Number(b);const n=["-","+"],q=["e","."];f=f?[...n,...q]:n;isNaN(l)&&!f.includes(b)&&a.preventDefault()}}else this._isInputFieldInGroup(f)&&"collapsed"===f.group.state&&(f.group.state="expanded")};e._updateFieldValue=function(a,
b){this.viewModel.setValue(a,b);this._userUpdatedInputFieldNames.add(a);this.viewModel.fieldsWithContingentValues.has(a)&&(a=Object.fromEntries(Object.entries(this.getValues()).filter(([,c])=>m.isSome(c))),this.viewModel.validateContingencyConstraints(a))};e._parseValue=function(a){const b=this._getInputFieldFromInput(a),c=a.value;if(x.isFieldElementWithInputType(b.fieldElement,"switch")&&"CALCITE-COMBOBOX"!==a.tagName)return a.checked?b.fieldElement.input.onValue:b.fieldElement.input.offValue;if("radio-buttons"===
b.inputType&&"radio"===a.type&&!a.checked)return b.value;({type:a}=b);return"number"===a?c?parseFloat(c):null:c};e._handleOptionChange=function(a){this._commitInputValue(a);this.scheduleRender()};e._handleGroupClick=function(a){const b=a.currentTarget["data-group"],c="expanded"===b.state,d="sequential"===this.groupDisplay,h=`.${g.CSS.groupHeader}`;if(!c||a.target.closest(h)){this._activeInputName=this._getFocusableInput("forward",b)?.name||"";if(d){a=a.target.closest(h);if(c&&!a)return;this.viewModel.inputFields.forEach(f=>
{x.isGroupField(f)&&f!==b&&(f.state="collapsed")})}b.state=c?"collapsed":"expanded";this._fieldFocusNeeded=d;this.scheduleRender()}};e._handleSubmit=function(a){a.preventDefault()};e._handleFormKeyDown=function(a){"Enter"===a.key&&this.viewModel.submit()};e._getDefaultLocaleOptions=function(){return{locale:T.getLocale(),numberingSystem:"latn"}};e._getFieldValueFromDateInputs=function(a,b){var c=this._getDateTimeFromInput(a);b=this._getDateTimeFromInput(b);if(!c&&!b)return null;a=this._getInputFieldFromInput(a);
a=this._getNumberFieldConstraints(a);const d=Date.now();a=m.isSome(a.max)&&a.max<d?a.max:d;a=E.DateTime.fromMillis(a,this._getDefaultLocaleOptions());c=c||a;const {year:h,month:f,day:l}=c,{hour:n,minute:q,second:p}=b||a;c=c.set({year:h,month:f,day:l,hour:n,minute:q,second:p});return c.isValid?c.toMillis():null};e._getDateTimeFromInput=function(a){if(!a)return null;let b=null;if("valueAsDate"in a){a=a.valueAsDate;if(!a||Array.isArray(a))return null;b=E.DateTime.fromJSDate(a)}else{if(!a.value)return null;
b=E.DateTime.fromFormat(a.value,"TT",this._getDefaultLocaleOptions())}return b??null};e._getFieldValueFromDateInput=function(a){return this._dateTimeToFieldValue(this._getDateTimeFromInput(a))};e._dateTimeToFieldValue=function(a){return a?.isValid?a.toMillis():null};e._dateTimeFromFieldValue=function(a){return null===a?null:E.DateTime.fromMillis(a,this._getDefaultLocaleOptions())};e._formatValueForDateInputs=function(a){return null==a||isNaN(a)?{date:null,time:null}:(a=this._dateTimeFromFieldValue(a))?
{date:a.toJSDate(),time:a.toFormat("TT",this._getDefaultLocaleOptions())}:{date:null,time:null}};e._valueIsValidContingentValue=function(a,b){switch(b.objectType){case "any":return!0;case "null":return null==a;case "code":return a===b.codedValue?.code;case "range":return m.isSome(a)&&m.isSome(b.minValue)&&m.isSome(b.maxValue)&&a>=b.minValue&&a<=b.maxValue;default:return L.neverReached(b.objectType),!1}};v._createClass(F,[{key:"feature",get:function(){return this.viewModel.feature},set:function(a){this.viewModel.feature=
a}},{key:"formTemplate",get:function(){return this.viewModel.formTemplate},set:function(a){this.viewModel.formTemplate=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"layer",get:function(){return this.viewModel.layer},set:function(a){this.viewModel.layer=a}},{key:"spatialReference",get:function(){return this.viewModel.spatialReference},set:function(a){this.viewModel.spatialReference=a}},{key:"strict",get:function(){return this.viewModel.strict},
set:function(a){this.viewModel.strict=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return F}(Q);u.__decorate([w.property()],r.prototype,"disabled",void 0);u.__decorate([w.property()],r.prototype,"feature",null);u.__decorate([w.property()],r.prototype,"formTemplate",null);u.__decorate([w.property()],r.prototype,"groupDisplay",void 0);u.__decorate([w.property()],r.prototype,"headingLevel",void 0);u.__decorate([w.property()],r.prototype,"label",
null);u.__decorate([w.property()],r.prototype,"layer",null);u.__decorate([w.property(),J.messageBundle("esri/widgets/FeatureForm/t9n/FeatureForm")],r.prototype,"messages",void 0);u.__decorate([w.property(),J.messageBundle("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],r.prototype,"messagesTemplates",void 0);u.__decorate([w.property()],r.prototype,"spatialReference",null);u.__decorate([w.property()],r.prototype,"strict",null);u.__decorate([w.property()],r.prototype,"view",null);u.__decorate([w.property(),
S.vmEvent(["value-change","submit"])],r.prototype,"viewModel",void 0);return r=u.__decorate([N.subclass("esri.widgets.FeatureForm")],r)});