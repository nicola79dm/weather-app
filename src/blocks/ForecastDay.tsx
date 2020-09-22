import React from 'react';
import Forecast from './Forecast';
import moment from 'moment';

function ForecastDay(props:any) {
    const day = props.day;
    const list = props.list;
    const dayName = moment(day, 'dddd DD-MM-YYYY').format('dddd');
    let table:any = [];
    let result;

    list.forEach((element:any) => {
        table.push(<Forecast loaded={element} key={element.dt}/>);
    });
    result = <div className="max-w-md px-6 py-4 bg-opacity-25 rounded shadow-lg bg-white flex overflow-y-auto">{table}</div>

    return(
        <div className="mb-8">
            <h3 className="mb-2 font-display text-xl font-bold text-highlight capitalize">{dayName}</h3>
            {result}
        </div>
    )
}

export default ForecastDay;