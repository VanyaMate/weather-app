import React from 'react';
import css from './Content.module.scss';
import GeoPosition from "./GeoPosition/GeoPosition";
import Temperature from "./Temperature/Temperature";
import Wind from "./Wind/Wind";
import BigTemperature from "./BigTemperature/BigTemperature";
import Precipitation from "./Precipitation/Precipitation";
import Pressure from "./Pressure/Pressure";
import AirQuality from "./AirQuality/AirQuality";
import {useMySelector} from "../../hooks/redux.hooks";
import HoursSlider from "./HoursSlider/HoursSlider";

const Content = React.memo(() => {
    const weather = useMySelector((state) => state.weather);

    return (
        <div className={css.container}>
            <div className={[css.content, weather.loading ? css.loading : ''].join(' ')}>
                <GeoPosition/>
                <HoursSlider hours={weather.current?.forecast.forecastday[0].hour || []}/>
                <div className={css._2_1}>
                    <div className={css._2_1__2}>
                        <div className={css._1_1}>
                            <BigTemperature/>
                            <Temperature/>
                        </div>
                        <div className={css._1_1}>
                            <Precipitation/>
                            <Wind/>
                        </div>
                        <div className={css._1_1}>
                            <Pressure/>
                        </div>
                    </div>
                    <div className={css._2_1__1}>
                        <AirQuality/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Content;