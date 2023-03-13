import React from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import css from './DefaultContainer.module.scss';

const DefaultContainer = (props: IDefaultComponent) => {
    const { className, ...other } = props;

    return (
        <div className={[className, css.container].join(' ')} {...other}/>
    );
};

export default DefaultContainer;