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
  transition: 0.5s ease-out;
  background-color: #40B883;
  border: solid 2px black;
  color: white;
  
}

a {
      text-decoration: none;
      color: grey;
}

a:hover {
  color: black;
}
</style>
