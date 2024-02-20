import { useState } from "react";
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
        <button onClick={() => setShowProducts((current) => !current)}>
          {showProducts ? "Hide details" : "Show more"}
        </button>
        {showProducts && (
          <div>
            <p>
              <strong>Product Price:</strong> {product.price}
            </p>
            <p>
              <strong>Product Category:</strong> {product.category}
            </p>
            <p>
              <strong>Product Rating:</strong> {product.rating.rate}
            </p>
            <p>
              <strong>Product Count:</strong> {product.rating.count}
            </p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Product;
