import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//使用 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 使用 font-awesome 字体图标库
import 'font-awesome/css/font-awesome.css';	

//使用 axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//使用swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';
// Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
