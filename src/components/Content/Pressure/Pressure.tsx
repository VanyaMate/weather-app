import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {WEATHER_PRESSURE_MB_TO_MM} from "../../../consts/stats-consts";

const Pressure = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number | string>[]>(() => {
        return [
            { a: ((weather.current?.current.pressure_mb || 0) * WEATHER_PRESSURE_MB_TO_MM).toFixed(0), b: 'Давление в ММ'},
            { a: weather.current?.current.pressure_mb, b: 'Давление в МБ'},
            { a: weather.current?.current.pressure_in, b: 'Давление в ИНЧ'},
        ];
    }, [weather])

    return (
        <ContainerWithTitle title={'Давление'} rows={rows}/>
    );
};

export default Pressure;