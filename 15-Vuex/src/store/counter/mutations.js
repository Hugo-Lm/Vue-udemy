export default {
  increment(state) {
    state.counter += 1;
  },
  increaseOf(state, payload) {
    state.counter += payload;
  }
}