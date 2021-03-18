//安装
//npm i vue-router -S

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'



Vue.use(VueRouter)



const originpush = VueRouter.prototype.push //备份
const originReplace = VueRouter.prototype.replace //备份

VueRouter.prototype.push = function(location, resolved, rejected) {
    if (resolved === undefined && rejected === undefined) { //push没有成功和失败的回调
        return originpush.call(this, location).catch(() => {})
    } else {
        return originpush.call(this, location, resolved, rejected)
    }
}
VueRouter.prototype.replace = function(location, resolved, rejected) {
    if (resolved === undefined && rejected === undefined) { //push没有成功和失败的回调
        return originReplace.call(this, location).catch(() => {})
    } else {
        return originReplace.call(this, location, resolved, rejected)
    }
}



// 暴露路由
const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            // props: true
        },
        {
            path: '/login',
            component: Login,
            meta: {
                //路由的原配置项
                isHide: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                //路由的原配置项
                isHide: true
            }
        },
        {
            //重定向路由
            path: '/',
            redirect: '/home'
        }
    ]
})
export default router