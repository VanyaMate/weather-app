import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SECRET_WEATHER_API_KEY} from "../../consts/secret-keys";
import * as Weather from "./weather.interfaces";

export const weatherApi = createApi({
    reducerPath: 'weather/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.weatherapi.com/v1/forecast.json`
    }),
    endpoints: (build) => ({
        weatherPoint: build.query<
            Weather.IWeatherResponse,
            string
        >({
            query: (query) => ({
                url: `?key=${SECRET_WEATHER_API_KEY}&q=${query}&lang=ru`,
                method: 'get',
            }),
        })
    })
});

export const {useLazyWeatherPointQuery} = weatherApi;