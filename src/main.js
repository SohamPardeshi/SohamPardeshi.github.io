// Vue libraries
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Third-party libraries
import axios from 'axios';
Vue.prototype.$http = axios

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
Vue.prototype.$tippy = tippy;

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);

import VueMq from 'vue-mq';
Vue.use(VueMq, {
    breakpoints: {
        mobile: 550,
        laptop: 1250,
        desktop: Infinity,
    }
});

// Our libraries
import App from "./App.vue";
import router from "./router";

// Let's avoid that console print while developing
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
