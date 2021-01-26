const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskToAdd: '',
      showList: true
    }
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List'
    }
  },
  methods: {
    addTask: function() {
      this.tasks.push(this.taskToAdd)
    },
    toggleList: function() {
      this.showList = !this.showList
    }
  }
});

app.mount('#assignment');