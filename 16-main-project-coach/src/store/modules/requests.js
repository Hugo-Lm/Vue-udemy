export default {
  state() {
    return {
      allRequests: []
    }
  },
  mutations: {
    setRequests(state, payload) {
      state.allRequests = []
      for (const request of payload) {
        state.allRequests.push(request);
      }
    }
  },
  actions : {
    fetchRequests(context) {
      fetch("https://udemy-vue-coach-project-default-rtdb.firebaseio.com/requests.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          let results = []
          for (const id in data) {
            results.push({
              coachId: data[id].coachId, 
              pseudo: data[id].pseudo, 
              message: data[id].message,
            })
          }
          context.commit('setRequests', results)
        })
    }
  },
  getters: {
  }
}