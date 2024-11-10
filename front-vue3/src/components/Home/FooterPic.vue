<template>

    <div class=conteiner>
        <div>
            <div class="note">
                <img src="@/assets/image 6.png" alt="">
            </div>
            <div class="img_center">
                <img src="@/assets/image 18.png" alt="">
            </div>

            <div class="plansh">
                <img src="@/assets/plansh.png" alt="">
            </div>

        </div>


        <div class="div_center">
            <h2>
                Big Summer <span>Sale</span>
            </h2>
            <p style="padding-bottom: 10px;">
                Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <ShowButton backgroundColor="rgb(44, 44, 44)" titleColor="#ffffff" buttonTitle="Show" borderColor="#fff"
                @click="checkout" />
        </div>


        <div class="right">
            <div class="phone">
                <img src="@/assets/image 8.png" alt="">
            </div>
            <div class="clocke">
                <img src="@/assets/image 7.png" alt="">
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
<style>
.conteiner {

    background: linear-gradient(100.23deg, #2E2E2E 42.36%, #000000 98.65%);
    height: 448px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.plansh {
    position: relative;

    top: -80px;

    img {
        width: 345px;
        height: 262px;

    }

}

.note {
    position: relative;
    left: 215px;
    top: 60PX;

    img {
        width: 338px;
        height: 116px;
        gap: 0px;
        opacity: 0px;
    }
}

.img_center {
    position: relative;
    left: 50px;
    top: -55px;
    z-index: 2;

    img {
        width: 237px;
        height: 192px;


    }
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .clocke {
        position: relative;
        top: -60px;
        z-index: 2;

        img {
            width: 397px;
            height: 201px;
            gap: 0px;
            opacity: 0px;

        }
    }

    .phone {
        position: relative;
        top: 60px;

        img {
            width: 120.36px;
            height: 365.97px;


        }
    }
}

.div_center {



    h2 {
        font-family: Abel;
        font-size: 72px;
        font-weight: 400;
        line-height: 72px;
        letter-spacing: -0.01em;
        text-align: center;
        color: #fff;

        span {
            font-family: ABeeZee;
            font-size: 72px;
            font-style: italic;
            font-weight: 400;
            line-height: 72px;
            letter-spacing: -0.01em;
            text-align: center;

        }
    }

    p {
        font-family: Abel;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        text-align: center;
        color: #787878;

    }
}

@media(width<760px) {
    /* .note {
        position: relative;
        left: 215px;
        top: 34PX;
        rotate: unset;
        transform: rotate(76deg);
    } */

    /* .img_center {
    position: relative;
    left: 0;
    top: -48px;
    z-index: 2;
    transform: rotate(6deg);
} */
.note {
    position: relative;
    left: 215px;
    top: -20px;

    img {
        width: auto;
        height: auto;
        gap: 0px;
        opacity: 0px;
    }
}

.img_center {
    position: relative;
    left: 50px;
    top: -55px;
    z-index: 2;

    img {
        width: auto;
        height: auto;


    }
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .clocke {
        position: relative;
        top: -60px;
        z-index: 2;

        img {
            width: auto;
            height: auto;
            gap: 0px;
            opacity: 0px;

        }
    }

    .phone {
        position: relative;
        top: 60px;

        img {
            width: auto;
            height: auto;


        }
    }
}
}
</style>