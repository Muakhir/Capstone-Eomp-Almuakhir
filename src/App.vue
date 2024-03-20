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

export default{
  component:{
    NavBar
  },
  components:{
    NavBar
  }

}
</script>

<style>
@import '~@fortawesome/fontawesome-free/css/all.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
