<template>
  <button v-if="!isLogged" @click="switchIsAuth">Login</button>
  <button v-else @click="switchIsAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // logginInOrOut() {
    //   // this.$store.state.isLogged = !this.$store.state.isLogged
    //   // this.$store.commit('switchIsAuth')
    //   this.$store.dispatch('switchIsAuth')
    // }
     ...mapActions(['switchIsAuth'])
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
}
</script>