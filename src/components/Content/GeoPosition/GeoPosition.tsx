import React from 'react';
import {useMySelector} from "../../../hooks/redux.hooks";
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from './GeoPosition.module.scss';
import {convertYandexCoordsToWeatherCoords} from "../../../utils/helpers";

const GeoPosition = () => {
    const search = useMySelector(state => state.search);

    return (
        <DefaultContainer className={css.container}>
            <div className={css.names}>
                <div className={css.city}>{ search.currentQuery.name || ' '}</div>
                <div className={css.country}>{ search.currentQuery.desc || ' ' }</div>
            </div>
            <div className={css.geoPoint}>{
                search.currentQuery.pos
                    ? convertYandexCoordsToWeatherCoords(search.currentQuery.pos.replace(',', ' '))
                    : ' '
            }</div>
        </DefaultContainer>
    );
};

export default GeoPosition;