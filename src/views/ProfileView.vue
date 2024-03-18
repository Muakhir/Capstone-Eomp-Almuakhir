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
        <button class="btn btn-danger delete-btn" @click="deleteUser">Delete Account</button>
      </div>
      <div v-else>
        <p>No user data available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
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
      this.$router.push( '/updateProfile' );
    },
    async deleteUser() {
      try {
        await this.$store.dispatch('deleteUser', { id: this.user._id });
        this.fetchUserData(); // Fetch updated user data after deletion
        this.$router.push('/login');
      } catch (error) {
        console.error('Error deleting user:', error);
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



  

  
  
