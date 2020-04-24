/*!
 *  hd-vue.js v1.0.7
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/epub/index.vue?vue&type=template&id=554e74fe&
var epubvue_type_template_id_554e74fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.dialogVisible)?_c('div',{class:_vm.b(),attrs:{"id":"avue-epub"},on:{"contextmenu":function($event){$event.preventDefault();},"mousewheel":_vm.mouseWheel,"click":_vm.dialogClick}},[_c('div',{class:_vm.b('book')},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('book__header')},[_c('div',{class:_vm.b('book__header__title'),attrs:{"title":_vm.bookName},domProps:{"textContent":_vm._s(_vm.bookName)}}),_vm._v(" "),_c('div',{class:_vm.b('book__header__section'),attrs:{"title":_vm.currentSectionName},domProps:{"textContent":_vm._s(_vm.currentSectionName)}}),_vm._v(" "),_c('div',{class:_vm.b('book__header__page'),domProps:{"textContent":_vm._s(_vm.progressStr)}})]),_vm._v(" "),_c('div',{class:_vm.b('book__content'),attrs:{"id":"epub__book__viewer__box"}},[_c('div',{attrs:{"id":"epub__book__viewer"}})]),_vm._v(" "),(_vm.catalogueVisible)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('book__catalogue'),on:{"mousewheel":function($event){$event.stopPropagation();}}},[_c('div',{class:_vm.b('book__catalogue__layer')}),_vm._v(" "),_c('div',{class:_vm.b('book__catalogue__box'),on:{"mousedown":function($event){_vm.isCatalogueClick=true},"mouseup":function($event){_vm.isCatalogueClick=true}}},[_c('div',{class:_vm.b('book__catalogue__box__header'),attrs:{"title":_vm.bookName}},[_vm._v(_vm._s(_vm.bookName))]),_vm._v(" "),_c('el-scrollbar',{staticStyle:{"height":"calc(100% - 121px)","background-color":"rgb(230, 230, 230)"},attrs:{"wrap-style":'overflow-x:hidden;'},nativeOn:{"!mousedown":function($event){_vm.isCatalogueClick=true},"!mouseup":function($event){_vm.isCatalogueClick=true}}},[_c('div',{class:_vm.b('book__catalogue__box__content')},_vm._l((_vm.catalogue),function(section,i){return _c('div',{key:i,class:_vm.b('book__catalogue__box__content__section')},[_c('div',{class:_vm.b('book__catalogue__box__content__section__title'),on:{"click":function($event){$event.stopPropagation();return _vm.catalogueClick(section.href)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(section.label))]),_vm._v(" "),_c('span',{staticClass:"page"},[_vm._v(_vm._s(section.page))])]),_vm._v(" "),_vm._l((section.subitems),function(chapter,j){return _c('div',{class:_vm.b('book__catalogue__box__content__section__chapter'),on:{"click":function($event){$event.stopPropagation();return _vm.catalogueClick(section.href)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(chapter.label))]),_vm._v(" "),_c('span',{staticClass:"page"},[_vm._v(_vm._s(chapter.page))])])})],2)}),0)])],1)]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('book__box1')},[_c('div',{class:_vm.b('book__box1__button'),staticStyle:{"background-color":"#257AA7"},on:{"click":function($event){$event.stopPropagation();_vm.catalogueVisible=!_vm.catalogueVisible}}},[_c('i',{staticClass:"el-icon-notebook-1"}),_c('em',[_vm._v("目录")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('book__box2')},[_c('div',{class:_vm.b('book__box2__prev'),attrs:{"title":"上一页"},on:{"click":_vm.prevClick}},[_c('i',{staticClass:"el-icon-arrow-left"})]),_vm._v(" "),_c('div',{class:_vm.b('book__box2__next'),attrs:{"title":"下一页"},on:{"click":_vm.nextClick}},[_c('i',{staticClass:"el-icon-arrow-right"})])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('book__box3')})]),_vm._v(" "),_c('i',{class:['el-icon-close',_vm.b('close')],on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.canShow),expression:"canShow"}],class:_vm.b('scrollbar'),attrs:{"id":"book-scrollbar"}},[_c('el-slider',{attrs:{"format-tooltip":_vm.formatTooltip,"show-tooltip":true,"vertical":"","min":_vm.min,"max":_vm.max,"height":_vm.scrollHeight},on:{"change":_vm.sliderChange},model:{value:(_vm.sliderValue),callback:function ($$v) {_vm.sliderValue=$$v},expression:"sliderValue"}})],1)]):_vm._e()}
var epubvue_type_template_id_554e74fe_staticRenderFns = []


// CONCATENATED MODULE: ./packages/element-ui/epub/index.vue?vue&type=template&id=554e74fe&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/epub/index.vue?vue&type=script&lang=js&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
// TODO:1 精确分页
// TODO:BUG:1 页面往前有时候页面显示不对，可能是epub.js的滚动监听处理有问题

/* harmony default export */ var epubvue_type_script_lang_js_ = (create({
  name: "epub",
  props: {
    bookUrl: {
      type: String,
      "default": '',
      required: true
    }
  },
  data: function data() {
    return {
      loading: false,
      // 滚动条高度
      scrollHeight: '0px',
      // 滚动按钮当前值
      sliderValue: 0,
      // 书名
      bookName: '',
      // 实例
      book: {},
      rendition: {},
      // 显示该页面窗口
      dialogVisible: true,
      // 显示书籍目录
      catalogueVisible: false,
      // 书籍目录数据
      catalogue: [],
      // 是在目录上的点击
      isCatalogueClick: false,
      // 这两个用于页码pageNumber的计算，
      // 可通过locations[pageIndex]取页数对象location
      pageIndex: 0,
      currentLocationIndex: 0,
      // 存放分页信息
      locations: [],
      // fixed
      fixIsByButton: false,
      fixLocationIndex: 1,
      // 当前的章节名称
      currentSectionName: ''
    };
  },
  computed: {
    canShow: function canShow() {
      return !this.loading;
    },
    pageNumber: function pageNumber() {
      if (this.fixIsByButton) {
        return this.pageIndex + 1;
      } else {
        return this.fixLocationIndex + 1;
      }
    },
    total: function total() {
      if (this.book && this.book && this.book.locations && this.book.locations.total) {
        return this.book.locations.total - 1;
      }

      return 0;
    },
    progressStr: function progressStr() {
      return "".concat(this.pageNumber, " / ").concat(this.total);
    },
    min: function min() {
      return 1;
    },
    max: function max() {
      return this.total;
    }
  },
  methods: {
    // 滚动条的浮动提示
    formatTooltip: function formatTooltip(val) {
      return this.max - val + 1;
    },
    // 跳转到上一页
    prevClick: function prevClick() {
      this.pageIndex = this.fixLocationIndex;
      this.fixIsByButton = true;

      if (this.pageIndex > 0) {
        this.pageIndex--;
        this.fixLocationIndex = this.pageIndex;
        this.rendition.display(this.locations[this.pageIndex]);
      }
    },
    // 跳转到下一页
    nextClick: function nextClick() {
      this.pageIndex = this.fixLocationIndex;
      this.fixIsByButton = true;

      if (this.pageIndex < this.total - 1) {
        this.pageIndex++;
        this.fixLocationIndex = this.pageIndex;
        this.rendition.display(this.locations[this.pageIndex]);
      }
    },
    close: function close() {
      this.dialogVisible = false;
      this.$emit('close');
    },
    // fixed 目录外地方点击可关闭
    dialogClick: function dialogClick() {
      this.catalogueVisible = this.isCatalogueClick ? true : false;
      this.isCatalogueClick = false;
    },
    catalogueClick: function catalogueClick(href) {
      this.rendition.display(href);
      this.catalogueVisible = false;
      this.isCatalogueClick = false;
    },
    // 拖动滚动条后书籍跳转到对应页
    sliderChange: function sliderChange(num) {
      this.currentLocationIndex = this.max - num;
      this.rendition.display(this.locations[this.currentLocationIndex]);
    },
    // 监听全局的鼠标滚动，使书本内容滚动
    mouseWheel: function mouseWheel(e) {
      var els = document.getElementsByClassName('epub-container');

      if (els && els.length > 0) {
        var el = els[0];
        el.scrollTop = el.scrollTop + e.deltaY;
      }
    }
  },
  watch: {
    // 监听滚动页码，使对应的滚动按钮到相应的位置
    pageNumber: function pageNumber(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.sliderValue = _this.max - val + 1;
      });
    },
    max: function max(val) {
      this.sliderValue = val;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (!window.ePub) {
      console.error('lack of jszip.js and epub.js !');
      return;
    } // 加载显示


    this.loading = true;
    var loading = this.$loading({
      lock: true,
      text: '正在加载中',
      spinner: 'el-icon-loading',
      background: '#44454a'
    });
    var book = window.ePub(this.bookUrl) || {};
    var el = document.getElementById('epub__book__viewer');
    var height = el.clientHeight;
    var width = el.clientWidth;
    var rendition = book.renderTo("epub__book__viewer", {
      manager: "continuous",
      spread: '0',
      flow: "scrolled",
      width: width,
      height: height,
      store: 'true'
    }) || {};
    rendition.display(this.pageIndex).then(function () {}); // 设置右边滚动条的高度，-25是为了让滚动按钮不超出页面显示范围

    this.scrollHeight = document.getElementById('book-scrollbar').scrollHeight - 25 + 'px'; // 书本初始化完成

    book.ready.then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 7),
          manifest = _ref2[0],
          spine = _ref2[1],
          metadata = _ref2[2],
          cover = _ref2[3],
          navigation = _ref2[4],
          resources = _ref2[5],
          displayOptions = _ref2[6];

      // 设置目录
      _this2.catalogue = navigation.toc; // 设置书名

      _this2.bookName = metadata.title; // 预分页，根据字符个数把书籍分页

      var el = document.getElementById('epub__book__viewer');
      var num = Number.parseInt(Number.parseInt(el.clientWidth, 10) * Number.parseInt(el.clientHeight) / (400 * 2), 10);
      return book.locations.generate(num);
    }).then(function (locations) {
      loading.close();
      _this2.loading = false; // 保存分页信息

      _this2.locations = locations;
    })["catch"](function () {
      _this2.loading = false;
      loading.close();
    });
    /**
     * 监听书本内容位置改变
     */

    rendition.on("relocated", function (location) {
      if (!_this2.fixIsByButton && location.start.location <= _this2.total - 1) {
        _this2.fixLocationIndex = location.start.location;
      } else {
        _this2.fixIsByButton = false;
      }
    });
    /**
     * 设置主题样式
     */

    rendition.themes["default"]({
      a: {
        'color': '#222222 !important',
        'line-height': '1.6 !important',
        'text-decoration': 'none'
      },
      'a:hover': {
        'color': '#3380ff !important'
      },
      body: {
        'background': '#f5f5f5',
        'padding': '0 40px !important'
      },
      h2: {
        'font-size': '32px',
        'color': 'purple'
      },
      p: {
        'font-size': '19px !important',
        'font-family': 'Microsoft Yahei !important',
        'color': '#222222 !important',
        'line-height': '1.6 !important'
      }
    }); // 监听当前位置，设置当前章节标题

    rendition.on("rendered", function (section) {
      var prevSection = section.prev();
      var current = book.navigation.toc.find(function (item) {
        return item.href.includes(section.href);
      });

      if (!current && prevSection) {
        current = book.navigation.toc.find(function (item) {
          return item.href.includes(prevSection.href);
        });
      }

      if (current) {
        _this2.currentSectionName = current.label.trim();
      }
    });
    this.book = book;
    this.rendition = rendition;
  },
  destroyed: function destroyed() {
    if (this.book) {
      this.book.destroy();
    }
  }
}));
// CONCATENATED MODULE: ./packages/element-ui/epub/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_ui_epubvue_type_script_lang_js_ = (epubvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/element-ui/epub/index.vue





/* normalize component */

var epub_component = normalizeComponent(
  element_ui_epubvue_type_script_lang_js_,
  epubvue_type_template_id_554e74fe_render,
  epubvue_type_template_id_554e74fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var epub = (epub_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/notice/index.vue?vue&type=template&id=56bcd8df&
var noticevue_type_template_id_56bcd8df_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._l((_vm.list),function(item,index){return _c('div',{key:index,class:_vm.b('item'),on:{"click":function($event){return _vm.itemClick(item,index,_vm.list)}}},[(item[_vm.imgKey])?_c('div',{class:_vm.b('img')},[_c('img',{attrs:{"src":item[_vm.imgKey],"alt":""}})]):_vm._e(),_vm._v(" "),_c('div',{class:_vm.b('content')},[_c('div',{class:_vm.b('title')},[_c('span',{class:_vm.b('name')},[_vm._v(_vm._s(item[_vm.titleKey]))]),_vm._v(" "),(item[_vm.tagKey])?_c('span',{class:_vm.b('tag')},[_c('el-tag',{attrs:{"size":"small","type":_vm.getType(item[_vm.statusKey])}},[_vm._v(_vm._s(item[_vm.tagKey]))])],1):_vm._e()]),_vm._v(" "),_c('div',{class:_vm.b('subtitle')},[_vm._v(_vm._s(item[_vm.subtitleKey]))])])])}),_vm._v(" "),(_vm.showFooterKey&&_vm.list.length!==0)?_c('div',[(!_vm.hasLoadAll)?_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],class:_vm.b('more'),on:{"click":_vm.handleClick}},[_vm._v("\n            加载更多\n        ")]):_c('div',{class:_vm.b('all')},[_vm._v("\n            已加载全部\n        ")])]):_vm._e(),_vm._v(" "),(_vm.list.length===0)?_c('div',[_vm._t("emptySlot",[_c('div',{class:_vm.b('nothing')},[_vm._v("暂无数据")])])],2):_vm._e()],2)}
var noticevue_type_template_id_56bcd8df_staticRenderFns = []


// CONCATENATED MODULE: ./packages/element-ui/notice/index.vue?vue&type=template&id=56bcd8df&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/notice/index.vue?vue&type=script&lang=js&
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
//
//
//
var propsDefault = {
  img: 'img',
  title: 'title',
  subtile: 'title',
  tag: 'tag',
  status: 'status'
};

/* harmony default export */ var noticevue_type_script_lang_js_ = (create({
  name: 'notice',
  props: {
    option: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      page: 1,
      loading: false
    };
  },
  computed: {
    showFooterKey: function showFooterKey() {
      return this.option.showFooter || true;
    },
    props: function props() {
      return this.option.props || propsDefault;
    },
    imgKey: function imgKey() {
      return this.props.img || propsDefault.img;
    },
    titleKey: function titleKey() {
      return this.props.title || propsDefault.title;
    },
    subtitleKey: function subtitleKey() {
      return this.props.subtitle || propsDefault.subtitle;
    },
    tagKey: function tagKey() {
      return this.props.tag || propsDefault.tag;
    },
    statusKey: function statusKey() {
      return this.props.status || propsDefault.status;
    },
    total: function total() {
      if (!this.option.total || this.option.total < 0) {
        return 0;
      }

      return this.option.total;
    },
    list: function list() {
      return this.data.slice(0, this.total);
    },
    hasLoadAll: function hasLoadAll() {
      return this.total <= this.list.length;
    }
  },
  methods: {
    itemClick: function itemClick(item, index, list) {
      this.$emit('item-click', item, index, list);
    },
    handleClick: function handleClick() {
      var _this = this;

      this.loading = true;

      var done = function done() {
        _this.loading = false;
      };

      this.page++;
      this.$emit('page-change', this.page, done);
    },
    getType: function getType() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (status == 0) {
        return 'info';
      } else if (status == 1) {
        return '';
      } else if (status == 2) {
        return 'warning';
      } else if (status == 3) {
        return 'danger';
      } else if (status == 4) {
        return 'success';
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/element-ui/notice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_ui_noticevue_type_script_lang_js_ = (noticevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/element-ui/notice/index.vue





/* normalize component */

var notice_component = normalizeComponent(
  element_ui_noticevue_type_script_lang_js_,
  noticevue_type_template_id_56bcd8df_render,
  noticevue_type_template_id_56bcd8df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice = (notice_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/numrange/index.vue?vue&type=template&id=2eee7dde&
var numrangevue_type_template_id_2eee7dde_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.b()]},[_c('div',{class:_vm.b('wrap')},[_c('el-input-number',{style:(_vm.style),attrs:{"precision":_vm.precision,"step":_vm.step,"controls-position":"right","size":_vm.size,"controls":_vm.controls,"min":_vm.min,"max":_vm.max},on:{"change":_vm.handleStartChange},model:{value:(_vm.startNum),callback:function ($$v) {_vm.startNum=$$v},expression:"startNum"}}),_vm._v(" "),_c('span',{class:_vm.b('separator')},[_vm._v("至")]),_vm._v(" "),_c('el-input-number',{style:(_vm.style),attrs:{"precision":_vm.precision,"step":_vm.step,"controls-position":"right","size":_vm.size,"controls":_vm.controls,"min":_vm.min,"max":_vm.max},on:{"change":_vm.handleEndChange},model:{value:(_vm.endNum),callback:function ($$v) {_vm.endNum=$$v},expression:"endNum"}})],1)])}
var numrangevue_type_template_id_2eee7dde_staticRenderFns = []


// CONCATENATED MODULE: ./packages/element-ui/numrange/index.vue?vue&type=template&id=2eee7dde&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/numrange/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var numrangevue_type_script_lang_js_ = (create({
  name: "numrange",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    step: {
      type: Number,
      "default": 1
    },
    precision: {
      type: Number,
      "default": 0
    },
    value: {
      type: String,
      "default": ''
    },
    size: {
      type: String,
      "default": 'small'
    },
    min: {
      type: Number,
      "default": Number.MIN_SAFE_INTEGER
    },
    max: {
      type: Number,
      "default": Number.MAX_SAFE_INTEGER
    },
    controls: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      startNum: undefined,
      endNum: undefined
    };
  },
  computed: {
    style: function style() {
      var minWidth = '80px';
      var width = '50%';
      return {
        'width': width,
        'min-width': minWidth
      };
    }
  },
  methods: {
    handleStartChange: function handleStartChange(currentValue) {
      var _this = this;

      this.$nextTick(function () {
        if (typeof currentValue === 'number' && typeof _this.endNum === 'number') {
          if (currentValue > _this.endNum) {
            _this.startNum = _this.endNum;

            _this.$emit('change', JSON.stringify([_this.endNum, _this.endNum]));
          } else {
            _this.$emit('change', JSON.stringify([currentValue, _this.endNum]));
          }
        } else {
          _this.$emit('change', JSON.stringify([currentValue, _this.endNum]));
        }
      });
    },
    handleEndChange: function handleEndChange(currentValue) {
      var _this2 = this;

      this.$nextTick(function () {
        if (typeof currentValue === 'number' && typeof _this2.startNum === 'number') {
          if (currentValue < _this2.startNum) {
            _this2.endNum = _this2.startNum;

            _this2.$emit('change', JSON.stringify([_this2.startNum, _this2.startNum]));
          } else {
            _this2.$emit('change', JSON.stringify([_this2.startNum, currentValue]));
          }
        } else {
          _this2.$emit('change', JSON.stringify([_this2.startNum, currentValue]));
        }
      });
    }
  },
  created: function created() {
    this.$emit('change', JSON.stringify([this.startNum, this.endNum]));
  },
  mounted: function mounted() {},
  watch: {
    value: function value(val, oldVal) {
      if (val) {
        var arr = JSON.parse(val);
        this.startNum = arr[0] ? arr[0] : undefined;
        this.endNum = arr[1] ? arr[1] : undefined;
      } else {
        this.startNum = undefined;
        this.endNum = undefined;
      }

      if (val !== oldVal) {
        this.$emit('change', JSON.stringify([this.startNum, this.endNum]));
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/element-ui/numrange/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_ui_numrangevue_type_script_lang_js_ = (numrangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/element-ui/numrange/index.vue





/* normalize component */

var numrange_component = normalizeComponent(
  element_ui_numrangevue_type_script_lang_js_,
  numrangevue_type_template_id_2eee7dde_render,
  numrangevue_type_template_id_2eee7dde_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var numrange = (numrange_component.exports);
// CONCATENATED MODULE: ./src/ui/element-ui/index.js




/* harmony default export */ var element_ui = __webpack_exports__["a"] = ([carousel, epub, notice, numrange]);

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

module.exports = JSON.parse("{\"name\":\"hd-vue\",\"version\":\"1.0.7\",\"description\":\"A Component Library for Vue.js.\",\"main\":\"lib/hd-vue.min.js\",\"unpkg\":\"lib/hd-vue.min.js\",\"jsdelivr\":\"lib/hd-vue.min.js\",\"scripts\":{\"dev\":\"cross-env TARGET=dev UINAME=element-ui webpack\",\"build\":\"cross-env TARGET=prod UINAME=element-ui webpack\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:wishzhang/hd-vue.git\"},\"keywords\":[\"vue\",\"element-ui\",\"hd-vue\"],\"author\":\"wishzhang\",\"license\":\"MIT\",\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"babel-loader\":\"^8.1.0\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^3.4.2\",\"extract-text-webpack-plugin\":\"^4.0.0-beta.0\",\"node-sass\":\"^4.13.1\",\"progress-bar-webpack-plugin\":\"^2.1.0\",\"sass-loader\":\"^8.0.2\",\"style-loader\":\"^1.1.3\",\"vue-loader\":\"^15.9.1\",\"vue-template-compiler\":\"^2.6.11\",\"webpack\":\"^4.42.1\",\"webpack-bundle-analyzer\":\"^3.6.1\",\"webpack-cli\":\"^3.3.11\",\"webpack-merge\":\"^4.2.2\"},\"dependencies\":{\"element-ui\":\"^2.13.0\",\"vue\":\"^2.6.11\"},\"files\":[\"example\",\"lib\",\"src\",\"packages\",\"styles\",\"LICENSE\",\"README.md\"]}");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRFZVRS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSERWVUUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT8xZmFjIiwid2VicGFjazovL0hEVlVFLy4vc3JjL3V0aWxzL2JlbS5qcyIsIndlYnBhY2s6Ly9IRFZVRS8uL3NyYy9nbG9iYWwvdmFyaWFibGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9zcmMvY29yZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvcGFja2FnZXMvZWxlbWVudC11aS9jYXJvdXNlbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT9iZjUxIiwid2VicGFjazovL0hEVlVFLy4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvZXB1Yi9pbmRleC52dWU/YWI5NiIsIndlYnBhY2s6Ly9IRFZVRS9wYWNrYWdlcy9lbGVtZW50LXVpL2VwdWIvaW5kZXgudnVlIiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9lcHViL2luZGV4LnZ1ZT9mOTM2Iiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9lcHViL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZT9mY2VjIiwid2VicGFjazovL0hEVlVFL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZT9mNDI1Iiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9ub3RpY2UvaW5kZXgudnVlIiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9udW1yYW5nZS9pbmRleC52dWU/NmQ1OSIsIndlYnBhY2s6Ly9IRFZVRS9wYWNrYWdlcy9lbGVtZW50LXVpL251bXJhbmdlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvbnVtcmFuZ2UvaW5kZXgudnVlPzY2MzQiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL251bXJhbmdlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3NyYy91aS9lbGVtZW50LXVpL2luZGV4LmpzIiwid2VicGFjazovL0hEVlVFLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0hEVlVFLy4vbm9kZV9tb2R1bGVzL19wcm9jZXNzQDAuMTEuMTBAcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIkVMRU1FTlQiLCJNT0RTIiwiam9pbiIsIm5hbWUiLCJlbCIsInN5bWJvbCIsInByZWZpeCIsIm1vZHMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwicmV0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJtZXRob2RzIiwiYiIsIiRvcHRpb25zIiwiS0VZX0NPTVBPTkVOVF9OQU1FIiwic2ZjIiwibWl4aW5zIiwicHVzaCIsImJlbSIsIkNhcm91c2VsIiwiRXB1YiIsIk5vdGljZSIsIk51bXJhbmdlIiwidmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJWRVJTSU9OIiwicmVxdWlyZSIsImluc3RhbGwiLCJWdWUiLCJvcHRzIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInByb3RvdHlwZSIsIiRIRFZVRSIsInVpIiwid2luZG93IiwiRWxlbWVudCIsInR5cGUiLCJIRFZVRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7QUNsRkEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLG1EQUFtRCxFQUFFLG9CQUFvQixPQUFPLHFKQUFxSix3Q0FBd0MsOEJBQThCLFVBQVUsWUFBWSxvQkFBb0IsVUFBVSxPQUFPLCtDQUErQyx3QkFBd0IsWUFBWSwyQkFBMkIsb0NBQW9DLEVBQUUscUNBQXFDLHFCQUFxQiw4Q0FBOEM7QUFDNXRCOzs7Ozs7QUNEQTs7Ozs7Ozs7QUFTQSxJQUFNQSxPQUFPLEdBQUcsSUFBaEI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBV0MsTUFBWDtBQUFBLFNBQXNCRCxFQUFFLEdBQUdELElBQUksR0FBR0UsTUFBUCxHQUFnQkQsRUFBbkIsR0FBd0JELElBQWhEO0FBQUEsQ0FBYjs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxJQUFELEVBQU9JLElBQVAsRUFBZ0I7QUFDM0IsTUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLFdBQU9MLElBQUksQ0FBQ0MsSUFBRCxFQUFPSSxJQUFQLEVBQWFOLElBQWIsQ0FBWDtBQUNIOztBQUVELE1BQUlPLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsV0FBT0EsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLGFBQUlMLE1BQU0sQ0FBQ0gsSUFBRCxFQUFPUSxJQUFQLENBQVY7QUFBQSxLQUFiLENBQVA7QUFDSDs7QUFFRCxNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUNBQyxRQUFNLENBQUNDLElBQVAsQ0FBWVAsSUFBSSxJQUFJLEVBQXBCLEVBQXdCUSxPQUF4QixDQUFnQyxVQUFBQyxHQUFHLEVBQUk7QUFDbkNKLE9BQUcsQ0FBQ1QsSUFBSSxHQUFHRixJQUFQLEdBQWNlLEdBQWYsQ0FBSCxHQUF5QlQsSUFBSSxDQUFDUyxHQUFELENBQTdCO0FBQ0gsR0FGRDtBQUdBLFNBQU9KLEdBQVA7QUFDSCxDQWREOztBQWdCZTtBQUNYSyxTQUFPLEVBQUU7QUFDTEMsS0FESyxhQUNGZCxFQURFLEVBQ0VHLElBREYsRUFDUTtBQUFBLFVBQ0RKLElBREMsR0FDUSxLQUFLZ0IsUUFEYixDQUNEaEIsSUFEQzs7QUFHVCxVQUFJQyxFQUFFLElBQUksT0FBT0EsRUFBUCxLQUFjLFFBQXhCLEVBQWtDO0FBQzlCRyxZQUFJLEdBQUdILEVBQVA7QUFDQUEsVUFBRSxHQUFHLEVBQUw7QUFDSDs7QUFDREEsUUFBRSxHQUFHRixJQUFJLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFXSixPQUFYLENBQVQ7QUFFQSxhQUFPTyxJQUFJLEdBQUcsQ0FBQ0gsRUFBRCxFQUFLRSxNQUFNLENBQUNGLEVBQUQsRUFBS0csSUFBTCxDQUFYLENBQUgsR0FBNEJILEVBQXZDO0FBQ0g7QUFYSTtBQURFLENBQWYsRTs7QUM5Qk8sSUFBTWdCLGtCQUFrQixHQUFHLE9BQTNCLEM7O0FDQVA7QUFDQTtBQUNlLHFEQUFVQyxHQUFWLEVBQWU7QUFDMUJBLEtBQUcsQ0FBQ2xCLElBQUosR0FBV2lCLGtCQUFrQixHQUFHQyxHQUFHLENBQUNsQixJQUFwQztBQUNBa0IsS0FBRyxDQUFDQyxNQUFKLEdBQWFELEdBQUcsQ0FBQ0MsTUFBSixJQUFjLEVBQTNCO0FBQ0FELEtBQUcsQ0FBQ0MsTUFBSixDQUFXQyxJQUFYLENBQWdCQyxHQUFoQjtBQUNBLFNBQU9ILEdBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0Q7QUFFQTtBQUNBLGtCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsR0FKQTtBQUtBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHNDQUNBO0FBSEE7QUFEQSxHQUxBO0FBWUE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBWkE7QUFpQkEsU0FqQkEscUJBaUJBLENBQ0EsQ0FsQkE7QUFtQkEsU0FuQkEscUJBbUJBLENBQ0EsQ0FwQkE7QUFxQkEsV0FyQkE7QUFzQkE7QUF0QkEsSTs7QUN2QmtOLENBQWdCLGdIQUFHLEVBQUMsQzs7QUNBdE87O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1Rm9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnSDtBQUNoSCxnQkFBZ0Isa0JBQVU7QUFDMUIsRUFBRSwyQ0FBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSw4RDs7QUNsQmYsSUFBSSx3Q0FBTSxnQkFBZ0IsYUFBYSwwQkFBMEIsd0JBQXdCLHFDQUFxQyxxQkFBcUIsaUJBQWlCLEtBQUssK0JBQStCLHlCQUF5QixzREFBc0QsWUFBWSxvQkFBb0IsWUFBWSxhQUFhLHNFQUFzRSw4QkFBOEIsWUFBWSwwQ0FBMEMscUJBQXFCLFdBQVcsb0NBQW9DLHdCQUF3Qiw0Q0FBNEMsK0JBQStCLFdBQVcsOENBQThDLHdCQUF3Qiw0Q0FBNEMsdUNBQXVDLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLFlBQVksT0FBTywyQkFBMkIsaURBQWlELGFBQWEsc0VBQXNFLHFDQUFxQyw4QkFBOEIsNEJBQTRCLFlBQVksc0NBQXNDLHdCQUF3Qix3Q0FBd0MsNkJBQTZCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLFlBQVksbURBQW1ELHNCQUFzQixnRUFBZ0UsYUFBYSxzRUFBc0UsUUFBUSxnQ0FBZ0MsRUFBRSxXQUFXLDhCQUE4QiwwQkFBMEIsNkJBQTZCLDRCQUE0QixZQUFZLDZDQUE2Qyw0Q0FBNEMsaUJBQWlCLDREQUE0RCxZQUFZLGlFQUFpRSx5QkFBeUIseUJBQXlCLDBDQUEwQyxhQUFhLG1CQUFtQix5REFBeUQsbUJBQW1CLDZGQUE2RixpQkFBaUIsbUVBQW1FLHlCQUF5Qix5QkFBeUIsMENBQTBDLGFBQWEsbUJBQW1CLHlEQUF5RCxtQkFBbUIsbUNBQW1DLE1BQU0sNENBQTRDLGFBQWEsc0VBQXNFLDRCQUE0QixZQUFZLCtDQUErQyw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLDZDQUE2QyxVQUFVLGlDQUFpQyxvREFBb0QsYUFBYSxzRUFBc0UsNEJBQTRCLFlBQVksdUNBQXVDLGNBQWMsS0FBSyx1QkFBdUIsVUFBVSxpQ0FBaUMsMEJBQTBCLHVDQUF1QyxjQUFjLEtBQUssdUJBQXVCLFVBQVUsa0NBQWtDLDRCQUE0QixhQUFhLHNFQUFzRSw0QkFBNEIsd0JBQXdCLDJDQUEyQyx5QkFBeUIseUJBQXlCLDJCQUEyQix3QkFBd0IsYUFBYSxzRUFBc0Usa0NBQWtDLHVCQUF1QixrQkFBa0IsT0FBTywySEFBMkgsS0FBSywwQkFBMEIsUUFBUSxpREFBaUQsb0JBQW9CLDJCQUEyQjtBQUMxcEksSUFBSSxpREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUduQjtBQUNBO0FBQ0E7QUFFQTtBQUNBLGNBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEE7QUFEQSxHQUZBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBLHlCQUhBO0FBSUE7QUFDQSxvQkFMQTtBQU1BO0FBQ0Esa0JBUEE7QUFRQTtBQUNBLGNBVEE7QUFVQSxtQkFWQTtBQVdBO0FBQ0EseUJBWkE7QUFhQTtBQUNBLDZCQWRBO0FBZUE7QUFDQSxtQkFoQkE7QUFpQkE7QUFDQSw2QkFsQkE7QUFtQkE7QUFDQTtBQUNBLGtCQXJCQTtBQXNCQSw2QkF0QkE7QUF1QkE7QUFDQSxtQkF4QkE7QUF5QkE7QUFDQSwwQkExQkE7QUEyQkEseUJBM0JBO0FBNEJBO0FBQ0E7QUE3QkE7QUErQkEsR0F6Q0E7QUEwQ0E7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsY0FKQSx3QkFJQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FWQTtBQVdBLFNBWEEsbUJBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxlQWpCQSx5QkFpQkE7QUFDQTtBQUNBLEtBbkJBO0FBb0JBLE9BcEJBLGlCQW9CQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkEsT0F2QkEsaUJBdUJBO0FBQ0E7QUFDQTtBQXpCQSxHQTFDQTtBQXFFQTtBQUNBO0FBQ0EsaUJBRkEseUJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQSxhQU5BLHVCQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBQ0EsYUFoQkEsdUJBZ0JBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsU0F6QkEsbUJBeUJBO0FBQ0E7QUFDQTtBQUNBLEtBNUJBO0FBNkJBO0FBQ0EsZUE5QkEseUJBOEJBO0FBQ0E7QUFDQTtBQUNBLEtBakNBO0FBa0NBLGtCQWxDQSwwQkFrQ0EsSUFsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQTtBQUNBLGdCQXhDQSx3QkF3Q0EsR0F4Q0EsRUF3Q0E7QUFDQTtBQUNBO0FBQ0EsS0EzQ0E7QUE0Q0E7QUFDQSxjQTdDQSxzQkE2Q0EsQ0E3Q0EsRUE2Q0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBLEdBckVBO0FBMEhBO0FBQ0E7QUFDQSxjQUZBLHNCQUVBLEdBRkEsRUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FOQTtBQU9BLE9BUEEsZUFPQSxHQVBBLEVBT0E7QUFDQTtBQUNBO0FBVEEsR0ExSEE7QUFxSUEsU0FySUEscUJBcUlBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBLGdDQUhBO0FBSUE7QUFKQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlCQUZBO0FBR0Esc0JBSEE7QUFJQSxrQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQSxVQU9BLEVBUEE7QUFTQSx3REFDQSxDQURBLEVBNUJBLENBK0JBOztBQUNBLDJGQWhDQSxDQWtDQTs7QUFDQSxlQUNBLElBREEsQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQSx3Q0FGQSxDQUlBOztBQUNBLHVDQUxBLENBT0E7O0FBQ0E7QUFDQSxzRUFDQSxnQ0FEQSxJQUNBLE9BREEsR0FDQSxFQURBO0FBRUE7QUFDQSxLQWJBLEVBY0EsSUFkQSxDQWNBO0FBQ0E7QUFDQSw2QkFGQSxDQUdBOztBQUNBO0FBQ0EsS0FuQkEsV0FvQkE7QUFDQTtBQUNBO0FBQ0EsS0F2QkE7QUF5QkE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FOQTtBQVFBOzs7O0FBR0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsdUNBRkE7QUFHQTtBQUhBLE9BREE7QUFNQTtBQUNBO0FBREEsT0FOQTtBQVNBO0FBQ0EsK0JBREE7QUFFQTtBQUZBLE9BVEE7QUFhQTtBQUNBLDJCQURBO0FBRUE7QUFGQSxPQWJBO0FBaUJBO0FBQ0Esc0NBREE7QUFFQSxtREFGQTtBQUdBLHFDQUhBO0FBSUE7QUFKQTtBQWpCQSxPQTFFQSxDQW1HQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7QUFpQkE7QUFDQTtBQUNBLEdBNVBBO0FBNlBBLFdBN1BBLHVCQTZQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBalFBLEk7O0FDeEdrTixDQUFnQix3R0FBRyxFQUFDLEM7O0FDQWxKO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnSDtBQUNoSCxJQUFJLGNBQVMsR0FBRyxrQkFBVTtBQUMxQixFQUFFLHVDQUFNO0FBQ1IsRUFBRSx3Q0FBTTtBQUNSLEVBQUUsaURBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsdURBQVMsUTs7QUNsQnhCLElBQUksMENBQU0sZ0JBQWdCLGFBQWEsMEJBQTBCLHdCQUF3QixpQkFBaUIsY0FBYyx5Q0FBeUMsaUJBQWlCLGtDQUFrQyx5QkFBeUIsNENBQTRDLCtCQUErQixtQkFBbUIsWUFBWSxPQUFPLGlDQUFpQyxtQ0FBbUMsdUJBQXVCLFlBQVkscUJBQXFCLGFBQWEsb0JBQW9CLGlGQUFpRixtQkFBbUIsZUFBZSxPQUFPLHdEQUF3RCwwRUFBMEUsd0JBQXdCLDhDQUE4Qyw2RkFBNkYsYUFBYSw0RUFBNEUsMEJBQTBCLHlCQUF5QixxREFBcUQsbUJBQW1CLGlJQUFpSSx1QkFBdUI7QUFDdHdDLElBQUksbURBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyQ25CO0FBQ0EsWUFEQTtBQUVBLGdCQUZBO0FBR0Esa0JBSEE7QUFJQSxZQUpBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQSxnQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFPQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFQQSxHQUZBO0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0EsYUFEQTtBQUVBO0FBRkE7QUFJQSxHQXJCQTtBQXNCQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFVBUEEsb0JBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxZQVZBLHNCQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUEsZUFiQSx5QkFhQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQSxVQWhCQSxvQkFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLGFBbkJBLHVCQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsU0F0QkEsbUJBc0JBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0EzQkE7QUE0QkEsUUE1QkEsa0JBNEJBO0FBQ0E7QUFDQSxLQTlCQTtBQStCQSxjQS9CQSx3QkErQkE7QUFDQTtBQUNBO0FBakNBLEdBdEJBO0FBeURBO0FBQ0EsYUFEQSxxQkFDQSxJQURBLEVBQ0EsS0FEQSxFQUNBLElBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEseUJBSUE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTs7QUFHQTtBQUNBO0FBQ0EsS0FYQTtBQVlBLFdBWkEscUJBWUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBekRBLEk7O0FDckRrTixDQUFnQiw0R0FBRyxFQUFDLEM7O0FDQWxKO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnSDtBQUNoSCxJQUFJLGdCQUFTLEdBQUcsa0JBQVU7QUFDMUIsRUFBRSx5Q0FBTTtBQUNSLEVBQUUsMENBQU07QUFDUixFQUFFLG1EQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLDJEQUFTLFE7O0FDbEJ4QixJQUFJLDRDQUFNLGdCQUFnQixhQUFhLDBCQUEwQix3QkFBd0IsaUJBQWlCLGdCQUFnQixZQUFZLG9CQUFvQix3QkFBd0IseUJBQXlCLDBJQUEwSSxLQUFLLCtCQUErQixRQUFRLDhDQUE4QyxpQkFBaUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsa0RBQWtELHlCQUF5QiwwSUFBMEksS0FBSyw2QkFBNkIsUUFBUSw0Q0FBNEMsZUFBZSxzQkFBc0I7QUFDMTFCLElBQUkscURBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzhCbkI7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsR0FGQTtBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQWpCQTtBQXFCQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQXJCQTtBQXlCQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQXpCQSxHQU5BO0FBb0NBLE1BcENBLGtCQW9DQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBSUEsR0F6Q0E7QUEwQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBSUE7QUFSQSxHQTFDQTtBQW9EQTtBQUNBLHFCQURBLDZCQUNBLFlBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLFNBUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBYUEsS0FmQTtBQWdCQSxtQkFoQkEsMkJBZ0JBLFlBaEJBLEVBZ0JBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsU0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBLE9BWEE7QUFZQTtBQTdCQSxHQXBEQTtBQW1GQSxTQW5GQSxxQkFtRkE7QUFDQTtBQUNBLEdBckZBO0FBc0ZBLFNBdEZBLHFCQXNGQSxDQUNBLENBdkZBO0FBd0ZBO0FBQ0EsU0FEQSxpQkFDQSxHQURBLEVBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQXhGQSxJOztBQ2pDa04sQ0FBZ0IsZ0hBQUcsRUFBQyxDOztBQ0FsSjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0g7QUFDaEgsSUFBSSxrQkFBUyxHQUFHLGtCQUFVO0FBQzFCLEVBQUUsMkNBQU07QUFDUixFQUFFLDRDQUFNO0FBQ1IsRUFBRSxxREFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSwrREFBUyxROztBQ2xCeEI7QUFDQTtBQUNBO0FBQ0E7QUFFZSwyRUFDWEksUUFEVyxFQUVYQyxJQUZXLEVBR1hDLE1BSFcsRUFJWEMsUUFKVyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBLElBQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVosSUFBdUJDLG1CQUFPLENBQUMsQ0FBRCxDQUFQLENBQTJCSixPQUFsRTs7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFVQyxHQUFWLEVBQTBCO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJO0FBQ3RDQywwREFBVSxDQUFDM0IsR0FBWCxDQUFlLFVBQUE0QixTQUFTLEVBQUk7QUFDeEJILE9BQUcsQ0FBQ0csU0FBSixDQUFjQSxTQUFTLENBQUNuQyxJQUF4QixFQUE4Qm1DLFNBQTlCO0FBQ0gsR0FGRDtBQUlBSCxLQUFHLENBQUNJLFNBQUosQ0FBY0MsTUFBZCxHQUF1QjtBQUNuQkMsTUFBRSxFQUFHLFlBQU07QUFDUCxVQUFJQyxNQUFNLENBQUNDLE9BQVgsRUFBb0I7QUFDaEIsZUFBTztBQUNIeEMsY0FBSSxFQUFFLFlBREg7QUFFSHlDLGNBQUksRUFBRTtBQUZILFNBQVA7QUFJSDtBQUNKLEtBUEc7QUFEZSxHQUF2QjtBQVVILENBZkQ7O0FBaUJBLElBQUksT0FBT0YsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDUCxHQUE1QyxFQUFpRDtBQUM3Q0QsU0FBTyxDQUFDUSxNQUFNLENBQUNQLEdBQVIsQ0FBUDtBQUNIOztBQUVELElBQU1VLEtBQUssR0FBRztBQUNWaEIsU0FBTyxFQUFFQSxPQURDO0FBRVZLLFNBQU8sRUFBUEE7QUFGVSxDQUFkO0FBS2VXLG9FQUFmLEU7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJoZC12dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkhEVlVFXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhEVlVFXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhEVlVFXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7Y2xhc3M6W192bS5iKCkseydhdnVlLWNhcm91c2VsLS1mdWxsc2NyZWVuJzogX3ZtLm9wdGlvbi5mdWxsc2NyZWVufV19LFtfYygnZWwtY2Fyb3VzZWwnLHthdHRyczp7XCJ0eXBlXCI6X3ZtLm9wdGlvbi50eXBlLFwiaGVpZ2h0XCI6X3ZtLm9wdGlvbi5oZWlnaHQrJ3B4JyxcImF1dG9wbGF5XCI6X3ZtLm9wdGlvbi5hdXRvcGxheSxcImludGVydmFsXCI6X3ZtLm9wdGlvbi5pbnRlcnZhbCxcImluZGljYXRvci1wb3NpdGlvblwiOlwib3V0c2lkZVwifX0sX3ZtLl9sKChfdm0uZGF0YSksZnVuY3Rpb24oaXRlbSxpbmRleCl7cmV0dXJuIF9jKCdlbC1jYXJvdXNlbC1pdGVtJyx7a2V5OmluZGV4fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdpdGVtJyl9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjppdGVtLmhyZWY/aXRlbS5ocmVmOidqYXZhc2NyaXB0OnZvaWQoMCk7JyxcInRhcmdldFwiOml0ZW0udGFyZ2V0fX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignaW1nJyksc3R5bGU6KHtiYWNrZ3JvdW5kSW1hZ2U6J3VybCgnK2l0ZW0uc3JjKycpJ30pfSksX3ZtLl92KFwiIFwiKSwoaXRlbS50aXRsZSk/X2MoJ2Rpdicse2NsYXNzOl92bS5iKCd0aXRsZScpfSxbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKTpfdm0uX2UoKV0pXSldKX0pLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyoqXHJcbiAqIGJlbSBoZWxwZXJcclxuICogYigpIC8vICdidXR0b24nXHJcbiAqIGIoJ3RleHQnKSAvLyAnYnV0dG9uX190ZXh0J1xyXG4gKiBiKHsgZGlzYWJsZWQgfSkgLy8gJ2J1dHRvbiBidXR0b24tLWRpc2FibGVkJ1xyXG4gKiBiKCd0ZXh0JywgeyBkaXNhYmxlZCB9KSAvLyAnYnV0dG9uX190ZXh0IGJ1dHRvbl9fdGV4dC0tZGlzYWJsZWQnXHJcbiAqIGIoWydkaXNhYmxlZCcsICdwcmltYXJ5J10pIC8vICdidXR0b24gYnV0dG9uLS1kaXNhYmxlZCBidXR0b24tLXByaW1hcnknXHJcbiAqL1xyXG5cclxuY29uc3QgRUxFTUVOVCA9ICdfXyc7XHJcbmNvbnN0IE1PRFMgPSAnLS0nO1xyXG5cclxuY29uc3Qgam9pbiA9IChuYW1lLCBlbCwgc3ltYm9sKSA9PiBlbCA/IG5hbWUgKyBzeW1ib2wgKyBlbCA6IG5hbWU7XHJcblxyXG5jb25zdCBwcmVmaXggPSAobmFtZSwgbW9kcykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBtb2RzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBqb2luKG5hbWUsIG1vZHMsIE1PRFMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZHMubWFwKGl0ZW0gPT4gcHJlZml4KG5hbWUsIGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKG1vZHMgfHwge30pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICByZXRbbmFtZSArIE1PRFMgKyBrZXldID0gbW9kc1trZXldO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGIgKGVsLCBtb2RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy4kb3B0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChlbCAmJiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RzID0gZWw7XHJcbiAgICAgICAgICAgICAgICBlbCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gam9pbihuYW1lLCBlbCwgRUxFTUVOVCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW9kcyA/IFtlbCwgcHJlZml4KGVsLCBtb2RzKV0gOiBlbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBLRVlfQ09NUE9ORU5UX05BTUUgPSAnYXZ1ZS0nOyIsImltcG9ydCBiZW0gZnJvbSAndXRpbHMvYmVtJztcclxuaW1wb3J0IHsgS0VZX0NPTVBPTkVOVF9OQU1FIH0gZnJvbSAnZ2xvYmFsL3ZhcmlhYmxlJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNmYykge1xyXG4gICAgc2ZjLm5hbWUgPSBLRVlfQ09NUE9ORU5UX05BTUUgKyBzZmMubmFtZTtcclxuICAgIHNmYy5taXhpbnMgPSBzZmMubWl4aW5zIHx8IFtdO1xyXG4gICAgc2ZjLm1peGlucy5wdXNoKGJlbSk7XHJcbiAgICByZXR1cm4gc2ZjO1xyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgOmNsYXNzPVwiW2IoKSx7J2F2dWUtY2Fyb3VzZWwtLWZ1bGxzY3JlZW4nOiBvcHRpb24uZnVsbHNjcmVlbn1dXCI+XHJcbiAgICAgICAgPGVsLWNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA6dHlwZT1cIm9wdGlvbi50eXBlXCJcclxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJvcHRpb24uaGVpZ2h0KydweCdcIlxyXG4gICAgICAgICAgICAgICAgOmF1dG9wbGF5PVwib3B0aW9uLmF1dG9wbGF5XCJcclxuICAgICAgICAgICAgICAgIDppbnRlcnZhbD1cIm9wdGlvbi5pbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3ItcG9zaXRpb249XCJvdXRzaWRlXCI+XHJcbiAgICAgICAgICAgIDxlbC1jYXJvdXNlbC1pdGVtIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignaXRlbScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLmhyZWY/aXRlbS5ocmVmOidqYXZhc2NyaXB0OnZvaWQoMCk7J1wiIDp0YXJnZXQ9XCJpdGVtLnRhcmdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2ltZycpXCIgOnN0eWxlPVwie2JhY2tncm91bmRJbWFnZTondXJsKCcraXRlbS5zcmMrJyknfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3RpdGxlJylcIiB2LWlmPVwiaXRlbS50aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9lbC1jYXJvdXNlbC1pdGVtPlxyXG4gICAgICAgIDwvZWwtY2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY3JlYXRlIGZyb20gXCJjb3JlL2NyZWF0ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJjYXJvdXNlbFwiLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uLmRhdGEgfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHt9LFxyXG4gICAgICAgIG1ldGhvZHM6IHt9XHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTgyMjMxMDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmRpYWxvZ1Zpc2libGUpP19jKCdkaXYnLHtjbGFzczpfdm0uYigpLGF0dHJzOntcImlkXCI6XCJhdnVlLWVwdWJcIn0sb246e1wiY29udGV4dG1lbnVcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO30sXCJtb3VzZXdoZWVsXCI6X3ZtLm1vdXNlV2hlZWwsXCJjbGlja1wiOl92bS5kaWFsb2dDbGlja319LFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2snKX0sW19jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KF92bS5jYW5TaG93KSxleHByZXNzaW9uOlwiY2FuU2hvd1wifV0sY2xhc3M6X3ZtLmIoJ2Jvb2tfX2hlYWRlcicpfSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19oZWFkZXJfX3RpdGxlJyksYXR0cnM6e1widGl0bGVcIjpfdm0uYm9va05hbWV9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF92bS5ib29rTmFtZSl9fSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2hlYWRlcl9fc2VjdGlvbicpLGF0dHJzOntcInRpdGxlXCI6X3ZtLmN1cnJlbnRTZWN0aW9uTmFtZX0sZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoX3ZtLmN1cnJlbnRTZWN0aW9uTmFtZSl9fSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2hlYWRlcl9fcGFnZScpLGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF92bS5wcm9ncmVzc1N0cil9fSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY29udGVudCcpLGF0dHJzOntcImlkXCI6XCJlcHViX19ib29rX192aWV3ZXJfX2JveFwifX0sW19jKCdkaXYnLHthdHRyczp7XCJpZFwiOlwiZXB1Yl9fYm9va19fdmlld2VyXCJ9fSldKSxfdm0uX3YoXCIgXCIpLChfdm0uY2F0YWxvZ3VlVmlzaWJsZSk/X2MoJ2Rpdicse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLmNhblNob3cpLGV4cHJlc3Npb246XCJjYW5TaG93XCJ9XSxjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlJyksb246e1wibW91c2V3aGVlbFwiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO319fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19jYXRhbG9ndWVfX2xheWVyJyl9KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19ib3gnKSxvbjp7XCJtb3VzZWRvd25cIjpmdW5jdGlvbigkZXZlbnQpe192bS5pc0NhdGFsb2d1ZUNsaWNrPXRydWV9LFwibW91c2V1cFwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZX19fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19jYXRhbG9ndWVfX2JveF9faGVhZGVyJyksYXR0cnM6e1widGl0bGVcIjpfdm0uYm9va05hbWV9fSxbX3ZtLl92KF92bS5fcyhfdm0uYm9va05hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ2VsLXNjcm9sbGJhcicse3N0YXRpY1N0eWxlOntcImhlaWdodFwiOlwiY2FsYygxMDAlIC0gMTIxcHgpXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJyZ2IoMjMwLCAyMzAsIDIzMClcIn0sYXR0cnM6e1wid3JhcC1zdHlsZVwiOidvdmVyZmxvdy14OmhpZGRlbjsnfSxuYXRpdmVPbjp7XCIhbW91c2Vkb3duXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNDYXRhbG9ndWVDbGljaz10cnVlfSxcIiFtb3VzZXVwXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNDYXRhbG9ndWVDbGljaz10cnVlfX19LFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94X19jb250ZW50Jyl9LF92bS5fbCgoX3ZtLmNhdGFsb2d1ZSksZnVuY3Rpb24oc2VjdGlvbixpKXtyZXR1cm4gX2MoJ2Rpdicse2tleTppLGNsYXNzOl92bS5iKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudF9fc2VjdGlvbicpfSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudF9fc2VjdGlvbl9fdGl0bGUnKSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uY2F0YWxvZ3VlQ2xpY2soc2VjdGlvbi5ocmVmKX19fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcIm5hbWVcIn0sW192bS5fdihfdm0uX3Moc2VjdGlvbi5sYWJlbCkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwicGFnZVwifSxbX3ZtLl92KF92bS5fcyhzZWN0aW9uLnBhZ2UpKV0pXSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKHNlY3Rpb24uc3ViaXRlbXMpLGZ1bmN0aW9uKGNoYXB0ZXIsail7cmV0dXJuIF9jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb25fX2NoYXB0ZXInKSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uY2F0YWxvZ3VlQ2xpY2soc2VjdGlvbi5ocmVmKX19fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcIm5hbWVcIn0sW192bS5fdihfdm0uX3MoY2hhcHRlci5sYWJlbCkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwicGFnZVwifSxbX3ZtLl92KF92bS5fcyhjaGFwdGVyLnBhZ2UpKV0pXSl9KV0sMil9KSwwKV0pXSwxKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLmNhblNob3cpLGV4cHJlc3Npb246XCJjYW5TaG93XCJ9XSxjbGFzczpfdm0uYignYm9va19fYm94MScpfSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19ib3gxX19idXR0b24nKSxzdGF0aWNTdHlsZTp7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjMjU3QUE3XCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmNhdGFsb2d1ZVZpc2libGU9IV92bS5jYXRhbG9ndWVWaXNpYmxlfX19LFtfYygnaScse3N0YXRpY0NsYXNzOlwiZWwtaWNvbi1ub3RlYm9vay0xXCJ9KSxfYygnZW0nLFtfdm0uX3YoXCLnm67lvZVcIildKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOihfdm0uY2FuU2hvdyksZXhwcmVzc2lvbjpcImNhblNob3dcIn1dLGNsYXNzOl92bS5iKCdib29rX19ib3gyJyl9LFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2JveDJfX3ByZXYnKSxhdHRyczp7XCJ0aXRsZVwiOlwi5LiK5LiA6aG1XCJ9LG9uOntcImNsaWNrXCI6X3ZtLnByZXZDbGlja319LFtfYygnaScse3N0YXRpY0NsYXNzOlwiZWwtaWNvbi1hcnJvdy1sZWZ0XCJ9KV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19ib3gyX19uZXh0JyksYXR0cnM6e1widGl0bGVcIjpcIuS4i+S4gOmhtVwifSxvbjp7XCJjbGlja1wiOl92bS5uZXh0Q2xpY2t9fSxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImVsLWljb24tYXJyb3ctcmlnaHRcIn0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KF92bS5jYW5TaG93KSxleHByZXNzaW9uOlwiY2FuU2hvd1wifV0sY2xhc3M6X3ZtLmIoJ2Jvb2tfX2JveDMnKX0pXSksX3ZtLl92KFwiIFwiKSxfYygnaScse2NsYXNzOlsnZWwtaWNvbi1jbG9zZScsX3ZtLmIoJ2Nsb3NlJyldLG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5jbG9zZSgkZXZlbnQpfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KF92bS5jYW5TaG93KSxleHByZXNzaW9uOlwiY2FuU2hvd1wifV0sY2xhc3M6X3ZtLmIoJ3Njcm9sbGJhcicpLGF0dHJzOntcImlkXCI6XCJib29rLXNjcm9sbGJhclwifX0sW19jKCdlbC1zbGlkZXInLHthdHRyczp7XCJmb3JtYXQtdG9vbHRpcFwiOl92bS5mb3JtYXRUb29sdGlwLFwic2hvdy10b29sdGlwXCI6dHJ1ZSxcInZlcnRpY2FsXCI6XCJcIixcIm1pblwiOl92bS5taW4sXCJtYXhcIjpfdm0ubWF4LFwiaGVpZ2h0XCI6X3ZtLnNjcm9sbEhlaWdodH0sb246e1wiY2hhbmdlXCI6X3ZtLnNsaWRlckNoYW5nZX0sbW9kZWw6e3ZhbHVlOihfdm0uc2xpZGVyVmFsdWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uc2xpZGVyVmFsdWU9JCR2fSxleHByZXNzaW9uOlwic2xpZGVyVmFsdWVcIn19KV0sMSldKTpfdm0uX2UoKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdlxyXG4gICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cIlwiXHJcbiAgICAgICAgICAgIEBtb3VzZXdoZWVsPVwibW91c2VXaGVlbFwiXHJcbiAgICAgICAgICAgIGlkPVwiYXZ1ZS1lcHViXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nQ2xpY2tcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJiKClcIlxyXG4gICAgICAgICAgICB2LWlmPVwiZGlhbG9nVmlzaWJsZVwiPlxyXG4gICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9vaycpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiY2FuU2hvd1wiIDpjbGFzcz1cImIoJ2Jvb2tfX2hlYWRlcicpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2tfX2hlYWRlcl9fdGl0bGUnKVwiIDp0aXRsZT1cImJvb2tOYW1lXCIgdi10ZXh0PVwiYm9va05hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19faGVhZGVyX19zZWN0aW9uJylcIiA6dGl0bGU9XCJjdXJyZW50U2VjdGlvbk5hbWVcIiB2LXRleHQ9XCJjdXJyZW50U2VjdGlvbk5hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19faGVhZGVyX19wYWdlJylcIiB2LXRleHQ9XCJwcm9ncmVzc1N0clwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLeS5puacrOWGheWuuS0tPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZXB1Yl9fYm9va19fdmlld2VyX19ib3hcIiA6Y2xhc3M9XCJiKCdib29rX19jb250ZW50JylcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlcHViX19ib29rX192aWV3ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS3nm67lvZUtLT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImNhblNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZXdoZWVsLnN0b3A9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjYXRhbG9ndWVWaXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJiKCdib29rX19jYXRhbG9ndWUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJiKCdib29rX19jYXRhbG9ndWVfX2xheWVyJylcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQG1vdXNlZG93bj1cImlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBtb3VzZXVwPVwiaXNDYXRhbG9ndWVDbGljaz10cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3gnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2hlYWRlcicpXCIgOnRpdGxlPVwiYm9va05hbWVcIj57e2Jvb2tOYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZWwtc2Nyb2xsYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbW91c2Vkb3duLm5hdGl2ZS5jYXB0dXJlPVwiaXNDYXRhbG9ndWVDbGljaz10cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtb3VzZXVwLm5hdGl2ZS5jYXB0dXJlPVwiaXNDYXRhbG9ndWVDbGljaz10cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3cmFwLXN0eWxlPVwiJ292ZXJmbG93LXg6aGlkZGVuOydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6Y2FsYygxMDAlIC0gMTIxcHgpO2JhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJiKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoc2VjdGlvbixpKSBpbiBjYXRhbG9ndWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJiKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudF9fc2VjdGlvbicpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2suc3RvcD1cImNhdGFsb2d1ZUNsaWNrKHNlY3Rpb24uaHJlZilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb25fX3RpdGxlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tzZWN0aW9uLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnZVwiPnt7c2VjdGlvbi5wYWdlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjYXRhbG9ndWVDbGljayhzZWN0aW9uLmhyZWYpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNoYXB0ZXIsaikgaW4gc2VjdGlvbi5zdWJpdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJiKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudF9fc2VjdGlvbl9fY2hhcHRlcicpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7Y2hhcHRlci5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2VcIj57e2NoYXB0ZXIucGFnZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZWwtc2Nyb2xsYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0t5a6a5L2NLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiY2FuU2hvd1wiIDpjbGFzcz1cImIoJ2Jvb2tfX2JveDEnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2suc3RvcD1cImNhdGFsb2d1ZVZpc2libGU9IWNhdGFsb2d1ZVZpc2libGVcIiA6Y2xhc3M9XCJiKCdib29rX19ib3gxX19idXR0b24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzI1N0FBNztcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tbm90ZWJvb2stMVwiPjwvaT48ZW0+55uu5b2VPC9lbT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIltiKCdib29rX19ib3gxX19idXR0b24nKSxiKCdib29rX19ib3gxX19idXR0b24mIzQ1OyYjNDU7OTAnKV1cIi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY1OTkyQztcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWwtaWNvbi1kb2N1bWVudFwiPjwvaT48ZW0+6K+m5oOF6aG1PC9lbT4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19fYm94MV9fYnV0dG9uJylcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNERjgwMkM7XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tZG93bmxvYWRcIj48L2k+PGVtPuS4i+i9vTwvZW0+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLee/u+mhtS0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImNhblNob3dcIiA6Y2xhc3M9XCJiKCdib29rX19ib3gyJylcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwicHJldkNsaWNrXCIgdGl0bGU9XCLkuIrkuIDpobVcIiA6Y2xhc3M9XCJiKCdib29rX19ib3gyX19wcmV2JylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJuZXh0Q2xpY2tcIiB0aXRsZT1cIuS4i+S4gOmhtVwiIDpjbGFzcz1cImIoJ2Jvb2tfX2JveDJfX25leHQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZWwtaWNvbi1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJjYW5TaG93XCIgOmNsYXNzPVwiYignYm9va19fYm94MycpXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGkgOmNsYXNzPVwiWydlbC1pY29uLWNsb3NlJyxiKCdjbG9zZScpXVwiIEBjbGljay5zdG9wPVwiY2xvc2VcIj48L2k+XHJcblxyXG4gICAgICAgIDwhLS3kuabnsY3nmoTmu5rliqjmnaEtLT5cclxuICAgICAgICA8ZGl2IHYtc2hvdz1cImNhblNob3dcIiBpZD1cImJvb2stc2Nyb2xsYmFyXCIgOmNsYXNzPVwiYignc2Nyb2xsYmFyJylcIj5cclxuICAgICAgICAgICAgPGVsLXNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIDpmb3JtYXQtdG9vbHRpcD1cImZvcm1hdFRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzaG93LXRvb2x0aXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2xpZGVyVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgOm1pbj1cIm1pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1heD1cIm1heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cInNjcm9sbEhlaWdodFwiPlxyXG4gICAgICAgICAgICA8L2VsLXNsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8vIFRPRE86MSDnsr7noa7liIbpobVcclxuICAgIC8vIFRPRE86QlVHOjEg6aG16Z2i5b6A5YmN5pyJ5pe25YCZ6aG16Z2i5pi+56S65LiN5a+577yM5Y+v6IO95pivZXB1Yi5qc+eahOa7muWKqOebkeWQrOWkhOeQhuaciemXrumimFxyXG4gICAgaW1wb3J0IGNyZWF0ZSBmcm9tIFwiY29yZS9jcmVhdGVcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiZXB1YlwiLFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGJvb2tVcmw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8g5rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgLy8g5rua5Yqo5oyJ6ZKu5b2T5YmN5YC8XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJWYWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIC8vIOS5puWQjVxyXG4gICAgICAgICAgICAgICAgYm9va05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgLy8g5a6e5L6LXHJcbiAgICAgICAgICAgICAgICBib29rOiB7fSxcclxuICAgICAgICAgICAgICAgIHJlbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAvLyDmmL7npLror6XpobXpnaLnqpflj6NcclxuICAgICAgICAgICAgICAgIGRpYWxvZ1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrkuabnsY3nm67lvZVcclxuICAgICAgICAgICAgICAgIGNhdGFsb2d1ZVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8g5Lmm57GN55uu5b2V5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBjYXRhbG9ndWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgLy8g5piv5Zyo55uu5b2V5LiK55qE54K55Ye7XHJcbiAgICAgICAgICAgICAgICBpc0NhdGFsb2d1ZUNsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIOi/meS4pOS4queUqOS6jumhteeggXBhZ2VOdW1iZXLnmoTorqHnrpfvvIxcclxuICAgICAgICAgICAgICAgIC8vIOWPr+mAmui/h2xvY2F0aW9uc1twYWdlSW5kZXhd5Y+W6aG15pWw5a+56LGhbG9jYXRpb25cclxuICAgICAgICAgICAgICAgIHBhZ2VJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgLy8g5a2Y5pS+5YiG6aG15L+h5oGvXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgLy8gZml4ZWRcclxuICAgICAgICAgICAgICAgIGZpeElzQnlCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZml4TG9jYXRpb25JbmRleDogMSxcclxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeeahOeroOiKguWQjeensFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb25OYW1lOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBjYW5TaG93KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmxvYWRpbmc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maXhJc0J5QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZUluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4TG9jYXRpb25JbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvdGFsKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9vayAmJiB0aGlzLmJvb2sgJiYgdGhpcy5ib29rLmxvY2F0aW9ucyAmJiB0aGlzLmJvb2subG9jYXRpb25zLnRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9vay5sb2NhdGlvbnMudG90YWwgLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2dyZXNzU3RyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucGFnZU51bWJlcn0gLyAke3RoaXMudG90YWx9YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWluKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8vIOa7muWKqOadoeeahOa1ruWKqOaPkOekulxyXG4gICAgICAgICAgICBmb3JtYXRUb29sdGlwKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1heCAtIHZhbCkgKyAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDot7PovazliLDkuIrkuIDpobVcclxuICAgICAgICAgICAgcHJldkNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLmZpeExvY2F0aW9uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeElzQnlCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXhMb2NhdGlvbkluZGV4ID0gdGhpcy5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kaXRpb24uZGlzcGxheSh0aGlzLmxvY2F0aW9uc1t0aGlzLnBhZ2VJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDot7PovazliLDkuIvkuIDpobVcclxuICAgICAgICAgICAgbmV4dENsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLmZpeExvY2F0aW9uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeElzQnlCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUluZGV4IDwgdGhpcy50b3RhbCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZml4TG9jYXRpb25JbmRleCA9IHRoaXMucGFnZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGl0aW9uLmRpc3BsYXkodGhpcy5sb2NhdGlvbnNbdGhpcy5wYWdlSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGZpeGVkIOebruW9leWkluWcsOaWueeCueWHu+WPr+WFs+mXrVxyXG4gICAgICAgICAgICBkaWFsb2dDbGljaygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ3VlVmlzaWJsZSA9IHRoaXMuaXNDYXRhbG9ndWVDbGljayA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDYXRhbG9ndWVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRhbG9ndWVDbGljayhocmVmKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRpdGlvbi5kaXNwbGF5KGhyZWYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9ndWVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2F0YWxvZ3VlQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5ouW5Yqo5rua5Yqo5p2h5ZCO5Lmm57GN6Lez6L2s5Yiw5a+55bqU6aG1XHJcbiAgICAgICAgICAgIHNsaWRlckNoYW5nZShudW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uSW5kZXggPSB0aGlzLm1heCAtIG51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGl0aW9uLmRpc3BsYXkodGhpcy5sb2NhdGlvbnNbdGhpcy5jdXJyZW50TG9jYXRpb25JbmRleF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDnm5HlkKzlhajlsYDnmoTpvKDmoIfmu5rliqjvvIzkvb/kuabmnKzlhoXlrrnmu5rliqhcclxuICAgICAgICAgICAgbW91c2VXaGVlbChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcHViLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVscyAmJiBlbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZWxzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbFRvcCArIGUuZGVsdGFZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgLy8g55uR5ZCs5rua5Yqo6aG156CB77yM5L2/5a+55bqU55qE5rua5Yqo5oyJ6ZKu5Yiw55u45bqU55qE5L2N572uXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJWYWx1ZSA9IHRoaXMubWF4IC0gdmFsICsgMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heCh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmVQdWIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xhY2sgb2YganN6aXAuanMgYW5kIGVwdWIuanMgIScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWKoOi9veaYvuekulxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy4kbG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBsb2NrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+ato+WcqOWKoOi9veS4rScsXHJcbiAgICAgICAgICAgICAgICBzcGlubmVyOiAnZWwtaWNvbi1sb2FkaW5nJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDQ0NTRhJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvb2sgPSB3aW5kb3cuZVB1Yih0aGlzLmJvb2tVcmwpIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXB1Yl9fYm9va19fdmlld2VyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgcmVuZGl0aW9uID0gYm9vay5yZW5kZXJUbyhcImVwdWJfX2Jvb2tfX3ZpZXdlclwiLCB7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyOiBcImNvbnRpbnVvdXNcIixcclxuICAgICAgICAgICAgICAgIHNwcmVhZDogJzAnLFxyXG4gICAgICAgICAgICAgICAgZmxvdzogXCJzY3JvbGxlZFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBzdG9yZTogJ3RydWUnXHJcbiAgICAgICAgICAgIH0pIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgcmVuZGl0aW9uLmRpc3BsYXkodGhpcy5wYWdlSW5kZXgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u5Y+z6L655rua5Yqo5p2h55qE6auY5bqm77yMLTI15piv5Li65LqG6K6p5rua5Yqo5oyJ6ZKu5LiN6LaF5Ye66aG16Z2i5pi+56S66IyD5Zu0XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLXNjcm9sbGJhcicpLnNjcm9sbEhlaWdodCAtIDI1KSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAvLyDkuabmnKzliJ3lp4vljJblrozmiJBcclxuICAgICAgICAgICAgYm9vay5yZWFkeVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKFttYW5pZmVzdCwgc3BpbmUsIG1ldGFkYXRhLCBjb3ZlciwgbmF2aWdhdGlvbiwgcmVzb3VyY2VzLCBkaXNwbGF5T3B0aW9uc10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva7nm67lvZVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2d1ZSA9IG5hdmlnYXRpb24udG9jO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva7kuablkI1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOYW1lID0gbWV0YWRhdGEudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmihOWIhumhte+8jOagueaNruWtl+espuS4quaVsOaKiuS5puexjeWIhumhtVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VwdWJfX2Jvb2tfX3ZpZXdlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChOdW1iZXIucGFyc2VJbnQoZWwuY2xpZW50V2lkdGgsIDEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqIE51bWJlci5wYXJzZUludChlbC5jbGllbnRIZWlnaHQpIC8gKDQwMCAqIDIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2subG9jYXRpb25zLmdlbmVyYXRlKG51bSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGxvY2F0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkv53lrZjliIbpobXkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog55uR5ZCs5Lmm5pys5YaF5a655L2N572u5pS55Y+YXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZW5kaXRpb24ub24oXCJyZWxvY2F0ZWRcIiwgKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZml4SXNCeUJ1dHRvbiAmJiBsb2NhdGlvbi5zdGFydC5sb2NhdGlvbiA8PSB0aGlzLnRvdGFsIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZml4TG9jYXRpb25JbmRleCA9IGxvY2F0aW9uLnN0YXJ0LmxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeElzQnlCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6K6+572u5Li76aKY5qC35byPXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZW5kaXRpb24udGhlbWVzLmRlZmF1bHQoe1xyXG4gICAgICAgICAgICAgICAgYToge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMjIyMjIyICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWhlaWdodCc6ICcxLjYgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtZGVjb3JhdGlvbic6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdhOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMzM4MGZmICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCc6ICcjZjVmNWY1JyxcclxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDQwcHggIWltcG9ydGFudCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoMjoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJ3B1cnBsZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6ICcxOXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6ICdNaWNyb3NvZnQgWWFoZWkgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJyMyMjIyMjIgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtaGVpZ2h0JzogJzEuNiAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOebkeWQrOW9k+WJjeS9jee9ru+8jOiuvue9ruW9k+WJjeeroOiKguagh+mimFxyXG4gICAgICAgICAgICByZW5kaXRpb24ub24oXCJyZW5kZXJlZFwiLCAoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlNlY3Rpb24gPSBzZWN0aW9uLnByZXYoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYm9vay5uYXZpZ2F0aW9uLnRvYy5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaHJlZi5pbmNsdWRlcyhzZWN0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQgJiYgcHJldlNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gYm9vay5uYXZpZ2F0aW9uLnRvYy5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhyZWYuaW5jbHVkZXMocHJldlNlY3Rpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY3Rpb25OYW1lID0gY3VycmVudC5sYWJlbC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib29rID0gYm9vaztcclxuICAgICAgICAgICAgdGhpcy5yZW5kaXRpb24gPSByZW5kaXRpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvb2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9vay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NGU3NGZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2NsYXNzOl92bS5iKCl9LFtfdm0uX2woKF92bS5saXN0KSxmdW5jdGlvbihpdGVtLGluZGV4KXtyZXR1cm4gX2MoJ2Rpdicse2tleTppbmRleCxjbGFzczpfdm0uYignaXRlbScpLG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLml0ZW1DbGljayhpdGVtLGluZGV4LF92bS5saXN0KX19fSxbKGl0ZW1bX3ZtLmltZ0tleV0pP19jKCdkaXYnLHtjbGFzczpfdm0uYignaW1nJyl9LFtfYygnaW1nJyx7YXR0cnM6e1wic3JjXCI6aXRlbVtfdm0uaW1nS2V5XSxcImFsdFwiOlwiXCJ9fSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0uYignY29udGVudCcpfSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCd0aXRsZScpfSxbX2MoJ3NwYW4nLHtjbGFzczpfdm0uYignbmFtZScpfSxbX3ZtLl92KF92bS5fcyhpdGVtW192bS50aXRsZUtleV0pKV0pLF92bS5fdihcIiBcIiksKGl0ZW1bX3ZtLnRhZ0tleV0pP19jKCdzcGFuJyx7Y2xhc3M6X3ZtLmIoJ3RhZycpfSxbX2MoJ2VsLXRhZycse2F0dHJzOntcInNpemVcIjpcInNtYWxsXCIsXCJ0eXBlXCI6X3ZtLmdldFR5cGUoaXRlbVtfdm0uc3RhdHVzS2V5XSl9fSxbX3ZtLl92KF92bS5fcyhpdGVtW192bS50YWdLZXldKSldKV0sMSk6X3ZtLl9lKCldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0uYignc3VidGl0bGUnKX0sW192bS5fdihfdm0uX3MoaXRlbVtfdm0uc3VidGl0bGVLZXldKSldKV0pXSl9KSxfdm0uX3YoXCIgXCIpLChfdm0uc2hvd0Zvb3RlcktleSYmX3ZtLmxpc3QubGVuZ3RoIT09MCk/X2MoJ2RpdicsWyghX3ZtLmhhc0xvYWRBbGwpP19jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcImxvYWRpbmdcIixyYXdOYW1lOlwidi1sb2FkaW5nXCIsdmFsdWU6KF92bS5sb2FkaW5nKSxleHByZXNzaW9uOlwibG9hZGluZ1wifV0sY2xhc3M6X3ZtLmIoJ21vcmUnKSxvbjp7XCJjbGlja1wiOl92bS5oYW5kbGVDbGlja319LFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDliqDovb3mm7TlpJpcXG4gICAgICAgIFwiKV0pOl9jKCdkaXYnLHtjbGFzczpfdm0uYignYWxsJyl9LFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDlt7LliqDovb3lhajpg6hcXG4gICAgICAgIFwiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmxpc3QubGVuZ3RoPT09MCk/X2MoJ2RpdicsW192bS5fdChcImVtcHR5U2xvdFwiLFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ25vdGhpbmcnKX0sW192bS5fdihcIuaaguaXoOaVsOaNrlwiKV0pXSldLDIpOl92bS5fZSgpXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJiKClcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2l0ZW0nKVwiXHJcbiAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgQGNsaWNrPVwiaXRlbUNsaWNrKGl0ZW0saW5kZXgsbGlzdClcIlxyXG4gICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2ltZycpXCJcclxuICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbVtpbWdLZXldXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtW2ltZ0tleV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignY29udGVudCcpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3RpdGxlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJiKCduYW1lJylcIj57e2l0ZW1bdGl0bGVLZXldfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYigndGFnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtW3RhZ0tleV1cIj5cclxuICAgICAgICAgICAgPGVsLXRhZyBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp0eXBlPVwiZ2V0VHlwZShpdGVtW3N0YXR1c0tleV0pXCI+e3tpdGVtW3RhZ0tleV19fTwvZWwtdGFnPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3N1YnRpdGxlJylcIj57e2l0ZW1bc3VidGl0bGVLZXldfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLeW6lemDqC0tPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dGb290ZXJLZXkmJmxpc3QubGVuZ3RoIT09MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhaGFzTG9hZEFsbFwiIDpjbGFzcz1cImIoJ21vcmUnKVwiXHJcbiAgICAgICAgICAgICAgICAgdi1sb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIOWKoOi9veabtOWkmlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2UgOmNsYXNzPVwiYignYWxsJylcIj5cclxuICAgICAgICAgICAgICAgIOW3suWKoOi9veWFqOmDqFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0t56m66KeG5Zu+LS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg9PT0wXCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJlbXB0eVNsb3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignbm90aGluZycpXCI+5pqC5peg5pWw5o2uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGNvbnN0IHByb3BzRGVmYXVsdCA9IHtcclxuICAgICAgICBpbWc6ICdpbWcnLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgIHN1YnRpbGU6ICd0aXRsZScsXHJcbiAgICAgICAgdGFnOiAndGFnJyxcclxuICAgICAgICBzdGF0dXM6ICdzdGF0dXMnXHJcbiAgICB9XHJcbiAgICBpbXBvcnQgY3JlYXRlIGZyb20gXCJjb3JlL2NyZWF0ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZSh7XHJcbiAgICAgICAgbmFtZTogJ25vdGljZScsXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgb3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBzaG93Rm9vdGVyS2V5KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uLnNob3dGb290ZXIgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24ucHJvcHMgfHwgcHJvcHNEZWZhdWx0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWdLZXkoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pbWcgfHwgcHJvcHNEZWZhdWx0LmltZ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZUtleSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlIHx8IHByb3BzRGVmYXVsdC50aXRsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJ0aXRsZUtleSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnN1YnRpdGxlIHx8IHByb3BzRGVmYXVsdC5zdWJ0aXRsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YWdLZXkoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50YWcgfHwgcHJvcHNEZWZhdWx0LnRhZ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXNLZXkoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXMgfHwgcHJvcHNEZWZhdWx0LnN0YXR1c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b3RhbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb24udG90YWwgfHwgdGhpcy5vcHRpb24udG90YWwgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24udG90YWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpc3QoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnNsaWNlKDAsIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYXNMb2FkQWxsKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWwgPD0gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBpdGVtQ2xpY2soaXRlbSwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2l0ZW0tY2xpY2snLCBpdGVtLCBpbmRleCwgbGlzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3BhZ2UtY2hhbmdlJywgdGhpcy5wYWdlLCBkb25lKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRUeXBlKHN0YXR1cyA9IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW5mbydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuPC9zY3JpcHQ+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmJjZDhkZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtjbGFzczpbX3ZtLmIoKV19LFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ3dyYXAnKX0sW19jKCdlbC1pbnB1dC1udW1iZXInLHtzdHlsZTooX3ZtLnN0eWxlKSxhdHRyczp7XCJwcmVjaXNpb25cIjpfdm0ucHJlY2lzaW9uLFwic3RlcFwiOl92bS5zdGVwLFwiY29udHJvbHMtcG9zaXRpb25cIjpcInJpZ2h0XCIsXCJzaXplXCI6X3ZtLnNpemUsXCJjb250cm9sc1wiOl92bS5jb250cm9scyxcIm1pblwiOl92bS5taW4sXCJtYXhcIjpfdm0ubWF4fSxvbjp7XCJjaGFuZ2VcIjpfdm0uaGFuZGxlU3RhcnRDaGFuZ2V9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0YXJ0TnVtKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnN0YXJ0TnVtPSQkdn0sZXhwcmVzc2lvbjpcInN0YXJ0TnVtXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse2NsYXNzOl92bS5iKCdzZXBhcmF0b3InKX0sW192bS5fdihcIuiHs1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ2VsLWlucHV0LW51bWJlcicse3N0eWxlOihfdm0uc3R5bGUpLGF0dHJzOntcInByZWNpc2lvblwiOl92bS5wcmVjaXNpb24sXCJzdGVwXCI6X3ZtLnN0ZXAsXCJjb250cm9scy1wb3NpdGlvblwiOlwicmlnaHRcIixcInNpemVcIjpfdm0uc2l6ZSxcImNvbnRyb2xzXCI6X3ZtLmNvbnRyb2xzLFwibWluXCI6X3ZtLm1pbixcIm1heFwiOl92bS5tYXh9LG9uOntcImNoYW5nZVwiOl92bS5oYW5kbGVFbmRDaGFuZ2V9LG1vZGVsOnt2YWx1ZTooX3ZtLmVuZE51bSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5lbmROdW09JCR2fSxleHByZXNzaW9uOlwiZW5kTnVtXCJ9fSldLDEpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgOmNsYXNzPVwiW2IoKV1cIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3dyYXAnKVwiPlxyXG4gICAgICAgICAgICA8ZWwtaW5wdXQtbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgOnByZWNpc2lvbj1cInByZWNpc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0ZXA9XCJzdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy1wb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJzdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnNpemU9XCJzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y29udHJvbHM9XCJjb250cm9sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1pbj1cIm1pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1heD1cIm1heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0TnVtXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiaGFuZGxlU3RhcnRDaGFuZ2VcIj48L2VsLWlucHV0LW51bWJlcj5cclxuICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYignc2VwYXJhdG9yJylcIj7oh7M8L3NwYW4+XHJcbiAgICAgICAgICAgIDxlbC1pbnB1dC1udW1iZXJcclxuICAgICAgICAgICAgICAgICAgICA6cHJlY2lzaW9uPVwicHJlY2lzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6c3RlcD1cInN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLXBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjb250cm9scz1cImNvbnRyb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICA6bWluPVwibWluXCJcclxuICAgICAgICAgICAgICAgICAgICA6bWF4PVwibWF4XCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kTnVtXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiaGFuZGxlRW5kQ2hhbmdlXCI+PC9lbC1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgY3JlYXRlIGZyb20gXCJjb3JlL2NyZWF0ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJudW1yYW5nZVwiLFxyXG4gICAgICAgIG1vZGVsOiB7XHJcbiAgICAgICAgICAgIHByb3A6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3RlcDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdzbWFsbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWluOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXg6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0TnVtOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBlbmROdW06IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgc3R5bGUoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluV2lkdGggPSAnODBweCc7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAnNTAlJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21pbi13aWR0aCc6IG1pbldpZHRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaGFuZGxlU3RhcnRDaGFuZ2UoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLmVuZE51bSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA+IHRoaXMuZW5kTnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TnVtID0gdGhpcy5lbmROdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBKU09OLnN0cmluZ2lmeShbdGhpcy5lbmROdW0sIHRoaXMuZW5kTnVtXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgSlNPTi5zdHJpbmdpZnkoW2N1cnJlbnRWYWx1ZSwgdGhpcy5lbmROdW1dKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBKU09OLnN0cmluZ2lmeShbY3VycmVudFZhbHVlLCB0aGlzLmVuZE51bV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFuZGxlRW5kQ2hhbmdlKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcy5zdGFydE51bSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA8IHRoaXMuc3RhcnROdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kTnVtID0gdGhpcy5zdGFydE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIEpTT04uc3RyaW5naWZ5KFt0aGlzLnN0YXJ0TnVtLCB0aGlzLnN0YXJ0TnVtXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgSlNPTi5zdHJpbmdpZnkoW3RoaXMuc3RhcnROdW0sIGN1cnJlbnRWYWx1ZV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIEpTT04uc3RyaW5naWZ5KFt0aGlzLnN0YXJ0TnVtLCBjdXJyZW50VmFsdWVdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgSlNPTi5zdHJpbmdpZnkoW3RoaXMuc3RhcnROdW0sIHRoaXMuZW5kTnVtXSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gSlNPTi5wYXJzZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROdW0gPSBhcnJbMF0gPyBhcnJbMF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmROdW0gPSBhcnJbMV0gPyBhcnJbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROdW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmROdW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBvbGRWYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBKU09OLnN0cmluZ2lmeShbdGhpcy5zdGFydE51bSwgdGhpcy5lbmROdW1dKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZWU3ZGRlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IENhcm91c2VsIGZyb20gJ2NvbXBvbmVudHMvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgRXB1YiBmcm9tICdjb21wb25lbnRzL2VwdWInO1xyXG5pbXBvcnQgTm90aWNlIGZyb20gJ2NvbXBvbmVudHMvbm90aWNlJztcclxuaW1wb3J0IE51bXJhbmdlIGZyb20gJ2NvbXBvbmVudHMvbnVtcmFuZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgQ2Fyb3VzZWwsXHJcbiAgICBFcHViLFxyXG4gICAgTm90aWNlLFxyXG4gICAgTnVtcmFuZ2VcclxuXTtcclxuIiwiY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LlZFUlNJT04gfHwgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcclxuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAndWkvaW5kZXgnO1xyXG5cclxuY29uc3QgaW5zdGFsbCA9IGZ1bmN0aW9uIChWdWUsIG9wdHMgPSB7fSkge1xyXG4gICAgY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcclxuICAgICAgICBWdWUuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVnVlLnByb3RvdHlwZS4kSERWVUUgPSB7XHJcbiAgICAgICAgdWk6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZWxlbWVudC11aScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VsJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKClcclxuICAgIH07XHJcbn07XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcclxufVxyXG5cclxuY29uc3QgSERWVUUgPSB7XHJcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxyXG4gICAgaW5zdGFsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSERWVUU7XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9