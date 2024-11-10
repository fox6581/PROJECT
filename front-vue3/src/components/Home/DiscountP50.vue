<template>
  <div>
    <h2>Discounts up to -20%</h2>

    <ProductCart :products="discountedProducts" :apiUrl="apiUrl" />


  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ProductCart from '../Products/ProductCart.vue';
import { API_BASE_URL } from '@/config';

// Храним товары и базовый URL для API
const products = ref([]);
const apiUrl = API_BASE_URL;

// Храним продукты со скидкой 50% и более
const discountedProducts = computed(() => {
  return products.value.filter(product => {
    if (product.discount_price && product.price) {
      const discount = (product.price - product.discount_price) / product.price * 100;
      return discount >= 20;  // Скидка 50% или более
    }
    return false;  // Нет скидки или цена не указана
  });
});

const fetchProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/products`);
    if (!response.ok) throw new Error('Ошибка при получении данных');
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
div {
  padding: 60px 0;

  h2 {

    font-family: ABeeZee;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 32px;
    text-align: center;

  }
}


</style>