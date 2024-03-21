import { useState } from "react";
import axios from "axios";
const Demo = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchProduct, setFetchProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/1");

      setFetchProduct(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div>
      <h2>Add Products</h2>
      <span>{fetchProduct.title}</span>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter product title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </p>
        <p>
          <textarea
            placeholder="Enter product description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter product price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </p>
        <p>
          <button
            disabled={!product.title || !product.description || !product.price}
            onClick={handleSubmit}
          >
            {loading ? "Please wait..." : "Add Product"}
          </button>
        </p>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};

export default Demo;
