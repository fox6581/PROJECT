<template>
    <div>
      <label v-for="brand in brands" :key="brand">
        <input type="checkbox" :value="brand" v-model="localSelectedBrands" @change="updateSelectedBrands">
        {{ brand }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedBrands: Array
    },
    data() {
      return {
        localSelectedBrands: [...this.selectedBrands] // локальная копия для изменения
      };
    },
    methods: {
      updateSelectedBrands() {
        this.$emit('update:selectedBrands', this.localSelectedBrands); // эмиттируем обновление родителю
      }
    }
  };
  </script>
  