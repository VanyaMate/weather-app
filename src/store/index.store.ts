import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "./weather/weather.api";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        weatherApi.middleware
    ])
})

export type StoreType = ReturnType<typeof store.getState>;