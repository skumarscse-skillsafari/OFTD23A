import { useEffect, useState } from "react";
import { CartState } from "../context/productContext/ProductsContext";
import Product from "./Product";
import axios from "axios";
const Products = () => {
  const {
    state: { products, cart },
    dispatchState,
  } = CartState();
  console.log(products);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>
        dispatchState({ type: "INIT_PRODUCTS", payload: res.data })
      )
      .catch((error) => console.log(error));
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }, []);
  const [fetchedProducts, setFetchedProducts] = useState(products);
  // console.log(CartState());
  return (
    <div>
      <h2>Cart ({cart.length})</h2>
      <hr />
      {fetchedProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
