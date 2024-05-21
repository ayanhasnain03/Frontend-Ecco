import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productApi";
import { userProfileApi } from "./api/userProfileApi";
import { cartReducer, localStorageMiddleware } from "./slices/cartSlice";
import { userAPI } from "./api/adminUserApi";
import { orderApi } from "./api/orderApi";
import { couponApi } from "./api/couponApi";
import { dashBoardApi } from "./api/dashboardApi";

export const store = configureStore({
    reducer: {
        user:userReducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [userProfileApi.reducerPath]: userProfileApi.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [cartReducer.name]:cartReducer.reducer,
        [couponApi.reducerPath]:couponApi.reducer,
        [dashBoardApi.reducerPath]:dashBoardApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( 
        productAPI.middleware,userProfileApi.middleware,userAPI.middleware,orderApi.middleware,couponApi.middleware,dashBoardApi.middleware,localStorageMiddleware)
});

export const server = import.meta.env.VITE_SERVER;