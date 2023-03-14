import React, {useState} from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import Button from "../../../UI/Buttons/Button/Button";
import DropdownContainer from "../../../UI/Containers/DropdownContainer/DropdownContainer";
import {useMySelector} from "../../../../hooks/redux.hooks";
import Vertical from "../../../UI/Containers/Vertical/Vertical";
import css from './SearchFavoritesDropdown.module.scss';
import SearchDropdownItem from "../SearchInput/SearchDropdown/SearchDropdownItem/SearchDropdownItem";


export interface ISearchFavoritesDropdown extends IDefaultComponent {}

const SearchFavoritesDropdown = (props: ISearchFavoritesDropdown) => {
    const [opened, setOpened] = useState<boolean>(false);
    const search = useMySelector(state => state.search);
    const { className, ...other} = props;

    return (
        <div {...other} className={[className ?? '', css.container].join(' ')}>
            <Button
                active={!!search.savedQueries.queriesList.length}
                always={opened}
                onClick={() => {
                    setOpened(p => !p);
                }}
            >[=]</Button>
            <DropdownContainer opened={opened} className={css.dropdown}>
                <Vertical medium>
                    {
                        search.savedQueries.queriesList.map((item) => {
                            return <SearchDropdownItem key={item.pos} data={item}/>
                        })
                    }
                </Vertical>
            </DropdownContainer>
        </div>
    );
};

export default SearchFavoritesDropdown;