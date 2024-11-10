<template>
    <div class="rating-stars">
        <!-- Проходим через все 5 звезд и отображаем их в зависимости от рейтинга -->

        <div>
            <span class="rating-text">{{ rating }} </span>
        </div>
        <div>
            <span class="rating-countReview"> of {{ countReview }}reviews </span>
        </div>
        <div>
            <span v-for="star in stars" :key="star" class="star" :class="{ filled: star <= rating }">
                &#9733; <!-- HTML-символ для звездочки -->
            </span>
        </div>


    </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Используем defineProps для получения пропсов без объявления лишней переменной
defineProps({
    rating: {
        type: Number,
        required: true,
    },
    countReview: {
        type: Number,
        required: true,
    },
});

// Создаем массив для 5 звезд
const stars = [1, 2, 3, 4, 5];
</script>

<style scoped>
.rating-stars {


    width: 192px;
    height: 192px;
    padding: 32px;
    gap: 16px;
    border-radius: 25px;
    opacity: 0px;

    background: #FAFAFA;

}

.star {
    font-size: 24px;
    color: #dcdcdc;

    /* Цвет неактивной звезды (серый) */
}

.star.filled {
    color: #ffcc00;
    /* Цвет активной звезды (желтый) */
}

.rating-text {
    font-family: ABeeZee;
    font-size: 56px;
    font-style: italic;
    font-weight: 400;
    line-height: 56px;
    text-align: center;

}

.rating-countReview {
    font-family: ABeeZee;
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #323232;
}
</style>