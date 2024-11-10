<template>
    <div class="container">
        <!-- Первый блок с grid areas -->
        <div class="block-1">
            <div class="large">
                <div>
                    <div>
                        <img src="@/assets/PlayStation.png" alt="">
                    </div>
                    <div class="large_text">
                        <h2>Playstation 5</h2>
                        <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                            PlayStation experience.</p>
                    </div>
                </div>
            </div>
            <div class="small1">
                <div>
                    <img src="@/assets/hero.png" alt="">
                </div>

                <div class="small1_text">
                    <h2>
                        Apple
                        AirPods 
                        Max
                    </h2>
                    <p>Computational audio. Listen, it's powerful</p>
                </div>
            </div>
            <div class="small2">

                <div>
                    <img src="@/assets/image 36.png" alt="">
                </div>

                <div class="small2_text">
                    <h2>
                        Apple
                        Vision Pro
                    </h2>
                    <p>An immersive way to experience entertainment</p>
                </div>
            </div>
        </div>

        <!-- Второй блок -->
        <div class="block-2">

            <div class="block-2_text">
                <h2>Macbook <span>Air</span></h2>
                <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina
                    display.</p>
                    <div>
                        <ShowButton buttonTitle="Show" backgroundColor="#EDEDED"  @click="checkout" /> 
                    </div>
                   
            </div>
            <div>
                <img src="@/assets/MacBook Pro 14.png" alt="">
            </div>

        </div>
  
    </div>
</template>
<script setup>
import ShowButton from '../Buttons/ShowButton.vue';

import { useRouter } from 'vue-router';  // Импортируем useRouter

// Получаем доступ к роутеру
const router = useRouter();

// Функция для перехода на /product
const checkout = () => {
  router.push('/product');  // Переход на страницу /product
};
</script>
<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* Два столбца */

}

  
/* Сетка для первого блока */
.block-1 {
    display: grid;
    grid-template-areas:
        "large large"
        "small1 small2";
    grid-template-rows: 1fr 1fr;
    /* Большая часть и две маленькие */
    grid-template-columns: 1fr 1fr;
    /* gap: 10px;
    background-color: #e0e0e0;
    padding: 10px; */
}

.large {
    grid-area: large;
    background-color: #fff;

    div {
        display: flex;
        align-items: center;

        .large_text {

            display: flex;
            flex-direction: column;
            /* align-content: space-around; */
            align-items: flex-start;
            width: 338px;
            height: 128px;

            h2 {
                font-family: ABeeZee;
                font-size: 49px;
                font-style: italic;
                font-weight: 400;
                line-height: 40px;
                text-align: left;
                margin: 0px;
                padding-bottom: 10px;

            }

            p {
                text-align: left;
                font-family: ABeeZee;
                font-size: 14px;
                font-style: italic;
                font-weight: 400;
                line-height: 24px;
                text-align: left;
                color: #909090;

            }

        }
    }

}

.small1 {
    grid-area: small1;
    display: flex;
    background-color: #fff;

    align-items: center;
    column-gap: 40px;
   background-color:  #EDEDED;

    .small1_text {
        width: 160px;
        padding: 0px 10px;

        h2 {
            font-family: ABeeZee;
            font-size: 29px;
            font-style: italic;
            font-weight: 400;
            line-height: 40px;
            text-align: left;

        }

        p {
            font-family: ABeeZee;
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #909090;
        }
    }
}

.small2 {
    grid-area: small2;
    background: #353535;
    display: flex;
    align-items: center;
    column-gap: 40px;

    .small2_text {
        width: 160px;
        padding: 0px 10px;
        h2 {
            color: #FFFFFF;
            font-family: ABeeZee;
            font-size: 29px;
            font-style: italic;
            font-weight: 400;
            line-height: 40px;
            text-align: left;

        }

        p {
            font-family: ABeeZee;
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #909090;
        }
    }



}

/* Второй блок */
.block-2 {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #EDEDED;


    .block-2_text {
        width: 360px;
        /* padding-left: 20px; */
        div{
            display: flex;
    padding: 10px 0;

        }

        h2 {
            font-family: Abel;
            font-size: 64px;
            font-weight: 400;
            line-height: 56px;
            text-align: left;
            color: #000;

            span {
                font-family: ABeeZee;
                font-size: 64px;
                font-style: italic;
                font-weight: 400;
                line-height: 56px;
                text-align: left;
                color: #000;
            }
        }

        p {
            font-family: ABeeZee;
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #909090;
        }
    }
}
</style>