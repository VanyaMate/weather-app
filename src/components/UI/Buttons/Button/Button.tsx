import React, {MouseEventHandler, ReactEventHandler, useMemo} from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import css from './Button.module.scss';

export interface IButton extends IDefaultComponent {
    active?: boolean,
    always?: boolean,
    loading?: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: IButton) => {
    const className = useMemo(() => {
        return [
            css.button,
            props.active ? css.active : '',
            props.always ? css.always : '',
            props.loading ? css.loading : '',
            props.className
        ].filter(c => !!c).join(' ');
    }, [props.active, props.always, props.loading, props.className])

    return (
        <button
            style={props.style}
            className={className}
            onClick={props.onClick}
        >
            { props.children }
        </button>
    );
};

export default Button;