(self.webpackChunk=self.webpackChunk||[]).push([[980],{4980:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const s={props:["articleid"],data:function(){return{form:{},allComments:{},errors:{}}},methods:{addNewComment:function(){var t=this,e=this.form,n=this.articleid;axios.post("/comment",{form:e,articleid:n}).then((function(e){flash("Comment added Successfully","success"),t.form={},t.getComment()})).catch((function(e){return t.errors=e.response.data.errors}))},getComment:function(){var t=this,e=this.articleid;axios.post("/getcomments/".concat(e)).then((function(e){t.allComments=e.data,console.log(e.data)})).catch((function(e){return t.errors=e.response.data.errors}))},getResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.articleid;axios.post("/getcomments/".concat(n,"?page=")+e).then((function(e){t.allComments=e.data}))}},created:function(){this.getComment()}};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"card my-4"},[n("h5",{staticClass:"card-header"},[t._v(" Leave a Comment")]),t._v(" "),n("div",{staticClass:"card-body"},[n("el-form",[n("el-form-item",{attrs:{label:""}},[n("el-input",{attrs:{type:"textarea",placeholder:"Article Name"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),t.errors["form.body"]?n("span",{staticClass:"text-danger"},[t._v("\n                            "+t._s(t.errors["form.body"][0])+"\n                        ")]):t._e()],1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.addNewComment()}}},[t._v("Comment ")])],1),t._v(" "),n("hr"),t._v(" "),t.allComments.data&&t.allComments.data.length>0?n("div",[t._l(t.allComments.data,(function(e){return n("div",{key:e.id,staticClass:"card-header mt-4"},[n("h5",[t._v(t._s(e.user.name))]),t._v(" "),n("p",[t._v(" "+t._s(e.body))])])})),t._v(" "),n("ul",{staticClass:"mb-4 mt-4"},[n("pagination",{attrs:{data:t.allComments,limit:1,"show-disabled":!0},on:{"pagination-change-page":t.getResults}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)],2):n("div",[t._m(0)])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header mt-4"},[n("p",[t._v("\n                         Write the frist comment\n                     ")])])}],!1,null,null,null).exports},1900:(t,e,n)=>{"use strict";function s(t,e,n,s,a,o,r,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=i?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>s})}}]);