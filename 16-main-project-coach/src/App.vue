<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
body {
  background-color:#40B883;
  margin: 0;
  padding: 0;
}

.container {
  width: 75%;
  margin: 0 auto;
}
</style>