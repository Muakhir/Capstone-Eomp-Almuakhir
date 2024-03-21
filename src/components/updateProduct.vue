<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton custom-btn" data-bs-toggle="modal" data-bs-target="#updateProductModal">
        Update Product
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateProduct">
                        <div class="mb-3">
                            <input type="number" class="form-control w-50 mx-auto" placeholder="Product ID" v-model="payload.prodID" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Image" v-model="payload.prodImg" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control w-50 mx-auto" placeholder="Name" v-model="payload.prodName" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Category" v-model="payload.prodCategory" required>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control w-50 mx-auto" placeholder="Quantity" v-model="payload.prodQuantity" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control w-50 mx-auto" placeholder="Amount" v-model="payload.prodAmount" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" @click="updateProduct">Update</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        payload: {
          prodID: '',
          prodImg: '',
          prodName: '',
          prodCategory: '',
          prodQuantity: '',
          prodAmount: ''
        }
      };
    },
    methods: {
    async updateProduct() {
      try {
        await this.$store.dispatch('updateProduct', { id: this.payload.prodID, data: this.payload });
        Swal.fire({
          title: 'Update Product',
          icon: 'success',
          timer: 3000
        });
      } catch (error) {
        console.error('Error updating Product:', error);
        Swal.fire({
          title: 'Error',
          text: 'An error occurred when updating a Product.',
          icon: 'error',
          timer: 2000
        });
      }
    }
  }
  };
  </script>
  
  
  <style scoped>
  
  .custom-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(252, 252, 252);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

.custom-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #36cac0;
  transform: scale(1.1);
}
  </style>