<template>
  <button type="button" class="btn custom-btn" @click="showModal = true">Add User</button>
  <div class="modal" :class="{ 'show': showModal }">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add User</h1>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" required placeholder="User ID" v-model="payload.userID">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" required placeholder="First Name" v-model="payload.firstName">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" required placeholder="Last Name" v-model="payload.lastName">
          </div>
          <div class="mb-3">
            <input type="number" class="form-control w-50 mx-auto" required placeholder="Age" v-model="payload.userAge">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" required placeholder="Gender" v-model="payload.gender">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="register">Save changes</button>
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
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        emailAdd: "",
        userRole: "",
        userPwd: ""
      }
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", this.payload);
        this.closeModal();
        Swal.fire({
          title: "Added Successful",
          text: "User has been added successfully!",
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
          text: "Failed to add user",
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
.modal {
  display: none
}
.modal.show {
  display: block;
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

