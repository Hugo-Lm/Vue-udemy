export default {
  state() {
    return {
      allCoaches: [],
    }
  },
  mutations: {
    setCoaches(state, payload) {
      state.allCoaches = []
      for (const coach of payload) {
        state.allCoaches.push(coach);
      }
    }
  },
  actions: {
    fetchCoaches(context) {
      fetch("https://udemy-vue-coach-project-default-rtdb.firebaseio.com/coaches.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          let results = []
          for (const id in data) {
            results.push({
              id: id, 
              firstName: data[id].firstName, 
              lastName: data[id].lastName,
              description: data[id].description,
              rate: data[id].rate,
              expertises: data[id].expertises
            })
          }
          context.commit('setCoaches', results)
        })
    }
  },
  getters: {
    allCoaches(state) {
      return state.allCoaches;
    }
  }
}