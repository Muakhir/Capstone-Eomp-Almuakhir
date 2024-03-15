<template>
    <main class="container-fluid">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <input type="text" placeholder="Search" v-model="searchQuery" class="form-control">
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
                <span><SpinnerVue></SpinnerVue></span>
                <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
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
            sortOrder: 1 
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
            return this.products.filter(product =>
                product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
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
        }
    }
};
</script>

<style scoped>
    main {
        background-image: url('https://iili.io/JWixgyv.png');
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
        background-color: #fff;
        border-color: #caa036;
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
</style>


