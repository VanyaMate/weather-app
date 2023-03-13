import {useMemo, useState} from "react";

export interface IUseInputValue<T> {
    current: T,
    valid: boolean,
    setCurrent: (v: T) => void
}

export const useInputValue = function<T> (defaultValue: T, validator?: (v: T) => boolean): IUseInputValue<T> {
    const [current, setCurrent] = useState<T>(defaultValue);
    const valid = useMemo<boolean>(() => {
        return validator ? validator(current) : true;
    }, [current])

    return { current, valid, setCurrent }
}