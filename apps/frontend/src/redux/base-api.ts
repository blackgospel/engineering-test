import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IBookingAPI,
  IBookingSchema,
  IParcAPI,
  IParcSchema,
  IUserAPI,
  IUserSchema,
} from '../schema';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Users', 'Parcs', 'Bookings'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUserSchema[], void>({
      query: () => `/1/users`,
      transformResponse: (response: { data: IUserAPI }): IUserSchema[] =>
        response.data,
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({ url: `/1/users/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Users'],
    }),
    getAllParcs: builder.query<IParcSchema[], void>({
      query: () => `/1/parcs`,
      transformResponse: (response: { data: IParcAPI }): IParcSchema[] =>
        response.data,
      providesTags: ['Parcs'],
    }),
    getAllBookings: builder.query<IBookingSchema[], void>({
      query: () => `/1/bookings`,
      transformResponse: (response: { data: IBookingAPI }): IBookingSchema[] =>
        response.data,
      providesTags: ['Bookings'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllParcsQuery,
  useGetAllBookingsQuery,
  useDeleteUserMutation,
} = baseApi;
