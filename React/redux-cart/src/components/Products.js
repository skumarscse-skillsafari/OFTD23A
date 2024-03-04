import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { products, status } = useSelector((state) => state.products);
  console.log(products); // {products: [...], cart: []}
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "idle") {
    return <h2>Loading...</h2>;
  }

  if (status === "reject") {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <div>
      <h2>Cart ({cart.length})</h2>
      <hr />
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
