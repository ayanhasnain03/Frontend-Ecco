import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.loading = true;

      const index = state.cartItems.findIndex((i) => i._id === action.payload._id);

      if (index !== -1) state.cartItems[index] = action.payload;
      else state.cartItems.push(action.payload);
      state.loading = false;

      // Persist the updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: (state, action) => {
        state.loading = true;
        state.cartItems = state.cartItems.filter(
          (i) => i._id !== action.payload
        );
        state.loading = false;
   
      // Update localStorage with the updated cartItems
      localStorage.setItem("cart", JSON.stringify(state));
      },
  },

});

export const { addToCart,removeCartItem } = cartReducer.actions;

// Middleware to persist state changes to localStorage
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // Save the state to localStorage after each action
  localStorage.setItem("cart", JSON.stringify(store.getState().cartReducer));
  return result;
};