<template>
    <div class="characteristic-filter">
      <h2>Уникальные характеристики</h2>
      <div v-for="(values, characteristic) in characteristics" :key="characteristic">
        <h3>{{ characteristic }}</h3>
        <div v-for="value in values" :key="value">
          <input 
            type="checkbox" 
            :id="`${characteristic}-${value}`" 
            :value="value"
            v-model="selectedCharacteristics[characteristic]"
            @change="handleCharacteristicChange(characteristic, value)" 
          />
          <label :for="`${characteristic}-${value}`">{{ value }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    characteristics: Object,
    selectedCharacteristics: Object
  });
  
  const emit = defineEmits(['update:selectedCharacteristics']);
  
  const handleCharacteristicChange = (characteristic, value) => {
    if (!props.selectedCharacteristics[characteristic]) {
      props.selectedCharacteristics[characteristic] = [value];
    } else {
      const index = props.selectedCharacteristics[characteristic].indexOf(value);
      if (index === -1) {
        props.selectedCharacteristics[characteristic].push(value);
      } else {
        props.selectedCharacteristics[characteristic].splice(index, 1);
      }
    }
    emit('update:selectedCharacteristics', props.selectedCharacteristics);
  };
  </script>
  
  <style scoped>
  .characteristic-filter {
    margin-bottom: 20px;
  }
  
  .characteristic-filter div {
    margin: 5px 0;
  }
  </style>
  