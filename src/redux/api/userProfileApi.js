import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
  reducerPath: "userProfile",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/user/`,
    credentials:"include"
  }),
  tagTypes: ["profileupdate"],
  endpoints: (builder) => ({
    updateProfilePicture: builder.mutation({
      query: (formData) => ({
        url:"updateprofileimage",
        method:"PUT",
        body:formData,
      }),
      invalidatesTags:["profileupdate"]
    }),
  }),
});
export const { useUpdateProfilePictureMutation } = userProfileApi;
