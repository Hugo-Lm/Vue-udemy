<template>
  <div class="list-container">
    <div class="coach-main-panel-and-infos">
      <div class="coach-main-panel" :class="{infoExtraSpace: infoPanelOpen}">
        <div>
          <h3>{{ firstName }} {{ lastName }}</h3>
          <p>{{ rate }}€/h</p>
          <div class="expertises-list"> 
            <div v-for="expertise in expertises" :key="expertise" class="expertise-block">
              <coach-expertise :expertise="expertise"></coach-expertise>
            </div>
          </div>
          <br>
          <button @click="toggleComments">
            +
          </button>
        </div>
        <div class="button-nav">
          <div>
            <base-button @click="toggleInfos">More infos</base-button>
          </div>
          <div>
            <base-button @click="newRequest">Send a request</base-button>
          </div>
        </div>
      </div>
      <div v-if="infoPanelOpen" class="info-space">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="coach-request" :class="{ 'hidden-block': !showRequests }">
      <div v-for="request in coachRequests" :key="request.coachId">
        <p>{{ request.pseudo }} : <i>"{{ request.message }}"</i></p>
      </div>
    </div>
  </div> 
</template>

<script>
import CoachExpertise from './CoachExpertise.vue'
import BaseButton from '../nav/BaseButton.vue'

export default {
  name: "CoachCard",
  components: { CoachExpertise, BaseButton },
  props: {
    id: String,
    firstName: String,
    lastName: String,
    description: String,
    rate: Number,
    expertises: Array
  },
  data() {
    return {
      infoPanelOpen: false,
      showRequests: false
    }
  },
  computed: {
    linkToMoreDetails() {
      return '/coaches/' + this.id
    },
    coachRequests() {
      return this.$store.state.requests.allRequests.filter(request => request.coachId == this.id)
    }
  },
  methods: {
    toggleInfos() {
      this.infoPanelOpen = !this.infoPanelOpen
    },
    newRequest() {
      this.$router.push('/new-request/' + this.id)
    },
    toggleComments() {
      this.showRequests = !this.showRequests
    }
  }
}
</script>

<style scoped>
.list-container{
  margin-bottom: 26px;
  background-color: white;
  margin-top: 26px;
  border-radius: 8px;
}

.coach-main-panel-and-infos {
  display: flex;
}

.coach-main-panel {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 2px 2px 27px rgb(0 0 0 / 20%); */
  width: 100%
}

.infoExtraSpace {
  width: 70%;
}

.info-space {
  width: 30%;
  border-radius: 8px;
  background-color: #ceecd0;
  text-align: center;
}

h3 {
  font-size: 32px;
  margin-top: 0;
}

.expertises-list {
  display: flex;
}

.expertise-block {
  margin-right: 16px;
  font-size: 14px;
  background-color: red;
  padding: 8px 16px;
  border-radius: 18px;
  color: white;
}

.coach-request{
  color: grey;
  font-size: 14px;
  padding: 0px 16px 16px 16px;
}

.button-nav{
  display: flex; 
  flex-direction:column; 
  justify-content: space-between; 
  align-items: flex-end;
}

.hidden-block{
  display: none;
}
</style>