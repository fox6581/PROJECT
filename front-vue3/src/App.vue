<template>
  <HeaderTop  />
<HeaderMobile v-show="isMobile" /> 
  <hr>
  <router-view />
  <FooterInfo/>
</template>

<script>

import HeaderTop from './components/Header/HeaderTop.vue'
import FooterInfo from './components/Footer/FooterInfo.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderMobile from './components/Header/HeaderMobile.vue';

const isMobile = ref(true);


// Функция для проверки ширины экрана
const checkMobileScreen = () => {
  isMobile.value = window.innerWidth <= 768; // Например, 768px — это порог для мобильных устройств
};
// Запуск проверки при монтировании компонента
onMounted(() => {
  checkMobileScreen(); // Проверяем размер экрана сразу при монтировании компонента
  window.addEventListener('resize', checkMobileScreen); // Подписываемся на изменение размера экрана
});

// Очистка обработчика при размонтировании компонента
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobileScreen);
});
export default {
  name: 'App',
  components: {
    HeaderTop,
    FooterInfo,
    HeaderMobile
  }
}


</script>

<style>

/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* общие стили */

@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Abel&display=swap');

body{
  max-width: 1440px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
hr{
  border-bottom: 1px solid #B5B5B5
}
</style>
