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
    query:(orderData)=>({
        url:"/create",
        method:"POST",
        body:orderData
    }),
    invalidatesTags: ["order"],
}),
myOrder:builder.query({
    query:()=>({
        url:"myorders",
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
}),
updateOrders:builder.mutation({
    query:(id)=>({
        url:`${id}`,
        method:"PUT"
    }),
    invalidatesTags: ["order"],
}),
deleteOrders:builder.mutation({
    query:(id)=>({
        url:`${id}`,
        method:"DELETE"
    }),
    invalidatesTags: ["order"],
})
  }),
});
export const { useCreateOrderMutation,useMyOrderQuery,useOrderDetailsQuery,useGetAllOrdersQuery,useUpdateOrdersMutation,useDeleteOrdersMutation } = orderApi;
