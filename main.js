import Vue from 'vue'
import App from './App'
import store from './store' // store
import plugins from './plugins' // plugins
import './permission' // permission
Vue.use(plugins)

Vue.config.productionTip = false
Vue.prototype.$store = store
const EventBus = new Vue();
Vue.prototype.$EventBus = EventBus;
App.mpType = 'app'
// window.wx = {}

import DictData from '@/components/DictData'
DictData.install()

const app = new Vue({
	...App
})

app.$mount()