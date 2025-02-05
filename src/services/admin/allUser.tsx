import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    homeAddress: string;
    donation_history: string;
    transfer_history: string;
}

// Create the API service
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/api/users/allUsers",
    }),

  }),
});

// Export hooks
export const { useGetUsersQuery } = adminApi;

// Export the API
export default adminApi;
