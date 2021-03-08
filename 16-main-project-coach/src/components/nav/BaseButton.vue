<template>
  <button>
    <a :href="link">
      <slot></slot>
    </a>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    link: String
  }
}
</script>

<style scoped>
button {
  background-color: white;
  border-radius: 5px;
  padding: 12px;
  border: solid 2px grey;
  color: grey;
}

button:hover {
  border: solid 2px black;
  color: black;
}

a {
      text-decoration: none;
      color: grey;
}

a:hover {
  color: black;
}
</style>
