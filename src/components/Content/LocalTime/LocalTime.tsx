import React from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from "../LastUpdateTime/LastUpdateTime.module.scss";

const LocalTime = () => {
    const weather = useMySelector((state) => state.weather);

    // Временный компонент
    return (
        <DefaultContainer className={css.container}>
            <div className={css.row}>
                <div className={css.text}>Локальное время</div>
                <div className={css.time}>
                    {weather.current?.location.localtime.split(' ')[1]}
                </div>
            </div>
            <div className={css.row}>
                <div className={css.text}>Данные от</div>
                <div className={css.time}>
                    {weather.current?.current.last_updated.split(' ')[1]}
                </div>
            </div>
        </DefaultContainer>
    );
};

export default LocalTime;