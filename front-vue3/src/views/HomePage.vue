<template>
    <div>   
        <IphonePromo />
        <PopularCards />
     


        <ProductGrid />
        <BrowserBy  style="padding-top: 50px;"/>
        <DiscountP50 />

        <FooterPic />
        <!-- Ваши компоненты для страницы "О нас" -->
    </div>
</template>


<script setup>

import PopularCards from '../components/Home/PopularCards.vue'
import BrowserBy from '../components/Home/BrowserBy.vue'
import ProductGrid from '../components/Home/ProductGrid.vue';
import FooterPic from '../components/Home/FooterPic.vue';
import IphonePromo from '../components/Home/IphonePromo.vue'

import DiscountP50 from '../components/Home/DiscountP50.vue'
</script>