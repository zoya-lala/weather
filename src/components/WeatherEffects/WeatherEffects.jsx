import React from 'react';
import styles from './styles.module.css';

export const WeatherEffects = ({ weather }) => {
    let weatherClass = '';
    switch (weather) {
        case 'Clear':
            weatherClass = styles.clear;
            break;
        case 'Clouds':
            weatherClass = styles.clouds;
            break;
        case 'Rain':
            weatherClass = styles.rain;
            break;
        case 'Snow':
            weatherClass = styles.snow;
            break;
        case 'Thunderstorm':
            weatherClass = styles.thunder;
            break;
        case 'Haze':
            weatherClass = styles.haze;
            break;
        case 'Fog':
            weatherClass = styles.fog;
            break;
        case 'Mist':
            weatherClass = styles.fog;
            break;
        case 'Smoke':
            weatherClass = styles.smoke;
            break;
        case 'Drizzle':
            weatherClass = styles.rain;
            break;
        default: weatherClass = styles.clear;
    }

    return (
        <div className={`${styles.weatherEffects} ${weatherClass}`}>
            {
                weather === 'Rain' &&
                (
                    <>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                    </>
                )}

            {
                weather === 'Drizzle' &&
                (
                    <>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                        <div className={styles.raindrop}>
                        </div>
                    </>
                )}

            {weather === 'Snow' &&
                (<>
                    <div className={styles.snowflake}></div>
                    <div className={styles.snowflake}></div>
                    <div className={styles.snowflake}></div>
                    <div className={styles.snowflake}></div>
                    <div className={styles.snowflake}></div></>)}
            {weather === 'Clouds' && (
                <>
                    <div className={styles.cloudsContainer}>
                        <div className={`${styles.cloud} ${styles.cloud1}`}></div>
                        <div className={`${styles.cloud} ${styles.cloud2}`}></div>
                    </div>
                </>
            )}
            {weather === 'Thunderstorm' && (
                <>
                    <div className={styles.flash}></div>
                </>
            )}
            {weather === 'Haze' && (
                <>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>

                </>
            )}

            {weather === 'Smoke' && (
                <>
                    <div className={styles.puff}></div>
                    <div className={styles.puff}></div>
                    <div className={styles.puff}></div>
                    <div className={styles.puff}></div>
                    <div className={styles.puff}></div>

                </>
            )}

            {weather === 'Fog' && (
                <>
                    <div className={styles.mist}></div>
                </>
            )}

            {weather === 'Mist' && (
                <>
                    <div className={styles.mist}></div>
                </>
            )}
        </div>);
};

