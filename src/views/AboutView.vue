<template>
  <main>
    <div v-if="loading" class="loading">
      <p><SpinnerVue></SpinnerVue><SpinnerVue></SpinnerVue></p>
    </div>
    <div v-else class="container-fluid">
      <transition name="fade">
        <div class="content" v-if="!loading">
          <h2 class="mt-5 hA">About</h2>
          <div class="container about">
            <div class="paragraph-container">
              <p class="text-lg-center">
                "At Millennium Industries, we embark on a visionary quest to redefine the online Yu-Gi-Oh card retail landscape. 
                We are not just a platform; we are the architects of an unparalleled revolution in the way enthusiasts discover, 
                engage, and indulge in their passion for Yu-Gi-Oh. Our mission is to transcend the ordinary, weaving cutting-edge technology, 
                intricate data insights, and avant-garde design into the fabric of a new era in Yu-Gi-Oh card commerce. We pledge to orchestrate a symphony of innovation, 
                creating a seamless, hyper-personalized shopping odyssey where every click, every choice, resonates with the individuality of each customer. Our commitment is not just to provide products; 
                it's to curate an immersive experience that harmonizes the aspirations and preferences of our patrons.
                Join us as we dissolve the boundaries between desire and discovery, where technology becomes an intuitive guide, steering you towards the perfect cards that complement your unique journey in Yu-Gi-Oh. 
                At Millennium Industries, we don't just sell Yu-Gi-Oh cards; we empower your dueling odyssey, transforming every purchase into a moment of personalized triumph. Welcome to a new paradigm of Yu-Gi-Oh card retail – where technology, 
                data, and design converge to craft an experience as individual as your fingerprint. Let's redefine the game together."
              </p>
            </div>
            <div class="paragraph-container">
              <p class="text-lg-center">
                Welcome, esteemed Duelists, to the exhilarating realm of Yu-Gi-Oh! Where the clash of monsters and the strategic dance of spells and traps ignite the very essence of competition! Prepare yourselves, for it's time to unleash your inner duelist and embark on a journey filled with epic battles and electrifying moments. Feel the rush as you draw your cards, each one holding the potential to turn the tide of fate in your favor. From the thundering roar of Blue-Eyes White Dragon to the cunning schemes of Dark Magician, the stage is set for legendary encounters that will echo through the annals of time!
              </p>
            </div>
            <div class="paragraph-container">
              <p class="text-lg-center">
                Gather your deck, sharpen your skills, and let the heart of the cards guide you towards victory! For in this arena, every move, every decision, carries the weight of destiny itself. But fear not, for within the confines of Millennium Industries, you'll find not only a treasure trove of coveted cards but also a vibrant community of fellow enthusiasts ready to share in the thrill of the duel.
                So, heed the call, Duelists, and step boldly into the fray! Let the echoes of "It's Time to Duel!" reverberate across the dimensions as you engage in battles of wit and strategy. With Millennium Industries as your guide, the stage is set for unforgettable adventures where the bonds forged through dueling transcend mere competition, and the spirit of Yu-Gi-Oh! burns brighter than ever before!
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </main>
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
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style scoped>
main{
  background-image: url('https://iili.io/JX8NR1I.png');
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.about {
  padding: 20px;
}

.text-light-emphasis {
  color: hsl(0, 0%, 100%);
}

.hA {
  font-size: 2rem;
  margin-bottom: 20px; 
}

.Team {
  margin-top: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff; 
  margin-bottom: 15px;
}

.paragraph-container {
  margin-bottom: 20px; 
  background-color: #75737372;
  border-radius: 15px;
}
</style>






