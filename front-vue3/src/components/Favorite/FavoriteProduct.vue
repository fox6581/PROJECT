<template>
    <div class="all">
        <div v-for="product in props.products" :key="product.id">
            <hr>
        <div 
          class="header-icons_like" 
          @click="toggleLike(product)" 
          :class="{ liked: isLiked(product) }"
        >
          <img 
            :src="isLiked(product) ? require('@/assets/redLike.png') : require('@/assets/Like.png')" 
            width="32" 
            height="32" 
            alt="Like"
          />
        </div>
  
        <div class="all_block">
          <img :src="`${apiUrl}/${product.images[0]}`" alt="" width="160" height="160">
          <p class="description">{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
  
          <!-- <ShowButton 
            backgroundColor="#000" 
            titleColor="#fff" 
            buttonTitle="Buy Now" 
            @click="addToCart(product)" 
          /> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
//   import ShowButton from '../Buttons/ShowButton.vue';
  import { useStore } from 'vuex';
  
  
  const props = defineProps({
    products: {
      type: Array,
      required: true
    },
    apiUrl: {
      type: String,
      required: true
    }
  });

  const store = useStore();
  
  // Функция для добавления товара в корзину
//   const addToCart = (product) => {
//     store.commit('addToCart', product);
//   };
  
  // Функция для проверки, находится ли товар в списке понравившихся
  const isLiked = (product) => {
    return store.state.likedProducts.some(item => item.id === product.id);
  };
  
  // Функция для добавления или удаления товара из понравившихся
  const toggleLike = (product) => {
    store.commit('toggleLike', product);
  };
  </script>

  <style scoped>
hr{
    border: 0.5px solid #A3A3A3
}
</style>
  