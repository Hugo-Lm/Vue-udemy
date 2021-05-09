<template>
  <div class="requests-list">
    <h2>Latest comments :</h2>
    <div v-for="request in requests" :key="request">
      <div class="request-card">
        <div>
          <span>{{ request.pseudo }} ==</span>
          <span>> {{ getCoachById(request.coachId) }}</span>
        </div>
        {{ request.message }}
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from './../nav/BaseButton.vue';

export default {
  components: {
    // BaseButton
  },
  data() {
    return {
       
    }
  },
  computed: {
    requests() {
      return this.$store.state.requests.allRequests
    }
  },
  methods: {
    getCoachById(coachId) {
      const coach = this.$store.state.coaches.allCoaches.find(coach => coach.id === coachId)
      return coach.firstName + " " + coach.lastName
    }
  }
}
</script>

<style scoped>
.requests-list {
  width: 50%;
  margin: 24px auto;
}

.request-card{
    background-color: white;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 8px;
}
</style>