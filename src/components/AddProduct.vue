<template>
    <button type="button" class="btn btn-primary" @click="showModal = true">Add Product</button>
    <div class="modal" :class="{ 'show': showModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Add Product</h1>
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
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary" @click="AddProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
  
  export default {
    name: "AddUser",
    data() {
      return {
        showModal: false,
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
      async AddProduct() {
        try {
          await this.$store.dispatch("AddProduct", this.payload);
          // Close modal after successful registration
          this.closeModal();
          // Show success message
          Swal.fire({
            title: "Added Successful",
            text: "Product has been added successfully!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000)
        } catch (error) {
          console.error(error);
          // Show error message
          Swal.fire({
            title: "Error",
            text: "Failed to add Product",
            icon: "error",
            timer: 2000
          });
        }
      },
      closeModal() {
        // Close modal
        this.showModal = false;
        // Clear form fields
        this.payload = {
          userID: "",
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          emailAdd: "",
          userRole: "",
          userPwd: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  .modal {
    display: none;
    /* Other modal styles */
  }
  .modal.show {
    display: block;
  }
  </style>