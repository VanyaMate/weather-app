import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SECRET_WEATHER_API_KEY} from "../../consts/secret-keys";
import {Weather} from "./weather.interfaces";
import IWeatherResponse = Weather.IWeatherResponse;

export const weatherApi = createApi({
    reducerPath: 'weather/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://api.weatherapi.com/v1/forecast.json`
    }),
    endpoints: (build) => ({
        weatherPoint: build.query<
            IWeatherResponse,
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