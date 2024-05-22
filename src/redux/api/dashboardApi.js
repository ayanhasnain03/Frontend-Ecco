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
    getYearChartData: builder.query({
      query: () => "/stats/year",
      providesTags: ["dashboard"],
    }),
    getPieChartData: builder.query({
      query: () => "/stats/pie",
      providesTags: ["dashboard"],
    }),

  }),
});

export const {useGetBarChartDataQuery,useGetYearChartDataQuery,useGetPieChartDataQuery } = dashBoardApi;
