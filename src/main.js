import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';

Swiper2.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
