import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
    loading: false,
    cartItems: [],
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    discount: 0,
    total: 0,
    shippingInfo: {
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
    };

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.loading = true;

      const index = state.cartItems.findIndex(
        (i) => i._id === action.payload._id
      );

      if (index !== -1) state.cartItems[index] = action.payload;
      else state.cartItems.push(action.payload);
      state.loading = false;

      // Persist the updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: (state, action) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
      state.loading = false;

      // Update localStorage with the updated cartItems
      localStorage.setItem("cart", JSON.stringify(state));
    },
    calculatePrice: (state) => {
      const subtotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      state.subtotal = subtotal;
      state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total =
        state.subtotal + state.tax + state.shippingCharges -state.discount;
    },

    discountApplied: (state, action) => {
      state.discount = action.payload;
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    resetCart: () => initialState,
  },
});

export const {
  addToCart,
  removeCartItem,
  calculatePrice,
  discountApplied,
  saveShippingInfo,
  resetCart,
} = cartReducer.actions;

// Middleware to persist state changes to localStorage
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // Save the state to localStorage after each action
  localStorage.setItem("cart", JSON.stringify(store.getState().cartReducer));
  return result;
};
