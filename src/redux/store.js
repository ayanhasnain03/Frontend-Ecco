import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productApi";
import { userProfileApi } from "./api/userProfileApi";
import { cartReducer, localStorageMiddleware } from "./slices/cartSlice";
import { userAPI } from "./api/adminUserApi";
import { orderApi } from "./api/orderApi";

export const store = configureStore({
    reducer: {
        user:userReducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [userProfileApi.reducerPath]: userProfileApi.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [cartReducer.name]:cartReducer.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( 
        productAPI.middleware,userProfileApi.middleware,userAPI.middleware,orderApi.middleware,localStorageMiddleware)
});

export const server = import.meta.env.VITE_SERVER;