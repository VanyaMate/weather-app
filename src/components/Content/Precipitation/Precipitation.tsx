import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const Precipitation = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number>[]>(() => {
        return [
            { a: weather.current?.current.cloud, b: 'Облачность %'},
            { a: weather.current?.current.humidity, b: 'Влажность %'},
            { a: weather.current?.current.precip_mm, b: 'Осадки в ММ'},
            { a: weather.current?.current.precip_in, b: 'Осадки в ИНЧ'},
            { a: weather.current?.current.vis_km, b: 'Видимость КМ'},
            { a: weather.current?.current.vis_miles, b: 'Видимость МИЛЬ'},
            { a: weather.current?.current.uv, b: 'UV индекс'},
        ];
    }, [weather.current])

    return (
        <ContainerWithTitle title={'Осадки'} rows={rows}/>
    );
};

export default Precipitation;