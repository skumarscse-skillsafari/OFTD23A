import express from "express";
import products from "./data.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Express JSON" });
});

app.get("/api/v1/products", async (req, res) => {
  try {
    const newProducts = products.map(({ id, title, description, price }) => {
      return {
        id,
        title,
        description,
        price,
      };
    });
    res.status(200).json({ success: true, data: newProducts });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

// params
// /api/v1/products/:id/review/:rid => { id: '34', rid: '23' }
app.get("/api/v1/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // {id: ...}
    const findProduct = products.find((product) => product.id === +id);
    if (!findProduct)
      return res
        .status(200)
        .json({ success: true, message: `No product with the id: ${id}` });
    res.status(200).json({ success: true, data: findProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

// query
// http://localhost:5000/api/v1/product?search=mens&limit=1
// { search: 'mens', limit: '3' }
app.get("/api/v1/product", async (req, res) => {
  try {
    // console.log(req.query);
    const { search, limit } = req.query;
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    if (filteredProducts.length <= 0)
      return res.status(200).json({ success: true, message: "No match found" });
    const limitedProducts = filteredProducts.slice(0, limit);
    res.status(200).json({ success: true, data: limitedProducts });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
