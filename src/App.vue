<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <NavBar />
  <router-view/>
  <FooterVue />
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import FooterVue from "@/components/Footer.vue"

export default {
  components: {
    NavBar, FooterVue
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

::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255); 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background:linear-gradient(72.5deg, #4a4547 30%, #38383d6d 79%);; 
  border-radius: 10px;
}
</style>

