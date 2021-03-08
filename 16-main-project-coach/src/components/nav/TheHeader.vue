<template>
  <header>
    <h1 class="text-primary">Coach'ella</h1>
    <div class="button-block">
      <base-button @click.prevent="goToCoaches">Coaches</base-button>
      <base-button @click.prevent="goToRequests">Requests</base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  components: { BaseButton },
  methods: {
    goToCoaches() {
      this.$router.push('/coaches')
    },
    goToRequests() {
      this.$router.push('/requests')
    }
  }
}
</script>

<style scoped>
header {
  background-color: #35495E;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button-block {
  display: flex;
  width: 20%;
  justify-content: space-between;
}

h1 {
  color: rgb(226, 226, 226);
  margin: 0;
  padding: 20px;
}
</style>