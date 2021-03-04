import { createStore } from 'vuex';

import productsModule from './modules/products.js'
import cartModule from './modules/cart.js'

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLogged: false
    }
  }, 
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    }
  },
  getters: {
    loggedIn(state) {
      return state.isLogged
    }
  }
});

export default store;