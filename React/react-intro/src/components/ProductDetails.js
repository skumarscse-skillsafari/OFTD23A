import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  console.log(useParams());
  const { id } = useParams(); // {id: ...}
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(product);
  return (
    <div>
      <h2>ProductDetails</h2>
      <p>
        <strong>Product Price:</strong> {product?.price}
      </p>
      <p>
        <strong>Product Category:</strong> {product?.category}
      </p>
      <p>
        <strong>Product Rating:</strong> {product?.rating?.rate}
      </p>
      <p>
        <strong>Product Count:</strong> {product?.rating?.count}
      </p>
      <Link to="/products">Back to products</Link>
    </div>
  );
};

export default ProductDetails;
