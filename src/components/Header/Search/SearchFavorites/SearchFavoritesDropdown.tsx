import React from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import Button from "../../../UI/Buttons/Button/Button";

export interface ISearchFavoritesDropdown extends IDefaultComponent {}

const SearchFavoritesDropdown = (props: ISearchFavoritesDropdown) => {
    return (
        <div {...props}>
            <Button onClick={() => {}}>[=]</Button>
        </div>
    );
};

export default SearchFavoritesDropdown;