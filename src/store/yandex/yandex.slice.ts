import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as Yandex from "./yandex.interfaces";

export interface IYandexState {
    current: Yandex.GeoObject | null,
    list: Yandex.FeatureMember[],
    loading: boolean
}

const initialState: IYandexState = {
    current: null,
    list: [],
    loading: false,
}

export const yandexSlice = createSlice({
    name: 'yandex',
    initialState: initialState,
    reducers: {
        setLoadingYandexQuery: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setListYandexResponseItems: (state, action: PayloadAction<Yandex.FeatureMember[]>) => {
            state.list = action.payload;
        },
        setCurrentYandexQuery: (state, action: PayloadAction<Yandex.GeoObject>) => {
            state.current = action.payload;
        }
    }
})

export const yandexActions = yandexSlice.actions;
export const yandexReducer = yandexSlice.reducer;