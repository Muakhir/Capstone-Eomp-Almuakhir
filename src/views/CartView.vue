<template>
    <div class="container">
      <div class="mt-3">
        <h1>Cart</h1>
        <div v-if="cartItems.length === 0">
          <p>Your cart is empty.</p>
        </div>
        <div v-else>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.prodQuantity }}</td>
                  <td>{{ item.prodAmount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>Total Price: R{{ totalPrice }}</div>
          <div class="mt-3 mb-3">
            <button @click="purchaseItems" class="buy">Purchase All Items</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    computed: {
      cartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
      },
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.quantity * item.prodPrice), 0);
      }
    },
    methods: {
      purchaseItems() {
        localStorage.removeItem('cart'); // Clearing cart from local storage
        setTimeout(() => {
          window.location.reload()
        }, 750);
        alert('Thank you for Purchasing!');
      }
    }
  }
  </script>