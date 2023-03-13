import React, {useEffect} from 'react';
import Input from "../../../UI/Inputs/Input/Input";
import {useInputValue} from "../../../../hooks/useInputValue.hook";
import {IDefaultComponent} from "../../../defaultComponent.interface";
import {useActions, useMySelector} from "../../../../hooks/redux.hooks";
import {useLazyGetPointByNameQuery} from "../../../../store/yandex/yandex.api";
import {useLazyWeatherPointQuery} from "../../../../store/weather/weather.api";
import {useDebounce} from "../../../../hooks/useDebounce";
import {convertYandexCoordsToWeatherCoords} from "../../../../utils/helpers";

export interface ISearchInput extends IDefaultComponent {}

const SearchInput = (props: ISearchInput) => {
    const searchInput = useInputValue<string>('', (s: string) => s.length > 2);
    const debounce = useDebounce<string>(searchInput.current, 400);
    const {setSearchQuery, setCurrentYandexQuery, setCurrentPointWeather} = useActions();
    const [dispatchGetPoint] = useLazyGetPointByNameQuery();
    const [dispatchGetWeather] = useLazyWeatherPointQuery();

    useEffect(() => {
        setSearchQuery(debounce);

        if (debounce) {
            dispatchGetPoint(debounce)
                .then(({ data }) => {
                    if (data) {
                        const geoObject = data.response.GeoObjectCollection.featureMember[0].GeoObject;
                        const pos = geoObject.Point.pos;
                        setCurrentYandexQuery(geoObject);

                        return convertYandexCoordsToWeatherCoords(pos);
                    }

                    throw new Error('Ошибка запроса координат');
                })
                .then(dispatchGetWeather)
                .then(({ data }) => {
                    if (data) {
                        return setCurrentPointWeather(data);
                    }

                    throw new Error('Ошибка запроса погоды по координатам');
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }, [debounce])

    return (
        <div {...props}>
            <Input hook={searchInput} placeholder={'Поиск'}/>
        </div>
    );
};

export default SearchInput;