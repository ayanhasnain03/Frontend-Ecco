import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
  reducerPath: "userProfile",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/user/`,
    credentials:"include"
  }),
  tagTypes: ["profileupdate"],
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (data) => ({
        url:"login",
        method:"POST",
        body:data,
      }),
      invalidatesTags:["profileupdate"]
    }),
    userRegister: builder.mutation({
      query: (formData) => ({
        url:"new",
        method:"POST",
        body:formData,
      }),
      invalidatesTags:["profileupdate"]
    }),
    updateProfilePicture: builder.mutation({
      query: (formData) => ({
        url:"updateprofileimage",
        method:"PUT",
        body:formData,
      }),
      invalidatesTags:["profileupdate"]
    }),
    updatePassword: builder.mutation({
      query: ({oldPassword,newPassword}) => ({
        url:"changepassword",
        method:"PUT",
        body:{oldPassword,newPassword},
      }),
      invalidatesTags:["profileupdate"]
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url:"updateprofile",
        method:"PUT",
        body:data,
      }),
      invalidatesTags:["profileupdate"]
    }),
  }),
});
export const { useUpdateProfilePictureMutation,useUpdatePasswordMutation,useUpdateProfileMutation,useLoginUserMutation,uselogoutUserMutation,useUserRegisterMutation } = userProfileApi;
