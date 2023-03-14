import React, {useEffect, useState} from 'react';
import Input from "../../../UI/Inputs/Input/Input";
import {useInputValue} from "../../../../hooks/useInputValue.hook";
import {IDefaultComponent} from "../../../defaultComponent.interface";
import {useActions, useMySelector} from "../../../../hooks/redux.hooks";
import {useLazyGetPointByNameQuery} from "../../../../store/yandex/yandex.api";
import {useLazyWeatherPointQuery} from "../../../../store/weather/weather.api";
import {useDebounce} from "../../../../hooks/useDebounce";
import {convertYandexCoordsToWeatherCoords} from "../../../../utils/helpers";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import Button from "../../../UI/Buttons/Button/Button";
import css from './SearchInput.module.scss';

export interface ISearchInput extends IDefaultComponent {}

const SearchInput = (props: ISearchInput) => {
    const search = useMySelector(state => state.search);
    const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const searchInput = useInputValue<string>('', (s: string) => s.length > 2);
    const debounce = useDebounce<string>(searchInput.current, 500);
    const {setCurrentPointWeather, setListYandexResponseItems} = useActions();
    const [dispatchGetPoint] = useLazyGetPointByNameQuery();
    const [dispatchGetWeather] = useLazyWeatherPointQuery();
    const { className, ...other } = props;

    useEffect(() => {
        const change = !!searchInput.current !== dropdownOpened;
        if (change) {
            setDropdownOpened(!!searchInput.current);
        }
    }, [searchInput.current])

    useEffect(() => {
        if (debounce) {
            dispatchGetPoint(debounce)
                .then(({ data }) => {
                    if (data) {
                        const items = data.response.GeoObjectCollection.featureMember;
                        setListYandexResponseItems(items);
                        return;
                    }

                    throw new Error('Ошибка запроса координат');
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }, [debounce])

    useEffect(() => {
        const pos = convertYandexCoordsToWeatherCoords(search.currentQuery.pos);
        dispatchGetWeather(pos).then(({ data }) => data && setCurrentPointWeather(data))
    }, [search.currentQuery])

    return (
        <div className={[className, css.container].join(' ')} {...other}>
            <Input
                hook={searchInput}
                placeholder={'Поиск'}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
            />
            <SearchDropdown opened={dropdownOpened}/>
            <Button
                active
                always={(searchInput.current && searchInput.valid) || inputFocus}
                className={css.button}
                onClick={() => setDropdownOpened((p) => !p)}
            >N</Button>
        </div>
    );
};

export default SearchInput;