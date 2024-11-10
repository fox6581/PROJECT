<template>
    <div class="category-filter">
      <h3>Фильтр по категориям</h3>
      <div v-for="category in categories" :key="category" class="category-checkbox">
        <input 
          type="checkbox" 
          :id="category" 
          :value="category" 
          v-model="selectedCategories"
          @change="handleCategoryChange(category)" 
        />
        <label :for="category">{{ category }}</label>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    categories: Array,
    selectedCategories: Array
  });
  
  const emit = defineEmits(['update:selectedCategories']);
  
  const handleCategoryChange = (category) => {
    if (!props.selectedCategories.includes(category)) {
      props.selectedCategories.push(category);
    } else {
      const index = props.selectedCategories.indexOf(category);
      props.selectedCategories.splice(index, 1);
    }
    emit('update:selectedCategories', props.selectedCategories);
  };
  </script>
  
  <style scoped>
  .category-filter {
    margin-bottom: 20px;
  }
  
  .category-checkbox {
    margin: 5px 0;
  }
  </style>
  