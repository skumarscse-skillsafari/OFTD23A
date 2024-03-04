import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // actions
    initProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(getProducts.pending, (state) => {
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "reject";
      });
  },
});

export const getProducts = createAsyncThunk("get/products", async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  const products = result.data;
  return products;
});

export const { initProducts } = productsSlice.actions;
export default productsSlice.reducer;
