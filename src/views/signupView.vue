<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="First Name" v-model="payload.firstName">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="Last Name" v-model="payload.lastName">
      </div>
      <div class="mb-3">
        <input type="number" class="form-control input-field" required placeholder="Age" v-model="payload.userAge">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="Gender" v-model="payload.gender">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control input-field" required placeholder="Email" v-model="payload.emailAdd">
      </div>
      <div class="mb-3">
        <div class="row align-items-center">
          <div class="col">
            <input
              class="form-control input-field"
              required
              placeholder="Password"
              v-model="payload.userPwd"
              :type="passwordFieldType"
            />
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-secondary view-password-btn" @click="togglePasswordVisibility">
              <i class="fas" :class="passwordVisibilityIcon"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-custom" @click="register">Register</button>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        emailAdd: "",
        userPwd: ""
      },
      showPassword: false
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", this.payload);
        Swal.fire({
          title: "Added Successful",
          text: "User has been added successfully!",
          icon: "success",
          timer: 3000,
          showConfirmButton: true
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
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
    passwordVisibilityIcon() {
      return this.showPassword ? 'fa-eye-slash' : 'fa-eye';
    }
  }
};
</script>

<style scoped>
main {
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-image: url('https://iili.io/JXHPMBa.png');
}

.container-fluid {
  width: 50%;
}

.input-field {
  text-align: center;
  width: 100%;
  height: 40px;
}

.view-password-btn {
  margin-top: 8px;
}

.btn-custom{
  color: #caa036;
  background-color: #fffdfd5b;
  border-color: #676665;
  transition: transform 0.2s; 
}

.btn-custom:hover {
  color: #fff;
  background-color: #caa036;
  border-color: #36676665;
  transform: scale(1.05);
}

</style>

