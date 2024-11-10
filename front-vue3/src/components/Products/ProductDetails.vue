<template>
    <div class="test1">

        <div>
            <img :src="productImageUrl" alt="Product image" />
        </div>
        <div>
            <div class="block1">
                <h1>{{ product.name }}</h1>

                <p v-if="product.discount_price">

                    <span class="old-price"> ${{ product.price }} </span>
                    <span class="discount-price">${{ product.discount_price }} </span>
                </p>
                <p v-else>
                    <span class="discount-price">$ {{ product.price }}</span>
                </p>
            </div>



            <div v-if="product.characteristics && product.characteristics.length > 0">

                <ul>
                    <li v-for="(char, index) in product.characteristics" :key="index">
                        <strong>{{ char.characteristic }}:</strong>
                        {{ char.value }} {{ char.unit_type }}
                    </li>
                </ul>
            </div>
            <div class="block2">
                <ShowButton backgroundColor="#fff" titleColor="#000" buttonTitle="Add to Wishlist"
                    @click="toggleLike(product)" style="width: 260px;" />
                <ShowButton backgroundColor="#000" titleColor="#fff" buttonTitle="Buy Now" @click="addToCart(product)"
                    style="width: 260px;" />
            </div>


        </div>

    </div>

    <div class="block3">
        <div class="block3_1">
            <h2>Details</h2>
            <div>
                <div>
                    <p><strong>Гарантия:</strong> </p>
                </div>
                <div>
                    <p>{{ product.guarantee }}месяцев</p>
                </div>
            </div>
            <hr>

            <div>
                <div>
                    <p>Рейтинг: </p>
                </div>
                <div>
                    <p>{{ product.rating }} ({{ product.count_review }} отзывов)</p>
                </div>
            </div>
            <hr>

            <div>
                <div>
                    <p>Страна производства: </p>
                </div>
                <div>
                    <p>{{ product.rating }} ({{ product.count_review }} отзывов)</p>
                </div>
            </div>
            <hr>

            <div>
                <div>
                    <p>Цвет: </p>
                </div>
                <div>
                    <p>{{ product.color }}</p>
                </div>
            </div>
            <hr>

            <div>
                <div>
                    <p>Бренд: </p>
                </div>
                <div>
                    <p>{{ product.brand }}</p>
                </div>
            </div>
            <hr>

            <div>
                <div>
                    <p>Категория: </p>
                </div>
                <div>
                    <p>{{ product.category }}</p>
                </div>
            </div>

        </div>

    </div>


    <div v-if="product.rating > 0" class="rait">
        <RatingStars :rating="product.rating" :countReview="product.count_review" />
    </div>
    <div class="div4">

        <div style=" width: 1120px;  margin: 0 auto;">
            <p class="related">Related Products</p>
        </div>

        <div v-if="relatedProducts.length > 0">
            <ProductCart :products="relatedProducts" :apiUrl="apiUrl" @click="navigateToProduct['id']" />
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RatingStars from '../Raitings/RatingStars.vue';
import ShowButton from '../Buttons/ShowButton.vue';
import { useStore } from 'vuex'; // Используем store
import ProductCart from './ProductCart.vue';

const route = useRoute();
const router = useRouter();
const product = ref({});
const relatedProducts = ref([]); // Сопутствующие товары
const productImageUrl = ref('');
const apiUrl = 'http://localhost:1452';

const store = useStore();
let isAddingToCart = false;

const fetchProductData = async (productId) => {
    const productResponse = await fetch(`${apiUrl}/api/products/${productId}`);
    const productData = await productResponse.json();
    product.value = productData;
    productImageUrl.value = `${apiUrl}/${productData.images[0]}`;

    // Получаем сопутствующие товары
    const relatedResponse = await fetch(`${apiUrl}/api/products?category=${productData.category}&excludeId=${productId}`);
    const relatedData = await relatedResponse.json();

    // Функция для случайного перемешивания массива (Алгоритм Фишера-Йейтса)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
        }
        return array;
    };

    // Перемешиваем товары и выбираем первые 4
    relatedProducts.value = shuffleArray(relatedData).slice(0, 4);
};

const toggleLike = (product) => {
    store.commit('toggleLike', product);
};


watch(() => route.params.id, (newProductId) => {
    fetchProductData(newProductId);
});

onMounted(() => {
    fetchProductData(route.params.id); // Изначальная загрузка данных для первого продукта
});
// Функция для перехода к продукту
const navigateToProduct = (productId) => {
    console.log("Navigating to product:", productId);

    router.push(`/products/${productId}`);
};

// Функция добавления товара в корзину
const addToCart = (product) => {
    if (isAddingToCart) return;
    isAddingToCart = true;

    store.commit('addToCart', product);

    setTimeout(() => {
        isAddingToCart = false;
    }, 100);
};
</script>

<style scoped>
.rait {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 1120px;
    margin: 0 auto;
    height: 366px;
    justify-content: center;

}

.test1 {
    display: flex;
    padding: 100px 0;
}

.related {
    font-family: ABeeZee;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}

.block3 {
    width: 1440px;

    background: #FAFAFA;
    padding: 100px;

    .block3_1 {
        border-radius: 8px;
        background-color: #fff;
        margin: 0 auto;
        padding: 50px;


        div {
            display: flex;
            justify-content: space-between;

        }
    }
}

.block1,
.block2 {
    display: flex;
    align-items: center;
    column-gap: 20px;
}

.div4 {
    padding: 50px 0;
}

/* Добавьте стили */
h1 {
    font-family: ABeeZee;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: 40px;
    text-align: left;

}

p {
    font-size: 1.1em;
    margin: 5px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}


strong {
    font-weight: bold;
}

.related-products {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.related-product {
    text-align: center;
    cursor: pointer;
}

.related-product img {
    border-radius: 5px;
}

.description {
    font-size: 1em;
    margin-top: 5px;
}

.price {
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 5px;
}

ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;

    li {
        background: #F4F4F4;
        font-size: 1em;
        margin-bottom: 5px;
        min-width: 168px;
        padding: 16px;
        gap: 8px;
        border-radius: 7px;
        display: flex;
        opacity: 0px;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}

.old-price {
    font-family: ABeeZee;
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #000;
    padding-right: 10px;
}

.discount-price {
    font-family: Abel;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #A0A0A0;
    text-decoration: line-through;
}

@media(width<780px) {
    .block3 {
        width: auto;
        background: #FAFAFA;
        padding: 10px;
        .block3_1{
            padding: 20px;
        }
    }

    .test1 {
    display: flex;
    /* padding: 100px 0; */
    flex-wrap: wrap;
}
.rait {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    margin: 0 auto;
    height: auto;
    padding-top: 35px;
}

.block1, .block2 {
    display: flex;
    align-items: center;
    -moz-column-gap: 20px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
}
</style>