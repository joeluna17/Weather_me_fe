import React from 'react';

const convertDate = (ms) => {
   const convertedDate = new Date(ms)
    return convertedDate.toISOString() 
}


const DayView = (props) => {
    console.log("here tu go" ,convertDate(props.data.time))
    return(
        <div style={{flexFlow:'column wrap', display:'flex', justifyContent:'center', width:'200px', height:'200px'}}>
            <h3>{convertDate(props.data.time)}</h3>
            <h3>{props.data.summary}</h3>
            <h3>High: {Math.round(props.data.temperatureMax)}</h3>
            <h3>Low: {Math.round(props.data.temperatureMin)}</h3>
            <h3>Humidity: {Math.round(props.data.humidity * 100)}</h3>
        </div>
    )
}

export default DayView;