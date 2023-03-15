import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {WEATHER_PRESSURE_MB_TO_MM} from "../../../consts/stats-consts";
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";

const Pressure = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: +((weather.currentData?.pressure_mb || 0) * WEATHER_PRESSURE_MB_TO_MM).toFixed(0), title: 'Давление в ММ' },
            { value: weather.currentData?.pressure_mb, title: 'Давление в МБ'},
            { value: weather.currentData?.pressure_in, title: 'Давление в ИНЧ'},
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Давление'} rows={rows}/>
    );
};

export default Pressure;