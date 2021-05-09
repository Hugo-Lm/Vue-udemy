<template>
  <div class="main-coaches-list">
    <h2>Discover our coaches !</h2>
    <div class="button-block">
      <base-button @click.prevent="fetchCoachesButton">Update coache's list</base-button>
      <base-button @click.prevent="addACoach">New coach?</base-button> 
    </div> 
      <h2>Filter the coachs</h2>
      <input type="checkbox" id="workout" checked @change="setExpertises"/>
      <label for="workout">Workout</label>
      <input type="checkbox" id="cardio" checked @change="setExpertises"/>
      <label for="cardio">Cardio</label>
      <input type="checkbox" id="nutrition" checked @change="setExpertises"/>
      <label for="nutrition">Nutrition</label>
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
      expertisesSelected: ["workout", "cardio", "nutrition"]
    }
  },
  methods: {
    fetchCoachesButton() {
      this.$store.dispatch('fetchCoaches')
      this.$store.dispatch('fetchRequests')
    },
    addACoach() {
      this.$router.push('/register')
    },
    setExpertises(event) {
      if (event.target.checked) {
        this.expertisesSelected.push(event.target.id)
      } else {
        const index = this.expertisesSelected.indexOf(event.target.id)
        this.expertisesSelected.splice(index, 1)
      }
    }
  },
  computed: {
    coaches() {
      if (this.expertisesSelected.length == 3) {
        return this.$store.state.coaches.allCoaches;
      }
      else {
        // return this.$store.state.coaches.allCoaches.filter(coach => coach.expertises.includes(this.expertisesSelected))
        return this.$store.state.coaches.allCoaches.filter(coach => coach.expertises.find(expertise => this.expertisesSelected.includes(expertise)))
      }
    }
  },
  watch: {
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
