import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/user`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
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

export const { useLoginMutation, useFetchUserProfileQuery } = userApi