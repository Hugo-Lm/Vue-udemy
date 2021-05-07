<template>
  <div class="main-coaches-list">
    <h2>Discover our coaches !</h2>
    <div class="button-block">
      <base-button @click.prevent="fetchCoachesButton">Update coache's list</base-button>
      <base-button @click.prevent="addACoach">New coach?</base-button> 
    </div> 
    <div>
      <label for="expertiseFilter">Filter by expertise :</label>
      <select name="expertiseFilter" id="expertiseFilter" v-model="expertiseFilterSelected">
        <option value="all" selected>All</option>
        <option value="workout">Workout</option>
        <option value="cardio">Cardio</option>
        <option value="nutrition">Nutrition</option>
      </select>
    </div>
    <div v-for="coach of coaches" :key="coach.id"> 
      <coach-card 
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :description="coach.description"
        :rate="coach.rate"
        :expertises="coach.expertises"
      ></coach-card>
    </div>  
  </div>
</template>

<script>
import CoachCard from './../ui/CoachCard.vue';
import BaseButton from './../nav/BaseButton.vue';

export default {
  components: {CoachCard, BaseButton }, 
  data() {
    return {
      expertiseFilterSelected: "all"
    }
  },
  methods: {
    fetchCoachesButton() {
      this.$store.dispatch('fetchCoaches')
      this.$store.dispatch('fetchRequests')
    },
    addACoach() {
      this.$router.push('/register')
    }
  },
  computed: {
    coaches() {
      if (this.expertiseFilterSelected == "all") {
        return this.$store.state.coaches.allCoaches;
      }
      else {
        return this.$store.state.coaches.allCoaches.filter(coach => coach.expertises.includes(this.expertiseFilterSelected))
      }
    }
  },
  watch: {
    expertiseFilterSelected() {
      
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
