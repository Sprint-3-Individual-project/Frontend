<!-- ProductInfoPage.vue -->
<template>
    <div v-if="product">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }} <span v-if="product.discountPercentage > 0">discount: {{product.discountPercentage}}%</span></p>
        <img :src="product.fotourl" class="product-image" />
        <!-- Voeg andere relevante informatie toe die je wilt weergeven -->
    </div>
</template>

<script>
    import ProductService from '../Services/ProductService';

    export default {
        name: 'ProductInfoPage',
        props: {
            productId: Number,
        },
        data() {
            return {
                product: null,
            };
        },
        methods: {
            async getProductById(productId) {
                this.product = await ProductService.ShowProductInfo(productId);
                console.log(this.product);
            },
        },
        watch: {
            productId: {
                immediate: true,
                handler(newProductId) {
                    this.getProductById(newProductId);
                },
            },
        },
        mounted() {
            this.getProductById(this.productId);
        },
    };
</script>

<style scoped>
    .product-image {
        max-width: 100%;
        height: auto;
    }
</style>

