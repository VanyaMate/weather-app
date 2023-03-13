import {useEffect, useState} from "react";

export const useDebounce = function<T> (value: T, delay: number): T {
    const [debounce, setDebounce] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timer);
    }, [value]);

    return debounce;
}