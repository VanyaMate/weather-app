import React, {useMemo} from 'react';
import ContainerWithTitle, {IContainerWithTitleItem} from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {useMySelector} from "../../../hooks/redux.hooks";

const Visibility = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IContainerWithTitleItem<number>[]>(() => {
        return [
            { a: weather.current?.current.vis_km, b: 'Видимость КМ'},
            { a: weather.current?.current.vis_miles, b: 'Видимость МИЛЬ'},
        ];
    }, [weather])

    return (
        <ContainerWithTitle title={'Видимость'} rows={rows}/>
    );
};

export default Visibility;