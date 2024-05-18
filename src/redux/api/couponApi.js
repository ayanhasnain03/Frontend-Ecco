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
  }),
});
export const {useGetAllCouponQuery} = couponApi;
