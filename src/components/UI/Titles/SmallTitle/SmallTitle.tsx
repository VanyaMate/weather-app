import React from 'react';
import css from './SmallTitle.module.scss';
import {IDefaultComponent} from "../../../defaultComponent.interface";

const SmallTitle = (props: IDefaultComponent) => {
    return (
        <div className={[props.className ?? '', css.title].join(' ')}>
            { props.children }
        </div>
    );
};

export default SmallTitle;