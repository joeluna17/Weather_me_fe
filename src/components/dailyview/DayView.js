import React from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  setWeatherIcon from '../../global/IconSetterHelper';


const Dayviewwrapper = Styled.div`
 flex-flow: column wrap;
 justify-content:space-evenly;
 margin-bottom: 2%;
 width: 200px;
 border: 1px solid black;
 padding:2%;
 border-radius: 8px;
 box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
 background-color:#2c3e50;
 color:white;
`;

const convertDate = (ms) => {
   const convertedDate = new Date(ms)
    return convertedDate.toISOString() 
}


const DayView = (props) => {

    return(
        <Dayviewwrapper>
            <FontAwesomeIcon icon={setWeatherIcon(props.data.icon)} size="2x"/>
            <h6>{convertDate(props.data.time)}</h6> 
            <h6>{props.data.summary}</h6>
            <h3>High: {Math.round(props.data.temperatureMax)}°F</h3>
            <h3>Low: {Math.round(props.data.temperatureMin)}°F</h3>
            <h3>Humidity: {Math.round(props.data.humidity * 100)}%</h3>
        </Dayviewwrapper>
        )
}

export default DayView;