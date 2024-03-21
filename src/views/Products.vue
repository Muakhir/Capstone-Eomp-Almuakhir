<template>
    <main class="container-fluid">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <input type="text" placeholder="Search" v-model="searchQuery" class="form-control">
                </div>
                <div class="dropdown">
                    <button @click="toggleDropdown" class="btn btn-custom dropdown-toggle" type="button" id="categoryDropdown" aria-haspopup="true" :aria-expanded="isDropdownOpen.toString()">
                        {{ selectedCategory }}
                    </button>
                    <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="categoryDropdown">
                        <a class="dropdown-item" href="#" @click="filterByCategory('all')">All</a>
                        <a class="dropdown-item" href="#" @click="filterByCategory('Card')">Cards</a>
                        <a class="dropdown-item" href="#" @click="filterByCategory('Structure Deck')">Structure Deck</a>
                    </div>
                </div>
                <div>
                    <button @click="sortByAmount" class="btn btn-custom">Sort</button>
                </div>
            </div>
            <div class="row" v-if="sortedProducts.length > 0">
                <Card v-for="product in sortedProducts" :key="product.prodID">
                    <template #cardImg>
                        <img :src="product.prodImg" alt="">
                    </template>
                    <template #cardHeader>
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>
                    <template #cardBody>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                           Category: {{ product.prodCategory }}
                        </p>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Quantity: {{ product.prodQuantity }}
                        </p>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Amount: R{{ product.prodAmount }}
                        </p> 
                        <router-link :to="{name: 'product', params: {id: product.prodID}}" class="router-link">
                            <button class="btn btn-custom">View More</button>
                        </router-link>
                    </template>
                </Card>
            </div>
            <div class="row" v-else>
                <span><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></span>
            </div>
        </div>
    </main>
</template>

<script>
import SpinnerVue from '@/components/Spinner.vue'
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card,
        SpinnerVue
    },
    data() {
        return {
            searchQuery: '',
            sortOrder: 1,
            isDropdownOpen: false,
            selectedCategory: 'all'
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        filteredProducts() {
            if (!this.products) {
                return [];
            }
            if (this.selectedCategory === 'all') {
                return this.products.filter(product =>
                    product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                return this.products.filter(product =>
                    product.prodCategory === this.selectedCategory &&
                    product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
        },
        sortedProducts() {
            return this.filteredProducts.slice().sort((a, b) => this.sortOrder * (a.prodAmount - b.prodAmount));
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        sortByAmount() {
            this.sortOrder *= -1;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        filterByCategory(category) {
            this.selectedCategory = category;
            this.isDropdownOpen = false;
        }
    }
};
</script>

<style scoped>
    main {
        background-image: url('https://iili.io/JXSjXsV.jpg');
        background-size: cover; 
        background-position: center; 
        min-height: 100vh; 
    }

    .form-control {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btn-custom {
        color: #caa036;
        background-color: #75727288;
        border-color: #8f8e8b;
    }

    .btn-custom:hover {
        color: #fff;
        background-color: #caa036;
        border-color: #caa036;
    }

    .card {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        padding: 20px;
    }

    .card-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .card-text {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .router-link button {
        color: #caa036;
        cursor: pointer;
    }

    img {
        max-width: 300px;
    }

    @media screen and (max-width: 720px) {
        img {
            max-width: 150px;
        }
    }

    @media screen and (max-width: 576px) {
        img {
            max-width: 150px;
        }
    }

    @media screen and (min-width: 800px) {
        img {
            max-width: 250px;
        }
    }

    @media screen and (max-width: 350px) {
        img {
            max-width: 150px;
        }
    }
</style>





