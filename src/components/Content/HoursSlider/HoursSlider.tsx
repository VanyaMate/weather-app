import React, {useState} from 'react';
import DefaultContainer from "../../UI/Containers/DefaultContainer/DefaultContainer";
import css from './HoursSlider.module.scss';
import {IDefaultComponent} from "../../defaultComponent.interface";
import * as Weather from "../../../store/weather/weather.interfaces";
import Button from "../../UI/Buttons/Button/Button";
import {useActions} from "../../../hooks/redux.hooks";
import CenterTitle from "../../UI/Titles/CenterTitle/CenterTitle";

export interface IHoursSlider extends IDefaultComponent {
    hours: Weather.HourWeather[]
}

const HoursSlider = React.memo((props: IHoursSlider) => {
    const {setCurrentWeatherData} = useActions();
    const [selectedTime, setSelectedTime] = useState<string>();

    return (
        <DefaultContainer>
            <CenterTitle>Очень примерный прогноз на день</CenterTitle>
            <div className={css.container}>
                {
                    props.hours.map((hourWeather) => {
                        return <Button
                            key={hourWeather.time}
                            active
                            always={selectedTime === hourWeather.time}
                            onClick={() => {
                                setSelectedTime(hourWeather.time);
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