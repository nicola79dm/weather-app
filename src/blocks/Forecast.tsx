import React from 'react';
import moment from 'moment';

function Forecast(props:any) {
    const weather = props.loaded;
    console.log(weather);
    const forecast = weather.weather[0];
    let temperature;
    
    if (weather.main.temp_min < weather.main.temp_max) {
        temperature = Math.round(weather.main.temp_min) + '°-' + Math.round(weather.main.temp_max) + '°';
    } else {
        temperature = Math.round(weather.main.temp_max) + '°';
    }
    temperature = Math.round(weather.main.temp_max) + '°';

    return(
        <div className="text-center mr-4">
            <p className="text-sm">{moment(weather.dt_txt).format('HH')}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.icon}.png`} alt={forecast.description}/>
            <p className="text-sm">
                {temperature}
            </p>
        </div>
    )
}

export default Forecast;