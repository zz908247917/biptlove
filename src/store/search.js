import { reqGoodsListInof } from "@/api"

//search模块的小store
const state = {
    goodsListInfo: {}
}
const mutations = {
    RECEIVE_GOODSLISTINFO(state, goodsListInfo) {
        state.goodsListInfo = goodsListInfo
    }
}
const actions = {
    async getGoodsListInfo({ commit }, searchParams) {
        const result = await reqGoodsListInof(searchParams)
        if (result.code === 200) {
            commit('RECEIVE_GOODSLISTINFO', result.data)
        }
    }
}

//简化数据
const getters = {
    attrsList(state) {
        return state.goodsListInfo.attrsList || []
    },
    goodsList(state) {
        return state.goodsListInfo.goodsList || []
    },
    trademarkList(state) {
        return state.goodsListInfo.trademarkList || []
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}