<template>
  <base-container title="Vuex" v-if="isLogged">
    <the-counter></the-counter>
    <button @click="addOne()">Add 1</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Authentification">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter, 
    UserAuth
  },
  methods: {
    addOne() {
      this.$store.commit('increment')
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>