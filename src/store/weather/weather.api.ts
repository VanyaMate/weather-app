import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { iso31661 } from 'iso-3166';

export interface IWeatherDirectItem {
    name: string,
    local_names: { [key: string]: string },
    lat: number,
    lon: number,
    country: string
}

export const weatherApi = createApi({
    reducerPath: 'weather/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1'
    }),
    endpoints: (build) => ({
        direct: build.query<
            IWeatherDirectItem[],
            string

        >({
            query: (query) => ({
                url: ``,
                method: 'get',
            }),
        })
    })
});

export const {useLazyDirectQuery} = weatherApi;