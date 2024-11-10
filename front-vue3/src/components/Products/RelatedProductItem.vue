<!-- RelatedProductItem.vue -->
<template>
    <div class="related-product-item" @click="navigateToProduct">
        <img :src="`${apiUrl}/${product.image}`" alt="Related product image" />
        <p>{{ product.name }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    product: Object,
    apiUrl: String
});

const router = useRouter();

const navigateToProduct = () => {
    console.log("Navigating to product:", props.product.id);
    // Переход на страницу с продуктом по id
    router.push(`/products/${props.product.id}`);
};
</script>

<style scoped>
.related-product-item {
    cursor: pointer;
    text-align: center;
}

.related-product-item img {
    border-radius: 5px;
}

.related-product-item p {
    font-size: 1.2em;
}
</style>
