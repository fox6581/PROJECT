<template>
    <div class="all">
        <div class="container" v-for="product in products" :key="product.id">
            <div class="header-icons_like" @click="toggleLike(product)" :class="{ liked: isLiked(product) }">

                <img :src="isLiked(product) ? require('@/assets/redLike.png') : require('@/assets/Like.png')" width="32"
                    height="32" alt="Like">
                <!-- <img src="@/assets/Like.png" width="32" height="32" alt=""> -->
            </div>

            <div class="all_block" @click="navigateToProduct(product.id)">
                <img :src="`${apiUrl}/${product.images[0]}`" alt="" width="160" height="160">
                <p class="description">{{ product.name }}</p>
                <p class="price">{{ product.price }}</p>

                <ShowButton backgroundColor="#000" titleColor="#fff" buttonTitle="Buy Now"
                    @click="addToCart(product)" />

            </div>
        </div>
    </div>

</template>
<script setup>

import { defineProps } from 'vue';
import ShowButton from '../Buttons/ShowButton.vue';
import { useStore } from 'vuex'; // Используем store
import { useRouter } from 'vue-router';

const router = useRouter(); // инициализация роутера


const props = defineProps({
    products: {
        type: Object,
        required: true
    },
    apiUrl: {
        type: String,
        required: true
    }
});

const isLiked = (product) => {
    return store.state.likedProducts.some(item => item.id === product.id);
};

// Переключение товара между понравившимися и обычным состоянием
const toggleLike = (product) => {
    store.commit('toggleLike', product);
};


const store = useStore(); // Инициализация store

let isAddingToCart = false;

const addToCart = (product) => {
    if (isAddingToCart) return; // Блокирует повторные вызовы
    isAddingToCart = true;

    store.commit('addToCart', product);

    // Сбрасываем флаг после небольшой задержки
    setTimeout(() => {
        isAddingToCart = false;
    }, 100);
};
console.log(props)

// Функция для перехода на страницу продукта
const navigateToProduct = (productId) => {
  router.push(`/products/${productId}`);
};
</script>


<style scoped>
.all {
    width: 1120px;
    display: flex;
    gap: 10px;
    margin: 0 auto;
    padding: 20px 0;
}

.container {
    width: 236px;
    min-width: 200px;
    padding: 24px 16px;
    gap: 16px;
    border-radius: 9px;
    background: #F6F6F6;
    display: block;
}

.header-icons_like {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    cursor: pointer;
}

.all_block {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px;
    cursor: pointer;
}

p.description {
    font-family: ABeeZee;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    padding: 10px 0;
}

p.price {
    font-family: Abel;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: center;
    padding-bottom: 10px;
}

.liked {
    filter: grayscale(0) brightness(1.5);
    /* Добавьте стиль для изменения цвета значка */
}


    @media(width<780px) {
  .container {
  
    width: 200px;
      /* min-width: 200px; */
      /* padding: 24px 16px; */
      gap: 16px;
      border-radius: 9px;
      background: #F6F6F6;
      display: block;
    }
  
  .all{
  
    width: auto;
    display: flex;
    gap: 10px;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>
