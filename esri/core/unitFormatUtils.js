// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define("exports ./byteSizeEstimations ./Cyclical ./mathUtils ./maybe ./string ./unitUtils ../intl/number".split(" "),function(h,p,v,w,q,x,g,l){function n(c,a,b){return c.units[a][b]}function k(c,a,b,d=2,f="abbr"){return`${l.formatNumber(a,{minimumFractionDigits:d,maximumFractionDigits:d,signDisplay:0<a?"never":"exceptZero"})} ${n(c,b,f)}`}function m(c,a,b,d=2,f="abbr"){return`${l.formatNumber(a,{minimumFractionDigits:d,maximumFractionDigits:d,signDisplay:"exceptZero"})} ${n(c,b,f)}`}function r(c,
a){const b=JSON.stringify(a);let d=t.get(b);d||(d=new Intl.NumberFormat("en-US",a),t.set(b,d));return/\-?\+?360/.test(d.format(c))?0:c}const t=new Map,u=["B","kB","MB","GB","TB"];h.formatAngleDegrees=function(c,a,b,d,f){f=q.unwrapOr(f,2);var e=v.cyclicalDegrees,y=e.normalize;a:if(c=g.convertUnit(c,a,"degrees"),b===d)b=c;else{switch(d){case "arithmetic":b=-c+90;break a;case "geographic":b=-c-90;break a}b=void 0}e=y.call(e,b,0,!0);f={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:f,
minimumFractionDigits:f,signDisplay:0<e?"never":"exceptZero"};e=r(e,f);return l.formatNumber(e,f)};h.formatDMS=function(c,a,b=2){c=g.convertUnit(c,a,"degrees");a=c-Math.floor(c);c-=a;a*=60;let d=a-Math.floor(a);a-=d;d*=60;return`${c.toFixed()}\u00b0 ${a.toFixed()}' ${d.toFixed(b)}"`};h.formatDecimal=k;h.formatFileSize=function(c,a){let b=0===a?0:Math.floor(Math.log(a)/Math.log(p.ByteSizeUnit.KILOBYTES));b=w.clamp(b,0,u.length-1);a=l.formatNumber(a/p.ByteSizeUnit.KILOBYTES**b,{maximumFractionDigits:2});
return x.replace(c.units.bytes[u[b]],{fileSize:a})};h.formatImperialArea=function(c,a,b,d=2,f="abbr"){const e=g.preferredImperialAreaUnit(a,b);return k(c,g.convertUnit(a,b,e),e,d,f)};h.formatImperialLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredImperialLengthUnit(a,b);return k(c,g.convertUnit(a,b,e),e,d,f)};h.formatImperialRelativeLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredImperialLengthUnit(a,b);return m(c,g.convertUnit(a,b,e),e,d,f)};h.formatImperialRelativeVerticalLength=function(c,
a,b,d=2,f="abbr"){const e=g.preferredImperialVerticalLengthUnit(a,b);return m(c,g.convertUnit(a,b,e),e,d,f)};h.formatImperialVerticalLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredImperialVerticalLengthUnit(a,b);return k(c,g.convertUnit(a,b,e),e,d,f)};h.formatMetricArea=function(c,a,b,d=2,f="abbr"){const e=g.preferredMetricAreaUnit(a,b);return k(c,g.convertUnit(a,b,e),e,d,f)};h.formatMetricLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredMetricLengthUnit(a,b);return k(c,g.convertUnit(a,
b,e),e,d,f)};h.formatMetricRelativeLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredMetricLengthUnit(a,b);return m(c,g.convertUnit(a,b,e),e,d,f)};h.formatMetricRelativeVerticalLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredMetricVerticalLengthUnit(a,b);return m(c,g.convertUnit(a,b,e),e,d,f)};h.formatMetricVerticalLength=function(c,a,b,d=2,f="abbr"){const e=g.preferredMetricVerticalLengthUnit(a,b);return k(c,g.convertUnit(a,b,e),e,d,f)};h.formatRelativeAngleDegrees=function(c,a,b,d,f){b!==
d&&(c=-c);f=q.unwrapOr(f,2);b={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:f,minimumFractionDigits:f,signDisplay:"exceptZero"};c=g.convertUnit(c,a,"degrees")%360;c=r(c,b);return l.formatNumber(c,b)};h.formatRelativeDecimal=m;h.unitName=n;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});