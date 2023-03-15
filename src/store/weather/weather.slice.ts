import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as Weather from "./weather.interfaces";


export interface IWeatherState {
    loading: boolean,
    current: Weather.IWeatherResponse | null,
    currentData: Weather.Weather | Weather.HourWeather | null,
}

const initialState: IWeatherState = {
    loading: false,
    current: null,
    currentData: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        setWeatherLoadingStatus: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setCurrentPointWeather: (state, action: PayloadAction<Weather.IWeatherResponse>) => {
            state.current = action.payload;
        },
        setCurrentWeatherData: (state, action: PayloadAction<Weather.Weather | Weather.HourWeather>) => {
            state.currentData = action.payload;
        }
    }
});

export const weatherActions = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;