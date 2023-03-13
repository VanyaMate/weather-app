import React from 'react';
import {IDefaultComponent} from "../../defaultComponent.interface";
import css from './DefaultContainer.module.scss';

export interface IDefaultContainer extends IDefaultComponent {}

const DefaultContainer = (props: IDefaultContainer) => {
    const { className, ...other } = props;

    return (
        <div className={[className, css.container].join(' ')} {...other}/>
    );
};

export default DefaultContainer;