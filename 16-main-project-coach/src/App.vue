<template>
  <div class="container">
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  beforeMount() {
    this.$store.dispatch('fetchCoaches')
    this.$store.dispatch('fetchRequests')
  },
};
</script>

<style>
body {
  background-color:#40B883;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

/* .container {
  width: 65%;
  margin: 0 auto;
} */

.route-enter-from{
  opacity: 0.8;
  transform: translateY(-30px);
}

.route-leave-to{
  opacity: 0.8;
  transform: translateY(30px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-active{
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>