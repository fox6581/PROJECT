<template>
  <h2>Favorite</h2>

  <FavoriteProduct :products="likedProducts" :apiUrl="API_BASE_URL" class="center" />
</template>

<script setup>
import { computed } from 'vue';
import FavoriteProduct from '@/components/Favorite/FavoriteProduct.vue';
import { useStore } from 'vuex';
import { API_BASE_URL } from '@/config';

// Инициализация Vuex store
const store = useStore();

// Используем геттер из Vuex для получения списка понравившихся товаров
const likedProducts = computed(() => store.getters.likedProducts);

// API_BASE_URL уже импортирован, нет необходимости в data
</script>
<style>
.center{
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>