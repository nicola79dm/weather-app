import React from 'react';
import Weather from '../blocks/Weather';

class GetWeather extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            name: '',
            temp: '',
            sky: '',
            perc: '',
            icon: '',
            date: '',
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=3165071&&units=metric&lang=it&appid=982b6cda4132c27cb66476f7c6ec76d0')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const sky = data.weather[0];
            this.setState({
                name: data.name,
                temp: data.main.temp,
                perc: data.main.feels_like,
                sky: sky.description,
                icon: sky.icon,
                date: data.dt
            })



        })
    }

    render() {
        return (
            <Weather loaded={this.state}/>  
        )
    }
}

export default GetWeather;