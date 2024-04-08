import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productApi";

export const store = configureStore({
    reducer: {
        user:userReducer,
        [productAPI.reducerPath]: productAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

export const server = import.meta.env.VITE_SERVER;