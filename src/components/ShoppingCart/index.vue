<template>
    <div>
        <div class="title">Shopping Cart Example</div>
        <hr>
        <product-list />
        <hr>
        <cart />
    </div>
</template>

<script>
    import ProductList from './ProductList.vue'
    import Cart from './Cart.vue'
    export default {
        components: {
            ProductList,
            Cart
        }
    }
</script>

<style>
    .title {
        font-size: 36px;
        font-weight: 700;  
    }
    button {
        background: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 15px 0;
    }
</style>