import React from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/DefaultContainer/DefaultContainer";
import css from './GeoPosition.module.scss';
import {convertYandexCoordsToWeatherCoords} from "../../../utils/helpers";

const GeoPosition = () => {
    const yandex = useMySelector(state => state.yandex);

    return (
        <DefaultContainer className={css.container}>
            <div className={css.names}>
                <div className={css.city}>{ yandex.current?.name || 'City'}</div>
                <div className={css.country}>{ yandex.current?.description || 'Country' }</div>
            </div>
            <div className={css.geoPoint}>{
                yandex.current
                    ? convertYandexCoordsToWeatherCoords(yandex.current.Point.pos).replace(',', ' ')
                    : '00.000000 00.000000'
            }</div>
        </DefaultContainer>
    );
};

export default GeoPosition;