import React, {useMemo, useState} from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from './HoursSlider.module.scss';
import Button from "../../UI/Buttons/Button/Button";
import {useActions, useMySelector} from "../../../hooks/redux.hooks";


const HoursSlider = React.memo(() => {
    const weather = useMySelector((state) => state.weather);
    const {setCurrentWeatherData} = useActions();
    const [selectedTime, setSelectedTime] = useState<number>();

    const currentTimeMarkPosition = useMemo(() => {
        const localTime = weather.current?.location.localtime.split(' ')[1].split(':');

        if (localTime) {
            const [hours, minutes] = localTime;
            return 75 * (+hours + (100 / 60 * +minutes) / 100) - 2.5 - (+hours === 23 ? 5 : 0);
        } else {
            return 0;
        }
    }, [weather.current])

    return (
        <DefaultContainer>
            <div className={css.container}>
                <div className={css.mark} style={{left: currentTimeMarkPosition}}/>
                {
                    weather.current?.forecast.forecastday[0].hour.map((hourWeather) => {
                        return <Button
                            key={hourWeather.time}
                            active
                            className={css.item}
                            always={selectedTime === hourWeather.time_epoch}
                            onClick={() => {
                                setSelectedTime(hourWeather.time_epoch);
                                setCurrentWeatherData(hourWeather);
                            }}
                        >
                            { hourWeather.time.split(' ')[1] }
                        </Button>
                    })
                }
                </div>
        </DefaultContainer>
    );
});

export default HoursSlider;