(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Article_DetailAndComments_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['articleid'],
  data: function data() {
    return {
      form: {},
      allComments: {},
      errors: {}
    };
  },
  methods: {
    addNewComment: function addNewComment() {
      var _this = this;

      var form = this.form,
          articleid = this.articleid;
      axios.post('/comment', {
        form: form,
        articleid: articleid
      }).then(function (res) {
        flash('Comment added Successfully', 'success');
        _this.form = {};

        _this.getComment();
      })["catch"](function (err) {
        return _this.errors = err.response.data.errors;
      });
    },
    getComment: function getComment() {
      var _this2 = this;

      var articleid = this.articleid;
      axios.post("/getcomments/".concat(articleid)).then(function (res) {
        _this2.allComments = res.data;
        console.log(res.data);
      })["catch"](function (err) {
        return _this2.errors = err.response.data.errors;
      });
    },
    getResults: function getResults() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var articleid = this.articleid;
      axios.post("/getcomments/".concat(articleid, "?page=") + page).then(function (response) {
        _this3.allComments = response.data;
      });
    }
  },
  created: function created() {
    this.getComment();
  }
});

/***/ }),

/***/ "./resources/js/components/Article/DetailAndComments.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Article/DetailAndComments.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailAndComments.vue?vue&type=template&id=7bc9ee86& */ "./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86&");
/* harmony import */ var _DetailAndComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailAndComments.vue?vue&type=script&lang=js& */ "./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DetailAndComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Article/DetailAndComments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAndComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailAndComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAndComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAndComments_vue_vue_type_template_id_7bc9ee86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailAndComments.vue?vue&type=template&id=7bc9ee86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/DetailAndComments.vue?vue&type=template&id=7bc9ee86& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card my-4" }, [
      _c("h5", { staticClass: "card-header" }, [_vm._v(" Leave a Comment")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "el-form",
            [
              _c(
                "el-form-item",
                { attrs: { label: "" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", placeholder: "Article Name" },
                    model: {
                      value: _vm.form.body,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "body", $$v)
                      },
                      expression: "form.body"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["form.body"]
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.errors["form.body"][0]) +
                            "\n                        "
                        )
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addNewComment()
                    }
                  }
                },
                [_vm._v("Comment ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.allComments.data && _vm.allComments.data.length > 0
            ? _c(
                "div",
                [
                  _vm._l(_vm.allComments.data, function(comment) {
                    return _c(
                      "div",
                      { key: comment.id, staticClass: "card-header mt-4" },
                      [
                        _c("h5", [_vm._v(_vm._s(comment.user.name))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(" " + _vm._s(comment.body))])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "mb-4 mt-4" },
                    [
                      _c(
                        "pagination",
                        {
                          attrs: {
                            data: _vm.allComments,
                            limit: 1,
                            "show-disabled": true
                          },
                          on: { "pagination-change-page": _vm.getResults }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                            [_vm._v("< Previous")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "next-nav" }, slot: "next-nav" },
                            [_vm._v("Next >")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            : _c("div", [_vm._m(0)])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header mt-4" }, [
      _c("h5", [
        _vm._v(
          "\n                         Write the frist comment in this Article\n                     "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
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


/***/ })

}]);