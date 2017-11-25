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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-prefixed !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in C){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?x.className.baseVal=n:x.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!P.style;)p=!0,P.modElem=f(y.shift()),P.style=P.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=P.style[v],a(v,"-")&&(v=s(v)),P.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{P.style[v]=o}catch(g){}if(P.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var x=n.documentElement,w="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=E;var N=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=N;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),i(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	var dynamics = __webpack_require__(10)
	var classie = __webpack_require__(5)
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

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
      negativebtnlabel: undefined,
      postivebtnclass: undefined,
      negativebtnclass: undefined
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
        negativebtnlabel: this.props.negativebtnlabel || 'No',
        postivebtnclass: this.props.postivebtnclass || '',
        negativebtnclass: this.props.negativebtnclass || '',
        query: this.props.query || undefined,
        queryclass: this.props.queryclass || '',
        imgclass: this.props.imgclass || ''
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
              'li',
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
              'p',
              { className: this.state.queryclass },
              this.state.query
            ),
            _react2.default.createElement(
              'button',
              { className: this.state.negativebtnclass, onClick: this.reject },
              this.state.negativebtnlabel
            ),
            _react2.default.createElement(
              'button',
              { className: this.state.postivebtnclass, onClick: this.accept },
              this.state.postivebtnlabel
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * classie
 * http://github.amexpub.com/modules/classie
 *
 * Copyright (c) 2013 AmexPub. All rights reserved.
 */

module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* 
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException, DOMTokenList */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self) {

    // Full polyfill for browsers with no classList support
    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

        (function(view) {

            "use strict";

            if (!('Element' in view)) {
                return;
            }

            var classListProp = "classList",
                protoProp = "prototype",
                elemCtrProto = view.Element[protoProp],
                objCtr = Object,
                strTrim = String[protoProp].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "");
                }, arrIndexOf = Array[protoProp].indexOf || function(item) {
                    var
                    i = 0,
                        len = this.length;
                    for (; i < len; i++) {
                        if (i in this && this[i] === item) {
                            return i;
                        }
                    }
                    return -1;
                },
                // Vendors: please allow content code to instantiate DOMExceptions
                DOMEx = function(type, message) {
                    this.name = type;
                    this.code = DOMException[type];
                    this.message = message;
                }, checkTokenAndGetIndex = function(classList, token) {
                    if (token === "") {
                        throw new DOMEx(
                            "SYNTAX_ERR", "An invalid or illegal string was specified");
                    }
                    if (/\s/.test(token)) {
                        throw new DOMEx(
                            "INVALID_CHARACTER_ERR", "String contains an invalid character");
                    }
                    return arrIndexOf.call(classList, token);
                }, ClassList = function(elem) {
                    var
                    trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
                        classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
                        i = 0,
                        len = classes.length;
                    for (; i < len; i++) {
                        this.push(classes[i]);
                    }
                    this._updateClassName = function() {
                        elem.setAttribute("class", this.toString());
                    };
                }, classListProto = ClassList[protoProp] = [],
                classListGetter = function() {
                    return new ClassList(this);
                };
            // Most DOMException implementations don't allow calling DOMException's toString()
            // on non-DOMExceptions. Error's toString() is sufficient here.
            DOMEx[protoProp] = Error[protoProp];
            classListProto.item = function(i) {
                return this[i] || null;
            };
            classListProto.contains = function(token) {
                token += "";
                return checkTokenAndGetIndex(this, token) !== -1;
            };
            classListProto.add = function() {
                var
                tokens = arguments,
                    i = 0,
                    l = tokens.length,
                    token, updated = false;
                do {
                    token = tokens[i] + "";
                    if (checkTokenAndGetIndex(this, token) === -1) {
                        this.push(token);
                        updated = true;
                    }
                }
                while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.remove = function() {
                var
                tokens = arguments,
                    i = 0,
                    l = tokens.length,
                    token, updated = false,
                    index;
                do {
                    token = tokens[i] + "";
                    index = checkTokenAndGetIndex(this, token);
                    while (index !== -1) {
                        this.splice(index, 1);
                        updated = true;
                        index = checkTokenAndGetIndex(this, token);
                    }
                }
                while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.toggle = function(token, force) {
                token += "";

                var
                result = this.contains(token),
                    method = result ?
                        force !== true && "remove" :
                        force !== false && "add";

                if (method) {
                    this[method](token);
                }

                if (force === true || force === false) {
                    return force;
                } else {
                    return !result;
                }
            };
            classListProto.toString = function() {
                return this.join(" ");
            };

            if (objCtr.defineProperty) {
                var classListPropDesc = {
                    get: classListGetter,
                    enumerable: true,
                    configurable: true
                };
                try {
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                } catch (ex) { // IE 8 doesn't support enumerable:true
                    if (ex.number === -0x7FF5EC54) {
                        classListPropDesc.enumerable = false;
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    }
                }
            } else if (objCtr[protoProp].__defineGetter__) {
                elemCtrProto.__defineGetter__(classListProp, classListGetter);
            }

        }(self));

    } else {
        // There is full or partial native classList support, so just check if we need
        // to normalize the add/remove and toggle APIs.

        (function() {
            "use strict";

            var testElement = document.createElement("_");

            testElement.classList.add("c1", "c2");

            // Polyfill for IE 10/11 and Firefox <26, where classList.add and
            // classList.remove exist but support only one argument at a time.
            if (!testElement.classList.contains("c2")) {
                var createMethod = function(method) {
                    var original = DOMTokenList.prototype[method];

                    DOMTokenList.prototype[method] = function(token) {
                        var i, len = arguments.length;

                        for (i = 0; i < len; i++) {
                            token = arguments[i];
                            original.call(this, token);
                        }
                    };
                };
                createMethod('add');
                createMethod('remove');
            }

            testElement.classList.toggle("c3", false);

            // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
            // support the second argument.
            if (testElement.classList.contains("c3")) {
                var _toggle = DOMTokenList.prototype.toggle;

                DOMTokenList.prototype.toggle = function(token, force) {
                    if (1 in arguments && !this.contains(token) === !force) {
                        return force;
                    } else {
                        return _toggle.call(this, token);
                    }
                };

            }

            testElement = null;
        }());
    }

}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */


// class helper functions from bonzo https://github.com/ded/bonzo
var classList = __webpack_require__(6),
    classie;

function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

function noop() {}

function isArr(classes) {
    if (Array.isArray(classes)) {
        return true;
    } else if (Object.prototype.toString.call(classes) === '[object Array]') {
        return true;
    } else {
        return false;
    }
}

function removeMultiple() {
    var c = arguments[1],
        elem = arguments[0];
    c.forEach(function(value) {
        if (classie.has(elem, value)) {
            noop();
        }
        classie.removeClass(elem, value);
    });
}


function addMultiple() {
    var c = arguments[1],
        elem = arguments[0];
    c.forEach(function(value) {
        if (classie.has(elem, value)) {
            noop();
        }
        classie.addClass(elem, value);
    });
}

function hasClass(elem, c) {
    return elem.classList.contains(c);
}

function addClass(elem, c) {
    if (isArr(c)) {
        addMultiple.apply(this, arguments);
    } else {
        elem.classList.add(c);
    }
}

function removeClass(elem, c) {
    if (isArr(c)) {
        removeMultiple.apply(this, arguments);
    } else {
        elem.classList.remove(c);
    }
}

function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
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

if (typeof module === "object" && module && typeof module.exports === "object") {
    // commonjs / browserify
    module.exports = classie;
} else {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".stack {\n\tmargin: 0 auto;\n\tposition: relative;\n\tz-index: 1000;\n\twidth: 320px;\n\theight: 320px;\n\tpadding: 0;\n\tlist-style: none;\n    pointer-events: none;\n}\n\n.stack__item {\n\tbackground: #fff;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 4px;\n\ttext-align: center;\n\toverflow: hidden;\n\tposition: absolute;\n\topacity: 1;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\tflex-direction: column;\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: auto;\n}\n\n.stack__item img {\n\twidth: 100%;\n\tdisplay: block;\n\tpointer-events: none;\n}\n\n.controls {\n\ttext-align: center;\n\tmargin: 3em 0 0 0;\n\th3{\n    font-weight: 100;\n    letter-spacing: 1px;\n  }\n}\n\n.button {\n\tborder: none;\n\tbackground: none;\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 0.25em;\n\tmargin: 0 0.5em;\n\tcursor: pointer;\n\tfont-size: 1.5em;\n\twidth: 50px;\n\theight: 50px;\n\tz-index: 100;\n\t-webkit-tap-highlight-color:rgba(0,0,0,0);\n}\n\n.button .fa {\n\tpointer-events: none;\n}\n\n.button--default {\n\tbackground: #333;\n\tborder-radius: 3px;\n\tcolor: #fff;\n\tfont-size: 0.95em;\n\tfont-weight: bold;\n\tpadding: 0.65em 2em;\n\twidth: auto;\n\theight: auto;\n}\n\n.button--sonar {\n\tborder-radius: 50%;\n\tbackground: #fff;\n}\n\n.button--sonar::before {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tborder-radius: 50%;\n\tcontent: '';\n\topacity: 0;\n\tpointer-events: none;\n\tborder: 4px solid rgba(255,255,255,0.5);\n\tmargin: -35px 0 0 -35px;\n\twidth: 70px;\n\theight: 70px;\n}\n\n.button--sonar.button--active::before {\n\t-webkit-animation: anim-effect-sonar 0.3s ease-out forwards;\n\tanimation: anim-effect-sonar 0.3s ease-out forwards;\n}\n\n@-webkit-keyframes anim-effect-sonar {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(0.9, 0.9, 1);\n\t\ttransform: scale3d(0.9, 0.9, 1);\n\t}\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n}\n\n@keyframes anim-effect-sonar {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(0.9, 0.9, 1);\n\t\ttransform: scale3d(0.9, 0.9, 1);\n\t}\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n}\n\n.material-circle {\n\twidth: 150vh;\n\theight: 150vh;\n\tmargin: -75vh 0 0 -75vh;\n\tz-index: 0;\n\tborder-radius: 50%;\n\tpointer-events: none;\n\topacity: 0;\n\tposition: absolute;\n\tz-index: 0;\n\t-webkit-transform: scale3d(0, 0, 1);\n\ttransform: scale3d(0, 0, 1);\n}\n\n.material-circle--accept.material-circle--active {\n\tbackground: #81d47d;\n}\n\n.material-circle--reject.material-circle--active {\n\tbackground: #e66868;\n}\n\n.material-circle--active {\n\t-webkit-animation: anim-effect-material 0.6s ease-out forwards;\n\tanimation: anim-effect-material 0.6s ease-out forwards;\n}\n\n@-webkit-keyframes anim-effect-material {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(0, 0, 1);\n\t\ttransform: scale3d(0, 0, 1);\n\t}\n\t70% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n}\n\n@keyframes anim-effect-material {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(0, 0, 1);\n\t\ttransform: scale3d(0, 0, 1);\n\t}\n\t70% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale3d(1.4, 1.4, 1);\n\t\ttransform: scale3d(1.4, 1.4, 1);\n\t}\n}\n\n.button:focus {\n\toutline: none;\n}\n\n.button--accept {\n\tcolor: #81d47d;\n}\n\n.button--reject {\n\tcolor: #e66868;\n}\n\n.text-hidden {\n\tposition: absolute;\n\toverflow: hidden;\n\twidth: 0;\n\theight: 0;\n\tcolor: transparent;\n\tdisplay: block;\n}\n\n/* Animations */\n.stack__item--reject,\n.stack__item--accept {\n\tpointer-events: none;\n}\n\n/***********************************************/\n/******************** yuda *********************/\n/***********************************************/\n\n.stack--yuda .stack__item--reject {\n\t-webkit-animation: yudaReject 0.5s forwards;\n\tanimation: yudaReject 0.5s forwards;\n}\n\n@-webkit-keyframes yudaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,200px,0);\n\t\ttransform: translate3d(0,200px,0);\n\t}\n}\n\n@keyframes yudaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,200px,0);\n\t\ttransform: translate3d(0,200px,0);\n\t}\n}\n\n.stack--yuda .stack__item--accept {\n\t-webkit-animation: yudaAccept 0.5s forwards;\n\tanimation: yudaAccept 0.5s forwards;\n\t-webkit-transform-origin: 50% 300%;\n\ttransform-origin: 50% 300%;\n}\n\n@-webkit-keyframes yudaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,20deg);\n\t\ttransform: rotate3d(0,0,1,20deg);\n\t}\n}\n\n@keyframes yudaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,20deg);\n\t\ttransform: rotate3d(0,0,1,20deg);\n\t}\n}\n\n\n/***********************************************/\n/******************** krisna *******************/\n/***********************************************/\n\n\n.stack--krisna .stack__item--reject {\n\t-webkit-animation: krisnaReject 0.5s forwards;\n\tanimation: krisnaReject 0.5s forwards;\n}\n\n@-webkit-keyframes krisnaReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n@keyframes krisnaReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n.stack--krisna .stack__item--accept {\n\t-webkit-animation: krisnaAccept 0.5s forwards;\n\tanimation: krisnaAccept 0.5s forwards;\n}\n\n@-webkit-keyframes krisnaAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n@keyframes krisnaAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n/* ...when content has 100% viewport width */\n@media screen and (max-width: 60em) {\n\t@-webkit-keyframes krisnaReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@keyframes krisnaReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@-webkit-keyframes krisnaAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n\t@keyframes krisnaAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n}\n\n\n/***********************************************/\n/******************** wangi *********************/\n/***********************************************/\n\n.stack--wangi .stack__item--reject {\n\t-webkit-animation: wangiReject 0.5s forwards;\n\tanimation: wangiReject 0.5s forwards;\n\t-webkit-transform-origin: 0% 0%;\n\ttransform-origin: 0% 0%;\n}\n\n@-webkit-keyframes wangiReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 400px,0) rotate3d(0,0,1,40deg);\n\t\ttransform: translate3d(0, 400px,0) rotate3d(0,0,1,40deg);\n\t}\n}\n\n@keyframes wangiReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 400px,0) rotate3d(0,0,1,40deg);\n\t\ttransform: translate3d(0, 400px,0) rotate3d(0,0,1,40deg);\n\t}\n}\n\n.stack--wangi .stack__item--accept {\n\t-webkit-animation: wangiAccept 0.5s forwards;\n\tanimation: wangiAccept 0.5s forwards;\n\t-webkit-transform-origin: 100% 0%;\n\ttransform-origin: 100% 0%;\n}\n\n@-webkit-keyframes wangiAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 400px,0) rotate3d(0,0,1,-40deg);\n\t\ttransform: translate3d(0, 400px,0) rotate3d(0,0,1,-40deg);\n\t}\n}\n\n@keyframes wangiAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0, 400px,0) rotate3d(0,0,1,-40deg);\n\t\ttransform: translate3d(0, 400px,0) rotate3d(0,0,1,-40deg);\n\t}\n}\n\n\n/***********************************************/\n/********************* wira ********************/\n/***********************************************/\n\n\n.stack--wira .stack__item--reject {\n\t-webkit-animation: wiraReject 0.5s forwards;\n\tanimation: wiraReject 0.5s forwards;\n\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t-webkit-transform-origin: -150% 50%;\n\ttransform-origin: -150% 50%;\n}\n\n@-webkit-keyframes wiraReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,-60deg);\n\t\ttransform: rotate3d(0,0,1,-60deg);\n\t}\n}\n\n@keyframes wiraReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,-60deg);\n\t\ttransform: rotate3d(0,0,1,-60deg);\n\t}\n}\n\n.stack--wira .stack__item--accept {\n\t-webkit-animation: wiraAccept 0.5s forwards;\n\tanimation: wiraAccept 0.5s forwards;\n\t-webkit-animation-timing-function: cubic-bezier(0.3,1,0.3,1);\n\tanimation-timing-function: cubic-bezier(0.3,1,0.3,1);\n\t-webkit-transform-origin: 250% 50%;\n\ttransform-origin: 250% 50%;\n}\n\n@-webkit-keyframes wiraAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,60deg);\n\t\ttransform: rotate3d(0,0,1,60deg);\n\t}\n}\n\n@keyframes wiraAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,60deg);\n\t\ttransform: rotate3d(0,0,1,60deg);\n\t}\n}\n\n\n/***********************************************/\n/******************** utari ********************/\n/***********************************************/\n\n.stack--utari .stack__item--reject {\n\t-webkit-animation: utariReject 0.6s forwards;\n\tanimation: utariReject 0.6s forwards;\n\t-webkit-animation-timing-function: ease-in;\n\tanimation-timing-function: ease-in;\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n}\n\n@-webkit-keyframes utariReject {\n\t40% {\n\t\topacity: 1;\n\t\t-webkit-animation-timing-function: ease-out;\n\t\tanimation-timing-function: ease-out;\n\t\t-webkit-transform: translate3d(0,-20%,30px);\n\t\ttransform: translate3d(0,-20%,30px);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,150%,-300px) rotate3d(1,0,0,-40deg);\n\t\ttransform: translate3d(0,150%,-300px) rotate3d(1,0,0,-40deg);\n\t}\n}\n\n@keyframes utariReject {\n\t40% {\n\t\topacity: 1;\n\t\t-webkit-animation-timing-function: ease-out;\n\t\tanimation-timing-function: ease-out;\n\t\t-webkit-transform: translate3d(0,-20%,30px);\n\t\ttransform: translate3d(0,-20%,30px);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,150%,-300px) rotate3d(1,0,0,-40deg);\n\t\ttransform: translate3d(0,150%,-300px) rotate3d(1,0,0,-40deg);\n\t}\n}\n\n.stack--utari .stack__item--accept {\n\t-webkit-animation: utariAccept 0.6s forwards;\n\tanimation: utariAccept 0.6s forwards;\n\t-webkit-animation-timing-function: ease-in;\n\tanimation-timing-function: ease-in;\n}\n\n@-webkit-keyframes utariAccept {\n\t40% {\n\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t-webkit-transform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\ttransform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\ttransform: translate3d(25vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t}\n}\n\n@keyframes utariAccept {\n\t40% {\n\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t-webkit-transform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\ttransform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\ttransform: translate3d(25vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t}\n}\n\n/* ...when content has 100% viewport width */\n@media screen and (max-width: 60em) {\n\t@-webkit-keyframes utariAccept {\n\t\t40% {\n\t\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t\t-webkit-transform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\t\ttransform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\t}\n\t\t100% {\n\t\t\topacity: 0;\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\t}\n\t}\n\n\t@keyframes utariAccept {\n\t\t40% {\n\t\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t\t-webkit-transform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\t\ttransform: translate3d(-40%,0,0) scale3d(1.1,1.1,1);\n\t\t}\n\t\t100% {\n\t\t\topacity: 0;\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(10%,0,0) scale3d(0.1,0.1,1);\n\t\t}\n\t}\n}\n\n/***********************************************/\n/******************* slamet ********************/\n/***********************************************/\n\n.counter {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 30px;\n\twidth: 40px;\n\tmargin-left: -20px;\n}\n\n.counter svg {\n\tdisplay: block;\n\tmargin: 14px auto 0;\n\tfill: #58785A;\n}\n\n.counter__number {\n\ttext-align: center;\n\tposition: absolute;\n\tbackground: #e66868;\n\tfont-size: 10px;\n\tfont-weight: bold;\n\tcolor: #fff;\n\twidth: 20px;\n\theight: 20px;\n\tline-height: 20px;\n\tborder-radius: 50%;\n\tbottom: -5px;\n\tright: -5px;\n}\n\n.stack--slamet .stack__item--reject {\n\t-webkit-animation: slametReject 0.5s forwards;\n\tanimation: slametReject 0.5s forwards;\n\t-webkit-transform-origin: 50% 100%;\n\ttransform-origin: 50% 100%;\n}\n\n@-webkit-keyframes slametReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(1,0,0,-90deg);\n\t\ttransform: rotate3d(1,0,0,-90deg);\n\t}\n}\n\n@keyframes slametReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(1,0,0,-90deg);\n\t\ttransform: rotate3d(1,0,0,-90deg);\n\t}\n}\n\n.stack--slamet .stack__item--accept {\n\t-webkit-animation: slametAccept 0.6s forwards;\n\tanimation: slametAccept 0.6s forwards;\n\t-webkit-animation-timing-function: ease-in;\n\tanimation-timing-function: ease-in;\n}\n\n@-webkit-keyframes slametAccept {\n\t40% {\n\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t-webkit-transform: translate3d(0,20%,0) scale3d(1.1,1.1,1);\n\t\ttransform: translate3d(0,20%,0) scale3d(1.1,1.1,1);\n\t}\n\t80% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0,-280px,0) scale3d(0.1,0.1,1);\n\t\ttransform: translate3d(0,-280px,0) scale3d(0.1,0.1,1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,-250px,0) scale3d(0.05,0.05,1);\n\t\ttransform: translate3d(0,-250px,0) scale3d(0.05,0.05,1);\n\t}\n}\n\n@keyframes slametAccept {\n\t40% {\n\t\t-webkit-animation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\tanimation-timing-function: cubic-bezier(0.4,1,0.3,1);\n\t\t-webkit-transform: translate3d(0,20%,0) scale3d(1.1,1.1,1);\n\t\ttransform: translate3d(0,20%,0) scale3d(1.1,1.1,1);\n\t}\n\t80% {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0,-280px,0) scale3d(0.1,0.1,1);\n\t\ttransform: translate3d(0,-280px,0) scale3d(0.1,0.1,1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,-250px,0) scale3d(0.05,0.05,1);\n\t\ttransform: translate3d(0,-250px,0) scale3d(0.05,0.05,1);\n\t}\n}\n\n\n/***********************************************/\n/******************** eka **********************/\n/***********************************************/\n\n\n.stack--eka .stack__item--reject {\n\t-webkit-animation: ekaReject 0.5s forwards;\n\tanimation: ekaReject 0.5s forwards;\n\t-webkit-transform-origin: 100% 50%;\n\ttransform-origin: 100% 50%;\n}\n\n@-webkit-keyframes ekaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-150%,150%,0) rotate3d(0,0,1,-20deg);\n\t\ttransform: translate3d(-150%,150%,0) rotate3d(0,0,1,-20deg);\n\t}\n}\n\n@keyframes ekaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-150%,150%,0) rotate3d(0,0,1,-20deg);\n\t\ttransform: translate3d(-150%,150%,0) rotate3d(0,0,1,-20deg);\n\t}\n}\n\n.stack--eka .stack__item--accept {\n\t-webkit-animation: ekaAccept 0.5s forwards;\n\tanimation: ekaAccept 0.5s forwards;\n\t-webkit-transform-origin: -100% 50%;\n\ttransform-origin: -100% 50%;\n}\n\n@-webkit-keyframes ekaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(150%,-150%,0) rotate3d(0,0,1,20deg);\n\t\ttransform: translate3d(150%,-150%,0) rotate3d(0,0,1,20deg);\n\t}\n}\n\n@keyframes ekaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(150%,-150%,0) rotate3d(0,0,1,20deg);\n\t\ttransform: translate3d(150%,-150%,0) rotate3d(0,0,1,20deg);\n\t}\n}\n\n\n/***********************************************/\n/******************** dian *********************/\n/***********************************************/\n\n\n.stack--dian .stack__item--reject {\n\t-webkit-animation: dianReject 0.5s forwards;\n\tanimation: dianReject 0.5s forwards;\n\t-webkit-transform-origin: 50% -300%;\n\ttransform-origin: 50% -300%;\n}\n\n@-webkit-keyframes dianReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,20deg);\n\t\ttransform: rotate3d(0,0,1,20deg);\n\t}\n}\n\n@keyframes dianReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,20deg);\n\t\ttransform: rotate3d(0,0,1,20deg);\n\t}\n}\n\n.stack--dian .stack__item--accept {\n\t-webkit-animation: dianAccept 0.5s forwards;\n\tanimation: dianAccept 0.5s forwards;\n\t-webkit-transform-origin: 50% -300%;\n\ttransform-origin: 50% -300%;\n}\n\n@-webkit-keyframes dianAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,-20deg);\n\t\ttransform: rotate3d(0,0,1,-20deg);\n\t}\n}\n\n@keyframes dianAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: rotate3d(0,0,1,-20deg);\n\t\ttransform: rotate3d(0,0,1,-20deg);\n\t}\n}\n\n\n/***********************************************/\n/******************** iman *********************/\n/***********************************************/\n\n\n.stack--iman .stack__item--reject {\n\t-webkit-animation: imanReject 0.5s forwards;\n\tanimation: imanReject 0.5s forwards;\n}\n\n@-webkit-keyframes imanReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n@keyframes imanReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t}\n}\n\n.stack--iman .stack__item--accept {\n\t-webkit-animation: imanAccept 0.5s forwards;\n\tanimation: imanAccept 0.5s forwards;\n}\n\n@-webkit-keyframes imanAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n@keyframes imanAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n/* ...when content has 100% viewport width */\n@media screen and (max-width: 60em) {\n\n\t@-webkit-keyframes imanReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@keyframes imanReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0) rotate3d(0,0,1,-5deg);\n\t\t}\n\t}\n\n\t@-webkit-keyframes imanAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n\t@keyframes imanAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n}\n\n/***********************************************/\n/****************** iskandar *******************/\n/***********************************************/\n\n\n.stack--iskandar .stack__item--reject {\n\t-webkit-animation: iskandarReject 0.5s forwards;\n\tanimation: iskandarReject 0.5s forwards;\n\t-webkit-transform-origin: 50% 0%;\n\ttransform-origin: 50% 0%;\n}\n\n@-webkit-keyframes iskandarReject {\n\t50% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,-100px,20px) rotate3d(1,0,0,90deg);\n\t\ttransform: translate3d(0,-100px,20px) rotate3d(1,0,0,90deg);\n\t}\n}\n\n@keyframes iskandarReject {\n\t50% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,-100px,20px) rotate3d(1,0,0,90deg);\n\t\ttransform: translate3d(0,-100px,20px) rotate3d(1,0,0,90deg);\n\t}\n}\n\n.stack--iskandar .stack__item--accept {\n\t-webkit-animation: iskandarAccept 0.5s forwards;\n\tanimation: iskandarAccept 0.5s forwards;\n}\n\n@-webkit-keyframes iskandarAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n@keyframes iskandarAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t}\n}\n\n/* ...when content has 100% viewport width */\n@media screen and (max-width: 60em) {\n\n\t@-webkit-keyframes iskandarAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n\t@keyframes iskandarAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0) rotate3d(0,0,1,5deg);\n\t\t}\n\t}\n\n}\n\n/***********************************************/\n/******************** kasih ********************/\n/***********************************************/\n\n\n.stack--kasih .stack__item--reject {\n\t-webkit-animation: kasihReject 0.4s ease-in forwards;\n\tanimation: kasihReject 0.4s ease-in forwards;\n}\n\n@-webkit-keyframes kasihReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t}\n}\n\n@keyframes kasihReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t}\n}\n\n.stack--kasih .stack__item--accept {\n\t-webkit-animation: kasihAccept 0.4s ease-in forwards;\n\tanimation: kasihAccept 0.4s ease-in forwards;\n}\n\n@-webkit-keyframes kasihAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t}\n}\n\n@keyframes kasihAccept {\n\tto {\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t}\n}\n\n/* ...when content has 100% vieport width */\n@media screen and (max-width: 60em) {\n\t@-webkit-keyframes kasihReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t}\n\t}\n\n\t@keyframes kasihReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t}\n\t}\n\n\t@-webkit-keyframes kasihAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0);\n\t\t}\n\t}\n\n\t@keyframes kasihAccept {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(50vw,0,0) translate3d(60%,0,0);\n\t\t\ttransform: translate3d(50vw,0,0) translate3d(60%,0,0);\n\t\t}\n\t}\n}\n\n/***********************************************/\n/******************* buana ********************/\n/***********************************************/\n\n\n.stack--buana .stack__item--reject {\n\t-webkit-animation: buanaReject 0.5s forwards;\n\tanimation: buanaReject 0.5s forwards;\n}\n\n@-webkit-keyframes buanaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-25%,200%,0) rotate3d(0,0,1,25deg);\n\t\ttransform: translate3d(-25%,200%,0) rotate3d(0,0,1,215deg);\n\t}\n}\n\n@keyframes buanaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-25%,200%,0) rotate3d(0,0,1,25deg);\n\t\ttransform: translate3d(-25%,200%,0) rotate3d(0,0,1,25deg);\n\t}\n}\n\n.stack--buana .stack__item--accept {\n\t-webkit-animation: buanaAccept 0.5s forwards;\n\tanimation: buanaAccept 0.5s forwards;\n}\n\n@-webkit-keyframes buanaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25%,200%,0) rotate3d(0,0,1,-25deg);\n\t\ttransform: translate3d(25%,200%,0) rotate3d(0,0,1,-25deg);\n\t}\n}\n\n@keyframes buanaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25%,200%,0) rotate3d(0,0,1,-25deg);\n\t\ttransform: translate3d(25%,200%,0) rotate3d(0,0,1,-25deg);\n\t}\n}\n\n/***********************************************/\n/******************** mawar *********************/\n/***********************************************/\n\n.stack--mawar .stack__item--reject {\n\t-webkit-animation: mawarReject 0.5s forwards;\n\tanimation: mawarReject 0.5s forwards;\n}\n\n@-webkit-keyframes mawarReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t}\n}\n\n@keyframes mawarReject {\n\tto {\n\t\t-webkit-transform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t\ttransform: translate3d(-25vw,0,0) translate3d(-60%,0,0);\n\t}\n}\n\n.stack--mawar .stack__item--accept {\n\t-webkit-animation: mawarAccept 0.5s forwards;\n\tanimation: mawarAccept 0.5s forwards;\n\t-webkit-transform-origin: 100% 50%;\n\ttransform-origin: 100% 50%;\n}\n\n@-webkit-keyframes mawarAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(150px,0,0) scale3d(0.7,0.7,1) rotate3d(0,1,0,90deg);\n\t\ttransform: translate3d(150px,0,0) scale3d(0.7,0.7,1) rotate3d(0,1,0,90deg);\n\t}\n}\n\n@keyframes mawarAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(150px,0,0) scale3d(0.7,0.7,1) rotate3d(0,1,0,90deg);\n\t\ttransform: translate3d(150px,0,0) scale3d(0.7,0.7,1) rotate3d(0,1,0,90deg);\n\t}\n}\n\n/* ...when content has 100% vieport width */\n@media screen and (max-width: 60em) {\n\n\t@-webkit-keyframes mawarReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t}\n\t}\n\n\t@keyframes mawarReject {\n\t\tto {\n\t\t\t-webkit-transform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t\ttransform: translate3d(-50vw,0,0) translate3d(-60%,0,0);\n\t\t}\n\t}\n\n}\n\n\n/***********************************************/\n/******************** cinta **********************/\n/***********************************************/\n\n\n.stack--cinta .stack__item--reject {\n\t-webkit-animation: cintaReject 0.5s forwards;\n\tanimation: cintaReject 0.5s forwards;\n}\n\n@-webkit-keyframes cintaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t}\n}\n\n@keyframes cintaReject {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t\ttransform: translate3d(25vw,0,0) translate3d(60%,0,0);\n\t}\n}\n\n.stack--cinta .stack__item--accept {\n\t-webkit-animation: cintaAccept 0.5s forwards;\n\tanimation: cintaAccept 0.5s forwards;\n}\n\n@-webkit-keyframes cintaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,0,1000px);\n\t\ttransform: translate3d(0,0,1000px);\n\t}\n}\n\n@keyframes cintaAccept {\n\tto {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(0,0,1000px);\n\t\ttransform: translate3d(0,0,1000px);\n\t}\n}\n\n@media screen and (max-width: 60em) {\n\t.stack {\n\t\twidth: 260px;\n\t\theight: 260px;\n\t}\n}\n", ""]);

// exports


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.7.1
(function() {
  var Color, DecomposedMatrix, DecomposedMatrix2D, InterpolableArray, InterpolableColor, InterpolableNumber, InterpolableObject, InterpolableString, Matrix, Matrix2D, Set, Vector, addTimeout, addUnitsToNumberInterpolables, animationTick, animations, animationsTimeouts, applyDefaults, applyFrame, applyProperties, baseSVG, cacheFn, cancelTimeout, clone, createInterpolable, defaultValueForKey, degProperties, dynamics, getCurrentProperties, interpolate, isDocumentVisible, isSVGElement, lastTime, leftDelayForTimeout, makeArrayFn, observeVisibilityChange, parseProperties, prefixFor, propertyWithPrefix, pxProperties, rAF, roundf, runLoopPaused, runLoopRunning, runLoopTick, setRealTimeout, slow, slowRatio, startAnimation, startRunLoop, svgProperties, timeBeforeVisibilityChange, timeoutLastId, timeouts, toDashed, transformProperties, transformValueForProperty, unitForProperty,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  isDocumentVisible = function() {
    return document.visibilityState === "visible" || (dynamics.tests != null);
  };

  observeVisibilityChange = (function() {
    var fns;
    fns = [];
    if (typeof document !== "undefined" && document !== null) {
      document.addEventListener("visibilitychange", function() {
        var fn, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = fns.length; _i < _len; _i++) {
          fn = fns[_i];
          _results.push(fn(isDocumentVisible()));
        }
        return _results;
      });
    }
    return function(fn) {
      return fns.push(fn);
    };
  })();

  clone = function(o) {
    var k, newO, v;
    newO = {};
    for (k in o) {
      v = o[k];
      newO[k] = v;
    }
    return newO;
  };

  cacheFn = function(func) {
    var data;
    data = {};
    return function() {
      var k, key, result, _i, _len;
      key = "";
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        k = arguments[_i];
        key += k.toString() + ",";
      }
      result = data[key];
      if (!result) {
        data[key] = result = func.apply(this, arguments);
      }
      return result;
    };
  };

  makeArrayFn = function(fn) {
    return function(el) {
      var args, i, res;
      if (el instanceof Array || el instanceof NodeList || el instanceof HTMLCollection) {
        res = (function() {
          var _i, _ref, _results;
          _results = [];
          for (i = _i = 0, _ref = el.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            args = Array.prototype.slice.call(arguments, 1);
            args.splice(0, 0, el[i]);
            _results.push(fn.apply(this, args));
          }
          return _results;
        }).apply(this, arguments);
        return res;
      }
      return fn.apply(this, arguments);
    };
  };

  applyDefaults = function(options, defaults) {
    var k, v, _results;
    _results = [];
    for (k in defaults) {
      v = defaults[k];
      _results.push(options[k] != null ? options[k] : options[k] = v);
    }
    return _results;
  };

  applyFrame = function(el, properties) {
    var k, v, _results;
    if ((el.style != null)) {
      return applyProperties(el, properties);
    } else {
      _results = [];
      for (k in properties) {
        v = properties[k];
        _results.push(el[k] = v.format());
      }
      return _results;
    }
  };

  applyProperties = function(el, properties) {
    var isSVG, k, matrix, transforms, v;
    properties = parseProperties(properties);
    transforms = [];
    isSVG = isSVGElement(el);
    for (k in properties) {
      v = properties[k];
      if (transformProperties.contains(k)) {
        transforms.push([k, v]);
      } else {
        if (v.format != null) {
          v = v.format();
        }
        if (typeof v === 'number') {
          v = "" + v + (unitForProperty(k, v));
        }
        if ((el.hasAttribute != null) && el.hasAttribute(k)) {
          el.setAttribute(k, v);
        } else if (el.style != null) {
          el.style[propertyWithPrefix(k)] = v;
        }
        if (k in el) {
          el[k] = v;
        }
      }
    }
    if (transforms.length > 0) {
      if (isSVG) {
        matrix = new Matrix2D();
        matrix.applyProperties(transforms);
        return el.setAttribute("transform", matrix.decompose().format());
      } else {
        v = (transforms.map(function(transform) {
          return transformValueForProperty(transform[0], transform[1]);
        })).join(" ");
        return el.style[propertyWithPrefix("transform")] = v;
      }
    }
  };

  isSVGElement = function(el) {
    var _ref, _ref1;
    if ((typeof SVGElement !== "undefined" && SVGElement !== null) && (typeof SVGSVGElement !== "undefined" && SVGSVGElement !== null)) {
      return el instanceof SVGElement && !(el instanceof SVGSVGElement);
    } else {
      return (_ref = (_ref1 = dynamics.tests) != null ? typeof _ref1.isSVG === "function" ? _ref1.isSVG(el) : void 0 : void 0) != null ? _ref : false;
    }
  };

  roundf = function(v, decimal) {
    var d;
    d = Math.pow(10, decimal);
    return Math.round(v * d) / d;
  };

  Set = (function() {
    function Set(array) {
      var v, _i, _len;
      this.obj = {};
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        v = array[_i];
        this.obj[v] = 1;
      }
    }

    Set.prototype.contains = function(v) {
      return this.obj[v] === 1;
    };

    return Set;

  })();

  toDashed = function(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return "-" + $1.toLowerCase();
    });
  };

  pxProperties = new Set('marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius'.split(','));

  degProperties = new Set('rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ'.split(','));

  transformProperties = new Set('translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective'.split(','));

  svgProperties = new Set('accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z'.split(','));

  unitForProperty = function(k, v) {
    if (typeof v !== 'number') {
      return '';
    }
    if (pxProperties.contains(k)) {
      return 'px';
    } else if (degProperties.contains(k)) {
      return 'deg';
    }
    return '';
  };

  transformValueForProperty = function(k, v) {
    var match, unit;
    match = ("" + v).match(/^([0-9.-]*)([^0-9]*)$/);
    if (match != null) {
      v = match[1];
      unit = match[2];
    } else {
      v = parseFloat(v);
    }
    v = roundf(parseFloat(v), 10);
    if ((unit == null) || unit === "") {
      unit = unitForProperty(k, v);
    }
    return "" + k + "(" + v + unit + ")";
  };

  parseProperties = function(properties) {
    var axis, match, parsed, property, value, _i, _len, _ref;
    parsed = {};
    for (property in properties) {
      value = properties[property];
      if (transformProperties.contains(property)) {
        match = property.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/);
        if (match && match[2].length > 0) {
          parsed[property] = value;
        } else {
          _ref = ['X', 'Y', 'Z'];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            axis = _ref[_i];
            parsed[match[1] + axis] = value;
          }
        }
      } else {
        parsed[property] = value;
      }
    }
    return parsed;
  };

  defaultValueForKey = function(key) {
    var v;
    v = key === 'opacity' ? 1 : 0;
    return "" + v + (unitForProperty(key, v));
  };

  getCurrentProperties = function(el, keys) {
    var isSVG, key, matrix, properties, style, v, _i, _j, _len, _len1, _ref;
    properties = {};
    isSVG = isSVGElement(el);
    if (el.style != null) {
      style = window.getComputedStyle(el, null);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (transformProperties.contains(key)) {
          if (properties['transform'] == null) {
            if (isSVG) {
              matrix = new Matrix2D((_ref = el.transform.baseVal.consolidate()) != null ? _ref.matrix : void 0);
            } else {
              matrix = Matrix.fromTransform(style[propertyWithPrefix('transform')]);
            }
            properties['transform'] = matrix.decompose();
          }
        } else {
          if ((el.hasAttribute != null) && el.hasAttribute(key)) {
            v = el.getAttribute(key);
          } else if (key in el) {
            v = el[key];
          } else {
            v = style[key];
          }
          if (((v == null) || key === 'd') && svgProperties.contains(key)) {
            v = el.getAttribute(key);
          }
          if (v === "" || (v == null)) {
            v = defaultValueForKey(key);
          }
          properties[key] = createInterpolable(v);
        }
      }
    } else {
      for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
        key = keys[_j];
        properties[key] = createInterpolable(el[key]);
      }
    }
    addUnitsToNumberInterpolables(el, properties);
    return properties;
  };

  addUnitsToNumberInterpolables = function(el, properties) {
    var interpolable, k;
    for (k in properties) {
      interpolable = properties[k];
      if (interpolable instanceof InterpolableNumber && (el.style != null) && k in el.style) {
        interpolable = new InterpolableString([interpolable, unitForProperty(k, 0)]);
      }
      properties[k] = interpolable;
    }
    return properties;
  };

  createInterpolable = function(value) {
    var interpolable, klass, klasses, _i, _len;
    klasses = [InterpolableArray, InterpolableObject, InterpolableNumber, InterpolableString];
    for (_i = 0, _len = klasses.length; _i < _len; _i++) {
      klass = klasses[_i];
      interpolable = klass.create(value);
      if (interpolable != null) {
        return interpolable;
      }
    }
    return null;
  };

  InterpolableString = (function() {
    function InterpolableString(parts) {
      this.parts = parts;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableString.prototype.interpolate = function(endInterpolable, t) {
      var end, i, newParts, start, _i, _ref;
      start = this.parts;
      end = endInterpolable.parts;
      newParts = [];
      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (start[i].interpolate != null) {
          newParts.push(start[i].interpolate(end[i], t));
        } else {
          newParts.push(start[i]);
        }
      }
      return new InterpolableString(newParts);
    };

    InterpolableString.prototype.format = function() {
      var parts;
      parts = this.parts.map(function(val) {
        if (val.format != null) {
          return val.format();
        } else {
          return val;
        }
      });
      return parts.join('');
    };

    InterpolableString.create = function(value) {
      var index, match, matches, parts, re, type, types, _i, _j, _len, _len1;
      value = "" + value;
      matches = [];
      types = [
        {
          re: /(#[a-f\d]{3,6})/ig,
          klass: InterpolableColor,
          parse: function(v) {
            return v;
          }
        }, {
          re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
          klass: InterpolableColor,
          parse: function(v) {
            return v;
          }
        }, {
          re: /([-+]?[\d.]+)/ig,
          klass: InterpolableNumber,
          parse: parseFloat
        }
      ];
      for (_i = 0, _len = types.length; _i < _len; _i++) {
        type = types[_i];
        re = type.re;
        while (match = re.exec(value)) {
          matches.push({
            index: match.index,
            length: match[1].length,
            interpolable: type.klass.create(type.parse(match[1]))
          });
        }
      }
      matches = matches.sort(function(a, b) {
        if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      });
      parts = [];
      index = 0;
      for (_j = 0, _len1 = matches.length; _j < _len1; _j++) {
        match = matches[_j];
        if (match.index < index) {
          continue;
        }
        if (match.index > index) {
          parts.push(value.substring(index, match.index));
        }
        parts.push(match.interpolable);
        index = match.index + match.length;
      }
      if (index < value.length) {
        parts.push(value.substring(index));
      }
      return new InterpolableString(parts);
    };

    return InterpolableString;

  })();

  InterpolableObject = (function() {
    function InterpolableObject(obj) {
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
      this.obj = obj;
    }

    InterpolableObject.prototype.interpolate = function(endInterpolable, t) {
      var end, k, newObj, start, v;
      start = this.obj;
      end = endInterpolable.obj;
      newObj = {};
      for (k in start) {
        v = start[k];
        if (v.interpolate != null) {
          newObj[k] = v.interpolate(end[k], t);
        } else {
          newObj[k] = v;
        }
      }
      return new InterpolableObject(newObj);
    };

    InterpolableObject.prototype.format = function() {
      return this.obj;
    };

    InterpolableObject.create = function(value) {
      var k, obj, v;
      if (value instanceof Object) {
        obj = {};
        for (k in value) {
          v = value[k];
          obj[k] = createInterpolable(v);
        }
        return new InterpolableObject(obj);
      }
      return null;
    };

    return InterpolableObject;

  })();

  InterpolableNumber = (function() {
    function InterpolableNumber(value) {
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
      this.value = parseFloat(value);
    }

    InterpolableNumber.prototype.interpolate = function(endInterpolable, t) {
      var end, start;
      start = this.value;
      end = endInterpolable.value;
      return new InterpolableNumber((end - start) * t + start);
    };

    InterpolableNumber.prototype.format = function() {
      return roundf(this.value, 5);
    };

    InterpolableNumber.create = function(value) {
      if (typeof value === 'number') {
        return new InterpolableNumber(value);
      }
      return null;
    };

    return InterpolableNumber;

  })();

  InterpolableArray = (function() {
    function InterpolableArray(values) {
      this.values = values;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableArray.prototype.interpolate = function(endInterpolable, t) {
      var end, i, newValues, start, _i, _ref;
      start = this.values;
      end = endInterpolable.values;
      newValues = [];
      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (start[i].interpolate != null) {
          newValues.push(start[i].interpolate(end[i], t));
        } else {
          newValues.push(start[i]);
        }
      }
      return new InterpolableArray(newValues);
    };

    InterpolableArray.prototype.format = function() {
      return this.values.map(function(val) {
        if (val.format != null) {
          return val.format();
        } else {
          return val;
        }
      });
    };

    InterpolableArray.createFromArray = function(arr) {
      var values;
      values = arr.map(function(val) {
        return createInterpolable(val) || val;
      });
      values = values.filter(function(val) {
        return val != null;
      });
      return new InterpolableArray(values);
    };

    InterpolableArray.create = function(value) {
      if (value instanceof Array) {
        return InterpolableArray.createFromArray(value);
      }
      return null;
    };

    return InterpolableArray;

  })();

  Color = (function() {
    function Color(rgb, format) {
      this.rgb = rgb != null ? rgb : {};
      this.format = format;
      this.toRgba = __bind(this.toRgba, this);
      this.toRgb = __bind(this.toRgb, this);
      this.toHex = __bind(this.toHex, this);
    }

    Color.fromHex = function(hex) {
      var hex3, result;
      hex3 = hex.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
      if (hex3 != null) {
        hex = "#" + hex3[1] + hex3[1] + hex3[2] + hex3[2] + hex3[3] + hex3[3];
      }
      result = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      if (result != null) {
        return new Color({
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: 1
        }, "hex");
      }
      return null;
    };

    Color.fromRgb = function(rgb) {
      var match, _ref;
      match = rgb.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
      if (match != null) {
        return new Color({
          r: parseFloat(match[1]),
          g: parseFloat(match[2]),
          b: parseFloat(match[3]),
          a: parseFloat((_ref = match[4]) != null ? _ref : 1)
        }, match[4] != null ? "rgba" : "rgb");
      }
      return null;
    };

    Color.componentToHex = function(c) {
      var hex;
      hex = c.toString(16);
      if (hex.length === 1) {
        return "0" + hex;
      } else {
        return hex;
      }
    };

    Color.prototype.toHex = function() {
      return "#" + Color.componentToHex(this.rgb.r) + Color.componentToHex(this.rgb.g) + Color.componentToHex(this.rgb.b);
    };

    Color.prototype.toRgb = function() {
      return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")";
    };

    Color.prototype.toRgba = function() {
      return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")";
    };

    return Color;

  })();

  InterpolableColor = (function() {
    function InterpolableColor(color) {
      this.color = color;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableColor.prototype.interpolate = function(endInterpolable, t) {
      var end, k, rgb, start, v, _i, _len, _ref;
      start = this.color;
      end = endInterpolable.color;
      rgb = {};
      _ref = ['r', 'g', 'b'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        v = Math.round((end.rgb[k] - start.rgb[k]) * t + start.rgb[k]);
        rgb[k] = Math.min(255, Math.max(0, v));
      }
      k = "a";
      v = roundf((end.rgb[k] - start.rgb[k]) * t + start.rgb[k], 5);
      rgb[k] = Math.min(1, Math.max(0, v));
      return new InterpolableColor(new Color(rgb, end.format));
    };

    InterpolableColor.prototype.format = function() {
      if (this.color.format === "hex") {
        return this.color.toHex();
      } else if (this.color.format === "rgb") {
        return this.color.toRgb();
      } else if (this.color.format === "rgba") {
        return this.color.toRgba();
      }
    };

    InterpolableColor.create = function(value) {
      var color;
      if (typeof value !== "string") {
        return;
      }
      color = Color.fromHex(value) || Color.fromRgb(value);
      if (color != null) {
        return new InterpolableColor(color);
      }
      return null;
    };

    return InterpolableColor;

  })();

  DecomposedMatrix2D = (function() {
    function DecomposedMatrix2D(props) {
      this.props = props;
      this.applyRotateCenter = __bind(this.applyRotateCenter, this);
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    DecomposedMatrix2D.prototype.interpolate = function(endMatrix, t) {
      var i, k, newProps, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2;
      newProps = {};
      _ref = ['translate', 'scale', 'rotate'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        newProps[k] = [];
        for (i = _j = 0, _ref1 = this.props[k].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          newProps[k][i] = (endMatrix.props[k][i] - this.props[k][i]) * t + this.props[k][i];
        }
      }
      for (i = _k = 1; _k <= 2; i = ++_k) {
        newProps['rotate'][i] = endMatrix.props['rotate'][i];
      }
      _ref2 = ['skew'];
      for (_l = 0, _len1 = _ref2.length; _l < _len1; _l++) {
        k = _ref2[_l];
        newProps[k] = (endMatrix.props[k] - this.props[k]) * t + this.props[k];
      }
      return new DecomposedMatrix2D(newProps);
    };

    DecomposedMatrix2D.prototype.format = function() {
      return "translate(" + (this.props.translate.join(',')) + ") rotate(" + (this.props.rotate.join(',')) + ") skewX(" + this.props.skew + ") scale(" + (this.props.scale.join(',')) + ")";
    };

    DecomposedMatrix2D.prototype.applyRotateCenter = function(rotateC) {
      var i, m, m2d, negativeTranslate, _i, _results;
      m = baseSVG.createSVGMatrix();
      m = m.translate(rotateC[0], rotateC[1]);
      m = m.rotate(this.props.rotate[0]);
      m = m.translate(-rotateC[0], -rotateC[1]);
      m2d = new Matrix2D(m);
      negativeTranslate = m2d.decompose().props.translate;
      _results = [];
      for (i = _i = 0; _i <= 1; i = ++_i) {
        _results.push(this.props.translate[i] -= negativeTranslate[i]);
      }
      return _results;
    };

    return DecomposedMatrix2D;

  })();

  baseSVG = typeof document !== "undefined" && document !== null ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0;

  Matrix2D = (function() {
    function Matrix2D(m) {
      this.m = m;
      this.applyProperties = __bind(this.applyProperties, this);
      this.decompose = __bind(this.decompose, this);
      if (!this.m) {
        this.m = baseSVG.createSVGMatrix();
      }
    }

    Matrix2D.prototype.decompose = function() {
      var kx, ky, kz, r0, r1;
      r0 = new Vector([this.m.a, this.m.b]);
      r1 = new Vector([this.m.c, this.m.d]);
      kx = r0.length();
      kz = r0.dot(r1);
      r0 = r0.normalize();
      ky = r1.combine(r0, 1, -kz).length();
      return new DecomposedMatrix2D({
        translate: [this.m.e, this.m.f],
        rotate: [Math.atan2(this.m.b, this.m.a) * 180 / Math.PI, this.rotateCX, this.rotateCY],
        scale: [kx, ky],
        skew: kz / ky * 180 / Math.PI
      });
    };

    Matrix2D.prototype.applyProperties = function(properties) {
      var hash, k, props, v, _i, _len, _ref, _ref1;
      hash = {};
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        props = properties[_i];
        hash[props[0]] = props[1];
      }
      for (k in hash) {
        v = hash[k];
        if (k === "translateX") {
          this.m = this.m.translate(v, 0);
        } else if (k === "translateY") {
          this.m = this.m.translate(0, v);
        } else if (k === "scaleX") {
          this.m = this.m.scaleNonUniform(v, 1);
        } else if (k === "scaleY") {
          this.m = this.m.scaleNonUniform(1, v);
        } else if (k === "rotateZ") {
          this.m = this.m.rotate(v);
        } else if (k === "skewX") {
          this.m = this.m.skewX(v);
        } else if (k === "skewY") {
          this.m = this.m.skewY(v);
        }
      }
      this.rotateCX = (_ref = hash.rotateCX) != null ? _ref : 0;
      return this.rotateCY = (_ref1 = hash.rotateCY) != null ? _ref1 : 0;
    };

    return Matrix2D;

  })();

  Vector = (function() {
    function Vector(els) {
      this.els = els;
      this.combine = __bind(this.combine, this);
      this.normalize = __bind(this.normalize, this);
      this.length = __bind(this.length, this);
      this.cross = __bind(this.cross, this);
      this.dot = __bind(this.dot, this);
      this.e = __bind(this.e, this);
    }

    Vector.prototype.e = function(i) {
      if (i < 1 || i > this.els.length) {
        return null;
      } else {
        return this.els[i - 1];
      }
    };

    Vector.prototype.dot = function(vector) {
      var V, n, product;
      V = vector.els || vector;
      product = 0;
      n = this.els.length;
      if (n !== V.length) {
        return null;
      }
      n += 1;
      while (--n) {
        product += this.els[n - 1] * V[n - 1];
      }
      return product;
    };

    Vector.prototype.cross = function(vector) {
      var A, B;
      B = vector.els || vector;
      if (this.els.length !== 3 || B.length !== 3) {
        return null;
      }
      A = this.els;
      return new Vector([(A[1] * B[2]) - (A[2] * B[1]), (A[2] * B[0]) - (A[0] * B[2]), (A[0] * B[1]) - (A[1] * B[0])]);
    };

    Vector.prototype.length = function() {
      var a, e, _i, _len, _ref;
      a = 0;
      _ref = this.els;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        a += Math.pow(e, 2);
      }
      return Math.sqrt(a);
    };

    Vector.prototype.normalize = function() {
      var e, i, length, newElements, _ref;
      length = this.length();
      newElements = [];
      _ref = this.els;
      for (i in _ref) {
        e = _ref[i];
        newElements[i] = e / length;
      }
      return new Vector(newElements);
    };

    Vector.prototype.combine = function(b, ascl, bscl) {
      var i, result, _i, _ref;
      result = [];
      for (i = _i = 0, _ref = this.els.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        result[i] = (ascl * this.els[i]) + (bscl * b.els[i]);
      }
      return new Vector(result);
    };

    return Vector;

  })();

  DecomposedMatrix = (function() {
    function DecomposedMatrix() {
      this.toMatrix = __bind(this.toMatrix, this);
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    DecomposedMatrix.prototype.interpolate = function(decomposedB, t, only) {
      var angle, decomposed, decomposedA, i, invscale, invth, k, qa, qb, scale, th, _i, _j, _k, _l, _len, _ref, _ref1;
      if (only == null) {
        only = null;
      }
      decomposedA = this;
      decomposed = new DecomposedMatrix;
      _ref = ['translate', 'scale', 'skew', 'perspective'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        decomposed[k] = [];
        for (i = _j = 0, _ref1 = decomposedA[k].length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          if ((only == null) || only.indexOf(k) > -1 || only.indexOf("" + k + ['x', 'y', 'z'][i]) > -1) {
            decomposed[k][i] = (decomposedB[k][i] - decomposedA[k][i]) * t + decomposedA[k][i];
          } else {
            decomposed[k][i] = decomposedA[k][i];
          }
        }
      }
      if ((only == null) || only.indexOf('rotate') !== -1) {
        qa = decomposedA.quaternion;
        qb = decomposedB.quaternion;
        angle = qa[0] * qb[0] + qa[1] * qb[1] + qa[2] * qb[2] + qa[3] * qb[3];
        if (angle < 0.0) {
          for (i = _k = 0; _k <= 3; i = ++_k) {
            qa[i] = -qa[i];
          }
          angle = -angle;
        }
        if (angle + 1.0 > .05) {
          if (1.0 - angle >= .05) {
            th = Math.acos(angle);
            invth = 1.0 / Math.sin(th);
            scale = Math.sin(th * (1.0 - t)) * invth;
            invscale = Math.sin(th * t) * invth;
          } else {
            scale = 1.0 - t;
            invscale = t;
          }
        } else {
          qb[0] = -qa[1];
          qb[1] = qa[0];
          qb[2] = -qa[3];
          qb[3] = qa[2];
          scale = Math.sin(piDouble * (.5 - t));
          invscale = Math.sin(piDouble * t);
        }
        decomposed.quaternion = [];
        for (i = _l = 0; _l <= 3; i = ++_l) {
          decomposed.quaternion[i] = qa[i] * scale + qb[i] * invscale;
        }
      } else {
        decomposed.quaternion = decomposedA.quaternion;
      }
      return decomposed;
    };

    DecomposedMatrix.prototype.format = function() {
      return this.toMatrix().toString();
    };

    DecomposedMatrix.prototype.toMatrix = function() {
      var decomposedMatrix, i, j, match, matrix, quaternion, skew, temp, w, x, y, z, _i, _j, _k, _l;
      decomposedMatrix = this;
      matrix = Matrix.I(4);
      for (i = _i = 0; _i <= 3; i = ++_i) {
        matrix.els[i][3] = decomposedMatrix.perspective[i];
      }
      quaternion = decomposedMatrix.quaternion;
      x = quaternion[0];
      y = quaternion[1];
      z = quaternion[2];
      w = quaternion[3];
      skew = decomposedMatrix.skew;
      match = [[1, 0], [2, 0], [2, 1]];
      for (i = _j = 2; _j >= 0; i = --_j) {
        if (skew[i]) {
          temp = Matrix.I(4);
          temp.els[match[i][0]][match[i][1]] = skew[i];
          matrix = matrix.multiply(temp);
        }
      }
      matrix = matrix.multiply(new Matrix([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]));
      for (i = _k = 0; _k <= 2; i = ++_k) {
        for (j = _l = 0; _l <= 2; j = ++_l) {
          matrix.els[i][j] *= decomposedMatrix.scale[i];
        }
        matrix.els[3][i] = decomposedMatrix.translate[i];
      }
      return matrix;
    };

    return DecomposedMatrix;

  })();

  Matrix = (function() {
    function Matrix(els) {
      this.els = els;
      this.toString = __bind(this.toString, this);
      this.decompose = __bind(this.decompose, this);
      this.inverse = __bind(this.inverse, this);
      this.augment = __bind(this.augment, this);
      this.toRightTriangular = __bind(this.toRightTriangular, this);
      this.transpose = __bind(this.transpose, this);
      this.multiply = __bind(this.multiply, this);
      this.dup = __bind(this.dup, this);
      this.e = __bind(this.e, this);
    }

    Matrix.prototype.e = function(i, j) {
      if (i < 1 || i > this.els.length || j < 1 || j > this.els[0].length) {
        return null;
      }
      return this.els[i - 1][j - 1];
    };

    Matrix.prototype.dup = function() {
      return new Matrix(this.els);
    };

    Matrix.prototype.multiply = function(matrix) {
      var M, c, cols, elements, i, j, ki, kj, nc, ni, nj, returnVector, sum;
      returnVector = matrix.modulus ? true : false;
      M = matrix.els || matrix;
      if (typeof M[0][0] === 'undefined') {
        M = new Matrix(M).els;
      }
      ni = this.els.length;
      ki = ni;
      kj = M[0].length;
      cols = this.els[0].length;
      elements = [];
      ni += 1;
      while (--ni) {
        i = ki - ni;
        elements[i] = [];
        nj = kj;
        nj += 1;
        while (--nj) {
          j = kj - nj;
          sum = 0;
          nc = cols;
          nc += 1;
          while (--nc) {
            c = cols - nc;
            sum += this.els[i][c] * M[c][j];
          }
          elements[i][j] = sum;
        }
      }
      M = new Matrix(elements);
      if (returnVector) {
        return M.col(1);
      } else {
        return M;
      }
    };

    Matrix.prototype.transpose = function() {
      var cols, elements, i, j, ni, nj, rows;
      rows = this.els.length;
      cols = this.els[0].length;
      elements = [];
      ni = cols;
      ni += 1;
      while (--ni) {
        i = cols - ni;
        elements[i] = [];
        nj = rows;
        nj += 1;
        while (--nj) {
          j = rows - nj;
          elements[i][j] = this.els[j][i];
        }
      }
      return new Matrix(elements);
    };

    Matrix.prototype.toRightTriangular = function() {
      var M, els, i, j, k, kp, multiplier, n, np, p, _i, _j, _ref, _ref1;
      M = this.dup();
      n = this.els.length;
      k = n;
      kp = this.els[0].length;
      while (--n) {
        i = k - n;
        if (M.els[i][i] === 0) {
          for (j = _i = _ref = i + 1; _ref <= k ? _i < k : _i > k; j = _ref <= k ? ++_i : --_i) {
            if (M.els[j][i] !== 0) {
              els = [];
              np = kp;
              np += 1;
              while (--np) {
                p = kp - np;
                els.push(M.els[i][p] + M.els[j][p]);
              }
              M.els[i] = els;
              break;
            }
          }
        }
        if (M.els[i][i] !== 0) {
          for (j = _j = _ref1 = i + 1; _ref1 <= k ? _j < k : _j > k; j = _ref1 <= k ? ++_j : --_j) {
            multiplier = M.els[j][i] / M.els[i][i];
            els = [];
            np = kp;
            np += 1;
            while (--np) {
              p = kp - np;
              els.push(p <= i ? 0 : M.els[j][p] - M.els[i][p] * multiplier);
            }
            M.els[j] = els;
          }
        }
      }
      return M;
    };

    Matrix.prototype.augment = function(matrix) {
      var M, T, cols, i, j, ki, kj, ni, nj;
      M = matrix.els || matrix;
      if (typeof M[0][0] === 'undefined') {
        M = new Matrix(M).els;
      }
      T = this.dup();
      cols = T.els[0].length;
      ni = T.els.length;
      ki = ni;
      kj = M[0].length;
      if (ni !== M.length) {
        return null;
      }
      ni += 1;
      while (--ni) {
        i = ki - ni;
        nj = kj;
        nj += 1;
        while (--nj) {
          j = kj - nj;
          T.els[i][cols + j] = M[i][j];
        }
      }
      return T;
    };

    Matrix.prototype.inverse = function() {
      var M, divisor, els, i, inverse_elements, j, ki, kp, new_element, ni, np, p, _i;
      ni = this.els.length;
      ki = ni;
      M = this.augment(Matrix.I(ni)).toRightTriangular();
      kp = M.els[0].length;
      inverse_elements = [];
      ni += 1;
      while (--ni) {
        i = ni - 1;
        els = [];
        np = kp;
        inverse_elements[i] = [];
        divisor = M.els[i][i];
        np += 1;
        while (--np) {
          p = kp - np;
          new_element = M.els[i][p] / divisor;
          els.push(new_element);
          if (p >= ki) {
            inverse_elements[i].push(new_element);
          }
        }
        M.els[i] = els;
        for (j = _i = 0; 0 <= i ? _i < i : _i > i; j = 0 <= i ? ++_i : --_i) {
          els = [];
          np = kp;
          np += 1;
          while (--np) {
            p = kp - np;
            els.push(M.els[j][p] - M.els[i][p] * M.els[j][i]);
          }
          M.els[j] = els;
        }
      }
      return new Matrix(inverse_elements);
    };

    Matrix.I = function(n) {
      var els, i, j, k, nj;
      els = [];
      k = n;
      n += 1;
      while (--n) {
        i = k - n;
        els[i] = [];
        nj = k;
        nj += 1;
        while (--nj) {
          j = k - nj;
          els[i][j] = i === j ? 1 : 0;
        }
      }
      return new Matrix(els);
    };

    Matrix.prototype.decompose = function() {
      var els, i, inversePerspectiveMatrix, j, k, matrix, pdum3, perspective, perspectiveMatrix, quaternion, result, rightHandSide, rotate, row, rowElement, s, scale, skew, t, translate, transposedInversePerspectiveMatrix, type, typeKey, v, w, x, y, z, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      matrix = this;
      translate = [];
      scale = [];
      skew = [];
      quaternion = [];
      perspective = [];
      els = [];
      for (i = _i = 0; _i <= 3; i = ++_i) {
        els[i] = [];
        for (j = _j = 0; _j <= 3; j = ++_j) {
          els[i][j] = matrix.els[i][j];
        }
      }
      if (els[3][3] === 0) {
        return false;
      }
      for (i = _k = 0; _k <= 3; i = ++_k) {
        for (j = _l = 0; _l <= 3; j = ++_l) {
          els[i][j] /= els[3][3];
        }
      }
      perspectiveMatrix = matrix.dup();
      for (i = _m = 0; _m <= 2; i = ++_m) {
        perspectiveMatrix.els[i][3] = 0;
      }
      perspectiveMatrix.els[3][3] = 1;
      if (els[0][3] !== 0 || els[1][3] !== 0 || els[2][3] !== 0) {
        rightHandSide = new Vector(els.slice(0, 4)[3]);
        inversePerspectiveMatrix = perspectiveMatrix.inverse();
        transposedInversePerspectiveMatrix = inversePerspectiveMatrix.transpose();
        perspective = transposedInversePerspectiveMatrix.multiply(rightHandSide).els;
        for (i = _n = 0; _n <= 2; i = ++_n) {
          els[i][3] = 0;
        }
        els[3][3] = 1;
      } else {
        perspective = [0, 0, 0, 1];
      }
      for (i = _o = 0; _o <= 2; i = ++_o) {
        translate[i] = els[3][i];
        els[3][i] = 0;
      }
      row = [];
      for (i = _p = 0; _p <= 2; i = ++_p) {
        row[i] = new Vector(els[i].slice(0, 3));
      }
      scale[0] = row[0].length();
      row[0] = row[0].normalize();
      skew[0] = row[0].dot(row[1]);
      row[1] = row[1].combine(row[0], 1.0, -skew[0]);
      scale[1] = row[1].length();
      row[1] = row[1].normalize();
      skew[0] /= scale[1];
      skew[1] = row[0].dot(row[2]);
      row[2] = row[2].combine(row[0], 1.0, -skew[1]);
      skew[2] = row[1].dot(row[2]);
      row[2] = row[2].combine(row[1], 1.0, -skew[2]);
      scale[2] = row[2].length();
      row[2] = row[2].normalize();
      skew[1] /= scale[2];
      skew[2] /= scale[2];
      pdum3 = row[1].cross(row[2]);
      if (row[0].dot(pdum3) < 0) {
        for (i = _q = 0; _q <= 2; i = ++_q) {
          scale[i] *= -1;
          for (j = _r = 0; _r <= 2; j = ++_r) {
            row[i].els[j] *= -1;
          }
        }
      }
      rowElement = function(index, elementIndex) {
        return row[index].els[elementIndex];
      };
      rotate = [];
      rotate[1] = Math.asin(-rowElement(0, 2));
      if (Math.cos(rotate[1]) !== 0) {
        rotate[0] = Math.atan2(rowElement(1, 2), rowElement(2, 2));
        rotate[2] = Math.atan2(rowElement(0, 1), rowElement(0, 0));
      } else {
        rotate[0] = Math.atan2(-rowElement(2, 0), rowElement(1, 1));
        rotate[1] = 0;
      }
      t = rowElement(0, 0) + rowElement(1, 1) + rowElement(2, 2) + 1.0;
      if (t > 1e-4) {
        s = 0.5 / Math.sqrt(t);
        w = 0.25 / s;
        x = (rowElement(2, 1) - rowElement(1, 2)) * s;
        y = (rowElement(0, 2) - rowElement(2, 0)) * s;
        z = (rowElement(1, 0) - rowElement(0, 1)) * s;
      } else if ((rowElement(0, 0) > rowElement(1, 1)) && (rowElement(0, 0) > rowElement(2, 2))) {
        s = Math.sqrt(1.0 + rowElement(0, 0) - rowElement(1, 1) - rowElement(2, 2)) * 2.0;
        x = 0.25 * s;
        y = (rowElement(0, 1) + rowElement(1, 0)) / s;
        z = (rowElement(0, 2) + rowElement(2, 0)) / s;
        w = (rowElement(2, 1) - rowElement(1, 2)) / s;
      } else if (rowElement(1, 1) > rowElement(2, 2)) {
        s = Math.sqrt(1.0 + rowElement(1, 1) - rowElement(0, 0) - rowElement(2, 2)) * 2.0;
        x = (rowElement(0, 1) + rowElement(1, 0)) / s;
        y = 0.25 * s;
        z = (rowElement(1, 2) + rowElement(2, 1)) / s;
        w = (rowElement(0, 2) - rowElement(2, 0)) / s;
      } else {
        s = Math.sqrt(1.0 + rowElement(2, 2) - rowElement(0, 0) - rowElement(1, 1)) * 2.0;
        x = (rowElement(0, 2) + rowElement(2, 0)) / s;
        y = (rowElement(1, 2) + rowElement(2, 1)) / s;
        z = 0.25 * s;
        w = (rowElement(1, 0) - rowElement(0, 1)) / s;
      }
      quaternion = [x, y, z, w];
      result = new DecomposedMatrix;
      result.translate = translate;
      result.scale = scale;
      result.skew = skew;
      result.quaternion = quaternion;
      result.perspective = perspective;
      result.rotate = rotate;
      for (typeKey in result) {
        type = result[typeKey];
        for (k in type) {
          v = type[k];
          if (isNaN(v)) {
            type[k] = 0;
          }
        }
      }
      return result;
    };

    Matrix.prototype.toString = function() {
      var i, j, str, _i, _j;
      str = 'matrix3d(';
      for (i = _i = 0; _i <= 3; i = ++_i) {
        for (j = _j = 0; _j <= 3; j = ++_j) {
          str += roundf(this.els[i][j], 10);
          if (!(i === 3 && j === 3)) {
            str += ',';
          }
        }
      }
      str += ')';
      return str;
    };

    Matrix.matrixForTransform = cacheFn(function(transform) {
      var matrixEl, result, style, _ref, _ref1, _ref2;
      matrixEl = document.createElement('div');
      matrixEl.style.position = 'absolute';
      matrixEl.style.visibility = 'hidden';
      matrixEl.style[propertyWithPrefix("transform")] = transform;
      document.body.appendChild(matrixEl);
      style = window.getComputedStyle(matrixEl, null);
      result = (_ref = (_ref1 = style.transform) != null ? _ref1 : style[propertyWithPrefix("transform")]) != null ? _ref : (_ref2 = dynamics.tests) != null ? _ref2.matrixForTransform(transform) : void 0;
      document.body.removeChild(matrixEl);
      return result;
    });

    Matrix.fromTransform = function(transform) {
      var digits, elements, i, match, matrixElements, _i;
      match = transform != null ? transform.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0;
      if (match) {
        digits = match[1].split(',');
        digits = digits.map(parseFloat);
        if (digits.length === 6) {
          elements = [digits[0], digits[1], 0, 0, digits[2], digits[3], 0, 0, 0, 0, 1, 0, digits[4], digits[5], 0, 1];
        } else {
          elements = digits;
        }
      } else {
        elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }
      matrixElements = [];
      for (i = _i = 0; _i <= 3; i = ++_i) {
        matrixElements.push(elements.slice(i * 4, i * 4 + 4));
      }
      return new Matrix(matrixElements);
    };

    return Matrix;

  })();

  prefixFor = cacheFn(function(property) {
    var k, prefix, prop, propArray, propertyName, _i, _j, _len, _len1, _ref;
    if (document.body.style[property] !== void 0) {
      return '';
    }
    propArray = property.split('-');
    propertyName = "";
    for (_i = 0, _len = propArray.length; _i < _len; _i++) {
      prop = propArray[_i];
      propertyName += prop.substring(0, 1).toUpperCase() + prop.substring(1);
    }
    _ref = ["Webkit", "Moz", "ms"];
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      prefix = _ref[_j];
      k = prefix + propertyName;
      if (document.body.style[k] !== void 0) {
        return prefix;
      }
    }
    return '';
  });

  propertyWithPrefix = cacheFn(function(property) {
    var prefix;
    prefix = prefixFor(property);
    if (prefix === 'Moz') {
      return "" + prefix + (property.substring(0, 1).toUpperCase() + property.substring(1));
    }
    if (prefix !== '') {
      return "-" + (prefix.toLowerCase()) + "-" + (toDashed(property));
    }
    return toDashed(property);
  });

  rAF = typeof window !== "undefined" && window !== null ? window.requestAnimationFrame : void 0;

  animations = [];

  animationsTimeouts = [];

  slow = false;

  slowRatio = 1;

  if (typeof window !== "undefined" && window !== null) {
    window.addEventListener('keyup', function(e) {
      if (e.keyCode === 68 && e.shiftKey && e.ctrlKey) {
        return dynamics.toggleSlow();
      }
    });
  }

  if (rAF == null) {
    lastTime = 0;
    rAF = function(callback) {
      var currTime, id, timeToCall;
      currTime = Date.now();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function() {
        return callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  runLoopRunning = false;

  runLoopPaused = false;

  startRunLoop = function() {
    if (!runLoopRunning) {
      runLoopRunning = true;
      return rAF(runLoopTick);
    }
  };

  runLoopTick = function(t) {
    var animation, toRemoveAnimations, _i, _len;
    if (runLoopPaused) {
      rAF(runLoopTick);
      return;
    }
    toRemoveAnimations = [];
    for (_i = 0, _len = animations.length; _i < _len; _i++) {
      animation = animations[_i];
      if (!animationTick(t, animation)) {
        toRemoveAnimations.push(animation);
      }
    }
    animations = animations.filter(function(animation) {
      return toRemoveAnimations.indexOf(animation) === -1;
    });
    if (animations.length === 0) {
      return runLoopRunning = false;
    } else {
      return rAF(runLoopTick);
    }
  };

  animationTick = function(t, animation) {
    var key, properties, property, tt, y, _base, _base1, _ref;
    if (animation.tStart == null) {
      animation.tStart = t;
    }
    tt = (t - animation.tStart) / animation.options.duration;
    y = animation.curve(tt);
    properties = {};
    if (tt >= 1) {
      if (animation.curve.returnsToSelf) {
        properties = animation.properties.start;
      } else {
        properties = animation.properties.end;
      }
    } else {
      _ref = animation.properties.start;
      for (key in _ref) {
        property = _ref[key];
        properties[key] = interpolate(property, animation.properties.end[key], y);
      }
    }
    applyFrame(animation.el, properties);
    if (typeof (_base = animation.options).change === "function") {
      _base.change(animation.el, Math.min(1, tt));
    }
    if (tt >= 1) {
      if (typeof (_base1 = animation.options).complete === "function") {
        _base1.complete(animation.el);
      }
    }
    return tt < 1;
  };

  interpolate = function(start, end, y) {
    if ((start != null) && (start.interpolate != null)) {
      return start.interpolate(end, y);
    }
    return null;
  };

  startAnimation = function(el, properties, options, timeoutId) {
    var endProperties, isSVG, k, matrix, startProperties, transforms, v;
    if (timeoutId != null) {
      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
        return timeout.id !== timeoutId;
      });
    }
    dynamics.stop(el, {
      timeout: false
    });
    if (!options.animated) {
      dynamics.css(el, properties);
      if (typeof options.complete === "function") {
        options.complete(this);
      }
      return;
    }
    startProperties = getCurrentProperties(el, Object.keys(properties));
    properties = parseProperties(properties);
    endProperties = {};
    transforms = [];
    for (k in properties) {
      v = properties[k];
      if ((el.style != null) && transformProperties.contains(k)) {
        transforms.push([k, v]);
      } else {
        endProperties[k] = createInterpolable(v);
      }
    }
    if (transforms.length > 0) {
      isSVG = isSVGElement(el);
      if (isSVG) {
        matrix = new Matrix2D();
        matrix.applyProperties(transforms);
      } else {
        v = (transforms.map(function(transform) {
          return transformValueForProperty(transform[0], transform[1]);
        })).join(" ");
        matrix = Matrix.fromTransform(Matrix.matrixForTransform(v));
      }
      endProperties['transform'] = matrix.decompose();
      if (isSVG) {
        startProperties.transform.applyRotateCenter([endProperties.transform.props.rotate[1], endProperties.transform.props.rotate[2]]);
      }
    }
    addUnitsToNumberInterpolables(el, endProperties);
    animations.push({
      el: el,
      properties: {
        start: startProperties,
        end: endProperties
      },
      options: options,
      curve: options.type.call(options.type, options)
    });
    return startRunLoop();
  };

  timeouts = [];

  timeoutLastId = 0;

  setRealTimeout = function(timeout) {
    if (!isDocumentVisible()) {
      return;
    }
    return rAF(function() {
      if (timeouts.indexOf(timeout) === -1) {
        return;
      }
      return timeout.realTimeoutId = setTimeout(function() {
        timeout.fn();
        return cancelTimeout(timeout.id);
      }, timeout.delay);
    });
  };

  addTimeout = function(fn, delay) {
    var timeout;
    timeoutLastId += 1;
    timeout = {
      id: timeoutLastId,
      tStart: Date.now(),
      fn: fn,
      delay: delay,
      originalDelay: delay
    };
    setRealTimeout(timeout);
    timeouts.push(timeout);
    return timeoutLastId;
  };

  cancelTimeout = function(id) {
    return timeouts = timeouts.filter(function(timeout) {
      if (timeout.id === id && timeout.realTimeoutId) {
        clearTimeout(timeout.realTimeoutId);
      }
      return timeout.id !== id;
    });
  };

  leftDelayForTimeout = function(time, timeout) {
    var consumedDelay;
    if (time != null) {
      consumedDelay = time - timeout.tStart;
      return timeout.originalDelay - consumedDelay;
    } else {
      return timeout.originalDelay;
    }
  };

  if (typeof window !== "undefined" && window !== null) {
    window.addEventListener('unload', function() {});
  }

  timeBeforeVisibilityChange = null;

  observeVisibilityChange(function(visible) {
    var animation, difference, timeout, _i, _j, _k, _len, _len1, _len2, _results;
    runLoopPaused = !visible;
    if (!visible) {
      timeBeforeVisibilityChange = Date.now();
      _results = [];
      for (_i = 0, _len = timeouts.length; _i < _len; _i++) {
        timeout = timeouts[_i];
        _results.push(clearTimeout(timeout.realTimeoutId));
      }
      return _results;
    } else {
      if (runLoopRunning) {
        difference = Date.now() - timeBeforeVisibilityChange;
        for (_j = 0, _len1 = animations.length; _j < _len1; _j++) {
          animation = animations[_j];
          if (animation.tStart != null) {
            animation.tStart += difference;
          }
        }
      }
      for (_k = 0, _len2 = timeouts.length; _k < _len2; _k++) {
        timeout = timeouts[_k];
        timeout.delay = leftDelayForTimeout(timeBeforeVisibilityChange, timeout);
        setRealTimeout(timeout);
      }
      return timeBeforeVisibilityChange = null;
    }
  });

  dynamics = {};

  dynamics.linear = function() {
    return function(t) {
      return t;
    };
  };

  dynamics.spring = function(options) {
    var A1, A2, decal, frequency, friction, s;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.spring.defaults);
    frequency = Math.max(1, options.frequency / 20);
    friction = Math.pow(20, options.friction / 100);
    s = options.anticipationSize / 1000;
    decal = Math.max(0, s);
    A1 = function(t) {
      var M, a, b, x0, x1;
      M = 0.8;
      x0 = s / (1 - s);
      x1 = 0;
      b = (x0 - (M * x1)) / (x0 - x1);
      a = (M - b) / x0;
      return (a * t * options.anticipationStrength / 100) + b;
    };
    A2 = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };
    return function(t) {
      var A, At, a, angle, b, frictionT, y0, yS;
      frictionT = (t / (1 - s)) - (s / (1 - s));
      if (t < s) {
        yS = (s / (1 - s)) - (s / (1 - s));
        y0 = (0 / (1 - s)) - (s / (1 - s));
        b = Math.acos(1 / A1(yS));
        a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
        A = A1;
      } else {
        A = A2;
        b = 0;
        a = 1;
      }
      At = A(frictionT);
      angle = frequency * (t - s) * a + b;
      return 1 - (At * Math.cos(angle));
    };
  };

  dynamics.bounce = function(options) {
    var A, fn, frequency, friction;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.bounce.defaults);
    frequency = Math.max(1, options.frequency / 20);
    friction = Math.pow(20, options.friction / 100);
    A = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };
    fn = function(t) {
      var At, a, angle, b;
      b = -3.14 / 2;
      a = 1;
      At = A(t);
      angle = frequency * t * a + b;
      return At * Math.cos(angle);
    };
    fn.returnsToSelf = true;
    return fn;
  };

  dynamics.gravity = function(options) {
    var L, bounciness, curves, elasticity, fn, getPointInCurve, gravity;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.gravity.defaults);
    bounciness = Math.min(options.bounciness / 1250, 0.8);
    elasticity = options.elasticity / 1000;
    gravity = 100;
    curves = [];
    L = (function() {
      var b, curve;
      b = Math.sqrt(2 / gravity);
      curve = {
        a: -b,
        b: b,
        H: 1
      };
      if (options.returnsToSelf) {
        curve.a = 0;
        curve.b = curve.b * 2;
      }
      while (curve.H > 0.001) {
        L = curve.b - curve.a;
        curve = {
          a: curve.b,
          b: curve.b + L * bounciness,
          H: curve.H * bounciness * bounciness
        };
      }
      return curve.b;
    })();
    getPointInCurve = function(a, b, H, t) {
      var c, t2;
      L = b - a;
      t2 = (2 / L) * t - 1 - (a * 2 / L);
      c = t2 * t2 * H - H + 1;
      if (options.returnsToSelf) {
        c = 1 - c;
      }
      return c;
    };
    (function() {
      var L2, b, curve, _results;
      b = Math.sqrt(2 / (gravity * L * L));
      curve = {
        a: -b,
        b: b,
        H: 1
      };
      if (options.returnsToSelf) {
        curve.a = 0;
        curve.b = curve.b * 2;
      }
      curves.push(curve);
      L2 = L;
      _results = [];
      while (curve.b < 1 && curve.H > 0.001) {
        L2 = curve.b - curve.a;
        curve = {
          a: curve.b,
          b: curve.b + L2 * bounciness,
          H: curve.H * elasticity
        };
        _results.push(curves.push(curve));
      }
      return _results;
    })();
    fn = function(t) {
      var curve, i, v;
      i = 0;
      curve = curves[i];
      while (!(t >= curve.a && t <= curve.b)) {
        i += 1;
        curve = curves[i];
        if (!curve) {
          break;
        }
      }
      if (!curve) {
        v = options.returnsToSelf ? 0 : 1;
      } else {
        v = getPointInCurve(curve.a, curve.b, curve.H, t);
      }
      return v;
    };
    fn.returnsToSelf = options.returnsToSelf;
    return fn;
  };

  dynamics.forceWithGravity = function(options) {
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.forceWithGravity.defaults);
    options.returnsToSelf = true;
    return dynamics.gravity(options);
  };

  dynamics.bezier = (function() {
    var Bezier, Bezier_, yForX;
    Bezier_ = function(t, p0, p1, p2, p3) {
      return (Math.pow(1 - t, 3) * p0) + (3 * Math.pow(1 - t, 2) * t * p1) + (3 * (1 - t) * Math.pow(t, 2) * p2) + Math.pow(t, 3) * p3;
    };
    Bezier = function(t, p0, p1, p2, p3) {
      return {
        x: Bezier_(t, p0.x, p1.x, p2.x, p3.x),
        y: Bezier_(t, p0.y, p1.y, p2.y, p3.y)
      };
    };
    yForX = function(xTarget, Bs, returnsToSelf) {
      var B, aB, i, lower, percent, upper, x, xTolerance, _i, _len;
      B = null;
      for (_i = 0, _len = Bs.length; _i < _len; _i++) {
        aB = Bs[_i];
        if (xTarget >= aB(0).x && xTarget <= aB(1).x) {
          B = aB;
        }
        if (B !== null) {
          break;
        }
      }
      if (!B) {
        if (returnsToSelf) {
          return 0;
        } else {
          return 1;
        }
      }
      xTolerance = 0.0001;
      lower = 0;
      upper = 1;
      percent = (upper + lower) / 2;
      x = B(percent).x;
      i = 0;
      while (Math.abs(xTarget - x) > xTolerance && i < 100) {
        if (xTarget > x) {
          lower = percent;
        } else {
          upper = percent;
        }
        percent = (upper + lower) / 2;
        x = B(percent).x;
        i += 1;
      }
      return B(percent).y;
    };
    return function(options) {
      var Bs, fn, points;
      if (options == null) {
        options = {};
      }
      points = options.points;
      Bs = (function() {
        var i, k, _fn;
        Bs = [];
        _fn = function(pointA, pointB) {
          var B2;
          B2 = function(t) {
            return Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
          };
          return Bs.push(B2);
        };
        for (i in points) {
          k = parseInt(i);
          if (k >= points.length - 1) {
            break;
          }
          _fn(points[k], points[k + 1]);
        }
        return Bs;
      })();
      fn = function(t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return yForX(t, Bs, this.returnsToSelf);
        }
      };
      fn.returnsToSelf = points[points.length - 1].y === 0;
      return fn;
    };
  })();

  dynamics.easeInOut = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeInOut.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0.92 - (friction / 1000),
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 0.08 + (friction / 1000),
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.easeIn = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeIn.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0.92 - (friction / 1000),
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 1,
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.easeOut = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeOut.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0,
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 0.08 + (friction / 1000),
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.spring.defaults = {
    frequency: 300,
    friction: 200,
    anticipationSize: 0,
    anticipationStrength: 0
  };

  dynamics.bounce.defaults = {
    frequency: 300,
    friction: 200
  };

  dynamics.forceWithGravity.defaults = dynamics.gravity.defaults = {
    bounciness: 400,
    elasticity: 200
  };

  dynamics.easeInOut.defaults = dynamics.easeIn.defaults = dynamics.easeOut.defaults = {
    friction: 500
  };

  dynamics.css = makeArrayFn(function(el, properties) {
    return applyProperties(el, properties, true);
  });

  dynamics.animate = makeArrayFn(function(el, properties, options) {
    var id;
    if (options == null) {
      options = {};
    }
    options = clone(options);
    applyDefaults(options, {
      type: dynamics.easeInOut,
      duration: 1000,
      delay: 0,
      animated: true
    });
    options.duration = Math.max(0, options.duration * slowRatio);
    options.delay = Math.max(0, options.delay);
    if (options.delay === 0) {
      return startAnimation(el, properties, options);
    } else {
      id = dynamics.setTimeout(function() {
        return startAnimation(el, properties, options, id);
      }, options.delay);
      return animationsTimeouts.push({
        id: id,
        el: el
      });
    }
  });

  dynamics.stop = makeArrayFn(function(el, options) {
    if (options == null) {
      options = {};
    }
    if (options.timeout == null) {
      options.timeout = true;
    }
    if (options.timeout) {
      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
        if (timeout.el === el && ((options.filter == null) || options.filter(timeout))) {
          dynamics.clearTimeout(timeout.id);
          return false;
        }
        return true;
      });
    }
    return animations = animations.filter(function(animation) {
      return animation.el !== el;
    });
  });

  dynamics.setTimeout = function(fn, delay) {
    return addTimeout(fn, delay * slowRatio);
  };

  dynamics.clearTimeout = function(id) {
    return cancelTimeout(id);
  };

  dynamics.toggleSlow = function() {
    slow = !slow;
    if (slow) {
      slowRatio = 3;
    } else {
      slowRatio = 1;
    }
    return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("dynamics.js: slow animations " + (slow ? "enabled" : "disabled")) : void 0 : void 0;
  };

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = dynamics;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return dynamics;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.dynamics = dynamics;
  }

}).call(this);


/***/ }),
/* 11 */
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

var	fixUrls = __webpack_require__(12);

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
/* 12 */
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


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);