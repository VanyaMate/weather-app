import React from 'react';
import css from "./DefaultMarkRow.module.scss";
import {IMarkRow} from "../MarkRow";

const DefaultMarkRow = (props: IMarkRow) => {
    return (
        <div className={css.container}>
            <div className={css.before}>{ props.title }</div>
            <div className={css.after}>{ props.value }</div>
        </div>
    );
};

export default DefaultMarkRow;