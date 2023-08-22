import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dashboard-ndxx.onrender.com',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Boiler', 'Admin'],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
