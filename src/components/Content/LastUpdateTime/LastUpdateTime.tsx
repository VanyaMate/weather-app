import React from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import {useMySelector} from "../../../hooks/redux.hooks";
import css from './LastUpdateTime.module.scss';

const LastUpdateTime = () => {
    const weather = useMySelector((state) => state.weather);

    // Временный компонент
    return (
        <DefaultContainer className={css.container}>
            <div className={css.text}>Данные обновлены</div>
            <div className={css.time}>
                {weather.current?.current.last_updated.split(' ')[1]}
            </div>
        </DefaultContainer>
    );
};

export default LastUpdateTime;