import React, {useEffect, useMemo, useRef, useState} from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from './HoursSlider.module.scss';
import Button from "../../UI/Buttons/Button/Button";
import {useActions, useMySelector} from "../../../hooks/redux.hooks";


const HoursSlider = React.memo(() => {
    const weather = useMySelector((state) => state.weather);
    const {setCurrentWeatherData} = useActions();
    const [selectedTime, setSelectedTime] = useState<number>();
    const container = useRef<HTMLDivElement>(null);

    const localTime = useMemo(() => {
        return weather.current?.location.localtime.split(' ')[1].split(':');
    }, [weather.current])

    // Расчет позиции метки относительно локального времени
    const currentTimeMarkPosition = useMemo(() => {
        if (localTime) {
            const [hours, minutes] = localTime;
            return 75 * (+hours + (100 / 60 * +minutes) / 100) - 2.5 - (+hours === 23 ? 5 : 0);
        } else {
            return 0;
        }
    }, [localTime])

    // Для установки скрола на текущую позицию времени и установки текущего времени
    useEffect(() => {
        if (currentTimeMarkPosition !== 0 && container.current) {
            container.current.scrollLeft = currentTimeMarkPosition - container.current.clientWidth / 2;
            setSelectedTime(weather.current!.location.localtime_epoch);
        }
    }, [currentTimeMarkPosition]);

    return (
        <DefaultContainer>
            <div className={css.container} ref={container}>
                <div className={css.mark} style={{left: currentTimeMarkPosition}} data-time={localTime?.join(':')}/>
                {
                    weather.current?.forecast.forecastday[0].hour.map((hourWeather) => {
                        const [hour, minutes] = hourWeather.time.split(' ')[1].split(':');

                        if (hour !== localTime![0]) {
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
                        } else {
                            return <Button
                                key={hourWeather.time}
                                active
                                className={[
                                    css.item,
                                    css.current,
                                    selectedTime === weather.current?.location.localtime_epoch ? css.active : ''
                                ].join(' ')}
                                onClick={() => {
                                    setSelectedTime(weather.current?.location.localtime_epoch);
                                    setCurrentWeatherData(weather.current!.current);
                                }}
                            >
                                Сейчас
                            </Button>
                        }
                    })
                }
                </div>
        </DefaultContainer>
    );
});

export default HoursSlider;