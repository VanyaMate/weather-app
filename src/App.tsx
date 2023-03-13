import React, {useState} from 'react';
import css from './App.module.scss';
import {useLazyDirectQuery} from "./store/weather/weather.api";
import {SECRET_WEATHER_API_KEY} from "./consts/secret";

const App = () => {
    const [value, setValue] = useState<string>('');
    const [dispatchDirect, { isFetching, data }] = useLazyDirectQuery();

    const getDirectByValue = function (value: string) {
        dispatchDirect(`q=${value}&limit=10&appid=${SECRET_WEATHER_API_KEY}`);
    }

    return (
        <div className={css.app}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => getDirectByValue(value)}>Query</button>
            {
                isFetching ? 'Loading..' : ''
            }
            {
                data ? data.map((item, index) => {
                    return <div key={index}>
                        [{item.country}] {(item.local_names && item.local_names['ru']) || item.name} ({item.lat} x {item.lon})
                    </div>
                }) : 'No find'
            }
        </div>
    );
};

export default App;
