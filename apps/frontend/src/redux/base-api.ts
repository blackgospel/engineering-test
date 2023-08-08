import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IBookingSchema,
  IParcAPI,
  IParcSchema,
  IUserAPI,
  IUserSchema,
} from '../schema';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUserSchema[], void>({
      query: () => `/1/users`,
      transformResponse: (response: { data: IUserAPI }): IUserSchema[] =>
        response.data,
    }),
    getAllParcs: builder.query<IParcSchema[], void>({
      query: () => `/1/parcs`,
      transformResponse: (response: { data: IParcAPI }): IParcSchema[] =>
        response.data,
    }),
    getAllBookings: builder.query<IBookingSchema[], void>({
      query: () => `/1/bookings`,
      transformResponse: (response: { data: IParcAPI }): IBookingSchema[] =>
        response.data,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllParcsQuery,
  useGetAllBookingsQuery,
} = baseApi;
