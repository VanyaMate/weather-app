import {createApi} from "@reduxjs/toolkit/query";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SECRET_YANDEX_API_KEY} from "../../consts/secret-keys";
import {Yandex} from "./yandex.interfaces";
import IYandexGeocodeResponse = Yandex.IYandexGeocodeResponse;


export const yandexApi = createApi({
    reducerPath: 'yandex/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    endpoints: (build) => ({
        getPointByName: build.query<
            IYandexGeocodeResponse,
            string
        >({
            query: (query) => ({
                url: `https://geocode-maps.yandex.ru/1.x/?apikey=${SECRET_YANDEX_API_KEY}&format=json&geocode=${query}`
            })
        })
    })
})

export const {} = yandexApi;