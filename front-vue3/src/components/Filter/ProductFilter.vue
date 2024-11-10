<template>
    <CategoryFilter :selected="selectedCategories" @change="handleCategoryChange" />
    <BrandFilter :brands="brands" :selected="selectedBrands" @change="handleBrandChange" />
    <CharacteristicFilter :characteristics="characteristics" :selected="selectedCharacteristics" @change="handleCharacteristicChange" />
  </template>
  
  <script setup>
  import { ref } from 'vue'; 
  import CategoryFilter from './CategoryFilter.vue';
  import BrandFilter from './BrandFilter.vue';
  import CharacteristicFilter from './CharacteristicFilter.vue';
  
  const selectedCategories = ref([]);
  const selectedBrands = ref([]);
  const selectedCharacteristics = ref({});

  const filteredProducts = computed(() => {
    console.log('начало работы фильтрации');

    if (selectedBrands.value.length === 0 && Object.keys(selectedCharacteristics.value).length === 0 && selectedCategorys.value.length === 0) {
        return products.value; // Возвращаем все товары, если ничего не выбрано
    }

    return products.value.filter(product => {
        const matchesBrand = selectedBrands.value.length === 0 || selectedBrands.value.includes(product.brand);
        const matchesCategory = selectedCategorys.value.length === 0 || selectedCategorys.value.includes(product.category);

        const matchesCharacteristics = Object.keys(selectedCharacteristics.value).every(characteristic => {
            if (!selectedCharacteristics.value[characteristic] || selectedCharacteristics.value[characteristic].length === 0) {
                return true; // Если характеристика не выбрана, пропускаем
            }

            const selectedValues = Array.isArray(selectedCharacteristics.value[characteristic])
                ? selectedCharacteristics.value[characteristic]
                : [selectedCharacteristics.value[characteristic]];

            const productValues = product.characteristics
                ? product.characteristics
                    .filter(item => item.characteristic === characteristic)
                    .map(item => item.value)
                : [];

            return selectedValues.some(value => productValues.includes(value));
        });

        return matchesBrand && matchesCategory && matchesCharacteristics;
    });
});

  </script>
  