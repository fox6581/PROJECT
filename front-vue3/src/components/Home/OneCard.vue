<template>
    <div class="one_card" :style="{ backgroundColor: backgroundColor }">
        <div>
            <img :src="imageSrc" :alt="title" />
        </div>
        <div class="one_card__text">
            <h2 :style="{ color: titleColor }">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <ShowButton :buttonTitle="buttonTitle" :titleColor="titleColor" :backgroundColor="backgroundColor"   @click="checkout"/>
    </div>
</template>

<script>
import ShowButton from '../Buttons/ShowButton.vue';

export default {
  components: {
    ShowButton,
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
      default: "#000", // Цвет по умолчанию
    },
    backgroundColor: {
      type: String,
      default: "#ffffff", // Цвет фона по умолчанию
    },
    buttonTitle: {
      type: String,
      default: "Show", // Заголовок для кнопки
    },
  },
  methods: {
    checkout() {
      this.$router.push('/product');  // Переход на страницу /product
    }
  }
};
</script>

  
  <style scoped>
  .one_card {
    flex-basis: 25%;
    padding: 20px;
    background-color: #e0e0e0;
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 50px;
    div img{
        height: 366px;
    }
  }
  
  .one_card__text {
    padding: 10px;
  }
  
  .one_card__text h2 {
    font-family: ABeeZee;
    font-size: 33px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
    color: #000;
    padding-bottom: 5px;
  }
  
  .one_card__text p {
    font-family: ABeeZee;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #909090;
  }
  
  </style>
  