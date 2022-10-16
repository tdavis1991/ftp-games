import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ftpDb = createApi({
  reducerPath: 'ftpDb',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '');

      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query({ query: () => '/games' }),
  }),
});

export const {
  useGetAllGamesQuery,
} = ftpDb;