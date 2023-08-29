import React, { useEffect, useState } from 'react'
import { WeatherIcon } from '../WeatherIcon';
import { key, base } from "../../apiKey";
import { useLocation } from 'react-router-dom';
import { faTachometerAlt, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherEffects } from '../WeatherEffects';

export const Weather = () => {

    const location = useLocation();
    const { weatherData } = location.state;
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    const timeString = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // const [weatherData, setWeatherData] = useState(null);

    if (weatherData) {
        console.log(weatherData);
    }

    // Convert temperature from Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }

    return (
        //page
        <div className="flex justify-center items-center h-screen bg-image-2 bg-cover">            {/* card */}
            <div className="p-4 shadow rounded h-[36rem] w-[55rem]">
                <div className="flex">
                    {/* first flex --------------------------------------------*/}
                    <div className="w-3/5 h-[34rem] flex flex-col pr-4 relative ">
                        <WeatherEffects weather={weatherData.weather[0].main} />
                        {/* Add a class to the other content in the left flex */}
                        <div className="relative z-40">
                            {/* <div className="flex-grow"></div> */}
                            {/* Display city name */}
                            {weatherData && (
                                <div className="text-right text-black mt-3 font-medium">
                                    <p className="text-3xl">{weatherData.name}</p>
                                </div>
                            )}
                            <div className="text-left text-black ml-4 mb-4 flex flex-col justify-end h-full mt-[10rem] ">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-5xl">{timeString}</p>
                                        <p className="text-3xl">{dateString}</p>
                                    </div>

                                    {/* Display temperature */}
                                    {weatherData && (
                                        <div className="flex items-center">
                                            <p className="text-6xl">{kelvinToCelsius(weatherData.main.temp)}°</p>
                                            <p className="text-4xl ml-2 mt-4">C</p>
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------- */}
                    <div className="bg-black bg-opacity-10 w-2/5 h-[34rem] flex justify-center flex-col items-center backdrop-blur-md">
                        {weatherData && (
                            <>
                                <WeatherIcon icon={weatherData.weather[0].main} />
                                <p className="text-white font-semibold text-4xl mt-0 text-center">{weatherData.weather[0].main}</p>
                                <hr className="w-[17rem] border-t border-white-500 mt-3 mb-4 ml-2 " />
                                {/* ------------------------wind--------------- */}
                                <div className="flex flex-col">
                                    <div className="flex items-center mx-4">
                                        <FontAwesomeIcon icon={faWind} className="text-white text-1xl mt-2 mr-2" />
                                        <p className="text-white text-xl mt-2 mr-3 font-medium">Wind  </p>
                                        <p className="text-white text-xl mt-2"> {weatherData.wind.speed} m/s</p>
                                    </div>
                                    {/* precipitation */}
                                    <div className="flex items-center mx-4">
                                        <FontAwesomeIcon icon={faTint} className="text-white text-1xl mt-2 mr-3" />
                                        <p className="text-white text-xl mt-2 mr-3 font-medium">Precipitation</p>
                                        <p className="text-white text-xl mt-2">{weatherData.rain ? weatherData.rain["1h"] : 0} mm</p>
                                    </div>
                                    {/* humidity */}
                                    <div className="flex items-center mx-4">
                                        <FontAwesomeIcon icon={faTachometerAlt} className="text-white text-xl mt-2 mr-2 w-4" />
                                        <p className="text-white text-xl mt-2 mr-3 font-medium">Humidity</p>
                                        <p className="text-white text-xl mt-2">{weatherData.main.humidity}%</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

