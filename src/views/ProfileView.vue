<template>
  <div id="app">
    <div class="container">
      <h1>Profile Page</h1>
      <div v-if="user">
        <p><strong>First Name:</strong> {{ user.firstName }}</p>
        <p><strong>Last Name:</strong> {{ user.lastName }}</p>
        <p><strong>Age:</strong> {{ user.userAge }}</p>
        <p><strong>Email:</strong> {{ user.emailAdd }}</p>
        <button class="btn btn-primary" @click="editUser">Edit Profile</button>
        <button class="btn btn-danger delete-btn" @click="confirmDeleteUser">Delete Account</button>
        <button class="btn btn-secondary" @click="confirmLogout">Logout</button>
      </div>
      <div v-else>
        <p>No user data available</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: null,
      userID: ''
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('userAuthenticated='));
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
    editUser() {
      this.$router.push('/updateProfile');
    },
    confirmDeleteUser() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover your account!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser();
        }
      });
    },
    async deleteUser() {
      try {
        await this.$store.dispatch("deleteUser", { id: this.user.userID });
        this.logout();
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('Error', 'Failed to delete user.', 'error');
      }
    },
    confirmLogout() {
      Swal.fire({
        title: 'Logout',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logout();
        }
      });
    },
    logout() {
      document.cookie = 'userAuthenticated=;path=/;';
      setTimeout(() => {
        window.location.reload();
        window.location.reload();
      }, 1000);
      this.$router.push('/login');
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
