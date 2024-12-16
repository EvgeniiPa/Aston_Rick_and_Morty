import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://rickandmortyapi.com/api";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  type: string;
}

export const characterApi = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: ({
        query = "character",
        page = 1,
        name = "",
        status = "",
        species = "",
      }) => ({
        url: `${query}`,
        params: {
          page,
          ...(name && { name }),
          ...(status && { status }),
          ...(species && { species }),
        },
      }),
    }),
  }),
});

export const { useGetCharacterQuery } = characterApi;
