import React from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from './BigTemperature.module.scss';

const BigTemperature = () => {
    const weather = useMySelector((state) => state.weather);

    return (
        <DefaultContainer className={css.container}>
            <div className={css.icon}>
                <img src={weather.current?.current.condition.icon}/>
            </div>
            <div className={css.desc}>
                {weather.current?.current.condition.text}
            </div>
            <div className={css.temperature}>
                {weather.current?.current.temp_c} °C
            </div>
            <div className={css.feels}>
                ощущается как <span>{weather.current?.current.feelslike_c} °C</span>
            </div>
        </DefaultContainer>
    );
};

export default BigTemperature;