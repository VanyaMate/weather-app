import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "./weather/weather.api";
import {yandexApi} from "./yandex/yandex.api";
import {searchReducer} from "./search/search.slice";
import {yandexReducer} from "./yandex/yandex.slice";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        [yandexApi.reducerPath]: yandexApi.reducer,
        search: searchReducer,
        yandex: yandexReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        weatherApi.middleware,
        yandexApi.middleware
    ])
})

export type StoreType = ReturnType<typeof store.getState>;