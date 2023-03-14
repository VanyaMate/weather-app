import React from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import css from './CenterTitle.module.scss';

const CenterTitle = (props: IDefaultComponent) => {
    const { className, ...other } = props;

    return (
        <div {...other} className={[className ?? '', css.container].join(' ')}/>
    );
};

export default CenterTitle;