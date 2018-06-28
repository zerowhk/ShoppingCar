import shopApi from '../../api/shop'

const state = {
    products: []
}

const mutations = {
    getProducts(state, payload) {
        state.products = payload.products;
    },
    reduceInventory(state, payload) {
 
        state.products.forEach(item => {
            if( item.id === payload.id) {
                item.inventory--;
            }
        });
    }
}

const actions = {
    getProducts({ commit }) {
        shopApi.getProducts((products) => {
            commit({
                type: 'getProducts',
                products
            })
        })
    },
    reduceInventory({ commit, state, dispatch }, id) {
       // 根据id查找产品，让库存减一
        commit({
            type: 'reduceInventory',
            id 
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}