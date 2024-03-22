<template>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-6 mt-5">
          <div class="mb-3">
            <input type="email" class="form-control" required placeholder="Email" v-model="payload.emailAdd">
          </div>
          <div class="mb-3">
            <div class="row align-items-center">
              <div class="col">
                <input
                  class="form-control"
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
            <button type="button" class="btn btn-custom" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </main>
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
        } else {
          console.error('Login failed: Invalid credentials');
        }
      } catch (e) {
        console.error('Error during login:', e);
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
    background-image: url('https://iili.io/JXH5MX4.png');
  }
  
  .form-control {
    width: 100%;
  }
  
input{
  text-align: center;
}

  .view-password-btn {
    margin-top: 8px;
  }

  .btn-custom{
  color: #36cac0;
  background-color: #fffdfd5b;
  border-color: #676665;
  transition: transform 0.2s; /* Add transition for scaling effect */
}

.btn-custom:hover {
  color: #fff;
  background-color: #36cac0;
  border-color: #36676665;
  transform: scale(1.05); /* Scale the button on hover */
}

  </style>
  
  
  
  
