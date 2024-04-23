import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/user/`,
    credentials:"include"
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => `all`,
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
        query: ({id}) => ({
          url: `changerole/${id}`,
          method: "PUT", 
        }),
        invalidatesTags: ["users"],
      }),

    deleteUser: builder.mutation({
        query: ({id}) => ({
          url: `delete/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags:["users"]
      }),
  }),
});

export const { useAllUsersQuery,useUpdateUserRoleMutation,useDeleteUserMutation } = userAPI;
