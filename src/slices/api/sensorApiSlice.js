import { apiSlice } from './apiSlice';
const SENSOR_URL = 'api/sensor';

export const sensorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSensorState: builder.query({
      query: ({ collection }) => ({
        url: `${SENSOR_URL}/status/?collection=${collection}`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
    getSensorData: builder.query({
      query: ({ collection, limit }) => ({
        url: `${SENSOR_URL}/?collection=${collection}&limit=${limit}`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSensorStateQuery, useGetSensorDataQuery } = sensorApiSlice;
