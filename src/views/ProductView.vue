<template>
    <main>
        <div class="container">
            <div class="row" v-if="product">
                <div class="col-md-6">
                    <Card :product="product[0]" class="card1">
                        <template #cardHeader>
                            <img v-if="product.prodImg" :src="product.prodImg" class="card-img">
                        </template>
                    </Card>
                </div>
                <div class="col-md-6">
                    <Card :product="product" class="card2">
                        <template #cardHeader>
                            <h4 class="card-title">{{ product.prodName }}</h4>
                        </template>
                        <template #cardBody>
                            <p class="card-text  p-2">
                                Quantity: {{ product.prodQuantity }}
                            </p>
                            <p class="card-text  p-2">
                                Amount: R{{ product.prodAmount }}
                            </p>
                                <button class="btn btn-custom" @click="addToCart">Add to Cart</button>
                        </template>
                        <CartView/>
                    </Card>
                </div>
            </div>
            <div class="row" v-else>
                <span><SpinnerVue></SpinnerVue></span>
            </div>
        </div>
    </main>
</template>



<script>
import SpinnerVue from '@/components/Spinner.vue';
import Card from '@/components/Card.vue'; 
import router from '@/router';
export default {
    name: 'ProductView',
    components: {
        Card,
        SpinnerVue,
    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    methods:{
        addToCart() {
  if (this.product) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cartItems.some(item => item.id === this.product.prodID);
    if (!found) {
      cartItems.push({ 
        id: this.product.prodID,
        prodName: this.product.prodName,
        prodAmount: this.product.prodAmount,
        prodQuantity: 1
      });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      router.push('/Cart')
      alert('Product added to cart!');
    } else {
      alert('Product is already in the cart!');
    }
  }
}
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
};
</script>

<style scoped>
main {
    background-image: url('https://iili.io/JXSvHJI.jpg');
    background-color: #ffffff;
    background-position: center;
    color: #ffffff;
}

.row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.card1,
.card2 {
    width: 100%;
    max-width: 700px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
}


.card-title {
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
}

.card-img {
    width: 100%;
}

.card-text {
    background-color: #657272b2;
    margin: 0;
    color: #fff;
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

.btn-custom {
        color: #70f5ee;
        background-color: #75727288;
        border-color: #8f8e8b;
    }

.btn-custom:hover {
        color: #fff;
        background-color: #3aafa9;
        border-color: #3aafa9;
    }

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>


