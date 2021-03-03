export default {
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
  }
}