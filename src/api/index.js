import Ajax from './ajax'
import mockAjax from '@/api/mockAjax'
// import axios from 'axios'

// axios({

// })


export const reqCategoryList = () => {
    return Ajax({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

// reqCategoryList()

export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'get'
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'get'
    })
}