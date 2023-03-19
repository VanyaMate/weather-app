import React from 'react';
import css from "../Content.module.scss";
import BigTemperature from "../BigTemperature/BigTemperature";
import Pressure from "../Pressure/Pressure";
import Precipitation from "../Precipitation/Precipitation";
import Wind from "../Wind/Wind";
import AirQuality from "../AirQuality/AirQuality";
import HoursSlider from "../HoursSlider/HoursSlider";

const CurrentWeather = () => {
    return (
        <div className={css._2_1}>
            <div className={css._2_1__2}>
                <HoursSlider/>
                <div className={css._1_1}>
                    <BigTemperature/>
                    <Pressure/>
                </div>
                <div className={css._1_1}>
                    <Precipitation/>
                    <Wind/>
                </div>
            </div>
            <div className={css._2_1__1}>
                <AirQuality/>
            </div>
        </div>
    );
};

export default CurrentWeather;