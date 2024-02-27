import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

const ProductsContext = ({ children }) => {
  const [state, dispatchState] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatchState }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default ProductsContext;
