import Vue from 'vue'
import App from '@/App'

import router from '@/router'
// import '@/api'
import store from '@/store'

import '@/mock/mockServer'
import TypeNav from '@/components/TypeNav'
// Vue.component('TypeNav', TypeNav)
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router

}).$mount('#app')