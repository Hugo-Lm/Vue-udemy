<template>
  <form>
    <label for="name">New name:</label>
    <input type="text" id="name" v-model="newName">
    <label for="age">New age:</label>
    <input type="text" id="age" v-model="newAge">
    <input type="submit" @click="sendNewData">
  </form>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
      newAge: ''
    }
  },
  methods: {
    sendNewData(event) {
      event.preventDefault();
      this.$emit('new-data', this.newName, parseInt(this.newAge))
    }
  }
}
</script>