import React, {useCallback, useMemo} from 'react';
import css from './SearchDropdownItem.module.scss';
import * as Yandex from "../../../../../../store/yandex/yandex.interfaces";
import Button from "../../../../../UI/Buttons/Button/Button";
import {useActions, useMySelector} from "../../../../../../hooks/redux.hooks";
import {useLazyWeatherPointQuery} from "../../../../../../store/weather/weather.api";
import {convertYandexCoordsToWeatherCoords} from "../../../../../../utils/helpers";

export interface ISearchDropdownItem {
    data: Yandex.FeatureMember
}

const SearchDropdownItem = React.memo((props: ISearchDropdownItem) => {
    const {setCurrentYandexQuery, setCurrentPointWeather, saveSearchQuery, removeSearchSavedQuery} = useActions();
    const [dispatchGetWeather] = useLazyWeatherPointQuery();
    const search = useMySelector((state) => state.search);

    const setYandexItem = useCallback(() => {
        setCurrentYandexQuery(props.data.GeoObject);
        const pos = convertYandexCoordsToWeatherCoords(props.data.GeoObject.Point.pos);
        dispatchGetWeather(pos).then(({ data }) => data && setCurrentPointWeather(data))
    }, [props.data]);

    const selectedItem = useMemo(() => {

    }, [])

    const savedQuery = useMemo(() => {
        return search.savedQueries.queriesList.some((query) => query.pos === props.data.GeoObject.Point.pos);
    }, [search.savedQueries.queriesList])

    const toggleSaveQuery = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (savedQuery) {
            removeSearchSavedQuery(props.data.GeoObject.Point.pos);
        } else {
            saveSearchQuery({ original: props.data.GeoObject.name, pos: props.data.GeoObject.Point.pos });
        }
    }, [savedQuery]);

    return (
        <div
            className={css.item}
            onClick={setYandexItem}
        >
            <div className={css.info}>
                <div className={css.name}>{ props.data.GeoObject.name }</div>
                <div className={css.desc}>{ props.data.GeoObject.description }</div>
            </div>
            <div className={css.control}>
                <Button
                    active
                    always={savedQuery}
                    onClick={toggleSaveQuery}
                    className={css.button}
                >
                    ♥
                </Button>
            </div>
        </div>
    );
});

export default SearchDropdownItem;