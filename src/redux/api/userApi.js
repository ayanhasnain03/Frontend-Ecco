import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/user`,
    credentials: 'include',
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (myForm) => ({
        url:"/new",
        method:"POST",
        body:myForm,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    fetchUserProfile: builder.query({
      query: () => ({
        url: `/me`, // Assuming this endpoint retrieves the user profile
        method: "GET", // Use GET method to fetch data
      }),
    }),
  }),
});

export const { useLoginMutation, useFetchUserProfileQuery,useRegisterUserMutation } = userApi