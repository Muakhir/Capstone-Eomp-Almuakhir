<template>
    <div class="row" v-if="product">
        <div class="product-info">
            <div class="col ms-5 me-5">
                <Card :product="product[0]" class="card1">
                    <template #CardImg>
                        <img :src="product.prodImg" class="product-img">
                    </template>
                </Card>
            </div>
            <div class="col me-5 ms-5">
                <Card :product="product[0]" class="card2">
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
                    </template>
                </Card>
            </div>
        </div>
    </div>
    <div class="row" v-else>
        <span><SpinnerVue></SpinnerVue></span>
        <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
    </div>
</template>

<script>
import SpinnerVue from '@/components/Spinner.vue';
import Card from '@/components/Card.vue';
export default {
    name: 'ProductView',
    components: {
        Card,SpinnerVue,
    },
    computed:{
        product(){
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct',this.$route.params)
    }
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card1, .card2 {
    width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
}

.card2{
    width: 700px;
}

.card-title {
    text-align: center;
    margin-bottom: 10px;
}

.product-img {
    width: 100%;
    height: auto;
}

.card-text {
    margin: 0;
}

.bg-gradient {
    background: linear-gradient(to bottom, #343a40, #202328);
}

.bg-dark-subtle {
    color: #fff;
}

.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #3aafa9;
    animation: spin 1s linear infinite;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>

