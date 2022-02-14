import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueAnalytics, {
  id: '303432459',
  autoTracking: {
    screenview: true
  },
  trackEvent: true
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
