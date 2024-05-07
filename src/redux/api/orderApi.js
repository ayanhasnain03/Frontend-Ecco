import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
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
}),
myOrder:builder.query({
    query:()=>({
        url:"myorders",
        method:"GET"
    }),
    providesTags: ["order"],
}),
orderDetails:builder.query({
    query:(id)=>({
        url:`${id}`,
        method:"GET"
    }),
    providesTags: ["order"],
}),
getAllOrders:builder.query({
    query:()=>({
        url:`all`,
        method:"GET"
    }),
    providesTags: ["order"],
})
  }),
});
export const { useCreateOrderMutation,useMyOrderQuery,useOrderDetailsQuery,useGetAllOrdersQuery } = orderApi;
