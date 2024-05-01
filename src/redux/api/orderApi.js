import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "userOrder",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/order/`,
    credentials:"include"
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
createOrder:builder.mutation({
    query:(order)=>({
        url:"/create",
        method:"POST",
        body:order
    }),
    invalidatesTags: ["order"],
})
  }),
});
export const { useCreateOrderMutation } = orderApi;
