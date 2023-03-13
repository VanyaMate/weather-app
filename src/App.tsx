import React, {useState} from 'react';
import css from './App.module.scss';
import {useLazyWeatherPointQuery} from "./store/weather/weather.api";
import {useLazyGetPointByNameQuery} from "./store/yandex/yandex.api";

const App = () => {
    const [value, setValue] = useState<string>('');
    const [dispatchDirect, { isFetching: pointFetching, data: weatherData }] = useLazyWeatherPointQuery();
    const [dispatchGetPoint, { isFetching: geoFetching, data: geoData }] = useLazyGetPointByNameQuery()

    const getDirectByValue = function (value: string) {
        dispatchGetPoint(value)
            .then(({ data }) => {
                const pos: string | undefined = data?.response.GeoObjectCollection.featureMember[0]?.GeoObject.Point.pos;
                const validPos = pos ? pos.split(' ') : false;
                if (pos) {
                    return pos.split(' ').reverse().join(',')
                }
                throw new Error('Неправильный запрос');
            })
            .then(dispatchDirect)
            .catch(e => console.log(e));
    }

    return (
        <div className={css.app}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => getDirectByValue(value)}>Query</button>
            {
                (pointFetching || geoFetching) ? 'Loading..' : ''
            }
            {
                weatherData ? <div className={css.item}>
                    {geoData!.response.GeoObjectCollection.featureMember[0].GeoObject.name},
                    {geoData!.response.GeoObjectCollection.featureMember[0].GeoObject.description},
                    Feel like C = {weatherData.current.temp_c},
                    updated: {weatherData.current.last_updated}
                </div> : 'No find'
            }
        </div>
    );
};

export default App;
