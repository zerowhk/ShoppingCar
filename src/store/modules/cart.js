import shopApi from '../../api/shop'

const state = {
    items: [],
    //状态提示
    checkedStatus: null
}

const mutations = {
    addProduct(state, product) {
        let { items } = state;
        let isExist = false;
        items.forEach(item => {
            //说明已经存在该产品，让它的数量加1
            if(item.id === product.id) {
                isExist = true;
                item.inventory++;
            }
            return;
        });
        //不存在，新建  
        isExist || items.push(product);
    },
    setCheckedStatus(state, payload) {
        state.checkedStatus = payload.checkedStatus;
    },
    setItems(state, payload) {
        state.items = payload.items;
    }
}

const actions = {   
    addProduct({ commit, dispatch }, product) {

        commit('addProduct', {...product, inventory: 1});
        //分模块之后，模块之间互相调用，必须设置 root: true
        //通知库存减一
        dispatch('product/reduceInventory', product.id, { root: true });
        //更新checkedStatus的状态为空
        commit({
            type: 'setCheckedStatus',
            checkedStatus: null
        })
    },
    checkout({ commit, state }) {

        shopApi.buyProducts(state.items, () => {
            //更新checkedStatus的状态
            commit('setCheckedStatus', { checkedStatus: '清空购物车成功' });
            //清空购物车
            commit({
                type: 'setItems', 
                items: []
            })
        
        }, () => {
            //更新checkedStatus的状态
            commit('setCheckedStatus', { checkedStatus: '清空购物车失败' });
        })
    }
}
const getters = {
    total(state) {
        let sum = 0;
        state.items.forEach((item) => {
            sum += item.price * item.inventory;
        });
        return sum;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}