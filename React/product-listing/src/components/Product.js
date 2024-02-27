import { useState } from "react";
import { CartState } from "../context/productContext/ProductsContext";
const Product = ({ product }) => {
  const { dispatchState } = CartState();
  // console.log(product);
  const [add, setAdd] = useState(false);
  function addToCart(product) {
    console.log(product);
    dispatchState({ type: "ADD_TO_CART", payload: product });
    setAdd((current) => !current);
  }

  function removeFromCart(product) {
    console.log(product);
    dispatchState({ type: "REMOVE_FROM_CART", payload: product.id });
    setAdd((current) => !current);
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button
        onClick={add ? () => removeFromCart(product) : () => addToCart(product)}
      >
        {add ? "Remove from cart" : "Add to cart"}
      </button>
      <hr />
    </div>
  );
};

export default Product;
