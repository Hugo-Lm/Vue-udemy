<template>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("hello");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userChoice = confirm('Are you sure you want to leave? You have infos unsaved!');
      next(userChoice);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>