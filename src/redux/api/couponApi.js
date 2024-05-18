import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/payment/`,
    credentials:"include"
  }),
  tagTypes: ["coupon"],
  endpoints: (builder) => ({
getAllCoupon:builder.query({
    query:()=>({
        url:"/coupon/all",
    }),
    providesTags: ["coupon"],
}),
deleteCoupon:builder.mutation({
    query:({id})=>({
        url:`/coupon/${id}`,
        method:"DELETE"
    }),
    invalidatesTags: ["coupon"],
}),
  }),
});
export const {useGetAllCouponQuery,useDeleteCouponMutation} = couponApi;
