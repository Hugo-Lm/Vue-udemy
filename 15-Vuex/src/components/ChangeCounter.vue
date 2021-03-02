<template>
  <button @click="increaseOf(10)">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addTen() {
    //   this.$store.dispatch('increaseOf', 10)
    // }
    ...mapActions(['increaseOf'])
  }
}
</script>