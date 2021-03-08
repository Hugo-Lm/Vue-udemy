<template>
  <div class="coach-super-main">
    <div class="coach-main" :class="{infoExtraSpace: infoPanelOpen}">
      <div>
        <h3>{{ firstName }} {{ lastName }}</h3>
        <p>{{ rate }}€/h</p>
        <div class="expertises-list"> 
          <div v-for="expertise in expertises" :key="expertise" class="expertise-block">
            <coach-expertise :expertise="expertise"></coach-expertise>
          </div>
        </div>
      </div>
      <div>
        <base-button @click="toggleInfos">More infos</base-button>
      </div>
    </div>
    <div v-if="infoPanelOpen" class="info-space">
      <p>{{ description }}</p>
    </div>
  </div>

 
</template>

<script>
import CoachExpertise from './CoachExpertise.vue'
import BaseButton from './../nav/BaseButton.vue'

export default {
  name: "CoachContainer",
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
    }
  },
  computed: {
    linkToMoreDetails() {
      return '/coaches/' + this.id
    }
  },
  methods: {
    toggleInfos() {
      this.infoPanelOpen = !this.infoPanelOpen
    }
  }
  
}
</script>

<style scoped>
.coach-super-main {
  display: flex;
}

.coach-main {
  background-color: white;
  padding: 16px;
  margin-top: 26px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 2px 2px 27px rgb(0 0 0 / 20%); */
  margin-bottom: 26px;
  width: 100%
}

.infoExtraSpace {
  width: 70%;
}

.info-space {
  width: 30%;
  margin-top: 26px;
  margin-bottom: 26px;
  border-radius: 8px;
  background-color: #dddddd;
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
</style>