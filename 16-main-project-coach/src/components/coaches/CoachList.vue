<template>
  <div class="main-coaches-list">
    <h2>Discover our coaches !</h2>
    <div class="button-block">
      <base-button @click.prevent="fetchCoachesButton">Update coache's list</base-button>
      <base-button @click.prevent="addACoach">+</base-button> 
    </div> 
    <div v-for="coach of allCoaches" :key="coach.id"> 
      <coach-container 
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :description="coach.description"
        :rate="coach.rate"
        :expertises="coach.expertises"
      ></coach-container>
    </div>  
  </div>
</template>

<script>
import CoachContainer from './../ui/CoachContainer.vue'
import BaseButton from './../nav/BaseButton.vue'

export default {
  components: {CoachContainer, BaseButton }, 
  methods: {
    fetchCoachesButton() {
      this.$store.dispatch('fetchCoaches')
    },
    addACoach() {
      this.$router.push('/register')
    }
  },
  computed: {
    allCoaches() {
      return this.$store.state.coaches.allCoaches;
    }
  }
}
</script>

<style scoped>
.main-coaches-list {
  width: 50%;
  margin: 24px auto;
}

.button-block {
  display: flex;
  justify-content: space-between;
  width: 100%
}

h2 {
  color: white;
}
</style>
