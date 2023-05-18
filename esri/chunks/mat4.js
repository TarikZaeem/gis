// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","./vec3f64","./common"],function(v,O,K){function R(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function S(a,b,c,d,e,f,h,k,g,l,m,n,q,p,t,r,u){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=h;a[6]=k;a[7]=g;a[8]=l;a[9]=m;a[10]=n;a[11]=q;a[12]=p;a[13]=t;a[14]=r;a[15]=u;return a}function L(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=
0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function T(a,b){if(a===b){const c=b[1],d=b[2],e=b[3],f=b[6],h=b[7],k=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=f;a[11]=b[14];a[12]=e;a[13]=h;a[14]=k}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a}function U(a,b){P(a,b)||L(a);return a}function P(a,b){const c=b[0],
d=b[1],e=b[2],f=b[3],h=b[4],k=b[5],g=b[6],l=b[7],m=b[8],n=b[9],q=b[10],p=b[11],t=b[12],r=b[13],u=b[14];b=b[15];const A=c*k-d*h,w=c*g-e*h,x=c*l-f*h,y=d*g-e*k,z=d*l-f*k,D=e*l-f*g,E=m*r-n*t,F=m*u-q*t,G=m*b-p*t,H=n*u-q*r,I=n*b-p*r,J=q*b-p*u;let B=A*J-w*I+x*H+y*G-z*F+D*E;if(!B)return null;B=1/B;a[0]=(k*J-g*I+l*H)*B;a[1]=(e*I-d*J-f*H)*B;a[2]=(r*D-u*z+b*y)*B;a[3]=(q*z-n*D-p*y)*B;a[4]=(g*G-h*J-l*F)*B;a[5]=(c*J-e*G+f*F)*B;a[6]=(u*x-t*D-b*w)*B;a[7]=(m*D-q*x+p*w)*B;a[8]=(h*I-k*G+l*E)*B;a[9]=(d*G-c*I-f*E)*B;
a[10]=(t*z-r*x+b*A)*B;a[11]=(n*x-m*z-p*A)*B;a[12]=(k*F-h*H-g*E)*B;a[13]=(c*H-d*F+e*E)*B;a[14]=(r*w-t*y-u*A)*B;a[15]=(m*y-n*w+q*A)*B;return a}function V(a,b){const c=b[0],d=b[1],e=b[2],f=b[3],h=b[4],k=b[5],g=b[6],l=b[7],m=b[8],n=b[9],q=b[10],p=b[11],t=b[12],r=b[13],u=b[14];b=b[15];a[0]=k*(q*b-p*u)-n*(g*b-l*u)+r*(g*p-l*q);a[1]=-(d*(q*b-p*u)-n*(e*b-f*u)+r*(e*p-f*q));a[2]=d*(g*b-l*u)-k*(e*b-f*u)+r*(e*l-f*g);a[3]=-(d*(g*p-l*q)-k*(e*p-f*q)+n*(e*l-f*g));a[4]=-(h*(q*b-p*u)-m*(g*b-l*u)+t*(g*p-l*q));a[5]=c*
(q*b-p*u)-m*(e*b-f*u)+t*(e*p-f*q);a[6]=-(c*(g*b-l*u)-h*(e*b-f*u)+t*(e*l-f*g));a[7]=c*(g*p-l*q)-h*(e*p-f*q)+m*(e*l-f*g);a[8]=h*(n*b-p*r)-m*(k*b-l*r)+t*(k*p-l*n);a[9]=-(c*(n*b-p*r)-m*(d*b-f*r)+t*(d*p-f*n));a[10]=c*(k*b-l*r)-h*(d*b-f*r)+t*(d*l-f*k);a[11]=-(c*(k*p-l*n)-h*(d*p-f*n)+m*(d*l-f*k));a[12]=-(h*(n*u-q*r)-m*(k*u-g*r)+t*(k*q-g*n));a[13]=c*(n*u-q*r)-m*(d*u-e*r)+t*(d*q-e*n);a[14]=-(c*(k*u-g*r)-h*(d*u-e*r)+t*(d*g-e*k));a[15]=c*(k*q-g*n)-h*(d*q-e*n)+m*(d*g-e*k);return a}function W(a){const b=a[0],
c=a[1],d=a[2],e=a[3],f=a[4],h=a[5],k=a[6],g=a[7],l=a[8],m=a[9],n=a[10],q=a[11],p=a[12],t=a[13],r=a[14];a=a[15];return(b*h-c*f)*(n*a-q*r)-(b*k-d*f)*(m*a-q*t)+(b*g-e*f)*(m*r-n*t)+(c*k-d*h)*(l*a-q*p)-(c*g-e*h)*(l*r-n*p)+(d*g-e*k)*(l*t-m*p)}function M(a,b,c){const d=b[0],e=b[1],f=b[2],h=b[3],k=b[4],g=b[5],l=b[6],m=b[7],n=b[8],q=b[9],p=b[10],t=b[11],r=b[12],u=b[13],A=b[14];b=b[15];let w=c[0],x=c[1],y=c[2],z=c[3];a[0]=w*d+x*k+y*n+z*r;a[1]=w*e+x*g+y*q+z*u;a[2]=w*f+x*l+y*p+z*A;a[3]=w*h+x*m+y*t+z*b;w=c[4];
x=c[5];y=c[6];z=c[7];a[4]=w*d+x*k+y*n+z*r;a[5]=w*e+x*g+y*q+z*u;a[6]=w*f+x*l+y*p+z*A;a[7]=w*h+x*m+y*t+z*b;w=c[8];x=c[9];y=c[10];z=c[11];a[8]=w*d+x*k+y*n+z*r;a[9]=w*e+x*g+y*q+z*u;a[10]=w*f+x*l+y*p+z*A;a[11]=w*h+x*m+y*t+z*b;w=c[12];x=c[13];y=c[14];z=c[15];a[12]=w*d+x*k+y*n+z*r;a[13]=w*e+x*g+y*q+z*u;a[14]=w*f+x*l+y*p+z*A;a[15]=w*h+x*m+y*t+z*b;return a}function X(a,b,c){const d=c[0],e=c[1];c=c[2];if(b===a)a[12]=b[0]*d+b[4]*e+b[8]*c+b[12],a[13]=b[1]*d+b[5]*e+b[9]*c+b[13],a[14]=b[2]*d+b[6]*e+b[10]*c+b[14],
a[15]=b[3]*d+b[7]*e+b[11]*c+b[15];else{const f=b[0],h=b[1],k=b[2],g=b[3],l=b[4],m=b[5],n=b[6],q=b[7],p=b[8],t=b[9],r=b[10],u=b[11];a[0]=f;a[1]=h;a[2]=k;a[3]=g;a[4]=l;a[5]=m;a[6]=n;a[7]=q;a[8]=p;a[9]=t;a[10]=r;a[11]=u;a[12]=f*d+l*e+p*c+b[12];a[13]=h*d+m*e+t*c+b[13];a[14]=k*d+n*e+r*c+b[14];a[15]=g*d+q*e+u*c+b[15]}return a}function Y(a,b,c){const d=c[0],e=c[1];c=c[2];a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*e;a[5]=b[5]*e;a[6]=b[6]*e;a[7]=b[7]*e;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;
a[11]=b[11]*c;a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function Z(a,b,c,d){let e=d[0],f=d[1];d=d[2];let h=Math.sqrt(e*e+f*f+d*d);var k=void 0,g=void 0;let l=void 0,m=void 0,n=void 0,q=void 0,p=void 0,t=void 0,r=void 0,u=void 0,A=void 0,w=void 0,x=void 0,y=void 0,z=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0;g=k=void 0;if(h<K.getEpsilon())return null;h=1/h;e*=h;f*=h;d*=h;k=Math.sin(c);g=Math.cos(c);l=1-g;m=b[0];n=b[1];q=b[2];p=b[3];t=b[4];r=b[5];u=b[6];A=b[7];
w=b[8];x=b[9];y=b[10];z=b[11];D=e*e*l+g;E=f*e*l+d*k;F=d*e*l-f*k;G=e*f*l-d*k;H=f*f*l+g;I=d*f*l+e*k;J=e*d*l+f*k;k=f*d*l-e*k;g=d*d*l+g;a[0]=m*D+t*E+w*F;a[1]=n*D+r*E+x*F;a[2]=q*D+u*E+y*F;a[3]=p*D+A*E+z*F;a[4]=m*G+t*H+w*I;a[5]=n*G+r*H+x*I;a[6]=q*G+u*H+y*I;a[7]=p*G+A*H+z*I;a[8]=m*J+t*k+w*g;a[9]=n*J+r*k+x*g;a[10]=q*J+u*k+y*g;a[11]=p*J+A*k+z*g;b!==a&&(a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);return a}function aa(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[4],f=b[5],h=b[6],k=b[7],g=b[8],l=b[9],
m=b[10],n=b[11];b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[4]=e*c+g*d;a[5]=f*c+l*d;a[6]=h*c+m*d;a[7]=k*c+n*d;a[8]=g*c-e*d;a[9]=l*c-f*d;a[10]=m*c-h*d;a[11]=n*c-k*d;return a}function ba(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[0],f=b[1],h=b[2],k=b[3],g=b[8],l=b[9],m=b[10],n=b[11];b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c-g*d;a[1]=f*c-l*d;a[2]=h*c-m*d;a[3]=k*c-n*d;a[8]=e*
d+g*c;a[9]=f*d+l*c;a[10]=h*d+m*c;a[11]=k*d+n*c;return a}function ca(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[0],f=b[1],h=b[2],k=b[3],g=b[4],l=b[5],m=b[6],n=b[7];b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c+g*d;a[1]=f*c+l*d;a[2]=h*c+m*d;a[3]=k*c+n*d;a[4]=g*c-e*d;a[5]=l*c-f*d;a[6]=m*c-h*d;a[7]=n*c-k*d;return a}function da(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=b[0];a[13]=
b[1];a[14]=b[2];a[15]=1;return a}function ea(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b[1];a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=b[2];a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function fa(a,b,c){if(0===b)return L(a);let d=c[0],e=c[1];c=c[2];let f=Math.sqrt(d*d+e*e+c*c),h=void 0,k=void 0,g=void 0;if(f<K.getEpsilon())return null;f=1/f;d*=f;e*=f;c*=f;h=Math.sin(b);k=Math.cos(b);g=1-k;a[0]=d*d*g+k;a[1]=e*d*g+c*h;a[2]=c*d*g-e*h;a[3]=0;a[4]=d*e*g-c*h;a[5]=e*e*g+k;a[6]=c*e*g+d*h;a[7]=0;a[8]=d*
c*g+e*h;a[9]=e*c*g-d*h;a[10]=c*c*g+k;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ha(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=c;a[7]=0;a[8]=0;a[9]=-c;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ia(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=0;a[2]=-c;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=c;a[9]=0;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ja(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;
a[1]=c;a[2]=0;a[3]=0;a[4]=-c;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function Q(a,b,c){var d=b[0],e=b[1],f=b[2],h=b[3],k=d+d,g=e+e;const l=f+f;b=d*k;const m=d*g;d*=l;const n=e*g;e*=l;f*=l;k*=h;g*=h;h*=l;a[0]=1-(n+f);a[1]=m+h;a[2]=d-g;a[3]=0;a[4]=m-h;a[5]=1-(b+f);a[6]=e+k;a[7]=0;a[8]=d+g;a[9]=e-k;a[10]=1-(b+n);a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function ka(a,b){const c=Ia,d=-b[0],e=-b[1],f=-b[2],h=b[3],k=b[4],g=b[5],l=b[6],
m=b[7],n=d*d+e*e+f*f+h*h;0<n?(c[0]=2*(k*h+m*d+g*f-l*e)/n,c[1]=2*(g*h+m*e+l*d-k*f)/n,c[2]=2*(l*h+m*f+k*e-g*d)/n):(c[0]=2*(k*h+m*d+g*f-l*e),c[1]=2*(g*h+m*e+l*d-k*f),c[2]=2*(l*h+m*f+k*e-g*d));Q(a,b,c);return a}function la(a,b){a[0]=b[12];a[1]=b[13];a[2]=b[14];return a}function ma(a,b){const c=b[0],d=b[1],e=b[2],f=b[4],h=b[5],k=b[6],g=b[8],l=b[9];b=b[10];a[0]=Math.sqrt(c*c+d*d+e*e);a[1]=Math.sqrt(f*f+h*h+k*k);a[2]=Math.sqrt(g*g+l*l+b*b);return a}function na(a,b){const c=b[0]+b[5]+b[10];let d=0;0<c?(d=
2*Math.sqrt(c+1),a[3]=.25*d,a[0]=(b[6]-b[9])/d,a[1]=(b[8]-b[2])/d,a[2]=(b[1]-b[4])/d):b[0]>b[5]&&b[0]>b[10]?(d=2*Math.sqrt(1+b[0]-b[5]-b[10]),a[3]=(b[6]-b[9])/d,a[0]=.25*d,a[1]=(b[1]+b[4])/d,a[2]=(b[8]+b[2])/d):b[5]>b[10]?(d=2*Math.sqrt(1+b[5]-b[0]-b[10]),a[3]=(b[8]-b[2])/d,a[0]=(b[1]+b[4])/d,a[1]=.25*d,a[2]=(b[6]+b[9])/d):(d=2*Math.sqrt(1+b[10]-b[0]-b[5]),a[3]=(b[1]-b[4])/d,a[0]=(b[8]+b[2])/d,a[1]=(b[6]+b[9])/d,a[2]=.25*d);return a}function oa(a,b,c,d){var e=b[0],f=b[1],h=b[2],k=b[3],g=e+e,l=f+f,
m=h+h;b=e*g;const n=e*l;e*=m;const q=f*l;f*=m;h*=m;g*=k;l*=k;k*=m;m=d[0];const p=d[1];d=d[2];a[0]=(1-(q+h))*m;a[1]=(n+k)*m;a[2]=(e-l)*m;a[3]=0;a[4]=(n-k)*p;a[5]=(1-(b+h))*p;a[6]=(f+g)*p;a[7]=0;a[8]=(e+l)*d;a[9]=(f-g)*d;a[10]=(1-(b+q))*d;a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function pa(a,b,c,d,e){var f=b[0],h=b[1],k=b[2],g=b[3],l=f+f,m=h+h,n=k+k;b=f*l;var q=f*m,p=f*n;f=h*m;h*=n;var t=k*n;k=g*l;m*=g;const r=g*n;var u=d[0],A=d[1];n=d[2];d=e[0];g=e[1];e=e[2];l=(1-(f+t))*u;const w=
(q+r)*u;u*=p-m;q=(q-r)*A;t=(1-(b+t))*A;A*=h+k;p=(p+m)*n;h=(h-k)*n;b=(1-(b+f))*n;a[0]=l;a[1]=w;a[2]=u;a[3]=0;a[4]=q;a[5]=t;a[6]=A;a[7]=0;a[8]=p;a[9]=h;a[10]=b;a[11]=0;a[12]=c[0]+d-(l*d+q*g+p*e);a[13]=c[1]+g-(w*d+t*g+h*e);a[14]=c[2]+e-(u*d+A*g+b*e);a[15]=1;return a}function qa(a,b){var c=b[0],d=b[1],e=b[2];b=b[3];var f=c+c,h=d+d;const k=e+e;c*=f;const g=d*f;d*=h;const l=e*f,m=e*h;e*=k;f*=b;h*=b;b*=k;a[0]=1-d-e;a[1]=g+b;a[2]=l-h;a[3]=0;a[4]=g-b;a[5]=1-c-e;a[6]=m+f;a[7]=0;a[8]=l+h;a[9]=m-f;a[10]=1-c-
d;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ra(a,b,c,d,e,f,h){const k=1/(c-b),g=1/(e-d),l=1/(f-h);a[0]=2*f*k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*f*g;a[6]=0;a[7]=0;a[8]=(c+b)*k;a[9]=(e+d)*g;a[10]=(h+f)*l;a[11]=-1;a[12]=0;a[13]=0;a[14]=h*f*2*l;a[15]=0;return a}function sa(a,b,c,d,e){b=1/Math.tan(b/2);let f=void 0;a[0]=b/c;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[11]=-1;a[12]=0;a[13]=0;a[15]=0;null!=e&&Infinity!==e?(f=1/(d-e),a[10]=(e+d)*f,a[14]=2*e*d*f):(a[10]=
-1,a[14]=-2*d);return a}function ta(a,b,c,d){const e=Math.tan(b.upDegrees*Math.PI/180),f=Math.tan(b.downDegrees*Math.PI/180),h=Math.tan(b.leftDegrees*Math.PI/180);b=Math.tan(b.rightDegrees*Math.PI/180);const k=2/(h+b),g=2/(e+f);a[0]=k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=g;a[6]=0;a[7]=0;a[8]=-((h-b)*k*.5);a[9]=(e-f)*g*.5;a[10]=d/(c-d);a[11]=-1;a[12]=0;a[13]=0;a[14]=d*c/(c-d);a[15]=0;return a}function ua(a,b,c,d,e,f,h){const k=1/(b-c),g=1/(d-e),l=1/(f-h);a[0]=-2*k;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=-2*g;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=2*l;a[11]=0;a[12]=(b+c)*k;a[13]=(e+d)*g;a[14]=(h+f)*l;a[15]=1;return a}function va(a,b,c,d){var e=void 0;let f=void 0;var h=void 0,k=void 0;let g=void 0,l=void 0;var m=void 0,n=void 0;let q=void 0,p=void 0;const t=b[0],r=b[1];b=b[2];h=d[0];k=d[1];d=d[2];m=c[0];n=c[1];c=c[2];e=K.getEpsilon();if(Math.abs(t-m)<e&&Math.abs(r-n)<e&&Math.abs(b-c)<e)return L(a);m=t-m;n=r-n;q=b-c;p=1/Math.sqrt(m*m+n*n+q*q);m*=p;n*=p;q*=p;e=k*q-d*n;f=d*m-h*q;h=h*n-k*m;(p=Math.sqrt(e*e+f*f+
h*h))?(p=1/p,e*=p,f*=p,h*=p):h=f=e=0;k=n*h-q*f;g=q*e-m*h;l=m*f-n*e;(p=Math.sqrt(k*k+g*g+l*l))?(p=1/p,k*=p,g*=p,l*=p):l=g=k=0;a[0]=e;a[1]=k;a[2]=m;a[3]=0;a[4]=f;a[5]=g;a[6]=n;a[7]=0;a[8]=h;a[9]=l;a[10]=q;a[11]=0;a[12]=-(e*t+f*r+h*b);a[13]=-(k*t+g*r+l*b);a[14]=-(m*t+n*r+q*b);a[15]=1;return a}function wa(a,b,c,d){const e=b[0],f=b[1];b=b[2];var h=d[0];const k=d[1];var g=d[2];d=e-c[0];let l=f-c[1];c=b-c[2];let m=d*d+l*l+c*c;0<m&&(m=1/Math.sqrt(m),d*=m,l*=m,c*=m);let n=k*c-g*l;g=g*d-h*c;h=h*l-k*d;m=n*n+
g*g+h*h;0<m&&(m=1/Math.sqrt(m),n*=m,g*=m,h*=m);a[0]=n;a[1]=g;a[2]=h;a[3]=0;a[4]=l*h-c*g;a[5]=c*n-d*h;a[6]=d*g-l*n;a[7]=0;a[8]=d;a[9]=l;a[10]=c;a[11]=0;a[12]=e;a[13]=f;a[14]=b;a[15]=1;return a}function xa(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"}function ya(a){return Math.sqrt(a[0]**2+a[1]**2+a[2]**2+a[3]**2+a[4]**2+a[5]**2+a[6]**2+a[7]**2+a[8]**2+a[9]**2+a[10]**
2+a[11]**2+a[12]**2+a[13]**2+a[14]**2+a[15]**2)}function za(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];a[9]=b[9]+c[9];a[10]=b[10]+c[10];a[11]=b[11]+c[11];a[12]=b[12]+c[12];a[13]=b[13]+c[13];a[14]=b[14]+c[14];a[15]=b[15]+c[15];return a}function N(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-c[7];a[8]=b[8]-c[8];a[9]=b[9]-c[9];
a[10]=b[10]-c[10];a[11]=b[11]-c[11];a[12]=b[12]-c[12];a[13]=b[13]-c[13];a[14]=b[14]-c[14];a[15]=b[15]-c[15];return a}function Aa(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12]*c;a[13]=b[13]*c;a[14]=b[14]*c;a[15]=b[15]*c;return a}function Ba(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*
d;a[8]=b[8]+c[8]*d;a[9]=b[9]+c[9]*d;a[10]=b[10]+c[10]*d;a[11]=b[11]+c[11]*d;a[12]=b[12]+c[12]*d;a[13]=b[13]+c[13]*d;a[14]=b[14]+c[14]*d;a[15]=b[15]+c[15]*d;return a}function Ca(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]}function Da(a,b){if(a===b)return!0;const c=a[0],d=a[1],e=a[2],f=a[3],h=a[4],k=a[5],g=a[6],l=a[7],
m=a[8],n=a[9],q=a[10],p=a[11],t=a[12],r=a[13],u=a[14];a=a[15];const A=b[0],w=b[1],x=b[2],y=b[3],z=b[4],D=b[5],E=b[6],F=b[7],G=b[8],H=b[9],I=b[10],J=b[11],B=b[12],Ea=b[13],Fa=b[14];b=b[15];const C=K.getEpsilon();return Math.abs(c-A)<=C*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(d-w)<=C*Math.max(1,Math.abs(d),Math.abs(w))&&Math.abs(e-x)<=C*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(f-y)<=C*Math.max(1,Math.abs(f),Math.abs(y))&&Math.abs(h-z)<=C*Math.max(1,Math.abs(h),Math.abs(z))&&Math.abs(k-D)<=
C*Math.max(1,Math.abs(k),Math.abs(D))&&Math.abs(g-E)<=C*Math.max(1,Math.abs(g),Math.abs(E))&&Math.abs(l-F)<=C*Math.max(1,Math.abs(l),Math.abs(F))&&Math.abs(m-G)<=C*Math.max(1,Math.abs(m),Math.abs(G))&&Math.abs(n-H)<=C*Math.max(1,Math.abs(n),Math.abs(H))&&Math.abs(q-I)<=C*Math.max(1,Math.abs(q),Math.abs(I))&&Math.abs(p-J)<=C*Math.max(1,Math.abs(p),Math.abs(J))&&Math.abs(t-B)<=C*Math.max(1,Math.abs(t),Math.abs(B))&&Math.abs(r-Ea)<=C*Math.max(1,Math.abs(r),Math.abs(Ea))&&Math.abs(u-Fa)<=C*Math.max(1,
Math.abs(u),Math.abs(Fa))&&Math.abs(a-b)<=C*Math.max(1,Math.abs(a),Math.abs(b))}function Ga(a){const b=K.getEpsilon(),c=a[0],d=a[1],e=a[2],f=a[4],h=a[5],k=a[6],g=a[8],l=a[9];a=a[10];return Math.abs(1-(c*c+f*f+g*g))<=b&&Math.abs(1-(d*d+h*h+l*l))<=b&&Math.abs(1-(e*e+k*k+a*a))<=b}function Ha(a){return 1===a[0]&&0===a[1]&&0===a[2]&&0===a[4]&&1===a[5]&&0===a[6]&&0===a[8]&&0===a[9]&&1===a[10]}const Ia=O.create();O=Object.freeze(Object.defineProperty({__proto__:null,add:za,adjoint:V,copy:R,determinant:W,
equals:Da,exactEquals:Ca,frob:ya,fromQuat:qa,fromQuat2:ka,fromRotation:fa,fromRotationTranslation:Q,fromRotationTranslationScale:oa,fromRotationTranslationScaleOrigin:pa,fromScaling:ea,fromTranslation:da,fromXRotation:ha,fromYRotation:ia,fromZRotation:ja,frustum:ra,getRotation:na,getScaling:ma,getTranslation:la,hasIdentityRotation:Ha,identity:L,invert:P,invertOrIdentity:U,isOrthoNormal:Ga,lookAt:va,mul:M,multiply:M,multiplyScalar:Aa,multiplyScalarAndAdd:Ba,ortho:ua,perspective:sa,perspectiveFromFieldOfView:ta,
rotate:Z,rotateX:aa,rotateY:ba,rotateZ:ca,scale:Y,set:S,str:xa,sub:N,subtract:N,targetTo:wa,translate:X,transpose:T},Symbol.toStringTag,{value:"Module"}));v.add=za;v.adjoint=V;v.copy=R;v.determinant=W;v.equals=Da;v.exactEquals=Ca;v.frob=ya;v.fromQuat=qa;v.fromQuat2=ka;v.fromRotation=fa;v.fromRotationTranslation=Q;v.fromRotationTranslationScale=oa;v.fromRotationTranslationScaleOrigin=pa;v.fromScaling=ea;v.fromTranslation=da;v.fromXRotation=ha;v.fromYRotation=ia;v.fromZRotation=ja;v.frustum=ra;v.getRotation=
na;v.getScaling=ma;v.getTranslation=la;v.hasIdentityRotation=Ha;v.identity=L;v.invert=P;v.invertOrIdentity=U;v.isOrthoNormal=Ga;v.lookAt=va;v.mat4=O;v.mul=M;v.multiply=M;v.multiplyScalar=Aa;v.multiplyScalarAndAdd=Ba;v.ortho=ua;v.perspective=sa;v.perspectiveFromFieldOfView=ta;v.rotate=Z;v.rotateX=aa;v.rotateY=ba;v.rotateZ=ca;v.scale=Y;v.set=S;v.str=xa;v.sub=N;v.subtract=N;v.targetTo=wa;v.translate=X;v.transpose=T});