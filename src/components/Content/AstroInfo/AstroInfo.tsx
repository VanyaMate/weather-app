import React from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import {useMySelector} from "../../../hooks/redux.hooks";
import css from "./AstroInfo.module.scss";

const AstroInfo = () => {
    const weather = useMySelector((state) => state.weather);

    // Временный компонент
    return (
        <DefaultContainer className={css.container}>
            <div className={css.info}>
                <div className={css.text}>Локальное время</div>
                <div className={css.value}>{weather.current?.location.localtime.split(' ')[1]}</div>
            </div>
            <div className={css.message}>
                <img className={css.icon} src={weather.current?.forecast.forecastday[0].day.condition.icon} alt=""/>
                <div className={css.value}>{weather.current?.forecast.forecastday[0].day.condition.text.toLocaleLowerCase()}</div>
            </div>
        </DefaultContainer>
    );
};

export default AstroInfo;