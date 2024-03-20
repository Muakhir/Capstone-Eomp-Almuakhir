<template>
  <div v-if="loading">
    <span><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></span>
  </div>
  <main class="container-fluid">
    <div class="row">
      <div class="col text">
        <h2>WELCOME TO <span class="mill" style="--i: 1">MILLENIUM</span></h2>
      </div>
      <div class="row">
        <div class="col">
          <img class="Himg" src="https://iili.io/JXSBe0g.jpg" alt="">
        </div>
        <div class="col">
          <img class="Himg" src="https://iili.io/JXSBUeR.jpg" alt="">
        </div>
      </div>
    </div>
  </main>
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
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

<style scoped>
main{
  background-image: url('https://iili.io/JXSnIwl.png');
  padding: 50px;
}
.mill{
  color: #36cac0;
}
h2{
  padding: 50px;
  font-weight: 600;
}

.Himg {
  border-radius: 25px;
  width: 300px;
  height: 400px;
  box-shadow: 5px 5px 15px #040404;
  border: #ffff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.Himg:hover {
  transform: scale(1.05);
  box-shadow: 5px 15px 20px #10100f;
}

.text span {
  animation: zoomup 2s linear infinite;
  animation-delay: calc(200ms * var(--i));
}

@keyframes zoomup {
  0%,
  100% {
  color: #36cac0;
    filter: blur(1px);
    text-shadow: 0 0 10px #36cac0, 0 0 20px #e4e2dd, 0 0 30px #e4e2dd,
      0 0 40px #36cac0, 0 0 60px #637074, 0 0 80px #637074, 0 0 100px #637074;
  }

  5%,
  95% {
    filter: blur(0);
    color: #36cac0;
    text-shadow: none;
  }
}

</style>


