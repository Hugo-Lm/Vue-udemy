const app = Vue.createApp({
  data() {
    return {
      actualUserClass: '', 
      isVisible: true,
      isHidden: false,
      choosenBackgroundColor: ''
    }
  },
  methods: {
    toggleVisible: function() {
      this.isVisible = !this.isVisible;
      this.isHidden = !this.isHidden
    },
    chooseBackgroundColor: function(event) {
      this.choosenBackgroundColor = event.target.value;
    }
  }
});

app.mount("#assignment")

// essayer avec v-bind:value="actualUserClass"