import Vue from 'vue'
import App from '@/App'

import router from '@/router'
// import '@/api'
import store from '@/store'
import "swiper/css/swiper.css";

import '@/mock/mockServer'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop';
// Vue.component('TypeNav', TypeNav)
Vue.component(TypeNav.name, TypeNav)
Vue.component('SliderLoop', SliderLoop)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router

}).$mount('#app')