// 对axios进行二次封装

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/mock',
    timeout: 20000
})

service.interceptors.request.use(
    (config) => {
        //请求拦截器成功的回调
        //我们一般在这要么是给请求头添加信息，要么就是添加额外的功能
        //config 其实就是请求报文
        NProgress.start() //启动进度条
        return config
    },
    // ()=>{
    // }
);

//响应拦截器
service.interceptors.response.use(
    (response) => {
        //拦截的响应成功的回调
        NProgress.done() //停止进度条
        return response.data //代表相映成功以后，直接返给前台用户的就是相应的数据。省的还得写.data
    },
    (error) => {
        //拦截的响应失败的回调
        NProgress.done()
            //发请求失败，统一处理
        alert('发送ajax请求失败' + error.message || '未知错误')

        //错误需不需要后面还能继续处理，关键看这里怎么写
        //如果想继续后面可以处理这个错误
        // return Promise.reject(new Error('发送ajax请求失败'))
        //如果后面不再对这个错误进行处理
        return new Promise(() => {}) //中断promise链
    }
);


export default service