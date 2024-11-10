<template>
    <div v-if="showMessage" class="message-box">
        <div class="message-box_filter">
            <img src="@/assets/Arrow.png" width="24" height="24" @click="toggleMessage" />
            <p> Filters</p>
        </div>


        <div class="mobile-filter">
            <MenuPrice @update:filter="updateFilter" :initialMinValue="minPrice" :initialMaxValue="maxPrice" />
           
            <!-- Фильтр по брендам -->
            <div class="brand-filter">
                <h3>Brand</h3>
                <hr>
                <HeaderSearch placeholder="Search" :icon="searchIcon" @updateResults="handleSearchResults" />
                <div v-for="brand in brands" :key="brand" class="brand-checkbox">
                    <input type="checkbox" :id="brand" :value="brand" v-model="selectedBrands"
                        @change="handleBrandChange(brand)" />
                    <label :for="brand">
                        <p class="brands">{{ brand }} <span>{{ totalProducts }}</span></p>
                    </label>
                </div>
            </div>

            <!-- Фильтр по категориям -->
            <h2 @click="toggleCategoryFilter">
                Категории
                <span :class="{ 'open': isCategoryFilterOpen }" class="arrow"></span>
            </h2>
            <div v-if="isCategoryFilterOpen" class="category-checkbox">
                <div v-for="category in categorys" :key="category">
                    <input type="checkbox" :id="category" :value="category" v-model="selectedCategorys"
                        @change="handleCategorysChange(category)" />
                    <label :for="category">{{ category }}</label>
                </div>
            </div>
            <!-- Раскрывающееся меню для характеристик -->
            <div class="characteristic-filter">
                <h2>Уникальные характеристики</h2>

                <div v-for="(values, characteristic) in characteristics" :key="characteristic">
                    <details>
                        <summary>{{ characteristic }}</summary>
                        <hr>
                        <div v-for="value in values" :key="value" class="brand-checkbox">
                            <input type="checkbox" :id="`${characteristic}-${value}`" :value="value"
                                v-model="selectedCharacteristics[characteristic]"
                                @change="handleCharacteristicChange(characteristic, value)" />
                            <label :for="`${characteristic}-${value}`">{{ value }}</label>
                        </div>
                    </details>
                </div>
            </div>
        </div>


    </div>
    <div class="myall">

        <div class="menu_left">
            <MenuPrice @update:filter="updateFilter" :initialMinValue="minPrice" :initialMaxValue="maxPrice" />
            <!-- Здесь можете отображать или использовать отфильтрованные товары -->



            <!-- <div>
                <label for="minPrice">Минимальная цена:</label>
                <input type="number" v-model="minPrice" />

                <label for="maxPrice">Максимальная цена:</label>
                <input type="number" v-model="maxPrice" />
            </div> -->
            <!-- Фильтр по брендам -->
            <div class="brand-filter">
                <h3>Brand</h3>
                <hr>
                <HeaderSearch placeholder="Search" :icon="searchIcon" @updateResults="handleSearchResults" />
                <div v-for="brand in brands" :key="brand" class="brand-checkbox">
                    <input type="checkbox" :id="brand" :value="brand" v-model="selectedBrands"
                        @change="handleBrandChange(brand)" />
                    <label :for="brand">
                        <p class="brands">{{ brand }} <span>{{ totalProducts }}</span></p>
                    </label>
                </div>
            </div>

            <!-- Фильтр по категориям -->
            <h2 @click="toggleCategoryFilter">
                Категории
                <span :class="{ 'open': isCategoryFilterOpen }" class="arrow"></span>
            </h2>
            <div v-if="isCategoryFilterOpen" class="category-checkbox">
                <div v-for="category in categorys" :key="category">
                    <input type="checkbox" :id="category" :value="category" v-model="selectedCategorys"
                        @change="handleCategorysChange(category)" />
                    <label :for="category">{{ category }}</label>
                </div>
            </div>
            <!-- Раскрывающееся меню для характеристик -->
            <div class="characteristic-filter">
                <h2>Уникальные характеристики</h2>

                <div v-for="(values, characteristic) in characteristics" :key="characteristic">
                    <details>
                        <summary>{{ characteristic }}</summary>
                        <hr>
                        <div v-for="value in values" :key="value" class="brand-checkbox">
                            <input type="checkbox" :id="`${characteristic}-${value}`" :value="value"
                                v-model="selectedCharacteristics[characteristic]"
                                @change="handleCharacteristicChange(characteristic, value)" />
                            <label :for="`${characteristic}-${value}`">{{ value }}</label>
                        </div>
                    </details>
                </div>
            </div>



        </div>

        <data value="sortedP">
            <div class="sorted">
                <div>
                    <h3>Selected Products: <span>{{ totalProducts }}</span></h3>
                </div>


                <div>
                    <!-- <label for="sortBy">Сортировать по:</label> -->
                    <select id="sortBy" v-model="sortOption">
                        <option value="rating">By rating</option>
                        <option value="price">price</option>
                        <option value="deliveryDate">Дата поставки</option>
                    </select>


                    <!-- <button @click="toggleSortOrder">Сортировать по {{ sortOrder === 'asc' ? 'возрастанию' : 'убыванию'
                        }}</button> -->
                </div>

                <div class="mobile">

                    <div class="filter-container">
                        <img src="@/assets/Filters.png" alt="Filter Icon" class="filter-icon" @click="toggleMessage" />
                        <input type="text" placeholder="Фильтр" />
                    </div>
                </div>
            </div>

            <div class="all_product">
                <ProductCart :products="paginatedProducts" :apiUrl="apiUrl" />
                <div class="pagination">
                    <!-- Кнопка назад -->

                    <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>

                    <!-- Первая страница -->
                    <button v-if="currentPage >= 3" @click="changePage(1)">1</button>
                    <span v-if="currentPage >= 3">...</span>

                    <!-- Страницы около текущей -->
                    <button v-for="page in pagesToShow" :key="page" :class="{ active: currentPage === page }"
                        @click="changePage(page)">
                        {{ page }}
                    </button>

                    <!-- Троеточие, если необходимо -->
                    <span v-if="currentPage < totalPages - 3">...</span>

                    <!-- Последняя страница -->
                    <button v-if="currentPage < totalPages - 3" @click="changePage(totalPages)">
                        {{ totalPages }}
                    </button>

                    <!-- Текущая страница -->
                    <!-- <span>Страница {{ currentPage }} из {{ totalPages }}</span> -->

                    <!-- Кнопка вперед -->
                    <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
                </div>
            </div>
        </data>

    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import ProductCart from '../Products/ProductCart.vue';
import HeaderSearch from '../Search/HeaderSearch.vue';
import MenuPrice from './MenuPrice.vue';
const searchIcon = require('@/assets/Search.png');
const categories = ref([]);
const products = ref([]);
const brands = ref([]);
const categorys = ref([]);
const filter = ref({ min: 100, max: 1000 });
// Состояние для управления видимостью фильтра
const isCategoryFilterOpen = ref(false);


const minPrice = ref(100);
const maxPrice = ref(500000);


const toggleCategoryFilter = () => {
    isCategoryFilterOpen.value = !isCategoryFilterOpen.value;
};



import { API_BASE_URL } from '@/config';

const showMessage = ref(false);

const toggleMessage = () => {
    showMessage.value = !showMessage.value; // Переключение видимости блока
};


// сортировка


const sortOption = ref('rating');  // По умолчанию сортируем по рейтингу
const sortOrder = ref('asc');  // По умолчанию сортировка по возрастанию

// Данные товаров


// Функция для изменения порядка сортировки
watch(sortOption, () => {
    sortedProducts.value;  // Обновляется автоматически при изменении sortOption
});






// Храним товары и базовый URL для API

const apiUrl = API_BASE_URL;

// Переменные для управления пагинацией
// Пагинация
const currentPage = ref(1);
const productsPerPage = 12; // Количество товаров на странице

const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / productsPerPage);
});

const totalProducts = computed(() => {
    return filteredProducts.value.length;
});



const pagesToShow = computed(() => {
    const pages = [];
    const range = 1; // Показать 3 страницы вокруг текущей
    const start = Math.max(1, currentPage.value - range);
    const end = Math.min(totalPages.value, currentPage.value + range);

    // Добавляем страницы в диапазон
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
});

// конец пагинации
const filteredProducts = computed(() => {
    console.log('начало работы фильтрации');

    return products.value.filter(product => {
        // Фильтрация по цене (независимо от выбранных фильтров)
        const matchesPrice = product.price >= minPrice.value && product.price <= maxPrice.value;

        // Если не выбраны ни бренды, ни характеристики, ни категории, возвращаем все товары
        const matchesBrand = selectedBrands.value.length === 0 || selectedBrands.value.includes(product.brand);
        const matchesCategory = selectedCategorys.value.length === 0 || selectedCategorys.value.includes(product.category);

        // Фильтрация по характеристикам
        const matchesCharacteristics = Object.keys(selectedCharacteristics.value).every(characteristic => {
            // Если характеристика не выбрана, она считается совпавшей
            if (!selectedCharacteristics.value[characteristic] || selectedCharacteristics.value[characteristic].length === 0) {
                return true;
            }

            // Преобразуем значение в массив, если это не массив
            const selectedValues = Array.isArray(selectedCharacteristics.value[characteristic])
                ? selectedCharacteristics.value[characteristic]
                : [selectedCharacteristics.value[characteristic]];

            // Получаем значения характеристики для товара
            const productValues = product.characteristics
                ? product.characteristics.filter(item => item.characteristic === characteristic).map(item => item.value)
                : [];

            // Проверяем, что хотя бы одно из выбранных значений соответствует характеристикам товара
            return selectedValues.every(value => productValues.includes(value));
        });

        // Возвращаем продукт, если он проходит все фильтры
        return matchesPrice && matchesBrand && matchesCategory && matchesCharacteristics;
    });
});






const sortedProducts = computed(() => {
    return [...filteredProducts.value].sort((a, b) => {
        let comparison = 0;

        // Сортируем по рейтингу
        if (sortOption.value === 'rating') {
            comparison = a.rating - b.rating;
        }
        // Сортируем по цене
        else if (sortOption.value === 'price') {
            comparison = a.price - b.price;
        }
        // Сортируем по дате поставки
        else if (sortOption.value === 'deliveryDate') {
            comparison = new Date(a.deliveryDate) - new Date(b.deliveryDate);
        }

        // Если порядок сортировки 'desc', меняем знак
        return sortOrder.value === 'asc' ? comparison : -comparison;
    });
});

const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * productsPerPage;
    return sortedProducts.value.slice(startIndex, startIndex + productsPerPage);
});



// Методы для управления страницами
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};
const changePage = (page) => {
    // Устанавливаем текущую страницу
    currentPage.value = page;
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};


const selectedCharacteristics = ref({});  // Для хранения выбранных характеристик
const characteristics = ref({});  // Уникальные характеристики

const selectedBrands = ref([]);

const handleBrandChange = (brand) => {
    // Если бренд не был добавлен в selectedBrands, добавляем его
    if (!selectedBrands.value[brand]) {
        selectedBrands.value[brand] = true;
    } else {
        selectedBrands.value[brand] = !selectedBrands.value[brand];
    }

    // Логируем обновленные данные для отладки
    console.log('selectedBrands.value', selectedBrands.value);
};
const extractBrands = (categoriesData) => {
    const allBrands = new Set();

    categoriesData.forEach(category => {
        if (category.brand) {
            allBrands.add(category.brand);
        }
    });

    brands.value = Array.from(allBrands);
};



const selectedCategorys = ref([]);
const handleCategorysChange = (category) => {

    if (!Array.isArray(selectedCategorys.value[category])) {
        selectedCategorys.value[category] = true;
    }
    // Если бренд не был добавлен в selectedBrands, добавляем его

    else {
        selectedCategorys.value[category] = !selectedCategorys.value[category];
    }

    // Логируем обновленные данные для отладки
    console.log('selectedBrands.value', selectedCategorys.value);
};


const extractCategorys = (categoriesData) => {
    const allCategorys = new Set();

    categoriesData.forEach(category => {
        if (category.category) {
            allCategorys.add(category.category);
        }
    });

    categorys.value = Array.from(allCategorys);
};





const handleCharacteristicChange = (characteristic, value) => {
    // Если характеристика еще не существует в selectedCharacteristics, создаем массив
    if (!Array.isArray(selectedCharacteristics.value[characteristic])) {
        selectedCharacteristics.value[characteristic] = [value];
    }

    // Принудительное обновление реактивности (необязательно в случае, если массив был изменен)
    selectedCharacteristics.value = { ...selectedCharacteristics.value };

    // Выводим обновленные данные для отладки
    console.log('selectedCharacteristics.value', selectedCharacteristics.value);
};


onMounted(async () => {
    await loadCategories();
    await loadProducts();
});

// Функция для загрузки категорий
const loadCategories = async () => {
    try {
        const response = await fetch(`http://localhost:1452/api/products`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке категорий');
        }
        const data = await response.json();
        categories.value = data;

        extractBrands(data);
        extractCategorys(data);
        extractCharacteristics(data);
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};


function updateFilter(newFilter) {
    minPrice.value = newFilter.min;
    maxPrice.value = newFilter.max;
    filter.value = newFilter;
    loadCategories();
}



// Функция для загрузки товаров
const loadProducts = async () => {
    try {
        const response = await fetch('http://localhost:1452/api/products');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке товаров');
        }
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
    }
};

// Извлекаем бренды из категорий

// Извлекаем уникальные характеристики
const extractCharacteristics = (categoriesData) => {
    const characteristicsData = {};

    categoriesData.forEach(item => {
        if (item.characteristics && Array.isArray(item.characteristics)) {
            item.characteristics.forEach(characteristic => {
                const charName = characteristic.characteristic;
                const charValue = characteristic.value;

                if (!characteristicsData[charName]) {
                    characteristicsData[charName] = new Set();
                }
                characteristicsData[charName].add(charValue);
            });
        }
    });

    for (const charName in characteristicsData) {
        characteristicsData[charName] = Array.from(characteristicsData[charName]);
    }

    characteristics.value = { ...characteristicsData };
};

// Фильтрация товаров по выбранным брендам и характеристикам




// пагинация 

</script>

<style scoped>
.filter-container {
    display: none;
}

.myall {
    display: flex;
    column-gap: 20px;
    margin: 0 auto;

}

.sorted {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-family: ABeeZee;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #6C6C6C;

        span {
            font-family: ABeeZee;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.03em;
            text-align: center;
            color: #000000;


        }
    }

}

h2 {
    font-family: ABeeZee;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #000;

}

.brand-checkbox {
    display: flex;

}

.brands,
.category-checkbox {
    font-family: ABeeZee;
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #000;

    span {
        font-family: Abel;
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #929292;
    }


}

select {
    width: 256px;

    padding: 8px 16px 8px 16px;
    gap: 0px;
    border-radius: 8px;
    font-family: Abel;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.005em;
    text-align: left;
    color: #000;

    option {
        font-family: Abel;
        font-size: 15px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.005em;
        text-align: left;

    }
}



.pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    background: #F6F6F6;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    font-family: ABeeZee;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: center;

}

.pagination button.active {
    background: #000000;
    color: #fff;

}

.pagination button:disabled {
    cursor: not-allowed;
    background-color: #f0f0f0;
    border-color: #ddd;
}

.pagination span {
    margin: 0 5px;
}


.all {
    flex-wrap: wrap;
    width: auto;
    /* Добавляем перенос */

    .container {
        width: 236px !important;
    }
}



.category-menu {
    margin-bottom: 20px;
}

.category-menu ul {
    list-style-type: none;
    padding: 0;
}

.category-menu li {
    cursor: pointer;
    padding: 5px;
    background-color: #f0f0f0;
    margin: 5px 0;
}

.category-menu li:hover {
    background-color: #e0e0e0;
}

.brand-filter,
.characteristic-filter {
    margin-bottom: 20px;
}

.brand-checkbox,
.characteristic-filter div {
    margin: 5px 0;
}

.product-list ul {
    list-style-type: none;
    padding: 0;
}

.product-list li {
    margin: 10px 0;
}

/* Добавляем стили для раскрывающегося меню */
details summary {
    cursor: pointer;
    font-family: ABeeZee;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #000;
}

details div {
    margin-left: 20px;
}


.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
    /* Черная стрелка, направленная вниз */
    transition: transform 0.3s ease-in-out;
    /* Плавное изменение направления */
}

/* Когда фильтр открыт, стрелка разворачивается вверх */
.arrow.open {
    transform: rotate(180deg);
    /* Поворот стрелки на 180 градусов */
}

@media(width<780px) {
    .menu_left {
        display: none;
    }

    #sortBy {
        width: 164px;
        font-family: Abel;
        font-size: 15px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.005em;
        text-align: left;
        text-underline-position: from-font;
        -webkit-text-decoration-skip-ink: none;
        text-decoration-skip-ink: none;
        border: 0.5px solid #D4D4D4;
        height: 56px;
        padding: 16px;

    }

    h3 {
        display: none;
    }

    .sorted {
        display: flex;
        align-items: center;
        column-gap: 20px;
        justify-content: center;
    }

    .filter-container {
        display: block;
        position: relative;
        display: flex;
        align-items: center;

    }

    .filter-icon {
        position: absolute;
        right: 8px;
        /* Иконка будет справа */
        width: 16px;
        height: 16px;
    }

    .filter-container input {
        padding-right: 30px;
        /* Отступ справа, чтобы не перекрывать текстом иконку */
        width: 164px;
        font-family: Abel;
        font-size: 15px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.005em;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        border: 0.5px solid #D4D4D4;

        height: 56px;

        padding: 16px;
        gap: 0px;
        border-radius: 8px;

        justify: space-between;
        opacity: 0px;

    }

    /* Стили для блока с сообщением */
    .message-box {
        margin-top: 10px;
        background-color: #ffffff;
        padding: 10px;
        border: 1px solid #ccc;
        height: 100%;
        position: relative;
        z-index: 100;
    }

    .message-box_filter {
        display: flex;
        align-items: center;
        column-gap: 15px;

        p {
            font-family: Abel;
            font-size: 24px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            padding-right: 10px;
        }
    }
}
</style>