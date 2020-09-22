import React from 'react';
import moment from 'moment';
import {} from 'moment-timezone';

// import { WiDayCloudy } from 'weather-icons-react';

function Weather(props:any) {
    const weatherData = props.loaded;
    console.log(weatherData);
    console.log(moment.unix(weatherData.date).format())
    // let icon;

    // https://najens.github.io/weather-icons-react/

    // switch (weatherData.icon) {
    //     case "03d":
    //         icon = <WiDayCloudy size={24} color='#000' />;
    //         break;
    //     default:
    //         icon = '';
    // }

    return (
        <div className="container mb-8">
            <h1 className="font-display text-5xl font-bold text-highlight">Meteo {weatherData.name}</h1>
            <h2 className="font-display text-3xl font-bold">Situazione attuale</h2>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                
                <div className="px-6 py-4">
                    <div className="grid grid-cols-3 text-center text-sm divide-x">
                        <div>{moment.unix(weatherData.date).format('dddd')}</div>
                        <div>{moment.unix(weatherData.date).format('DD MMM')}</div>
                        <div>{moment.unix(weatherData.date).format('HH:MM')}</div>
                    </div>
                    <div className="flex items-start justify-center">
                        <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                            alt={weatherData.sky} title={weatherData.sky} />
                        <div className="w-1/2">
                            <p className="text-6xl">{Math.round(weatherData.temp)}°</p>
                            <p className="text-xs">percepita {Math.round(weatherData.perc)}°</p>
                            <p>{weatherData.sky}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;