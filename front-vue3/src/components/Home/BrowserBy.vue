<template>
    <div class="container-wrapper">
        <!-- Заголовок категории -->
        <div class="strelki">
            <h2>Browse By Category</h2>
            <div style="display: flex;">
                <!-- Стрелка влево -->
               
                <!-- Стрелка вправо -->
                <img class="arrow-button right" :src="require('@/assets/Arrow.png')" alt="right arrow" width="32"
                    height="32" @click="scrollRight" /> 
                    <img class="arrow-button left" :src="require('@/assets/Arrow.png')" alt="left arrow" width="32"
                    height="32" @click="scrollLeft" />
            </div>
        </div>

        <!-- Контейнер с блоками -->
        <div class="container">
            <div v-for="(block, index) in blocks" :key="index" class="block" @click="handleClick(block.link)">
                <img :src="require(`@/assets/${block.image}`)" :alt="block.name" width="48" height="48" />
                <p>{{ block.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Массив с блоками
const blocks = ref([
    { name: 'Phones', image: 'Phones.png', link: '/phones' },
    { name: 'Smart Watches', image: 'Smart Watches.png', link: '/phones' },
    { name: 'Cameras', image: 'Phones.png', link: '/phones' },
    { name: 'Headphones', image: 'Headphones.png', link: '/phones' },
    { name: 'Computers', image: 'Computers.png', link: '/phones' },
    { name: 'Gaming', image: 'Gaming.png', link: '/phones' },
]);


// Функция для прокрутки влево
const scrollLeft = () => {
    const firstBlock = blocks.value.shift(); // Убираем первый элемент массива
    blocks.value.push(firstBlock); // Добавляем его в конец массива
};

// Функция для прокрутки вправо
const scrollRight = () => {
    const lastBlock = blocks.value.pop(); // Убираем последний элемент массива
    blocks.value.unshift(lastBlock); // Добавляем его в начало массива
};

const handleClick = (link) => {
    console.log(`Redirecting to: ${link}`);
};
</script>

<style scoped>
h2{
    font-family: ABeeZee;
font-size: 24px;
font-style: italic;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.01em;
text-align: left;

}
.strelki {
    display: flex;
    width: 1120px;
    justify-content: space-between;
    column-gap: 20px;
    padding-right: 50px;
    padding-bottom: 30px;
}

.container-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.arrow-button {
    cursor: pointer;
}

.arrow-button.left {
    transform: rotate(180deg);
    /* Поворот для левой стрелки */
}

.container {
    display: flex;
    column-gap: 20px;
    width: 1120px;
    margin: auto;
    overflow-x: hidden;
    /* Скрыть не видимые блоки */
}

.block {
    font-family: ABeeZee;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #000;
    width: 160px;
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #EDEDED;
    border-radius: 15px;
    justify-content: center;
}

.block p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
}

@media (width<780px){
    .container{
        display: flex;
    -moz-column-gap: 20px;
    gap: 20px;
    width: auto;
    margin: 0 auto;
    /* overflow-x: hidden; */
    flex-wrap: wrap;
    justify-content: center;
    }
    .strelki{
        width: auto;
    } 
}
</style>