import React from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import css from './MarkRow.module.scss';

export interface IMarkRow extends IDefaultComponent {
    before: string,
    after: string | number,
}

const MarkRow = (props: IMarkRow) => {
    return (
        <div className={css.container}>
            <div className={css.before}>{ props.before }</div>
            <div className={css.after}>{ props.after }</div>
        </div>
    );
};

export default MarkRow;