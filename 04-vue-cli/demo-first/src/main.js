import Vue from 'vue'
import App from './App.vue'
import RightG from './components/Right.vue'
import PropsG from './components/Props'

Vue.config.productionTip = false
Vue.component('Right', RightG)
Vue.component('Props', PropsG)
new Vue({
  render: h => h(App),
}).$mount('#app')
