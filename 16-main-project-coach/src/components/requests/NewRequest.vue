<template>
  <div class="requests-container">
    <h2>New request</h2>
    <h3>{{  }}</h3>
    <button @click="backToHome">Retour au menu principal</button>
    <form action="/coaches" method="post">
      <div>
        <label for="pseudo">Pseudo :</label>
        <input type="text" id="pseudo" v-model="pseudo">
      </div>
      <div>
        <label for="message">Message :</label>
        <input type="textarea" id="message" v-model="message">
      </div>
      <div>
        <input type="submit" value="Register" @click="sendNewRequest">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return{
      pseudo: '',
      message: '',
      id: this.$route.params.id
      }
  },
  methods:{
    backToHome() {
      this.$router.push('/coaches')
    },
    sendNewRequest() {
      fetch("https://udemy-vue-coach-project-default-rtdb.firebaseio.com/requests.json", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          pseudo: this.pseudo,
          message: this.message,
          coachId: this.id,
        })
      })
      this.$store.dispatch('fetchRequests')
      this.$router.push('/coaches')
    }
  }
}
</script>


<style scoped>
.requests-container{
  width: 50%;
  margin: auto;
}
</style>
