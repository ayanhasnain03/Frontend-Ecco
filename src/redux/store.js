import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productApi";
import { userProfileApi } from "./api/userProfileApi";

export const store = configureStore({
    reducer: {
        user:userReducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [userProfileApi.reducerPath]: userProfileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware,userProfileApi.middleware)
});

export const server = import.meta.env.VITE_SERVER;