<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-center"> 
          <a class="navbar-brand" href="/"><img src="https://iili.io/JWOXlJs.png" loading="lazy" class="logo" alt="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav"> 
              <li class="nav-item ms-4">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item ms-4">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item ms-4">
                <router-link to="/products" class="nav-link">Products</router-link>
              </li>
              <li class="nav-item ms-4">
                <router-link to="/admin" class="nav-link">Admin</router-link>
              </li>
              <li class="nav-item ms-4">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
        </div>
        <div>
              <ul class="navbar-nav">
                <li class="nav-item ms-4">
                  <router-link to="/signup" class="nav-link Etext">Signup</router-link>
                </li>
                <li class="nav-item ms-4">
                  <router-link to="/login" class="nav-link Etext">Login</router-link>
                </li>
                <li class="nav-item ms-4">
                  <router-link to="/Profile" class="nav-link Etext">Profile</router-link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
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
    color: #caa036;
  }
  
  .nav-link.Etext:hover {
    color: #000000;
    box-shadow: 2px 2px 2px #000000;
  }
  .nav-link.router-link-exact-active {
    color: #caa036; 
  }
  #navbarNav{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  </style>
  
  

  
  
  
  