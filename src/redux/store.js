import {configureStore} from "@reduxjs/toolkit"
import { userApi } from "./api/userApi";
import { productAPI } from "./api/productApi";

export const server = import.meta.env.VITE_SERVER;
export const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [productAPI.reducerPath]:productAPI.reducer
    },

    middleware:(mid)=>mid().concat(userApi.middleware,productAPI.middleware)
});
const RootState = store.getState;