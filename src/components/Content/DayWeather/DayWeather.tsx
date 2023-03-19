import React from 'react';
import css from "../Content.module.scss";
import DayForecast from "../DayForecast/DayForecast";
import LocalTime from "../LocalTime/LocalTime";
import DayAirQuality from "../DayAirQuality/DayAirQuality";
import Vertical from "../../UI/Containers/Vertical/Vertical";
import DayTemperature from "../DayTemperature/DayTemperature";

const DayWeather = () => {
    return (
        <>
            <div className={css._2_1}>
                <div className={css._2_1__1}>
                    <LocalTime/>
                </div>
                <div className={css._2_1__2}>
                    <DayForecast/>
                </div>
            </div>
            <div className={css._2_1}>
                <div className={css._2_1__2}>
                    <div className={css._1_1}>
                        <DayTemperature/>
                        <LocalTime/>
                    </div>
                    <div className={css._1_1}>
                        <LocalTime/>
                        <LocalTime/>
                    </div>
                </div>
                <div className={css._2_1__1}>
                    <DayAirQuality/>
                </div>
            </div>
        </>
    );
};

export default DayWeather;