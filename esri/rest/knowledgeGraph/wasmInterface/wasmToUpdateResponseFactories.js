// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../GraphApplyEditsResult"],function(k,p){k.decoderToApplyEditsResponse=function(c){const e=new p;e.hasError=c.has_error();e.hasError&&(e.error={errorCode:c.error.error_code,errorMessage:c.error.error_message});const q=c.get_edit_results_count();for(let g=0;g<q;g++){const d=c.get_edit_results_at(g),r=c.get_edit_results_type_name_at(g),l=[],m=[],n=[];var a=d.get_add_results_count(),f=d.get_update_results_count();const t=d.get_delete_results_count();for(var b=0;b<a;b++){const h=d.get_add_result_at(b);
l.push({id:h.id,error:{errorCode:h.error.error_code,errorMessage:h.error.error_message}})}for(a=0;a<f;a++)b=d.get_update_result_at(a),m.push({id:b.id,error:{errorCode:b.error.error_code,errorMessage:b.error.error_message}});for(f=0;f<t;f++)a=d.get_delete_result_at(f),n.push({id:a.id,error:{errorCode:a.error.error_code,errorMessage:a.error.error_message}});e.editResults.push({typeName:r,adds:l,updates:m,deletes:n})}return e};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});