import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserAPI, IUserSchema } from '../schema';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUserSchema[], void>({
      query: () => `/1/users`,
      transformResponse: (response: { data: IUserAPI }): IUserSchema[] =>
        response.data,
    }),
  }),
});

export const { useGetAllUsersQuery } = baseApi;
