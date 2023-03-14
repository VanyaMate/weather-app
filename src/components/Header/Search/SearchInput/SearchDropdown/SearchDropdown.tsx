import React, {useMemo} from 'react';
import css from './SearchDropdown.module.scss';
import DropdownContainer from "../../../../UI/Containers/DropdownContainer/DropdownContainer";
import {IDefaultComponent} from "../../../../defaultComponent.interface";
import {useActions, useMySelector} from "../../../../../hooks/redux.hooks";
import {useLazyWeatherPointQuery} from "../../../../../store/weather/weather.api";
import Vertical from "../../../../UI/Containers/Vertical/Vertical";
import SearchDropdownItem from "./SearchDropdownItem/SearchDropdownItem";
import {ISearchSavedItem} from "../../../../../store/search/search.slice";

export interface ISearchDropdown extends IDefaultComponent {
    opened: boolean
}

const SearchDropdown = React.memo((props: ISearchDropdown) => {
    const yandex = useMySelector((state) => state.yandex);

    const rows = useMemo<ISearchSavedItem[]>(() => yandex.list.map((item) => {
        return {
            name: item.GeoObject.name,
            desc: item.GeoObject.description,
            pos: item.GeoObject.Point.pos
        }
    }), [yandex.list]);

    return (
        <DropdownContainer opened={props.opened} className={css.container}>
            <Vertical>
                { rows.map((item) => <SearchDropdownItem key={item.pos} data={item}/>) }
            </Vertical>
        </DropdownContainer>
    );
});

export default SearchDropdown;