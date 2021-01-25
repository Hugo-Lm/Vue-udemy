const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
    }
  },
  methods: {
    showAlert() {
      alert("This is an alert!")
    },
    setName(event) {
      this.name = event.target.value
    },
    setConfirmedName(event) {
      this.confirmedName = event.target.value
    }
  }
});

app.mount("#assignment");