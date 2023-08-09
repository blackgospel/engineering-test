import {
  IBookingAPI,
  IBookingSchema,
  ICreateUserSchema,
  IParcAPI,
  IParcSchema,
  IUserAPI,
  IUserSchema,
} from '@eurocamp/schema';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

// Recreate the baseQuery with a retry function
const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/api' }), {
  maxRetries: 5,
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Users', 'Parcs', 'Bookings'],
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUserSchema[], void>({
      query: () => `/1/users`,
      transformResponse: (response: { data: IUserAPI }): IUserSchema[] =>
        response.data,
      providesTags: ['Users'],
    }),
    createUser: builder.mutation<void, ICreateUserSchema>({
      query: ({ name, email }) => ({
        url: `/1/users`,
        method: 'POST',
        body: { name, email },
      }),
      invalidatesTags: ['Users'],
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
  useCreateUserMutation,
} = baseApi;
