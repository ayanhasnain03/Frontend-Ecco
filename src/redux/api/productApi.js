import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/product/`,
    credentials:"include"
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    newProduct: builder.mutation({
      query: (formData) => ({
        url:`new`,
        method:"POST",
        body:formData,
      }),
      invalidatesTags:["product"]
    }),
    searchProducts: builder.query({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page=${page}`;

        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;

        return base;
      },
      providesTags: ["product"],
    }),

    getAllCategories: builder.query({
      query: () => ({
        url: `categories/all`, // Assuming this endpoint retrieves the user profile
        method: "GET", // Use GET method to fetch data
      }),
      providesTags: ["product"],
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `topproducts`, // Assuming this endpoint retrieves the user profile
        method: "GET", // Use GET method to fetch data
      }),
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: ({id}) => ({
        url: `${id}`, // Assuming this endpoint retrieves the user profile
        method: "GET", // Use GET method to fetch data
      }),
      providesTags: ["product"],
    }),
    latestProduct: builder.query({
      query: () => ({
        url: `latestproducts`,
        method: "GET", 
      }),
      providesTags: ["product"],
    }),
    createReview: builder.mutation({
      query: ({id,comment,rating}) => ({
        url: `/addreview/${id}`,
        method: "POST", 
        body:{comment,rating},
      }),
      invalidatesTags: ["product"],
    }),
  }),
});
export const { useSearchProductsQuery, useGetAllCategoriesQuery,useGetTopProductsQuery,useGetProductByIdQuery,useLatestProductQuery,useNewProductMutation,useGetReviewQuery,useCreateReviewMutation} = productAPI;
