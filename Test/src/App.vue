<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <ProductOverview :selected-productid="id" @selected-product="updateSelectedProduct" />
    <ProductInfoPage v-if="id !== null" :productId="id" />
</template>

<script>
    import ProductOverview from './components/ProductOverview.vue'
    import ProductInfoPage from './components/ProductInfoPage.vue'

    export default {
        name: 'App',
        prop: {
            id: Number,
        },
        components: {
            ProductOverview,
            ProductInfoPage,
        },
        methods: {
            updateSelectedProduct(productId) {
                this.id = productId;
            },
        },
        data() {
            return {
                id: null,
            };
        },
    }
</script>




<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>


