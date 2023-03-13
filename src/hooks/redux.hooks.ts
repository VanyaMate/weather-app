import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {StoreType} from "../store/index.store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {searchActions} from "../store/search/search.slice";
import {yandexActions} from "../store/yandex/yandex.slice";

const actions = {
    ...searchActions,
    ...yandexActions
}

export const useMySelector: TypedUseSelectorHook<StoreType> = useSelector;
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}