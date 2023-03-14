import React, {useMemo} from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import MarkRow from "../../UI/Containers/MarkRow/MarkRow";
import {useMySelector} from "../../../hooks/redux.hooks";
import Vertical from '../../UI/Containers/Vertical/Vertical';
import SmallTitle from "../../UI/Titles/SmallTitle/SmallTitle";
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const Wind = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number | string>[]>(() => {
        return [
            { a: weather.current?.current.wind_mph, b: 'М / С' },
            { a: weather.current?.current.wind_kph, b: 'КМ / Ч' },
            { a: weather.current?.current.wind_degree, b: 'Градус' },
            { a: weather.current?.current.wind_dir, b: 'Направление' },
            { a: weather.current?.current.gust_kph, b: 'Порывы ветра КМ / Ч' },
            { a: weather.current?.current.gust_mph, b: 'Порывы ветра МИЛЬ / Ч' },
        ];
    }, [weather.current])

    return (
        <ContainerWithTitle title={'Ветер'} rows={rows}/>
    );
};

export default Wind;