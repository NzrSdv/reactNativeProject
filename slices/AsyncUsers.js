import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/users" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
