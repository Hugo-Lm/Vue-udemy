export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    }
  }, 
  mutations: {
    addItemToCart(state, payload) {
      console.log(payload)
      const sameItemInCart = state.cart.items.findIndex( 
        (item) =>  item.productId === payload.newProduct.id
      );
      if (sameItemInCart >= 0) {
        state.cart.items[sameItemInCart].qty++;
      } else {
        state.cart.items.push({
          productId: payload.newProduct.id,
          title: payload.newProduct.title, 
          image: payload.newProduct.image,
          price: payload.newProduct.price,
          qty: 1,
        });
      }
      state.cart.total += payload.newProduct.price;
      state.cart.qty += 1;
    }, 
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  }, 
  getters: {
    cart(state) {
      return state.cart;
    }
  }
}