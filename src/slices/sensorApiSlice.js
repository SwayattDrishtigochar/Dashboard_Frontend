import { apiSlice } from '../slices/apiSlice';
const SENSOR_URL = 'api/sensor';

export const sensorAoiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSensorState: builder.query({
      query: ({ collection }) => ({
        url: `${SENSOR_URL}/status/?collection=${collection}`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSensorStateQuery } = sensorAoiSlice;
