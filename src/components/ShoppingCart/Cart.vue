<template>
    <div>
        <div class="title">Your Cart</div>
        <div v-show="!items.length">请添加一些东西到购物车</div>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.title }} - {{ item.price }} - {{ item.inventory }}
            </li>
        </ul>
        <div class="total">Total: {{ total | currency('$', '2')}}</div>
        <button @click="checkout">清空购物车</button>
        <div class="checkout" v-show="checkedStatus">{{ checkedStatus }}</div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {

            }
        },
        computed: {
            // items() {
            //     return this.$store.state.cart.items
            // },
            // checkedStatus() {
            //     return this.$store.state.cart.checkedStatus
            // },
            // total() {
            //     return this.$store.getters['cart/total']
            // },
            ...mapState('cart',{
                items: state => state.items,
                checkedStatus: 'checkedStatus'
            }),
            ...mapGetters('cart', {
                total: 'total'
            })
        },
        methods: {
            // checkout() {
            //     return this.$store.dispatch('cart/checkout');
            // }
            ...mapActions('cart', {
                checkout: 'checkout'
            })
        }
    }
</script>

<style scoped>

</style>