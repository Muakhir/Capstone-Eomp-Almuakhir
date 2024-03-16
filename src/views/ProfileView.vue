<template>
    <div id="app">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>User Account</h2>
            <template v-if="user">
              <p>Firstname: {{ user.firstName }}</p>
              <p>Lastname: {{ user.lastName }}</p>
              <p>Age: {{ user.userAge }}</p>
              <p>Email: {{ user.emailAdd }}</p>
            </template>
          </div>
          <div class="col">
            <form @submit.prevent="editUserProfile" class="user-form">
              <input v-model="updateUser.firstName" placeholder="Firstname" class="form-input">
              <input v-model="updateUser.lastName" placeholder="Lastname" class="form-input">
              <input v-model="updateUser.userAge" placeholder="Age" class="form-input">
              <input v-model="updateUser.emailAdd" placeholder="Email" class="form-input">
              <input v-model="updateUser.userPwd" placeholder="Password" class="form-input">
              <button type="submit" class="btn">Edit</button>
            </form>
            <button @click="deleteUser" class="btn delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        updateUser: {
          firstName: '',
          lastName: '',
          userAge: '',
          emailAdd: '',
          userPwd: ''
        }
      };
    },
    computed: {
      ...mapState(['user']),
    },
    methods: {
      ...mapActions(['updateUser', 'deleteUser']),
      async editUserProfile() {
        try {
          await this.$store.dispatch('updateUser', { id: this.user.id, data: this.updateUser });
          Swal.fire({
            title: 'Success',
            text: 'User profile updated successfully!',
            icon: 'success'
          });
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: 'Failed to update user profile.',
            icon: 'error'
          });
          console.error('Error updating user profile:', error);
        }
      },
      async deleteUser() {
        try {
          await this.$store.dispatch('deleteUser', { id: this.user.id });
          Swal.fire({
            title: 'Deleted!',
            text: 'User account has been deleted.',
            icon: 'success'
          });
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: 'Failed to delete user account.',
            icon: 'error'
          });
          console.error('Error deleting user account:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #app {
    margin: 0;
    padding: 0;
    background-image: url('https://iili.io/JX9Ov5J.png');
    background-size: cover;
    background-position: center;
    height: 100vh; /* Ensure the background covers the entire viewport height */
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px; /* Add padding to keep content away from the edges */
    background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background to improve readability */
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  
  .col {
    flex: 0 0 48%;
  }
  
  .user-form {
    margin-bottom: 20px;
  }
  
  .form-input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .delete-btn {
    background-color: #dc3545;
  }
  </style>
  

  
  
