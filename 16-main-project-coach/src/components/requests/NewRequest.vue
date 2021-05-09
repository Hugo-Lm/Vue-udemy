<template>
  <div class="requests-container">
    <h3>New request</h3>
    <button @click="backToHome">Retour au menu principal</button>
    <form action="/coaches" method="post">
      <div :class="{ invalid: !pseudo.isValid }">
        <label for="pseudo">Pseudo :</label>
        <input type="text" id="pseudo" v-model="pseudo.val">
      </div>
      <div :class="{ invalid: !message.isValid }">
        <label for="message">Message :</label>
        <input type="textarea" id="message" v-model="message.val">
      </div>
      <div>
        <input type="submit" value="Register" @click.prevent="sendNewRequest">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return{
      pseudo: {
        val: '',
        isValid: true
      },
      message: {
        val: '',
        isValid: true
      },
      id: this.$route.params.id,
      validForm: true
    }
  },
  methods:{
    backToHome() {
      this.$router.push('/coaches')
    },
    validateForm() {
      this.validForm = true
      if (this.pseudo.val === "") {
        this.pseudo.isValid = false;
        this.validForm = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.validForm = false;
      }
    },
    sendNewRequest() {
      this.validateForm()
      if (!this.validForm) {
        return;
      } 
      else {
        fetch("https://udemy-vue-coach-project-default-rtdb.firebaseio.com/requests.json", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            pseudo: this.pseudo.val,
            message: this.message.val,
            coachId: this.id,
          })
        })
        this.$router.push('/coaches')
      }
    }
  }
}
</script>


<style scoped>
.requests-container{
  width: 50%;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  margin-top: 16px;
}

.invalid{
  color: red;
}
</style>
