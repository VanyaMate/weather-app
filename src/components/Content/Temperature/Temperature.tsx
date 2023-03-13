import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import MarkRow from "../../UI/Containers/MarkRow/MarkRow";
import Vertical from "../../UI/Containers/Vertical/Vertical";
import SmallTitle from "../../UI/Titles/SmallTitle/SmallTitle";
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const Temperature = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number>[]>(() => {
        return [
            { a: weather.current?.current.temp_c, b: '°C'},
            { a: weather.current?.current.feelslike_c, b: 'ощущается °C'},
            { a: weather.current?.current.temp_f, b: '°F'},
            { a: weather.current?.current.feelslike_f, b: 'ощущается °F'},
        ];
    }, [weather])

    return (
        <ContainerWithTitle title={'Температура'} rows={rows}/>
    );
};

export default Temperature;