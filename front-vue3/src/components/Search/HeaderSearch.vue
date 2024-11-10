<template>
  <div class="header-search">
    <img :src="icon" alt="Search Icon" class="search-icon" />
    <input type="text" :placeholder="placeholder" v-model="query" />

    <!-- Выпадающий список результатов поиска -->
    <div v-if="results.length" class="search-results">
      <div v-for="product in results" :key="product.id" class="search-result-item" @click="selectProduct(product)">
        <!-- <img :src="`http://localhost:1452/${product.images[0]}`" alt="Product Image" class="result-image" /> -->
        <!-- <img :src="`${API_BASE_URL}/${product.images[0]}`" alt="Product Image" class="result-image" /> -->
        <img v-if="product.images && product.images.length > 0" :src="`${product.imageUrl}`"
          alt="Product Image" class="result-image" />

        <div class="result-info">
          <h3>{{ product.name }}</h3>
          <p>Цена: {{ product.discount_price || product.price }} руб</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config';


console.log('API_BASE_URL:', API_BASE_URL); // Добавьте это для отладки
export default {
  name: 'HeaderSearch',

  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
    icon: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      query: '',
      results: [],
    };
  },

  watch: {
    query: 'searchProducts',
  },

  methods: {
    async searchProducts() {
      if (this.query.length < 2) {
        this.results = [];
        return;
      }

      try {
        console.log(`Fetching from: ${API_BASE_URL}/api/products?name=${this.query}`);
        const response = await fetch(`${API_BASE_URL}/api/products?name=${this.query}`);

        if (!response.ok) {
          throw new Error('Ошибка при запросе данных');
        }

        const data = await response.json();
        this.results = data;

        // Проверка URL для первого изображения каждого продукта
        this.results.forEach(product => {
          if (product.images && product.images.length > 0) {
            const imageUrl = `${API_BASE_URL}/${product.images[0]}`;
            console.log('Final Image URL:', `${imageUrl}/${product.images[0]}`);
            product.imageUrl = imageUrl;
          } else {
            console.log('Нет изображений для продукта:', product);
          }
        });
      } catch (error) {
        console.error("Ошибка поиска:", error);
      }
    },

    selectProduct(product) {
      this.$emit('selectProduct', product);
      this.query = '';
      this.results = [];
    },
  },
};
</script>

<style scoped>
.header-search {
  position: relative;
}

.header-search input {
  padding-left: 40px;
  width: 372px;
  height: 56px;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  background: #f5f5f5;
  font-family: ABeeZee, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  text-indent: 35px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
}



.search-results {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-height: 200px;
  /* Максимальная высота для выпадающего списка */
  overflow-y: auto;
  /* Позволяет прокручивать, если содержимое превышает высоту */
  z-index: 1000;
}

.search-result-item {
  display: flex;
  padding: 10px;
  cursor: pointer;
}

.search-result-item:hover {
  background-color: #f0f0f0;
}

.result-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.result-info {
  display: flex;
  flex-direction: column;
}
</style>