<template>
  <form>
    <label for="name">Name:</label>
    <input v-model="newName" type="text" id="name">
    <label for="phone">Phone:</label>
    <input v-model="newPhone" type="text" id="phone">
    <label for="email">E-mail:</label>
    <input v-model="newEmail" type="text" id="email">
    <input @click="sendNewContact" type="submit" value="+">
  </form>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
      newPhone: '',
      newEmail: ''
    }
  },
  methods: {
    sendNewContact(event) {
      // this.$emit
      event.preventDefault();
      this.$emit('add-a-friend', this.newName, this.newPhone, this.newEmail)
    }
  }
}
</script>