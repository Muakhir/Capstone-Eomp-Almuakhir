<template>
  <main>

    <div class="container">
      <div class="mt-3">
        <h1>Cart</h1>
        <div v-if="cartItems.length === 0">
          <p>Your cart is empty.</p>
        </div>
        <div v-else>
          <div class="table-responsive ">
            <table class="table table-hover tb1">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cartItems" :key="index">
                  <td>{{ item.prodName }}</td>
                  <td>
                    <button @click="decreaseQuantity(index)" v-if="item.prodQuantity > 1" class="btn btn-custom1">-</button>
                    {{ item.prodQuantity }}
                    <button @click="increaseQuantity(index)" class="btn btn-custom1">+</button>
                  </td>
                  <td>{{ item.prodAmount }}</td>
                  <td><button @click="removeItem(index)" class="btn btn-custom1">Remove</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="total-amount">Total Amount: R{{ totalAmount }}</div> <!-- corrected total price -->
          <div class="mt-3 mb-3">
            <button @click="purchaseItems" class="btn btn-custom">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  computed: {
    cartItems() {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
      } catch (error) {
        this.showErrorAlert("Error loading cart items");
        return [];
      }
    },
    totalAmount() {
      try {
        const total = this.cartItems.reduce((total, item) => total + (item.prodQuantity * item.prodAmount), 0);
        return total.toFixed(2);
      } catch (error) {
        this.showErrorAlert("Error calculating total price");
        return 0;
      }
    }
  },
  methods: {
    decreaseQuantity(index) {
      if (this.cartItems[index].prodQuantity > 1) {
        this.cartItems[index].prodQuantity--;
        this.saveCart();
        window.location.reload(this.cartItems);
      }
    },
    increaseQuantity(index) {
      this.cartItems[index].prodQuantity++;
      this.saveCart();
      window.location.reload(this.cartItems);
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      this.saveCart();
      window.location.reload(this.cartItems);
    },
    purchaseItems() {
      try {
        localStorage.removeItem('cart');
        Swal.fire({
          title: 'Congratulations!',
          html: '<p style="color: green;">You just bought some awesome stuff!</p>',
          imageUrl: 'https://iili.io/JhqsxoB.jpg',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Purchased Items',
          animation: true,
          confirmButtonText: 'Yay!',
          customClass: {
            confirmButton: 'btn btn-success',
          }
        });
        setTimeout(() => {
          window.location.reload(this.cartItems);
        }, 5000);
      } catch (error) {
        this.showErrorAlert("Error purchasing items");
      }
    },
    saveCart() {
      try {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      } catch (error) {
        this.showErrorAlert("Error saving cart items");
      }
    },
    showErrorAlert(message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      });
    }
  }
}
</script>

<style scoped>
main{
  background-image: url('https://iili.io/JhqbuKN.png');
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

button.btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(255, 253, 253);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

table.tb1{
  background-color: rgba(120, 122, 124, 0.642)
}

button.btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #3ce3ec;
  transform: scale(1.1);
}

button.btn-custom1 {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(0, 0, 0);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

button.btn-custom1:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ca3679;
  transform: scale(1.1);
}
</style>



