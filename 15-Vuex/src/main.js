import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isAuth: false,
    }
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    increaseOf(state, payload) {
      state.counter += payload;
    },
    switchIsAuth(state) {
      state.isAuth = !state.isAuth;
    }
  },
  actions: {
    increaseOf(context, payload) {
      setTimeout(function() {
        context.commit('increaseOf', payload);
      }, 2000)
    },
    switchIsAuth(context) {
      context.commit('switchIsAuth');
    }
  },
  getters: {
    multiply(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const actualCounter = getters.multiply;
      if (actualCounter < 0) {
        return 0;
      }
      else if (actualCounter > 100) {
        return 100;
      }
      else return actualCounter;
    }, 
    isLogged(state) {
      return state.isAuth;
    }
  }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
