// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ProductDefault from '@/views/ProductDefaultPage.vue';
import ShopingCart from '@/views/ShopingCartPage.vue';
import FavoritePage from '@/views/FavoritePage.vue';
import TestNew from '@/views/TestNew.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: ProductPage },
  { path: '/products/:id', component: ProductDefault },
  { path: '/shopingcart', component: ShopingCart },
  {path: '/favorite', component:FavoritePage},
  {path: '/test', component:TestNew}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
