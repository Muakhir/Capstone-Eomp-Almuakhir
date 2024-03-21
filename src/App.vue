<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&display=swap');
@import '~@fortawesome/fontawesome-free/css/all.min.css';

#app {
  font-family: 'Ysabeau SC', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  background-color: #ffffff;
  background-size: cover; 
  background-position: center; 
  color: #ffffff;
}
</style>

