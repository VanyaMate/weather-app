import React from 'react';
import Search from "./Search/Search";
import css from './Header.module.scss';

const Header = React.memo(() => {
    return (
        <div className={css.header}>
            <div className={css.content}>
                <Search/>
            </div>
        </div>
    );
});

export default Header;