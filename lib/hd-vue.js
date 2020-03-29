/*!
 *  hd-vue.js v1.0.0
 *  (c) 2020-2020 wishzhang
 *  Released under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HDVUE", [], factory);
	else if(typeof exports === 'object')
		exports["HDVUE"] = factory();
	else
		root["HDVUE"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/carousel/index.vue?vue&type=template&id=a8223106&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.b(),{'avue-carousel--fullscreen': _vm.option.fullscreen}]},[_c('el-carousel',{attrs:{"type":_vm.option.type,"height":_vm.option.height+'px',"autoplay":_vm.option.autoplay,"interval":_vm.option.interval,"indicator-position":"outside"}},_vm._l((_vm.data),function(item,index){return _c('el-carousel-item',{key:index},[_c('div',{class:_vm.b('item')},[_c('a',{attrs:{"href":item.href?item.href:'javascript:void(0);',"target":item.target}},[_c('div',{class:_vm.b('img'),style:({backgroundImage:'url('+item.src+')'})}),_vm._v(" "),(item.title)?_c('div',{class:_vm.b('title')},[_vm._v(_vm._s(item.title))]):_vm._e()])])])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/element-ui/carousel/index.vue?vue&type=template&id=a8223106&

// CONCATENATED MODULE: ./src/utils/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  Object.keys(mods || {}).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ var bem = ({
  methods: {
    b: function b(el, mods) {
      var name = this.$options.name;

      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }

      el = join(name, el, ELEMENT);
      return mods ? [el, prefix(el, mods)] : el;
    }
  }
});
// CONCATENATED MODULE: ./src/global/variable.js
var KEY_COMPONENT_NAME = 'avue-';
// CONCATENATED MODULE: ./src/core/create.js


/* harmony default export */ var create = (function (sfc) {
  sfc.name = KEY_COMPONENT_NAME + sfc.name;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(bem);
  return sfc;
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/carousel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var carouselvue_type_script_lang_js_ = (create({
  name: "carousel",
  data: function data() {
    return {};
  },
  props: {
    option: {
      type: Object,
      "default": function _default() {}
    }
  },
  computed: {
    data: function data() {
      return this.option.data || [];
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  watch: {},
  methods: {}
}));
// CONCATENATED MODULE: ./packages/element-ui/carousel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_ui_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/element-ui/carousel/index.vue





/* normalize component */

var component = normalizeComponent(
  element_ui_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var carousel = (component.exports);
// CONCATENATED MODULE: ./src/ui/element-ui/index.js

/* harmony default export */ var element_ui = __webpack_exports__["a"] = ([carousel]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var ui_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var version = process.env.VERSION || __webpack_require__(4).version;



var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ui_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].map(function (component) {
    Vue.component(component.name, component);
  });
  Vue.prototype.$HDVUE = {
    ui: function () {
      if (window.Element) {
        return {
          name: 'element-ui',
          type: 'el'
        };
      }
    }()
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var HDVUE = {
  version: version,
  install: install
};
/* harmony default export */ __webpack_exports__["default"] = (HDVUE);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
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


/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hd-vue\",\"version\":\"1.0.0\",\"description\":\"\",\"main\":\"index.js\",\"directories\":{\"example\":\"example\",\"lib\":\"lib\"},\"scripts\":{\"dev\":\"cross-env TARGET=dev UINAME=element-ui webpack\",\"build\":\"cross-env TARGET=prod UINAME=element-ui webpack\",\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\"},\"keywords\":[\"vue\",\"element-ui\",\"hd-vue\"],\"author\":\"wishzhang\",\"license\":\"ISC\",\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"babel-loader\":\"^8.1.0\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^3.4.2\",\"extract-text-webpack-plugin\":\"^4.0.0-beta.0\",\"node-sass\":\"^4.13.1\",\"progress-bar-webpack-plugin\":\"^2.1.0\",\"sass-loader\":\"^8.0.2\",\"style-loader\":\"^1.1.3\",\"vue-loader\":\"^15.9.1\",\"vue-template-compiler\":\"^2.6.11\",\"webpack\":\"^4.42.1\",\"webpack-bundle-analyzer\":\"^3.6.1\",\"webpack-cli\":\"^3.3.11\",\"webpack-merge\":\"^4.2.2\"},\"dependencies\":{\"element-ui\":\"^2.13.0\",\"vue\":\"^2.6.11\"}}");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRFZVRS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSERWVUUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT8xZmFjIiwid2VicGFjazovL0hEVlVFLy4vc3JjL3V0aWxzL2JlbS5qcyIsIndlYnBhY2s6Ly9IRFZVRS8uL3NyYy9nbG9iYWwvdmFyaWFibGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9zcmMvY29yZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvcGFja2FnZXMvZWxlbWVudC11aS9jYXJvdXNlbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT9iZjUxIiwid2VicGFjazovL0hEVlVFLy4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3NyYy91aS9lbGVtZW50LXVpL2luZGV4LmpzIiwid2VicGFjazovL0hEVlVFLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0hEVlVFLy4vbm9kZV9tb2R1bGVzL19wcm9jZXNzQDAuMTEuMTBAcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIkVMRU1FTlQiLCJNT0RTIiwiam9pbiIsIm5hbWUiLCJlbCIsInN5bWJvbCIsInByZWZpeCIsIm1vZHMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwicmV0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJtZXRob2RzIiwiYiIsIiRvcHRpb25zIiwiS0VZX0NPTVBPTkVOVF9OQU1FIiwic2ZjIiwibWl4aW5zIiwicHVzaCIsImJlbSIsIkNhcm91c2VsIiwidmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJWRVJTSU9OIiwicmVxdWlyZSIsImluc3RhbGwiLCJWdWUiLCJvcHRzIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInByb3RvdHlwZSIsIiRIRFZVRSIsInVpIiwid2luZG93IiwiRWxlbWVudCIsInR5cGUiLCJIRFZVRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7QUNsRkEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLG1EQUFtRCxFQUFFLG9CQUFvQixPQUFPLHFKQUFxSix3Q0FBd0MsOEJBQThCLFVBQVUsWUFBWSxvQkFBb0IsVUFBVSxPQUFPLCtDQUErQyx3QkFBd0Is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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJoZC12dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkhEVlVFXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhEVlVFXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhEVlVFXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7Y2xhc3M6W192bS5iKCkseydhdnVlLWNhcm91c2VsLS1mdWxsc2NyZWVuJzogX3ZtLm9wdGlvbi5mdWxsc2NyZWVufV19LFtfYygnZWwtY2Fyb3VzZWwnLHthdHRyczp7XCJ0eXBlXCI6X3ZtLm9wdGlvbi50eXBlLFwiaGVpZ2h0XCI6X3ZtLm9wdGlvbi5oZWlnaHQrJ3B4JyxcImF1dG9wbGF5XCI6X3ZtLm9wdGlvbi5hdXRvcGxheSxcImludGVydmFsXCI6X3ZtLm9wdGlvbi5pbnRlcnZhbCxcImluZGljYXRvci1wb3NpdGlvblwiOlwib3V0c2lkZVwifX0sX3ZtLl9sKChfdm0uZGF0YSksZnVuY3Rpb24oaXRlbSxpbmRleCl7cmV0dXJuIF9jKCdlbC1jYXJvdXNlbC1pdGVtJyx7a2V5OmluZGV4fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdpdGVtJyl9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjppdGVtLmhyZWY/aXRlbS5ocmVmOidqYXZhc2NyaXB0OnZvaWQoMCk7JyxcInRhcmdldFwiOml0ZW0udGFyZ2V0fX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignaW1nJyksc3R5bGU6KHtiYWNrZ3JvdW5kSW1hZ2U6J3VybCgnK2l0ZW0uc3JjKycpJ30pfSksX3ZtLl92KFwiIFwiKSwoaXRlbS50aXRsZSk/X2MoJ2Rpdicse2NsYXNzOl92bS5iKCd0aXRsZScpfSxbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKTpfdm0uX2UoKV0pXSldKX0pLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyoqXHJcbiAqIGJlbSBoZWxwZXJcclxuICogYigpIC8vICdidXR0b24nXHJcbiAqIGIoJ3RleHQnKSAvLyAnYnV0dG9uX190ZXh0J1xyXG4gKiBiKHsgZGlzYWJsZWQgfSkgLy8gJ2J1dHRvbiBidXR0b24tLWRpc2FibGVkJ1xyXG4gKiBiKCd0ZXh0JywgeyBkaXNhYmxlZCB9KSAvLyAnYnV0dG9uX190ZXh0IGJ1dHRvbl9fdGV4dC0tZGlzYWJsZWQnXHJcbiAqIGIoWydkaXNhYmxlZCcsICdwcmltYXJ5J10pIC8vICdidXR0b24gYnV0dG9uLS1kaXNhYmxlZCBidXR0b24tLXByaW1hcnknXHJcbiAqL1xyXG5cclxuY29uc3QgRUxFTUVOVCA9ICdfXyc7XHJcbmNvbnN0IE1PRFMgPSAnLS0nO1xyXG5cclxuY29uc3Qgam9pbiA9IChuYW1lLCBlbCwgc3ltYm9sKSA9PiBlbCA/IG5hbWUgKyBzeW1ib2wgKyBlbCA6IG5hbWU7XHJcblxyXG5jb25zdCBwcmVmaXggPSAobmFtZSwgbW9kcykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBtb2RzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBqb2luKG5hbWUsIG1vZHMsIE1PRFMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZHMubWFwKGl0ZW0gPT4gcHJlZml4KG5hbWUsIGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKG1vZHMgfHwge30pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICByZXRbbmFtZSArIE1PRFMgKyBrZXldID0gbW9kc1trZXldO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGIgKGVsLCBtb2RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy4kb3B0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChlbCAmJiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RzID0gZWw7XHJcbiAgICAgICAgICAgICAgICBlbCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gam9pbihuYW1lLCBlbCwgRUxFTUVOVCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW9kcyA/IFtlbCwgcHJlZml4KGVsLCBtb2RzKV0gOiBlbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBLRVlfQ09NUE9ORU5UX05BTUUgPSAnYXZ1ZS0nOyIsImltcG9ydCBiZW0gZnJvbSAndXRpbHMvYmVtJztcclxuaW1wb3J0IHsgS0VZX0NPTVBPTkVOVF9OQU1FIH0gZnJvbSAnZ2xvYmFsL3ZhcmlhYmxlJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNmYykge1xyXG4gICAgc2ZjLm5hbWUgPSBLRVlfQ09NUE9ORU5UX05BTUUgKyBzZmMubmFtZTtcclxuICAgIHNmYy5taXhpbnMgPSBzZmMubWl4aW5zIHx8IFtdO1xyXG4gICAgc2ZjLm1peGlucy5wdXNoKGJlbSk7XHJcbiAgICByZXR1cm4gc2ZjO1xyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgOmNsYXNzPVwiW2IoKSx7J2F2dWUtY2Fyb3VzZWwtLWZ1bGxzY3JlZW4nOiBvcHRpb24uZnVsbHNjcmVlbn1dXCI+XHJcbiAgICAgICAgPGVsLWNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA6dHlwZT1cIm9wdGlvbi50eXBlXCJcclxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJvcHRpb24uaGVpZ2h0KydweCdcIlxyXG4gICAgICAgICAgICAgICAgOmF1dG9wbGF5PVwib3B0aW9uLmF1dG9wbGF5XCJcclxuICAgICAgICAgICAgICAgIDppbnRlcnZhbD1cIm9wdGlvbi5pbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3ItcG9zaXRpb249XCJvdXRzaWRlXCI+XHJcbiAgICAgICAgICAgIDxlbC1jYXJvdXNlbC1pdGVtIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignaXRlbScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLmhyZWY/aXRlbS5ocmVmOidqYXZhc2NyaXB0OnZvaWQoMCk7J1wiIDp0YXJnZXQ9XCJpdGVtLnRhcmdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2ltZycpXCIgOnN0eWxlPVwie2JhY2tncm91bmRJbWFnZTondXJsKCcraXRlbS5zcmMrJyknfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3RpdGxlJylcIiB2LWlmPVwiaXRlbS50aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9lbC1jYXJvdXNlbC1pdGVtPlxyXG4gICAgICAgIDwvZWwtY2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY3JlYXRlIGZyb20gXCJjb3JlL2NyZWF0ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJjYXJvdXNlbFwiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uLmRhdGEgfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHt9LFxyXG4gICAgICAgIG1ldGhvZHM6IHt9XHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTgyMjMxMDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnY29tcG9uZW50cy9jYXJvdXNlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBDYXJvdXNlbCxcclxuXTtcclxuIiwiY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LlZFUlNJT04gfHwgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcclxuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAndWkvaW5kZXgnO1xyXG5cclxuY29uc3QgaW5zdGFsbCA9IGZ1bmN0aW9uIChWdWUsIG9wdHMgPSB7fSkge1xyXG4gICAgY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcclxuICAgICAgICBWdWUuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVnVlLnByb3RvdHlwZS4kSERWVUUgPSB7XHJcbiAgICAgICAgdWk6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZWxlbWVudC11aScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VsJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKClcclxuICAgIH07XHJcbn07XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcclxufVxyXG5cclxuY29uc3QgSERWVUUgPSB7XHJcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxyXG4gICAgaW5zdGFsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSERWVUU7XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9