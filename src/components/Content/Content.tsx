import React from 'react';
import css from './Content.module.scss';
import GeoPosition from "./GeoPosition/GeoPosition";
import Temperature from "./Temperature/Temperature";
import Wind from "./Wind/Wind";
import BigTemperature from "./BigTemperature/BigTemperature";
import Visibility from "./Visibility/Visibility";
import Precipitation from "./Precipitation/Precipitation";
import Pressure from "./Pressure/Pressure";
import AirQuality from "./AirQuality/AirQuality";
import {useMySelector} from "../../hooks/redux.hooks";

const Content = React.memo(() => {
    const weather = useMySelector((state) => state.weather);

    return (
        <div className={css.container}>
            <div className={[css.content, weather.loading ? css.loading : ''].join(' ')}>
                <GeoPosition/>
                <div className={css.threeInRow}>
                    <BigTemperature/>
                    <Temperature/>
                    <Pressure/>
                </div>
                <div className={css.threeInRow}>
                    <Precipitation/>
                    <Wind/>
                    <AirQuality/>
                </div>
                <div className={css.threeInRow}>

                </div>
            </div>
        </div>
    );
});

export default Content;