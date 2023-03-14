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

const Content = React.memo(() => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <GeoPosition/>
                <div className={css.threeInRow}>
                    <BigTemperature/>
                    <Temperature/>
                    <Wind/>
                </div>
                <div className={css.threeInRow}>
                    <AirQuality/>
                </div>
                <div className={css.threeInRow}>
                    <Visibility/>
                    <Precipitation/>
                    <Pressure/>
                </div>
            </div>
        </div>
    );
});

export default Content;