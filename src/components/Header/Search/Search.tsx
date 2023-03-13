import React from 'react';
import SearchInput from "./SearchInput/SearchInput";
import SearchAddToFavorites from "./SearchAddToFavorites/SearchAddToFavorites";
import css from './Search.module.scss';
import SearchFavoritesDropdown from "./SearchFavorites/SearchFavoritesDropdown";

const Search = () => {
    return (
        <div className={css.container}>
            <SearchInput className={css.input}/>
            <div className={css.buttons}>
                <SearchAddToFavorites className={css.addButton}/>
                <SearchFavoritesDropdown className={css.openButton}/>
            </div>
        </div>
    );
};

export default Search;