import React from 'react';
import css from './Vertical.module.scss';
import {IDefaultComponent} from "../../../defaultComponent.interface";

export interface IVertical extends IDefaultComponent {
    medium?: boolean
}

const Vertical = (props: IVertical) => {
    return (
        <div className={[
            css.container,
            props.medium ? css.m : ''
        ].join(' ')}>{ props.children }</div>
    );
};

export default Vertical;