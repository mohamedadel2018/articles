/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('pagination',() => import('laravel-vue-pagination'));


window.events = new Vue();
window.flash = function(message) {
    window.events.$emit('flash',message);
}

import moment from 'moment';
Vue.filter('timeFormat',  (arg) => {
   return moment(arg).format("Do MMM YYYY");
  });

Vue.filter('limit_str',  (arg) => {
return arg.substring(0, 150) + '...';
});

Vue.filter('limit_str_admin',  (arg) => {
    return arg.substring(0, 50) + '...';
    });

/**
 * import Element ui
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('flashCom',() => import('./components/Flash.vue'));
Vue.component('articles' ,() => import('./components/Admin/Articles.vue'));
Vue.component('catigory' ,() => import('./components/Admin/catigory.vue'));
Vue.component('ArticleHome' ,() => import('./components/Article/home.vue'));
Vue.component('ArticleHome' ,() => import('./components/Article/home.vue'));
Vue.component('detailAndComments' ,() => import('./components/Article/DetailAndComments.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
