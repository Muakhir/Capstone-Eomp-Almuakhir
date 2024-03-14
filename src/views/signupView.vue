<template>
    <div class="container-fluid">
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
            <input type="email" class="form-control w-50 mx-auto" required placeholder="Email" v-model="payload.emailAdd">
          </div>
          <div class="mb-3">
              
              <div class="row">
                  <div class="col">
                </div>
                <input
                class="form-control w-50 mx-auto"
                required
                placeholder="Password"
                v-model="payload.userPwd"
                :type="passwordFieldType"
                />
                <div class="col">
            <button type="button" class="btn btn-secondary me-5 view-password-btn" @click="togglePasswordVisibility"><i class="fas" :class="passwordVisibilityIcon"></i></button>
            
        </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary" @click="register">Register</button>
  </div>
  
</template>

<script>
import Swal from 'sweetalert2'
    export default {
        data(){
            return{
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
        // Show error message
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
  },
}
</script>

<style scoped>

</style>