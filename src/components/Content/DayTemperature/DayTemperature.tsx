import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const DayTemperature = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: weather.current?.forecast?.forecastday[0]?.day.avgtemp_c, title: 'Средняя °C'},
            { value: weather.current?.forecast?.forecastday[0]?.day.maxtemp_c, title: 'Максимальная °C'},
            { value: weather.current?.forecast?.forecastday[0]?.day.mintemp_c, title: 'Минимальная °C'},
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Дневная температура'} rows={rows}/>
    );
};

export default DayTemperature;