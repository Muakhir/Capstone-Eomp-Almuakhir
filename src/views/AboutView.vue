<template>
  <div v-if="!loading">
    <span><SpinnerVue></SpinnerVue></span>
    <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
  </div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import SpinnerVue from '@/components/Spinner.vue';

export default {
  name: 'AboutView',
  components: {
    SpinnerVue
  },
  data() {
    return {
      loading: false // Assuming you want to show the spinner initially
    };
  },
  mounted() {
    // Simulate some asynchronous operation
    setTimeout(() => {
      // After some time (simulated asynchronous operation), set loading to false
      this.loading = true;
    }, 2000); // Change 2000 to the actual time your operation takes
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

