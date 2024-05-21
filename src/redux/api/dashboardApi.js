import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashBoardApi = createApi({
  reducerPath: "dashBoardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/admin/dashboard`,
    credentials:"include"
  }),
  tagTypes: ["dashboard"],
  endpoints: (builder) => ({
    getBarChartData: builder.query({
      query: () => "/stats",
      providesTags: ["dashboard"],
    }),

  }),
});

export const {useGetBarChartDataQuery } = dashBoardApi;
