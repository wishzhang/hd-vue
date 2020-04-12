/*!
 *  hd-vue.js v1.0.5
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./packages/element-ui/notice/index.vue?vue&type=template&id=b77c7638&
var noticevue_type_template_id_b77c7638_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._l((_vm.list),function(item,index){return _c('div',{key:index,class:_vm.b('item'),on:{"click":function($event){return _vm.itemClick(item,index,_vm.list)}}},[(item[_vm.imgKey])?_c('div',{class:_vm.b('img')},[_c('img',{attrs:{"src":item[_vm.imgKey],"alt":""}})]):_vm._e(),_vm._v(" "),_c('div',{class:_vm.b('content')},[_c('div',{class:_vm.b('title')},[_c('span',{class:_vm.b('name')},[_vm._v(_vm._s(item[_vm.titleKey]))]),_vm._v(" "),(item[_vm.tagKey])?_c('span',{class:_vm.b('tag')},[_c('el-tag',{attrs:{"size":"small","type":_vm.getType(item[_vm.statusKey])}},[_vm._v(_vm._s(item[_vm.tagKey]))])],1):_vm._e()]),_vm._v(" "),_c('div',{class:_vm.b('subtitle')},[_vm._v(_vm._s(item[_vm.subtitleKey]))])])])}),_vm._v(" "),_c('div',[(_vm.list.length===0)?_c('div',{class:_vm.b('nothing')},[_vm._v("\n            暂无数据\n        ")]):(!_vm.hasLoadAll)?_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],class:_vm.b('more'),on:{"click":_vm.handleClick}},[_vm._v("\n            加载更多\n        ")]):_c('div',{class:_vm.b('all')},[_vm._v("\n            已加载全部\n        ")])])],2)}
var noticevue_type_template_id_b77c7638_staticRenderFns = []


// CONCATENATED MODULE: ./packages/element-ui/notice/index.vue?vue&type=template&id=b77c7638&

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
  noticevue_type_template_id_b77c7638_render,
  noticevue_type_template_id_b77c7638_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice = (notice_component.exports);
// CONCATENATED MODULE: ./src/ui/element-ui/index.js



/* harmony default export */ var element_ui = __webpack_exports__["a"] = ([carousel, epub, notice]);

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

module.exports = JSON.parse("{\"name\":\"hd-vue\",\"version\":\"1.0.6\",\"description\":\"A Component Library for Vue.js.\",\"main\":\"lib/hd-vue.min.js\",\"unpkg\":\"lib/hd-vue.min.js\",\"jsdelivr\":\"lib/hd-vue.min.js\",\"scripts\":{\"dev\":\"cross-env TARGET=dev UINAME=element-ui webpack\",\"build\":\"cross-env TARGET=prod UINAME=element-ui webpack\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:wishzhang/hd-vue.git\"},\"keywords\":[\"vue\",\"element-ui\",\"hd-vue\"],\"author\":\"wishzhang\",\"license\":\"MIT\",\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"babel-loader\":\"^8.1.0\",\"cross-env\":\"^7.0.2\",\"css-loader\":\"^3.4.2\",\"extract-text-webpack-plugin\":\"^4.0.0-beta.0\",\"node-sass\":\"^4.13.1\",\"progress-bar-webpack-plugin\":\"^2.1.0\",\"sass-loader\":\"^8.0.2\",\"style-loader\":\"^1.1.3\",\"vue-loader\":\"^15.9.1\",\"vue-template-compiler\":\"^2.6.11\",\"webpack\":\"^4.42.1\",\"webpack-bundle-analyzer\":\"^3.6.1\",\"webpack-cli\":\"^3.3.11\",\"webpack-merge\":\"^4.2.2\"},\"dependencies\":{\"element-ui\":\"^2.13.0\",\"vue\":\"^2.6.11\"},\"files\":[\"example\",\"lib\",\"src\",\"packages\",\"styles\",\"LICENSE\",\"README.md\"]}");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRFZVRS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSERWVUUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT8xZmFjIiwid2VicGFjazovL0hEVlVFLy4vc3JjL3V0aWxzL2JlbS5qcyIsIndlYnBhY2s6Ly9IRFZVRS8uL3NyYy9nbG9iYWwvdmFyaWFibGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9zcmMvY29yZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSERWVUUvcGFja2FnZXMvZWxlbWVudC11aS9jYXJvdXNlbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZT9iZjUxIiwid2VicGFjazovL0hEVlVFLy4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9wYWNrYWdlcy9lbGVtZW50LXVpL2Nhcm91c2VsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvZXB1Yi9pbmRleC52dWU/YWI5NiIsIndlYnBhY2s6Ly9IRFZVRS9wYWNrYWdlcy9lbGVtZW50LXVpL2VwdWIvaW5kZXgudnVlIiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9lcHViL2luZGV4LnZ1ZT9mOTM2Iiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9lcHViL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZT82MGYxIiwid2VicGFjazovL0hEVlVFL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9IRFZVRS8uL3BhY2thZ2VzL2VsZW1lbnQtdWkvbm90aWNlL2luZGV4LnZ1ZT9mNDI1Iiwid2VicGFjazovL0hEVlVFLy4vcGFja2FnZXMvZWxlbWVudC11aS9ub3RpY2UvaW5kZXgudnVlIiwid2VicGFjazovL0hEVlVFLy4vc3JjL3VpL2VsZW1lbnQtdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSERWVUUvLi9ub2RlX21vZHVsZXMvX3Byb2Nlc3NAMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsiRUxFTUVOVCIsIk1PRFMiLCJqb2luIiwibmFtZSIsImVsIiwic3ltYm9sIiwicHJlZml4IiwibW9kcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJyZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm1ldGhvZHMiLCJiIiwiJG9wdGlvbnMiLCJLRVlfQ09NUE9ORU5UX05BTUUiLCJzZmMiLCJtaXhpbnMiLCJwdXNoIiwiYmVtIiwiQ2Fyb3VzZWwiLCJFcHViIiwiTm90aWNlIiwidmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJWRVJTSU9OIiwicmVxdWlyZSIsImluc3RhbGwiLCJWdWUiLCJvcHRzIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInByb3RvdHlwZSIsIiRIRFZVRSIsInVpIiwid2luZG93IiwiRWxlbWVudCIsInR5cGUiLCJIRFZVRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoiaGQtdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJIRFZVRVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIRFZVRVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIRFZVRVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2NsYXNzOltfdm0uYigpLHsnYXZ1ZS1jYXJvdXNlbC0tZnVsbHNjcmVlbic6IF92bS5vcHRpb24uZnVsbHNjcmVlbn1dfSxbX2MoJ2VsLWNhcm91c2VsJyx7YXR0cnM6e1widHlwZVwiOl92bS5vcHRpb24udHlwZSxcImhlaWdodFwiOl92bS5vcHRpb24uaGVpZ2h0KydweCcsXCJhdXRvcGxheVwiOl92bS5vcHRpb24uYXV0b3BsYXksXCJpbnRlcnZhbFwiOl92bS5vcHRpb24uaW50ZXJ2YWwsXCJpbmRpY2F0b3ItcG9zaXRpb25cIjpcIm91dHNpZGVcIn19LF92bS5fbCgoX3ZtLmRhdGEpLGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3JldHVybiBfYygnZWwtY2Fyb3VzZWwtaXRlbScse2tleTppbmRleH0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignaXRlbScpfSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6aXRlbS5ocmVmP2l0ZW0uaHJlZjonamF2YXNjcmlwdDp2b2lkKDApOycsXCJ0YXJnZXRcIjppdGVtLnRhcmdldH19LFtfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2ltZycpLHN0eWxlOih7YmFja2dyb3VuZEltYWdlOid1cmwoJytpdGVtLnNyYysnKSd9KX0pLF92bS5fdihcIiBcIiksKGl0ZW0udGl0bGUpP19jKCdkaXYnLHtjbGFzczpfdm0uYigndGl0bGUnKX0sW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXSk6X3ZtLl9lKCldKV0pXSl9KSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qKlxyXG4gKiBiZW0gaGVscGVyXHJcbiAqIGIoKSAvLyAnYnV0dG9uJ1xyXG4gKiBiKCd0ZXh0JykgLy8gJ2J1dHRvbl9fdGV4dCdcclxuICogYih7IGRpc2FibGVkIH0pIC8vICdidXR0b24gYnV0dG9uLS1kaXNhYmxlZCdcclxuICogYigndGV4dCcsIHsgZGlzYWJsZWQgfSkgLy8gJ2J1dHRvbl9fdGV4dCBidXR0b25fX3RleHQtLWRpc2FibGVkJ1xyXG4gKiBiKFsnZGlzYWJsZWQnLCAncHJpbWFyeSddKSAvLyAnYnV0dG9uIGJ1dHRvbi0tZGlzYWJsZWQgYnV0dG9uLS1wcmltYXJ5J1xyXG4gKi9cclxuXHJcbmNvbnN0IEVMRU1FTlQgPSAnX18nO1xyXG5jb25zdCBNT0RTID0gJy0tJztcclxuXHJcbmNvbnN0IGpvaW4gPSAobmFtZSwgZWwsIHN5bWJvbCkgPT4gZWwgPyBuYW1lICsgc3ltYm9sICsgZWwgOiBuYW1lO1xyXG5cclxuY29uc3QgcHJlZml4ID0gKG5hbWUsIG1vZHMpID0+IHtcclxuICAgIGlmICh0eXBlb2YgbW9kcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gam9pbihuYW1lLCBtb2RzLCBNT0RTKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RzKSkge1xyXG4gICAgICAgIHJldHVybiBtb2RzLm1hcChpdGVtID0+IHByZWZpeChuYW1lLCBpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhtb2RzIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgcmV0W25hbWUgKyBNT0RTICsga2V5XSA9IG1vZHNba2V5XTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBiIChlbCwgbW9kcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuJG9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwgJiYgdHlwZW9mIGVsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgbW9kcyA9IGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbCA9IGpvaW4obmFtZSwgZWwsIEVMRU1FTlQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vZHMgPyBbZWwsIHByZWZpeChlbCwgbW9kcyldIDogZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgS0VZX0NPTVBPTkVOVF9OQU1FID0gJ2F2dWUtJzsiLCJpbXBvcnQgYmVtIGZyb20gJ3V0aWxzL2JlbSc7XHJcbmltcG9ydCB7IEtFWV9DT01QT05FTlRfTkFNRSB9IGZyb20gJ2dsb2JhbC92YXJpYWJsZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZmMpIHtcclxuICAgIHNmYy5uYW1lID0gS0VZX0NPTVBPTkVOVF9OQU1FICsgc2ZjLm5hbWU7XHJcbiAgICBzZmMubWl4aW5zID0gc2ZjLm1peGlucyB8fCBbXTtcclxuICAgIHNmYy5taXhpbnMucHVzaChiZW0pO1xyXG4gICAgcmV0dXJuIHNmYztcclxufVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IDpjbGFzcz1cIltiKCkseydhdnVlLWNhcm91c2VsLS1mdWxsc2NyZWVuJzogb3B0aW9uLmZ1bGxzY3JlZW59XVwiPlxyXG4gICAgICAgIDxlbC1jYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgOnR5cGU9XCJvcHRpb24udHlwZVwiXHJcbiAgICAgICAgICAgICAgICA6aGVpZ2h0PVwib3B0aW9uLmhlaWdodCsncHgnXCJcclxuICAgICAgICAgICAgICAgIDphdXRvcGxheT1cIm9wdGlvbi5hdXRvcGxheVwiXHJcbiAgICAgICAgICAgICAgICA6aW50ZXJ2YWw9XCJvcHRpb24uaW50ZXJ2YWxcIlxyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yLXBvc2l0aW9uPVwib3V0c2lkZVwiPlxyXG4gICAgICAgICAgICA8ZWwtY2Fyb3VzZWwtaXRlbSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBkYXRhXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2l0ZW0nKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaXRlbS5ocmVmP2l0ZW0uaHJlZjonamF2YXNjcmlwdDp2b2lkKDApOydcIiA6dGFyZ2V0PVwiaXRlbS50YXJnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJiKCdpbWcnKVwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kSW1hZ2U6J3VybCgnK2l0ZW0uc3JjKycpJ31cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJiKCd0aXRsZScpXCIgdi1pZj1cIml0ZW0udGl0bGVcIj57eyBpdGVtLnRpdGxlIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZWwtY2Fyb3VzZWwtaXRlbT5cclxuICAgICAgICA8L2VsLWNhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGNyZWF0ZSBmcm9tIFwiY29yZS9jcmVhdGVcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiY2Fyb3VzZWxcIixcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBvcHRpb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbi5kYXRhIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7fSxcclxuICAgICAgICBtZXRob2RzOiB7fVxyXG4gICAgfSk7XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4MjIzMTA2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5kaWFsb2dWaXNpYmxlKT9fYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoKSxhdHRyczp7XCJpZFwiOlwiYXZ1ZS1lcHViXCJ9LG9uOntcImNvbnRleHRtZW51XCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQucHJldmVudERlZmF1bHQoKTt9LFwibW91c2V3aGVlbFwiOl92bS5tb3VzZVdoZWVsLFwiY2xpY2tcIjpfdm0uZGlhbG9nQ2xpY2t9fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rJyl9LFtfYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOihfdm0uY2FuU2hvdyksZXhwcmVzc2lvbjpcImNhblNob3dcIn1dLGNsYXNzOl92bS5iKCdib29rX19oZWFkZXInKX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19faGVhZGVyX190aXRsZScpLGF0dHJzOntcInRpdGxlXCI6X3ZtLmJvb2tOYW1lfSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcyhfdm0uYm9va05hbWUpfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19oZWFkZXJfX3NlY3Rpb24nKSxhdHRyczp7XCJ0aXRsZVwiOl92bS5jdXJyZW50U2VjdGlvbk5hbWV9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF92bS5jdXJyZW50U2VjdGlvbk5hbWUpfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19oZWFkZXJfX3BhZ2UnKSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcyhfdm0ucHJvZ3Jlc3NTdHIpfX0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2NvbnRlbnQnKSxhdHRyczp7XCJpZFwiOlwiZXB1Yl9fYm9va19fdmlld2VyX19ib3hcIn19LFtfYygnZGl2Jyx7YXR0cnM6e1wiaWRcIjpcImVwdWJfX2Jvb2tfX3ZpZXdlclwifX0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLmNhdGFsb2d1ZVZpc2libGUpP19jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KF92bS5jYW5TaG93KSxleHByZXNzaW9uOlwiY2FuU2hvd1wifV0sY2xhc3M6X3ZtLmIoJ2Jvb2tfX2NhdGFsb2d1ZScpLG9uOntcIm1vdXNld2hlZWxcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTt9fX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19sYXllcicpfSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94Jyksb246e1wibW91c2Vkb3duXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNDYXRhbG9ndWVDbGljaz10cnVlfSxcIm1vdXNldXBcIjpmdW5jdGlvbigkZXZlbnQpe192bS5pc0NhdGFsb2d1ZUNsaWNrPXRydWV9fX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2hlYWRlcicpLGF0dHJzOntcInRpdGxlXCI6X3ZtLmJvb2tOYW1lfX0sW192bS5fdihfdm0uX3MoX3ZtLmJvb2tOYW1lKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdlbC1zY3JvbGxiYXInLHtzdGF0aWNTdHlsZTp7XCJoZWlnaHRcIjpcImNhbGMoMTAwJSAtIDEyMXB4KVwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwicmdiKDIzMCwgMjMwLCAyMzApXCJ9LGF0dHJzOntcIndyYXAtc3R5bGVcIjonb3ZlcmZsb3cteDpoaWRkZW47J30sbmF0aXZlT246e1wiIW1vdXNlZG93blwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZX0sXCIhbW91c2V1cFwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZX19fSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19jYXRhbG9ndWVfX2JveF9fY29udGVudCcpfSxfdm0uX2woKF92bS5jYXRhbG9ndWUpLGZ1bmN0aW9uKHNlY3Rpb24saSl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6aSxjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb24nKX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb25fX3RpdGxlJyksb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmNhdGFsb2d1ZUNsaWNrKHNlY3Rpb24uaHJlZil9fX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJuYW1lXCJ9LFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubGFiZWwpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInBhZ2VcIn0sW192bS5fdihfdm0uX3Moc2VjdGlvbi5wYWdlKSldKV0pLF92bS5fdihcIiBcIiksX3ZtLl9sKChzZWN0aW9uLnN1Yml0ZW1zKSxmdW5jdGlvbihjaGFwdGVyLGope3JldHVybiBfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94X19jb250ZW50X19zZWN0aW9uX19jaGFwdGVyJyksb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmNhdGFsb2d1ZUNsaWNrKHNlY3Rpb24uaHJlZil9fX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJuYW1lXCJ9LFtfdm0uX3YoX3ZtLl9zKGNoYXB0ZXIubGFiZWwpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInBhZ2VcIn0sW192bS5fdihfdm0uX3MoY2hhcHRlci5wYWdlKSldKV0pfSldLDIpfSksMCldKV0sMSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KF92bS5jYW5TaG93KSxleHByZXNzaW9uOlwiY2FuU2hvd1wifV0sY2xhc3M6X3ZtLmIoJ2Jvb2tfX2JveDEnKX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fYm94MV9fYnV0dG9uJyksc3RhdGljU3R5bGU6e1wiYmFja2dyb3VuZC1jb2xvclwiOlwiIzI1N0FBN1wifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5jYXRhbG9ndWVWaXNpYmxlPSFfdm0uY2F0YWxvZ3VlVmlzaWJsZX19fSxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImVsLWljb24tbm90ZWJvb2stMVwifSksX2MoJ2VtJyxbX3ZtLl92KFwi55uu5b2VXCIpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLmNhblNob3cpLGV4cHJlc3Npb246XCJjYW5TaG93XCJ9XSxjbGFzczpfdm0uYignYm9va19fYm94MicpfSxbX2MoJ2Rpdicse2NsYXNzOl92bS5iKCdib29rX19ib3gyX19wcmV2JyksYXR0cnM6e1widGl0bGVcIjpcIuS4iuS4gOmhtVwifSxvbjp7XCJjbGlja1wiOl92bS5wcmV2Q2xpY2t9fSxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImVsLWljb24tYXJyb3ctbGVmdFwifSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtjbGFzczpfdm0uYignYm9va19fYm94Ml9fbmV4dCcpLGF0dHJzOntcInRpdGxlXCI6XCLkuIvkuIDpobVcIn0sb246e1wiY2xpY2tcIjpfdm0ubmV4dENsaWNrfX0sW19jKCdpJyx7c3RhdGljQ2xhc3M6XCJlbC1pY29uLWFycm93LXJpZ2h0XCJ9KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOihfdm0uY2FuU2hvdyksZXhwcmVzc2lvbjpcImNhblNob3dcIn1dLGNsYXNzOl92bS5iKCdib29rX19ib3gzJyl9KV0pLF92bS5fdihcIiBcIiksX2MoJ2knLHtjbGFzczpbJ2VsLWljb24tY2xvc2UnLF92bS5iKCdjbG9zZScpXSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uY2xvc2UoJGV2ZW50KX19fSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOihfdm0uY2FuU2hvdyksZXhwcmVzc2lvbjpcImNhblNob3dcIn1dLGNsYXNzOl92bS5iKCdzY3JvbGxiYXInKSxhdHRyczp7XCJpZFwiOlwiYm9vay1zY3JvbGxiYXJcIn19LFtfYygnZWwtc2xpZGVyJyx7YXR0cnM6e1wiZm9ybWF0LXRvb2x0aXBcIjpfdm0uZm9ybWF0VG9vbHRpcCxcInNob3ctdG9vbHRpcFwiOnRydWUsXCJ2ZXJ0aWNhbFwiOlwiXCIsXCJtaW5cIjpfdm0ubWluLFwibWF4XCI6X3ZtLm1heCxcImhlaWdodFwiOl92bS5zY3JvbGxIZWlnaHR9LG9uOntcImNoYW5nZVwiOl92bS5zbGlkZXJDaGFuZ2V9LG1vZGVsOnt2YWx1ZTooX3ZtLnNsaWRlclZhbHVlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNsaWRlclZhbHVlPSQkdn0sZXhwcmVzc2lvbjpcInNsaWRlclZhbHVlXCJ9fSldLDEpXSk6X3ZtLl9lKCl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICAgICAgQGNvbnRleHRtZW51LnByZXZlbnQ9XCJcIlxyXG4gICAgICAgICAgICBAbW91c2V3aGVlbD1cIm1vdXNlV2hlZWxcIlxyXG4gICAgICAgICAgICBpZD1cImF2dWUtZXB1YlwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cImRpYWxvZ0NsaWNrXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwiYigpXCJcclxuICAgICAgICAgICAgdi1pZj1cImRpYWxvZ1Zpc2libGVcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2snKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImNhblNob3dcIiA6Y2xhc3M9XCJiKCdib29rX19oZWFkZXInKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJiKCdib29rX19oZWFkZXJfX3RpdGxlJylcIiA6dGl0bGU9XCJib29rTmFtZVwiIHYtdGV4dD1cImJvb2tOYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2tfX2hlYWRlcl9fc2VjdGlvbicpXCIgOnRpdGxlPVwiY3VycmVudFNlY3Rpb25OYW1lXCIgdi10ZXh0PVwiY3VycmVudFNlY3Rpb25OYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2tfX2hlYWRlcl9fcGFnZScpXCIgdi10ZXh0PVwicHJvZ3Jlc3NTdHJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS3kuabmnKzlhoXlrrktLT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImVwdWJfX2Jvb2tfX3ZpZXdlcl9fYm94XCIgOmNsYXNzPVwiYignYm9va19fY29udGVudCcpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXB1Yl9fYm9va19fdmlld2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0t55uu5b2VLS0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJjYW5TaG93XCJcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2V3aGVlbC5zdG9wPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY2F0YWxvZ3VlVmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlJylcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19sYXllcicpXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IEBtb3VzZWRvd249XCJpc0NhdGFsb2d1ZUNsaWNrPXRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAbW91c2V1cD1cImlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94JylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94X19oZWFkZXInKVwiIDp0aXRsZT1cImJvb2tOYW1lXCI+e3tib29rTmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsLXNjcm9sbGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1vdXNlZG93bi5uYXRpdmUuY2FwdHVyZT1cImlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbW91c2V1cC5uYXRpdmUuY2FwdHVyZT1cImlzQ2F0YWxvZ3VlQ2xpY2s9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d3JhcC1zdHlsZT1cIidvdmVyZmxvdy14OmhpZGRlbjsnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OmNhbGMoMTAwJSAtIDEyMXB4KTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHNlY3Rpb24saSkgaW4gY2F0YWxvZ3VlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb24nKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrLnN0b3A9XCJjYXRhbG9ndWVDbGljayhzZWN0aW9uLmhyZWYpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImIoJ2Jvb2tfX2NhdGFsb2d1ZV9fYm94X19jb250ZW50X19zZWN0aW9uX190aXRsZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7c2VjdGlvbi5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2VcIj57e3NlY3Rpb24ucGFnZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY2F0YWxvZ3VlQ2xpY2soc2VjdGlvbi5ocmVmKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihjaGFwdGVyLGopIGluIHNlY3Rpb24uc3ViaXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYignYm9va19fY2F0YWxvZ3VlX19ib3hfX2NvbnRlbnRfX3NlY3Rpb25fX2NoYXB0ZXInKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e2NoYXB0ZXIubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlXCI+e3tjaGFwdGVyLnBhZ2V9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2VsLXNjcm9sbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLeWumuS9jS0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImNhblNob3dcIiA6Y2xhc3M9XCJiKCdib29rX19ib3gxJylcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrLnN0b3A9XCJjYXRhbG9ndWVWaXNpYmxlPSFjYXRhbG9ndWVWaXNpYmxlXCIgOmNsYXNzPVwiYignYm9va19fYm94MV9fYnV0dG9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMyNTdBQTc7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLW5vdGVib29rLTFcIj48L2k+PGVtPuebruW9lTwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbYignYm9va19fYm94MV9fYnV0dG9uJyksYignYm9va19fYm94MV9fYnV0dG9uJiM0NTsmIzQ1OzkwJyldXCItLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NTk5MkM7XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tZG9jdW1lbnRcIj48L2k+PGVtPuivpuaDhemhtTwvZW0+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2Jvb2tfX2JveDFfX2J1dHRvbicpXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjREY4MDJDO1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLWRvd25sb2FkXCI+PC9pPjxlbT7kuIvovb08L2VtPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS3nv7vpobUtLT5cclxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJjYW5TaG93XCIgOmNsYXNzPVwiYignYm9va19fYm94MicpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cInByZXZDbGlja1wiIHRpdGxlPVwi5LiK5LiA6aG1XCIgOmNsYXNzPVwiYignYm9va19fYm94Ml9fcHJldicpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLWFycm93LWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwibmV4dENsaWNrXCIgdGl0bGU9XCLkuIvkuIDpobVcIiA6Y2xhc3M9XCJiKCdib29rX19ib3gyX19uZXh0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiY2FuU2hvd1wiIDpjbGFzcz1cImIoJ2Jvb2tfX2JveDMnKVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpIDpjbGFzcz1cIlsnZWwtaWNvbi1jbG9zZScsYignY2xvc2UnKV1cIiBAY2xpY2suc3RvcD1cImNsb3NlXCI+PC9pPlxyXG5cclxuICAgICAgICA8IS0t5Lmm57GN55qE5rua5Yqo5p2hLS0+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJjYW5TaG93XCIgaWQ9XCJib29rLXNjcm9sbGJhclwiIDpjbGFzcz1cImIoJ3Njcm9sbGJhcicpXCI+XHJcbiAgICAgICAgICAgIDxlbC1zbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICA6Zm9ybWF0LXRvb2x0aXA9XCJmb3JtYXRUb29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICA6c2hvdy10b29sdGlwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInNsaWRlckNoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNsaWRlclZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIDptaW49XCJtaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIDptYXg9XCJtYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJzY3JvbGxIZWlnaHRcIj5cclxuICAgICAgICAgICAgPC9lbC1zbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvLyBUT0RPOjEg57K+56Gu5YiG6aG1XHJcbiAgICAvLyBUT0RPOkJVRzoxIOmhtemdouW+gOWJjeacieaXtuWAmemhtemdouaYvuekuuS4jeWvue+8jOWPr+iDveaYr2VwdWIuanPnmoTmu5rliqjnm5HlkKzlpITnkIbmnInpl67pophcclxuICAgIGltcG9ydCBjcmVhdGUgZnJvbSBcImNvcmUvY3JlYXRlXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY3JlYXRlKHtcclxuICAgICAgICBuYW1lOiBcImVwdWJcIixcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBib29rVXJsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIOa7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIC8vIOa7muWKqOaMiemSruW9k+WJjeWAvFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyVmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyDkuablkI1cclxuICAgICAgICAgICAgICAgIGJvb2tOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIC8vIOWunuS+i1xyXG4gICAgICAgICAgICAgICAgYm9vazoge30sXHJcbiAgICAgICAgICAgICAgICByZW5kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S66K+l6aG16Z2i56qX5Y+jXHJcbiAgICAgICAgICAgICAgICBkaWFsb2dWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S65Lmm57GN55uu5b2VXHJcbiAgICAgICAgICAgICAgICBjYXRhbG9ndWVWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIOS5puexjeebruW9leaVsOaNrlxyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ3VlOiBbXSxcclxuICAgICAgICAgICAgICAgIC8vIOaYr+WcqOebruW9leS4iueahOeCueWHu1xyXG4gICAgICAgICAgICAgICAgaXNDYXRhbG9ndWVDbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyDov5nkuKTkuKrnlKjkuo7pobXnoIFwYWdlTnVtYmVy55qE6K6h566X77yMXHJcbiAgICAgICAgICAgICAgICAvLyDlj6/pgJrov4dsb2NhdGlvbnNbcGFnZUluZGV4XeWPlumhteaVsOWvueixoWxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBwYWdlSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TG9jYXRpb25JbmRleDogMCxcclxuICAgICAgICAgICAgICAgIC8vIOWtmOaUvuWIhumhteS/oeaBr1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgIC8vIGZpeGVkXHJcbiAgICAgICAgICAgICAgICBmaXhJc0J5QnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZpeExvY2F0aW9uSW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnq6DoioLlkI3np7BcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uTmFtZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgY2FuU2hvdygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5sb2FkaW5nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4SXNCeUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpeExvY2F0aW9uSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b3RhbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvb2sgJiYgdGhpcy5ib29rICYmIHRoaXMuYm9vay5sb2NhdGlvbnMgJiYgdGhpcy5ib29rLmxvY2F0aW9ucy50b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvb2subG9jYXRpb25zLnRvdGFsIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9ncmVzc1N0cigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnBhZ2VOdW1iZXJ9IC8gJHt0aGlzLnRvdGFsfWA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1pbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXgoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAvLyDmu5rliqjmnaHnmoTmta7liqjmj5DnpLpcclxuICAgICAgICAgICAgZm9ybWF0VG9vbHRpcCh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5tYXggLSB2YWwpICsgMTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6Lez6L2s5Yiw5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHByZXZDbGljaygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZGV4ID0gdGhpcy5maXhMb2NhdGlvbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhJc0J5QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZml4TG9jYXRpb25JbmRleCA9IHRoaXMucGFnZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGl0aW9uLmRpc3BsYXkodGhpcy5sb2NhdGlvbnNbdGhpcy5wYWdlSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6Lez6L2s5Yiw5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG5leHRDbGljaygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZGV4ID0gdGhpcy5maXhMb2NhdGlvbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhJc0J5QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VJbmRleCA8IHRoaXMudG90YWwgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeExvY2F0aW9uSW5kZXggPSB0aGlzLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRpdGlvbi5kaXNwbGF5KHRoaXMubG9jYXRpb25zW3RoaXMucGFnZUluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBmaXhlZCDnm67lvZXlpJblnLDmlrnngrnlh7vlj6/lhbPpl61cclxuICAgICAgICAgICAgZGlhbG9nQ2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2d1ZVZpc2libGUgPSB0aGlzLmlzQ2F0YWxvZ3VlQ2xpY2sgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2F0YWxvZ3VlQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0YWxvZ3VlQ2xpY2soaHJlZikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kaXRpb24uZGlzcGxheShocmVmKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ3VlVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhdGFsb2d1ZUNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOaLluWKqOa7muWKqOadoeWQjuS5puexjei3s+i9rOWIsOWvueW6lOmhtVxyXG4gICAgICAgICAgICBzbGlkZXJDaGFuZ2UobnVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbkluZGV4ID0gdGhpcy5tYXggLSBudW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRpdGlvbi5kaXNwbGF5KHRoaXMubG9jYXRpb25zW3RoaXMuY3VycmVudExvY2F0aW9uSW5kZXhdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g55uR5ZCs5YWo5bGA55qE6byg5qCH5rua5Yqo77yM5L2/5Lmm5pys5YaF5a655rua5YqoXHJcbiAgICAgICAgICAgIG1vdXNlV2hlZWwoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXB1Yi1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbHMgJiYgZWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGVsc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxUb3AgKyBlLmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIC8vIOebkeWQrOa7muWKqOmhteegge+8jOS9v+WvueW6lOeahOa7muWKqOaMiemSruWIsOebuOW6lOeahOS9jee9rlxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyVmFsdWUgPSB0aGlzLm1heCAtIHZhbCArIDE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXgodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5lUHViKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsYWNrIG9mIGpzemlwLmpzIGFuZCBlcHViLmpzICEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliqDovb3mmL7npLpcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuJGxvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgbG9jazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfmraPlnKjliqDovb3kuK0nLFxyXG4gICAgICAgICAgICAgICAgc3Bpbm5lcjogJ2VsLWljb24tbG9hZGluZycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ0NDU0YSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib29rID0gd2luZG93LmVQdWIodGhpcy5ib29rVXJsKSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VwdWJfX2Jvb2tfX3ZpZXdlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZWwuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRpdGlvbiA9IGJvb2sucmVuZGVyVG8oXCJlcHViX19ib29rX192aWV3ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlcjogXCJjb250aW51b3VzXCIsXHJcbiAgICAgICAgICAgICAgICBzcHJlYWQ6ICcwJyxcclxuICAgICAgICAgICAgICAgIGZsb3c6IFwic2Nyb2xsZWRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgc3RvcmU6ICd0cnVlJ1xyXG4gICAgICAgICAgICB9KSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRpdGlvbi5kaXNwbGF5KHRoaXMucGFnZUluZGV4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9ruWPs+i+uea7muWKqOadoeeahOmrmOW6pu+8jC0yNeaYr+S4uuS6huiuqea7muWKqOaMiemSruS4jei2heWHuumhtemdouaYvuekuuiMg+WbtFxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhlaWdodCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1zY3JvbGxiYXInKS5zY3JvbGxIZWlnaHQgLSAyNSkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgLy8g5Lmm5pys5Yid5aeL5YyW5a6M5oiQXHJcbiAgICAgICAgICAgIGJvb2sucmVhZHlcclxuICAgICAgICAgICAgICAgIC50aGVuKChbbWFuaWZlc3QsIHNwaW5lLCBtZXRhZGF0YSwgY292ZXIsIG5hdmlnYXRpb24sIHJlc291cmNlcywgZGlzcGxheU9wdGlvbnNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u55uu5b2VXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9ndWUgPSBuYXZpZ2F0aW9uLnRvYztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5Lmm5ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTmFtZSA9IG1ldGFkYXRhLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDpooTliIbpobXvvIzmoLnmja7lrZfnrKbkuKrmlbDmiorkuabnsY3liIbpobVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcHViX19ib29rX192aWV3ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoTnVtYmVyLnBhcnNlSW50KGVsLmNsaWVudFdpZHRoLCAxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiBOdW1iZXIucGFyc2VJbnQoZWwuY2xpZW50SGVpZ2h0KSAvICg0MDAgKiAyKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rLmxvY2F0aW9ucy5nZW5lcmF0ZShudW0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChsb2NhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5L+d5a2Y5YiG6aG15L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOebkeWQrOS5puacrOWGheWuueS9jee9ruaUueWPmFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVuZGl0aW9uLm9uKFwicmVsb2NhdGVkXCIsIChsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpeElzQnlCdXR0b24gJiYgbG9jYXRpb24uc3RhcnQubG9jYXRpb24gPD0gdGhpcy50b3RhbCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeExvY2F0aW9uSW5kZXggPSBsb2NhdGlvbi5zdGFydC5sb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXhJc0J5QnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiuvue9ruS4u+mimOagt+W8j1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVuZGl0aW9uLnRoZW1lcy5kZWZhdWx0KHtcclxuICAgICAgICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzIyMjIyMiAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1oZWlnaHQnOiAnMS42ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnYTpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnIzMzODBmZiAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQnOiAnI2Y1ZjVmNScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCA0MHB4ICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaDI6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogJzMycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcDoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAnMTlweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiAnTWljcm9zb2Z0IFlhaGVpICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvcic6ICcjMjIyMjIyICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWhlaWdodCc6ICcxLjYgIWltcG9ydGFudCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDnm5HlkKzlvZPliY3kvY3nva7vvIzorr7nva7lvZPliY3nq6DoioLmoIfpophcclxuICAgICAgICAgICAgcmVuZGl0aW9uLm9uKFwicmVuZGVyZWRcIiwgKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZTZWN0aW9uID0gc2VjdGlvbi5wcmV2KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGJvb2submF2aWdhdGlvbi50b2MuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhyZWYuaW5jbHVkZXMoc2VjdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50ICYmIHByZXZTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGJvb2submF2aWdhdGlvbi50b2MuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ocmVmLmluY2x1ZGVzKHByZXZTZWN0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWN0aW9uTmFtZSA9IGN1cnJlbnQubGFiZWwudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9vayA9IGJvb2s7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGl0aW9uID0gcmVuZGl0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzdHJveWVkKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib29rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2suZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuPC9zY3JpcHQ+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4xLjBAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS4xQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTRlNzRmZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtjbGFzczpfdm0uYigpfSxbX3ZtLl9sKChfdm0ubGlzdCksZnVuY3Rpb24oaXRlbSxpbmRleCl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6aW5kZXgsY2xhc3M6X3ZtLmIoJ2l0ZW0nKSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5pdGVtQ2xpY2soaXRlbSxpbmRleCxfdm0ubGlzdCl9fX0sWyhpdGVtW192bS5pbWdLZXldKT9fYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2ltZycpfSxbX2MoJ2ltZycse2F0dHJzOntcInNyY1wiOml0ZW1bX3ZtLmltZ0tleV0sXCJhbHRcIjpcIlwifX0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2NvbnRlbnQnKX0sW19jKCdkaXYnLHtjbGFzczpfdm0uYigndGl0bGUnKX0sW19jKCdzcGFuJyx7Y2xhc3M6X3ZtLmIoJ25hbWUnKX0sW192bS5fdihfdm0uX3MoaXRlbVtfdm0udGl0bGVLZXldKSldKSxfdm0uX3YoXCIgXCIpLChpdGVtW192bS50YWdLZXldKT9fYygnc3Bhbicse2NsYXNzOl92bS5iKCd0YWcnKX0sW19jKCdlbC10YWcnLHthdHRyczp7XCJzaXplXCI6XCJzbWFsbFwiLFwidHlwZVwiOl92bS5nZXRUeXBlKGl0ZW1bX3ZtLnN0YXR1c0tleV0pfX0sW192bS5fdihfdm0uX3MoaXRlbVtfdm0udGFnS2V5XSkpXSldLDEpOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ3N1YnRpdGxlJyl9LFtfdm0uX3YoX3ZtLl9zKGl0ZW1bX3ZtLnN1YnRpdGxlS2V5XSkpXSldKV0pfSksX3ZtLl92KFwiIFwiKSxfYygnZGl2JyxbKF92bS5saXN0Lmxlbmd0aD09PTApP19jKCdkaXYnLHtjbGFzczpfdm0uYignbm90aGluZycpfSxbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5pqC5peg5pWw5o2uXFxuICAgICAgICBcIildKTooIV92bS5oYXNMb2FkQWxsKT9fYygnZGl2Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJsb2FkaW5nXCIscmF3TmFtZTpcInYtbG9hZGluZ1wiLHZhbHVlOihfdm0ubG9hZGluZyksZXhwcmVzc2lvbjpcImxvYWRpbmdcIn1dLGNsYXNzOl92bS5iKCdtb3JlJyksb246e1wiY2xpY2tcIjpfdm0uaGFuZGxlQ2xpY2t9fSxbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Yqg6L295pu05aSaXFxuICAgICAgICBcIildKTpfYygnZGl2Jyx7Y2xhc3M6X3ZtLmIoJ2FsbCcpfSxbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5bey5Yqg6L295YWo6YOoXFxuICAgICAgICBcIildKV0pXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJiKClcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2l0ZW0nKVwiXHJcbiAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgQGNsaWNrPVwiaXRlbUNsaWNrKGl0ZW0saW5kZXgsbGlzdClcIlxyXG4gICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ2ltZycpXCJcclxuICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbVtpbWdLZXldXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtW2ltZ0tleV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYignY29udGVudCcpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3RpdGxlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJiKCduYW1lJylcIj57e2l0ZW1bdGl0bGVLZXldfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYigndGFnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtW3RhZ0tleV1cIj5cclxuICAgICAgICAgICAgPGVsLXRhZyBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp0eXBlPVwiZ2V0VHlwZShpdGVtW3N0YXR1c0tleV0pXCI+e3tpdGVtW3RhZ0tleV19fTwvZWwtdGFnPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImIoJ3N1YnRpdGxlJylcIj57e2l0ZW1bc3VidGl0bGVLZXldfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLeW6lemDqC0tPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxpc3QubGVuZ3RoPT09MFwiIDpjbGFzcz1cImIoJ25vdGhpbmcnKVwiPlxyXG4gICAgICAgICAgICAgICAg5pqC5peg5pWw5o2uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cIiFoYXNMb2FkQWxsXCIgOmNsYXNzPVwiYignbW9yZScpXCJcclxuICAgICAgICAgICAgICAgICB2LWxvYWRpbmc9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiPlxyXG4gICAgICAgICAgICAgICAg5Yqg6L295pu05aSaXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSA6Y2xhc3M9XCJiKCdhbGwnKVwiPlxyXG4gICAgICAgICAgICAgICAg5bey5Yqg6L295YWo6YOoXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgcHJvcHNEZWZhdWx0ID0ge1xyXG4gICAgICAgIGltZzogJ2ltZycsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgc3VidGlsZTogJ3RpdGxlJyxcclxuICAgICAgICB0YWc6ICd0YWcnLFxyXG4gICAgICAgIHN0YXR1czogJ3N0YXR1cydcclxuICAgIH1cclxuICAgIGltcG9ydCBjcmVhdGUgZnJvbSBcImNvcmUvY3JlYXRlXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY3JlYXRlKHtcclxuICAgICAgICBuYW1lOiAnbm90aWNlJyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBvcHRpb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHByb3BzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uLnByb3BzIHx8IHByb3BzRGVmYXVsdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nS2V5KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaW1nIHx8IHByb3BzRGVmYXVsdC5pbWdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGVLZXkoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZSB8fCBwcm9wc0RlZmF1bHQudGl0bGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VidGl0bGVLZXkoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdWJ0aXRsZSB8fCBwcm9wc0RlZmF1bHQuc3VidGl0bGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFnS2V5KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGFnIHx8IHByb3BzRGVmYXVsdC50YWdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzS2V5KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhdHVzIHx8IHByb3BzRGVmYXVsdC5zdGF0dXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG90YWwoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9uLnRvdGFsIHx8IHRoaXMub3B0aW9uLnRvdGFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uLnRvdGFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXN0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zbGljZSgwLCB0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFzTG9hZEFsbCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsIDw9IHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaXRlbUNsaWNrKGl0ZW0sIGluZGV4LCBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtLWNsaWNrJywgaXRlbSwgaW5kZXgsIGxpc3QpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwYWdlLWNoYW5nZScsIHRoaXMucGFnZSwgZG9uZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0VHlwZShzdGF0dXMgPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2luZm8nXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDguMS4wQGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDguMS4wQGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc3Yzc2MzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjFAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnY29tcG9uZW50cy9jYXJvdXNlbCc7XHJcbmltcG9ydCBFcHViIGZyb20gJ2NvbXBvbmVudHMvZXB1Yic7XHJcbmltcG9ydCBOb3RpY2UgZnJvbSAnY29tcG9uZW50cy9ub3RpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgQ2Fyb3VzZWwsXHJcbiAgICBFcHViLFxyXG4gICAgTm90aWNlXHJcbl07XHJcbiIsImNvbnN0IHZlcnNpb24gPSBwcm9jZXNzLmVudi5WRVJTSU9OIHx8IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XHJcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJ3VpL2luZGV4JztcclxuXHJcbmNvbnN0IGluc3RhbGwgPSBmdW5jdGlvbiAoVnVlLCBvcHRzID0ge30pIHtcclxuICAgIGNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgVnVlLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFZ1ZS5wcm90b3R5cGUuJEhEVlVFID0ge1xyXG4gICAgICAgIHVpOiAoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2VsZW1lbnQtdWknLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbCdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpXHJcbiAgICB9O1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICAgIGluc3RhbGwod2luZG93LlZ1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IEhEVlVFID0ge1xyXG4gICAgdmVyc2lvbjogdmVyc2lvbixcclxuICAgIGluc3RhbGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhEVlVFO1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==