import React, {useMemo} from 'react';
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {useMySelector} from "../../../hooks/redux.hooks";
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";

const Visibility = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: weather.currentData?.vis_km, title: 'Видимость КМ'},
            { value: weather.currentData?.vis_miles, title: 'Видимость МИЛЬ'},
            { value: weather.currentData?.uv, title: 'UV индекс'},
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Видимость'} rows={rows}/>
    );
};

export default Visibility;