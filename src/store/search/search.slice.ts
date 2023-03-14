import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {STORAGE_PREFIX} from "../../consts/consts";
import {act} from "react-dom/test-utils";

export interface ISearchState {
    currentQuery: string,
    savedQueries: ISearchSavedQueries,
}

export interface ISearchSavedQueries {
    general: string,
    pos: string,
    queriesList: ISearchSavedItem[]
}

export interface ISearchSavedItem {
    original: string,
    pos: string
}

const storageName: string = `${STORAGE_PREFIX}savedQuery`;
const startedQuery: ISearchSavedQueries = JSON.parse(localStorage.getItem(storageName) || '{"general":"","queriesList":[]}');

const initialState: ISearchState = {
    savedQueries: startedQuery,
    currentQuery: startedQuery.general
}

export const searchSlice = createSlice({
    name: 'searchInput',
    initialState: initialState,
    reducers: {
        saveSearchQuery: (state, action: PayloadAction<ISearchSavedItem>) => {
            state.savedQueries.queriesList.push({
                original: action.payload.original,
                pos: action.payload.pos
            });
            if (state.savedQueries.general === '') {
                state.savedQueries.general = action.payload.original;
                state.savedQueries.pos = action.payload.pos;
            }
            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        removeSearchSavedQuery: (state, action: PayloadAction<string>) => {
            state.savedQueries.queriesList = state.savedQueries.queriesList.filter((query) => query.pos !== action.payload);
            if (state.savedQueries.pos === action.payload) {
                if (state.savedQueries.queriesList.length) {
                    state.savedQueries.general = state.savedQueries.queriesList[0].original;
                    state.savedQueries.pos = state.savedQueries.queriesList[0].pos;
                }
            }
            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        setSearchGeneralQuery: (state, action: PayloadAction<string>) => {
            state.savedQueries.general = action.payload;
            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.currentQuery = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;