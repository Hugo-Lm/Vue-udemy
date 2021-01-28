<template>
  <h1>My infos : </h1>
  <active-user 
    :name="myName" 
    :age="myAge">
  </active-user>
  <user-data
    @new-data="updateData">
  </user-data>
</template>

<script>
// import UserData from './components/UserData.vue';
// import ActiveUser from './components/ActiveUser.vue'
export default {
  // components: { UserData },
  // components: { ActiveUser },
  data() {
    return {
      myName: 'Hugo',
      myAge: 25
    }
  },
  methods: {
    updateData(name, age) {
      this.myName = name;
      this.myAge = age;
    }
  }
}
</script>