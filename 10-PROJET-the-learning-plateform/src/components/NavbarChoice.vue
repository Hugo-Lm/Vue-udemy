<template>
  <base-card>
    <button @click="switchPannel" :class="{ active: storedResourcesIsActive }">Stored Resources</button>
    <button @click="switchPannel" :class="{ active: addresourcesIsActive }">Add Resource</button>
  </base-card>
</template>

<script>
export default {
  props: {
    storedResourcesIsActive: {
      type: Boolean,
      required: true
    },
    addresourcesIsActive: {
      type: Boolean,
      required: true
    }
  },
  // data() {
  //   return {
  //     storedResourcesIsActive: true,
  //     addresourcesIsActive: false
  //   }
  // },
  emits: ['switch-panel'],
  methods: {
    switchPannel() {
      // this.storedResourcesIsActive = !this.storedResourcesIsActive;
      // this.addresourcesIsActive = !this.addresourcesIsActive;
      this.$emit('switch-panel');
    }
  }
}
</script>

<style scoped>
button {
  background-color: white;
  color: blue;
  padding: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.active {
  background-color: rgb(85, 85, 255);
  color: white;
}
</style>