
<!-- Header.vue -->
<template>
    <header class="header">
      <!-- Логотип слева -->
      <div class="header-logo">
        <router-link to="/">
        <img src="@/assets/Logo.png" alt="Logo" />
      </router-link>
      </div>
  
  
      <!-- Иконки лайка и корзины справа -->
      <div class="header-icons">
        <div class="header-icons_like">
          <router-link to="/">   <img src="@/assets/Burger.png" alt=""></router-link>
        </div>
      
      </div>
  
  
    </header>
  </template>
  
  <script setup>
 
  
  // Если у вас нет изображений или иконок, замените их на нужные элементы
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #fff;
    width: 1120px;
    margin: 0 auto;
  
  
  }
  
  .header-logo img {
    width: 65px;
    height: 23px;
    /* Настройте размер логотипа */
  }
  
  
  
  
  
  .header-icons {
    display: flex !important;
    align-items: center;
    column-gap: 24px;
  
    .header-icons_like,
    .header-icons_cart {
      display: flex;
      align-items: center;
      width: 32px;
      height: 32px;
    }
  
  }
  
  .icon-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .icon-button:hover {
    color: #ddd;
  }
  </style>