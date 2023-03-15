import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import MarkRow, {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";
import Vertical from "../../UI/Containers/Vertical/Vertical";
import SmallTitle from "../../UI/Titles/SmallTitle/SmallTitle";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";

const Temperature = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            { value: weather.currentData?.temp_c, title: '°C'},
            { value: weather.currentData?.feelslike_c, title: 'ощущается °C'},
            { value: weather.currentData?.temp_f, title: '°F'},
            { value: weather.currentData?.feelslike_f, title: 'ощущается °F'},
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Температура'} rows={rows}/>
    );
};

export default Temperature;