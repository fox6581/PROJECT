<!-- Header.vue -->
<template>
  <header class="header">
    <!-- Логотип слева -->
    <div class="header-logo">
      <router-link to="/">
        <img src="@/assets/Logo.png" alt="Logo" />
      </router-link>
    </div>

    <!-- Поле поиска в центре -->
    <!-- <div class="header-search">
      <img src="@/assets/Search.png" alt="Search Icon" class="search-icon" />
      <input type="text" placeholder="     Search..." />
    </div> -->
    <HeaderSearch placeholder="Search" :icon="searchIcon" @updateResults="handleSearchResults" class="search" />
    <!-- Иконки лайка и корзины справа -->
    <div class="header-icons">
      <div class="header-icons_like">
        <router-link to="/favorite"> <img src="@/assets/Like.png" alt=""></router-link>


      </div>
      <div class="header-icons_cart">
        <router-link to="/shopingcart">
          <img src="@/assets/Cart.png" alt="Корзина" />
        </router-link>
      </div>




    </div>
    <div class="header-icons-mobile">
      <div class="header-icons_like">
        <router-link to="/"> <img src="@/assets/Burger.png" alt=""></router-link>
      </div>

    </div>

  </header>
</template>

<script setup>
import HeaderSearch from '../Search/HeaderSearch.vue';
const searchIcon = require('@/assets/Search.png');

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

.header-icons-mobile {
  display: none;
}

.header-logo img {
  width: 65px;
  height: 23px;
  /* Настройте размер логотипа */
}





.header-icons {
  display: flex;
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

@media(width <=760px) {
  .header {
    width: auto;
    padding: 10px;
  }

  .header-icons {
    display: none;
  }

  .search {
    display: none;
  }

  .header-icons-mobile {
    display: flex;
  }
}
</style>