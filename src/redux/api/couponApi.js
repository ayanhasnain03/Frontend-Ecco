import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/payment/`,
    credentials: "include",
  }),
  tagTypes: ["coupon"],
  endpoints: (builder) => ({
    createCoupon: builder.mutation({
      query: ({ coupon, amount }) => ({
        url: "/coupon/create",
        method: "POST",
        body: { coupon, amount },
      }),
      invalidatesTags: ["coupon"],
    }),
    getAllCoupon: builder.query({
      query: () => ({
        url: "/coupon/all",
      }),
      providesTags: ["coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: ({ id }) => ({
        url: `/coupon/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});
export const { useGetAllCouponQuery, useDeleteCouponMutation,useCreateCouponMutation } = couponApi;
