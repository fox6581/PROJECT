import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [],
    likedProducts: [] // Список понравившихся товаров
  },
  mutations: {
    addToCart(state, product) {
      console.log('Добавление товара:', product.name);
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    toggleLike(state, product) {
      const existingProductIndex = state.likedProducts.findIndex(item => item.id === product.id);
      if (existingProductIndex === -1) {
        state.likedProducts.push(product); // Добавить в понравившиеся
      } else {
        state.likedProducts.splice(existingProductIndex, 1); // Удалить из понравившихся
      }
    },
    
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    increaseQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    clearCart(state) {
      state.cart = [];
    }

  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    increaseQuantity({ commit }, productId) {
      commit('increaseQuantity', productId);
    },
    decreaseQuantity({ commit }, productId) {
      commit('decreaseQuantity', productId);
    },
    checkout({ commit }) {
      commit('clearCart');
    },
    toggleLike({ commit }, product) {
      commit('toggleLike', product);
    }
  },
  getters: {
    cart: (state) => state.cart,
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        const price = item.discount_price ?? item.price;
        return total + (price * item.quantity);
      }, 0);
    },
    likedProducts: (state) => state.likedProducts

  }
});

export default store;
