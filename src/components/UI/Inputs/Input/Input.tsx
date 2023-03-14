import React, {useMemo} from 'react';
import css from './Input.module.scss';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import {IUseInputValue} from "../../../../hooks/useInputValue.hook";

export interface IInput extends IDefaultComponent{
    type?: string,
    onFocus?: () => void,
    onBlur?: () => void
    placeholder?: string,
    hook: IUseInputValue<string>,
}

const Input = React.memo((props: IInput) => {
    const className = useMemo(() => {
        return [
            css.input,
            props.className,
            props.hook.valid ? css.valid : css.invalid
        ].filter(c => !!c).join(' ')
    }, [props.className, props.hook.valid])

    return (
        <input
            style={props.style}
            type={props.type ?? 'text'}
            className={className}
            value={props.hook.current}
            placeholder={props.placeholder}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onChange={(e) => props.hook.setCurrent(e.target.value)}
        />
    );
});

export default Input;