import { apiSlice } from './apiSlice';
const EQUIPMENT_URL = 'api/equipments';

export const equipmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getequipments: builder.query({
      query: () => ({
        url: `${EQUIPMENT_URL}`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
    getEquipment: builder.query({
      query: (id) => ({
        url: `${EQUIPMENT_URL}/${id}`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetequipmentsQuery, useGetEquipmentQuery } =
  equipmentApiSlice;
