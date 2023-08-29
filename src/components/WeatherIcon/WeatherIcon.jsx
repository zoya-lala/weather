import React from 'react';
import Clear from '../../assets/images/clear-day.svg';
import Thunderstorm from '../../assets/images/thunderstorms-rain.svg'
import Drizzle from '../../assets/images/drizzle.svg'
import Haze from '../../assets/images/haze.svg'
import Fog from '../../assets/images/fog.svg'
import Rain from '../../assets/images/rain.svg'
import Snow from '../../assets/images/snow.svg'
import Smoke from '../../assets/images/smoke.svg'

export const WeatherIcon = ({ icon }) => {
    let iconPath;
    switch (icon) {
        case 'Thunderstorm':
            iconPath = Thunderstorm;
            break;
        case 'Drizzle':
            iconPath = Drizzle;
            break;
        case 'Rain':
            iconPath = Rain;
            break;
        case 'Snow':
            iconPath = Snow;
            break;
        case 'Clear':
            iconPath = Clear;
            break;
        case 'Clouds':
            iconPath = Fog;
            break;
        case 'Fog':
            iconPath = Fog;
            break;
        case 'Mist':
            iconPath = Fog;
            break;
        case 'Haze':
            iconPath = Haze;
            break;
        case 'Smoke':
            iconPath = Smoke;
            break;
        default:
            iconPath = Clear;
    }

    return <img src={iconPath} alt={icon} className='h-[13rem] mt-[-200px]' />;
};