<template>
    <footer>
        <div class="footer">
            <div class="footer_div1">
                <img src="@/assets/LogoF.png" alt="">
                <div class="footer_div1__p">
                    <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more
                        than</p>
                </div>

            </div>

            <div class="footer_div2">
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="footer_div3">
                <ul>
                    <li v-for="(item, index) in menuItems2" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="icons">

        </div>

    </footer>
</template>
<script setup>
import { ref } from 'vue';
const menuItems = ref([
    'Services',
    'Bonus program',
    'Gift cards',
    'Credit and payment',
    'Service contracts',
    'Non-cash account',
    'Payment'
]);

const menuItems2 = ref([
    'Assistance to the buyer',
    'Find an order',
    'Terms of delivery',
    'Exchange and return of goods',
    'Guarantee',
    'Frequently asked questions',
    'Terms of use of the site'
]);
</script>
<style scoped>
footer {
    background: #000000;




}

.footer {
    width: 1120px;
    display: flex;
    margin: 0 auto;
    column-gap: 20px;
    padding-top: 100px;
}

.footer_div1 {
    width: 384px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-right: 100px;

    img {
        width: 66px;
        height: 22px;
    }

    p {
        font-family: ABeeZee;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 23.87px;
        text-align: left;
        color: #CFCFCF;
        width: 326px;


    }
}

ul {
    list-style-type: none;
    padding: 0;
}

li:nth-child(1) {
    font-family: Abel;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #FFFFFF;

}

li {
    font-family: Abel;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #CFCFCF;

}

.footer_div2,
.footer_div3 {
    width: 295px;

}

@media(width<780px) {
    .footer {
     
        width: -moz-fit-content;
        width: auto;
        display: flex;
        margin: 0;
        -moz-column-gap: 20px;
        column-gap: 0;
        /* padding-top: 0; */
        padding-bottom: 0;
        flex-direction: column;
        align-items: center;

    }

    

}
</style>