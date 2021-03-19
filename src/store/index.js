import vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import user from './user'
import search from './search'

vue.use(Vuex)

//存储数据的地方
const state = {}
    //直接改变数据的地方
const mutations = {}
    //和vue组件用户交互、通知mutation修改数据
    //action对象当中的方法，就是vue和vuex交互的桥梁  后期是在vue当中 dispatch
const actions = {}
    //getters是为了简化数据的操作而出现的，请求回来的数据，有点复杂，我们可以通过这个额简化
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        user,
        search
    }
})