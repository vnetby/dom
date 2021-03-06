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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DOM/DOM.js":
/*!********************!*\
  !*** ./DOM/DOM.js ***!
  \********************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony import */ var _css_DOM_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/DOM.less */ "./DOM/css/DOM.less");
/* harmony import */ var _css_DOM_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_DOM_less__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();



var DOM = /*#__PURE__*/function () {
  function DOM() {
    _classCallCheck(this, DOM);

    this.body = document.body;
    this.scrollBarWidth = this.getScrollBarWidth();
  }

  _createClass(DOM, [{
    key: "hasDomAttr",
    value: function hasDomAttr(item, attr) {
      var fullAttr = 'data-dom-' + attr;
      return item.hasAttribute(fullAttr);
    }
  }, {
    key: "getDomAttr",
    value: function getDomAttr(item, attr) {
      var fullAttr = 'data-dom-' + attr;
      return item.getAttribute(fullAttr);
    }
  }, {
    key: "setDomAttr",
    value: function setDomAttr(item, attr, value) {
      var fullAttr = 'data-dom-' + attr;
      item.setAttribute(fullAttr, value);
      return item;
    }
  }, {
    key: "removeCss",
    value: function removeCss(item, styles) {
      this.getDomCollection(item).forEach(function (item) {
        var attr = item.getAttribute("style");
        if (!attr) return false;
        styles.forEach(function (style) {
          var regex = new RegExp("".concat(style, "[^;]+;"), "g");
          attr = attr.replace(regex, "");
        });
        item.setAttribute("style", attr);
      });
    }
  }, {
    key: "addCss",
    value: function addCss(item, styles) {
      this.getDomCollection(item).forEach(function (item) {
        var attr = item.getAttribute("style");
        attr = attr ? attr : "";
        Object.keys(styles).forEach(function (key) {
          var val = styles[key];

          if (attr.includes(key)) {
            var regex = new RegExp("".concat(key, "[^;]+;"));
            attr = attr.replace(regex, "".concat(key, ": ").concat(val, ";"));
          } else {
            attr += ";".concat(key, ": ").concat(val, ";");
          }
        });
        attr = attr.replace(/[;]+/g, ";");
        item.setAttribute("style", attr);
      });
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(id) {
      var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!id) return;

      var item = this.__getEl(id);

      if (!item) return;
      var currentScroll = window.pageYOffset;
      var endScroll = item.getBoundingClientRect().y + window.pageYOffset - margin;
      var step = (endScroll - currentScroll) / 15;
      this.animateScroll({
        currentScroll: currentScroll,
        endScroll: endScroll,
        step: step
      });
    }
  }, {
    key: "animateScroll",
    value: function animateScroll(sets) {
      var _this = this;

      window.requestAnimationFrame(function () {
        if (sets.currentScroll < sets.endScroll && sets.step > 0 || sets.currentScroll > sets.endScroll && sets.step < 0) {
          sets.currentScroll += sets.step;
          window.scrollTo(0, sets.currentScroll);

          _this.animateScroll(sets);
        }
      });
    }
  }, {
    key: "bodyOverflowAuto",
    value: function bodyOverflowAuto() {
      // this.css(this.body, {
      //   overflow: "auto",
      //   "padding-right": 0
      // });
      this.removeCss(this.body, ['overflow', 'padding-right']);
      var paddingItems = this.findAll(".padding-on-body-hide");
      if (!paddingItems || !paddingItems.length) return;

      this.__removePaddingItems(paddingItems);
    }
  }, {
    key: "bodyOverflowHidden",
    value: function bodyOverflowHidden() {
      this.css(this.body, {
        overflow: "hidden",
        "padding-right": this.scrollBarWidth + "px"
      });
      var paddingItems = this.findAll(".padding-on-body-hide");
      if (!paddingItems || !paddingItems.length) return;

      this.__addItemsPadding(paddingItems);
    }
  }, {
    key: "__removePaddingItems",
    value: function __removePaddingItems(items) {
      items.forEach(function (item) {
        var padding = item.dataset.originPadding;
        padding = padding ? padding : 0;
        padding = padding + "px";
        dom.css(item, {
          "padding-right": padding
        });
        dom.removeClass(item, 'dom-padding-scroll');
      });
    }
  }, {
    key: "__addItemsPadding",
    value: function __addItemsPadding(items) {
      items.forEach(function (item) {
        var padding = parseFloat(window.getComputedStyle(item).paddingRight);
        if (!item.getAttribute("data-origin-padding")) item.setAttribute("data-origin-padding", padding);
        var hiddenPadding = item.dataset.hiddenPadding;

        if (!hiddenPadding) {
          hiddenPadding = padding + dom.scrollBarWidth;
          item.setAttribute("data-hidden-padding", hiddenPadding);
        }

        dom.css(item, {
          "padding-right": hiddenPadding + "px"
        });
        dom.addClass(item, 'dom-padding-scroll');
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass(el, className) {
      var _this2 = this;

      this.getDomCollection(el).forEach(function (el) {
        var allClassNames = _this2.getClassName(className);

        allClassNames.forEach(function (name) {
          if (el.classList.contains(name)) el.classList.remove(name);
        });
      });
    }
  }, {
    key: "addClass",
    value: function addClass(el, className) {
      var _this3 = this;

      this.getDomCollection(el).forEach(function (el) {
        var allClassNames = _this3.getClassName(className);

        var res = [];

        if (_this3.isDomEl(el)) {
          res.push(el);
        }

        if (_this3.isDomCollection(el)) {
          res = el;
        }

        res.forEach(function (item) {
          allClassNames.forEach(function (name) {
            if (!name) return;
            if (!item.classList.contains(name)) item.classList.add(name);
          });
        });
      });
    }
  }, {
    key: "isDomCollection",
    value: function isDomCollection(el) {
      if (_typeof(el) !== 'object') return false;
      if (Array.isArray(el) && !el.length) return false;
      if (el.tagName) return false;
      if (_typeof(el[0]) === 'object' && el[0].tagName) return true;
      return false;
    }
  }, {
    key: "getClassName",
    value: function getClassName(className) {
      var arr = [];
      var ex = className.split(" ");
      ex.forEach(function (item) {
        arr.push(item.trim());
      });
      return arr;
    }
  }, {
    key: "switchClass",
    value: function switchClass(el, className) {
      this.getDomCollection(el).forEach(function (el) {
        if (el.classList.contains(className)) {
          el.classList.remove(className);
        } else {
          el.classList.add(className);
        }
      });
    }
  }, {
    key: "create",
    value: function create(el) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var div = document.createElement(el);
      div.className = className;
      return div;
    }
  }, {
    key: "childs",
    value: function childs(el) {
      var _this4 = this;

      var res = [];
      this.getDomCollection(el).forEach(function (el) {
        var childs = el.childNodes;

        _this4.forEach(childs, function (item) {
          if (item.tagName) res.push(item);
        });
      });
      return res.length ? res : false;
    }
  }, {
    key: "isDomEl",
    value: function isDomEl(el) {
      if (_typeof(el) === 'object' && el.tagName) return true;
      return false;
    }
  }, {
    key: "slideDown",
    value: function slideDown(el) {
      var _this5 = this;

      if (!el.classList.contains('dom-slide-up')) return;
      this.addCss(el, {
        position: 'fixed',
        height: 'auto',
        width: el.offsetWidth + 'px'
      });
      setTimeout(function () {
        var height = _this5.getHeight(el);

        _this5.addCss(el, {
          height: '0px'
        });

        _this5.removeCss(el, ['position', 'width']);

        var transition = _this5.__getSetSlideTransition(el);

        _this5.addCss(el, {
          opacity: 1,
          height: "".concat(height, "px")
        });

        setTimeout(function () {
          _this5.removeClass(el, 'dom-slide-up');

          setTimeout(function () {
            _this5.removeCss(el, ['height']);
          }, 100);
        }, transition);
      }, 20);
    }
  }, {
    key: "slideUp",
    value: function slideUp(el) {
      var _this6 = this;

      if (el.classList.contains('dom-slide-up')) return;

      var transition = this.__getSetSlideTransition(el);

      var height = this.getHeight(el);
      this.addCss(el, {
        height: "".concat(height, "px")
      });
      setTimeout(function () {
        _this6.addCss(el, {
          'opacity': 0,
          height: '0px',
          overflow: 'hidden'
        });

        setTimeout(function () {
          _this6.addClass(el, 'dom-slide-up');
        }, transition);
      }, 20);
    }
  }, {
    key: "toggleSlide",
    value: function toggleSlide(el) {
      if (!el.classList.contains('dom-slide-up')) {
        this.slideUp(el);
        return 'slideUp';
      } else {
        this.slideDown(el);
        return 'slideDown';
      }
    }
  }, {
    key: "__getSetSlideTransition",
    value: function __getSetSlideTransition(el) {
      var transitionDuration = this.getStyle(el, 'transitionDuration');

      if (transitionDuration === '0s') {
        this.addCss(el, {
          'transition-duration': '.3s'
        });
      }

      return parseFloat(transitionDuration);
    }
  }, {
    key: "getStyle",
    value: function getStyle(el, style) {
      var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof style === 'string') {
        return fn ? fn(window.getComputedStyle(el)[style]) : window.getComputedStyle(el)[style];
      }

      var css = window.getComputedStyle(el);
      return style.map(function (item) {
        return fn ? fn(css[item]) : css[item];
      });
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      var sp = this.getStyle(el, ['paddingTop', 'paddingBottom', 'marginTop', 'marginBottom'], function (item) {
        return parseFloat(item);
      });
      return sp.reduce(function (total, curr) {
        return total + curr;
      }) + el.offsetHeight;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(el, after) {
      after.parentNode.insertBefore(el, after.nextSibling);
      return this;
    }
  }, {
    key: "remove",
    value: function remove(el) {
      this.getDomCollection(el).forEach(function (el) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    }
  }, {
    key: "append",
    value: function append(el, parent) {
      parent.appendChild(el);
    }
  }, {
    key: "findParent",
    value: function findParent(el, sel) {}
  }, {
    key: "getScrollBarWidth",
    value: function getScrollBarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  }, {
    key: "find",
    value: function find(selector, where) {
      var searchIn = this.__getWhere(where);

      var all = searchIn.querySelectorAll(selector);
      if (!all.length) return false;
      if (all.length === 1) return all[0];
      var arr = [];

      for (var i = 0; i < all.length; i++) {
        arr.push(all[i]);
      }

      return arr;
    }
  }, {
    key: "onClick",
    value: function onClick(selector, fn, where) {
      this.getDomCollection(selector, where).forEach(function (item) {
        item.addEventListener('click', fn);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(selector, fn, where) {
      this.getDomCollection(selector, where).forEach(function (item) {
        item.addEventListener('change', fn);
      });
    }
  }, {
    key: "onMouseenter",
    value: function onMouseenter(selector, fn, where) {
      this.getDomCollection(selector, where).forEach(function (item) {
        item.addEventListener('mouseenter', fn);
      });
    }
  }, {
    key: "findAll",
    value: function findAll(selector, where) {
      var _this7 = this;

      var searchIn = [];

      if (this.isDomCollection(where)) {
        searchIn = where.map(function (item) {
          return _this7.__getWhere(item);
        });
      } else {
        searchIn.push(this.__getWhere(where));
      }

      var res = [];
      searchIn.forEach(function (wrap) {
        if (!wrap) return;
        var all = wrap.querySelectorAll(selector);

        for (var i = 0; i < all.length; i++) {
          res.push(all[i]);
        }
      }); // this.extend(res);

      return res;
    }
  }, {
    key: "findFirst",
    value: function findFirst(selector, where) {
      var searchIn = this.__getWhere(where);

      var obj = searchIn.querySelector(selector);
      return obj;
    }
  }, {
    key: "extend",
    value: function extend(el) {
      var _this8 = this;

      if (_typeof(el) !== 'object') return;
      if (!el.__proto__.findAll) el.__proto__.findAll = function (selector) {
        return _this8.findAll(selector, el);
      };
      if (!el.__proto__.firstChild) el.__proto__.firstChild = function () {
        return _this8.firstChild(el);
      }; // el.prototype.findFirst = this.findFirst;
    }
  }, {
    key: "firstChild",
    value: function firstChild(el) {
      var _this9 = this;

      var res;

      if (this.isDomCollection(el)) {
        res = [];
        el.forEach(function (item) {
          return res.push(_this9.__firstChild(item));
        });
        return res;
      } else {
        return this.__firstChild(el);
      }
    }
  }, {
    key: "__firstChild",
    value: function __firstChild(el) {
      var children = el.childNodes;
      var total = children.length;

      for (var i = 0; i < total; i++) {
        if (children[i].tagName) {
          return children[i];
        }
      }

      return null;
    }
  }, {
    key: "getDomCollection",
    value: function getDomCollection(el, where) {
      var res = [];
      if (!el) return res;

      if (typeof el === 'string') {
        try {
          res = dom.findAll(el, this.__getWhere(where));
        } catch (err) {
          res = [];
        }

        return res;
      }

      if (this.isDomCollection(el)) {
        res = el;
      } else {
        if (this.isDomEl(el)) {
          res.push(el);
        }
      }

      return res;
    }
  }, {
    key: "css",
    value: function css(el) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      el = this.getDomCollection(el);
      el.forEach(function (el) {
        var keys = Object.keys(obj);
        var values = Object.values(obj);
        var str = "";
        keys.forEach(function (key, i) {
          str += "".concat(key, ": ").concat(values[i], "; ");
        });
        el.setAttribute("style", str);
      });
    }
  }, {
    key: "getContainer",
    value: function getContainer(container) {
      var wrap = false;

      if (container) {
        if (_typeof(container) === "object") {
          if (container.tagName) {
            wrap = container;
          }
        }
      }

      if (wrap) return wrap;

      try {
        wrap = this.findFirst(container);
      } catch (e) {
        console.error(e);
      }

      return wrap ? wrap : this.body;
    }
  }, {
    key: "__getWhere",
    value: function __getWhere(where) {
      var searchIn;

      if (where) {
        if (typeof where === "string") {
          searchIn = document.querySelector(where);
        } else {
          searchIn = where;
        }
      }

      return searchIn ? searchIn : document;
    }
  }, {
    key: "on",
    value: function on(_ref) {
      var e = _ref.e,
          el = _ref.el,
          _on = _ref.on;

      if (Array.isArray(el)) {
        el.forEach(function (item) {
          item.addEventListener(e, _on.bind(item, item));
        });
      } else {
        el.addEventListener(e, _on.bind(el, el));
      }
    }
  }, {
    key: "dispath",
    value: function dispath(el, e, sets) {
      return this.dispatch(el, e, sets);
    }
  }, {
    key: "dispatch",
    value: function dispatch(el, e) {
      var sets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var realSets = _objectSpread({
        bubbles: false,
        cancelable: false,
        detail: undefined
      }, sets);

      var ev = new CustomEvent(e, realSets);
      el.dispatchEvent(ev);
      return this;
    }
  }, {
    key: "addPreloader",
    value: function addPreloader(container) {
      var _this10 = this;

      var preloaderHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.preloader;
      var wrap;

      if (typeof container === 'string') {
        wrap = dom.findFirst(container);
      } else {
        wrap = container;
      }

      if (!wrap) return;

      if (!this.findFirst(".ajax-preloader", wrap)) {
        wrap.appendChild(preloaderHTML);
        setTimeout(function () {
          _this10.addClass(preloaderHTML, "visible");
        }, 20);
      }
    }
  }, {
    key: "strToDom",
    value: function strToDom(str) {
      if (typeof str !== 'string') return false;
      var div = document.createElement("div");
      div.innerHTML = str;
      var childs = dom.childs(div);
      if (!childs) return false;
      var wrap = document.createDocumentFragment();
      childs.map(function (item) {
        return wrap.appendChild(item);
      });
      return wrap;
    }
  }, {
    key: "prev",
    value: function prev(item) {
      var prev = item.previousSibling;

      while (prev && !prev.tagName) {
        prev = prev.previousSibling;
      }

      return prev;
    }
  }, {
    key: "forEach",
    value: function forEach() {
      var callBack = false;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var totalArgs = args.length;

      for (var i = 0; i < totalArgs; i++) {
        if (typeof args[i] === "function") {
          callBack = args[i];
          args.splice(i, 1);
          break;
        }
      }

      args.forEach(function (item) {
        if (Array.isArray(item)) {
          var total = item.length;

          for (var _i = 0; _i < total; _i++) {
            callBack(item[_i], _i, item);
          }
        } else {
          for (var key in item) {
            callBack(item[key], key, item);
          }
        }
      });
    }
  }, {
    key: "getDirectionMouse",
    value: function getDirectionMouse(ev, obj) {
      var w = obj.offsetWidth,
          h = obj.offsetHeight,
          x = ev.pageX - obj.offsetLeft - w / 2 * (w > h ? h / w : 1),
          y = ev.pageY - obj.offsetTop - h / 2 * (h > w ? w / h : 1),
          d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
      return d;
    }
  }, {
    key: "isOverflow",
    value: function isOverflow(item) {
      item = this.getItem(item);
      if (!item) return;
      var res = {
        x: false,
        y: false
      };

      if (item.scrollHeight > item.offsetHeight) {
        res.y = true;
      }

      if (item.scrollWidth > item.offsetWidth) {
        res.x = true;
      }

      return res;
    }
  }, {
    key: "getItem",
    value: function getItem(item) {
      if (_typeof(item) === "object") {
        if (item.tagName) {
          return item;
        }
      }

      if (typeof item === "string") {
        return document.querySelector(item);
      }

      return false;
    }
  }, {
    key: "ajax",
    value: function ajax(_ref2) {
      var _this11 = this;

      var url = _ref2.url,
          data = _ref2.data,
          preloader = _ref2.preloader,
          timeout = _ref2.timeout,
          minTimeResponse = _ref2.minTimeResponse,
          preloaderHTML = _ref2.preloaderHTML;
      timeout = timeout ? timeout : 0;
      minTimeResponse = minTimeResponse ? minTimeResponse : 0;
      var type = data ? "post" : "get";
      var requestData;

      if (_typeof(data) === "object") {
        if (data instanceof FormData) {
          requestData = data;
        } else {
          requestData = new FormData();

          for (var key in data) {
            requestData.append(key, data[key]);
          }
        }
      }

      if (preloader) {
        this.addPreloader(preloader, preloaderHTML);
      }

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var countTime = 0;
          var interval = setInterval(function () {
            countTime++;
          }, 1);
          var http = new XMLHttpRequest();
          http.open(type, url);
          http.send(requestData);

          http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
              if (countTime < minTimeResponse) {
                var lastTime = minTimeResponse - countTime;
                setTimeout(function () {
                  clearInterval(interval);

                  if (preloader) {
                    _this11.removePreloader(preloader);
                  }

                  resolve(http.responseText);
                }, lastTime);
              } else {
                clearInterval(interval);

                if (preloader) {
                  _this11.removePreloader(preloader);
                }

                resolve(http.responseText);
              }
            }
          };
        }, timeout);
      });
    }
  }, {
    key: "createRequestDataString",
    value: function createRequestDataString(data) {
      if (!data) return null;
      var str = "";
      Object.keys(data).forEach(function (key, i) {
        var val = data[key];

        if (!i) {
          str += "".concat(key, "=").concat(val);
        } else {
          str += "&".concat(key, "=").concat(val);
        }
      });
      return str;
    }
  }, {
    key: "__getEl",
    value: function __getEl(el) {
      if (el) {
        if (typeof el === "string") {
          el = document.querySelector(el);
        }
      }

      return el;
    }
  }, {
    key: "isInViewport",
    value: function isInViewport(obj) {
      var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var el = this.__getEl(obj);

      if (!el) return;
      var top = el.getBoundingClientRect().top + window.pageYOffset - margin - window.innerHeight;
      var bottom = top + window.innerHeight * 2 + el.offsetHeight + margin * 2;

      if (window.pageYOffset > top && window.pageYOffset <= bottom) {
        return true;
      }

      return false;
    }
  }]);

  return DOM;
}();

var dom = new DOM();


/***/ }),

/***/ "./DOM/css/DOM.less":
/*!**************************!*\
  !*** ./DOM/css/DOM.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./DOM/css/addBrowserClass.less":
/*!**************************************!*\
  !*** ./DOM/css/addBrowserClass.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./DOM/domBrowserDetect.js":
/*!*********************************!*\
  !*** ./DOM/domBrowserDetect.js ***!
  \*********************************/
/*! exports provided: addBrowserClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBrowserClass", function() { return addBrowserClass; });
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_addBrowserClass_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/addBrowserClass.less */ "./DOM/css/addBrowserClass.less");
/* harmony import */ var _css_addBrowserClass_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_addBrowserClass_less__WEBPACK_IMPORTED_MODULE_1__);
var _require = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js"),
    detect = _require.detect;

var browser = detect();


var BROWSER_CLASSES = {
  ie: 'browser-ie',
  chrome: 'browser-chrome',
  firefox: 'browser-firefox',
  edge: 'browser-edge'
};
var ORIENTATION_CLASSES = {
  'jshelper-orientation-potrait': 'orientation-potrait',
  'jshelper-orientation-landscape': 'orientation-landscape'
};
var TOUCH_CLASSES = {
  'jshelper-touch': 'touch',
  'jshelper-notouch': 'notouch'
};
var addBrowserClass = function addBrowserClass() {
  initHelpers();
  initDeviceDetect();
  window.browserDetect = browser.name;
  var className = BROWSER_CLASSES[browser.name] ? BROWSER_CLASSES[browser.name] : BROWSER_CLASSES['chrome'];
  document.body.classList.add(className);
};

var initDeviceDetect = function initDeviceDetect() {
  var className = 'device-desktop';

  if (mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
    className = 'device-mobile';
  }

  if (mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__["isTablet"]) {
    className = 'device-tablet';
  }

  var currClass = document.body.getAttribute('class') || '';
  document.body.setAttribute('class', currClass.replace(/device-desktop|device-mobile|device-tablet/, ''));
  document.body.classList.add(className);
};

var initHelpers = function initHelpers() {
  var wrap = document.createDocumentFragment();
  wrap.appendChild(createHelper({
    helperClass: 'orientation',
    names: ORIENTATION_CLASSES
  }));
  wrap.appendChild(createHelper({
    helperClass: 'touch',
    names: TOUCH_CLASSES
  }));
  document.body.appendChild(wrap);
};

var createHelper = function createHelper(_ref) {
  var helperClass = _ref.helperClass,
      names = _ref.names;
  var target = document.createElement('span');
  target.className = "js-helper js-helper-".concat(helperClass);
  observeHelper({
    target: target,
    names: names
  });
  return target;
};

var observeHelper = function observeHelper(_ref2) {
  var target = _ref2.target,
      names = _ref2.names;
  target.addEventListener('animationstart', function (e) {
    setBodyClass({
      names: names,
      e: e
    });
  });
};

var setBodyClass = function setBodyClass(_ref3) {
  var names = _ref3.names,
      e = _ref3.e;
  var regex = new RegExp(Object.values(names).join('|'), 'i');
  document.body.setAttribute('class', document.body.getAttribute('class').replace(regex, ''));
  document.body.classList.add(names[e.animationName]);
};

/***/ }),

/***/ "./DOM/domStart.js":
/*!*************************!*\
  !*** ./DOM/domStart.js ***!
  \*************************/
/*! exports provided: domStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domStart", function() { return domStart; });
/* harmony import */ var _domWindowResponsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domWindowResponsive.js */ "./DOM/domWindowResponsive.js");
/* harmony import */ var _domBrowserDetect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBrowserDetect.js */ "./DOM/domBrowserDetect.js");


var domStart = function domStart() {
  Object(_domBrowserDetect_js__WEBPACK_IMPORTED_MODULE_1__["addBrowserClass"])();
  Object(_domWindowResponsive_js__WEBPACK_IMPORTED_MODULE_0__["setWindowResponsive"])();
};

/***/ }),

/***/ "./DOM/domWindowResponsive.js":
/*!************************************!*\
  !*** ./DOM/domWindowResponsive.js ***!
  \************************************/
/*! exports provided: setWindowResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWindowResponsive", function() { return setWindowResponsive; });
var RESPONSIVE = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
  LARGE: 'large-screen'
};
var setWindowResponsive = function setWindowResponsive() {
  window.isMobile = function () {
    return window.innerWidth < window.responsive.mobile;
  };

  window.isTablet = function () {
    return window.innerWidth >= window.responsive.mobile && window.innerWidth < window.responsive.tablet;
  };

  window.isDesktop = function () {
    return window.innerWidth >= window.responsive.tablet && window.innerWidth < window.responsive.desktop;
  };

  window.isLargeScreen = function () {
    return window.innerWidth >= window.responsive.desktop;
  };

  window.getScreen = function () {
    if (window.isMobile()) {
      return RESPONSIVE.MOBILE;
    }

    if (window.isTablet()) {
      return RESPONSIVE.TABLET;
    }

    if (window.isDesktop()) {
      return RESPONSIVE.DESKTOP;
    }

    if (window.isLargeScreen()) {
      return RESPONSIVE.LARGE;
    }
  };

  window.isXs = function () {
    return window.innerWidth < 576;
  };

  window.isSm = function () {
    return window.innerWidth < 768;
  };

  window.isMd = function () {
    return window.innerWidth < 992;
  };

  window.isLg = function () {
    return window.innerWidth < 1024;
  };

  window.isXl = function () {
    return window.innerWidth < 1200;
  };

  window.isXxl = function () {
    return window.innerWidth < 1660;
  };

  window.getSize = function () {
    if (window.isXs()) return 'xs';
    if (window.isSm()) return 'sm';
    if (window.isMd()) return 'md';
    if (window.isLg()) return 'lg';
    if (window.isXl()) return 'xl';
    if (window.isXxl()) return 'xxl';
  };
};

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./index.js");

Object(___WEBPACK_IMPORTED_MODULE_0__["domStart"])();

console.log(___WEBPACK_IMPORTED_MODULE_0__["dom"]);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: domStart, dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_domStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/domStart */ "./DOM/domStart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "domStart", function() { return _DOM_domStart__WEBPACK_IMPORTED_MODULE_0__["domStart"]; });

/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/DOM */ "./DOM/DOM.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return _DOM_DOM__WEBPACK_IMPORTED_MODULE_1__["dom"]; });




/***/ }),

/***/ "./node_modules/detect-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/detect-browser/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
    }
    return BrowserInfo;
}());
exports.BrowserInfo = BrowserInfo;
var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());
exports.NodeInfo = NodeInfo;
var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());
exports.BotInfo = BotInfo;
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['vivaldi', /Vivaldi\/([0-9\.]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /Edg\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FBAV\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
    ['Search Bot', SEARCHBOT_OS_REGEX],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
exports.detect = detect;
function parseUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    var matchedRule = ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
        }
    }
    else {
        versionParts = [];
    }
    return new BrowserInfo(name, versionParts.join('.'), detectOS(ua));
}
exports.parseUserAgent = parseUserAgent;
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.test(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
exports.detectOS = detectOS;
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
exports.getNodeVersion = getNodeVersion;
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mobile-device-detect/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/mobile-device-detect/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UAParser = __webpack_require__(1);

var _require = __webpack_require__(3),
    BROWSER_TYPES = _require.BROWSER_TYPES,
    OS_TYPES = _require.OS_TYPES,
    DEVICE_TYPES = _require.DEVICE_TYPES,
    defaultData = _require.defaultData;

var UA = new UAParser();

var browser = UA.getBrowser();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var CHROME = BROWSER_TYPES.CHROME,
    CHROMIUM = BROWSER_TYPES.CHROMIUM,
    IE = BROWSER_TYPES.IE,
    INTERNET_EXPLORER = BROWSER_TYPES.INTERNET_EXPLORER,
    OPERA = BROWSER_TYPES.OPERA,
    FIREFOX = BROWSER_TYPES.FIREFOX,
    SAFARI = BROWSER_TYPES.SAFARI,
    EDGE = BROWSER_TYPES.EDGE,
    YANDEX = BROWSER_TYPES.YANDEX,
    MOBILE_SAFARI = BROWSER_TYPES.MOBILE_SAFARI;
var MOBILE = DEVICE_TYPES.MOBILE,
    TABLET = DEVICE_TYPES.TABLET,
    SMART_TV = DEVICE_TYPES.SMART_TV,
    BROWSER = DEVICE_TYPES.BROWSER,
    WEARABLE = DEVICE_TYPES.WEARABLE,
    CONSOLE = DEVICE_TYPES.CONSOLE;
var ANDROID = OS_TYPES.ANDROID,
    WINDOWS_PHONE = OS_TYPES.WINDOWS_PHONE,
    IOS = OS_TYPES.IOS;


var checkType = function checkType(type) {
  switch (type) {
    case MOBILE:
      return { isMobile: true };
    case TABLET:
      return { isTablet: true };
    case SMART_TV:
      return { isSmartTV: true };
    case CONSOLE:
      return { isConsole: true };
    case WEARABLE:
      return { isWearable: true };
    case BROWSER:
      return { isBrowser: true };
    default:
      return defaultData;
  }
};

var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: browser.major,
    browserFullVersion: browser.version,
    browserName: browser.name,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _extends({}, type, {
    vendor: device.vendor,
    model: device.model,
    os: os.name,
    osVersion: os.version,
    ua: ua
  });
};

var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: engine.name,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: engine.name,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: engine.name,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var isMobileType = function isMobileType() {
  return device.type === MOBILE;
};
var isTabletType = function isTabletType() {
  return device.type === TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

var isSmartTVType = function isSmartTVType() {
  return device.type === SMART_TV;
};
var isBrowserType = function isBrowserType() {
  return device.type === BROWSER;
};
var isWearableType = function isWearableType() {
  return device.type === WEARABLE;
};
var isConsoleType = function isConsoleType() {
  return device.type === CONSOLE;
};
var isAndroidType = function isAndroidType() {
  return os.name === ANDROID;
};
var isWinPhoneType = function isWinPhoneType() {
  return os.name === WINDOWS_PHONE;
};
var isIOSType = function isIOSType() {
  return os.name === IOS;
};
var isChromeType = function isChromeType() {
  return browser.name === CHROME;
};
var isFirefoxType = function isFirefoxType() {
  return browser.name === FIREFOX;
};
var isChromiumType = function isChromiumType() {
  return browser.name === CHROMIUM;
};
var isEdgeType = function isEdgeType() {
  return browser.name === EDGE;
};
var isYandexType = function isYandexType() {
  return browser.name === YANDEX;
};
var isSafariType = function isSafariType() {
  return browser.name === SAFARI || browser.name === MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === MOBILE_SAFARI;
};
var isOperaType = function isOperaType() {
  return browser.name === OPERA;
};
var isIEType = function isIEType() {
  return browser.name === INTERNET_EXPLORER || browser.name === IE;
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return browser.major;
};
var getBrowserVersion = function getBrowserVersion() {
  return browser.version;
};
var getOsVersion = function getOsVersion() {
  return os.version ? os.version : "none";
};
var getOsName = function getOsName() {
  return os.name ? os.name : "none";
};
var getBrowserName = function getBrowserName() {
  return browser.name;
};
var getMobileVendor = function getMobileVendor() {
  return device.vendor ? device.vendor : "none";
};
var getMobileModel = function getMobileModel() {
  return device.model ? device.model : "none";
};
var getEngineName = function getEngineName() {
  return engine.name;
};
var getEngineVersion = function getEngineVersion() {
  return engine.version;
};
var getUseragent = function getUseragent() {
  return ua;
};
var getDeviceType = function getDeviceType() {
  return device.type;
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType();
var isMobileOnly = isMobileType();
var isTablet = isTabletType();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType();
var isYandex = isYandexType();
var deviceType = getDeviceType();

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
};

module.exports = {
  deviceDetect: deviceDetect,
  isSmartTV: isSmartTV,
  isConsole: isConsole,
  isWearable: isWearable,
  isMobileSafari: isMobileSafari,
  isChromium: isChromium,
  isMobile: isMobile,
  isMobileOnly: isMobileOnly,
  isTablet: isTablet,
  isBrowser: isBrowser,
  isAndroid: isAndroid,
  isWinPhone: isWinPhone,
  isIOS: isIOS,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isOpera: isOpera,
  isIE: isIE,
  osVersion: osVersion,
  osName: osName,
  fullBrowserVersion: fullBrowserVersion,
  browserVersion: browserVersion,
  browserName: browserName,
  mobileVendor: mobileVendor,
  mobileModel: mobileModel,
  engineName: engineName,
  engineVersion: engineVersion,
  getUA: getUA,
  isEdge: isEdge,
  isYandex: isYandex,
  deviceType: deviceType
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.18",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(2)){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEVICE_TYPES = {
  MOBILE: "mobile",
  TABLET: "tablet",
  SMART_TV: "smarttv",
  CONSOLE: "console",
  WEARABLE: "wearable",
  BROWSER: undefined
};

var BROWSER_TYPES = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: "IE",
  MOBILE_SAFARI: "Mobile Safari"
};

var OS_TYPES = {
  IOS: "iOS",
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone"
};

var defaultData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

module.exports = { BROWSER_TYPES: BROWSER_TYPES, DEVICE_TYPES: DEVICE_TYPES, OS_TYPES: OS_TYPES, defaultData: defaultData };

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=main.js.map