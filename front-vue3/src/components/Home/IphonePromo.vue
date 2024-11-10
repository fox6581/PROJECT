<template>
    <div class="div1">
        <div class="div1_block">
            <div class="div1_block__text">
                <p class="p1">Pro.Beyond.</p>
                <h2>IPhone 14 Pro</h2>
                <p style="padding-bottom: 5px;">Created to change everything for the better. For everyone</p>
                <ShowButton backgroundColor="#211C24" titleColor="#ffffff" buttonTitle="Show" borderColor="#fff" />
            </div>
            <div class="div1_block__image">
                <img src="@/assets/Iphone Image.png" alt="iPhone Image">
            </div>
        </div>
    </div>
</template>

<script setup>
import ShowButton from '../Buttons/ShowButton.vue';

</script>

<style scoped>
.div1 {

    background: linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%);
    /* height: 632px; */
    padding: 0 160px;

    .div1_block {
        width: 1120px;
        display: flex;
        align-items: center;
        gap: 24px;

        .div1_block__text {
            width: 714px;

            h2 {
                font-family: Abel;
                font-size: 96px;
                font-weight: 400;
                line-height: 72px;
                letter-spacing: -0.01em;
                text-align: left;
                color: #fff;
                padding: 12px 0;

            }

            .p1 {
                font-family: ABeeZee;
                font-size: 25px;
                font-weight: 400;
                line-height: 32px;
                text-align: left;
                color: #909090;

            }

            p {
                font-family: ABeeZee;
                font-size: 18px;
                font-style: italic;
                font-weight: 400;
                line-height: 24px;
                text-align: left;
                color: #909090;


            }

            button {
                display: block;
            }
        }
    }

}

@media(width<780px) {
    .div1 {
        padding: 0;

        .div1_block {
            width: auto;
            display: flex;
            align-items: center;
            gap: 0;
            flex-direction: column;


            .div1_block__text {
                width: auto;
                padding: 27px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }




}
</style>