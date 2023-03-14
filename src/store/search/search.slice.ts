import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {STORAGE_PREFIX} from "../../consts/consts";

export interface ISearchState {
    currentQuery: ISearchSavedItem,
    savedQueries: ISearchSavedQueries,
}

export interface ISearchSavedQueries {
    general: ISearchSavedItem
    queriesList: ISearchSavedItem[]
}

export interface ISearchSavedItem {
    name: string,
    desc: string,
    pos: string
}

const emptyStorage = '{"general":{"name": "","desc": "","pos": ""},"queriesList":[]}';
const storageName: string = `${STORAGE_PREFIX}savedQuery`;
const startedQuery: ISearchSavedQueries = JSON.parse(localStorage.getItem(storageName) || emptyStorage);

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
                name: action.payload.name,
                desc: action.payload.desc,
                pos: action.payload.pos
            });
            if (state.savedQueries.general.name === '') {
                state.savedQueries.general.name = action.payload.name;
                state.savedQueries.general.desc = action.payload.desc;
                state.savedQueries.general.pos = action.payload.pos;
            }
            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        removeSearchSavedQuery: (state, action: PayloadAction<string>) => {
            state.savedQueries.queriesList = state.savedQueries.queriesList.filter((query) => query.pos !== action.payload);
            if (state.savedQueries.general.pos === action.payload) {
                if (state.savedQueries.queriesList.length) {
                    state.savedQueries.general.name = state.savedQueries.queriesList[0].name;
                    state.savedQueries.general.desc = state.savedQueries.queriesList[0].desc;
                    state.savedQueries.general.pos = state.savedQueries.queriesList[0].pos;
                } else {
                    state.savedQueries.general.name = '';
                    state.savedQueries.general.desc = '';
                    state.savedQueries.general.pos = '';
                }
            }
            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        setSearchGeneralQuery: (state, action: PayloadAction<ISearchSavedItem>) => {
            state.savedQueries.general = action.payload;
            if (!state.savedQueries.queriesList.some((item) => item.pos === action.payload.pos)) {
                state.savedQueries.queriesList.push(action.payload);
            }

            state.savedQueries.queriesList = state.savedQueries.queriesList;

            localStorage.setItem(storageName, JSON.stringify(state.savedQueries));
        },
        setSearchQuery: (state, action: PayloadAction<ISearchSavedItem>) => {
            state.currentQuery = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;