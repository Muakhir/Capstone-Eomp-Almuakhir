<template>
    <div class="container-fluid">
      <div class="mb-3">
        <input type="email" class="form-control w-50 mx-auto" required placeholder="Email" v-model="payload.emailAdd">
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <input
              class="form-control w-50 mx-auto"
              required
              placeholder="Password"
              v-model="payload.userPwd"
              :type="passwordFieldType"
            />
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary me-5 view-password-btn" @click="togglePasswordVisibility">
              <i class="fas" :class="passwordVisibilityIcon"></i>
            </button>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payload: {
          emailAdd: "",
          userPwd: ""
        },
        showPassword: false
      };
    },
    methods: {
      async login() {
        try {
          const { token } = await this.$store.dispatch('login', {
            emailAdd: this.payload.emailAdd,
            userPwd: this.payload.userPwd,
          });
  
          if (token) {
            localStorage.setItem('authToken', token);
            this.$router.push('/');
          } else {
            // Handle error message display if necessary
          }
        } catch (e) {
          // Let Vuex action handle error
          console.error('Error during login:', e);
        }
      },
      redirectToRegisterPage() {
        this.$router.push({ name: 'register' });
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
  /* Add your custom styles here */
  </style>
  
