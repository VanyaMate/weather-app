import React from 'react';
import Button from "../../../UI/Buttons/Button/Button";
import {IDefaultComponent} from "../../../defaultComponent.interface";

export interface ISearchAddToFavorites extends IDefaultComponent {}

const SearchAddToFavorites = (props: ISearchAddToFavorites) => {
    return (
        <div {...props}>
            <Button
                onClick={() => {}}
            >+</Button>
        </div>
    );
};

export default SearchAddToFavorites;