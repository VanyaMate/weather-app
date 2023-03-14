import React from 'react';
import css from './SearchDropdown.module.scss';
import DropdownContainer from "../../../../UI/Containers/DropdownContainer/DropdownContainer";
import {IDefaultComponent} from "../../../../defaultComponent.interface";
import {useActions, useMySelector} from "../../../../../hooks/redux.hooks";
import {useLazyWeatherPointQuery} from "../../../../../store/weather/weather.api";
import Vertical from "../../../../UI/Containers/Vertical/Vertical";
import SearchDropdownItem from "./SearchDropdownItem/SearchDropdownItem";

export interface ISearchDropdown extends IDefaultComponent {
    opened: boolean
}

const SearchDropdown = React.memo((props: ISearchDropdown) => {
    const yandex = useMySelector((state) => state.yandex);

    return (
        <DropdownContainer opened={props.opened} className={css.container}>
            <Vertical>
                { yandex.list.map((item) => <SearchDropdownItem key={item.GeoObject.Point.pos} data={item}/>) }
            </Vertical>
        </DropdownContainer>
    );
});

export default SearchDropdown;