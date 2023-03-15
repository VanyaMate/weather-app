import React, {useMemo} from 'react';
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const Wind = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: weather.currentData?.wind_mph, title: 'М / С' },
            { value: weather.currentData?.wind_kph, title: 'КМ / Ч' },
            { value: weather.currentData?.wind_degree, title: 'Градус' },
            { value: weather.currentData?.wind_dir, title: 'Направление' },
            { value: weather.currentData?.gust_kph, title: 'Порывы ветра КМ / Ч' },
            { value: weather.currentData?.gust_mph, title: 'Порывы ветра МИЛЬ / Ч' },
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Ветер'} rows={rows}/>
    );
};

export default Wind;