import React, {useMemo} from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import ContainerWithTitle from "../../UI/Containers/ContainerWithTitle/ContainerWithTitle";
import {IMarkRow} from "../../UI/Containers/MarkRow/MarkRow";
import {MarkColors} from "../../UI/Containers/MarkRow/PointsMarkRow/MarkColors";

const AirQuality = () => {
    const weather = useMySelector((state) => state.weather);

    const rows = useMemo<IMarkRow[]>(() => {
        return [
            {
                value: weather.currentData?.air_quality["gb-defra-index"].toFixed(0),
                title: 'Индекс загрязненности DEFRA',
                points: [
                    {start: 1, finish: 4, color: MarkColors.GOOD},
                    {start: 4, finish: 6, color: MarkColors.WARNING},
                    {start: 6, finish: 10, color: MarkColors.DANGER},
                ],
                start: 1,
                distance: 10
            },
            {
                value: weather.currentData?.air_quality["us-epa-index"].toFixed(0),
                title: 'Индекс загрязненности EPA',
                points: [
                    {start: 1, finish: 2, color: MarkColors.GOOD},
                    {start: 2, finish: 4, color: MarkColors.WARNING},
                    {start: 4, finish: 6, color: MarkColors.DANGER},
                ],
                start: 1,
                distance: 6
            },
            {
                value: weather.currentData?.air_quality.pm2_5.toFixed(0),
                title: 'Частицы PM 2.5',
                points: [
                    {start: 0, finish: 12, color: MarkColors.GOOD},
                    {start: 12, finish: 35, color: MarkColors.WARNING},
                    {start: 35, finish: 55, color: MarkColors.DANGER},
                    {start: 55, finish: 150, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 150
            },
            {
                value: weather.currentData?.air_quality.pm10.toFixed(0),
                title: 'Частицы PM 10',
                points: [
                    {start: 0, finish: 54, color: MarkColors.GOOD},
                    {start: 54, finish: 154, color: MarkColors.WARNING},
                    {start: 154, finish: 300, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 300
            },
            {
                value: weather.currentData?.air_quality.o3.toFixed(0),
                title: 'Озон О3',
                points: [
                    {start: 0, finish: 80, color: MarkColors.GOOD},
                    {start: 80, finish: 125, color: MarkColors.WARNING},
                    {start: 125, finish: 240, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 240
            },
            {
                value: weather.currentData?.air_quality.no2.toFixed(0),
                title: 'Диоксид азота NO2',
                points: [
                    {start: 0, finish: 70, color: MarkColors.GOOD},
                    {start: 70, finish: 150, color: MarkColors.WARNING},
                    {start: 150, finish: 280, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 280
            },
            {
                value: weather.currentData?.air_quality.so2.toFixed(0),
                title: 'Диоксид серы SO2',
                points: [
                    {start: 0, finish: 70, color: MarkColors.GOOD},
                    {start: 70, finish: 150, color: MarkColors.WARNING},
                    {start: 150, finish: 380, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 380
            },
            {
                value: weather.currentData?.air_quality.co.toFixed(0),
                title: 'Монооксид углерода CO',
                points: [
                    {start: 0, finish: 440, color: MarkColors.GOOD},
                    {start: 440, finish: 940, color: MarkColors.WARNING},
                    {start: 940, finish: 1200, color: MarkColors.DANGER},
                ],
                start: 0,
                distance: 1200
            },
        ];
    }, [weather.currentData])

    return (
        <ContainerWithTitle title={'Качество воздуха'} rows={rows}/>
    );
};

export default AirQuality;