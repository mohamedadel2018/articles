(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Article_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  data: function data() {
    return {
      ArticleData: {},
      category: {},
      PopularArticles: {}
    };
  },
  methods: {
    getArticle: function getArticle() {
      var _this = this;

      axios.get('Article').then(function (res) {
        _this.ArticleData = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getcatigory: function getcatigory() {
      var _this2 = this;

      axios.get('/category').then(function (res) {
        _this2.category = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    ArticleBycatigory: function ArticleBycatigory(id) {
      var _this3 = this;

      axios.post("ArticleBycatigory/".concat(id)).then(function (res) {
        _this3.ArticleData = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getPopularArticle: function getPopularArticle() {
      var _this4 = this;

      axios.get('PopularArticle').then(function (res) {
        _this4.PopularArticles = res.data;
        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getResults: function getResults() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("Article?page=" + page).then(function (response) {
        _this5.ArticleData = response.data;
      });
    }
  },
  created: function created() {
    this.getArticle();
    this.getcatigory();
    this.getPopularArticle();
  }
});

/***/ }),

/***/ "./resources/js/components/Article/home.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Article/home.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=59c0aa43& */ "./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/Article/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Article/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Article/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Article/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_59c0aa43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=59c0aa43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Article/home.vue?vue&type=template&id=59c0aa43& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "header" }, [
          _c("h2", [_vm._v("Articles " + _vm._s(this.ArticleData.name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.ArticleData.data && _vm.ArticleData.data.length > 0
            ? _c(
                "div",
                { staticClass: "leftcolumn" },
                [
                  _vm._l(_vm.ArticleData.data, function(Article) {
                    return _c("div", { key: Article.id, staticClass: "card" }, [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "details/" + Article.id,
                            title: Article.title
                          }
                        },
                        [
                          _c("h3", [_vm._v(_vm._s(Article.title))]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Date : " +
                                _vm._s(_vm._f("timeFormat")(Article.created_at))
                            )
                          ]),
                          _vm._v(" "),
                          _c("img", {
                            attrs: {
                              height: "100%",
                              width: "100%",
                              src: "/images/Article/" + Article.image,
                              alt: Article.title
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(_vm._s(_vm._f("limit_str")(Article.body)))
                          ])
                        ]
                      )
                    ])
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
                            data: _vm.ArticleData,
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
            : _c("div", { staticClass: "card leftcolumn" }, [
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v(" Sorry, Don't have any Article")
                ])
              ]),
          _vm._v(" "),
          _c("div", { staticClass: "rightcolumn" }, [
            _c("div", { staticClass: "card" }, [
              _c("h2", [_vm._v("All categories")]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list-style vertical-list list-limited" },
                _vm._l(_vm.category.data, function(category) {
                  return _c(
                    "li",
                    { key: category.id, staticClass: "list-item" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "cate-link",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ArticleBycatigory(category.id)
                            }
                          }
                        },
                        [_vm._v(_vm._s(category.name))]
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card" },
              [
                _c("h3", [_vm._v("Popular articles")]),
                _vm._v(" "),
                _vm._l(_vm.PopularArticles, function(PopularArticle) {
                  return _c("div", { key: PopularArticle.id }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "/details/" + PopularArticle.id,
                          title: PopularArticle.title
                        }
                      },
                      [
                        _c("h5", [_vm._v(_vm._s(PopularArticle.title))]),
                        _vm._v(" "),
                        _c("div", { staticClass: "Also-img" }, [
                          _c("img", {
                            attrs: {
                              width: "90%",
                              src: "/images/Article/" + PopularArticle.image
                            }
                          })
                        ]),
                        _c("br")
                      ]
                    )
                  ])
                })
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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