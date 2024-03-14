<template>
    <div class="container">
        <div>
            <input type="text" placeholder="Search" v-model="searchQuery">
            <button @click="sortByAmount">Sort</button>
        </div>
        <div class="row" v-if="sortedProducts.length > 0">
    <Card v-for="product in sortedProducts" :key="product.prodID">
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
                    <router-link :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
                </template>
            </Card>
        </div>
        <div class="row" v-else>
        <span><SpinnerVue></SpinnerVue></span>
        <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
    </div>
    </div>
</template>

<script>
import SpinnerVue from '@/components/Spinner.vue'
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card,SpinnerVue
    },
    data() {
        return {
            searchQuery: '',
            sortOrder: 1 // 1 for ascending, -1 for descending
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
    // Filter products based on search query
    return this.products.filter(product =>
        product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
},
        sortedProducts() {
            // Sort filtered products by prodAmount
            return this.filteredProducts.slice().sort((a, b) => this.sortOrder * (a.prodAmount - b.prodAmount));
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {
        sortByAmount() {
            // Toggle sorting order
            this.sortOrder *= -1;
        }
    }
};
</script>

<style scoped>

</style>
