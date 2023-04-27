import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterAllItemType, CharacterItemType } from './types';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacterAll: builder.query<CharacterAllItemType, string>({
        query: () => `people`,
      }),
    getCharacter: builder.query<CharacterItemType, string>({
      query: (character) => `people/${character}`,
    }),
  }),
});

export const { useGetCharacterAllQuery, useGetCharacterQuery} = characterApi;