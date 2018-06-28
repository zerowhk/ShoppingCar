<template>
    <div class="productList">
        <div class="title">Products</div>
        <ul>
            <li class="product-item" v-for="item in products" :key="item.id">
                <div>{{ item.title }} - {{ item.price }} - {{ item.inventory }}</div>
                <button @click="addCart(item)" :disabled="!item.inventory">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed: {
            products() {
                return this.$store.state.product.products
            },
        },
        created() {
            //从接口获取数据并进行设置
            this.getProducts();
        },
        methods: {
            getProducts() {
                return this.$store.dispatch('product/getProducts')
            },
            addProduct(item) {
                return this.$store.dispatch('cart/addProduct', item)
            },
            addCart(item) {
                this.addProduct(item)
            }
        }

    }
</script>

<style scoped>

</style>