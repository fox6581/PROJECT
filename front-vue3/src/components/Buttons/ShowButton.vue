<template>
  <button 
    :style="{ backgroundColor: backgroundColor, color: titleColor, borderColor: borderColor }"
    @click.stop="$emit('click')"
  >
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  props: {

    buttonTitle: {
      type: String,
      required: true,
    },

    titleColor: {
      type: String,
      default: "#000" // Цвет по умолчанию
    },

    borderColor: {
      type: String,
      default: "#000" // Цвет по умолчанию
    },
    backgroundColor: {
      type: String,
      default: "#ffffff" // Цвет фона по умолчанию
    },
  },
};
</script>


<style scoped>
button {
  width: 188px;
  height: 56px;
  padding: 16px 56px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid;
  opacity: 1;
  cursor: pointer;
}
</style>