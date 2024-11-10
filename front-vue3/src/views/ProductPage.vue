<template>
    <div class="myall">
      <h1>Product Page</h1>
      <LeftMenu/>
      <!-- Ваши компоненты для страницы "О нас" -->
    </div>
  </template>

  <script setup> 

import LeftMenu from '../components/Menu/LeftMenu.vue';

</script>

<style scoped>
.myall{
  width: 1120px;
  margin: 0 auto;
}
@media(width<980px){
  .myall{
  width: auto;    
  }

}
</style>