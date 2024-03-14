<template>
  <div class="spinner-grow bg-black" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: 'SpinnerVue'
};
</script>

<style scoped>
.spinner-grow {
  width: 2rem;
  height: 2rem;
  border: 5px double solid gold; /* Set the border color to black */
  border-top-color: transparent; /* Set the top border to transparent to create the spinner effect */
  border-radius: 50%;
}

</style>











  