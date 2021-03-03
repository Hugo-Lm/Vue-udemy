export default {
  increaseOf(context, payload) {
    setTimeout(function() {
      context.commit('increaseOf', payload);
    }, 2000)
  }
}