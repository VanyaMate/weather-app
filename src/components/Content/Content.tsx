import React from 'react';
import css from './Content.module.scss';
import GeoPosition from "./GeoPosition/GeoPosition";
import {useMySelector} from "../../hooks/redux.hooks";
import HoursSlider from "./HoursSlider/HoursSlider";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DayWeather from "./DayWeather/DayWeather";

const Content = React.memo(() => {
    const weather = useMySelector((state) => state.weather);

    return (
        <div className={css.container}>
            <div className={[css.content, weather.loading ? css.loading : ''].join(' ')}>
                <GeoPosition/>
                <CurrentWeather/>
                <DayWeather/>
            </div>
        </div>
    );
});

export default Content;