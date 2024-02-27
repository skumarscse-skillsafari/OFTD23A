const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INIT_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
      break;
  }
};

export default cartReducer;
