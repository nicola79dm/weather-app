import React from 'react';
import ForecastDay from './ForecastDay';


function ForecastTable(props:any) {
    const list = props.loaded.list;
    let table:any = [];
    let result;

    if (Object.keys(list).length === 0 && list.constructor === Object) {
        result = <p>No Data</p>
    } else {
        for (const day in list) {
            table.push(<ForecastDay day={day} list={list[day]} key={day}/>)
        }

        result = <div>{table}</div>
    }

    return(
        <div>
            {result}
        </div>
    )
}

export default ForecastTable;