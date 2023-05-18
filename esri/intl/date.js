// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../core/jsonMap","./locale"],function(f,g,m){function q(d){d=d||r;var e=n.get(d);e||(e=m.getLocale(),e=t[m.getLocale()]||e,e=new Intl.DateTimeFormat(e,d),n.set(d,e));return e}var a={year:"numeric",month:"numeric",day:"numeric"},h={year:"numeric",month:"long",day:"numeric"},k={year:"numeric",month:"short",day:"numeric"};const l={year:"numeric",month:"long",weekday:"long",day:"numeric"},b={hour:"numeric",minute:"numeric"},c={...b,second:"numeric"},p={"short-date":a,"short-date-short-time":{...a,
...b},"short-date-short-time-24":{...a,...b,hour12:!1},"short-date-long-time":{...a,...c},"short-date-long-time-24":{...a,...c,hour12:!1},"short-date-le":a,"short-date-le-short-time":{...a,...b},"short-date-le-short-time-24":{...a,...b,hour12:!1},"short-date-le-long-time":{...a,...c},"short-date-le-long-time-24":{...a,...c,hour12:!1},"long-month-day-year":h,"long-month-day-year-short-time":{...h,...b},"long-month-day-year-short-time-24":{...h,...b,hour12:!1},"long-month-day-year-long-time":{...h,
...c},"long-month-day-year-long-time-24":{...h,...c,hour12:!1},"day-short-month-year":k,"day-short-month-year-short-time":{...k,...b},"day-short-month-year-short-time-24":{...k,...b,hour12:!1},"day-short-month-year-long-time":{...k,...c},"day-short-month-year-long-time-24":{...k,...c,hour12:!1},"long-date":l,"long-date-short-time":{...l,...b},"long-date-short-time-24":{...l,...b,hour12:!1},"long-date-long-time":{...l,...c},"long-date-long-time-24":{...l,...c,hour12:!1},"long-month-year":{month:"long",
year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":b,"long-time":c};g=g.strict()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",
shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",
dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});a=g.apiValues;h=g.toJSON.bind(g);k=g.fromJSON.bind(g);const t={ar:"ar-u-nu-latn-ca-gregory"};let n=new WeakMap,r=p["short-date-short-time"];m.beforeLocaleChange(()=>{n=
new WeakMap;r=p["short-date-short-time"]});f.convertDateFormatToIntlOptions=function(d){return d?p[d]:null};f.dateFormats=a;f.dictionary=g;f.formatDate=function(d,e){return q(e).format(d)};f.fromJSON=k;f.getDateTimeFormatter=q;f.toJSON=h;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});