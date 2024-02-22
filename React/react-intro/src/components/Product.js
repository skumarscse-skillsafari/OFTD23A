import { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const Product = ({ product }) => {
  // props = {product: {...}}
  // {product} = props
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div>
      <h2>Product Component</h2>
      <div>
        <h3>
          <strong>Product Name:</strong> {product.title}
        </h3>
        <p>
          <strong>Product Description:</strong> {product.description}
        </p>

        <p>
          <img
            src={product.image}
            alt={product.title}
            height={100}
            width={100}
          />
        </p>
        <Link
          to={`/products/${product.id}`}
          onClick={() => setShowProducts((current) => !current)}
        >
          {showProducts ? "Hide details" : "Show more"}
        </Link>

        <hr />
      </div>
    </div>
  );
};

export default Product;
