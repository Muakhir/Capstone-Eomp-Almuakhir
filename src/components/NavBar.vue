<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="/"><img src="https://iili.io/JWOXlJs.png" loading="lazy" class="logo" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item" v-if="!loggedInUser">
              <router-link to="/signup" class="nav-link Etext">Signup</router-link>
            </li>
            <li class="nav-item" v-if="!loggedInUser">
              <router-link to="/login" class="nav-link Etext2">Login</router-link>
            </li>
            <li class="nav-item" v-if="loggedInUser">
              <router-link to="/profile" class="nav-link Etext3">Profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      // Fetch user data from cookies
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('userAuthenticated='));
      // If user cookie exists, parse and return user data
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            return userData.result;
          } else {
            console.error('Invalid user data format:', userData);
            return null;
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
          return null;
        }
      } else {
        return null;
      }
    },
    isAdmin() {
      return this.loggedInUser && this.loggedInUser.userRole === "Admin";
    },
  },
}
</script>


<style scoped>
.logo {
  width: 100px;
  border-radius: 15px;
  animation: logo-animation 2s ease-in-out infinite alternate;
}

@keyframes logo-animation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

a {
  font-weight: bold;
  color: #000000;
  transition: color 0.5s ease;
}

.nav-link:hover {
  color: #caa036;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #caa036;
}

.nav-link.Etext {
  color: #000000;
}

.nav-link.Etext:hover {
  color: #caa036;
  box-shadow: 2px 2px 2px #caa036;
}

.nav-link.Etext2 {
  color: #000000;
}

.nav-link.Etext2:hover {
  color: #36cac0;
  box-shadow: 2px 2px 2px #36cac0;
}

.nav-link.Etext3 {
  color: #000000;
}

.nav-link.Etext3:hover {
  color: #ca3679;
  box-shadow: 2px 2px 2px #ca3679;
}

.nav-link.router-link-exact-active {
  border: #000000 solid 1px;
  border-radius: 15px;
  box-shadow: 5px 5px #00000052;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    margin-top: 10px;
  }
}
</style>




  
  

  
  
  
  