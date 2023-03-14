import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const AirQuality = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number | string>[]>(() => {
        return [
            { a: weather.current?.current.air_quality["gb-defra-index"].toFixed(0), b: 'Индекс загрязненности'},
            { a: weather.current?.current.air_quality["us-epa-index"].toFixed(0), b: 'Индекс загрязненности EPA'},
            { a: weather.current?.current.air_quality.pm2_5.toFixed(0), b: 'Частицы PM 2.5'},
            { a: weather.current?.current.air_quality.pm10.toFixed(0), b: 'Частицы PM 10'},
            { a: weather.current?.current.air_quality.o3.toFixed(0), b: 'Озон О3'},
            { a: weather.current?.current.air_quality.no2.toFixed(0), b: 'Диоксид азота NO2'},
            { a: weather.current?.current.air_quality.so2.toFixed(0), b: 'Диоксид серы SO2'},
            { a: weather.current?.current.air_quality.co.toFixed(0), b: 'Монооксид углерода CO'},
        ];
    }, [weather])

    return (
        <ContainerWithTitle title={'Качество воздуха'} rows={rows}/>
    );
};

export default AirQuality;