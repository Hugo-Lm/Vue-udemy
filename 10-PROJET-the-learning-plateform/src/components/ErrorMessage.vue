<template>
  <teleport to="#app">
    <div class="error-message">
      <h2>Error - input missing</h2>
      <p>An input is missing, please fill all the input</p>
      <button @click="disableError">Okay</button>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ['disable-error'],
  methods: {
    disableError() {
      this.$emit('disable-error')
    }
  }
}
</script>

<style scoped>
.error-message {
  position:fixed;
  top: 20%;
  left: 40%;
  background-color: white;
  width: 20%;
  text-align: center;
  border: 1px black solid;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>