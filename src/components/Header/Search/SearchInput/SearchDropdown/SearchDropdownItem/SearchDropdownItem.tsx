import React, {useCallback, useMemo} from 'react';
import css from './SearchDropdownItem.module.scss';
import Button from "../../../../../UI/Buttons/Button/Button";
import {useActions, useMySelector} from "../../../../../../hooks/redux.hooks";
import {ISearchSavedItem} from "../../../../../../store/search/search.slice";

export interface ISearchDropdownItem {
    data: ISearchSavedItem
}

const SearchDropdownItem = React.memo((props: ISearchDropdownItem) => {
    const {setSearchQuery, saveSearchQuery, removeSearchSavedQuery, setSearchGeneralQuery} = useActions();
    const {search} = useMySelector((state) => state);

    const setSearchItem = useCallback(() => {
        setSearchQuery({
            name: props.data.name,
            desc: props.data.desc,
            pos: props.data.pos
        });
    }, [props.data]);

    const selectedItem = useMemo(() => {
        return search.currentQuery.pos === props.data.pos;
    }, [search.currentQuery])

    const savedQuery = useMemo(() => {
        return search.savedQueries.queriesList.some((query) => query.pos === props.data.pos);
    }, [search.savedQueries.queriesList])

    const generalQuery = useMemo(() => {
        return search.savedQueries.general.pos === props.data.pos;
    }, [search.savedQueries.general]);

    const toggleSaveQuery = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (savedQuery) {
            removeSearchSavedQuery(props.data.pos);
        } else {
            saveSearchQuery({
                name: props.data.name,
                desc: props.data.desc,
                pos: props.data.pos
            });
        }
    }, [savedQuery]);

    const setGeneral = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (!generalQuery) {
            setSearchGeneralQuery(props.data);
        }
    }, [generalQuery])

    return (
        <div
            className={[css.item, selectedItem ? css.active : ''].join(' ')}
            onClick={setSearchItem}
        >
            <div className={css.info}>
                <div className={css.name}>{ props.data.name }</div>
                <div className={css.desc}>{ props.data.desc }</div>
            </div>
            <div className={css.control}>
                <Button
                    active
                    always={generalQuery}
                    onClick={setGeneral}
                    className={css.button}
                >
                    G
                </Button>
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