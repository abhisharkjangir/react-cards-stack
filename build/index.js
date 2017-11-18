module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( true ) {
  // AMD
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(){var t,e,n,r,i,o,s,a,l,u,f,h,c,p,m,d,g,y,v,b,w,x,M,k,S,T,C,F,H,R,q,X,Y,j,z,I,A,G,V,Z,E,O,L,D,P,W,N,$,B,U,K,J,Q,_,te,ee,ne=function(t,e){return function(){return t.apply(e,arguments)}};H=function(){return"visible"===document.visibilityState||null!=T.tests},j=function(){var t;return t=[],"undefined"!=typeof document&&null!==document&&document.addEventListener("visibilitychange",function(){var e,n,r,i;for(i=[],n=0,r=t.length;r>n;n++)e=t[n],i.push(e(H()));return i}),function(e){return t.push(e)}}(),x=function(t){var e,n,r;n={};for(e in t)r=t[e],n[e]=r;return n},b=function(t){var e;return e={},function(){var n,r,i,o,s;for(r="",o=0,s=arguments.length;s>o;o++)n=arguments[o],r+=n.toString()+",";return i=e[r],i||(e[r]=i=t.apply(this,arguments)),i}},Y=function(t){return function(e){var n,r,i;return e instanceof Array||e instanceof NodeList||e instanceof HTMLCollection?i=function(){var i,o,s;for(s=[],r=i=0,o=e.length;o>=0?o>i:i>o;r=o>=0?++i:--i)n=Array.prototype.slice.call(arguments,1),n.splice(0,0,e[r]),s.push(t.apply(this,n));return s}.apply(this,arguments):t.apply(this,arguments)}},d=function(t,e){var n,r,i;i=[];for(n in e)r=e[n],i.push(null!=t[n]?t[n]:t[n]=r);return i},g=function(t,e){var n,r,i;if(null!=t.style)return y(t,e);i=[];for(n in e)r=e[n],i.push(t[n]=r.format());return i},y=function(t,e){var n,r,i,o,s;e=z(e),o=[],n=R(t);for(r in e)s=e[r],_.contains(r)?o.push([r,s]):(s=null!=s.format?s.format():""+s+ee(r,s),n&&B.contains(r)?t.setAttribute(r,s):t.style[A(r)]=s);return o.length>0?n?(i=new l,i.applyProperties(o),t.setAttribute("transform",i.decompose().format())):(s=o.map(function(t){return te(t[0],t[1])}).join(" "),t.style[A("transform")]=s):void 0},R=function(t){var e,n;return"undefined"!=typeof SVGElement&&null!==SVGElement&&"undefined"!=typeof SVGSVGElement&&null!==SVGSVGElement?t instanceof SVGElement&&!(t instanceof SVGSVGElement):null!=(e=null!=(n=T.tests)&&"function"==typeof n.isSVG?n.isSVG(t):void 0)?e:!1},Z=function(t,e){var n;return n=Math.pow(10,e),Math.round(t*n)/n},u=function(){function t(t){var e,n,r;for(this.obj={},n=0,r=t.length;r>n;n++)e=t[n],this.obj[e]=1}return t.prototype.contains=function(t){return 1===this.obj[t]},t}(),Q=function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})},G=new u("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")),S=new u("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")),_=new u("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")),B=new u("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")),ee=function(t,e){return"number"!=typeof e?"":G.contains(t)?"px":S.contains(t)?"deg":""},te=function(t,e){var n,r;return n=(""+e).match(/^([0-9.-]*)([^0-9]*)$/),null!=n?(e=n[1],r=n[2]):e=parseFloat(e),e=Z(parseFloat(e),10),(null==r||""===r)&&(r=ee(t,e)),""+t+"("+e+r+")"},z=function(t){var e,n,r,i,o,s,a,l;r={};for(i in t)if(o=t[i],_.contains(i))if(n=i.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/),n&&n[2].length>0)r[i]=o;else for(l=["X","Y","Z"],s=0,a=l.length;a>s;s++)e=l[s],r[n[1]+e]=o;else r[i]=o;return r},k=function(t){var e;return e="opacity"===t?1:0,""+e+ee(t,e)},C=function(t,e){var n,r,i,o,s,u,f,h,c,p,m;if(o={},n=R(t),null!=t.style)for(s=window.getComputedStyle(t,null),f=0,c=e.length;c>f;f++)r=e[f],_.contains(r)?null==o.transform&&(i=n?new l(null!=(m=t.transform.baseVal.consolidate())?m.matrix:void 0):a.fromTransform(s[A("transform")]),o.transform=i.decompose()):(u=s[r],null==u&&B.contains(r)&&(u=t.getAttribute(r)),(""===u||null==u)&&(u=k(r)),o[r]=M(u));else for(h=0,p=e.length;p>h;h++)r=e[h],o[r]=M(t[r]);return o},M=function(t){var e,n,a,l,u;for(a=[i,r,o,s],l=0,u=a.length;u>l;l++)if(n=a[l],e=n.create(t),null!=e)return e;return null},o=function(){function t(t){this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this),this.obj=t}return t.prototype.interpolate=function(e,n){var r,i,o,s,a;s=this.obj,r=e.obj,o={};for(i in s)a=s[i],o[i]=null!=a.interpolate?a.interpolate(r[i],n):a;return new t(o)},t.prototype.format=function(){return this.obj},t.create=function(e){var n,r,i;if(e instanceof Object){r={};for(n in e)i=e[n],r[n]=M(i);return new t(r)}return null},t}(),s=function(){function t(t,e,n){this.prefix=e,this.suffix=n,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this),this.value=parseFloat(t)}return t.prototype.interpolate=function(e,n){var r,i;return i=this.value,r=e.value,new t((r-i)*n+i,e.prefix||this.prefix,e.suffix||this.suffix)},t.prototype.format=function(){return null==this.prefix&&null==this.suffix?Z(this.value,5):this.prefix+Z(this.value,5)+this.suffix},t.create=function(e){var n;return"string"!=typeof e?new t(e):(n=(""+e).match("([^0-9.+-]*)([0-9.+-]+)([^0-9.+-]*)"),null!=n?new t(n[2],n[1],n[3]):null)},t}(),r=function(){function t(t,e){this.values=t,this.sep=e,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n){var r,i,o,s,a,l;for(s=this.values,r=e.values,o=[],i=a=0,l=Math.min(s.length,r.length);l>=0?l>a:a>l;i=l>=0?++a:--a)o.push(null!=s[i].interpolate?s[i].interpolate(r[i],n):s[i]);return new t(o,this.sep)},t.prototype.format=function(){var t;return t=this.values.map(function(t){return null!=t.format?t.format():t}),null!=this.sep?t.join(this.sep):t},t.createFromArray=function(e,n){var r;return r=e.map(function(t){return M(t)||t}),r=r.filter(function(t){return null!=t}),new t(r,n)},t.create=function(e){var n,r,i,o,s;if(e instanceof Array)return t.createFromArray(e,null);if("string"==typeof e){for(i=[" ",",","|",";","/",":"],o=0,s=i.length;s>o;o++)if(r=i[o],n=e.split(r),n.length>1)return t.createFromArray(n,r);return null}},t}(),t=function(){function t(t,e){this.rgb=null!=t?t:{},this.format=e,this.toRgba=ne(this.toRgba,this),this.toRgb=ne(this.toRgb,this),this.toHex=ne(this.toHex,this)}return t.fromHex=function(e){var n,r;return n=e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i),null!=n&&(e="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),r=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),null!=r?new t({r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16),a:1},"hex"):null},t.fromRgb=function(e){var n,r;return n=e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/),null!=n?new t({r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(null!=(r=n[4])?r:1)},null!=n[4]?"rgba":"rgb"):null},t.componentToHex=function(t){var e;return e=t.toString(16),1===e.length?"0"+e:e},t.prototype.toHex=function(){return"#"+t.componentToHex(this.rgb.r)+t.componentToHex(this.rgb.g)+t.componentToHex(this.rgb.b)},t.prototype.toRgb=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},t.prototype.toRgba=function(){return"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", "+this.rgb.a+")"},t}(),i=function(){function e(t){this.color=t,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return e.prototype.interpolate=function(n,r){var i,o,s,a,l,u,f,h;for(a=this.color,i=n.color,s={},h=["r","g","b"],u=0,f=h.length;f>u;u++)o=h[u],l=Math.round((i.rgb[o]-a.rgb[o])*r+a.rgb[o]),s[o]=Math.min(255,Math.max(0,l));return o="a",l=Z((i.rgb[o]-a.rgb[o])*r+a.rgb[o],5),s[o]=Math.min(1,Math.max(0,l)),new e(new t(s,i.format))},e.prototype.format=function(){return"hex"===this.color.format?this.color.toHex():"rgb"===this.color.format?this.color.toRgb():"rgba"===this.color.format?this.color.toRgba():void 0},e.create=function(n){var r;if("string"==typeof n)return r=t.fromHex(n)||t.fromRgb(n),null!=r?new e(r):null},e}(),n=function(){function t(t){this.props=t,this.applyRotateCenter=ne(this.applyRotateCenter,this),this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n){var r,i,o,s,a,l,u,f,h,c,p,m;for(o={},c=["translate","scale","rotate"],s=0,f=c.length;f>s;s++)for(i=c[s],o[i]=[],r=a=0,p=this.props[i].length;p>=0?p>a:a>p;r=p>=0?++a:--a)o[i][r]=(e.props[i][r]-this.props[i][r])*n+this.props[i][r];for(r=l=1;2>=l;r=++l)o.rotate[r]=e.props.rotate[r];for(m=["skew"],u=0,h=m.length;h>u;u++)i=m[u],o[i]=(e.props[i]-this.props[i])*n+this.props[i];return new t(o)},t.prototype.format=function(){return"translate("+this.props.translate.join(",")+") rotate("+this.props.rotate.join(",")+") skewX("+this.props.skew+") scale("+this.props.scale.join(",")+")"},t.prototype.applyRotateCenter=function(t){var e,n,r,i,o,s;for(n=v.createSVGMatrix(),n=n.translate(t[0],t[1]),n=n.rotate(this.props.rotate[0]),n=n.translate(-t[0],-t[1]),r=new l(n),i=r.decompose().props.translate,s=[],e=o=0;1>=o;e=++o)s.push(this.props.translate[e]-=i[e]);return s},t}(),v="undefined"!=typeof document&&null!==document?document.createElementNS("http://www.w3.org/2000/svg","svg"):void 0,l=function(){function t(t){this.m=t,this.applyProperties=ne(this.applyProperties,this),this.decompose=ne(this.decompose,this),this.m||(this.m=v.createSVGMatrix())}return t.prototype.decompose=function(){var t,e,r,i,o;return i=new f([this.m.a,this.m.b]),o=new f([this.m.c,this.m.d]),t=i.length(),r=i.dot(o),i=i.normalize(),e=o.combine(i,1,-r).length(),new n({translate:[this.m.e,this.m.f],rotate:[180*Math.atan2(this.m.b,this.m.a)/Math.PI,this.rotateCX,this.rotateCY],scale:[t,e],skew:r/e*180/Math.PI})},t.prototype.applyProperties=function(t){var e,n,r,i,o,s,a,l;for(e={},o=0,s=t.length;s>o;o++)r=t[o],e[r[0]]=r[1];for(n in e)i=e[n],"translateX"===n?this.m=this.m.translate(i,0):"translateY"===n?this.m=this.m.translate(0,i):"scaleX"===n?this.m=this.m.scale(i,1):"scaleY"===n?this.m=this.m.scale(1,i):"rotateZ"===n?this.m=this.m.rotate(i):"skewX"===n?this.m=this.m.skewX(i):"skewY"===n&&(this.m=this.m.skewY(i));return this.rotateCX=null!=(a=e.rotateCX)?a:0,this.rotateCY=null!=(l=e.rotateCY)?l:0},t}(),f=function(){function t(t){this.els=t,this.combine=ne(this.combine,this),this.normalize=ne(this.normalize,this),this.length=ne(this.length,this),this.cross=ne(this.cross,this),this.dot=ne(this.dot,this),this.e=ne(this.e,this)}return t.prototype.e=function(t){return 1>t||t>this.els.length?null:this.els[t-1]},t.prototype.dot=function(t){var e,n,r;if(e=t.els||t,r=0,n=this.els.length,n!==e.length)return null;for(n+=1;--n;)r+=this.els[n-1]*e[n-1];return r},t.prototype.cross=function(e){var n,r;return r=e.els||e,3!==this.els.length||3!==r.length?null:(n=this.els,new t([n[1]*r[2]-n[2]*r[1],n[2]*r[0]-n[0]*r[2],n[0]*r[1]-n[1]*r[0]]))},t.prototype.length=function(){var t,e,n,r,i;for(t=0,i=this.els,n=0,r=i.length;r>n;n++)e=i[n],t+=Math.pow(e,2);return Math.sqrt(t)},t.prototype.normalize=function(){var e,n,r,i,o;r=this.length(),i=[],o=this.els;for(n in o)e=o[n],i[n]=e/r;return new t(i)},t.prototype.combine=function(e,n,r){var i,o,s,a;for(o=[],i=s=0,a=this.els.length;a>=0?a>s:s>a;i=a>=0?++s:--s)o[i]=n*this.els[i]+r*e.els[i];return new t(o)},t}(),e=function(){function t(){this.toMatrix=ne(this.toMatrix,this),this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n,r){var i,o,s,a,l,u,f,h,c,p,m,d,g,y,v,b,w,x;for(null==r&&(r=null),s=this,o=new t,w=["translate","scale","skew","perspective"],d=0,b=w.length;b>d;d++)for(f=w[d],o[f]=[],a=g=0,x=s[f].length-1;x>=0?x>=g:g>=x;a=x>=0?++g:--g)o[f][a]=null==r||r.indexOf(f)>-1||r.indexOf(""+f+["x","y","z"][a])>-1?(e[f][a]-s[f][a])*n+s[f][a]:s[f][a];if(null==r||-1!==r.indexOf("rotate")){if(h=s.quaternion,c=e.quaternion,i=h[0]*c[0]+h[1]*c[1]+h[2]*c[2]+h[3]*c[3],0>i){for(a=y=0;3>=y;a=++y)h[a]=-h[a];i=-i}for(i+1>.05?1-i>=.05?(m=Math.acos(i),u=1/Math.sin(m),p=Math.sin(m*(1-n))*u,l=Math.sin(m*n)*u):(p=1-n,l=n):(c[0]=-h[1],c[1]=h[0],c[2]=-h[3],c[3]=h[2],p=Math.sin(piDouble*(.5-n)),l=Math.sin(piDouble*n)),o.quaternion=[],a=v=0;3>=v;a=++v)o.quaternion[a]=h[a]*p+c[a]*l}else o.quaternion=s.quaternion;return o},t.prototype.format=function(){return this.toMatrix().toString()},t.prototype.toMatrix=function(){var t,e,n,r,i,o,s,l,u,f,h,c,p,m,d,g;for(t=this,i=a.I(4),e=p=0;3>=p;e=++p)i.els[e][3]=t.perspective[e];for(o=t.quaternion,f=o[0],h=o[1],c=o[2],u=o[3],s=t.skew,r=[[1,0],[2,0],[2,1]],e=m=2;m>=0;e=--m)s[e]&&(l=a.I(4),l.els[r[e][0]][r[e][1]]=s[e],i=i.multiply(l));for(i=i.multiply(new a([[1-2*(h*h+c*c),2*(f*h-c*u),2*(f*c+h*u),0],[2*(f*h+c*u),1-2*(f*f+c*c),2*(h*c-f*u),0],[2*(f*c-h*u),2*(h*c+f*u),1-2*(f*f+h*h),0],[0,0,0,1]])),e=d=0;2>=d;e=++d){for(n=g=0;2>=g;n=++g)i.els[e][n]*=t.scale[e];i.els[3][e]=t.translate[e]}return i},t}(),a=function(){function t(t){this.els=t,this.toString=ne(this.toString,this),this.decompose=ne(this.decompose,this),this.inverse=ne(this.inverse,this),this.augment=ne(this.augment,this),this.toRightTriangular=ne(this.toRightTriangular,this),this.transpose=ne(this.transpose,this),this.multiply=ne(this.multiply,this),this.dup=ne(this.dup,this),this.e=ne(this.e,this)}return t.prototype.e=function(t,e){return 1>t||t>this.els.length||1>e||e>this.els[0].length?null:this.els[t-1][e-1]},t.prototype.dup=function(){return new t(this.els)},t.prototype.multiply=function(e){var n,r,i,o,s,a,l,u,f,h,c,p,m;for(p=e.modulus?!0:!1,n=e.els||e,"undefined"==typeof n[0][0]&&(n=new t(n).els),h=this.els.length,l=h,u=n[0].length,i=this.els[0].length,o=[],h+=1;--h;)for(s=l-h,o[s]=[],c=u,c+=1;--c;){for(a=u-c,m=0,f=i,f+=1;--f;)r=i-f,m+=this.els[s][r]*n[r][a];o[s][a]=m}return n=new t(o),p?n.col(1):n},t.prototype.transpose=function(){var e,n,r,i,o,s,a;for(a=this.els.length,e=this.els[0].length,n=[],o=e,o+=1;--o;)for(r=e-o,n[r]=[],s=a,s+=1;--s;)i=a-s,n[r][i]=this.els[i][r];return new t(n)},t.prototype.toRightTriangular=function(){var t,e,n,r,i,o,s,a,l,u,f,h,c,p;for(t=this.dup(),a=this.els.length,i=a,o=this.els[0].length;--a;){if(n=i-a,0===t.els[n][n])for(r=f=c=n+1;i>=c?i>f:f>i;r=i>=c?++f:--f)if(0!==t.els[r][n]){for(e=[],l=o,l+=1;--l;)u=o-l,e.push(t.els[n][u]+t.els[r][u]);t.els[n]=e;break}if(0!==t.els[n][n])for(r=h=p=n+1;i>=p?i>h:h>i;r=i>=p?++h:--h){for(s=t.els[r][n]/t.els[n][n],e=[],l=o,l+=1;--l;)u=o-l,e.push(n>=u?0:t.els[r][u]-t.els[n][u]*s);t.els[r]=e}}return t},t.prototype.augment=function(e){var n,r,i,o,s,a,l,u,f;if(n=e.els||e,"undefined"==typeof n[0][0]&&(n=new t(n).els),r=this.dup(),i=r.els[0].length,u=r.els.length,a=u,l=n[0].length,u!==n.length)return null;for(u+=1;--u;)for(o=a-u,f=l,f+=1;--f;)s=l-f,r.els[o][i+s]=n[o][s];return r},t.prototype.inverse=function(){var e,n,r,i,o,s,a,l,u,f,h,c,p;for(f=this.els.length,a=f,e=this.augment(t.I(f)).toRightTriangular(),l=e.els[0].length,o=[],f+=1;--f;){for(i=f-1,r=[],h=l,o[i]=[],n=e.els[i][i],h+=1;--h;)c=l-h,u=e.els[i][c]/n,r.push(u),c>=a&&o[i].push(u);for(e.els[i]=r,s=p=0;i>=0?i>p:p>i;s=i>=0?++p:--p){for(r=[],h=l,h+=1;--h;)c=l-h,r.push(e.els[s][c]-e.els[i][c]*e.els[s][i]);e.els[s]=r}}return new t(o)},t.I=function(e){var n,r,i,o,s;for(n=[],o=e,e+=1;--e;)for(r=o-e,n[r]=[],s=o,s+=1;--s;)i=o-s,n[r][i]=r===i?1:0;return new t(n)},t.prototype.decompose=function(){var t,n,r,i,o,s,a,l,u,h,c,p,m,d,g,y,v,b,w,x,M,k,S,T,C,F,H,R,q,X,Y,j,z,I,A,G,V,Z;for(s=this,x=[],v=[],b=[],h=[],l=[],t=[],n=q=0;3>=q;n=++q)for(t[n]=[],i=X=0;3>=X;i=++X)t[n][i]=s.els[n][i];if(0===t[3][3])return!1;for(n=Y=0;3>=Y;n=++Y)for(i=j=0;3>=j;i=++j)t[n][i]/=t[3][3];for(u=s.dup(),n=z=0;2>=z;n=++z)u.els[n][3]=0;if(u.els[3][3]=1,0!==t[0][3]||0!==t[1][3]||0!==t[2][3]){for(p=new f(t.slice(0,4)[3]),r=u.inverse(),M=r.transpose(),l=M.multiply(p).els,n=I=0;2>=I;n=++I)t[n][3]=0;t[3][3]=1}else l=[0,0,0,1];for(n=A=0;2>=A;n=++A)x[n]=t[3][n],t[3][n]=0;for(d=[],n=G=0;2>=G;n=++G)d[n]=new f(t[n].slice(0,3));if(v[0]=d[0].length(),d[0]=d[0].normalize(),b[0]=d[0].dot(d[1]),d[1]=d[1].combine(d[0],1,-b[0]),v[1]=d[1].length(),d[1]=d[1].normalize(),b[0]/=v[1],b[1]=d[0].dot(d[2]),d[2]=d[2].combine(d[0],1,-b[1]),b[2]=d[1].dot(d[2]),d[2]=d[2].combine(d[1],1,-b[2]),v[2]=d[2].length(),d[2]=d[2].normalize(),b[1]/=v[2],b[2]/=v[2],a=d[1].cross(d[2]),d[0].dot(a)<0)for(n=V=0;2>=V;n=++V)for(v[n]*=-1,i=Z=0;2>=Z;i=++Z)d[n].els[i]*=-1;g=function(t,e){return d[t].els[e]},m=[],m[1]=Math.asin(-g(0,2)),0!==Math.cos(m[1])?(m[0]=Math.atan2(g(1,2),g(2,2)),m[2]=Math.atan2(g(0,1),g(0,0))):(m[0]=Math.atan2(-g(2,0),g(1,1)),m[1]=0),w=g(0,0)+g(1,1)+g(2,2)+1,w>1e-4?(y=.5/Math.sqrt(w),C=.25/y,F=(g(2,1)-g(1,2))*y,H=(g(0,2)-g(2,0))*y,R=(g(1,0)-g(0,1))*y):g(0,0)>g(1,1)&&g(0,0)>g(2,2)?(y=2*Math.sqrt(1+g(0,0)-g(1,1)-g(2,2)),F=.25*y,H=(g(0,1)+g(1,0))/y,R=(g(0,2)+g(2,0))/y,C=(g(2,1)-g(1,2))/y):g(1,1)>g(2,2)?(y=2*Math.sqrt(1+g(1,1)-g(0,0)-g(2,2)),F=(g(0,1)+g(1,0))/y,H=.25*y,R=(g(1,2)+g(2,1))/y,C=(g(0,2)-g(2,0))/y):(y=2*Math.sqrt(1+g(2,2)-g(0,0)-g(1,1)),F=(g(0,2)+g(2,0))/y,H=(g(1,2)+g(2,1))/y,R=.25*y,C=(g(1,0)-g(0,1))/y),h=[F,H,R,C],c=new e,c.translate=x,c.scale=v,c.skew=b,c.quaternion=h,c.perspective=l,c.rotate=m;for(S in c){k=c[S];for(o in k)T=k[o],isNaN(T)&&(k[o]=0)}return c},t.prototype.toString=function(){var t,e,n,r,i;for(n="matrix3d(",t=r=0;3>=r;t=++r)for(e=i=0;3>=i;e=++i)n+=Z(this.els[t][e],10),(3!==t||3!==e)&&(n+=",");return n+=")"},t.matrixForTransform=b(function(t){var e,n,r,i,o,s;return e=document.createElement("div"),e.style.position="absolute",e.style.visibility="hidden",e.style[A("transform")]=t,document.body.appendChild(e),r=window.getComputedStyle(e,null),n=null!=(i=null!=(o=r.transform)?o:r[A("transform")])?i:null!=(s=T.tests)?s.matrixForTransform(t):void 0,document.body.removeChild(e),n}),t.fromTransform=function(e){var n,r,i,o,s,a;for(o=null!=e?e.match(/matrix3?d?\(([-0-9,e \.]*)\)/):void 0,o?(n=o[1].split(","),n=n.map(parseFloat),r=6===n.length?[n[0],n[1],0,0,n[2],n[3],0,0,0,0,1,0,n[4],n[5],0,1]:n):r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s=[],i=a=0;3>=a;i=++a)s.push(r.slice(4*i,4*i+4));return new t(s)},t}(),I=b(function(t){var e,n,r,i,o,s,a,l,u,f;if(void 0!==document.body.style[t])return"";for(i=t.split("-"),o="",s=0,l=i.length;l>s;s++)r=i[s],o+=r.substring(0,1).toUpperCase()+r.substring(1);for(f=["Webkit","Moz","ms"],a=0,u=f.length;u>a;a++)if(n=f[a],e=n+o,void 0!==document.body.style[e])return n;return""}),A=b(function(t){var e;return e=I(t),"Moz"===e?""+e+(t.substring(0,1).toUpperCase()+t.substring(1)):""!==e?"-"+e.toLowerCase()+"-"+Q(t):Q(t)}),V="undefined"!=typeof window&&null!==window?window.requestAnimationFrame:void 0,p=[],m=[],P=!1,W=1,"undefined"!=typeof window&&null!==window&&window.addEventListener("keyup",function(t){return 68===t.keyCode&&t.shiftKey&&t.ctrlKey?T.toggleSlow():void 0}),null==V&&(q=0,V=function(t){var e,n,r;return e=Date.now(),r=Math.max(0,16-(e-q)),n=window.setTimeout(function(){return t(e+r)},r),q=e+r,n}),O=!1,E=!1,$=function(){return O?void 0:(O=!0,V(L))},L=function(t){var e,n,r,i;if(E)return void V(L);for(n=[],r=0,i=p.length;i>r;r++)e=p[r],c(t,e)||n.push(e);return p=p.filter(function(t){return-1===n.indexOf(t)}),0===p.length?O=!1:V(L)},c=function(t,e){var n,r,i,o,s,a,l,u;if(null==e.tStart&&(e.tStart=t),o=(t-e.tStart)/e.options.duration,s=e.curve(o),r={},o>=1)r=e.curve.initialForce?e.properties.start:e.properties.end;else{u=e.properties.start;for(n in u)i=u[n],r[n]=F(i,e.properties.end[n],s)}return g(e.el,r),"function"==typeof(a=e.options).change&&a.change(e.el),o>=1&&"function"==typeof(l=e.options).complete&&l.complete(e.el),1>o},F=function(t,e,n){return null!=t&&null!=t.interpolate?t.interpolate(e,n):null},N=function(t,e,n,r){var i,o,u,f,h,c,d,g;if(null!=r&&(m=m.filter(function(t){return t.id!==r})),T.stop(t,{timeout:!1}),!n.animated)return T.css(t,e),void("function"==typeof n.complete&&n.complete(this));e=z(e),h=C(t,Object.keys(e)),i={},c=[];for(u in e)d=e[u],_.contains(u)?c.push([u,d]):(i[u]=M(d),i[u]instanceof s&&null!=t.style&&(i[u].prefix="",null==(g=i[u]).suffix&&(g.suffix=ee(u,0))));return c.length>0&&(o=R(t),o?(f=new l,f.applyProperties(c)):(d=c.map(function(t){return te(t[0],t[1])}).join(" "),f=a.fromTransform(a.matrixForTransform(d))),i.transform=f.decompose(),o&&h.transform.applyRotateCenter([i.transform.props.rotate[1],i.transform.props.rotate[2]])),p.push({el:t,properties:{start:h,end:i},options:n,curve:n.type.call(n.type,n)}),$()},J=[],K=0,D=function(t){return H()?t.realTimeoutId=setTimeout(function(){return t.fn(),w(t.id)},t.delay):void 0},h=function(t,e){var n;return K+=1,n={id:K,tStart:Date.now(),fn:t,delay:e,originalDelay:e},D(n),J.push(n),K},w=function(t){return J=J.filter(function(e){return e.id===t&&clearTimeout(e.realTimeoutId),e.id!==t})},X=function(t,e){var n;return null!=t?(n=t-e.tStart,e.originalDelay-n):e.originalDelay},"undefined"!=typeof window&&null!==window&&window.addEventListener("unload",function(){}),U=null,j(function(t){var e,n,r,i,o,s,a,l,u,f;if(E=!t,t){if(O)for(n=Date.now()-U,o=0,l=p.length;l>o;o++)e=p[o],null!=e.tStart&&(e.tStart+=n);for(s=0,u=J.length;u>s;s++)r=J[s],r.delay=X(U,r),D(r);return U=null}for(U=Date.now(),f=[],i=0,a=J.length;a>i;i++)r=J[i],f.push(clearTimeout(r.realTimeoutId));return f}),T={},T.linear=function(){return function(t){return t}},T.spring=function(t){var e,n,r,i,o,s;return null==t&&(t={}),d(t,arguments.callee.defaults),i=Math.max(1,t.frequency/20),o=Math.pow(20,t.friction/100),s=t.anticipationSize/1e3,r=Math.max(0,s),e=function(e){var n,r,i,o,a;return n=.8,o=s/(1-s),a=0,i=(o-n*a)/(o-a),r=(n-i)/o,r*e*t.anticipationStrength/100+i},n=function(t){return Math.pow(o/10,-t)*(1-t)},function(t){var r,o,a,l,u,f,h,c;return f=t/(1-s)-s/(1-s),s>t?(c=s/(1-s)-s/(1-s),h=0/(1-s)-s/(1-s),u=Math.acos(1/e(c)),a=(Math.acos(1/e(h))-u)/(i*-s),r=e):(r=n,u=0,a=1),o=r(f),l=i*(t-s)*a+u,1-o*Math.cos(l)}},T.bounce=function(t){var e,n,r,i;return null==t&&(t={}),d(t,arguments.callee.defaults),r=Math.max(1,t.frequency/20),i=Math.pow(20,t.friction/100),e=function(t){return Math.pow(i/10,-t)*(1-t)},n=function(t){var n,i,o,s;return s=-1.57,i=1,n=e(t),o=r*t*i+s,n*Math.cos(o)},n.initialForce=!0,n},T.gravity=function(t){var e,n,r,i,o,s,a;return null==t&&(t={}),d(t,arguments.callee.defaults),n=Math.min(t.bounciness/1250,.8),i=t.elasticity/1e3,a=100,r=[],e=function(){var r,i;for(r=Math.sqrt(2/a),i={a:-r,b:r,H:1},t.initialForce&&(i.a=0,i.b=2*i.b);i.H>.001;)e=i.b-i.a,i={a:i.b,b:i.b+e*n,H:i.H*n*n};return i.b}(),s=function(n,r,i,o){var s,a;return e=r-n,a=2/e*o-1-2*n/e,s=a*a*i-i+1,t.initialForce&&(s=1-s),s},function(){var o,s,l,u;for(s=Math.sqrt(2/(a*e*e)),l={a:-s,b:s,H:1},t.initialForce&&(l.a=0,l.b=2*l.b),r.push(l),o=e,u=[];l.b<1&&l.H>.001;)o=l.b-l.a,l={a:l.b,b:l.b+o*n,H:l.H*i},u.push(r.push(l));return u}(),o=function(e){var n,i,o;for(i=0,n=r[i];!(e>=n.a&&e<=n.b)&&(i+=1,n=r[i]););return o=n?s(n.a,n.b,n.H,e):t.initialForce?0:1},o.initialForce=t.initialForce,o},T.forceWithGravity=function(t){return null==t&&(t={}),d(t,arguments.callee.defaults),t.initialForce=!0,T.gravity(t)},T.bezier=function(){var t,e,n;return e=function(t,e,n,r,i){return Math.pow(1-t,3)*e+3*Math.pow(1-t,2)*t*n+3*(1-t)*Math.pow(t,2)*r+Math.pow(t,3)*i},t=function(t,n,r,i,o){return{x:e(t,n.x,r.x,i.x,o.x),y:e(t,n.y,r.y,i.y,o.y)}},n=function(t,e,n){var r,i,o,s,a,l,u,f,h,c;for(r=null,h=0,c=e.length;c>h&&(i=e[h],t>=i(0).x&&t<=i(1).x&&(r=i),null===r);h++);if(!r)return n?0:1;for(f=1e-4,s=0,l=1,a=(l+s)/2,u=r(a).x,o=0;Math.abs(t-u)>f&&100>o;)t>u?s=a:l=a,a=(l+s)/2,u=r(a).x,o+=1;return r(a).y},function(e){var r,i,o;return null==e&&(e={}),i=e.points,o=!1,r=function(){var e,n,o;r=[],o=function(e,n){var i;return i=function(r){return t(r,e,e.cp[e.cp.length-1],n.cp[0],n)},r.push(i)};for(e in i){if(n=parseInt(e),n>=i.length-1)break;o(i[n],i[n+1])}return r}(),function(t){return 0===t?0:1===t?1:n(t,r,o)}}}(),T.easeInOut=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:.92-e/1e3,y:0}]},{x:1,y:1,cp:[{x:.08+e/1e3,y:1}]}]})},T.easeIn=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:.92-e/1e3,y:0}]},{x:1,y:1,cp:[{x:1,y:1}]}]})},T.easeOut=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:0,y:0}]},{x:1,y:1,cp:[{x:.08+e/1e3,y:1}]}]})},T.spring.defaults={frequency:300,friction:200,anticipationSize:0,anticipationStrength:0},T.bounce.defaults={frequency:300,friction:200},T.forceWithGravity.defaults=T.gravity.defaults={bounciness:400,elasticity:200},T.easeInOut.defaults=T.easeIn.defaults=T.easeOut.defaults={friction:500},T.css=Y(function(t,e){return y(t,e,!0)}),T.animate=Y(function(t,e,n){var r;return null==n&&(n={}),n=x(n),d(n,{type:T.easeInOut,duration:1e3,delay:0,animated:!0}),n.duration=Math.max(0,n.duration*W),n.delay=Math.max(0,n.delay),0===n.delay?N(t,e,n):(r=T.setTimeout(function(){return N(t,e,n,r)},n.delay),m.push({id:r,el:t}))}),T.stop=Y(function(t,e){return null==e&&(e={}),null==e.timeout&&(e.timeout=!0),e.timeout&&(m=m.filter(function(n){return n.el!==t||null!=e.filter&&!e.filter(n)?!1:(T.clearTimeout(n.id),!0)})),p=p.filter(function(e){return e.el!==t})}),T.setTimeout=function(t,e){return h(t,e*W)},T.clearTimeout=function(t){return w(t)},T.toggleSlow=function(){return P=!P,W=P?3:1,"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log("dynamics.js: slow animations "+(P?"enabled":"disabled")):void 0},"object"==typeof module&&"object"==typeof module.exports?module.exports=T: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return T}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.dynamics=T}).call(this);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-prefixed !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in C){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?x.className.baseVal=n:x.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!P.style;)p=!0,P.modElem=f(y.shift()),P.style=P.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=P.style[v],a(v,"-")&&(v=s(v)),P.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{P.style[v]=o}catch(g){}if(P.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var x=n.documentElement,w="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=E;var N=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=N;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),i(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * stack.js
 * http://www.imabhi.in
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(); }
			};
			if( support.animations ) {
				el.addEventListener( animEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		};

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Stack(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this.items = [].slice.call(this.el.children);
		this.itemsTotal = this.items.length;
		if( this.options.infinite && this.options.visible >= this.itemsTotal || !this.options.infinite && this.options.visible > this.itemsTotal || this.options.visible <=0 ) {
			this.options.visible = 1;
		}
		this.current = 0;
		this._init();
	}

	Stack.prototype.options = {
		// stack's perspective value
		perspective: 1000,
		// stack's perspective origin
		perspectiveOrigin : '50% -50%',
		// number of visible items in the stack
		visible : 3,
		// infinite navigation
		infinite : true,
		// callback: when reaching the end of the stack
		onEndStack : function() {return false;},
		// animation settings for the items' movements in the stack when the items rearrange
		// object that is passed to the dynamicsjs animate function (see more at http://dynamicsjs.com/)
		// example:
		// {type: dynamics.spring,duration: 1641,frequency: 557,friction: 459,anticipationSize: 206,anticipationStrength: 392}
		stackItemsAnimation : {
			duration : 500,
			type : dynamics.bezier,
			points : [{'x':0,'y':0,'cp':[{'x':0.25,'y':0.1}]},{'x':1,'y':1,'cp':[{'x':0.25,'y':1}]}]
		},
		// delay for the items' rearrangement / delay before stackItemsAnimation is applied
		stackItemsAnimationDelay : 0,
		// animation settings for the items' movements in the stack before the rearrangement
		// we can set up different settings depending on whether we are approving or rejecting an item
		/*
		stackItemsPreAnimation : {
			reject : {
				// if true, then the settings.properties parameter will be distributed through the items in a non equal fashion
				// for instance, if we set settings.properties = {translateX:100} and we have options.visible = 4,
				// then the second item in the stack will translate 100px, the second one 75px and the third 50px
				elastic : true,
				// object that is passed into the dynamicsjs animate function - second parameter -  (see more at http://dynamicsjs.com/)
				animationProperties : {},
				// object that is passed into the dynamicsjs animate function - third parameter - (see more at http://dynamicsjs.com/)
				animationSettings : {}
			},
			accept : {
				// if true, then the settings.properties parameter will be distributed through the items in a non equal fashion
				// for instance, if we set settings.properties = {translateX:100} and we have options.visible = 4,
				// then the second item on the stack will translate 100px, the second one 75px and the third 50px
				elastic : true,
				// object that is passed into the dynamicsjs animate function - second parameter -  (see more at http://dynamicsjs.com/)
				animationProperties : {},
				// object that is passed into the dynamicsjs animate function (see more at http://dynamicsjs.com/)
				animationSettings : {}
			}
		}
		*/
	};

	// set the initial styles for the visible items
	Stack.prototype._init = function() {
		// set default styles
		// first, the stack
		this.el.style.WebkitPerspective = this.el.style.perspective = this.options.perspective + 'px';
		this.el.style.WebkitPerspectiveOrigin = this.el.style.perspectiveOrigin = this.options.perspectiveOrigin;

		var self = this;

		// the items
		for(var i = 0; i < this.itemsTotal; ++i) {
			var item = this.items[i];
			if( i < this.options.visible ) {
				item.style.opacity = 1;
				item.style.pointerEvents = 'auto';
				item.style.zIndex = i === 0 ? parseInt(this.options.visible + 1) : parseInt(this.options.visible - i);
				item.style.WebkitTransform = item.style.transform = 'translate3d(0px, 0px, ' + parseInt(-1 * 50 * i) + 'px)';
			}
			else {
				item.style.WebkitTransform = item.style.transform = 'translate3d(0,0,-' + parseInt(this.options.visible * 50) + 'px)';
			}
		}

		classie.add(this.items[this.current], 'stack__item--current');
	};

	Stack.prototype.reject = function(callback) {
		this._next('reject', callback);
	};

	Stack.prototype.accept = function(callback) {
		this._next('accept', callback);
	};

	Stack.prototype.restart = function() {
		this.hasEnded = false;
		this._init();
	};

	Stack.prototype._next = function(action, callback) {
		if( this.isAnimating || ( !this.options.infinite && this.hasEnded ) ) return;
		this.isAnimating = true;

		// current item
		var currentItem = this.items[this.current];
		classie.remove(currentItem, 'stack__item--current');

		// add animation class
		classie.add(currentItem, action === 'accept' ? 'stack__item--accept' : 'stack__item--reject');

		var self = this;
		onEndAnimation(currentItem, function() {
			// reset current item
			currentItem.style.opacity = 0;
			currentItem.style.pointerEvents = 'none';
			currentItem.style.zIndex = -1;
			currentItem.style.WebkitTransform = currentItem.style.transform = 'translate3d(0px, 0px, -' + parseInt(self.options.visible * 50) + 'px)';

			classie.remove(currentItem, action === 'accept' ? 'stack__item--accept' : 'stack__item--reject');

			self.items[self.current].style.zIndex = self.options.visible + 1;
			self.isAnimating = false;

			if( callback ) callback();

			if( !self.options.infinite && self.current === 0 ) {
				self.hasEnded = true;
				// callback
				self.options.onEndStack(self);
			}
		});

		// set style for the other items
		for(var i = 0; i < this.itemsTotal; ++i) {
			if( i >= this.options.visible ) break;

			if( !this.options.infinite ) {
				if( this.current + i >= this.itemsTotal - 1 ) break;
				var pos = this.current + i + 1;
			}
			else {
				var pos = this.current + i < this.itemsTotal - 1 ? this.current + i + 1 : i - (this.itemsTotal - this.current - 1);
			}

			var item = this.items[pos],
				// stack items animation
				animateStackItems = function(item, i) {
					item.style.pointerEvents = 'auto';
					item.style.opacity = 1;
					item.style.zIndex = parseInt(self.options.visible - i);

					dynamics.animate(item, {
						translateZ : parseInt(-1 * 50 * i)
					}, self.options.stackItemsAnimation);
				};

			setTimeout(function(item,i) {
				return function() {
					var preAnimation;

					if( self.options.stackItemsPreAnimation ) {
						preAnimation = action === 'accept' ? self.options.stackItemsPreAnimation.accept : self.options.stackItemsPreAnimation.reject;
					}

					if( preAnimation ) {
						// items "pre animation" properties
						var animProps = {};

						for (var key in preAnimation.animationProperties) {
							var interval = preAnimation.elastic ? preAnimation.animationProperties[key]/self.options.visible : 0;
							animProps[key] = preAnimation.animationProperties[key] - Number(i*interval);
						}

						// this one remains the same..
						animProps.translateZ = parseInt(-1 * 50 * (i+1));

						preAnimation.animationSettings.complete = function() {
							animateStackItems(item, i);
						};

						dynamics.animate(item, animProps, preAnimation.animationSettings);
					}
					else {
						animateStackItems(item, i);
					}
				};
			}(item,i), this.options.stackItemsAnimationDelay);
		}

		// update current
		this.current = this.current < this.itemsTotal - 1 ? this.current + 1 : 0;
		classie.add(this.items[this.current], 'stack__item--current');
	}

	window.Stack = Stack;

})(window);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./stack.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./stack.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(2);

__webpack_require__(1);

__webpack_require__(0);

__webpack_require__(3);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fancy = function (_React$Component) {
  _inherits(Fancy, _React$Component);

  function Fancy() {
    _classCallCheck(this, Fancy);

    var _this = _possibleConstructorReturn(this, (Fancy.__proto__ || Object.getPrototypeOf(Fancy)).call(this));

    _this.state = {
      stack: undefined,
      imgs: undefined,
      postivebtnlabel: undefined,
      negativebtnlabel: undefined
    };
    _this.reject = _this.reject.bind(_this);
    _this.accept = _this.accept.bind(_this);
    _this.onEndStack = _this.onEndStack.bind(_this);
    return _this;
  }

  _createClass(Fancy, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var stack = new Stack(document.getElementById('stack_krisna'));
      stack.options.infinite = false;
      stack.options.onEndStack = this.onEndStack;
      this.setState({ stack: stack });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        imgs: this.props.images,
        postivebtnlabel: this.props.postivebtnlabel || 'Yes',
        negativebtnlabel: this.props.negativebtnlabel || 'No'
      });
    }
  }, {
    key: 'onEndStack',
    value: function onEndStack() {
      this.props.onstackendfn();
    }
  }, {
    key: 'reject',
    value: function reject() {
      var stack = this.state.stack;
      stack.reject();
    }
  }, {
    key: 'accept',
    value: function accept() {
      var stack = this.state.stack;
      stack.accept();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'stack-container' },
        _react2.default.createElement(
          'ul',
          { id: 'stack_krisna', className: 'stack stack--krisna' },
          this.state.imgs && this.state.imgs.map(function (img, i) {
            return _react2.default.createElement(
              'div',
              { key: i, className: 'stack__item' },
              _react2.default.createElement('img', { src: img })
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'controls' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { onClick: this.reject },
              this.state.postivebtnlabel
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.accept },
              this.state.negativebtnlabel
            )
          )
        )
      );
    }
  }]);

  return Fancy;
}(_react2.default.Component);

exports.default = Fancy;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".stack-container{\n\tmargin-top: 50px;\n}\n\n.stack {\n\tmargin: 0 auto;\n\tposition: relative;\n\tz-index: 1000;\n\twidth: 280px;\n\theight: 280px;\n\tpadding: 0;\n\tlist-style: none;\n  pointer-events: none;\n}\n\n.stack__item {\n\tbackground: #eee;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1309&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D%201309w');\n\tbackground-position: right;\n  background-size: cover;\n  background-repeat: no-repeat;\n\t// box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n\tborder-radius: 5px;\n\ttext-align: center;\n\toverflow: hidden;\n\tposition: absolute;\n\topacity: 0;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\tflex-direction: column;\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: auto;\n\t// padding: 15px;\n}\n.stack__item img{\n\twidth: 100%;\n\tdisplay: block;\n\theight:  100%;\n\tcolor: #fff;\n\tpointer-events: none;\n}\n .stack__item div{\n\tpadding: 15px;\n\twidth: 100%;\n\tdisplay: block;\n\theight:  100%;\n\tcolor: #fff;\n\tpointer-events: none;\n\tword-break:break-all;\n\tfont-size: 30px;\n  font-weight: 100;\n\tdisplay: flex;\n  justify-content: center;\n  align-items: center;\n\tletter-spacing: 5px;\n\tflex-wrap: wrap;\n  flex-flow: column;\n}\n\n.ques-no{\n\tfont-size: 20px;\n}\n.divider{\n\tfont-size: 14px;\n}\n\n.controls {\n\ttext-align: center;\n\tmargin: 3em 0 0 0;\n\th3{\n    font-weight: 100;\n    letter-spacing: 1px;\n  }\n}\n\n/***********************************************/\n/******************** krisna *******************/\n/***********************************************/\n\n\n.stack--krisna .stack__item--reject {\n\t-webkit-animation: krisnaReject 0.5s forwards;\n\tanimation: krisnaReject 0.5s forwards;\n}\n\n@-webkit-keyframes krisnaReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n@keyframes krisnaReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n.stack--krisna .stack__item--accept {\n\t-webkit-animation: krisnaAccept 0.5s forwards;\n\tanimation: krisnaAccept 0.5s forwards;\n}\n\n@-webkit-keyframes krisnaAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n@keyframes krisnaAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n/* ...when content has 100% viewport width */\n@media screen and (max-width: 60em) {\n\t@-webkit-keyframes krisnaReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@keyframes krisnaReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@-webkit-keyframes krisnaAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n\t@keyframes krisnaAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);