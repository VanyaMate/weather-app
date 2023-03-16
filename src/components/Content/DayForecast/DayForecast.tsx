import React from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from "../AstroInfo/AstroInfo.module.scss";

const DayForecast = () => {
    const weather = useMySelector((state) => state.weather);

    // Временный компонент
    return (
        <DefaultContainer className={css.container}>
            <div className={css.message}>
                <img className={css.icon} src={weather.current?.forecast.forecastday[0].day.condition.icon} alt=""/>
                <div className={css.text}>Сегодня будет</div>
                <div className={css.value}>{weather.current?.forecast.forecastday[0].day.condition.text.toLocaleLowerCase()}</div>
            </div>
        </DefaultContainer>
    );
};

export default DayForecast;