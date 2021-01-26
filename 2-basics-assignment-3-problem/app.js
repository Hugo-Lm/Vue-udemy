const app = Vue.createApp({
  data: function() {
    return {
      result: 0
    }
  },
  watch: {
    message() {
      let that = this
      setTimeout(function() {
        that.result = 0;
      }, 5000)
    }
  },
  computed: {
    message() {
      console.log(this.result);
      if (this.result < 37) {
        return "Not there yet!"
      } else if (this.result  > 37) {
        return "Too much!"
      } else {
        return this.result
      }
    }
  },
  methods: {
    add(number) {
      this.result += number;
    }
  }
});

app.mount('#assignment')