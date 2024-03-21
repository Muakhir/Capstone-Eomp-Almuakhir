<template>
    <button type="button" class="btn custom-btn" @click="showModal = true">Add Product</button>
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
            <button type="button" class="btn" @click="closeModal">Close</button>
            <button type="button" class="btn" @click="AddProduct">Save changes</button>
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
          this.closeModal();
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

          Swal.fire({
            title: "Error",
            text: "Failed to add Product",
            icon: "error",
            timer: 2000
          });
        }
      },
      closeModal() {
        this.showModal = false;
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
  .modal.show {
    display: block
}
.custom-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(252, 252, 252);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

.custom-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ca3679;
  transform: scale(1.1);
}
  </style>