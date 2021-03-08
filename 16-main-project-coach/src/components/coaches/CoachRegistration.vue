<template>
  <form action="/coaches" method="post" @submit.prevent="goBackToMenu">
    <div>
      <label for="firstName">First name :</label>
      <input type="text" id="firstName" v-model="firstName">
    </div>
    <div>
      <label for="lastName">Last name :</label>
      <input type="text" id="lastName" v-model="lastName">
    </div>
    <div>
      <label for="description">Describe yourself !</label>
      <textarea type="textarea" id="description" v-model="descr"></textarea>
    </div>
    <div>
      <label for="rate">Rate :</label>
      <input type="number" id="rate" min=0 v-model="rate">
    </div>
    <p>Your area of expertises :</p>
    <div>
      <input type="checkbox" id="chkMuscu" value="workout" v-model="expertises">
      <label for="chkMuscu">Workout</label>
    </div>
    <div>
      <input type="checkbox" id="chkCardio" value="cardio" v-model="expertises">
      <label for="chkCardio">Cardio</label>
    </div>
    <div>
      <input type="checkbox" id="chkNutrition" value="nutrition" v-model="expertises">
      <label for="chkNutrition">Nutrition</label>
    </div>
    <div>
      <input type="submit" value="Register" @click="sendDataNewCoache">
    </div>
  </form>
  <p>{{ expertises }}</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      descr: '',
      rate: 0,
      expertises: []
    }
  },
  methods: {
    sendDataNewCoache() {
      fetch("https://udemy-vue-coach-project-default-rtdb.firebaseio.com/coaches.json", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.descr,
          rate: parseInt(this.rate, 10),
          expertises: this.expertises
        })
      })
      this.$router.push('/coaches')
    }
  }
}
</script>

<style scoped>
form {
  width: 50%;
  margin: 24px auto;
  background-color: white;
  padding: 16px;
  margin-top: 26px;
  border-radius: 8px;
  /* box-shadow: 2px 2px 27px rgb(0 0 0 / 20%); */
  margin-bottom: 26px;
}
</style>