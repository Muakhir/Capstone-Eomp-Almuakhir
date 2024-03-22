<template>
  <div id="app">
    <div class="container">
      <h1>Profile Page</h1>
      <div v-if="user" class="user-info">
        <p><strong>First Name:</strong> {{ user.firstName }}</p>
        <p><strong>Last Name:</strong> {{ user.lastName }}</p>
        <p><strong>Age:</strong> {{ user.userAge }}</p>
        <p><strong>Email:</strong> {{ user.emailAdd }}</p>
      </div>
      <div v-else>
        <p>No user data available</p>
      </div>
      <div class="buttons">
        <button class="btn btn-custom" @click="editUser">Edit Profile</button>
        <button class="btn btn-danger delete-btn" @click="confirmDeleteUser">Delete Account</button>
        <button class="btn btn-custom" @click="confirmLogout">Logout</button>   
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
  height: 100vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
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

.btn-custom,
.delete-btn {
  color: #ca3679;
  background-color: #afabab76;
  border-color: #676665;
  transition: transform 0.2s; /* Add transition for scaling effect */
}

.btn-custom:hover,
.delete-btn:hover {
  color: #fff;
  background-color: #ca3679;
  border-color: #36676665;
  transform: scale(1.05); /* Scale the button on hover */
}

.buttons {
  margin-top: 20px;
}

.user-info p {
  margin-bottom: 10px;
}

.buttons button {
  margin-right: 10px;
}

</style>
