<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="container-fluid">
      <h2 class="strong text-dark">Edit User</h2>
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="First Name" v-model="user.firstName">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="Last Name" v-model="user.lastName">
      </div>
      <div class="mb-3">
        <input type="number" class="form-control input-field" required placeholder="Age" v-model="user.userAge">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control input-field" required placeholder="Gender" v-model="user.gender">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control input-field" required placeholder="Email" v-model="user.email">
      </div>
      <div class="mb-3">
        <div class="row align-items-center">
          <div class="col">
            <input
              class="form-control input-field"
              required
              placeholder="Password"
              v-model="user.password"
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
        <button type="button" class="btn btn-primary" @click="updateUser">Save Changes</button>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        email: '',
        password: ''
      },
      passwordFieldType: 'password', // to toggle password visibility
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const userCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userAuthenticated='));
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error('Invalid user data format:', userData);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.log('No user data available in cookies');
      }
    },
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    updateUser() {
      const userCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userAuthenticated='));
      if (userCookie) {
        const updatedUserCookie = `userAuthenticated=${JSON.stringify({ result: this.user })};expires=Thu, 01 Jan 2026 00:00:00 UTC;path=/;`;
        document.cookie = updatedUserCookie;
        Swal.fire('Success', 'User details updated successfully!', 'success');
      } else {
        console.error('No user is currently logged in.');
        Swal.fire('Error', 'No user is currently logged in.', 'error');
      }
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
  background-image: url('https://iili.io/JXMtCOb.png');
}

.container-fluid {
  background-color:  #ffffff76;
  width: 50%;
  border-radius: 15px;
}

.input-field {
  width: 100%;
  height: 40px;
}

.view-password-btn {
  margin-top: 8px;
}
</style>
