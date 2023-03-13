import React from 'react';
import css from './Content.module.scss';
import GeoPosition from "./GeoPosition/GeoPosition";

const Content = React.memo(() => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <GeoPosition/>
            </div>
        </div>
    );
});

export default Content;