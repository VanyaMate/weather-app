import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "./weather.interfaces";


export interface IWeatherState {
    loading: boolean,
    current: Weather.IWeatherResponse | null
}

const initialState: IWeatherState = {
    loading: false,
    current: null
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
        }
    }
});

export const weatherActions = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;