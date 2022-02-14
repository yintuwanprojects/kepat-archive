import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueGtag, {
  config: { id: "G-E1NCFPX3LJ" }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
