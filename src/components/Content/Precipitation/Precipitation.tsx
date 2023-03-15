import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";

const Precipitation = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: weather.currentData?.cloud, title: 'Облачность %'},
            { value: weather.currentData?.humidity, title: 'Влажность %'},
            { value: weather.currentData?.precip_mm, title: 'Осадки в ММ'},
            { value: weather.currentData?.precip_in, title: 'Осадки в ИНЧ'},
            { value: weather.currentData?.vis_km, title: 'Видимость КМ'},
            { value: weather.currentData?.vis_miles, title: 'Видимость МИЛЬ'},
            { value: weather.currentData?.uv, title: 'UV индекс'},
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Осадки'} rows={rows}/>
    );
};

export default Precipitation;