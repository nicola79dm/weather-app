import React from 'react';
import moment from 'moment';
import 'moment/locale/it';
import ForecastTable from '../blocks/ForecastTable';

class GetForecast extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            list: {}
        }
    }

    groupBy(objectArray:any, property:string) {
        return objectArray.reduce(function (acc:any, obj:any) {
          //var key = obj[property];
          moment.locale('it');
          let key = moment(obj[property]).format('dddd DD-MM-YYYY');
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=3165071&&units=metric&lang=it&appid=982b6cda4132c27cb66476f7c6ec76d0')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                list: this.groupBy(data.list, 'dt_txt')
            })
        })
    }

    render() {
        return (
            <ForecastTable loaded={this.state}/>  
        )
    }
}

export default GetForecast;