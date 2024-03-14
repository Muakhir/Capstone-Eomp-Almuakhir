<template>
  <div v-if="loading">
    <span><SpinnerVue></SpinnerVue></span>
    <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
  </div>
  <div>
    <header></header>
    <div class="container-fluid">
      <div class="row">
        <h2 class="display-2">Home</h2>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit quaerat repellendus maiores a magni minima excepturi molestias in, debitis magnam itaque non harum! Nisi maxime qui nulla aperiam praesentium.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerVue from '@/components/Spinner.vue';

export default {
  name: 'HomeView',
  components: {
    SpinnerVue
  },
  data() {
    return {
      loading: true // Assuming you want to show the spinner initially
    };
  },
  mounted() {

    // Simulate some asynchronous operation
    setTimeout(() => {
      // After some time (simulated asynchronous operation), set loading to false
      this.loading = false;
    }, 2000); // Change 2000 to the actual time your operation takes
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

