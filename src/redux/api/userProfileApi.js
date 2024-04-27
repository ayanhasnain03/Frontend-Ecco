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
    forgotPassword:builder.mutation({
      query:({email})=>({
        url:"forgetpassword",
        method:"POST",
        body:{email}
      })
    }),
    resetPassword:builder.mutation({
      query:({token,password})=>({
        url:`resetpassword/${token}`,
        method:"PUT",
        body:{password}
      })
    }),

    addToFav:builder.mutation({
      query:({id})=>({
        url:`fav/${id}`,
        method:"POST",
      }),
      invalidatesTags:["profileupdate"]
    }),
    removeToFav:builder.mutation({
      query:({id})=>({
        url:`removefav/${id}`,
        method:"DELETE",
      }),
      invalidatesTags:["profileupdate"]
    })
  }),
});
export const { useUpdateProfilePictureMutation,useUpdatePasswordMutation,useUpdateProfileMutation,useLoginUserMutation,uselogoutUserMutation,useUserRegisterMutation,useForgotPasswordMutation,useResetPasswordMutation,useAddToFavMutation,useRemoveToFavMutation } = userProfileApi;
