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
        Card,SpinnerVue
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
     .product-img{
       width: auto;
     }
     .card1{
        border-radius: 15px;
        max-width: 800px;
     }
     .card2{
        border-radius: 15px;
        max-width: 800px;
     }
     .col{
        padding: 10px;
     }
</style>
