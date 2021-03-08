import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入echarts
// import echarts from 'echarts'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios'

import store from './components/store'
import {fabric} from 'fabric'
import { Chrome} from 'vue-color'

Vue.use(fabric)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  components: {
    'chrome-picker':Chrome
  }
  
}).$mount('#app')
