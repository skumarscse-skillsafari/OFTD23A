import { CartState } from "../context/productContext/ProductsContext";
const Cart = () => {
  const {
    state: { cart },
    dispatchState,
  } = CartState();
  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button
              onClick={() =>
                dispatchState({ type: "REMOVE_FROM_CART", payload: product.id })
              }
            >
              Remove from cart
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
