<template>
    <div>

        <div class="all">

            <div class="cart">
                <h2>Корзина</h2>
                <div v-if="cart.length > 0">
                    <div v-for="(item, index) in cart" :key="index" class="cart-item">
                        <div>
                            <img :src="`${API_BASE_URL}/${item.images[0]}`" alt="Изображение товара"
                                class="item-image" />
                        </div>

                        <div class="item-details">
                            <div>
                                <p><strong></strong> {{ item.name || 'Неизвестный товар' }}</p>

                            </div>


                            <div class="quantity-controls">
                                <img src="@/assets/No Edit.png" @click="decreaseQuantity(item.id)" width="24"
                                    height="24" alt="">
                                <!-- <button @click="decreaseQuantity(item.id)">-</button> -->
                                <span>{{ item.quantity }}</span>
                                <button>
                                    <img src="@/assets/Edit.png" @click="increaseQuantity(item.id)" width="24"
                                        height="24" alt="">
                                </button>

                                <!-- <button @click="increaseQuantity(item.id)">+</button> -->
                            </div>
                            <p>{{ (item.discount_price || item.price) * item.quantity }}</p>
                            <img src="@/assets/Close.png" @click="removeFromCart(item.id)" width="24" height="24"
                                alt="">


                        </div>
                    </div>

                    <p><strong>Итоговая стоимость:</strong> {{ totalPrice }} руб.</p>
                </div>
                <div v-else>
                    <p>Корзина пуста</p>
                </div>
            </div>

            <div class="form">
                <h3>Order Summary</h3>

                <label for="discount">Discount code / Promo code </label>
                <input id="discount" type="text" placeholder="Code" width="408" height="56">

                <br />
                <label for="bonus">Your bonus card number </label>
                <div style="display: flex;     align-items: center;">
                    <input id="bonus" type="text" placeholder="Enter Card Number" width="408" height="56">
                    <ShowButton backgroundColor="#fff" titleColor="#000" buttonTitle="Apply" class="apply" />
                </div>



                <div class="div1">
                    <div>
                        <p class="black">Subtotal</p>
                    </div>
                    <div>
                        <p>{{ totalPrice }} </p>
                    </div>

                </div>

                <div class="div1">
                    <div>
                        <p class="mysub">Estimated Tax</p>
                    </div>
                    <div>
                        <p> </p>
                    </div>

                </div>


                <div class="div1">
                    <div>
                        <p class="mysub">Estimated shipping & Handling</p>
                    </div>
                    <div>
                        <p> </p>
                    </div>

                </div>


                <div class="div1">
                    <div>
                        <p class="black"> Total</p>
                    </div>
                    <div>
                        <p>{{ totalPrice }} </p>
                    </div>

                </div>
                <ShowButton backgroundColor="#000" titleColor="#fff" buttonTitle="Checkout" class="check"
                    @click="checkout" />
            </div>

        </div>


    </div>


</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { API_BASE_URL } from '@/config';
import ShowButton from '../Buttons/ShowButton.vue';

export default {
    data() {
        return {
            API_BASE_URL
        };
    },
    components: {
        ShowButton
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['totalPrice'])
    },
    methods: {
        ...mapActions(['removeFromCart', 'increaseQuantity', 'decreaseQuantity', 'checkout'])
    }
};
</script>

<style scoped>
.all {
    display: flex;
    justify-content: space-around;

}

.check {
    width: 408px;

    font-family: ABeeZee;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: center;


}

.apply {
    position: relative;
    right: 90px;
    width: 76px;
    height: 32px;
    padding: 0;
    font-family: ABeeZee;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    text-align: center;


}

.div1 {
    display: grid;
    grid-template-columns: 1fr 0.1fr;
    justify-items: start;
    /* align-items: start; */
    width: 430px;
}

input {
    width: 408px;
    height: 56px;
    padding: 16px 0px 16px 16px;
    gap: 0px;
    border-radius: 7px;
    border: 0.5px;

    opacity: 0px;
    border: 1px solid #EBEBEB
}

.cart {
    width: 536px;
}

.cart-item {
    border-bottom: 0.5px solid #A3A3A3;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 12px;
    border-radius: 4px;
}

.item-details {
    display: flex;
    align-items: center;
    column-gap: 20px;

    div {
        display: flex;

        p {
            font-family: ABeeZee;
            font-size: 16px;
            font-style: italic;
            font-weight: 400;
            line-height: 24px;
            text-align: left;

        }
    }
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.remove-button {
    width: 24px;
    height: 24px;
    gap: 0px;
    opacity: 0px;

}

.form {
    display: grid;
    /* display: flex; */
    align-items: start;
    justify-items: start;
    border: 1px solid #EBEBEB;
    width: 536px;
    height: 656px;
    padding: 56px 64px 56px 64px;

    border-radius: 10px;

    opacity: 0px;

}
</style>