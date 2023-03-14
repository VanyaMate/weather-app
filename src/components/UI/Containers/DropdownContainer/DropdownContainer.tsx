import React, {useMemo} from 'react';
import css from './DropdownContainer.module.scss';
import {IDefaultComponent} from "../../../defaultComponent.interface";

export interface IDropdownContainer extends IDefaultComponent {
    opened: boolean
}

const DropdownContainer = (props: IDropdownContainer) => {
    const { opened, className, ...other} = props;

    const clName = useMemo(() => {
        return [
            css.container,
            opened ? css.opened : '',
            className
        ].filter(c => !!c).join(' ');
    }, [opened, className])

    return (
        <div className={clName} {...other}/>
    );
};

export default DropdownContainer;