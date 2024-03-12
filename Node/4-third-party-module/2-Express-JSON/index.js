import express from "express";
import products from "./data.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;
app.use(express.json());
// CRUD
// Create => POST
// Read => GET
// Update => PUT/PATCH
// Delete => DELETE

// Users
// CreateUser
// POST => http://localhost:5000/api/v1/users => data

// getAllUsers
// GET => http://localhost:5000/api/v1/users

// getUserById
// GET => http://localhost:5000/api/v1/users/:id => id

// updateUserById
// PUT => http://localhost:5000/api/v1/users/:id => data + id

// deleteById
// DELETE => http://localhost:5000/api/v1/users/:id => id

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

app.post("/api/v1/products", async (req, res) => {
  try {
    // console.log(req.body);
    const newProducts = { id: uuidv4(), ...req.body }; // {title: , description: }
    res.status(201).json({
      success: true,
      message: "Products added successfully",
      data: newProducts,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

app.put("/api/v1/products/:id", async (req, res) => {
  try {
    // id and data
    // id => req.params
    // data => req.body
    const { id } = req.params;
    const updatedProducts = products.map((product) =>
      product.id === +id ? { id: id, ...req.body } : product
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProducts,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

app.delete("/api/v1/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newProducts = products.filter((product) => product.id !== +id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: newProducts,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
